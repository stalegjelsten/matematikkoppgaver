const { parse } = require("node-html-parser");

// Mapper pandoc-bredde (0–60%) til display-bredde (0–100%)
function scaleWidth(pandocPct) {
  return Math.min(100, (pandocPct * 100) / 60);
}

module.exports = function (content) {
  if (
    !this.page.inputPath ||
    !this.page.inputPath.endsWith(".md") ||
    !this.page.outputPath ||
    !this.page.outputPath.endsWith(".html")
  ) {
    return content;
  }
  if (!content || (!content.includes("<img") && !content.includes("fig:"))) {
    return content;
  }

  const root = parse(content);
  let figureCount = 0;
  const labels = {};

  for (const img of root.querySelectorAll("img")) {
    // Skaler width-attributt fra pandoc-prosent til display-prosent
    const rawWidth = img.getAttribute("width");
    const widthMatch = rawWidth && rawWidth.match(/^([\d.]+)%$/);
    if (widthMatch) {
      const displayPct = scaleWidth(parseFloat(widthMatch[1]));
      img.removeAttribute("width");
      const existing = img.getAttribute("style") || "";
      img.setAttribute(
        "style",
        `${existing}width: ${displayPct.toFixed(1)}%; max-width: 100%;`
      );
    }

    // Pakk inn i <figure> hvis bildet har id="fig:LABEL"
    const labelId = img.getAttribute("id");
    if (!labelId || !labelId.startsWith("fig:")) continue;

    figureCount++;
    labels[labelId] = figureCount;

    const altText = img.getAttribute("alt") || "";
    const captionText = altText
      ? `Figur ${figureCount}: ${altText}`
      : `Figur ${figureCount}`;

    img.removeAttribute("id");

    // Erstatt evt. <p>-wrapper hvis den bare inneholder dette bildet
    const parent = img.parentNode;
    const isAloneInP =
      parent &&
      parent.tagName === "P" &&
      parent.childNodes.filter((n) => n.rawText?.trim()).length <= 1;

    const figureHtml = `<figure id="${labelId}" class="image-figure">${img.outerHTML}<figcaption>${captionText}</figcaption></figure>`;
    const figure = parse(figureHtml).querySelector("figure");

    if (isAloneInP) {
      parent.replaceWith(figure);
    } else {
      img.replaceWith(figure);
    }
  }

  // Erstatt referanser på formen &fig:label eller &amp;fig:label
  function replaceRefs(node) {
    if (node.nodeType === 3) {
      const text = node.rawText;
      if (!text.includes("fig:")) return;
      const newText = text.replace(
        /(?:&|&amp;)fig:([\w-]+)/g,
        (match, labelName) => {
          const fullLabel = `fig:${labelName}`;
          if (labels[fullLabel] !== undefined) {
            return `<a href="#${fullLabel}" class="fig-ref">${labels[fullLabel]}</a>`;
          }
          return match;
        }
      );
      if (newText !== text) {
        const tempRoot = parse(`<span>${newText}</span>`);
        const newNodes = tempRoot.firstChild.childNodes;
        const parent = node.parentNode;
        if (parent) {
          const index = parent.childNodes.indexOf(node);
          if (index !== -1) {
            parent.childNodes.splice(index, 1, ...newNodes);
            newNodes.forEach((n) => (n.parentNode = parent));
          }
        }
      }
    } else if (
      node.childNodes &&
      node.tagName !== "SCRIPT" &&
      node.tagName !== "STYLE"
    ) {
      [...node.childNodes].forEach(replaceRefs);
    }
  }

  replaceRefs(root);

  return root.toString();
};

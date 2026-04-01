const { parse } = require("node-html-parser");

module.exports = function (content) {
  if (
    !this.page.inputPath ||
    !this.page.inputPath.endsWith(".md") ||
    !this.page.outputPath ||
    !this.page.outputPath.endsWith(".html")
  ) {
    return content;
  }

  const root = parse(content);
  let tableCount = 0;
  const labels = {};

  const paragraphs = root.querySelectorAll(".cm-s-obsidian p");

  for (const p of paragraphs) {
    const rawText = p.rawText.trim();
    if (!rawText.startsWith("Table:")) continue;

    // Finn naboelementet som er en tabell (forrige eller neste søsken)
    let tableWrapper = null;
    const next = p.nextElementSibling;
    const prev = p.previousElementSibling;

    if (
      next &&
      (next.tagName === "TABLE" || next.classList.contains("table-wrapper"))
    ) {
      tableWrapper = next;
    } else if (
      prev &&
      (prev.tagName === "TABLE" || prev.classList.contains("table-wrapper"))
    ) {
      tableWrapper = prev;
    }

    if (!tableWrapper) continue;

    const table =
      tableWrapper.tagName === "TABLE"
        ? tableWrapper
        : tableWrapper.querySelector("table");
    if (!table) continue;

    // Tittel = tekst etter "Table:" (markdown-it-attrs kan ha fjernet {..} fra teksten)
    let title = rawText.replace(/^Table:\s*/, "").trim();

    // Håndter også {..}-blokk som evt. fortsatt er i teksten
    const braceMatch = title.match(/^(.*?)\s*\{([^}]*)\}\s*$/s);
    const extraClasses = [];
    let insetValue = null;
    let labelId = null;

    if (braceMatch) {
      title = braceMatch[1].trim();
      const attrs = braceMatch[2];
      for (const m of attrs.matchAll(/\.([\w-]+)/g)) extraClasses.push(m[1]);
      const idMatch = attrs.match(/#(tbl:[\w-]+)/);
      if (idMatch) labelId = idMatch[1];
      const insetMatch = attrs.match(/inset=([\w.%-]+)/);
      if (insetMatch) insetValue = insetMatch[1];
    }

    // Klasser som markdown-it-attrs allerede har lagt på <p>-elementet
    for (const cls of ["grid", "tall", "noborders"]) {
      if (p.classList.contains(cls)) extraClasses.push(cls);
    }

    // Id satt av markdown-it-attrs på <p>
    if (!labelId) {
      const pId = p.getAttribute("id");
      if (pId && pId.startsWith("tbl:")) labelId = pId;
    }

    // inset-attributt satt av markdown-it-attrs på <p>
    if (!insetValue) {
      const pInset = p.getAttribute("inset");
      if (pInset) insetValue = pInset;
    }

    // Legg klasser på <table>
    for (const cls of extraClasses) {
      table.classList.add(cls);
    }

    // Legg inset som CSS-variabel
    if (insetValue) {
      const existing = table.getAttribute("style") || "";
      table.setAttribute("style", `${existing}--table-inset: ${insetValue};`);
    }

    // Nummerering (kun for tabeller med #tbl:label)
    if (labelId) {
      tableCount++;
      labels[labelId] = tableCount;
    }

    // Bygg bildetekst
    let captionText = "";
    if (labelId) {
      captionText = title
        ? `Tabell ${labels[labelId]}: ${title}`
        : `Tabell ${labels[labelId]}`;
    } else {
      captionText = title;
    }

    // Bygg <figure>
    const figId = labelId ? ` id="${labelId}"` : "";
    const tableHtml = tableWrapper.outerHTML;
    const figureHtml = captionText
      ? `<figure class="table-figure"${figId}><figcaption>${captionText}</figcaption>${tableHtml}</figure>`
      : `<figure class="table-figure"${figId}>${tableHtml}</figure>`;

    const figure = parse(figureHtml).querySelector("figure");
    tableWrapper.replaceWith(figure);
    p.remove();
  }

  // Erstatt referanser på formen &tbl:label eller &amp;tbl:label
  function replaceRefs(node) {
    if (node.nodeType === 3) {
      const text = node.rawText;
      if (!text.includes("tbl:")) return;
      const newText = text.replace(
        /(?:&|&amp;)tbl:([\w-]+)/g,
        (match, labelName) => {
          const fullLabel = `tbl:${labelName}`;
          if (labels[fullLabel] !== undefined) {
            return `<a href="#${fullLabel}" class="tbl-ref">${labels[fullLabel]}</a>`;
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

const { parse } = require("node-html-parser");

module.exports = function (content) {
  // Only apply to HTML files generated from Markdown
  if (!this.page.inputPath || !this.page.inputPath.endsWith(".md") || !this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
    return content;
  }

  const root = parse(content);
  let equationCount = 0;
  const labels = {};

  // Find all elements with an ID starting with eq:
  const taggedElements = root.querySelectorAll('[id^="eq:"]');

  for (const el of taggedElements) {
    const label = el.getAttribute("id");
    
    // Find the math container associated with this label
    let mathBlock = null;
    let mathBlockInsideEl = false;
    
    // 1. Check if the element itself is a math container
    if (el.classList && el.classList.contains("math") && el.classList.contains("display")) {
      mathBlock = el;
    } else {
      // 2. Check if there's a math container inside the element
      mathBlock = el.querySelector("div.math.display");
      if (mathBlock) {
          mathBlockInsideEl = true;
      }

      if (!mathBlock) {
        // 3. Look at previous siblings (up to 2 steps to handle newlines/paragraphs)
        let prev = el.previousElementSibling;
        let steps = 0;
        while (prev && steps < 3) {
          if (prev.classList && prev.classList.contains("math") && prev.classList.contains("display")) {
            mathBlock = prev;
            break;
          }
          const inner = prev.querySelector("div.math.display");
          if (inner) {
            mathBlock = inner;
            break;
          }
          if (prev.getAttribute("id") && prev.getAttribute("id").startsWith("eq:")) break;
          if (prev.tagName.match(/^H\d$/)) break;
          if (prev.classList && prev.classList.contains("numbered-equation")) break;
          
          prev = prev.previousElementSibling;
          steps++;
        }
      }
    }

    if (mathBlock) {
      equationCount++;
      labels[label] = equationCount;

      // Create wrapper
      const wrapperTemplate = `
        <div id="${label}" class="numbered-equation">
          <div class="eq-content"></div>
          <div class="eq-number">(${equationCount})</div>
        </div>
      `;
      const wrapper = parse(wrapperTemplate).querySelector(".numbered-equation");
      const contentDiv = wrapper.querySelector(".eq-content");
      
      contentDiv.innerHTML = mathBlock.outerHTML;
      
      const parent = el.parentNode;
      mathBlock.replaceWith(wrapper);
      
      if (mathBlockInsideEl) {
          el.removeAttribute("id");
      } else if (el.parentNode) {
          el.remove();
          if (parent && parent.childNodes.length === 0) {
              parent.remove();
          }
      }
    }
  }

  // Replace references like &eq:label or &amp;eq:label
  function replaceRefs(node) {
    if (node.nodeType === 3) { // Text node
      const text = node.rawText;
      if (text.includes("eq:")) {
        const newText = text.replace(/(?:&|&amp;)eq:([\w-]+)/g, (match, labelName) => {
          const fullLabel = `eq:${labelName}`;
          if (labels[fullLabel]) {
            return `<a href="#${fullLabel}" class="eq-ref">${labels[fullLabel]}</a>`;
          }
          return match;
        });
        if (newText !== text) {
          const tempRoot = parse(`<span>${newText}</span>`);
          const newNodes = tempRoot.firstChild.childNodes;
          const parent = node.parentNode;
          if (parent) {
            const index = parent.childNodes.indexOf(node);
            if (index !== -1) {
              parent.childNodes.splice(index, 1, ...newNodes);
              newNodes.forEach(n => n.parentNode = parent);
            }
          }
        }
      }
    } else if (node.childNodes && node.tagName !== "SCRIPT" && node.tagName !== "STYLE") {
      [...node.childNodes].forEach(replaceRefs);
    }
  }

  replaceRefs(root);

  return root.toString();
};

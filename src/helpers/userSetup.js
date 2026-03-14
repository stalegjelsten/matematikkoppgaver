function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // Line numbers support: add "ln" to the info string, e.g. ```python ln
  const origFenceRule =
    md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options, env, self);
    };
  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const infoParts = token.info.trim().split(/\s+/);
    const lang = infoParts[0];
    const showLineNumbers = infoParts.includes("ln");
    if (showLineNumbers) {
      const escapeHtml = (str) =>
        str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      const lines = token.content.split("\n");
      if (lines[lines.length - 1] === "") lines.pop();
      const numberedLines = lines
        .map((line) => `<span class="line">${escapeHtml(line)}</span>`)
        .join("\n");
      return `<pre class="line-numbers"><code class="language-${lang || "text"}">${numberedLines}\n</code></pre>`;
    }
    return origFenceRule(tokens, idx, options, env, slf);
  };
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // Normalize a value to an array (handles string, array, null/undefined)
  eleventyConfig.addFilter("toArray", function(val) {
    if (!val) return [];
    return Array.isArray(val) ? val : [val];
  });

  // Returns all oppgaver in collection that share at least one fag with the given fag value(s)
  eleventyConfig.addFilter("oppgaverIFag", function(collection, fag) {
    const fagArray = Array.isArray(fag) ? fag : [fag];
    return collection.filter(p => {
      const ptags = p.data.tags || [];
      if (!ptags.includes("oppgave")) return false;
      const pfag = Array.isArray(p.data.fag) ? p.data.fag : [p.data.fag];
      return fagArray.some(f => pfag.includes(f));
    });
  });

  // Returns all published oppgaver with the given tema, excluding the current page by title
  eleventyConfig.addFilter("oppgaverMedTema", function(collection, tema, excludeTitle) {
    return collection.filter(p => {
      if (p.data.title === excludeTitle) return false;
      if (!p.data["dg-publish"]) return false;
      const ptemaer = Array.isArray(p.data.temaer) ? p.data.temaer : [p.data.temaer];
      return ptemaer.includes(tema);
    });
  });

  // Returns a semi-random slice of `count` items from arr, seeded by `seed`
  eleventyConfig.addFilter("semiRandomSlice", function(arr, seed, count) {
    if (!count) count = 3;
    const n = arr.length;
    if (n <= count) return arr;
    const modBase = Math.max(1, n - 4);
    const start = seed % modBase;
    return arr.slice(start, start + count);
  });

  // Returns [{key, rows}] for published oppgaver in fag, grouped by eksamen, sorted year desc / letter asc
  eleventyConfig.addFilter("fagOppgaverGruppertPåEksamen", function(collection, fag) {
    const fagArray = Array.isArray(fag) ? fag : [fag];
    const oppgaver = collection.filter(p => {
      const ptags = p.data.tags || [];
      if (!ptags.includes("oppgave")) return false;
      if (!p.data["dg-publish"]) return false;
      if (!p.data.eksamen || Array.isArray(p.data.eksamen)) return false;
      const pfag = Array.isArray(p.data.fag) ? p.data.fag : [p.data.fag];
      return fagArray.some(f => pfag.includes(f));
    });
    const groups = {};
    for (const p of oppgaver) {
      const key = p.data.eksamen;
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    }
    return Object.entries(groups)
      .map(([key, rows]) => ({ key, rows }))
      .sort((a, b) => {
        const yearDiff = parseInt(b.key.slice(-2), 10) - parseInt(a.key.slice(-2), 10);
        return yearDiff !== 0 ? yearDiff : a.key.charAt(0).localeCompare(b.key.charAt(0));
      });
  });

  // Returns [{key, rows}] for published løsningsforslag in fag, grouped by eksamen, sorted year desc / letter asc
  eleventyConfig.addFilter("løsningsforslagGruppertPåEksamen", function(collection, fag) {
    const fagArray = Array.isArray(fag) ? fag : [fag];
    const løsninger = collection.filter(p => {
      const ptags = p.data.tags || [];
      if (!ptags.includes("løsningsforslag")) return false;
      if (!p.data["dg-publish"]) return false;
      const pfag = Array.isArray(p.data.fag) ? p.data.fag : [p.data.fag];
      return fagArray.some(f => pfag.includes(f));
    });
    const groups = {};
    for (const p of løsninger) {
      const key = p.data.eksamen || "Ukjent";
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    }
    return Object.entries(groups)
      .map(([key, rows]) => ({ key, rows }))
      .sort((a, b) => {
        const yearDiff = parseInt(b.key.slice(-2), 10) - parseInt(a.key.slice(-2), 10);
        return yearDiff !== 0 ? yearDiff : a.key.charAt(0).localeCompare(b.key.charAt(0));
      });
  });

  // Returns [{key, rows}] for published oppgaver in fag, grouped by tema, sorted alphabetically
  eleventyConfig.addFilter("fagOppgaverGruppertPåTema", function(collection, fag) {
    const fagArray = Array.isArray(fag) ? fag : [fag];
    const oppgaver = collection.filter(p => {
      const ptags = p.data.tags || [];
      if (!ptags.includes("oppgave")) return false;
      if (!p.data["dg-publish"]) return false;
      const pfag = Array.isArray(p.data.fag) ? p.data.fag : [p.data.fag];
      return fagArray.some(f => pfag.includes(f));
    });
    const groups = {};
    for (const p of oppgaver) {
      const ptemaer = Array.isArray(p.data.temaer) ? p.data.temaer : [p.data.temaer];
      for (const tema of ptemaer) {
        if (!tema) continue;
        if (!groups[tema]) groups[tema] = [];
        groups[tema].push(p);
      }
    }
    return Object.entries(groups)
      .map(([key, rows]) => ({ key, rows: rows.sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "")) }))
      .sort((a, b) => a.key.localeCompare(b.key));
  });

  eleventyConfig.addCollection("unikeTemaer", function(collectionApi) {
    const temaSet = new Set();
    collectionApi.getAll().forEach(p => {
      const ptags = p.data.tags || [];
      if (!ptags.includes("oppgave")) return;
      const ptemaer = Array.isArray(p.data.temaer) ? p.data.temaer : [p.data.temaer];
      ptemaer.forEach(t => { if (t) temaSet.add(t); });
    });
    return [...temaSet].sort();
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;

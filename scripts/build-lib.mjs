import { build } from 'esbuild';
import { mkdir, copyFile, cp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const libDir = path.join(root, 'src/site/lib');
const nm = path.join(root, 'node_modules');

if (existsSync(libDir)) await rm(libDir, { recursive: true });
await mkdir(libDir, { recursive: true });

await build({
    entryPoints: [path.join(root, 'src/site/scripts/graph-deps.entry.js')],
    bundle: true,
    format: 'esm',
    minify: true,
    outfile: path.join(libDir, 'graph-deps.js'),
});

const copies = [
    ['pixi.js/dist/pixi.min.js', 'pixi.min.js'],
    ['alpinejs/dist/cdn.min.js', 'alpine.min.js'],
    ['@alpinejs/persist/dist/cdn.min.js', 'alpine-persist.min.js'],
    ['flexsearch/dist/flexsearch.bundle.js', 'flexsearch.bundle.js'],
    ['prismjs/prism.js', 'prism/prism.min.js'],
    ['prismjs/themes/prism-okaidia.min.css', 'prism/prism-okaidia.min.css'],
    ['prismjs/plugins/autoloader/prism-autoloader.min.js', 'prism/prism-autoloader.min.js'],
    ['luxon/build/global/luxon.min.js', 'luxon.min.js'],
];

for (const [src, dest] of copies) {
    const out = path.join(libDir, dest);
    await mkdir(path.dirname(out), { recursive: true });
    await copyFile(path.join(nm, src), out);
}

await cp(path.join(nm, 'prismjs/components'), path.join(libDir, 'prism/components'), {
    recursive: true,
    filter: (src) => {
        const name = path.basename(src);
        if (!name.includes('.')) return true;
        return name.endsWith('.min.js');
    },
});

console.log('lib/ vendor files built');

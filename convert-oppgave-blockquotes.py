#!/usr/bin/env python3
"""
Konverterer alle plain blockquotes (ikke callouts) i Obsidian-markdown-filer
til >[!oppgave] callouts.

Callouts (starter med >[!) hoppes over.
Kjøres kun på filer i Obsidian-vaulten.
"""

import re
import sys
from pathlib import Path

CALLOUT_LINE = re.compile(r'^\[!')


def convert_file(path: Path, dry_run: bool = False) -> bool:
    """Returns True if file was modified."""
    original = path.read_text(encoding="utf-8")
    lines = original.splitlines(keepends=True)

    result = []
    i = 0
    changed = False

    while i < len(lines):
        line = lines[i]
        # Strip '>' prefix to check the content of the first blockquote line
        if line.startswith('>'):
            # Collect the whole blockquote block (consecutive lines starting with >)
            block_lines = []
            while i < len(lines) and lines[i].startswith('>'):
                block_lines.append(lines[i])
                i += 1

            # Check first line's content after the leading >
            first_content = block_lines[0][1:].lstrip()  # strip '>' and optional space

            if CALLOUT_LINE.match(first_content):
                # Already a callout — leave untouched
                result.extend(block_lines)
            else:
                # Plain blockquote — convert to oppgave callout
                result.append('>[!oppgave]\n')
                result.extend(block_lines)
                changed = True
        else:
            result.append(line)
            i += 1

    if not changed:
        return False

    new_content = ''.join(result)
    if dry_run:
        print(f"\n=== WOULD modify: {path.name} ===")
        orig_lines = original.splitlines()
        new_lines = new_content.splitlines()
        for j, (o, n) in enumerate(zip(orig_lines, new_lines)):
            if o != n:
                print(f"  line {j+1}: {o!r}  →  {n!r}")
        if len(new_lines) > len(orig_lines):
            print(f"  + {len(new_lines) - len(orig_lines)} new line(s) inserted")
    else:
        path.write_text(new_content, encoding="utf-8")
        print(f"Modified: {path.name}")

    return True


def main():
    dry_run = '--dry-run' in sys.argv
    paths = [p for p in sys.argv[1:] if not p.startswith('--')]

    if not paths:
        print("Usage: convert-oppgave-blockquotes.py [--dry-run] <file1> <file2> ...")
        sys.exit(1)

    modified = 0
    for p in paths:
        path = Path(p)
        if path.suffix != '.md':
            continue
        if convert_file(path, dry_run=dry_run):
            modified += 1

    print(f"\n{'Would modify' if dry_run else 'Modified'} {modified} file(s).")


if __name__ == '__main__':
    main()

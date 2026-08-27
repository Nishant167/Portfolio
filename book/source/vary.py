#!/usr/bin/env python3
"""Reduce monotony of 'specific' as a verbal tic by varying roughly every
other occurrence with a synonym, across all part-*.md source files."""
import glob
import re

files = sorted(f for f in glob.glob("part-*.md") if "manuscript_body" not in f)

SUBS = {
    "a specific": ["a particular", "a certain"],
    "the specific": ["the particular", "the exact"],
    "its specific": ["its particular"],
    "this specific": ["this particular"],
}

counter = 0
total_changed = 0
for fname in files:
    with open(fname, encoding="utf-8") as f:
        text = f.read()

    def repl(m):
        global counter
        key = m.group(0)
        low = key.lower()
        if low not in SUBS:
            return key
        counter += 1
        if counter % 2 == 0:  # vary every other occurrence
            opts = SUBS[low]
            new = opts[counter % len(opts)]
            # preserve original capitalization of first letter
            if key[0].isupper():
                new = new[0].upper() + new[1:]
            return new
        return key

    pattern = re.compile(r"\b(?:[Aa] specific|[Tt]he specific|[Ii]ts specific|[Tt]his specific)\b")
    new_text, n = pattern.subn(repl, text)
    if new_text != text:
        with open(fname, "w", encoding="utf-8") as f:
            f.write(new_text)
        total_changed += n

print(f"processed occurrences: {counter}, replacements made across files: {total_changed}")

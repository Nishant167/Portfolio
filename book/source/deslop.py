#!/usr/bin/env python3
"""Reduce repetitive meta-referential phrasing ('this book has...') and
other overused tics across all part-*.md source files."""
import glob
import re

files = [f for f in glob.glob("part-*.md") if "manuscript_body" not in f]

# Ordered list of (regex, replacement). Applied in order, case-sensitive
# variants handled explicitly for sentence-initial capitals.
RULES = [
    (r"\bthis entire book\b", "these pages"),
    (r"\bThis entire book\b", "These pages"),
    (r"\bthis whole book\b", "all of this"),
    (r"\bThis whole book\b", "All of this"),
    (r"\bacross this entire book\b", "across these pages"),
    (r"\bthis book hasn't\b", "he hasn't"),
    (r"\bThis book hasn't\b", "He hasn't"),
    (r"\bthis book has\b", "he has"),
    (r"\bThis book has\b", "He has"),
]

total_subs = 0
for fname in files:
    with open(fname, encoding="utf-8") as f:
        text = f.read()
    original = text
    for pattern, repl in RULES:
        text, n = re.subn(pattern, repl, text)
        total_subs += n
    if text != original:
        with open(fname, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"edited: {fname}")

print(f"\ntotal substitutions: {total_subs}")

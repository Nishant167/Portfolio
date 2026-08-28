#!/usr/bin/env python3
"""Assemble the rebuilt manuscript from part files in a fixed order."""
import os

BOOK_DIR = os.path.dirname(os.path.abspath(__file__))

def read(fname):
    with open(os.path.join(BOOK_DIR, fname), encoding="utf-8") as f:
        return f.read().strip("\n")

PART_TITLES = {
    1: "# PART ONE — BEFORE MIDNIGHT",
    2: "# PART TWO — THE RABBIT HOLE",
    3: "# PART THREE — BUILDING",
    4: "# PART FOUR — THE OTHER SIDE",
    5: "# PART FIVE — WHAT REMAINS",
}

PART_ORDER = {
    1: ["part-1.md"],
    2: ["part-2.md", "part-2-extra.md"],
    3: ["part-3a.md", "part-3b.md", "part-3-extra.md", "part-3c.md"],
    4: ["part-4a.md", "part-4b.md", "part-4-extra.md", "part-4-extra2.md"],
    5: ["part-5a.md", "part-5b.md", "part-5-extra.md", "part-5-extra2.md", "part-5c.md"],
}

def strip_part_header(text):
    lines = text.split("\n")
    if lines and lines[0].startswith("# PART"):
        lines = lines[1:]
    return "\n".join(lines).strip("\n")

parts_out = []
for part_num in range(1, 6):
    files = PART_ORDER[part_num]
    chunks = [strip_part_header(read(f)) for f in files]
    body = "\n\n---\n\n".join(chunks)
    parts_out.append(PART_TITLES[part_num] + "\n\n" + body)

manuscript_body = "\n\n\n\n".join(parts_out).strip() + "\n"

with open(os.path.join(BOOK_DIR, "manuscript_body.md"), "w", encoding="utf-8") as f:
    f.write(manuscript_body)

front_matter = read("front_matter.md")
final = front_matter.rstrip() + "\n\n" + manuscript_body

OUT_PATH = os.path.join(BOOK_DIR, "..", "3AM-The-Hours-Nobody-Sees.md")
with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write(final)

print(f"Total words (body only): {len(manuscript_body.split())}")
print(f"Total words (with front matter): {len(final.split())}")

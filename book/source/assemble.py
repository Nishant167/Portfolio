#!/usr/bin/env python3
"""Assemble the final manuscript from part files, in a specified order,
renumbering all '## N. Title' chapter headings sequentially, and inserting
Part headers ('# PART ...') only once per part."""
import re
import os

BOOK_DIR = os.path.dirname(os.path.abspath(__file__))

def read(fname):
    with open(os.path.join(BOOK_DIR, fname), encoding="utf-8") as f:
        return f.read()

# Part title lines (exact text used in the core files) mapped to Roman numeral parts.
PART_TITLES = {
    1: "# PART I — BEFORE MIDNIGHT",
    2: "# PART II — THE RABBIT HOLE",
    3: "# PART III — 3:00 AM",
    4: "# PART IV — 4:26 AM",
    5: "# PART V — SMALL WINS",
    6: "# PART VI — THE OTHER KIND OF PRODUCTIVITY",
    7: "# PART VII — CAREER AND CONVICTION",
    8: "# PART VIII — MORNING",
    9: "# PART IX — 3:00 AM AGAIN",
}

# File order per part (core files first, extras after, in a sensible thematic order).
PART_FILES = {
    1: ["part-1.md", "part-1-extra.md", "part-1-extra2.md", "part-1-extra3.md"],
    2: ["part-2.md", "part-2-extra.md", "part-2-extra2.md", "part-2-extra3.md", "part-2-extra4.md"],
    3: [
        "part-3a.md", "part-3b.md",
        "part-3-extra-a.md", "part-3-extra-g.md", "part-3-extra-b.md",
        "part-3-extra-c.md", "part-3-extra-d.md", "part-3-extra-e.md", "part-3-extra-f.md",
    ],
    4: [
        "part-4.md", "part-4-extra.md", "part-4-extra2.md", "part-4-extra3.md",
        "part-4-extra4.md", "part-4-extra5.md", "part-4-extra6.md",
    ],
    5: ["part-5a.md", "part-5b.md", "part-5-extra.md", "part-5-extra2.md", "part-5-extra3.md", "part-5-extra4.md"],
    6: ["part-6a.md", "part-6b.md", "part-6-extra.md", "part-6-extra2.md", "part-6-extra3.md", "part-6-extra4.md"],
    7: [
        "part-7a.md", "part-7b.md", "part-7-extra.md", "part-7-extra2.md",
        "part-7-extra3.md", "part-7-extra4.md", "part-7-extra5.md",
    ],
    8: ["part-8.md", "part-8-extra.md", "part-8-extra2.md", "part-8-extra3.md", "part-8-extra4.md"],
    # Part IX handled specially below (custom chapter order for the ending).
}

CHAPTER_RE = re.compile(r"^## (?:\d+\.\s*)?(.+)$", re.MULTILINE)


def strip_part_header(text):
    """Remove a leading '# PART ...' line if present, return remaining text."""
    lines = text.split("\n")
    if lines and lines[0].startswith("# PART"):
        lines = lines[1:]
    return "\n".join(lines).lstrip("\n")


def split_chapters(text):
    """Split a file's content (after removing part header) into a list of
    (title, body) chapters based on '## ' headings."""
    text = strip_part_header(text)
    parts = re.split(r"^## (?:\d+\.\s*)?(.+)$", text, flags=re.MULTILINE)
    # parts[0] is preamble (should be empty/whitespace); then alternating title, body
    chapters = []
    for i in range(1, len(parts), 2):
        title = parts[i].strip()
        body = parts[i + 1] if i + 1 < len(parts) else ""
        chapters.append((title, body.strip("\n")))
    return chapters


def build_part9_chapters():
    core = split_chapters(read("part-9.md"))
    core_map = {title: body for title, body in core}
    extra = split_chapters(read("part-9-extra.md"))
    extra_map = {title: body for title, body in extra}
    extra2 = split_chapters(read("part-9-extra2.md"))
    extra2_map = {title: body for title, body in extra2}

    order = [
        ("Another Tuesday", core_map["Another Tuesday"]),
        ("What Pulls You Back", core_map["What Pulls You Back"]),
        ("The Inventory, Taken Honestly", extra2_map["The Inventory, Taken Honestly"]),
        ("The Ring, Revisited", extra_map["The Ring, Revisited"]),
        ("Before This Book Existed", extra2_map["Before This Book Existed"]),
        ("No Ending, Just a Later Chapter", extra_map["No Ending, Just a Later Chapter"]),
        ("3:00 AM", core_map["3:00 AM"]),
    ]
    return order


all_chapters = []  # list of (part_num, title, body)

for part_num in range(1, 9):
    for fname in PART_FILES[part_num]:
        for title, body in split_chapters(read(fname)):
            all_chapters.append((part_num, title, body))

for title, body in build_part9_chapters():
    all_chapters.append((9, title, body))

# Now render: Part header once per part, chapters numbered sequentially 1..N overall.
out = []
current_part = None
chapter_num = 0
for part_num, title, body in all_chapters:
    if part_num != current_part:
        if current_part is not None:
            out.append("\n\n")
        out.append(PART_TITLES[part_num] + "\n\n")
        current_part = part_num
    chapter_num += 1
    out.append(f"## {chapter_num}. {title}\n\n{body}\n\n")

manuscript_body = "".join(out).strip() + "\n"

with open(os.path.join(BOOK_DIR, "manuscript_body.md"), "w", encoding="utf-8") as f:
    f.write(manuscript_body)

front_matter = read("front_matter.md")

toc_lines = ["## Contents", ""]
for i in range(1, 10):
    toc_lines.append(f"{PART_TITLES[i].replace('# ', '')}")
toc = "\n\n".join(toc_lines) + "\n\n---\n\n"

final = front_matter.rstrip() + "\n\n---\n\n" + toc + manuscript_body

# Output the assembled manuscript one directory up (book/), not in source/.
OUT_PATH = os.path.join(BOOK_DIR, "..", "3AM-The-Hours-Nobody-Sees.md")
with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write(final)

print(f"Total chapters: {chapter_num}")
print(f"Total words (body only): {len(manuscript_body.split())}")
print(f"Total words (with front matter): {len(final.split())}")

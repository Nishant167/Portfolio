# 3:00 AM — The Hours Nobody Sees

A literary nonfiction manuscript (~76,700 words, 132 chapters across nine parts) grounded in the real
career history, projects, and commit log in this repository — not an invented biography.

- **`3AM-The-Hours-Nobody-Sees.md`** — the finished manuscript. Read this one.
- **`source/`** — the working files: one markdown file per part/section as drafted, plus
  `assemble.py`, the script that stitches them into the final manuscript (handles chapter
  renumbering and the custom chapter order in Part IX's closing sequence). Re-run it with
  `python3 source/assemble.py` after editing any `source/part-*.md` file to regenerate
  `3AM-The-Hours-Nobody-Sees.md`. `deslop.py` and `vary.py` were one-time editorial-pass
  scripts (meta-reference cleanup and reducing a repeated "the specific" tic); they're kept
  for reference but don't need to be re-run.

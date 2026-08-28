# 3:00 AM — The Hours Nobody Sees

A literary nonfiction manuscript (~16,700 words, 34 chapters across five parts) grounded in the
real career history, projects, and commit log in this repository — not an invented biography.

- **`3AM-The-Hours-Nobody-Sees.md`** — the finished manuscript. Read this one.
- **`source/`** — the working files: one markdown file per part/section, plus `assemble.py`,
  which stitches them into the final manuscript in a fixed part/chapter order. Re-run it with
  `python3 source/assemble.py` after editing any `source/part-*.md` file to regenerate
  `3AM-The-Hours-Nobody-Sees.md` (and `source/manuscript_body.md`, its intermediate output).
- **`archive/source-v1-original/`** — the first full draft (~76,700 words, 132 chapters), kept
  for reference. It was rebuilt into the current version — same underlying material, but
  restructured into fewer, denser chapters and rewritten to cut a repetitive explanatory habit
  (scenes followed by a stated "what this means" sentence) that made the first draft read as
  AI-generated. The current version trusts scenes to speak for themselves more often, allows
  chapters to end without a moral, and preserves unresolved contradictions rather than
  resolving them into lessons.

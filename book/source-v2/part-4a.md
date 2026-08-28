# PART FOUR — THE OTHER SIDE

## 4:26 AM

A deployment finishes green. No errors, every box checked. The site it produced is broken anyway — unstyled text in the browser's fallback serif, broken image icons, a layout that looks like a ransom note assembled from whatever fonts happened to be lying around.

It exists locally. `npm run dev` has served this page for weeks. The problem: GitHub Pages doesn't serve a site from the root of a domain. It lives in a subdirectory named after the repo, `/Portfolio/`, and every asset reference his build generated assumed the root, because that's the only reality his local dev server had ever shown it.

The fix is one line — `basePath`, set to `/Portfolio` — sitting in the framework's documentation the entire time, waiting for him to need it badly enough to go looking. He commits it with no adjectives in the message. The calmest-sounding commits are usually written right after the least calm hour.

---

Next: a GitHub Actions notification, red. The build step fails before his code is even evaluated — the Node version the workflow runs doesn't meet the framework's minimum. Local machine: fine, current. The problem's in a YAML file he wrote once and never looked at again, a number that made sense the day he wrote it and quietly stopped being true while nothing prompted him to check.

One number, bumped. Nothing to do with cleverness. Everything to do with the tax of maintaining anything that depends on anything else, which is to say, everything.

---

`npm install` fails next. Peer dependency conflicts, a wall of red text. There's a flag for this — `--legacy-peer-deps`, permissive, and `--force`, blunter, which skips the argument entirely. He tries the gentler one first, out of something like professional self-respect. It works locally. The CI runner, slightly different environment, rejects it anyway.

`Use npm install --force to bypass package-lock conflicts.` Not a commit message he's proud of. It's the software equivalent of two people arguing in a doorway and a third person just walking through the middle, ignoring the argument, on the theory that whatever they're disagreeing about doesn't matter to anyone but them.

Sometimes it doesn't. The site works. There's a small unease that doesn't fully resolve — that he skipped a warning instead of understanding it, and skipping a warning is the kind of decision that looks fine for months.

He doesn't fix it properly that night. Files it under every other *eventually* he's opened a ticket for in his own head and never gotten back to.

---

Two commits, weeks apart, say almost exactly the same thing: `Trigger fresh Pages deployment.` Nothing else changed. An empty gesture, made because the previous deploy got stuck and nothing short of a fresh trigger seemed able to unstick it. He never fully diagnoses it. Doesn't have access to. At some point continuing to investigate costs more than doing the thing that's historically worked.

Not every problem yields to understanding it. Some yield to poking the system and hoping the poke lands somewhere useful. Nobody reviews these commits but him. That's the whole freedom and the whole risk of an audience of one.

## What Looked Brilliant at Midnight

Every so often a redesign survives the night it was built in and dies the next morning, on a second monitor, with eyes that slept in between. Not a small adjustment. The uncomfortable discovery that a whole evening's confident decisions were made by a version of himself whose taste had quietly degraded around hour four, with no warning it was happening.

A color that read as confident and warm at midnight reads, the next morning, as too saturated. A layout that felt like a bold departure reveals itself as simply confusing. The difference invisible from inside the hour that produced it, obvious from outside.

His theory, unverified: alone at 1 a.m., with nobody around to flinch at a bad idea in real time, the small social calibration that tempers a decision goes quiet. Not gone. Quiet enough that a bad idea runs further before anything catches it.

He hasn't stopped building at night. The freedom is the whole point. What he's stopped doing is shipping straight from the hour that built it. Sleep on it. Some midnight decisions survive the morning review completely — the terracotta accent color, unchanged since the night he picked it, still there because it was actually right. He no longer assumes that by default, though. He checks. Every time.

---

There's a version of any of these nights where the honest ending isn't a fix. It's stopping, not because the problem got solved but because continuing had turned into refusing to admit it wasn't going to be solved that way.

The line between persistence and its counterfeit is hard to see from inside it. Both feel, from the inside, like *I'm close.* The tell isn't the feeling. It's whether the last three attempts actually taught him anything, narrowed the space of what could be wrong — or whether he's just running the same four moves in a different order because stopping feels like losing.

Some nights the persistence pays off exactly when it should. Some nights it doesn't, and the correct move is closing the laptop with the bug unsolved, which is a harder discipline to perform and a worse one to describe than the version where everything gets fixed by 2 a.m. and the story has a shape.

Most nights don't have a shape.

## Two Threads, One Variable

The race condition costs him more time than almost anything else, not because it's conceptually hard once understood but because it's maddeningly intermittent. Two tool calls, fired close together, occasionally — one run in thirty or forty — return a result that's subtly wrong, mixed up, plausible-looking, incorrect.

A bug that fails every time is annoying but tractable. A bug that fails one time in thirty resists everything. He can't reproduce it on demand, so he can't confidently narrow it, so every fix has to be validated not by watching the bug disappear but by running the same test dozens of times and hoping thirty clean runs means something.

He reads, properly for the first time, documentation about async execution he'd skimmed and assumed he understood. Two calls sharing a variable he'd assumed was scoped separately — a classic race condition he'd read about years ago in a course and never actually recognized on sight until it cost him a weekend.

The fix is conceptually simple. Two hundred test runs after, an absurd number, because a one-in-thirty bug means anything less isn't real confidence. He allows himself to believe it's fixed, with slightly less certainty than his other fixes carry, because a race condition is the one kind of bug two hundred clean runs can never fully rule out. Just make comfortably unlikely.

---

Separately: the RAG pipeline's memory climbs over a week, unnoticed, until the laptop fan gets loud enough to force the question. A leak — something allocates and never releases, invisible at any single moment, visible only in the trend.

The source, once found by commenting out pieces of the pipeline one at a time: his own evaluation logging, a list declared once, appended to on every run, never cleared, on the assumption — made in the first five minutes of building the feature, never revisited — that he'd want the whole history in memory at all times. He did want that. He hadn't accounted for what "forever, growing without bound" would cost.

Ten lines of change against several hours of investigation. The ratio never seems to improve with experience. Only his patience for sitting inside it does, a little.

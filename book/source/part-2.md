# PART TWO — THE RABBIT HOLE

## Paragraph Five

The article isn't well written. Breathless, the way these things get when someone's trying to convince you a thing is a bigger deal than it might turn out to be. But four paragraphs in there's a sentence that does something most sentences about developer tooling don't.

A language model is good at language. It's not good at doing anything — can't check today's exchange rate, can't read a file, can't tell you the time, because it has no clock, only a training cutoff and a confident tone. Every product that lets a model "do things" has solved this with a pile of glue code, reinvented by every team that wanted one. The protocol in the article proposes something almost boring by comparison: a standard shape for the conversation between a model and a tool. Not a smarter model. An agreement about how two things should talk.

He's spent seven years around the idea of a schema — a promise about shape that lets two systems that never met exchange data without lying to each other. This is that, wearing a different coat. A protocol is a schema for behavior instead of data. He didn't expect to find it familiar. He does.

There's a diagram — client asks what's available, server describes itself, client picks a tool, calls it, gets back a shape both sides agreed on before either existed. A handshake. Obvious in retrospect, which is usually the tell that something's worth the next twenty minutes.

It's 9:14. He closes the tab the way you close a book you liked. Small, satisfied click.

It's not an ending. There are thirty other tabs open and one new idea with nowhere to go yet, which is exactly the condition under which an evening stops belonging to him.

---

Nobody plans a rabbit hole. It's not a hole you fall in — it's a staircase built one step behind you, each step the completely reasonable decision to check one more thing.

The article links to the spec. The spec links to a GitHub search — `mcp-server` — a hundred and forty results, sorted by some mix of stars and recency he doesn't trust and has no better idea than. The first result is well-funded, well-documented, boring the way infrastructure is supposed to be boring. He reads enough to get the shape. Fine. Understood. Not where the evening gets interesting.

Three results down: a repo with a name that's half acronym, half pun, built by someone whose bio is one line of dry humor. It lets a model query a self-hosted Postgres database in plain language. The README says, more or less, *this will let a sufficiently motivated model drop your production table, use with appropriate fear.* He laughs out loud. Alone. At his desk. Which is a ridiculous sound to make with nobody around to hear it land.

He opens the code. Not because he needs to. Because the README made him curious about the person who wrote it, and the only way to meet a stranger on the other side of the planet whose name he doesn't recognize is to read what they built.

This is roughly where the tab count stops being trackable. A comment links to a thread about whether MCP servers should own their auth or defer to the client. He has an opinion about this within four sentences — an opinion formed in the last twenty minutes, which is either transferable expertise or a sign he should distrust how fast his opinions form. The thread links to a different implementation, written in a language he doesn't use professionally, and reading it takes three times as long and teaches him ten times as much, because you can't skim a language you don't know. You have to parse it.

By tab nine he's lost track of what he opened the browser to do, which was watch twenty minutes of something before bed. There is no twenty minutes left in the concept of before bed. Nobody announced its retirement. It just happened.

He's not upset about this. There's a specific pleasure in not knowing where the next link goes and trusting it'll be worth it anyway, and being right often enough that the habit keeps paying for itself. It's not distraction, exactly, though it would clock as distraction on anybody's screen-time app. It's closer to being handed somebody else's field notes, one after another, each one written by a person who hit the wall he's about to hit and left a note about how they got past it.

The internet at nine-thirty on a weeknight, no meeting to prep for, stops being a tool and starts being a place. Badly lit. Poorly organized. Full of people who built something and left it lying around for a stranger to find.

## Four Stars

Most of what he finds is fine. Competent, documented, exactly as interesting as its README promised. That's most nights — a solved problem you copy and move past.

Then there's the other kind.

Four stars. A number so small it's basically a rounding error — the kind of count that means the author's own friends haven't all gotten around to clicking yet. The repo is an MCP server that does something narrow and slightly odd: exposes a tool for querying a personal collection of scanned board-game rulebooks, so a model can answer "can I do this in Catan" by actually reading the manual instead of hallucinating an answer from vibes. Useless, by any reasonable product logic. Solves a problem maybe four people on earth have. The author looks like one of them.

He reads the whole thing anyway.

There's a function called `doTheThing2` — clearly a replacement for an original `doTheThing`, written at some hour and never renamed. A block of commented-out code with no explanation, the kind every repo accumulates, something that used to matter enough to write and not enough to delete. A chunk of PDF-parsing logic held together by hope and a regular expression that shouldn't work as well as the three commented test cases say it does.

And at the bottom of the file that registers the tool: eleven lines that turn a stack of PDFs into something a model can query, using almost none of the machinery he'd have reached for first. No vector database. No embeddings. Keyword search over pre-extracted text, dumb as a hammer, and — according to the comments — it works fine for what it needs to do.

He sits with that longer than the code deserves. Not because it's clever. Because it isn't.

He stars it. Fifth star the repository's ever gotten. The author will never know it landed on a Tuesday night in Gurgaon, or that it's going to quietly change how he builds the next thing. No message exchanged. No credit given. One stranger's decision, informing another stranger's, through nothing but code left lying around in public.

---

There's a different way to read code when there's no deadline attached — slower, the way you'd read a letter from someone you don't know, looking for who would write it that way and not just what it says.

Variable names are handwriting. `data`, `data2`, `finalData` — fast, iterative, unbothered by naming until naming's unavoidable. `rawIngestBatch`, `validatedIngestBatch`, `reconciledOutput` — someone who thinks in stages, who wants the pipeline legible from the names alone. He recognizes the second one. It's his own. He didn't choose it on purpose. He noticed it the way you notice an accent — only by hearing someone else's.

He doesn't know any of these people's names, mostly. GitHub usernames aren't names, they're costumes. He'll never work with most of them, never know if they're twenty-two or fifty-two, in Bangalore or a town in Ohio he's never heard of. By ten-fifteen he has a clearer sense of how a handful of strangers think than he has of people he's worked next to for a year, because code read slowly, with no audience in mind, doesn't perform. It just sits there, telling on its author by accident.

## What If I Tried This

Around ten-thirty the direction of the evening turns, on something small enough that he almost misses the hinge.

Not the spec. Not the well-funded repo. A throwaway line in somebody's blog post — the same overconfident genre as the article he started with — where the author mentions, almost in passing, that they built an MCP server for their own todo list, mostly to learn the protocol, and it took "an evening." Not a tutorial. Not trying to inspire anyone. Just a fact, dropped in a paragraph about something else.

*An evening.*

He doesn't need an MCP server for a todo list. He's got one, it's a phone app, it's fine. But he's been circling something else for weeks without naming it — an agent that could actually do things instead of just answering questions well, built on this protocol instead of the usual pile of glue. A name, even, half-formed. TKI. An acronym that means something only to him, attached to nothing yet except an idea and a specific itch.

*What if I tried this.*

Not a plan. Plans have steps. This is smaller and more dangerous — a sentence with no object yet, like picking up a tool before deciding what to build with it. It is, he'll recognize much later, the exact sentence that precedes every project he's ever finished and most of the ones he's abandoned halfway. No way to tell which kind this is from inside the sentence.

He doesn't start tonight. Past eleven, standup in the morning, some functioning part of his brain still believes in sleep as a category of behavior he participates in. He closes most of the tabs. Four survive the cull, for no better reason than a feeling he'll want them again.

He gets up from the desk with an idea sitting in his head that wasn't there when he sat down. No code written. No commit. Nothing a manager would recognize as productivity if you tried to explain it to one.

Tomorrow: a full day of pipelines that reconcile or don't. Tomorrow evening, if nothing gets in the way, an empty folder.

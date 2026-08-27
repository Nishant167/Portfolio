# PART II — THE RABBIT HOLE

## 6. Paragraph Five

The article is not well written, as these things go. It has the slightly breathless tone of a blog post trying to convince you that something is a bigger deal than it might turn out to be, a tone he has learned to read past rather than through. But four paragraphs in, past the throat-clearing, there is a sentence that does something to him that most sentences about developer tooling do not.

The idea, stripped of its marketing, is almost insultingly simple. A language model is good at language. It is not, on its own, good at *doing* anything — it cannot check today's exchange rate, cannot read a file on your laptop, cannot query a database, cannot even reliably tell you what time it is, because it has no clock, only a training cutoff and a confident tone. Every product that lets a model "do things" has historically solved this with a pile of bespoke glue: a custom function here, a hand-rolled API wrapper there, every integration reinvented by every team that wanted one, none of it talking to any of the others. The protocol he's reading about — Model Context Protocol, MCP, though the article takes its time getting around to spelling that out — proposes something almost boring by comparison: a standard shape for the conversation between a model and a tool. Not a smarter model. Not a better tool. Just an agreement about how the two should talk, so that anyone who builds a tool following the shape can be found and used by anyone who builds a model following the same shape, without either side having heard of the other beforehand.

He has spent seven years around the concept of a schema — a promise about shape that lets two systems that have never met still exchange data without lying to each other. A CSV column that's supposed to be a date and is actually a date, every time, or the pipeline breaks loudly instead of quietly. This is that idea, wearing a different coat, applied to something that isn't a database at all. A protocol is just a schema for behavior instead of data. He didn't expect to find that familiar. He finds it familiar.

There's a diagram halfway down the article, one of those boxes-and-arrows things that usually make his eyes slide off the page, and this one doesn't, because the boxes are doing something he recognizes: a client asks what tools are available, the server describes itself, the client picks one, calls it, gets a result back in a shape both sides already agreed on before either of them existed. It's a handshake. It's also, if he's honest, kind of obvious in retrospect, which is usually the sign of an idea worth paying attention to — not the ones that sound clever, the ones that sound like *obviously, why wasn't it already like this.*

He finishes the article. It is nine-fourteen p.m. He has, at this point, no plan to do anything with what he just read. He closes the tab the way you close a book you enjoyed — a small, satisfied click, the kind of ending that's supposed to be an ending.

It is not an ending. It is 9:14 p.m. on a Tuesday, and the browser still has thirty other tabs open, and one new idea sitting loose in his head with nowhere to go yet, which is exactly the condition under which the rest of an evening reliably stops belonging to him.

---

## 7. One Tab Becomes Eleven

Nobody plans a rabbit hole. That's the part the phrase gets slightly wrong — it makes it sound like there's a hole and you fall in, a single discrete event, when actually it's more like a staircase built one step behind you as you walk, each step constructed out of the completely reasonable decision to check just one more thing before you're done.

The MCP article links to the official specification. The specification, dry as it is — protocols are written by people optimizing for precision, not pleasure — has a section on "servers," and he wants to see what a real one looks like, not a diagram of one. So: GitHub, a search for `mcp-server`, and now there are one hundred and forty results sorted by some combination of stars and recency that he doesn't fully trust but hasn't got a better idea than.

The first result is official-looking, well-maintained, boring in the specific way that well-funded infrastructure projects are boring — clean README, contribution guidelines, a changelog that actually gets updated. He reads enough of it to understand the shape. Fine. Understood. This is not where the evening goes interesting.

The interesting part is three results down, a repository with a name that's half acronym and half pun, built by someone whose GitHub bio is one line of dry humor and a link to a personal blog that hasn't been updated in two years. The project exposes a tool that lets a model query a self-hosted Postgres instance through natural language, and the README has a sentence in it — something like *this will absolutely let a sufficiently motivated model drop your production table, use with appropriate fear* — that makes him laugh out loud, alone, at his desk, at 9:31 p.m., which is a specific and slightly ridiculous sound to make when there's nobody around to hear it land.

He opens the code. Not because he needs to. Because the README made him curious about the person who wrote it, and the only way to meet that person, given that they are a stranger on the other side of the planet whose name he doesn't recognize and probably never will, is to read what they built.

This is roughly where the tab count stops being trackable in any serious way. The Postgres tool links, in a comment, to a discussion thread about whether MCP servers should handle their own auth or defer to the client — a question he has opinions about within about four sentences of reading it, opinions formed entirely in the last twenty minutes, which is either a sign of transferable expertise or a sign that he should be more suspicious of how fast he forms opinions. The thread links to a different implementation that handles it the other way. That implementation is written in a language he doesn't use professionally, which means reading it takes three times as long and teaches him roughly ten times as much, because you can't skim code in an unfamiliar language — you have to actually parse it, and parsing it, it turns out, is a different and better kind of understanding than the fluent skimming he does in Python without thinking.

Somewhere around tab nine, he has completely lost the thread of what he originally opened the browser to do, which was, if he thinks back far enough, watch twenty more minutes of something before bed. There is no twenty minutes left in the concept of before bed. That concept has been quietly retired for the evening without a formal announcement.

He is not upset about this. That's the strange part, the part that's hard to explain to someone who experiences the internet mainly as a delivery mechanism for things they already intended to look at. There is a specific, almost physical pleasure in not knowing where you're going to end up — in trusting that the next link is going to be at least as interesting as the last one, and being right often enough that the habit keeps paying for itself. It's not distraction, exactly, though it would clock as distraction on anyone's productivity app. It's closer to the feeling of being handed a stack of other people's field notes, one after another, each one written by someone who ran into the same wall he's about to run into and left a note about how they got past it, or didn't.

The internet, at nine-thirty on a weeknight, with no meeting to prepare for and no ticket waiting, stops being a tool and starts being something closer to a place — badly lit, poorly organized, occasionally hostile, and completely, reliably full of people who built something and left it lying around for a stranger to find. He is the stranger tonight. Someone else will be the stranger some other night, for something he built and mostly forgot about. That symmetry doesn't occur to him at 9:31 p.m. It'll occur to him later, on a night when the traffic runs the other way.

---

## 8. The Repository With Four Stars

Most of what he finds is fine. Competent, documented, exactly as interesting as its README promised and no more. This is the honest majority of the internet's technical output, and there's nothing wrong with it — most nights, "fine" is exactly what you need, a solved problem you can copy and move past.

Then, occasionally, there's the other kind.

It has four stars. Four — a number so small it's almost a rounding error, the kind of star count that means the author's own friends probably haven't all gotten around to clicking it yet. The project is an MCP server that does something narrow and slightly odd: it exposes a tool for querying a personal collection of scanned board-game rulebooks, so that a language model can answer "can I do this in Catan" by actually reading the manual instead of hallucinating an answer from vibes. It is, by any reasonable product logic, useless. Nobody needs this. It solves a problem approximately four people on Earth have, and the author appears to be one of them.

He reads the whole thing anyway. Not despite it being useless — partly because of it. There's something almost moving about a four-star repository. It has no audience to perform for. Nobody funded it, nobody's going to feature it in a newsletter, no metric anywhere depends on it existing. It exists purely because someone, at some hour probably not unlike this one, wanted their board game questions answered by a robot badly enough to build the plumbing themselves.

The code is not clean. There's a function with a name like `doTheThing2` that clearly replaced an original `doTheThing` at two in the morning without either function getting properly renamed afterward, a fossil record of a decision made under exactly the kind of tiredness he recognizes. There's a commented-out block of code with no explanation, the kind of ghost every repository accumulates — something that used to matter enough to write and not enough to delete. There's a chunk of PDF-parsing logic that is, unmistakably, held together by hope and a regular expression that should not work as well as the author's test cases suggest it does.

And there, at the bottom of the file that registers the tool with the MCP server, is the part that actually stops him: eleven lines of code that turn "a stack of PDFs" into "something a model can query," using almost none of the machinery he'd have reached for first. No vector database. No embeddings pipeline. Just a keyword search over pre-extracted text, dumb as a hammer, and — according to the three commented test cases sitting above it — it works fine for what it needs to do.

This is the moment the rabbit hole earns its keep. Not the polished, well-funded repository three tabs back. This one. Because the four-star board-game project has just quietly made an argument he needed to hear and wouldn't have accepted from a conference talk: that the sophisticated version of a solution is not automatically the correct one, and that "works for what it needs to do" is a legitimate finish line, not a confession of laziness.

He stars it. It is currently the fifth star that repository has ever received, and the author, wherever they are, will probably never know or care who the fifth star came from, or that it landed at 9:52 p.m. on a Tuesday in Gurgaon, or that it changed, in some small unmeasurable way, how the next thing he builds is going to be built.

That's the whole transaction. No message exchanged. No credit given. Just one stranger's three-in-the-morning decision quietly informing another stranger's, months and geographies apart, through nothing but code left lying around in public.

---

## 9. Reading Someone Else's Code Like a Letter

There's a specific way you read code when you're debugging your own — fast, targeted, skipping everything that isn't the line currently ruining your evening. And there's a completely different way you read code that has no bearing on any deadline: slowly, almost the way you'd read a letter from someone you don't know, looking not just for what it says but for who would say it that way.

Variable names are the handwriting. Someone who names things `data`, `data2`, `finalData` is telling you something about how they think — fast, iterative, unbothered by naming until naming becomes unavoidable. Someone who names things `rawIngestBatch`, `validatedIngestBatch`, `reconciledOutput` is telling you something else — a person who thinks in stages, who wants the shape of the pipeline legible from the variable names alone, without needing to open a diagram. He recognizes that second habit because it's his own. He didn't choose it consciously. He noticed it, the way you notice an accent, only by hearing someone else's.

Comments are the tone of voice. Most of what he reads has none, which is its own kind of statement — either supreme confidence that the code speaks for itself, or the ordinary exhaustion of someone who meant to add them later and never did. Occasionally there's a comment that breaks the fourth wall entirely: `// I know. I KNOW. Fix this before anyone sees it.` left in a public repository, presumably by someone who forgot the repository was public, or stopped caring whether it was. He has left comments like that himself, in private repositories, and felt a small kinship reading someone else's version of the same confession.

Error handling is the personality under pressure. Some codebases catch every possible exception and log it politely, apologizing on the way out. Others let everything crash loudly, unapologetically, on the theory that a crash you can see is safer than an error you silently swallow — a philosophy he happens to share, professionally, because a pipeline that fails quietly is a pipeline that lies to you later, at a worse time, about something that mattered more.

None of this is written down anywhere. Nobody's README says "I am the kind of engineer who would rather crash loudly than fail silently." You only find that out by reading the parts of the code that exist for no reason except that a human decided, alone, at some hour, that this was the right way to do it and nobody was going to argue.

He has never met any of the people whose code fills these thirty-one tabs. He doesn't know their names, most of the time — GitHub usernames aren't names, they're costumes, and half the ones he's read tonight are some combination of a word and a number that reveals nothing. He will never work with most of them, never exchange a message, never know if they're twenty-two or fifty-two, in Bangalore or Berlin or a small town in Ohio he's never heard of. And yet by ten-fifteen he has a clearer sense of how a handful of total strangers think than he has of some people he's worked alongside for a year, because code, read slowly, with no deadline attached, is a strangely honest document. It doesn't perform for a standup. It just sits there, doing what it does, telling on its author by accident.

This is what he means, when he tries later to explain to someone who doesn't code why he'd spend an evening reading software he'll never run. It's not research, not exactly. It's closer to reading letters from people who don't know you're reading them, and who wrote with no audience in mind at all — which might be the only kind of writing that's ever completely honest.

---

## 10. What If I Tried This

Around ten-thirty, the direction of the evening changes, and it changes on something small enough that he almost doesn't notice the hinge turning.

It's not the official spec. It's not the well-funded repository with the clean README. It's a throwaway line in somebody's blog post — the same overconfident genre as the article he started with four hours and a lifetime ago — where the author mentions, almost in passing, that they built an MCP server for their own todo list, mostly as a way to learn the protocol, and that it took them "an evening." The sentence isn't a tutorial. It isn't even trying to be inspiring. It's just a fact, dropped in a paragraph about something else entirely.

*An evening.*

He does the thing every builder does at this exact point in a rabbit hole, the thing that turns four hours of reading into a project: he starts translating someone else's small idea into his own materials without quite deciding to. Not a todo list — he doesn't need an MCP server for a todo list, he has a todo list, it's fine, it's a phone app, it works. But he has been circling something else for weeks without naming it: an agent that could actually *do* things instead of just answering questions well. Something built on this protocol instead of on the usual pile of custom glue. Something with a name, even, half-formed already — TKI, an acronym that means something only to him right now, attached to nothing yet except an idea and a growing, specific itch.

*What if I tried this.*

It's not a plan. Plans have steps, timelines, a sense of what done looks like. This is smaller and more dangerous than a plan — it's a single sentence with no object yet, the mental equivalent of picking up a tool before you've decided what to build with it. But it is, he will recognize much later, the exact sentence that has preceded every real project he's ever finished and most of the ones he's abandoned halfway. There's no way to tell, from inside the sentence, which kind of project this one's going to be.

He doesn't start building tonight. It's past eleven, and there's a standup in the morning that will not care how many tabs he had open, and some small, functioning part of his brain still believes in sleep as a category of behavior he participates in. He closes most of the tabs — not all of them, four survive the cull, flagged by nothing more rigorous than a feeling that he'll want them again — and gets up from the desk with an idea sitting in his head that wasn't there when he sat down.

That's the whole yield of the night, measured honestly: no code written, no commit made, nothing a manager would recognize as productivity if you tried to describe it to one. Just an idea, loose and unfinished, and the particular kind of anticipation that makes falling asleep take slightly longer than it should.

Tomorrow he has a full day of pipelines that reconcile or don't. Tomorrow evening, if nothing gets in the way, he is going to open an empty folder and give the idea somewhere to go.

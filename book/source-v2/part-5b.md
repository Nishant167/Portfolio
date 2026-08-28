## Software Test Engineer

The first title was Software Test Engineer, at a company called Kalaage Creations, and he took it without much conviction about where it would lead — there was no "leading anywhere" yet, just a market and a résumé and a title adjacent enough to the degree behind him to be worth accepting.

What he actually learned there wasn't testing software. It was a specific, transferable paranoia — the habit of assuming whatever a developer tells you their feature does isn't the whole story. Not because developers lie. Because everyone describing their own work describes the path they tested, the one they had in mind while building it, and the job exists in the gap between that and the much larger space of what an unpredictable person might actually do instead.

What happens if you submit the form twice, fast, before the first submission finishes. What happens if you hit the browser's back button mid-flow instead of the flow's own back button. None of it exotic. Just the ordinary texture of how people actually use software, distinct from how the person who built it imagined they would.

There's a specific pleasure in being the one who finds the crack before the customer does. Not glamorous. Rarely thanked — an averted disaster doesn't leave a trace, so nobody's ever grateful for the ten that got quietly caught.

There's no dramatic story about leaving. No blowup. The role ended the way early-career roles end, and the next one also had *Quality* in the title, because that's what the market offered someone with his exact combination of experience at that exact moment.

He didn't know, taking it, that the actual throughline of his career had already set. Not the title — the instinct underneath it. He wouldn't have had the words for it then. Looking back at the first test case he ever wrote, some simple assertion in a spreadsheet nobody kept, the shape is already there, years before *bronze,* *silver,* *gold,* or *RAGAS* meant anything to him.

## Betting on a Protocol

There's real risk in spending finite personal time on something that might be a footnote in eighteen months. He knew that building on MCP and built on it anyway, and the reasoning is harder to defend on paper than it feels from inside it.

Not certainty it would become standard — no way to know that. Something closer to a bet on shape: the problem it was solving, the lack of a common language between models and tools, was real enough that something was going to fill the gap. Maybe not this exact protocol. But the eventual winner, whatever it turned out to be, was likely to rhyme with what he was already looking at, and fluency with the current attempt seemed likely to transfer even if the attempt itself didn't survive.

That's a hedge, not a conviction, and he knows the difference. A stalled month — three weeks where the agent's development didn't lead anywhere, where a promising early demo didn't build on itself — is where the difference actually gets tested. A stubborn person keeps going because stopping means admitting the bet was wrong. He asked, instead, whether the reasoning that got him there still held up, checked independent of how the month happened to be going. It did. He kept going. He's still not sure, some weeks, whether that's the same thing as being right.

---

Nobody at work has ever asked him to derive the Bellman equation. He's not sure anyone would care if he could. He's doing the M.Tech anyway, and the honest reason is smaller than the one that sounds better at a dinner table — not the credential, not the résumé line. Seven years gives you strong intuition for what works and almost no exposure to why, because the libraries abstract the theory away and a job, once you're trusted with real systems, stops requiring you to derive anything.

He got good at using tools without understanding their insides, and at some point that started bothering him more than it should have, given how little it was actually costing him professionally.

Most Tuesdays this makes him exhausted in a specific way — competent all day, then a beginner all evening, no seam between the two. He's stopped trying to resolve the vertigo of being both. Some nights he just is.

---

He was wrong, for a while, about something specific. Assumed early in the RAG pipeline that a more sophisticated retrieval setup would obviously beat a simple one — dense embeddings, a sparse keyword layer, a re-ranking pass — and built it without testing the alternative first, because the assumption felt too self-evident to check.

The plain keyword search, tested properly out of nothing more than the reconciliation habit, performed within a rounding error on most of his actual questions. Not all — the hybrid version won cleanly on a specific subset involving paraphrased queries. But most of the machinery he'd been quietly proud of was buying almost nothing.

That stung more than a technical mistake should. Sunk cost, partly. Partly something closer to identity — he'd built the sophisticated version because building the sophisticated version felt like what someone who takes this seriously does, and finding out the simple version worked almost as well felt, for a beat, like a small accusation.

He kept the hybrid approach in the end, because the subset it won on was worth winning, and because he now had the measurement to justify the complexity instead of just the assumption. That's the part he's actually glad about. Not that he was right the first time. That being shown he was wrong changed what he did next.

## Morning

Seven a.m. doesn't negotiate. It doesn't care that the reward curve was still climbing at half past one, or that a stranger's pull request got merged at some hour he's already forgotten. There's a specific, quiet exhaustion that comes from this pattern — not the tired of a late party, which at least has the courtesy of feeling earned by something shared. Nobody else in the house witnessed how the previous evening actually went.

He gets up. The badge — no literal badge, working from home, but the mental equivalent, a Slack status reverting from *away* — clicks over sometime between the alarm and the first cup of something hot, and by the first meeting there's very little visible trace of who he was six hours earlier.

Standup: three questions, fifteen minutes. He answers honestly, in the narrow sense — the reconciliation ticket closed, the migration still mid-flight, a blocker that's really just a dependency on someone else's team finishing first. All true. None of it complete. The discount-factor bug, the merged pull request, the ScrollTrigger fix — none of it has a natural place in this room, not because it's secret, just because there's nowhere for it to land.

He's noticed the strangeness of this more than once and never fully resolved it: the same instinct that caught a currency-conversion error in the client's pipeline last week is the exact instinct driving every evening this account has spent so long describing, and the two versions of it never get to be in the same room.

---

The portfolio presents a version of him that's true in every individual fact and strange in aggregate, the way any curated summary of a person is. Seven-plus years. Twenty-plus projects. A skill-mix donut with percentages he picked by feel and presented with the visual authority of something measured. He knows this. He built it that way and has mostly stopped being bothered by it.

What the site can't hold is the actual grain — three weeks a chunking bug sat behind an overbuilt dashboard, a stranger's eleven-line pull request mattering more some weeks than any bullet point on the page. The format isn't built for that resolution. Neither, probably, is this account, fully. It's aimed at a different resolution than the portfolio. Not truer. Just closer to the grain.

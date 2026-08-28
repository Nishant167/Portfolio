# PART ONE — BEFORE MIDNIGHT

## The Diff

There's a slide in the onboarding deck. *We build the pipelines that power decisions.* Nobody in the room ever asks decisions about what. Nobody asks because the answer doesn't matter, or because everybody already half-knows and would rather not say it out loud in a room with a name badge on: he builds pipelines for one of the biggest advertising companies in the world, and he can't tell you which one, or which brand moved through his code last Tuesday, or what the number looked like before he touched it and after.

On the portfolio — the actual site, the one a recruiter skims for the length of a red light — the employer is "one of the world's biggest advertising media companies (Global presence)." A sentence that contains no information and took longer to write than it should have. He tried the real name once, in an old draft. Took it back out before anyone saw. Not because legal would have cared. Because it felt like turning himself into somebody else's ad.

So: no name. Bronze, silver, gold instead.

Bronze is the raw feed — whatever a source system coughs up, untouched, ugly, full of nulls where a currency code should be and duplicate rows nobody asked for. Silver is bronze with the obvious lies scraped off. Gold is the version an executive is allowed to see. Forty-some pipelines move other people's advertising spend through those three states on a schedule nobody watches until it breaks. He didn't invent this. Every data team on earth uses some version of it, give or take the metaphor.

What he actually does, underneath the diagram, is check that gold agrees with bronze. Reconciliation. Somebody, at some point, decided the only way to trust a migration was not to trust it — run the old system and the new one side by side, diff the output, chase every mismatch until you know exactly why the numbers disagree, if they disagree.

Before the title said Data Engineer it said Quality Analyst, and before that, Software Test Engineer. Line the three up and they look like ambition — junior, senior, senior-er, a staircase somebody climbed on purpose. It wasn't a staircase. He kept asking the same question in every job and eventually the question got a better job title attached to it.

*Is this actually correct.*

Not does it look right. Not did the build pass. Whether the number, traced back through everything that happened to it, still means what it claims to mean.

He has a badge. A laptop that locks after ninety seconds of stillness — long enough to lose a half-built thought and short enough that it happens more than he'd like to admit. A calendar of meetings with names like nouns stacked on nouns. A Confluence space nobody reads, himself included, most weeks.

None of this is a complaint. It pays for the version of him that shows up after the badge comes off.

---

The advertising numbers aren't quite real, if you push on them. An impression sounds like a fact — an ad got shown, once, to someone. It's actually a definition, negotiated years ago by people he's never met: how long a pixel has to be visible, what percentage of the frame counts, how to handle a page closed half a second after it loaded. Attribution windows are worse. There's no physical fact about how long an ad's influence lingers in someone's head before a purchase that may or may not be related to it happens. It's a number the industry agreed to use consistently, and consistency, not truth, is the actual thing he's paid to protect.

This bothered him for a while, early on. His whole professional self runs on the premise that somewhere there's a ground truth and his job is finding the gap between what a system claims and what's real. Advertising data doesn't have a ground truth most of the time. It has an agreed fiction, checked against a copy of itself.

He finds this more interesting than troubling most days. Occasionally, on a bad afternoon, both.

The efficiency number on his résumé is twenty percent. Reconciliation tooling he built, replacing a slower manual process. He measured the old way, measured the new way, subtracted. A boring number, arrived at the boring way real numbers get arrived at. He trusts it more than he trusts most of what's on that page.

---

At home there's a second laptop, or the same laptop with a different tab open, and a version of the M.Tech coursework waiting whenever the day job lets go of him. Deep learning. Reinforcement learning. A Bellman equation he's supposed to derive from first principles for a professor at BITS Pilani who has no idea half the people in the call just came off a full day of client work they're not allowed to describe.

It's a strange kind of tired, doing both. Not the tired of doing too much — the tired of switching registers with no ramp. *Does this reconcile with the client's expectations* to *derive the Bellman equation,* cold, mid-sentence, because the workday doesn't taper, it just stops.

He is not going to pretend this is a hardship. Plenty of people study while working. What's true, and less flattering than a hardship story, is that he still doesn't fully understand a Q-value three weeks into the module that's supposed to have taught it to him, and there's no version of seven years' experience that fixes that. You don't graduate out of being a beginner at something new. You just get faster at being one.

Some nights the two versions of him — the one with the job title and the one still looking up what a Q-value is — sit in the same chair without much friction. Some nights they don't, and he can't always say in advance which kind of night it's going to be.

---

There's a ring on the portfolio site. An accent color he argued with himself about longer than the decision deserved, filling to represent years of experience against a ceiling nobody defined. The value in the source file is 0.72. Seven-plus years against — what. A round number chosen because round numbers read as intentional. He wrote it. He knows this. He still feels something when it animates on page load and stops just short of whole, as if it's reporting a fact instead of a number he typed into a file at eleven at night and never went back to check.

He hasn't changed it. He's rebuilt almost everything around it instead — the whole site, more than once. That's a later problem.

For now it's just an evening. No badge, not literally — there's a Slack status that reverts to *away* on its own, that's the whole ceremony. Second screen still has three tabs open from lunch. One's a repository he starred and never opened again. One's a Stack Overflow answer to a problem he solved a different way an hour after opening it, so the tab is a fossil now, technically obsolete, still open. One's a blog post — *Understanding MCP* — clicked during a fifteen-minute gap between meetings, read four paragraphs of, abandoned when the fifteen minutes ran out.

He's not planning to open it tonight.

He checks GitHub notifications instead, the reflex before any other reflex. Somebody starred a repo of his. A dependency needs bumping somewhere he half-remembers the point of. Nothing that needed him specifically.

And then, because this is how it goes, not because of anything grander — he remembers the tab from lunch. Paragraph four of an explanation of a protocol with an acronym he'd heard twice and filed under *probably relevant eventually.* MCP. He doesn't remember what it stands for. Doesn't feel urgent to look it up.

Nine p.m. Nobody in the world is waiting to know whether he reads paragraph five.

He reads paragraph five.

## Three Questions, Fifteen Minutes

Standup runs three questions. What did you do yesterday. What are you doing today. Any blockers. He could recite it in his sleep, and some mornings it feels close to that.

He doesn't hate the ceremony the way people online insist engineers are supposed to hate all ceremony. Short cycles, frequent checkpoints — there's a real case for it. What he's noticed after seven years inside the ritual is that most of its actual function has quietly become documentation of activity rather than coordination of it. A ticket moved across a board because a ticket that doesn't move looks, to somebody two levels up glancing at a dashboard once a week, like a problem that might or might not exist.

JIRA flattens everything into the same card. A two-point ticket that eats a week. A five-pointer closed in an afternoon because the fix turned out smaller than the estimate. The board can't tell the difference. He's stopped expecting it to, the way you stop expecting weather to consult you first.

There hasn't been a real commute in years. No train, no forty minutes of Gurgaon traffic, no seam between one version of the day and the next — just a laptop closed at one hour and reopened a few hours later on the same desk. He's not sure if that's a cost or a convenience. Probably both, depending on the week. What he does know is that the workday used to end somewhere. Now it just stops, and the evening starts immediately, at full speed, with nothing between the last Slack message and the first tab of whatever comes next.

He tried, once, walking around the block to manufacture a seam artificially. Lasted four days.

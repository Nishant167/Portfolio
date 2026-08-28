# PART I — BEFORE MIDNIGHT

## 1. Client-Confidential

There is a slide in the company's onboarding deck that says, in the calm sans-serif of every onboarding deck ever made, *we build the pipelines that power decisions.* Nobody in the room ever asks decisions about what. That is the wrong question. The right question, the one that actually determines whether you keep your job, is whether the numbers on someone else's dashboard match the numbers that actually happened.

He builds pipelines for one of the largest advertising and media companies in the world, and he is not allowed to tell you which one, or which brand, or which campaign, or what the number was before his pipeline touched it and what it was after. The portfolio he keeps — the one with his name on it, the one a recruiter might actually read — describes the employer as "one of the world's biggest advertising media companies (Global presence)," which is the kind of sentence that technically contains zero information and took an unreasonable amount of thought to write. He tried naming it once, in an earlier draft of the site, and then didn't. Not because anyone told him to. Because it felt like the wrong kind of specific — the kind that turns a person into an ad for someone else's brand instead of a description of what he actually does.

So: no name. Just the shape of the work.

Three layers, if you want to be tidy about it, and the industry mostly does. Bronze is the raw feed, ugly and untouched, the exhaust of some system that was never designed to be looked at by a human. Silver is the same data with the obvious lies removed — the duplicated rows, the null where a currency code should be, the timestamp from 1970 that means someone's system defaulted to zero instead of failing loudly. Gold is the version an executive is allowed to see. Somewhere between bronze and gold, forty-some pipelines run on a schedule nobody watches unless it breaks, moving other people's advertising spend from one shape into another, cleaner one.

He did not invent the medallion architecture. Nobody at his company invented it either — it is close enough to industry standard that you could ask ten data engineers what bronze, silver, and gold mean and get the same answer from all ten, give or take a metaphor. What he inherited, and slowly made his own, was the part underneath the architecture diagram: the reconciliation. Somebody, at some point, decided that the safest way to know whether a migration had gone well was not to trust the migration. It was to run the old system and the new system side by side, in parallel, for a while, and diff the output. Row counts. Column sums. The occasional deeply annoying edge case where a currency was recorded in two different formats depending on which decade the source system was built in.

This is, if he's honest, most of what a data engineer actually does. Not the sexy diagram. The diff.

He is good at the diff. He was good at it before he had the title, back when the job was called something with the word "Quality" in it and involved considerably fewer conversations about lakehouses. There's a version of his résumé — every version of it, actually — that draws a clean line from *Software Test Engineer* to *Quality Analyst* to *Data Engineer*, as if it were always the plan, as if the plan had ever once been visible to him in advance. It wasn't. What happened was smaller and less impressive than a plan: he kept asking the same question in every job he had, and eventually the question became the job title.

*Is this actually correct.*

Not *does this look right.* Not *did the build pass.* Actually correct, in the sense of: if I trace this number back through every transformation it went through, does it still mean what it claims to mean, or did it pick up a small, quiet lie somewhere along the way that nobody will notice until a client does.

The advertising industry moves an enormous amount of money through numbers that are, technically, guesses dressed as facts — impressions, attributed conversions, viewability thresholds that some working group decided on years ago and everyone has silently agreed to stop arguing about. His job is not to fix that. His job is to make sure that once a guess has been agreed upon, it survives the trip from one system to another without getting quietly worse. It is unglamorous work in the way that a building inspector's job is unglamorous. Nobody photographs the rebar.

He has a badge that gets him into a building. He has a laptop that locks itself if he looks away from it for ninety seconds, a security policy that has cost him at least four half-finished trains of thought this year alone. He has a calendar that fills up with recurring meetings whose names are nouns stacked on nouns — *Sync,* *Standup,* *Alignment* — and a Confluence space he is theoretically supposed to keep updated and doesn't, because nobody reads it, and everybody knows nobody reads it, and yet the space persists, dutifully, like a lighthouse for ships that stopped sailing this route years ago.

None of this is a complaint, exactly. It pays for the laptop he does his actual thinking on, the one that isn't asset-tagged, the one nobody's IT department has any claim over after six p.m. It pays for the M.Tech tuition, paid in installments that arrive with the punctuality of a tide. It pays, in the roundabout way employment pays for anything, for the version of himself that exists after the badge comes off — the one this account is actually about.

But it is worth saying plainly, once, near the beginning: the day job is real. It is not a framing device. Somewhere in a data center he has never seen, forty pipelines are moving somebody else's advertising numbers through bronze, silver, and gold, right now, while you read this sentence, whether or not he is thinking about them. That is what a pipeline is for. It runs without him. That is the whole design goal.

Which is, he sometimes thinks, both the most useful and the most unsettling thing about the job. You spend years building systems specifically so they don't need you anymore. And then you go home and, unprompted, unpaid, with nobody's dashboard depending on it, you start building something else.

---

## 2. The Diff

Before the title said *Data Engineer,* it said *Quality Analyst,* and before that it said *Software Test Engineer,* and if you lined the three of them up they would look, to a hiring manager skimming a résumé for eight seconds, like a story about ambition — junior title, senior title, senior-er title, the tidy staircase everyone is supposed to be climbing. It wasn't a staircase. It was the same room with the furniture rearranged.

At Kalaage Creations, where the job first had a name, the work was writing test cases against features that other people had built, clicking every button in every order a reasonable user and then an unreasonable user might click them, and filing a bug report when the unreasonable user broke something. It is a strange kind of literacy, learning to think like the person who will misuse your software — not maliciously, just humanly, filling in a phone number field with letters because the placeholder text didn't say not to. You start to enjoy it, a little, in a way that's hard to explain to people who haven't done it. There is a small, private thrill in being the person who found the thing before the customer did.

Then two more QA roles, one at a web development company, one at an app development company, the years overlapping the way early-career years do — different Jira instances, different bug-tracking conventions, the same underlying question asked about a different surface. Functional testing. Regression testing. Performance testing, the discipline of finding out exactly how many concurrent users it takes before a system politely falls over. API testing, which turned out to matter more than anyone at the time seemed to think it would, because APIs were about to become the connective tissue of everything, including, years later, a personal project involving something called a Model Context Protocol that did not exist yet and that he could not have imagined caring about.

Somewhere in there, without anyone announcing it, the question stopped being about buttons and started being about data. A QA role that touched data pipelines instead of user interfaces. Writing SQL not to build something, but to catch the thing that had been built wrong — a join that silently dropped rows instead of erroring, a currency conversion applied twice, a date field that looked fine in the UI and was catastrophically wrong three transformations upstream. The tools changed. The question didn't.

*Is this actually correct.*

He thinks of it, sometimes, as a kind of diff — not the git kind, though the git kind too, eventually, once code entered the picture. A diff between what a system claims about itself and what is actually true. Between the row count the pipeline logged and the row count that arrived. Between the ticket description and the ticket. Between the confidence in someone's voice on a call and the actual state of the thing they're confident about.

It is not a glamorous skill to have named as your defining one. Nobody puts *finds the gap between claim and reality* on a business card. But it is, he has come to think, the actual skill underneath every job title he's held, the thread that makes the résumé's staircase retroactively look intentional. QA doesn't ask whether the feature is good. It asks whether the feature is what it says it is. Data engineering doesn't ask whether the pipeline is elegant. It asks whether gold actually reconciles with bronze, all the way down, without shortcuts.

And later — much later, at hours nobody was paying him to be awake for — the same question would get asked of something stranger: not a button, not a pipeline, but a language model. *Does this actually do what it claims to do, and how would you prove it.* Same diff. Different subject. He didn't plan that continuity. He noticed it afterward, the way you notice a scar is shaped like something.

The efficiency number on the current job is twenty percent — a phrase that appears, dutifully quantified, on the one-page version of his career that recruiters see. Twenty percent, from reconciliation tooling he built to replace a slower, more manual process of checking whether a migration had gone cleanly. It is a real number, arrived at the boring way real numbers usually are: by measuring the thing before, and measuring the thing after, and subtracting.

He likes that it's boring. He has grown suspicious, over seven-plus years of this, of any number that isn't.

---

## 3. WILP

The acronym stands for Work Integrated Learning Programme, which is either an honest description or a euphemism, depending on the week. What it means in practice is that at an hour when a full-time student would be finishing an afternoon nap, he is opening a second laptop — or the same laptop, a different tab, the same chair — to attend a class in deep reinforcement learning taught by someone at BITS Pilani who cannot see, and has no reason to imagine, that half the room just came from a full workday of reconciliation tickets and standups about pipelines they will never name.

The M.Tech is in AI and Machine Learning. Ongoing, the portfolio says, which is a word doing a lot of quiet labor — it has been ongoing for a while now, the way anything is ongoing when you're doing it in the hours a full-time program would consider off-hours. Deep neural networks. Deep reinforcement learning. NLP. LLMs and generative AI, a curriculum item that gets rewritten slightly every term because the field keeps outrunning the syllabus. Vector databases, a phrase that would have meant nothing to him three years ago and now sits comfortably next to PySpark on the same skill list, as if they'd always been neighbors.

There is a specific tiredness that comes from being a student and an employee in the same twenty-four hours, and it is not the tiredness of doing too much. It's the tiredness of switching registers — from *does this reconcile with the client's expectations* to *derive the Bellman equation* — without any transition ramp between them. The workday doesn't taper off into evening. It stops, badge off, and evening starts cold, immediately, mid-sentence, with an assignment due and a lecture recording queued at 1.5x because at normal speed it feels like watching someone think in slow motion when your own brain is still running at workday RPM.

He is not going to pretend this is a hardship narrative. Plenty of people study while working; it is not a rare or noble thing, whatever LinkedIn's collective imagination insists. What's true, and worth saying plainly instead of dressing up, is that it's a strange kind of doubling — being, in the same body, on the same evening, both the person who reconciles bronze and gold for a company that has asked him not to name it, and the person being taught, from first principles, why a policy gradient method sometimes refuses to converge. One version of him already has a job title that says he understands this field. The other version is a student who, three weeks into a new module, still has to look up what a Q-value actually is before it clicks again.

Both versions are honest. That's the part people underestimate about doing this at his age, with his hours: you don't graduate from feeling like a beginner. You just get better at being one on a schedule.

The DQN assignment — Deep Q-Network, one of the reinforcement learning projects the coursework eventually produces — will come up again later in this account, at an hour when it is actually being built rather than merely lectured about, and it will not go well the first several times, because reinforcement learning agents have a talent for looking like they're learning something while actually learning nothing at all, oscillating confidently toward a policy that does worse than random. That's a Part III problem. Right now, at nine or ten on a Tuesday, it's still theory — equations on a shared screen, a professor's voice slightly compressed by video conferencing software, a chat window where three other students, whose day jobs he will never know, ask questions he's grateful somebody asked first.

He closes the lecture. The second laptop goes wherever the second laptop goes. And there is, for a few minutes, nothing scheduled. No class, no meeting, no ticket. Just a Tuesday evening with its obligations technically discharged, and a mind that has spent the last fourteen hours being told exactly what to think about next.

This is usually where it starts going wrong, in the good sense.

---

## 4. Seventy-Two Percent

The portfolio site — the one this whole professional identity eventually gets compressed into, for the benefit of people who will spend, on average, less than a minute deciding whether to email him — has a small ring on it, drawn in an accent color he picked and then argued with himself about for longer than the decision deserved. The ring fills to represent years of experience against some imagined ceiling, and in the source code, in a file he has opened more times than almost any other file he owns, the value sits at 0.72.

Seventy-two percent of a circle nobody has defined the full circumference of. Seven-plus years against — what, exactly? A round number chosen because round numbers read as intentional. He knows this because he wrote it. He also, somehow, still feels a small flicker of something when the ring animates in on page load and stops just short of whole, as if it's telling him something true about the actual state of things rather than something he typed into a TypeScript object at eleven at night.

This is, in miniature, the whole problem with building your own portfolio: you are simultaneously the subject and the author, the person being measured and the person choosing the measurement, and it is very hard to keep those two jobs from contaminating each other. He knows the ring is arbitrary. He also cannot look at it without a small, unearned sense of *almost there* — as if there were a *there,* as if seventy-two percent of anything real were a meaningful checkpoint rather than a value he could change with one keystroke and a git commit.

He has not changed it. He has, instead, rebuilt almost everything around it — twice, three times, depending on how you count a rewrite — which will come up properly later, because a personal website that gets rebuilt from scratch every few months is its own small case study in a mind that would rather redesign the container than sit still inside it.

For now, though, it's just an evening. The badge is off, metaphorically — there is no actual badge, but there's a Slack status that quietly reverts to "away," a laptop lid that was closed for the commute-that-doesn't-exist-because-he-works-from-a-desk-at-home-more-often-than-not, and the particular internal click of a mind switching from *am I meeting the client's expectations* to *nobody is asking me anything right now.*

The second screen — there's always a second screen, not for any principled reason, just because it accumulated over the years the way spare cables accumulate — still has three tabs open from lunchtime. One is a GitHub repository he starred and never opened again. One is a Stack Overflow answer about a PySpark partitioning quirk he solved a different way an hour after opening the tab, so the tab is now purely vestigial, a fossil of a problem that no longer exists. One is a blog post titled something like "Understanding MCP" that he clicked on during a fifteen-minute gap between meetings, skimmed four paragraphs of, and abandoned when the fifteen minutes ran out.

That third tab is still sitting there. Unread past paragraph four. Faintly glowing, if you want to notice it that way, though mostly it's just a tab, one of thirty-one currently open across two windows, indistinguishable at a glance from all the others.

He is not, tonight, planning to open it.

---

## 5. Nine PM

Here is what an ordinary Tuesday looks like, compressed: wake, badge on, fourteen hours of reconciling other people's advertising numbers with occasional detours into a lecture about Bellman equations, badge off, dinner eaten in the amount of time it takes to also read something on a phone, and then a stretch of evening that officially belongs to no one.

Officially, this stretch is for rest. Every article about burnout that has ever crossed his feed agrees on this point with suspicious unanimity: rest, boundaries, the sacred separation between work-you and home-you. He believes this, in the abstract, the way you believe a nutrition label. He has also never once, in seven years, managed to sit in a chair at nine p.m. with nothing open and nothing pulling at him, because the thing that pulls is not work. It never has been. It's curiosity, and curiosity does not clock out just because the badge did.

Tonight there's no particular plan. That's worth stating clearly, because it's the honest shape of most nights, and this account will eventually describe some nights that produced something — a working prototype, a bug finally cornered, a concept that finally clicked — and it would be dishonest to let those stand in for all of them. Most nights produce nothing you could point to. Most nights are exactly this: dinner finished, a laptop reopened out of habit more than intention, a cursor blinking in a terminal that isn't running anything yet.

He checks GitHub notifications, a reflex at this point, like checking whether a door is locked. Somebody starred a repository of his. A dependency needs updating in a project he hasn't touched in four months and half-remembers the purpose of. Nothing urgent. Nothing that needed him tonight specifically.

And then — because this is how it goes, because this is the actual mechanism, not some grander one — he remembers the tab. The one from lunch. Four paragraphs into an explanation of a protocol with an acronym he'd heard twice in passing and filed away as *probably relevant eventually.* MCP. He doesn't remember what the acronym expands to. He's fairly sure it's not important that he remember right now.

What's true is smaller than a decision. It's just: the tab is still there. The article is still unfinished. And it is nine p.m. on a Tuesday, and nobody in the world is waiting to know whether he reads paragraph five.

He reads paragraph five.

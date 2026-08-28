## Two Clients, Two Domains

Enterprise data engineering has a disorienting quality he's never fully gotten used to. The technology barely changes client to client — PySpark is PySpark, bronze-silver-gold is bronze-silver-gold — but what the data actually means underneath it changes completely, and that's where the real difficulty lives.

On one project the data is orders and payments for a food-delivery platform, a business he understands from the outside the way anyone who's ordered food on a phone understands it. The texture underneath is nothing like what he'd have guessed. A payment can succeed on the processor's side and fail to register on the order system's side — a small window that, multiplied across enough orders, becomes real money nobody can currently account for. A delivery timestamp can arrive out of sequence because a driver's phone lost signal in a basement for ninety seconds and the events queued up and landed all at once, slightly scrambled, and any reconciliation logic naive enough to assume events arrive in the order they happened draws the wrong conclusion from data that's complete and out of order at the same time.

On another, healthcare data next to digital marketing analytics for the same client — two domains sharing almost nothing except the invoice. Patient data carries a weight food-delivery timestamps don't; a mistake here isn't an accounting discrepancy, it's a compliance problem, and the validation logic has to be built erring toward caution in a way that would be excessive applied to a food order. The marketing side lives in the same probabilistic fog as the advertising work — attribution windows, viewability thresholds, agreed-upon approximations, where the job isn't finding the one true number but keeping the approximation consistent with itself everywhere it's used.

What strikes him, doing both, is how little the underlying question changes despite how completely the surface does. Does this number, after everything done to it, still mean what it originally meant. Doesn't care whether the number is a food order or a patient record or an ad impression. What changes is the cost of getting it wrong, and learning to recalibrate that cost correctly for each domain is its own skill, separate from and just as important as the SQL.

---

Before any of that, a smaller project — a multi-department college website, where his role was pipeline lead and coordinator, which meant something closer to translation than engineering. Admissions wants one thing. Alumni relations wants something that technically conflicts with it. IT has security requirements that constrain what either of them can actually have. Nobody's wrong. Somebody has to hold the whole shape in their head at once, and on this project, unexpectedly, that was him.

It's a different kind of tiring than debugging. Debugging leaves you with an artifact — a fixed bug, something to point to. Coordination leaves you with the absence of the disaster that would have happened if nobody had done it. No commit for that. Just a project that didn't collapse under the weight of its own competing requirements, and five departments who each got a version of what they needed, none of them fully satisfied, all of them able to live with it.

He didn't call this reconciliation at the time. He calls it that now, because it's the truest word he's found for it — raw, contradictory requirements from five departments, cleaned into something a developer could actually build from without hitting a wall three weeks in.

## What He Says at Dinner

Someone outside the field asks, at a family gathering, what he actually does. He's got a compressed answer by now, developed over years, that bears almost no resemblance to any single chapter of this account and captures, he's come to think, something more honestly true than the individual chapters could on their own.

*I make sure the numbers are right.*

Watches it land, usually, as satisfying enough that the conversation moves on — a full sentence that closes the topic instead of opening it further, which is exactly what the room wants from the question, whatever it consciously believes it was asking. Not wrong. Might be the single truest sentence available for compressing seven-plus years and several job titles into something a stranger at a table can actually hold. Reconciliation, evaluation metrics, a QA instinct that followed him from Kalaage Creations to a language model he built himself at midnight — all of it reduces, at the bottom, to that one sentence. Whether the numbers describe advertising spend or a reward curve has never actually changed the verb.

He's tempted, at a longer dinner, to say more. Rarely does. Not because it's secret. Because the gap between what actually happened at 3 a.m. and what's sayable at 8 p.m. across a table, in front of people who weren't there, has never once fully closed, no matter how the story gets told. Some things are legible only from inside the hour that produced them.

He says the one true sentence. Lets the conversation move on.

---

There's a question nobody's ever asked him in an interview panel, and he's started asking it himself when he sits on the other side of the table: what have you built that nobody asked you to build. Not the rehearsed answer about a challenging project. What you reach for when nothing's assigned at all.

He asked it once and watched a candidate talk for ten unstructured minutes about a tool she'd built to track an obscure statistic in a video game she played casually — a dozen users, none paying, all strangers from a Discord server she'd found the way he found the board-game repository, one link leading to another at an hour nobody was making her stay awake for. Not relevant to the role, strictly. Told him more about how she actually thinks than any of the rehearsed answers from the rest of the loop combined.

He doesn't think it should replace the standard questions. He's just noticed he weights the answer more than he expected to, going in.

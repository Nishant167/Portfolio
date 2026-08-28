## Things That Almost Worked

Months into the agent, he adds a calculator. Should be the simplest tool in the project — a model that's famously bad at arithmetic, handed a tool that isn't. It doesn't close cleanly. The model uses it inconsistently, reaching for it on some questions and, on others, just computing the arithmetic itself, wrong, with the same fluent confidence either way.

He spends an evening convinced it's a prompting problem. Tries a dozen phrasings, more emphatic each time, until he's basically shouting at it in the system prompt — which he's slightly embarrassed to admit produces a measurable improvement, as if the model responds to something resembling being yelled at.

The actual understanding, when it comes, isn't a prompting trick. The model isn't failing to notice the tool exists. It's made a judgment, learned from an enormous pile of human writing where people answer simple arithmetic directly, without reaching for a calculator, because reaching for a calculator on "what's 4 plus 7" would look like overkill to a human reader. It absorbed that instinct. It just doesn't know its own arithmetic is unreliable exactly on the cases that look easiest.

He doesn't insist harder. He removes the language that implies simplicity. Frames every arithmetic request as one where guessing, however confident, isn't good enough. Not a perfect fix. Nothing in this project has been a perfect fix. It gets used reliably enough that he stops noticing the gap, which is about as close to victory as this work usually gets.

---

The memory system — letting the agent remember something across separate conversations, instead of starting fresh every time — sits on his list for a month before he builds it. Not because it's hard. Once he sits down, it takes an evening.

He's not entirely sure, even after, why it took so long to start. The best he can do: giving it memory felt like a bigger commitment than any other tool had. Like it crossed some threshold the calculator and the file lookup hadn't. Turning the thing from *tool that answers a question and forgets* into something that accumulates a history with him. He's aware that sounds like an emotional hesitation more than a technical one. He's fairly sure that's exactly what it was.

Once built, it works the way he expected technically and stranger than he expected it to feel. On its second real conversation, the agent references something from the first without being asked to. A small jolt. Not alarm. The same flicker he'd felt watching the RL agent start behaving like it had a strategy — the sense of having built something now doing a slightly more continuous version of what he built it to do than he'd braced for.

He keeps it. Doesn't examine the jolt much further than that.

---

A CNN classifier from the coursework plateaus at a ceiling nothing moves. Months later, revisiting it for an unrelated reason, he reruns the experiment properly this time — one change per attempt, notes kept, instead of the rushed two-things-at-once he did under the original deadline.

Seven attempts. More layers: no change. Fewer layers: worse. Learning rate, batch size: marginal, maybe noise. The sixth attempt is the one that actually moves the ceiling, and it isn't a change to the model. It's the data — small random crops and rotations on the training images, expanding a dataset that turns out, examined honestly for the first time, to have been smaller than he'd been treating it as.

Six attempts tuning the model. One attempt, forced by running out of easier options, looking at the actual data. He starts asking the data question first on new problems, before touching a hyperparameter. Not because hyperparameters don't matter. Because his own instinct, left alone, reaches for the tunable thing before the foundational one, every time, and knowing that about himself has already saved him a repeat of this exact sequence once.

## Finishing Something

Roughly ten months after the first chunking fix, the RAG pipeline reaches a state he's willing to call finished. Not perfect. Stable enough, useful enough, that he stops actively developing it and starts just using it.

This is rare, if you read the rest of these chapters as a continuous string of active development. Most of what fills them — the agent, the portfolio, the debugging — exists in a permanent state of not-quite-done. The RAG pipeline is different, and he's not entirely sure why. Maybe because it had a bounded goal from the start. Answer questions about documents, with citations. Achievable. Checkable. The agent's goal was always closer to *be capable of doing more things* — no ceiling, expanding by definition every time a new tool gets added.

He uses the finished pipeline for nothing dramatic. His own notes, a handful of technical documents. No ceremony. No final commit marked with anything more than the small change it actually represents.

He notices, some evening, a small gap where a RAG-pipeline session used to sit in the rotation. Not loss exactly. The particular kind of absence a habit leaves once it's actually satisfied instead of abandoned.

The evening doesn't stay empty long. It never does.

---

He records a demo of the agent, eventually, for a friend who'd asked more than once what he'd actually been building. First take, goes perfectly. Every tool call resolves clean. No hangs, no misfires — none of what's actually filled these months.

Watching it back, he notices something he didn't expect: the demo is true — nothing in it is faked — and it's also a kind of lie, because it compresses the whole thing into four minutes that skip everything that actually happened. The calculator's stubbornness. The month before he built memory. The race condition that took a weekend and two hundred test runs to trust, which hasn't come up yet, but will.

He sends it anyway. It does its job.

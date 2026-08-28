# PART THREE — BUILDING

## An Empty Folder

`mkdir tki-agent`. Eleven characters, most of them the project name. A folder with nothing in it. No history, no evidence anything's about to happen. There's a specific optimism attached to the second before `cd` into an empty directory — chemical, not rational, and he's felt it enough times now to recognize it as such. Every project is perfect right before it contains any code.

The name doesn't mean much. TKI. He picked it fast, on the theory that a bad name attached to something that gets built beats a perfect name attached to something that doesn't. He's watched too many side projects die in the naming phase — a Notion page full of candidates, none committed to, the actual idea cooling under the weight of finding the right word for it.

`python -m venv .venv`. `pip install mcp`. It installs clean, which feels like luck and is really just a sign the ecosystem's too young to have accumulated real dependency conflicts yet. Give it two years.

He writes `main.py`. Two lines — an import, a `print("hello")`. Runs it. Prints "hello." Not an accomplishment. The least impressive thing a computer can be asked to do. There's a flicker of something anyway, every single time — proof the environment works, the interpreter's where it should be, nothing's broken before the actual problem has even shown up.

Twenty minutes in, no friction. Just an empty folder that isn't empty anymore.

---

The MCP spec, read at nine p.m. as a diagram, is a different object at eleven when you're trying to make the diagram run. The gap between understanding an idea and implementing it isn't one you can read your way across.

First tool: a function that returns the current time. Deliberately trivial. Not because a clock is useful — because it's the smallest unit of "the model asks for something real and gets something real back," and if that doesn't work nothing built on top of it will either.

He writes it. Registers it. Points a test client at it. Gets, on the first attempt, a beautifully unhelpful error — a stack trace three levels deep ending in a complaint about a schema mismatch that names neither the field nor the side.

Forty minutes of print statements at every layer, narrowing the search one `print(f"HERE: {x}")` at a time, until it turns out the tool's return type doesn't match what the schema declared — a dictionary where a specific object was expected. One line. The kind of fix that makes the forty minutes before it feel faintly ridiculous, like the computer had been sitting there the whole time perfectly capable of saying *your return type is wrong on line 14* and simply chose not to.

He runs it again. The call goes out. The time comes back, correctly, as if the model had always known it — which it hadn't, five minutes ago, and couldn't, on its own, no matter how large it was.

Not much. A working clock, wired into a chat interface, that a competent developer could build in twenty minutes flat instead of two and a half hours. He sits back. A few minutes before midnight. None of this counts for anything at work — no ticket references it, no standup will mention it. He is, right now, more satisfied than he was at any point during the actual workday.

He doesn't look at that too hard. What's he's thinking about, at midnight, is the next tool.

## The Minimal Clone

Before the agent, before MCP, there was a dumber project. A repository still sitting there, titled without irony: minimal-chatgpt-clone. Not a product. An attempt to answer a question that had been bothering him for weeks — underneath the polished interface everyone uses, what's actually happening when you watch words appear one at a time?

Turns out: almost insultingly ordinary. You send a prompt. You get back a stream of small chunks over the same kind of connection that used to carry stock tickers. The illusion of a mind composing a thought is a for-loop printing chunks slightly slower than instantaneous. He knew that abstractly. Watching his own for-loop do it is a different kind of knowing.

The streaming part came together fast — too fast, which should have been a warning. The second requirement, multi-turn memory, is where the actual project was hiding.

There is no memory. Not in any sense a person would recognize. Every time you send a message, his code gathers up the whole conversation, glues it into one document, and sends it again, from the beginning, as if for the first time. The model isn't remembering anything. It's re-reading the entire transcript on every turn and responding like it always knew it.

It works. That's the strange part. Works so well the illusion is completely convincing right up until you build it yourself and see the trick from backstage.

He doesn't chase the philosophical version of this very far. It's past midnight and the actual problem is smaller and less interesting: the transcript keeps growing, and eventually it costs money to send.

---

Every API that streams tokens is also counting them, and every token costs a fraction of a cent that means nothing on message four and starts meaning something on message forty. He tries the obvious fix first — chop off the oldest messages once the transcript gets long, first in, first out. It works, technically. It also produces a specific failure: ask the model to recall something from early in a long conversation and it will confidently tell you something untrue, because the actual information scrolled off the buffer and nobody told it to say *I don't remember that* instead of generating something plausible.

A model doesn't know what it doesn't know. It doesn't experience the absence of information as a gap. It experiences it as an invitation.

He doesn't solve this properly. Nobody solves it properly in one night. He adds a running summary instead — a compressed paragraph updated every few turns, so something survives after the raw messages fall off the back. A patch. Loses detail. He thinks of it, without much resistance, as silver instead of gold. Cleaner than the raw mess. Still missing things a full reconciliation would catch.

He knows the analogy's a stretch. Thinks it anyway. By one in the morning most of his vocabulary for new problems is borrowed from the day job, whether it fits or not.

## Citing Its Sources

The RAG pipeline starts as most of his projects do — a reaction to something that annoyed him. A fluent model answering a question about a document it never read, in a tone indistinguishable from a model that read it carefully. No tell. No hedge. Two answers, one grounded and one invented, delivered with identical certainty.

The fix, roughly: give the model a library card instead of trusting its memory. Chop documents into chunks, turn each chunk into a list of numbers that captures something about its meaning, store all of it somewhere searchable, and when a question comes in, find the nearest chunks and hand only those to the model.

He builds it with LangChain doing the orchestration, Hugging Face's embeddings, Llama for generation. Nothing original about the stack. Thousands of people built this exact combination this year. He finds that oddly comforting rather than discouraging. He's not trying to invent RAG. He's trying to understand it by breaking his own version of it, which turns out to be a different kind of understanding than reading about someone else's.

The chunking goes wrong first, in a way that's almost funny once he sees it. He splits by a fixed character count, and a sentence explaining a critical exception gets sliced in half — the rule in one chunk, the exception dangling alone in the next, no antecedent. Retrieved on its own, the exception reads like an unexplained contradiction. The model answers, grounded in the retrieved text, completely wrong, because the text itself doesn't say anything coherent anymore.

He hadn't broken the model. He'd broken the evidence and then blamed the witness.

He fixes the chunking to respect sentence boundaries, adds a small overlap between chunks. The failure rate drops. Not to zero — nothing drops to zero in this. He builds an ugly evaluation set, questions with known answers, run automatically after every change. He doesn't call it a test suite on purpose. He calls it that because it is one, wearing a newer name.

Somewhere in a lecture he half-watched two weeks earlier, a professor mentioned RAGAS — faithfulness, whether the answer follows from the retrieved text; relevance, whether the retrieved text was the right text at all. It matters now, at half past one, because it turns *this seems better than yesterday* into a number. Faithfulness up. Relevance up.

He doesn't build anything a company would pay for tonight. He builds an answer to a question that's been bothering him since before he had the words for it: not can a model answer questions about a document, but how do you prove it's actually reading instead of guessing well. Same question that followed him out of a QA desk years ago. It doesn't look like it's planning to leave.

## Q-Learning at Midnight

The assignment isn't complicated on paper. An agent that learns a simple game — a grid, a cart balancing a pole. Give it a reward signal. Let it try things. Watch it get better.

The theory's elegant the way theory is: the Bellman equation, the value of where you are equal to the reward now plus the discounted value of wherever you end up next. Deferred gratification, formalized, with a Greek letter for how much the agent should care about the future.

He builds a small network. PyTorch hides a genuinely enormous amount of linear algebra behind a `.backward()` call so casual it's almost insulting. He wires the training loop — play a move, store the experience, sample old experiences along with new ones so the agent doesn't forget what it learned an hour ago.

He runs it. For several hundred episodes, nothing. Not an error — the code runs clean. Nothing in the sense that the reward, plotted to a file every fifty episodes, refuses to climb. It jitters. Dips. Around episode three hundred it looks, briefly, like it's improving. By four hundred it's back where it started, like it learned something and then, for reasons no log explains, changed its mind.

Nobody warns you that the code can be completely correct and the agent can still fail to learn. He spends forty minutes convinced the architecture is wrong before finding, almost by accident, that the discount factor was typed as 0.9 in one function and 0.99 in another — two numbers that look nearly identical and produce agents with almost opposite temperaments. A decimal place. Forty minutes.

He fixes it. The curve does the thing it's supposed to — climbs, jaggedly, the honest noise of a system still exploring but unmistakably getting somewhere. Not triumphant. A heart monitor with a mild fever. But the average is rising, and at 1:20 in the morning that's the entire difference between learning and randomly consuming electricity, and it feels disproportionate.

He doesn't finish the assignment tonight. The agent wins more than it loses now, in the small cramped world of the grid. That's enough to know the wiring's right, even if the policy is, by any reasonable standard, a little dumb. He'll tune it this weekend. Or he won't.

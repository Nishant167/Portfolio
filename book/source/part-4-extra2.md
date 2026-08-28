## Infrastructure That Describes Itself

Terraform arrives the way most of the DevOps tooling does — not an evening's curiosity, something the day job increasingly assumes he already knows, learned in the gap between assuming and actually knowing.

The idea's simpler than the ecosystem around it suggests: instead of clicking through a cloud console to create a server by hand, you write a file describing what should exist, and a tool reads it and makes reality match — creating what's missing, leaving what's correct alone, and telling you exactly what it's about to change before it changes anything.

He sets up a small personal server with it. Low stakes on purpose. The failure that actually teaches him something arrives when he bumps a disk size and the preview shows, instead of a modification, a full destroy-and-recreate — that particular field isn't one the provider allows updating in place, and Terraform is perfectly willing to tear the server down and rebuild it, silently, correctly, exactly as instructed, unless you happen to notice the word *destroy* next to a resource you thought you were adjusting.

He notices. Cancels. Finds the actual supported way to resize a disk. A smaller, less satisfying diff, correctly scoped to what he wanted.

Infrastructure-as-code and data-as-pipeline are the same discipline pointed at different subjects, and he clocks the parallel immediately — an insistence that the current state of something complicated should be derivable from a document a human can read, not trusted to memory, not scattered across a console nobody's going to remember their way through in three months.

---

Ansible the same evening, adjacent tool, different half of the problem — Terraform decides what exists, Ansible decides what's configured on top of it. His first playbook isn't idempotent, though he doesn't find out until he runs it twice by accident and watches it cheerfully re-append a config line that was already there, doubling an entry meant to appear once. Small mistake. The kind that compounds invisibly until something downstream finally trips over it.

The fix is a module built for exactly this — checks whether a line exists before deciding whether to add it. He runs the corrected playbook three times to prove nothing changes on the second and third. It doesn't. There's a specific satisfaction in a system correctly reporting it has nothing left to do — the same shape as the reconciliation report agreeing with itself, the same shape as the green CI column. Not something happening. The quiet, verifiable confirmation that nothing needs to happen anymore.

## The Viva

The M.Tech includes an occasional oral exam — a professor, live, on a call, asking questions about a submitted project until satisfied the candidate actually understands what they built. He finds this more nerve-wracking than any written exam in years, and it takes him a while to name why: a written assignment can be revised before anyone sees it. A viva has no revision pass. The answer either exists, clearly, in his own working understanding, or it doesn't, with no forty minutes of quiet googling available the way there would be on an ordinary evening.

The question that catches him off guard, on the DQN project, isn't about the discount-factor bug he could discuss fluently by then. It's a follow-up, almost casual — what happens to the learned policy if the reward function changes after training's already converged. He hadn't thought about it. His training had run once, to one reward function, with no reason to consider a change he'd never actually made.

He answers slowly, working it out loud, in front of someone qualified to catch him if the reasoning goes somewhere unjustified. No time to build the tidier version he'd have produced with twenty minutes alone. The answer he lands on — that a policy would likely transfer partially, keeping behaviors still rewarded, missing anything new — turns out to be roughly right, confirmed by a brief nod before the next question.

What stays with him isn't the answer. It's the format — being made to reason live, unrevised, in front of someone who'd notice a bluff. His actual working life, full of messages he can draft and delete before sending, rarely demands that of him anymore. He'd half-forgotten how clarifying it is to not have the option.

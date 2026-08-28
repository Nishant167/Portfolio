## The Test That Passed for the Wrong Reason

A unit test in the reconciliation tooling's own suite passes, reliably, for nearly a year, before he finds out by accident that it's been passing for a reason with nothing to do with what it was written to verify.

It was meant to catch a specific edge case in currency handling — mismatched conversions hiding inside aggregate totals, the same category of bug that's cost him whole afternoons elsewhere. Green every run, for months. What he finds, going through the suite for an unrelated cleanup, is that the mock data meant to simulate the mismatch never actually triggers it. A copy-paste error in an early draft of the test, never caught, because the test passed — the exact signal everyone had been trained to read as *everything's fine.*

A test passing because it verifies correct behavior and a test passing because it never actually exercises the behavior at all look, from a dashboard, identical. Both green. Only one of them means anything.

He finds it the way he finds most things — not insight, a kind of stubborn double-checking he's gotten more disciplined about over the years. Deliberately breaking the code the test is supposed to protect, to confirm the test would actually catch it. It doesn't. Stays green. Cheerfully, incorrectly confident, exactly as it's been for a year.

Fifteen minutes to fix the test itself. Longer to sit with what it costs him — a specific loss of blanket trust in every other green checkmark in the suite, a suspicion he can't fully resolve without repeating this exercise against every single test, which he does, eventually, a handful at a time, over the following weeks. Two more turn out to have the same problem. Smaller. Real.

The discipline of reconciliation, applied everywhere else in his work without hesitation, had never once been turned on the tests themselves. He'd been exempting one corner of his own practice from a rule he'd have insisted, if asked, applied to everything. It doesn't get to be exempt. Nothing does. He knew that already, in every other direction. It took a copy-paste error sitting quietly for a year to point it back at him.

---

He's noticed a specific bad habit watching the RL training runs live — the temptation to kill a run at episode two hundred because the curve looks flat, when the same curve, left alone, would often break out by episode three hundred on its own. The plateau isn't fake. What's fake is his confidence, watching in real time, that a given plateau is permanent.

He starts, eventually, not watching. Kicks off a run, closes the tab, works on something else, checks only once it's finished. Reliably better decisions than watching produces — which is a strange thing to learn about his own judgment. Less information, checked less often, outperforms constant granular visibility, because the granular version keeps mistaking noise for signal and can't tell a meaningless dip from a real one at that resolution.

There's a version of this that applies to the dashboards he builds at work, the ones other people stare at, and he half-notices the parallel without chasing it very far. Real-time granularity tends to produce worse decisions than a well-designed weekly summary, for the same reason. He's on the building side of that one, mostly. The RL runs taught him something about the watching side he wouldn't otherwise have had reason to learn.

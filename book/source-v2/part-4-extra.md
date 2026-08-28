## The Rollback

A production incident, genuinely rare in a role built to prevent exactly this. A deployment passes every automated check and, twenty minutes into production traffic, starts producing a client-visible discrepancy in a live dashboard — not the reconciliation gate's fault, exactly. A gap in what the gate was built to check. A data condition nobody thought to test, absent from every pre-deployment sample by chance, present in the first twenty minutes of real traffic by the opposite chance.

His instinct, with a manager's message already arriving, is to fix forward — find the bug, patch it, resolve the root cause fast instead of admitting defeat and rolling back. He starts down that road for about fifteen tense minutes before overriding himself. A known-good previous state, restored now, beats an unknown amount of time spent chasing a cause under pressure with a client watching a broken dashboard.

He rolls back. The visible symptom resolves in minutes. The actual cause takes another day, done calmly, the next morning, with none of the adrenaline.

The patient, stubborn persistence that's gotten him through a hundred personal-project evenings would have been the wrong instinct here. Nobody's watching a personal project break in real time. He's not sure, turning this over afterward, that he'd have made the right call a year earlier.

---

He silences a whole category of linter warnings, once, in the portfolio's build — a rule about asynchronous data fetching, technically correct, numerous enough across the codebase that fixing every instance felt like a multi-hour detour from whatever he'd actually sat down to build that evening. One line in the config. Warnings gone.

Three months later a real bug — stale data rendering because a fetch resolves after its component has already unmounted — turns out to be exactly the failure mode the silenced rule existed to catch. The tool had told him, months in advance, precisely where this was going to surface. He'd chosen not to listen because listening would have cost an evening he didn't want to spend on something that wasn't a problem yet.

He re-enables the rule. Fixes every flagged instance properly this time, a genuinely tedious hour and a half he could have spread across three months at almost no cost each. A warning silenced without being fixed is a debt. He's known this since the `--force` flag. Knowing it and acting on it, it turns out, are different states.

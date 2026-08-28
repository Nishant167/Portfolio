## The Portfolio, Again

There's a version of this portfolio built entirely in Three.js. Go back far enough in the commit history — nobody does, but he has, more than once, out of a specific nostalgia for his own bad decisions — and you can watch it get built, section by section, an entire 3D scene constructed to hold what is, underneath the geometry, a fairly ordinary set of facts about one career.

He doesn't remember exactly what he was thinking when he decided a résumé needed a camera that orbits in three dimensions. He remembers the feeling better than the reasoning. A conviction, strong enough to survive several weekends, that a normal scrolling page was beneath him. That the only way to signal — to a recruiter, to himself, to nobody in particular — that he belonged in a room with people doing interesting work was to build something a normal page couldn't do.

It worked, narrowly. It rendered. It rotated. It also took forever to load on anything less than a great connection, and it was, if he's honest looking back, more interesting to build than to look at.

The commit that follows it, months later, is blunt in the way a message written for an audience of one tends to be: *Redesign away from generic AI-template look.* No elaboration. No ticket, because there was no ticket — just him, one evening, recognizing that the Three.js rebuild had calcified into something that looked like every other AI-adjacent portfolio that season. Dark background. Gradient somewhere. A typeface a hundred other sites were using to promise the same thing.

He hadn't copied anyone specifically. That's what made it worse. Nobody told him to make it look like that. He absorbed it — tab after tab of other developers' portfolios, other people's "here's how I built my site" threads, until the aggregate of everything he'd looked at quietly became the thing he built.

Redesign, again. Data-engineering theme this time — pipelines instead of orbiting spheres. Better. Not perfect. Nothing built at eleven p.m. between a workday and an M.Tech module ever is, and he's mostly made peace with that.

---

The version that exists now didn't start as a data-engineering idea at all. It started as somebody else's real-estate dashboard.

Nestio — a property-listing platform he found during an unrelated evening of browsing — had a design language he couldn't stop thinking about. Persistent sidebar. Warm cream canvas instead of the reflexive dark mode every developer portfolio defaults to. A terracotta accent doing more work than one hue should be able to. It was built to sell apartments. He wanted to describe a career in data pipelines. Nothing in common, on paper.

What he actually did was closer to translation than design. A property card shows a photo, a price, a bed count. His version needed a project, a stack, a scale, an impact. Not the same information — the same shape of information. Price became years of experience. Beds and baths became pipelines built. The "available now" badge became an uptime percentage, ninety-nine point nine, which happens to be true of the systems he actually maintains. A decorative flourish that's also an accurate fact about his job.

He rebuilds it in Next.js. Tailwind. Chart.js for a donut chart and a dual-line chart that's more honest than most résumé bullets about how his time's actually split. None of it is difficult, exactly. Most of it is long — the kind of long that comes from caring about details nobody asked him to care about, adjusting a shadow's opacity by two percent and staring at it longer than two percent has ever deserved.

---

Thursday night. GSAP's ScrollTrigger stops firing. No error, no warning — the calm, undisturbed silence of code that thinks it's working.

He spends over an hour convinced the fix is in his own configuration, tabbing through documentation, trying variations of the same broken assumption with the specific stubbornness of someone who's decided the problem must be small because the fix, if it exists, is probably small too. Bad heuristic. Problem size and fix size aren't correlated, and he knows this professionally, and falls for the inverse of it anyway.

The actual issue is structural. His page doesn't scroll the way a browser normally scrolls — a smooth-scrolling library wired to an inner content column, not the window, because the sidebar needed to stay fixed. GSAP assumes, by default, that scrolling happens on the window. It always has, since the dawn of ordinary webpages.

The fix, found four pages into a search, buried in someone else's GitHub issue: one configuration option, telling ScrollTrigger explicitly which element to treat as the scroller. One line.

It works immediately. Sections fade in on scroll. Numbers count up. A ring — the same one, still frozen at seventy-two percent in a file he wrote and half-forgot — draws itself onto the screen for the first time, stroke by stroke.

He watches it happen five times in a row, refreshing purely to watch the ring draw itself again. No ticket required this. No client asked for it. By every external measure, a pointless use of a Thursday night.

He refreshes it a sixth time anyway.

---

By half past one, four things are running that have nothing to do with each other, and none of them have been abandoned yet.

The RL training loop, reward curve still climbing, glanced at rather than watched, the way you check something in the oven without opening the door. The portfolio's dev server, hot-reloading every time he nudges a spacing value and then, ten minutes later, nudges it back. A Python REPL testing whether last night's chunking fix holds against a new batch of questions. And the agent, stuck mid-conversation, waiting on a tool call to a service he hasn't finished wiring, patient in the specific way only software can be patient about being stuck for twenty minutes.

None of this looks like anything from outside. If someone photographed the desk — nobody's going to, there's nobody here — it would show one person, one chair, two monitors, and no visual evidence of four threads held loosely in one skull at once.

He knows, somewhere under the momentum, this isn't the efficient way to do any of it. He's read the advice about focus. Pick one thing. He's never once, on a night like this, actually followed it, because the four things keep feeding each other in ways that don't show up on a productivity app.

It's not sustainable. He knows that too. Somewhere past two this stops feeling like momentum. But that's not tonight's problem. Tonight, four terminals, a climbing reward curve, a ring drawing itself on refresh, nothing broken badly enough yet to demand a decision.

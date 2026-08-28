## Choosing a Tool for the Wrong Reason

The vector database decision eats most of an evening that should have taken ten minutes. FAISS — a library, runs on his own machine, free, no monthly bill — against Pinecone, a managed service that hands him a working index in under a minute, an API key and a client library and queries returning results before he's finished reading the docs he opened to understand them.

Pinecone is the correct choice for anything with real users. He picks FAISS, for a project with exactly one user, because the whole point of building this himself instead of reading about how other people built theirs was understanding what's happening under the abstraction, and a managed API would have handed him a black box at precisely the layer he wanted to see into.

He knows this is a slightly perverse way to choose a tool. Optimizing for what he'd learn instead of what would ship fastest isn't a decision he'd defend at work. This isn't work. This is the one place the metric isn't velocity.

---

Hugging Face's model cards vary wildly in honesty, and he's started treating the honest ones as a signal in themselves. A good one reads like a confession — this model underperforms on numerical reasoning, was trained mostly on English web text, expect weaker results on domain vocabulary. A bad one says nothing. Boilerplate, a benchmark table with no context, no admitted weakness, because admitting a weakness felt to whoever wrote it like undercutting their own work instead of what it actually is — the single most useful thing they could tell him.

He picks the honest model over the marginally higher-scoring one. Not because honesty about limitation makes something better. Because it makes it checkable, and he's decided, by now, that checkable is worth more than an unverified half-point of benchmark improvement.

---

The NLP module makes ordinary sentences briefly strange. A model doesn't read words — it reads tokens, fragments that don't always line up with anything a person would call a meaningful unit. He runs a line from an old commit message through a tokenizer just to see it happen: `base` and `Path` split apart, `Git` and `Hub` split at the internal capital in a way he didn't expect a purely statistical process to notice.

Small discovery, larger consequence. Half the strange things he's watched a model do with numbers or mixed-case code trace back to this layer — deciding, before any of the actual "understanding" happens, how to chop the input into pieces. A retrieval failure he used to chalk up to a vague *the embedding didn't capture the meaning* sometimes turns out to be exactly this instead: a technical term split in a way that scattered its meaning across fragments nothing ever learned to recombine.

Not a universal fix. Most of the pipeline's failures are still chunking, still retrieval. But it's a new place to look, which turns out to matter more than any single technique it hands him.

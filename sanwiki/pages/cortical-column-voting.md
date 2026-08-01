![Cortical Column Voting](../assets/generated/san/cortical-column-voting/cortical-column-voting-20260702-v1.png)

This image frames cortical column voting as a distributed consensus mechanism: local columns propose ambiguous reference-frame hypotheses, Layer 2/3 lateral fibers compare them, competitive inhibition prunes inconsistent patterns, and a sparse surviving ensemble becomes the settled percept without a central integrator.

Cortical column voting is the process by which many cortical columns — each holding partial or ambiguous evidence — share hypotheses via long-range lateral connections and converge on a single consistent percept or inference. In SAN this is the mechanism that connects [[dendritic-compartmentalization]] and [[self-aware-networks]]: distributed local processors arriving at global consensus without a central integrator.

## Core Mechanism (Numenta / Thousand Brains)

Each cortical column maintains a [[reference-frame]] model of the sensory fragment it receives. When evidence is ambiguous (e.g., one finger feeling a cold hard object that could be keys or a phone), a column generates a set of active hypotheses encoded as [[sparse-distributed-representations]] on its active dendritic segments.

Columns transmit these hypothesis sets via layer 2/3 long-range lateral connections. Through competitive inhibition, the network rapidly prunes hypotheses that are inconsistent across columns. The representation gets sparser until only hypotheses consistent with *all* available evidence survive — the "vote" is settled.

Key properties:
- **Sparsity is the vote**: 2% active neurons at any given time; the set of active cells encodes the surviving hypothesis
- **NMDA spikes as predictions**: dendritic segments fire ~8-9 coincident synapses within 5ms to signal "this context predicts this outcome" — the sub-threshold depolarization is a prediction, not yet an [[action-potential|action potential]]
- **Layer 2/3 as voting bus**: long-range lateral projections in this layer carry cross-column hypothesis comparisons

## Sequence Learning and Reference Frames

The same mechanism enables sequence learning: if a layer's recurrent connections carry the prior time-step's activity, each column can predict what comes next. Non-Markovian sequences (melodies) are learnable because full context history — not just the immediately prior state — shapes which dendritic segments are primed.

Reference frames (grid-cell-like coordinate maps within each column) also feed voting: knowing relative finger positions lets touch columns vote down the "keys vs phone" ambiguity quickly.

## SAN Connection

[[napot]] holds that [[neural-oscillations|neural oscillations]] carry phase-coded information. Voting is the spatial complement: while NAPOT resolves *timing* ambiguity, column voting resolves *object* ambiguity. Together they instantiate SAN's prediction that the brain is a distributed network of coupled [[gh-a0206z|self]]-modeling units — no homunculus, just consensus.

## Outbound Links

- [[dendritic-compartmentalization]]
- [[sparse-distributed-representations]]
- [[reference-frame]]
- [[napot]]
- [[oscillatory-neural-coupling]]
- [[self-aware-networks]]
- [[long-term-potentiation]]

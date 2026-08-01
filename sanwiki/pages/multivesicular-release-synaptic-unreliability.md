**Multivesicular release (MVR)** is the capacity of a single synapse to release 0–3 synaptic vesicles per spike, encoding graded spatial information rather than an all-or-nothing signal. In SAN theory, MVR is a critical mechanism that undermines the classical [[synaptic-unreliability]] assumption embedded in most artificial neural network designs.

## Core argument

Standard computational neuroscience treats synapse transmission as stochastic and unreliable — a noisy binary channel. MVR reveals the opposite: variability in vesicle count (0, 1, 2, or 3) is a controlled signal dimension. Each synapse can transmit not just spike presence but also a spatial intensity value, expanding the information capacity of individual [[dendritic-computation]] sites.

This critique connects to SAN's broader rejection of oversimplified neural encoding: [[spike-frequency-coding]] and [[temporal-pattern-coding]] are complemented by the spatial dimension that MVR enables.

## Implications for SAN

- [[neural-array-projection-oscillation-theory]] (NAPOT) relies on neurons encoding *where* on the dendritic tree a signal arrives, not just *whether* it arrives. MVR provides a mechanism for that spatial weight.
- The failure to model MVR in artificial networks means standard ANNs lack the spatial resolution SAN theory predicts is necessary for [[gh-a0206z|self]]-aware processing.
- Sources like *Rhythms of the Brain* and *The Brain from Inside Out* are cited in the source as supporting the broader hypothesis that the brain's architecture has been systematically misread.

## Related concepts

- [[synaptic-unreliability]]
- [[dendritic-computation]]
- [[spike-frequency-coding]]
- [[temporal-pattern-coding]]
- [[neural-array-projection-oscillation-theory]]
- [[gray-matter-composition]]
- [[inhibitory-interneurons]]

## History

The [[synaptic-unreliability|synaptic unreliability]] concept became foundational to connectionist AI in the 20th century. MVR evidence (documented in experimental synaptology by the 2010s) had not widely propagated into AI architecture design as of the recording date of this source.

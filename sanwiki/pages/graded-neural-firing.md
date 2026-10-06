# Graded Neural Firing

![Graded signaling in SAN: historical signal-level shorthand, variable outgoing patterns, probabilistic synaptic transformation, and distinct excitatory and inhibitory receiver routes](../assets/generated/san/graded-neural-firing/graded-signaling-source-and-synapse-20260926-v2.png)

SAN's **graded neural firing** proposal concerns differences in a neuron's influence on its connected network, not merely whether a spike occurred. The historical lecture uses **0, 1, 2, and 3** and the analogy **off, baseline, bright, and brightest** to describe levels relative to a tonic pattern. It connects stronger synaptic influence, recruitment of inhibition, and the formation of larger patterns to a proposed functional meaning: [[confidence-in-neural-pattern|confidence in a pattern]].

These are model-level distinctions. They are not a claim that a level-3 event releases exactly three vesicles, that every neuron has four discrete physiological states, or that influence spreads in fixed concentric circles. The figure separates the SAN shorthand from a schematic account of the cellular transformations through which an outgoing event can affect a receiver.

## The Original Argument

In [[gh-b0065y|the preserved lecture transcription]], the argument proceeds from a single event to its regional consequences:

1. A stronger outgoing event is proposed to produce a greater synaptic effect.
2. Through the inhibitory connections discussed in the source, this can change how many connected neurons are suppressed and when suppression occurs.
3. Several such influences can combine smaller patterns into a larger pattern.
4. The extent and timing of this coordinated activity are interpreted as a confidence-like property of the emerging pattern.

The source says **more vesicles**, not a vesicle count numerically equal to the shorthand label. It describes the region to which a neuron is connected, not a measured circular inhibition radius. Preserving these distinctions matters: the proposal is about a distributed, receiver-dependent pattern, not an isolated four-bin release meter.

A related transcription, [[gh-b0103ywhisper|Oscillating Volumes]], does use one- and three-vesicle examples while discussing how different synapses can excite or inhibit a receiver. Those examples remain part of the historical argument. They should not be silently erased, nor converted into an experimentally established release alphabet for every neuron. The present figure explains the shared receiver-dependent mechanism without treating those example counts as universal measurements.

The source also links inhibitory transmission to earlier potassium-channel opening in inhibited neurons. That receiver-side proposal must be distinguished from **presynaptic potassium control of action-potential duration**. The two roles should not be merged into one unlabeled potassium arrow.

## Cellular Mechanisms

The regenerative initiation of an action potential does not make its entire waveform, timing, or synaptic consequence invariant. In particular preparations, somatic state and axonal potassium conductances change the waveform at axons and boutons. Those changes can affect calcium entry and synaptic efficacy. See [Shu et al. (2006)](https://doi.org/10.1038/nature04720), [Foust et al. (2011)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3225031/), and [Rowan et al. (2016)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4969170/).

The relevant chain is conditional:

```text
outgoing waveform, timing, and recent activity
-> bouton-specific calcium entry and release machinery
-> probabilistic transmitter release
-> receptor- and state-dependent receiver response
-> effects on connected neurons and population timing
```

This is why [[potassium-channel-modulation]], [[action-potential-duration]], and [[action-potential-waveform]] belong in the account. Replacing their effects with spike count alone would omit part of the SAN question. Conversely, an illustration must not assign a universal number of vesicles or a universal downstream response to a waveform width.

Excitatory recruitment and inhibitory influence also need distinct routes. In mouse barrel-cortex experiments, a single excitatory pyramidal-cell event could recruit a parvalbumin interneuron that then inhibited other pyramidal cells. That is a measured example of a cell-type- and state-dependent circuit, not evidence for an arbitrary inhibition radius ([Jouhanneau et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5906477/)). Inhibitory effects cannot all be represented as potassium efflux: recordings in awake mouse cortex found predominantly shunting GABA-A synaptic effects, with chloride gradients and network state affecting the response ([Burman et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37659408/)).

**Figure scope:** The neuron and synapse are schematic, not to scale. The voltage curves are illustrations, not recordings. The right-hand routes are examples, not exclusive target-location rules. The lower ribbon states SAN's proposed network interpretation; the cellular studies do not by themselves measure confidence or validate a four-level code.

## Connection to oscillatory dynamics

The lecture places these graded influences inside a continuing tonic array. Phasic departures, suppression, and their changing timing interact across connected oscillators; smaller patterns can contribute to larger ones as differences are redistributed and the activity changes toward baseline. In SAN, those differences belong to the [[phase-wave-differentials|phase-wave-differential]] account of rendering, including excitation and inhibition rather than excitation alone.

The source uses alpha-associated sensory rendering and slower, broader integration to explain different scales of the [[phase-field]]. It also discusses beta, gamma, theta, and delta in that larger argument. These are parts of the proposed functional account, not a claim that an EEG frequency universally determines a single-cell release state. Its contrast with a binary [[sparse-distributed-representation]] concerns the additional distinctions supplied by a tonic reference and graded departures from it.

## Sensory Routing Context

The same lecture uses olfactory routing to motivate an interconnected, distributed account of sensory processing rather than strict modular isolation. The preserved file explicitly warns that its transcription needs correction; the sensory-routing passage contains unresolved anatomical wording and refers to an unidentified 2020 paper. Its network-level motivation is retained here, but those uncertain words are not used as an anatomical map in the figure. The original passage remains available in [[gh-b0065y]].

## Related concepts

- [[confidence-in-neural-pattern]]: the proposed functional meaning of coordinated influence.
- [[tonic-phasic-firing]]: baseline and departures from baseline.
- [[phase-wave-differentials]]: differences involving excitation, inhibition, and timing.
- [[napot]]: the wider SAN rendering proposal.
- [[action-potential-duration]]: potassium-linked waveform duration and synaptic consequences.

## History

This page explains the argument preserved in [[gh-b0065y|b0065y]], including its regional inhibition, pattern-combination, tonic-array, oscillatory-scale, and sensory-routing context. The preserved transcript, rather than a newly invented vesicle-count scale, governs the historical interpretation. The original recording has not been checked in this image revision.

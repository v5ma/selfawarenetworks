Mixed selectivity describes neurons whose response pattern changes depending on the combination of inputs or the current network context — the opposite of grandmother-neuron specialization.

Unlike [[grandmother-neuron]] or Jennifer Aniston neurons (which fire for one concept), mixed-selectivity neurons in higher cortical regions such as the prefrontal cortex encode multiple dimensions of information simultaneously. Their activity is neither random nor purely dedicated; it is *contextually multiplexed*.

## Relationship to SAN theory

In [[NAPOT]] ([[neural-array-projection|Neural Array Projection]] Oscillatory Tomography), mixed selectivity arises naturally from the two-layer encoding model:

1. **Dendritic architecture** — the branching structure of a neuron's dendrites encodes a learned, high-dimensional configuration: a tensor shaped by confirmed pattern detections (growth) and error signals (pruning). This structural layer is the long-term memory of the neuron.
2. **Synaptic frequency state** — the oscillatory frequency of receptors and synapses selects an *active slice* of that tensor for real-time inference. Different frequency states engage different sub-patterns within the same dendritic structure.

Mixed selectivity, in this framing, is the natural consequence: the same dendritic tensor can be "read" at different slices depending on the phase state of incoming [[phase-wave-differential]] signals. The neuron is not multitasking arbitrarily — it is computing across a high-dimensional learned space and projecting different outputs as context shifts.

## Connection to attention and functional connectivity

When [[attention]] shifts — say, from a green block to a red sphere — the brain reconfigures [[functional-connectivity]] between oscillating cell groups ([[tonic-oscillation]]). Mixed-selectivity neurons enable this: because their selectivity is context-dependent, the same cells can join different functional assemblies without rewiring the physical synapse. Phase tuning via [[synaptic-frequency]] is the lightweight switch.

## Parallel in deep learning

In artificial neural networks, especially deep layers of large language models, individual units show analogous behavior: they respond to feature *combinations* rather than isolated features. This mixed-selectivity property allows generalization across tasks. Sparse autoencoders (as in Anthropic's mechanistic interpretability work) attempt to decompose mixed-selectivity representations back into monosemantic features.

## History

The term became prominent through prefrontal cortex studies (~2013–2016, Rigotti et al.) showing that high-dimensional, non-linear mixed selectivity is necessary for flexible cognition. It entered machine learning discourse through multi-task learning research around 2018–2022.

## See also

- [[NAPOT]] — framework in which mixed selectivity is a prediction, not a surprise
- [[phase-wave-differential]] — the mechanism that selects the active dendritic slice
- [[tonic-oscillation]] — baseline state perturbed by incoming phase differentials
- [[dendritic-architecture]] — structural encoding of the high-dimensional tensor
- [[synaptic-frequency]] — dynamic selector of active dendritic sub-pattern
- [[semantic-cortical-mapping]] — empirical fMRI evidence for distributed, multi-domain cortical coding

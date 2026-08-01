# Distributed Memory

Memory is distributed when the biological changes that support later recall are spread across connected cells, synapses, ensembles, and brain regions rather than stored as one complete record in one location.

SAN accepts that distributed organization and adds a more specific proposal: recall is a network operation in which a cue recruits partial learned states, recurrent pathways reinstate and transform them, and the resulting activity contributes to the network's present prediction, perception, and action. The network uses that evolving state directly. It does not send a finished picture to a separate inner viewer.

## What "distributed" does and does not mean

Distributed memory does **not** mean that every neuron contains every memory, that one generic neuron projects to every relevant brain system, or that the brain stores a literal image file. Different memories recruit partly overlapping populations, and different components of an event can depend on different circuits.

It is useful to separate four questions:

1. **Storage:** which lasting synaptic, cellular, and circuit changes make later expression possible?
2. **Selection:** how does a cue or internal state recruit some of those changes rather than others?
3. **Reinstatement:** which distributed activity patterns return during successful retrieval?
4. **Use:** how does the reinstated state alter present interpretation, prediction, speech, or action?

These questions are related, but evidence for one is not automatically evidence for all four.

## What neuroscience establishes

Several findings support a distributed account without establishing the complete SAN mechanism.

- In mice, a contextual fear memory recruited an **engram complex** distributed across multiple connected brain regions. Simultaneous reactivation of several component ensembles produced more recall than reactivation of one ensemble alone. This is evidence against treating a single local ensemble as the complete memory.
- Human stimulation and fMRI work has shown that a hippocampal-network intervention can change reinstatement of spatially distributed, event-specific cortical activity. The hippocampus can therefore help coordinate retrieval without being a warehouse containing the complete event.
- Human intracranial recordings have found that successful recall reinstates distributed cortical oscillatory patterns with organized spatiotemporal dynamics. This supports a temporal population process, but it does not show that oscillatory phase is the sole memory code.
- An anatomically constrained macaque-cortex model showed how inter-areal reverberation could sustain distributed working-memory states even when isolated modeled areas could not. This is a useful mechanistic model and source of testable predictions, not direct proof that all biological memories use that exact circuit.

Together, these results support distributed storage and reinstatement, network interaction, and cue-dependent reconstruction. They do not establish a brain-wide copy of every memory, a universal cortical algorithm, or SAN's stronger claim that every relevant projection is a conscious rendering.

## The SAN operation

The source-faithful SAN proposal can be written as a recurrent sequence:

1. A sensory cue, thought, bodily state, or ongoing activity pattern reaches a set of learned receivers.
2. Existing synaptic and dendritic states make some cells and pathways more responsive than others.
3. Local ensembles express partial, transformed components of the prior pattern rather than replaying one untouched master record.
4. Axonal outputs redistribute those updates through recurrent cortical, hippocampal, thalamic, subcortical, and sensorimotor pathways appropriate to that memory.
5. Downstream populations combine the arriving activity with their own current state, producing another round of selection and transformation.
6. The evolving distributed state changes what the organism predicts, experiences, reports, or does next.

SAN calls this **memory-prediction-rendering**. Here, *rendering* means the physically expressed network state that other parts of the same system can detect and use. It does not mean a scenic image inside the skull, and it does not require a hidden observer watching an inner screen.

This sequence connects [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]], [[pattern-completion|Pattern Completion]], [[engram|Engram]], [[engrams|Holographic Engrams]], [[memory-consolidation|Memory Consolidation]], and [[neural-rendering|Neural Rendering]].

## Scale ladder

| Scale | Established biological substrate | SAN interpretation |
|---|---|---|
| Micro | Synaptic efficacy, receptor state, dendritic excitability, intrinsic excitability, and structural plasticity can change with experience. | These learned receiver states help determine which partial pattern a cell expresses when a related cue returns. |
| Meso | Local ensembles can encode, complete, suppress, and reinstate learned patterns. | Each ensemble contributes a transformed perspective rather than containing the complete remembered event. |
| Macro | Retrieval can recruit hippocampal-cortical and other distributed networks; memory components can be represented across connected regions. | Recurrent many-to-many re-expression produces a present network state that jointly supports memory, prediction, rendering, and action. |

The scales should not be collapsed. A synapse is not a whole memory, a neuron is not a whole scene, and a brain-wide activity map is not by itself a report of subjective content.

## Where phase and oscillation enter

Established studies show oscillatory reinstatement, ripple-associated reactivation, and timing-dependent coordination during memory processing. SAN proposes a stronger receiver-relative interpretation: the timing, phase, duration, and magnitude of an arriving event can change its effect on a receiving population, and sequences of such differences may help route and reconstruct remembered content.

That proposal links distributed memory to [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and Phase-Wave Differential]], [[sharp-wave-ripples|Sharp-Wave Ripples]], and [[oscillating-group-completion|Oscillating-Group Completion]]. It remains an experimental hypothesis. Distributed memory would remain real even if the full PWD or NAPOT account were falsified.

## Claim ladder

| Level | Current status |
|---|---|
| Distributed synaptic and cellular memory changes | Established at bounded cellular and circuit scales. |
| Distributed engram ensembles and cortical reinstatement | Supported for particular tasks, species, and measurement methods. |
| Hippocampal and recurrent networks coordinating partial reinstatement | Supported, with mechanism and timescale varying by memory type. |
| Recall as transformed, many-to-many re-expression | A SAN interpretation consistent with several population findings. |
| PWD-organized re-expression constituting neural rendering | A SAN-specific hypothesis requiring direct comparative and causal tests. |
| A universal brain-wide oscillatory code for every memory and qualia | Not established. |

## Tests that distinguish the SAN extension

A strong test should compare the SAN mechanism with simpler alternatives rather than merely detect distributed activity.

1. Record identified source and receiver populations during encoding and later cue-driven retrieval.
2. Test whether receiver-specific timing, phase, duration, and population-state variables predict the next transformation better than firing rate, local field power, or representational similarity alone.
3. Perturb a bounded source-to-receiver route at a predicted phase or delay while preserving overall activity as closely as possible.
4. Ask whether the intervention selectively changes the reconstructed feature, subsequent routing, behavior, or report predicted by the model.
5. Repeat across memories with different sensory, emotional, and motor components to determine which operations generalize.

The stronger SAN account would lose support if local or rate-only models explain held-out retrieval equally well, if the predicted directed transformations cannot be found, or if route-specific perturbations do not produce the predicted component-specific effects.

## Source genealogy

- **June 8, 2022 public Git fixation:** a0001z.md described a whole-brain, multi-scale memory-prediction architecture and a distributed observer, before the mature compound term was present. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/c8b1e5c9716e547b1e02cd2720963fd38f572df9/a0001z.md)
- **June 22, 2022 public Git fixation:** b0123y.md explicitly connected sparse distributed memory to downstream neurons predicting whether they would fire as dendritic and receptor patterns were recruited. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/3bb91371fab1cd8194db35f8ca5bd6c0ace561cf/b0123y.md)
- **July 9, 2022 public Git fixation:** a0149z.md stated that PFC or perirhinal readout is one part of a whole-brain distributed memory structure and linked distributed activity to cascading array-level observation. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/4e655ddec8d8338ccf332a67938f8526830ad143/a0149z.md)
- **November 28, 2022 public Git fixation:** a0324z.md gave the mature phrase **Sparse Distributed Memory-Prediction-Rendering** and placed it in recurrent cortical-thalamic and cortical-cortical pathways. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0324z.md)
- **November 28, 2022 public Git fixation:** a0319z.md extended the proposal into coordinated motor output, making memory expression part of the perception-to-action loop rather than an isolated recall process. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0319z.md)

The SAN sources acknowledge sparse distributed memory and sparse distributed representation as prior computational ideas. The source-faithful SAN delta asserted here is the joined biological sequence from learned receiver state through recurrent transformed re-expression to current rendering and action. That historical claim is separate from whether experiments ultimately validate the full mechanism.

## Primary scientific references

- Roy DS, Park YG, Kim ME, et al. (2022). [Brain-wide mapping reveals that engrams for a single memory are distributed across multiple brain regions](https://pubmed.ncbi.nlm.nih.gov/35379803/). *Nature Communications*, 13, 1799.
- Hebscher M, Kragel JE, Kahnt T, Voss JL. (2021). [Enhanced reinstatement of naturalistic event memories due to hippocampal-network-targeted stimulation](https://pubmed.ncbi.nlm.nih.gov/33545044/). *Current Biology*, 31, 1428-1437.e5.
- Manning JR, Polyn SM, Baltuch GH, Litt B, Kahana MJ. (2011). [Oscillatory patterns in temporal lobe reveal context reinstatement during memory search](https://pubmed.ncbi.nlm.nih.gov/21737744/). *Proceedings of the National Academy of Sciences*, 108, 12893-12897.
- Yaffe RB, Kerr MSD, Damera S, Sarma SV, Inati SK, Zaghloul KA. (2014). [Reinstatement of distributed cortical oscillations occurs with precise spatiotemporal dynamics during successful memory retrieval](https://pubmed.ncbi.nlm.nih.gov/25512550/). *Proceedings of the National Academy of Sciences*, 111, 18727-18732.
- Mejias JF, Wang XJ. (2022). [Mechanisms of distributed working memory in a large-scale network of macaque neocortex](https://elifesciences.org/articles/72136). *eLife*, 11, e72136.

## Related concepts

- [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]]
- [[pattern-completion|Pattern Completion]]
- [[engram|Engram]]
- [[memory-consolidation|Memory Consolidation]]
- [[sharp-wave-ripples|Sharp-Wave Ripples]]
- [[oscillating-group-completion|Oscillating-Group Completion]]
- [[neural-rendering|Neural Rendering]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and Phase-Wave Differential]]

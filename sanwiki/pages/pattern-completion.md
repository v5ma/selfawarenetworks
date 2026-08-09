---
title: "Pattern Completion: Partial Cues and Distributed Reconstruction"
tags: [san, memory, pattern-completion, hippocampus, ca3, engram, oscillating-groups]
aliases: [Pattern Completion]
status: governed
---

# Pattern Completion

**Pattern completion** is the recovery of additional learned relations from a partial or degraded cue. "Completion" is defined relative to a task and a learned representation. It does not mean that the brain restores every detail of an event, opens a stored picture, or replays one exact spike train.

The source-faithful SAN question is more specific:

> How can a partial cue recruit a learned distributed group, despite inhibition, drift, and changing context, so that the network reconstructs a useful internal, physiological, or motor state?

## What established research supports

Pattern completion is supported at several levels, but the evidence does not identify one universal circuit or code.

| Level | Bounded result |
|---|---|
| Recurrent-network model | Learned recurrent connections can make a partial input converge toward a previously learned population state. Hopfield networks are a formal example, not a complete biological model. |
| Rodent hippocampal circuit | In behaving rats exposed to conflicting local and global cues, CA3 population output remained more coherent than its disrupted dentate-gyrus input. This is direct evidence for CA3 pattern completion in that spatial preparation. |
| Human episodic retrieval | After people learned linked event elements, a partial cue was associated with hippocampal activity and reinstatement of incidental event information in distributed neocortical regions. |
| Distributed memory consequence | Retrieval depends on learned synaptic and circuit constraints, current state, recurrent interaction, inhibition, and downstream re-expression. Successful recall is not evidence that one neuron or one region contains the complete memory. |

Primary anchors:

- [Hopfield, 1982](https://doi.org/10.1073/pnas.79.8.2554)
- [Nakazawa et al., 2002](https://pubmed.ncbi.nlm.nih.gov/12040087/)
- [Neunuebel and Knierim, 2014](https://pubmed.ncbi.nlm.nih.gov/24462102/)
- [Horner et al., 2015](https://www.nature.com/articles/ncomms8462)

These results establish model-specific and preparation-specific forms of completion. They do not establish NAPOT, PWD, a universal CA3 mechanism, exact replay, or conscious experience.

## Recovering the SAN proposition

### Architecture matters, not neuron count alone

An owner-dated September 28, 2014 discussion preserved in [a0088z.md](https://github.com/v5ma/selfawarenetworks/blob/64db98269679e9a01efa0bb470375386314af208/a0088z.md) introduced pattern completion through another participant's account of state-dependent recurrent computation. Micah's response was not that generic emergence explains memory. It was that structure, layout, layers, input location, recurrent organization, and biological state matter. That disagreement is important: SAN treats completion as an anatomically and receiver-state-constrained process, not an automatic consequence of adding more units.

### The hippocampal analogy is not literal cortical anatomy

In August 2022, [a0018z.md](https://github.com/v5ma/selfawarenetworks/blob/a3ad84338cd6529b2448e4452fdb3d82c76163bd/a0018z.md) connected CA3 topography, hippocampal-entorhinal spatial organization, and a proposed volumetric framework that other populations help fill with object content. A nearby source called the hippocampus "cortical column #1," language influenced by *On Intelligence*.

The medically defensible recovery is functional analogy, not anatomical identity. The hippocampus is not a neocortical column. It is a specialized archicortical formation with distinct subfields and recurrent circuitry. The useful SAN idea is that a structured recurrent system can organize contextual or spatial relations that connected populations use during reconstruction.

### The July 2022 group-completion operator

The clearest SAN-specific route appears in Micah's [July 31, 2022 NAPOT video](https://www.youtube.com/watch?v=fLp-yTQ6pSM):

    partial cue
    -> one eligible member of a learned group receives the cue
    -> if one member is inhibited, another member may provide access
    -> recurrent recruitment of more of the learned group
    -> completion under current state and competition
    -> distributed pattern re-expression
    -> internal, physiological, or motor consequence

This is not a claim that every group member is interchangeable or that one cue deterministically retrieves one complete scene. It is a hypothesis about redundant access, inhibition-sensitive recruitment, and distributed re-expression.

Two June 2022 notes supply an earlier mechanistic precursor. [a0111z on June 10](https://github.com/v5ma/selfawarenetworks/blob/84f9d0a56a47fec4b427ac6422062902f39776dd/a0111z.md#L18-L22) proposes local-to-network magnification through changed downstream timing and inhibition. [a0129z on June 11](https://github.com/v5ma/selfawarenetworks/blob/ed4d6d5341bed45eff614967634dbdc617893f5a/a0129z.md#L2-L24) proposes a cascade in which another receiving array recognizes the changed pattern and recruits a further population. The source calls this a *photocopier* effect, but the source-faithful biological recovery is ordered recurrent recruitment, not copying a lossless memory image.

Later 2024-2025 files use terms such as *oscillatory pattern completion* and attractor-state convergence. Those later formulations can clarify the current model, but they are not backdated into the 2014 or 2022 record.

## The SAN scale ladder

| Scale | Established or bounded operation | SAN extension |
|---|---|---|
| Micro: synapse, branch, cell | Learned synaptic efficacy, dendritic state, intrinsic excitability, inhibition, and recent activity alter cue response. | An [[expert-data-structures|Expert Data Structure]] is a proposed learned receiver configuration that contributes one constraint or projection, not a complete memory. |
| Meso: local circuit or assembly | Recurrent excitation, inhibition, pattern separation, competition, and state can determine which ensemble is recruited. | An alternate eligible member may help recruit a learned oscillating group when another route is inhibited. |
| Macro: distributed systems | Hippocampal and neocortical populations can participate in cue-driven reinstatement; contribution depends on task and memory type. | [[oscillating-group-completion|Oscillating-group completion]] may coordinate complementary re-expression across connected populations. |
| Organism and action | Retrieved information can alter recognition, report, physiology, choice, and movement. | The reconstructed state is used by the same distributed network; no separate inner viewer receives it. |

## Completion includes boundaries

A useful reconstruction requires both recruitment and exclusion.

- Pattern completion recovers learned relations from incomplete input.
- Pattern separation reduces interference among similar inputs.
- Inhibition and competition suppress incompatible routes.
- Current context can make the same cue recruit different patterns.
- Representational drift means useful function need not require permanent cell membership.
- Coherent timing may support communication within selected routes, while structured phase dispersion or splay may help keep alternatives distinct.

SAN therefore does not predict that maximal coherence is the success condition. The relevant object is a structured pattern of coupling, dispersion, inhibition, and receiver-specific consequence.

## Oscillation is an open extension

Oscillations can organize excitability, timing, sequence expression, and communication. Sharp-wave ripples can participate in bounded memory processes. Neither fact establishes that a ripple initiates every completion event or that phase locking restores a full memory.

The stronger SAN/PWD hypothesis is:

    learned connectivity and receiver state
    + cue-driven firing and inhibition
    + receiver-relative phase, timing, waveform, and coupling
    -> more accurate prediction of recruitment and re-expression

That hypothesis earns its place only if those variables add reproducible prediction or selective causal control beyond cue identity, firing rate, ensemble membership, connectivity, arousal, movement, and current state.

## Completion is not playback or a hidden screen

A retrieved state can omit details, combine sources, change order, incorporate current context, or support a novel route. The network's reconstructed activity is the memory operation and its consequence. Nothing in pattern completion requires a complete scene inside one neuron, a literal screen, or a separate observer watching the result.

This connects [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]], [[engram|Engram]], and [[memory-state-drift-virtual-mind|Memory, Engrams, Representational Drift, and the Virtual Mind]]: persistent learned constraints help generate a new, temporary, distributed event.

## Discriminating experiment

Use graded partial cues while recording a declared hippocampal-cortical circuit and measuring a declared retrieval or action endpoint. Compare nested models:

1. cue identity, behavior, movement, arousal, and current state;
2. firing rate, ensemble identity, and effective connectivity;
3. recurrent sequence, inhibition, and alternate-member access;
4. receiver-relative phase, timing, waveform, coupling, and typed PWD variables.

Then perturb the initially recruited member, a predicted alternate member, the recurrent route, and the timing relation separately.

The SAN group-completion claim gains support if an alternate member selectively rescues recruitment when the first route is inhibited and if the complete model predicts which distributed content or action is re-expressed. It is weakened if ordinary connectivity, state, and rate models explain the result equally well, if alternate-member access does not occur, or if PWD variables add no reproducible value.

Successful retrieval does not by itself establish conscious access. That requires an independent test.

## Source genealogy

- **September 28, 2014:** owner-dated discussion places pattern completion beside state-dependent recurrent computation while Micah argues that biological architecture cannot be replaced by neuron count or vague emergence.
- **June 8-11, 2022:** that discussion is publicly Git-fixed and moved to canonical a0088z.md.
- **June 10-11, 2022:** a0111z and a0129z add the local-to-network magnification and ordered receiver-cascade precursor.
- **July 31, 2022:** the public NAPOT video states the inhibited-member, alternate-access, learned-group recruitment route.
- **August 19-22, 2022:** a0018z.md connects CA3 organization and a hippocampal-entorhinal spatial scaffold to distributed content reconstruction, while using the hippocampus-as-column language as an analogy.
- **October 2024 and May 2025:** later 04san.md and 08san.md files add oscillatory-pattern-completion and attractor-state language. These are later synthesis layers.

## Read next

- [[oscillating-group-completion|Oscillating-Group Completion and Re-expression]]
- [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]]
- [[engram|Engram]]
- [[engrams|Holographic Engrams]]
- [[memory-state-drift-virtual-mind|Memory, Engrams, Representational Drift, and the Virtual Mind]]
- [[expert-data-structures|Expert Data Structures]]
- [[dendritic-computation|Dendritic Computation]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[conscious-access|Conscious Access]]
- [[telescoping-network-neighborhood-reinstatement|Telescoping Network-Neighborhood Reinstatement]]

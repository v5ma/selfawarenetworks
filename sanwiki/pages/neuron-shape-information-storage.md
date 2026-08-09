---
title: "Neuron Shape as Information-Bearing State"
tags: [san, genealogy, dendrites, morphology, structural-plasticity, neural-computation]
aliases: [Neuron Shape Information Storage, Neurons Are Programs Transmitting Their Shape]
summary: "A source-faithful reconstruction of Micah Blumberg's September 2012 proposal that learned neuronal structure acts as a program whose state is expressed through neural output."
status: governed
---

# Neuron Shape as Information-Bearing State

![Medical-textbook plate distinguishing established dendritic structural plasticity from the proposed SAN interpretation of neuronal morphology as a high-dimensional state variable](/v5ma.github.io/wiki/assets/generated/san/neuron-shape-information-storage/neuron-morphology-state-variable-medically-bounded-20260714-v1.png)

This plate separates established cellular physiology from the SAN proposal. Activity-dependent
changes in spine structure, receptor content, synaptic efficacy, and dendritic integration are
established. Persistent memory traces are distributed across synapses, cells, and circuits. SAN
further proposes that a neuron's learned morphology and physiological state form a
high-dimensional program whose consequences are expressed in its output. Neither the plate nor the
current formulation claims that one spine, one neuron, or gross arbor shape contains a complete
memory.

## What the September 2012 proposal said

The document **"Neurons are Programs transmitting their shape theory"** treats a neuron as more
than an interchangeable threshold unit. Its dendritic and synaptic topology, learned modifications,
and current activity jointly constrain how it transforms input. The document calls that organized
state a *program* and describes the outgoing signal as an analog data packet representing the
program's structure.

The same source also proposes a recurrent hierarchy:

```text
learned neuronal structure and current input
-> pattern-sensitive transformation
-> compressed output consequence
-> response by surrounding networks
-> activity-dependent change to later transformations
```

In this source, *shape* is broader than a cell outline. It includes dendritic and compartment
geometry, synaptic locations and states, receptors and conductances, recent electrical history,
and the destinations that can receive the output. The discussion initially uses music, sound, and
acoustic language, but then corrects its own metaphor: the proposed signal is **not literal sound**.
It is an analog data packet or sparse output consequence of the larger cellular state. The
source-faithful claim is therefore closer to a constrained projection or fingerprint than to a
lossless copy of the neuron.

This is an early ancestor of SAN's later sensor-transformer-transmitter, pattern-completion, and
receiver-relative update language. It is not retroactively called [[phase-wave-differentials|PWD]],
[[napot-overview|NAPOT]], or [[nonlinear-differential-continuous-approximation|NDCA]]. Those terms
were developed later.

## Two same-week source layers

| Date and source | Contribution | Evidence boundary |
|---|---|---|
| September 19, 2012, [Neurons are Programs transmitting their shape theory](https://drive.google.com/file/d/1I9lJwmyJjyr1u8nje7TudK2F7pnw8-ElHN9B1jxXDKExSHaThqvxdK6bB6v5xz3J6gZ5HDvAolVIvnWr/view?usp=sharing) | Neuron-as-program, morphology-dependent computation, structured output, recurrent prediction and correction, and cooperative networks of neural programs | A contemporaneous notification retained by the author shows the September 19 post and document link. The PDF's internal timestamp agrees, but metadata alone is not cryptographic proof. |
| September 20, 2012, [[gh-a0414z|a0414z]] | Reply to Dean distinguishing the richness of a biological neuron's structure and output from a scalar ANN abstraction; sketches differential-equation and category-theory representations | The note is internally dated 2012 and was first publicly Git-fixed on June 8, 2022. It is a separate same-week source, not the source of the September 19 document. |

**Author identity note:** Micah Blumberg has confirmed that **Cloudy Mayajuana** was his alternate
social-media handle in 2012. Statements under that handle and under Micah Blumberg in the September
2012 artifact belong to the same authorial lineage. Other named participants are respondents, not
co-authors of the proposal.

The later [[gh-resnote04|resnote04]] discussion is useful retrospective interpretation, but it is a
2024 source and is not evidence for what was already written in 2012.

## Medically grounded translation

| Historical wording | Source-faithful current interpretation |
|---|---|
| A neuron's shape is a program | Dendritic geometry, synapse placement, membrane conductances, receptors, and recent history help determine the cell's input-output transformation. |
| The neuron transmits its shape | An axon does not send a literal anatomical copy. Learned cellular state changes spike timing and pattern, and in defined preparations can change waveform, terminal calcium, release probability, and downstream effect. The output is a compressed consequence of structure and state. |
| One changed synapse changes the whole mathematical shape | A local plastic change can alter branch integration and later network behavior, but biological storage is finite, noisy, distributed, and constrained. |
| A neuron may hold a holographic or effectively infinite memory | This is a historical high-capacity hypothesis, not an established capacity result. A single cell can participate in a distributed trace without containing the whole memory. |
| The packet is like music or sound | This is an analogy for a time-varying pattern. Neurons transmit electrochemical events, not an acoustic recording of their morphology. |
| Synapses are on or off | Population sparsity can be represented discretely, but biological synapses have graded, stochastic, state-dependent effects. |
| Category theory or a topos could describe the neuron | This is an unfinished mathematical research proposal, not a completed formalization. |

## Established physiological anchors

Several established results make the recovered question scientifically legitimate without proving
the complete SAN interpretation:

- Dendritic structure can strongly influence modeled neocortical firing patterns
  ([Mainen and Sejnowski, 1996](https://doi.org/10.1038/382363a0)).
- Dendritic morphology can change action-potential propagation through modeled dendritic trees
  ([Vetter, Roth, and Hausser, 2001](https://pubmed.ncbi.nlm.nih.gov/11247988/)).
- Thin dendritic branches can act as nonlinear computational subunits in layer-5 pyramidal cells
  ([Polsky, Mel, and Schiller, 2004](https://doi.org/10.1038/nn1253)).
- Long-lived dendritic spines can be associated with persistent memory in the studied mouse-cortex
  preparation ([Yang, Pan, and Gan, 2009](https://doi.org/10.1038/nature08577)).
- Axonal ion channels can alter action-potential waveform and synaptic efficacy in a defined
  neocortical circuit ([Kole, Letzkus, and Stuart, 2007](https://doi.org/10.1016/j.neuron.2007.07.031)).
- Presynaptic action-potential waveform can regulate calcium-current and release timing in a
  defined synapse ([Chao and Yang, 2019](https://pubmed.ncbi.nlm.nih.gov/30872753/)).

These findings support morphology- and state-dependent neural computation. They do not show that an
action potential losslessly contains a neuron's full geometry, that one neuron stores an arbitrary
3D scene, or that the original category-theory sketch has been mathematically established.

## The SAN-specific hypothesis

The defensible descendant of the 2012 proposal is:

> Learned cellular structure and current physiological state constrain a neuron's transformation of input, while the resulting temporal and synaptic output provides a compressed, receiver-dependent expression of that state. Recurrent populations may use many such expressions to reconstruct a larger distributed pattern.

One finite formulation makes the boundary explicit. Let the effective state of neuron `i` be:

```text
S_i(t) = {M_i, W_i, C_i(t), R_i(t), H_i(t)}                    [1]
```

`M` is morphology; `W` is synaptic connectivity and efficacy; `C` is conductance and membrane
state; `R` is receptor and release state; and `H` is relevant history. The neuron's output is:

```text
o_i(t) = G_i[S_i(t), input_i(t)]                              [2]
```

A downstream receiver does not recover `S_i` directly. It transforms the arriving output through
its own state:

```text
delta S_j(t) = F_j[S_j(t), o_i(t - tau_ij)]                   [3]
```

Equations [1]-[3] express a bounded claim: structure changes output, and output changes receivers.
They do not assign infinite physical precision to a biological curve.

The stronger SAN descendant predicts that multidimensional output variables carrying information
about learned cellular structure and recent state will improve prediction of downstream response
beyond firing rate alone. A rigorous test would compare held-out receiver predictions from spike
count, timing and burst structure, waveform and terminal-specific release, measured morphology and
conductance history, and the later receiver-relative PWD model. If structural and state variables
do not improve prediction after conventional variables are controlled, the transmitted-shape
interpretation is weakened. If a compact output signature predicts receiver-specific consequences
across changing contexts, the hypothesis gains support without proving NAPOT, conscious rendering,
or complete memory transmission.

## Source custody

- Public artifact: [Google Drive copy of the 2012 document](https://drive.google.com/file/d/1I9lJwmyJjyr1u8nje7TudK2F7pnw8-ElHN9B1jxXDKExSHaThqvxdK6bB6v5xz3J6gZ5HDvAolVIvnWr/view?usp=sharing).
- PDF SHA-256: `D1C293FBA310DBAC9248729A9F104F07848FB3E3946380F2A5D1A41699E15646`.
- PDF metadata records creation and modification at `2012-09-19 11:54:21 -07:00`. The file is not
  encrypted and contains no embedded digital signature, so this is corroborating metadata rather
  than tamper-proof certification.
- The Drive response reports a 2019 service modification date. That records later Drive custody, not
  the document's original authorship date.
- The contemporaneous notification screenshot is retained privately and is not embedded here
  because it contains third-party identities and account context.

## Read next

- [[brain-networking-protocol|Brain Networking Protocol]]
- [[neural-array-projection|Neural Array Projection]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[dendritic-computation|Dendritic Computation]]
- [[synaptic-plasticity|Synaptic and Structural Plasticity]]
- [[sparse-distributed-representation|Sparse Distributed Representation]]
- [[category-theory-neuroscience|Category Theory Neuroscience]]

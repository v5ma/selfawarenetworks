---
title: "Synaptic Unreliability, MVR, and the Ionotropic Information Channel"
tags: [san, synapse, multivesicular-release, action-potential, potassium, calcium, ionotropic]
aliases: [Synaptic Unreliability MVR 2021, Ionotropic Brain, Ionotropic Information Channel]
summary: "A source-governed account of stochastic release, multivesicular release, presynaptic waveform control, and SAN's proposal to model the full ionotropic sender-to-receiver channel."
status: governed
---

# Synaptic Unreliability, MVR, and the Ionotropic Information Channel

## The idea in plain language

A synapse is not merely a wire that either passes one spike or drops it. A presynaptic spike reaches
a living terminal whose potassium channels, waveform, calcium entry, release probability, release
sites, vesicle pools, and recent activity affect what happens next. The receiving receptors,
dendrite, and cell state then transform that event again.

```text
terminal state + spike waveform + calcium + release machinery
    -> one or more vesicles may be released
    -> receptors and dendrite transform the event
    -> a receiver-specific consequence
```

## What the evidence establishes

Synaptic transmission is stochastic, and that variability can limit information transmission.
Multivesicular release (MVR) expands the possible outcome: one presynaptic event can release more
than one vesicle. Neocortical measurements support multiple release sites, while studies of small
central terminals show that presynaptic potassium-channel state and action-potential waveform can
alter calcium entry and release under specific conditions.

MVR does not erase unreliability or prove a fixed vesicle alphabet. It shows why the channel can be
richer than a one-vesicle-or-miss description.

## What SAN adds

Micah Blumberg's 2021 article argues that brain simulation should follow the **ionotropic brain**:
the stateful chain from ions and waveform through vesicle release, receptors, dendrites, and later
network activity. This strengthens SAN's criticism of treating a biological neuron as one weighted
sum with one scalar output.

SAN further asks whether these receiver-specific events contribute to a temporal-spatial Phase Wave
Differential. That remains a hypothesis. Existing MVR evidence does not by itself establish a
spatial code, PWD, qualia, or consciousness.

## The spatial-temporal question hidden inside MVR

The source's phrase "spatial information" is strongest when treated as a measurement problem rather
than a fixed vesicle code. Release-site arrangement, the number and timing of fusion events,
transmitter diffusion and uptake, receptor nanodomains, and dendritic position can change the
spatial-temporal footprint seen by a receiver.

```text
release-site geometry + fusion timing
-> transmitter concentration through space and time
-> receptor recruitment
-> local dendritic response
-> receiver-specific network consequence
```

SAN predicts that this richer footprint may improve prediction of the receiver's later state beyond
spike count and a scalar synaptic weight. The comparison stops before claiming that MVR
automatically reaches additional anatomical synapses, transmits a complete spatial map, or proves
PWD. Those outcomes require direct measurement.

## What the earlier Wiki wording was trying to protect

The earlier generated page was reaching for a valid idea: models lose biologically meaningful
variation when they compress release sites, terminal state, waveform, calcium, fusion statistics,
receptor state, and dendritic location into one scalar. The strengthened route preserves that
computational question while separating the established MVR mechanism from SAN's proposed
spatial-temporal code.

The previous illustration has also been withheld from this page because its headline and fixed
vesicle-count story repeat that overstatement. It should be replaced by a diagram that keeps
stochasticity, terminal specificity, receptor state, and the hypothesis boundary visible.

## A testable channel model

```text
K_t ~ P(K | release sites, release probability, APsyn, Ca2+, terminal state)
R_t = G(K_t, quantal response, receptor state, dendritic state, timing)
```

The experiment is to ask whether these added variables predict the receiver's response and later
network behavior better than firing rate and a scalar synaptic weight alone.

## Dated source spine

- **February 9, 2021:** Micah's public
  [Synaptic Unreliability article](https://medium.com/silicon-valley-global-news/synaptic-unreliability-a-foundational-concept-found-in-deep-learning-and-in-computational-a97c5dca9e90)
  joins MVR, release probability, presynaptic waveform, potassium channels, richer neural models,
  and the "ionotropic brain" question.
- **June 10, 2021:** the private `b0269y` recording develops the waveform -> calcium -> release ->
  receptor route and asks how it joins `1/f` spectra and connectomics.
- **June 8, 2022:** `b0269y` and the raw `b0272y` family receive immutable public Git fixation.
- **June 23, 2022:** the authored `b0272y` expansion makes the APD, calcium-channel, synaptotagmin,
  and facilitation route more explicit.
- **August 2022 and later:** the source family becomes part of the public PWD, APME, tonic-canvas,
  and Neural Rendering synthesis.

These are separate genealogy layers. The later terms are not backdated into the earlier source.

## Earlier source branch

[[gh-a0156z|a0156z]] asks why a changing biological sender should be compressed to one
interchangeable binary output. Its wording is repaired, not discarded: sender state can alter spike
timing, burst, waveform, calcium entry, release, and receiver-specific consequence. It does not show
that one neuron broadcasts its entire state or one complete memory. See the
[[early-a0156-a0502-obscure-argument-map|full source map]].

## Storage is not channel capacity

[[gh-a0506z|a0506z]] and [[gh-a0523z|a0523z]] preserve two versions of the same owner-dated
September 19, 2012 debate. The later version explicitly rejects the interpretation that Micah
claimed infinite communication capacity. The durable question is whether learned dendritic and
synaptic state changes spike timing, burst structure, waveform, terminal calcium entry, release,
and the receiver-specific consequence.

This does not require one spike to carry a complete cellular topology, an inherited codebook of
learned content, or an electron sensory modality. [[gh-a0530z|a0530z]] supplies the storage side:
synaptic efficacy, structural plasticity, molecular stabilization, ensembles, and systems
reorganization are distinct from the transmitted event and its downstream reconstruction.

## Read next

- [[early-a0503-a0530-obscure-argument-map|Early a0503-a0530 Obscure Argument Map]]
- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron: Signal, Correlate, or Channel?]]
- [[perceptron-deep-learning-metatron|Perceptron, Deep Learning, and Metatron]]
- [[receptor-to-phase-sensory-quantification|Receptor-to-Phase Sensory Quantification]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[action-potential-mitochondrial-reinforcement-hypothesis|Action-Potential/Mitochondrial Reinforcement]]
- [[gh-a0329z|The 2021 article and later source synthesis]]
- [[gh-b0277y|Spoken explanation]]
- [Zador, 1998](https://doi.org/10.1152/jn.1998.79.3.1219)
- [Holler et al., 2021](https://doi.org/10.1038/s41586-020-03134-2)
- [Cho et al., 2020](https://doi.org/10.1073/pnas.2000790117)
- [Hoppa et al., 2014](https://doi.org/10.1016/j.neuron.2014.09.038)
- [[recorder-transcript-human-source-atom-map-t07|Recorder T07 Source Map]]

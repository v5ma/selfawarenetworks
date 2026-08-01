---
title: "The Multimodal Neuron: Signal, Correlate, or Channel?"
tags: [san, neuron, electrochemical, mechanical, magnetic, soliton, mechanosensation]
aliases: [Multimodal Neuron, Soliton-Chemical Duality, Coupled Neural Event]
summary: "A source-governed SAN framework for testing whether the electrical, chemical, mechanical, and magnetic components of a neural event are signals, correlates, or independently identifiable channels."
status: governed
---

# The Multimodal Neuron: Signal, Correlate, or Channel?

## The problem in plain language

A neuron does not produce only one physical effect. Ionic current changes voltage, synapses release
chemicals, membranes can move by tiny amounts, and current generates a magnetic field. The hard
question is whether each effect does additional work or merely accompanies the same event.

The page separates three possibilities:

- a **signal** changes a receiver;
- a **correlate** tracks an event without adding an independent consequence; and
- a **channel** has a measurable source, coupling path, noise model, receiver, and downstream
  effect.

## What research already supports

Electrical and chemical neural transmission are established. Small mechanical displacements have
been measured with action potentials, neurons can respond to mechanical perturbations, endogenous
extracellular electric fields can affect spike timing, and action-potential magnetic fields can be
measured.

That does not yet show that endogenous mechanical or magnetic components carry a separately decoded
neural message.

## What SAN proposed

The June 2022 sources repeatedly argue for a combined model:

```text
ionic/electrical event + chemical release + possible mechanical event + field consequences
  -> receiver-relative downstream effect
```

The important phrase is "plus neurotransmitters, not as an alternative." The scientifically useful
SAN proposal is therefore to measure the coupled event and determine which components add
independent predictive or causal information.

Two later source leads sharpen the program. `a0099z.md` proposes time-aligning different sensory
and physiological streams to learn cross-modal relations; "modal substrate invariant" should mean
generalization across modalities, not erasure of modality-specific structure. `a0102z.md` points to
Ucar et al.'s 2021 finding that postsynaptic spine enlargement can push a presynaptic bouton and
increase release in a bounded preparation. That supports mechanical synaptic feedback, not yet an
independent mechanical information channel.

## Early coupled-variable source

`a0045z.md` treats the neuron as a hierarchy of coupled electrical, ionic, chemical, mechanical,
thermal, and local-field changes. The useful modern question is whether any non-electrical
variable carries downstream information beyond what the electrical state predicts. That requires
simultaneous measurement and selective perturbation. Covariation alone does not turn magnetic,
thermal, or mechanical consequences into independently decoded communication channels.

## How to test it

Measure voltage/current, chemical release, nanoscale displacement, and magnetic field from the same
source-receiver pair. Compare nested models using held-out trials:

```text
receiver output ~ electrical + chemical
receiver output ~ electrical + chemical + mechanical
receiver output ~ electrical + chemical + mechanical + magnetic
```

Then perturb the proposed mechanical or magnetic route while matching electrical and chemical
drive. A new channel requires both added predictive information and a reproducible causal effect.

## Boundaries

The sources do not establish that action potentials are universally solitons, that membrane motion
or magnetic fields encode semantic content, that individual neurons feel or remember through
microvibration, or that multimodal measurements prove consciousness, Neural Rendering, or NAPOT.

## Multisensory hierarchy source

[[gh-a0457z|a0457z]] asks how other senses influence visual processing across cortical levels.
The evidence-based form is region-, pathway-, species-, task-, and state-dependent multisensory
modulation. Cross-modal effects can reach primary cortex, while convergence is often more common
in higher areas; there is no simple universal distance-from-the-eyes law.

## Paper implication

**The Multimodal Neuron: An Identifiability Framework for Electrical, Chemical, Mechanical, and
Magnetic Neural Events** is a conditional paper nucleus. It is not yet numbered. It first requires
nonduplication review against APME and an implementable perturbation protocol.

## Terminal and receiver state expand the channel

[[gh-a0571z|a0571z]] and [[gh-a0573z|a0573z]] make the early information-channel question
concrete. A spike propagates within a neuron, but the downstream consequence depends on branch and
terminal invasion, calcium, release probability, transmitter mixture, receptor composition,
postsynaptic state, and recent activity. The action potential is therefore indispensable without
being a complete description of the message.

This supports SAN's demand for a richer output vector while leaving open which variables are
necessary for each task and which can be compressed without loss.
## Read next

- [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]]
- [[perceptron-deep-learning-metatron|Perceptron, Deep Learning, and Metatron]]
- [[receptive-inceptive-dendritic-projection|Receptive and Inceptive Fields]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [Ucar et al., 2021](https://doi.org/10.1038/s41586-021-04125-7)
- [[entification-observer-problem|Entification and the No-Inner-Observer Problem]]
- [[gh-a0039z|Soliton-Chemical Duality and the Multimodal Neuron (a0039z)]]
- [[gh-a0177z|My Model of a Neuron: Soliton + Hodgkin-Huxley (a0177z)]]
- [[gh-a0286z|Three Simultaneous Neural Wave Modalities (a0286z)]]
- [[gh-a0041z|a0041z: Dendritic Geometry, Multimodal Fields, and the Physics Fork]]
- [[a0041z-branch-map-dendritic-geometry-physics-fork|a0041z branch map]]
- [[coincidence-to-structure-activity-directed-spinogenesis|Coincidence Becomes Geometry]]
- [[early-a0457-a0481-obscure-argument-map|Early a0457-a0481 Obscure Argument Map]]

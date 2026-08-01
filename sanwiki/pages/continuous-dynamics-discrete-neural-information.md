---
title: "Continuous Dynamics and Discrete Neural Information"
tags: [san, information, continuous, discrete, thresholds, pwd]
aliases: [Continuous Activity Discrete Information, Discrete Events in Continuous Dynamics]
summary: "A SAN distinction between continuously changing neural tissue and the discrete events or categories produced when biological systems cross declared thresholds at specific scales and time windows."
status: governed
---

# Continuous Dynamics and Discrete Neural Information

## The idea in plain language

Neural tissue changes continuously, but receivers do not need to treat every infinitesimal change
as a separate message. Receptors, dendrites, cells, and circuits can cross thresholds that make a
distinct event available to the next part of the system.

```text
continuous state -> threshold or sampling rule -> distinct event for a receiver
```

The event may be a spike, burst, dendritic plateau, phase relation, assembly transition, or learned
category. It is not automatically a binary bit.

The 2022 phrase "phase changes, not spikes" is governed as **not spikes alone**. The spike remains
a discrete physical event inside a continuous and state-dependent transformation. Timing, phase,
waveform, release, route, receiver state, and downstream consequence can add distinctions beyond
an event label or count. See [[contextualized-spike-receiver-relative-transformation]].

## Why the distinction matters

A stable tonic event can be relatively predictable. A rare phasic departure can carry more
Shannon information relative to a declared context. The context and event alphabet must be
defined, and Shannon surprise must not be confused with semantic importance. The tonic state is
not empty: it maintains what the system expects and therefore makes a departure measurable.

The June 2022 `b0131y.md` source uses five repetitions of "hmm" followed by one "hey" as the
worked example. It is an information-and-context ancestor of PWD, not the first use of the PWD
term.

Biological thresholds are often noisy and history-dependent. The scale, time window, and receiver
must therefore be stated before calling something discrete information.

## A cell transforms a pattern before passing it on

The internally dated 2013 discussion [[gh-a0366z|a0366z]] asks what lies between a cell's incoming
state and its outgoing event. The useful answer is richer than either a scalar all-or-none code or
an entire message compressed into one pulse:

```text
dendritic, synaptic, membrane, and recent-history state
-> local integration and spike initiation
-> timing, burst pattern, duration, waveform, and transmitter release
-> a new transformation in the receiver
```

[[gh-a0372z|a0372z]] adds resonance and action-potential duration to the same question. Its 2014
text and June 2022 modifications are separate date layers. A decisive test asks which output
features predict the receiving population beyond firing rate and spike count alone.

[[gh-a0409z|a0409z]], internally dated September 22, 2012, asks whether neuron-like intelligence
could use a different signal carrier. [[gh-a0414z|a0414z]], internally dated September 20, 2012,
argues that morphology, subthreshold potential, inhibition, and output timing or magnitude may
preserve differences that a scalar artificial neuron discards. The scientific question is which
state variables and transformations must survive for downstream receivers, not whether one
alternative carrier is already known to implement a brain.

[[gh-a0449z|a0449z]], internally dated February 15, 2014, is a strong pre-PWD/APME source. It
places coincidence-sensitive transformation at the synapse and dendrite, then asks how timing,
frequency, waveform, and release preserve information for the next receiver. Current physiology
supports dendritic coincidence detection and waveform-dependent release. SAN's stronger claim is
testable only if the multivariate receiver-relative model outperforms rate and spike-count models.
Modern artificial neurons are not all literal binary bits, so the comparison must name the model.

## Read next

- [[tonic-context-rare-deviation-tomographic-language|Tonic Context, Rare Deviations, and Tomographic Language]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[receptor-to-phase-sensory-quantification|Receptor-to-Phase Sensory Quantification]]
- [[burstlet-information-hypothesis|Burstlet Information Hypothesis]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[early-a0397-a0419-obscure-argument-map|Early a0397-a0419 Obscure Argument Map]]
- [[early-a0352-a0372-obscure-argument-map|Early a0352-a0372 Obscure Argument Map]]
- [[early-a0420-a0453-obscure-argument-map|Early a0420-a0453 Obscure Argument Map]]
- [[gh-00abstractbump|00abstractbump]]

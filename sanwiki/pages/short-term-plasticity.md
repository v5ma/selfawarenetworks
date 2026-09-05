---
title: "Short-Term Synaptic Plasticity"
tags: [san, neuroscience, synapse, plasticity, facilitation, depression, temporal-filtering]
aliases: [Short-Term Plasticity, STP, Short-Term Synaptic Dynamics]
summary: "Established short-lived changes in synaptic efficacy, and their bounded role as a receiver-history mechanism in SAN."
status: governed
---

# Short-Term Synaptic Plasticity

**Short-term synaptic plasticity (STP)** is an activity-history-dependent change in synaptic
efficacy that develops and decays over milliseconds to seconds. It makes the effect of a new
presynaptic event depend partly on what recently happened at that synapse.

## Established physiology

Short-term facilitation and depression are families of effects, not two fixed switches.
Contributing mechanisms can include residual presynaptic calcium, changes in release probability,
vesicle depletion and replenishment, receptor desensitization, and circuit inhibition. Facilitation
and depression can coexist, and their balance depends on synapse type, interval, stimulus history,
temperature, and experimental preparation.

Because recent history changes the response to the next event, STP can act as a temporal filter.
Some synapses preferentially pass isolated events; others emphasize bursts, changes, or particular
input intervals. STP is not the same as [[long-term-potentiation|LTP]] or
[[long-term-depression|LTD]], and a transient efficacy change does not by itself establish a
permanent memory trace.

## Bounded SAN interpretation

STP provides an established mechanism for one important SAN premise: a receiver is not a passive,
history-free endpoint. Its current response depends on a changing local state.

```text
recent input and release history
-> transient synaptic-state change
-> different response to the next event
-> altered local recruitment or routing
```

SAN can interpret that transient state as one component of the receiver-relative context against
which a [[phase-wave-differentials|phase-wave differential]] has an effect. This makes STP a candidate
substrate for short-lived tuning and routing, not proof that synapses calculate SAN equations,
perform tomography, or encode a complete percept.

The longer source-faithful route from transient readiness through conditional plasticity to later
cue-driven reconstruction is kept separate in
[[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]].

The SAN proposal called group-level short-lived strengthening and weakening
[[oscillatory-plasticity-group-potentiation-depression|GSTP and GSTD]] should remain distinct from
ordinary synaptic STP. The proposed group phenomenon may depend on synaptic and circuit dynamics,
but the two terms do not become equivalent merely because both are temporary.

## Testable bridge

A useful test would estimate STP at identified connections while measuring whether its recent
history improves prediction of receiver timing, population recruitment, or behavioral updating
beyond firing rate alone. The analysis should compare facilitation, depression, inhibition, and
network-state models rather than labeling every transient change a PWD.

## Sources

- [Dobrunz, Huang, and Stevens (1997), very short-term plasticity in hippocampal synapses](https://doi.org/10.1073/pnas.94.26.14843)
- [Galarreta and Hestrin (1998), frequency-dependent depression in neocortical synapses](https://doi.org/10.1038/2822)
- [Jackman et al. (2016), synaptotagmin-7 as a calcium sensor required for facilitation at several central synapses](https://doi.org/10.1038/nature16507)
- [Jackman and Regehr (2017), mechanisms and functions of short-term synaptic plasticity](https://doi.org/10.1016/j.neuron.2017.02.047)

## Read next

- [[synapse|Synapse]]
- [[synaptic-plasticity|Synaptic Plasticity]]
- [[stdp|Spike-Timing-Dependent Plasticity]]
- [[multi-timescale-reference-frames|Multi-Timescale Reference Frames]]
- [[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]]
- [[oscillatory-plasticity-group-potentiation-depression|Oscillatory Group Potentiation and Depression]]

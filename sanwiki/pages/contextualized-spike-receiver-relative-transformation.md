---
title: "Contextualized Spikes and Receiver-Relative Transformation"
tags: [san, spikes, phase, waveform, receiver-state, pwd, source-recovery]
aliases: [Not Spikes Alone, Contextualized Neural Event, Receiver-Relative Phase Change]
summary: "A source-faithful repair of the 2022 phrase 'phase changes, not spikes': spikes remain real events, while SAN tests whether timing, waveform, route, receiver state, and downstream consequence add explanatory power."
status: governed
---

# Contextualized Spikes And Receiver-Relative Transformation

## The problem

A spike is a real action potential, but the label "a spike occurred" does not tell us everything
that happened. The same number of spikes can have different effects when they arrive at different
times, follow different routes, have different waveforms, or reach receivers in different states.

## The operation in plain language

```text
ongoing source and receiver state
+ a spike or burst
-> axonal, terminal, and synaptic transformation
-> timing- and state-dependent reception
-> changed receiver and population state
-> changed prediction, representation, route, or action
```

This is what the July 21, 2022 SAN recording was trying to preserve when it used the shorthand
"phase changes, not spikes." The next sentence in the source explicitly says that a spike occurs.
The defensible reading is **not spikes alone**.

## Established footholds

Established neuroscience already shows that several codes and state variables can operate
together:

- spike phase can carry stimulus information beyond spike counts
  ([Montemurro et al. 2008](https://doi.org/10.1016/j.cub.2008.02.023));
- spike patterns and phase can provide complementary information
  ([Kayser et al. 2009](https://doi.org/10.1016/j.neuron.2009.01.008));
- spike timing relative to ongoing membrane fluctuations can add information
  ([Crochet et al. 2011](https://doi.org/10.1016/j.neuron.2011.10.009));
- broadband population state can predict spike timing better than selected narrow-band phases in
  a specified preparation
  ([Davis et al. 2022](https://doi.org/10.1523/JNEUROSCI.1899-21.2022));
- presynaptic membrane state and action-potential waveform can alter calcium entry, release, and
  postsynaptic effect
  ([Shu et al. 2006](https://doi.org/10.1038/nature04720);
  [Chao and Yang 2019](https://doi.org/10.1038/s41598-019-41120-5)).

These findings support a multivariable question. They do not establish SAN's complete answer.

## Where the comparison stops

The evidence does not show that phase replaces spikes, that phase is the only neural code, or that
every cell has one fixed tonic frequency. It does not make a phase relation semantic by itself,
identify a universal brain clock, or establish PWD, NAPOT, qualia, selfhood, or consciousness.

Rate, event timing, burst pattern, phase, waveform, release, anatomy, inhibition, and receiver
state are related but nonidentical variables. Which ones matter must be tested in a named circuit.

## The SAN extension

After the operation is clear, SAN introduces a stronger proposal: model a neural update as a
typed, receiver-relative differential. A candidate feature vector can include:

```text
[event count, event timing, relative phase, waveform, duration,
 sender state, route, release, receiver state, spatial relation,
 population transition, downstream consequence]
```

This is one route into [[tonic-phasic-phase-wave-differential|Phase Wave Differential (PWD)]].
The maintained relation supplies a tonic reference; a consequential departure supplies a phasic
update. Tonic and phasic are roles relative to a selected system and interval, not fixed frequency
bands.

The SAN-specific hypothesis is that a declared receiver-relative model will predict the next
population state or behavior better than count, rate, or phase-only alternatives. The term is
earned by that added operation; it is not a relabeling of phase coding.

## A discriminating test

Compare held-out predictions from five models:

1. spike count;
2. count plus precise timing and bursts;
3. model 2 plus ongoing phase or broadband population state;
4. model 3 plus waveform or release variables;
5. model 4 plus receiver state and recurrent history.

Then perturb phase or arrival time while matching count and average rate. Separately alter
waveform or receiver state while matching the source event pattern. The SAN extension is supported
only if the larger model adds reproducible prediction and the selective perturbations cause the
predicted receiver or behavioral change.

## Source genealogy

- Recording event: July 21, 2022.
- First verified public Git fixation:
  [commit `a160653e`](https://github.com/v5ma/selfawarenetworks/commit/a160653e985989e5e9cd429f6674018a5b230582),
  July 24, 2022.
- Public source:
  [b0003y.md](https://github.com/v5ma/selfawarenetworks/blob/a160653e985989e5e9cd429f6674018a5b230582/b0003y.md).
- The exact phrase `phase wave differential` appears in a separate later source on August 23,
  2022. This page does not backdate that name into the July recording.

The public source establishes genealogy, not validation. The improved private transcript and raw
audio remain outside the public Wiki.

## Read next

- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[continuous-dynamics-discrete-neural-information|Continuous Dynamics and Discrete Neural Information]]
- [[action-potential-phase-space|Action-Potential Phase Space]]
- [[ion-channel-waveform-release-dynamic-network|Ion-Channel, Waveform, Release, and Dynamic Network State]]
- [[recorder-transcript-human-source-atom-map-t07|Recorder T07 Source Map]]

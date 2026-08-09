---
title: "Neural Code Functions: Representation, Interpretation, Transformation, and Transmission"
tags: [san, neural-code, neural-transmission, dendrites, neural-arrays]
aliases: [Neural Code Functions, Four Functions of a Neural Code]
summary: "A source-faithful account of the four neural-code functions used in SAN, separating the 1968 Perkel-Bullock taxonomy, established propagation physiology, SAN's receive-transform-project interpretation, and a later artificial-neurology query analogy."
status: governed
---

# Neural Code Functions: Representation, Interpretation, Transformation, and Transmission

In 1968, Donald Perkel and Theodore Bullock organized the neural-code problem around four
functions: **stimulus representation, interpretation, transformation, and transmission**. Arvind
Kumar, Stefan Rotter, and Ad Aertsen returned to that taxonomy in a 2010 review of spiking-activity
propagation. They emphasized that a candidate code is incomplete if activity cannot travel between
neural populations while retaining usable information.

These are analytical functions, not four separate molecules, brain regions, or mutually exclusive
codes. A biological event can participate in several functions, and its meaning depends on the
receiver, pathway, current state, and behavioral context.

## The four functions

| Function | Operational question | Medically bounded example |
|---|---|---|
| Representation | Which neural state varies systematically with a stimulus, action, memory, or internal variable? | A population's firing rates, spike timing, dendritic state, or activity pattern distinguishes task conditions. |
| Interpretation | Which downstream receiver can discriminate that state, and what changes as a result? | A postsynaptic cell, local circuit, motor pool, or decoder changes its response. |
| Transformation | How is an incoming state converted into a different output state? | Dendritic integration, inhibition, adaptation, threshold crossing, bursting, and synaptic release reshape the signal. |
| Transmission | Under which anatomical and dynamical conditions does the state reach another receiver with usable fidelity? | Axonal propagation, bouton-specific release, convergent or divergent connectivity, synchronous events, and asynchronous rate changes. |

The 2010 review identified asynchronous rate propagation and synchronous event propagation as two
important modeled modes. It did not establish that every brain pathway uses one universal code or
that perfect synchrony is required for communication. Connectivity, shared input, excitation,
inhibition, noise, and receiver dynamics determine what propagates.

## SAN's receive-transform-project reading

The August 2022 SAN Whitepaper described a neuron as both a pattern-sensitive receiver and a
transmitter. Dendrites and synapses contribute to reception; the cell's conductances, morphology,
history, and current inputs transform that activity; and axons and terminals project consequences
to downstream receivers. At larger scales, local circuits and distributed pathways repeat related
operations.

SAN therefore maps the four functions into a recurrent cycle:

```text
represented local state
    -> receiver-specific interpretation
    -> cellular or circuit transformation
    -> pathway-bounded transmission
    -> changed state in the next receiver
    -> recurrent return or embodied action
```

This is not a claim that one generic neuron receives every feature or projects directly to every
brain system. It is a reusable **candidate motif** implemented differently across cell types,
circuits, and pathways. See [[neural-code-transmission|Neural Code Transmission]] and
[[neuron-shape-information-storage|Neuron Shape as Information-Bearing State]].

## What SAN adds

Established neuroscience already studies multiple neural codes, dendritic transformations,
synaptic transmission, population propagation, and state-dependent effective connectivity. SAN's
additional proposal is a joined architecture in which:

1. learned cellular and circuit structure establishes receiver-specific expectations;
2. tonic activity supplies an ongoing reference state;
3. excitation- or inhibition-driven departures can become phase-wave differentials;
4. tuned receivers transform those departures rather than reading transparent copies;
5. recurrent many-to-one and one-to-many projections update perception, memory, and action.

That synthesis is a SAN hypothesis. It does not follow from the Perkel-Bullock taxonomy alone, and
later terms such as [[phase-wave-differentials|PWD]] must not be backdated into the 1968 framework.

## Separate artificial-neurology analogy

The October 11, 2021 recording [[gh-b0144y|Brain Structures Request]] asked whether a future system
might interrogate a brain's data structures through targeted requests rather than reproduce every
physical detail. HTTP and FTP were analogies for a designed interface, not descriptions of native
neural transmission.

The linked TMS work is also narrower than the old page implied. Aberra and colleagues trained
convolutional neural networks to estimate activation thresholds of **computational neuron models**
from local TMS-induced electric-field distributions. That is useful for stimulation modeling. It
does not show that TMS can query memories, decode a brain-wide protocol, or recover a mind. See
[[brain-as-queryable-network|Brain as Queryable Network]].

## Claim boundary

| Layer | Current status |
|---|---|
| Four-function taxonomy | Historical analytical framework from Perkel and Bullock, discussed by Kumar and colleagues. |
| Multiple propagation modes and receiver transformations | Established in bounded experimental and computational systems. |
| SAN receive-transform-project cycle | Source-supported SAN interpretation and testable synthesis. |
| PWD/NAPOT as the joined transmission-rendering architecture | Open SAN hypothesis. |
| HTTP/FTP-like brain query and mind reconstruction | Speculative artificial-neurology proposal, not established biology. |

## Sources

- [Kumar, Rotter, and Aertsen (2010), *Spiking activity propagation in neuronal networks*](https://www.nature.com/articles/nrn2886)
- [Perkel and Bullock (1968), *Neural coding: a report based on an NRP work session*](https://pubmed.ncbi.nlm.nih.gov/?term=Perkel+Bullock+Neural+coding+1968)
- [Mainen and Sejnowski (1996), dendritic structure and modeled firing pattern](https://pubmed.ncbi.nlm.nih.gov/8684467/)
- [Chao and Yang (2019), action-potential waveform, calcium current, and release timing](https://pubmed.ncbi.nlm.nih.gov/30872753/)
- [Aberra et al. (2023), model-based TMS activation-threshold estimation](https://pmc.ncbi.nlm.nih.gov/articles/PMC10281353/)
- [August 5, 2022 SAN Whitepaper fixation](https://github.com/v5ma/selfawarenetworks/blob/c0f1e474fe5c351da63ed6e77b0b13c6becc23bb/whitepaper.md)
- [2022 public source note b0144y](https://github.com/v5ma/selfawarenetworks/blob/29956416cb7c074bbfb8c32e13611a6568cc290e/b0144y.md)

## Related pages

- [[neural-code|Neural Code]]
- [[neural-code-transmission|Neural Code Transmission]]
- [[neuron-shape-information-storage|Neuron Shape as Information-Bearing State]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[brain-as-queryable-network|Brain as Queryable Network]]
- [[artificial-neurology|Artificial Neurology]]

---
title: "Coincidence Becomes Geometry: Activity-Directed Spine Formation"
tags: [san, dendritic-spines, structural-plasticity, spinogenesis, coincidence, calcium, actin, electric-field]
aliases: [Coincidence Becomes Geometry, Activity-Directed Spinogenesis, Coincidence-to-Structure Operator]
summary: "A source-governed SAN framework for testing how transient local activity becomes lasting dendritic geometry and whether field variables add anything beyond established biochemical and structural predictors."
status: governed
---

# Coincidence Becomes Geometry: Activity-Directed Spine Formation

## The problem in plain language

A neural event can change more than the strength of an existing synapse. It can enlarge a dendritic
spine, help a new protrusion appear, or stabilize contact with a presynaptic bouton. A temporary
event can therefore change the physical routes available to future activity.

The 2022 SAN source `a0041z.md` proposed a compact transition:

```text
coincident or near-coincident activity
-> a locally excited dendritic region
-> spine emergence or growth at that region
-> changed future connectivity
```

The valuable question is **how coincidence becomes geometry**. The source also used quantum
shortest-path, heat-time, and electromagnetic-maximum explanations. Those are preserved as
hypotheses and genealogy, not presented as established dendritic biology.

## What research already supports

- Long-lasting synaptic enhancement has been associated with new postsynaptic spines in bounded
  CA1 preparations.
- Focal glutamate stimulation can selectively enlarge an existing spine or induce a new spine near
  the stimulation site in bounded preparations.
- NMDA receptors, calcium, calmodulin, actin polymerization, CaMKII, and other signaling systems can
  connect local activity to structural change.
- New spines can contact existing boutons before a mature synapse forms.
- In a bounded preparation, enlargement of a postsynaptic spine can push a presynaptic bouton,
  enhance SNARE assembly, and increase glutamate release.
- Applied electric fields can guide developing neurites in culture, but that does not demonstrate
  endogenous field-guided spine formation in adult intact cortex.

`a0102z.md`, first Git-fixed on June 10, 2022, connects that mechanical spine-to-bouton feedback to
the SAN requirement for learned synaptic weighting. The result makes weighting more than a one-way
scalar metaphor, but it does not show that every spine uses this process or that pressure carries
separate semantic content.

## The SAN integration

SAN treats structural plasticity as the slow physical counterpart of fast pattern detection:

```text
fast event:       coincidence / relative timing / local depolarization
local transform:  receptor + calcium + biochemical + cytoskeletal response
slow update:      spine emergence, enlargement, shrinkage, or stabilization
future effect:    changed input geometry and route probability
```

This provides a micro-to-meso bridge between a dendrite recognizing a local pattern and the circuit
responding differently the next time. It does not mean that one spine contains a whole memory.

## A testable stronger hypothesis

After established biochemical and geometric variables are measured, a local electrical or
mechanical state may explain additional variance in where a spine appears, which direction it
extends, or whether it stabilizes.

For dendritic position `x`, direction `theta`, and time `t`, the candidate model is:

```text
lambda_i(x, theta, t) = lambda_0 * exp(
    beta_A A_i(x,t)
  + beta_C C_i(x,t)
  + beta_G G_i(x,theta,t)
  + beta_E E_i(x,theta,t)
  + beta_M M_i(x,theta,t)
)
```

`A` is local activity, `C` is calcium/receptor/biochemical state, `G` is prior geometry and nearby
boutons, `E` is a measured electrical term, and `M` is a measured mechanical term. This is a
model-selection contract, not a discovered biological law.

## What would decide it

Image activity, calcium, actin, dendritic structure, and nearby boutons during controlled local
stimulation. Compare held-out models that add biochemical, geometric, electrical, and mechanical
terms in stages. Then perturb the proposed electrical or mechanical term while matching glutamate,
spike count, calcium load, tissue geometry, and temperature.

The field hypothesis survives only if it improves prediction beyond established variables and a
matched causal perturbation changes the structural outcome.

## Boundaries

Established biology supports activity-dependent structural plasticity. SAN adds the proposal that
relative timing and local field state may help select the structural update. The evidence does not
establish that:

- quantum path integrals calculate spine growth;
- heat is time or gravity controls synaptic plasticity;
- spines always grow toward a coactive neuron;
- an electromagnetic maximum alone selects growth; or
- structural plasticity proves PWD, NAPOT, Neural Rendering, or consciousness.

## Early structural-plasticity branch

[[gh-a0570z|a0570z]] was trying to escape a purely scalar strong-versus-weak account of learning.
Its connected-versus-disconnected replacement is also incomplete, but the recovered distinction is
important: existing synapses can change efficacy, while dendritic spines and synapses can also
form, retract, stabilize, or disappear. SAN's later field-selection proposal is an additional
hypothesis about how a local structural update might be biased; it must outperform biochemical and
geometric explanations under matched perturbations.
## Connected SAN routes

- [[plasticity-cluster-local-memory-update-substrate|Plasticity Cluster]]
- [[oscillatory-plasticity-group-potentiation-depression|Oscillatory Plasticity and Group Potentiation/Depression]]
- [[neural-path-selection-interneurons-choice|Neural Path Selection and Choice]]
- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[gh-a0041z|a0041z source page]]
- [[a0041z-branch-map-dendritic-geometry-physics-fork|a0041z branch and chronology map]]

## Primary research

- [Engert and Bonhoeffer, 1999](https://doi.org/10.1038/19978)
- [Matsuzaki et al., 2004](https://doi.org/10.1038/nature02617)
- [Richards et al., 2005](https://pubmed.ncbi.nlm.nih.gov/15831587/)
- [Knott et al., 2006](https://doi.org/10.1038/nn1747)
- [Nagerl et al., 2007](https://doi.org/10.1523/JNEUROSCI.0511-07.2007)
- [Kwon and Sabatini, 2011](https://doi.org/10.1038/nature09986)
- [Patel and Poo, 1984](https://doi.org/10.1523/JNEUROSCI.04-12-02939.1984)
- [Ucar et al., 2021](https://doi.org/10.1038/s41586-021-04125-7)

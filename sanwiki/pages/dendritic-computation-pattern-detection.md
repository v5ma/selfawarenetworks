[[dendritic-computation|Dendritic computation]] is the thesis that dendrites are not passive summation wires but active pattern-detection sub-processors. A single neuron may act as a multi-layer classifier rather than a simple threshold gate.

![Dendritic Computation Pattern Detection NMDA branch gate medical plate](/v5ma.github.io/wiki/assets/generated/san/dendritic-computation-pattern-detection/dendritic-computation-pattern-detection-nmda-branch-gate-20260629-v1.png)

This diagram shows the page's core mechanism: dendritic branches act as local coincidence gates, NMDA receptors open only when AMPA depolarization and repeated timing alignment coincide, Ca2+ microdomains mark branch-level matches, and enough matched branches roll up to a soma output burst.

## Core claims

Dendritic branches perform intermediate sub-computations: local calcium concentrations within individual spines can tune each spine's sensitivity independently. If enough branches agree, the signal rolls up to the cell body — a hierarchical detection cascade within a single neuron.

**NMDA receptors** are the canonical evidence: they allow calcium influx only after repeated coincident activation over milliseconds. This gating makes them temporal coincidence detectors, not simple conductance channels. Calcium entry via NMDA receptors is the main trigger for [[Long-Term-Potentiation]].

**Peter Tse's [[criterial-causation|criterial causation]]** (book: *The Neural Basis of Free Will*, 2013) argues that a neuron can distinguish two types of excitatory firing — one matching the pattern it's set to detect, the other not — by dynamically resetting its NMDA receptor windows. This elevates single-neuron computation from threshold logic to criterial gating.

## Competing views

[[Paul-King]] (Neuroscience, Redwood Center) argues that individual neurons are mostly ambiguous classifiers: with only ~10,000 inputs out of 30 billion cortical cells, each neuron rarely has enough evidence to decide reliably. Reliable detection emerges at network level via inhibitory competition and winner-take-all dynamics.

Both views are consistent with SAN's multi-scale framing: single-neuron criterial gating + network-level [[NAPOT]] oscillatory routing together produce robust pattern recognition.

## Ion channel substrate

The sequence: glutamate → AMPA receptor → Na⁺ in → voltage rises → NMDA unblocks → Ca²⁺ in → CAMP cascade → synaptic weight change. GABA → Cl⁻ in → inhibition. Potassium primarily regulates resting potential and resets the [[action-potential|action potential]] spike (not signal encoding per se).

[[action-potential-waveform|Action potential waveform]] duration can be modulated by calcium channel kinetics; spike-timing-dependent plasticity links this to [[Synaptic-Weight-Update]].

## Relation to SAN concepts

- [[NAPOT]] — dendritic sub-computation provides the per-neuron layer in the full oscillatory hierarchy.
- [[neural-coincidence-patterns]] — [[criterial-causation|criterial causation]] is the single-neuron mechanism for recognizing coincidence patterns.
- [[Long-Term-Potentiation]] — NMDA-gated Ca²⁺ is the physical substrate of pattern-rank increase.
- [[Criterial-Causation]] — stub: Tse's full framework.

## Outbound links

[[NAPOT]] · [[neural-coincidence-patterns]] · [[Long-Term-Potentiation]] · [[Criterial-Causation]] · [[Synaptic-Weight-Update]] · [[Paul-King]] · [[Hebbian-Learning]]

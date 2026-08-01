# Multivesicular Release

**Multivesicular release (MVR)** occurs when more than one synaptic vesicle fuses at a presynaptic active zone in association with one action potential or release event. It is a real mode of transmission at many synapses, but its prevalence and consequences depend on synapse type, calcium, release probability, available vesicles, active-zone structure, and measurement method.

> **Scientific boundary:** MVR increases the possible magnitude and dynamics of synaptic output. It is not automatically a spatial code, a replacement for rate or timing codes, proof that brain-computer interfaces discard most neural information, or evidence for NAPOT by itself.

## Quantal and probabilistic transmission

A useful synaptic model separates:

- `N`: the number of functional release sites or release-ready vesicles;
- `p`: the probability that an available vesicle is released;
- `q`: the postsynaptic response to one quantum under the measured conditions.

MVR can occur when more than one available vesicle is released, but the count is stochastic and bounded by the active zone and readily releasable pool. At individual Schaffer collateral boutons, low release-probability conditions favored single-vesicle events, while high-calcium conditions increased MVR; bouton strength depended on release probability and, under high-probability conditions, the number of available vesicles. See [Duerst et al. (2022)](https://doi.org/10.1038/s41467-022-33565-6).

Boutons from the same axon can also differ according to their postsynaptic target. In hippocampal glutamatergic terminals, target-cell-dependent calcium-channel function and docked-vesicle density were associated with different release probabilities. See [Holderith et al. (2017)](https://pubmed.ncbi.nlm.nih.gov/28115484/).

These findings argue against both a universal one-vesicle rule and a universal fixed multivesicle alphabet.

## MVR is not automatically a spatial message

Multiple vesicles may fuse at one active zone or at distinguishable release sites, but their transmitter enters a shared synaptic cleft and acts on a receptor field with its own geometry, saturation, desensitization, uptake, and diffusion. The downstream effect can be graded, nonlinear, or partially saturated.

Calling the vesicles a spatial pattern requires additional evidence:

1. release locations must be measured at sufficient resolution;
2. the spatial arrangement must vary in a task-related way;
3. the postsynaptic receiver must preserve or decode that arrangement;
4. the effect must remain after controlling for total transmitter, timing, calcium, and active-zone state.

Without those tests, MVR demonstrates output granularity, not a semantic spatial code.

## Relation to spike rate and artificial neural networks

Many artificial-neural-network units emit one scalar activation, but biological neurons expose many additional variables across axonal branches, boutons, transmitters, receptors, and target cells. MVR is one example of that biological richness. It does not "break" every rate model because rate models are abstractions at a chosen scale, and many models already include probabilistic synapses, short-term plasticity, conductances, or multiple compartments.

The useful comparison is therefore representational scope: a scalar unit omits bouton-specific stochastic release unless that structure is modeled explicitly.

## Thalamic and BCI boundary

MVR also does not make thalamic decoding inherently easy. Thalamic nuclei transform, gate, synchronize, and receive cortical feedback; they are not a transparent copy of peripheral input. Olfaction also does not use the thalamus as its first cortical relay in the same way as vision, audition, and somatosensation.

A BCI that records only population firing rate cannot observe vesicle release at individual synapses. It does not follow that it discards "most" neural information, because that fraction has not been measured and task-relevant information can be recoverable at coarser scales. Stimulation claims likewise require nucleus-, cell-type-, pathway-, timing-, and safety-specific evidence.

## Bounded SAN interpretation

SAN may treat bouton-specific release statistics as one contributor to receiver-relative neural state. A stronger claim would require showing that MVR adds task-relevant predictive information beyond spike timing, firing rate, calcium, short-term plasticity, and connectivity, and that downstream cells causally use the added distinction.

At the micro scale, MVR changes local synaptic effect. At the meso scale, many heterogeneous synapses shape circuit recruitment. At the macro scale, population timing, rate, power, and connectivity may reflect the aggregate consequences. No direct one-step mapping from vesicle count to a percept or phase-wave differential is established.

## Historical SAN formulation

Earlier SAN text treated each vesicle event as a micro-data point and proposed that spatial vesicle patterns greatly expand neural bandwidth. The revised formulation preserves the output-granularity insight while making the proposed spatial and semantic code conditional on receiver-level evidence.

## Related concepts

- [[action-potential-duration]]
- [[action-potential-waveform]]
- [[synaptic-unreliability-mvr-2021]]
- [[receptive-inceptive-dendritic-projection]]
- [[phase-wave-differential]]
- [[thalamus-as-relay-station]]
- [[eeg-bci-limitations]]
- [[napot-overview]]

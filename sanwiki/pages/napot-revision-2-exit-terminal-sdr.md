# NAPOT Revision 2: Synapse-Specific Output Hypothesis

> **Boundary note (2026-07-18):** Revision 2 preserves an important granularity question, but the historical apical-dendrite/exit-terminal wording is anatomically unsafe. Dendrites receive and transform inputs; action potentials are normally initiated in the axon initial segment and distributed through axonal branches to presynaptic boutons. Treat a per-synapse output SDR as a SAN hypothesis about target-specific downstream effects, not as a proven apical printing press. See [[receptive-inceptive-dendritic-projection]], [[plasticity-cluster-local-memory-update-substrate]], and [[san-scale-ladder-and-claim-boundaries]].

NAPOT Revision 2 is a historical SAN proposal that replaces the idea of one uniform output per neuron with a finer question: how much can one neuron's effect differ across its downstream synapses and targets? The useful question survives, but its original compartment map and its claim of a precomposed synaptic SDR require correction.

## Historical keyboard and printing-press metaphor

The source metaphor described:

- basal dendrites as a keyboard on which an incoming pattern is typed;
- a somatic burst as the print command;
- an apical dendrite or "exit terminal" as a printing press that stores a target-specific pattern;
- the next neural array as the reader of that pattern.

This is model genealogy, not anatomy. Layer-5 pyramidal neurons generally receive inputs across basal, oblique, apical-trunk, and apical-tuft compartments. Basal dendrites are not Layer-1 input trees, the apical dendrite is not the ordinary presynaptic output terminal, and axonal boutons are not located on the apical dendrite.

## Correct cellular route

1. Synaptic inputs alter dendritic and somatic membrane state.
2. Local dendritic nonlinearities and, in some cell types, dendritic spikes can influence somatic firing and burst probability.
3. The axon initial segment normally initiates the output action potential.
4. The action potential propagates through the axonal arbor, subject to cell-type, branch, state, and propagation constraints.
5. Each presynaptic bouton has its own release machinery, calcium history, vesicle pools, receptors, and modulatory context.
6. Release is probabilistic, and each downstream cell combines that event with many other inputs.

The result can be target-specific without being an arbitrary message written separately into every bouton before each spike. Differences across boutons emerge from axonal propagation, bouton state, release probability, synapse type, plasticity, neuromodulation, and the state of each receiver.

## What component evidence supports

- [Stuart et al. (1997)](https://doi.org/10.1111/j.1469-7793.1997.617ba.x) found that synaptically evoked action potentials in rat neocortical layer-5 pyramidal neurons initiated in the axon even when dendritic regenerative events occurred.
- [Larkum, Zhu, and Sakmann (1999)](https://doi.org/10.1038/18686) showed that coincident distal dendritic input and a back-propagating axonal action potential can couple inputs across layers and alter bursting.
- [Milstein et al. (2021)](https://doi.org/10.7554/eLife.73046) found bidirectional, weight-dependent BTSP at activated hippocampal CA1 inputs. This supports synapse-specific state changes over behavioral timescales, not an output SDR stored in apical terminals.
- [Duerst et al. (2022)](https://doi.org/10.1038/s41467-022-33565-6) measured bouton-specific release probability and multivesicular release at Schaffer collateral synapses. Release probability varied across boutons, but the result was preparation- and calcium-dependent.
- [Ucar et al. (2021)](https://doi.org/10.1038/s41586-021-04125-7) showed a special trans-synaptic mechanical effect in rat slice culture: spine enlargement that physically pushed a facing bouton enhanced presynaptic exocytosis. This is a conditional mechanism, not evidence that postsynaptic spine size normally programs every incoming axon's output.

## What remains a SAN hypothesis

The phrase **per-synapse SDR** is defensible only as a computational description of a vector of downstream effects. To turn it into a biological mechanism, the theory must specify:

- which presynaptic boutons and downstream cell types compose the vector;
- the time window over which the vector is read;
- whether the measured variable is release probability, vesicle count, transmitter identity, waveform, postsynaptic current, or a combination;
- how a receiver decodes the proposed sparse pattern;
- what prediction differs from ordinary synaptic heterogeneity and plasticity.

BTSP at input synapses, multivesicular release, or bouton-to-bouton variability does not by itself show that one neuron composes a target-addressed output word, that an action-potential waveform encodes the entire word, or that the word becomes a soliton carrying the same memory.

## Bounded relation to NAPOT

Revision 2 contributes a useful correction to a binary-neuron picture: cellular output is not exhausted by "spike" versus "no spike." However, NAPOT should place the reconstruction claim at the population level. Individual neurons contribute target-specific, probabilistic effects through ordinary axonal and synaptic physiology; downstream populations transform those effects recurrently.

## Discriminating tests

1. Record the axon and multiple identified boutons from one neuron while controlling somatic spike count and waveform.
2. Measure whether a stable target-specific release vector predicts downstream population state beyond bouton history and known release probability.
3. Perturb the proposed presynaptic state without changing postsynaptic spine state, then perform the reciprocal perturbation.
4. Test whether the same decoder generalizes across behavioral state, targets, and time.
5. Predeclare results that would reduce the SDR claim to ordinary synaptic heterogeneity.

## Relations

- [[napot-overview|NAPOT overview]]
- [[napot-revision-genealogy|NAPOT revision genealogy]]
- [[receptive-inceptive-dendritic-projection|Receptive and inceptive fields]]
- [[neural-array-projection|Neural Array Projection]]
- [[dendritic-pattern-detection|Dendritic Pattern Detection]]
- [[multi-vesicular-release|Multivesicular Release]]
- [[phase-wave-differentials|Phase-Wave Differentials]]

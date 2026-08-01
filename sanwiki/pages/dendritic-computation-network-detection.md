![Dendritic Computation Network Detection](../assets/generated/san/dendritic-computation-network-detection/dendritic-computation-network-detection-20260702-v1.png)

This image frames network detection as a three-row microcircuit cascade: initial pyramidal firing, inhibitory selection with dendritic spine growth, and downstream phase-rate modulation that lets the surviving ensemble become a recognizable pattern.

**[[dendritic-computation|Dendritic computation]]** is the process by which a [[pyramidal-cell|pyramidal cell]]'s firing propagates through the network in a way that ultimately causes the *network itself* to detect and represent the pattern encoded in that neuron's connections. The question addressed: how does a single neuron's firing result in network-level recognition of what that neuron represents?

## Three-row cascade

The proposed mechanism operates in three stages:

1. **Row 1 — Initial firing**: A pyramidal neuron fires, broadcasting its signal to connected neurons.
2. **Row 2 — Dendritic spine growth + inhibitory selection**: Dendritic spines grow toward the firing neuron. Simultaneously, a new inhibitory neuron fires, suppressing several competing neurons. This lateral inhibition *magnifies information rarity* — the surviving active neurons stand out against a quieted background, increasing their signal distinctiveness (consistent with information theory: rare events carry more bits).
3. **Row 3 — Phase rate modulation**: Oscillatory phase rates across the network shift, enabling downstream neurons to *deduce the pattern* represented by the ensemble of neurons that fired in Row 1.

## Significance for SAN

This cascade is the local-circuit implementation of [[criterial-tempo-spatial-waves]]: the "criterial" selection happens at Row 2 (inhibitory gating), and the "tempo-spatial" integration happens at Row 3 (phase-rate change enabling pattern deduction). The result is [[neural-array-projection-oscillation-tomography]] operating at the micro (dendritic) scale.

The thymus analogy from the same note is instructive: T-cell training (bombarding with proteins, keeping only cells that distinguish [[gh-a0206z|self]] from non-[[gh-a0206z|self]]) parallels how inhibitory selection in Row 2 keeps only neurons that encode the correct pattern.

Related: [[pyramidal-cells]], [[inhibitory-interneurons]], [[phase-wave-differential]], [[criterial-causation]], [[neural-array-projection-oscillation-tomography]], [[information-rarity]].

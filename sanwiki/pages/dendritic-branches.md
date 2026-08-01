# Dendritic Branches

A **dendritic branch** is a spatially bounded part of a neuron's input tree. Branch geometry and membrane conductances can partly compartmentalize synaptic integration, allowing inputs on the same branch to interact differently from inputs on separate branches.

## What a branch computes

Synaptic currents are graded. Depending on timing, location, receptor type, voltage, inhibition, and ion-channel state, branch integration may be:

- **sublinear**, for example through reduced driving force or shunting inhibition;
- **approximately linear** across some separated inputs; or
- **supralinear**, when cooperative NMDA-receptor activation or voltage-gated channels recruit a local dendritic event.

In thin dendrites of rat neocortical pyramidal neurons, nearby inputs on one branch showed sigmoid-like nonlinear summation, while separated inputs summed more linearly. This is evidence for branch-level computational subunits in a defined preparation. Primary source: [Polsky, Mel, and Schiller, *Nature Neuroscience* 7, 621-627 (2004)](https://doi.org/10.1038/nn1253).

## Not Boolean voting

A branch does not generally emit a literal YES or NO vote, and the soma does not poll branch answers. Local voltage and current spread continuously; some events remain local, some influence plasticity, and some alter somatic or axonal firing. A neuron may sometimes be modeled as a two-layer network, but the model is an abstraction of graded biophysics.

Likewise, one active branch is not automatically one recognized concept or one percentage of confidence. Demonstrating such a code requires a defined stimulus or task, branch-resolved recording, decoding across trials, and a causal perturbation.

## SAN interpretation

SAN can treat dendritic branches as candidate **local reception and selection compartments**. The term "decision" should refer to a measurable nonlinear change in influence on later cellular output, not to a hidden agent inside the branch. The cell-wide output remains a result of distributed membrane dynamics and axon-initial-segment excitability.

This micro-scale motif can contribute to [[napot-overview|NAPOT]] only as one component of a larger circuit. Many branches and neurons gather partial inputs; axons and recurrent pathways redistribute population updates.

> **Figure status (2026-07-19): revision required.** The archived legacy plate (quarantined; not linked from the active Wiki) uses YES/NO branch votes, a somatic poll, and a generic burst decision. These are misleadingly digital and are not displayed as medically certified physiology.

## Related pages

- [[dendrite]]
- [[dendritic-architecture]]
- [[dendritic-coincidence-detection]]
- [[dendritic-spike]]
- [[pyramidal-cell]]

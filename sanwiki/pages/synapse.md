# Synapse

A **synapse** is a specialized junction through which one cell changes the state of another. Chemical synapses use transmitter release and postsynaptic receptors. Electrical synapses pass current and small molecules through gap-junction channels. Neither kind is a miniature observer, universal semantic recognizer, or deterministic memory address.

## Established chemical-synapse physiology

At many chemical synapses, a presynaptic action potential opens voltage-gated calcium channels near release machinery. Calcium raises the probability that one or more synaptic vesicles will fuse. Release is stochastic and heterogeneous: boutons supplied by the same axon can have different calcium influx, vesicle pools, and release probabilities ([Ermolyuk et al., 2012](https://doi.org/10.1371/journal.pbio.1001396); [Dürst et al., 2022](https://doi.org/10.1038/s41467-022-33565-6)).

Released transmitter diffuses across the cleft and binds receptors. The postsynaptic consequence depends on transmitter, receptor subtype and number, conductance, reversal potential, membrane voltage, dendritic location, inhibition, and recent activity. The same presynaptic spike therefore need not produce the same postsynaptic effect on every trial or at every target.

Some synapses use multivesicular release. A reconstructed connection between two rat neocortical pyramidal neurons contained several anatomical contacts and showed evidence consistent with multivesicular release ([Holler et al., 2021](https://doi.org/10.1038/s41586-020-03134-2)). This supports richer and variable synaptic transmission at that connection. It does not establish that vesicle count universally carries a 3D spatial code.

## Short- and long-term change

Synaptic influence changes over milliseconds to seconds through facilitation, depression, vesicle depletion, residual calcium, receptor desensitization, and inhibition. Longer-lasting changes can involve presynaptic release, postsynaptic receptors, spine structure, signaling molecules, intrinsic excitability, and network-level homeostasis.

Spike timing can matter, but no universal rule maps *pre before post* to LTP and *post before pre* to LTD. At CA3-CA1 synapses, burst frequency and number of pairings changed whether timing protocols produced potentiation, depression, or neither ([Wittenberg and Wang, 2006](https://doi.org/10.1523/JNEUROSCI.5388-05.2006)). At unitary Layer 2/3 neocortical connections, prior postsynaptic activity switched the observed timing rule ([Zilberter et al., 2009](https://doi.org/10.1093/cercor/bhn247)). Adult human neocortical synapses also showed a broad, preparation-specific timing rule rather than the canonical diagram ([Verhoog et al., 2013](https://doi.org/10.1523/JNEUROSCI.3158-13.2013)).

Chemical synapses are not strictly one-way in regulation. At defined synapses, postsynaptic endocannabinoids can act retrogradely on presynaptic terminals and transiently suppress release ([Ohno-Shosaku et al., 2001](https://doi.org/10.1016/S0896-6273(01)00247-1)). This establishes pathway-specific retrograde modulation, not transmission of a complete memory backward across every synapse.

## What the rejected figures were trying to communicate

The four PNG/SVG pairs tried to show one synapse as a local, individually modifiable junction where presynaptic timing, release pattern, postsynaptic state, and plasticity meet. That recoverable message is stronger than a passive-wire picture.

The plates failed medically by collapsing those variables into one equation:

> timing + vesicle pattern + spine address = signed memory write

They then depicted pre-before-post as LTP, post-before-pre as LTD, multivesicular release as a spatial-information footprint, receptor insertion or removal as the inevitable outcome, and local plasticity as directly becoming column phase and network memory. Each step can occur in bounded preparations; the complete deterministic chain is not established.

## SAN source genealogy

The SAN sources contain several distinct proposals that should not be collapsed:

- `02san.md` uses the familiar pre/post timing rule to connect relative timing with LTP/LTD. It records the intended SAN bridge but states one simplified rule too generally.
- `a0001z.md` proposes that transmission is synapse-specific rather than one uniform cell-wide message.
- `a0007z.md` proposes branch- and synapse-specific output modulation and explores backward influence from postsynaptic or dendritic state.
- `a0010z.md` places synapse, dendrite, cell, circuit, column, and thalamocortical network in a nested coincidence architecture.
- `a0221z.md` and `a0329z.md` use evidence for multivesicular release to motivate a stronger spatial-encoding hypothesis.

These sources establish what SAN proposed. They do not make every historical formulation established physiology.

## Bounded SAN interpretation

SAN can treat a synaptic event as a **receiver-relative micro-scale transformation**. A useful event description is multivariate rather than binary:

- presynaptic timing and waveform;
- local calcium and release probability;
- number and location of release events;
- transmitter and receptor state;
- postsynaptic voltage and dendritic context;
- inhibition and neuromodulation;
- short-term synaptic history; and
- any later plasticity or retrograde consequence.

The distinctive hypothesis is not that one synapse recognizes a semantic atom. It is that synapse-specific state and variability contribute typed differential events whose consequences depend on the receiving compartment, and whose repeated history changes later routing and population reconstruction.

Three tests separate this proposal from established components:

1. A multivariate synaptic-state model should predict postsynaptic and later circuit consequences better than spike occurrence, mean rate, or one scalar weight.
2. If multivesicular release carries information beyond mean transmitted charge, manipulating release-event number or spatial organization while matching rate and charge should selectively alter the predicted downstream relation.
3. If synaptic changes participate in a repeated cross-scale SAN operator, measured synaptic state should improve prediction of later branch, cell, circuit, and behavioral states without assuming that the same mechanism or time constant is literally repeated at every scale.

![One glutamatergic spine synapse shown as probabilistic transmission with state-dependent short-term, long-term, retrograde, and receiver-relative consequences](../assets/generated/san/synapse/synapse-probabilistic-transmission-state-dependent-consequence-20260720-v1.png)

> **Figure boundary:** Solid panels show one established glutamatergic spine-synapse example and its possible consequences. The dashed green panel isolates SAN's proposed multivariate, receiver-relative event model. All four rejected PNG/SVG pairs remain quarantined.

## Primary anchors

- [Ermolyuk et al. (2012), bouton-specific calcium influx and release heterogeneity](https://doi.org/10.1371/journal.pbio.1001396)
- [Holler et al. (2021), structure and function of a neocortical synaptic connection](https://doi.org/10.1038/s41586-020-03134-2)
- [Dürst et al. (2022), vesicular release probability at individual Schaffer collateral synapses](https://doi.org/10.1038/s41467-022-33565-6)
- [Wittenberg and Wang (2006), dependence of STDP on activity beyond millisecond timing](https://doi.org/10.1523/JNEUROSCI.5388-05.2006)
- [Zilberter et al. (2009), input-specific and history-dependent neocortical STDP](https://doi.org/10.1093/cercor/bhn247)
- [Verhoog et al. (2013), associative plasticity at adult human neocortical synapses](https://doi.org/10.1523/JNEUROSCI.3158-13.2013)
- [Ohno-Shosaku et al. (2001), retrograde endocannabinoid suppression of transmitter release](https://doi.org/10.1016/S0896-6273(01)00247-1)

## Related concepts

- [[chemical-synapse]]
- [[electrical-synapse]]
- [[release-probability]]
- [[multi-vesicle-release]]
- [[multi-vesicle-release-spatial-encoding]]
- [[short-term-plasticity]]
- [[long-term-potentiation]]
- [[long-term-depression]]
- [[spike-timing-dependent-plasticity]]
- [[retrograde-signaling]]
- [[dendritic-spines]]
- [[phase-wave-differential]]
- [[san-scale-ladder-and-claim-boundaries]]

## Source provenance

This page preserves the SAN formulation in the immutable Git sources while separating it from later medical interpretation. Principal SAN donors: `02san.md`, `a0001z.md`, `a0007z.md`, `a0010z.md`, `a0221z.md`, and `a0329z.md`.

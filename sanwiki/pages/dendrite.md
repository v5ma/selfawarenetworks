# Dendrite

A **dendrite** is a branched neuronal process that receives synaptic input and transforms how that input influences the cell. Dendrites have passive cable properties and, in many neuron classes, voltage- and ligand-gated conductances that support active local events. Calling them active computational compartments is accurate; calling every branch a Boolean gate or every dendrite a miniature neuron is not.

## Established physiology

Synaptic currents spread through the dendritic membrane with attenuation and time-dependent filtering. Their effect depends on distance from the soma, branch diameter, membrane resistance and capacitance, synapse location, membrane voltage, inhibition, and ion-channel distribution. Nearby inputs can interact nonlinearly, while inputs on different branches may combine differently.

Dendrites can support several distinct events, including NMDA-receptor-dependent plateaus, sodium spikes, calcium spikes, and backpropagating action potentials. Their prevalence, waveform, and influence on axonal output vary across cell types and compartments. [Polsky, Mel, and Schiller (2004)](https://doi.org/10.1038/nn1253) found nonlinear integration for nearby inputs on the same thin dendritic branch in rat neocortical pyramidal cells. [Smith et al. (2013)](https://doi.org/10.1038/nature12600) recorded visually evoked local dendritic spikes in mouse V1 and linked them to orientation selectivity.

Input order can matter as well as input count. [Branco, Clark, and Hausser (2010)](https://doi.org/10.1126/science.1189664) showed that activation sequences traveling in different directions along a dendrite produced different dendritic calcium signals, somatic depolarization, and spike output. In mouse primary somatosensory cortex, causal manipulation of apical-dendritic calcium activity shifted perceptual detection thresholds ([Takahashi et al., 2016](https://doi.org/10.1126/science.aah6066)). These results establish active dendritic contributions in particular preparations; they do not make a dendrite a sensory organ or observer.

The soma does not literally "see" a branch decision. Dendritic voltage and current interact at the soma and axon initial segment, where many pyramidal-cell action potentials are initiated. Local dendritic events may remain local, alter plasticity, or influence somatic and axonal firing.

## Structure and plasticity

Dendritic arbors carry thousands of excitatory and inhibitory synapses. Their geometry, spines, receptor composition, channels, and inhibition change over development and with activity. These changes participate in learning and memory, but morphology alone is not a complete memory record and a single branch is not a semantic token.

Branch-local events can leave branch-local consequences. Different motor tasks recruited branch-specific calcium spikes and long-lasting spine potentiation in apical tufts of mouse motor-cortex Layer 5 pyramidal neurons ([Cichon and Gan, 2015](https://doi.org/10.1038/nature14251)). Conversely, coupling between dendrite and soma cannot be assumed: direct recordings found enhanced electrical compartmentalization in human Layer 5 pyramidal neurons, where distal dendritic spikes could have limited effects at the soma ([Beaulieu-Laroche et al., 2018](https://doi.org/10.1016/j.cell.2018.08.045)).

See [[dendritic-architecture]], [[dendritic-branches]], [[dendritic-spines]], and [[dendritic-spike]].

## SAN interpretation

SAN can treat dendrites as the **receptive and locally transforming side** of a cellular receive-integrate-project motif. This is a candidate micro-scale analogy for NAPOT, not proof that one neuron performs tomography or that dendrites form long-range "highways" between cortical columns. Network-level gathering and redistribution require many neurons, synapses, axons, and recurrent pathways.

Here *receptive* does not mean passive. It means that the arbor's learned arrangement of synapses, receptors, channels, inhibition, geometry, and recent voltage state determines how an arriving pattern changes the cell. Nor does it mean camera: a dendrite samples local electrochemical events, not light rays, sound waves, or a complete scene unless it belongs to the appropriate biological sensory-transduction pathway.

### What the rejected figure was trying to communicate

The five legacy designs tried to replace a passive-cable caricature with an active compartment tree. Their recoverable message is that spatially distributed synapses encounter local, state-dependent transformations before their effects contribute to whole-cell output or plasticity. The rejected diagrams overreached by showing branches accepting or rejecting learned patterns, selected events routing to a soma that "sees" them, and a dendritic highway mirroring NAPOT.

### Distinctive SAN hypothesis recovered from the failed figure

SAN proposes that learned dendritic morphology and receptor/channel state form a receiver-specific physical memory of prior relations. Partial reactivation of that state may bias which larger recurrent pattern is reinstated, much as a compressed cue can recruit a distributed representation. The dendrite does not contain the reconstructed scene; it contributes constraints and transformed signals from which the surrounding network may reconstruct a prior or predicted relation.

This can be tested without the camera metaphor: determine whether branch-resolved structural and physiological state predicts later population-pattern reinstatement and behavior beyond synapse counts, somatic firing, and point-neuron models. Causal branch perturbation should alter the specifically predicted population relation, and a matched network intervention should rescue it.

The strongest SAN-relevant claim is testable: branch-resolved input patterns should predict later somatic/axonal output and plasticity better than a point-neuron weighted sum, and specific dendritic perturbations should alter that relationship.

![Dendritic anatomy and physiology shown from synaptic contact through branch and arbor transformations to axon-initial-segment output and recurrent-network consequence](../assets/generated/san/dendrite/dendrite-synaptic-contact-to-network-consequence-20260720-v1.png)

> **Figure boundary:** Solid panels show established anatomy and physiology across nested scales. The dashed green panel isolates SAN's proposed learned receiver-state and recurrent-reinstatement hypothesis. All five rejected PNG/SVG pairs remain quarantined.

## Primary anchors

- [Polsky, Mel, and Schiller (2004), nonlinear computational subunits in thin dendrites](https://doi.org/10.1038/nn1253)
- [Branco, Clark, and Hausser (2010), dendritic discrimination of input order](https://doi.org/10.1126/science.1189664)
- [Smith et al. (2013), dendritic spikes and visual stimulus selectivity](https://doi.org/10.1038/nature12600)
- [Cichon and Gan (2015), branch-specific calcium spikes and persistent plasticity](https://doi.org/10.1038/nature14251)
- [Takahashi et al. (2016), active cortical dendrites modulate perceptual detection](https://doi.org/10.1126/science.aah6066)
- [Beaulieu-Laroche et al. (2018), enhanced dendritic compartmentalization in human cortical neurons](https://doi.org/10.1016/j.cell.2018.08.045)

## Related pages

- [[dendritic-computation]]
- [[dendritic-compartmentalization]]
- [[pyramidal-cell]]
- [[action-potential]]
- [[napot-overview]]

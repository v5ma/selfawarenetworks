**NAPOT Revision 3** identifies Slow Cortical Potentials (SCPs) — also called slow wave
potentials, DC potentials, or standing potentials — as **negative action potentials**: the
rare signal emitted when a neuron releases 0 vesicles in a tonic interval, pulling energy
out of the circuit (acting as an electrical sink) rather than pushing it forward.

In [[napot]]'s information-theoretic framing, rare events carry more information than common
ones. Tonic firing is baseline; the phasic burst carries one signal level. The 0-vesicle
silence — manifesting as a SCP — is the rarest signal and carries the most information,
validated by the SCP literature's finding that negative SCPs correlate with *increased*
cortical activity (inhibition of the surrounding oscillating group paradoxically amplifies
the local computational event).

## Mechanism: Extracellular K⁺ and Brainwave Genesis

When a neuron acts as a sink — opening more K⁺ channels — extracellular potassium rises.
This creates a slow potential shift lasting hundreds of milliseconds to seconds. [[gh-resnote04|Micah]]'s
conjecture: the extracellular K⁺ gradient is the direct source of the brainwaves observable
in EEG. The volume conduction of that dissipating extracellular current is what electrodes
measure — an *inverted mirror* of the intracellular phase wave change at the soma.

EEG source localization is therefore the reversal of that refraction: working backward from
volume-conducted K⁺ gradients to reconstruct the original phase wave event inside the cell.
This explains why deep subcortical signals (thalamus) are detectable via high-density EEG
source imaging.

## Dendritic Computation Background

The 1962 Rall dendritic neuron model (cited in source) distinguishes:
- **Somatic synapses** — best for precise spike triggering.
- **Dendritic synapses** — best for slow background excitation level adjustment.

NAPOT Revision 3 inherits this: basal dendrites (inhibitory K⁺ synapses) set the resistance
floor; somatic coincidence detection between basal and apical inputs triggers the burst that
generates the informative SCP. See [[cognitive-states-and-stages]] for the hardware/software
analogy this motivates.

## NAPOT Revision History

- **Revision 1**: Arrays of neurons emit phase wave changes to downstream arrays; 0/1/2/3
  vesicle sacks encode the pattern. Computational rendering + pattern detection in oscillating
  feedback loops.
- **Revision 2**: Sparse Distributed Representation at synaptic level. Burst firing as
  coincidence detection across basal + [[apical-dendrites|apical dendrites]] (seconds timescale, not milliseconds).
  Thalamic layer broadcast enables multi-layer coincidence.
- **Revision 3** (this page): 0-vesicle release = SCP = negative [[action-potential|action potential]].
  Extracellular K⁺ gradient = brainwave source. EEG = inverted volume-conducted phase signal.

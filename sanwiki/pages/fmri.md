# Functional Magnetic Resonance Imaging

Functional magnetic resonance imaging (fMRI) commonly estimates blood-oxygen-level-dependent (BOLD) change. BOLD reflects interactions among neural activity, metabolism, blood flow, blood volume, and oxygenation. It is not a direct recording of spikes, synaptic phase, transmitter release, or semantic content.

## What fMRI can show

fMRI can map spatially distributed, task-related and spontaneous hemodynamic patterns across much of the brain. Dynamic and traveling patterns can be estimated from repeated measurements, but their interpretation depends on sampling rate, preprocessing, vascular anatomy, motion, physiological noise, statistical model, and the neurovascular response.

The relationship between neural activity and BOLD is experimentally grounded but not one-to-one. Simultaneous electrophysiology and fMRI established important links between local field activity and BOLD while also showing why BOLD should not be treated as a direct electrical trace.

Diffusion MRI is a different measurement family. It estimates direction-dependent water displacement and can support tractography. A streamline is a model-derived path, not a directly observed axon.

## SAN interpretation

SAN proposes that slow BOLD propagation may preserve macro-scale consequences of recurrent neural dynamics. This is a testable interpretation, not an established identity between BOLD, EEG, MEG, and NAPOT. Different instruments may respond to related biological events while preserving different physical variables and temporal filters.

A useful SAN experiment would preregister a predicted spatial path, direction, lag, behavioral condition, and cross-modal relationship. Simultaneous or carefully aligned electrophysiology could then test whether a BOLD pattern covaries with the proposed faster dynamics. Similar-looking waves in two modalities are not sufficient; the forward model and expected coupling must be specified.

## Scale boundary

- Cellular: fMRI does not ordinarily resolve individual neuronal integration or synaptic phase.
- Meso-scale: high-field and specialized analyses can estimate local population and laminar hemodynamic differences, subject to vascular and modeling limits.
- Macro-scale: fMRI is well suited to distributed network and whole-brain hemodynamic organization.
- Organismal: respiration, cardiac activity, movement, arousal, and task behavior remain part of the measurement.

## Evidence boundary

- Established: BOLD is a hemodynamic signal coupled to neural, vascular, and metabolic processes.
- Established: fMRI can estimate spatially distributed functional patterns and slow propagation.
- Proposed by SAN: some BOLD dynamics are macro-scale consequences of NAPOT-related recurrent activity.
- Not established: that BOLD and EEG are the same phenomenon, that BOLD directly measures phase-wave differentials, or that fMRI alone reconstructs a neural render.

## Primary references

- Logothetis NK et al. Neurophysiological investigation of the basis of the fMRI signal. *Nature*. 2001. https://doi.org/10.1038/35084005
- Schilling KG et al. Limits to anatomical accuracy of diffusion tractography using modern approaches. *NeuroImage*. 2019. https://doi.org/10.1016/j.neuroimage.2018.10.029
- Basser PJ, Mattiello J, LeBihan D. MR diffusion tensor spectroscopy and imaging. *Biophysical Journal*. 1994. https://doi.org/10.1016/S0006-3495(94)80775-1

## Related pages

- [[neuroimaging]]
- [[fnirs-brain-imaging]]
- [[eeg]]
- [[traveling-waves-neural-oscillations]]
- [[napot-overview]]
- [[connectome]]

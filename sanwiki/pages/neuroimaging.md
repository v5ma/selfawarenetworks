# Neuroimaging

Neuroimaging is a family of measurement and inference methods, not a single window onto brain function. Structural MRI, diffusion MRI, fMRI, EEG, MEG, fNIRS, diffuse optical tomography, EIT, and invasive electrodes preserve different physical variables at different spatial, temporal, anatomical, and behavioral scales.

## The measurement chain

A reported brain result should be read through five stages:

1. **Biological state:** membrane voltages, synaptic currents, spikes, metabolism, blood flow, oxygenation, movement, and network context.
2. **Physical signal:** voltage, magnetic field, light attenuation, radio-frequency response, diffusion, or impedance reaching the instrument.
3. **Instrument transform:** sensor geometry, bandwidth, noise rejection, sampling, calibration, and participant constraints.
4. **Inference:** source localization, statistical model, reconstruction, decoding, or classification.
5. **Consequence:** the behavioral, clinical, or theoretical claim supported by that inference.

No modality preserves every stage directly. The same biological event can leave several physical traces, and different biological states can sometimes fit similar measurements. Resolution is multidimensional: temporal precision, spatial localization, depth, coverage, mobility, invasiveness, specificity, safety, and long-term stability can trade against one another.

## Modality boundaries

- **EEG and MEG** follow rapid population electrophysiology but require source inference.
- **Intracranial electrodes** provide local electrophysiology but sample only implanted tissue.
- **fMRI** commonly measures BOLD hemodynamics rather than electrical activity.
- **Diffusion MRI** estimates water-displacement structure; tractography streamlines are model outputs.
- **fNIRS and diffuse optical tomography** estimate optical and hemodynamic changes, mostly in superficial cortex with conventional arrangements.
- **EIT** estimates conductivity or impedance change from applied currents and boundary voltages.
- **Structural imaging** constrains anatomy but does not by itself identify ongoing computation.

## SAN and NAPOT

SAN uses neuroimaging as one part of a multimodal test surface. Its distinctive hypotheses concern relationships among tonic population context, phasic updates, recurrent pathways, traveling activity, body state, and action. Neuroimaging can constrain those hypotheses only when the predicted variable and scale are declared in advance.

A macro-scale traveling pattern does not by itself prove cellular NAPOT. Conversely, a cellular mechanism does not automatically predict a visible whole-brain signal. Tests must bridge micro, meso, macro, and organismal scales with explicit forward models and convergent measurements.

SAN does not propose a hidden viewer that reads an internal image. The proposed observer-action is the distributed network process itself. Imaging can sample consequences of that process, but no colored activation map should be described as the finished percept.

## Evidence boundary

- Established neuroscience defines what each instrument measures and its known limits.
- SAN proposes additional relationships among those measurements and distributed neural rendering.
- Similarity across modalities is a hypothesis about common causes, not evidence that the signals are physically identical.
- Decoding task condition is not equivalent to reading semantic content or reconstructing subjective experience.

## Primary references

- Logothetis NK et al. Neurophysiological investigation of the basis of the fMRI signal. *Nature*. 2001. https://doi.org/10.1038/35084005
- Hamalainen M et al. Magnetoencephalography: theory, instrumentation, and applications to noninvasive studies of the working human brain. *Reviews of Modern Physics*. 1993. https://doi.org/10.1103/RevModPhys.65.413
- Baillet S. Magnetoencephalography for brain electrophysiology and imaging. *Nature Neuroscience*. 2017. https://doi.org/10.1038/nn.4504
- Yucel MA et al. Best practices for fNIRS publications. *Neurophotonics*. 2021. https://doi.org/10.1117/1.NPh.8.1.012101
- Schilling KG et al. Limits to anatomical accuracy of diffusion tractography using modern approaches. *NeuroImage*. 2019. https://doi.org/10.1016/j.neuroimage.2018.10.029
- Aristovich K et al. Imaging fast electrical activity in the peripheral nervous system with electrical impedance tomography. *Journal of Neural Engineering*. 2018. https://doi.org/10.1088/1741-2552/aad78e

## Related pages

- [[fmri]]
- [[eeg]]
- [[fnirs-brain-imaging]]
- [[neuroimaging-next-generation]]
- [[neuroimaging-localism-critique]]
- [[neuroimaging-reliability-critique]]
- [[napot-overview]]
- [[traveling-waves-neural-oscillations]]
- [[bci-instrument-atlas]]

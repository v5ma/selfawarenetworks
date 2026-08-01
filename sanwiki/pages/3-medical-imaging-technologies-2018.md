---
title: "Three Wearable Brain-Imaging Proposals (2018)"
tags: [san, neurotechnology, neuroimaging, bci, xr, source-genealogy]
aliases: [3 Medical Imaging Technologies 2018, Three Medical Imaging Technologies]
status: governed
---

# Three Wearable Brain-Imaging Proposals (2018)

On March 4, 2018, Micah Blumberg surveyed three proposed or emerging routes to more
accessible brain measurement: Openwater coherent near-infrared optics, Furaxa
ultrawideband microwave imaging, and OpenEIT electrical impedance tomography. The
article ended with a specific engineering proposal: integrate medical sensing into
AR/VR headsets so controlled sensory input, behavior, and physiology can be studied
together.

The article was exploratory. Its questions about holography, tractography, near-infrared
spectroscopy, microwave imaging, and EIT were not evidence that the modalities were
equivalent, clinically validated, or capable of reading a complete thought.

![Three distinct wearable brain-imaging inverse problems using coherent near-infrared light, ultrawideband microwaves, and electrical impedance tomography, followed by the 2018 XR-BCI integration proposal](../assets/generated/san/3-medical-imaging-technologies-2018/three-paths-wearable-brain-imaging-2018-20260712-v2.png)

*The brain cutaways, waveforms, speckle fields, and conductivity maps are explanatory
schematics, not experimental data from Openwater, Furaxa, or OpenEIT. The figure
compares inverse problems and preserves the 2018 headset proposal; it does not depict
thought decoding or validation of NAPOT.*

## The recovered 2018 operation

The article's most durable contribution is a measurement architecture:

```text
modality-specific physical measurement
+ headset geometry and calibration
+ controlled XR stimulus, behavior, and body state
-> synchronized observations
-> modality-specific inverse estimate
-> bounded BCI output or feedback
```

This is not:

```text
scanner -> direct thought image
scanner -> proof of a neural rendering mechanism
readout -> safe or effective write-back
```

The public article predates the 2022 formulation of NAPOT. Later SAN work can ask
whether multimodal measurements constrain a changing neural-state model, but it should
not backdate NAPOT into this 2018 source.

## Three sensors, three inverse problems

### Openwater optical system

- **Physical observable:** coherent near-infrared light intensity and speckle change after tissue scattering.
- **Bounded estimate:** relative cerebral blood-flow and blood-volume changes in the currently validated system.
- **Important limit:** hemodynamic contrast is not direct neuronal electrical readout or thought content.

### Furaxa microwave proposal

- **Physical observable:** amplitude, attenuation, phase, or time-of-flight of ultrawideband microwave signals passing through and reflecting from tissue.
- **Bounded estimate:** candidate structural, vascular, or physiological-change map.
- **Important limit:** the 2018 team report described poor signal-to-noise, scattering, blurring, and substantial remaining development; it was not a validated mind-reading helmet.

### Electrical impedance tomography

- **Physical observable:** applied current pattern and boundary-voltage measurements.
- **Bounded estimate:** conductivity or impedance-change distribution under a forward model.
- **Important limit:** reconstruction is non-unique and geometry-dependent. Fast neural EIT evidence came from bounded animal preparations with epicortical electrodes, not noninvasive whole-human-brain imaging.

A sensor's physics determines what can be inferred. Holography, diffuse optical
measurement, microwave radar, EIT, diffusion MRI, and tractography cannot be exchanged
merely because each can produce a spatial reconstruction.

## What later evidence supports

### Openwater

A 2024 validation study used highly coherent 785 nm light in 25 healthy participants
during breath holding. Speckle contrast supported a relative blood-flow measure and
average intensity supported a relative blood-volume measure, compared with
transcranial Doppler. This validates a wearable cerebral hemodynamic measurement in
that task; it does not validate cellular-resolution neural recording or semantic
decoding ([Favilla et al., 2024](https://doi.org/10.1117/1.NPh.11.1.015008)).

### Furaxa

The Furaxa team's 2018 account proposed 20-50 picosecond microwave pulses and a
many-element radar helmet. The authors described candidate functional and vascular
signals but also stated that much work remained before a usable wearable brain-machine
interface existed
([Libove, Schriebman, and Ingle, 2018](https://brain.ieee.org/newsletter/2018-issue-2/wearable-microwave-imager-and-bmi-development/)).

### Electrical impedance tomography

Fast neural EIT has reconstructed evoked impedance changes in rat somatosensory cortex
at millisecond scale using an epicortical electrode array over a small exposed cortical
volume. That is important evidence for the physical signal and inverse method, but the
preparation cannot be generalized to a noninvasive whole-brain consumer headset
([Aristovich et al., 2016](https://doi.org/10.1016/j.neuroimage.2015.08.071)).

## Later development in Micah's record

A May 11, 2021 neurophotonics discussion extends the 2018 direction toward optical
readout and ultrasound stimulation. The authoritative large-v3-turbo retranscription
also preserves an overcompressed account of holography and refraction. The medically
accurate recovery is narrower: coherent optical systems can
use measured interference or speckle behavior and an explicit forward model to infer
properties of scattering tissue. They do not literally undo refraction or guarantee
unbounded detail.

An April 6, 2021 discussion of hybrid EEG-fNIRS emphasizes synchronization across
modalities with different windows. The referenced 2017 quadcopter study used fNIRS
mental-task classes and EEG eye-movement classes as two complementary command branches.
fNIRS measured delayed hemodynamic consequences, not an oxygen input that precedes
neuronal firing
([Khan and Hong, 2017](https://doi.org/10.3389/fnbot.2017.00006)).

These later recordings develop the measurement program. They are not evidence that the
more specific 2021 optical, ultrasound, or hybrid-decoding claims were already present
in the 2018 article.

## Claim ladder

### Established science

- Each modality measures a different physical variable and requires its own forward and
  inverse model.
- Optical hemodynamics, microwave propagation, EIT, EEG, and fNIRS operate at different
  spatial and temporal scales.
- A useful BCI can classify a bounded task without reconstructing a complete brain state.

### Historical 2018 proposal

Embed complementary medical-sensing modules in an XR headset and register their outputs
with controlled sensory scenes, behavior, and feedback.

### Later SAN interpretation

Use synchronized, modality-specific observations to constrain a latent neural-state
model that also includes body state, action, and returned sensory consequence. This is
an instrumentation proposal for testing aspects of SAN; it is not evidence that the
brain itself performs tomography.

### Stronger testable hypothesis

A calibrated multimodal model should predict held-out behavior or the consequence of a
declared intervention better than matched unimodal baselines. Failure to improve
prediction, localization, or intervention response would count against the proposed
fusion architecture.

## Scale boundary

- **Cellular:** none of the three 2018 wearable proposals established noninvasive,
  whole-brain, single-neuron recording.
- **Circuit:** a bounded reconstruction may estimate regional physiological or
  conductivity change, depending on modality, geometry, and preparation.
- **Network and behavior:** synchronized task, movement, body, and neural measurements
  can support constrained decoding or model comparison without revealing a complete
  percept or conscious state.

## Source genealogy

- **March 4, 2018:** original public article and XR-BCI integration proposal.
- **June 13, 2022:** `a0228z.md` first entered the public Git history in commit
  [`676fb9a`](https://github.com/v5ma/selfawarenetworks/blob/676fb9aa2377de58c6b30114c26fc335c7190eb7/a0228z.md).
- **2021 recordings:** later optical/ultrasound and hybrid EEG-fNIRS development,
  recovered from the authoritative large-v3-turbo retranscriptions and kept
  chronologically separate from the 2018 claim.

Read the preserved source record at [[gh-a0228z|a0228z]].

## Read next

- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]
- [[neuroimaging-next-generation|Next-Generation Neuroimaging]]
- [[neural-lace-podcast-s2e1-jean-rintoul-2018|Neural Lace Podcast S2E1: Jean Rintoul and OpenEIT]]
- [[gh-a0015z|Optical and Mechanical Neural Read/Write Proposal]]
- [[brain-computer-interface|Brain-Computer Interface]]

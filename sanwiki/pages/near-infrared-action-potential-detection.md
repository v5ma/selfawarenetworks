---
title: "Near-Infrared and Interferometric Detection of Neural Activity"
tags: [san, neuroimaging, near-infrared, interferometry, action-potentials, bci]
aliases: [Near Infrared Action Potential Detection, Optical Action Potential Detection]
summary: "A scale-bounded account of direct label-free optical action-potential detection in cultured neurons, hemodynamic near-infrared brain imaging, and SAN's unproven multimodal transcranial reconstruction proposal."
status: source-bounded
---

# Near-Infrared and Interferometric Detection of Neural Activity

Several distinct technologies are easy to collapse into one claim. They must remain separated:

1. microscope-based interferometric measurements of action-potential-linked cellular deformation;
2. fNIRS and diffuse optical tomography measurements of slower hemodynamic consequences;
3. computational recovery of phase or speckle information from scattered light; and
4. the stronger SAN proposal for high-resolution transcranial multimodal reconstruction.

## Established cellular observation

Action potentials are not only electrical abstractions. In controlled preparations they can be
accompanied by tiny changes in membrane position and optical path length.

Batabyal et al. recorded optical pulses associated with action potentials in cultured mammalian
neurons using phase-sensitive low-coherence interferometry. Ling et al. later imaged
subnanometer-to-nanometer deformations in cultured mammalian neuron somas and neurites with
high-speed quantitative phase imaging
([Batabyal et al., 2017](https://doi.org/10.1364/BOE.8.003700);
[Ling et al., 2020](https://doi.org/10.1073/pnas.1920037117)).

These are direct, label-free optical observations at cellular scale in microscope-compatible
preparations. They do not establish the same sensitivity or resolution through an intact adult
human head.

## Established human near-infrared imaging

[[fnirs-brain-imaging|fNIRS and high-density diffuse optical tomography]] use near-infrared light
to estimate changes in oxygenated and deoxygenated hemoglobin and related blood-flow dynamics.
They can map distributed task-related cortical hemodynamics, but those signals are delayed,
spatially mixed consequences of neural activity rather than individual action potentials
([Eggebrecht et al., 2014](https://doi.org/10.1038/nphoton.2014.107)).

Near-infrared penetration alone does not imply cellular resolution. Scalp and skull, extracerebral
blood flow, tissue scattering, motion, source-detector geometry, depth sensitivity, and the
inverse model all constrain what can be recovered.

## Historical SAN proposal

The August 2021 [[gh-a0015z|a0015z]] and [[gh-b0200y|b0200y]] sources proposed that neural activity
has several coupled observables and that many measurements could be fused into a 3D estimate:

```text
activity-linked electrical, optical, mechanical, and hemodynamic changes
-> phase-sensitive and diffuse optical measurements from many positions
-> anatomy-aware forward model
-> constrained inverse reconstruction
-> estimated neural event field
```

The later [[gh-a0115z|a0115z]] notes joined that proposed readout to electrical source
localization, impedance methods, time-series alignment, and ultrasound perturbation. This is an
engineering hypothesis about multimodal tomography. It is not a finding that a consumer camera,
ordinary fNIRS cap, or holographic display can currently read one neuron through the skull.

## Ultrasound is a separate intervention channel

Transcranial focused ultrasound can modulate human cortical activity. In a human S1 experiment,
the reported acoustic focus measured approximately 4.9 mm laterally and 18 mm axially
([Legon et al., 2014](https://doi.org/10.1038/nn.3620)). That supports a noninvasive perturbation
route at a regional scale. It does not establish arbitrary single-neuron stimulation.

Readout and perturbation should therefore be shown as separate, co-registered operations:

```text
optical/electrical measurements -> state estimate
state estimate + anatomy -> declared ultrasound target
ultrasound perturbation -> new measurements and behavioral consequence
```

## Claim ladder

**Established:** action-potential-linked nanometer-scale deformation can be optically measured in
cultured neurons; near-infrared methods can estimate human cortical hemodynamics; focused
ultrasound can modulate human cortical activity.

**Supported interpretation:** electrical, optical, mechanical, metabolic, and hemodynamic
measurements constrain different parts and timescales of one neural process.

**SAN hypothesis:** anatomy-aware fusion of those measurements can improve 3D reconstruction of
distributed neural dynamics and guide closed-loop perturbation.

**Stronger experimental claim:** external read/write of arbitrary single neurons through an
intact adult human head. This is not established and requires direct ground-truth validation.

## Falsifier

The high-resolution SAN proposal is weakened if multimodal fusion does not improve held-out
localization, timing, or causal prediction over the best single modality and simpler
population-level models, or if apparent cellular signals disappear after controlling for scalp
physiology, blood flow, motion, and reconstruction leakage.

## Read next

- [[gh-a0015z|A 2021 Multimodal Optical-Ultrasound Neural Interface Proposal]]
- [[fnirs-brain-imaging|fNIRS Brain Imaging]]
- [[brain-computer-interface|Brain-Computer Interface]]
- [[neuroimaging-next-generation|Next-Generation Neuroimaging]]
- [[neuromodulation|Neuromodulation]]

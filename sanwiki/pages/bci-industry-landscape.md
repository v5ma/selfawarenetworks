---
title: "BCI Industry Landscape: Historical SAN Research Map"
summary: "A source-faithful reconstruction of Micah Blumberg's 2022 BCI map, separating its historical device-and-research inventory from the current SAN measurement, intervention, and closed-loop testing program."
tags: [san, bci, neo-mind-cycle, neural-lace, neurotechnology, source-genealogy]
aliases: [BCI Industry Map, Brain Interface Map]
status: governed-historical-route
---

# BCI Industry Landscape: Historical SAN Research Map

This page preserves Micah Blumberg's **BCI Industry Map** as a historical research map, not as a current market ranking or medical-device recommendation. The source organized instruments, researchers, software, stimulation methods, and XR feedback projects around one developing question:

> Which physical variables can be measured or changed, how can several channels be coordinated, and what closed-loop experiment would show that the resulting interface participates in perception or action?

The current scientific treatment is maintained in [[brain-computer-interface|Brain-Computer Interface]] and [[bci-instrument-atlas|BCI Instrument Atlas: From Neo Mind Cycle to NerveGear]].

## Source and date boundary

The earliest recovered current-path Git version of `map.brain.interface.md` was fixed on **August 3, 2022** ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/c3b807bfd41d6bbd781372b4baed557aeed7f385/map.brain.interface.md)). It describes a research program containing internally dated 2018-2019 work, but that internal date is not the public fixation date of the complete map.

An **August 21, 2022** revision added Micah's theta-burst stimulation note and his proposed relation among tonic theta context, phasic events, synchronization, and memory ([immutable revision](https://github.com/v5ma/selfawarenetworks/blob/6ada31d7eca84f8c4666440cb4c9cb5638f27963/map.brain.interface.md)). That later addition must not be projected into the August 3 version.

The source was a map of questions and candidate technologies. A name in the map establishes historical research attention, not present availability, regulatory status, performance, endorsement, or a completed SAN experiment.

## The historical map

| Source branch | Entries preserved in the 2022 map | Source-faithful interpretation |
|---|---|---|
| Analysis and data | NeuroPype; principal component analysis | Candidate software and dimensional-reduction routes, not biological source proof. |
| Implanted recording or stimulation | Neuralink; NeuroString; ECoG; DBS; Stentrode | Different interfaces with different tissue locations, coverage, risks, and read/write capabilities. |
| External electrical or magnetic intervention | ECT/ECS source label; TMS; theta-burst stimulation; tACS/AVS source label; tDCS | Intervention families, not imaging methods and not automatically BCIs. |
| External electrical and magnetic measurement | EEG; EEG with VR; EEG with MEG | Fast population measurements with modality-specific inverse problems and artifacts. |
| Optical and hemodynamic measurement | fNIRS/HEG; HD-DOT; Openwater; Seenel; Kernel; optical-imaging notes | Candidate optical routes with different depth, timing, physics, and evidence states. |
| Impedance and multimodal measurement | EIT; OpenEIT; EIT with deep learning; EEG with fNIRS | Reconstruction and fusion questions whose outputs depend on forward models, geometry, calibration, and validation. |
| Constrained scanner imaging | fMRI; Jack Gallant research route | Spatially informative but delayed hemodynamic inference, not direct millisecond neural readout. |
| Embodied and XR feedback | Brainduino; Neurable; OpenBCI/Valve; EEG-to-VR combinations | Candidate person-device-environment loops in which machine output returns as new sensory evidence. |

Some labels in the historical map are abbreviated, incomplete, or product-specific. They should be verified against the corresponding interview, paper, device version, or source note before being used as evidence.

## A modern taxonomy

The old map becomes scientifically useful when every item is assigned to a declared operation.

### Recording

A recording system measures a physical quantity related to nervous-system or body activity. Examples include voltage, magnetic field, detected light, blood oxygenation, impedance, movement, gaze, or muscle activity. Those quantities are related to neural state but are not interchangeable pictures of it.

### Inference

A model estimates a declared state or task variable from measurements. Classification, source localization, command decoding, and latent-state reconstruction are different claims. A successful classifier does not prove that its features uniquely identify the biological sources that produced the measurement.

### Intervention

TMS, transcranial electrical stimulation, implanted stimulation, focused ultrasound, sensory stimulation, and VR feedback act through different physical paths. Recording a signal and replaying a waveform does not invert the recording process or recreate the distributed sources.

### Closed-loop adaptation

When a measured feature changes light, sound, a virtual object, stimulation, or another consequence, that result returns to the participant through sensory and bodily pathways. The participant, decoder, tissue interface, strategy, and environment can all change over time. This is the bridge to [[neo-mind-cycle|Neo Mind Cycle]] and its [[neo-mind-cycle-neurofeedback-bci|closed-loop BCI formulation]].

## What the theta-burst note was trying to say

The August 21 source linked a nonhuman-primate intermittent theta-burst stimulation item to a SAN question about tonic oscillatory context and phasic change. The recoverable proposal is not that theta-burst stimulation proves NAPOT, nor that a stimulation protocol is identical to an endogenous tonic theta rhythm.

Intermittent theta-burst stimulation is a patterned TMS protocol. The word `theta` describes the timing structure of delivered bursts; it does not by itself establish a sustained theta-band brain state, memory improvement, or SAN's proposed absorption-and-dissipation mechanism. The cited research item was [Hanlon et al. (2022)](https://doi.org/10.1016/j.brs.2022.04.004). The source also preserved a contemporary review of US regulatory milestones for TMS devices ([Cohen et al., 2022](https://doi.org/10.1016/j.brs.2021.11.010)).

The medically bounded SAN question is:

```text
measured ongoing state
+ declared stimulation timing and dose
-> local and network response
-> memory, perception, or action endpoint
-> returned state and recovery trajectory
```

This can be tested by measuring whether prestimulation state and receiver-relative timing improve prediction of a bounded evoked, behavioral, or reported outcome beyond stimulation dose, anatomy, power, firing, movement, and ordinary state-space baselines.

## The SAN bridge

The historical map contributes four operations to the SAN Encyclopedia:

1. **Multiple projections:** EEG, MEG, fNIRS, EIT, fMRI, optical methods, movement, and body sensors expose different projections of a changing system.
2. **Registered reconstruction:** complementary observations must be aligned through anatomy, sensor geometry, timing, task, body state, and modality-specific forward models.
3. **Controlled perturbation:** a candidate mechanism becomes stronger when it predicts how a declared intervention propagates and changes behavior or report.
4. **Returned consequence:** action, stimulation, audiovisual feedback, and bodily response become new input to the coupled person-device-environment loop.

That sequence now appears in [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]:

```text
registered anatomy + synchronized observations + declared task and body state
-> constrained latent-state estimate
-> controlled perturbation
-> predicted propagation and consequence
-> model correction
```

[[napot-overview|NAPOT]] remains a biological hypothesis about repeated receive-transform-project cycles. External imaging and stimulation are proposed ways to test parts of that hypothesis. They do not show that the brain performs the same inverse algorithm as an instrument, and no one modality is a direct camera for conscious experience.

## Claim ladder

1. **Historical fact:** the 2022 source mapped implanted, external, electrical, magnetic, optical, impedance, hemodynamic, software, and XR routes into one BCI research program.
2. **Established scientific boundary:** these routes measure or perturb different physical variables with different scales, delays, artifacts, safety constraints, and inverse problems.
3. **Supported SAN engineering interpretation:** Neo Mind Cycle, the Neural Lace program, EEG-to-WebVR work, and the BCI map form a continuous investigation of recurrent person-device-environment feedback.
4. **Open SAN hypothesis:** synchronized multimodal measurement and controlled perturbation may estimate enough of a receiver's changing state to predict selected perceptual or action transitions better than unimodal baselines.
5. **Stronger future claim:** a learned, causally necessary, reversible closed loop may function as a temporary external extension of a bounded cognitive operation. No item in the historical map establishes that claim by itself.

## What this map does not establish

- a complete or current inventory of the neurotechnology industry;
- equivalence among EEG, MEG, fNIRS, EIT, fMRI, optical, or implanted signals;
- unrestricted thought reading or arbitrary write-in;
- that every stimulation method is a BCI;
- that a branded device performs as imagined in an early proposal;
- that theta-burst stimulation validates tonic canvas, PWD, NAPOT, or consciousness;
- that an XR visualization is a literal neural rendering.

## Read next

- [[brain-computer-interface|Brain-Computer Interface]]
- [[bci-instrument-atlas|BCI Instrument Atlas: From Neo Mind Cycle to NerveGear]]
- [[3-medical-imaging-technologies-2018|Three Wearable Brain-Imaging Proposals (2018)]]
- [[neo-mind-cycle|Neo Mind Cycle]]
- [[neural-lace-podcast-source-genealogy|Neural Lace Podcast Source Genealogy]]
- [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]
- [[adaptive-multimodal-bci-command-decoding|Adaptive Multimodal BCI Command Decoding]]
- [[napot-overview|NAPOT Overview]]
- [[xmark-theory|Xmark Theory]]
- [[artificial-neurology|Artificial Neurology]]

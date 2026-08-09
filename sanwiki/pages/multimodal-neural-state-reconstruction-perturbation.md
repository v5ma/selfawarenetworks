---
title: "Multimodal Neural-State Reconstruction and Perturbation"
tags: [san, napot, bci, multimodal-imaging, source-localization, inverse-problem, perturbation]
aliases: [Multimodal Neural-State Tomography, Multiple-Source Localization for NAPOT, NAPOT Measurement Stack]
summary: "A source-faithful measurement and perturbation program for testing SAN and NAPOT without treating any instrument as a complete readout of neural state."
status: governed
---

# Multimodal Neural-State Reconstruction and Perturbation

## Governing question

Can complementary measurements of electrical, magnetic, hemodynamic, structural, optical, and
mechanical variables be registered in space and time, then combined with controlled perturbation,
to identify the changing neural state that produces a perception, thought, or action?

This is the instrumentation and inverse-problem side of NAPOT. It is distinct from the claim that
the brain itself performs a tomographic computation.

## The proposal in ordinary language

No available instrument reads a complete neural state. EEG and MEG provide fast population-level
electromagnetic measurements but require source inference. fNIRS and fMRI measure slower
hemodynamic consequences. EIT estimates impedance changes under an applied current. Structural
MRI and diffusion imaging constrain anatomy. Eye tracking, sensory input, movement, and body
signals constrain what the system was sensing and doing. TMS, focused ultrasound, electrical
stimulation, optogenetics, or direct stimulation can provide a controlled input in appropriate
preparations.

The recovered SAN proposal is to treat these as complementary projections of one changing latent
state, not as interchangeable pictures:

```text
registered anatomy + synchronized observations + declared stimulus and behavior
-> constrained latent-state estimate
-> targeted perturbation
-> predicted propagation and returned consequence
-> model correction
```

The closed loop matters. A reconstruction that cannot predict what a controlled intervention will
change is a visualization or decoder, not yet a validated mechanism.

## From reconstruction to intervention comparison

The same logic can compare very different perturbations without pretending that they share a
mechanism. First declare the level and time horizon of interest. Then estimate each intervention's
state transition across synchronized neural, bodily, movement, and report variables:

```text
baseline state + declared perturbation
-> registered multiscale response trajectory
-> predicted consequence
-> recovery or next-state measurement
```

Two interventions may be response-equivalent for one registered outcome while remaining different
in mechanism, duration, off-target effects, safety, and every unmeasured variable. Established
adaptive stimulation, neurofeedback, rhythmic cueing, longitudinal sensing, and perturbational
cell assays supply bounded precedents for pieces of the method. They do not establish a complete
neural-state reconstruction or a universal equivalence relation.

SAN and COT preserve the stronger testable extension: build a versioned intervention-response
atlas whose equivalence claims always name the variables, tolerance, context, and time horizon.
See [[multimodal-biosensor-fusion]].

## Source genealogy

The experimental target predates the 2022 multimodal-tomography formulation. On September 19,
2012, *Neurons are Programs transmitting their shape theory* proposed that learned whole-neuron
topology functions as a program and that an outgoing analog electrical packet carries a compressed
representation of the cell's structure and temporal pattern. In that preserved discussion,
`Cloudy Mayajuana` is Micah Blumberg's alternate account, not a separate theorist. This is an early
morphology-to-output and compressed-re-expression ancestor. It is not an early use of PWD, NAPOT,
or proof that a neuron transmits its complete geometry. See
[[san-claim-genealogy-2011-2022|SAN Claim Genealogy, 2011-2022]].

A May 5, 2017 public Neural Lace dialogue then used broccoli to ask how a learned object-related
pattern might remain recognizable across changing views, how a related neural pattern might be
identified, and how an artificially introduced pattern would interact with the receiver's current
state. A March 25, 2021 recorded discussion reduced that ambition to a bounded question: could
stimulation evoke a tap-like sensation at the wrist without an external tap? These are recognition,
write-in, and state-reconciliation ancestors. They are not early uses of NAPOT, evidence for a
complete thalamic object code, or demonstrations of object-level neural reconstruction. See
[[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial
Perception]].

`a0115z.md` contains the strongest early joined formulation. Its June 8, 2022 Git state already
proposes Neural Oscillatory Tomography for network reconstruction, TMS-EEG as artificial
stimulus-response mapping, Openwater as a proposed less-invasive optical and ultrasound route,
EEG source localization, EIT, structural imaging, time-series registration, sensory-array
correlation, and "multiple-source localization." A June 10 addition explicitly asks for a
multimodal 3D reconstruction. July additions connect the same problem to NeRF, Plenoxels, neural
pixel composition, semantic segmentation, and the Fourier projection-slice analogy.

The Git record separates these additions. It does not make the June, July, and August versions one
simultaneous event, and it does not validate the proposed reconstruction.

`a0121z.md`, first current-path Git-fixed on June 11, 2022, supplies the historical engineering
route through Tim Mullen's multimodal time alignment, EEG source localization, eye tracking,
ECG, pupil dilation, and XR interfaces. It also records an important self-correction: an initially
extraordinary sensor-resolution interpretation was narrowed after Micah inspected the device.
The corrected note supports inexpensive wearable sensing and multimodal interface work, not
single-neuron or single-electron remote resolution.

`a0111z.md` supplies an analysis target rather than another instrument: a pre-action neural state,
vocal output, and returned sensory consequence whose directionality changes across time. That kind
of bounded action-feedback sequence is what the reconstruction stack should be required to
predict.

## Observation and inverse model

Let `x(t)` be a declared latent neural and body state. For modality `m`:

```text
y_m(t) = H_m(x(t), a, g_m, n_m) + epsilon_m(t)
```

where:

- `H_m` is the modality-specific forward model;
- `a` is registered anatomy;
- `g_m` is sensor geometry and calibration;
- `n_m` contains named nuisance variables; and
- `epsilon_m` is residual measurement error.

The reconstruction is not obtained by stacking images. It is a constrained estimate:

```text
x_hat = argmin_x [sum_m L_m(y_m, H_m(x)) + R(x, a, task)]
```

`L_m` must respect each modality's noise, scale, and latency. `R` declares anatomical, dynamical,
and task priors. Different priors can generate different reconstructions from the same data, so
identifiability and sensitivity analyses are mandatory.

For a perturbation `u(t)` and outcome `o(t + tau)`:

```text
o_hat(t + tau) = G(x_hat(t), u(t), anatomy, body_state)
```

The model earns causal support only when preregistered predictions survive held-out trials,
subjects, states, and interventions.

## Claim ladder

### Established background

- Simultaneous EEG-fNIRS acquisition and statistical fusion are feasible, while the modalities
  measure different electrical and hemodynamic variables and have different time scales.
- EEG and MEG source localization are inverse problems constrained by anatomy, sensor geometry,
  noise, and modeling assumptions.
- Fast neural EIT has been demonstrated in bounded invasive animal preparations and simulations;
  this does not establish whole-human-brain, noninvasive cellular reconstruction.
- TMS-EEG can measure state-dependent and network-level responses to controlled perturbation,
  subject to sensory artifacts, source uncertainty, and recurrent-network alternatives.
- Ultrasound-modulated optical tomography with single-shot off-axis holography recovered a
  one-dimensional profile of an absorbing object in vitro through a human-skull specimen. It did
  not image neural activity or a living brain.
- Intracortical microstimulation has evoked localized, graded tactile percepts in a person with a
  spinal cord injury. That is a bounded sensory write-in result, not object-level reconstruction.
- Visual-adaptation and phase-targeted TMS studies show that stimulation effects can depend on the
  receiver's ongoing neural state. They do not supply a universal state decoder.

### SAN synthesis

- Use complementary modalities to constrain one registered dynamical model rather than treating
  each signal as a direct image of neural computation.
- Include the sensed world, eye and body movement, task, and action consequence in the model.
- Use stimulation as system identification: perturb a declared component and predict the spatial,
  temporal, physiological, behavioral, and reported response.
- Validate a local feature or sensation before attempting multimodal object reconstruction; a
  decoder and a write model are different operations.
- Compare the fitted state with the NAPOT receive-transform-project sequence and PWD variables
  without presuming that either is correct.

### Stronger SAN hypothesis

A fused, phase-aware state model will predict perturbation propagation, perceptual transitions,
and action consequences better than matched unimodal, rate-only, power-only, or anatomy-only
models.

### Strongest SAN hypothesis

Repeated, personalized read-perturb-read cycles could eventually identify enough of an
individual's distributed transformation rules to support high-bandwidth neural read/write and
external-cortex systems. Existing evidence does not establish whole-mind reconstruction,
duplication, restoration after death, or transfer of personal identity.

### Bounded command decoding before state reconstruction

A finite decoder can perform a real operation without reconstructing an entire neural state:

```text
declared task
-> task-correlated measurement
-> trained class
-> declared command
-> device consequence
```

The 2017 hybrid quadcopter study used independent four-class fNIRS and EEG-system branches to
produce eight commands. This was complementary command partitioning rather than one feature-fused
eight-class model
([Khan and Hong, 2017](https://doi.org/10.3389/fnbot.2017.00006)).

The command-level result should be stated positively before marking the next capability boundary.
Task-state classification, declared command decoding, structured content reconstruction, induced
percept verification, and conscious-state assessment are progressively different targets. See
[[adaptive-multimodal-bci-command-decoding]].

## Scientific and engineering firewall

- A common timestamp is not proof that two modalities measure the same biological event.
- Correlation or shared components are not source identity.
- Source localization is not direct observation of the source.
- Hemodynamic signals are not millisecond electrical activity.
- Structural connectivity is not effective connectivity.
- EIT, optical tomography, holography, diffusion imaging, and NAPOT use related reconstruction
  language but solve different forward and inverse problems.
- A company roadmap or demonstration is provenance for an engineering influence, not independent
  validation of SAN.
- A successful decoder does not by itself demonstrate consciousness, phenomenology, or personal
  identity.

## Decisive program

1. Choose one bounded target such as a localized tactile percept, visual transition, remembered
   cue, vocal act, or reach.
2. Register anatomy, sensors, stimulus, eye and body movement, and behavior in one coordinate and
   time system.
3. Fit modality-specific forward models and quantify latency, resolution, artifact, and
   uncertainty separately.
4. Compare unimodal models, late fusion, shared-latent-state fusion, and SAN phase-aware models on
   held-out data.
5. Deliver a state-timed perturbation and predict its local, network, behavioral, and reported
   consequences.
6. Repeat under altered state, task, and anatomy-informed priors.
7. Reject any SAN-specific variable that adds no reproducible prediction or causal leverage.

## Primary research routes

- [Su et al., 2023](https://doi.org/10.1038/s41598-023-31609-5): simultaneous EEG-fNIRS
  acquisition and cross-modal fusion during motor execution, observation, and imagery.
- [Aristovich et al., 2014](https://doi.org/10.1088/0967-3334/35/6/1095): fast-neural EIT
  reconstruction with an intracranial planar array in a bounded rat-cortex method study.
- [Momi et al., 2022](https://doi.org/10.1113/JP282393): state-dependent TMS-EEG effects on
  distributed sensorimotor synchronization.
- [Liu et al., 2020](https://doi.org/10.1364/OL.390920): ultrasound-modulated optical tomography
  using off-axis holography to recover an absorbing-object profile in vitro through a human-skull
  specimen.
- [Garcia-Rosales et al., 2022](https://doi.org/10.1038/s41467-022-31230-6): a bounded
  pre-vocal, action, and returned-feedback directionality target in bats.
- [Flesher et al., 2016](https://doi.org/10.1126/scitranslmed.aaf8083): localized and graded tactile
  percepts evoked through intracortical microstimulation in one human participant.
- [Silvanto and Muggleton, 2008](https://doi.org/10.1016/j.neuroimage.2008.02.002): initial-state
  dependence of TMS effects in functionally selective visual populations.

## Candidate paper boundary

This source family supports an unnumbered methods candidate:

> **Multimodal Neural-State Tomography: An Identifiability and Closed-Loop Perturbation Protocol
> for Testing NAPOT**

Its distinct contribution would be the forward-model registry, time-and-coordinate registration,
cross-modal identifiability tests, and perturbation-based failure criteria. It needs a
nonduplication audit against the NAPOT paper, Conscious-State Perturbation Tomography, the BCI
Instrument Atlas, Infogenetics, and machine-consciousness measurement before receiving a paper
number.

## Read next

- [[bci-instrument-atlas|BCI Instrument Atlas and the NerveGear Measurement Problem]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[conscious-state-perturbation-tomography|Conscious-State Perturbation Tomography]]
- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[agency-valuation-action-feedback|Agency, Valuation, Action Selection, and Returned Consequence]]
- [[infogenetics-content-addressed-neural-write-access|Infogenetics and Neural Write Access]]
- [[adaptive-multimodal-bci-command-decoding|Adaptive Multimodal BCI Command Decoding]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[gh-a0115z|a0115z source note]]
- [[gh-a0121z|a0121z source note]]

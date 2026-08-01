---
title: "WebXR and Brain-Computer Interface Integration"
tags: [san, webxr, bci, eeg, neurofeedback, external-cortex, neural-rendering]
aliases: [WebXR BCI Integration, EEG in WebXR, Neurohaxor]
status: governed
---

# WebXR and Brain-Computer Interface Integration

## The problem

A physiological sensor and an immersive scene produce different kinds of data. A useful
brain-computer interface must define how a measured feature changes the scene, how the participant
perceives or acts on that change, and how the returned response updates the next cycle.

## The operation in plain language

```text
declared physiological or behavioral measurement
-> calibrated feature extraction
-> browser transport
-> controlled XR scene change
-> participant perception and action
-> returned measurement and task result
```

WebXR is useful because the scene and feedback can run through an open browser-based spatial
interface. The browser is the delivery and experiment layer; it is not the neural mechanism.

## Historical route

Micah Blumberg's 2018 interview with Brandon Jones at Oculus Connect 5 connects open-web XR
standards with the Neurohaxor project: an effort to bring EEG-derived values into an Oculus Go or
similar browser-based immersive display. The wider 2018 Noisebridge program used OpenBCI-style
hardware, local-server transport, Three.js, A-Frame, and volunteer collaboration to create a
responsive EEG-to-WebVR route.

The strongest established historical claim is a working state-responsive display lineage. Missing
code, complete configurations, contributor records, calibration data, and controlled performance
results limit exact reconstruction of the prototype.

A November 5, 2021 Micah recording connects that implementation history to portable WebXR state,
current-view resource allocation, and a reciprocal external-cortex proposal. The recording remains
private and is represented through bounded paraphrase. Public 2022 Git objects separately
corroborate the EEG-in-VR and external-cortex program.

## Established neighboring operations

- Closed-loop neurofeedback returns a transformed measurement to the participant and studies the
  resulting learning or state change
  ([Sitaram et al., 2017](https://doi.org/10.1038/nrn.2016.164)).
- Brain-machine interfaces can improve through reciprocal decoder and user adaptation
  ([Shenoy and Carmena, 2014](https://doi.org/10.1016/j.neuron.2014.08.038)).
- Gaze-tracked foveated rendering allocates computation according to the current view
  ([Patney et al., 2016](https://doi.org/10.1145/2980179.2980246)).

These results support closed-loop experimentation, adaptive interfaces, and viewpoint-dependent
resource allocation.

## Where the comparison stops

- A responsive EEG-XR scene does not read arbitrary thoughts.
- Scalp EEG does not directly image a complete three-dimensional conscious state.
- A browser runtime is not a cortex.
- A graphics engine and a biological perceptual system can solve related selection problems
  without implementing the same algorithm.
- Shared spatial anchors do not establish shared memory, qualia, personhood, or consciousness.
- The 2018 project predates later mature NAPOT terminology and is an engineering ancestor, not
  experimental validation of NAPOT.

## Preserved SAN extension

SAN treats EEG-in-XR as an engineering ancestor of a reciprocal external-cortex loop:

```text
person changes system
<-> system changes person
```

The stronger hypothesis is that a personalized, multimodal, adaptive, and reversible spatial
interface can extend memory, discrimination, planning, or action when it learns from repeated
person-specific behavior and physiology. It must outperform static-aid and behavior-only controls
before a neural contribution is claimed.

WebXR can also provide a shared task environment for several continuing persons. A temporary group
state can be measured through common objects, coordinated actions, prediction, perturbation, and
returned consequences without assuming that the participants have fused into one conscious
subject.

## Test and governance requirements

- declare each measured variable and its uncertainty;
- separate EEG from eye, muscle, motion, and cardiac artifacts;
- compare veridical, delayed, replayed, decorrelated, and sham feedback;
- test held-out sessions and participants;
- compare static, open-loop, behavior-adaptive, and physiology-adaptive systems;
- preserve local private state, consent, revocation, and data deletion; and
- measure performance, transfer, unaided retention, error correction, and withdrawal effects.

## Read next

- [[eeg-xr-neurofeedback-bci|EEG, XR, Neurofeedback, and BCI]]
- [[perspective-conditioned-rendering-external-cortex-loop|Perspective-Conditioned Rendering and the External-Cortex Loop]]
- [[voluntary-shared-cognitive-environment-retained-personhood|Shared Cognitive Environments and Retained Personhood]]
- [[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]
- [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle and BCI Genealogy]]
- [[brain-computer-interface-neural-readwrite|Brain-Computer Interface Read/Write]]

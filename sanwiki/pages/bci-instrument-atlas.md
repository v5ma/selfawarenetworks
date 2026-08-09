# BCI Instrument Atlas: From Neo Mind Cycle to NerveGear

For the source-faithful program overview and the precise functional-extension test, begin with
[[neo-mind-cycle|Neo Mind Cycle]] and [[neo-mind-cycle-neurofeedback-bci|Neo Mind Cycle to External
Cortex]].

The Self Aware Networks archive contains more than a list of brain-computer interfaces. It records
a development path: hands-on EEG feedback, a public Neural Lace research program, a working
EEG-to-WebVR pipeline, interviews with instrument builders and researchers, and a continuing
question about what a bidirectional NerveGear system would actually have to measure and change.

The central lesson is simple: there is no generic "brain signal." Every instrument exposes a
different projection of living tissue.

## The six questions to ask of every instrument

| Question | Why it matters |
|---|---|
| What physical variable is involved? | Voltage, magnetic field, blood oxygenation, impedance, diffusion, movement, and stimulation are not interchangeable data. |
| At what temporal scale? | A fast electrical transient and a delayed vascular response cannot be aligned without a latency model. |
| At what spatial scale and depth? | A scalp population signal, cortical surface electrode, penetrating array, and whole-brain scanner answer different questions. |
| Is the source directly observed? | EEG, MEG, EIT, fNIRS, fMRI, and tractography all require different reconstruction or inference steps. |
| Is the path read, write, or feedback? | Measuring, perturbing, and closing a loop are separate capabilities. |
| What task validates the interpretation? | A pattern becomes useful only when it predicts a discriminable state, behavior, consequence, or controlled intervention. |

## Modality map

### Electrical and magnetic population signals

**EEG** measures voltage differences at the scalp. It is portable, comparatively inexpensive, and
fast enough to follow millisecond-scale changes, but it mixes activity over distance and faces a
difficult source-localization problem. Movement, muscles, eyes, electrode contact, and the
electrical environment can contaminate the signal.

**MEG** measures magnetic fields associated with neural currents. It preserves fast timing and has
different source sensitivities, but conventional systems are expensive and constrained. Like EEG,
its anatomical interpretation is an inverse problem rather than a direct photograph.

**ECoG, Utah-style arrays, Neuralink-like intracortical systems, Stentrode, and DBS** move closer to
the tissue or add stimulation. They can improve locality or causal access at the price of invasive
procedures, limited coverage, and biological interface risks. These devices must not be described
as one homogeneous class.

### Hemodynamic and optical signals

**fNIRS and HEG** use near-infrared light to estimate changes associated with oxygenated and
deoxygenated hemoglobin. They can be wearable and useful for feedback or mobile experiments, but
the vascular signal is delayed relative to neural electrical events and is affected by superficial
tissue, motion, and systemic physiology.

**HD-DOT** extends dense optical measurement and reconstruction. It belongs in the same broad
optical-hemodynamic family but has its own geometry, hardware, and validation requirements.

**fMRI** provides broad and deep spatial coverage through blood-oxygen-level-dependent contrast,
but it is an indirect, delayed proxy acquired in a constrained scanner. **DTI and tractography**
infer candidate pathway structure from diffusion; they do not directly read live neural content.

OpenWater-style holographic optical claims, laser-speckle or Doppler approaches, and
optical-plus-ultrasound systems are important research routes in Micah's archive. Their methods,
performance, and public claims must be reviewed product by product and paper by paper.

### Impedance, body state, and intervention

**EIT** injects small currents and reconstructs changes in electrical impedance. Jean Rintoul's
OpenEIT work made it a recurring part of Micah's low-cost and open-source imaging program. Its
promise, source localization, and medical comparability remain task- and evidence-dependent.

**EMG, ECG, eye tracking, head pose, and inertial sensing** do not directly image the brain. They
can nevertheless expose motor intention, cardiac and autonomic context, gaze, posture, and action.
For an embodied SAN or NerveGear loop, those variables are not side data: they help distinguish a
neural pattern from the body state and consequence with which it covaries.

**TMS, tDCS/tACS, DBS, ultrasound, and sensory or VR stimulation** intervene rather than merely
observe. Their spatial scale, depth, waveform, mechanism, and safety differ. A closed loop can pair
one measurement route with one intervention route, but that pairing must be explicit.

## Historical implementation ladder

| Date posture | Source | What the source supports |
|---|---|---|
| 2011-2014, in-file retrospective history | [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle family]] | Scalp EEG transformed into changing light and sound in a repeated participant feedback practice. |
| 2017 public episodes | [[neural-lace-podcast-source-genealogy|Neural Lace Podcast family]] | Bidirectional BCI problem, NerveGear, VR as a sensory write path, EEG-XR modes, and multisensory read/write goals. |
| 2018-03-04 public article | [[3-medical-imaging-technologies-2018|Three Wearable Brain-Imaging Proposals]] | Openwater, Furaxa, and OpenEIT survey plus a proposal to integrate medical sensing into XR headsets; exploratory architecture, not validated thought decoding. |
| April 2018, in-file origin claim | [[gh-a0636z|a0636z]] | NeurotechSF/Noisebridge workshop program for BCI + XR + deep learning; hardware adaptation and open-source plugin goals. |
| July and October 2018, linked event/video claims | [[gh-a0546z|a0546z]], [[gh-nlps2e1|NLP S2E1]] | Voltages from skin/EEG were piped through a websocket into WebVR and used to move or visualize objects. |
| 2018-08-02 public episode | [[neural-lace-podcast-s2e1-jean-rintoul-2018|Jean Rintoul / OpenEIT]] | EEG, EMG, ECG, eye tracking, EIT, modality comparison, open tooling, and the Neurohaxor program. |
| 2019-05-11 public episode | [[fnirs-neural-lace-podcast-s2e4-2019|Jonathan Toomim / fNIRS]] | fNIRS/HEG biofeedback, hemodynamic timing, EEG comparison, and multimodal fusion questions. |
| 2020-05-12 public episode | [[neural-lace-podcast-s2e3-kyle-mathewson-2020|Kyle Mathewson]] | Mobile optical imaging, brain-body sensing, source localization, sensor fusion, and retrospective detail about the Noisebridge implementation. |

The working loop in these records was not full thought decoding. It was:

> measured voltage or body signal -> software/time-series transform -> WebVR or sensory output ->
> participant perception and action -> next measurement

That narrower claim is both more defensible and more useful. It explains how the later NerveGear
problem emerged from actual engineering work.

### Volumetric rendering becomes a BCI design problem

[[gh-a0374z|a0374z]] points to Micah's public May 2017 Jules Urbach episode. It links light-field
capture, volumetric video, point-cloud streaming, and interactive rendering with the question of
delivering rendered content through a future Neural Lace. [[gh-a0379z|a0379z]] adds HypeVR, PSVR,
tractography, DTI, computation, and metabolic cost as separate design constraints.

The transfer is architectural rather than biological proof: partial measurements are reconstructed
into an observer-relevant view, then tested against held-out views and actions. A neural version
needs its own measurement model, individual calibration, uncertainty, write channel, and behavioral
verification.

### A measurement is not its visualization

[[gh-a0393z|a0393z]], internally dated April 5, 2014, distinguishes an EEG time-series graph from a
3D visualization that interprets it. Every SAN instrument claim should preserve the full ladder:

```text
sensor output -> calibrated feature -> inverse model or visualization
-> biological interpretation -> held-out test
```

EEG measures scalp voltage differences. fMRI primarily measures hemodynamic signals related to
neural activity. The visualization must state its assumptions, resolution, uncertainty, and
validation target.

## Taxonomy versus use

`map.brain.interface.md` is a compact taxonomy covering implants, external stimulation, EIT, EEG,
EEG+VR, fNIRS, MEG, and fMRI, with named projects and researchers. It establishes research scope.
It does not establish that Micah operated every listed system.

`a0636z.md` is a workshop and project-origin document. It establishes goals and community context;
not every goal in it was completed. `a0546z.md` and the public podcast sources provide the strongest
bounded account of completed EEG-to-WebVR work.

`b0174y.md` sketches a future narrative module around an OpenEIT presentation and Micah's
disagreement with Morgan Hough about localization, frequency information, and multiscale
functional isomorphism. It is an editorial and intellectual-history donor, not an independent
instrument validation.

`b0200y.md` and `b0311ySci.md` preserve broader spoken explorations of instrument history,
multimodal imaging, stimulation, and possible neural write paths. They also contain transcription
errors, uncertain speaker boundaries, AI summaries, and technical claims that need correction.
They remain in the golden corpus as review-routed material, not as medical authority.

## Two preserved primary recordings

| Recording | Duration | Source status |
|---|---:|---|
| `Morgan Hough at Red Victorian.WAV` | 70:52.9 | Primary WAV in private source custody; transcript, event date, and speakers still need verification. SHA-256 `095DD374E047489D7942BF60ADC0E937D6254E533EC65EA99C2DFE3B0CB8B81D`. |
| `Micah gives talk at Internet Archive.WAV` | 42:39.7 | Primary WAV in private source custody; transcript and exact event date still need verification. SHA-256 `DD99C0BD3DE0347F538A14528D8E8959D014903842B61BC785FCFD8E927DAE09`. |

Both files were recorded on a Zoom H5 whose embedded date reads `2014-01-01`. Their private custody
context and user history point to later events, so the recorder date is treated as unset and is not
used as chronology evidence.

## Matching the world, body, behavior, and brain

[[gh-a0371z|a0371z]] preserves a joined 2019 program connecting the Neural Lace fNIRS discussion,
EEG-to-WebVR, EIT and proposed optical routes, PointNet, 3D Cross-Hair CNNs, Or Litany's point-cloud
work, and behavioral segmentation. The core operation is to place external scenes, body state,
behavior, and neural measurements in compatible coordinates and time windows:

```text
registered world and body model
+ synchronized neural and physiological measurements
+ segmented behavior and task events
-> held-out prediction
-> controlled intervention
-> measured consequence
```

This engineering bridge helps explain how the earlier BCI program led toward biological 3D Neural
Rendering and NAPOT. Each instrument still needs its own forward model, timing, resolution,
uncertainty, artifact, and safety analysis.

## Comparing intervention signatures

The atlas can register not only observations but also what happens after a declared perturbation.
Electrical stimulation, rhythmic sensory cueing, neurofeedback, medication, focused ultrasound,
or another intervention can be compared through synchronized neural, body, movement, and report
trajectories. The useful question is not whether the interventions have the same label or one
matching endpoint. It is whether they produce a sufficiently similar state transition for named
variables, context, tolerance, and time horizon.

Adaptive stimulation, neurofeedback, longitudinal digital biomarkers, N-of-1 methods, and
high-dimensional perturbation assays provide established footholds. They stop short of complete
brain-state reconstruction, universal treatment equivalence, or automatic consciousness
measurement. SAN preserves the stronger testable extension as a versioned intervention-response
atlas linked to COT and conscious-state perturbation experiments. See
[[multimodal-biosensor-fusion]].

## External versus intrinsic tomography

`a0069z.md` distinguishes external correlative array tomography, which reconstructs prepared
tissue structure, from NAPOT's proposed intrinsic receive-transform-project operation in living
neural arrays. The analogy is useful, but the methods are not interchangeable. Its broad imaging
list is an instrument program: every modality keeps its own forward model, latency, coordinate
system, uncertainty, artifacts, and safety boundary.

- [Oberti, Kirschmann, and Hahnloser (2011)](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2011.00050/full)

## What NerveGear would still require

`a0351z.md` adds a laser-Doppler plus digital-holography research route. The cited 2021 paper
validated full-field amplitude and phase measurements of structural surface vibration against a
laser Doppler reference. For brain use, optical penetration, skull and tissue motion, neural
specificity, hemodynamic latency, safety, and in-vivo validation remain explicit instrument
requirements. The operation is a useful donor; the cited experiment is not itself brain imaging.

A bidirectional artificial-perception system would need at least:

1. a defined target state or percept rather than a generic claim to "read thought";
2. synchronized neural, body, stimulus, and behavior measurements;
3. registration across anatomy, sensor geometry, and external-world coordinates;
4. explicit latency and uncertainty models for every modality;
5. a learned representation that generalizes across trials without erasing individual variation;
6. a write channel with bounded dose, location, timing, and safety;
7. a closed-loop test showing a predicted perceptual or behavioral consequence; and
8. controls that distinguish neural causation from motion, expectation, vascular, or device artifacts.

This is where the atlas meets SAN. SAN proposes that useful content is distributed across changing
spatiotemporal relationships. The atlas specifies what would have to be measured to test that
proposal and what current devices leave unresolved.

## From multiple instruments to one usable command relationship

Using several instruments creates several distinct engineering operations:

```text
acquisition
-> clock and coordinate registration
-> optional feature or decision fusion
-> bounded command classification
-> device action and error
-> longitudinal user-decoder adaptation
```

The operations should not be compressed into the word `hybrid`. Khan and Hong's 2017
eight-command quadcopter system independently processed a four-class fNIRS branch and a
four-class EEG-system eye-action branch. It used complementary command channels, not one
feature-fused eight-class model
([Khan and Hong, 2017](https://doi.org/10.3389/fnbot.2017.00006)).

This distinction protects the result. The system genuinely decoded a closed, declared command
vocabulary. It does not need to be described as arbitrary thought reading to matter. The next
NerveGear question is whether modality-specific models, behavior, device consequence, and
longitudinal recalibration can preserve that command relationship while the user learns.

See [[adaptive-multimodal-bci-command-decoding]].

## Book 2 route

Use the historical ladder and six-question framework in the main narrative. Move detailed device
tables, independent modality references, product-version claims, and safety material into the
chapter evidence section and Evidence Atlas. The chapter's purpose is to teach the reader how to
reason about measurement before SAN asks them to reason about neural rendering.

## NerveGear requirements and fast optical readout

[[gh-a0534z|a0534z]] uses science fiction to identify full-dive BCI requirements while leaving its
fNIRS, holography, laser-Doppler, and ultrasound combination prospective. [[gh-a0559z|a0559z]] asks
whether fast optical and mechanical correlates of firing could reduce dependence on nearby
electrodes. Those correlates are measurable in bounded preparations; noninvasive scalp recovery of
individual human spikes remains unresolved.

## Early field-source and wearable-MEG boundary

[[gh-a0562z|a0562z]] and [[gh-a0578z|a0578z]] strengthen the reason this atlas must remain
multimodal. Scalp EEG measures voltage differences arising from spatially summed, geometry-
dependent current sources; MEG measures magnetic fields with a different source geometry and
inverse problem; wearable OPM-MEG changes sensor proximity and movement tolerance. None directly
returns a cell-by-cell inventory of a thought, emotion, or conscious scene.

The constructive conclusion is an instrument program: combine modalities, perturbations,
individual calibration, uncertainty models, and returned behavior instead of asking one sensor to
be the whole decoder.
## Read next

- [[early-a0531-a0561-obscure-argument-map|Early a0531-a0561 Obscure Argument Map]]
- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron: Signal, Correlate, or Channel?]]
- [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle and the BCI Bridge]]
- [[early-a0333-a0351-obscure-argument-map|Early a0333-a0351 Obscure Argument Map]]
- [[early-a0352-a0372-obscure-argument-map|Early a0352-a0372 Obscure Argument Map]]
- [[early-a0374-a0396-obscure-argument-map|Early a0374-a0396 Obscure Argument Map]]
- [[neural-lace-podcast-source-genealogy|Neural Lace Podcast Source Genealogy]]
- [[brain-interface-bci-map|Brain.Interface legacy taxonomy]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli and Artificial Perception]]
- [[perceptual-screen-neural-rendering|Perceptual Screen and Neural Rendering]]
- [[infogenetics-content-addressed-neural-write-access|Infogenetics: Content-Addressed Neural Write Access]]
- [[adaptive-multimodal-bci-command-decoding|Adaptive Multimodal BCI Command Decoding]]

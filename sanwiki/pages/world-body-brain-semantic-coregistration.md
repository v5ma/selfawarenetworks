# World-Body-Brain Co-Registration: From 3D Scene Models to Neural Read/Write

## Governing question

Can a BCI register what is in the world, what the eyes and body are doing, and what the nervous
system is doing on compatible time and coordinate bases, so that a model can test which changing
neural patterns correspond to a declared object, property, action, or returned consequence?

## The idea in ordinary language

A brain signal is difficult to interpret when the system does not know what the participant could
see, where they looked, how they moved, or what happened next. A camera or depth sensor has the
opposite limitation: it can describe the visible scene without directly measuring the
participant's neural state.

The recovered SAN development path joins those incomplete views:

```text
world model: objects, surfaces, locations, changes, and uncertainty
body model: gaze, head pose, posture, movement, physiology, and action
brain model: modality-specific neural observations and their uncertainty
task model: stimulus, instruction, report, outcome, and returned sensory consequence

                synchronized and registered
                              |
                              v
        testable world-body-brain transition model
```

Co-registration does not mean that a point in a camera image is identical to one neuron or that a
machine-vision label is already present in the brain. It means that every observation is attached
to a declared time, coordinate frame, physical variable, and uncertainty so competing neural
models can be tested against the same event.

## Source genealogy

The public 2017 Neural Lace compilation already proposes that an artificial system study the
person and the environment together, including heart activity and eye movement, then map channels
through the nervous system. The current repository copy is `a0210z.md`; the public Medium page is
dated October 10, 2017. This is an early multimodal BCI program, not evidence that thoughts or
sensory qualities were decoded.

`a0401z.md`, internally dated August 23, 2018 and first Git-fixed on June 8, 2022, supplies the
earliest currently governed compact statement of the joined co-registration idea. It proposes
multimodal brain imaging with deep learning, synchronized with a sensor-built light-field model of
the participant's surroundings, so semantic scene structure can be correlated with medical-imaging
signals. The internal date establishes the note's claimed chronology; implementation, public
custody in 2018, and neural decoding remain separate questions.

Micah's public March 7, 2021 article preserved in `a0214z.md` supplies a broader engineering bridge.
It joins 3D semantic segmentation, partial-shape completion, volumetric capture, scene and body
tracking, XR, EEG and other biosensors, medical-imaging candidates, and privacy governance. The
article explicitly connects Or Litany's 3D-mesh and point-cloud presentation with shape completion
and then asks how body, environment, and BCI measurements might converge. Guest quotations and
company capability statements remain attributed to their speakers and require independent
verification.

The September 17, 2021 `b0191y` recording adds the biological problem that the instrument program
must test. It joins balance and self-location with spatially distributed and temporally ordered
neural activity, asking how a changing body remains situated within a changing world model. That
source does not establish an oscillatory solution. It motivates registering visual, vestibular,
somatic, neural-timing, memory, and action variables so the stronger SAN coordination hypothesis
can be compared with rate-, power-, anatomy-, and connectivity-based alternatives.

The 2022 SAN notes then move from an instrument program toward a biological and computational
mechanism. `a0199z.md` proposes that successive arrays create differently situated
representations whose convergence can support reconstruction and error correction. `a0213z.md`
links simultaneous sensory and motor evidence, dendritic integration, and learned structural
change. `a0115z.md` develops the later multiple-source-localization and multimodal neural-state
reconstruction proposal. Together they form a staged genealogy:

```text
2017  person + environment + body signals + nervous-system channels
2018  multimodal medical imaging + light-field world model + semantic correlation
2021  3D scene/body modeling + semantic segmentation + XR + multimodal sensors
2021  self-location + balance + spatially distributed and temporally ordered neural activity
2022  array transformations + multisensory/motor integration + neural-state reconstruction
later NAPOT testing route: receive -> transform -> project -> action -> returned consequence
```

This genealogy establishes development and priority evidence for the joined research direction.
It does not show that computer-vision methods are biological mechanisms or that NAPOT is true.

## Foveated networking as a world-model donor

`a0107z.md` proposes transmitting sparse behavior updates according to gaze, head direction,
proximity, and need, then reconstructing the current scene locally. Its transferable operation is
selective registration and reconstruction. A SAN experiment must still align scene, body, neural
measurement, report, action, and returned consequence on one clock.

A separate November 5, 2021 recording joins the same current-view operation to the 2018 EEG-in-XR
lineage and an external-cortex loop. Its contribution is reciprocal: select the current world and
task state, present or reconstruct what is useful, measure the user's returned behavior or
physiology, and update the next view. This owner-held source is represented by bounded paraphrase;
public 2022 Git objects corroborate the EEG-in-VR and external-cortex program but are not treated as
the recording itself. See [[perspective-conditioned-rendering-external-cortex-loop]].

## Four registered layers

### World layer

Record the stimulus and environment using the sensors appropriate to the experiment. The model may
include visible surfaces, object identity hypotheses, depth, illumination, sound, contact, and
changes caused by action. Every label remains an estimate with a confidence and failure mode.

### Body layer

Register eye position, head pose, limb position, movement, contact, autonomic measurements, and
motor output. These variables are not nuisance by default: they help determine what evidence
reached the participant and what consequences the participant produced.

### Brain layer

Keep EEG, MEG, fNIRS, fMRI, ECoG, intracortical, EIT, ultrasound, or stimulation data in their own
measurement models. A common timestamp does not make their signals equivalent, and no modality is
a direct photograph of conscious content.

### Task and consequence layer

Record the instruction, target property, report, behavioral choice, perturbation, and returned
sensory consequence. This layer prevents an attractive reconstruction from being mistaken for a
mechanism when it does not predict perception or action.

## Minimal registration model

For measurement family `m`, let:

```text
y_m(t_m) = H_m(x(t), geometry_m, calibration_m, nuisance_m) + epsilon_m
```

Map each sensor clock to an experiment clock `tau` and each spatial observation to a declared
world, body, or anatomy frame:

```text
tau           = T_m(t_m)
q_common(tau) = R_m(q_m(t_m), pose(tau), anatomy, calibration_m)
```

`T_m` and `R_m` are calibrated transformations with uncertainty, not assumptions of source
identity. A candidate latent state can then be estimated from the registered observations:

```text
x_hat = argmin_x [sum_m L_m(y_m, H_m(x)) + R(x, anatomy, task, world, body)]
```

The model is useful only if it predicts held-out transitions or intervention effects better than
unregistered, unimodal, and simpler recurrent baselines.

## Claim ladder

### Established engineering and neuroscience

- Semantic scene completion and deformable shape completion can infer bounded missing geometry or
  labels from partial machine observations under a trained model.
- Synchronized EEG, eye tracking, body tracking, task events, and peripheral physiology can be
  collected and analyzed together.
- Visual and sensorimotor populations use mixed, task-dependent reference frames and recurrent
  transformations.
- Multimodal neural measurements have different forward models, latencies, spatial scales, and
  inverse problems.

### SAN synthesis

- External scene and body models can constrain interpretation of neural data by specifying what
  changed, where the participant looked, what the body did, and what consequence returned.
- Successive neural populations may transform partial evidence under different reference states
  rather than pass one unchanged internal image.
- A NAPOT experiment should test registered receive-transform-project-action loops instead of
  searching for one static conscious location.

### Stronger SAN hypothesis

A registered object- and pose-resolved model using neural timing or phase relations will predict
perceptual transitions and actions better than matched models using only stimulus labels, average
power, firing rate, anatomy, or unregistered sensor fusion.

### Long-range read/write hypothesis

Repeated personalized observation, perturbation, and returned-consequence cycles may identify
which distributed transformations are sufficient to recreate a bounded sensory property or alter
a selected action. Existing evidence does not establish arbitrary thought reading, complete
experience upload, full NerveGear, or transfer of personal identity.

## Scientific firewall

- A camera view, point cloud, mesh, semantic label, neural population, and conscious content are
  different objects.
- Shape completion is model-dependent inference, not recovery of unknowable ground truth.
- Machine 3D segmentation does not prove that the brain uses voxels, PointNet, a NeRF, or a named
  computer-vision architecture.
- Sensor fusion does not turn EEG, hemodynamics, eye movement, or physiology into direct measures
  of emotion, intention, diagnosis, or consciousness.
- LiDAR/RGB fusion, volumetric capture, neural rendering in graphics, Fourier slices, and NAPOT are
  useful engineering comparisons only after their distinct forward models are stated.
- Product roadmaps and promotional resolution claims record influences; they do not validate SAN.
- The 2018 compact proposal records the joined design before it records a working co-registration
  system; a light-field scene label and a medical-imaging feature remain different inferred objects.
- Co-registration can improve identifiability without solving the neural inverse problem.

## Decisive experiment

1. Place a participant in a controlled XR scene containing manipulable objects, surfaces, and
   action affordances.
2. Register scene geometry, semantic variables, gaze, head and hand pose, sensory events, neural
   measurements, behavior, and report to one experiment clock.
3. Vary object identity, one sensory property, pose, occlusion, expected consequence, and required
   action independently where feasible.
4. Compare unregistered, world-only, body-only, neural-only, ordinary multimodal, and SAN
   phase-aware transition models on held-out scenes and participants.
5. Perturb one sensory feature, recurrent route, or neural state at a preregistered time and
   predict the later report, neural propagation, action, and returned feedback.
6. Reject the SAN-specific extension if registration or phase terms add no reproducible
   predictive or causal value beyond simpler models.

## Paper disposition

This source family supports an unnumbered methods candidate:

> **Co-Registering World, Body, and Brain: A Closed-Loop Semantic Protocol for Testing Neural
> Rendering**

Its distinct contribution would be a coordinate-and-time registration contract, object-level
intervention design, and explicit tests connecting external semantic variables to changing neural
and behavioral states. A paper number requires nonduplication against NAPOT, the BCI Instrument
Atlas, Multimodal Neural-State Reconstruction, Conscious-State Perturbation Tomography, and the
machine-consciousness measurement paper.

## Primary research routes

- Song et al. (2017), [Semantic Scene Completion From a Single Depth
  Image](https://openaccess.thecvf.com/content_cvpr_2017/html/Song_Semantic_Scene_Completion_CVPR_2017_paper.html).
- Litany et al. (2018), [Deformable Shape Completion With Graph Convolutional
  Autoencoders](https://openaccess.thecvf.com/content_cvpr_2018/html/Litany_Deformable_Shape_Completion_CVPR_2018_paper.html).
- Yang et al. (2021), [Continuous Geodesic Convolutions for Learning on 3D
  Shapes](https://openaccess.thecvf.com/content/WACV2021/html/Yang_Continuous_Geodesic_Convolutions_for_Learning_on_3D_Shapes_WACV_2021_paper.html).
- Kastrati et al. (2021), [EEGEyeNet: simultaneous EEG and eye
  tracking](https://openreview.net/forum?id=Nc2uduhU9qa).
- Chang and Snyder (2010), [Mixed spatial reference frames in parietal
  cortex](https://doi.org/10.1073/pnas.0913209107).
- Su et al. (2023), [Simultaneous EEG-fNIRS acquisition and
  fusion](https://doi.org/10.1038/s41598-023-31609-5).

## Read next

- [[3d-neural-network-brain|The Brain as a Three-Dimensional Neural Network]]
- [[3d-semantic-segmentation|3D Semantic Segmentation]]
- [[3d-cross-hair-cnn|3D Cross-Hair CNN]]
- [[body-in-world-geometry-spatiotemporal-sequence|Body-In-World Geometry And Spatiotemporal Sequence]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [[multimodal-neuroaffective-xr-closed-loop|Multimodal Neuroaffective State Estimation and Closed-Loop XR]]
- [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]
- [[neo-mind-cycle-neurofeedback-bci|Neo Mind Cycle and the BCI Bridge]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[gh-a0210z|2017 Neural Lace source copy]]
- [[gh-a0401z|2018 multimodal imaging and light-field semantic-correlation note]]
- [[gh-a0214z|2021 WebAR, 3D, sensor, and BCI convergence article]]
- [[early-a0198-a0215-obscure-argument-map|Early a0198-a0215 Obscure Argument Map]]

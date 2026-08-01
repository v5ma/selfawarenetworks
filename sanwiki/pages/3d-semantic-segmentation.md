# 3D Semantic Segmentation

> **Scientific boundary:** "3D semantic segmentation" is an engineering analogy for how a nervous system may distinguish surfaces, objects, agents, backgrounds, properties, and action-relevant relations. The brain does not receive a raw point cloud, and established neuroscience does not show a biological NeRF, PointNet, or single coincidence neuron that binds an entire scene.

> **Image status:** The earlier plate is preserved outside the website tree in the failed-medical-review archive. It is not publication-ready and is not displayed on this page. Its useful computational idea and its anatomical errors are documented below so a future replacement can preserve the source without repeating the error.

The useful SAN question is not whether cortex runs a named computer-vision algorithm. It is how
distributed neural systems decide which changing features belong together, what those groupings
mean, where they are relative to the body, and what the organism can do next.

## The operation before the analogy

In machine vision, **object segmentation** groups measurements that belong to an object, while
**semantic segmentation** also assigns a class or property label. The historical SAN sources use
that distinction to separate several biological problems:

1. register local features, borders, depth cues, motion, and contact;
2. group some features into a surface, object, body part, agent, or background;
3. relate the group to learned properties, words, memories, and expected behavior;
4. maintain location, orientation, scale, and body-relative possibilities for action;
5. revise the grouping when movement or new evidence changes the scene;
6. use the revised state for recognition, prediction, imagination, communication, or movement.

The phrase "3D semantic segmentation" names this joined problem. It does not assert that the brain
stores a voxel mask or that one cell contains a complete object label.

## What biological vision starts with

Retinal output is already transformed neural activity, not a camera frame or a cloud of
three-dimensional points. Depth and scene organization are constrained by several sources:

- binocular disparity;
- motion parallax and optic flow;
- occlusion and border ownership;
- shading, texture, perspective, and learned regularities;
- eye position and oculomotor signals;
- head and body movement;
- vestibular and proprioceptive state;
- memory, task, and attention.

No individual cue supplies a complete metric reconstruction. Different cues can agree, compete,
or become more useful under different viewing conditions.

## Segmentation is distributed and recurrent

Early visual neurons are selective for local properties, but local responses are altered by
context beyond a classical receptive field. Border-ownership responses in V2 and V4 show that a
locally identical edge can be treated differently depending on which side belongs to a figure.
Feedback perturbation studies further show that higher visual areas can alter figure-background
discrimination in earlier areas. These findings support recurrent contextual organization, not a
single scene-binding cell.

Object identity is also a population problem. Inferotemporal neurons can be selective for
particular object-space axes, while populations collectively support richer object
representations. A selective cell can be informative and causally important without being the
complete object, the complete scene, or the observer.

## Dorsal and ventral pathways

The dorsal and ventral visual pathways are useful organizing distinctions:

- ventral occipitotemporal systems make major contributions to object form, identity, and learned
  visual properties;
- dorsal occipitoparietal systems make major contributions to spatial relations, attention, and
  visually guided action.

They are not sealed modules. Neuropsychological, electrophysiological, perturbation, and imaging
studies show weighted specializations together with cross-stream interaction and feedback.
"What" and "where/how" are therefore shorthand, not two independent processors whose outputs meet
at one binding cell.

## Recovered SAN source genealogy

`a0615z.md`, publicly Git-fixed on June 8, 2022, retrospectively identifies a 2019 conceptual turn:
3D object and semantic segmentation supplied a computational analogy for grouping points, edges,
colors, surfaces, and other features, then associating the resulting object with learned
properties, words, and concepts. The durable operation is **group -> classify -> relate**, not a
claim that biological vision begins with a point cloud.

`a0049z.md`, Git-fixed on June 10, 2022, extends the proposal across scales. Local feature
detections, learned coincidence relations, multimodal properties, and relations among objects are
repeatedly joined and revised. Its broader coherence/decoherence language is a SAN hypothesis about
recruitment and separation; ordinary coincidence detection alone does not prove that mechanism.

`a0238z.md`, Git-fixed on July 11, 2022, makes the population-level phase proposal explicit:
object segmentation plus classification is hypothesized to emerge through changing relations among
many neural signals. The source itself says one neuron is insufficient. It proposes that
oscillating population output contributes to a three-dimensional working state. This is not
evidence that one phase value encodes an object mask.

The dorsal/ventral comparison appears explicitly in `a0018z.md` by August 19, 2022. It compares
dorsal spatial organization to neural rendering and ventral object processing to semantic
segmentation. The source even marks part of the NeRF wording as humorous. The medically defensible
recovery is a **functional decomposition with interacting pathways**, not literal software modules
in parietal and temporal cortex.

The August 2022 Whitepaper joins these elements to NAPOT: successive arrays receive partial
patterns, transform them, and re-express consequential updates. It also asks whether a segmented
working model can support interpolation, generation, prediction, and action. Later SAN sources add
the proposal that spatial relations can remain addressable without a fixed voxel lattice; that
later wording must not be backdated into 2022.

## Learned coincidence without a binding neuron

Coincidence detection is established at several cellular and synaptic scales. Dendrites can be
sensitive to the timing of excitatory input and backpropagating action potentials, and individual
dendritic branches can discriminate temporal input sequences. Active dendritic events can also
influence perceptual detection in a specific mouse somatosensory task.

Those findings support local nonlinear integration. They do not show that one generic cortical
column or neuron binds all features of an object. A source-faithful SAN model instead distributes
the operation:

```text
local feature evidence
    -> receiver-specific dendritic and cellular integration
    -> local population grouping and competition
    -> recurrent interareal revision
    -> distributed object, body, and action state
```

The stronger SAN proposal is that learned timing and phase relations help determine which partial
groups reinforce, remain separate, or are re-routed. That claim requires a declared sender,
receiver, reference state, competing rate-based model, and causal perturbation.

## SAN/NAPOT interpretation

SAN can use 3D semantic segmentation as a bounded analogy for a distributed operation:

1. many populations register partial, differently situated constraints;
2. local coincidence and recurrent interactions alter grouping, borders, surfaces, and expected
   consequences;
3. dorsal- and ventral-weighted computations exchange spatial, identity, and action information;
4. a body-centered working model becomes usable for recognition and action;
5. selected effects are re-expressed to memory, language, affect, and motor systems;
6. movement changes the evidence, and the model is updated again.

The recovered June 2022 Cascade sources add successive transformation: a downstream population
does not receive an unchanged internal picture. It receives a partial pattern altered by upstream
state, eye and body reference, learned connectivity, and recurrence. See
[[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]].

`a0035z.md`, fixed in June 2022, uses lidar/radar fusion as an engineering donor. Different sensors
produce differently structured evidence that must be related to one changing world. The biological
question is whether visual, vestibular, proprioceptive, auditory, interoceptive, and affective
signals can be aligned to shared body-world causes while preserving each modality's uncertainty
and coordinate frame. Machine sensor fusion is not biological evidence, and emotion is not
literally a point cloud.

The broader 2017-to-2022 engineering development that connects external scene models, body and
gaze tracking, neural measurements, and a NAPOT experiment is governed in
[[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]. In that design,
machine segmentation constrains an experiment; it does not import machine labels into biology.
The bounded 2018 source map is
[[gh-a0401z|A 2018 Proposal for World-Body-Brain Semantic Co-Registration]].

## Scale map

- **Micro:** receptive fields, dendritic compartments, synaptic integration, adaptation, and
  selective cellular responses.
- **Meso:** recurrent grouping, border ownership, competition, and interaction across local and
  interareal populations.
- **Macro:** visual, spatial, memory, language, affective, vestibular, proprioceptive, and action
  systems jointly constrain a revisable body-world model.

Calling the macro operation tomographic does not make every micro integration event a tomography.

## Tonic canvas and phasic ink

SAN proposes **tonic canvas** as the receiver's relatively maintained comparison conditions:
ongoing population state, expectation, gain, adaptation, and recent history. **Phasic ink** names a
consequential departure that changes a receiver or route. These are proposed operational roles,
not merely decorative metaphors.

For segmentation, the testable question is whether receiver-relative timing or phase improves the
prediction of grouping, border assignment, identity, or action beyond firing rate, power,
waveform, movement, arousal, and recurrent state alone. No universal gamma carrier or literal
display is required.

## Distributed observer-action

No inner viewer receives the completed scene. Participating populations are changed by partial
evidence, change other populations, and contribute to memory, report, autonomic regulation, and
action. The distributed network-and-body process that builds, tests, and acts from the changing
model is the observer-action process.

## Discriminating tests

1. **Geometry versus identity:** Independently vary object identity, pose, depth, and action demand.
   Test whether spatial and identity variables remain partly dissociable while recurrent exchange
   improves held-out prediction.
2. **Feedback-dependent segmentation:** Perturb a named feedback path after the earliest visual
   response and test for a predicted late change in border ownership, figure-ground assignment,
   recognition, or visually guided action.
3. **Local coincidence:** Manipulate a specified dendritic or local-circuit integration event and
   test whether it changes a declared feature grouping without claiming loss of the entire scene.
4. **PWD-specific value:** Compare a rate-only recurrent model with a preregistered
   receiver-relative timing model. The stronger SAN claim requires predictive value beyond rate,
   power, waveform, movement, arousal, and common input, plus a matched timing perturbation.
5. **Cross-modal object state:** Present conflicting or complementary visual, tactile,
   proprioceptive, and auditory evidence. Test whether the model identifies which sender changes
   which receiver, in which coordinate frame, and with what behavioral consequence.
6. **Generation and action:** Test whether the segmented population state predicts a specific
   imagined continuation or action, then whether movement and returned sensation revise the next
   state as predicted.

## From the historical plate to a bounded visual model

The historical plate attempted to preserve four useful ideas:

1. geometric organization and semantic identity are related but different;
2. dorsal- and ventral-weighted computations contribute different information;
3. learned coincidence helps associate features and properties;
4. the result is a prediction- and action-ready scene model.

The earlier plate is not suitable for publication because it began with a raw 3D point cloud,
assigned 3D rendering to the dorsal stream and semantic labels to the ventral stream as literal
modules, routed both outputs to one generic neuron, and labeled that neuron "phase-aligned binding."
A bounded visual model should instead begin with retinal and body-relative evidence, show
interacting recurrent populations, locate coincidence at declared cellular and circuit scales, and
end in a distributed, revisable body-world/action state.

## Primary evidence anchors

- [Zhou, Friedman, and von der Heydt (2000), border-ownership coding in macaque visual cortex](https://doi.org/10.1523/JNEUROSCI.20-17-06594.2000)
- [Zipser, Lamme, and Schiller (1996), contextual modulation in macaque V1](https://doi.org/10.1523/JNEUROSCI.16-22-07376.1996)
- [Hupe et al. (1998), cortical feedback and figure-ground discrimination](https://doi.org/10.1038/29537)
- [Jeurissen et al. (2024), border-ownership tuning and V4-to-V1 feedback](https://doi.org/10.1038/s41467-024-53256-8)
- [Goodale et al. (1994), natural and pantomimed grasping in patient D.F.](https://doi.org/10.1016/0028-3932%2894%2990100-7)
- [Cavina-Pratesi et al. (2007), task-dependent dorsal and ventral contributions](https://doi.org/10.1371/journal.pone.0000424)
- [Karnath et al. (2009), lesion anatomy of visual object agnosia](https://doi.org/10.1523/JNEUROSCI.5192-08.2009)
- [Bao et al. (2020), a population map of object space in primate inferotemporal cortex](https://doi.org/10.1038/s41586-020-2350-5)
- [Stuart and Hausser (2001), dendritic coincidence detection of EPSPs and action potentials](https://doi.org/10.1038/82910)
- [Branco, Clark, and Hausser (2010), dendritic discrimination of temporal input sequences](https://doi.org/10.1126/science.1189664)
- [Takahashi et al. (2016), active cortical dendrites and perceptual detection](https://doi.org/10.1126/science.aah6066)

## SAN provenance

- [Micah's object-grouping, classification, and learned-concept source, publicly fixed June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0615z.md)
- [Micah's cross-scale coincidence and multimodal-property source, publicly fixed June 10, 2022](https://github.com/v5ma/selfawarenetworks/blob/6ed486abf8c8bc2f8c1b4d9a63eb6128aa16eebd/a0049z.md)
- [Micah's population phase-variation segmentation source, publicly fixed July 11, 2022](https://github.com/v5ma/selfawarenetworks/blob/f41c9a4f8b8ab8cbaeaa48de97fb203216481513/a0238z.md)
- [Micah's dorsal/ventral functional analogy, Git-fixed August 19, 2022](https://github.com/v5ma/selfawarenetworks/blob/faf361d9790ae26de3e90d923e74e9a8755e186b/a0018z.md)
- [The August 2022 SAN Whitepaper receive-transform-project synthesis](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/whitepaperdraft2.md)

## Read next

- [[3d-neural-network-brain|The Brain as a Three-Dimensional Neural Network]]
- [[inside-out-vision-model|Inside-Out Vision Model]]
- [[visual-cortex|Visual Cortex]]
- [[body-model-as-control-surface|Body Model as Control Surface]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
- [[screen-metaphor-no-inner-viewer|Screen Metaphor: No Inner Viewer]]
- [[sparse-distributed-representations|Sparse Distributed Representations]]
- [[scale-invariant-patterns|Nested Invariance Across Neural Scales]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]

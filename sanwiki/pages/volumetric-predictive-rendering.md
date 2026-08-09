# Volumetric Predictive Rendering

> **Scientific boundary:** Humans ordinarily perceive a continuously updated three-dimensional world around the body. SAN describes that familiar phenomenology as a **real-time tomographic rendering** or **volumetric movie**. The scientific boundary concerns implementation: current neuroscience does not establish a literal voxel array, biological NeRF, localized three-dimensional screen, or inner viewer.

> **Image status:** No medically accepted image is assigned to this page. A bounded future figure is specified as `IMG-SAN-VOLUMETRIC-PREDICTIVE-RENDERING-001` in the SAN medically accurate image-prompt ledger.

**Volumetric Predictive Rendering** names both the scene-like character of human experience and a proposed recurring body-world process in [[self-aware-networks|Self-Aware Networks]]. Partial and time-varying evidence is combined into the experienced three-dimensional scene; objects and relations become separately selectable; an eye, body, or motor action changes what is sampled next; and returned sensory consequences revise the rendering.

The rendering is not delivered to a second observer. SAN proposes that it literally exists as a physical, sparse, and distributed pattern of receiver-relative phase differences and related neural-state changes across the active brain. The network-body process altered by that pattern constructs, experiences, uses, and revises the volumetric scene; it is the observer-action system itself.

## The operation before the label

```text
retinal, eye-position, body, and remembered evidence
-> distributed recurrent estimation of depth, borders, surfaces, and object relations
-> prediction of likely next evidence under possible sampling or movement
-> selective routing of a task-relevant object-action relation
-> eye, body, autonomic, or motor consequence
-> returned sensory evidence and model revision
```

No single input contains the complete scene. No one neuron, cortical column, frequency band, or brain region performs every step. The working state is distributed across interacting visual, parietal, temporal, frontal, subcortical, cerebellar, and sensorimotor systems in proportions that depend on the task.

## What the three words mean

### Volumetric

Visual experience is not ordinarily encountered as a flat retinal image. It presents a surrounding world with relative depth, occlusion, surface continuity, object pose, body position, reachable space, and expectations about what movement will reveal. SAN calls this familiar scene-like experience **volumetric**. The term does not require a metric voxel array or one photographic storage surface inside the brain.

### Predictive

A retained neural and bodily state constrains what evidence is likely to arrive next and what a movement is likely to change. Prediction may operate over eye movements, head turns, reaching, object motion, hidden surfaces, and expected sensory consequences. It need not be a complete forward movie, and a mismatch is not automatically a consciously experienced prediction error.

### Rendering

The changing physical state is the organism's experienced rendering and affects later grouping, recognition, attention, memory, report, autonomic regulation, and action. The same recurrent brain-body system constructs, experiences, uses, and revises it. Rendering therefore does not move perception into a hidden display for a second agent. In SAN, the distributed receive-transform-use process is the observer-action process.

## The proposed physical rendering substrate

SAN does not use "rendering" only as a software metaphor. It proposes a candidate physical substrate:

```text
widely maintained tonic neural and field state
-> sparse receiver-relative differences in timing, phase, frequency, amplitude,
   duration, transmitted quantity, inhibition, and local network context
-> distributed pattern changes across participating populations
-> changed perception, selection, memory, autonomic state, or action
```

The maintained tonic activity is the proposed **canvas** or active comparison field. Sparse phasic changes and [[phase-wave-differentials|PWDs]] are the proposed differentiated pattern or **ink**. No one cell contains the picture. The rendering exists in the relations among many changed receivers, transmitters, local fields, recurrent routes, and body consequences.

The television analogy is functional, not anatomically literal. A visible television image is physically instantiated by organized changes across an emitting array rather than by a second image hidden behind it. Ordinary displays chiefly modulate pixel intensity and color over time; optical phase is not their only control variable. SAN's proposed neural carrier is likewise multidimensional: relative phase is central, but timing, frequency, amplitude, duration, inhibition, transmitted quantity, receiver state, and spatial relation may all contribute. The hypothesis is that this sparse distributed carrier has the relational structure required to instantiate a changing three-dimensional phenomenological scene.

Within SAN, this is a **constitutive** proposal rather than a representation waiting for a separate decoder. The receiver-relative phase and PWD relations are proposed to be the scene's physical neural existence for the participating network: their distributed effects on the tonic activity field are the observing event. Saying that phase has the right kind of physical substance therefore means that phase relations provide measurable degrees of freedom - coincidence, lead and lag, locking, dispersion, interference, duration, and change - from which a spatially and temporally organized experience could be constituted. Whether these variables are necessary or sufficient for phenomenological content remains an open experimental question.

Established neuroscience shows that relative timing and phase can carry information and alter effective communication in specific circuits. It does not yet establish that distributed phase differences constitute the experienced scene. That is the stronger, testable SAN claim.

## Dissipation is the temporal rendering window

In SAN, a PWD does not disappear at the instant it is emitted. It perturbs receivers and recurrent routes over a circuit-dependent interval, while the continuing tonic activity progressively reduces the difference between the perturbed state and the local baseline. The fading interval is therefore part of the proposed computation:

```text
sparse phasic or PWD event
-> receiver-specific perturbation of the tonic state
-> recurrent transmission, inhibition, and re-entry across successive cycles
-> temporary changes in release, excitability, routing, recall, or action readiness
-> possible short-term plasticity and, under additional induction conditions,
   longer-lasting LTP, LTD, or structural change
-> progressive loss of the event's distinguishability as the network settles
-> a renewed tonic readiness state, altered where learning occurred
```

"Slowly" does not name one universal brain decay constant. Persistence depends on the cells, synapses, pathways, oscillatory state, inhibition, neuromodulation, and behavior involved. Some perturbations may end without a durable trace. Others may recur long enough, or arrive with the timing and biochemical conditions required, to recruit a stored pattern or modify later transmission. Short-term facilitation and depression are not interchangeable with LTP and LTD, and neither is guaranteed by a PWD.

This is where the diffusion-model analogy becomes precise enough to be useful. In the **forward or noising direction**, a differentiated phasic pattern becomes progressively less distinguishable as repeated interactions absorb it into tonic activity. In the **generative or re-expression direction**, a partial cue can recruit learned recurrent structure and produce a progressively organized sensory, memory, or action pattern. Each intermediate biological output remains causal for the next receiver and is part of the ongoing rendering.

The analogy does not claim that the brain implements a denoising diffusion probabilistic model, a Gaussian noise schedule, score matching, or an exact reverse Markov chain. It also does not establish that every sharp-wave ripple reconstructs a conscious image. The SAN hypothesis is narrower: iterative dissipation supplies time for a transient differential to affect tissue, while learned recurrent dynamics can use partial input and retained state to re-express structured content. Modern diffusion models provide a computational comparison because they learn an iterative relation between structured samples and progressively corrupted states ([Ho, Jain, and Abbeel, 2020](https://proceedings.neurips.cc/paper/2020/hash/4c5bcfec8584af0d967f1ab10179ca4b-Abstract.html)).

## Established scientific footholds

Biological vision begins with transformed retinal activity rather than a camera frame or a point cloud. Depth and scene organization draw on binocular disparity, motion, occlusion, border ownership, shading, texture, learned regularities, eye position, and body-related signals.

Several established findings constrain the SAN interpretation:

- neurons in early visual cortex can represent which side of a border belongs to a figure, while contextual and feedback signals contribute to later figure-ground organization ([Zhou, Friedman, and von der Heydt, 2000](https://doi.org/10.1523/JNEUROSCI.20-17-06594.2000); [Hupe et al., 1998](https://doi.org/10.1038/29537); [Jeurissen et al., 2024](https://doi.org/10.1038/s41467-024-53256-8));
- recurrent processing contributes when object recognition cannot be resolved by the earliest feedforward response alone ([Kar et al., 2019](https://doi.org/10.1038/s41593-019-0392-5));
- inferotemporal populations show a structured map of object shape and category relations rather than one cell containing a complete scene ([Bao et al., 2020](https://doi.org/10.1038/s41586-020-2350-5));
- spatial representations can mix eye-, head-, body-, object-, and task-relative variables instead of using one universal coordinate frame ([Chang and Snyder, 2010](https://doi.org/10.1073/pnas.0913209107));
- perception and visually guided action can depend differently on task, timing, and pathway, so recognizing an object is not identical to selecting an action toward it ([Goodale et al., 1994](https://doi.org/10.1016/0028-3932%2894%2990100-7); [Cavina-Pratesi et al., 2007](https://doi.org/10.1371/journal.pone.0000424));
- spike phase relative to ongoing local activity can carry visual-stimulus information beyond spike count in a declared recording context ([Montemurro et al., 2008](https://doi.org/10.1016/j.cub.2008.02.023)), and task-dependent interareal synchronization can accompany selective visual routing ([Bosman et al., 2012](https://doi.org/10.1016/j.neuron.2012.06.037));
- repeated activity can produce synapse- and timescale-specific short-term facilitation or depression rather than one generic persistence mechanism ([Muller et al., 2010](https://doi.org/10.1523/JNEUROSCI.4378-09.2010)); precise relative spike timing can bias potentiation or depression in defined preparations ([Bi and Poo, 1998](https://doi.org/10.1523/JNEUROSCI.18-24-10464.1998)); and the phase of an EPSP relative to an imposed membrane-potential oscillation affected the sign of plasticity in rat visual-cortex slices under the reported conditions ([Wespatat, Tennigkeit, and Singer, 2004](https://doi.org/10.1523/JNEUROSCI.2221-04.2004));
- weak electric fields in the range of endogenous fields can influence and entrain cortical network activity in vitro ([Frohlich and McCormick, 2010](https://doi.org/10.1016/j.neuron.2010.06.005)), and local ephaptic effects can alter cortical-neuron membrane potential and timing under defined conditions ([Anastassiou et al., 2011](https://doi.org/10.1038/nn.2727)).

These findings support distributed, recurrent, reference-dependent scene estimation and show that neural timing, phase, and endogenous fields can have measurable consequences. They do not establish SAN's stronger claim that sparse distributed phase differences physically constitute the volumetric contents of consciousness.

## The recovered SAN source operation

The earlier version of this page was an auto-generated stub with no primary source. The dated SAN record supplies a specific genealogy:

- **June 8, 2022:** [`a0001z ctpr.txt`](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0001z%20ctpr.txt) joins 3D segmentation and rendering analogies to internal recognition, multisensory perspective, body modeling, and movement. It explicitly treats the person as the rendered multisensory perspective and body model, updated at behaviorally useful timescales. That claim preserves the volumetric experience while leaving its exact neural representation open.
- **July 17, 2022:** [`a0115z.md`](https://github.com/v5ma/selfawarenetworks/blob/2abc8b08b58e5fbd3e67867f81b08c08067efd1d/a0115z.md) distinguishes segmentation of incoming evidence from recombination or clustering in imagination, then compares NAPOT with NeRF, semantic segmentation, projection-slice methods, and tomography. These are computational analogies for combining partial views, not claims that the biological mechanisms are identical.
- **August 18, 2022:** [`a0282z.md`](https://github.com/v5ma/selfawarenetworks/blob/5d1dced8c508ce85940431dae0c89c5369ae0ecb/a0282z.md) describes arrays that repeatedly sense, transform, and project partial patterns so the distributed brain can parse and segment its current model. Camera, eye, speaker, and screen language identifies capture-like and transmission-like roles; it is not literal cellular anatomy.
- **August 24, 2022:** [the SAN Whitepaper draft](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/whitepaperdraft2.md) consolidates the receive-transform-project architecture and explicitly argues that the participating neural arrays, not a hidden spectator, perform the observation.
- **September 18, 2022:** the predecessor source [`a0310zNAPOT5.md`](https://github.com/v5ma/selfawarenetworks/blob/fe2ab14e34974728e59fe04f98cbb08c8b7c0fd9/a0310zNAPOT5.md) explicitly compares repeated oscillatory absorption of incoming signals to the noising direction of diffusion networks.
- **September 19, 2022:** [the next committed revision](https://github.com/v5ma/selfawarenetworks/blob/da07ceba8b7d8d374d58d685e6002d18c2c4b0c0/a0310zNAPOT5.md) adds the reverse direction: learned sharp-wave-ripple sequences re-express structured sensory content from a low-information tonic state. These two commits establish the joined two-direction argument in the repository history.
- **November 28, 2022:** [the source was renamed and consolidated as `a0310z.md`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md), preserving both directions under the current canonical file route. November 2022 is therefore the conservative public fixation for the joined formulation when citing the present filename.
- **January 22, 2024:** [`GPT2024Jan1toJan22.md`](https://github.com/v5ma/selfawarenetworks/blob/b795208821a16518f48654b1c26cd0619fa7d413/GPT2024Jan1toJan22.md) restates and expands the already documented 2022 synthesis by further discussing persistence, possible synaptic change, and partial-cue reconstruction. It is not the first joined formulation.

The dates establish the development of Micah's proposal. They do not establish medical validation.

## From scene separation to selection and action

The missing causal middle in the old stub was **selection**. A useful scene model must make some relations independently available for attention and action while preserving alternatives that may matter later.

For example, recurrent activity may separate a moving hand, a doorway, and a partially hidden obstacle without assigning the whole scene to one binding neuron. Current goals, learned value, inhibition, gain, and body state can then change which relation has enough causal influence to alter the next eye movement, reach, avoidance response, memory, or report. Returned evidence tests and revises that selection.

This connects [[3d-semantic-segmentation|3D Semantic Segmentation]] to [[attention|Attention as Distributed Selection]] and [[body-model-as-control-surface|Body Model as Control Surface]]:

```text
separate candidate objects and relations
-> preserve observer- and body-relative geometry
-> change the effective influence of a task-relevant candidate
-> act or resample
-> use the consequence to update the scene
```

Attention is therefore not an inner spotlight illuminating a finished render. It is a measurable change in which distributed relation can influence later processing or behavior.

## Relation to NAPOT

[[neural-array-projection-oscillation-tomography|NAPOT]] proposes that successive neural populations receive partial patterns, transform them under their current state, and project consequential updates to other populations. The tomography analogy asks whether multiple partial, changing projections can support a state that no one projection contains.

The analogy becomes scientifically useful only when a model specifies:

1. what variables are sampled;
2. which populations send and receive them;
3. how eye, head, body, and task state change the transformation;
4. what feature of the output carries new information;
5. how that output changes a later selection or action; and
6. how perturbation of a named route changes the predicted result.

SAN further proposes that tonic state supplies the physically active comparison canvas while consequential phasic events carry sparse differentiated updates. The joined claim is that these distributed receiver-relative differences physically instantiate the changing rendering, not merely that an external analyst can decode them. A phase-sensitive or PWD term earns a place in the scientific model only if it predicts receiver-specific consequences beyond firing rate, power, waveform, movement, arousal, recurrent state, and common input.

## Claim boundary

| Layer | Defensible statement |
|---|---|
| Established neuroscience | Visual and sensorimotor systems integrate partial cues through distributed, recurrent, context-sensitive processes that support depth, grouping, object relations, reference frames, selection, and action. |
| Source-supported SAN interpretation | The familiar real-time, three-dimensional scene of experience is a physical volumetric rendering constructed, experienced, used, and revised by the distributed receive-transform-project-act-update system itself. |
| Open SAN hypothesis | Sparse, distributed receiver-relative phase differences and associated PWD dimensions physically instantiate the differentiated content of that rendering against a maintained tonic canvas. |
| Stronger unproved claim | The loop implements a particular tomographic inverse equation, stores experience as a literal metric voxel data structure in one location, or makes any decoded three-dimensional scene sufficient evidence of consciousness. |

## Discriminating experiment

Present the same objects across controlled changes in viewpoint, occlusion, eye position, body pose, task, and action opportunity. Record identified visual, parietal, temporal, and motor populations across early, recurrent, selection, and movement periods.

Compare held-out models containing:

1. feedforward retinal and firing-rate variables;
2. recurrent state and border/surface variables;
3. eye-, head-, body-, and task-reference variables;
4. object-selection and action variables; and
5. preregistered receiver-relative timing or PWD variables.

Then perturb one named recurrent or inter-area route in a declared time window. The bounded SAN bridge gains support if the full model predicts how a specific object relation, action choice, and returned update change, and if its phase-sensitive terms add reproducible explanatory value beyond simpler alternatives. A decoder that can reconstruct an image is not enough; the decoded variable must be causally used by the biological system.

## Read next

- [[3d-semantic-segmentation|3D Semantic Segmentation]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[body-model-as-control-surface|Body Model as Control Surface]]
- [[attention|Attention as Distributed Selection]]
- [[sensory-stabilized-volumetric-rendering|Sensory-Stabilized Volumetric Rendering]]
- [[inside-out-vision-model|Inside-Out Vision Model]]
- [[visual-cortex|Visual Cortex]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[neural-rendering|Neural Rendering]]
- [[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]
- [[brain-as-memory-prediction-machine|Brain as Memory-Prediction Machine]]

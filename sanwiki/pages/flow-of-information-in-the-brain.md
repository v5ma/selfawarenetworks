---
title: "The Flow of Information in the Brain"
tags: [san, information-flow, dendrites, recurrence, thalamocortical, bci, distributed-control]
aliases: [Flow of Information in the Brain, Brain Information Flow]
summary: "A source-faithful account of how sensory, cellular, circuit, thalamocortical, and motor transformations form a recurrent observer-action loop in SAN."
status: governed
book_atlas_bridge_ids: [B2-BR-017]
---

# The Flow of Information in the Brain

## The idea in plain language

Information in the brain is not a fluid passed unchanged through one pipeline. A sensory or bodily
event changes a receptor; the receptor changes the activity of connected neurons; dendrites,
membrane state, inhibition, and neuromodulation transform those inputs; spikes and synapses create
new receiver-specific effects; recurrent circuits reshape the population state; and action changes
the next sensory input.

```text
sensory or bodily event
  -> receptor transduction
  -> dendritic and cellular integration
  -> spike, burst, waveform, or graded output
  -> synaptic release and receiver response
  -> local recurrent selection
  -> thalamocortical and interareal routing
  -> distributed working state
  -> motor, autonomic, or vocal action
  -> reafferent sensory update
```

The same event is therefore **re-expressed through successive physical states** rather than copied
from neuron to neuron. There is no single final cell, screen, or inner viewer. The changing network,
including its sensory and motor consequences, is the observer-action process.

> **Book/Atlas bridge B2-BR-017:** This is the Encyclopedia's canonical route from nested cortical and thalamic
> traffic through Neural Tuning and the Gamma Consideration Sandwich to action and returned sensory
> evidence. The linked concept pages explain their own mechanisms; this page explains how they fit
> into one recurrent traffic graph.

## One question at four biological scales

| Scale | Established transformation | SAN-facing question |
|---|---|---|
| Micro: synapse, dendrite, neuron | Receptors, dendritic conductances, somatic state, the axon initial segment, spike timing and waveform, presynaptic calcium, release machinery, and receiver state affect the next response. | Which sender and receiver variables must be retained instead of reducing the event to one scalar? |
| Meso: local circuit | Excitatory cells, inhibitory interneurons, neuromodulators, and recurrent connections create state-dependent recruitment, competition, persistence, and suppression. | Can a receive-transform-project motif explain how learned local assemblies select and re-express patterns? |
| Macro: interareal and thalamocortical | Feedforward, feedback, corticothalamic, thalamocortical, and cortico-thalamo-cortical routes are heterogeneous and cell-type specific. | How are partial representations transformed and coordinated without one universal cortical-column circuit? |
| Organism: perception and action | Perception changes choice and movement; movement changes sensory input through reafference. | Can the complete recurrent observer-action loop be measured and causally perturbed? |

## The joined cortical traffic model

The March 2021 recording and Micah's January 2024 article
[Cortical Dynamics & Neurocircuitry](https://www.svgn.io/p/cortical-dynamics-and-neurocircuitry)
describe complementary parts of one proposal. The recording asks what happens to information as it
is repeatedly transformed by living receivers. The later article tries to map that transformation
onto three interacting traffic systems:

Its principal contribution is this proposed traffic cycle, not a static assignment of functions to
Layers 5 and 6. It tries to join bottom-up and top-down traffic, local laminar transformation,
front-to-back and back-to-front interareal exchange, recurrent feedback, action, and sensory return.

1. **Laminar and thalamocortical recurrence:** modality-specific sensory pathways enter cortical circuits through thalamic and non-thalamic routes; local layers transform those inputs; deep corticothalamic and corticofugal populations influence later cortical and subcortical states.
2. **Interareal feedforward and feedback traffic:** sensory evidence can propagate toward successively more integrative cortical areas while task state, expectation, attention, memory, and contextual influence return through feedback pathways.
3. **Action and reafference:** cortical and subcortical outputs contribute to motor, autonomic, or vocal action; the changed body and world then provide the next sensory evidence.

The article's **vertical** and **horizontal**, **back-to-front** and **front-to-back** language is a
useful spatial teaching shorthand, not a literal universal wiring rule. Thalamocortical targets,
laminar origins and terminations, feedforward and feedback routes, and cortical hierarchies vary by
area, pathway, cell class, species, and task. In particular, sensory traffic does not always move
through every cortical layer in one fixed top-to-bottom sequence, and corticothalamic return does
not simply terminate in layer 1.

The medically bounded joined chain is:

```text
sensory and bodily transduction
  -> thalamic, brainstem, and direct cortical routes
  -> area-specific laminar transformation
  -> corticocortical feedforward evidence
  <-> feedback from context, memory, attention, and current goals
  <-> layer-6 corticothalamic and other recurrent modulation
  -> local selection, amplification, suppression, and integration
  -> layer-5 corticofugal and other distributed action pathways
  -> motor, autonomic, or vocal consequence
  -> reafferent sensory and bodily update
```

This is where three SAN concepts meet without becoming synonyms. This page supplies the proposed
traffic topology. [[neural-tuning|Neural Tuning]] asks how learned cellular state, inhibition,
neuromodulation, and corticothalamic recurrence change which traffic is effective.
[[gamma-wave-consideration-sandwich|The Gamma Consideration Sandwich]] proposes a more specific
receiver-relative timing organization: alpha-associated primary-sensory input and beta-associated
prefrontal thought/top-down input form the top bun; Layer-2/3 gamma performs consideration and
proprioceptive coordination; and Layer-5 theta/gamma carries action-side output and returned body
input in the bottom bun. GCS is a timing-and-routing hypothesis over this
heterogeneous traffic graph, not a replacement for its anatomy or a claim that each band or layer
has one exclusive role throughout cortex. Here, returned body input names the functional return
term in the GCS cycle; it does not mean that Layer 5 is the sole anatomical carrier of ascending
body information.

Primate visual-cortex experiments provide one bounded example rather than a universal law:
feedforward influence has often been associated with gamma-range activity and feedback influence
with alpha/beta-range activity in those preparations. Cortico-thalamo-cortical reviews likewise
show extended, cell-type-specific chains of cortical, thalamic, and local loops. These findings
support recurrent traffic and direction-specific coordination; they do not prove the complete SAN
cycle or assign one frequency to every feedforward or feedback pathway.

Those interareal frequency-direction findings and the GCS band-role hypothesis are not the same
claim. The visual findings describe directed influence between named cortical areas in specific
preparations. GCS proposes a receiver-relative local timing organization across sensory and
top-down input, consideration and proprioceptive coordination, action-side output, and returned
body evidence. The former constrains and supplies comparison evidence for the latter; it does not
directly validate GCS or relabel its functional roles.

## What established neuroscience supports

The March 2021 conversation correctly resisted two oversimplifications.

First, one presynaptic spike is not normally a command that forces one selected downstream neuron to
fire. Postsynaptic effects depend on convergence, timing, synaptic strength, inhibition, membrane
state, and ongoing activity. Neural responses can be distributed and variable while remaining
reliably decodable at the population level. Mixed selectivity is one experimentally established way
that populations can represent combinations of task variables.

Second, information flow is recurrent. In object recognition, late inferior-temporal responses to
difficult images are better explained by models with additional transformations or recurrence than
by feedforward-only models. Corticothalamic pathways can suppress or enhance thalamic activity under
different firing and synchrony conditions. These findings support state-dependent recurrent routing;
they do not establish one fixed route or one universal circuit for every cortical area.

- [Rigotti et al. (2013), mixed selectivity in prefrontal populations](https://doi.org/10.1038/nature12160)
- [Kar et al. (2019), recurrence in primate object recognition](https://doi.org/10.1038/s41593-019-0392-5)
- [Bastos et al. (2015), frequency-dependent feedforward and feedback influences](https://doi.org/10.1016/j.neuron.2014.12.018)
- [Dynamic corticothalamic modulation during wakefulness (2024)](https://doi.org/10.1038/s41467-024-47863-8)
- [Ledergerber and Larkum (2010), state- and timing-dependent integration in Layer-6 pyramidal dendrites](https://doi.org/10.1523/JNEUROSCI.2254-10.2010)
- [Manita et al. (2015), an M2-to-S1 route that drives Layer-5 dendritic activity and supports tactile discrimination in mice](https://doi.org/10.1016/j.neuron.2015.05.006)
- [Michalareas et al. (2016), gamma-dominant feedforward and alpha/beta-dominant feedback influences in human visual cortex](https://doi.org/10.1016/j.neuron.2015.12.018)
- [Ziegler et al. (2023), opposing Layer-6 corticothalamic and Layer-5 effects on somatosensory gain and behavior in mice](https://doi.org/10.1038/s41467-023-38798-7)
- [Mo, McKinnon, and Sherman (2024), causal involvement of an S1-Layer-5-to-POm transthalamic route in whisker-based discrimination](https://doi.org/10.1038/s41467-024-50163-w)
- [Weineck et al. (2020), pre-vocal beta/high-gamma changes and theta frontostriatal coupling that predict bat vocal output](https://doi.org/10.1371/journal.pbio.3000658)
- [García-Rosales et al. (2022), frontal-to-auditory flow before bat echolocation and auditory-to-frontal return after vocalization](https://doi.org/10.1038/s41467-022-31230-6)

These studies establish component operations in named species, circuits, tasks, layers, and
measurement bands. They do not establish one universal cortical route, the full Neural Tuning or
GCS operator, or the claim that oscillatory power is itself the energy that contracts muscle.
Movement and vocalization require appropriately timed synaptic drive and motor-neuron recruitment;
the oscillatory measurements are population-level correlates and candidate coordination variables.

## Four-layer claim separation

| Claim layer | What this page says |
|---|---|
| Established operation | Cortical processing includes recurrent feedforward and feedback routes, heterogeneous laminar transformations, corticothalamic interactions, state-dependent dendritic integration, descending output, and sensory consequences of action. Particular preparations show route- and frequency-dependent influences. |
| Micah's documented synthesis | The dated SAN sources progressively join returned sensory consequence, layered-cortex engineering, modality-sensitive write-back, nested cortical-thalamic traffic, receiver preparation, Neural Tuning, GCS, action, and reafference. |
| SAN extension | Learned and current receiver state tune available functional connectivity; phase-compatible and inhibitory events help select temporary routes; action changes the body and world; returned evidence changes the next rendered and action-ready state. |
| Decisive test | Identify sender, receiver, route, layer, timescale, and behavioral consequence; then perturb the predicted preparation or return route while controlling sensory input, movement, arousal, mean firing, and gross power. The full model must outperform simpler feedforward, rate-only, and power-only alternatives on held-out prediction and causal intervention. |

## Terminology repair: MVR is not MVB

The recording briefly confuses two different biological terms:

- **Multivesicular release (MVR)** means that one presynaptic event can release more than one
  synaptic vesicle at an active zone or connection
  ([Dürst et al., 2022](https://doi.org/10.1038/s41467-022-33565-6)).
- **Multivesicular bodies (MVBs)** are endosomal organelles containing internal vesicles. They are
  not the synaptic-release mechanism being discussed
  ([Stahl and Barbieri, 2002](https://doi.org/10.1126/stke.2002.141.pe32)).

The intended SAN question survives the transcription and vocabulary error: a synapse is a stateful
channel. Presynaptic potassium-channel state and action-potential waveform can alter terminal
calcium entry and transmitter release under bounded conditions
([Hoppa et al., 2014](https://doi.org/10.1016/j.neuron.2014.09.038)). Release is probabilistic, and MVR
does not establish a fixed vesicle-count alphabet or prove that one spike broadcasts a complete
memory. See [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]].

## What SAN adds

SAN interprets information flow as a repeated **receive -> transform -> project** operation across
scales. Learned structure changes how a receiver responds; recurrent routing changes which
populations participate; and motor consequences close the loop. This is a stronger systems claim
than saying that activity merely travels from sensory cortex to association cortex.

The later SAN vocabulary organizes the 2021 questions without being backdated into the recording:

- **Tonic context:** in this SAN usage, the receiver's regular ongoing oscillatory pattern into
  which a new event arrives.
- **Phasic difference:** the event-driven departure that changes the receiving system.
- **PWD is a core SAN concept:** its proposed operator is a typed, receiver-relative departure from
  a declared tonic or regular oscillatory pattern. That departure may include waves of excitation,
  waves of inhibition, or their interaction, alongside timing, phase, frequency, amplitude,
  duration, transmitted quantity, and network location as a richer update variable. The
  differential from the tonic reference defines PWD; neither sign alone defines it, and PWD is not
  excitation minus inhibition. Its naming date is genealogy metadata, not conceptual rank.
  In rat occipital-neocortical slices, experimentally changing GABAergic inhibition altered the
  synchronization and spatial complexity of oscillatory waves
  ([Xiao et al., 2012](https://doi.org/10.1111/j.1460-9568.2012.08132.x)). This is bounded component
  evidence for retaining inhibition in the wave dynamics, not validation of PWD as a complete code.
- **NAPOT:** the open hypothesis that many partial transformations can support iterative,
  distributed reconstruction and coordinated action.

These are proposed operational roles, not decorative metaphors. Existing recurrence, mixed
selectivity, synaptic physiology, and population decoding leave room for the hypotheses but do not
by themselves prove PWD, NAPOT, qualia, or consciousness.

## What this page does not claim

- Scalp EEG can decode arbitrary thoughts or complete percepts.
- One generic neuron directly receives every feature stream or projects to every cognitive target.
- Every cortical area implements one canonical laminar circuit.
- Every neuron uses one fixed frequency code.
- All cortical layers project to the thalamus.
- One dendrite or neuron contains a literal complete image viewed by another system.
- A single anatomical location performs observation for the rest of the brain.

## BCI consequence: read, decode, write, and close the loop

A brain-computer interface must declare what it measures, what model maps that measurement to a
target variable, what it stimulates, and how the effect is validated. **Read is not decode, and
decode is not write.** Intracortical systems have decoded attempted handwriting and speech under
participant- and task-specific calibration. Intracortical stimulation of human somatosensory cortex
has evoked tactile sensations localized to parts of the hand. None of these results is arbitrary
thought reading or a general neural code.

- [Willett et al. (2021), attempted-handwriting BCI](https://doi.org/10.1038/s41586-021-03506-2)
- [Flesher et al. (2016), intracortical somatosensory stimulation](https://doi.org/10.1126/scitranslmed.aaf8083)
- [Metzger et al. (2023), speech decoding and avatar control](https://doi.org/10.1038/s41586-023-06443-4)
- [[brain-interface-bci-map|Brain.Interface - BCI Industry Map]]

## Falsifiable tests

The strongest SAN experiment would compare increasingly rich models of the same receiver:

1. firing rate or population power alone;
2. rate plus ongoing network state;
3. rate, state, relative timing, phase, waveform, and synaptic variables;
4. the full candidate PWD and receive-transform-project model.

The richer model must predict held-out receiver activity, perception, action, or reafferent updating
better than simpler alternatives. Causal perturbation of the predicted route must change the result
in the predicted direction. If the extra SAN variables do not improve prediction or intervention,
that particular enriched model must be revised or narrowed. A failed model comparison does not
erase the dated source record or justify compressing the full SAN argument into the failed
formulation.

## Source-faithful genealogy of the joined route

| Dated stage | Contribution to this bridge | Boundary |
|---|---|---|
| September 21, 2011, owner-dated; public Git fixation June 10, 2022 | [[gh-a0051z|a0051z]] describes sensation changing a learning/prediction process, neural activity contributing to movement or sound, and sensed consequences changing the next state. | Sensory-action-return ancestor; not yet a laminar, thalamic, Neural Tuning, GCS, PWD, or NAPOT account. |
| May 18, 2012, owner-dated; public Git fixation June 10, 2022 | [[gh-a0083z|a0083z]] joins returned brain-derived light/sound feedback with the engineering problem of a folded six-layer cortex. | Operational ancestor; it does not establish semantic decoding or one universal cortical route. |
| April 2017 public recording; public Git transcript fixation October 22, 2022 | [[gh-nlp1|Neural Lace Podcast 1]] compares feedback-rich and connectionless protocols, separates modality-sensitive routes, and proposes writing back the difference between present and desired multisensory patterns. | Engineering comparisons and a difference-writeback ancestor; the current transcript source proves the month, not an exact April day, and later SAN terms are not backdated into it. |
| March 25, 2021 recording | [[gh-b0327ywhisper|The Flow of Information in the Brain]] follows modality-relevant, vertical, horizontal, recurrent, and transthalamic routes. Micah's questions and synthesis remain distinct from F. Scott's explanations of nested loops. | Machine transcript with incomplete diarization; quotations require audio verification, and later SAN vocabulary is not backdated. |
| September 2-9, 2022 public Git stages | [[gh-a0007z|a0007z]] joins deep-layer dendrites, corticothalamic loops, burst timing, excitation, inhibition, and cooperative recruitment into the Neural Tuning/task-assembly stage. The NAPOT macro-clock formulation appears in the September 2 revision; Neural Tuning and inhibitory assembly selection are explicit in the September 9 revision. | SAN hypothesis built from heterogeneous circuits, not a universal column law. These dates identify stages within a developing file, not the origin of every component it contains. |
| January 22, 2024 source note; January 24 public article | [[gh-a0403z|a0403z]] and [Cortical Dynamics & Neurocircuitry](https://www.svgn.io/p/cortical-dynamics-and-neurocircuitry) join local laminar, corticothalamic, long-range cortical, output, and return traffic. | Strong authorial evidence for the joined SAN map; rough proportions and universalized anatomy require route-specific replacement. |
| October 21, 2024 public Git source | [[gh-rexnote06|rexnote06]] adds the consideration-sandwich operation: alpha-associated sensory input and beta-associated thought/decision input meet gamma consideration and proprioceptive coordination. | The detailed Layer-4 top bun, Layer-2/3 gamma middle, and Layer-5 theta/gamma bottom bun are a 2026 author clarification and are not backdated. |
| May 16, 2025 first draft; August 21, 2025 Zenodo deposit | [The first DOI-backed SAN OCA paper](https://doi.org/10.5281/zenodo.16922401) consolidates receive-transform-project arrays, recurrent traffic, inhibition, Neural Tuning, GCS, output, and returned evidence. | Later consolidation, not the origin date of the earlier stages and not experimental validation. The DOI deposit date is not substituted for the first-draft date. |
| 2026 Encyclopedia synthesis | This page joins the stages through matching-scale anatomy, claim separation, and decisive tests. | Present synthesis; it preserves the earlier stages without assigning its mature wording to them. |

## Why the March 2021 recording matters

The conversation titled **"The flow of information in the brain"** joins practical BCI limits,
dendrites, recurrence, object recognition, artificial perception, thalamocortical loops, and
distributed control before the later NAPOT vocabulary was organized. It asks the governing
engineering question directly: what would a BCI have to read or write if biological information is
continually transformed by living receivers?

The recording establishes a five-step historical bridge:

1. Consumer EEG can support bounded control but cannot simply read arbitrary thought.
2. Better BCI design requires understanding transformations among receptors, dendrites, neurons,
   local circuits, thalamus, cortex, body, and action.
3. Recurrence and feedback mean information flow is not a one-way sensory pipeline.
4. Shared object recognition is a relational coding problem, not a search for one fixed neuron address.
5. Artificial perception makes the theory causal: what pattern, at what location and timescale,
   under what individual calibration, would cause a specific percept?

## Exact source identity

- Wiki source: [[gh-b0327ywhisper|b0327ywhisper]]
- Repository source file: `selfawarenetworks/b0327ywhisper.md`
- SHA-256 at the July 15, 2026 audit: `5C108BE142DE8311E6C943C450E231CEA6C279958400A68CF4BD088FF6AF9DBE`
- In-file recording date: March 25, 2021
- In-file title: `The flow of information in the brain`
- Original recording: [Google Recorder](https://recorder.google.com/b612bace-0639-419d-990a-0f16fd0552f5)
- Transcription layer: OpenAI Whisper
- Participants evident in the broader record: Micah, Scott, and Julia
- Diarization: not reliable enough to assign every sentence to a named participant

The event date and later repository-import date are separate facts. The event date establishes when
the conversation occurred; it does not prove that vocabulary added in 2022 was already present.

## Argument map

| Current transcript region | Question family | SAN routes |
|---|---|---|
| lines 11-83 | EEG limits, eye tracking, AR/VR, practical control channels | BCI, NerveGear, instrumentation |
| lines 201-349 | Biological versus artificial networks, synaptic unreliability, MVR/MVB terminology, action-potential width | biological computation, perceptron and deep-learning comparison |
| lines 353-611 | Calcium, vesicle release, AMPA/NMDA, synaptic physiology | molecular grounding, dendrites |
| lines 613-899 | Recurrence, baseline, attractors, Hawkins, dendrites, no central controller | prediction, tonic state, distributed self |
| lines 901-1347 | Dendritic geometry, local spikes, backpropagating action potentials, STDP, spines, plasticity | Neural Tuning, recognition, memory |
| lines 1363-1467 | Broccoli, shared temporospatial object structure, touch substitution, artificial perception | [[broccoli-shared-recognition-artificial-perception|Broccoli and Artificial Perception]] |
| lines 1467-1859 | Thalamus, Neural Lace, Neuralink, Stentrode, VR/AR | BCI read/write systems |
| lines 1861-2261 | Hawkins, cortical columns, reference frames, V1, multimodality | object models, coordinate transformations |
| lines 2263-2491 | Feedforward and feedback routes, thalamic loops, microcircuits, dipoles, nested loops, EEG summation | NAPOT, Neural Tuning, measurement |

Line numbers identify the currently audited transcript and may change if it is corrected. The hash
identifies the exact version used for this map. Important quotations require audio-level verification.

## Earlier array formulation and later anatomical refinement

[[gh-a0417z|a0417z]] preserves an April 27, 2014 category-theory discussion and a clearly marked
2022 Micah retrospective describing information flow as a series of arrays. Each array registers
part of the structure; activity from spikes through larger rhythms helps bind those partial
registrations with body representation and action. This is a distributed-observer formulation, not
a literal picture watched by one array.

[[gh-a0403z|a0403z]], first Git-fixed in January 2024 and published as
[Cortical Dynamics & Neurocircuitry](https://www.svgn.io/p/cortical-dynamics-and-neurocircuitry),
is a later composite cortex-and-thalamus map.
Its strongest accurate form is a heterogeneous circuit graph: excitatory intratelencephalic,
pyramidal-tract, and corticothalamic projection classes interact with thalamocortical cells and
local inhibitory circuits in area- and cell-type-specific loops. The anatomy supports recurrent
routing without requiring one universal column pathway.

- [Shepherd and Yamawaki (2021), cortico-thalamo-cortical loop cell classes](https://doi.org/10.1038/s41583-021-00459-3)
- [Mohan et al. (2023), cortical glutamatergic projection-neuron subnetworks](https://doi.org/10.1038/s41593-022-01244-w)

## Earlier state-dependent output branch

[[gh-a0156z|a0156z]] preserves a multi-speaker debate owner-dated September 19, 2012. It first
entered the public Git record on June 8, 2022 under the precursor filename `a0365z ctpr.txt` and was
renamed to `a0156z.md` on June 12, 2022. Its durable question is whether dendritic and cellular state
remains consequential through spike timing, burst, waveform, terminal calcium, release, and
receiver-specific effects.
The period `electron pulse` and all-to-all broadcast language is not needed, and the mature PWD term
is not backdated. [Li, Poo, and Dan (2009)](https://doi.org/10.1126/science.1169957) and
[Kwan and Dan (2012)](https://doi.org/10.1016/j.cub.2012.06.007) show that one neuron's influence can
be consequential under bounded, state- and cell-type-dependent conditions. See the
[[early-a0156-a0502-obscure-argument-map|full source map]].

## Visual status

This exact figure passed the SAN project medical-art and source-faithfulness protocol; that is not
clinical or regulatory approval. It shows one event re-expressed across declared micro, meso,
macro, and organism scales, including a bounded local recurrent excitatory-inhibitory circuit,
heterogeneous cortical-thalamic routes, distributed action, and reafference. The machine rail is an
engineering analogy, not anatomy or biological evidence. Any pixel, label, caption, source, or
claim-scope change requires a fresh exact-artifact review.

![Information is re-expressed, not copied. A medically reviewed SAN infographic tracks one event across receptor transduction, cellular integration, a local recurrent excitatory-inhibitory circuit, heterogeneous cortical-thalamic routing, distributed action, and reafference. A separate machine rail is labeled as engineering analogy only. PWD is shown as a core SAN concept: a typed, receiver-relative departure from a declared tonic pattern that may involve excitation, inhibition, or interaction, and is not excitation minus inhibition.](assets/generated/san/san-brain-machine-flow-comparison/san-brain-machine-flow-comparison-001.png#compact-html)

## Read next

- [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]]
- [[recursive-neural-array-perception|Recursive Neural Array Perception]]
- [[neural-array-projection|Neural Array Projection]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[gamma-wave-consideration-sandwich|Gamma Wave Consideration Sandwich]]
- [[neural-tuning|Neural Tuning]]
- [[brain-interface-bci-map|Brain Interface and BCI Map]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[early-a0397-a0419-obscure-argument-map|Early a0397-a0419 Obscure Argument Map]]

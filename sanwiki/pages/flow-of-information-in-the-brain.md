---
title: "The Flow of Information in the Brain"
tags: [san, information-flow, dendrites, recurrence, thalamocortical, bci, distributed-control]
aliases: [Flow of Information in the Brain, Brain Information Flow]
summary: "A source-faithful account of how sensory, cellular, circuit, thalamocortical, and motor transformations form a recurrent observer-action loop in SAN."
status: governed
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

## One question at four biological scales

| Scale | Established transformation | SAN-facing question |
|---|---|---|
| Micro: synapse, dendrite, neuron | Receptors, dendritic conductances, somatic state, the axon initial segment, spike timing and waveform, presynaptic calcium, release machinery, and receiver state affect the next response. | Which sender and receiver variables must be retained instead of reducing the event to one scalar? |
| Meso: local circuit | Excitatory cells, inhibitory interneurons, neuromodulators, and recurrent connections create state-dependent recruitment, competition, persistence, and suppression. | Can a receive-transform-project motif explain how learned local assemblies select and re-express patterns? |
| Macro: interareal and thalamocortical | Feedforward, feedback, corticothalamic, thalamocortical, and cortico-thalamo-cortical routes are heterogeneous and cell-type specific. | How are partial representations transformed and coordinated without one universal cortical-column circuit? |
| Organism: perception and action | Perception changes choice and movement; movement changes sensory input through reafference. | Can the complete recurrent observer-action loop be measured and causally perturbed? |

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

## Terminology repair: MVR is not MVB

The recording briefly confuses two different biological terms:

- **Multivesicular release (MVR)** means that one presynaptic event can release more than one
  synaptic vesicle at an active zone or connection.
- **Multivesicular bodies (MVBs)** are endosomal organelles containing internal vesicles. They are
  not the synaptic-release mechanism being discussed.

The intended SAN question survives the transcription and vocabulary error: a synapse is a stateful
channel. Presynaptic potassium-channel state and action-potential waveform can alter terminal
calcium entry and transmitter release under bounded conditions. Release is probabilistic, and MVR
does not establish a fixed vesicle-count alphabet or prove that one spike broadcasts a complete
memory. See [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]].

## What SAN adds

SAN interprets information flow as a repeated **receive -> transform -> project** operation across
scales. Learned structure changes how a receiver responds; recurrent routing changes which
populations participate; and motor consequences close the loop. This is a stronger systems claim
than saying that activity merely travels from sensory cortex to association cortex.

The later SAN vocabulary organizes the 2021 questions without being backdated into the recording:

- **Tonic context:** the ongoing, structured state into which a new event arrives.
- **Phasic difference:** the event-driven departure that changes the receiving system.
- **PWD:** the open hypothesis that receiver-relative timing, phase, frequency, amplitude, duration,
  transmitted quantity, and network location can form a richer update variable.
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
the stronger account should be rejected or narrowed.

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

[[gh-a0403z|a0403z]], first Git-fixed in January 2024, is a later composite cortex-and-thalamus map.
Its strongest accurate form is a heterogeneous circuit graph: excitatory intratelencephalic,
pyramidal-tract, and corticothalamic projection classes interact with thalamocortical cells and
local inhibitory circuits in area- and cell-type-specific loops. The anatomy supports recurrent
routing without requiring one universal column pathway.

- [Shepherd and Yamawaki (2021), cortico-thalamo-cortical loop cell classes](https://doi.org/10.1038/s41583-021-00459-3)
- [Cortical glutamatergic projection-neuron subnetworks (2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10571488/)

## Earlier state-dependent output branch

[[gh-a0156z|a0156z]] preserves a June 2012 multi-speaker debate over what a one-bit artificial
neuron discards. Its durable question is whether dendritic and cellular state remains consequential
through spike timing, burst, waveform, terminal calcium, release, and receiver-specific effects.
The period `electron pulse` and all-to-all broadcast language is not needed, and the mature PWD term
is not backdated. [Li, Poo, and Dan (2009)](https://doi.org/10.1126/science.1169957) and
[Kwan and Dan (2012)](https://doi.org/10.1016/j.cub.2012.06.007) show that one neuron's influence can
be consequential under bounded, state- and cell-type-dependent conditions. See the
[[early-a0156-a0502-obscure-argument-map|full source map]].

## Image status

No medically reviewed illustration is currently accepted for this page. The replacement should
show the same event transformed across declared micro, meso, macro, and organism scales, with
recurrent feedback and reafference, without drawing a single universal pathway or inner viewer.

## Read next

- [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]]
- [[neural-array-projection|Neural Array Projection]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[neural-tuning|Neural Tuning]]
- [[brain-interface-bci-map|Brain Interface and BCI Map]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]
- [[early-a0397-a0419-obscure-argument-map|Early a0397-a0419 Obscure Argument Map]]

---
title: "Executable Scientific Stories and Source-Corpus Correction"
tags: [san, scientific-visualization, webxr, provenance, transcription, source-corpus, human-review]
aliases: [Writer With 3D, Executable Scientific Story, Audio-to-Book Source Corpus]
summary: "A source-governed SAN method for turning a mechanism into an inspectable 3D causal story while keeping visualization, evidence, audio, machine transcripts, human correction, attribution, and publication permission separate."
status: governed
---

# Executable Scientific Stories and Source-Corpus Correction

## The problem in plain language

A scientific figure can show what something looks like without showing what happens. A polished
animation can show a causal sequence without revealing which transition was observed, inferred,
simplified, or hypothesized. A folder full of demos can show technical ability while leaving the
audience unable to identify the one scientific argument being made.

SAN's 2021 source proposes a different role: be a **writer with 3D**. Arrange molecules, cells,
structures, and stages into one guided spatial story so a reader can inspect the proposed
mechanism rather than merely admire an image.

```text
scientific question
-> named entities and relations
-> spatial and temporal sequence
-> narration tied to visible transformations
-> evidence status at each transition
-> test, perturbation, or falsifier
```

Only after that operation is clear is the term useful: an **executable scientific story** is an
interactive explanation whose load-bearing transitions can be inspected against sources and
tests.

## What 3D contributes

Three-dimensional presentation can make spatial relations, occlusion, scale, orientation, and
ordered interaction easier to inspect. Interaction lets a reader change viewpoint, isolate a
component, replay a transition, compare alternatives, or move between molecular, cellular,
circuit, and system scales.

Research on cell-biology education found that molecular images improved comprehension relative
to keyword-only material and that students often preferred a realistic-schematic style
([Tsui et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23222839/)). A randomized study found
learning benefits from virtual interactive 3D models for complex anatomy relative to
two-dimensional resources
([Patel et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38767329/)).

Those findings support spatial explanation as an affordance. They do not make every depicted
mechanism true.

## Explanation and evidence are different layers

Every load-bearing transition should identify its status:

| Layer | Reader-facing question |
|---|---|
| Observation | What was directly measured, imaged, recorded, or perturbed? |
| Reconstruction | What was estimated from incomplete measurements and under which model? |
| Inference | What causal or functional relation is supported but not directly observed? |
| Simplification | Which geometry, timing, cell diversity, or uncertainty was omitted for clarity? |
| SAN hypothesis | What additional mechanism is proposed and what result would count against it? |
| Speculative bridge | What idea generated a new question but is not evidence for the mechanism? |

The comparison with scientific visualization stops before presentation quality becomes
validation. The SAN extension is that the scene should function as a source-linked argument:
selecting a transition should expose its evidence, boundary, uncertainty, and proposed test.

## One coherent demonstrator

The private 2021 conversation contains a useful design test. A collaborator asks to see one
example, and Micah recognizes that existing software, AR, VR, artwork, and carousel examples are
distributed across several artifacts.

The stronger demonstrator is bounded:

```text
one question
-> one mechanism graph
-> one guided walkthrough
-> one visible evidence boundary
-> one acceptance test
```

A carousel can still organize heterogeneous media, but it is the causal path and evidence
receipts that turn the interface into a scientific explanation.

## Candidate pharmacology stories

The recording proposes psychedelic mechanisms of action as one possible subject. The durable
operation is not a claim about one drug. It is a requirement that any pharmacology story expose
the intermediate layers:

```text
named compound and dose
-> receptor affinity and efficacy
-> intracellular signaling
-> cellular and circuit effects
-> systems-level measurements
-> reported, behavioral, therapeutic, or adverse outcome
```

No animation should jump directly from receptor binding to a mental state. Each transition needs
compound-specific evidence, a time scale, an uncertainty label, and alternative explanations.

## The source-corpus problem

The same 2021 recording explains that the developing book is being assembled from many spoken
notes. Google Recorder provides paired audio and automatic text, making the corpus searchable.
Micah also states the essential limitation: the automatic transcript makes mistakes and must be
corrected.

In plain language, the audio remains the event record. The machine transcript is a fast index
into it:

```text
audio event
-> candidate machine transcript
-> search and triage
-> listen to the relevant interval
-> correct wording and speaker attribution
-> extract a bounded source atom
-> preserve date, custody, and permission
```

Speech-recognition research documents deletions, substitutions, insertions, and domain-term
errors. In one clinical study, human review sharply reduced errors in speech-recognition drafts
([Zhou et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30370424/)). Corpus research finds that
correcting ASR output can reduce effort in some settings, but the advantage depends on the
recording and language conditions
([Gorisch and Schmidt, 2024](https://aclanthology.org/2024.lrec-main.582/)).

## Why correction must not rewrite history

An improved transcript can recover a word that an earlier model replaced. It cannot:

- change when the recording occurred;
- make private speech public;
- resolve speaker attribution without evidence;
- backdate a later term into an earlier source;
- turn a thought experiment into an established finding;
- silently replace the original audio as the custody object.

The source graph therefore keeps separate objects for recording event, audio bytes, machine
transcript, corrected transcript, bounded atom, public Git fixation, later synthesis, and
publication permission.

## Dated SAN genealogy

| Date | Source layer | What it establishes |
|---|---|---|
| June 17, 2021 | private Recorder event | writer-with-3D method, one-demonstrator problem, molecular/cellular causal sequence, 3D carousel, paired audio/text book corpus, and human-correction requirement |
| June 10, 2022 | `a0087z.md`, commit `009c908e` | public book-corpus workflow, acknowledged transcript repair, WebXR book, 3D carousel, and fNIRS-in-XR program |
| June 17, 2022 | `README.md`, commit `93b228e7` | public Google Recorder error warning, source-note/book boundary, planned correction, and 3D interactive institute |
| November 18, 2024 | `b0018y.md`, commit `f1901815` | related public 3D-carousel and WebXR-institute implementation narrative; underlying recording date unresolved |
| 2026 | governed recovery | improved private transcript, source atoms, evidence layers, and public-safe Wiki synthesis |

No exact public `b0265y` Git object is currently known. The similarly numbered `a0265z.md` is a
different source.

## Authorship and privacy

The private collaborator's request helped sharpen the one-demonstrator requirement. Micah's
statements supply the writer-with-3D formulation, molecular and cellular sequence, carousel,
existing AR route, audio corpus, Google Recorder workflow, and need for correction.

That attribution can be preserved without publishing the call. Collaborator identity, complete
speech, company lists, stock discussion, and private business strategy remain governed source
material. Selective disclosure preserves the contribution and the privacy boundary together.

## Acceptance test

An executable scientific story passes only when:

1. the scientific question is explicit;
2. entities and transformations are named;
3. scale and time are shown rather than implied;
4. observation, reconstruction, inference, simplification, and hypothesis are visually distinct;
5. every load-bearing transition has a source or an explicit evidence gap;
6. the SAN extension has a test or falsifier;
7. the artifact does not imply a hidden observer or literal screen where none is proposed;
8. the underlying source-corpus objects retain their dates, attribution, custody, and permission.

## Read next

- [[recorder-transcript-human-source-atom-map-t15|Recorder Transcript Human Source-Atom Map - T15]]
- [[mechanistic-emergence-model-adequacy|Mechanistic Emergence and Model Adequacy]]
- [[perceptual-screen-neural-rendering|Perceptual Screen and Neural Rendering]]
- [[world-body-brain-semantic-coregistration|World, Body, and Brain Semantic Coregistration]]
- [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle Neurofeedback and BCI Genealogy]]

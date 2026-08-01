---
title: "Sparse Sequential Rendering and Multimodal Temporal Binding"
tags: [san, active-vision, sparse-coding, visual-memory, temporal-binding, multimodal, neural-rendering]
aliases: [Sparse Sequential Rendering, Temporal Binding Hierarchy, Sparse Perceptual Update]
summary: "A source-governed SAN route from partial sensory samples through sparse, temporally bound, memory-supported updates to a stable percept, without a literal full-frame display."
status: governed
---

# Sparse Sequential Rendering and Multimodal Temporal Binding

## The problem in plain language

People experience a stable visual world even though the eyes move, fine detail is not equally
available everywhere, attention favors some relations, and information from sight, hearing, touch,
and body state arrives at different times.

SAN proposes that the brain maintains a usable percept through **sparse sequential updates**. Each
sensory event contributes selected differences to a recurrent state. Timing and learned spatial
relations help determine which events belong together. Memory and prediction preserve enough
context for the next update to make sense.

```text
partial samples -> sparse events -> temporal correspondence
  -> recurrent update with memory and prediction -> action -> next sample
```

This is not a claim that the brain scans one literal line at a time or stores a hidden video. The
percept is the distributed system's changing state and what that state enables the system to do.

## Why the 2012 source matters

In the internally dated October 5, 2012 discussion `a0063z.md`, Micah argued that apparent visual
detail may be assembled in waves or pieces, with memory helping create continuity. He then proposed
that timing could bind sparse two-eye or two-ear hierarchies and that recurrent associations among
words, pictures, and sounds could generate higher-level "visual sentences."

The discussion is multi-speaker. Juan Carlos Kuri Pinto supplied the initiating computer-vision
versus computer-graphics argument, and Anand Muglikar supplied the sparse-representation prompt.
The core Micah passages are present in the first verified Git version from June 8, 2022. The
internal 2012 date is a source chronology claim, not independent proof of public custody in 2012.

`a0128z.md` and `a0260z.md` repeat subsets of the same exchange. They improve retrieval but are not
independent evidence.

## The three-frame receiver demo

An earlier source, `a0348z.md`, is internally dated May 13, 2011. It proposes different sensory
elements contributing different temporal-spatial parts, partial patterns recruiting larger learned
patterns, and multiple senses joining one continuously updated state. That is an early distributed-
construction ancestor. The camera/pixel language remains analogical, and the source's first tracked
Git fixation is June 12, 2022.

`a0090z.md`, first Git-fixed on June 10, 2022, proposes splitting one image into three sparse point
sets and presenting them in sequence. While one group fires, other groups listen, predict, or wait.
The answer to "what sees the points?" is the changing receiver state of the network, not a hidden
viewer.

This is an executable thought experiment, not a claim that cortex literally scans one-third of an
image per frame. Compare simultaneous and sequential presentation while varying order, delay,
recurrence, inhibition, and memory. Reconstruction should depend on learned temporal relations and
receiver state, not only total points or mean activity.

## Foveated networking comparison

`a0107z.md` proposes sending sparse behavior updates according to gaze, head direction,
proximity, and need, then reconstructing and rendering the current scene locally. It is a useful
engineering comparison for selective current-perspective updates and memory-supported continuity.
It is not evidence that neural tissue uses the same packets, shards, or interpolation rule.

## What science supports

Research supports sparse sensory codes, limited and attention-dependent scene representation,
active transsaccadic continuity, rhythmic attentional sampling in bounded tasks, timing-sensitive
multisensory integration, and spatial echolocation that can recruit calcarine cortex.

Those results do not establish one global refresh rate, a one-line visual scan, literal conscious
frames, or PWD/NAPOT. SAN's stronger claim is that receiver-relative phase, duration, magnitude,
and routing variables contribute additional causal information to recurrent perceptual updates.

## How to test it

Compare four models on the same eye-tracked multimodal task: full snapshot, feedforward sparse
coding, recurrent sparse updating, and SAN/PWD. Manipulate saccade timing, attention, cross-modal
lag, memory, and prediction. The SAN mechanism earns support only if its proposed variables improve
held-out prediction and selective perturbation beyond standard recurrent, state-space, rate, and
power models.

## Read next

- [[perceptual-screen-neural-rendering|Perceptual Screen and Neural Rendering]]
- [[early-a0333-a0351-obscure-argument-map|Early a0333-a0351 Obscure Argument Map]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[detection-rendering-interlace|Detection-Rendering Interlace]]
- [[memory-prediction-rendering-sequence|Memory Prediction Rendering Sequence]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli and Artificial Perception]]
- [[gh-a0063z|a0063z principal discussion]]
- [[gh-a0128z|a0128z duplicate extract]]
- [[gh-a0260z|a0260z condensed extract]]
- [Olshausen and Field, 1996](https://doi.org/10.1038/381607a0)
- [Rensink, O'Regan, and Clark, 1997](https://doi.org/10.1111/j.1467-9280.1997.tb00427.x)
- [Landau and Fries, 2012](https://doi.org/10.1016/j.cub.2012.03.054)
- [Thaler, Arnott, and Goodale, 2011](https://doi.org/10.1371/journal.pone.0020162)
- [Parise and Ernst, 2016](https://doi.org/10.1038/ncomms11543)

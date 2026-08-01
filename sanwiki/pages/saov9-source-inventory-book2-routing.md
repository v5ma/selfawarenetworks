---
title: "SAOv9 Source Inventory and Book 2 Routing"
tags: [san, saov9, source-inventory, version-reconciliation, book-2]
aliases: ["SAOv9 Prompt Atlas", "SAOv9 Book 2 Route Map"]
summary: "A reconciled 700-prompt source atlas that preserves every SAOv9 topic, assigns all 70 families an editorial destination, and records 50 completed prompt reviews with the remainder visibly open."
status: governed
---

# SAOv9 Source Inventory and Book 2 Routing

SAOv9 is the memory of what the book once intended to investigate. It is not a command to
write 700 equal pages. The archive preserves every prompt; the book uses only what performs
necessary explanatory, evidential, historical, comparative, or experimental work.

The governing question is:

> How can distributed living neural tissue, without an inner observer, construct a continuously updated model of body and world, use it to consider possibilities, and act?

## What the version reconciliation established

- Three readable outline variants contain the same 700 canonical `Cycle` prompt titles.
- Their secondary `C` outline contains 699 prompts and omits `6.1.8` in all three copies.
- Only `1.1.6` and `1.1.8` have substantive secondary-title variation.
- The repository text extraction is a whitespace-damaged derivative of the 67-page PDF;
  under documented header removal and whitespace normalization, the texts match exactly.
- B2-115 gives all 70 families an editorial route. This atlas applies those routes to all
  700 prompts and records prompt-level review only where a separate governed audit exists.

## Exact source objects

| Object | Role | Bytes | SHA-256 |
|---|---|---:|---|
| `repository_markdown`<br>`[private local source path withheld]` | Canonical repository text for prompt wording and Git chronology; retains the full outline plus contextual prose. | 163,232 | `419F4B3CACFAB72ECE93ECA850369A25475CF1BD806101DA0F153E88969E7828` |
| `repository_pdf`<br>`[private local source path withheld]` | Tracked 67-page Google Docs rendering; authoritative for the preserved rendered form, not for easy prompt parsing. | 759,449 | `CFF20E9FB008CE54669872E55DC2FC57E971EAA1BD9A483D5CC194373E0264B4` |
| `repository_pdf_text`<br>`[private local source path withheld]` | Untracked 2026 extraction of the tracked PDF; its text is exactly equivalent to a fresh PDF extraction under the documented header-removal and whitespace normalization. | 145,241 | `CA04E644E4A53BB4A393E1D0C56844BB3E915C92ADB3819220877150461158E0` |
| `downloads_expanded_outline`<br>`[private local source path withheld]` | Complete 700-prompt outline used by B2-098, with an additional condensed outline and introductory material. | 166,537 | `166D6D5109FA12F539A026D00E93F782FE0F3A1EDB28FCC665AE5994FDAF2A5F` |
| `downloads_early_copy`<br>`[private local source path withheld]` | Near-copy preserving the motivating completion note and several contextual lines absent from the repository Markdown. | 163,522 | `59377743DB8A2581EA78C520D93D0B977181DBBD40F25501A2E5431C66A0F436` |

## Book-routing denominator

The counts below are prompt counts inherited from the reviewed 70-family B2-115 route.
They are not page targets.

| Editorial route | Prompts |
|---|---:|
| `appendix` | 60 |
| `book1_bridge` | 80 |
| `book3` | 40 |
| `main_narrative` | 480 |
| `split_and_reframe` | 40 |

## Fourteen-cycle atlas

Each cycle page preserves fifty prompt titles, five family decisions, Book 2 homes,
scope boundaries, and the reviewed SAN concept links currently available.

- [Cycle 1: Nerve Gear, Towards the Ultimate Brain Computer Interface](saov9-cycle-01-nervegear-bci.md)
- [Cycle 2: Holography, Neural Rendering, and 3D Semantic Segmentation](saov9-cycle-02-holography-neural-rendering.md)
- [Cycle 3: Fractals, Evolution & Brain Networks: The Fractal Geometry of Biological Structures](saov9-cycle-03-fractals-evolution.md)
- [Cycle 4: (Computational Units) Temporal, Spatial & Phasic: Memory Prediction Rendering](saov9-cycle-04-temporal-spatial-phasic.md)
- [Cycle 5: (Inner Representations) Rhythms & Waves](saov9-cycle-05-rhythms-waves.md)
- [Cycle 6: Defining Memory, State, Drift, Engrams, and a Virtual Mind](saov9-cycle-06-memory-state-drift.md)
- [Cycle 7: (High level Representations) Functional Connectivity: Coordinating Thoughts, Actions, and Sequences (planning)](saov9-cycle-07-functional-connectivity.md)
- [Cycle 8: (Attention Scaling): From Sensory detection to Consideration with Multi-scale Decision Making.](saov9-cycle-08-attention-scaling.md)
- [Cycle 9: (Walking through a walk thru) The Perception Consideration Action Cycle](saov9-cycle-09-perception-consideration-action.md)
- [Cycle 10: Emotion, Dreams, Spirit, World Views, Distortions](saov9-cycle-10-emotion-dreams.md)
- [Cycle 11: Language Cycle 11 Oscillation in the "other cortex navigation in real and memory space"](saov9-cycle-11-language-social.md)
- [Cycle 12: Next Generation Neural Networks](saov9-cycle-12-artificial-neural-networks.md)
- [Cycle 13: Choice for robots & society](saov9-cycle-13-robot-choice-society.md)
- [Cycle 14: The Consciousness Problem, Next Generation Problem Solving](saov9-cycle-14-consciousness-problem.md)

## Inclusion test

Material belongs in the reader narrative only when it performs at least one indispensable
job: explain a necessary step, provide evidence or a discriminating test, record a
consequential development, test SAN across a scale or failure condition, or distinguish SAN
from a serious alternative. Other material remains discoverable here and can move to an
appendix, Book 1, Book 3, a specialist wiki route, or a recorded future-work queue.

## Current semantic boundary

- Prompt inventory: **700 of 700 present**.
- Family routes: **70 of 70 reviewed**.
- Current Book 2 architecture: **31 chapters**.
- Prompts with at least one reviewed SAN concept route: **300**.
- Prompt-level semantic reviews complete: **50**.
- Prompt-level semantic reviews still pending: **650**.

The pending number is deliberate. A family-level destination prevents disappearance; it does
not prove that every individual prompt is correctly phrased, independently sourced, or
needed in the main narrative.

## Machine-readable artifacts

- `wiki/san/knowledge-graph/generated/saov9-version-reconciliation.json`
- `wiki/san/knowledge-graph/generated/saov9-prompt-routing.csv`
- `wiki/san/knowledge-graph/generated/saov9-version-reconciliation-validation.json`
- `wiki/san/knowledge-graph/reviews/saov9-version-reconciliation-20260715.md`
- `wiki/san/knowledge-graph/reviews/memory-state-drift-virtual-mind-review-20260715.md`
- `wiki/san/knowledge-graph/reviews/attention-hallucination-self-model-dissolution-review-20260716.md`
- `wiki/san/knowledge-graph/reviews/inhibitory-routing-signal-processing-grid-graph-review-20260716.md`
- `wiki/san/knowledge-graph/reviews/neural-path-selection-interneurons-choice-review-20260716.md`
- `wiki/san/knowledge-graph/reviews/feedback-strange-loops-self-model-review-20260716.md`

## Read next

- [SAN Knowledge Graph](san-knowledge-graph.md)
- [SAN Golden Corpus Map](san-golden-corpus-map.md)
- [Memory, Engrams, Representational Drift, and the Virtual Mind](memory-state-drift-virtual-mind.md)
- [Attentional Selection, Hallucination, and Self-Model Dissolution](attention-hallucination-self-model-dissolution.md)
- [Inhibitory Routing, Neural Signal Processing, and Grid/Graph Models](inhibitory-routing-signal-processing-grid-graph.md)
- [Neural Path Selection, Interneurons, and Choice Across Scales](neural-path-selection-interneurons-choice.md)
- [Feedback Loops, Strange Loops, and the Self-Model](feedback-strange-loops-self-model.md)
- [Perceptron, Deep Learning, and Metatron](perceptron-deep-learning-metatron.md)

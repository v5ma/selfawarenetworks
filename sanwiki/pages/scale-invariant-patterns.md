---
title: "Nested Invariance Across Neural Scales"
tags: [san, invariance, equivariance, scale, representation, phase, napot]
aliases: [Scale Invariant Patterns, Nested Invariant Representations, NAPOT Scale]
summary: "A source-governed account of SAN's cross-scale representation proposal, with invariance, equivariance, relative phase, and identical-code claims kept separate."
status: governed
---

# Nested Invariance Across Neural Scales

## The problem in plain language

You can recognize a cup when it is near or far, left or right, upright or tilted. You can also
imagine the cup at a different size or orientation. The brain must preserve what the object is
while retaining location, orientation, distance, and movement when those properties matter for
action.

That requires at least two operations:

- **invariance:** identity remains stable under a declared transformation;
- **equivariance:** the representation changes in a predictable way that preserves the
  transformation.

SAN adds a cross-scale question: can related structure be recovered between cellular,
local-population, and larger-network representations without assuming that one identical token is
physically copied at every scale?

## A measurable version

For input `x`, transformation `g`, scale `s`, and representation `z_s`:

```text
invariance:  D(z_s(gx), z_s(x)) < epsilon
equivariance: z_s(gx) ~= rho_s(g) z_s(x)
cross-scale:  A_(s->r) z_s(x) ~= z_r(x)
```

Identity may be approximately invariant while location or orientation remains equivariant. A
cross-scale mapping does not prove identical physical codes.

## What the early SAN sources add

The June 2022 source cluster proposes:

- attention as a possible route from a selected small-scale pattern to meso- and macro-scale
  representation;
- "invariant representations inside invariant representations";
- invariance across distance, location, time, and phase;
- resolution-invariant function mapping as an engineering analogy;
- graph-network and synapse-to-oscillator projection as candidate architecture.

The November 2022 phrase "from synapse to whole brain" compresses that cluster. It does not prove
that the same physical code exists at every level.

`a0094z.md`, first Git-fixed on June 10, 2022, adds neural fan-out and different downstream
perspectives. Its photocopier analogy should not be read literally: recruiting more cells does not
automatically enlarge information or preserve an identical pattern. The testable question is
whether receiver-specific transformations preserve a declared relational feature while redundancy
improves decoding, generalization, or recovery after perturbation.

## The phase correction

If all phase changes were irrelevant, PWD could not use relative phase differences as information.
A consistent version says that a common shift of the phase reference may leave identity unchanged,
while pairwise or receiver-relative phase relationships can remain informative. This must be
tested against rate, power, timing, anatomy, and connectivity models.

## What current research supports

- Some object-selective neurons show bounded tolerance to size, position, viewpoint, or stimulus
  form.
- Tolerance is partial and heterogeneous; many responses remain transformation-sensitive.
- Stable recognition and action need both identity preservation and transformation information.
- Hierarchical and recurrent networks represent information at multiple scales.

These results make the SAN question legitimate. They do not establish one token from synapse to
whole brain, a central hologram, or phase-based consciousness.

## Source stages

| Source | Git stage | Contribution |
|---|---:|---|
| `a0027z.md` | 2022-06-08 initial upload | Attention, multi-scale amplification, nested invariant representations |
| `a0142z.md` | 2022-06-08 initial upload | Distance, location, temporal, and phase invariance |
| `a0172z.md` | 2022-06-08 initial upload | Resolution-invariant function-mapping analogy |
| `c0002x.md` | 2022-06-08 initial upload | Graph-network, multi-scale, and synapse-to-oscillator proposal |
| `a0071z.md` | first current-path Git 2022 | Tree, hand, dendrite, retina, and cortical branching analogy; visual prompt only, not proof of functional isomorphism |
| `a0094z.md` | 2022-06-10 first Git fixation | Fan-out, receiver-specific perspectives, and a proposed robustness/error-correction role; not literal photocopying |
| `c0004x.md` | 2022-11-28 addition | Compact NAPOT.Scale "synapse to whole brain" phrase |

The dates are repository fixation dates, not scientific validation.

## Decisive test

Apply controlled scale, position, rotation, viewpoint, and temporal transformations to learned
objects. Record at declared scales, compare invariant and equivariant decoders, test cross-scale
generalization, and perturb one feedback route. Require a selective predicted loss of identity,
transformation estimate, imagery, or action rather than a generic performance decline.

## Research routes

- [Ito et al., 1995](https://doi.org/10.1152/jn.1995.73.1.218)
- [Quian Quiroga et al., 2005](https://doi.org/10.1038/nature03687)
- [Li et al., 2021](https://openreview.net/forum?id=c8P9NQVtmnO)

## Candidate paper

**Nested Invariance and Relative Phase: A Cross-Scale Test of SAN Representations** is an
unnumbered candidate. It needs a nonduplication audit against NAPOT, PWD, Neural Tuning, Qualia, 3D
Semantic Segmentation, and Artificial Neurology.

## Read next

- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[perceptual-screen-neural-rendering|Perceptual Screen and Neural Rendering]]
- [[3d-semantic-segmentation|3D Semantic Segmentation]]
- [[neural-tuning|Neural Tuning]]

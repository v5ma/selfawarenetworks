---
title: "The Residual Is Not Automatically Noise: Single-Trial Neural Information"
tags: [san, eeg, single-trial, neural-variability, phase, tonic, phasic, pwd]
aliases: [Single-Trial Residual Information, Structured Neural Variability, Do Not Average Away the Signal]
summary: "A source-governed SAN framework for testing whether neural activity hidden by trial averaging predicts or causes perception, choice, memory, or action."
status: governed
---

# The Residual Is Not Automatically Noise: Single-Trial Neural Information

## The problem in plain language

When researchers repeat the same experiment, they often average the recordings. This is useful for
finding a response that appears at the same time across trials. It can also cancel activity whose
timing or phase varies from one trial to the next.

That canceled activity is not one thing. Some is measurement artifact. Some is biological noise.
Some reflects the brain's ongoing state and can predict whether a person detects a stimulus, how
quickly they respond, or which transient neural burst occurred. The correct rule is therefore:

> Do not call a residual a message or noise until the relevant alternatives have been tested.

## What SAN adds

`a0037z.md` made an important self-correction in June 2022. It first considered assigning tonic and
phasic roles to fixed frequency bands, then rejected that simplification: a repeated pattern at
any frequency can provide the current tonic context, while a meaningful phase difference can be a
phasic departure from it.

The June 2022 `a0048z.md` lineage adds a methodological concern. Its initial stage says that
heterogeneous neural contributions had been treated as noise. The June 12 version explicitly asks
whether averaging EEG noise could erase small theta/beta phase differences related to an
expectation pattern.

This is a candidate research program, not evidence that every residual contains thought.

## A testable version

For each trial:

```text
observed activity = event-locked average + trial-specific residual
```

The residual is informative only if its declared features improve prediction in held-out data
after controlling stimulus, power, movement, eye and muscle artifacts, arousal, trial history, and
other relevant state variables.

```text
improvement = score(controls + residual features) - score(controls)
```

Residual features may include circular phase, burst timing, waveform, cross-site coupling, and
spatial gradients. Prediction is not causation. A causal test must perturb the candidate phase
relation while controlling energy and sensory content, then observe the predicted downstream or
behavioral change.

## What current research supports

- Ongoing cortical state can account for part of trial-to-trial response variation.
- Non-phase-locked induced activity can disappear from an event-related average.
- Prestimulus phase can predict perception and reaction time in bounded tasks.
- Stimuli often reduce neural variability.
- Single-trial analysis can reveal transient bursts that appear sustained after averaging.
- Some neural variation is genuine noise, and some recorded variation is artifact.

These results make SAN's question legitimate. They do not establish that theta/beta residuals
encode expectation, that scalp EEG contains complete semantic content, or that residual structure
proves PWD, NAPOT, Neural Rendering, qualia, or consciousness.

## Source stages

| Source stage | Date | What it supports |
|---|---:|---|
| `a0037z.md`, commit `226714e9` | 2022-06-10 | Relative tonic/phasic roles; explicit rejection of permanent band assignments |
| predecessor `a0607z...txt`, commit `5360f641` | 2022-06-08 | Heterogeneous neural contributions treated as noise; no explicit averaging sentence |
| `a0048z.md`, commit `7c8d8d5b` | 2022-06-12 | Explicit averaging concern and small theta/beta phase-difference hypothesis |

The dates are repository fixation dates. They do not independently prove the scientific claim.

## Candidate paper

**The Residual Is the Signal? A Preregistered Test of Phase-Resolved Neural Variability** is an
unnumbered candidate. Its value would be a nested, preregistered analysis and phase-perturbation
protocol. It still needs a nonduplication audit against PWD, Neural Tuning, APME, NAPOT, BCI, and
machine-consciousness-measurement manuscripts.

## Research routes

- [Arieli et al., 1996](https://doi.org/10.1126/science.273.5283.1868)
- [Tallon-Baudry et al., 1998](https://doi.org/10.1523/JNEUROSCI.18-11-04244.1998)
- [Makeig et al., 2002](https://doi.org/10.1126/science.1066168)
- [Busch et al., 2009](https://doi.org/10.1523/JNEUROSCI.0113-09.2009)
- [Mathewson et al., 2009](https://doi.org/10.1523/JNEUROSCI.3963-08.2009)
- [Churchland et al., 2010](https://doi.org/10.1038/nn.2501)
- [London et al., 2010](https://doi.org/10.1038/nature09086)
- [Oppermann et al., 2024](https://doi.org/10.1016/j.clinph.2024.01.005)

## Read next

- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[tonic-context-rare-deviation-tomographic-language|Tonic Context and Rare Deviations]]
- [[continuous-dynamics-discrete-neural-information|Continuous Dynamics and Discrete Neural Information]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]

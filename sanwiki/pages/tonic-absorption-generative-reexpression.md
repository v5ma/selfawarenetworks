---
title: "Tonic Absorption and Generative Re-expression"
tags: [san, tonic-phasic, pwd, memory, replay, plasticity, diffusion-analogy, neural-rendering]
aliases: [Tonic Absorption, Neural Noising and Denoising, Phasic Dissipation and Re-expression]
summary: "SAN's two-direction proposal: transient phase-wave differences are progressively integrated into an evolving tonic network state, while learned recurrent circuitry can later reconstruct or re-express a distributed pattern. The diffusion-model comparison is an analogy and testable formal hypothesis, not established brain anatomy."
status: governed
---

# Tonic Absorption and Generative Re-expression

**Tonic absorption and generative re-expression** is SAN's proposal that neural rendering has two
linked directions:

```text
incoming or internally generated difference
-> recurrent transformation across receivers
-> fading of the event as a separately identifiable transient
-> persistence through changed network state or plasticity

partial cue, internal state, or replay event
-> recruitment of learned recurrent routes
-> constructive re-expression of a distributed pattern
-> perception, memory, imagination, decision, or action
```

The first direction is not simple erasure. The second is not literal playback. Together they ask
how a brief neural difference can be integrated into an ongoing system, leave consequences at
several timescales, and later help the same system reconstruct a usable pattern.

The source's central timing intuition is that fading occurs through recurrent processing rather
than at one instantaneous boundary. Each pass gives downstream receivers another opportunity to
change their fast state; under the required induction conditions, some passes may also contribute
to short- or long-term plasticity. That is the biologically testable form of the claim that a PWD
has time to affect tissue while the tonic system gradually incorporates its consequences.

## What the 2022 source was trying to say

The source used *noising*, *dissipation*, and *absorption* for a transient phasic difference that
becomes progressively less separable from the ongoing tonic state as it passes through recurrent
neural transformations. It used *denoising* for the complementary possibility that learned
connectivity, a partial cue, and replay can construct a structured pattern from a less specific
starting state.

A medically bounded reading is:

| Source term | Source-faithful biological interpretation | What it must not imply |
|---|---|---|
| Tonic canvas | The current membrane, synaptic, cellular, population, neuromodulatory, and body-state context against which a change has consequences. | One universal EEG frequency, one literal screen, or a field that is independent of cells and circuits. |
| Phasic PWD | A receiver-relative transient involving some combination of timing, phase, rate, waveform, duration, release, inhibition, and network position. | One universal high-frequency spike code or a substance poured into a low-frequency wave. |
| Absorption or dissipation | Recurrent mixing, transformation, relaxation, adaptation, and loss of the event's separate decodability while some consequences persist in state or learned structure. | Conservation-law proof that high frequency turns into low frequency, or that EEG power directly measures information content. |
| Re-expression | Cue- and state-dependent reinstatement or construction by learned distributed circuitry. | A complete sensory movie stored in one neuron, exact replay, or a hidden viewer watching an image. |

This interpretation retains the proposal's operation without preserving every compressed physical
explanation in the historical note.

## Three biological timescales

The word *absorption* joins mechanisms that should be measured separately.

1. **Fast state change:** membrane voltage, conductance, inhibition, adaptation, calcium, and
   short-term synaptic dynamics alter how the next event will be received. A model of synaptic
   working memory, for example, showed how calcium-dependent facilitation could retain a latent
   trace that later spiking reads out ([Mongillo, Barak, and Tsodyks, 2008](https://pubmed.ncbi.nlm.nih.gov/18339943/)).
2. **Intermediate recurrent consequence:** activity can be refreshed, transformed, routed,
   suppressed, or reinstated across recurrent populations. Human simultaneous EEG-fMRI work has
   linked transient replay to distributed activation and changing hippocampal connectivity
   ([Huang et al., 2024](https://www.nature.com/articles/s41467-024-51582-5)).
3. **Longer-lived plasticity:** repeated or behaviorally relevant activity may alter synaptic
   efficacy, dendritic integration, excitability, or circuit routing. Oscillatory phase can affect
   the direction of plasticity in a defined preparation
   ([Wespatat, Tennigkeit, and Singer, 2004](https://pubmed.ncbi.nlm.nih.gov/15483125/)), and
   [[bistable-synaptic-plasticity|behavioral-timescale synaptic plasticity]] can associate inputs
   across seconds-long windows ([Bittner et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28883072/)).

These findings establish possible bridges, not the complete SAN chain. A particular PWD does not
automatically cause short-term plasticity, LTP, LTD, recall, or conscious experience. Each outcome
requires its own measured induction conditions and endpoint.

## Re-expression is constructive

[[sharp-wave-ripples|Sharp-wave ripples]] and replay provide one important but non-universal route.
Replay can reinstate past sequences, represent possible future paths, reorganize experience, and
coordinate distributed activity. Synaptic plasticity in recurrent CA3 circuitry has also been
causally connected to subsequent ripple physiology and memory consolidation
([El Oussini et al., 2023](https://www.nature.com/articles/s41467-023-42969-x)).

SAN's stronger proposal is that replay is one member of a broader family of constructive
re-expression events:

```text
learned substrate + partial cue + current state
-> selective recruitment and competition
-> recurrent completion
-> receiver-specific distributed re-expression
-> changed internal, physiological, or motor consequence
```

This connects [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]],
[[pattern-completion|Pattern Completion]], and
[[oscillating-group-completion|Oscillating-Group Completion and Re-expression]]. It does not make
every reconstruction hippocampal, every replay a sharp-wave ripple, or every re-expressed pattern
conscious.

## What the diffusion comparison adds

Image diffusion models learn a reverse process that reconstructs structured samples through a
sequence of denoising operations. Latent diffusion applies that process in a learned compressed
space ([Rombach et al., 2022](https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html)).

The analogy is useful because it forces SAN to specify two mappings:

| Diffusion-model operation | Candidate SAN analogue | Scientific boundary |
|---|---|---|
| Forward noising progressively removes sample-specific structure. | A transient difference becomes less separately decodable as recurrent neural dynamics transform and distribute it. | Brain activity is not known to implement the diffusion model's prescribed Gaussian forward process. |
| Learned reverse denoising reconstructs structure from a noisy latent state. | A cue and learned recurrent substrate construct or reinstate a distributed neural pattern. | Replay, completion, and recall are not evidence that the brain computes reverse diffusion. |
| Repeated training changes model parameters. | Experience changes synaptic, dendritic, cellular, and circuit readiness. | Machine-learning weights are not a complete model of biological plasticity. |
| A generated image is an output inspected by a user. | The reconstructed neural state changes the same embodied network that perceives and acts. | SAN rejects a separate inner viewer. |

The 2024 paper *A generative model of memory construction and consolidation* provides a closer
formal comparator than image generation alone. It models hippocampal replay training generative
networks that later reconstruct sensory experience from latent variables and partial inputs
([Spens and Burgess, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10963272/)). That model does not
establish SAN's tonic/PWD mechanism, but it independently demonstrates how replay, consolidation,
latent structure, and constructive recall can be joined in a testable computational architecture.

## A minimal dynamical statement

Let `x_t` denote the receiver network's ongoing state, `u_t` a transient input or PWD candidate,
and `W_t` its learned biological constraints:

```text
x_(t+1) = F(x_t, u_t; W_t)                                      [1]
```

```text
W_(t+1) = W_t + P(x_t, u_t, m_t)                                [2]
```

Here `F` is recurrent state evolution, `P` is a declared plasticity process, and `m_t` may include
neuromodulatory, behavioral, and body-state variables. *Absorption* means that the original event
becomes harder to decode as an independent transient while its effect may remain in `x`, `W`, or
both.

For a later partial cue `c_t`, re-expression is:

```text
s_hat_(t+k) = G(c_t, x_t; W_t)                                  [3]
```

Here `s_hat` is a reconstructed neural relation with a declared sensory, mnemonic,
physiological, or motor endpoint. Equations 1-3 do not assume Gaussian noise, reverse diffusion, a
single frequency band, or exact replay. Those are empirical alternatives to test.

## Decisive experiment

Record a distributed sensory-memory circuit while presenting a controlled stimulus, varying the
delay and partial cue, and measuring behavior or report. Compare five nested models:

1. firing rate and connectivity;
2. rate plus current population state;
3. rate, state, and standard replay or completion measures;
4. a conventional latent generative model; and
5. the SAN model with typed receiver-relative PWD variables and separate fast-state, recurrent,
   and plasticity terms.

The SAN extension gains support only if it improves held-out prediction of:

- how quickly the original event loses separate decodability;
- which state or synaptic consequences persist;
- which pattern is later reinstated from a partial cue;
- which receiving populations are recruited; and
- what perception, memory, decision, or action follows.

It should be rejected in this form if simpler state, replay, or generative models predict those
outcomes equally well; if the proposed PWD variables add no reproducible information; or if
perturbing the predicted recurrent and plasticity routes does not alter re-expression.

## Source chronology

- **September 18, 2022, author-history stage:** the `a0310zNAPOT5.md` Git history adds the forward
  *Diffusion Networks* analogy: PWDs are progressively distributed or absorbed while the network
  learns from their passage. This is a development timestamp, not by itself proof of public
  availability on that day.
- **September 19, 2022, author-history stage:** the next commit explicitly names the complementary
  process *denoising*.
- **November 28, 2022, public fixation used here:**
  [[gh-a0310z|a0310z]] contains both the
  [forward noising/absorption proposal](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L271-L292)
  and the reverse constructive proposal, plus the tonic-canvas/phasic-ink formulation at
  [lines 495-499](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L495-L499).
- **January 22, 2024, later comparison:** the owner/AI dialogue in
  [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]] compares `a0007z`, `a0306z`, `a0310z`, and `a0319z`
  with Spens and Burgess's generative-memory model. This later comparison clarifies the analogy; it
  is not backdated into the 2022 source.

The raw transcript [[gh-b0010y|b0010y]] is an audio-derived ancestor of `a0310z`. Its current
ChatGPT summaries are maintenance layers, not Micah-authored 2022 claims. The source hierarchy is
therefore audio/transcript -> Micah's rewritten `a0310z` -> later owner/AI comparison -> this
medically bounded Encyclopedia synthesis.

## Read next

- [[tonic-oscillation|Tonic Oscillation]]
- [[neural-array-projection|Neural Array Projection]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[tonic-oscillation-canvas|Tonic Oscillation as Canvas]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[synaptic-plasticity|Synaptic Plasticity: Timing, Oscillation, and SAN's Coherence-Dispersion Hypothesis]]
- [[sharp-wave-ripples|Sharp-Wave Ripples, Memory Scaling, and the SAN Interpretation]]
- [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]]
- [[oscillating-group-completion|Oscillating-Group Completion and Re-expression]]
- [[napot-overview|NAPOT Overview]]
- [[neural-rendering|Neural Rendering]]
- [[gh-a0310z|Primary 2022 SAN source record]]

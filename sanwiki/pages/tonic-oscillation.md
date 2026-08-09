---
title: "Tonic Oscillation"
tags: [san, tonic-phasic, oscillation, ongoing-state, field-cell, pwd, neural-rendering]
aliases: [Tonic Neural Context, Tonic Action Field]
summary: "A source-faithful account of SAN's tonic role: a relatively maintained cellular, circuit, field, and brain-body context against which receiver-relative differences become consequential. Tonic is defined over a declared receiver, variable, and time window, not by one universal frequency band."
status: governed
---

# Tonic Oscillation

> **Image status:** The earlier figure remains preserved in the failed-medical-review archive and
> excluded from public use. It incorrectly suggested one stable low-frequency carrier shared across
> cortical columns. A source-bounded replacement prompt is maintained for later medically reviewed
> generation.

In SAN, a **tonic oscillation** is a relatively repeated or maintained neural relation that supplies
context for a declared receiver over a declared time window. A departure becomes meaningful through
the way it changes that receiver and what the receiving system does next.

The term does **not** mean that every neuron fires continuously, that all cells share one phase, or
that delta, theta, alpha, beta, or gamma always has one fixed tonic or phasic role. The June 2022
source explicitly corrected that early band assignment: consistent repetition in *any* frequency
range can be tonic relative to a particular window, while a difference can be phasic relative to
that same context.

## Three meanings that must remain separate

| Meaning | Biological use | Boundary |
|---|---|---|
| Tonic firing mode | Sustained single-spike firing in a named cell class and state, contrasted in some preparations with bursting. | A cellular firing mode is not a brain-wide canvas or a consciousness state. |
| Ongoing circuit or population state | Relatively maintained membrane, synaptic, inhibitory, neuromodulatory, population, oscillatory, and body-state conditions. | Ongoing state need not be periodic, globally coherent, or represented by one EEG band. |
| SAN tonic role | The receiver-relative reference context against which a differentiated event has consequences. | This is a modeling role and SAN interpretation, not a new anatomical compartment. |

In thalamic reticular neurons, for example, tonic and burst firing are state-dependent physiological
modes ([Hartings, Temereanca, and Simons, 2003](https://pubmed.ncbi.nlm.nih.gov/12832551/)). That
specific use supplies one biological example; SAN generalizes the *relative context-and-change
relationship* across declared cellular, circuit, and distributed scales.

## What the original source was trying to say

The source progression contains four distinct steps:

1. **Repeated context versus departure.** In June 2022, `a0037z` rejects a fixed mapping from slow
   bands to tonic and fast bands to phasic. Repetition establishes the local reference; inhibition,
   phase change, or a rarer event supplies a candidate difference.
2. **Common pattern versus rare information.** `b0131y` compares repeated tones with a rare change
   and proposes that many neural areas can transform related patterns differently while a
   distributed system maintains context.
3. **Active canvas rather than passive background.** The August 2022 Whitepaper drafts describe an
   ongoing field-cell state that is altered by phasic events and carries their consequences into
   prediction, memory, perception, and action. The observer is the participating network, not a
   separate audience.
4. **Integration and later re-expression.** The November 2022 NAPOT sources add the proposal that a
   transient difference becomes progressively integrated into the ongoing state while learned
   circuitry can later constructively re-express a related pattern. See
   [[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]].

This is stronger than using *canvas* as decoration. SAN proposes an operational role: the existing
state changes how an event is received, the event alters the same coupled cellular and field state,
and those changes influence subsequent routing and embodied behavior.

## Biological footholds

Established findings support parts of that operation:

- Ongoing cortical activity can help predict variation in a subsequent evoked response
  ([Arieli et al., 1996](https://doi.org/10.1126/science.273.5283.1868)).
- Thalamic spike timing relative to cortical slow activity depends on nucleus, wave frequency, and
  the current cortical pattern
  ([Slezia et al., 2011](https://pubmed.ncbi.nlm.nih.gov/21228169/)).
- Selectively disturbing theta timing during encoding can impair later memory without implying that
  theta is a universal memory or consciousness carrier
  ([Quirk et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34608335/)).
- Weak electric fields within a physiological range changed and entrained activity in an active
  neocortical slice preparation
  ([Frohlich and McCormick, 2010](https://pubmed.ncbi.nlm.nih.gov/20624597/)).
- Subthreshold extracellular fields changed membrane potential and spike timing in rat cortical
  slice experiments
  ([Anastassiou et al., 2011](https://www.nature.com/articles/nn.2727)).

These findings establish state dependence, timing dependence, and bounded field feedback. They do
not establish one global tonic oscillator, show that an extracellular field contains a complete
percept, or prove SAN's consciousness interpretation.

## The field-cell reading

The medically defensible SAN field claim is neither `fields do nothing` nor `one field is the mind`.
Neural membranes, ionic currents, synapses, extracellular media, glia, vasculature, and body state
form one interacting biological system. Cells generate spatially structured extracellular electric
activity; under demonstrated local conditions, fields can feed back on cells. Mechanical,
metabolic, thermal, and hemodynamic changes can also covary with and constrain neural state, but
each requires its own measurement and causal test.

SAN calls this evolving coupled condition the **tonic action field** when it serves as the context
against which a change is registered. The open hypothesis is that distributed observation is the
system's own alteration and use of these differences across recurrent sensory, memory, autonomic,
selection, and motor routes. There is no inner screen and no localized viewer.

## A receiver-relative formalization

Let `z_R(t)` be the measured state of receiver `R` and let `W` be the declared reference window.

```text
T_R(W) = B_R({z_R(t) : t in W})                                  [1]
```

`B_R` is an explicit baseline operator. It may estimate a mean, phase distribution, state-space
region, recurrent pattern, or another preparation-appropriate reference.

```text
Delta_R(t) = D_R(z_R(t), T_R(W))                                  [2]
```

`D_R` is a declared difference measure. Circular phase, firing rate, waveform, release, inhibition,
and multidimensional population state require different measures; ordinary subtraction is not
automatically valid.

```text
z_R(t + dt) = F_R(z_R(t), Delta_R(t), u_R(t); W_R)                [3]
```

The consequence depends on receiver state, other input `u_R`, and learned biological constraints
`W_R`. This is the bounded bridge from tonic context to a candidate
[[phase-wave-differentials|phase-wave differential]].

## Scale ladder

| Scale | Candidate tonic context | Candidate departure | Required consequence |
|---|---|---|---|
| Micro | Membrane voltage, conductance, adaptation, receptor state, intracellular calcium, or repeated firing mode | Synaptic event, inhibition, dendritic spike, burst, waveform change, or release difference | A measured change in the named compartment, terminal, or postsynaptic receiver |
| Meso | Local recurrent state, inhibitory balance, gain, oscillatory relation, or extracellular field pattern | Ensemble transition, phase reset, traveling-wave passage, or routed population update | Changed recruitment, decodability, routing, or local behavior of the circuit |
| Macro | Distributed brain-body working state measured across declared systems | Sensory evidence, prediction mismatch, memory reinstatement, action consequence, or state transition | Changed report, choice, autonomic state, sampling, or action with a specified route |

The same relationship may recur across scales. That does not make one neuron a complete tomographic
renderer or make a population statistic a microscopic mechanism.

## Decisive experiment

Record a named receiver population, its inputs, local extracellular field, and behavioral output
across repeated trials. Estimate the tonic reference from pre-event data, then compare models that
use:

1. stimulus and firing rate alone;
2. stimulus plus recent membrane or population state;
3. state plus oscillatory phase and local field;
4. the full receiver-relative SAN event description; and
5. matched movement, arousal, waveform, and aperiodic controls.

Support for the SAN extension requires better held-out prediction of receiver change and later
behavior, plus selective perturbation of the predicted route. The proposal fails in this form if
the tonic reference is not reproducible, if simpler state models perform equally well, if field
variables add no causal or predictive value, or if the proposed difference does not alter any named
receiver or consequence.

## Source chronology

- **June 10, 2022:** [[gh-a0037z|a0037z]] publicly fixes the key self-correction: any repeated
  frequency may serve a tonic role, so tonic/phasic cannot be assigned permanently to EEG bands
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/226714e92e968718db74ea6299268e357952d21d/a0037z.md#L1-L17)).
- **June 21, 2022:** [[gh-b0131y|b0131y]] adds the repeated-context/rare-deviation information
  example and a multiscale tomographic interpretation
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/5ba0a4a6e4480640ef09683bb0805d0342db790b/b0131y.md#L1-L84)).
- **August 24, 2022:** [[gh-whitepaperdraft2|whitepaperdraft2]] joins tonic canvas, phasic change,
  distributed observation, and action. Its fixed vesicle alphabet and universal circuit language
  remain historical hypotheses, not accepted physiology
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/whitepaperdraft2.md#L186-L194)).
- **November 28, 2022:** [[gh-a0310z|a0310z]] and [[gh-a0325znapot6|a0325zNAPOT6]] publicly fix the
  later absorption, persistence, dominance, and constructive re-expression synthesis. Those later
  terms are not backdated into the June sources.

## Read next

- [[tonic-phasic-canvas|Tonic and Phasic Roles: Canvas and Ink]]
- [[tonic-oscillation-canvas|Tonic Oscillation as Canvas]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]]
- [[field-cell-self-bioelectric-information-entity|The Field-Cell Self]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[observer-mechanism|Observer Mechanism]]
- [[screen-metaphor-no-inner-viewer|Distributed Observer and the Screen Metaphor]]

# Phase-Wave Differential Calculus

**Phase-Wave Differential Calculus** is an optional SAN formalization connecting receiver-relative neural departures, variability, Neural Tuning, and successive nonlinear approximation; it is not the definition or architectural source of PWD, which is core SAN architecture. It is not an established calculus performed symbolically by neurons.

> [!important] PWD is core; this calculus is optional
> PWD is core SAN architecture. This page proposes one calculational formalization of typed,
> receiver-relative PWD relations; equation order and model-comparison order do not make PWD a
> later stage, an optional NAPOT component, or a secondary concept. NAPOT uses PWD throughout but
> does not contain, define, or outrank it.

The candidate operation is:

```text
expected tonic state
-> bounded multidimensional departure
-> physically transmitted event
-> receiver-specific consequence
-> tuning or routing update
-> improved or altered state approximation
```

The arrows are analytical bookkeeping for this candidate formalization, not an architectural rank
order or a claim that every biological event must pass through six discrete serial stages.

This formulation is broader than phase coding only if the additional variables and receiver consequences provide causal or held-out predictive value.

## Historical source

The principal donor is the public September 6, 2024 composite dialogue
[`02san.md`](https://github.com/v5ma/selfawarenetworks/blob/64f018d2d93b7de6718058c4724c43b40e5dd4b7/02san.md).
In its Micah-labeled turns, PWD includes an unexpected spike, burst, inhibition, or
transmitted-quantity departure from a tonic group relation. Micah connects event duration and
amplitude to magnitude, compares the departure with a physical derivative or loss-like term,
treats bounded signaling events as discrete within a coarse-grained continuing process, and joins
PWD to Neural Tuning and changing functional routes.

The donor is a mixed working dialogue. Its speaker labels matter: assistant-generated
gradient-descent, predictive-coding, and biological-validation expansions are not Micah-authored
claims and are not evidence for the proposal. The source establishes SAN genealogy, not independent
biological validation.

Three public 2022 documents establish earlier parts of the calculus route:

- [`a0258z.md`, July 5](https://github.com/v5ma/selfawarenetworks/blob/71bbb1aa7cb672d15fbc6e3abf3487fefe4dc8b8/a0258z.md), which compares ordered excitatory and inhibitory phase changes with a Taylor-like approximation;
- [`a0149z.md`, July 7](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md), which joins phasic, tonic, and inhibited events to receiving arrays, coincidence, and changing phase trajectories; and
- [`a0238z.md`, July 11](https://github.com/v5ma/selfawarenetworks/blob/dc879b63b6f99778ce0c90c616c9a968d3624304/a0238z.md), which places pattern detection at receiving dendrites and the active observer across a distributed system.

Their bounded modern interpretation preserves ordered transformation, excitation and inhibition,
receiver dependence, and distributed rendering while rejecting a universal cortical-column
circuit, a complete object inside one event, or a localized viewer. The donor examples are not
exhaustive: current SAN uses PWD for typed, receiver-relative departures that may involve
excitation, inhibition, a missing expected event, delay, or interactions. PWD is not arithmetic
excitation minus inhibition.

## Architectural rank and evidence status

| Question | Status |
|---|---|
| What is core SAN architecture? | PWD: a typed, receiver-relative departure from a declared tonic or reference pattern. |
| What is optional? | This page's feature vector, Taylor basis, loss-like interpretation, and update equations are candidate formalisms for some PWD-bearing relations. |
| What does established science support? | Measurable timing, phase, variability, nonlinear history dependence, and receiver input-output transformations in bounded preparations. |
| What remains an empirical SAN burden? | Showing that the complete typed PWD representation adds reproducible predictive and causal value beyond capacity-matched alternatives. |

Architectural rank and empirical support are different axes. A pending incremental test of this
calculus cannot demote PWD within SAN, and support for one equation cannot make that equation the
definition of PWD.

## One candidate operational record

For event `i` at receiver `r`, a candidate feature vector is:

```text
p_(r,i) = [delta_phi, delta_f, delta_A, delta_tau,
           delta_q, delta_V, delta_x]_(r,i)                      [1]
```

The terms represent one non-exhaustive measurement proposal for declared differences in phase, frequency or event rate, amplitude, duration, transmitted quantity, variability, and spatial or network state. They are not PWD's definition and are not interchangeable:

- phase is circular and requires a reference;
- frequency depends on an estimator and time window;
- amplitude depends on the measured signal;
- transmitted quantity must be measured at a specified biological route;
- position may mean anatomy, recording location, population state, or graph relation; and
- variability requires a statistic appropriate to the variable.

A measured vector becomes a candidate token only when a named receiver preserves or transforms the distinction and selective perturbation changes the predicted consequence.

## Coefficient of variation

For positive inter-event intervals:

```text
CV_ISI = standard_deviation(delta_t) / mean(delta_t)             [2]
```

CV is one useful descriptor, not a complete PWD measure. It is unstable when the mean approaches zero and is not appropriate for circular phase. A PWD study should compare global interval CV, local `CV2`, local variation `LV`, count Fano factor, circular variance, and covariance across the full event vector.

Shinomoto, Shima, and Tanji found that local interspike-interval variation distinguished firing-pattern classes across cortical neurons in awake macaques ([2003](https://doi.org/10.1162/089976603322518759)). This establishes measurable local spike variability, not PWD semantics.

## Neural Tuning update

Let a receiver's transformation depend on current input `u`, context `c`, and tuning state `theta`:

```text
y_(r,n) = F_r(u_n, c_n; theta_(r,n))                             [3]
```

The SAN hypothesis is that some registered PWD relations contribute to a subsequent update:

```text
theta_(r,n+1) = U_r(theta_(r,n), p_(r,i), c_n, y_(r,n))          [4]
```

Immediate state dependence, temporary effective connectivity, and persistent synaptic or intrinsic plasticity must be tested separately. Functional connectivity is not created automatically whenever a firing frequency changes.

## Taylor sequence and biological approximation

Near a declared operating point, a smooth receiver model can be approximated by successive Taylor polynomials:

```text
P_K(delta_z) = sum(k=0..K) D^k F_r(z_0)[delta_z^(tensor k)] / k! [5]
```

The sequence `P0, P1, ..., PK` is the proposed **Taylor Sequence of Polynomials**. The biological claim is not that a neuron writes the equation. It is that ordered physical departures may supply samples from which a cell, circuit, or external model realizes progressively higher-order local correction.

Neural systems also have history dependence. A Volterra functional expansion is therefore an essential comparator rather than a competing vocabulary. Volterra methods represent nonlinear, history-dependent biological transformations ([Korenberg and Hunter, 1996](https://pubmed.ncbi.nlm.nih.gov/8678357/)), have been applied to neuronal-ensemble spike-train transformations ([Zanos et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18701382/)), and have been evaluated on point-process transformations in rodent hippocampal data ([Sandler et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25479231/)).

The proposed novelty of this calculus is an operational formalization of typed, receiver-relative PWD relations and their update semantics, not polynomial or Volterra mathematics. The formalization does not create PWD or make it secondary.

## Difference from neighboring frameworks

| Framework | Core relation | Additional PWD burden |
|---|---|---|
| Rate coding | Count or rate varies with condition | Explain receiver-relative multidimensional departure |
| Phase coding | Event timing relative to a cycle carries information | Add route, receiver, other typed variables, and consequence |
| Phase-rate coding | Joint phase and rate improve decoding | Show that duration, magnitude, variability, and context add value |
| Predictive coding | Prediction-error relations update a model | Show which PWD is an error rather than assuming every departure is one |
| Phase-response curve | Perturbation phase predicts oscillator timing shift | Show downstream receiver and tuning consequence |
| Volterra model | Nonlinear history-dependent input-output approximation | Show why PWD typing improves explanation or prediction |

Phase-response curves quantify how transient excitatory inputs can advance or delay a repetitively
firing cortical neuron's next spike as a function of arrival phase ([Gutkin, Ermentrout, and Reyes,
2005](https://pubmed.ncbi.nlm.nih.gov/15829595/)). That is component evidence and a comparator,
not PWD semantics.

Phase-of-firing has carried visual information beyond spike count in macaque V1 ([Montemurro et al., 2008](https://doi.org/10.1016/j.cub.2008.02.023)). PWD must outperform that simpler baseline rather than relabel it.

## Decisive comparison

Fit capacity-matched models using rate alone, phase alone, joint phase-rate, prediction-error variables, scalar variability, a conventional recurrent or Volterra model, and the complete PWD representation. Evaluate held-out prediction of receiver state, tuning change, route selection, reconstruction, behavior, or perceptual correction.

PWD gains support only if it:

1. adds held-out value beyond the simpler models;
2. survives movement, arousal, filtering, common-input, and reference controls;
3. identifies a receiver-specific consequence;
4. predicts selective perturbation loss; and
5. predicts rescue when the declared relation is restored.

Greater dimensionality alone is not evidence.

## Relation to NAPOT

PWD calculus is a candidate formal language for describing PWD-bearing update relations used throughout NAPOT. NAPOT adds the model-specific requirement that many partial projections constrain an identifiable hidden state and redistribute a useful update, but it does not contain, define, or outrank PWD. Neither one PWD operationalization nor a Taylor approximation alone establishes neural rendering, tomography, consciousness, or observerhood.

## Read next

- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]]
- [[ndca-nonlinear-differential-continuous-approximation|NDCA]]
- [[category-theory-neuroscience|Category Theory and Biological State Transitions]]
- [[neural-tuning|Neural Tuning]]
- [[tonic-phasic-canvas|Tonic Canvas and Phasic Ink]]
- [[canvas-is-the-receiver|The Canvas Is Also the Receiver]]
- [[napot-overview|NAPOT Overview]]
- [[napot-theory|NAPOT Theory]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
- [[gh-02san|02san Source Record]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[gh-13san|13san: Computable Consciousness, Phase Variability, and Self-Modifying Timing]]

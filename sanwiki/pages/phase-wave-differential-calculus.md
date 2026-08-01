# Phase-Wave Differential Calculus

**Phase-Wave Differential Calculus** is a proposed SAN framework connecting receiver-relative neural departures, variability, Neural Tuning, and successive nonlinear approximation. It is not an established calculus performed symbolically by neurons.

The candidate operation is:

```text
expected tonic state
-> bounded multidimensional departure
-> physically transmitted event
-> receiver-specific consequence
-> tuning or routing update
-> improved or altered state approximation
```

This formulation is broader than phase coding only if the additional variables and receiver consequences provide causal or held-out predictive value.

## Historical source

The principal 2024 donor document describes PWD as an unexpected spike, burst, inhibition, or transmitted-quantity departure from a tonic group relation. It connects event duration and amplitude to magnitude, compares the departure with a physical derivative or loss-like term, treats events as discrete despite coarse-grained continuity, and joins PWD to Neural Tuning and changing functional routes.

The donor is a mixed working dialogue. It establishes the genealogy of the SAN proposal, not independent biological validation. Generated explanatory passages must be separated from Micah-authored claims before quotation or publication.

Five earlier 2022 routes also belong to the genealogy: array-to-array transformed representation, early cortical-column assumptions, distributed object/location/body coding, proposed apical/basal evidence-expectation comparison, and distributed rendering. Their bounded modern interpretation must preserve transformation and receiver dependence while rejecting a universal column circuit, fixed basal/apical semantics, a complete object inside one event, or a localized viewer.

## Operational PWD event

For event `i` at receiver `r`, a candidate feature vector is:

\[
\mathbf p_{r,i}=
[
\Delta\phi,
\Delta f,
\Delta A,
\Delta\tau,
\Delta q,
\Delta V,
\Delta\mathbf x
]_{r,i}.
\]

The terms represent declared differences in phase, frequency or event rate, amplitude, duration, transmitted quantity, variability, and spatial or network state. They are not interchangeable:

- phase is circular and requires a reference;
- frequency depends on an estimator and time window;
- amplitude depends on the measured signal;
- transmitted quantity must be measured at a specified biological route;
- position may mean anatomy, recording location, population state, or graph relation; and
- variability requires a statistic appropriate to the variable.

A measured vector becomes a candidate token only when a named receiver preserves or transforms the distinction and selective perturbation changes the predicted consequence.

## Coefficient of variation

For positive inter-event intervals:

\[
CV_{ISI}=\frac{\sigma_{\Delta t}}{\mu_{\Delta t}}.
\]

CV is one useful descriptor, not a complete PWD measure. It is unstable when the mean approaches zero and is not appropriate for circular phase. A PWD study should compare global interval CV, local `CV2`, local variation `LV`, count Fano factor, circular variance, and covariance across the full event vector.

Shinomoto, Shima, and Tanji found that local interspike-interval variation distinguished firing-pattern classes across cortical neurons in awake macaques ([2003](https://doi.org/10.1162/089976603322518759)). This establishes measurable local spike variability, not PWD semantics.

## Neural Tuning update

Let a receiver's transformation depend on current input `u`, context `c`, and tuning state `theta`:

\[
\mathbf y_{r,n}=F_r(\mathbf u_n,\mathbf c_n;\boldsymbol\theta_{r,n}).
\]

The SAN hypothesis is that some PWD events contribute to a subsequent update:

\[
\boldsymbol\theta_{r,n+1}
=U_r(\boldsymbol\theta_{r,n},\mathbf p_{r,i},\mathbf c_n,\mathbf y_{r,n}).
\]

Immediate state dependence, temporary effective connectivity, and persistent synaptic or intrinsic plasticity must be tested separately. Functional connectivity is not created automatically whenever a firing frequency changes.

## Taylor sequence and biological approximation

Near a declared operating point, a smooth receiver model can be approximated by successive Taylor polynomials:

\[
P_K(\Delta\mathbf z)=
\sum_{k=0}^{K}\frac{1}{k!}
D^kF_r(\mathbf z_0)
[\Delta\mathbf z^{\otimes k}].
\]

The sequence `P0, P1, ..., PK` is the proposed **Taylor Sequence of Polynomials**. The biological claim is not that a neuron writes the equation. It is that ordered physical departures may supply samples from which a cell, circuit, or external model realizes progressively higher-order local correction.

Neural systems also have memory. A Volterra functional expansion is therefore an essential comparator rather than a competing vocabulary. Volterra methods already model nonlinear, history-dependent biological transformations ([Korenberg and Hunter, 1996](https://doi.org/10.1007/BF02667354)) and have been applied to neuronal ensembles ([Zanos et al., 2008](https://doi.org/10.1109/TNSRE.2008.926716)) and hippocampal point processes ([Song et al., 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4286344/)).

The proposed novelty is the typed, receiver-relative PWD event and its update semantics, not polynomial or Volterra mathematics.

## Difference from neighboring frameworks

| Framework | Core relation | Additional PWD burden |
|---|---|---|
| Rate coding | Count or rate varies with condition | Explain receiver-relative multidimensional departure |
| Phase coding | Event timing relative to a cycle carries information | Add route, receiver, other typed variables, and consequence |
| Phase-rate coding | Joint phase and rate improve decoding | Show that duration, magnitude, variability, and context add value |
| Predictive coding | Prediction-error relations update a model | Show which PWD is an error rather than assuming every departure is one |
| Phase-response curve | Perturbation phase predicts oscillator timing shift | Show downstream receiver and tuning consequence |
| Volterra model | Nonlinear history-dependent input-output approximation | Show why PWD typing improves explanation or prediction |

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

PWD calculus is a candidate update mechanism inside NAPOT. NAPOT adds the stronger requirement that many partial projections constrain an identifiable hidden state and redistribute a useful update. Neither a PWD event nor a Taylor approximation alone establishes neural rendering, tomography, consciousness, or observerhood.

## Read next

- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[neural-tuning|Neural Tuning]]
- [[tonic-phasic-canvas|Tonic Canvas and Phasic Ink]]
- [[canvas-is-the-receiver|The Canvas Is Also the Receiver]]
- [[napot-overview|NAPOT Overview]]
- [[phase-language-firewall|Phase Language Firewall]]

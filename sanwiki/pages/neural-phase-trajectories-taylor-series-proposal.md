# Neural Phase Trajectories and the Taylor-Series Proposal

## The idea in plain language

A moving hand, an unfolding sound, a changing feeling, or a planned action is not represented by
one isolated neural instant. A receiving population encounters an ordered sequence whose present
state depends on prior input, current cellular and circuit conditions, and incoming signals.

1. **Source activity unfolds over time.**
2. **A biological pathway physically projects that activity.**
3. **The receiving population transforms the input according to its current state.**
4. **The receiver enters an updated population state.**
5. **That update can contribute to recognition, rendering, memory, or action.**

Neuroscientists can describe simultaneous population measurements as a trajectory through a state
space. This trajectory is an analysis of changing activity, not a literal line or coordinate grid
inside the brain. It depends on which cells or signals were measured, the time bins and smoothing,
the variables retained, and the projection used to display them.

## What established research shows

Population-level dynamics can reveal structure that is difficult to see in individual neurons.
Motor-cortex recordings during reaching showed organized population dynamics, including a strong
rotational component related to the preparatory state ([Churchland et al.,
2012](https://pubmed.ncbi.nlm.nih.gov/22722855/)). Macaque prefrontal recordings showed
context-dependent selection and integration unfolding at the population level ([Mante et al.,
2013](https://pubmed.ncbi.nlm.nih.gov/24201281/)).

These trajectories cannot automatically be assigned to one self-contained local generator. During
mouse dexterous movement, both thalamic activity and the current cortical state predicted later
cortical activity, and perturbing thalamocortical input disrupted cortical activity and movement
([Sauerbrei et al., 2020](https://pubmed.ncbi.nlm.nih.gov/31875851/)). Multiple fitted dynamical
mechanisms can also explain the same prefrontal population responses, creating an identification
problem that requires prediction and intervention rather than visual resemblance alone
([Soldado-Magraner et al., 2024](https://pubmed.ncbi.nlm.nih.gov/39693450/)).

This evidence establishes measurable population dynamics. It does not establish that neural tissue
implements Taylor polynomials, that a displayed low-dimensional trajectory is the complete neural
state, or that one trajectory by itself is a rendered percept.

## The recovered SAN proposal

Micah's July 2022 sources compare successive action-potential, inhibition, and phase-state changes
with a multidimensional Taylor-like sequence. Read source-faithfully, the proposal is not that a
spike contains a written coefficient. It is that:

- neural information can depend on an ordered, temporally extended sequence rather than an
  unordered spike count;
- excitatory, inhibitory, tonic, and phasic changes may successively reshape that sequence;
- every receiving cell or population transforms the arriving sequence according to its own
  anatomy, membrane state, recent history, and tuning;
- repeated receive-transform-project steps may preserve or refine changing contours, sensory
  relations, memories, feelings, and action consequences; and
- a finite Taylor-like model may test whether slope, curvature, or higher-order local changes add
  explanatory value.

This is a proposed SAN account of **successive biological approximation**. It does not require a
universal brain coordinate system or a single array that contains the complete percept.

## Formal separation

Let `x_R(t)` be an analyst-defined state vector for receiver population `R`. If the
estimated trajectory is sufficiently smooth over a short interval `delta_t`, an analyst can
write a finite local approximation:

```text
x_R(t + delta_t) ~= x_R(t) + x_R'(t) delta_t
                    + 1/2 x_R''(t) delta_t^2 + ...                [1]
```

That equation is mathematics applied to measurements. A more biologically explicit receiver model
is:

```text
x_R(t + delta_t) = F_R(x_R(t), u_(S->R)(t), c_R(t), h_R(t); theta_R)
                   + epsilon_R(t)                                  [2]
```

where `u_(S->R)` is measured input from source pathway `S`,
`c_R` is current context, `h_R` is relevant history, and
`theta_R` represents the receiver's anatomy and tuning. The SAN-specific hypothesis
is that typed phase-wave-differential features in the source sequence add predictive and causal
value for the receiver's next state.

The derivative terms are model estimates unless experiments identify a biological operation that
uses them. Neurons need not calculate symbols, store an infinite series, or follow a smooth path
through thresholds, bifurcations, adaptation, and noise.

## Claim ladder

| Level | Claim | Current status |
|---|---|---|
| Established observation | Simultaneously measured neural populations exhibit condition- and behavior-related temporal structure. | Supported by primary recordings. |
| Analytical method | A selected population state can be represented as a trajectory and locally approximated when smooth enough. | Standard state-space and calculus operation. |
| SAN interpretation | Ordered receive-transform-project sequences may carry and refine receiver-relative neural distinctions. | Source-backed SAN hypothesis. |
| Stronger biological claim | Derivative- or curvature-like terms are physically implemented and causally improve reconstruction, prediction, or action. | Open experimental claim. |

## Decisive test

Record an identified source pathway and receiving population simultaneously during a learned
time-varying sensory or motor sequence. Pre-register the receiver state, reference signal, time
window, feature extraction, and candidate PWD components. On held-out trials, compare:

1. spike-count and firing-rate models;
2. phase-only and phase-rate models;
3. ordinary linear and nonlinear state-space models;
4. spline and history-dependent Volterra models;
5. recurrent-network models; and
6. finite local Taylor-basis models with and without the proposed PWD features.

Then selectively perturb the identified source-to-receiver route. The stronger SAN claim gains
support only if derivative- or curvature-like PWD terms improve held-out prediction beyond simpler
alternatives and the perturbation changes the receiver trajectory in the pre-registered direction.
The claim is weakened if the result disappears under reasonable choices of binning or projection,
if a simpler model performs as well, or if the fitted terms do not predict perturbation effects.

## Dated source route

- [[gh-a0258z|a0258z]], source-dated and publicly Git-fixed July 5, 2022: names **Action
  Potential Path Tracing as Taylor Series Polynomials** and develops successive excitatory and
  inhibitory phase changes as a Taylor-like approximation.
- [[gh-a0149z|a0149z]], labeled July 8 and publicly Git-fixed beginning July 9, 2022: develops
  multidimensional phase topology, coincidence, receiving arrays, choice, and Taylor/tensor
  language. This corrects the earlier Wiki summary that placed the route on July 7.
- [[gh-a0238z|a0238z]], publicly Git-fixed beginning July 11, 2022: connects multivariate
  representational geometry to the phase-pattern proposal.
- [[gh-b0038y|b0038y]] preserves a December 26, 2021 precursor note, but explicitly marks the
  relevant section as updated in July 2022. The Taylor wording is therefore not backdated to 2021.

These documents establish the genealogy of the SAN proposal. They do not independently validate
its physiology.

## Read next

- [[phase-wave-differential-calculus|Phase-Wave Differential Calculus]]
- [[ndca-nonlinear-differential-continuous-approximation|NDCA]]
- [[category-theory-neuroscience|Category Theory and Biological State Transitions]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[continuous-dynamics-discrete-neural-information|Continuous Dynamics and Discrete Neural Information]]
- [[receptive-inceptive-dendritic-projection|Receptive, Inceptive, and Dendritic Projection]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-path-selection-interneurons-choice|Neural Path Selection and Choice]]

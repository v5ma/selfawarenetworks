# Category Theory and Biological State Transitions

> **Scientific and mathematical boundary:** Category theory, dynamical systems, and Petri nets are established mathematical subjects. Their use to model a named biological system is a modeling choice, not evidence that neurons literally implement category-theory terminology. The SAN Category Theory-Petri Net Hybrid is a source-supported research proposal, not a completed formalism or a proof of NAPOT, qualia, or consciousness.

> **Image status:** The former generated illustration is preserved as an [unaccepted draft](/v5ma.github.io/wiki/assets/generated/san/category-theory-neuroscience/category-theory-neuroscience-objects-morphisms-functor-20260706-v1.png), but it is no longer displayed as accepted art. It labels phase relations as morphisms, a neural signal as a functor, and LTP as a natural transformation without defining the required categories or mappings. A bounded replacement is specified as `IMG-SAN-CATEGORY-PETRI-BIOLOGICAL-TRANSFORMATION-001` in the SAN medically accurate image-prompt ledger.

This page connects four SAN mathematical routes through one biological operation: a receiver begins in a measurable state, an input changes that state, the changed receiver emits a consequence, and that consequence changes another receiver. The purpose of the formalism is to preserve the identities of the states, routes, receivers, and measurements while asking whether a complex chain composes as proposed.

## The operation before the notation

```text
typed biological state at a named receiver
+ measured chemical, electrical, mechanical, or synaptic input
+ local context and recent history
-> receiver-specific nonlinear state transition
-> changed receiver state
-> emitted consequence
-> changed downstream state
-> possible returned consequence
```

A minimal state-update model is

```text
x_r(t + 1) = F_r(x_r(t), u_r(t), c_r(t); theta_r)                 [1]
```

where `r` names the receiver, `x_r(t)` is its measured state, `u_r(t)` is the input, `c_r(t)` is relevant context and history, and `F_r` is the candidate transition rule. This notation does not assume that one universal equation describes every neuron, cell type, circuit, or timescale.

If a transition from system A to B is represented by `f_AB`, and a later transition from B to C by `f_BC`, the composed route is

```text
f_AC = f_BC o f_AB                                               [2]
```

Equation (2) expresses the central question in the recovered SAN source: can the measured consequence of one place be used as the typed input to the next place without losing the route's biological meaning?

## Recovered SAN proposal

[[gh-a0613z|a0613z]] explicitly calls itself a "quick & dirty" combination of category theory and Petri nets for biological dynamic systems. Its biological core is more precise than the former generated page suggested:

1. A cell, organelle, tissue, or circuit can be treated as a named **place** whose relevant state changes over time.
2. Places can be nested, such as an organelle within a cell or a cellular process within a circuit.
3. An event in one place can change that place, emit one or more consequences, and change other places.
4. A transition box or state log can preserve alternative inputs, intermediate states, outputs, and returned effects.
5. Different intervention routes can be compared by declared measurements, including whether they reach a similar endpoint and whether their intermediate effects or side effects differ.

This is a proposal for a typed, compositional record of multiscale biological transformations. It is not a claim that every signaling molecule is literally a functor or that matching one endpoint makes two mechanisms mathematically identical.

## A disciplined Category Theory translation

Category theory can help only after the model defines its categories and maps.

| Term | Disciplined use here | What is not justified automatically |
|---|---|---|
| Object | A typed state or system representation inside a declared category | A dendrite, column, or percept called an object without specifying the category |
| Morphism | An admissible transformation between typed objects | Any oscillation, molecule, or signal called a morphism by analogy |
| Composition | Sequential transformations whose interfaces and types match | Joining arrows whose biological outputs and inputs were never shown to correspond |
| Functor | A map between categories that preserves identities and composition | Calling a biological signal, neural network, or measurement device a functor |
| Natural transformation | A coherent comparison between two functors | Calling LTP, LTD, learning, or plasticity a natural transformation without constructing the functors |
| Isomorphism | A structure-preserving morphism with an inverse | Two routes that merely share one measured endpoint |

The source uses **isomorphic** informally for alternative routes that begin and end similarly. The scientifically safer term is **endpoint-equivalent under declared observables and tolerances**. Two routes should be compared across at least:

- starting state and receiver identity;
- endpoint variables and tolerance;
- intermediate states and timescales;
- energetic cost and off-target effects;
- perturbation and rescue behavior; and
- reversibility, if an isomorphism is actually claimed.

Surface similarity or one shared endpoint is not enough.

## Petri nets and the SAN hybrid

In an ordinary Petri-net model, **places** hold a marking, **transitions** consume and produce tokens according to declared rules, and reachability asks which markings can follow from a starting marking. Open Petri nets add designated interfaces so subnetworks can be composed by joining outputs to inputs. Baez and Master formalized this compositional treatment of open Petri nets ([2020](https://doi.org/10.1017/S0960129520000043)).

The 2022 SAN source proposes nested biological places, multidimensional state records, and transition boxes for concurrent or alternative consequences. A modern implementation should first test whether a colored, hierarchical, stochastic, or open Petri net already supplies the required machinery. The genuinely SAN-specific value is not renaming standard Petri-net components. It is the proposed integration of receiver-relative events, nested biological state, alternative routes, and returned consequences with the wider SAN account of neural computation.

## One biological running example

Consider a named postsynaptic neuron in a defined circuit:

```text
presynaptic event pattern
-> receptor and channel-dependent postsynaptic transformation
-> changed membrane, dendritic, and intracellular state
-> changed spike or burst output
-> changed downstream population state
-> sensory, behavioral, or feedback consequence
```

Established conductance models already show how measured membrane variables can be joined in nonlinear differential equations; Hodgkin and Huxley's model is the classic example ([1952](https://doi.org/10.1113/jphysiol.1952.sp004764)). Population studies likewise show that neural activity can follow structured trajectories related to preparation, movement, context, evidence, and choice ([Churchland et al., 2012](https://doi.org/10.1038/nature11129); [Mante et al., 2013](https://doi.org/10.1038/nature12742)). These findings justify state-transition and trajectory models. They do not establish that category theory is the uniquely correct language or that the full SAN interpretation is true.

## How the four SAN mathematics routes fit together

The routes answer different questions about the same candidate computation:

| SAN route | Role in the shared biological example |
|---|---|
| [[phase-wave-differential-calculus|Phase-Wave Differential Calculus]] | Describes a candidate multidimensional, receiver-relative input or update event `u_r(t)`. |
| [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]] | Asks whether successive local differences can approximate the next state, with Taylor and Volterra models treated as comparators rather than literal neuronal symbols. |
| [[ndca-nonlinear-differential-continuous-approximation|NDCA]] | Asks how nonlinear, changing activity could preserve useful continuity and distinctions across time. |
| **Category Theory-Petri Net Hybrid** | Types the states and interfaces, records alternative transitions, and tests whether local routes compose into the proposed larger operation. |

The relationship can be summarized as

```text
PWD event description
-> receiver-specific nonlinear update
-> local or history-dependent approximation
-> typed state transition
-> composable multiscale route
```

These are complementary modeling layers, not interchangeable names for one equation.

## What would make the proposal scientific

A worked SAN model must declare:

1. the cell, circuit, body system, or task being modeled;
2. each state variable and how it is measured;
3. the allowed transitions and their time windows;
4. the interfaces through which one subsystem affects another;
5. the simpler baseline models;
6. held-out predictions for state, behavior, or intervention outcome; and
7. perturbations that distinguish the proposed route from alternatives.

The categorical/Petri representation earns its complexity only if it improves prediction, intervention planning, compositional reuse, or error detection beyond a simpler state-space, causal-graph, or differential-equation model. Failure to define the categories and maps, failure of composition on held-out data, or no advantage over the simpler baseline would count against the proposed formalism.

## Claim boundaries

| Layer | Defensible statement |
|---|---|
| Established mathematics | Categories formalize typed objects and composable transformations; Petri nets formalize concurrent state changes; open Petri nets support compositional interfaces. |
| Established neuroscience | Neuronal and population activity can be modeled as nonlinear, context-dependent state changes and trajectories. |
| Source-supported SAN proposal | Nested biological places and receiver-to-receiver consequences can be recorded as a compositional state-transition system and compared across alternative routes. |
| Open SAN research question | Whether a categorical Petri-net implementation provides useful predictive or intervention advantages when joined to PWD, neural tuning, Taylor/Volterra comparisons, and NDCA. |
| Not established | A neural signal is inherently a functor; LTP is inherently a natural transformation; matching endpoints proves isomorphism; category theory validates qualia or consciousness. |

## Source genealogy

- [[gh-a0613z|a0613z]] was first publicly Git-fixed on June 8, 2022. It names the Category Theory-Petri Net Hybrid, nested places, state transformations, concurrent signals, transition boxes, route comparison, state logs, and possible medical-intervention use. [Open the immutable June 8, 2022 source](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0613z.md).
- [[category-theory|Category Theory]] maps the wider historical SAN corpus in which category theory appears as a desired formal language.
- The stricter definitions, equations, and model-comparison rules on this page are a current scientific clarification. They are not backdated into the 2022 source.

## Read next

- [[gh-a0613z|a0613z source page]]
- [[continuous-dynamics-discrete-neural-information|Continuous Dynamics and Discrete Neural Information]]
- [[phase-wave-differential-calculus|Phase-Wave Differential Calculus]]
- [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]]
- [[ndca-nonlinear-differential-continuous-approximation|NDCA]]
- [[neural-tuning|Neural Tuning]]
- [[cascaded-array-perspective-transformation|Cascaded Array Perspective Transformation]]

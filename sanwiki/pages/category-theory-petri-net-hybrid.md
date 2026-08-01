[[gh-resnote04|Micah]]'s Category Theory Petri Net Hybrid is a formal modeling framework for studying intracellular and intercellular state transformations in biological systems — and, by extension, in [[self-aware-network|self-aware neural networks]].

## Core Distinctions

**Standard Petri nets** use moving tokens between places to model dynamics. John Baez's categorical Petri net treats markings as categories and transitions as morphisms — but functions remain tied to token movements between places.

**[[gh-resnote04|Micah]]'s hybrid** inverts this: categories represent *states of a place*, not moving tokens. Morphisms (functors) represent state-change events triggered within or between places. The result:

- A **Place** is a biological entity: a cell, an organelle, a neuron soma, a thalamus.
- A **Category** within a place is a state of that entity at an abstract time step.
- A **Transition box** (array of functors) represents the set of signals a place can emit or receive; the signal is the arrow, not a moving token.

## Neural Application

For a Layer 5 [[pyramidal-cell|Pyramidal cell]]:

```
P1.S1 → P1.N1.M1   # Soma burst (S1) activates mitochondria (M1)
M1 → ps1 → R1 → P2 # ATP surge → protein synthesis → new receptors → cell state 2
```

Two different inputs (soma burst, mechanical wave, EM wave) can be shown **isomorphic** if they produce the same terminal state transformation — opening formal comparison of different cellular signaling modalities without requiring knowledge of internal mechanism.

## Why This Matters for SAN

[[napot-theory]] describes how neural arrays project and detect patterns via oscillatory tomography. The category-theory framework provides the abstract algebraic scaffolding for the *state-change protocol* that underlies those arrays. Each neuron (Place) has a state (Category); the [[phase-wave-differentials|phase wave signal]] is the functor; synaptic transmission is the morphism chain.

The same formalism extends to [[multiscale-fractal-neural-oscillators]]: isomorphic functors at the dendritic scale, column scale, and thalamic scale can be formally verified as composable maps — establishing the fractal scale-invariance claim on categorical grounds rather than by analogy alone.

## History

Formulated in note [[gh-a0613z|a0613z]], parallel to but distinct from John Baez's categorical Petri nets (2021). [[gh-resnote04|Micah]] was unaware of Baez's work at time of writing; convergence suggests the framework addresses a genuine structural gap in standard Petri net expressiveness for biological state modeling.

## Related Concepts

- [[self-aware-network]] — the network whose signaling protocol this framework models
- [[napot-theory]] — the oscillatory projection theory that benefits from categorical scaffolding
- [[multiscale-fractal-neural-oscillators]] — fractal scale-invariance that the isomorphism operator makes formally verifiable
- [[phase-wave-differentials]] — the functor/morphism in the neural categorical model
- [[neural-code-transmission]] — how information is encoded and transmitted across neural arrays

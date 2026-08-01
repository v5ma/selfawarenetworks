---
title: "Cellular Communication and Graph Models"
tags: [san, cellular-communication, graph-model, cot, set, category-theory]
aliases: [Cellular Communication Graph Neural Network]
summary: "How SAN models communicating biological cells as stateful graph nodes while keeping analogy, formal equivalence, and experimental biology separate."
status: governed
---

# Cellular Communication and Graph Models

Biological cells detect signals, integrate them with internal state, change gene expression or
metabolism, move, secrete molecules, alter morphology, and influence other cells. A graph can model
those interactions: cells are nodes, measured communication routes are edges, and node state
changes over time.

That abstraction is useful, but a cell is not literally an artificial neuron. Its receptors,
organelles, biochemical networks, morphology, history, and environment are part of the operation.

## The SAN proposal

In `a0621z.md`, Micah Blumberg proposes that cellular communication can be compared with network
communication and asks whether category theory can formalize transformations that have similar
input-output structure despite different physical carriers. The note joins receptor shape,
chemical signaling, cellular memory, gene-regulatory feedback, and multiple communication media
to the COT/SET research line.

The previous version of this page said chemical messaging is **Turing complete**. No universality
proof was supplied, so that statement has been removed. The valid claim is narrower: stateful
cellular interactions can be represented computationally, and some may be compared by their
measured transformation structure.

## What must be represented

A useful cell graph needs more than an edge saying that two cells communicate:

```text
node state = [cell type, receptor state, gene expression, metabolic state,
              morphology, recent history, spatial context]

edge event = [carrier, concentration or magnitude, timing, duration,
              direction, receiver, feedback, downstream consequence]
```

The same signal can produce different outcomes in different receiver states. A static connectome
or contact map therefore cannot determine function by itself.

## Neural and immune examples

- A neuron's response depends on dendritic location, membrane state, inhibition, neuromodulation,
  recent activity, and plasticity.
- T-cell activation can depend on antigen-receptor engagement, costimulatory pathways, cytokine
  context, differentiation state, and infection conditions.

These examples motivate a shared state-transition language. They do not prove that neurons and
immune cells implement the same algorithm.

## Relation to COT and SET

[[cellular-oscillatory-tomography|COT]] asks how cells receive, transform, retain, and re-express
patterns. SET asks how those stateful computations influence development and evolution. Graph,
category-theory, and Petri-net models are candidate mathematical tools for describing the process;
they are not substitutes for molecular and physiological measurements.

![Cellular Communication Graph Neural Network chemical message passing](/v5ma.github.io/wiki/assets/generated/san/cellular-communication-graph-neural-network/cellular-communication-graph-neural-network-chemical-message-passing-20260705-v1.png)

## Read next

- [[alternating-transmission-protocol-cellular-handshakes|Alternating Transmission Protocol and Cellular Handshakes]]
- [[non-neural-pattern-recognition-cells|Non-Neural Pattern-Recognition Cells]]
- [[category-theory-biological-state-transitions|Category Theory Biological State Transitions]]
- [[cellular-oscillatory-tomography|Cellular Oscillatory Tomography]]
- [[gh-a0621z|a0621z source note]]


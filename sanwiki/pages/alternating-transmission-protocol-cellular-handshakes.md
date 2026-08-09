---
title: "Alternating Transmission Protocol and Cellular Handshakes"
tags: [san, atp, neural-lace, network-protocol, cellular-communication, immune-system]
aliases: [Alternating Transmission Protocol, ATP Brain Protocol]
summary: "A source-grounded account of Micah Blumberg's 2017 ATP brain-protocol proposal and its 2022 extension to cellular handshakes."
status: governed
---

# Alternating Transmission Protocol and Cellular Handshakes

## The idea in plain language

Some biological messages work only when a receiver confirms the context. Others are released
quickly to many possible receivers, and the receiving cells decide whether to respond. A living
system may switch between these communication styles as its state changes.

In the first Neural Lace Podcast, Micah Blumberg compared that problem to the difference between
TCP and UDP on computer networks. He named the proposed hybrid **Alternating Transmission Protocol
(ATP)**. The acronym was deliberate: ATP is also the molecule cells use as an energy currency.

This was a question about how a brain-computer interface could discover the brain's communication
rules. It was not a claim that neurons literally run Internet software.

The earlier 2012 [[neuron-shape-information-storage|neuron-as-program proposal]] contributes a
state-dependent transformation and structured-output ancestor. It does not yet name ATP or compare
brain signaling with TCP and UDP.

## From brain networks to immune cells

A 2022 SAN note applies the same comparison to immune communication. A naive T cell can require
both antigen recognition and a costimulatory signal before entering a productive response. That
resembles a confirmation step. Already activated cells can respond under different requirements,
but the details depend on cell type, pathogen, receptor, and context.

This makes the analogy useful as a checklist:

- What starts the message?
- What must already be true about the receiver?
- Is a second confirming signal required?
- Is the signal one-to-one or one-to-many?
- Does the receiver send feedback?
- What cellular energy and state change does the exchange require?

## What SAN adds

The 2017 ATP question asks **which communication regime is active**. Later SAN concepts add more
detail:

- [[tonic-phasic-phase-wave-differential|PWD]] describes a receiver-relative change in timing,
  phase, duration, waveform, magnitude, or spatial distribution.
- [[napot-revision-genealogy|NAPOT]] describes neural arrays receiving, transforming, and
  re-expressing patterns.
- [[cellular-oscillatory-tomography|COT]] extends receive-transform-retain-transmit logic to
  ordinary cells.

The Wiki keeps the historical sequence visible without pretending that the later mechanisms were
already complete in 2017.

## What remains unproven

The TCP/UDP comparison is a modeling analogy. It does not prove that conscious information uses
one regime, that unconscious information uses another, or that particular sensory modalities
belong to fixed frequency bands. Those claims require direct measurement and perturbation.

## Source dates and custody

- The ATP/TCP/UDP proposal belongs to the April 2017 podcast episode and public media lineage. The
  current detailed transcript was first Git-fixed in June 2025; recording date and transcript
  fixation are separate facts.
- The immune-cell extension is in [[gh-a0621z|a0621z]], first publicly Git-fixed on June 8, 2022.
- T-cell antigen recognition and costimulation provide a bounded comparison. They do not establish
  a universal two-packet biological protocol or prove that ATP is the native language of cells.

## Read next

- [[brain-tcp-udp-analogy|Brain TCP/UDP Analogy]]
- [[neuron-shape-information-storage|Neuron Shape as Information-Bearing State]]
- [[cellular-communication-graph-neural-network|Cellular Communication and Graph Models]]
- [[gh-nlp1|Neural Lace Podcast 1 transcript]]
- [[gh-a0621z|a0621z source note]]

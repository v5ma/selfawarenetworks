---
title: "Brain TCP/UDP Analogy"
tags: [san, neural-lace, network-protocol, tcp, udp, atp, bci]
aliases: [Brain TCP UDP Analogy, Brain Network Protocol]
summary: "The source-grounded 2017 Neural Lace question about feedback-dependent and broadcast-like brain communication, later named Alternating Transmission Protocol."
status: governed
---

# Brain TCP/UDP Analogy

> **Image status:** The earlier cortical-traffic plate has been removed from display and preserved in the failed-medical-review archive. It assigned predictive coding, plasticity, rhythms, neurotransmitter release, and sharp-wave ripples to TCP-like or UDP-like classes without source support. A replacement prompt is retained for a route-specific BCI diagram; image generation is paused.

## The actual source idea

In the first Neural Lace Podcast transcript, Micah Blumberg asks whether neural communication has
a protocol comparable to the difference between TCP and UDP. TCP supplies the analogy for a
connection with feedback and confirmation. UDP supplies the analogy for rapid transmission
without establishing the same kind of connection.

Micah proposes a hybrid called **ATP, Alternating Transmission Protocol**, and immediately notes
the double meaning with adenosine triphosphate, the cell's energy currency. The question is tied to
BCI engineering: a device that reads or writes the brain must discover which signaling rules its
target cells and circuits actually use.

## What the analogy does not establish

The original discussion speculates that conscious traffic could be more feedback-dependent,
unconscious traffic more broadcast-like, and different sensory modalities might use different
frequency ranges. Those claims remain hypotheses.

The previous version of this Wiki page went further than the source by assigning TCP to predictive
coding and LTP/LTD, and UDP to gamma/theta volleys, neurotransmitter broadcast, and sharp-wave
ripples. Those fixed equivalences have been removed. No evidence showed that they were the intended
or biologically correct mapping.

## A better scientific use

Treat the analogy as a checklist for a measured biological event:

- Does the source address one receiver or many?
- Does the receiver need a specific prior state?
- Is a second signal or reciprocal confirmation required?
- Is there feedback, retry, correction, or acknowledgment-like behavior?
- What timing, phase, waveform, magnitude, and spatial pattern reach the receiver?
- What state change or action proves that the receiver used the signal?

This turns a computer-network metaphor into testable biological questions without claiming that
neurons literally implement Internet protocols.

## Development path

The 2012 [[neuron-shape-information-storage|neuron-as-program proposal]] supplies an earlier
state-dependent transform-and-re-express ancestor, but it does not use the TCP/UDP analogy. The
2017 protocol question introduces that comparison and the differential write-back operation.
[[tonic-phasic-phase-wave-differential|PWD]] later supplies a candidate receiver-relative signal
description, while [[napot-revision-genealogy|NAPOT]] supplies a receive-transform-re-express
architecture. A 2022 immune-cell note extends the handshake analogy to cellular communication and
the COT/SET line.

## Read next

- [[alternating-transmission-protocol-cellular-handshakes|Alternating Transmission Protocol and Cellular Handshakes]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[gh-nlp1|Neural Lace Podcast 1 transcript]]

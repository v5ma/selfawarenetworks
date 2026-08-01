Rather than requiring a perfect physical copy of the brain (the classical "mind upload" problem),
[[gh-resnote04|Micah]] proposes **querying the brain's data structure** — reading out its network protocols and
state information via external interrogation, analogous to HTTP or FTP requests traversing a
distributed network.

The key insight: the brain is a network with addressable nodes (neurons, cortical columns,
[[neural-array]] layers). Its information content is, in principle, queryable without
destructive disassembly if we can map the communication protocols governing
signal propagation and [[synaptic-frequency]] encoding.

## TMS Threshold Scanning

One concrete path: Transcranial Magnetic Stimulation (TMS) "bounced" through the brain to
estimate neuron activation thresholds at scale. CNNs trained on TMS response patterns could
reconstruct threshold maps without requiring physical access to tissue. This yields a snapshot
of the brain's current hardware configuration layer (see [[cognitive-states-and-stages]]).

## Neural Code Transmission

A 1968 Perkel-Bullock framework defines four functions for a neural code: stimulus
representation, interpretation, transformation, and **transmission**. The fourth is
understudied — yet transmission (inter-region signal propagation) is exactly what a
query-based mind-upload would need to intercept. Understanding the transmission protocol is
the missing piece that makes brain querying feasible.

## Relation to BCI

This framing reframes [[brain-computer-interface]] development: instead of implanting
electrodes to read signals, a sufficiently sophisticated non-invasive query system could
reconstruct the brain's informational state by sampling its oscillatory outputs
(EEG, MEG, TMS responses) and inverting the [[napot]] signal model.

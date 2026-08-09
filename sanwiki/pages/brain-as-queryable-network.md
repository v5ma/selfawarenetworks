---
title: "Brain as Queryable Network: Historical Proposal and Experimental Boundary"
tags: [san, artificial-neurology, brain-computer-interface, tms, system-identification]
aliases: [Brain As Queryable Network, Brain Structures Request]
summary: "A source-faithful reconstruction of Micah's 2021 proposal to interrogate neural organization through controlled requests, separated from established stimulation-response modeling and from unsupported claims of HTTP-like biological protocols or memory extraction."
status: governed
---

# Brain as Queryable Network: Historical Proposal and Experimental Boundary

> **Image status:** The former protocol-decoding plate failed medical and causal review. It is
> preserved in `archive-do-not-use-medical-review/br034-neural-code-transmission-20260809` and must
> not appear in a reader or public projection. It depicted a generic three-layer cortical circuit,
> addressable nodes, NAPOT routing, and data-structure recovery as one established pathway. A
> source-bounded replacement description is maintained in the SAN image prompt ledger; generation
> remains paused.

The October 11, 2021 recording *Brain Structures Request* proposed an engineering alternative to
perfect physical copying: perhaps a future interface could **query** a brain's data structures once
its networking protocols and representations were understood. HTTP and FTP supplied an intuitive
comparison to requesting selected information from a networked system.

This was a thought experiment about a future artificial interface. It was not a claim that living
neurons use URLs, server addresses, HTTP, FTP, or a currently decodable global protocol.

## Recovered source chronology

1. **October 11, 2021 audio:** query selected brain data structures rather than copy the brain
   exactly; HTTP and FTP appear only as analogies.
2. **June-August 2022 Git note:** the audio transcript was publicly fixed on GitHub. Later notebook
   additions connected it to a TMS threshold-estimation preprint and the Perkel-Bullock neural-code
   functions discussed by Kumar and colleagues.
3. **Later Wiki synthesis:** the previous page merged these stages into a single biological claim
   and overstated what the TMS study demonstrated. This page restores their boundaries.

See [[gh-b0144y|Brain Structures Request source record]].

## What controlled perturbation can actually do

Neuroscience already uses controlled input and measured output to estimate properties of neural
systems. Depending on the scale and method, researchers can stimulate a receptor, synapse, cell,
pathway, cortical location, or whole organism and measure electrophysiology, imaging, behavior, or
motor output. This supports **system identification** under constrained conditions.

A bounded abstraction is:

```text
u(t) -> biological system S -> measured response y(t)             [1]
```

Repeated, calibrated inputs `u` and observations `y` can constrain a model of `S`. They do not
uniquely reveal every hidden state. Different internal models can produce similar outputs, and
measurement noise, nonstationarity, safety limits, network recurrence, and unobserved variables
make the inverse problem difficult.

## What the TMS paper established

Aberra and colleagues modeled TMS-induced electric fields around biophysically detailed
computational neuron models. Their convolutional neural networks rapidly estimated modeled
activation thresholds from local electric-field distributions. The work can improve simulation
and stimulation planning.

It did **not**:

- measure every living cortical neuron's threshold;
- identify semantic addresses in a brain;
- read memories or thoughts;
- infer a complete neural data structure;
- demonstrate a query language; or
- establish mind uploading.

The old page's phrase "effectively reading out local threshold states" therefore exceeded the
paper. The defensible description is **fast surrogate estimation of activation thresholds in
computational TMS-neuron models**.

## A medically bounded research program

The useful descendant of the 2021 idea is not an HTTP metaphor installed inside anatomy. It is a
progressive perturb-and-model program:

```text
declared target and pathway
    -> calibrated perturbation
    -> multimodal response measurement
    -> receiver- and state-specific model
    -> held-out prediction
    -> bounded intervention test
```

Such a program could ask whether a stimulation-response model predicts local excitability, pathway
recruitment, perception, movement, or symptom change. A successful model would still be a bounded
instrument model, not proof that the full person has been decoded.

## Relation to SAN and Artificial Neurology

SAN's receive-transform-project architecture motivates richer measurements than a static wiring
diagram. A useful artificial-neurology interface would need to model cellular morphology,
synaptic state, timing, inhibition, recurrent pathways, body state, and receiver consequences. It
would also need explicit consent, safety, identity, privacy, and welfare protections.

The query proposal is therefore best treated as an **engineering destination** downstream of
[[neural-code-transmission|Neural Code Transmission]], not as empirical support for NAPOT. NAPOT
and PWD may suggest variables to test, but their validity must be established independently.

## Claim levels

| Layer | Status |
|---|---|
| Controlled neural stimulation and response measurement | Established across bounded methods and systems. |
| Computational estimation of TMS activation thresholds | Established for the modeled conditions in Aberra et al. |
| Pathway-specific perturb-and-model interfaces | Active research direction with substantial inverse-problem limits. |
| SAN variables improving those models | Open, testable proposal. |
| Semantic brain query, memory extraction, or mind reconstruction | Not established. |

## Sources

- [Corrected 2021 source record](https://recorder.google.com/c37c8a38-c026-435e-85ef-a1c7f796796b)
- [June 8, 2022 public Git fixation of b0144y](https://github.com/v5ma/selfawarenetworks/blob/09b8306fbb54536e20ba1071e91dff0cb8a4770f/b0144y.md)
- [Aberra et al. (2023), TMS activation-threshold estimation](https://pmc.ncbi.nlm.nih.gov/articles/PMC10281353/)
- [Kumar, Rotter, and Aertsen (2010), spiking-activity propagation](https://www.nature.com/articles/nrn2886)

## Related pages

- [[gh-b0144y|Brain Structures Request source record]]
- [[neural-code-functions|Neural Code Functions]]
- [[neural-code-transmission|Neural Code Transmission]]
- [[transcranial-magnetic-stimulation|Transcranial Magnetic Stimulation]]
- [[brain-computer-interfaces|Brain-Computer Interfaces]]
- [[artificial-neurology|Artificial Neurology]]
- [[san-implementation-evidence-gates|SAN Implementation Evidence Gates]]

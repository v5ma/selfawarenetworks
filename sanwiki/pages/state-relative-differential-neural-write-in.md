# State-Relative Differential Neural Write-In

## The problem in plain language

A fixed stimulation pattern will not have the same effect in every brain or at every moment. A
future sensory BCI must estimate what the person is already doing, define a reachable target,
choose a safe intervention predicted to reduce the error, and measure what happened next.

```text
measure current state
-> estimate task-relevant latent state and uncertainty
-> define reachable target and success criterion
-> compute bounded intervention
-> stimulate
-> measure neural, behavioral, and reported result
-> adapt or stop
```

## Public SAN source

The public June 11, 2017 article `a0249z.md` states that a sensory Neural Lace system should first
listen to the pattern present in the current person and environment, then send only the difference
between that pattern and the desired one. This is a public SAN ancestor of PWD, artificial
perception, individual calibration, co-registration, and returned-consequence testing.

The general closed-loop idea has earlier prior art in adaptive DBS and network control. The
distinct SAN join is the proposed application to individually calibrated multimodal sensory
content, not a claim to have invented feedback control.

## What "difference" means

It is a control objective, not literal subtraction of raw EEG from a stored experience. The system
must keep five things separate:

1. measured signals;
2. inferred neural state;
3. desired target;
4. state reachable by the actuator; and
5. experienced, reported, or behavioral result.

Only after calibration can a model estimate an intervention that may move the current state toward
the target while penalizing energy, uncertainty, and risk.

## Early recurrent-update ancestor

The owner-dated September 22, 2012 discussion in [[gh-a0509z|a0509z]] describes an existing model
`Y`, new evidence `X`, and an updated state `Z`; `Z` then becomes the prior against which the next
input is interpreted:

```text
prior state + new evidence -> updated state -> next prior
```

The historical `X/Y=Z` notation is not literal neural division. It is an early recurrent-update
idea. Later SAN sources add receiver-relative signal variables, control objectives, and the mature
PWD and differential-write terminology. Claims by the other speaker remain attributed to that
speaker.

## Evidence boundary

Adaptive DBS, EEG-triggered TMS, network-control models, and closed-loop optogenetics support
state-dependent measurement and control. They do not demonstrate arbitrary percept writing,
qualia transfer, universal neural codes, NAPOT, or PWD.

A useful first test should target a low-dimensional feature such as tactile side, visual
orientation, or motor output. It should compare fixed, state-triggered, and model-predictive
stimulation with sham, wrong-state, wrong-target, delayed-feedback, and cross-person controls.

## Paper route

The unnumbered candidate is **State-Relative Neural Write-In: A Closed-Loop Differential Control
Protocol for Artificial Perception**. It requires prior-art and nonduplication review before any
paper number or publication action.

## Read next

- [[early-a0503-a0530-obscure-argument-map|Early a0503-a0530 Obscure Argument Map]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]
- [[infogenetics-content-addressed-neural-write-access|Infogenetics: Content-Addressed Neural Write Access]]
- [[conscious-state-perturbation-tomography|Conscious-State Perturbation Tomography]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[early-a0233-a0253-obscure-argument-map|Early a0233-a0253 Obscure Argument Map]]

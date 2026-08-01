---
title: "Agency, Valuation, Action Selection, and Returned Consequence"
tags: [san, agency, valuation, action-selection, feedback, bats, interoception, gcs]
aliases: [Agency and Valuation Bridge, Embodied Choice Loop]
summary: "How a distributed nervous system turns body and sensory evidence into weighted candidate actions, executes one, receives the consequence, and learns without an inner chooser or one-band executive."
status: governed
---

# Agency, Valuation, Action Selection, and Returned Consequence

## The problem in ordinary language

A hungry animal sees food. It can approach, wait, avoid danger, keep searching, or do something
else. The same object may produce a different action when the animal is full, sick, frightened, or
trying to protect its young.

No single signal answers every question involved. The nervous system must estimate the state of
the body, identify what is present, prepare possible actions, predict consequences, commit enough
of the motor system to act, and then learn from what actually happens.

Calling that whole process *choice* or *agency* is useful only if we explain the machinery rather
than hide it inside an imaginary executive.

The central loop is:

```text
body and sensory evidence
-> candidate actions and consequences
-> learned value, urgency, and selection
-> motor, autonomic, or endocrine action
-> changed body and world
-> returned sensory and bodily evidence
-> updated state, memory, and future criteria
```

SAN proposes that receiver-relative timing and phase structure may help coordinate this loop. That
proposal must be tested after the ordinary biological systems are kept visible.

## Similar words that must stay separate

**Psychological valence** is the positive-negative, appetitive-aversive, reinforcing-punishing, or
pleasant-unpleasant direction of a declared measurement. Those meanings overlap, but they are not
identical.

**Value** is an estimate of what an option may lead to for a particular organism in a particular
state and task.

**Salience** means priority for attention, selection, or learning. A painful warning and an
attractive reward can both be highly salient.

**Arousal** means activation or mobilization. High arousal can accompany fear, delight, exertion,
or surprise.

**Reward-prediction error** is a model-specific difference between expected and obtained reward.
It is not pleasure itself.

**Electrical voltage**, **electric field**, **oscillatory phase**, **frequency**, and **signal
power** are different physical or measured variables.

**SAN electrical valence** is Micah Blumberg's proposed name for the signed, coherence-weighted
electrical drive that one active assembly exerts relative to its ongoing baseline. It is a proposed
bridge variable, not the chemical definition of valence. The name is SAN-specific, while its
components include measurable LFP power, spike-field phase locking, interareal coherence, directed
information flow, membrane potential, synaptic current, and downstream recruitment.

This separation matters because the word *valence* also appears in chemistry. The shared word is
historically important to SAN, but the scientific content must come from a measurable causal
bridge rather than the word alone.

## What Micah means by increasing electrical valence

When several cells activate at nearly the same time or maintain an effective phase relation,
their local currents can sum more strongly at a downstream receiver. Whether they actually sum
depends on current direction, cellular geometry, distance, orientation, synaptic weights,
inhibition, and the receiver's state. Synchrony by itself does not guarantee a larger measured
field.

SAN calls the resulting **signed, coherence-weighted effective drive** electrical valence. In
plain language, one candidate pattern gains more physical leverage over what the network does
next.

That provides the missing choice bridge:

```text
candidate pattern begins to recruit cells
-> coincident or phase-coherent currents increase effective drive
-> the pattern departs further from the tonic reference state
-> its phase-wave differential builds
-> downstream routes become more accessible
-> one candidate gains control of action
```

The phrase does not mean the brain accumulates a large net electric charge. Neural tissue remains
approximately electrically neutral in bulk. The relevant physical events are local charge
separation, transmembrane ionic current, synaptic current, extracellular potential differences,
electric-field gradients, and their effects on receiving cells.

A minimal candidate estimator is:

```text
effective_drive(c,t)
  = sum over cells [geometry and projection weight
                    x signed current
                    x phase alignment to candidate c]

electrical_PWD(c,t)
  = effective_drive(c,t) - expected_drive(c,t)
```

This is one projection of PWD, not the whole concept. A full PWD can include timing, phase,
duration, waveform, magnitude, and spatial pattern. Structured phase separation can also carry
information; SAN does not require every useful population to become globally synchronous.

## What different systems contribute

### Interoception and homeostasis

Specialized receptors and pathways report different internal conditions: stretch, pressure,
temperature, oxygen and carbon-dioxide conditions, energy need, hydration, inflammation, pain,
and more. Reflex control, felt bodily state, urge, and conscious report are not one evidence level.

### Cortex and thalamus

Cortical and thalamic loops help maintain context, transform evidence, prepare actions, and
compare predicted and received information. Prefrontal cortex participates in control, but it is
not a little commander above the rest of the brain.

### Basal ganglia

Basal-ganglia circuits contribute to action competition, gating, reinforcement, vigor, and
selection. Their effects depend on cortical, thalamic, brainstem, and bodily context.

### Cerebellum

The cerebellum contributes to prediction, timing, calibration, and correction of sensorimotor
consequences. It is not only a movement smoother, and it is not the sole prediction system.

### Layer 5 and descending output

Layer 5 pyramidal neurons provide major cortical output routes to other cortical and subcortical
targets. They do not constitute the entire motor system. Brainstem, spinal cord, muscles,
autonomic pathways, endocrine systems, and the body complete the act.

### Returning evidence

The action changes the world and the organism. Vision, hearing, touch, proprioception,
interoception, vestibular input, autonomic change, and social response can all return different
parts of the consequence.

## Two ordinary meanings of choice

Micah's 2026 clarification distinguishes two situations that should not be flattened into one
experiment.

**Choosing among represented alternatives** includes familiar cases such as orange juice versus
milk. Each candidate recruits a distributed pattern of taste, memory, current body state,
expectation, learned consequence, and goal-related information. SAN asks whether one candidate's
coherence-weighted effective drive helps explain which route reaches action.

**Interrupting a learned behavior loop** begins with an already practiced cue-prediction-action
trajectory. A person may report more choice when the trajectory becomes clear enough to evaluate,
inhibit, delay, or redirect before completion. This is a different task involving metacognitive
access, inhibitory control, and behavior change across time.

Meditation, yoga, and related awareness practices are possible interventions for studying the
second case, not evidence that the SAN mechanism is already established. A serious test needs an
active comparator, preregistered behavior, neural and bodily measures, expectancy and demand
controls, and follow-up. Subjective reports matter as reports of experience; they do not alone
identify the physical mechanism.

## Choice connects one episode to the next

Choice is not only the end of a present computation. An action changes the body and world, returns
new evidence, and can alter the memory and criteria that constrain later episodes. This makes
agency part of personal continuity:

```text
present self/world state
-> candidate futures
-> selected action
-> returned consequence
-> changed memory, value, and policy
-> later self/world state
```

The current episode is not the entire person, but it is one causal contributor to what that person
becomes. See
[[conscious-episode-diachronic-self-continuity|Conscious Episodes and the Continuity of a Person]].

## A bat emits a pulse and listens to the result

Bat echolocation gives this abstract loop a concrete form.

In 2020, [Weineck, Garcia-Rosales, and Hechavarria](https://doi.org/10.1371/journal.pbio.3000658)
recorded activity in bat frontal cortex and dorsal striatum. Before the animal vocalized, beta and
high-gamma activity changed in ways that helped predict whether the next sound would be an
echolocation pulse or a communication call.

Beta power in the caudate nucleus was more pronounced before and during echolocation than
communication. Gamma power in parts of the frontal auditory field was greater around echolocation,
theta coupling distinguished call modes, and pre-vocal spike-LFP phase locking was especially
evident in frontal gamma. The researchers were therefore already tracking power, timing, phase
relation, interareal coupling, and the class of action that followed.

In 2022, [Garcia-Rosales and colleagues](https://doi.org/10.1038/s41467-022-31230-6) recorded
frontal and auditory cortex during vocalization. Before the call, information flow was mainly
frontal-to-auditory. After an echolocation pulse, auditory-to-frontal flow became prominent as the
self-generated acoustic consequence returned.

That reversal gives the book and wiki a compact perception-action story:

```text
the system prepares a particular kind of act
-> the bat emits the sound
-> the environment transforms the sound into an echo
-> auditory evidence returns
-> the network changes its directional emphasis
```

Together, the studies establish the observable pieces of SAN's proposed action bridge: a
frequency- and phase-structured pre-action state, prediction of action class, top-down pre-vocal
information flow, the vocal act, and returned sensory information. SAN's synthesis is that coherent
pre-action recruitment increases the effective electrical valence of one candidate pattern,
builds its PWD relative to tonic context, and helps that route gain control of laryngeal output.

```text
beta/high-gamma power and phase-locking changes
+ theta-scale fronto-striatal coupling
+ pre-vocal frontal-to-auditory information flow
-> candidate operational trace of a building PWD / electrical valence
-> selected vocal motor program
-> echolocation or communication call
-> auditory feedback and revised network state
```

## How this entered SAN

The history has an early criteria branch and two later source branches.

### Prediction, evidence, and criteria before PWD

`a0453z.md`, a multi-speaker discussion internally dated July 31, 2013, joins remembered causal
relations, predicted futures, Michael Shadlen's evidence-accumulation work, uncertainty, and Peter
Tse. `a0452z.md`, internally dated September 7, 2014, names criterial satisfaction causation as the
bridge from learned cellular conditions to reasoning and action.

The current formulation keeps the full mechanism visible: prediction and value shape candidate
activity; evidence and circuit state contribute to commitment; neural pathways recruit motor
pools; neuromuscular transmission and calcium release follow; ATP powers contraction. The early
sources establish genealogy for the control problem, not evidence that accumulated activity
automatically produces correct moral judgment.

### Echolocation, send-and-response, and the tonic/phasic bridge

The note `a0154z.md` carries an internal July 13, 2017 date. It compares neural signaling with
echolocation and a network handshake: a signal is sent, the system receives a response, and the
next state is organized. The same note describes a slower tonic field as an expected context and
a faster phasic burst as the conspicuous change.

In August 2022, `a0111z.md` directly integrated the new bat information-flow paper into SAN. It
connected pre-vocal top-down flow with hierarchical feedback driving behavior and preserved the
authors' warning that their LFP result did not prove causal initiation or planning.

In September 2022, `a0001z.md` described the bat result as an example of top-down control with
phase-wave differentials. That is Micah Blumberg's interpretation of the study, not the study's
own conclusion.

### Psychological valence and the later electrical analogy

In August 2022, `a0271z.md` explicitly discussed psychological valence in basolateral-amygdala
ensembles and then proposed an analogy to physical valence and NAPOT phase changes. The note says
the amygdala paper prompted the word-level comparison. Micah's present recollection also links the
idea to the bat work.

The safest source-faithful reconstruction keeps both contributions:

- the bat work supplied a vivid pre-action -> act -> returned-information mechanism;
- the amygdala work supplied the explicit appetitive-aversive valence problem;
- SAN proposed that coherence-weighted effective drive and a building PWD might connect
  valuation to route selection and action.

That final step is the SAN hypothesis. Psychological valence can bias which candidate is
recruited; SAN electrical valence describes the proposed physical leverage of the recruited
assembly. It does not mean a positive feeling is positive electrical charge, that stronger power
is better value, or that one band stores emotion.

## From neural coincidence to vocal-cord movement

Coincident activity initiates a multi-stage transformation from neural timing to muscle movement:

```text
coherent candidate assembly
-> changed downstream neural recruitment
-> cortical and subcortical motor coordination
-> brainstem laryngeal motor neurons
-> laryngeal nerves and neuromuscular junctions
-> acetylcholine-triggered muscle action potentials
-> calcium release
-> ATP-powered actin-myosin contraction
-> vocal-fold movement and sound
```

More coordinated descending activation can recruit motor units and change muscle force. The cited
bat recordings cover the frontal, striatal, and auditory parts of this route around call onset. A
direct next experiment can combine those measurements with brainstem laryngeal activity, motor-
nerve output, and vocal-fold physiology to test the complete chain.

The coincident neural pattern is therefore a control and recruitment signal, not the energy source
for contraction. Vocal output also depends on coordinated respiratory and articulatory motor pools.

## Where the Gamma Consideration Sandwich fits

The Gamma Consideration Sandwich, or GCS, is a proposed coordination motif. In its careful form,
it asks whether slower or feedback-associated context, faster local updates, and deep cortical
output interact in a timing-sensitive way as evidence becomes action and action becomes new
evidence.

The bat work is a useful comparator because it separates:

- a pre-vocal state;
- a specific action class;
- cortical depth and direction;
- several frequency bands;
- call onset; and
- post-vocal sensory return.

But GCS cannot inherit the bat result as proof. A GCS experiment must name one circuit and test its
own layer, timing, frequency, direction, behavior, and perturbation predictions.

GCS also cannot replace the basal ganglia, cerebellum, brainstem, spinal cord, autonomic system,
or endocrine system. It is one possible coordination layer inside a larger embodied architecture.

An automatically transcribed Clubhouse discussion with Jeff Hawkins and Subutai Ahmad is a useful
predecessor comparison for active sensorimotor perception, layer-5 output, and reference frames.
Those are attributed Hawkins/Numenta-family ideas. SAN's distinct joined proposal adds tonic
context, PWD, inhibitory route selection, distributed rendering, motor realization, and returned
consequence.

## A measurable model

Let `s_t` represent the measured sensory, body, and task state. Let `c_t` be the candidate actions,
and let `v_t(c)` be the estimated consequence of candidate `c` under that state. Let `g_t(c)`
represent how accessible each candidate is to downstream control.

```text
a_t ~ policy(candidate | state, value, access, recent history)
```

After the action, compare predicted consequence `p_t` with observed consequence `o_(t+1)`:

```text
e_(t+1) = o_(t+1) - p_t
```

The result can update body estimate, learned value, candidate accessibility, memory, and future
policy. This is a bookkeeping model, not a claim that one brain area stores one number for each
term.

SAN adds a narrower empirical question: do relative timing, phase, duration, waveform, magnitude,
and spatial distribution improve held-out prediction of selection and returned consequence after
controlling anatomy, firing rate, spectral power, movement, arousal, body state, task history, and
flexible recurrent models?

## Consequence-sensitive meaning

The same measured difference can support different actions under different rules, deadlines,
memories, or goals. A ballot-related signal before a deadline and the same signal after it can be
physically similar but behaviorally different because the remaining action changed.

This makes meaning an operational relation among receiver state, learned rule, available action,
predicted consequence, and returned result. It is not inferred from signal magnitude or rarity
alone. See [[pragmatic-agency-consequence-sensitive-meaning]].

## What would support the SAN extension?

1. A receiver-relative timing or phase variable predicts which candidate action becomes effective
   beyond standard neural and behavioral variables.
2. The variable changes before the declared selection or action endpoint.
3. A selective perturbation changes the predicted component without merely reducing general
   performance.
4. A compensating timing intervention rescues the component.
5. The model also predicts the action-generated sensory or bodily return.
6. The result transfers across held-out conditions with the same declared mechanism.

## What would weaken it?

- Firing rate, power, body state, movement, or an ordinary recurrent model explains the result
  equally well.
- A claimed valence signal tracks salience, arousal, motor preparation, or sensory intensity
  instead.
- Directionality disappears under common-input, waveform, volume-conduction, or movement
  controls.
- A perturbation changes all performance rather than the predicted route or variable.
- The proposed phase feature does not predict the returned consequence.
- The model needs a different unregistered band, layer, or region after each failed test.

## What this does not claim

- Beta does not universally control gamma.
- A frequency band is not a feeling or decision.
- Psychological valence is not electrical valence.
- SAN electrical valence is not bulk net-charge accumulation or valence-electron chemistry.
- Prefrontal cortex is not the sole executive.
- Layer 5 is not the whole motor system.
- The bat studies do not prove NAPOT, PWD, GCS, SAN, or consciousness.
- Decoding action or value does not demonstrate subjective experience.

## Book route

The bat example belongs primarily in Chapter 19 because it gives the perception-consideration-
action loop a memorable real organism and a returned sensory consequence. Chapter 20 should then
use a shorter historical box to explain the two valence branches and immediately install the
variable firewall. Chapter 23 can use the completed loop to explain choice without an inner
chooser. The Evidence Atlas should preserve the complete source and claim boundaries.

## Predictive skill and structural adaptation

The 2012 [[gh-a0560z|source]] joins sensory search, anticipatory readiness, inhibition, target
selection, coordinated movement, and practice. Its useful mechanism is a perception-to-action loop,
not an all-motor-functions-in-layer-5 or one-headshot-one-myelin rule. [[gh-a0533z|a0533z]] adds a
third-party mouse dopamine-feedback study while keeping dopamine as one part of returned consequence.

## Coincidence, inhibition, and commitment

[[gh-a0575z|a0575z]] and [[gh-a0577z|a0577z]] add an early lower-level route beneath the later
perception-to-action loop. Concurrent evidence changes effective drive; inhibition and pathway
state alter which candidate route remains accessible; threshold crossing commits the system to an
action whose consequences return to the organism. This does not make electrical activity the
metabolic energy of muscle contraction. It identifies the neural coordination stage that recruits
motor pools before neuromuscular transmission and ATP-powered contraction.
## Related pages

- [[early-a0531-a0561-obscure-argument-map|Early a0531-a0561 Obscure Argument Map]]

- [[voluntary-shared-cognitive-environment-retained-personhood|Voluntary Shared Cognitive Environments and Retained Personhood]]
- [[pragmatic-agency-consequence-sensitive-meaning|Pragmatic Agency and Consequence-Sensitive Meaning]]
- [[neural-path-selection-interneurons-choice|Neural Path Selection, Interneurons, and Choice Across Scales]]
- [[interoception-as-distributed-body-sensing|Interoception as Distributed Body Sensing]]
- [[body-model-as-control-surface|Body Model as Control Surface]]
- [[proprioceptive-feedback|Proprioceptive Feedback]]
- [[gamma-wave-consideration-sandwich|Gamma Consideration Sandwich]]
- [[embodiment-vision-gamma-consideration-sandwich|Embodiment, Vision, and GCS]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[feedback-strange-loops-self-model|Feedback Loops, Strange Loops, and the Self-Model]]
- [[criterial-causation|Criterial Causation]]
- [[gh-b0306y|Hawkins and Subutai Clubhouse transcript]]

---
title: "Neural Path Selection, Interneurons, and Choice Across Scales"
tags: [san, choice, path-selection, interneurons, dendrites, decision-making, effective-connectivity]
aliases: [Neural Path Tracing, Action Potential Path Tracing, Choice Bifurcation]
summary: "A plain-language and source-governed account of how dendritic criteria, inhibitory circuits, temporary effective routes, population dynamics, action, and feedback can produce choice without an inner chooser."
status: governed
---

# Neural Path Selection, Interneurons, and Choice Across Scales

## The problem in ordinary language

At any moment, many things could happen next.

A neuron may receive thousands of inputs but emit no spike, one spike, a burst, or a local
dendritic event. A cortical circuit may strengthen one pattern, suppress another, or hold several
possibilities in competition. An animal may prepare more than one possible movement and later
commit to one. After the movement, the consequences can change what the nervous system is ready
to do next time.

It is tempting to explain this by imagining a small executive inside the brain that examines the
options and chooses. That only moves the problem. We would still need to explain how the inner
executive chooses.

The useful question is therefore:

> How can the physical organization of cells, circuits, body, and environment turn many possible
> next states into one actual transition, without adding an inner chooser?

SAN's historical answer developed through the ideas of **information criteria**, **choice
bifurcation**, **active neuropaths**, **action potential path tracing**, and **neural network choice
refinement**. Those terms become scientifically useful when each is tied to a measurable scale.

## A path can mean four different things

Suppose a city has thousands of roads.

The road map tells us which journeys are physically possible. It does not tell us which roads are
open, congested, useful for today's destination, or actually taken by one vehicle. A nervous
system has the same distinction.

### The structural path

This is the physical anatomy: axons, synapses, dendrites, tracts, and recurrent connections. It
defines routes that **could** carry activity.

### The active path

This is the subset of connections that has consequence now. Synaptic strength, release
probability, membrane state, neuromodulation, inhibition, timing, and ongoing activity all affect
whether an anatomical connection is effective.

### The population trajectory

Large groups of neurons change together. Researchers can represent that distributed state as a
point in a mathematical space and follow its trajectory over time. The trajectory may separate
contexts, candidate actions, commitment, and movement without following one serial chain of
neurons.

### The behavioral path

The organism receives evidence, considers or prepares possibilities, commits, acts, receives
consequences, and learns. This path includes the body and world, not only the brain.

Micah's phrase **path tracing** was an attempt to connect these levels. The strong version of the
idea is not that the brain literally runs a computer-graphics path tracer. It is that we should
trace which available neural routes become causally effective under one context, how competing
routes change, and how the resulting action updates future criteria.

## What an interneuron actually changes

The early SAN notes describe inhibitory neurons as train switches. The image is memorable because
a small local event can change a large downstream outcome. But the biology needs a more precise
description.

An interneuron normally does not take an incoming spike and send it down a different axon. Instead,
inhibitory and disinhibitory circuits can:

- reduce or divide a target's response gain;
- subtract a component from a response;
- change when a target can fire;
- suppress a competing population;
- release another population by inhibiting its inhibitor;
- stabilize strongly recurrent excitation;
- alter which temporary assembly forms; and
- change which downstream population can influence behavior.

The train-switch metaphor is therefore best understood at the **circuit consequence** level. The
"switch" is a changed pattern of accessibility and competition, not a mechanical junction inside
one axon.

Primary work illustrates several bounded versions of this idea:

- [Pi et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24097352/) showed a cortical
  disinhibitory-control route involving VIP interneurons.
- [Essig et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8196039/) found that
  GABAergic neurons in superior colliculus contributed causally to spatial movement selection,
  with results arguing against a simple local-suppression story.
- [Kuan et al., 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11162200/) joined behavior,
  calcium imaging, electron microscopy, and circuit modeling to relate recurrent
  excitatory-inhibitory motifs to choice-selective activity in mouse posterior parietal cortex.

These experiments do not reveal one universal interneuron choice code. They show why cell type,
target, timing, circuit, and task must be named.

## Does a neuron make a choice?

The answer depends on what the word means.

If choice means conscious deliberation by a person-like agent, there is no evidence that one
neuron does that.

If choice means a system entering one of several possible next states under learned and current
criteria, then a neuron can be described as making a criterion-sensitive transition. It can:

- remain below threshold;
- generate a local dendritic event;
- produce a somatic spike or burst;
- change transmitter release;
- enter a plasticity state; or
- alter the probability of later events.

This is the careful form of the early SAN phrase that every cell makes a choice "in a sense."

An internally dated October 5, 2012 source establishes an earlier boundary: Micah argued that cells
react rather than behaving as independent choosing persons. The later circuit-level Choice model is
a refinement that locates selection across conditional cellular transitions, effective routes,
population dynamics, action, and feedback. It should not be read as putting a chooser inside each
cell.

The criteria are physical. They include synaptic weights, dendritic morphology, receptor state,
membrane voltage, ion-channel availability, inhibition, neuromodulators, metabolic context, and
input timing.

[Takahashi et al., 2016](https://doi.org/10.1126/science.aah6066) showed that manipulating
active apical dendrites shifted perceptual detection thresholds in a mouse whisker task. That is
strong evidence that dendritic events can causally contribute to perception. It is not evidence
that a dendrite is an independent conscious observer.

[Bittner et al., 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC7289271/) showed that
behavioral-timescale synaptic plasticity can rapidly change the inputs that later produce a CA1
place field. This supplies a concrete example of a neural event changing future response
criteria. It is not a universal theory of choice.

## From local transitions to action

The important problem is how scales connect.

### 1. Dendrites establish conditional sensitivity

Learned structure and present state determine which combinations of inputs matter to a cell.

### 2. Cells change the local circuit

A spike, burst, dendritic event, or failure to fire changes what neighboring and downstream cells
receive.

### 3. Excitation and inhibition reshape access

Competition, disinhibition, timing, and gain alter which populations can continue to influence the
network.

### 4. A temporary effective route appears

The active route is a subset of the structural route. It exists for a particular context, input,
body state, and interval.

### 5. Population activity carries candidates

Neural populations can represent more than one possible action before commitment. In macaque
dorsal premotor cortex, [Cisek and Kalaska, 2005](https://doi.org/10.1016/j.neuron.2005.01.027)
reported activity related to multiple reach options and later action selection.

### 6. Distributed dynamics select and integrate

[Mante et al., 2013](https://www.nature.com/articles/nature12742) showed that context-dependent
selection and integration of sensory evidence could be understood as one recurrent population
dynamic in prefrontal cortex and a trained recurrent network.

### 7. Action closes the loop

Motor output changes the body or world. New sensory and interoceptive evidence returns. Reward,
error, effort, pain, success, and social consequence can alter immediate state and longer-term
criteria.

This is choice without a hidden chooser. Each scale contributes a different operation, and the
whole embodied loop produces the behavior.

## Coincidence turns a selected route into action

The tonic population pattern supplies recurring timing and excitability windows. High-phasic PWD
events carry the candidate-specific update. A route gains control when enough of its contributions
reach the relevant receivers at compatible times and phases, add as effective drive, and recruit
premotor and motor populations.

```text
candidate sensory or remembered pattern
-> phase-compatible high-phasic PWD events
-> coincident arrival at route-selective receivers
-> excitation, inhibition, and recurrent coupling reshape competition
-> one candidate recruits premotor and motor pools
-> motor-neuron action potentials and neuromuscular transmission
-> muscle-fiber calcium release and ATP-powered contraction
-> muscular or vocal action
-> returned consequence updates later choice criteria
```

SAN calls that signed, receiver-specific leverage relative to baseline **electrical valence**. Bat
vocalization studies supply a concrete example: pre-vocal beta/high-gamma power, theta coupling,
and frontal gamma spike-LFP phase locking predicted future call type, while pre-vocal information
flow was predominantly frontal-to-auditory and post-echolocation flow carried returned sensory
information in the opposite direction. SAN integrates those measured parts as a building PWD that
biases one motor action pattern.

The coincident neural pattern is the control and recruitment signal, not the muscle's energy
source. Vocal execution additionally coordinates respiratory, laryngeal, and articulatory motor
pools.

## The connection to Peter Tse

The SAN archive repeatedly credits Peter Tse's *The Neural Basis of Free Will: Criterial
Causation*.

Tse's central route is that physically implemented information can change the criteria that
govern which future neural events become possible. Information cannot rewrite the already
realized present, but neural plasticity can change the physical basis of future events.

That predecessor matters because it prevents SAN from presenting "information changes future
neural criteria" as an uncredited invention. SAN's distinct work is the attempt to connect
criteria to:

- dendritic pattern recognition;
- active versus structural neural paths;
- inhibitory and disinhibitory routing;
- receiver-relative phase, duration, magnitude, and waveform;
- recursive neural rendering;
- action and returning consequences; and
- the no-inner-observer problem.

Those additions still require their own evidence.

## How information can have causal power

Saying that information has causal power does not require a nonphysical force.

Imagine that one learned sensory pattern changes a dendrite, synapse, or circuit so that a later
input now produces a different action. The represented information matters because its physical
encoding changed a future transition.

The chain is:

```text
past event
-> physical neural change
-> changed response criteria
-> different active route
-> different action
-> different consequence
```

The scientific task is to identify each physical link and show that the represented variable
adds explanatory or predictive value.

## What SAN adds

The established neuroscience already gives us dendritic computation, synaptic plasticity,
inhibitory circuit diversity, recurrent dynamics, action competition, and effective
connectivity.

SAN adds a joined proposal:

1. Learned dendritic and synaptic configurations are part of the criteria that determine which
   local patterns become consequential.
2. An active neuropath is a temporary, state-dependent subset of the structural neuropath.
3. Inhibition and disinhibition help shape that active route through timing, gain, competition,
   stability, and access.
4. The represented state is distributed across cells and scales, not stored in one executive
   neuron.
5. Relative phase, duration, waveform, magnitude, and spatial pattern may help determine which
   route or assembly becomes effective.
6. Conscious consideration may be the recursive, embodied use of these distributed candidate
   states in prediction, action, report, and learning rather than inspection by an inner viewer.

The first four points are a synthesis that can be compared with established circuit and
population accounts. The last two are stronger SAN hypotheses.

## Choice as control calibration

The multi-speaker sources [[gh-a0357z|a0357z]] and [[gh-a0358z|a0358z]], internally dated July 10,
2011, preserve an earlier branch. Micah describes the self as a collective of cells whose learned
predictions and present conditions shape action, while awareness can add variables to later
selection. The modern descendant is a physically lawful, nested choice process whose criteria can
change through learning and feedback. The current paths were first Git-fixed in June 2022, and the
other speakers' arguments remain separately attributed.

The multi-speaker note [[gh-a0165z|a0165z]], internally dated June 5, 2012 but first Git-fixed in
2022, adds an early Micah formulation: the self learns a body and world control map, represents
possible consequences, acts, and compares what returned with what was expected. A later choice can
change because the represented possibilities and physical criteria changed.

```text
possibilities + expected consequences
-> action
-> returned consequence
-> control error or satisfaction
-> updated criteria
```

[[gh-a0166z|a0166z]], internally dated 2013, rejects the split in which the brain decides before a
separate self. [[gh-a0175z|a0175z]] later frames embodied causal responsiveness as being
"response-able." These are genealogy for SAN's control-and-responsibility account, not proof of
metaphysical free will. Satisfaction must be operationalized as a declared valuation or control
variable rather than assigned to one chemical or frequency.

[[gh-a0187z|a0187z]] is a multi-speaker discussion internally dated May 1, 2012 and first
current-path Git-fixed in June 2022. Micah's turns describe competing neural patterns, inhibition,
and behavioral change as a new sequence becoming effective against an older one. The note also
suggests that only selected summaries or peaks enter conscious participation. This is an early
deterministic competition-and-selection ancestor. Its blanket neighbor-inhibition wording is not
retained: inhibition, disinhibition, competition, and recruitment depend on cell class, circuit,
state, target, and timing.

## What would distinguish the SAN extension?

A useful test should compare SAN with serious alternatives, not merely show that the brain has
waves or inhibition.

- Infer anatomy and effective connectivity separately.
- Change context while holding gross anatomy fixed and ask whether the active route changes as
  predicted.
- Perturb dendritic compartments and inhibitory cell classes independently.
- Compare evidence accumulators, attractor networks, affordance competition, recurrent dynamics,
  and SAN phase-relational models on held-out trials.
- Control firing rate, power, movement, arousal, distance, and body state before attributing
  additional information to phase, duration, waveform, or magnitude.
- Manipulate consequences independently of sensory evidence to test whether feedback changes
  future criteria.
- Require a failure condition: if ordinary state-space and effective-connectivity models explain
  the held-out neural and behavioral effects equally well, the stronger SAN path-selection
  extension is not supported.

## The dated SAN route

`a0433z.md`, internally dated April 29, 2012, rejects an uncaused inner chooser while describing
perception and action as products of learned expectations and relations. The later SAN Choice work
does not reverse that deterministic boundary; it supplies the missing measurable selection process.

`a0453z.md`, a multi-speaker discussion internally dated July 31, 2013, joins remembered causal
relations, predicted consequences, accumulated evidence, chance, Michael Shadlen, and Peter Tse.
`a0452z.md`, internally dated September 7, 2014, then names **criterial satisfaction causation** as
the bridge from learned cellular conditions to reasoning and action. The modern motor chain keeps
the distinction clear: neural criteria and coincidence recruit motor pathways; neuromuscular
transmission and calcium release follow; ATP powers contraction.

Two later historical notes deepen this route. `a0338z.md`, internally dated November 23, 2014,
describes near-simultaneous inputs producing a recognized phasic update. `a0350z.md`, internally
dated November 1, 2014, treats choice as a criteria-driven planned response and places
preconscious preparation inside the person-level causal process. They strengthen the bridge from
coincidence to prepared action without requiring one fixed integration window, gamma-only carrier,
or literal soliton propagation.

- `a0188z.md` states that neurons alter future information criteria rather than create their own
  choice.
- `a0209z.md` develops thresholds, dendrites, coincidence, and criterial causation.
- `a0364z.md` introduces interneurons as train switches and names choice bifurcation.
- `a0238z.md` distributes executive function across cells and circuits.
- `a0258z.md` names action potential path tracing, then proposes "excitatory neuropathways from
  incoming senses" as a better name.
- `a0330z.md` states that information has causal power through neural read-write feedback.
- `a0007z.md` distinguishes structural from active neuropaths and records a major revision from
  blanket blocking toward recruitment, grouping, and circuit specificity.
- `a0616z.md` and `c0000x.md` preserve the planned choice-refinement and responsibility story.
- `00changelog.md` identifies the interneuron-level choice branch as a major contribution built
  from Tse and Buzsaki.
- `a0165z.md`, `a0166z.md`, and `a0175z.md` preserve the earlier embodied-control,
  brain-is-self, and responsibility genealogy under exact date and speaker boundaries.
- `SAOv9.md` turns the branch into the ten questions of family 6.4.
- `a0081z.md` names Choice Refinement Theory: deterministic agents can alter later choices when new
  variables and consequences change their criteria.
- [[gh-b0160y|b0160y]], recorded October 4, 2021 and first publicly Git-fixed June 8, 2022,
  connects sensory-motor self-modeling, learned experience, present context, candidate futures at
  several horizons, and one physically selected behavior. Its newer retranscription repairs
  obvious speech-to-text errors but does not move the recording or public-fixation dates.
- `a0433z.md`, `a0453z.md`, and `a0452z.md` preserve the 2012-2014 bridge from prediction and
  determinism through evidence accumulation to criterial satisfaction and action.

Exact hashes, Git dates, prompt dispositions, source boundaries, and the primary-evidence matrix
are preserved in the
[governed source review](/v5ma.github.io/wiki/san/knowledge-graph/reviews/neural-path-selection-interneurons-choice-review-20260716.md).

## Iterative choice refinement

Immediate route selection and long-term refinement are different operations:

```text
current candidates + criteria -> action -> consequence
consequence + new variables -> changed criteria -> later action
```

This lets a deterministic system make a different later choice because its physical and
informational state has changed. It does not prove metaphysical free will, and improvement is not
automatic. The test is whether a declared consequence changes later behavior through a measurable
criteria update beyond repetition, reward, fatigue, or uncontrolled drift.

## Causal explanation, repair, and responsibility

The 2021 `b0205y` source family records David Eagleman's *Incognito* and neurolaw work as an
important influence on the Choice Refinement branch. The problem comes before the terminology:
if behavior has physical causes, it may sound as though deliberation, restraint, hope, and
responsibility disappear.

The stronger operation is the opposite. A caused nervous system can encounter new evidence,
represent an unperformed alternative, inhibit a prepared response, act differently, and learn
from what followed. The later action has causes, but it can differ because the system's criteria
and available routes changed.

```text
current criteria
-> new evidence or represented alternative
-> response competition and possible withholding
-> action
-> consequence for self and others
-> changed criteria
-> later choice
```

Eagleman and Correro explicitly argue that biological explanation is not exculpation and can
support rational, individualized rehabilitation in a bounded drug-policy context. Brass and
Haggard provide a narrow experimental example of preparing an action and intentionally
withholding it. Schurger, Sitt, and Dehaene show why a readiness potential should not be treated
automatically as a completed unconscious decision.

The comparison stops before claiming that neuroscience has proved or disproved metaphysical free
will, diagnosed the cause of every harmful act, or supplied a universal treatment or justice
policy.

SAN extends this into a testable response-capacity model. Keep these variables separate:

- causal contribution to an action;
- sensitivity to evidence and reasons;
- ability to represent consequences and alternatives;
- capacity to inhibit or redirect a prepared response;
- ability to learn from returned consequences;
- treatment or repair capacity;
- present risk to other people or beings; and
- moral and legal responsibility.

The private source also contains two ethical prompts that survive without their unsupported
details. First, the vulnerable recipient of harm belongs in the model alongside the actor's
capacity to change. Second, technologies intended to detect serious harm create their own
privacy, due-process, and purpose-limitation problems. These are ethics and governance layers,
not evidence for the neural Choice mechanism.

Sources:

- [Eagleman and Correro, *Why Neuroscience Matters for a Rational Drug
  Policy*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1375495)
- [Brass and Haggard, intentional withholding of prepared
  action](https://pubmed.ncbi.nlm.nih.gov/17715350/)
- [Schurger, Sitt, and Dehaene, accumulator model of self-initiated
  movement](https://pubmed.ncbi.nlm.nih.gov/22869750/)
- [Lee et al., neural bases of counterfactual
  representations](https://pubmed.ncbi.nlm.nih.gov/41213446/)

## Book route

This material should be distributed across the book before it is integrated.

- Chapter 13 explains dendritic criteria and local nonlinear transitions.
- Chapter 15 explains inhibition, competition, disinhibition, temporary assemblies, and
  effective routes.
- Chapter 19 explains action candidates, commitment, movement, and feedback.
- Chapter 23 asks how those scales jointly produce choice, responsibility, and an action-usable
  self without an inner chooser.

Chapter 23 should begin with the ordinary problem of many possible actions and one actual next
action. Only after the mechanism is clear should it introduce path tracing, criterial causation,
entification, or free-will language.

## A September 2013 criteria-noise-synchronization ancestor

`a0092z.md` places learned criteria, variable neural transitions, synchronization,
neurofeedback, and plasticity inside Neo Mind Cycle. Its bounded contribution is that current state
and learned criteria constrain a transition, while feedback changes later routing. Noise is not
itself freedom, and the metronome analogy does not prove one global phase-locking mechanism for all
choice. The multi-speaker record also predates the mature 2022 inhibitory-neuropath formulation.

## Compact reason-to-action ancestor

[[gh-a0462z|a0462z]] joins represented reasons, dendritic coincidence, excitation/inhibition, and
a motor or no-motor outcome. The source strengthens the Choice genealogy, while the physiological
chain remains explicit: neural selection recruits motor pathways; neuromuscular transmission,
muscle-fiber calcium release, and ATP-powered contraction execute movement.

## The 2012 competition ancestor and the 2022 joined route

[[gh-a0153z|a0153z]], internally dated May 15, 2012, describes candidate neural patterns competing
through inhibition while life experience changes the strength of possible pathways. The enduring
operation is constructive: many possible activity patterns are present, inhibition and excitation
bias their effective routes, and one selected pattern coordinates the organism. The source's
animal-fighting and board-game imagery is not a claim that all neighboring neurons inhibit one
another.

[[gh-a0149z|a0149z]], first Git-fixed July 7, 2022, later names **Choice as a Neuropath** and links
route selection to inhibitory circuitry, distributed memory activity, context-sensitive outputs,
and the changing neural trajectory. [[gh-a0151z|a0151z]], internally dated October 26, 2013, adds a
Micah-authored line about cellular criteria, coincidence timing, synaptic and dendritic change,
and metabolic support. The surrounding diet and supplement prescriptions are historical material,
not current medical guidance.

This staged route does not backdate the 2022 Choice term into 2012. It shows that the problem of
distributed competition and learned pathway selection preceded the mature term.

## Ownership and physical transition branch

[[gh-a0489z|a0489z]] separates a cellular or circuit transition, a performed action, and later
ownership or responsibility. [[gh-a0497z|a0497z]] adds prediction, inhibition, and the possibility
of halting or permitting action. The mature Choice operation remains a later synthesis: learned
criteria, competing effective routes, physical commitment, action, report, and feedback. The
sources' metaphysical and quantum sections are not used as neural or physical evidence. See the
[[early-a0156-a0502-obscure-argument-map|full source map]].

## 2011 coincidence-to-action ancestor

[[gh-a0575z|a0575z]] contains an internally dated 2011 ancestor of the later Choice mechanism.
Its literal ion-counting imagery is not the durable claim. The durable operation is that
spatially and temporally distributed evidence converges, pathway state changes its effective
weight, a threshold is crossed, and an action route becomes effective. [[gh-a0577z|a0577z]] adds
the role of excitation and inhibition in making some routes easier to enter and others harder.

This is an ancestor rather than the mature 2022 term. The later Choice operator adds learned
criteria, explicit route competition, recurrent context, ownership, action, and returned
consequence.
## Read next

- [[agency-valuation-action-feedback|Agency, Valuation, Action Selection, and Returned Consequence]]
- [[early-a0333-a0351-obscure-argument-map|Early a0333-a0351 Obscure Argument Map]]
- [[early-a0352-a0372-obscure-argument-map|Early a0352-a0372 Obscure Argument Map]]
- [[early-a0180-a0197-obscure-argument-map|Early a0180-a0197 Obscure Argument Map]]
- [[sparse-sequential-rendering-temporal-binding|Sparse Sequential Rendering and Temporal Binding]]
- [[receptive-inceptive-dendritic-projection|Receptive, Inceptive, and Dendritic Projection]]
- [[inhibitory-routing-signal-processing-grid-graph|Inhibitory Routing, Neural Signal Processing, and Grid/Graph Models]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[feedback-strange-loops-self-model|Feedback Loops, Strange Loops, and the Self-Model]]
- [[entification-observer-problem|Entification and the No-Inner-Observer Problem]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[memory-prediction-rendering-sequence|Memory Prediction Rendering Sequence]]
- [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]]
- [[early-a0135-a0155-obscure-argument-map|Early a0135-a0155 Obscure Argument Map]]
- [[coincidence-to-structure-activity-directed-spinogenesis|Coincidence Becomes Geometry]]
- [[choice|Choice legacy page]]
- [[consciousness-as-high-bandwidth-choice-mechanism|Consciousness as a High-Bandwidth Choice Mechanism legacy page]]
- [[saov9-cycle-06-memory-state-drift|SAOv9 Cycle 6]]
- [[early-a0457-a0481-obscure-argument-map|Early a0457-a0481 Obscure Argument Map]]

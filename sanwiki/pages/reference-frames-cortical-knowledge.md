# Reference Frames and Cortical Knowledge

> **Evidence boundary:** Neural reference frames are established in particular cells, populations, circuits, and tasks. The claim that every cortical column learns a complete object model through one location-based algorithm is the Hawkins/Numenta theory. SAN adopts the computational problem of relating partial observations to learned contexts, then adds a distinct hypothesis about receiver-relative oscillatory differences, distributed rendering, and action.

## What is a reference frame?

A **reference frame** states what a variable is measured relative to. The same event can be represented relative to the eyes, head, body, a movable object, a landmark, a route, or a larger environment.

Examples include:

- the direction of a sound relative to the head or to the room;
- an edge relative to the retina or to a viewed object;
- a touched feature relative to a finger or to the touched surface;
- an intended reach relative to gaze, body, or world coordinates;
- a remembered location relative to a route, boundary, or environment.

A useful neural claim must name the variable, origin, coordinate transformation, cell or population, task, and behavioral readout. Calling activity a "map" or "reference frame" does not by itself establish any particular neural code.

## Established neuroscience

Several bounded findings are relevant:

- Egocentric, allocentric, object-centered, eye-centered, head-centered, body-centered, and mixed reference frames have been measured in different tasks and brain systems.
- A population can flexibly change which reference frame best describes its activity when task instructions change.
- Hippocampal, entorhinal, retrosplenial, parietal, sensory, and motor systems contribute different variables to spatial and action-centered transformations.
- Some cortical neurons are spatially tuned outside the hippocampal formation, including populations studied in somatosensory and parietal cortex.
- Cross-modal signals can alter activity even in primary sensory cortex. In mice, for example, auditory-cortex activation recruited a specific inhibitory circuit in primary visual cortex and changed visually guided behavior.
- Cortical projection neurons have diverse target patterns. Anatomical broadcasting and cross-modal modulation are real, but neither finding is automatically a biological "vote."

These findings do not establish one reference-frame algorithm in every cortical area, identical columns, complete object models in single columns, or phase-coded consensus.

## The Hawkins/Numenta proposal

Hawkins and colleagues proposed a stronger, explicit theory:

1. neurons with grid-cell-like functions exist throughout neocortex;
2. each cortical column tracks its input within an object-centered location space;
3. movement or a movement-like operator updates that location;
4. columns learn parallel object models from successive sensations;
5. long-range associative connections allow columns to "vote" toward a stable interpretation;
6. analogous location-space operations may organize abstract knowledge and thought.

The 2019 paper labels these as proposals and predictions. It also predicts cortical grid cells in layer 6 and displacement cells in layer 5. Those layer assignments and the universal complete-model claim remain unconfirmed model commitments.

### The layer-5 motor-output claim

Layer 5 contains heterogeneous pyramidal-cell classes. Some thick-tufted or extratelencephalic neurons project to subcortical structures, and sensory cortical areas can influence orienting and active sampling through defined routes. Other cortical neurons project within cortex or to different target combinations.

The medically bounded statement is:

> Many neocortical regions possess routes by which cortical state can affect subcortical processing, orienting, or action. This does not make every layer-5 neuron a motor neuron, prove that every cortical column issues its own motor command, or erase the specialized roles of motor cortical systems.

### "Voting" is a model term

Cross-modal and long-range cortical interactions are established. "Voting" is Hawkins's computational interpretation of some such interactions, not an anatomical cell class, synaptic mechanism, or measured physical quantity.

A physiological account must replace the word with declared operations, such as:

- excitation or inhibition of a named receiver population;
- a change in firing probability or population state;
- target-specific axonal transmission;
- altered sensory gain or prediction;
- changed choice, orienting, or movement.

## Micah's 2021 Clubhouse question

On April 24, 2021, Micah spoke with Jeff Hawkins and Subutai Ahmad in a Clubhouse discussion about *A Thousand Brains*. Micah asked whether a column that assembles an object or idea and possesses an action route must directly perform multimodal processing.

Hawkins's answer preserved an important distinction:

- a lower sensory column does not directly process raw light, sound, and touch as one undifferentiated input;
- its local model remains constrained by the inputs reaching that population;
- activity from other cortical systems can nevertheless provide cross-modal context;
- Hawkins interprets that contextual exchange as columns "voting" toward an interpretation;
- higher cortical populations can receive already transformed inputs from several regions.

This interaction is more useful than the old page's shorthand. It defines the exact bridge problem SAN later develops: **how locally partial representations become coordinated without placing every modality inside one generic column**.

The surviving public transcript was machine-generated and was explicitly marked as difficult to read. A 2026 large-v3-turbo transcript improves discovery, but quotations still require verification against the audio. The recording date, public Git-fixation date, and later interpretation must remain separate.

## The 2021 presence-memory donor idea

In the same discussion, Hawkins proposed that a sense of presence depends partly on retaining very recent states and anticipated future states, allowing thought to move among "what I was doing," "what I am doing," and "what I expect to do."

This is a Hawkins hypothesis, not an established definition of consciousness and not originally a SAN claim. It is nevertheless a useful donor idea because it links:

**recent state -> current state -> anticipated state -> action continuity**

SAN's later account differs in two ways. It treats these states as distributed network activity rather than memories viewed by an inner subject, and it asks how tonic context, phasic departures, recurrent redistribution, bodily feedback, and motor consequences physically transform one state into the next.

## Source-faithful SAN extension

Micah's 2022 sources did not merely rename Hawkins's "votes." They joined the reference-frame problem to a larger receive-transform-project account:

1. receptors and neural populations sample partial state;
2. local circuits transform those samples relative to their own learned context;
3. axonal projections deliver differentiated updates to particular receivers;
4. receiver populations interpret those updates against their ongoing tonic state;
5. recurrent exchange changes the distributed body-world model;
6. the changed network state alters prediction, selection, and action;
7. sensory and bodily consequences return as new input.

The June 2022 source describes cortical processing as functionally similar to the interaction between persistent context and changing samples in hippocampal-entorhinal systems. It also describes phase-changing arrays as distributed receivers and transmitters. The September 2022 source adds nested local and hippocampal reference frames, event recurrence, memory-prediction-rendering, and eventual motor consequences.

The bounded SAN hypothesis is therefore:

> Reference-frame relations may be carried and revised through receiver-specific neural events whose timing, phase, amplitude, duration, excitation, and inhibition alter the next population state. NAPOT names the proposed many-to-one-to-many integration and redistribution process; PWD names a candidate multidimensional difference event within that process.

This does not establish that location is encoded only by phase, that all cortical knowledge uses one oscillatory code, or that a macroscopic field broadcasts an object model without anatomical transmission.

## From "vote" to measurable update

The failed image treated each column as an identical model, drew direct phase-coded votes between modalities, propagated a surface wave across cortex, and ended in a centralized consensus object. A source-faithful replacement must not do that.

The medically testable chain is:

**active sampling -> modality- and pathway-specific evidence -> local transformation -> named interareal transmission -> receiver-state change -> distributed choice or action -> sensory feedback**

In SAN terms, the candidate tonic state supplies receiver-relative context and phasic PWD events supply differentiated updates. Compatible signals may reinforce or coordinate one another, while inhibition and structured phase separation may suppress or distinguish competing routes. The network does not send all evidence to a final internal screen; its changed activity is the perception-action state.

## Micro, meso, and macro scales

### Micro

A neuron integrates synaptic inputs in its dendritic and membrane state. Its axon projects output to particular targets. A single cell can be sensitive to combinations of variables, but it does not contain a complete multimodal world.

### Meso

A local population can encode selected features, transitions, coordinates, or task variables. Its effective reference frame may be mixed or flexible. "Column" is a useful anatomical and computational scale only when its area, boundaries, cell types, layers, and task are specified.

### Macro

Distributed cortical, thalamic, hippocampal, subcortical, sensory, and bodily systems coordinate context, memory, prediction, and action. Cross-modal integration and object recognition are network outcomes, not a final vote counted at one location.

## What the quarantined image taught us

The rejected image remains useful as a diagnostic record. It collapsed five different evidence classes:

1. measured laminar anatomy;
2. Hawkins's proposed cortical-column algorithm;
3. established cross-modal modulation;
4. SAN's PWD and NAPOT hypotheses; and
5. a completed perceptual object.

It also used identical columns, universal layer roles, a fixed phase code, a literal spreading cortical wave, and a central consensus object. None of those should return as medical illustration.

A future figure should instead show:

- different sensory routes rather than interchangeable columns;
- locally measured coordinate variables rather than complete miniature objects;
- named excitatory, inhibitory, corticocortical, thalamic, or subcortical routes;
- evidence labels separating measured findings, Hawkins predictions, and SAN hypotheses;
- a distributed action/readout rather than a central object display.

Image generation remains paused. The quarantined image is not publication art.

## Discriminating tests

### Hawkins model

A strong test should identify a cortical population that:

- represents input location relative to an object rather than retina, head, body, or world alone;
- updates that location with movement or a movement-like operator;
- preserves object-relative structure across transformations;
- contains the predicted cell classes or connectivity;
- supports causal object recognition when perturbed.

### Cross-column coordination

A voting-style result must specify sender, receiver, pathway, sign, latency, transformed variable, and behavioral effect. It should distinguish consensus-like exchange from ordinary recurrent inference, gain control, attention, inhibition, and learned association.

### SAN extension

A SAN-specific test must:

- define the tonic reference state for a named receiver;
- measure a multidimensional PWD event rather than phase alone;
- show how the event changes receiver activity;
- trace the effect into distributed reinstatement, choice, or action;
- outperform firing-rate, connectivity-only, and conventional recurrent-network explanations;
- avoid assuming one universal cortical-column implementation.

## Sources

### Primary and theory literature

- [Hawkins et al. (2019), location-based cortical framework](https://doi.org/10.3389/fncir.2018.00121)
- [Constantinescu, O'Reilly, and Behrens (2016), grid-like coding in a learned conceptual space](https://doi.org/10.1126/science.aaf0941)
- [Long and Zhang (2021), spatially tuned cells in rat primary somatosensory cortex](https://doi.org/10.1038/s41422-020-00448-8)
- [Town, Brimijoin, and Bizley (2017), egocentric and allocentric representations in auditory cortex](https://doi.org/10.1371/journal.pbio.2001878)
- [Sasaki et al. (2020), flexible reference-frame coding in parietal cortex](https://pubmed.ncbi.nlm.nih.gov/32541964/)
- [Wilber et al. (2014), egocentric-by-allocentric conjunctive coding in posterior parietal cortex](https://pubmed.ncbi.nlm.nih.gov/24741034/)
- [Iurilli et al. (2012), auditory-cortex-driven inhibition in primary visual cortex](https://doi.org/10.1016/j.neuron.2011.12.026)
- [Han et al. (2018), diverse single-cell projection patterns from visual cortex](https://doi.org/10.1038/nature26159)
- [Harris and Shepherd (2015), neocortical circuit themes and variations](https://doi.org/10.1038/nn.3917)

### Dated source genealogy

- [April 24, 2021 Clubhouse discussion, public Git copy fixed by June 2022](https://github.com/v5ma/selfawarenetworks/blob/4dcc66f84856f517b24916770a7388ee416f7377/b0306y.md)
- [June 2022 `a0126z`: functional isomorphism, distributed arrays, reference frames, and phase-changing projection](https://github.com/v5ma/selfawarenetworks/blob/e2f2885356339f6547bead9a7b95ef662c1a86d5/a0126z.md)
- [September 2022 `a0310z`: nested reference frames, local events, memory-prediction-rendering, and action](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md)

## Read next

- [[gh-a0645z|Are Grid-Like Representations a Component of All Perception and Cognition?]]
- [[cognitive-map|Cognitive Map]]
- [[grid-cells|Grid Cells]]
- [[cortical-columns-reference-frames|Cortical Columns and Reference Frames]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
- [[phase-language-firewall|Phase Language Firewall]]

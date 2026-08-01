# Cellular Memory

**Cellular memory** is a broad operational term for a cell whose response to a present input depends on its prior state. A neuron, immune cell, epithelial cell, yeast cell, or other living cell can retain history through different mechanisms and for different durations. The phrase does not imply that every cell stores episodic memories, that one receptor contains a remembered scene, or that all cellular memory uses one molecular code.

For Self-Aware Networks, the important operation is:

```text
input pattern + prior cellular state
-> receptor, channel, and intracellular integration
-> state-dependent cellular response
-> changed signals to later receivers
-> updated future readiness
```

This is the medically recoverable core of the early [[cellular-oscillating-tomography|Cellular Oscillating Tomography (COT)]] proposal.

## What the SAN sources were trying to say

The source history is more specific than the later three-axis summary that described cellular memory as oscillation, receptor configuration, and transcriptomic state:

1. On June 8, 2022, [[gh-a0597z|a0597z]] was publicly Git-fixed with the proposal that every cell can be analyzed as a chemical network. Receptors and three-dimensional protein structures supply selective input surfaces, while signaling feedback loops, gradients, and timing condition the response.
2. On June 21, 2022, [[gh-a0011z|a0011z]] publicly introduced the term **Cellular Oscillating Tomography**. It joined intercellular messages, receptor types and configurations, threshold-sensitive integration, and the activation of genetically available cellular functions.
3. On August 8-11, 2022, [[gh-a0270z|a0270z]] developed the proposal into context-dependent multi-signal integration. Cell type, receptor and protein composition, signaling cascades, temporal dynamics, and prior state jointly determine which response a cell produces.
4. On August 10, 2022, [[gh-a0272z|a0272z]] stated the receive-to-output sequence directly: several receptor activations are integrated through intracellular cascades, and the resulting cell-specific signals alter other cells and larger populations.
5. On September 1, 2022, [[gh-a0007z|a0007z]] applied the same functional idea to neurons: synaptic and dendritic structure, excitation, and inhibition change which input patterns a neuron preferentially detects and transmits.

These stages establish an evolving SAN hypothesis about **history-dependent pattern detection and response**, not a demonstrated universal cellular memory code.

## Established biology

Several parts of this operation are established, but in mechanism-specific settings:

- A cell's internal state can change how it interprets the same extracellular signal. Kramer and colleagues measured state-dependent, multimodal growth-factor processing in individual human cells.
- Molecular signal dynamics can matter in addition to average concentration. NF-kappaB oscillation persistence and experimentally controlled pulse timing can alter transcription, while pulsed and sustained p53 activity can produce different gene-expression programs and cell fates.
- A non-neural cell can retain a specific history through a defined molecular mechanism. In budding yeast, a stable Whi3 super-assembly produces a pheromone-refractory state retained by the mother cell.
- In neurons, prior activity can alter synaptic efficacy, receptor trafficking, dendritic and somatic excitability, local protein synthesis, release probability, structure, gene regulation, and later engram allocation.
- Plasticity is not always strengthening. Repetition can produce sensitization, habituation, receptor desensitization, synaptic depression, homeostatic compensation, or a qualitatively different response, depending on the cell, pathway, stimulus, and timescale.

No one item in this list is the memory by itself. A useful explanation must identify the preparation, state variable, duration, input, readout, and causal intervention.

## A state-transition formulation

Let `x_t` be the present input to a cell, `s_t` its measured prior state, `c_t` its local context, and `y_t` its response:

```text
y_t     = F(x_t, s_t, c_t)
s_(t+1) = G(s_t, x_t, y_t)
```

Cellular memory is demonstrated when the same controlled probe `x_t` produces a reproducibly different `y_t` because of a prior history represented in `s_t`, and when perturbing the proposed state variable changes or rescues that difference.

The state vector may include receptor abundance and localization, ion-channel availability, membrane voltage, intracellular calcium, second-messenger and kinase dynamics, metabolic state, chromatin and transcriptional state, protein localization, morphology, synaptic efficacy, or other preparation-specific variables. It should not be reduced in advance to oscillation, receptors, or transcriptome alone.

## Source-faithful translations

### "Receptors are memories"

Receptors are sensors and transducers, not self-contained memories. The recoverable COT proposition is that receptor complement, localization, conductance state, and downstream signaling architecture help determine what combinations of input a cell can detect and how it responds. Some of those properties can be changed by prior activity and therefore can participate in a memory-bearing state.

### "Learning in DNA"

DNA encodes proteins and regulatory possibilities used by cellular responses. Activity can alter transcription, translation, chromatin state, and sometimes longer-lived epigenetic state without changing the DNA sequence. The early SAN phrase should therefore not be read as a claim that every experience writes new information into genomic sequence.

### "Single-cell Hebbian learning"

Cells can integrate coincident or temporally structured inputs, and their later responses can depend on prior activation. Calling this **Hebbian** is a proposed functional analogy, not proof that every non-neural cell implements the synapse-specific Hebbian rule developed for neuronal connections. The testable common operation is history-dependent association between an input configuration and a later cellular response.

### "Oscillating memory"

Some intracellular networks use pulses or oscillations whose number, duration, frequency, or persistence changes downstream expression and fate. Other forms of cellular memory are non-oscillatory. COT's stronger claim is therefore not that oscillation is the only storage medium, but that temporal dynamics may be an important, measurable part of a receiver's state and input-output transformation.

## Micro, meso, and macro scales

- **Micro:** one cell integrates present input relative to receptor, channel, molecular, electrical, metabolic, and structural state.
- **Meso:** neighboring cells or a local neural circuit exchange outputs, so one cell's changed response alters the state and routing of other cells.
- **Macro:** tissues, neural systems, and embodied behavior can reflect accumulated cellular histories.

A micro-scale state change does not automatically create a network oscillation, a memory engram, a percept, or an action. Those transitions require separate evidence.

## SAN/COT hypothesis

The bounded SAN proposal is that a receiver-specific, multivariable description of cellular state - including temporal or oscillatory variables when they are present - will predict the cell's later output and its effects on downstream receivers better than a static account based only on stimulus identity or average molecular abundance.

In neurons, this connects to SAN's receive-integrate-project account: prior synaptic, dendritic, intrinsic, and molecular state changes how a neuron transforms a pathway-specific input; its axonal and synaptic outputs then alter a distributed circuit. At larger scales, those updated cells contribute to later tonic context and phasic departures. No inner viewer reads a cellular record. The changing network itself detects, transforms, transmits, remembers, and acts.

## A discriminating experiment

1. Give matched neural or non-neural cells different controlled stimulus histories.
2. Present the same probe input after each history.
3. Measure receptor localization, membrane and calcium state, signaling dynamics, gene expression, morphology, and secreted or synaptic output at declared timescales.
4. Compare a conventional state-space model with a model that adds COT temporal and oscillatory variables.
5. Perturb the candidate memory-bearing state and test whether the predicted input-output difference disappears.
6. Restore the state or pathway and require a selective rescue.

The SAN extension is supported only if its variables add held-out prediction and receiver-specific causal control beyond simpler state, concentration, waveform, and history models. It is weakened if the same effect is fully explained without them.

## Image audit

The withdrawn 2026 illustration was trying to show a valid high-level idea: prior input changes cellular state, and the changed state alters later output. It failed medical review because it made repeated input look universally sensitizing, drew receptor change, calcium, CaMKII, MAPK/ERK, CREB, transcription, stronger release, and nested brain rhythms as one deterministic chain, and jumped from a single cell directly to synchronized neural populations.

The intact image is quarantined and is not publication art. A future replacement should separate neuronal and non-neural examples, show strengthening and weakening branches, keep molecular pathways preparation-specific, and place micro-, meso-, and macro-scale consequences in separate panels. No replacement is being generated while art remains paused.

## Primary references

- [Kramer et al. (2022), multimodal cellular state and single-cell decision-making](https://doi.org/10.1126/science.abf4062)
- [Caudron and Barral (2013), a protein super-assembly encoding history in budding yeast](https://doi.org/10.1016/j.cell.2013.10.046)
- [Nelson et al. (2004), NF-kappaB oscillations and gene-expression dynamics](https://doi.org/10.1126/science.1099962)
- [Ashall et al. (2009), pulsatile stimulation and NF-kappaB-dependent transcription](https://doi.org/10.1126/science.1164860)
- [Purvis et al. (2012), p53 dynamics and cell-fate control](https://doi.org/10.1126/science.1218351)
- [Turrigiano et al. (1998), bidirectional activity-dependent synaptic scaling](https://doi.org/10.1038/36103)
- [Frick et al. (2004), learning-related changes in dendritic excitability](https://doi.org/10.1038/nn1178)
- [Cai et al. (2016), excitability and overlap between memories close in time](https://doi.org/10.1038/nature17955)
- [Jain et al. (2024), delayed and stochastic CaMKII activation in behavioral-timescale plasticity](https://doi.org/10.1038/s41586-024-08021-8)

## Related concepts

- [[cellular-oscillating-tomography]]
- [[cell-as-chemical-neural-network]]
- [[every-cell-chemical-neural-network]]
- [[single-cell-hebbian-assembly]]
- [[receptor-inhibition-pattern]]
- [[synaptic-plasticity]]
- [[dendritic-spines]]
- [[engram]]
- [[memory-persistence]]
- [[tonic-phasic-canvas]]
- [[phase-wave-differential]]
- [[cellular-communication-graph-neural-network]]

## Source provenance

- [[gh-a0597z|a0597z]]: first public Git fixation, June 8, 2022. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0597z.md)
- [[gh-a0011z|a0011z]]: COT term and initial receptor/transcriptomic formulation, first public Git fixation June 21, 2022. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/597e8082f3940306d778dcbd2115046ddcdaa560/a0011z.md)
- [[gh-a0270z|a0270z]]: context-dependent cellular signal integration, developed August 8-11, 2022. [August 8 source](https://github.com/v5ma/selfawarenetworks/blob/ed2cde47e7640d60de6eb292f5a8603fafe4171d/a0270z.md) and [August 11 source](https://github.com/v5ma/selfawarenetworks/blob/3c6aa23655e427d19037558d398a17a7afc62f73/a0270z.md)
- [[gh-a0272z|a0272z]]: receptor activation through intracellular transformation to outgoing cellular signals, first public Git fixation August 10, 2022. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/75b194fb97d2da09fb8bdd4130be98b910a72adb/a0272z.md)
- [[gh-a0007z|a0007z]]: neuronal morphology, excitation, inhibition, and pattern selectivity, public Git fixation September 1, 2022. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/df87e529d1dd1b470df2a059c1fb943ee08d436b/a0007z.md)

The previous auto-generated page treated passages in [[gh-gpt2023x|GPT2023X]] and later vector summaries as primary SAN evidence. In the cited GPT2023X passages, Micah asks the question and **Self Aware Networks GPT** supplies the cellular-memory wording. Those AI-assisted passages are useful later interpretations, but they do not establish Micah's historical formulation or its date. This revision therefore grounds the genealogy in the earlier Micah-authored sources above.
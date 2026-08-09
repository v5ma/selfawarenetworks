# Sharp-Wave Ripples, Memory Scaling, and the SAN Interpretation

> **Boundary note:** A hippocampal sharp-wave ripple (SWR) is a defined electrophysiological event, not a synonym for every neural burst, traveling wave, replay sequence, or phase-wave differential. SWRs are well-established contributors to some forms of memory processing. SAN's claim that they can help scale a locally stored pattern into a distributed multimodal rendering is a distinct, testable interpretation.

## The event in plain language

A sharp-wave ripple combines two linked measurements in hippocampal local field potential:

1. a slower, large-amplitude **sharp wave**, reflecting a strong transient population input; and
2. a brief **ripple-frequency oscillation**, accompanied by coordinated firing in hippocampal circuits.

The relevant frequency range is not universal. It varies with species, hippocampal region, recording method, and event-detection rule. Rodent CA1 studies often analyze ripple activity around 140-220 Hz or 150-250 Hz, while human intracranial studies frequently use lower and preparation-specific bands. An SWR therefore must be identified from the recorded signal and anatomy, not from one fixed number.

SWRs are common during non-REM sleep, immobility, and quiet waking, but they also occur during awake memory tasks. Some events contain compressed sequences related to prior or possible trajectories. Replay is not always a literal copy of the last experience: sequence content can be forward, reverse, reorganized, prospective, or otherwise shaped by task and state.

## What established neuroscience supports

### Generation is distributed across a circuit

A common rodent account begins with a CA3 population burst that produces the CA1 sharp wave. Local interactions among CA1 pyramidal cells and inhibitory interneurons help shape the ripple-frequency component. This is not a universal one-line generator. CA2, entorhinal input, septal state, hippocampal position, and behavioral state can alter initiation and propagation.

### SWRs participate in memory, but are not all of memory

Causal interruption studies in rodents show that disrupting selected SWRs can impair performance in hippocampus-dependent spatial tasks. Awake SWRs can support learning and memory-guided decisions, while post-experience SWRs can support consolidation. These results do not establish SWRs as the sole mechanism of consolidation, the start of every recollection, or a general transfer command for every kind of memory.

### Human evidence supports reinstatement and coupling

Intracranial human recordings have linked hippocampal ripples to successful episodic recall, content-selective cortical reinstatement, and temporally coupled ripples in medial temporal and association cortex. Human sleep recordings also show structured relations among hippocampal SWRs, cortical theta bursts, downstates, upstates, and spindles. These findings support transient hippocampal-cortical coordination without showing that a complete experience is copied unchanged from one site to another.

## The recovered SAN idea

The first explicit recovered SAN treatment is [[gh-a0309z|a0309z]], publicly Git-fixed on September 11, 2022. It joined three observations and one stronger proposal:

- SWRs contain brief high-frequency population activity and sequential neural activation;
- ripple-associated sequences can correspond to learned paths or strategies;
- episodic recollection can reinstate distributed sensory and spatial content;
- **SAN proposal:** a high-phasic event can help a learned local pattern scale into a larger, receiver-dependent network pattern.

The central idea was not simply "ripples consolidate memory." It was **memory scaling**:

```text
partial cue or learned local state
-> high-phasic population event
-> structured sequential reactivation
-> receiver-specific hippocampal-cortical coordination
-> partial reinstatement of sensory, spatial, emotional, or action state
```

The source describes episodic memory as a spatially and temporally organized reconstruction involving more than one sensory modality. That preserves the medically plausible core of the older "volumetric memory movie" language without claiming that one SWR contains a literal video or that every recalled feature is veridically replayed.

## Later SAN extensions, kept in date order

- **November 28, 2022, [[gh-a0325znapot6|NAPOT 6]]:** proposes that sparse neuron-glia-scale PWD events can recruit bursts, ripples, and inhibited arrays, with persistent or dominant population patterns contributing to thought, emotion, sensation, and movement.
- **January 4, 2023, [[gh-00abstractbump|retrospective source map]]:** associates an October 2021 sequence-selection note with SWRs and Memory Prediction Rendering Sequences. The surviving 2021 transcript contains the map, attention, inhibition, and sequence-selection precursor, but not explicit SWR terminology; the SWR label is therefore not backdated to 2021.
- **September 2024, [[gh-02san|02san]]:** adds the stronger hypothesis that some inverse or re-ordered sequences may help terminate an oscillatory or behavioral pattern.
- **May 2025, [[gh-06san|06san]]:** supplies a later literature-oriented traveling-wave/SWR synthesis. It is useful as later development, not evidence that every statement was present in 2022.

## SWRs, PWD, and NAPOT are not interchangeable

A **sharp-wave ripple** is an observed hippocampal population event defined from local electrophysiology.

A **phase-wave differential** is SAN's broader proposed description of a receiver-relative departure from expected tonic activity. A candidate PWD may involve timing, phase, frequency, amplitude, duration, transmitted quantity, and network position.

**NAPOT** is the larger receive-transform-project account of recurrent distributed rendering.

The source-faithful relation is therefore:

```text
some SWRs may instantiate high-phasic, receiver-relevant population differences
but not every SWR is a PWD,
not every PWD is an SWR,
and neither term is a synonym for all traveling waves
```

## What "memory scaling" must predict

SAN's interpretation becomes useful only if it explains more than the presence of an SWR. A strong test would record hippocampus and multiple cortical targets during encoding and recall, then compare:

- standard SWR rate, duration, amplitude, ripple frequency, and replay content;
- cross-region timing and directionality;
- the identity and state of receiving populations;
- cortical reinstatement of sensory, spatial, affective, and action-related features;
- SAN's added receiver-relative PWD variables.

The memory-scaling hypothesis predicts that receiver identity and pre-event state should help determine which parts of a distributed memory are reinstated and what later action becomes more likely.

## What would count against the SAN extension?

Evidence would weaken the proposed extension if:

- the added PWD variables fail to predict cortical reinstatement or behavior beyond standard SWR measures;
- receiver state does not improve prediction of which content is reactivated;
- perturbing the proposed hippocampal-cortical route leaves the predicted reinstatement unchanged;
- apparent "volumetric" recall reduces to an analyst's reconstruction with no distributed causal signature; or
- the same SAN account labels mutually incompatible burst, ripple, and traveling-wave events without event-specific criteria.

## Read next

- [[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]]
- [[memory-consolidation|Memory Consolidation]]
- [[memory-as-regenerable-pattern|Memory as Regenerable Pattern]]
- [[engram|Engrams]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[cortical-traveling-waves|Cortical Traveling Waves]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]

## Primary evidence and dated SAN sources

1. Micah Blumberg, [a0309z, first explicit SAN SWR and memory-scaling treatment, September 11, 2022](https://github.com/v5ma/selfawarenetworks/blob/217e306b6c2c2ddd5be3c07bd603bd17ff80bc66/a0309z.md).
2. Micah Blumberg, [NAPOT 6, later PWD-to-ripple scale-up extension, November 28, 2022](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0325zNAPOT6.md).
3. Sullivan et al., [Relationships between hippocampal sharp waves, ripples, and fast gamma oscillation](https://pubmed.ncbi.nlm.nih.gov/21653864/) (2011).
4. Oliva et al., [Role of hippocampal CA2 region in triggering sharp-wave ripples](https://pubmed.ncbi.nlm.nih.gov/27593179/) (2016).
5. Girardeau et al., [Selective suppression of hippocampal ripples impairs spatial memory](https://pubmed.ncbi.nlm.nih.gov/19749750/) (2009).
6. Jadhav et al., [Awake hippocampal sharp-wave ripples support spatial memory](https://pubmed.ncbi.nlm.nih.gov/22555434/) (2012).
7. Gupta et al., [Hippocampal replay is not a simple function of experience](https://pubmed.ncbi.nlm.nih.gov/20223204/) (2010).
8. Norman et al., [Hippocampal sharp-wave ripples linked to visual episodic recollection in humans](https://pubmed.ncbi.nlm.nih.gov/31416934/) (2019).
9. Vaz et al., [Coupled ripple oscillations between the medial temporal lobe and neocortex retrieve human memory](https://pubmed.ncbi.nlm.nih.gov/30819961/) (2019).
10. Jiang et al., [Coordination of human hippocampal sharp-wave ripples during NREM sleep with cortical events](https://pubmed.ncbi.nlm.nih.gov/31533977/) (2019).

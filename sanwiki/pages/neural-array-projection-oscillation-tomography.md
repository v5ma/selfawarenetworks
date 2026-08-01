# Neural Array Projection Oscillation Tomography

**Neural Array Projection Oscillation Tomography (NAPOT)** is SAN's proposed architecture for combining partial, time-varying neural and body-state signals into a distributed working model that guides further perception and action.

The proposal is broader than ordinary convergence and divergence, but narrower than the claim that one neuron, cortical column, frequency band, or brain region reconstructs the whole experienced world. NAPOT must be evaluated as a family of declared operations at specific scales.

## The central mechanism

NAPOT can be written as a recurrent many-to-one-to-many transformation:

```text
partial sensory, bodily, memory, and recurrent signals
-> receiver-specific biological transformation
-> temporary population integration
-> distributed projection to new receivers
-> changed sampling, memory, prediction, and action
-> next cycle
```

The arrows denote multistep functional routes, not universal direct synaptic connections. Each receiver transforms an event according to its receptors, dendrites, membrane state, inhibition, neuromodulation, recent history, and current network context.

## Reception, transformation, and projection

### Reception

Dendritic branches and local circuits gather many inputs. A receptive field is a measured relation between input conditions and a response; it is not a miniature picture stored on a dendrite.

### Transformation

Inputs interact nonlinearly. Branch-local dendritic events, somatic integration, inhibition, recurrent activity, and synaptic history can make the same nominal input produce different consequences at different times.

### Projection

A neuron's ordinary output leaves through its axon and presynaptic terminals. At larger scales, populations influence other populations through target-specific pathways. SAN's **inceptive field** names the declared downstream target set and measurable effects of that output; it is a functional proposal, not a second dendritic anatomy.

See [[receptive-inceptive-dendritic-projection|Receptive and Inceptive Dendritic Projection]].

## The scale ladder

### Micro NAPOT

A neuron receives many synaptic inputs, integrates them, and projects an axonal update. Established cellular physiology supports this motif. Calling it tomography is a SAN interpretation because one neuron does not reconstruct the complete percept.

### Meso NAPOT

A local circuit or cortical population combines partially overlapping neuron-level states and redistributes a population update. Recurrent population dynamics are established, but cortical areas are not interchangeable copies of one universal column algorithm.

### Macro NAPOT

Distributed cortical, thalamic, hippocampal, association, and sensorimotor systems combine partial information across recurrent loops. NAPOT proposes that their coordinated updates maintain an action-ready body-world model. No single region is the final screen or observer.

## Tomography without a hidden viewer

Tomography is useful here because a reconstruction can be constrained by many partial projections. It is limited because neural tissue does not receive a ready-made set of geometric rays and does not have a known CT-style inverse solver.

A valid NAPOT model must define:

- what variable is sampled;
- which cells or populations provide each projection;
- the transform applied by each receiver;
- the reconstruction target;
- the comparison or error measure;
- the spatial and temporal scale; and
- the behavioral consequence.

The distributed network performs the observer operation by changing its own state and what it does next. The theory does not place perception inside a smaller internal agent. See [[screen-metaphor-no-inner-viewer|Screen Metaphor, No Inner Viewer]].

## Oscillation and phase-wave differentials

Oscillation supplies changing excitability and timing relationships. SAN proposes that a maintained tonic context and consequential phasic departures help organize receiver-relative differences called [[phase-wave-differentials|Phase-Wave Differentials]].

This is stronger than saying that phase or rate carries information. A NAPOT account must show that the proposed multidimensional event improves prediction of a receiver's later state, routing, reconstruction, or behavior beyond rate, power, phase, or conventional prediction error alone.

Coherence and dispersion can both matter. Phase-compatible activity may support temporary coupling, while structured separation can preserve boundaries or suppress competing routes. Maximal synchrony is not the goal, and random desynchronization is not automatically meaningful differentiation.

## Established science and SAN-specific claims

| Level | Current status |
|---|---|
| Nonlinear dendritic integration | Established in bounded cell types and preparations. |
| Convergent, divergent, recurrent, and feedback pathways | Established, with pathway-specific anatomy and function. |
| Population dynamics and traveling cortical waves | Established as measurable phenomena related to task and state. |
| Distributed working representations | Supported across many systems; their content and causal role depend on task and measurement. |
| A repeated receive-transform-project motif across scales | A useful abstraction; not proof that one identical biological operator exists at every scale. |
| NAPOT reconstruction of a body-world model | SAN hypothesis. |
| PWDs as typed reconstruction updates | SAN hypothesis requiring direct comparison with simpler coding models. |
| The distributed field-cell system as observer-action | Stronger SAN hypothesis requiring intervention and decoding tests. |

## Historical development

A 2017 SAN history document already refers to **NAPOT Theory, Fifth Revision**, establishing that the named architecture had undergone multiple iterations by that date. The later public GitHub record preserves the concept and subsequent revisions:

- [SAN `00welcome.md`](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/00welcome.md) presents the fifth-revision NAPOT route.
- [SAN `00changelog.md`](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/00changelog.md) records later revisions and the extension of related receive-transform-project language to COT and BOT.
- [SAN `02san.md`](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md) connects NAPOT with phase-sensitive neural rendering.
- [SAN `a0325zNAPOT6.md`](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0325zNAPOT6.md) preserves a later revision stage.

The chronology establishes SAN's development. It does not itself validate the mechanism or make later terminology retroactively present in earlier sources. See [[napot-revision-genealogy|NAPOT Revision Genealogy]].

## Discriminating tests

1. **Reconstruction benchmark:** specify partial neural observations and test whether a NAPOT model reconstructs held-out sensory, body-state, or behavioral variables better than rate-only, phase-only, and standard recurrent baselines.
2. **Receiver-specific perturbation:** perturb a declared route while matching mean firing rate or power, then test whether the predicted receiver state and behavior change selectively.
3. **Cross-scale test:** measure whether micro-scale state improves prediction of meso- and macro-scale updates without assuming identical variables or time constants.
4. **No-inner-viewer test:** successful decoding from one region is insufficient; the model must predict distributed consequences for sampling, memory, report, or action.
5. **Falsification:** reject the tested NAPOT implementation if simpler models explain the same held-out data and perturbation effects equally well.

## Primary component anchors

- [Polsky, Mel, and Schiller (2004), branch-local dendritic computation](https://doi.org/10.1038/nn1253)
- [Churchland et al. (2012), neural population dynamics during reaching](https://doi.org/10.1038/nature11129)
- [Mante et al. (2013), context-dependent recurrent population computation](https://doi.org/10.1038/nature12742)
- [Davis et al. (2020), traveling cortical waves and perceptual sensitivity](https://doi.org/10.1038/s41586-020-2802-y)

These papers support component mechanisms. None presents or validates NAPOT.

## Read next

- [[napot-overview|NAPOT Overview]]
- [[neural-rendering|Neural Rendering]]
- [[tonic-phasic-canvas|Tonic and Phasic Roles: Canvas and Ink]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[napot-tomography-not-holography|NAPOT: Tomography, Not Holography]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]

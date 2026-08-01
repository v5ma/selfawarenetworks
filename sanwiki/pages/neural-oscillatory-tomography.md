---
title: "Neural Oscillatory Tomography"
tags: [san, napot, neural-rendering, oscillations, neuroimaging, source-genealogy]
aliases: [Neural Oscillation Tomography, Neural Array Projection Tomography]
status: governed
---

# Neural Oscillatory Tomography

**Neural Oscillatory Tomography** is a source-authenticated 2022 SAN term. Micah used it as a shorter name for [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography (NAPOT)]], but the source also gives it a second, connected use: a proposed external measurement program for reconstructing and perturbing changing neural states. Those uses should be related without being collapsed.

The biological hypothesis asks how neural populations receive partial signals, transform them according to learned and current state, project their effects onward, and recurrently update a distributed body-world model. The instrumentation proposal asks whether multiple measurements and controlled perturbations can identify enough of that changing state to test the hypothesis. Neither use means that one neuron performs a CT scan, that the brain contains an optical hologram, or that a completed picture is watched by an inner viewer.

## The two connected meanings

### 1. Endogenous SAN/NAPOT mechanism

The recovered 2022 operator is:

```text
partial activity in multiple neural populations
-> receiver-specific transformation
-> temporally structured projection to other populations
-> recurrent combination and redistribution
-> updated perceptual and action state
```

The source describes neural arrays as both receivers and projectors. A downstream population does not receive a semantic copy of an upstream representation. Its dendrites, synapses, membrane state, inhibition, neuromodulation, and recurrent context determine what the incoming activity does. SAN proposes that repeated transformations across many populations contribute to an integrated but distributed model.

In this usage, **tonic** means an ongoing reference or maintained population context and **phasic** means a consequential departure from that context. These are receiver-relative roles, not fixed frequency bands. A measured phase change, traveling wave, or alpha rhythm is not automatically a [[phase-wave-differential|phase-wave differential]], tomographic reconstruction, semantic token, or conscious state. See [[phase-language-firewall]].

The observer is not a separate entity downstream of the reconstruction. The same distributed neural and bodily system that changes state also constrains memory, report, attention, and action. See [[screen-metaphor-no-inner-viewer]] and [[neural-rendering]].

### 2. External reconstruction and perturbation program

In `a0115z`, Neural Oscillatory Tomography also names a proposed inverse-problem program:

```text
registered anatomy
+ synchronized modality-specific measurements
+ declared sensory input, body state, and behavior
-> constrained estimate of a changing latent neural state
-> controlled perturbation
-> predicted propagation and behavioral consequence
-> model correction
```

EEG or MEG, fNIRS or fMRI, electrical impedance measurements, optical methods, structural imaging, movement, eye tracking, and stimulation do not produce interchangeable pictures. Each measures a different physical variable, has different spatial and temporal limits, and requires a modality-specific forward model. The source-faithful modern treatment is [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]. The earlier engineering route is preserved at [[3-medical-imaging-technologies-2018|Three Wearable Brain-Imaging Proposals (2018)]].

This external program is a way to test the endogenous mechanism. It is not evidence that the brain itself performs the same inverse algorithm used by the instruments.

## Biological scale boundaries

- **Micro:** one neuron can illustrate a receive-integrate-project motif through dendritic input, nonlinear cellular integration, axonal output, and downstream synaptic effects. That motif alone is not tomography.
- **Meso:** a named local circuit or population can combine partial inputs through recurrent excitation, inhibition, dendritic integration, and anatomically constrained outputs. No single canonical cortical-column circuit is universal.
- **Macro:** distributed sensory, thalamic, association, memory, motor, and body-state systems can contribute partial state to a revisable working model. This is the scale at which SAN's tomography analogy is strongest.
- **Measurement:** external instruments observe projections of neural or physiological state through different physical channels. Their reconstruction problem must remain distinct from the proposed biological computation.

See [[san-scale-ladder-and-claim-boundaries]] and [[napot-tomography-not-holography]].

## What neuroscience supports

Established findings make components of the proposal biologically plausible without validating NAPOT:

- Recurrent population dynamics can support context-dependent selection and integration of sensory evidence ([Mante et al., 2013](https://doi.org/10.1038/nature12742)).
- Recurrent processing is important for some difficult object-recognition conditions that are not solved at the earliest feedforward response ([Kar et al., 2019](https://doi.org/10.1038/s41593-019-0392-5)).
- Spontaneous traveling cortical-wave state can predict perceptual performance in behaving primates ([Davis et al., 2020](https://doi.org/10.1038/s41586-020-2802-y)).
- Occipital-parietal alpha power and phase can modulate visual representation and perceptual sensitivity in a bounded human MEG task ([Zhou et al., 2021](https://doi.org/10.1523/JNEUROSCI.1114-21.2021)).
- Multisensory neural populations can weight visual and vestibular cues according to reliability ([Fetsch et al., 2012](https://doi.org/10.1038/nn.2983)).

These studies support recurrence, state-dependent sensory processing, traveling activity, and reliability-sensitive integration. They do not show that neural populations perform a Radon transform, reconstruct one complete three-dimensional percept, use phase as the unique content code, or generate consciousness through tomography.

## Claim ladder

1. **Established neuroscience:** neural processing is distributed, recurrent, state-dependent, multisensory, and linked to action through anatomically constrained pathways.
2. **Evidence-supported SAN interpretation:** ongoing population state can provide context in which transient timing, waveform, firing, inhibition, and synaptic changes have receiver-specific consequences.
3. **Open SAN/NAPOT hypothesis:** repeated receive-transform-project cycles combine partial neural and body-state information into a reconstruction-like distributed working model.
4. **Stronger testable hypothesis:** declared oscillatory and receiver-relative variables improve held-out reconstruction and causal prediction beyond firing-rate, power, ordinary recurrent-state, sensory, and movement baselines.
5. **External engineering hypothesis:** synchronized multimodal measurement plus perturbation can infer enough of the latent state to predict and selectively alter its next transition.

## Falsifiable tests

For the endogenous claim, define the projections, receivers, latent target, timing variables, and behavioral endpoint. Compare NAPOT variables against strong feedforward and recurrent baselines. Perturb one declared route or timing relation while controlling firing rate, power, arousal, movement, and sensory input. The stronger account is weakened if its variables add no reproducible held-out prediction, if selective disruption produces no predicted deficit, or if a simpler model explains the same results.

For the external claim, train a multimodal state estimator on synchronized anatomy, physiology, stimulus, and behavior, then require it to predict the propagation and consequence of a held-out perturbation. A visually convincing reconstruction that cannot predict intervention effects is not yet a validated mechanistic model.

## Source genealogy

- `a0115z.md` already carried the heading **"Notes on Neural Oscillatory Tomography"** and the tonic-array scanning hypothesis in the Git record on July 17, 2022 ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/b382dc3d879346a56f74bcd4e772b3b8dfb76a89/a0115z.md)).
- The July 30, 2022 changelog explicitly identifies **Neural Oscillatory Tomography** and **Neural Array Projection Tomography** as alternate names for NAPOT ([immutable changelog](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/00changelog.md#L572-L590)).
- `a0282z.md`, fixed in its simplified form on August 18, 2022, develops the array-to-array receive-and-project explanation and the distributed sensing/rendering claim ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/5d1dced8c508ce85940431dae0c89c5369ae0ecb/a0282z.md)).
- The older NAPOT parent chronology includes a 2017 "5th Revision" marker. That supports an earlier parent-theory history; it does not justify backdating every 2022 alias, measurement proposal, or later formalization.

The previous generated page incorrectly reported 2023 as the earliest dated evidence for this term and treated the missing automation packet as an authority. The direct 2022 Git sources are the authority.

## Read next

- [[napot-overview|NAPOT Overview]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[napot-tomography-not-holography|NAPOT: Tomography, Not a Literal Hologram]]
- [[multimodal-neural-state-reconstruction-perturbation|Multimodal Neural-State Reconstruction and Perturbation]]
- [[neural-arrays|Neural Arrays]]
- [[receptive-inceptive-dendritic-projection|Receptive and Inceptive Fields]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[cellular-oscillatory-tomography|Cellular Oscillatory Tomography]]
- [[bot-biological-oscillatory-tomography|Biological Oscillatory Tomography]]

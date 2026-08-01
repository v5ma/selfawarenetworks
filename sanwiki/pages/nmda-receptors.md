# NMDA Receptors

**N-methyl-D-aspartate receptors (NMDARs)** are heterogeneous ionotropic glutamate receptors. Their current is controlled jointly by agonist and coagonist occupancy, voltage-dependent magnesium block, subunit composition, localization, membrane voltage, ionic gradients, and modulatory state. This makes NMDAR signaling nonlinear and context-sensitive, but not a Boolean AND gate.

![NMDA receptors are context-sensitive channels rather than Boolean memory gates](../assets/generated/san/nmda-receptors/nmda-receptors-context-sensitive-channel-and-conditional-consequences-20260720-v1.png)

> **Medical boundary:** NMDAR activation does not automatically produce a dendritic spike, LTP, LTD, memory, phase routing, or consciousness. Calcium entry is one component of a larger receptor-, branch-, cell-, and protocol-dependent process.

## Established receptor mechanism

Most central NMDARs contain GluN1 and GluN2 subunits, sometimes with GluN3. A conventional synaptic current depends on several conditions:

- glutamate binds a GluN2 ligand-binding site;
- glycine or D-serine occupies the GluN1 coagonist site;
- the channel reaches an open state with some probability;
- membrane voltage and ionic flux influence magnesium block; and
- sodium, potassium, and often calcium move according to electrochemical gradients and receptor properties.

Classic voltage-clamp work established the voltage-dependent magnesium block of NMDAR current ([Mayer, Westbrook, and Guthrie, 1984](https://pubmed.ncbi.nlm.nih.gov/6325946/)). D-serine and glycine availability can regulate synaptic NMDAR activity rather than acting as a permanently saturated background condition ([Rosenberg et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23426681/)).

This is sometimes summarized as ligand plus depolarization, but the shortcut hides graded occupancy, stochastic gating, incomplete magnesium unblock, subunit-dependent kinetics, receptor localization, and ionic driving forces. NMDARs are coincidence-sensitive under many conditions; they are not the molecular implementation of every form of neural coincidence detection.

## From one receptor to a branch event

Opening one or several NMDARs can contribute synaptic current and local calcium without generating a dendritic spike. Sufficiently organized input can recruit regenerative NMDA current and an NMDA spike or plateau in some dendrites. That transition depends on synapse number and location, branch geometry, receptor density and subunits, membrane state, inhibition, potassium conductances, glutamate clearance, and recent activity.

The distinction matters:

1. receptor binding is not identical to channel opening;
2. channel opening is not identical to calcium signaling;
3. calcium signaling is not identical to an NMDA spike;
4. an NMDA spike is not identical to axonal output; and
5. axonal output is not identical to learning or perception.

See [[dendritic-spike]] for the wider family of NMDA-, sodium-, calcium-, and mixed dendritic events.

## Plasticity has multiple outcomes

NMDAR-dependent calcium can participate in plasticity, but calcium amplitude alone does not universally select LTP or LTD. In layer 2/3 pyramidal neurons, similar average spine-calcium transients could accompany different plasticity directions because metabotropic glutamate and endocannabinoid signaling contributed to LTD while larger NMDAR-dependent calcium supported LTP ([Nevian and Sakmann, 2006](https://pubmed.ncbi.nlm.nih.gov/17065442/)). Other work found an NMDAR-dependent LTD route involving ligand-dependent non-ionotropic signaling rather than calcium influx through the channel ([Nabavi et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23431133/)).

Possible consequences include transient synaptic current with no durable change, local biochemical signaling, facilitation of a dendritic regenerative event, LTP or LTD under defined conditions, homeostatic or heterosynaptic adjustment, changes in excitability or receptor trafficking, and excitotoxic stress under pathological activation.

The sign and persistence depend on cell type, synapse, receptor composition, timing, inhibition, neuromodulation, prior strength, biochemical state, and protocol.

## Subunits, location, and modulation

NMDAR subunit composition changes kinetics, magnesium sensitivity, pharmacology, and calcium contribution. Synaptic, extrasynaptic, developmental, and disease contexts also differ. Receptor identity should therefore be measured rather than inferred from the label “NMDA receptor.”

Mechanical effects are a real but bounded research branch. Membrane stretch has modulated or gated recombinant and cultured-cell NMDAR currents, with subunit- and intracellular-domain dependence ([Singh et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22179603/); [Maneshi et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35705487/)). These findings do not yet establish NMDARs as universal physiological mechanoreceptors or prove that ordinary brain oscillations mechanically gate them in vivo.

## SAN interpretation: an oscillatory-history-sensitive branch hypothesis

SAN sources use NMDAR nonlinearity as a molecular bridge among coincident input, dendritic state, plasticity, and later network routing. The source-faithful, medically bounded proposal is:

> **SAN hypothesis:** NMDAR contribution to a dendritic branch transition depends on receiver-relative timing and recent state. At matched mean input and firing rate, the temporal organization of synaptic input relative to local membrane and population dynamics may predict NMDAR current, branch events, plasticity, and later recruitment.

This does not make NMDARs universal phase detectors. It predicts an incremental role for timing and oscillatory history after controlling for glutamate, coagonist availability, voltage, receptor composition, inhibition, and anatomy.

The mechanosensitive SAN extension is separate:

> **Bounded mechanical hypothesis:** In receptor subtypes and cellular contexts that show mechanosensitivity, controlled membrane deformation may alter NMDAR gating or magnesium block and thereby change branch-state transitions. A physiological role requires direct in-vivo evidence at noninjurious forces.

## Bounded tests

1. **Phase versus rate:** deliver matched numbers of glutamatergic events with matched mean rate but different timing relative to a measured local oscillation. Record NMDAR current, branch voltage, calcium, and output.
2. **Mechanism controls:** measure or manipulate coagonist availability, voltage, subunits, inhibition, transporters, and potassium conductances.
3. **Incremental model:** compare timing/phase-history models against input-count, rate, voltage, receptor, and branch-geometry baselines on held-out outcomes.
4. **Plasticity alternatives:** test LTP, LTD, no durable change, and non-ionotropic signaling rather than assigning calcium thresholds in advance.
5. **Mechanical test:** in a declared receptor and preparation, independently control membrane tension and chemical input at noninjurious levels; test whether the effect survives relevant receptor and cytoskeletal controls.
6. **Falsifier:** if timing or mechanical variables add no reproducible causal or predictive value after conventional state variables are controlled, narrow the SAN extensions.

## Source genealogy

- [a0138zcalcium.md](https://github.com/v5ma/selfawarenetworks/blob/main/a0138zcalcium.md) develops NMDA supralinearity and calcium-plasticity questions while explicitly asking how one calcium signal can produce different outcomes.
- [a0325zNAPOT6.md](https://github.com/v5ma/selfawarenetworks/blob/main/a0325zNAPOT6.md) connects nearby branch input, nonlinear dendritic response, bidirectional plasticity, and later array state.
- [a0039z.md](https://github.com/v5ma/selfawarenetworks/blob/main/a0039z.md) records the NMDAR mechanosensitivity bridge.
- [04san.md](https://github.com/v5ma/selfawarenetworks/blob/main/04san.md) proposes testing whether NMDAR-related plasticity covaries with recent population oscillatory history.

The joined SAN contribution is the proposed receiver-relative link from temporal organization and branch state through NMDAR-dependent nonlinearities to later tuning. Established NMDAR physiology predates SAN and does not by itself confirm that joined interpretation.

## Related pages

- [[nmda-receptor]]
- [[dendritic-spike]]
- [[dendritic-coincidence-detection]]
- [[synapse]]
- [[glutamate]]
- [[calcium-dynamics]]
- [[long-term-potentiation]]
- [[long-term-depression]]
- [[neural-tuning]]
- [[phase-wave-differentials]]
- [[napot-neural-array-phase-tomography|NAPOT]]
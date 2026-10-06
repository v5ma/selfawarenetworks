![Dendritic coincidence filtering: attenuating subthreshold influence, conditional local active events, and SAN's receiver-relative interpretation](/v5ma.github.io/wiki/assets/generated/san/dendritic-leaky-membrane-coincidence-filter/dendritic-coincidence-filter-reviewed-20260926-v4.png)

The figure distinguishes passive spread from conditional active amplification. It shows an excitatory-input example in a generic pyramidal dendrite, not a recording, a universal threshold, or a fixed number of inputs required for a spike. Inhibition and other changes in membrane state also shape the receiver's response.

In SAN, **dendritic coincidence filtering** connects the timing and arrangement of incoming activity to the receiver's ongoing state and learned response criteria. Membrane leak contributes to this operation, alongside dendritic geometry, receptor kinetics, active conductances, inhibition and recent activity. It is not a rule that a lone input disappears without influencing the rest of the cell.

## Mechanism

1. Presynaptic release and postsynaptic receptor activation change local conductance and membrane potential. The transmitter and the ionic current are different parts of the transformation.
2. A subthreshold potential can spread electrotonically along a dendrite while attenuating. Membrane conductance and capacitance help shape its time course; subthreshold does not mean no propagation or no computation.
3. Inputs interact according to their locations, timing, strength and the branch's physiological state. Sufficient drive can recruit active dendritic conductances and produce a local regenerative event. There is no universal two-input minimum or fixed coincidence window.
4. Dendritic activity can influence somatic voltage and axonal output. Local dendritic spikes, axon-initial-segment action potentials and bursts are distinct events; one does not guarantee the next.

[Polsky, Mel and Schiller (2004)](https://doi.org/10.1038/nn1253) demonstrated branch-dependent nonlinear integration in rat neocortical pyramidal neurons. [Nevian et al. (2007)](https://doi.org/10.1038/nn1826) directly measured strong EPSP attenuation and local active events in rat layer-5 basal dendrites. These are preparation-specific examples of passive and active integration, not evidence for one universal dendritic algorithm.

## Pattern matching and the original argument

The historical [[gh-a0209z|May 29, 2018 SAN source and its appended clarifications]] describes dendritic structure and threshold criteria as a way for incoming relations to affect later responses. The full argument explicitly allows meaningful computation below the threshold for an axonal spike; it does not identify one spike with one bit. That context is essential to [[coincidence-detection-neural-bit|the SAN coincidence proposal]].

The pattern-match interpretation asks whether learned connectivity and current state let a receiver distinguish how well incoming activity fits a learned relation. Timing, waveform, event count and downstream synaptic transformation can contribute; the response need not be a binary readout. This connects to [[action-potential-waveform-encoding]] and [[napot]].

Earlier wording on this page used "80%" and "30%" as pattern-match examples. No calibrated response-to-percentage mapping was supplied. They must not be read as experimental measurements, a universal burst code, or a quotation established by the source above. Testing a quantitative confidence interpretation requires a specified template, feature set, receiver, response variable and independent decoder comparison.

## Relation to SAN

SAN proposes that these state-dependent cellular transformations contribute to larger-scale prediction, rendering and recurrent use. A synaptic configuration can be modeled as a learned criterion; identifying a response as prediction error or confirmation requires showing what is predicted, what is compared, and how a downstream receiver uses that distinction. It is not established simply by observing a burst.

[[Dendritic-compartmentalization]] provides a biological basis for partly local integration, while the interpretation of compartments as parallel prediction operations remains a SAN model to test. Excitation, inhibition and their interactions can all change receiver state relative to an ongoing tonic context, connecting this page to [[phase-wave-differentials]].

## Outbound links

- [[coincidence-detection-neural-bit]] — the information unit enabled by this filter
- [[dendritic-compartmentalization]] — how the same cell runs multiple filters in parallel
- [[napot]] — oscillatory framework where this filtering implements perception
- [[neural-anti-bit]] — the splay state as the failure to trigger the leaky membrane
- [[action-potential-waveform-encoding]] — waveform and downstream transformation as candidate contributors to a graded response

![Brain As Queryable Network protocol decoding diagram](/v5ma.github.io/wiki/assets/generated/san/brain-as-queryable-network/brain-as-queryable-network-protocol-decoding-20260629-v1.png)

This diagram makes the page's query-model claim explicit: mind upload is framed less as copying a static brain and more as decoding an addressable neural protocol. A targeted perturbation probes local cortical thresholds, response traces travel through a transmission layer, and a decoder estimates the network data structure from the measured response pattern.

The proposal that the brain need not be perfectly *copied* for mind-upload purposes; instead, its contents can be *queried* via network-style requests if you understand the brain's communication protocols and data structures.

## Core idea

Rather than requiring a perfect scan of every synapse, the "query model" treats the brain as a distributed network with addressable nodes. Like sending HTTP or FTP requests to a server, an external system would send targeted queries (e.g., via [[transcranial-magnetic-stimulation]] bounced through specific regions) and interpret the responses to reconstruct the relevant data structures.

The practical tool proposed: TMS + [[convolutional-neural-networks]] to rapidly estimate cortical neuron activation thresholds, effectively reading out local threshold states without invasive probing.

## Neural code transmission

A 2009 *Nature Reviews Neuroscience* paper (Perkel & Bullock 1968 framework revisited) defines four functions for a candidate neural code:

1. Stimulus representation
2. Interpretation
3. Transformation
4. **Transmission** <- largely ignored despite being vital

SAN notes flag this gap: without understanding transmission, how a neural code travels between highly specialized regions, the other three functions are isolated fragments rather than a communicating system. [[napot]] addresses this by modeling oscillation-indexed projection as the transmission layer of the neural code.

## Relation to SAN

The query-network model aligns with [[self-aware-network]]'s framing: the brain is a [[gh-a0206z|self]]-querying distributed system. The brain does not "store" an experience in one place; it encodes it as a pattern of thresholds and connection strengths that can be re-activated (queried) by subsequent patterns. Mind-upload then becomes a problem of protocol decoding rather than substrate copying.

See also: [[napot]], [[neural-code-transmission]], [[self-aware-network]], [[transcranial-magnetic-stimulation]], [[action-potential]].

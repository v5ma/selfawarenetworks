At GTC 2018, [[gh-resnote04|Micah]] Blumberg]] posed the question to Nvidia CEO Jensen Huang: *do autonomous vehicles need feedback loops to develop [[gh-a0206z|self]]-concepts and become [[self-aware-networks]]?* Huang's answer illuminates the gap between engineering AI safety and SAN-theoretic [[self-modeling]].

Huang described Nvidia's autonomous vehicle stack as deliberately non-holistic: the "eyes" (world generator / Drive Sim) are separated from the "brain" (reasoning and planning). Rather than a unified [[gh-a0206z|self]]-teaching system, the architecture achieves resilience through **redundancy and diversity** — multiple subsystems performing the same task differently to prevent single points of failure.

## Contrast with SAN theory

In SAN terms, Huang's architecture lacks [[recurrent-self-reference]]: no subsystem builds a model of itself as an agent within the environment. The redundancy strategy produces safety without phenomenal awareness. [[gh-resnote04|Micah]]'s question probes whether safety-grade intelligence is structurally distinct from aware intelligence.

## Key SAN implications

- A true [[self-aware-network]] would require the vehicle's brain to maintain a continuously updated [[gh-a0206z|self]]-model — akin to cortical [[predictive-coding]] monitoring its own inference errors.
- Huang's modular design deliberately avoids the black-box integration that [[gh-a0206z|self]]-referential loops would require.
- The GTC 2018 exchange is an early public articulation of how [[napot]] principles might apply to robotics.

## Outbound links

- [[self-aware-networks]]
- [[self-modeling]]
- [[napot]]
- [[predictive-coding]]
- [[recurrent-self-reference]]

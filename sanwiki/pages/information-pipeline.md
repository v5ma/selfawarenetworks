# Information Pipeline

**Information Pipeline** is the SAN-side label for the multi-stage cortical processing chain that runs from primary sensory [[cortex]] through successively higher cortical areas, performing progressive [[neural-sequence-representation|abstraction]] at each stage — a chain whose architecture motivates the SAN reading of [[cortical-columns|cortical columns]] as a generic processing unit and which the corpus uses to compare against modern AI architectures such as Yann LeCun's JEPA proposal. Within the [[self-aware-networks|Self-Aware Networks]] framework the Information Pipeline is the substrate on which [[memory-prediction-as-intelligence|memory-prediction]] runs, and it is closely tied to the [[reference-frames-cortical-knowledge|reference-frames]] account of how [[cortex]] stores and recombines learned structure.

## Origin

The Information Pipeline term enters the SAN corpus as a description of the cortical hierarchy that the SAN architecture takes as its substrate. The clearest articulation in the available evidence comes from `nlps2e2.md`: "it's a higher level information pipeline that is, that exists to help us solve problems that are" (`[[gh-nlps2e2|nlps2e2]]--md`, line 781, [[blob-permalink|on github]]). The framing is that the pipeline is *purposive* — it exists to solve problems — rather than merely a passive feature-extraction stack. The `vecB.md` source extends this with an architectural observation that ties the SAN reading to LeCun's work: "it seems to have several dedicated areas, suggesting different structural sections that represent an information pipeline that may involve multiple neural networks, that's why LeCun's proposal seems to merge" (`vecB--md`, line 2887). The same source notes the abstraction-stack reading at line 2889. The provenance also cites `b0324y--md` line 3049 as a recurrence of the term in the broader SAN draft material, which establishes the term as a recurring rather than incidental piece of SAN vocabulary.

## Position

Within [[gh-a0206z|Self]]-Aware Networks proper, the Information Pipeline is positioned as the cortical processing chain that runs from primary sensory [[cortex]] — which the SAN corpus discusses through pages such as [[auditory-cortex]], [[cortex]], and [[artificial-cortex]] — through progressively higher-level cortical areas, with each stage performing some kind of abstraction over its inputs. The first non-obvious SAN claim is that the *whole pipeline* is doing abstraction, not just a designated abstraction stage: as `vecB.md` puts it, the dedicated areas of [[cortex]] collectively constitute the pipeline, and abstraction is distributed across the stages rather than localised to one. The second claim is that this pipeline structure is what motivates [[cortical-columns|cortical-columns]]-as-generic-unit: each stage is implementable as the same canonical column motif performing the same canonical operation on its inputs, which is the Hawkins-style [[cortical-columns-reference-frames|reference-frames]] reading that SAN inherits and extends. The third claim is the architectural one — that the pipeline involves multiple neural networks rather than a single one, and that this is why LeCun's [[convolutional-neural-networks|CNN]]-plus-JEPA hybrid proposal "seems to merge" (`vecB--md`, line 2887): mainstream ML is independently converging on the same multi-network-pipeline reading. The pipeline is therefore positioned as a *substrate* on which the [[memory-prediction-as-intelligence|memory-prediction loop]], the [[brain-as-rendering-engine|rendering engine]], and the [[continuous-neural-rendering|continuous neural rendering]] processes all run.

## Chronology

The Information Pipeline term is not a SAN-original — multi-stage cortical pipelines have been a mainstream neuroscience trope since Hubel-and-Wiesel-era visual-[[cortex]] work (1960s) and were canonised in the Felleman-Van Essen visual-hierarchy diagrams (1991). What the SAN corpus contributes is the *re-reading* of the pipeline through [[cortical-columns|cortical-columns]] and [[reference-frames-cortical-knowledge|reference-frames]] machinery, and the [[memory-prediction-as-intelligence|memory-prediction]] purpose-frame that turns the pipeline into a problem-solving rather than a passive feature-extraction structure. The convergence with LeCun's JEPA proposal (which gained prominence in the 2022–2024 period) is noted in `vecB--md`, line 2887 as an *external convergence* — i.e. mainstream ML is moving toward a multi-network-pipeline reading the SAN corpus had already adopted on independent grounds.

## Post-SAN

Compared with mainstream neuroscience and ML, the SAN reading of the Information Pipeline makes three departures worth flagging. First, it treats the pipeline as composed of canonical [[cortical-columns|cortical-columns]] units performing [[cortical-columns-reference-frames|reference-frame]] operations rather than as a heterogeneous stack of stage-specific computations — a Hawkins-style claim that aligns with the broader [[brain-as-memory-prediction-machine|memory-prediction-machine]] reading. Second, it ties the pipeline explicitly to a [[traveling-waves-neural-oscillations|wave-oscillation]] substrate via [[cortical-column-oscillatory-transmission|cortical-column oscillatory transmission]] and [[cortical-column-oscillatory-synchronization|oscillatory synchronisation]], which generates the testable prediction that pipeline stages should be coherently linked by measurable phase relationships rather than only by anatomical projection. Third, it converges with LeCun's JEPA-style multi-network proposal (`vecB--md`, line 2887) but predicts that JEPA-style architectures will need [[ndca-non-linear-differential-continuous-approximation|NDCA]]-style continuous-approximation extensions to capture the [[continuous-neural-rendering|continuous-rendering]] aspect of the biological pipeline that pure JEPA does not address. The honest framing is that the Information Pipeline term itself is borrowed from mainstream neuroscience; what SAN contributes is the integration of the pipeline with reference-frames, memory-prediction, and oscillatory-transmission machinery into a single coherent reading.

## Related concepts

- [[cortical-columns]] — the generic canonical unit that the SAN reading takes the pipeline to be made of.
- [[cortical-columns-reference-frames]] — the reference-frame reading of pipeline stages.
- [[reference-frames-cortical-knowledge]] — the broader reference-frames-as-knowledge framing.
- [[memory-prediction-as-intelligence]] — the purpose-frame that turns the pipeline into a problem-solver.
- [[brain-as-memory-prediction-machine]] — the parent memory-prediction-machine reading.
- [[brain-as-rendering-engine]] — the rendering-engine framing the pipeline feeds into.
- [[continuous-neural-rendering]] — the continuous-rendering output of the pipeline.
- [[cortex]] — the canonical [[cortex]] page.
- [[auditory-cortex]] — sensory-[[cortex]] example of pipeline input.
- [[artificial-cortex]] — the artificial-[[cortex]] page that JEPA-style proposals approach.
- [[cortical-column-oscillatory-transmission]] — the oscillatory transmission mechanism that links pipeline stages.
- [[cortical-column-oscillatory-synchronization]] — the synchronisation mechanism of pipeline coherence.
- [[cortical-column-signal-projection]] — the signal-projection mechanism that implements pipeline stage transitions.
- [[cortical-column-network-node]] — the network-node reading of column-as-pipeline-stage.
- [[cortical-column-manifolds]] — the manifold reading of column representations along the pipeline.
- [[neural-sequence-representation]] — the sequence-representation reading that the pipeline produces.
- [[distributed-phase-representations]] — the distributed phase-representations the pipeline outputs.
- [[convolutional-neural-networks]] — the CNN comparison point that LeCun's proposal extends.
- [[jepa-phase-analogy|JEPA and SAN Phase Comparison]] - source-recovered 2022 comparison with explicit biological and machine-learning boundaries.
- [[ndca-non-linear-differential-continuous-approximation]] — the NDCA extension SAN predicts JEPA-style architectures will need.
- [[criterial-causation]] — the criterial-causation reading relevant to pipeline-stage decision-making.

## Source Provenance

- Generated: 2026-04-24T18:32:04
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/information-pipeline.json`
- Evidence count: 4
- Source ids: b0324y--md, [[gh-nlps2e2|nlps2e2]]--md, vecB--md
  - `b0324y--md` line 3049 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/b0324y.md
  - `nlps2e2--md` line 781 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/nlps2e2.md
  - `vecB--md` line 2887 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/vecB.md
  - `vecB--md` line 2889 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/vecB.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*

Matt Wilson & Giulio Chiribella's 2023 arXiv preprint establishes a mathematical
framework for *higher-order theories* — theories whose objects are transformations of
physical processes, not just physical states. The central result (Lemma 2) proves that
a category with faithful usage and a linking isomorphism A ≅ [I,A] is **exactly** a
closed symmetric monoidal category. In [[gset-patent]] this becomes **Track 3**:
the mathematical mechanism that shows [[super-information-theory]] (SIT) strictly
contains Causal Fermion Systems (CFS).

## Core Results

**Enriched monoidal categories**: a symmetric monoidal category C enriched in V
carries, for each pair of objects, a hom-object [A,B] in V whose states represent
processes. Sequential (⊙) and parallel (⊗) composition supermaps are primitive.

**Lemma 2 (Linked Faithful = Closed Monoidal)**: C is closed symmetric monoidal if
and only if C is a faithful linked monoidal category. Proof constructs evaluation maps
from the linking isomorphism η : A → [I,A] and faithful usage transformation θ.

**Theorem 1 (Infinite Tower → Closed Monoidal)**: any "Merger" of an infinite
ascending sequence of supermap theories produces a closed symmetric monoidal apex
category. Any hierarchy of higher-order transformations is automatically closed monoidal.

## GSET Track 3 Application

In [[micah-blumberg|Micah Blumberg]]'s [[gset-patent]] system, this paper supplies Track 3 of the
three-track proof that SIT strictly contains CFS:

1. Lift SIT and CFS to enriched monoidal categories C_SIT and C_CFS on fragment G.
2. C_SIT is linked+closed on G (satisfies Lemma 2 hypotheses).
3. C_CFS lacks a linking isomorphism on G (no CFS analog for SIT's scalar field ρ_t).
4. Therefore no fully faithful pm-functor Ψ : C_SIT → C_CFS exists.
5. One-way embedding: C_CFS ⊂ C_SIT but C_SIT ⊄ C_CFS → SIT strictly contains CFS.

## Key Technical Terms

- **pm-functor**: structure-preserving map between enriched monoidal theories; defined
  via the Grothendieck construction PM := G(Msym).
- **Faithful usage**: two higher-order processes are distinguishable only by their
  outputs when applied to states — the operational distinguishability condition.
- **Supermaps**: higher-order processes that accept and transform other processes
  (sequential supermap ⊙, parallel supermap ⊗).

## Outbound Links

- [[gset-patent]]
- [[super-information-theory]]
- [[gold-standard-equivalence-action-plan]]
- [[sit]]
- [[causal-fermion-systems]]
- [[baez-compositional-markov]]
- [[gorla-process-calculi-encodability]]
- [[san-patent-corpus]]

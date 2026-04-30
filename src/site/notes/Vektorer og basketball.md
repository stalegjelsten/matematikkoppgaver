---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/vektorer-og-basketball/","dg-publish":true,"eksamen":"v25","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":6}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Vektorer og basketball","permalink":"/vektorer-og-basketball/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":6}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Vektorer og basketball"}}
---


# Vektorer og basketball

Jelena, Nils og Ahmad spiller basketball. Tenk deg at vi legger et koordinatsystem over banen. Ved et tidspunkt befinner Jelena seg i punktet $J(0,0)$, Nils befinner seg i punktet $N(-1,2)$, og Ahmad befinner seg i punktet $A(1,1)$. Enheten langs aksene er meter.

>[!oppgave]
>a) Hvor langt er det mellom Nils og Ahmad? Gi svaret eksakt.

En basketball ligger i punktet $(-1, a)$, der $a \in \mathbb{R}$. Vektoren som går fra Jelena til ballen, er parallell med vektoren som går fra Nils til Ahmad.

>[!oppgave]
>b) Bestem $a$.

Nils flytter seg til et nytt punkt $M$. $M$ er det nærmeste punktet som er plassert slik at avstanden mellom Jelena og Nils er $\sqrt{10}$ meter. Vinkelen mellom Nils, Ahmad og Jelena, $\angle MAJ$, er 90 grader.

>[!oppgave]
>c) Bestem koordinatene til $M$.

## Fasit

a) $\underline{\underline{|NA| = \sqrt{5} \, \mathrm{m}}}$

b) $\underline{\underline{a = \dfrac{1}{2}}}$

c) $\underline{\underline{M = (-1,\, 3)}}$

## Løsningsforslag

### a

Vi finner vektoren $\overrightarrow{NA}$ fra $N(-1, 2)$ til $A(1, 1)$:

$$\overrightarrow{NA} = A - N = (1-(-1),\ 1-2) = (2,\ -1)$$

Lengden er

$$|NA| = |\overrightarrow{NA}| = \sqrt{2^2 + (-1)^2} = \sqrt{4+1} = \textbf{$\underline{\underline{\sqrt{5} \, \mathrm{m}}}$}$$

### b

Vektoren fra Jelena $J(0, 0)$ til ballen $B(-1, a)$ er

$$\overrightarrow{JB} = (-1-0,\ a-0) = (-1,\ a)$$

To vektorer er parallelle når determinanten er null (eller den ene er en skalarmultippel av den andre).

$$\overrightarrow{JB} \parallel \overrightarrow{NA} \iff (-1)\cdot(-1) - 2\cdot a = 0$$

$$1 - 2a = 0 \implies \textbf{$\underline{\underline{a = \dfrac{1}{2}}}$}$$

**Alternativt:** $\overrightarrow{JB} = k \cdot \overrightarrow{NA}$ gir $-1 = 2k$, altså $k = -\tfrac{1}{2}$, og da $a = k \cdot (-1) = \tfrac{1}{2}$.

### c

Vi har to krav til punktet $M$:

1. **Avstand $JM = \sqrt{10}$:** $M$ ligger på sirkelen $x^2 + y^2 = 10$.
2. **Vinkel $\angle MAJ = 90°$:** $\overrightarrow{AM} \perp \overrightarrow{AJ}$.

Vi finner $\overrightarrow{AJ}$ fra $A(1,1)$ til $J(0,0)$:

$$\overrightarrow{AJ} = J - A = (-1,\ -1)$$

En vektor vinkelrett på $(-1, -1)$ har retning $(1, -1)$ (roter 90°). Vi skriver

$$\overrightarrow{AM} = k(1,\ -1), \quad k \in \mathbb{R}$$

Da er

$$M = A + \overrightarrow{AM} = (1+k,\ 1-k)$$

Krav 1 gir:

$$(1+k)^2 + (1-k)^2 = 10$$

$$1 + 2k + k^2 + 1 - 2k + k^2 = 10$$

$$2 + 2k^2 = 10 \implies k^2 = 4 \implies k = \pm 2$$

Dette gir to kandidater:

- $k = 2$: $M_1 = (3,\ -1)$
- $k = -2$: $M_2 = (-1,\ 3)$

Nils befant seg opprinnelig i $N(-1, 2)$. Vi velger det **nærmeste** punktet til $N$:

$$|NM_1| = \sqrt{(3-(-1))^2 + (-1-2)^2} = \sqrt{16+9} = 5 \, \mathrm{m}$$

$$|NM_2| = \sqrt{(-1-(-1))^2 + (3-2)^2} = \sqrt{0+1} = 1 \, \mathrm{m}$$

Det nærmeste punktet er $M_2$:

$$\textbf{$\underline{\underline{M = (-1,\ 3)}}$}$$
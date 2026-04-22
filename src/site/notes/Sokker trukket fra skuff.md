---
{"aliases":[],"date":"2024-05-24","del":1,"dg-permalink":"/sokker-trukket-fra-skuff/","dg-publish":true,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":4}],"poeng":4,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","kombinatorikk"],"title":"Sokker trukket fra skuff","todo":[],"permalink":"/sokker-trukket-fra-skuff/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":1,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":4}],"poeng":4,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","kombinatorikk"],"title":"Sokker trukket fra skuff","todo":[]}}
---


# Sokker trukket fra skuff

I en skuff ligger det 6 gule, 5 svarte og 4 hvite sokker.

>[!oppgave]
>a) Tenk deg at du tar 2 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at begge sokkene er gule.
>b) Tenk deg at du tar 3 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at minst 2 av sokkene har samme farge.

## Fasit

a) $\underline{\underline{P(\text{begge gule}) = \dfrac{1}{7} \approx 14{,}3 \,\%}}$

b) $\underline{\underline{P(\text{minst 2 like}) = \dfrac{67}{91} \approx 73{,}6 \,\%}}$

## Løsningsforslag

Skuffen inneholder $6$ gule, $5$ svarte og $4$ hvite sokker — totalt $15$ sokker.

### a

Vi trekker $2$ sokker uten tilbakelegging. Vi vil finne sannsynligheten for at begge er gule.

**Metode 1 — uten tilbakelegging i rekkefølge:**

$$P(\text{begge gule}) = \frac{6}{15} \cdot \frac{5}{14} = \frac{30}{210} = \frac{1}{7}$$

**Metode 2 — kombinatorikk:**

Antall måter å velge 2 av 6 gule sokker:

$$\binom{6}{2} = \frac{6 \cdot 5}{2} = 15$$

Antall måter å velge 2 av 15 sokker totalt:

$$\binom{15}{2} = \frac{15 \cdot 14}{2} = 105$$

$$P(\text{begge gule}) = \frac{15}{105} = \frac{1}{7}$$

**$\underline{\underline{P(\text{begge gule}) = \dfrac{1}{7} \approx 14{,}3 \,\%}}$**

### b

Vi trekker $3$ sokker uten tilbakelegging. Vi bruker komplementmetoden:

$$P(\text{minst 2 av samme farge}) = 1 - P(\text{alle tre har ulik farge})$$

For at alle tre skal ha ulik farge, må vi ha én gul, én svart og én hvit.

Antall måter å velge én av hver farge:

$$\binom{6}{1} \cdot \binom{5}{1} \cdot \binom{4}{1} = 6 \cdot 5 \cdot 4 = 120$$

Antall måter å velge 3 av 15 sokker totalt:

$$\binom{15}{3} = \frac{15 \cdot 14 \cdot 13}{3 \cdot 2 \cdot 1} = \frac{2730}{6} = 455$$

$$P(\text{alle ulike}) = \frac{120}{455} = \frac{24}{91}$$

$$P(\text{minst 2 av samme farge}) = 1 - \frac{24}{91} = \frac{91 - 24}{91} = \frac{67}{91}$$

**$\underline{\underline{P(\text{minst 2 av samme farge}) = \dfrac{67}{91} \approx 73{,}6 \,\%}}$**
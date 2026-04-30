---
{"aliases":[],"date":"2023-11-14","del":2,"dg-permalink":"/venstrehendte-elever/","dg-publish":true,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":2}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger"],"title":"Venstrehendte elever","todo":[],"permalink":"/venstrehendte-elever/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":2,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":2}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger"],"title":"Venstrehendte elever","todo":[]}}
---


# Venstrehendte elever

Undersøkelser viser at 10 prosent av alle menn og 8 prosent av alle kvinner er venstrehendte.

På en skole er det 280 gutter og 220 jenter.

>[!oppgave]
>a) Bestem sannsynligheten for at minst 25 av guttene på skolen er venstrehendte.
>b) Hvor mange gutter må det være i en klasse dersom sannsynligheten for at minst tre av guttene er venstrehendte, skal være større enn 20 prosent?

I en klasse er det 13 gutter og 17 jenter.

>[!oppgave]
>c) Bestem sannsynligheten for at nøyaktig tre av elevene i klassen er venstrehendte.

## Fasit

a) $\underline{\underline{P(X \geq 25) \approx 0{,}7528}}$

b) **Minste antall gutter: $\underline{\underline{n = 16}}$**

c) $\underline{\underline{P(G + J = 3) \approx 0{,}2309}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å beregne sannsynlighetene.

![GeoGebra CAS – binomiske sannsynligheter](/img/user/_resources/s1-h23-2-2.png)

### a

La $X$ = antall venstrehendte gutter på skolen. $X$ er binomisk fordelt med $n = 280$ og $p = 0{,}10$.

**Begrunnelse:** Det er 280 gutter (uavhengige forsøk), to mulige utfall (venstrehendt / ikke venstrehendt), og fast sannsynlighet $p = 0{,}10$ for hvert forsøk.

Vi ønsker $P(X \geq 25)$:

$$P(X \geq 25) = 1 - P(X \leq 24)$$

I GeoGebra CAS:

$$\texttt{1 - FordelingBinomial(280, 0.10, 24)}$$

**$P(X \geq 25) \approx \underline{\underline{0{,}7528}}$**

### b

La $Y$ = antall venstrehendte gutter i en klasse med $n$ gutter. $Y$ er binomisk fordelt med $p = 0{,}10$.

Vi søker minste $n$ slik at $P(Y \geq 3) > 0{,}20$:

$$P(Y \geq 3) = 1 - P(Y \leq 2) > 0{,}20$$

Vi prøver ulike verdier av $n$ i GeoGebra CAS med `1 - FordelingBinomial(n, 0.10, 2)`:

| $n$ | $P(Y \geq 3)$ |
|-----|--------------|
| 15  | $\approx 0{,}1841$ |
| 16  | $\approx 0{,}2108$ |

For $n = 15$ er sannsynligheten $0{,}1841 < 0{,}20$, mens for $n = 16$ er den $0{,}2108 > 0{,}20$.

**Det må være minst $\underline{\underline{16 \text{ gutter}}}$ i klassen.**

### c

La $G$ = antall venstrehendte gutter i klassen, og $J$ = antall venstrehendte jenter i klassen.

- $G$ er binomisk fordelt med $n = 13$ og $p = 0{,}10$
- $J$ er binomisk fordelt med $n = 17$ og $p = 0{,}08$
- $G$ og $J$ er uavhengige

Vi vil finne $P(G + J = 3)$. Vi summerer over alle mulige fordeling av de 3 venstrehendte på gutter og jenter:

$$P(G + J = 3) = \sum_{g=0}^{3} P(G = g) \cdot P(J = 3 - g)$$

$$= P(G=0) \cdot P(J=3) + P(G=1) \cdot P(J=2) + P(G=2) \cdot P(J=1) + P(G=3) \cdot P(J=0)$$

I GeoGebra CAS:

$$\texttt{Sum(Binomial(13,k) \cdot 0.1\^{}k \cdot 0.9\^{}(13-k) \cdot Binomial(17,3-k) \cdot 0.08\^{}(3-k) \cdot 0.92\^{}(14+k), k, 0, 3)}$$

$$\approx 0{,}23088$$

**$P(G + J = 3) \approx \underline{\underline{0{,}2309}}$**
---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/kombinatorikk-med-elever-i-arbeidsgruppe/","dg-publish":true,"eksamen":"v25","fag":["s1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":3}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["kombinatorikk","sannsynlighet"],"title":"Kombinatorikk med elever i arbeidsgruppe","todo":[],"permalink":"/kombinatorikk-med-elever-i-arbeidsgruppe/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["s1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":3}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["kombinatorikk","sannsynlighet"],"title":"Kombinatorikk med elever i arbeidsgruppe","todo":[]}}
---


# Kombinatorikk med elever i arbeidsgruppe

Ti elever skriver navnet sitt på hver sin lapp. Elevene legger de ti lappene i en hatt. Fra hatten trekkes fire lapper tilfeldig. De fire elevene som trekkes ut, skal være med i en arbeidsgruppe.

>[!oppgave]
>a) På hvor mange mulige måter kan arbeidsgruppen settes sammen?

Sju av de ti elevene er jenter. Resten er gutter.

>[!oppgave]
>b) Bestem sannsynligheten for at minst to gutter blir med i arbeidsgruppen.

Emma og Marie er to av jentene.

>[!oppgave]
>c) Bestem sannsynligheten for at bare én av de to jentene blir med i arbeidsgruppen.

## Fasit

a) $\underline{\underline{210 \text{ måter}}}$
b) $\underline{\underline{P(\text{minst 2 gutter}) = \dfrac{1}{3} \approx 33{,}3\,\%}}$
c) $\underline{\underline{P(\text{nøyaktig 1 av Emma/Marie}) = \dfrac{8}{15} \approx 53{,}3\,\%}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å beregne binomialkoeffisientene.

![GeoGebra CAS – binomialkoeffisienter](/img/user/_resources/s1-v25-2-3-kombinatorikk.png)

### a

Vi skal velge 4 elever fra 10 uten hensyn til rekkefølge. Antall måter er gitt ved binomialkoeffisienten

$$\binom{10}{4} = \frac{10!}{4! \cdot 6!} = \textbf{210}$$

**Det er $\underline{\underline{210}}$ mulige måter å sette sammen arbeidsgruppen på.**

### b

Vi søker $P(\text{minst 2 gutter})$. Det er lettest å bruke komplementregelen:

$$P(\text{minst 2 gutter}) = 1 - P(\text{0 gutter}) - P(\text{1 gutt})$$

Det er 3 gutter og 7 jenter blant de 10 elevene.

**P(0 gutter):** Alle 4 velges blant de 7 jentene.

$$P(\text{0 gutter}) = \frac{\binom{7}{4}}{\binom{10}{4}} = \frac{35}{210} = \frac{1}{6}$$

**P(1 gutt):** Én gutt velges blant 3, tre jenter velges blant 7.

$$P(\text{1 gutt}) = \frac{\binom{3}{1} \cdot \binom{7}{3}}{\binom{10}{4}} = \frac{3 \cdot 35}{210} = \frac{105}{210} = \frac{1}{2}$$

**P(minst 2 gutter):**

$$P(\text{minst 2 gutter}) = 1 - \frac{1}{6} - \frac{1}{2} = 1 - \frac{1}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3} \approx 33{,}3\,\%$$

**Sannsynligheten for at minst to gutter blir med i arbeidsgruppen er $\underline{\underline{\dfrac{1}{3} \approx 33{,}3\,\%}}$.**

### c

Vi skal finne sannsynligheten for at nøyaktig én av de to jentene Emma og Marie blir med.

Vi deler de 10 elevene i to grupper: {Emma, Marie} (2 elever) og de øvrige 8 elevene.

Nøyaktig én av Emma/Marie betyr at vi velger 1 fra {Emma, Marie} og 3 fra de resterende 8.

$$P(\text{nøyaktig 1 av Emma/Marie}) = \frac{\binom{2}{1} \cdot \binom{8}{3}}{\binom{10}{4}} = \frac{2 \cdot 56}{210} = \frac{112}{210} = \frac{8}{15} \approx 53{,}3\,\%$$

**Sannsynligheten for at bare én av de to jentene blir med i arbeidsgruppen er $\underline{\underline{\dfrac{8}{15} \approx 53{,}3\,\%}}$.**

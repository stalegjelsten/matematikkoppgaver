---
{"tags":["oppgave"],"date":"2025-04-01","modified":"2025-04-01","aliases":null,"dg-publish":true,"temaer":["sannsynlighet","normalfordeling"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Vekten til poteter","source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/vekten-til-poteter/","permalink":"/vekten-til-poteter/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-04-01","modified":"2025-04-01","aliases":null,"temaer":["sannsynlighet","normalfordeling"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Vekten til poteter","source":null,"todo":null,"lf-source-claude":true}}
---


# Vekten til poteter


Vi lar $X$ være vekten til en tilfeldig potet fra kjøkkenhagen til Jostein. Vi antar at $X$ er tilnærmet normalfordelt med forventningsverdi 200 gram og standardavvik 40 gram.

Jostein skal ta opp poteter. Han plukker en tilfeldig potet fra kjøkkenhagen.

>[!oppgave]
> a) Bestem sannsynligheten for at poteten veier mellom 180 gram og 220 gram

Normalfordelingskurven til $X$ er grafen til funksjonen $f$ gitt ved
$$
f(x)=\frac{1}{40\sqrt{ 2\pi }}\cdot e^{-\frac{(x-200)^{2}}{3200}}
$$

>[!oppgave]
> b) Bestem $\int_{0}^{150} f(x) \, dx$ og gi en praktisk tolkning av svaret.
> c) Lag en skisse av grafen til $f$. Bruk skissen til å visualisere resultatene fra oppgave a og oppgave b.

Jostein tar opp 500 tilfeldige poteter fra kjøkkenhagen.

>[!oppgave]
>d) Hvor mange av disse potetene kan han regne med at den veier minst 300 gram?

## Fasit

a) 0,383
b) 0,106. Dette er sannsynligheten for å trekke opp en potet som veier mindre enn 150 gram.
c) –
d) 3,1. Vi runder av til 3 poteter.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 200$ og $\sigma = 40$.

$$P(180 < X < 220) = P\!\left(\frac{180 - 200}{40} < Z < \frac{220 - 200}{40}\right) = P(-0{,}5 < Z < 0{,}5)$$

$$= \Phi(0{,}5) - \Phi(-0{,}5) = 0{,}6915 - 0{,}3085 = \underline{\underline{0{,}383}}$$

### b

$$\int_{0}^{150} f(x) \, \mathrm{d}x = P(X \leq 150) = \Phi\!\left(\frac{150 - 200}{40}\right) = \Phi(-1{,}25) \approx \underline{\underline{0{,}106}}$$

Dette er sannsynligheten for at en tilfeldig potet fra kjøkkenhagen veier mindre enn 150 gram.

### c

Normalfordelingskurven er symmetrisk om $\mu = 200$ og klokkeformet.

- Arealet mellom $x = 180$ og $x = 220$ (oppgave a) representerer $P(180 < X < 220) \approx 0{,}383$
- Arealet til venstre for $x = 150$ (oppgave b) representerer $P(X \leq 150) \approx 0{,}106$

### d

$$P(X \geq 300) = 1 - \Phi\!\left(\frac{300 - 200}{40}\right) = 1 - \Phi(2{,}5) = 1 - 0{,}9938 = 0{,}0062$$

Forventet antall poteter som veier minst 300 gram:

$$500 \cdot 0{,}0062 \approx \underline{\underline{3{,}1 \approx 3 \text{ poteter}}}$$

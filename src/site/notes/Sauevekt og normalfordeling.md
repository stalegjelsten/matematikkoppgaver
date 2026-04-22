---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","integral","sannsynlighet"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Sauevekt og normalfordeling","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sauevekt-og-normalfordeling/","permalink":"/sauevekt-og-normalfordeling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","integral","sannsynlighet"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Sauevekt og normalfordeling","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sauevekt og normalfordeling

Vi antar at vekten $X$ til en tilfeldig sau av en bestemt rase er normalfordelt med forventningsverdi $\mu = 60$ kg og standardavvik $\sigma = 6$ kg.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt sau veier mellom 57 og 63 kg.

Normalfordelingskurven til $X$ er grafen til funksjonen $f$ gitt ved

$$f(x) = \frac{1}{6\sqrt{2\pi}} \cdot e^{-\frac{(x - 60)^2}{72}}$$

>[!oppgave]
>b) Bestem verdien av integralet $\displaystyle\int_{69}^{\infty} f(x) \, \mathrm{d}x$. Hva forteller denne verdien oss?
>c) Lag en skisse av grafen til $f$. Synliggjør resultatene fra oppgave a) og oppgave b) på skissen.

En bonde har mange sauer av denne rasen. Han velger tilfeldig 25 sauer som han vil sende til slakt. Slaktebilen har en lastekapasitet på 1550 kg.

>[!oppgave]
>d) Bestem sannsynligheten for at slaktebilen kan ta med seg alle de 25 sauene.

## Fasit

a) $P(57 < X < 63) \approx 0{,}383$
b) $\approx 0{,}0668$. Sannsynligheten for at en tilfeldig sau veier mer enn 69 kg.
c) Se løsningsforslag
d) $P(\bar{X} \leq 62) \approx 0{,}952$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 60$ og $\sigma = 6$.

Vi standardiserer:

$$P(57 < X < 63) = P\!\left(\frac{57 - 60}{6} < Z < \frac{63 - 60}{6}\right) = P(-0{,}5 < Z < 0{,}5)$$

$$= \Phi(0{,}5) - \Phi(-0{,}5) = 0{,}6915 - 0{,}3085 = \underline{\underline{0{,}383}}$$

### b

$$\int_{69}^{\infty} f(x) \, \mathrm{d}x = P(X > 69) = 1 - P(X \leq 69)$$

Vi standardiserer: $z = \dfrac{69 - 60}{6} = 1{,}5$

$$P(X > 69) = 1 - \Phi(1{,}5) = 1 - 0{,}9332 = \underline{\underline{0{,}0668}}$$

Dette er sannsynligheten for at en tilfeldig valgt sau veier mer enn 69 kg.

### c

Normalfordelingskurven er symmetrisk om $\mu = 60$ og klokkeformet.

- Arealet mellom $x = 57$ og $x = 63$ (oppgave a) representerer $P(57 < X < 63) \approx 0{,}383$
- Arealet til høyre for $x = 69$ (oppgave b) representerer $P(X > 69) \approx 0{,}067$

### d

La $\bar{X}$ være gjennomsnittsvekten til 25 sauer. Da er $\bar{X}$ normalfordelt med

$$\text{E}(\bar{X}) = \mu = 60 \quad \text{og} \quad \text{SD}(\bar{X}) = \frac{\sigma}{\sqrt{n}} = \frac{6}{\sqrt{25}} = 1{,}2$$

Slaktebilen kan ta med alle 25 sauene dersom totalvekten er høyst 1550 kg, altså dersom $\bar{X} \leq \dfrac{1550}{25} = 62$.

$$P(\bar{X} \leq 62) = P\!\left(Z \leq \frac{62 - 60}{1{,}2}\right) = P(Z \leq 1{,}67) = \Phi(1{,}67) \approx \underline{\underline{0{,}952}}$$

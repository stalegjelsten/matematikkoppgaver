---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","stigningstall","geometrisk vekst"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"poeng":6,"title":"Avisabonnenter og eksponentialfunksjon","status":1,"source":null,"todo":null,"permalink":"/avisabonnenter-og-eksponentialfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"temaer":["eksponentialfunksjoner","stigningstall","geometrisk vekst"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"poeng":6,"title":"Avisabonnenter og eksponentialfunksjon","status":1,"source":null,"todo":null}}
---


# Avisabonnenter og eksponentialfunksjon

Funksjonen $P$ gitt ved

$$P(x) = 3600 \cdot 0{,}85^x + 600$$

er en modell som viser hvor mange personer som abonnerte på papirutgaven av en avis $x$ år etter 2010.

>[!oppgave]
>a) Vis hvordan du på to ulike måter kan finne ut hvor mange personer som abonnerte på papirutgaven i 2010.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4,\ P(4))$ og $(14,\ P(14))$. Gi en praktisk tolkning av svaret du får.

I 2019 abonnerte 1000 personer på den digitale utgaven av avisen. Antallet personer som abonnerte på den digitale utgaven, økte med 5,5 % hvert år fra 2019 til 2024.

>[!oppgave]
>c) Hvilket år var det for første gang flere personer som abonnerte på den digitale utgaven av avisen enn på papirutgaven?

## Fasit

a) $P(0) = 4\,200$ abonnenter i 2010
b) Stigningstall $\approx -150{,}9$ – gjennomsnittlig nedgang på ca. 151 papirabonnenter per år mellom 2014 og 2024
c) 2022

## Løsningsforslag

### a

**Metode 1 – sett inn $x = 0$:**

$$P(0) = 3600 \cdot 0{,}85^0 + 600 = 3600 \cdot 1 + 600 = \underline{\underline{4\,200}}$$

**Metode 2 – bruk at $0{,}85^x \to 0$ når $x \to \infty$:**

Modellen har 600 som nedre grense (bunnlinje). I 2010 var det 3600 abonnenter *over* bunnlinjen, altså $3600 + 600 = 4\,200$ totalt.

### b

Vi beregner funksjonsverdiene i de to punktene:

$$P(4) = 3600 \cdot 0{,}85^4 + 600 \approx 2\,479$$

$$P(14) = 3600 \cdot 0{,}85^{14} + 600 \approx 970$$

Stigningstallet til sekantlinjen:

$$a = \frac{P(14) - P(4)}{14 - 4} = \frac{970 - 2\,479}{10} \approx \underline{\underline{-150{,}9}}$$

**Praktisk tolkning:** Antallet papirabonnenter gikk i gjennomsnitt ned med ca. 151 personer per år i perioden fra 2014 til 2024.

### c

Vi definerer funksjonen for digitale abonnenter, der $x$ er år etter 2010 (digitalt startet i 2019, altså ved $x = 9$):

$$D(x) = 1000 \cdot 1{,}055^{x - 9}$$

Vi plotter $P(x)$ og $D(x)$ i GeoGebra og finner skjæringspunktet:

![1p-h24-2-1.png](/img/user/_resources/1p-h24-2-1.png)

Fra grafen (se `Skjaering`) skjærer kurvene hverandre ved $x \approx 11{,}6$, det vil si i løpet av 2021. Vi sjekker ved helårsregnskap:

| År | $x$ | Digitalt $D(x)$ | Papir $P(x)$ |
|----|-----|-----------------|--------------|
| 2021 | 11 | $\approx 1\,113$ | $\approx 1\,202$ |
| 2022 | 12 | $\approx 1\,174$ | $\approx 1\,112$ |

**For første gang i $\underline{\underline{2022}}$ var det flere digitale enn papirabonnenter.**

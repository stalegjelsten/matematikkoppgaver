---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","integral","modellering"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":6,"title":"Netflix-inntekter og integral","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/netflix-inntekter-og-integral/","permalink":"/netflix-inntekter-og-integral/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["eksponentialfunksjoner","integral","modellering"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":6,"title":"Netflix-inntekter og integral","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Netflix-inntekter og integral

De årlige inntektene $I$ (i milliarder kroner) til selskapet Netflix er tilnærmet gitt ved

$$I(x) = 6{,}594 \cdot e^{0{,}234x}$$

Her er $x$ antall år etter 2005. Det vil si at $I(0)$ er inntektene i 2005, $I(1)$ er inntektene i 2006, og så videre.

>[!oppgave]
>a) Bruk funksjonen $I$ til å lage en grafisk framstilling av inntektene til Netflix for årene fra og med 2005 til og med 2030.
>b) I hvilket år vil inntektene første gang øke med mer enn 160 milliarder kroner per år?
>c) Bestem $\displaystyle\int_0^{15} I(x) \, \mathrm{d}x$. Gi en praktisk tolkning av dette tallet.

## Fasit

a) Se graf
b) I 2025 ($x \approx 19{,}8$)
c) Ca. $914$ milliarder kroner

## Løsningsforslag

### a

Vi tegner grafen til $I(x) = 6{,}594 \cdot e^{0{,}234x}$ for $x \in [0, 25]$ (2005–2030):

![Graf over Netflix-inntekter](/img/user/_resources/s2-h20-2-1-graf.png)

### b

Inntektene øker med mer enn 160 milliarder per år når $I'(x) > 160$.

Vi løser $I'(x) = 160$ i GeoGebra CAS:

![GeoGebra CAS: Netflix](/img/user/_resources/s2-h20-2-1.png)

Fra linje 2 ser vi at $x \approx 19{,}84$.

Siden $x = 19{,}84$ tilsvarer slutten av 2024, vil inntektene første gang øke med mer enn 160 milliarder per år i **$\underline{\underline{2025}}$** (da $x = 20$).

### c

Fra linje 3 i CAS-utklippet:

$$\int_0^{15} I(x) \, \mathrm{d}x \approx \underline{\underline{914 \text{~milliarder kroner}}}$$

**Praktisk tolkning:** Dette er de samlede inntektene til Netflix i perioden fra 2005 til 2020, altså over 15 år.

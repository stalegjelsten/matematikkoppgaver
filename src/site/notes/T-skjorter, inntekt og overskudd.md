---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/t-skjorter-inntekt-og-overskudd/","dg-publish":true,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["økonomi","derivasjon","funksjonsdrøfting"],"title":"T-skjorter, inntekt og overskudd","todo":[],"permalink":"/t-skjorter-inntekt-og-overskudd/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["økonomi","derivasjon","funksjonsdrøfting"],"title":"T-skjorter, inntekt og overskudd","todo":[]}}
---


# T-skjorter, inntekt og overskudd

En bedrift produserer og selger T-skjorter. Prisen $p(x)$ kroner per T-skjorte ved produksjon og salg av $x$ T-skjorter per uke er gitt ved

$$p(x) = -0{,}001x^2 + 0{,}2x + 100$$

De totale kostnadene $K(x)$ kroner per uke er gitt ved

$$K(x) = 0{,}1x^2 + 8000$$

>[!oppgave]
>a) Bestem den største mulige inntekten bedriften kan få per uke.
>b) Bestem det største mulige overskuddet bedriften kan få per uke.

Bedriften ønsker å gjennomføre en kampanje hvor de en uke donerer 30 kroner per solgte T-skjorte til veldedighet.

>[!oppgave]
>c) Bestem det største antallet T-skjorter bedriften kan produsere og selge i en uke med kampanje uten å gå med underskudd.

## Fasit

a) Største inntekt: $\underline{\underline{I \approx 21\,945 \, \mathrm{kr/uke}}}$ ved $x = 261$ T-skjorter.
b) Største overskudd: $\underline{\underline{O \approx 8\,193 \, \mathrm{kr/uke}}}$ ved $x = 219$ T-skjorter.
c) Bedriften kan selge maks $\underline{\underline{251 \text{ T-skjorter}}}$ uten å gå med underskudd.

## Løsningsforslag

Vi definerer inntektsfunksjonen og overskuddsfunksjonen:

$$I(x) = x \cdot p(x) = -0{,}001x^3 + 0{,}2x^2 + 100x$$

$$O(x) = I(x) - K(x) = -0{,}001x^3 + 0{,}1x^2 + 100x - 8000$$

Vi løser alle deloppgavene i GeoGebra CAS:

![GeoGebra CAS – inntekt, overskudd og kampanje](/img/user/_resources/s1-v25-2-5-cas.png)

### a

For å finne største inntekt setter vi $I'(x) = 0$ og løser:

$$I'(x) = -0{,}003x^2 + 0{,}4x + 100 = 0$$

GeoGebra CAS (linje 7) gir $x \approx 261$ (positiv løsning).

Vi sjekker at dette er et maksimum: $I''(x) = -0{,}006x + 0{,}4$, og $I''(261) = -0{,}006 \cdot 261 + 0{,}4 \approx -1{,}2 < 0$ — bekrefter maksimum.

GeoGebra CAS (linje 8): $I(261) \approx 21\,945 \, \mathrm{kr}$.

**Den største mulige inntekten er $\underline{\underline{I \approx 21\,945 \, \mathrm{kr/uke}}}$ ved produksjon og salg av 261 T-skjorter.**

### b

For å finne største overskudd setter vi $O'(x) = 0$ og løser:

$$O'(x) = -0{,}003x^2 + 0{,}2x + 100 = 0$$

GeoGebra CAS (linje 10) gir $x \approx 219$ (positiv løsning).

GeoGebra CAS (linje 11): $O(219) \approx 8\,193 \, \mathrm{kr}$.

**Det største mulige overskuddet er $\underline{\underline{O \approx 8\,193 \, \mathrm{kr/uke}}}$ ved produksjon og salg av 219 T-skjorter.**

### c

Med kampanje doneres 30 kr per solgte T-skjorte, slik at overskuddsfunksjonen blir:

$$O_k(x) = I(x) - K(x) - 30x = -0{,}001x^3 + 0{,}1x^2 + 70x - 8000$$

Vi vil finne det største antallet T-skjorter $x$ der $O_k(x) \geq 0$, dvs. vi løser $O_k(x) = 0$.

GeoGebra CAS (linje 12) gir røttene $x \approx -269{,}6$, $x \approx 117{,}8$ og $x \approx 251{,}8$.

Den største positive røtten er $x \approx 251{,}8$. Vi sjekker: $O_k(251) \approx 57 > 0$ og $O_k(252) \approx -13 < 0$.

**Bedriften kan produsere og selge maks $\underline{\underline{251 \text{ T-skjorter}}}$ i kampanjeuken uten å gå med underskudd.**

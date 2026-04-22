---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["optimering","derivasjon","eksponentialfunksjoner","økonomi"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":8,"title":"Inntektsfunksjon med eksponential","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/inntektsfunksjon-med-eksponential/","permalink":"/inntektsfunksjon-med-eksponential/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["optimering","derivasjon","eksponentialfunksjoner","økonomi"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":8,"title":"Inntektsfunksjon med eksponential","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Inntektsfunksjon med eksponential

En bedrift produserer og selger en vare. Når prisen er $p$ kroner per enhet, er inntekten $I$ kroner per uke gitt ved

$$I(p) = 1500p \cdot e^{-0.05p}, \quad p \in [10, 80]$$

>[!oppgave]
>a) Bruk graftegner til å tegne grafen til $I$.
>b) Bestem den prisen som gir høyest inntekt.

La $x$ være antall solgte enheter av varen en uke.

>[!oppgave]
>c) Vis at $I(x) = 20x \cdot \ln\left(\dfrac{1500}{x}\right)$

Den faste kostnaden for produksjonen er 2000 kroner per uke. I tillegg koster det 15 kroner for hver enhet bedriften produserer.

>[!oppgave]
>d) Bestem det største overskuddet bedriften kan få per uke.

## Fasit

a) Se løsningsforslag
b) $p = 20 \text{ kr}$
c) Se løsningsforslag
d) $\approx 3213 \text{ kr}$

## Løsningsforslag

### a

Vi tegner grafen til $I(p) = 1500p \cdot e^{-0{,}05p}$ for $p \in [10, 80]$ i GeoGebra.

![Graf: Inntektsfunksjon](/img/user/_resources/s2-h19-2-2-graf.png)

### b

Vi finner toppunktet ved å derivere og sette lik null i CAS (se linje 1–2 under).

![CAS: Inntektsfunksjon](/img/user/_resources/s2-h19-2-2.png)

Fra linje 2 i CAS ser vi at $\underline{\underline{p = 20 \text{ kr}}}$ gir høyest inntekt.

### c

Fra $I(p) = 1500p \cdot e^{-0{,}05p}$ og $x = 1500 \cdot e^{-0{,}05p}$ (antall solgte enheter) får vi

$$e^{-0{,}05p} = \frac{x}{1500} \implies p = -\frac{1}{0{,}05} \ln\frac{x}{1500} = 20 \ln\frac{1500}{x}$$

Inntekten uttrykt ved $x$:

$$I(x) = x \cdot p = 20x \cdot \ln\left(\frac{1500}{x}\right) \quad \square$$

### d

Kostnadsfunksjonen er $K(x) = 2000 + 15x$.

Overskuddet er $O(x) = I(x) - K(x) = 20x \cdot \ln\left(\frac{1500}{x}\right) - 2000 - 15x$.

Vi definerer overskuddsfunksjonen i CAS og finner maksimum:

![CAS: Overskudd](/img/user/_resources/s2-h19-2-2b.png)

Fra linje 4 leser vi av $x \approx 260{,}7$ og fra linje 5 at det største overskuddet er $\underline{\underline{\approx 3213 \text{ kr}}}$ per uke.

---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","regresjon","modellering"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Rottebestand og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/rottebestand-og-logistisk-modell/","permalink":"/rottebestand-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","regresjon","modellering"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Rottebestand og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Rottebestand og logistisk modell

I 2019 registrerte forskere antall rotter i en bypark noen dager i perioden fra og med 31. mai til og med 20. juli. Se tabellen.

| Antall dager etter 31. mai | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| Antall rotter | 6 | 15 | 37 | 72 | 104 | 126 |

>[!oppgave]
>a) La $t$ være antall dager etter 31. mai, og bruk regresjon til å bestemme en logistisk modell $g$ for antall rotter i parken.

Modellen $f$ gitt ved

$$f(t) = \frac{120}{1 + 19 \cdot e^{-0{,}12t}}$$

viser hvor mange rotter det var i den samme parken $t$ dager etter 31. mai i 2018.

>[!oppgave]
>b) Når økte antall rotter raskest, ifølge modellen $f$?
>Hvor raskt økte rottebestanden da?

I en annen park ble det i 2019 registrert 20 rotter den 31. mai. Anta at rottebestanden også i denne parken følger en logistisk modell. Anta videre at veksten i antall rotter var størst den 15. juli, og at bestanden stabiliserte seg på 200.

>[!oppgave]
>c) Hvor mange rotter var det i denne parken den 30. juli, ifølge disse antakelsene?

## Fasit

a) $g(t) \approx \dfrac{140{,}3}{1 + 23{,}1 \cdot e^{-0{,}1056t}}$
b) Etter ca. 24,5 dager. Veksten var da ca. 3,6 rotter per dag.
c) Ca. 135 rotter

## Løsningsforslag

### a

Vi legger inn datapunktene i GeoGebra og bruker logistisk regresjon.

| $t$ | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| Antall | 6 | 15 | 37 | 72 | 104 | 126 |

Vi tilpasser en logistisk modell $g(t) = \dfrac{C}{1 + a \cdot e^{-bt}}$.

Regresjonen gir

$$\underline{\underline{g(t) \approx \frac{140{,}3}{1 + 23{,}1 \cdot e^{-0{,}1056t}}}}$$

### b

For en logistisk funksjon $f(t) = \dfrac{C}{1 + a \cdot e^{-bt}}$ øker antallet raskest i vendepunktet, der $f(t) = \dfrac{C}{2}$.

Vi bruker GeoGebra CAS til å finne vendepunktet til $f$:

![GeoGebra CAS: vendepunkt](/img/user/_resources/s2-v20-2-2.png)

Fra linje 2 ser vi at vendepunktet er i $(24{,}54, \; 60)$.

Fra linje 3 ser vi at $f'(24{,}54) \approx 3{,}6$.

**Antall rotter økte raskest etter ca. $\underline{\underline{24{,}5 \text{~dager}}}$ (rundt 25. juni).**

**Veksten var da ca. $\underline{\underline{3{,}6 \text{~rotter per dag}}}$.**

### c

Vi skal finne en logistisk modell for den andre parken:

$$h(t) = \frac{C}{1 + a \cdot e^{-bt}}$$

Vi vet at:
- $C = 200$ (bestanden stabiliserer seg på 200)
- $h(0) = 20$ (20 rotter den 31. mai)
- Veksten er størst 15. juli, som er dag $t = 45$

I vendepunktet er $h(t) = \dfrac{C}{2} = 100$, og dette skjer ved $t = 45$.

Fra $h(0) = 20$:

$$\frac{200}{1 + a} = 20 \implies 1 + a = 10 \implies a = 9$$

Fra vendepunkt ved $t = 45$:

$$a \cdot e^{-45b} = 1 \implies 9 \cdot e^{-45b} = 1 \implies e^{-45b} = \frac{1}{9}$$

$$b = \frac{\ln 9}{45} \approx 0{,}0488$$

Den 30. juli er dag $t = 60$:

$$h(60) = \frac{200}{1 + 9 \cdot e^{-0{,}0488 \cdot 60}} = \frac{200}{1 + 9 \cdot e^{-2{,}929}}$$

$$= \frac{200}{1 + 9 \cdot 0{,}0535} = \frac{200}{1{,}482} \approx \underline{\underline{135 \text{~rotter}}}$$

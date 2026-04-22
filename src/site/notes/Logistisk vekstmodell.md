---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","modellering","derivasjon"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":1}],"title":"Logistisk vekstmodell","status":0,"source":null,"todo":null,"dg-permalink":"/logistisk-vekstmodell/","permalink":"/logistisk-vekstmodell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["logistisk funksjon","modellering","derivasjon"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":1}],"title":"Logistisk vekstmodell","status":0,"source":null,"todo":null}}
---


# Logistisk vekstmodell

Tabellen nedenfor viser folketallet på et lite tettsted, noen år i perioden 1960–1980.

| År | 1960 | 1961 | 1963 | 1965 | 1967 | 1971 | 1975 | 1977 | 1980 |
|---|---|---|---|---|---|---|---|---|---|
| Folketall | 500 | 604 | 852 | 1043 | 1510 | 2163 | 2544 | 2639 | 2715 |

>[!oppgave]
>a) Bruk informasjonen til å lage en modell $F$ på formen
>$$F(t) = \frac{B}{1 + a \cdot e^{-kt}}$$
>for antall personer $F(t)$ som bodde på dette tettstedet $t$ år etter 1960. Vurder modellens gyldighetsområde.
>b) Bestem $F'(12)$ og $F''(12)$. Gi en praktisk tolkning av svarene.
>c) Når økte antall personer som bodde på dette tettstedet, med mer enn 150 personer per år ifølge modellen?

## Fasit

a) $F(t) = \dfrac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}$
b) $F'(12) \approx 115$ pers/år, $F''(12) \approx -16{,}7$ (veksten avtar)
c) $t \in (3{,}33,\; 9{,}82)$, dvs. ca. 1963–1970

## Løsningsforslag

### 2-1a

Vi plotter datapunktene i GeoGebra og bruker **Regresjon → Logistisk** til å tilpasse en logistisk modell på formen $F(t) = \dfrac{B}{1 + a \cdot e^{-kt}}$.

Regresjonen gir (avrundede verdier):

$$
F(t) = \frac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}
$$

**Modell: $\underline{\underline{F(t) = \dfrac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}}}$**

**Gyldighetsområde:** Dataene strekker seg fra 1960 til 1980 ($t \in [0, 20]$). Modellen gir rimelige resultater i dette intervallet. Utenfor dette vil vi ha større usikkerhet – særlig for $t \gg 20$ der befolkningstallet ifølge modellen nærmer seg metningsgrensen $B \approx 2841$.

### 2-1b

Vi deriverer $F(t)$ og evaluerer i GeoGebra CAS:

$$F'(t) = \frac{B \cdot k \cdot a \cdot e^{-kt}}{(1 + a \cdot e^{-kt})^2}$$

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/r1-h25-2-1-b-CAS.png){width=70%}

**$\underline{\underline{F'(12) \approx 115}}$ personer per år.**

Praktisk tolkning: I 1972 (dvs. $t = 12$) økte befolkningstallet med omtrent 115 personer per år.

**$\underline{\underline{F''(12) \approx -16{,}7}}$ (personer per år) per år.**

Praktisk tolkning: $F''(12) < 0$ betyr at veksthastigheten er **avtagende** i 1972 – befolkningsveksten er på vei ned fra toppen. (Vendepunktet, der veksthastigheten er størst, inntreffer ved $t \approx 6{,}6$, dvs. rundt 1966–1967.)

### 2-1c

Vi setter $F'(t) = 150$ og løser i GeoGebra CAS:

$$F'(t) = 150$$

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/r1-h25-2-1-c-CAS.png){width=70%}

**Løsningene er $t \approx 3{,}33$ og $t \approx 9{,}82$.**

Siden $F'(t)$ stiger mot maksimum og deretter synker, er $F'(t) > 150$ for $t \in (3{,}33,\; 9{,}82)$, det vil si fra ca. **midten av 1963 til slutten av 1969** økte befolkningstallet med mer enn 150 personer per år.

**$\underline{\underline{t \in (3{,}33,\; 9{,}82)}}$, dvs. fra ca. 1963 til 1970.**

---

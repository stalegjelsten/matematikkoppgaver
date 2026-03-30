---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["eksponentiell vekst","modellering","regresjon"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":1}],"title":"Eksponentiell modell for befolkningsvekst","status":3,"source":null,"todo":null,"permalink":"/eksponentiell-modell-for-befolkningsvekst/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["eksponentiell vekst","modellering","regresjon"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":1}],"title":"Eksponentiell modell for befolkningsvekst","status":3,"source":null,"todo":null}}
---


# Eksponentiell modell for befolkningsvekst

Tabellen nedenfor viser folketallet i en bygd, noen år i perioden 1910–1935.

| År        | 1910 | 1913 | 1919 | 1921 | 1925 | 1927 | 1931 | 1935 |
|-----------|------|------|------|------|------|------|------|------|
| Folketall | 800  | 963  | 1253 | 1511 | 1720 | 1879 | 2387 | 2774 |

>[!oppgave]
>a) Bruk informasjonen til å lage en modell på formen
>
>$$F(t) = a \cdot b^t$$
>
>for antall personer $F(t)$ som bodde i bygda $t$ år etter 1910.
>
>Vurder modellens gyldighetsområde.
>b) Når økte befolkningen med mer enn 80 personer per år ifølge modellen?
>c) Hvor mange år gikk det før den gjennomsnittlige befolkningsveksten fra 1910 var større enn 80 personer per år ifølge modellen?

## Fasit

a) $F(t) \approx 820{,}6 \cdot 1{,}051^t$, gyldighetsområde $t \in [0, 25]$
b) Fra og med 1924 ($t \approx 13{,}5$)
c) Etter 25 år

## Løsningsforslag

### 2-1a

Vi setter $t = 0$ i 1910 og bruker eksponentiell regresjon på datapunktene:

| $t$ | $0$ | $3$ | $9$ | $11$ | $15$ | $17$ | $21$ | $25$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $F$ | $800$ | $963$ | $1253$ | $1511$ | $1720$ | $1879$ | $2387$ | $2774$ |

Eksponentiell regresjon (f.eks. i GeoGebra) gir:

$$\underline{\underline{F(t) \approx 820{,}6 \cdot 1{,}051^t}}$$

Grafen under viser at kurven passer godt til datapunktene ($R^2 \approx 0{,}99$):

![Regresjonsmodell og datapunkter for oppgave 2-1a](/img/user/_resources/s1-h25-2-1-a-graf.png)

**Gyldighetsområde:** Modellen passer for dataene i perioden 1910–1935, det vil si $t \in [0, 25]$. Utenfor dette tidsrommet kan vekstmønsteret endre seg og modellen mister gyldighet.

### 2-1b

Vekstfarten er den deriverte av $F$:

$$F'(t) = 820{,}6 \cdot 1{,}051^t \cdot \ln(1{,}051)$$

Vi løser $F'(t) = 80$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/s1-h25-2-1-b-CAS.png)

CAS gir $t \approx 13{,}5$, dvs. fra og med $t = 14$ (år **1924**).

**Befolkningen økte med mer enn 80 personer per år fra og med 1924 ifølge modellen.**

### 2-1c

Gjennomsnittlig befolkningsvekst fra 1910 til år $t$ er $\dfrac{F(t) - F(0)}{t}$. Vi løser:

$$\frac{F(t) - 820{,}6}{t} = 80$$

i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/s1-h25-2-1-c-CAS.png)

CAS gir $t \approx 24{,}6$, så vi runder opp til $t = 25$.

**Det gikk $\underline{\underline{25 \text{ år}}}$ (til 1935) før den gjennomsnittlige veksten fra 1910 var større enn 80 personer per år.**

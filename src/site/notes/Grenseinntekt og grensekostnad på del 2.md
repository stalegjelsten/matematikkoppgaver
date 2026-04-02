---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"dg-publish":true,"temaer":["regresjon","tolkning av integraler","samlet mengde","grenseinntekt og grensekostnad"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Grenseinntekt og grensekostnad på del 2","source":"Eksamen S2 vår 2025","todo":null,"status":3,"dg-permalink":"/grenseinntekt-og-grensekostnad-pa-del-2/","permalink":"/grenseinntekt-og-grensekostnad-pa-del-2/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"temaer":["regresjon","tolkning av integraler","samlet mengde","grenseinntekt og grensekostnad"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Grenseinntekt og grensekostnad på del 2","source":"Eksamen S2 vår 2025","todo":null,"status":3}}
---


# Grenseinntekt og grensekostnad på del 2


En bedrift produserer og selger $x$ enheter av en vare per uke.
Tabellen nedenfor viser kostnaden ved ulike produksjonsmengder.

| Produksjon <br> (enheter per uke) | 10  | 20  |  40  |  50  |
| :-------------------------------- | :-: | :-: | :--: | :--: |
| Kostnad (kroner)                  | 400 | 850 | 2070 | 2890 |

En modell for kostnaden $K(x)$ kroner kan skrives på formen

$$
K(x)=a x^2+b x+c
$$

>[!oppgave]
> a) Vis at $K^{\prime}(x)=1,23 x+25$

Inntekten $I(x)$ kroner per uke er gitt ved

$$
I(x)=3000 \cdot \ln (5 x)
$$

>[!oppgave]
> b) Bestem $I^{\prime}(35)$ og $K^{\prime}(35)$.
> 	Gi en praktisk tolkning av svarene.
> c) Bestem $\int_{20}^{30} K^{\prime}(x) d x$.
> 	Gi en praktisk tolkning av svaret.

## Fasit

b) $I'(35)=85{,}71 \text{ og } K'(35)=68{,}19$
c) 558,5 kr. Dette er differansen mellom produksjonskostnader for 20 enheter og 30 enheter.

## Løsningsforslag

### 2-1a

![Regresjon i GeoGebra](/img/user/_resources/s2-v25-2-1a.png){width=60%}

Vi finner en andregradsmodell for kostnadene ved hjelp av regresjon i GeoGebra. Se utklippet over.
$$
K(x)=0{,}617 x^{2}+25x+93{,}33
$$

**Grenseinntekten $K'(x)=2 \cdot 0{,}617x+25=\underline{\underline{1{,}23x+25}}$.** 

### 2-1b

![Grenseinntekt og grensekostnad i GeoGebra](/img/user/_resources/s2-v25-2-1b.png){width=60%}

Se linje 3 og 4 i CAS.
$$
\underline{\underline{I'(35)=85{,}71 \text{ og } K'(35)=68{,}19 }}
$$
**Her øker grenseinntekten mer enn grensekostnaden, altså vil vi tjene mer penger ($85{,}71 \text{ kr}$) på å produsere en mer enhet, enn hva vi må betale i produksjonskostnader for å produsere en mer enhet ($68{,}19 \text{ kr}$). Vi tjener altså omtrent $85{,}71-68{,}19=17{,}5$ kr på å produsere og selge 36 enheter framfor 35 enheter.**

### 2-1c
Se linje 5 i CAS.
$$
\underline{\underline{\int_{20}^{30} K'(x) \, dx =558{,}5}}
$$
Dette er det bestemte integralet av *grensekostnaden* $K'(x)$, altså vil svaret vårt tilsvare
$$
\int_{20}^{30} K'(x) \, dx = K(30)-K(20)
$$
**558,5 kr er altså differansen i produksjonskostnader mellom å produsere 20 enheter og 30 enheter.**

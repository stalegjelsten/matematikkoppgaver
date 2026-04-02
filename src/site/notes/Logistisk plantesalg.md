---
{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"dg-publish":true,"temaer":["regresjon","logistisk funksjon","tolkning av integraler"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Logistisk plantesalg","source":null,"todo":null,"status":3,"dg-permalink":"/logistisk-plantesalg/","permalink":"/logistisk-plantesalg/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"temaer":["regresjon","logistisk funksjon","tolkning av integraler"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Logistisk plantesalg","source":null,"todo":null,"status":3}}
---


# Logistisk plantesalg


Et hagesenter ønsker å satse på salg av en ny type planter. De startet salget av plantene i uke 17. Utover våren økte salget. I tabellen nedenfor ser du inntekten fra salget av plantene de første ukene.

| Uke              |  17  |  18  |   19   |   20   |   21   |  22   |   23   |   24   |
| :--------------- | :--: | :--: | :----: | :----: | :----: | :---: | :----: | :----: |
| Inntekt (kr/uke) | 2900 | 4400 | 12 200 | 23 400 | 28 800 | 34600 | 41 000 | 40 800 |

>[!oppgave]
>a) Bruk informasjonen i tabellen til å lage en modell I på formen
>
>$$I(t)=\frac{B}{1+a \cdot e^{-k t}}$$
>
>for inntekten $I(t)$ kroner per uke, $t$ uker etter uke 17.
>Vurder modellens gyldighetsområde.

>[!oppgave]
>b) Når økte inntekten mest, ifølge modellen? Hvor mye økte inntekten med på dette tidspunktet?

>[!oppgave]
>c) Løs likningen
>
>$$\int_0^x I(t) \mathrm{~d}t =65000$$
>
>Gi en praktisk tolkning av svaret.

## Fasit

a) $I(t)=\frac{42\,000}{1+14{,}76 e ^{-0{,}9035t}}$  
Gyldig fra uke 17 til 24.
b) Uke 20. 9486 kr per uke.
c) Uke 21.

## Løsningsforslag

### 2-1a

![Regresjon i GeoGebra til oppgave 1 del 2](/img/user/_resources/s2-h25-2-1a-regresjon.png){width=60%}

Jeg brukte regresjon i GeoGebra for å finne en logistisk modell som passer til uttrykket i oppgaveteksten. Den modellen som passer best er
$$
\underline{\underline{I(t)=\frac{42\,000}{1+14{,}76 e ^{-0{,}9035t}}}}
$$
Salget starter i uke 17, så modellen er ikke gyldig før dette. I uke 24 så ser vi at salget minker noe fra uke 23, og det er naturlig med tanke på at uke 24 er starten av sommerferien. Sannsynligvis selger man ikke like mye planter på sommeren som man gjør i vekstperioden på våren.

**Jeg vurderer modellens gyldighetsområde til å kun være fra uke 17 til og med uke 24, altså $t \in [0,7]$.** 

### 2-1b

![CAS løsning av oppgave 1 del 2](/img/user/_resources/s2-h25-2-1bc.png){width=60%}

Inntekten øker mest ved vendepunktet $t=3$ (etter 20 uker), se linje 2 i utklippet. Den deriverte til $I(t)$ gir oss vekstfarten etter 20 uker i linje 3.

**Inntektene vokser raskest i uke 20. De vokser da med omtrent 9486 kr per uke.**

### 2-1c
Se linje 4 i GeoGebra-utklippet. $x=4{,}3$ tilsvarer underveis i uke 21.

**De samlede salgsinntektene for planten passerte 65 000 kr i uke 21.**

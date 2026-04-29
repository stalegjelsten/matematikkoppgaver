---
{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"dg-publish":true,"temaer":["modellering"],"fag":["2p-y"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5}],"title":"Modell for lengde av skjerf","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Sette opp lineær modell fra to punkter ($(0,8)$ og $(25,40)$) og løse $1{,}28x+8=17$ for å finne ukene til 17 meter.","dg-permalink":"/modell-for-lengde-av-skjerf/","poeng":3,"permalink":"/modell-for-lengde-av-skjerf/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"temaer":["modellering"],"fag":["2p-y"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5}],"title":"Modell for lengde av skjerf","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Sette opp lineær modell fra to punkter ($(0,8)$ og $(25,40)$) og løse $1{,}28x+8=17$ for å finne ukene til 17 meter.","poeng":3}}
---


# Modell for lengde av skjerf


Elevene ved en folkehøyskole holder på å strikke et langt skjerf.

I dag er skjerfet 8 meter langt.

- Elevene ønsker å organisere strikkingen slik at lengden av skjerfet øker med like mange centimeter hver uke.
- Målet er at skjerfet etter 25 uker skal være 40 meter langt.

>[!oppgave]
> a) Sett opp en modell som viser hvor langt skjerfet vil være etter $x$ dersom elevene klarer å organisere strikkingen slik de ønsker, og når målet.

>[!oppgave]
>b) Hvor mange uker vil det gå før skjerfet er 17 meter langt, ifølge modellen i oppgave a)?

## Fasit

a) $y=1{,}28x+8$
b) 7 uker

## Løsningsforslag

### a
For at skjerfet skal øke med like mange centimeter per uke, så må vi bruke en lineær modell på formen $y=ax+b$. 

Vi vet at skjerfet er 8 m i dag, og at det skal bli 40 meter etter 25 uker. Det skal altså øke med vekstfarten
$$
\frac{40 \text{ m}-8\text{ m}}{25\text{ uke}}=1{,}28 \text{ meter per uke}
$$
En lineær modell for lengden på skjerfet etter $x$ uker vil derfor være
$$
y=1{,}28x+8
$$


>[!note] Løsning med regresjon
>
>Denne oppgaven kan løses med lineær regresjon i GeoGebra med punktene $(0,8)$ og $(25,40)$.

### b
Jeg løser oppgaven i CAS. Vi skal finne ut når funksjonen vår passerer 17 m, vi skal altså løse likningen
$$
1{,}28x+8=17
$$

![Løsning av 2-5b i CAS](/img/user/_resources/2py-v25-2-5b.png){width=50%}

**Det tar 7 uker før skjerfet er 17 meter langt ifølge modellen.**

>[!note] Alternativ løsning med graftegner
>
> Vi kan tegne funksjonen i GeoGebra og finne skjæringen med linja $y=17$, men dette tar litt ekstra tid.

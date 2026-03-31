---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["regresjon","modellering"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":null,"title":"Antall fiskere og regresjon","status":0,"source":null,"todo":null,"permalink":"/antall-fiskere-og-regresjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["regresjon","modellering"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":null,"title":"Antall fiskere og regresjon","status":0,"source":null,"todo":null}}
---


# Antall fiskere og regresjon

Tabellen nedenfor viser antall personer i Norge som hadde fiske som hovedyrke noen år i perioden 1952–2022.

| År             | 1952   | 1982   | 1992   | 2002   | 2012  | 2022  |
| -------------- | ------ | ------ | ------ | ------ | ----- | ----- |
| Antall fiskere | 65 956 | 25 289 | 19 780 | 13 841 | 9 825 | 9 591 |

>[!oppgave]
>a) La $x$ være antall år etter 1950 og bruk opplysningene i tabellen til å bestemme en modell $F$ som du mener kan brukes til å si noe om antall personer som har hatt fiske som hovedyrke i perioden 1952–2022.
>b) Hvor mange personer i Norge vil i 2050 ha fiske som hovedyrke ifølge modellen fra oppgave a)? Vurder modellens gyldighetsområde.

## Fasit

## Løsningsforslag 

### a
Jeg la inn årstallene, antall år etter 1950 og antallet fiskere i regnearket i GeoGebra. Se figuren.

![Regresjon i GeoGebra](/img/user/_resources/1t-h23-2-4-regresjon.png)

Punktene så ut til å passe godt med en eksponentiell modell, og det virker fornuftig at antallet fiskere minker med en relativt fast prosentandel hvert år. Den eksponentielle modellen vil også aldri treffe 0, slik at den kan brukes langt fram i tid.

**$\underline{\underline{ F(x)=66\,360 \cdot 0{,}9714^{x} }}$ er en god modell for antall fiskere i denne perioden.**

### b
Vi kan bruke modellen for å finne ut hvor mange fiskere det vil være i 1950. Vi regner ut $F(100)$ i GeoGebra siden 2050 tilsvarer $x=100$. 

![Beregning av antall fiskere i 2050](/img/user/_resources/1t-h23-2-4-beregning.png)

**Det er omtrent 3645 fiskere i 2050 ifølge modellen vår.**

---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["regresjon","lineær vekst","stigningstall"],"fag":["1p"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"poeng":null,"title":"Modell for antall fiskere","status":3,"source":null,"todo":null,"permalink":"/modell-for-antall-fiskere/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["regresjon","lineær vekst","stigningstall"],"fag":["1p"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"poeng":null,"title":"Modell for antall fiskere","status":3,"source":null,"todo":null}}
---


# Modell for antall fiskere

Tabellen nedenfor viser antall personer i Norge som hadde fiske som hovedyrke noen år i perioden 1952–2022.

| År             | 1952   | 1982   | 1992   | 2002   | 2012  | 2022  |
| -------------- | ------ | ------ | ------ | ------ | ----- | ----- |
| Antall fiskere | 65 956 | 25 289 | 19 780 | 13 841 | 9 825 | 9 591 |

>[!oppgave]
>a) La $x$ være antall år etter 1950 og bruk opplysningene i tabellen til å bestemme en modell $F$ som du mener kan brukes til å si noe om antall personer som har hatt fiske som hovedyrke i perioden 1952–2022.
>b) Hvor mange personer i Norge vil ha fiske som hovedyrke i 2050 ifølge modellen fra oppgave a)? Vurder modellens gyldighetsområde.
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(30, F(30))$ og $(70, F(70))$. Gi en praktisk tolkning av svaret.

## Fasit

a) $F(x) = 66\,360 \cdot 0{,}9714^{x}$
b) Ca. 3 658 fiskere i 2050
c) $a \approx -477$ fiskere per år

## Løsningsforslag

### 2-1a

Jeg lar $x$ være antall år etter 1950, og setter inn datapunktene fra tabellen:

| $x$ | $2$ | $32$ | $42$ | $52$ | $62$ | $72$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Antall fiskere | $65\,956$ | $25\,289$ | $19\,780$ | $13\,841$ | $9\,825$ | $9\,591$ |

Siden antallet fiskere faller raskt i begynnelsen og deretter flater ut, passer en **eksponentiell modell** bedre enn en lineær. Jeg bruker GeoGebra til å finne eksponentiell regresjon gjennom datapunktene og får:

$$F(x) = 66\,360 \cdot 0{,}9714^{x}$$

![Regresjonsmodell og datapunkter for oppgave 2-1a](/img/user/_resources/1p-h23-2-1-a-graf.png)

Modellen passer godt til datapunktene ($R^2 \approx 0{,}99$).

**Modellen for antall fiskere er $\underline{\underline{F(x) = 66\,360 \cdot 0{,}9714^{x}}}$**, der $x$ er antall år etter 1950.

### 2-1b

I 2050 er $x = 2050 - 1950 = 100$. Vi setter inn i modellen:

$$F(100) = 66\,360 \cdot 0{,}9714^{100} \approx 3\,658$$

**Ifølge modellen vil det være omtrent $\underline{\underline{3\,658}}$ fiskere i 2050.**

Modellen er laget for å beskrive perioden 1952–2022, og det er usikkert om den gir et godt bilde utenfor dette området. Antallet fiskere kan ikke bli negativt, og modellen kan ikke brukes til å si noe sikkert om situasjonen i 2050.

### 2-1c

Vi beregner $F(30)$ og $F(70)$:

$$
\begin{aligned}
F(30) &= 66\,360 \cdot 0{,}9714^{30} \approx 27\,817 \\
F(70) &= 66\,360 \cdot 0{,}9714^{70} \approx 8\,727
\end{aligned}
$$

Stigningstallet til linjen gjennom $(30, F(30))$ og $(70, F(70))$ er:

$$
a = \frac{F(70) - F(30)}{70 - 30} = \frac{8\,727 - 27\,817}{40} = \frac{-19\,090}{40} \approx -477
$$

**Stigningstallet er $\underline{\underline{\approx -477}}$.**

Dette betyr at modellen viser en gjennomsnittlig nedgang på omtrent 477 fiskere per år i perioden fra 1980 ($x=30$) til 2020 ($x=70$).

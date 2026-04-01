---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-24","aliases":[],"dg-publish":true,"temaer":["geometri","funksjoner","areal"],"fag":["1p"],"eksamen":"h25","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":7}],"title":"Blomsterbed med halvsirkel","status":1,"source":null,"todo":null,"permalink":"/blomsterbed-med-halvsirkel/","lf-source-claude":true,"dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-24","aliases":[],"temaer":["geometri","funksjoner","areal"],"fag":["1p"],"eksamen":"h25","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":7}],"title":"Blomsterbed med halvsirkel","status":1,"source":null,"todo":null,"permalink":"/blomsterbed-med-halvsirkel/","lf-source-claude":true}}
---


# Blomsterbed med halvsirkel

<!-- two-column start left-width=70% -->

Selma og Sofie vil lage et blomsterbed med gjerde rundt. Blomsterbedet skal ha form som et rektangel med en halvsirkel i enden. Se skissen.

Formler for omkrets og areal av en sirkel:

$$O = 2 \cdot \pi \cdot r$$
$$A = \pi \cdot r^2$$

---

![Blomsterbed skisse](/img/user/_resources/1p-h25-2-7.jpeg){width=100%}

<!-- two-column stop -->


>[!oppgave]
>a) Forklar at omkretsen av blomsterbedet kan skrives som
>$$O = 2 \cdot y + x + \frac{\pi \cdot x}{2}$$

Jentene har kjøpt inn materialer slik at de kan lage et gjerde som er 12 meter.

Selma foreslår at $x$ skal være 1 meter.

>[!oppgave]
>b) Vis at da må $y$ være ca. $4{,}7$ meter.
>c) Hvor stort blir arealet av blomsterbedet dersom $x = 1$ og $y = 4{,}7$?

Sofie vil lage en systematisk oversikt som viser arealet av ulike blomsterbed de kan lage når gjerdet skal være 12 meter.

>[!oppgave]
>d) Lag en slik oversikt for Sofie.

Selma lurer på om de kan tegne en graf som de kan bruke for å finne den verdien av $x$ som vil gi størst mulig areal når gjerdet skal være 12 meter. Hun prøver å sette opp et funksjonsuttrykk hun kan bruke.

>[!oppgave]
>e) Sett opp et funksjonsuttrykk for Selma. Tegn grafen og bestem det størst mulige arealet.

## Fasit

a) Vis
b) $y \approx 4{,}7 \, \mathrm{m}$
c) $A \approx 5{,}1 \, \mathrm{m^2}$
d) Oversiktstabell
e) $A_{\max} \approx 10{,}1 \, \mathrm{m^2}$ ved $x \approx 3{,}36 \, \mathrm{m}$

## Løsningsforslag

> [!warning] KI-løsning
> Denne løsningen er skrevet av KI. Løsningen ser riktig ut, men jeg har lyst til å endre på fremgangsmåten slik at det passer bedre med hvordan vi vanligvis løser slike oppgaver i norsk videregående skole.


### 2-7a

Blomsterbedet har to sider av lengde $y$ (de to langsidene), én rett ende med lengde $x$, og én halvsirkel med diameter $x$ (radius $r = x/2$).

De tre rette sidene vil ha lengde $y+x+y$.

Halvsirkelen har omkretsen til en halvsirkel med radius $\frac{x}{2}$. Omkretsen til en hel sirkel er $2\pi r$, og da blir omkretsen til en halvsirkel $\pi r$. Lengden av vår halvsirkel er

$$
\pi \cdot r = \pi \cdot \frac{x}{2 }=\frac{\pi x}{2}
$$

Dermed er den totale omkretsen:

$$O = y + x + y + \frac{\pi x}{2} = \underline{\underline{ 2y + x + \frac{\pi x}{2} }} $$

### 2-7b

Setter inn $x = 1$ og $O = 12$:

$$12 = 2y + 1 + \frac{\pi \cdot 1}{2}$$

$$2y = 12 - 1 - \frac{\pi}{2} = 11 - \frac{\pi}{2} \approx 11 - 1{,}571 = 9{,}429$$

$$y \approx 4{,}71 \approx 4{,}7$$

**Når $x = 1$, er $y \approx \underline{\underline{4{,}7 \, \mathrm{m}}}$.**

### 2-7c

Arealet består av et rektangel og en halvsirkel:

$$A = x \cdot y + \frac{\pi r^2}{2} = 1 \cdot 4{,}7 + \frac{\pi \cdot (0{,}5)^2}{2} = 4{,}7 + \frac{\pi}{8} \approx 4{,}7 + 0{,}39 = 5{,}09$$

**Arealet er omtrent $\underline{\underline{5{,}1 \, \mathrm{m^2}}}$.**

### 2-7d

Fra $O = 12$ får vi $y = \dfrac{12 - x\left(1 + \dfrac{\pi}{2}\right)}{2}$.

Arealet er $A = xy + \dfrac{\pi x^2}{8}$.

| $x$ (m) | $y$ (m) | $A$ (m²) |
| :---: | :---: | :---: |
| $0{,}5$ | $5{,}36$ | $2{,}78$ |
| $1{,}0$ | $4{,}71$ | $5{,}11$ |
| $1{,}5$ | $4{,}07$ | $6{,}99$ |
| $2{,}0$ | $3{,}43$ | $8{,}43$ |
| $2{,}5$ | $2{,}79$ | $9{,}42$ |
| $3{,}0$ | $2{,}14$ | $9{,}97$ |
| $3{,}5$ | $1{,}50$ | $10{,}06$ |
| $4{,}0$ | $0{,}86$ | $9{,}72$ |

Tabellen viser at størst areal oppnås et sted mellom $x = 3$ og $x = 4$.

### 2-7e

Fra $O = 12$ uttrykker vi $y$ som funksjon av $x$:

$$y = \frac{12 - x \left(1 + \frac{\pi}{2}\right)}{2}$$

Setter inn i arealformelen og forenkler:

$$A(x) = x \cdot y + \frac{\pi x^2}{8} = 6x - x^2 \cdot \frac{4 + \pi}{8}$$

Vi tegner grafen til $A(x)$ i GeoGebra og leser av toppunktet:

![Graf av $A(x) = 6x - x^2 \cdot \frac{4+\pi}{8}$ med toppunkt markert](/img/user/_resources/1p-h25-2-7-e-graf.png){width=70%}

Fra grafen leser vi at toppunktet er $(3{,}36,\ 10{,}08)$, altså $x \approx 3{,}36 \, \mathrm{m}$ og $A \approx 10{,}1 \, \mathrm{m^2}$.

Tilhørende $y$:

$$y = \frac{12 - 3{,}36 \cdot \left(1 + \frac{\pi}{2}\right)}{2} \approx 1{,}68 \, \mathrm{m}$$

**Det største arealet er $\underline{\underline{\approx 10{,}1 \, \mathrm{m^2}}}$, og det oppnås når $x \approx 3{,}36 \, \mathrm{m}$.**

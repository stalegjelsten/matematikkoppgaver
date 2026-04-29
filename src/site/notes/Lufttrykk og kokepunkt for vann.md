---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/lufttrykk-og-kokepunkt-for-vann/","dg-publish":true,"eksamen":"v24","fag":["1t","1p"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5},{"del":2,"fag":"1p","oppgave":6}],"poeng":8,"source":null,"status":1,"tags":["oppgave"],"temaer":["potensfunksjon","eksponentiell vekst","modellering"],"title":"Lufttrykk og kokepunkt for vann","todo":[],"permalink":"/lufttrykk-og-kokepunkt-for-vann/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t","1p"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5},{"del":2,"fag":"1p","oppgave":6}],"poeng":8,"source":null,"status":1,"tags":["oppgave"],"temaer":["potensfunksjon","eksponentiell vekst","modellering"],"title":"Lufttrykk og kokepunkt for vann","todo":[]}}
---


# Lufttrykk og kokepunkt for vann

> [!tip] Info om lufttrykk
>
> - Lufttrykk måles ofte i hektopascal (hPa).
> - Jo høyere over havet vi befinner oss, jo lavere er lufttrykket.
> - Lufttrykket ved havets overflate er ca. 1000 hPa.

Når lufttrykket er lavere enn 1000 hPa, vil kokepunktet for vann være lavere enn $100 \degree\mathrm{C}$. Se tabellen nedenfor.

| Lufttrykk (hPa) | Kokepunkt for vann ($\degree\mathrm{C}$) |
| :-------------: | :--------------------------------------: |
|      1000       |                   100                    |
|       500       |                   81,4                   |
|       200       |                   60,1                   |
|       80        |                   41,5                   |
|       40        |                    29                    |

>[!oppgave]
>a) Bestem en modell $K$ på formen
>
>$$K(x) = a \cdot x^b$$
>
>som tilnærmet viser sammenhengen mellom lufttrykket $x$ hPa og kokepunktet $K(x)$ $\degree\mathrm{C}$.

>[!blue-box] Ari
>Betyr dette at det ikke går an å få egg hardkokte oppe på et høyt fjell? Et egg blir ikke hardkokt dersom temperaturen i vannet er lavere enn $85 \degree\mathrm{C}$.

>[!green-box] Lisa
>Det kommer vel an på hvor høyt fjellet er?

>[!blue-box] Ari
>Jeg vil lage en modell som viser hvor høyt lufttrykket er $x$ kilometer over havets overflate. Jeg har lært at lufttrykket minker med ca. 12 % per km.

>[!green-box] Lisa
>Jeg har lært at lufttrykket halveres for hver 5,5 km. Jeg vil ta utgangspunkt i dette og lage en modell på samme form som den du lager, Ari.

>[!oppgave]
>b) Lag modellene for Ari og Lisa.
>c) Omtrent hvor høyt over havet er det mulig å få egg hardkokte?

## Fasit

a) $K(x) = 8{,}71 \cdot x^{0{,}356}$

b) Aris modell: $L_A(x) = 1000 \cdot 0{,}88^x$. Lisas modell: $L_L(x) = 1000 \cdot \left(\tfrac{1}{2}\right)^{x/5{,}5}$

c) Med Aris modell: ca. $\underline{\underline{4 \, \mathrm{km}}}$ over havet.

## Løsningsforslag

### a

Vi legger inn datapunktene fra tabellen i GeoGebra og bruker regresjonsverktøyet til å finne en modell på formen $K(x) = a \cdot x^b$.

Fra GeoGebra (potensregresjon):

$$K(x) = 8{,}71 \cdot x^{0{,}356}$$

![Graf av K(x) med datapunkter og linje y=85](/img/user/_resources/1t-v24-2-5.png){width=90%}

Modellen passer godt — alle datapunktene ligger nær kurven.

**$\mathbf{K(x) = 8{,}71 \cdot x^{0{,}356}}$**

### b

**Aris modell:** Lufttrykket minker med 12 % per km, det vil si lufttrykket blir ganget med $0{,}88$ for hvert km. Vi starter ved $1000$ hPa ved havets overflate, slik at

$$L_A(x) = 1000 \cdot 0{,}88^x$$

der $x$ er antall km over havet.

**Lisas modell:** Lufttrykket halveres for hver $5{,}5$ km, det vil si $k^{5{,}5} = \tfrac{1}{2}$, som gir $k = \left(\tfrac{1}{2}\right)^{1/5{,}5} \approx 0{,}8816$. Med samme startverdi:

$$L_L(x) = 1000 \cdot \left(\tfrac{1}{2}\right)^{x/5{,}5}$$

Modellene er svært like: $k_A = 0{,}88$ og $k_L \approx 0{,}882$.

### c

Et egg blir hardkokt dersom kokepunktet er minst $85 \, \degree\mathrm{C}$. Vi må finne høyden $x$ slik at $K(L(x)) = 85$.

Vi bruker Aris modell og setter opp likningen

$$K\left(L_A(x)\right) = 8{,}71 \cdot \left(1000 \cdot 0{,}88^x\right)^{0{,}356} = 85$$

Vi løser likningen i GeoGebra CAS:

![GeoGebra CAS løser K(L(x)) = 85](/img/user/_resources/1t-v24-2-5-cas-c.png){width=70%}

CAS gir $x \approx 3{,}98 \, \mathrm{km}$.

Med Lisas modell får man $x \approx 4{,}03 \, \mathrm{km}$ — begge modellene gir omtrent det samme svaret.

**Det er mulig å få egg hardkokte opp til ca. $\underline{\underline{4 \, \mathrm{km}}}$ over havet.**
---
{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"dg-publish":true,"temaer":["modellering","regresjon"],"fag":["2p-y"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Modell for Hannes løping","source":null,"todo":null,"status":3,"permalink":"/modell-for-hannes-loping/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"temaer":["modellering","regresjon"],"fag":["2p-y"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Modell for Hannes løping","source":null,"todo":null,"status":3,"permalink":"/modell-for-hannes-loping/"}}
---


# Modell for Hannes løping


For ni uker siden begynte Hanne å løpe. Tabellen nedenfor viser hvor lenge hun klarte å løpe sammenhengende noen av dagene disse ukene:  

|                   Dag                    |  1  |  8  | 22  | 36  | 50  | 64  |
| :--------------------------------------: | :-: | :-: | :-: | :-: | :-: | :-: |
| Antall minutter  <br>løpt sammenhengende | 10  | 20  | 28  | 33  | 37  | 40  |

Utviklingen kan beskrives med en modell gitt på formen  

$$L(x) = a \cdot x^b \quad , \quad x \geq 1$$

der $L(x)$ er antall minutter Hanne klarte å løpe sammenhengende på dag $x$.  

>[!oppgave]
>a) Bruk opplysningene i tabellen til å bestemme tallene $a$ og $b$.  
>b) Hvor mange uker vil det ta før Hanne klarer å løpe 45 minutter sammenhengende ifølge modellen?  
>c) Hvor mange minutter har tiden Hanne klarer å løpe sammenhengende, økt med i gjennomsnitt per dag fra dag 1 til dag 60 ifølge modellen?  

## Fasit

a) $a \approx 10$, $b \approx 0{,}334$
b) Omtrent $13$ uker fra start (ca. 4 uker fra nå)
c) $\approx 0{,}5 \, \mathrm{min/dag}$

## Løsningsforslag

### 2-6a

Vi skal bestemme $a$ og $b$ i modellen $L(x) = a \cdot x^b$.

Vi bruker kalkulator (regresjon med potensmodell) på datapunktene:

| $x$ | $1$ | $8$ | $22$ | $36$ | $50$ | $64$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $L$ | $10$ | $20$ | $28$ | $33$ | $37$ | $40$ |

Regresjonen gir $a \approx 10$ og $b \approx 0{,}334$.

![Regresjonsmodell og datapunkter for oppgave 2-6a](/img/user/_resources/2p-y-h24-2-6-a-graf.png){width=70%}

Grafen viser at modellen passer godt til datapunktene.

**$\underline{\underline{a \approx 10 \text{ og } b \approx 0{,}334}}$, slik at $L(x) \approx 10 \cdot x^{0{,}334}$.**

### 2-6b

Vi vil finne $x$ slik at $L(x) = 45$. Vi tegner linjen $y = 45$ og finner skjæringspunktet med $L(x)$:

![Graf av $L(x) = 10 \cdot x^{0{,}334}$ med linjen $y = 45$](/img/user/_resources/2p-y-h24-2-6-b-graf.png){width=70%}

Fra grafen leser vi av at $L(x) = 45$ når $x \approx 91$ dager.

$91$ dager $\approx 13$ uker fra dag 1. Hanne begynte for 9 uker siden, så det er omtrent $13 - 9 = 4$ uker til hun klarer målet.

**Ifølge modellen vil det ta omtrent $\underline{\underline{13 \text{ uker}}}$ fra Hanne startet (ca. 4 uker fra nå) før hun klarer å løpe 45 minutter sammenhengende.**

### 2-6c

Gjennomsnittlig økning per dag fra dag 1 til dag 60:

$$\frac{L(60) - L(1)}{60 - 1} = \frac{10 \cdot 60^{0{,}334} - 10 \cdot 1^{0{,}334}}{59} \approx \frac{39{,}2 - 10{,}0}{59} \approx 0{,}495$$

**Hanne har i gjennomsnitt økt løpetiden med omtrent $\underline{\underline{0{,}5 \, \mathrm{min/dag}}}$ fra dag 1 til dag 60 ifølge modellen.**

---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/sondres-modell-for-hundear/","dg-publish":true,"eksamen":"h23","fag":["1p"],"lf-source-claude":true,"modified":"2026-03-29","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["lineær vekst","modellering","proporsjonalitet"],"title":"Sondres modell for hundeår","kategori":2,"vanskegrad":2,"beskrivelse":"Forstå og argumentere for en lineær modell for hundeår, og avgjøre om sammenhengen er proporsjonal.","todo":[],"permalink":"/sondres-modell-for-hundear/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["1p"],"lf-source-claude":true,"modified":"2026-03-29","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["lineær vekst","modellering","proporsjonalitet"],"title":"Sondres modell for hundeår","kategori":2,"vanskegrad":2,"beskrivelse":"Forstå og argumentere for en lineær modell for hundeår, og avgjøre om sammenhengen er proporsjonal.","todo":[]}}
---


# Sondres modell for hundeår

Hunder utvikler seg raskere enn mennesker. Når en hund er 1 år gammel, tilsvarer det 16 menneskeår. Se tabellen nedenfor.

| Så gammel er hunden din | Små/mellomstore hunder | Store hunder | Veldig store hunder |
| :---------------------: | :--------------------: | :----------: | :-----------------: |
|       To måneder        |          2 år          |     2 år     |        2 år         |
|      Fire måneder       |          6 år          |     6 år     |        6 år         |
|      Seks måneder       |         10 år          |    10 år     |        10 år        |
|      Åtte måneder       |         12 år          |    12 år     |        12 år        |
|       Ti måneder        |         14 år          |    14 år     |        14 år        |
|          1 år           |         16 år          |    16 år     |        16 år        |
|         1,5 år          |         20 år          |    20 år     |        20 år        |
|          2 år           |         24 år          |    24 år     |        24 år        |
|          3 år           |         29 år          |    30 år     |        31 år        |
|          4 år           |         34 år          |    36 år     |        38 år        |
|          5 år           |         39 år          |    42 år     |        45 år        |
|          6 år           |         44 år          |    48 år     |        52 år        |
|          7 år           |         49 år          |    54 år     |        59 år        |
|          8 år           |         54 år          |    60 år     |        66 år        |
|          9 år           |         59 år          |    66 år     |        73 år        |
|          10 år          |         64 år          |    72 år     |        80 år        |
|          11 år          |         69 år          |    78 år     |        87 år        |
|          12 år          |         74 år          |    84 år     |        94 år        |
|          13 år          |         79 år          |    90 år     |       101 år        |
|          14 år          |         84 år          |    96 år     |       108 år        |

Sondre har en hund som er 2 år gammel. Han mener funksjonen $H$ gitt ved

$$H(x) = 6x + 12$$

kan brukes som en modell for hvor mange menneskeår $H(x)$ en stor hund er når den er $x$ hundeår.

>[!oppgave]
>a) Forklar hvordan Sondre kan ha kommet fram til dette uttrykket, og argumenter for når modellen er gyldig.

Sondre påstår at modellen han har funnet, viser at alderen til en hund er proporsjonal med alderen til et menneske.

>[!oppgave]
>b) Stemmer påstanden til Sondre? Husk å argumentere for svaret ditt.

## Fasit

a) Stigningstallet er $6$ (store hunder vokser med 6 menneskeår per hundeår etter fylte 2 år). Konstantleddet er $12$, funnet ved å bruke punktet $(2, 24)$. Modellen er gyldig for $x \geq 2$.

b) **Påstanden stemmer ikke.** $H(x) = 6x + 12$ er ikke proporsjonal fordi den ikke går gjennom origo.

## Løsningsforslag

### a

Vi ser på kolonnen «Store hunder» i tabellen og ser på endringene fra $x = 2$ år og oppover:

| Hundeår $x$ | Menneskeår $H(x)$ | Endring |
|:-----------:|:-----------------:|:-------:|
| 2           | 24                |         |
| 3           | 30                | $+6$    |
| 4           | 36                | $+6$    |
| 5           | 42                | $+6$    |
| 6           | 48                | $+6$    |

Endringen er konstant lik $6$ for hvert hundeår. Dette betyr at stigningstallet i en lineær modell er $6$.

Vi bruker punktet $(2, 24)$ fra tabellen og stigningstallet $a = 6$:

$$H(x) = 6x + b$$

Vi setter inn $x = 2$ og $H(2) = 24$:

$$24 = 6 \cdot 2 + b$$

$$24 = 12 + b$$

$$b = 12$$

Slik kommer Sondre fram til $H(x) = 6x + 12$.

**Modellen er gyldig for $x \geq 2$.** Fra tabellen ser vi at alle de tre hundekategoriene har samme verdier frem til og med $x = 2$ år ($H = 24$). Først fra $x = 3$ begynner de å skille seg. Modellen beskriver den lineære veksten for store hunder, og denne lineariteten starter ved $x = 2$.

### b

For at en sammenheng skal være proporsjonal, må den gå gjennom origo. Det vil si at funksjonen må ha formen $y = k \cdot x$, der $k$ er en konstant.

Vi sjekker om $H(x) = 6x + 12$ er proporsjonal ved å sette inn $x = 0$:

$$H(0) = 6 \cdot 0 + 12 = 12$$

Siden $H(0) = 12 \neq 0$, går ikke grafen gjennom origo.

**Påstanden til Sondre stemmer ikke.** $H(x) = 6x + 12$ er en lineær funksjon, men ikke en proporsjonal sammenheng. En proporsjonal sammenheng ville for eksempel hatt formen $H(x) = k \cdot x$ for et tall $k$, men modellen har et konstantledd på $12$ som gjør at det ikke er proporsjonalitet.
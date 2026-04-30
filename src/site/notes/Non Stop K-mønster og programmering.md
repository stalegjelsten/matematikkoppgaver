---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"dg-publish":true,"temaer":["mønstre","figurtall","programmering"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":null,"title":"Non Stop K-mønster og programmering","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Beskrive K-mønsteret, bestemme $K_4$ og $K_5$, lage Python-program som skriver ut antall Non Stop per figur og totalt, og finne hvor mange K-er som kan lages av 2000 Non Stop.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Beskrive mønsteret og bestemme $K_4$ og $K_5$."},{"deloppgave":"c","kategori":1,"vanskegrad":1,"beskrivelse":"Lese av totalsum fra utskriften til programmet."},{"deloppgave":"d","kategori":2,"vanskegrad":2,"beskrivelse":"Finne største $n$ slik at totalsummen av $K_1,\\dots,K_n$ ikke overstiger 2000."}],"source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/non-stop-k-monster-og-programmering/","permalink":"/non-stop-k-monster-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"temaer":["mønstre","figurtall","programmering"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":null,"title":"Non Stop K-mønster og programmering","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Beskrive K-mønsteret, bestemme $K_4$ og $K_5$, lage Python-program som skriver ut antall Non Stop per figur og totalt, og finne hvor mange K-er som kan lages av 2000 Non Stop.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Beskrive mønsteret og bestemme $K_4$ og $K_5$."},{"deloppgave":"c","kategori":1,"vanskegrad":1,"beskrivelse":"Lese av totalsum fra utskriften til programmet."},{"deloppgave":"d","kategori":2,"vanskegrad":2,"beskrivelse":"Finne største $n$ slik at totalsummen av $K_1,\\dots,K_n$ ikke overstiger 2000."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Non Stop K-mønster og programmering

![Tre K-er laget av Non Stop-drops, merket $K_1$, $K_2$ og $K_3$](/img/user/_resources/1p-v23-2-5.jpeg){width=80%}

Kari har brukt Non Stop og laget tre K-er. Se ovenfor. Tenk deg at hun skal fortsette å lage K-er etter samme mønster.

>[!oppgave]
>a) Beskriv mønsteret, og bestem hvor mange Non Stop det vil være i $K_4$ og i $K_5$.

Kari ønsker å lage et program som finner antall Non Stop hun trenger for å lage hver av de 20 første K-ene. Hun ønsker også å vite hvor mange Non Stop hun trenger til sammen for å lage alle disse 20 K-ene.

>[!oppgave]
>b) Lag et program som Kari kan bruke.
>Du kan for eksempel begynne som vist nedenfor, men legge inn formler i stedet for tallet én i linje 14 og 15 slik at den riktige oversikten skrives ut.

```python ln
# Startverdier
nonstop_figur = 10
nonstop_totalt = 10

# Overskrifter
print("Figurnummer     Non Stop i figur     Non Stop totalt")


for figurnummer in range(1, 21):

    # Skriver ut i tre kolonner ved å bruke tabulatorer sep = "\t\t\t"
    print(figurnummer, nonstop_figur, nonstop_totalt, sep = "\t\t\t")

    nonstop_figur = 1
    nonstop_totalt = 1
```

>[!oppgave]
>c) Hvor mange Non Stop trenger Kari til sammen for å lage de 20 første K-ene?

Kari har 2000 Non Stop. Hun vil begynne med $K_1$ og lage én K i hver størrelse.

>[!oppgave]
>d) Hvor mange K-er kan Kari lage?

## Fasit

a) Hver K har 4 flere Non Stop enn den forrige. $K_4 = \underline{\underline{22}}$ og $K_5 = \underline{\underline{26}}$.

b) Se program under.

c) $\underline{\underline{960}}$ Non Stop totalt.

d) Kari kan lage $\underline{\underline{29}}$ K-er.

## Løsningsforslag

### a

Vi teller Non Stop i hver figur:

| Figur | Non Stop |
|-------|----------|
| $K_1$ | 10 |
| $K_2$ | 14 |
| $K_3$ | 18 |

Mønsteret er at **hver K har 4 flere Non Stop enn den forrige**. Vi kan beskrive dette som $K_n = K_{n-1} + 4$ der $K_1 = 10$, eller med en eksplisitt formel $K_n = 4n + 6$.

Derfor er:

$$K_4 = 18 + 4 = \underline{\underline{22}}$$

$$K_5 = 22 + 4 = \underline{\underline{26}}$$

### b

Vi starter med `nonstop_figur = 10` (antall Non Stop i $K_1$) og `nonstop_totalt = 10`. I løkken skriver vi ut verdiene for figuren, og oppdaterer deretter til neste figur ved å legge til 4.

```python ln
nonstop_figur = 10
nonstop_totalt = 10
print("Figurnummer     Non Stop i figur     Non Stop totalt")
for figurnummer in range(1, 21):
    print(figurnummer, nonstop_figur, nonstop_totalt, sep = "\t\t\t")
    nonstop_figur = nonstop_figur + 4
    nonstop_totalt = nonstop_totalt + nonstop_figur
```

Programmet skriver ut:

```
Figurnummer     Non Stop i figur     Non Stop totalt
1			10			10
2			14			24
3			18			42
4			22			64
5			26			90
6			30			120
7			34			154
8			38			192
9			42			234
10			46			280
11			50			330
12			54			384
13			58			442
14			62			504
15			66			570
16			70			640
17			74			714
18			78			792
19			82			874
20			86			960
```

### c

Fra utskriften til programmet leser vi av at totalen for de 20 første K-ene er $\underline{\underline{960}}$ Non Stop.

Vi kan også beregne dette med formelen $K_n = 4n + 6$:

$$\sum_{n=1}^{20} (4n + 6) = 4 \cdot \frac{20 \cdot 21}{2} + 6 \cdot 20 = 840 + 120 = \underline{\underline{960}}$$

### d

Vi setter opp en formel for totalt antall Non Stop etter $n$ K-er:

$$S(n) = \sum_{k=1}^{n} (4k + 6) = \frac{4n(n+1)}{2} + 6n = 2n^2 + 8n$$

Vi prøver systematisk:

| $n$ | $S(n) = 2n^2 + 8n$ |
|-----|--------|
| 28 | $2 \cdot 784 + 224 = 1792$ |
| 29 | $2 \cdot 841 + 232 = 1914$ |
| 30 | $2 \cdot 900 + 240 = 2040$ |

$S(29) = 1914 \leq 2000$, men $S(30) = 2040 > 2000$.

**Kari kan lage $\underline{\underline{29}}$ K-er med 2000 Non Stop.**

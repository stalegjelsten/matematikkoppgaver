---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/summer-av-oddetall-og-programmering/","dg-publish":true,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":4}],"poeng":4,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","rekker","argumentasjon"],"title":"Summer av oddetall og programmering","todo":[],"permalink":"/summer-av-oddetall-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":4}],"poeng":4,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","rekker","argumentasjon"],"title":"Summer av oddetall og programmering","todo":[]}}
---


# Summer av oddetall og programmering

I denne oppgaven skal du arbeide med summer av oddetall.

$$S_1 = 1$$
$$S_2 = 1 + 3$$
$$S_3 = 1 + 3 + 5$$
$$S_4 = 1 + 3 + 5 + 7$$
$$S_5 = 1 + 3 + 5 + 7 + 9$$
$$S_6 = 1 + 3 + 5 + 7 + 9 + 11$$
$$\ldots$$

>[!oppgave]
>a) Lag et program som summerer og skriver ut summene $S_1$, $S_2$, $S_3$ … $S_{20}$
>b) Beskriv sammenhengen du oppdager når du ser på summene som er skrevet ut. Bruk figuren nedenfor til å argumentere for at sammenhengen må være riktig.

![Ruter med kuler som illustrerer summer av oddetall](/img/user/_resources/1t-v24-2-4.jpeg){width=40%}

## Fasit

a) Se programmet i løsningsforslaget. Summene er $1, 4, 9, 16, 25, \ldots, 400$.

b) **$S_n = n^2$** — summen av de $n$ første oddetallene er alltid et kvadrattall.

## Løsningsforslag

### a

Vi bruker en løkke som for hvert $n$ summerer alle oddetall opp til og med det $n$-te oddetallet ($2n-1$):

```python
for n in range(1, 21):
    S = 0
    for k in range(1, n + 1):
        S = S + (2*k - 1)
    print(f"S_{n} = {S}")
```

Programmet skriver ut:

```
S_1 = 1
S_2 = 4
S_3 = 9
S_4 = 16
S_5 = 25
S_6 = 36
S_7 = 49
S_8 = 64
S_9 = 81
S_10 = 100
S_11 = 121
S_12 = 144
S_13 = 169
S_14 = 196
S_15 = 225
S_16 = 256
S_17 = 289
S_18 = 324
S_19 = 361
S_20 = 400
```

### b

Summene $1, 4, 9, 16, 25, \ldots$ er alle kvadrattall. Sammenhengen ser ut til å være:

$$S_n = n^2$$

Vi argumenterer for at dette stemmer ved hjelp av figuren:

Figuren viser at $S_n$ kan illustreres som et $n \times n$ kvadrat bygd opp av kuler. Hvert steg fra $S_{n-1}$ til $S_n$ legger vi til en ny rad langs bunnen og en ny kolonne langs høyre side. Disse to bidrar med $n + n = 2n$ kuler, men hjørnekula er telt to ganger, så vi trekker fra 1. Antall kuler som legges til er derfor:

$$2n - 1$$

Dette er nøyaktig det $n$-te oddetallet. Dermed bygger vi et $n \times n$ kvadrat fra et $(n-1) \times (n-1)$ kvadrat ved å legge til et L-formet skall med $2n - 1$ kuler:

$$S_n = S_{n-1} + (2n-1)$$

Siden $S_1 = 1 = 1^2$, og hvert steg øker kvadratsiden med 1, gir dette:

$$\mathbf{S_n = n^2}$$
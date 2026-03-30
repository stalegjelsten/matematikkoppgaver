---
{"tags":["oppgave"],"temaer":["sannsynlighet","binomisk","utforskning","programmering","excel"],"alias":[null],"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":5}],"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Billetter til fotballkamp","date":"2023-05-29","modified":"2023-05-29","permalink":"/billetter-til-fotballkamp/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["sannsynlighet","binomisk","utforskning","programmering","excel"],"alias":[null],"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":5}],"fag":"s1","eksamen":"v23","title":"Billetter til fotballkamp","date":"2023-05-29","modified":"2023-05-29"}}
---


# Billetter til fotballkamp

I en kampanje deles det ut gratisbilletter til en fotballkamp. Av erfaring vet arrangøren at cirka 45 prosent av dem som får gratisbilletter, kommer på kampen.  

> [!oppgave]
> a) Det deles ut 1300 gratisbilletter. Bestem sannsynligheten for at minst 600 av disse billettene blir benyttet.  
> b) Hvor mange gratisbilletter må de minst dele ut dersom sannsynligheten for at minst 600 av dem blir brukt skal være over 95 prosent?

## Fasit

a) 0,2094
b) 1401 billetter

## Løsningsforslag

### 2-5a
Vi kan regne med en binomisk sannsynlighetsfordeling her med $n=1300$ og $p=0{,}45$ siden
- billettmottakerne har to muligheter: de kommer på kamp, eller de kommer ikke på kamp
- det er samme sannsynlighet for hver billettmottaker
- så lenge billettmottakerne er uavhengige av hverandre (hvis de 1300 billettene deles ut i stor by stemmer sikkert dette, men hvis det er på en veldig liten plass så er nok ikke billettmottakerne egentlig uavhengige av hverandre)

Denne løses enklest i sannsynlighetskalkulatoren i GeoGebra, eller ved et enkelt program:
```python
from scipy.stats import binom
P = 1-binom.cdf(599,1300,0.45)      # 1 - sannsynlighet for 
									# at opptil 599 kommer
print(f"P(X >= 600) = {P:.4f}")
```
`output: P(X >= 600) = 0.2094`

**Sannsynligheten for at minst 600 mennesker kommer er 20,9 %.**

### 2-5b
```python
from scipy.stats import binom
n = 1299
P = 0
while P < 0.95:
    n = n + 1
    P = 1-binom.cdf(599,n,0.45)
print(f"Ved n = {n} er P(X >= 600) = {P:.4f}.")
```

`output: Ved n = 1401 er P(X >= 600) = 0.9519`

Siden jeg allerede var igang med programmering så programmerte jeg denne også. Du kan også finne sannsynlighetene i Excel ved å lage et regneark på denne formen:

| Rad/Kol | A           | B                                       |
| ------- | ----------- | --------------------------------------- |
| 1       | Antall, $n$ | $P(X\leq n)$                            |
| 2       | 1300        | ` =BINOM.FORDELING.N(599;A2;0,45;SANN)` |

---
{"aliases":[],"date":"2023-11-14","del":2,"dg-permalink":"/sannsynlighet-med-fem-terninger/","dg-publish":true,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","programmering","kombinatorikk"],"title":"Sannsynlighet med fem terninger","todo":[],"permalink":"/sannsynlighet-med-fem-terninger/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":2,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","programmering","kombinatorikk"],"title":"Sannsynlighet med fem terninger","todo":[]}}
---


# Sannsynlighet med fem terninger

Du kaster fem terninger.

>[!oppgave]
>a) Bestem sannsynligheten for at minst to av terningene viser samme antall øyne.

La $X$ være summen av antall øyne på de fem terningene.

>[!oppgave]
>b) Bruk programmering til å bestemme $P(X > 20)$.
>c) Bestem den største verdien av $k$ som er slik at $P(X \geq k) > 0{,}8$.

## Fasit

a) $\underline{\underline{P(\text{minst to like}) = \dfrac{7056}{7776} \approx 0{,}9074}}$

b) $\underline{\underline{P(X > 20) = \dfrac{1722}{7776} \approx 0{,}2215}}$

c) $\underline{\underline{k = 14}}$

## Løsningsforslag

### a

Det er lettere å beregne komplementet — sannsynligheten for at **alle fem terningene viser forskjellig antall øyne** — og trekke fra 1.

Siden en terning har 6 mulige utfall og vi kaster 5 terninger, er det totale antallet utfall

$$6^5 = 7776$$

Antall utfall der alle fem terningene er forskjellige: første terning kan vise hva som helst (6 muligheter), andre terning må vise noe annet enn første (5 muligheter), tredje noe annet enn de to første (4 muligheter), og så videre:

$$6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 = 720$$

Sannsynligheten for at alle er forskjellige:

$$P(\text{alle forskjellige}) = \frac{720}{7776}$$

Sannsynligheten for at **minst to er like**:

$$P(\text{minst to like}) = 1 - \frac{720}{7776} = \frac{7056}{7776} \approx \mathbf{0{,}9074}$$

### b

Vi bruker programmering til å telle alle mulige utfall av fem terningkast og finne andelen der summen er større enn 20.

```python
from itertools import product

# Generer alle mulige utfall av fem terninger (6^5 = 7776 utfall)
utfall = list(product(range(1, 7), repeat=5))

# b) Tell antall utfall der summen er større enn 20
antall = sum(1 for u in utfall if sum(u) > 20)
print(antall / len(utfall))   # ≈ 0,2215
```

Programmet gir $\dfrac{1722}{7776}$, så

$$P(X > 20) = \frac{1722}{7776} \approx \mathbf{0{,}2215}$$

### c

Vi søker den **største** verdien av $k$ slik at $P(X \geq k) > 0{,}8$.

```python
from itertools import product

utfall = list(product(range(1, 7), repeat=5))

# c) Finn største k slik at P(X >= k) > 0,8
for k in range(30, 4, -1):
    p = sum(1 for u in utfall if sum(u) >= k) / len(utfall)
    if p > 0.8:
        print(k)   # 14
        break
```

Programmet gir $k = 14$. Vi kan kontrollere verdiene rundt:

| $k$ | $P(X \geq k)$ |
|-----|----------------|
| 13 | $\approx 0{,}9020$ |
| **14** | $\approx 0{,}8480$ |
| 15 | $\approx 0{,}7785$ |

$P(X \geq 14) \approx 0{,}8480 > 0{,}8$, men $P(X \geq 15) \approx 0{,}7785 < 0{,}8$.

Den største verdien av $k$ er $\underline{\underline{k = 14}}$.
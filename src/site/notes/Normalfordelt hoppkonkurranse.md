---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"dg-publish":true,"temaer":["normalfordeling","simulering","programmering"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Normalfordelt hoppkonkurranse","source":"Eksamen S2 vår 2025","todo":null,"status":3,"dg-permalink":"/normalfordelt-hoppkonkurranse/","permalink":"/normalfordelt-hoppkonkurranse/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"temaer":["normalfordeling","simulering","programmering"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Normalfordelt hoppkonkurranse","source":"Eksamen S2 vår 2025","todo":null,"status":3}}
---


# Normalfordelt hoppkonkurranse


Tre skihoppere skal delta i en hoppkonkurranse.
Tabellen nedenfor viser forventningsverdi og standardavvik for lengden på et hopp for hver av de tre hopperne. Vi antar at lengden på hoppene er uavhengig og normalfordelt.

|        | Forventningsverdi | Standardavvik |
| :----: | :---------------: | :-----------: |
| Birger |     70 meter      |   20 meter    |
| Maren  |     80 meter      |    5 meter    |
| Espen  |     75 meter      |   10 meter    |

>[!oppgave]
>a) Gjør beregninger for hver skihopper, og bestem sannsynligheten for at skihopperen hopper lenger enn 90 meter i et tilfeldig hopp.

I første omgang hoppet Maren 83 meter.

>[!oppgave]
>b) Bestem sannsynligheten for at Maren hoppet lengst i denne omgangen.

I andre omgang gjør alle et nytt hopp.

>[!oppgave]
> c) Bruk simulering og bestem sannsynligheten for at Maren hopper lengst i denne omgangen.

## Fasit

a) 0,1587, 0,0228 og 0,0668
b) 0,5849
c) Omtrent 47,4 %

## Løsningsforslag

La $B, M \text{ og } E$ være lengdene av hoppene til henholdsvis Birger, Maren og Espen.

Vi bestemmer sannsynligheten for at hver av dem hopper 90 meter eller lengre ved hjelp av sannsynlighetsvinduet i GeoGebra, se skjermbildet under. (Kun Birgers utklipp er vist).

![Sannsynligheten for at Birger hopper 90 meter eller lengre](/img/user/_resources/s2-v25-2-2a.png){width=60%}

$$
\textcolor{orange}{P(B>90)}=0{,}1587 ,\quad \textcolor{seagreen}{P(M>90)}=0{,}0228, \quad \textcolor{steelblue}{P(E>90)}=0{,}0668
$$
**Sannsynlighetene for at Birger, Maren og Espen hopper lengre enn 90 meter er i ett tilfeldig hopp er henholdsvis 0,1587, 0,0228 og 0,0668.**

### 2-2b
Hvis Maren skal hoppe lengst med et hopp på 83 meter så må både $B<83$ og $E < 83$. Vi kan bruke multiplikasjonsprinsippet for å finne sannsynligheten for at begge disse utfallene skjer samtidig. Igjen bestemmer vi sannsynligheten ved hjelp av sannsynlighetsvinduet i GeoGebra.

![Sannsynligheten for at Birger hopper kortere enn 83 meter](/img/user/_resources/s2-v25-2-2b.png){width=60%}

$$
\begin{aligned}
P(\text{Maren vinner med 83 m}) &= \textcolor{orange}{P(B<83)}\cdot \textcolor{steelblue}{P(E<83)}\\
&= \textcolor{orange}{0{,}7422} \cdot \textcolor{steelblue}{0{,}7881} = \underline{\underline{0{,}5849}}
\end{aligned}
$$
**Sannsynligheten for at Maren vinner med et hopp på 83 meter er 0,5849.**

### 2-2c
Vi lager en simulering i Python hvor vi trekker hopplengder ut fra normalfordelingene til $B$, $M$ og $E$. Deretter sjekker vi om Marens hopp er det lengste hoppet.

```python
from random import gauss
N = 100_000
antall_gunstige = 0

for i in range(N):
    # Trekker hopplengder fra normalfordelingene
    B = gauss(70, 20)
    M = gauss(80, 5)
    E = gauss(75, 10)

    # Sjekker om Marens hopp er lengre enn både Espens og Birgers
    if (M > B and M > E):
        antall_gunstige += 1

ssh = antall_gunstige / N

print(f"Det er omtrent {ssh * 100:.2f} % sannsynlighet for at Maren hopper lengst i andre omgang")
```

Etter å ha kjørt programmet flere ganger ser jeg at sannsynligheten er stabil på omtrent 47,4 %.

**Det er omtrent 47,4 % sannsynlighet for at Maren hopper lengst i andre omgang.**

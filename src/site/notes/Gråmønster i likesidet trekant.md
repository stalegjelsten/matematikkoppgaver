---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["figurtall","programmering","rekker"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"title":"Gråmønster i likesidet trekant","status":1,"source":null,"todo":null,"poeng":3,"permalink":"/gramonster-i-likesidet-trekant/","lf-source-claude":true,"dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["figurtall","programmering","rekker"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"title":"Gråmønster i likesidet trekant","status":1,"source":null,"todo":null,"poeng":3,"permalink":"/gramonster-i-likesidet-trekant/","lf-source-claude":true}}
---


# Gråmønster i likesidet trekant

Maria tegner en likesidet trekant. Hun deler trekanten i flere og flere små likesidede trekanter og fargelegger et mønster. Figurene nedenfor viser hvordan hun arbeider.

![Mønster med likesidede trekanter](/img/user/_resources/1t-h25-2-4.jpeg){width=60%}

Tenk deg at Maria fortsetter å dele opp trekanten og fargelegge etter samme mønster.

>[!oppgave]
>a) Sett opp en algoritme Maria kan bruke for å finne summen av arealene av de 100 første trekantene som vil bli grå.
>
>b) Ta utgangspunkt i algoritmen og lag et program som regner ut summen av arealene dersom arealet av den likesidede trekanten hun starter med er 36.

## Fasit

a) Se algoritme
b) $12$

## Løsningsforslag

### a

Maria tar hvert steg den største hvite trekanten, deler den i 4 like trekanter og farger den midterste (inverterte) grå. Grå trekant nummer $n$ har areal $S/4^n$. Arealene danner en geometrisk rekke med kvotient $1/4$.

**Algoritme:**

```
S_start = 36
total = 0
grå_areal = S_start / 4

gjenta 100 ganger:
    total = total + grå_areal
    grå_areal = grå_areal / 4

skriv ut total
```

### b

```python
S_start = 36
total = 0
graa_areal = S_start / 4

for i in range(100):
    total += graa_areal
    graa_areal /= 4

print(total)
```

Programmet skriver ut **$\underline{\underline{12{,}0}}$**.

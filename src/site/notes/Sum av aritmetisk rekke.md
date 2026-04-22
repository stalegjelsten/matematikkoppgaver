---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":3,"title":"Sum av aritmetisk rekke","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sum-av-aritmetisk-rekke/","permalink":"/sum-av-aritmetisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["rekker"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":3,"title":"Sum av aritmetisk rekke","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sum av aritmetisk rekke

Bruk formelen for summen av en aritmetisk rekke til å bestemme

$$-7 - 3 + 1 + 5 + \ldots + 389$$

>[!oppgave]
>Bestem summen.

## Fasit

$s_{100} = 19\,100$

## Løsningsforslag

Vi har en aritmetisk rekke med $a_1 = -7$ og differanse $d = -3 - (-7) = 4$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d$$

$$389 = -7 + (n-1) \cdot 4$$

$$396 = (n-1) \cdot 4 \implies n - 1 = 99 \implies n = 100$$

Vi bruker summeformelen:

$$s_n = \frac{a_1 + a_n}{2} \cdot n = \frac{-7 + 389}{2} \cdot 100 = \frac{382}{2} \cdot 100$$

$$\underline{\underline{s_{100} = 19\,100}}$$

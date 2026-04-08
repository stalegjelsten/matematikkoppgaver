---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["uendelig rekke","rekker"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Virkestoff i tablett","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/virkestoff-i-tablett/","permalink":"/virkestoff-i-tablett/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["uendelig rekke","rekker"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Virkestoff i tablett","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Virkestoff i tablett

En tablett inneholder 125 mg av et virkestoff. Elise tar én tablett hver dag i en periode. Kroppen til Elise bryter ned 20 prosent av virkestoffet hvert døgn.

>[!oppgave]
>a) Hvor mye virkestoff har Elise i kroppen like etter at hun har tatt den fjerde tabletten?
>b) Hvor mye virkestoff vil det være i kroppen til Elise dersom hun fortsetter å ta en tablett hver dag over en lang tidsperiode?

## Fasit

a) $369 \, \mathrm{mg}$
b) $625 \, \mathrm{mg}$

## Løsningsforslag

### a

Kroppen beholder 80 % av virkestoffet hvert døgn ($k = 0{,}8$). Like etter den $n$-te tabletten har Elise

$$V_n = 125 + 125 \cdot 0{,}8 + 125 \cdot 0{,}8^2 + \cdots + 125 \cdot 0{,}8^{n-1}$$

Etter den fjerde tabletten:

$$V_4 = 125(1 + 0{,}8 + 0{,}64 + 0{,}512) = 125 \cdot 2{,}952 = \underline{\underline{369 \, \mathrm{mg}}}$$

### b

Over en lang tidsperiode nærmer vi oss en uendelig geometrisk rekke med $a_1 = 125$ og $k = 0{,}8$:

$$V = \frac{125}{1 - 0{,}8} = \frac{125}{0{,}2} = \underline{\underline{625 \, \mathrm{mg}}}$$

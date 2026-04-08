---
{"tags":["oppgave","rekker","s2","del1"],"temaer":["rekker"],"alias":[null],"del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"fag":"s2","eksamen":"h22","dg-publish":true,"title":"Idas jakke","date":"2023-05-31","modified":"2023-05-31","dg-permalink":"/idas-jakke/","lf-source-claude":true,"permalink":"/idas-jakke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","rekker","s2","del1"],"temaer":["rekker"],"alias":[null],"del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"fag":"s2","eksamen":"h22","title":"Idas jakke","date":"2023-05-31","modified":"2023-05-31","lf-source-claude":true}}
---


# Idas jakke

Ida sparer til en jakke som koster 1900 kroner.

Hun sparer 100 kroner den første uken. Hun vil øke sparebeløpet med et fast beløp hver uke slik at hun får råd til jakken etter 10 sparebeløp.

Hvor mye må Ida minst øke sparebeløpet med hver uke for å få råd til jakken?

## Fasit

20 kr

## Løsningsforslag

Sparebeløpene danner en aritmetisk rekke med $a_1 = 100$ og differanse $d$. Etter 10 uker skal summen være minst 1900 kr.

Summen av en aritmetisk rekke med $n$ ledd:

$$s_n = \frac{n}{2}\left(2a_1 + (n-1) \cdot d\right)$$

Vi setter inn $n = 10$, $a_1 = 100$ og $s_{10} \geq 1900$:

$$\frac{10}{2}\left(2 \cdot 100 + 9d\right) \geq 1900$$

$$5(200 + 9d) \geq 1900$$

$$1000 + 45d \geq 1900$$

$$45d \geq 900$$

$$d \geq 20$$

**Ida må øke sparebeløpet med minst $\underline{\underline{20 \, \mathrm{kr}}}$ per uke.**

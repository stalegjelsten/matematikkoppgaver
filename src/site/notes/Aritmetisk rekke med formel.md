---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Aritmetisk rekke med formel","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/aritmetisk-rekke-med-formel/","permalink":"/aritmetisk-rekke-med-formel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["rekker"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Aritmetisk rekke med formel","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Aritmetisk rekke med formel

>[!oppgave]
>a) Bruk formelen for summen av en aritmetisk rekke til å bestemme
>
>$$1 + 7 + 13 + 19 + \cdots + 295$$

For en annen aritmetisk rekke gjelder

$$a_5 - a_2 = 12$$

$$a_1 + a_2 + a_3 = 18$$

>[!oppgave]
>b) Bestem en formel for $a_n$ uttrykt ved $n$.

## Fasit

a) $7400$
b) $a_n = 4n - 2$

## Løsningsforslag

### a

Vi har en aritmetisk rekke med $a_1 = 1$ og $d = 6$.

Finner antall ledd: $a_n = a_1 + (n-1) \cdot d$ gir

$$295 = 1 + (n-1) \cdot 6 \implies n - 1 = \frac{294}{6} = 49 \implies n = 50$$

Summen av rekken er

$$s_{50} = \frac{a_1 + a_{50}}{2} \cdot 50 = \frac{1 + 295}{2} \cdot 50 = 148 \cdot 50 = \underline{\underline{7400}}$$

### b

Fra $a_5 - a_2 = 12$ får vi

$$\bigl(a_1 + 4d\bigr) - \bigl(a_1 + d\bigr) = 12 \implies 3d = 12 \implies d = 4$$

Fra $a_1 + a_2 + a_3 = 18$ får vi

$$a_1 + (a_1 + d) + (a_1 + 2d) = 18 \implies 3a_1 + 3d = 18$$

$$3a_1 + 12 = 18 \implies a_1 = 2$$

Formelen for $a_n$ blir

$$\underline{\underline{a_n = 2 + (n-1) \cdot 4 = 4n - 2}}$$

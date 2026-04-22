---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Aritmetisk rekke med sumformel","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/aritmetisk-rekke-med-sumformel/","permalink":"/aritmetisk-rekke-med-sumformel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["rekker"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Aritmetisk rekke med sumformel","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Aritmetisk rekke med sumformel

En aritmetisk rekke $a_1 + a_2 + a_3 + \cdots + a_n$ har sum $S_n = 2n^2 + n$.

>[!oppgave]
>a) Bestem $a_1$ og $a_{10}$.
>b) Bestem en formel for $a_n$ uttrykt ved $n$.
>c) Bestem summen av rekken når $a_n = 399$.

## Fasit

a) $a_1 = 3$, $a_{10} = 39$
b) $a_n = 4n - 1$
c) $S_{100} = 20\,100$

## Løsningsforslag

### a

$$a_1 = S_1 = 2 \cdot 1^2 + 1 = \underline{\underline{3}}$$

$$a_{10} = S_{10} - S_9 = (2 \cdot 100 + 10) - (2 \cdot 81 + 9) = 210 - 171 = \underline{\underline{39}}$$

### b

For $n \geq 2$:

$$a_n = S_n - S_{n-1} = (2n^2 + n) - (2(n-1)^2 + (n-1))$$

$$= 2n^2 + n - 2n^2 + 4n - 2 - n + 1 = 4n - 1$$

Vi sjekker at formelen også gjelder for $n = 1$: $a_1 = 4 \cdot 1 - 1 = 3$ ✓

$$\underline{\underline{a_n = 4n - 1}}$$

### c

Vi finner $n$ når $a_n = 399$:

$$4n - 1 = 399 \quad \Rightarrow \quad n = 100$$

$$S_{100} = 2 \cdot 100^2 + 100 = 20\,000 + 100 = \underline{\underline{20\,100}}$$

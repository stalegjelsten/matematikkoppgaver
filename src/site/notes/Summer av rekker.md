---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":4,"title":"Summer av rekker","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/summer-av-rekker/","permalink":"/summer-av-rekker/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":4,"title":"Summer av rekker","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Summer av rekker

Nedenfor er det gitt en aritmetisk og en geometrisk rekke.

Bestem summen til hver av rekkene.

>[!oppgave]
>a) $-6 - 1 + 4 + 9 + 14 + \cdots + 189$
>b) $72 - 36 + 18 - 9 + \cdots$

## Fasit

a) $S_{40} = 3660$
b) $S = 48$

## Løsningsforslag

### a

Rekken $-6 - 1 + 4 + 9 + 14 + \cdots + 189$ er aritmetisk med $a_1 = -6$ og $d = 5$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d \quad \Rightarrow \quad 189 = -6 + (n-1) \cdot 5$$

$$195 = (n-1) \cdot 5 \quad \Rightarrow \quad n - 1 = 39 \quad \Rightarrow \quad n = 40$$

Summen av en aritmetisk rekke:

$$S_{40} = \frac{a_1 + a_{40}}{2} \cdot 40 = \frac{-6 + 189}{2} \cdot 40 = \frac{183}{2} \cdot 40 = \underline{\underline{3660}}$$

### b

Rekken $72 - 36 + 18 - 9 + \cdots$ er geometrisk med $a_1 = 72$ og $k = -\dfrac{1}{2}$.

Siden $|k| < 1$, konvergerer rekken, og summen er

$$S = \frac{a_1}{1 - k} = \frac{72}{1 - \left(-\frac{1}{2}\right)} = \frac{72}{\frac{3}{2}} = \underline{\underline{48}}$$

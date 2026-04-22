---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Aritmetisk sum og uendelig geometrisk rekke","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/aritmetisk-sum-og-uendelig-geometrisk-rekke/","permalink":"/aritmetisk-sum-og-uendelig-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Aritmetisk sum og uendelig geometrisk rekke","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Aritmetisk sum og uendelig geometrisk rekke

>[!oppgave]
>a) Bestem summen av den aritmetiske rekken
>
>$$-8 - 3 + 2 + 7 + \cdots + 987$$

>[!oppgave]
>b) Begrunn at den uendelige geometriske rekken nedenfor konvergerer, og bestem summen av rekken
>
>$$80 - 20 + 5 - \frac{5}{4} + \cdots$$

## Fasit

a) $s_{200} = 97\,900$
b) $s = 64$

## Løsningsforslag

### a

Vi har en aritmetisk rekke med $a_1 = -8$ og differanse $d = -3 - (-8) = 5$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d$$

$$987 = -8 + (n-1) \cdot 5$$

$$995 = (n-1) \cdot 5$$

$$n - 1 = 199 \implies n = 200$$

Vi bruker summeformelen:

$$s_n = \frac{a_1 + a_n}{2} \cdot n = \frac{-8 + 987}{2} \cdot 200 = \frac{979}{2} \cdot 200$$

$$\underline{\underline{s_{200} = 97\,900}}$$

### b

Vi har en geometrisk rekke med $a_1 = 80$ og kvotient

$$k = \frac{-20}{80} = -\frac{1}{4}$$

Siden $|k| = \dfrac{1}{4} < 1$, konvergerer rekken.

Summen av en uendelig geometrisk rekke er

$$s = \frac{a_1}{1 - k} = \frac{80}{1 - \left(-\dfrac{1}{4}\right)} = \frac{80}{\dfrac{5}{4}} = 80 \cdot \frac{4}{5}$$

$$\underline{\underline{s = 64}}$$

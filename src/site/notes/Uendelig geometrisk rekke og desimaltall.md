---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Uendelig geometrisk rekke og desimaltall","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/uendelig-geometrisk-rekke-og-desimaltall/","permalink":"/uendelig-geometrisk-rekke-og-desimaltall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Uendelig geometrisk rekke og desimaltall","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Uendelig geometrisk rekke og desimaltall

En uendelig geometrisk rekke er gitt ved

$$6 - 3 + \frac{3}{2} - \frac{3}{4} + \frac{3}{8} + \ldots$$

>[!oppgave]
>a) Begrunn at rekken konvergerer, og bestem summen av rekken.

>[!oppgave]
>b) Forklar at desimaltallet $0{,}135135135\ldots$ kan skrives som den uendelige geometriske rekken
>
>$$\frac{135}{1000} + \frac{135}{1000^2} + \frac{135}{1000^3} + \cdots$$
>
>Bruk dette til å skrive tallet $0{,}135135135\ldots$ som en brøk.

## Fasit

a) $s = 4$
b) $\dfrac{5}{37}$

## Løsningsforslag

### a

Rekken $6 - 3 + \frac{3}{2} - \frac{3}{4} + \cdots$ er geometrisk med $a_1 = 6$ og $k = \frac{-3}{6} = -\frac{1}{2}$.

Siden $|k| = \frac{1}{2} < 1$, konvergerer rekken.

$$s = \frac{a_1}{1 - k} = \frac{6}{1 - \left(-\frac{1}{2}\right)} = \frac{6}{\frac{3}{2}} = \underline{\underline{4}}$$

### b

Tallet $0{,}135135135\ldots$ kan skrives som

$$\frac{135}{1000} + \frac{135}{1000^2} + \frac{135}{1000^3} + \cdots$$

fordi hvert ledd plasserer $135$ tre desimalplasser lenger ut.

Dette er en uendelig geometrisk rekke med $a_1 = \frac{135}{1000}$ og $k = \frac{1}{1000}$:

$$s = \frac{\frac{135}{1000}}{1 - \frac{1}{1000}} = \frac{\frac{135}{1000}}{\frac{999}{1000}} = \frac{135}{999} = \underline{\underline{\frac{5}{37}}}$$

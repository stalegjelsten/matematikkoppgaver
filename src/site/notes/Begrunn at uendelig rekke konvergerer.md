---
{"tags":["oppgave"],"temaer":["rekker"],"alias":[null],"del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"fag":"s2","eksamen":"h22","dg-publish":true,"title":"Begrunn at uendelig rekke konvergerer","date":"2023-05-31","modified":"2023-05-31","dg-permalink":"/begrunn-at-uendelig-rekke-konvergerer/","lf-source-claude":true,"permalink":"/begrunn-at-uendelig-rekke-konvergerer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["rekker"],"alias":[null],"del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"fag":"s2","eksamen":"h22","title":"Begrunn at uendelig rekke konvergerer","date":"2023-05-31","modified":"2023-05-31","lf-source-claude":true}}
---


# Begrunn at uendelig rekke konvergerer

En uendelig geometrisk rekke er gitt ved

$$
36-24+16-\frac{32}{3}+\cdots
$$

Begrunn at rekken konvergerer, og bestem summen av rekken.

## Fasit

Kort begrunnelse: $-1<k<1$
Sum: $\frac{108}{5}$

## Løsningsforslag

Vi finner kvotienten $k$ ved å dele det andre leddet på det første:

$$k = \frac{-24}{36} = -\frac{2}{3}$$

Vi sjekker: $36 \cdot \left(-\frac{2}{3}\right)^2 = 36 \cdot \frac{4}{9} = 16$ ✓

Siden $|k| = \frac{2}{3} < 1$, konvergerer rekken.

Summen av en uendelig geometrisk rekke er gitt ved

$$s = \frac{a_1}{1-k} = \frac{36}{1-\left(-\frac{2}{3}\right)} = \frac{36}{\frac{5}{3}} = \frac{36 \cdot 3}{5} = \underline{\underline{\frac{108}{5}}}$$

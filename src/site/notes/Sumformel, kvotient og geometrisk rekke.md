---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"poeng":6,"title":"Sumformel, kvotient og geometrisk rekke","status":3,"source":null,"todo":null,"dg-permalink":"/sumformel-kvotient-og-geometrisk-rekke/","permalink":"/sumformel-kvotient-og-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["rekker","uendelig rekke"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"poeng":6,"title":"Sumformel, kvotient og geometrisk rekke","status":3,"source":null,"todo":null}}
---


# Sumformel, kvotient og geometrisk rekke

>[!oppgave]
>a) Finn summen av den aritmetiske rekken $3+7+11+15+\cdots+399$.
>b) Bestem kvotienten $k$ for en uendelig geometrisk rekke som konvergerer og som har $a_1 = 12$ og sum = 18.
>c) Vis at tallet $0{,}75757575\ldots$ kan skrives som en uendelig geometrisk rekke. Bruk dette til å vise at $1{,}75757575\ldots = \dfrac{58}{33}$.

## Fasit

a) $s_{100} = 20\,100$
b) $k = \dfrac{1}{3}$
c) $1{,}75757575\ldots = \dfrac{58}{33}$ (bevis)

## Løsningsforslag

### 1-2a
Summen av en aritmetisk rekke er gitt ved
$$
s_{n}=\frac{a_{1}+a_{n}}{2}\cdot n
$$
Vi ser at differansen $d=4$. For å finne ut hvor mange ledd det er i rekka vår kan vi løse
$$
3+(n-1) \cdot 4=399 \implies n-1=\frac{399-3}{4} \implies n=100
$$
Summen av de 100 første leddene blir altså
$$
s_{100}=\frac{3+399}{2}\cdot 100=\frac{402}{2} \cdot 100= 201\cdot 100=\underline{\underline{20\,100}}
$$

### 1-2b
Vi vet at summen av en uendelig geometrisk rekke som konvergerer er
$$
s=\frac{a_{1}}{1-k} \iff 1-k=\frac{a_{1}}{s}\iff k=1-\frac{a_{1}}{s}
$$
Vi setter inn verdiene i uttrykket for $k$
$$
k=1-\frac{12}{18}=1-\frac{2}{3}=\underline{\underline{\frac{1}{3}}}
$$

### 1-2c
Vi kan omskrive tallet som sum summen av uendelig rekke med ledd på denne måten $0{,}75757575\ldots=0{,}75+0{,}0075+0{,}000075+\cdots$

Hvert av disse leddene kan vi skrive om som brøker
$$
\begin{aligned}
0{,}75&=\frac{3}{4}\\
0{,}0075&=\frac{\frac{3}{4}}{100}=\frac{3}{400}\\
0{,}000075&=\frac{\frac{3}{4}}{10000}=\frac{3}{40000}
\end{aligned}
$$
Vi ser et mønster hvor hvert ledd er $\frac{1}{100}$ av det forrige, altså har vi
 $$
\frac{3}{4}+\frac{3}{400}+\frac{3}{40000}+\dots=\frac{3}{4\cdot 100^0}+\frac{3}{4\cdot 100^1}+\frac{3}{4 \cdot 100^2}+ \cdots
$$
**Vi har altså vist at $0{,}75757575\dots$ kan skrives som en uendelig geometrisk rekke**, og med sumnotasjon blir rekka
$$
\lim_{ n \to \infty }  \sum_{i=1}^n \frac{3}{4\cdot 100^{i-1}}=0{,}75757575\dots
$$
Denne uendelig geometrisk rekka har $a_{1}=\frac{3}{4}$ og $k=\frac{1}{100}$. Summen av rekka er gitt ved
 $$
s=\frac{\frac{3}{4}}{1-\frac{1}{100}}=\frac{\frac{3}{4}}{\frac{99}{100}}=\frac{300}{396}=\frac{75}{99}=\frac{25}{33}
$$
Siden vi nå vet at $0{,}75757575+\dots=\frac{25}{33}$ så kan vi vise følgende
$$
1{,}75757575\ldots=1+0{,}75757575\ldots=1+\frac{25}{33}=\frac{58}{33}
$$
 **Vi har altså vist at $1{,}75757575\ldots=\frac{58}{33}$**.

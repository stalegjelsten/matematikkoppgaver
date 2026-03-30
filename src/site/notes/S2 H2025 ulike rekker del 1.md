---
{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/s2-h2025-ulike-rekker-del-1/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"title":null,"source":null,"todo":null,"status":3}}
---



Ta utgangspunkt i den aritmetiske rekken

$$
-3+0+3+\ldots+69
$$

>[!oppgave]
> a) Bestem summen av rekken.

Ta utgangspunkt i den uendelige geometriske rekken

$$
5+5 \cdot\left(\frac{1}{2}-x\right)+5 \cdot\left(\frac{1}{2}-x\right)^2+\ldots
$$

>[!oppgave]
> b) Bestem konvergensområdet til rekken.

En ball faller fra 2 meters høyde. Hver gang ballen treffer bakken, spretter den opp til en høyde som er $75 \%$ av høyden den falt fra.

>[!oppgave]
> c) Hvor mange meter vil ballen bevege seg totalt?

## Fasit

a) 825
b) $x \in \left\langle - \frac{1}{2} ,\frac{3}{2} \right\rangle$
c) 14 meter

## Løsningsforslag

### 1-2a
Vi kjenner $a_{1}=-3$ og $a_{n}=69$, men vi kjenner ikke $n$. Vi bruker derfor formelen for ledd i aritmetisk følge
$$
\begin{aligned}
a_{n}&=a_{1}+(n-1)\cdot d \\
69&=-3 + (n-1)\cdot 3 \\
\frac{69}{3} &=\frac{-\cancel{ 3 }+(n-1)\cdot \cancel{ 3 }}{\cancel{ 3 }} \\
23&=-1+(n-1) \\
23 + 1+1&=n \\
n&=25
\end{aligned}
$$
Summen av den aritmetisk rekka er dermed
$$s_{n}=\frac{a_{1}+a_{n}}{2}\cdot n =\frac{-3+69}{2}\cdot 25=\frac{66}{2}\cdot 25=33 \cdot 25 = \underline{\underline{825}}$$

### 1-2b
Konvergensområdet er de verdiene av $x$ som tilfredsstiller $-1<k(x)<1$, der $k(x)=\frac{1}{2}-x$.
$$
\begin{aligned}
-1&<k(x)<1 \\
-1&< \frac{1}{2} -x < 1 \\
1 &> -\frac{1}{2} + x > -1 \\
1 + \frac{1}{2} &> -\cancel{ \frac{1}{2} } + x + \cancel{ \frac{1}{2} } > -1 + \frac{1}{2}\\
\frac{3}{2} &>  x > -\frac{1}{2}
\end{aligned}
$$
**Konvergensområdet for rekka er $\underline{\underline{x \in \left\langle-\frac{1}{2}, \frac{3}{2} \right\rangle}}$.**

### 1-2c
Ballen vil bevege seg på følgende måte:

- $2$ m ned
- $2 \cdot 0{,}75=1{,}5$ m opp
- $2\cdot 0{,}75=1{,}5$ m ned
- $1{,}5 \cdot 0{,}75 =1{,}125$ m opp
- $1{,}5 \cdot 0{,}75 =1{,}125$ m ned
- Og så videre ...

Ballens totale distanse kan altså modelleres ved hjelp av to geometriske rekker, $a$ for distansen nedover, og $b$ for distansen oppover. Vi har $k=0{,}75$, samt startverdiene $a_{1}=2$ og $b_{1}=1{,}5$
$$
\begin{aligned}
s_{a}&=\frac{a_{1}}{1-k}=\frac{2}{1-\frac{3}{4}}=\frac{2}{\frac{1}{4}}=\frac{2 \cdot 4}{\frac{1}{4}\cdot 4}=\frac{8}{1}=8 \\
s_{b}&=\frac{b_{1}}{1-k}=\frac{1{,}5}{1-\frac{3}{4}}=\frac{1{,}5}{\frac{1}{4}}=\frac{1{,}5 \cdot 4}{\frac{1}{4}\cdot 4}=\frac{6}{1}=6 
\end{aligned}
$$
**Ballen vil totalt bevege seg 14 meter.**

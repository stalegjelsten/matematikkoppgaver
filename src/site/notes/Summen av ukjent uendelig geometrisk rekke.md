---
{"tags":["oppgave"],"temaer":["rekker"],"aliases":null,"del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"fag":["s2"],"eksamen":"e22","dg-publish":true,"title":"Summen av ukjent uendelig geometrisk rekke","date":"2024-01-01","modified":"2024-01-01","permalink":"/summen-av-ukjent-uendelig-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["rekker"],"aliases":null,"del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"fag":["s2"],"eksamen":"e22","title":"Summen av ukjent uendelig geometrisk rekke","date":"2024-01-01","modified":"2024-01-01","permalink":"/summen-av-ukjent-uendelig-geometrisk-rekke/"}}
---


# Summen av ukjent uendelig geometrisk rekke

Summen av en uendelig geometrisk rekke konvergerer mot 6.

Summen av tre første leddene er $\frac{38}{9}$ .

Bestem summen av de fire første leddene.

## Fasit

$\frac{130}{27}$

## Løsningsforslag

### 1-3

#### Om oppgaveteksten
Denne oppgaven finnes i to ulike varianter (sannsynligvis på grunn av en skrivefeil i løsningsforslag eller oppgavesettet. Den ene varianten sier at summen av de tre første leddene er 38/9, mens den andre varianten sier at summen av de seks første leddene er 38/9. Løsningsmetoden min vil fungere uansett hvilken variant man tenker seg, men det er nok lurt å heller formel for sum av geometrisk rekke ($s_{n} = a_{1} \frac{k^n-1}{k-1}$) enn min framgangsmåte dersom man får oppgitt summen av et høyt antall ledd. Min metode er enkel når du bare trenger å tenke på 3 ledd, men skal du ta hensyn til 100 så må du regne mye!

#### Oppgavetekst
Summen av en uendelig geometrisk rekke konvergerer mot 6.

Sum av tre første ledd er 38/9

Hva er sum av de fire første?

#### Løsningsforslag
Jeg kaller første ledd i rekka for $x$. Vet da at de tre første leddene må være:

$$x+xk+xk^2=\frac{38}{9}$$

Som kan faktoriseres til 

$$x(1+k+k^2)=\frac{38}{9}$$

Summen for uendelig geometrisk rekke gir:

$$\frac{x}{1-k}=6$$

Løser den likningen for $x$ og setter inn i uttrykket for sum av 3 første ledd 

$$x=6(1-k)$$

$$6(1-k)(1+k+k^2)=\frac{38}{9}$$

$$(1-k)(1+k+k^2)=\frac{38}{9\cdot 6}=\frac{38}{54}=\frac{19}{27}$$

$$1+k+k^2-k-k^2-k^3=\frac{19}{27}$$

$$1-k^3=\frac{19}{27}$$

$$k^3=1-\frac{19}{27}=\frac{8}{27}\Rightarrow \underline{k=\frac{2}{3}}$$

Vi har nå funnet $k$ og kan enkelt finne $x$:

$$x=6 (1-k)=6\left( 1- \frac{2}{3} \right)=6 \frac{1}{3}=2$$

Ledd 4 må være:

$$xk^3=2 \cdot \frac{8}{27}=\frac{16}{27}$$

Summen av de fire første leddene blir da summen av de tre første pluss dette fjerde leddet

$$\frac{38}{9}+\frac{16}{27}=\frac{114}{27}+\frac{16}{27}=\frac{130}{27}$$

Summen av fire første ledd er 

$$\underline{\underline{\frac{130}{27}}}$$

#### Alternativ løsning
Fra formel for sum av uendelig geometrisk rekke vet vi at

$$
\frac{a_{1}}{1-k}=6
$$

Samtidig kan sum av de tre første leddene uttrykkes som

$$
\frac{38}{9}=a_{1}\cdot \frac{k^{3}-1}{k-1}
$$

Vi har altså to likninger og to ukjente, $a_{1}$ og $k$.

Vi kan løse den første likningen for $a_{1}$ og sette inn i den andre likningen

$$
a_{1}=6(1-k)
$$

$$
\frac{38}{9}=6(1-k) \cdot \frac{k^3-1}{k-1}=6\cdot \frac{(k^{3}-1)(1-k)}{k-1}
$$

Siden $(1-k)=(-1)\cdot (k-1)$ så bytter jeg ut denne faktoren i telleren for å kunne forkorte brøken på høyre side. Samtidig deler jeg på 6 på begge sider.

$$
\frac{38}{54}= \frac{(k^{3}-1)(-1)\cancel{ (k-1) }}{\cancel{ (k-1) }}=(k^{3}-1)(-1)=1-k^{3}
$$

Vi kan nå løse likningen

$$
\begin{aligned}
\frac{38}{54}&=1-k^{3} \\
k^3&=1-\frac{38}{54}=\frac{16}{54}=\frac{8}{27}\\
k&=\sqrt[3]{ \frac{8}{27} }=\frac{2}{3}
\end{aligned}
$$

Når vi endelig har $k$ så kan vi finne $a_{1}$ med

$$
a_{1}=6(1-k)=6\left( 1-\frac{2}{3} \right)=6 \cdot \frac{1}{3}=2
$$

Og til slutt kan vi finne summen av de fire første leddene med sumformelen

$$
s_{4}=a_{1} \cdot \frac{k^4-1}{k-1}=2 \cdot \frac{\left( \frac{2}{3} \right)^{4}-1}{\left( \frac{2}{3} \right)-1}=2 \cdot \frac{\frac{16}{81}-1}{\frac{2}{3}-1}=2\cdot \frac{-\frac{65}{81}}{-\frac{1}{3}}=2 \cdot \frac{\frac{65}{81}}{\frac{27}{81}}=\frac{130}{27}
$$

**Summen av de fire første leddene er**

$$
\underline{\underline{\frac{130}{27}}}
$$

---
{"tags":["oppgave","formler","cas","logaritmer","s1","del2"],"temaer":["formler","cas","logaritmer"],"alias":[null],"del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6},{"fag":"r1","del":2,"oppgave":5}],"fag":["s1","r1"],"eksamen":"v23","dg-publish":true,"title":"Lydstyrke fra fly","date":"2023-05-29","modified":"2023-05-29","dg-permalink":"/lydstyrke-fra-fly/","permalink":"/lydstyrke-fra-fly/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","formler","cas","logaritmer","s1","del2"],"temaer":["formler","cas","logaritmer"],"alias":[null],"del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6},{"fag":"r1","del":2,"oppgave":5}],"fag":["s1","r1"],"eksamen":"v23","title":"Lydstyrke fra fly","date":"2023-05-29","modified":"2023-05-29"}}
---


# Lydstyrke fra fly

Sammenhengen mellom lydstyrken $L$ (målt i dB) og lydintensiteten $I$ (målt i $\mathrm{W} / \mathrm{m}^2$) er gitt ved

$$
L=120+10 \cdot \lg I
$$

Menneskets øre har en smertegrense for lydstyrke som ligger omkring $130 \mathrm{~dB}$.

>[!oppgave]
>a) Bestem lydintensiteten når lydstyrken er $130 \mathrm{~dB}$.

>[!oppgave]
>b) Hvor mange prosent øker lydintensiteten dersom lydstyrken øker med $2 \mathrm{~dB}$ ?

Dersom effekten til lyden som sendes ut fra en lydkilde er $E$, vil lydintensiteten $I$ på en avstand $r$ (målt i m) fra denne lydkilden være

$$
I=\frac{E}{4 \pi \cdot r^2}
$$

Lydstyrken fra et fly er $140 \mathrm{~dB}$ dersom du er $50 \mathrm{~m}$ fra flyet.

>[!oppgave]
>c) Bestem den minste avstanden til dette flyet der lydstyrken er lavere enn $130 \mathrm{~dB}$.

## Fasit

a) 10 W/m²
b) 58,5 %
c) 158,12 m

## Løsningsforslag

### a
$$
\begin{aligned}
130 &= 120 + 10 \log I\\
10\log I&=130-120\\
\log I&=\cancelto{ 1 }{ \frac{10}{10} }\\
{ 10^{\log I} }&=10^1\\
I&=10
\end{aligned}
$$

**Lydintensiteten er 10 W/m² når lydstyrken er 130 dB.**

### b
Når $L=132$ blir 

$$
I=10^{\frac{132-120}{10}}=10^{1{,}2}=15{,}85
$$

Økningen i prosent er 

$$
\frac{15{,}85-10}{10}=0{,}585=58{,}5 \,\%
$$

**Når lydstyrken øker fra 130 dB til 132 dB øker lydintensiteten med 58,5 %.**

### c
Vi vet at $L=140$ når $r=50$. Jeg løser for $E$ og finner (dette gjøres enklest i CAS)

$$
\begin{aligned}
L&=120+10 \log I\\
L&=120+10 \log \frac{E}{4\pi r^2}\\
140&=120+10 \log \frac{E}{4\pi 50^2}\\
E&=1 000 000\pi 
\end{aligned}
$$

Jeg tolker formlene slik at et fly lager lyd med effekten $E=1\,000\,000\pi \,\text{W}$, mens lydintensiteten og lydstyrken avtar med avstanden. Vi setter opp en likning med lydstyrke lik 130 dB og finner avstanden som kreves (dette gjøres også enklest i CAS).

$$
\begin{aligned}
130&=120+10 \log \frac{1000000\pi}{4\pi r^2}\\
10&=10 \log \frac{1000000}{4r^2}\\
1&=\log \frac{250000}{r^2}\\
10&=\frac{250000}{r^2}\\
r^2&=\frac{250000}{10}\\
r^2&=25000\\
r&=\vert 158{,}113\vert
\end{aligned}
$$

Ved 158,113 m så er altså lydstyrken 130 dB. Siden vi skulle finne den minste avstanden hvor lydstyrken var *lavere* enn 130 dB så runder jeg opp i svaret mitt.

**158,12 m fra flyet er den minste avstanden hvor lydstyrken er lavere enn 130 dB.**

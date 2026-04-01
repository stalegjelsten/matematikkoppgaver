---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["vektorer","derivasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"poeng":6,"title":"Ball i bevegelse med posisjonsvektor","status":3,"source":null,"todo":null,"permalink":"/ball-i-bevegelse-med-posisjonsvektor/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["vektorer","derivasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"poeng":6,"title":"Ball i bevegelse med posisjonsvektor","status":3,"source":null,"todo":null,"permalink":"/ball-i-bevegelse-med-posisjonsvektor/"}}
---


# Ball i bevegelse med posisjonsvektor

En ball ruller av taket på et hus og ned på bakken. Vi plasserer et koordinatsystem slik at

- $y$-aksen ligger på bakken parallelt med husveggen
- $x$-aksen ligger på bakken, står vinkelrett på husveggen og skjærer $y$-aksen der ballen forlater hustaket
- $z$-aksen angir høyden over bakken med positiv retning oppover

![Koordinatsystem med hus og ball](/img/user/_resources/r2-h24-2-1.jpeg){width=40%}

Måleenheten på aksene er meter.

Posisjonen til ballen er gitt ved

$$\vec{r}(t) = [2t,\ 4t,\ 6 - 0{,}7t - 4{,}9t^2]$$

der $t$ er antall sekunder etter at ballen forlater taket.

>[!oppgave]
>a) Hvor høyt over bakken er kanten på taket? Hva er posisjonen til ballen etter $0{,}5$ s?
>b) Bestem farten til ballen når den treffer bakken.
>c) Ved hvilket tidspunkt er farten til ballen $10 \mathrm{~m/s}$?

## Fasit

a) 6 m over bakken; posisjon $(1,\ 2,\ 4{,}425)$ etter 0,5 s
b) $\approx 11{,}8 \, \mathrm{m/s}$
c) $t \approx 0{,}84 \, \mathrm{s}$

## Løsningsforslag

![Løsning av oppgave 1 del 2 i CAS](/img/user/_resources/r2-h24-2-1-cas.png){width=50%}

### 2-1a
$z$-komponenten til $\vec{r}(t)$ gir oss høyden ved tiden $t=0$
$$
\vec{r}_{z}(0)=6-0{,}7 \cdot 0 - 4{,}9 \cdot 0^{2}=6
$$
Posisjonen til ballen etter 0,5 s er gitt ved
$$
\vec{r}(0{,}5)=\begin{bmatrix}
2\cdot 0{,}5, & 4 \cdot 0{,}5, & 6-0{,}7\cdot 0{,}5-4{,}9\cdot 0{,}5^{2}
\end{bmatrix}= \begin{bmatrix}
 1, &2, &4{,}425
\end{bmatrix}
$$
**Kanten av hustaket er 6 meter over bakken og ballen befinner seg i punktet $(1, 2, 4{,}425)$ etter 0,5 sekunder.**

### 2-1b
Vi må først finne ut når ballen treffer bakken, altså når $\vec{r}_{z}(t)=0$, se linje 1 i GeoGebra. Vi kan se bort fra negative løsninger siden denne modellen kun er gyldig etter at ballen har forlatt kanten av taket.
$$
\begin{aligned}
\vec{r}_{z}(t)&=0\\
6-0{,}7t-4{,}9t^{2}&=0\\
t&=1{,}0374
\end{aligned}
$$
Farten til ballen er gitt ved
$$
\vec{v}(t)=\dot{\vec{r}}(t)=\begin{bmatrix}
2, &4, &-9{,}8t-0{,}7
\end{bmatrix}
$$
Jeg tolker oppgaven slik at vi kun er interessert i farten og ikke retningen til ballen i det den treffer bakken. Z-komponenten til fartsvektoren er $\frac{d}{dt}(6-0{,}7t-4{,}9t^{2})=-0{,}7-9{,}8t$. Farten er i så fall gitt ved
$$
\lvert \vec{v}(t)\rvert=\sqrt{ 2^{2}+4^{2}+(0{,}7+9{,}8t)^{2} }=\sqrt{ (9{,}8t+0{,}7)^{2} +20 }
$$
Farten når ballen treffer bakken vil være (se linje 2 i GeoGebra)
$$
\lvert \vec{v}(1{,}0374)\rvert=\sqrt{ (9{,}8\cdot 1{,}0374+0{,}7)^{2} +20 }=\sqrt{138{,}1}\approx 11{,}75
$$
**Farten er $\underline{\underline{\approx 11{,}8 \text{ m/s}}}$ når ballen treffer bakken.**

### 2-1c
Vi løser likningen (se linje 3 i GeoGebra)
$$
\sqrt{ (9{,}8t+0{,}7)^{2} +20 }=10 \implies 9{,}8t+0{,}7=\sqrt{80} \implies t=\frac{\sqrt{80}-0{,}7}{9{,}8}\approx 0{,}841
$$
Igjen kan vi se bort fra den negative løsningen.

**Farta til ballen er 10 m/s etter $\underline{\underline{0{,}84}}$ sekunder.**

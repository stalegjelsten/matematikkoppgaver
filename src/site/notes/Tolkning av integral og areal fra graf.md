---
{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"dg-publish":true,"temaer":["tolke grafer","tolkning av integraler","integral","areal under graf"],"fag":["s2","r2"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3},{"fag":"r2","del":1,"oppgave":3}],"title":"Tolkning av integral og areal fra graf Tolkning av integral og areal fra graf","source":null,"todo":null,"status":3,"dg-permalink":"/tolkning-av-integral-og-areal-fra-graf/","permalink":"/tolkning-av-integral-og-areal-fra-graf/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"temaer":["tolke grafer","tolkning av integraler","integral","areal under graf"],"fag":["s2","r2"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3},{"fag":"r2","del":1,"oppgave":3}],"title":"Tolkning av integral og areal fra graf Tolkning av integral og areal fra graf","source":null,"todo":null,"status":3}}
---



Nedenfor ser du grafen til funksjonen $f$ gitt ved $f(x)=x^3+x^2-2 x$.

![Grafen til $f$](/img/user/_resources/r2-h25-1-3.jpeg){width=70%}

>[!oppgave]
> a) Hvilket av uttrykkene nedenfor gir arealet av det markerte området på figuren? Husk å begrunne svaret ditt.


::: {.grid cols=2}

   1. $$\int_{-2}^1 f(x) \mathrm{~d} x$$
   2. $$\int_{-2}^1 f(x) \mathrm{~d} x-\int_0^1 f(x) \mathrm{~d} x$$
   3. $$\int_{-2}^0 f(x) \mathrm{~d} x+\int_0^1 f(x) \mathrm{~d} x$$
   4. $$\int_{-2}^0 f(x) \mathrm{~d} x-\int_0^1 f(x) \mathrm{~d} x$$

:::

>[!oppgave]
> b) Regn ut arealet av det markerte området på figuren.

Kristian ønsker å finne en verdi $a<0$, som er slik at $\int_a^1 f(x) d x=0$.
Han bruker en kalkulator og finner at $a \approx -0{,}6$.

Unni påstår at likningen til Kristian har to løsninger.

>[!oppgave]
> c) Forklar hvorfor påstanden til Unni er riktig, og bruk figuren til å anslå omtrent hvilken verdi den andre løsningen kan ha.

## Fasit

a) 4
b) $\frac{37}{12}$
c) Mellom -3 og -2,5.

## Løsningsforslag

### 1-3a
Områder som ligger over $x$-aksen vil ha identisk areal og integral. Områder som ligger under $x$-aksen vil ha motsatt fortegn på integralet og arealet. 

Vi deler derfor opp integrasjonen vår i to deler, en for området over $x$-aksen (fra $x=-2$ til $x=0$), og en annen del for området under $x$-aksen (fra $x=0$ til $x=1$).

Området fra $x=-2$ til $x=0$ ligger over $x$-aksen, arealet og integralet er identiske. Området fra $x=0$ til $x=1$ ligger under $x$-aksen, så arealet og integralet vil ha motsatt fortegn. For å beregne det samlede arealet må vi derfor endre fortegnet til integralet fra $x=0$ til $x=1$, altså
$$
\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx}
$$
**Uttrykk 4 gir arealet markert på figuren.**

### 1-3b
Jeg finner først det ubestemte integralet
$$
F(x)=\int \left(   x^{3}+x^{2}-2x  \right) \, \mathrm{d}x = \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- \frac{2}{2}x^{2} +C
$$
Arealet er gitt ved
$$
\begin{aligned}
A&=\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx} \\ &
= \textcolor{seagreen}{\left[ F(x) \right]_{-2}^0} - \textcolor{tomato}{\left[ F(x) \right]_{0}^1} \\
&= \textcolor{seagreen}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{-2}^0} -\textcolor{tomato}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{0}^1} \\
&= \textcolor{seagreen}{\left( \left( 0 \right) - \left( \frac{1}{4}(-2)^{4} +\frac{1}{3} (-2)^{3} - (-2)^{2}\right)   \right)} - \textcolor{tomato}{\left( \left( \frac{1}{4}1^{4}+ \frac{1}{3}1^{3}- 1^{2} \right) - \left( 0 \right)  \right)} \\
&= \textcolor{seagreen}{- \left(  \frac{1}{4}\cdot 16 + \frac{1}{3}\cdot (-8) - 4 \right)} - \textcolor{tomato}{\left( \frac{1}{4} + \frac{1}{3} -1 \right)} \\
&= \textcolor{seagreen}{- \left( \cancel{ 4 }- \frac{8}{3} - \cancel{ 4 } \right)} - \textcolor{tomato}{\left( \frac{3}{12} + \frac{4}{12} - \frac{12}{12} \right)} \\
&= \textcolor{seagreen}{\frac{8}{3}} - \textcolor{tomato}{\left( -\frac{5}{12} \right)} \\
&= \textcolor{seagreen}{\frac{32}{12}} + \textcolor{tomato}{\frac{5}{12}}= \frac{37}{12}
\end{aligned}
$$
**Arealet er $\underline{\underline{\frac{37}{12}}}$.**

### 1-3c
Likningen til Kristian er sann når vi velger $a$ slik at vi får nøyaktig like store områder på oversiden og undersiden av $x$-aksen. 

Fra figuren kan vi se at Kristians beregning ser riktig ut, området som er avgrenset av $x$-aksen og $f(x)$ fra $x=-0{,}6$ til $x=1$ ser ut til å ha omtrent like mye areal over og under $x$-aksen.

Hvis vi tar $\int_{-2}^{1} f(x) \, dx$ så må svaret bli positivt siden det er mer areal på oversiden av $x$-aksen. 

Vi ser videre at $f(x)$ er negativ for $x<-2$, altså må det være mulig å velge en verdi for $a$ som er mindre enn $-2$ slik at $\int_{a}^{1} f(x) \, dx=0$. 

- Hvis vi velger $a=-2{,}5$ så ser det ut til at vi har litt mer areal over $x$-aksen enn under.
- Hvis vi velger $a=-3$ så ser det ut til at vi har litt mer areal under $x$-aksen enn over.

**Likningen til Kristian krever like mye areal på oversiden og undersiden av $x$-aksen. Unni har rett i at det finnes to løsninger på likningen, der den andre løsningen ligger i intervallet $\langle -3, -2{,}5\rangle$.**

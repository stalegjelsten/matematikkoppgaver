---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"dg-publish":true,"temaer":["integral","tolkning av integraler","areal under graf"],"fag":["s2","r2"],"eksamen":"v25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2},{"fag":"r2","del":1,"oppgave":2}],"title":"Bestem f ut fra den deriverte","source":null,"todo":null,"status":3,"permalink":"/bestem-f-ut-fra-den-deriverte/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"temaer":["integral","tolkning av integraler","areal under graf"],"fag":["s2","r2"],"eksamen":"v25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2},{"fag":"r2","del":1,"oppgave":2}],"title":"Bestem f ut fra den deriverte","source":null,"todo":null,"status":3,"permalink":"/bestem-f-ut-fra-den-deriverte/"}}
---


# Bestem f ut fra den deriverte


Bestem et uttrykk for funksjonen $f$ når du får vite at

- $f'(x)=-\frac{2}{x^{3}}$
- Arealet av området som er avgrenset av grafen til $f$, $x$-aksen og linjene $x=1$ og $x=2$ er $\frac{11}{14}$. Dette arealet ligger over $x$-aksen.

## Fasit

$f(x)=\frac{1}{x^{2}}+\frac{2}{7}$

## Løsningsforslag

Vi vet at $f'(x)=-\frac{2}{x^{3}}$ vil ha uendelig mange antideriverte med ulike konstantledd
$$
\int -\frac{2}{x^{3}} \, \mathrm{d}x =\int -2x^{-3} \, \mathrm{d}x = \frac{-2}{-2}x^{-2}+C=\frac{1}{x^{2}}+C
$$
Her er $C$ et hvilket som helst tall. Siden vi har fått vite at arealet av området som avgrenses av grafen til $f$, $x=1$, $x=2$ og $x$-aksen er lik $\frac{11}{14}$, samt at hele arealet ligger over $x$-aksen, kan vi bruke et bestemt integral for å finne verdien av $C$.
$$
\begin{aligned}
\int_{1}^{2} \left(  \frac{1}{x^{2}} +C  \right)\, \mathrm{d}x &=\frac{11}{14} \\
\int_{1}^{2} \left(  x ^{ -2}+C  \right)\, \mathrm{d}x &=\frac{11}{14} \\
\left[ -\frac{1}{x}+Cx \right]_{1}^{2} &=\frac{11}{14} \\
\textcolor{orange}{\left(  -\frac{1}{2}+C \cdot 2 \right)}-\textcolor{seagreen}{\left( -\frac{1}{1}+C\cdot 1 \right)} &=\frac{11}{14} \\
\textcolor{orange}{-\frac{1}{2}+2C} + \textcolor{seagreen}{\frac{1}{1}-C} &=\frac{11}{14} \\
C&=\frac{11}{14}-\frac{1}{2}=\frac{2}{7} \\
\end{aligned}
$$
Vår antideriverte til $f'(x)$ har altså $C=\frac{2}{7}$, derfor har vi for alle $x\neq 0$:
$$
\underline{\underline{f(x)=\frac{1}{x^{2}}+\frac{2}{7}}}
$$

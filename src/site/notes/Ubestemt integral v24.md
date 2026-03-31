---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"dg-publish":true,"temaer":["integral"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"title":"Ubestemt integral v24","source":null,"todo":null,"status":3,"permalink":"/ubestemt-integral-v24/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"temaer":["integral"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"title":"Ubestemt integral v24","source":null,"todo":null,"status":3,"permalink":"/ubestemt-integral-v24/"}}
---


# Ubestemt integral v24


Regn ut integralet
$$
\int \left( x^{2}+1 \right)^{3} \cdot 2x \, \mathrm{d}x 
$$

## Fasit

$\frac{1}{4}(x^{2}+1)^{4}+C$

## Løsningsforslag

Jeg ser at hvis jeg velger $u=x^{2}+1$ og bruker variabelskifte, så kan jeg forkorte bort $2x$-faktoren senere.

$$
\begin{aligned}
\int (x^{2}+1)^{3} \cdot 2x \, \mathrm{d}x &= \int u \cdot 2x \, \mathrm{d}x \\
u&=x^{2}+1\\
\frac{du}{dx}&=2x\\
dx&=\frac{du}{2x}
\end{aligned}
$$

Jeg erstatter $dx$ i det opprinnelige integralet med $\frac{du}{2x}$

$$
\int u^{3} \cdot 2x \, \mathrm{d}x =\int u^{3}\cdot \cancel{ 2x } \, \frac{du}{\cancel{ 2x }} =\int u^{3} \, \mathrm{d}u=\frac{1}{4}u^{4}+C= \underline{\underline{\frac{1}{4}(x^{2}+1)^{4}+C}}
$$

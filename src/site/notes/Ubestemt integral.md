---
{"tags":["oppgave","integrasjon","del1","s2"],"temaer":["integral"],"aliases":null,"del":1,"oppgave":"1b","oppgavenummer":[{"fag":"s2","del":1,"oppgave":"1b"}],"fag":["s2"],"eksamen":"e22","dg-publish":true,"title":"Ubestemt integral","date":"2023-05-30","modified":"2023-05-30","dg-permalink":"/ubestemt-integral/","permalink":"/ubestemt-integral/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","integrasjon","del1","s2"],"temaer":["integral"],"aliases":null,"del":1,"oppgave":"1b","oppgavenummer":[{"fag":"s2","del":1,"oppgave":"1b"}],"fag":["s2"],"eksamen":"e22","title":"Ubestemt integral","date":"2023-05-30","modified":"2023-05-30"}}
---


# Ubestemt integral

Regn ut integralet

$$
\int 4x\sqrt{ x^2+2 }\, dx 
$$

## Fasit

$\frac{4}{3}\cdot \sqrt{ x^2+2 } \cdot(x^2+2)+C=\frac{4}{3}(x^2+2)^{\frac{3}{2}}+C$

## Løsningsforslag

$$
\begin{aligned}
\int 4x\sqrt{ x^2+2 } \, \mathrm{d}x, \quad u=x^2+2 \implies \frac{du}{dx}=2x \iff du=2xdx\\
\int 2\sqrt{ u } \, \mathrm{d}u =2\int u^{\frac{1}{2}} \, \mathrm{d}u =2\frac{2}{3}u^{\frac{3}{2}}+C=\frac{4}{3}(x^2+2)^{\frac{3}{2}}+C'=\frac{4}{3}(x^{2}+2) \sqrt{ x^{2}+2 } + C'
\end{aligned}
$$

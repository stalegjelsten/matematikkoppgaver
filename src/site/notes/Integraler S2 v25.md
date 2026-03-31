---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"dg-publish":true,"temaer":["integral"],"fag":["s2","r2"],"eksamen":"v25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1},{"fag":"r2","del":1,"oppgave":1}],"title":"Integraler S2 v25","source":null,"todo":null,"status":3,"permalink":"/integraler-s2-v25/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"temaer":["integral"],"fag":["s2","r2"],"eksamen":"v25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1},{"fag":"r2","del":1,"oppgave":1}],"title":"Integraler S2 v25","source":null,"todo":null,"status":3,"permalink":"/integraler-s2-v25/"}}
---


# Integraler S2 v25


Regn ut integralene

>[!oppgave]
>a)
>
>$$\int_{0}^{1} (2e^{x}+2x^{2}) \, \mathrm{d}x $$

>[!oppgave]
>b)
>
>$$\int \frac{2x-1}{x^{2}-x-6} \, \mathrm{d}x $$

## Fasit

a) $2e-\frac{4}{3}$
b) $\ln \left| x^{2}-x-6 \right|+C$

## Løsningsforslag

### 1-1a
$$
\int_{0}^{1} \left( 2e^{x}+2x^{2} \right)  \, \mathrm{d}x = \left[  2e^{x}+\frac{2}{3}x^{3} \right]_{0}^{1}= \left( 2e^{1}+\frac{2}{3}1^{3}  \right)  -\left(  2e^{0}  +\frac{2}{3}0^{3} \right) =2e+\frac{2}{3}-2=\underline{\underline{2e-\frac{4}{3}}}
$$

### 1-1b
Vi ser at den deriverte av uttrykket i nevneren er det samme som telleren, og det er derfor lurt å forsøke variabelskiftet $\textcolor{tomato}{u=x^{2}-x-6}$.
$$
\textcolor{tomato}{u=x^{2}-x-6} \implies \frac{du}{dx}=\textcolor{seagreen}{2x-1} \iff \frac{du}{\textcolor{seagreen}{2x-1}}=dx
$$
Vi substituerer inn i det opprinnelige uttrykket
$$
\int \frac{\textcolor{seagreen}{2x-1}}{\textcolor{tomato}{x^{2}-x-6}} \, \mathrm{d}x=\int \frac{\cancel{ \textcolor{seagreen}{2x-1} }}{\textcolor{tomato}{u}} \, \frac{\mathrm{d}u}{\cancel{ \textcolor{seagreen}{2x-1} }}  = \int \frac{1}{\textcolor{tomato}{u}} \, \mathrm{d}u=\ln \left| \textcolor{tomato}{u} \right| +C=\underline{\underline{\ln \left| x^{2} -x -6\right| + C}} 
$$

>[!tip] Løsning med delbrøkoppspalting
>
>Hvis du velger å løse ved hjelp av delbrøkoppspalting så vil du etter faktorisering få følgende likning
>$$2x-1=A(x+2)+B(x-3)$$
>Etter integrasjon får du svaret $\ln \left| x+2 \right| + \ln \left| x-3 \right|+C$, som er det samme svaret som vi får med variabelskiftet skrevet på en annen form.

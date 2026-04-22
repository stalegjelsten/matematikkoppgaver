---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","eksponentialfunksjoner"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":3,"title":"Enkel derivasjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/enkel-derivasjon/","permalink":"/enkel-derivasjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","eksponentialfunksjoner"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":3,"title":"Enkel derivasjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Enkel derivasjon

Deriver funksjonene

>[!oppgave]
>a) $f(x) = x^3 + 3e^x$
>b) $g(x) = \dfrac{\ln(2x)}{x^2}$

## Fasit

a) $f'(x) = 3x^2 + 3e^x$
b) $g'(x) = \dfrac{1 - 2\ln(2x)}{x^3}$

## Løsningsforslag

### a

Vi deriverer ledd for ledd.

$$f(x) = x^3 + 3e^x$$

$$\underline{\underline{f'(x) = 3x^2 + 3e^x}}$$

### b

Vi bruker kvotientregelen med $u = \ln(2x)$ og $v = x^2$.

$$g(x) = \frac{\ln(2x)}{x^2}$$

Vi har $u' = \dfrac{1}{x}$ og $v' = 2x$.

$$g'(x) = \frac{u' \cdot v - u \cdot v'}{v^2} = \frac{\dfrac{1}{x} \cdot x^2 - \ln(2x) \cdot 2x}{x^4}$$

$$= \frac{x - 2x\ln(2x)}{x^4} = \frac{x(1 - 2\ln(2x))}{x^4}$$

$$\underline{\underline{g'(x) = \frac{1 - 2\ln(2x)}{x^3}}}$$

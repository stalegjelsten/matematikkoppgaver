---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av sammensatte funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/derivasjon-av-sammensatte-funksjoner/","permalink":"/derivasjon-av-sammensatte-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av sammensatte funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Derivasjon av sammensatte funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 2e^x + 3\ln x$
>b) $g(x) = x \cdot (2x + 5)^4$
>c) $h(x) = \dfrac{x^2 - 1}{e^{2x}}$

## Fasit

a) $f'(x) = 2e^x + \dfrac{3}{x}$
b) $g'(x) = 5(2x+1)(2x+5)^3$
c) $h'(x) = \dfrac{-2x^2 + 2x + 2}{e^{2x}}$

## Løsningsforslag

### a

$$f(x) = 2e^x + 3\ln x$$

$$\underline{\underline{f'(x) = 2e^x + \frac{3}{x}}}$$

### b

Vi bruker produktregelen med $u = x$ og $v = (2x+5)^4$.

$$u' = 1, \quad v' = 4(2x+5)^3 \cdot 2 = 8(2x+5)^3$$

$$g'(x) = 1 \cdot (2x+5)^4 + x \cdot 8(2x+5)^3$$

$$= (2x+5)^3\big[(2x+5) + 8x\big]$$

$$= (2x+5)^3(10x + 5)$$

$$\underline{\underline{g'(x) = 5(2x+1)(2x+5)^3}}$$

### c

Vi bruker kvotientregelen med $u = x^2 - 1$ og $v = e^{2x}$.

$$u' = 2x, \quad v' = 2e^{2x}$$

$$h'(x) = \frac{2x \cdot e^{2x} - (x^2-1) \cdot 2e^{2x}}{(e^{2x})^2}$$

$$= \frac{2e^{2x}\big[x - (x^2-1)\big]}{e^{4x}} = \frac{2(-x^2 + x + 1)}{e^{2x}}$$

$$\underline{\underline{h'(x) = \frac{-2x^2 + 2x + 2}{e^{2x}}}}$$

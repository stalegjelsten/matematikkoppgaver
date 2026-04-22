---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av tre typer funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/derivasjon-av-tre-typer-funksjoner/","permalink":"/derivasjon-av-tre-typer-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av tre typer funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Derivasjon av tre typer funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 5x^4 - 10 + e^x$
>b) $g(x) = 2x \cdot \ln x$
>c) $h(x) = \dfrac{8}{1 + e^{-2x}}$

## Fasit

a) $f'(x) = 20x^3 + e^x$
b) $g'(x) = 2\ln x + 2$
c) $h'(x) = \dfrac{16e^{-2x}}{(1 + e^{-2x})^2}$

## Løsningsforslag

### a

$$f(x) = 5x^4 - 10 + e^x$$

Vi deriverer ledd for ledd:

$$\underline{\underline{f'(x) = 20x^3 + e^x}}$$

### b

$$g(x) = 2x \cdot \ln x$$

Vi bruker produktregelen $(u \cdot v)' = u' \cdot v + u \cdot v'$ med $u = 2x$ og $v = \ln x$:

$$g'(x) = 2 \cdot \ln x + 2x \cdot \frac{1}{x} = \underline{\underline{2\ln x + 2}}$$

### c

$$h(x) = \frac{8}{1 + e^{-2x}} = 8 \cdot (1 + e^{-2x})^{-1}$$

Vi bruker kjerneregelen med $u = 1 + e^{-2x}$:

$$h'(x) = 8 \cdot (-1) \cdot (1 + e^{-2x})^{-2} \cdot (-2) \cdot e^{-2x} = \underline{\underline{\frac{16e^{-2x}}{(1 + e^{-2x})^2}}}$$

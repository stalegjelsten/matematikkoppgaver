---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","eksponentialfunksjoner","rasjonale funksjoner"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/derivasjon-av-funksjoner/","permalink":"/derivasjon-av-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","eksponentialfunksjoner","rasjonale funksjoner"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Derivasjon av funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = \dfrac{1}{2} \ln x$
>b) $g(x) = 3x \cdot e^{2x}$
>c) $h(x) = \dfrac{x^2 + 1}{x - 3}$

## Fasit

a) $f'(x) = \dfrac{1}{2x}$
b) $g'(x) = 3e^{2x} + 6xe^{2x} = 3e^{2x}(1 + 2x)$
c) $h'(x) = \dfrac{x^2 - 6x - 1}{(x-3)^2}$

## Løsningsforslag

### a

$$f(x) = \frac{1}{2} \ln x$$

$$\underline{\underline{f'(x) = \frac{1}{2} \cdot \frac{1}{x} = \frac{1}{2x}}}$$

### b

$$g(x) = 3x \cdot e^{2x}$$

Vi bruker produktregelen med $u = 3x$ og $v = e^{2x}$:

$$g'(x) = 3 \cdot e^{2x} + 3x \cdot 2e^{2x} = \underline{\underline{3e^{2x}(1 + 2x)}}$$

### c

$$h(x) = \frac{x^2 + 1}{x - 3}$$

Vi bruker brøkregelen med $u = x^2 + 1$ og $v = x - 3$:

$$h'(x) = \frac{2x(x - 3) - (x^2 + 1) \cdot 1}{(x - 3)^2} = \frac{2x^2 - 6x - x^2 - 1}{(x - 3)^2} = \underline{\underline{\frac{x^2 - 6x - 1}{(x - 3)^2}}}$$

---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","eksponentialfunksjoner","rasjonale funksjoner"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av tre funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/derivasjon-av-tre-funksjoner/","permalink":"/derivasjon-av-tre-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","eksponentialfunksjoner","rasjonale funksjoner"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":5,"title":"Derivasjon av tre funksjoner","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Derivasjon av tre funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 3x^3 + \ln x$
>b) $g(x) = x \cdot e^{-2x^2}$
>c) $h(x) = \dfrac{2x}{x^2 + 1}$

## Fasit

a) $f'(x) = 9x^2 + \dfrac{1}{x}$
b) $g'(x) = (1 - 4x^2) \cdot e^{-2x^2}$
c) $h'(x) = \dfrac{2(1-x^2)}{(x^2+1)^2}$

## Løsningsforslag

### a

Vi deriverer ledd for ledd:

   $$f'(x) = 3 \cdot 3x^2 + \frac{1}{x} = \underline{\underline{9x^2 + \frac{1}{x}}}$$

### b

Vi bruker produktregelen med $u = x$ og $v = e^{-2x^2}$:

   $$g'(x) = 1 \cdot e^{-2x^2} + x \cdot (-4x) \cdot e^{-2x^2} = e^{-2x^2}(1 - 4x^2)$$

   $$= \underline{\underline{(1 - 4x^2) \cdot e^{-2x^2}}}$$

### c

Vi bruker brøkregelen med $u = 2x$ og $v = x^2 + 1$:

   $$h'(x) = \frac{2(x^2+1) - 2x \cdot 2x}{(x^2+1)^2} = \frac{2x^2 + 2 - 4x^2}{(x^2+1)^2} = \underline{\underline{\frac{2 - 2x^2}{(x^2+1)^2}}}$$

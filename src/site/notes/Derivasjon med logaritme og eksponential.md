---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","eksponentialfunksjoner"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":3,"title":"Derivasjon med logaritme og eksponential","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/derivasjon-med-logaritme-og-eksponential/","permalink":"/derivasjon-med-logaritme-og-eksponential/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","eksponentialfunksjoner"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"poeng":3,"title":"Derivasjon med logaritme og eksponential","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Derivasjon med logaritme og eksponential

Deriver funksjonene

>[!oppgave]
>a) $f(x) = x^4 - 4\ln x$
>b) $g(x) = \dfrac{e^{2x}}{x + 1}$

## Fasit

a) $f'(x) = 4x^3 - \dfrac{4}{x}$
b) $g'(x) = \dfrac{(2x+1) \cdot e^{2x}}{(x+1)^2}$

## Løsningsforslag

### a

$$f(x) = x^4 - 4\ln x$$

Vi deriverer ledd for ledd:

$$f'(x) = 4x^3 - \frac{4}{x}$$

### b

$$g(x) = \frac{e^{2x}}{x + 1}$$

Vi bruker kvotientregelen $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ med $u = e^{2x}$ og $v = x + 1$:

$$g'(x) = \frac{2e^{2x} \cdot (x+1) - e^{2x} \cdot 1}{(x+1)^2} = \frac{e^{2x}(2x + 2 - 1)}{(x+1)^2} = \underline{\underline{\frac{(2x+1) \cdot e^{2x}}{(x+1)^2}}}$$

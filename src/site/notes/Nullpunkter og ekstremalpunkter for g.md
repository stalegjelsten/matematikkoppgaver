---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/nullpunkter-og-ekstremalpunkter-for-g/","dg-publish":true,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":2}],"poeng":5,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","funksjonsdrøfting"],"title":"Nullpunkter og ekstremalpunkter for g","todo":[],"permalink":"/nullpunkter-og-ekstremalpunkter-for-g/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":2}],"poeng":5,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","funksjonsdrøfting"],"title":"Nullpunkter og ekstremalpunkter for g","todo":[]}}
---


# Nullpunkter og ekstremalpunkter for g

En funksjon $g$ er gitt ved $g(x) = \frac{1}{2}e^x \cdot (2x-1)^2$

>[!oppgave]
>a) Bestem eventuelle nullpunkter til funksjonen $g$.
>b) Vis at $g'(x) = \frac{1}{2}e^{x}(2x-1)(2x+3)$
>c) Finn koordinatene til eventuelle topp- og bunnpunkter på grafen til $g$.

## Fasit

a) $\underline{\underline{x = \frac{1}{2}}}$ (dobbelrot)
b) Se løsningsforslag.
c) Toppunkt: $\underline{\underline{\left(-\frac{3}{2},\ 8e^{-3/2}\right)}}$, bunnpunkt: $\underline{\underline{\left(\frac{1}{2},\ 0\right)}}$

## Løsningsforslag

### a

Vi skal finne nullpunktene til $g(x) = \frac{1}{2}e^x \cdot (2x-1)^2$.

$$g(x) = 0 \iff \frac{1}{2}e^x \cdot (2x-1)^2 = 0$$

Siden $\frac{1}{2}e^x > 0$ for alle $x$, må $(2x-1)^2 = 0$.

$$2x - 1 = 0 \iff x = \frac{1}{2}$$

$g$ har ett nullpunkt: $\underline{\underline{x = \frac{1}{2}}}$ (dobbelrot).

### b

Vi bruker produktregelen på $g(x) = u(x) \cdot v(x)$ med

$$u(x) = \frac{1}{2}e^x, \qquad v(x) = (2x-1)^2$$

$$u'(x) = \frac{1}{2}e^x, \qquad v'(x) = 2(2x-1) \cdot 2 = 4(2x-1)$$

Produktregelen gir

$$g'(x) = u'v + uv' = \frac{1}{2}e^x(2x-1)^2 + \frac{1}{2}e^x \cdot 4(2x-1)$$

Vi faktoriserer ut $\frac{1}{2}e^x(2x-1)$:

$$g'(x) = \frac{1}{2}e^x(2x-1)\bigl[(2x-1) + 4\bigr] = \frac{1}{2}e^x(2x-1)(2x+3)$$

Dette er det vi skulle vise. $\square$

### c

Vi setter $g'(x) = 0$. Siden $\frac{1}{2}e^x > 0$ for alle $x$, er det tilstrekkelig å løse

$$(2x-1)(2x+3) = 0$$

$$x = \frac{1}{2} \quad \text{eller} \quad x = -\frac{3}{2}$$

Vi bestemmer fortegnet til $g'(x) = \frac{1}{2}e^x \cdot \textcolor{steelblue}{(2x-1)} \cdot \textcolor{seagreen}{(2x+3)}$:

| | $x < -\frac{3}{2}$ | $x = -\frac{3}{2}$ | $-\frac{3}{2} < x < \frac{1}{2}$ | $x = \frac{1}{2}$ | $x > \frac{1}{2}$ |
|---|---|---|---|---|---|
| $\textcolor{steelblue}{2x-1}$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $\textcolor{seagreen}{2x+3}$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $g'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $g$ | voksende | topp | avtagende | bunn | voksende |

$g$ har et **toppunkt** i $x = -\frac{3}{2}$ og et **bunnpunkt** i $x = \frac{1}{2}$.

Vi beregner $y$-verdiene:

$$g\!\left(\frac{1}{2}\right) = \frac{1}{2}e^{1/2}\cdot\left(2\cdot\frac{1}{2}-1\right)^2 = \frac{1}{2}e^{1/2}\cdot 0 = 0$$

$$g\!\left(-\frac{3}{2}\right) = \frac{1}{2}e^{-3/2}\cdot\left(2\cdot\left(-\frac{3}{2}\right)-1\right)^2 = \frac{1}{2}e^{-3/2}\cdot(-4)^2 = \frac{1}{2}e^{-3/2}\cdot 16 = 8e^{-3/2}$$

Koordinater:

- Toppunkt: $\underline{\underline{\left(-\frac{3}{2},\ 8e^{-3/2}\right)}}$
- Bunnpunkt: $\underline{\underline{\left(\frac{1}{2},\ 0\right)}}$

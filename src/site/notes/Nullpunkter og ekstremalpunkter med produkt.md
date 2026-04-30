---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/nullpunkter-og-ekstremalpunkter-med-produkt/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":2}],"poeng":5,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","funksjonsdrøfting"],"title":"Nullpunkter og ekstremalpunkter med produkt","todo":[],"permalink":"/nullpunkter-og-ekstremalpunkter-med-produkt/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":2}],"poeng":5,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","funksjonsdrøfting"],"title":"Nullpunkter og ekstremalpunkter med produkt","todo":[]}}
---


# Nullpunkter og ekstremalpunkter med produkt

En funksjon $g$ er gitt ved $g(x) = \dfrac{1}{2}e^x \cdot (2x-1)^2$

>[!oppgave]
>a) Bestem eventuelle nullpunkter til funksjonen $g$.
>b) Vis at $g'(x) = \dfrac{1}{2}e^x(2x-1)(2x+3)$
>c) Finn koordinatene til eventuelle topp- og bunnpunkter på grafen til $g$.

## Fasit

a) $\underline{\underline{x = \dfrac{1}{2}}}$ (dobbelt nullpunkt)

b) Se løsningsforslag.

c) Toppunkt: $\underline{\underline{\left(-\dfrac{3}{2},\ 8e^{-3/2}\right)}}$, bunnpunkt: $\underline{\underline{\left(\dfrac{1}{2},\ 0\right)}}$

## Løsningsforslag

### a

Vi ser etter $x$ slik at $g(x) = 0$:

$$\frac{1}{2}e^x \cdot (2x-1)^2 = 0$$

Et produkt er null når minst én faktor er null. Siden $e^x > 0$ for alle $x$, og $\frac{1}{2} > 0$, må

$$(2x-1)^2 = 0 \implies 2x - 1 = 0 \implies x = \frac{1}{2}$$

**$g$ har ett nullpunkt: $x = \dfrac{1}{2}$ (dobbelt nullpunkt).**

### b

Vi deriverer $g(x) = \dfrac{1}{2}e^x \cdot (2x-1)^2$ med produktregelen $(uv)' = u'v + uv'$:

$$u = \frac{1}{2}e^x, \quad u' = \frac{1}{2}e^x$$

$$v = (2x-1)^2, \quad v' = 2(2x-1) \cdot 2 = 4(2x-1)$$

Dermed:

$$g'(x) = \frac{1}{2}e^x \cdot (2x-1)^2 + \frac{1}{2}e^x \cdot 4(2x-1)$$

Vi faktoriserer ut $\dfrac{1}{2}e^x(2x-1)$:

$$g'(x) = \frac{1}{2}e^x(2x-1)\bigl[(2x-1) + 4\bigr] = \frac{1}{2}e^x(2x-1)(2x+3)$$

Dette er det vi skulle vise. $\square$

### c

Vi setter $g'(x) = 0$:

$$\frac{1}{2}e^x(2x-1)(2x+3) = 0$$

Siden $\dfrac{1}{2}e^x > 0$ for alle $x$, må

$$(2x-1)(2x+3) = 0 \implies x = \frac{1}{2} \quad \text{eller} \quad x = -\frac{3}{2}$$

**Fortegnsskjema for $g'(x) = \dfrac{1}{2}e^x \cdot \textcolor{steelblue}{(2x-1)} \cdot \textcolor{tomato}{(2x+3)}$:**

| | $x < -\dfrac{3}{2}$ | $x = -\dfrac{3}{2}$ | $-\dfrac{3}{2} < x < \dfrac{1}{2}$ | $x = \dfrac{1}{2}$ | $x > \dfrac{1}{2}$ |
|---|---|---|---|---|---|
| $\textcolor{tomato}{(2x+3)}$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $\textcolor{steelblue}{(2x-1)}$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $g'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $g$ | $\nearrow$ | topp | $\searrow$ | bunn | $\nearrow$ |

$g$ har **toppunkt** i $x = -\dfrac{3}{2}$ og **bunnpunkt** i $x = \dfrac{1}{2}$.

**Funksjonsverdi i toppunktet:**

$$g\!\left(-\frac{3}{2}\right) = \frac{1}{2}e^{-3/2} \cdot \left(2 \cdot \left(-\frac{3}{2}\right) - 1\right)^2 = \frac{1}{2}e^{-3/2} \cdot (-4)^2 = \frac{1}{2}e^{-3/2} \cdot 16 = 8e^{-3/2}$$

**Funksjonsverdi i bunnpunktet:**

$$g\!\left(\frac{1}{2}\right) = \frac{1}{2}e^{1/2} \cdot (2 \cdot \tfrac{1}{2} - 1)^2 = \frac{1}{2}e^{1/2} \cdot 0 = 0$$

**Toppunkt: $\left(-\dfrac{3}{2},\ 8e^{-3/2}\right) \approx \left(-1{,}5;\ 1{,}78\right)$**

**Bunnpunkt: $\left(\dfrac{1}{2},\ 0\right)$**
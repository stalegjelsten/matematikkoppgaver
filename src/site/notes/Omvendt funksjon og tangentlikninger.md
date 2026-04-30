---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/omvendt-funksjon-og-tangentlikninger/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":2}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["funksjoner","derivasjon"],"title":"Omvendt funksjon og tangentlikninger","todo":[],"lf-source-claude":true,"permalink":"/omvendt-funksjon-og-tangentlikninger/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":2}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["funksjoner","derivasjon"],"title":"Omvendt funksjon og tangentlikninger","todo":[],"lf-source-claude":true}}
---


# Omvendt funksjon og tangentlikninger

Funksjonen $f$ er gitt ved

$$f(x) = \frac{1}{3}x^3 - 2x^2 - 1$$

og har definisjonsmengden $I = [a, b]$ der $a, b \in \mathbb{R}$.

>[!oppgave]
>a) Bestem det største intervallet $I$, slik at $f$ har en omvendt funksjon $g$ når $2 \in I$.
>b) Bestem stigningstallet til tangenten til grafen til $g$ i punktet $(-10, 3)$.
>c) Grafen til $g$ har en annen tangent med samme stigningstall som tangenten i punktet $(-10, 3)$. Bestem koordinatene til tangeringspunktet.

## Fasit

a) $\underline{\underline{I = [0, 4]}}$

b) $\underline{\underline{-\dfrac{1}{3}}}$

c) $\underline{\underline{\left(-\dfrac{8}{3},\ 1\right)}}$

## Løsningsforslag

Vi definerer $f$ og beregner $f'$ i GeoGebra CAS:

![GeoGebra CAS – omvendt funksjon og tangentlikninger](/img/user/_resources/r1-v25-2-2.png)

### a

For at $f$ skal ha en omvendt funksjon $g$ på $I$ må $f$ være strengt monoton (én-til-én) på $I$.

Vi deriverer $f$:

$$f'(x) = x^2 - 4x = x(x-4)$$

Stasjonære punkter: $f'(x) = 0$ gir $x = 0$ og $x = 4$ (linje 3 i CAS).

$f$ er avtagende for $x \in (0, 4)$ siden $f'(x) < 0$ der, og $2 \in (0, 4)$. Det største intervallet der $f$ er monoton og inneholder $x = 2$ er derfor

$$\underline{\underline{I = [0, 4]}}$$

(For kontroll: $f(0) = -1$ og $f(4) = -\dfrac{35}{3}$, så $f$ er strengt avtagende på hele intervallet.)

### b

Tangeringspunktet på grafen til $g$ er $(-10, 3)$, altså $g(-10) = 3$.

Siden $g$ er den omvendte funksjonen til $f$, betyr dette at $f(3) = -10$.

**Kontroll** (linje 6): $f(3) = -10$ ✓

Sammenhengen mellom stigningstallene til $f$ og $g$ i speilpunktene er:

$$g'(y_0) = \frac{1}{f'(x_0)}$$

Her er $x_0 = 3$ og $y_0 = f(3) = -10$:

$$g'(-10) = \frac{1}{f'(3)} = \frac{1}{-3} = \underline{\underline{-\frac{1}{3}}}$$

(Linje 7–8 i CAS bekrefter $f'(3) = -3$ og $\dfrac{1}{f'(3)} = -\dfrac{1}{3}$.)

### c

Vi søker et annet punkt på grafen til $g$ der tangenten har stigningstall $-\dfrac{1}{3}$.

$$g'(y) = -\frac{1}{3} \implies \frac{1}{f'(x)} = -\frac{1}{3} \implies f'(x) = -3$$

Vi løser $f'(x) = -3$ (linje 9 i CAS):

$$x^2 - 4x = -3 \implies x^2 - 4x + 3 = 0 \implies (x-1)(x-3) = 0$$

$$x = 1 \quad \text{eller} \quad x = 3$$

$x = 3$ svarer til tangeringspunktet vi allerede fant i b). Den andre løsningen er $x = 1$.

$f(1) = -\dfrac{8}{3}$ (linje 10 i CAS).

Punktet på grafen til $f$ er $\left(1,\ -\dfrac{8}{3}\right)$, og siden $g$ er den omvendte funksjonen, er det tilsvarende punktet på grafen til $g$:

$$\underline{\underline{\left(-\frac{8}{3},\ 1\right)}}$$
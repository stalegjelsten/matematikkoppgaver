---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","derivasjon","modellering"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":8,"title":"Tredjegradsfunksjon og vannstand","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/tredjegradsfunksjon-og-vannstand/","permalink":"/tredjegradsfunksjon-og-vannstand/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","derivasjon","modellering"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":8,"title":"Tredjegradsfunksjon og vannstand","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Tredjegradsfunksjon og vannstand

Funksjonen $f$ er gitt ved

$$f(x) = (x - 1)^2 \cdot (x - 7)$$

>[!oppgave]
>a) Vis at grafen til $f$ har et bunnpunkt i $(5, -32)$.
>Bestem eventuelle andre toppunkter og bunnpunkter på grafen til $f$.
>b) Lag en skisse av grafen til $f$.

Vi skal nå studere vannstanden under en vårflom i en elv. Vannstanden er høyden (i meter) på vannet målt på en utplassert skala.

En modell $g$ for vannstanden er gitt ved

$$g(x) = -0{,}10 \cdot f(x), \quad D_g = [2, 6]$$

Her er $x$ antall dager etter at flommen startet.

>[!oppgave]
>c) Når var vannstanden på sitt høyeste, og hva var vannstanden da?
>d) Når økte vannstanden mest, og hvor raskt økte den da?

## Fasit

a) Bunnpunkt i $(5, -32)$, toppunkt i $(1, 0)$
b) Skisse
c) Vannstanden var høyest etter 5 dager, med $g(5) = 3{,}2 \text{~meter}$
d) Vannstanden økte mest etter 3 dager, med $1{,}2 \text{~meter per dag}$

## Løsningsforslag

### a

Vi utvider $f(x) = (x-1)^2(x-7)$:

$$f(x) = (x^2 - 2x + 1)(x - 7) = x^3 - 9x^2 + 15x - 7$$

Vi deriverer:

$$f'(x) = 3x^2 - 18x + 15 = 3(x^2 - 6x + 5) = 3(x - 1)(x - 5)$$

Vi setter $f'(x) = 0$:

$$3(x-1)(x-5) = 0 \implies x = 1 \quad \text{eller} \quad x = 5$$

Vi bruker fortegnsskjema for $f'(x)$:

| $x$ | $\leftarrow 1$ | $1$ | $1 \to 5$ | $5$ | $5 \to$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\nearrow$ | $0$ | $\searrow$ | $-32$ | $\nearrow$ |

Vi ser at $f$ har **toppunkt** i $(1, 0)$ og **bunnpunkt** i $(5, -32)$.

Vi kontrollerer: $f(5) = (5-1)^2(5-7) = 16 \cdot (-2) = -32$ ✓

### b

Grafen til $f$ har:
- Nullpunkter i $x = 1$ (dobbelt) og $x = 7$
- Toppunkt i $(1, 0)$
- Bunnpunkt i $(5, -32)$

Grafen starter negativt for $x < 1$, tangerer $x$-aksen i $x = 1$, synker ned til bunnpunktet $(5, -32)$, og krysser $x$-aksen igjen i $x = 7$.

### c

Siden $g(x) = -0{,}10 \cdot f(x)$, har $g$ maksimum der $f$ har minimum. Fra oppgave a) har $f$ minimum i $x = 5$.

$$g(5) = -0{,}10 \cdot f(5) = -0{,}10 \cdot (-32) = 3{,}2$$

**Vannstanden var på sitt høyeste etter $\underline{\underline{5 \text{~dager}}}$, og vannstanden var da $\underline{\underline{3{,}2 \text{~meter}}}$.**

### d

Vannstanden økte mest der $g'(x)$ er størst, altså i vendepunktet til $g$ der $g''(x) = 0$.

$$g'(x) = -0{,}10 \cdot f'(x) = -0{,}10(3x^2 - 18x + 15)$$

$$g''(x) = -0{,}10(6x - 18)$$

Vi setter $g''(x) = 0$:

$$6x - 18 = 0 \implies x = 3$$

Vi sjekker at $x = 3 \in [2, 6]$ ✓

$$g'(3) = -0{,}10(3 \cdot 9 - 18 \cdot 3 + 15) = -0{,}10(27 - 54 + 15) = -0{,}10 \cdot (-12) = 1{,}2$$

**Vannstanden økte mest etter $\underline{\underline{3 \text{~dager}}}$, og den økte da med $\underline{\underline{1{,}2 \text{~meter per dag}}}$.**

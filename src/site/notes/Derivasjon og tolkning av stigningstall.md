---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjoner"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":1}],"title":"Derivasjon og tolkning av stigningstall","status":3,"source":null,"todo":null,"permalink":"/derivasjon-og-tolkning-av-stigningstall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjoner"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":1}],"title":"Derivasjon og tolkning av stigningstall","status":3,"source":null,"todo":null,"permalink":"/derivasjon-og-tolkning-av-stigningstall/"}}
---


# Derivasjon og tolkning av stigningstall

>[!oppgave]
>a) Deriver funksjonen $f$ gitt ved
>
>$$f(x) = \frac{1}{3}x^3 + \sqrt{x} + 2$$

Funksjon $g$ gitt ved

$$g(x) = \frac{2x-3}{e^x}$$

er kontinuerlig og deriverbar for alle $x \in \mathbb{R}$.

>[!oppgave]
>b) Bestem $g'(2)$ og $g'(3)$.
>c) Hva forteller svarene i oppgave b om grafen til $g$ når $x \in [2, 3]$?

## Fasit

a) $f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}$
b) $g'(2) = \dfrac{1}{e^2}$, $g'(3) = -\dfrac{1}{e^3}$
c) Grafen til $g$ har et toppunkt i intervallet $\langle 2, 3 \rangle$

## Løsningsforslag

### 1-1a

Vi bruker potensregler og derivasjonsregler:

$$f(x) = \frac{1}{3}x^3 + x^{1/2} + 2$$

$$f'(x) = x^2 + \frac{1}{2}x^{-1/2} = x^2 + \frac{1}{2\sqrt{x}}$$

**$\underline{\underline{f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}}}$**

### 1-1b

Vi bruker kvotientregelen på $g(x) = \dfrac{2x-3}{e^x}$:

$$g'(x) = \frac{2 \cdot e^x - (2x-3) \cdot e^x}{(e^x)^2} = \frac{e^x(2 - 2x + 3)}{e^{2x}} = \frac{5-2x}{e^x}$$

Dermed:

$$
\begin{aligned}
g'(2) &= \frac{5- 2\cdot 2 }{e^2} = \frac{1}{e^2} \\[6pt]
g'(3) &= \frac{5- 2 \cdot 3}{e^3} = -\frac{1}{e^3}
\end{aligned}
$$

**$\underline{\underline{g'(2) = \dfrac{1}{e^2}}}$ og $\underline{\underline{g'(3) = -\dfrac{1}{e^3}}}$**

### 1-1c

Siden $g'(2) = \dfrac{1}{e^2} > 0$, er grafen til $g$ stigende i $x = 2$.

Siden $g'(3) = -\dfrac{1}{e^3} < 0$, er grafen til $g$ synkende i $x = 3$.

Fordi $g'$ er kontinuerlig og skifter fortegn fra positivt til negativt i intervallet $\langle 2, 3 \rangle$, har $g$ et **toppunkt** et sted i dette intervallet.

---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjoner"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":1}],"title":"Derivasjon og graffortolkning","status":3,"source":null,"todo":null,"dg-permalink":"/derivasjon-og-graffortolkning/","permalink":"/derivasjon-og-graffortolkning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjoner"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":1}],"title":"Derivasjon og graffortolkning","status":3,"source":null,"todo":null}}
---


# Derivasjon og graffortolkning

>[!oppgave]
>a) Deriver funksjonen $f$ gitt ved
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
c) $g$ har et toppunkt i $\langle 2, 3 \rangle$

## Løsningsforslag

### 1-1a

Vi skriver om $f(x) = \frac{1}{3}x^3 + x^{1/2} + 2$ og deriverer ledd for ledd:

$$
f'(x) = x^2 + \frac{1}{2}x^{-1/2} = x^2 + \frac{1}{2\sqrt{x}}
$$

**$\underline{\underline{f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}}}$**

### 1-1b

Vi bruker kvotientsregelen på $g(x) = \dfrac{2x-3}{e^x}$:

$$
g'(x) = \frac{2 \cdot e^x - (2x-3) \cdot e^x}{e^{2x}} = \frac{e^x \bigl(2 - (2x-3)\bigr)}{e^{2x}} = \frac{5-2x}{e^x}
$$

Da er

$$
g'(2) = \frac{5-4}{e^2} = \frac{1}{e^2} \approx 0{,}14 \qquad \text{og} \qquad g'(3) = \frac{5-6}{e^3} = -\frac{1}{e^3} \approx -0{,}05
$$

**$\underline{\underline{g'(2) = \dfrac{1}{e^2} \approx 0{,}14}}$ og $\underline{\underline{g'(3) = -\dfrac{1}{e^3} \approx -0{,}05}}$**

### 1-1c

Siden $g'(2) > 0$ er $g$ stigende i $x = 2$, og siden $g'(3) < 0$ er $g$ avtagende i $x = 3$. Dermed må $g$ ha et **toppunkt** et sted i det åpne intervallet $\langle 2, 3 \rangle$.

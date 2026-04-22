---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","faktorisering","likninger"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":7,"title":"Polynomdivisjon med ulikhet og eksponentiallikning","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynomdivisjon-med-ulikhet-og-eksponentiallikning/","permalink":"/polynomdivisjon-med-ulikhet-og-eksponentiallikning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","faktorisering","likninger"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":7,"title":"Polynomdivisjon med ulikhet og eksponentiallikning","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynomdivisjon med ulikhet og eksponentiallikning

Polynomet $P$ er gitt ved

$$P(x) = x^3 - 2x^2 - 31x - 28$$

>[!oppgave]
>a) Vis, uten å utføre polynomdivisjon, at $P(x)$ ikke er delelig med $(x - 1)$.
>b) Utfør polynomdivisjonen $P(x) : (x + 1)$.
>c) Løs ulikheten $P(x) \geq 0$.
>d) Løs likningen $e^{3x} - 2e^{2x} - 31e^x - 28 = 0$.

## Fasit

a) $P(1) = -60 \neq 0$
b) $P(x) : (x+1) = x^2 - 3x - 28$
c) $x \in \{-4\} \cup [7, \to\rangle$
d) $x = \ln 7$

## Løsningsforslag

### a

Dersom $P(x)$ er delelig med $(x-1)$, må $P(1) = 0$ (faktorteoremet).

$$P(1) = 1 - 2 - 31 - 28 = -60 \neq 0$$

Altså er $P(x)$ **ikke** delelig med $(x - 1)$.

### b

Vi utfører polynomdivisjonen:

$$\begin{aligned}
&\quad (x^3 - 2x^2 - 31x - 28) : (x + 1) = x^2 - 3x - 28 \\[4pt]
&\quad\underline{-(x^3 + x^2)} \\
&\quad\quad -3x^2 - 31x \\
&\quad\quad \underline{-(-3x^2 - 3x)} \\
&\quad\quad\quad -28x - 28 \\
&\quad\quad\quad \underline{-(-28x - 28)} \\
&\quad\quad\quad\quad 0
\end{aligned}$$

Altså $P(x) = (x+1)(x^2 - 3x - 28)$.

### c

Vi faktoriserer $x^2 - 3x - 28$:

$$x^2 - 3x - 28 = (x - 7)(x + 4)$$

Dermed er $P(x) = (x+1)(x+4)(x-7)$ med nullpunkter $x = -4$, $x = -1$ og $x = 7$.

Fortegnslinje:

| | $x < -4$ | $-4 < x < -1$ | $-1 < x < 7$ | $x > 7$ |
|---|---|---|---|---|
| $P(x)$ | $-$ | $+$ | $-$ | $+$ |

$P(x) \geq 0$ for $x = -4$, $x \in [-4, -1]$... nei, la oss sjekke:

For $x = -3$: $P(-3) = (-3+1)(-3+4)(-3-7) = (-2)(1)(-10) = 20 > 0$ ✓

$$\underline{\underline{P(x) \geq 0 \quad \text{for} \quad x \in [-4{,}\ {-1}] \cup [7{,}\ \to\rangle}}$$

### d

Vi setter $u = e^x$ i likningen $e^{3x} - 2e^{2x} - 31e^x - 28 = 0$:

$$u^3 - 2u^2 - 31u - 28 = 0$$

Dette er $P(u) = 0$, som fra oppgave b) og c) har løsningene $u = -4$, $u = -1$ og $u = 7$.

Siden $u = e^x > 0$, er den eneste gyldige løsningen $u = 7$:

$$e^x = 7 \quad \Rightarrow \quad \underline{\underline{x = \ln 7 \approx 1{,}95}}$$

---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Polynomdivisjon og ulikhet","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynomdivisjon-og-ulikhet/","permalink":"/polynomdivisjon-og-ulikhet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Polynomdivisjon og ulikhet","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynomdivisjon og ulikhet

Polynomet $P$ er gitt ved

$$P(x) = x^3 - 19x + 30$$

>[!oppgave]
>a) Utfør polynomdivisjonen $P(x) : (x - 2)$.
>b) Løs ulikheten $P(x) \geq 0$.
>c) Forkort brøken
>
>$$\frac{x^3 - 19x + 30}{x^3 - 2x^2 - 9x + 18}$$

## Fasit

a) $P(x) : (x-2) = x^2 + 2x - 15$
b) $x \in [-5{,}\ 2] \cup [3{,}\ \to\rangle$
c) $\dfrac{x+5}{x+3}$

## Løsningsforslag

### a

Vi utfører polynomdivisjonen $P(x) : (x - 2)$:

$$
\begin{aligned}
&\quad (x^3 - 19x + 30) : (x - 2) = x^2 + 2x - 15 \\[4pt]
&\quad\underline{-(x^3 - 2x^2)} \\
&\quad\quad 2x^2 - 19x \\
&\quad\quad \underline{-(2x^2 - 4x)} \\
&\quad\quad\quad -15x + 30 \\
&\quad\quad\quad \underline{-(-15x + 30)} \\
&\quad\quad\quad\quad 0
\end{aligned}$$

Vi får $P(x) = (x-2)(x^2 + 2x - 15)$.

### b

Vi faktoriserer $x^2 + 2x - 15$:

$$x^2 + 2x - 15 = (x + 5)(x - 3)$$

Dermed er $P(x) = (x-2)(x+5)(x-3)$ med nullpunkter $x = -5$, $x = 2$ og $x = 3$.

Vi lager en fortegnslinje:

|        | $x < -5$ | $-5 < x < 2$ | $2 < x < 3$ | $x > 3$ |
| ------ | -------- | ------------ | ----------- | ------- |
| $P(x)$ | $-$      | $+$          | $-$         | $+$     |

$$\underline{\underline{P(x) \geq 0 \quad \text{for} \quad x \in [-5{,}\ 2] \cup [3{,}\ \to\rangle}}$$

### c

Vi faktoriserer nevneren. Vi prøver $x = 2$:

$$Q(2) = 8 - 8 - 18 + 18 = 0 \quad \checkmark$$

Vi utfører $Q(x) : (x-2)$ og får $Q(x) = (x-2)(x^2 - 9) = (x-2)(x-3)(x+3)$.

Dermed:

$$\frac{P(x)}{Q(x)} = \frac{(x-2)(x+5)(x-3)}{(x-2)(x-3)(x+3)} = \underline{\underline{\frac{x+5}{x+3}}}$$

der $x \neq 2$ og $x \neq 3$.

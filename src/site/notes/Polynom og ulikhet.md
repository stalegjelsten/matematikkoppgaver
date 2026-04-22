---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":5,"title":"Polynom og ulikhet","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynom-og-ulikhet/","permalink":"/polynom-og-ulikhet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":5,"title":"Polynom og ulikhet","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynom og ulikhet

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 9x^2 + 15x - 7$$

>[!oppgave]
>a) Begrunn at $P(x)$ er delelig med $(x - 1)$.
>b) Løs ulikheten $P(x) \geq 0$.
>c) Forkort brøken
>
>$$\frac{x^2 - 2x + 1}{x^3 - 9x^2 + 15x - 7}$$

## Fasit

a) $P(1) = 0$, så $P(x)$ er delelig med $(x-1)$
b) $x \in \{1\} \cup [7, \to \rangle$
c) $\dfrac{1}{x - 7}$

## Løsningsforslag

### a

Vi setter inn $x = 1$:

$$P(1) = 1^3 - 9 \cdot 1^2 + 15 \cdot 1 - 7 = 1 - 9 + 15 - 7 = 0$$

Siden $P(1) = 0$, er $P(x)$ delelig med $(x - 1)$ ifølge faktorsettningen.

### b

Vi utfører polynomdivisjon $P(x) : (x - 1)$:

$$P(x) = (x - 1)(x^2 - 8x + 7)$$

Vi faktoriserer andregradsuttrykket:

$$x^2 - 8x + 7 = (x - 1)(x - 7)$$

Altså:

$$P(x) = (x - 1)^2(x - 7)$$

Vi løser ulikheten $P(x) \geq 0$:

$(x - 1)^2 \geq 0$ for alle $x$, så fortegnet til $P(x)$ bestemmes av $(x - 7)$.

- $(x-7) \geq 0$ når $x \geq 7$
- Når $x = 1$: $P(1) = 0$

$$\underline{\underline{x \in \{1\} \cup [7, \to \rangle}}$$

### c

Vi kjenner igjen telleren som et fullstendig kvadrat:

$$x^2 - 2x + 1 = (x - 1)^2$$

Fra oppgave b) har vi $P(x) = (x-1)^2(x-7)$. Vi forkorter:

$$\frac{x^2 - 2x + 1}{x^3 - 9x^2 + 15x - 7} = \frac{(x - 1)^2}{(x - 1)^2(x - 7)} = \underline{\underline{\frac{1}{x - 7}}}$$

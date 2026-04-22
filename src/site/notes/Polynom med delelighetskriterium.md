---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Polynom med delelighetskriterium","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynom-med-delelighetskriterium/","permalink":"/polynom-med-delelighetskriterium/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","faktorisering"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Polynom med delelighetskriterium","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynom med delelighetskriterium

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 12x - 16$$

>[!oppgave]
>a) Begrunn, uten å utføre polynomdivisjon, at $P(x)$ er delelig med $(x + 2)$, men ikke med $(x - 2)$.
>b) Forkort brøken
>
>$$\frac{x^3 - 12x - 16}{4x - 16}$$

## Fasit

a) $P(-2) = 0$, så $(x+2)$ er faktor. $P(2) = -32 \neq 0$, så $(x-2)$ er ikke faktor.
b) $\dfrac{(x+2)^2}{4}$

## Løsningsforslag

### a

Vi bruker faktorsettningen. Et polynom $P(x)$ er delelig med $(x - a)$ hvis og bare hvis $P(a) = 0$.

$$P(-2) = (-2)^3 - 12 \cdot (-2) - 16 = -8 + 24 - 16 = 0$$

Siden $P(-2) = 0$, er $P(x)$ delelig med $(x + 2)$.

$$P(2) = 2^3 - 12 \cdot 2 - 16 = 8 - 24 - 16 = -32 \neq 0$$

Siden $P(2) \neq 0$, er $P(x)$ **ikke** delelig med $(x - 2)$.

### b

Vi utfører polynomdivisjon $P(x) : (x + 2)$:

$$x^3 - 12x - 16 = (x + 2)(x^2 - 2x - 8)$$

Vi faktoriserer andregradsuttrykket:

$$x^2 - 2x - 8 = (x - 4)(x + 2)$$

Altså: $P(x) = (x + 2)^2(x - 4)$.

Vi forkorter brøken:

$$\frac{x^3 - 12x - 16}{4x - 16} = \frac{(x+2)^2(x-4)}{4(x-4)} = \underline{\underline{\frac{(x+2)^2}{4}}}$$

---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","likningssystem"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Fjerdegradspolynom med faktorer","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/fjerdegradspolynom-med-faktorer/","permalink":"/fjerdegradspolynom-med-faktorer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","likningssystem"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Fjerdegradspolynom med faktorer","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Fjerdegradspolynom med faktorer

Et polynom $Q$ er gitt ved

$$Q(x) = x^4 + ax^3 + bx^2 + cx - 12$$

Du får oppgitt at $(x + 1)$, $(x - 1)$ og $(x - 2)$ er faktorer i $Q(x)$.

>[!oppgave]
>a) Vis at dette gir likningssystemet
>
>$$a - b + c = -11$$
>
>$$a + b + c = 11$$
>
>$$8a + 4b + 2c = -4$$
>b) Bestem $a$, $b$ og $c$.

## Fasit

a) Se løsningsforslag
b) $a = -8$, $b = 11$, $c = 8$

## Løsningsforslag

### a

Siden $(x + 1)$, $(x - 1)$ og $(x - 2)$ er faktorer i $Q(x)$, vet vi at $Q(-1) = 0$, $Q(1) = 0$ og $Q(2) = 0$.

**$Q(-1) = 0$:**

$$(-1)^4 + a(-1)^3 + b(-1)^2 + c(-1) - 12 = 0$$

$$1 - a + b - c - 12 = 0$$

$$a - b + c = -11$$

**$Q(1) = 0$:**

$$1 + a + b + c - 12 = 0$$

$$a + b + c = 11$$

**$Q(2) = 0$:**

$$16 + 8a + 4b + 2c - 12 = 0$$

$$8a + 4b + 2c = -4$$

### b

Fra likning 1 og 2:

$$(a + b + c) - (a - b + c) = 11 - (-11)$$

$$2b = 22 \implies b = 11$$

Setter $b = 11$ inn i likning 1: $a + c = -11 + 11 = 0$, altså $c = -a$.

Setter $b = 11$ og $c = -a$ inn i likning 3:

$$8a + 44 - 2a = -4 \implies 6a = -48 \implies a = -8$$

Da er $c = -(-8) = 8$.

$$\underline{\underline{a = -8, \quad b = 11, \quad c = 8}}$$

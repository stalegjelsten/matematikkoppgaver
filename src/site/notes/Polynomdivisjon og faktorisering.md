---
{"aliases":[],"date":"2024-05-23","del":1,"dg-permalink":"/polynomdivisjon-og-faktorisering/","dg-publish":true,"eksamen":"v24","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":2}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["polynomdivisjon","faktorisering","algebra"],"title":"Polynomdivisjon og faktorisering","todo":[],"permalink":"/polynomdivisjon-og-faktorisering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":1,"eksamen":"v24","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":2}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["polynomdivisjon","faktorisering","algebra"],"title":"Polynomdivisjon og faktorisering","todo":[]}}
---


# Polynomdivisjon og faktorisering

Guri har utført to ulike polynomdivisjoner og påstår at begge divisjonene viser at faktoriseringen nedenfor er riktig.

$$2x^3 + 3x^2 - 11x - 6 = (2x^2 + 7x + 3) \cdot (x - 2)$$

>[!oppgave]
>Hvilke to polynomdivisjoner kan hun ha utført?
>
>Utfør de to polynomdivisjonene, og forklar at hver av dem viser at faktoriseringen er riktig.

## Fasit

Divisjon 1: $(2x^3 + 3x^2 - 11x - 6) : (x - 2) = \underline{\underline{2x^2 + 7x + 3}}$, rest $0$

Divisjon 2: $(2x^3 + 3x^2 - 11x - 6) : (2x^2 + 7x + 3) = \underline{\underline{x - 2}}$, rest $0$

## Løsningsforslag

Guri påstår at $2x^3 + 3x^2 - 11x - 6 = (2x^2 + 7x + 3)(x - 2)$.

For å kontrollere dette kan hun dele på én av faktorene og sjekke at resten blir $0$ og kvotienten er den andre faktoren. To naturlige valg er:

- Divisjon 1: dele på den enkle faktoren $(x - 2)$
- Divisjon 2: dele på den kvadratiske faktoren $(2x^2 + 7x + 3)$

### Divisjon 1: $(2x^3 + 3x^2 - 11x - 6) : (x - 2)$

$$
\begin{array}{r}
2x^2 + 7x + 3 \\[-2pt]
\hline
x - 2 \;\Big)\; 2x^3 + 3x^2 - 11x - 6 \\
\underline{-(2x^3 - 4x^2)} \\
7x^2 - 11x - 6 \\
\underline{-(7x^2 - 14x)} \\
3x - 6 \\
\underline{-(3x - 6)} \\
0
\end{array}
$$

**Steg for steg:**

- $2x^3 : x = 2x^2$, og $2x^2 \cdot (x - 2) = 2x^3 - 4x^2$. Rest: $7x^2 - 11x - 6$
- $7x^2 : x = 7x$, og $7x \cdot (x - 2) = 7x^2 - 14x$. Rest: $3x - 6$
- $3x : x = 3$, og $3 \cdot (x - 2) = 3x - 6$. Rest: $0$

Kvotienten er $2x^2 + 7x + 3$ og resten er $0$.

Siden resten er $0$, er $(x - 2)$ en faktor i $2x^3 + 3x^2 - 11x - 6$, og vi får

$$2x^3 + 3x^2 - 11x - 6 = (x - 2)(2x^2 + 7x + 3)$$

Dette viser at faktoriseringen er riktig.

### Divisjon 2: $(2x^3 + 3x^2 - 11x - 6) : (2x^2 + 7x + 3)$

$$
\begin{array}{r}
x - 2 \\[-2pt]
\hline
2x^2 + 7x + 3 \;\Big)\; 2x^3 + 3x^2 - 11x - 6 \\
\underline{-(2x^3 + 7x^2 + 3x)} \\
-4x^2 - 14x - 6 \\
\underline{-(-4x^2 - 14x - 6)} \\
0
\end{array}
$$

**Steg for steg:**

- $2x^3 : 2x^2 = x$, og $x \cdot (2x^2 + 7x + 3) = 2x^3 + 7x^2 + 3x$. Rest: $-4x^2 - 14x - 6$
- $-4x^2 : 2x^2 = -2$, og $-2 \cdot (2x^2 + 7x + 3) = -4x^2 - 14x - 6$. Rest: $0$

Kvotienten er $x - 2$ og resten er $0$.

Siden resten er $0$, er $(2x^2 + 7x + 3)$ en faktor i $2x^3 + 3x^2 - 11x - 6$, og vi får

$$2x^3 + 3x^2 - 11x - 6 = (2x^2 + 7x + 3)(x - 2)$$

Dette viser at faktoriseringen er riktig.
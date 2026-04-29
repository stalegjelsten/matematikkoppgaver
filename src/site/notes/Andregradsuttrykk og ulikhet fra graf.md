---
{"aliases":[],"date":"2024-05-23","del":1,"dg-permalink":"/andregradsuttrykk-og-ulikhet-fra-graf/","dg-publish":true,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":5}],"poeng":4,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["andregradslikninger","funksjoner"],"title":"Andregradsuttrykk og ulikhet fra graf","todo":[],"permalink":"/andregradsuttrykk-og-ulikhet-fra-graf/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":1,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":5}],"poeng":4,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["andregradslikninger","funksjoner"],"title":"Andregradsuttrykk og ulikhet fra graf","todo":[]}}
---


# Andregradsuttrykk og ulikhet fra graf

Figuren viser grafen til en funksjon $f$.

![Graf til f med nullpunkter (−3, 0) og (4, 0) og toppunkt (0, 24)](/img/user/_resources/1t-v24-1-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem $f(x)$
>b) Løs ulikheten $f(x) > 12$

## Fasit

a) $\underline{\underline{f(x) = -2x^2 + 2x + 24}}$

b) $\underline{\underline{-2 < x < 3}}$

## Løsningsforslag

### a

Fra grafen leser vi av at $f$ har nullpunkter i $x = -3$ og $x = 4$, og at $f(0) = 24$.

Vi skriver $f$ på nullpunktform:

$$f(x) = a(x + 3)(x - 4)$$

Vi bruker at $f(0) = 24$ for å bestemme $a$:

$$f(0) = a \cdot (0 + 3)(0 - 4) = -12a = 24 \implies a = -2$$

Dermed er

$$f(x) = -2(x+3)(x-4) = \mathbf{-2x^2 + 2x + 24}$$

### b

Vi løser $f(x) > 12$:

$$-2x^2 + 2x + 24 > 12$$

$$-2x^2 + 2x + 12 > 0$$

Deler begge sider på $-2$ (snur ulikheten):

$$x^2 - x - 6 < 0$$

Faktoriserer venstresiden:

$$x^2 - x - 6 = (x - 3)(x + 2)$$

Produktet $(x-3)(x+2) < 0$ når de to faktorene har motsatt fortegn. Vi setter opp fortegnsskjema:

| | $x < -2$ | $x = -2$ | $-2 < x < 3$ | $x = 3$ | $x > 3$ |
|---|---|---|---|---|---|
| $x + 2$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $x - 3$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| Produkt | $+$ | $0$ | $-$ | $0$ | $+$ |

Produktet er negativt for $\mathbf{-2 < x < 3}$.
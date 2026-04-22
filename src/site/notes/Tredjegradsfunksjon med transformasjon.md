---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":8,"title":"Tredjegradsfunksjon med transformasjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/tredjegradsfunksjon-med-transformasjon/","permalink":"/tredjegradsfunksjon-med-transformasjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":8,"title":"Tredjegradsfunksjon med transformasjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Tredjegradsfunksjon med transformasjon

Funksjonen $f$ er gitt ved

$$f(x) = (x - 1)^2 \cdot (x - 4)$$

>[!oppgave]
>a) Bestem eventuelle toppunkter og bunnpunkter på grafen til $f$.
>b) Bestem eventuelle vendepunkter på grafen til $f$.
>c) Lag en skisse av grafen til $f$.

Funksjonen $g$ er gitt ved

$$g(x) = -2 \cdot f(x) + 3$$

>[!oppgave]
>d) Bestem eventuelle toppunkter og bunnpunkter på grafen til $g$.

## Fasit

a) Toppunkt $(1, 0)$, bunnpunkt $(3, -4)$
b) Vendepunkt $(2, -2)$
c) Se løsningsforslag
d) Toppunkt $(3, 11)$, bunnpunkt $(1, 3)$

## Løsningsforslag

### a

Vi utvider $f(x)$:

$$f(x) = (x-1)^2(x-4) = (x^2 - 2x + 1)(x - 4) = x^3 - 6x^2 + 9x - 4$$

Deriverer:

$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$$

Setter $f'(x) = 0$: $x = 1$ eller $x = 3$.

Fortegnslinje for $f'(x)$:

| $x$ | $x < 1$ | $x = 1$ | $1 < x < 3$ | $x = 3$ | $x > 3$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | stiger | | synker | | stiger |

- $f(1) = 0$: **Toppunkt** $\underline{\underline{(1, 0)}}$
- $f(3) = (3-1)^2(3-4) = 4 \cdot (-1) = -4$: **Bunnpunkt** $\underline{\underline{(3, -4)}}$

### b

$$f''(x) = 6x - 12 = 0 \implies x = 2$$

$f''$ skifter fortegn i $x = 2$ (fra negativ til positiv), så dette er et vendepunkt.

$$f(2) = (2-1)^2(2-4) = 1 \cdot (-2) = -2$$

**Vendepunkt** $\underline{\underline{(2, -2)}}$

### c

Grafen krysser $x$-aksen i $x = 1$ (dobbeltrot) og $x = 4$. Vi har toppunkt $(1, 0)$, bunnpunkt $(3, -4)$ og vendepunkt $(2, -2)$.

### d

Siden $g(x) = -2 \cdot f(x) + 3$, er grafen til $g$ en speiling av $f$ om $x$-aksen, strukket med faktor 2, og flyttet 3 opp. De stasjonære punktene har samme $x$-verdier:

- $f$ har toppunkt i $x = 1 \implies g$ har **bunnpunkt**: $g(1) = -2 \cdot 0 + 3 = 3$. Bunnpunkt $\underline{\underline{(1, 3)}}$
- $f$ har bunnpunkt i $x = 3 \implies g$ har **toppunkt**: $g(3) = -2 \cdot (-4) + 3 = 11$. Toppunkt $\underline{\underline{(3, 11)}}$

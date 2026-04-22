---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":6,"title":"Tredjegradsfunksjon med vendetangent","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/tredjegradsfunksjon-med-vendetangent/","permalink":"/tredjegradsfunksjon-med-vendetangent/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":6,"title":"Tredjegradsfunksjon med vendetangent","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Tredjegradsfunksjon med vendetangent

Funksjonen $f$ er gitt ved

$$f(x) = x^3 - 12x - 16$$

>[!oppgave]
>a) Bestem koordinatene til toppunktet og bunnpunktet på grafen til $f$.
>b) Bestem koordinatene til vendepunktet og en likning for vendetangenten til grafen til $f$.
>c) Lag en skisse av grafen til $f$ sammen med vendetangenten.

## Fasit

a) Toppunkt $(-2, 0)$, bunnpunkt $(2, -32)$
b) Vendepunkt $(0, -16)$, vendetangent $y = -12x - 16$
c) Skisse

## Løsningsforslag

### a

$$f(x) = x^3 - 12x - 16$$

$$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$$

Vi setter $f'(x) = 0$:

$$x = -2 \quad \text{eller} \quad x = 2$$

Vi bruker andrederiverten til å klassifisere:

$$f''(x) = 6x$$

- $f''(-2) = -12 < 0$: **toppunkt** i $(-2, f(-2)) = (-2, 0)$
- $f''(2) = 12 > 0$: **bunnpunkt** i $(2, f(2)) = (2, -32)$

### b

Vendepunktet er der $f''(x) = 0$:

$$6x = 0 \implies x = 0$$

$$f(0) = 0 - 0 - 16 = -16$$

**Vendepunktet er $(0, -16)$.**

Vendetangenten har stigningstall $f'(0)$:

$$f'(0) = 3 \cdot 0 - 12 = -12$$

Likningen for vendetangenten:

$$y - (-16) = -12(x - 0) \implies \underline{\underline{y = -12x - 16}}$$

### c

Grafen til $f$ har:
- Nullpunkt i $x = -2$ (dobbelt, toppunkt) og $x = 4$
- Toppunkt i $(-2, 0)$
- Bunnpunkt i $(2, -32)$
- Vendepunkt i $(0, -16)$

Vendetangenten $y = -12x - 16$ skjærer grafen i vendepunktet og har stigningstall $-12$.

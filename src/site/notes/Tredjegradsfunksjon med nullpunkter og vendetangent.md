---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","polynomdivisjon","derivasjon"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":8,"title":"Tredjegradsfunksjon med nullpunkter og vendetangent","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/tredjegradsfunksjon-med-nullpunkter-og-vendetangent/","permalink":"/tredjegradsfunksjon-med-nullpunkter-og-vendetangent/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","polynomdivisjon","derivasjon"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":2}],"poeng":8,"title":"Tredjegradsfunksjon med nullpunkter og vendetangent","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Tredjegradsfunksjon med nullpunkter og vendetangent

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 6x^2 + 3x - 10$$

>[!oppgave]
>a) Vis at $x = 1$ er et nullpunkt til $f$. Bestem de andre nullpunktene til $f$.
>b) Bestem eksakte verdier for $x$-koordinatene til eventuelle toppunkter og til eventuelle bunnpunkter på grafen til $f$.
>c) Bestem likningen til vendetangenten til $f$.
>d) Lag en skisse av grafen til $f$.

## Fasit

a) $x = 1$, $x = -2$, $x = -5$
b) Topp: $x = -2 - \sqrt{3}$, bunn: $x = -2 + \sqrt{3}$
c) $y = -9x - 18$
d) Skisse

## Løsningsforslag

### a

Vi setter inn $x = 1$:

$$f(1) = 1 + 6 + 3 - 10 = 0 \checkmark$$

Siden $x = 1$ er et nullpunkt, er $(x-1)$ en faktor. Vi utfører polynomdivisjon:

$$(x^3 + 6x^2 + 3x - 10) \div (x-1) = x^2 + 7x + 10$$

Vi faktoriserer: $x^2 + 7x + 10 = (x+2)(x+5)$.

Nullpunktene er $\underline{\underline{x = 1, \; x = -2, \; x = -5}}$.

### b

Vi deriverer:

$$f'(x) = 3x^2 + 12x + 3$$

Vi setter $f'(x) = 0$:

$$3x^2 + 12x + 3 = 0 \implies x^2 + 4x + 1 = 0$$

$$x = \frac{-4 \pm \sqrt{16 - 4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$$

Vi sjekker med $f''(x) = 6x + 12$:

- $f''(-2-\sqrt{3}) = 6(-2-\sqrt{3}) + 12 = -6\sqrt{3} < 0$ → **toppunkt** i $\underline{\underline{x = -2 - \sqrt{3}}}$
- $f''(-2+\sqrt{3}) = 6(-2+\sqrt{3}) + 12 = 6\sqrt{3} > 0$ → **bunnpunkt** i $\underline{\underline{x = -2 + \sqrt{3}}}$

### c

Vendepunktet ligger der $f''(x) = 0$:

$$6x + 12 = 0 \implies x = -2$$

$$f(-2) = (-2)^3 + 6(-2)^2 + 3(-2) - 10 = -8 + 24 - 6 - 10 = 0$$

Stigningstallet til vendetangenten:

$$f'(-2) = 3 \cdot 4 + 12 \cdot (-2) + 3 = 12 - 24 + 3 = -9$$

Vendetangenten: $y - 0 = -9(x - (-2))$, altså

$$\underline{\underline{y = -9x - 18}}$$

### d

Grafen har nullpunkter i $x = -5$, $x = -2$ og $x = 1$. Toppunkt for $x = -2-\sqrt{3} \approx -3{,}7$ og bunnpunkt for $x = -2+\sqrt{3} \approx -0{,}3$. Vendepunktet er $(-2, \, 0)$, og vendetangenten $y = -9x - 18$ går gjennom dette punktet. For store $x$ går $f(x) \to +\infty$ og for $x \to -\infty$ går $f(x) \to -\infty$.

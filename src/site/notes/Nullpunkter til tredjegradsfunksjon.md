---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["algebra","polynomdivisjon"],"fag":["1t"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":2}],"title":"Nullpunkter til tredjegradsfunksjon","status":3,"source":null,"todo":null,"poeng":2,"dg-permalink":"/nullpunkter-til-tredjegradsfunksjon/","lf-source-claude":false,"permalink":"/nullpunkter-til-tredjegradsfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["algebra","polynomdivisjon"],"fag":["1t"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":2}],"title":"Nullpunkter til tredjegradsfunksjon","status":3,"source":null,"todo":null,"poeng":2,"lf-source-claude":false}}
---


# Nullpunkter til tredjegradsfunksjon

>[!oppgave]
>Bestem nullpunktene til funksjonen gitt ved $f$
>
>$$f(x) = x^3 - 5x^2 - 8x + 12$$

## Fasit

$x = -2$, $x = 1$, $x = 6$

## Løsningsforslag
Tester $x=1$: $f(1) = 1 - 5 - 8 + 12 = 0$, så $(x-1)$ et nullpunkt, og det er en faktor i tredjegradsfunksjonen vår.

Vi utfører polynomdivisjonen:
$$
\begin{aligned}
& \,\quad \left( x^{3} -5x^{2}-8x +12 \right) : (x-1) = x^{2}-4x-12 \\
& \underline{ - \left(  x^{3} -x^{2} \right) } \\
& \quad \quad \quad -4x^{2} - 8x +12 \\
& \quad \;\;  - \underline{ \left( -4x^{2} +4x\right)  }\\
& \quad \;\quad \quad \quad \quad - 12x+12 \\
& \quad \;\;\; \quad \quad \underline{- \left(  - 12x+12  \right)} \\
& \quad \quad \quad \quad \quad \quad \quad \quad \quad 0
\end{aligned}
$$

Vi kan altså skrive om $f$ som $f(x) = (x-1)(x^2 - 4x - 12)$.

Vi prøver heltallsmetoden på andregradsuttrykket og ser at $-6$ og $+2$ passer slik at
$$
(x^2 - 4x - 12)=(x-6)(x+2)
$$
Dermed har vi funnet to nye nullpunkter: $x=6$ og $x=-2$.

**Nullpunktene er $\underline{\underline{x = -2}}$, $\underline{\underline{x = 1}}$ og $\underline{\underline{x = 6}}$.**

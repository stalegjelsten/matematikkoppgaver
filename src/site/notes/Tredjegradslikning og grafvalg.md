---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/tredjegradslikning-og-grafvalg/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":4,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["likninger","polynomdivisjon","funksjoner"],"title":"Tredjegradslikning og grafvalg","todo":[],"permalink":"/tredjegradslikning-og-grafvalg/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":4,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["likninger","polynomdivisjon","funksjoner"],"title":"Tredjegradslikning og grafvalg","todo":[]}}
---


# Tredjegradslikning og grafvalg

>[!oppgave]
>a) Løs likningen
>
>$$x^3 - 7x^2 - 10x + 16 = 0$$

Funksjonen $f$ er gitt ved

$$f(x) = x^3 - 7x^2 - 10x + 16$$

>[!oppgave]
>b) Hvilken av grafene nedenfor kan være grafen til $f$? Husk å begrunne svaret.

![Fire grafer A, B, C og D](/img/user/_resources/1t-v25-1-4.jpeg){width=60%}

## Fasit

a) $\underline{\underline{x = -2, \quad x = 1, \quad x = 8}}$

b) **Graf C**

## Løsningsforslag

### a

Vi prøver $x = 1$:

$$1^3 - 7 \cdot 1^2 - 10 \cdot 1 + 16 = 1 - 7 - 10 + 16 = 0 \checkmark$$

Siden $x = 1$ er en rot, er $(x - 1)$ en faktor. Vi utfører polynomdivisjon:

$$\frac{x^3 - 7x^2 - 10x + 16}{x - 1}$$

$$\begin{array}{r}
x^2 - 6x - 16 \\[-4pt]
\hline
x - 1 \;\Big)\; x^3 - 7x^2 - 10x + 16 \\
x^3 - x^2 \\[-4pt]
\hline
-6x^2 - 10x \\
-6x^2 + 6x \\[-4pt]
\hline
-16x + 16 \\
-16x + 16 \\[-4pt]
\hline
0
\end{array}$$

Vi har nå:

$$x^3 - 7x^2 - 10x + 16 = (x - 1)(x^2 - 6x - 16)$$

Vi løser $x^2 - 6x - 16 = 0$ med abc-formelen:

$$x = \frac{6 \pm \sqrt{36 + 64}}{2} = \frac{6 \pm \sqrt{100}}{2} = \frac{6 \pm 10}{2}$$

$$x = \frac{6 + 10}{2} = 8 \qquad \text{eller} \qquad x = \frac{6 - 10}{2} = -2$$

**Løsningene er $x = -2$, $x = 1$ og $x = 8$.**

### b

Vi bruker egenskapene til $f(x) = x^3 - 7x^2 - 10x + 16$ for å velge riktig graf:

- **Ledende koeffisient positiv** ($+x^3$): grafen går mot $-\infty$ når $x \to -\infty$ og mot $+\infty$ når $x \to +\infty$. Det utelukker **A** og **B** (som begge har negativ ledende koeffisient).
- **Tre nullpunkter** ved $x = -2$, $x = 1$ og $x = 8$: én negativ rot og to positive røtter.
- **$y$-skjæring:** $f(0) = 16 > 0$.
- **Lokalt toppunkt** mellom røttene $-2$ og $1$ ligger ved en negativ $x$-verdi (til venstre for $y$-aksen). Lokalt bunnpunkt ligger mellom røttene $1$ og $8$, altså ved en positiv $x$-verdi (til høyre for $y$-aksen).

Graf **D** har lokalt toppunkt til høyre for $y$-aksen og lokalt bunnpunkt til venstre – det stemmer ikke med $f$.

Graf **C** har:

- positiv ledende koeffisient (riktig retning)
- én negativ rot (ca. $x = -2$), lokalt toppunkt like til venstre for $y$-aksen
- positiv $y$-skjæring
- en rot ved liten positiv $x$ (ca. $x = 1$), lokalt bunnpunkt lengre til høyre
- en rot ved større positiv $x$ (ca. $x = 8$)

Dette stemmer med $f$. **Graf C er riktig.**
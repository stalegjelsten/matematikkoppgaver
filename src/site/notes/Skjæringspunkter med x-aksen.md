---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/skjaeringspunkter-med-x-aksen/","dg-publish":true,"eksamen":"h23","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-29","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["faktorisering","polynomdivisjon","røtter"],"title":"Skjæringspunkter med x-aksen","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Finne nullpunktene til $f(x)=x^3+2x^2-5x-6$ ved å gjette én rot, polynomdividere og faktorisere det resterende andregradsuttrykket.","permalink":"/skjaeringspunkter-med-x-aksen/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-29","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["faktorisering","polynomdivisjon","røtter"],"title":"Skjæringspunkter med x-aksen","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Finne nullpunktene til $f(x)=x^3+2x^2-5x-6$ ved å gjette én rot, polynomdividere og faktorisere det resterende andregradsuttrykket."}}
---


# Skjæringspunkter med x-aksen

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 2x^2 - 5x - 6$$

>[!oppgave]
>I hvilke punkter skjærer grafen til funksjonen $x$-aksen?

## Fasit

**Skjæringspunkter med $x$-aksen:** $(-3, 0)$, $(-1, 0)$ og $(2, 0)$

## Løsningsforslag

Grafen skjærer $x$-aksen der $f(x) = 0$, altså der

$$x^3 + 2x^2 - 5x - 6 = 0$$

Vi prøver heltallsrøtter som er delere av konstantleddet $6$: $\pm 1, \pm 2, \pm 3, \pm 6$.

$$f(-1) = (-1)^3 + 2(-1)^2 - 5(-1) - 6 = -1 + 2 + 5 - 6 = 0 \checkmark$$

Siden $x = -1$ er en rot, er $(x + 1)$ en faktor. Vi utfører polynomdivisjon:

$$\require{enclose}
\begin{array}{r}
x^2 + x - 6 \\[-3pt]
x+1 \enclose{longdiv}{x^3 + 2x^2 - 5x - 6} \\[-3pt]
\underline{-(x^3 + x^2)} \phantom{{}-5x-6} \\[-3pt]
x^2 - 5x \phantom{{}-6} \\[-3pt]
\underline{-(x^2 + x)} \phantom{{}-6} \\[-3pt]
-6x - 6 \\[-3pt]
\underline{-(-6x - 6)} \\[-3pt]
0
\end{array}$$

Vi kan altså skrive

$$x^3 + 2x^2 - 5x - 6 = (x + 1)(x^2 + x - 6)$$

Andregradsuttrykket $x^2 + x - 6$ faktoriserer vi:

$$x = \frac{-1 \pm \sqrt{1^2 - 4 \cdot 1 \cdot (-6)}}{2 \cdot 1} = \frac{-1 \pm \sqrt{25}}{2} = \frac{-1 \pm 5}{2}$$

$$x = \frac{-1 + 5}{2} = 2 \qquad \text{eller} \qquad x = \frac{-1 - 5}{2} = -3$$

Dermed er

$$x^3 + 2x^2 - 5x - 6 = (x + 1)(x - 2)(x + 3)$$

og likningen $f(x) = 0$ har løsningene $x = -1$, $x = 2$ og $x = -3$.

**Grafen skjærer $x$-aksen i punktene $\underline{\underline{(-3, 0)}}$, $\underline{\underline{(-1, 0)}}$ og $\underline{\underline{(2, 0)}}$.**
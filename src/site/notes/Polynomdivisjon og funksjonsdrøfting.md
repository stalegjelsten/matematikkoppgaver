---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":10,"title":"Polynomdivisjon og funksjonsdrøfting","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynomdivisjon-og-funksjonsdrofting/","permalink":"/polynomdivisjon-og-funksjonsdrofting/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":10,"title":"Polynomdivisjon og funksjonsdrøfting","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynomdivisjon og funksjonsdrøfting

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 3x^2 - 4$$

>[!oppgave]
>a) Bruk blant annet polynomdivisjon til å vise at $f(x) = (x + 2)^2 \cdot (x - 1)$.
>b) Bestem eventuelle toppunkt og bunnpunkt på grafen til $f$.
>c) Bestem likningen til vendetangenten til grafen til $f$.
>d) Lag en skisse av grafen til $f$.
>e) Løs likningen $(\ln x)^3 + 3(\ln x)^2 - 4 = 0$.

## Fasit

a) Se løsningsforslag
b) Toppunkt $(-2, 0)$, bunnpunkt $(0, -4)$
c) $y = -3x - 5$
d) Se løsningsforslag
e) $x = e^{-2}$ eller $x = e$

## Løsningsforslag

### a

Vi sjekker at $x = 1$ er en nullpunktsverdi: $f(1) = 1 + 3 - 4 = 0$ ✓

Vi utfører polynomdivisjon $(x^3 + 3x^2 - 4) : (x - 1)$:

$$x^3 + 3x^2 - 4 = (x - 1)(x^2 + 4x + 4)$$

Vi faktoriserer $x^2 + 4x + 4 = (x + 2)^2$, slik at

$$f(x) = (x + 2)^2(x - 1)$$

### b

$$f'(x) = 3x^2 + 6x = 3x(x + 2)$$

$f'(x) = 0$ gir $x = 0$ eller $x = -2$.

$f''(x) = 6x + 6$:

- $f''(-2) = -6 < 0$: **Toppunkt** $(-2, f(-2)) = \underline{\underline{(-2, 0)}}$
- $f''(0) = 6 > 0$: **Bunnpunkt** $(0, f(0)) = \underline{\underline{(0, -4)}}$

### c

Vendepunktet er der $f''(x) = 0$: $6x + 6 = 0 \implies x = -1$.

$f(-1) = -1 + 3 - 4 = -2$ og $f'(-1) = 3 - 6 = -3$.

Vendetangenten:

$$\underline{\underline{y = -3(x - (-1)) + (-2) = -3x - 5}}$$

### d

Grafen har dobbeltrot i $x = -2$ (tangerer $x$-aksen), nullpunkt i $x = 1$, toppunkt $(-2, 0)$, bunnpunkt $(0, -4)$ og vendepunkt $(-1, -2)$.

### e

Vi setter $u = \ln x$:

$$(\ln x)^3 + 3(\ln x)^2 - 4 = 0 \implies u^3 + 3u^2 - 4 = 0$$

Dette er likningen $f(u) = 0$, som fra oppgave a) gir $(u + 2)^2(u - 1) = 0$, altså $u = -2$ eller $u = 1$.

$$\ln x = -2 \implies x = e^{-2} \qquad \text{eller} \qquad \ln x = 1 \implies x = e$$

$$\underline{\underline{x = e^{-2} \approx 0{,}135 \quad \text{eller} \quad x = e \approx 2{,}718}}$$

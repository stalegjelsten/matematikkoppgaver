---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["polynomdivisjon","faktorisering","likninger"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Polynomdivisjon og eksponentiallikning","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/polynomdivisjon-og-eksponentiallikning/","permalink":"/polynomdivisjon-og-eksponentiallikning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["polynomdivisjon","faktorisering","likninger"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":6,"title":"Polynomdivisjon og eksponentiallikning","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Polynomdivisjon og eksponentiallikning

Funksjonen $f$ er gitt ved

$$f(x) = -2x^3 + 6x^2 - 8$$

>[!oppgave]
>a) Bruk blant annet polynomdivisjon til å vise at
>$$f(x) = -2(x+1)(x-2)^2$$
>b) Løs ulikheten $f(x) \leq 0$.
>c) Løs likningen
>$$e^{3x} - 3e^{2x} + 4 = 0$$

## Fasit

a) Vis med polynomdivisjon
b) $x \geq -1$, dvs. $x \in [-1, \,\to \rangle$
c) $x = \ln 2$

## Løsningsforslag

### a

Vi prøver å finne et nullpunkt ved innsetting. Vi prøver $x = -1$:

$$f(-1) = -2(-1)^3 + 6(-1)^2 - 8 = 2 + 6 - 8 = 0$$

Så $(x+1)$ er en faktor. Vi utfører polynomdivisjon:

$$(-2x^3 + 6x^2 - 8) \div (x+1) = -2x^2 + 8x - 8$$

Vi faktoriserer kvotienten:

$$-2x^2 + 8x - 8 = -2(x^2 - 4x + 4) = -2(x-2)^2$$

Dermed er

$$f(x) = (x+1) \cdot (-2)(x-2)^2 = -2(x+1)(x-2)^2$$

### b

Vi skal løse $f(x) \leq 0$, altså $-2(x+1)(x-2)^2 \leq 0$.

Nullpunktene er $x = -1$ og $x = 2$. Faktoren $(x-2)^2 \geq 0$ alltid, og $-2 < 0$, så fortegnet til $f(x)$ bestemmes av $(x+1)$:

- For $x < -1$: $(x+1) < 0$, så $f(x) = -2 \cdot (\text{negativ}) \cdot (\text{positiv}) > 0$
- For $x > -1$: $(x+1) > 0$, so $f(x) = -2 \cdot (\text{positiv}) \cdot (\text{positiv}) < 0$ (unntatt $x=2$ der $f=0$)

Løsningen er $\underline{\underline{x \geq -1}}$.

### c

Vi skal løse $e^{3x} - 3e^{2x} + 4 = 0$.

Vi substituerer $u = e^x$ (der $u > 0$):

$$u^3 - 3u^2 + 4 = 0$$

Vi prøver $u = 2$: $8 - 12 + 4 = 0$ ✓

Vi utfører polynomdivisjon:

$$(u^3 - 3u^2 + 4) \div (u-2) = u^2 - u - 2 = (u-2)(u+1)$$

Altså $u^3 - 3u^2 + 4 = (u-2)^2(u+1) = 0$, som gir $u = 2$ eller $u = -1$.

Siden $u = e^x > 0$, forkaster vi $u = -1$.

Fra $e^x = 2$ får vi $\underline{\underline{x = \ln 2}}$.

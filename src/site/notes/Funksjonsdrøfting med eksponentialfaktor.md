---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Funksjonsdrøfting med eksponentialfaktor","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/funksjonsdrofting-med-eksponentialfaktor/","permalink":"/funksjonsdrofting-med-eksponentialfaktor/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","derivasjon"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Funksjonsdrøfting med eksponentialfaktor","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Funksjonsdrøfting med eksponentialfaktor

Funksjonen $f$ er gitt ved

$$f(x) = 4(x^2 - 5x + 4) \cdot e^{-\frac{1}{2}x}$$

>[!oppgave]
>a) Bestem nullpunktene til $f$.
>b) Vis at $f'(x) = -2(x^2 - 9x + 14) \cdot e^{-\frac{1}{2}x}$.

Nedenfor ser du fire grafer. En av dem er grafen til $f$.

![Fire grafer](/img/user/_resources/s2-h22-1-7.jpeg){width=80%}

>[!oppgave]
>c) Avgjør hvilken av grafene som er grafen til $f$. Husk å begrunne svaret.

## Fasit

a) $x = 1$ og $x = 4$
b) Vis med produktregelen
c) Graf B (begrunnes med nullpunkter, ekstrempunkter og fortegn)

## Løsningsforslag

### a

Nullpunktene finner vi ved å løse $f(x) = 0$:

$$4(x^2 - 5x + 4) \cdot e^{-\frac{1}{2}x} = 0$$

Siden $e^{-\frac{1}{2}x} > 0$ for alle $x$, må

$$x^2 - 5x + 4 = 0$$

Vi faktoriserer: $(x-1)(x-4) = 0$, som gir nullpunktene $\underline{\underline{x = 1}}$ og $\underline{\underline{x = 4}}$.

### b

Vi bruker produktregelen med $u = 4(x^2 - 5x + 4)$ og $v = e^{-\frac{1}{2}x}$:

$$u' = 4(2x - 5) = 8x - 20$$

$$v' = -\frac{1}{2}e^{-\frac{1}{2}x}$$

$$f'(x) = u'v + uv' = (8x-20) \cdot e^{-\frac{1}{2}x} + 4(x^2-5x+4) \cdot \left(-\frac{1}{2}\right)e^{-\frac{1}{2}x}$$

$$= e^{-\frac{1}{2}x}\left[8x - 20 - 2(x^2 - 5x + 4)\right]$$

$$= e^{-\frac{1}{2}x}\left[8x - 20 - 2x^2 + 10x - 8\right]$$

$$= e^{-\frac{1}{2}x}\left[-2x^2 + 18x - 28\right]$$

$$= -2(x^2 - 9x + 14) \cdot e^{-\frac{1}{2}x}$$

### c

Vi bruker informasjonen fra a) og b) til å identifisere grafen.

**Nullpunkter:** $x = 1$ og $x = 4$.

**Ekstrempunkter:** $f'(x) = 0$ når $x^2 - 9x + 14 = 0$, altså $(x-2)(x-7) = 0$, som gir $x = 2$ og $x = 7$.

**Fortegn til $f$:** For $x < 1$: $f > 0$ (begge faktorer i $x^2-5x+4$ negative). For $1 < x < 4$: $f < 0$. For $x > 4$: $f > 0$.

**Fortegn til $f'$:** $f'(x) = -2(x-2)(x-7) \cdot e^{-\frac{1}{2}x}$, som gir $f' > 0$ for $2 < x < 7$ (stigende) og $f' < 0$ ellers.

Altså har $f$ et lokalt minimum i $x = 2$ (i området der $f < 0$) og et lokalt maksimum i $x = 7$ (der $f > 0$). Sammen med nullpunktene $x = 1$ og $x = 4$ og at $f(x) \to 0$ for $x \to \infty$, er dette **graf B**.

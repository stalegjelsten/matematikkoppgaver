---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","funksjonsdrøfting"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":6,"title":"Logaritmefunksjon ln x delt på x","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/logaritmefunksjon-ln-x-delt-pa-x/","permalink":"/logaritmefunksjon-ln-x-delt-pa-x/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","funksjonsdrøfting"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":6,"title":"Logaritmefunksjon ln x delt på x","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Logaritmefunksjon ln x delt på x

Funksjonen $f$ er gitt ved

$$f(x) = \frac{\ln x}{x}$$

>[!oppgave]
>a) Vis at $f'(x) = \dfrac{1 - \ln x}{x^2}$.
>b) Bestem eventuelle toppunkt og bunnpunkt på grafen til $f$.

Funksjonen $g$ er gitt ved

$$g(x) = 3 - 6e \cdot f(x)$$

>[!oppgave]
>c) Bestem eventuelle toppunkt og bunnpunkt på grafen til $g$.

## Fasit

a) Se løsningsforslag
b) Toppunkt $(e, e^{-1})$
c) Bunnpunkt $(e, -3)$

## Løsningsforslag

### a

Vi deriverer $f(x) = \dfrac{\ln x}{x}$ med kvotientregelen:

$$f'(x) = \frac{\frac{1}{x} \cdot x - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$$

### b

Vi setter $f'(x) = 0$:

$$\frac{1 - \ln x}{x^2} = 0 \quad \Rightarrow \quad 1 - \ln x = 0 \quad \Rightarrow \quad \ln x = 1 \quad \Rightarrow \quad x = e$$

Siden $x^2 > 0$ for alle $x > 0$, bestemmes fortegnet til $f'(x)$ av telleren $1 - \ln x$:

- For $x < e$: $\ln x < 1$, så $f'(x) > 0$ (voksende)
- For $x > e$: $\ln x > 1$, så $f'(x) < 0$ (avtagende)

$f$ skifter fra voksende til avtagende, altså har vi et toppunkt:

$$f(e) = \frac{\ln e}{e} = \frac{1}{e}$$

$$\underline{\underline{\text{Toppunkt: } \left(e{,}\ \frac{1}{e}\right) \approx (2{,}72{,}\ 0{,}37)}}$$

Det er ingen bunnpunkter.

### c

$$g(x) = 3 - 6e \cdot f(x) = 3 - \frac{6e \cdot \ln x}{x}$$

Vi deriverer:

$$g'(x) = -6e \cdot f'(x) = -6e \cdot \frac{1 - \ln x}{x^2}$$

$g'(x) = 0$ gir $1 - \ln x = 0$, altså $x = e$ (samme som for $f$).

Fortegnsanalyse: Siden $-6e < 0$, snur $g'$ fortegnet sammenlignet med $f'$:

- For $x < e$: $g'(x) < 0$ (avtagende)
- For $x > e$: $g'(x) > 0$ (voksende)

$g$ skifter fra avtagende til voksende, altså har vi et bunnpunkt:

$$g(e) = 3 - 6e \cdot \frac{1}{e} = 3 - 6 = -3$$

$$\underline{\underline{\text{Bunnpunkt: } (e, -3) \approx (2{,}72{,}\ {-3})}}$$

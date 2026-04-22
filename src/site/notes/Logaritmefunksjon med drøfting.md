---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer","funksjonsdrøfting"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":7,"title":"Logaritmefunksjon med drøfting","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/logaritmefunksjon-med-drofting/","permalink":"/logaritmefunksjon-med-drofting/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer","funksjonsdrøfting"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":7,"title":"Logaritmefunksjon med drøfting","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Logaritmefunksjon med drøfting

Funksjonen $f$ er gitt ved

$$f(x) = (\ln x)^2 - 2\ln x - 3, \quad D_f = \langle 0, \to \rangle$$

>[!oppgave]
>a) Bestem nullpunktene til $f$.
>b) Vis at $f'(x) = \dfrac{2\ln x - 2}{x}$ og bestem eventuelle toppunkter og bunnpunkter på grafen til $f$.
>c) Bestem eventuelle vendepunkter på grafen til $f$.
>d) Lag en skisse av grafen til $f$.

Disse potensene av $e$ kan komme til nytte når du skal skissere grafen:

$e^{-1} \approx 0{,}4$, $e^1 \approx 2{,}7$, $e^2 \approx 7{,}4$ og $e^3 \approx 20{,}1$

## Fasit

a) $x = e^{-1} \approx 0{,}37$ og $x = e^3 \approx 20{,}1$
b) Bunnpunkt $(e, -4)$
c) Vendepunkt $(e^2, -3)$
d) Se løsningsforslag

## Løsningsforslag

### a

Vi setter $f(x) = 0$:

$$(\ln x)^2 - 2\ln x - 3 = 0$$

Vi substituerer $u = \ln x$:

$$u^2 - 2u - 3 = 0 \quad \Rightarrow \quad (u - 3)(u + 1) = 0$$

$$u = 3 \quad \text{eller} \quad u = -1$$

$$\ln x = 3 \quad \Rightarrow \quad x = e^3 \approx 20{,}1$$

$$\ln x = -1 \quad \Rightarrow \quad x = e^{-1} \approx 0{,}37$$

$$\underline{\underline{x = e^{-1} \approx 0{,}37 \quad \text{og} \quad x = e^3 \approx 20{,}1}}$$

### b

Vi deriverer med kjerneregelen. La $u = \ln x$, da er $f = u^2 - 2u - 3$:

$$f'(x) = (2\ln x - 2) \cdot \frac{1}{x} = \frac{2\ln x - 2}{x}$$

Vi setter $f'(x) = 0$:

$$2\ln x - 2 = 0 \quad \Rightarrow \quad \ln x = 1 \quad \Rightarrow \quad x = e$$

Siden $x > 0$ er nevneren alltid positiv, og fortegnet til $f'(x)$ bestemmes av telleren $2\ln x - 2$:

- For $x < e$: $\ln x < 1$, så $f'(x) < 0$
- For $x > e$: $\ln x > 1$, så $f'(x) > 0$

Funksjonen skifter fra avtagende til voksende, altså har vi et bunnpunkt.

$$f(e) = (\ln e)^2 - 2\ln e - 3 = 1 - 2 - 3 = -4$$

$$\underline{\underline{\text{Bunnpunkt: } (e, -4) \approx (2{,}7{,}\ {-4})}}$$

### c

Vi deriverer $f'(x) = \dfrac{2\ln x - 2}{x}$ med kvotientregelen:

$$f''(x) = \frac{\frac{2}{x} \cdot x - (2\ln x - 2) \cdot 1}{x^2} = \frac{2 - 2\ln x + 2}{x^2} = \frac{4 - 2\ln x}{x^2}$$

Vi setter $f''(x) = 0$:

$$4 - 2\ln x = 0 \quad \Rightarrow \quad \ln x = 2 \quad \Rightarrow \quad x = e^2 \approx 7{,}4$$

Vi sjekker fortegnsskifte i $f''$: telleren $4 - 2\ln x$ skifter fra positiv til negativ i $x = e^2$, altså har vi et vendepunkt.

$$f(e^2) = (\ln e^2)^2 - 2\ln e^2 - 3 = 4 - 4 - 3 = -3$$

$$\underline{\underline{\text{Vendepunkt: } (e^2, -3) \approx (7{,}4{,}\ {-3})}}$$

### d

![Skisse av grafen til f](/img/user/_resources/s2-v21-1-6.png)

Viktige punkter i skissen:

| Punkt | $x$ | $f(x)$ |
|---|---|---|
| Nullpunkt | $e^{-1} \approx 0{,}4$ | $0$ |
| Bunnpunkt | $e \approx 2{,}7$ | $-4$ |
| Vendepunkt | $e^2 \approx 7{,}4$ | $-3$ |
| Nullpunkt | $e^3 \approx 20{,}1$ | $0$ |

Grafen nærmer seg $+\infty$ når $x \to 0^+$ og når $x \to \infty$.

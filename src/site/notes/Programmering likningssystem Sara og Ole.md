---
{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","likningssystem"],"fag":["2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":4,"title":"Programmering likningssystem Sara og Ole","status":1,"source":null,"todo":null,"dg-permalink":"/programmering-likningssystem-sara-og-ole/","lf-source-claude":true,"permalink":"/programmering-likningssystem-sara-og-ole/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"temaer":["programmering","likningssystem"],"fag":["2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":4,"title":"Programmering likningssystem Sara og Ole","status":1,"source":null,"todo":null,"lf-source-claude":true}}
---


# Programmering likningssystem Sara og Ole

Sara og Ole jobber med å løse likningssystemer.

For å prøve å løse likningssystemet

$$\begin{bmatrix} 4x = -12 + y \\ 2x + 24 - y = 2x^2 \end{bmatrix}$$

har Sara laget programmet nedenfor.

```python ln
def f(x):
    return 4 * x + 12

def g(x):
    return -2 * x ** 2 + 2 * x + 24

for x in range(-5, 5):

    if f(x) == g(x):
        print("Jeg har funnet løsningen x =", x ,"og y =", f(x))
```

```
Jeg har funnet løsningen x = -3 og y = 0
Jeg har funnet løsningen x = 2 og y = 20
```

>[!oppgave]
>a) Forklar strategien Sara har brukt for å løse likningssystemet.

Ole arbeider med likningssystemet

$$\begin{bmatrix} 2x = y - 8 \\ x^2 + x - 48 = y \end{bmatrix}$$

>[!oppgave]
>b) Hvilke endringer må Ole gjøre i programmet til Sara for å finne løsningene på likningssystemet han arbeider med?

## Fasit

a) Sara omformer likningene til $y = f(x)$ og $y = g(x)$ og sjekker for hvilke heltalls-$x$ det gjelder at $f(x) = g(x)$.

b) Endre `f(x)` til `2 * x + 8`, `g(x)` til `x ** 2 + x - 48`, og utvide `range` til f.eks. `range(-10, 10)`. Løsningene er $(-7, -6)$ og $(8, 24)$.

## Løsningsforslag

### a

Sara skriver om begge likningene slik at $y$ står alene:

- $4x = -12 + y \implies y = 4x + 12$ — dette er `f(x)` i programmet
- $2x + 24 - y = 2x^2 \implies y = -2x^2 + 2x + 24$ — dette er `g(x)` i programmet

Strategien er at der grafene til $f$ og $g$ krysser hverandre, er $f(x) = g(x)$, og $x$- og $y$-verdien gir løsningen av likningssystemet.

Programmet tester alle heltallsverdier av $x$ fra $-5$ til $4$ og sjekker om $f(x) = g(x)$. Når det stemmer, skrives løsningen ut.

### b

Ole må gjøre følgende endringer:

1. **Endre `f(x)`** til sin første likning løst for $y$:
   $2x = y - 8 \implies y = 2x + 8$, altså `return 2 * x + 8`

2. **Endre `g(x)`** til sin andre likning:
   $y = x^2 + x - 48$, altså `return x ** 2 + x - 48`

3. **Utvide `range`** slik at løsningene fanges opp, for eksempel `range(-10, 10)`

Det endrede programmet:

```python ln
def f(x):
    return 2 * x + 8

def g(x):
    return x ** 2 + x - 48

for x in range(-10, 10):

    if f(x) == g(x):
        print("Jeg har funnet løsningen x =", x ,"og y =", f(x))
```

```
Jeg har funnet løsningen x = -7 og y = -6
Jeg har funnet løsningen x = 8 og y = 24
```

**Løsningene er $(x, y) = (-7, -6)$ og $(x, y) = (8, 24)$.**

---
{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","likningssystem"],"fag":["2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":4,"title":"Programmering likningssystem Sara og Ole","status":1,"source":null,"todo":null,"permalink":"/programmering-likningssystem-sara-og-ole/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"temaer":["programmering","likningssystem"],"fag":["2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":4,"title":"Programmering likningssystem Sara og Ole","status":1,"source":null,"todo":null,"permalink":"/programmering-likningssystem-sara-og-ole/"}}
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

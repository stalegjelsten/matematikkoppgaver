---
{"aliases":[],"date":"2023-05-23","del":1,"dg-permalink":"/optimering-av-rektangelareal-og-program/","dg-publish":true,"eksamen":"v23","fag":["r1"],"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["optimering","programmering","derivasjon"],"title":"Optimering av rektangelareal og program","todo":["fasit"],"permalink":"/optimering-av-rektangelareal-og-program/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-23","del":1,"eksamen":"v23","fag":["r1"],"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["optimering","programmering","derivasjon"],"title":"Optimering av rektangelareal og program","todo":["fasit"]}}
---


# Optimering av rektangelareal og program

En elev har fått følgende oppgave:

Funksjonen $f$ er gitt ved

$$f(x) = (x^2 - 9)^4, \quad x \in \langle 0, 3 \rangle$$

Et rektangel $R$ har hjørner i $(0, 0)$, $(t, 0)$, $(t, f(t))$ og $(0, f(t))$.

Bestem den verdien av $t$ som gjør at $R$ har størst areal.

![Figur](/img/user/_resources/r1-v23-1-4-rektangel.jpeg){width=40%}

For å løse oppgaven har eleven laget følgende program:

```python ln
def A(x):
    return x*(x**2-9)**4

t = 0
d = 0.01

while A(t) < A(t+d):
    t = t + d

print(t)
```

>[!oppgave]
>a) Forklar strategien eleven har brukt for å løse oppgaven.
>b) Løs oppgaven eleven har fått.

## Fasit



## Løsningsforslag
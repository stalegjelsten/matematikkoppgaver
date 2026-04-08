---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-04-01","aliases":[],"dg-publish":true,"temaer":["optimering","programmering","derivasjon"],"fag":["r1"],"eksamen":"v23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":4}],"poeng":null,"title":"Optimering av rektangelareal og program","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/optimering-av-rektangelareal-og-program/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-04-01","aliases":[],"temaer":["optimering","programmering","derivasjon"],"fag":["r1"],"eksamen":"v23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":4}],"poeng":null,"title":"Optimering av rektangelareal og program","status":0,"source":null,"todo":["fasit","løsningsforslag"]}}
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

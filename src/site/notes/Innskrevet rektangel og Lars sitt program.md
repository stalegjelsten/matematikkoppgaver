---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/innskrevet-rektangel-og-lars-sitt-program/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":7},{"del":2,"fag":"r1","oppgave":6}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["derivasjon","programmering","funksjonsdrøfting"],"title":"Innskrevet rektangel og Lars sitt program","todo":["løsningsforslag"],"permalink":"/innskrevet-rektangel-og-lars-sitt-program/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":7},{"del":2,"fag":"r1","oppgave":6}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["derivasjon","programmering","funksjonsdrøfting"],"title":"Innskrevet rektangel og Lars sitt program","todo":["løsningsforslag"]}}
---


# Innskrevet rektangel og Lars sitt program

En funksjon $f$ er gitt ved

$$f(x) = -x^2 + 4, \quad 0 \le x \le 2.$$

Lars har tegnet grafen til $f$ med et innskrevet rektangel $ABCD$. Lars har også skrevet et program.

<!-- two-column start left-width=40% -->

![Grafen til $f(x)$](/img/user/_resources/s1-v24-2-7.jpeg){width=90%}

---

```python ln
def f(x):
    return -x**2 + 4

def areal(x):
    return x*f(x)

h = 0.0001
def der_areal(x):
    return (areal(x + h) - areal(x))/h

x = 0
dx = 0.01
while der_areal(x + dx) > 0:
    x = x + dx

print(areal(x))
```

<!-- two-column stop -->



>[!oppgave]
>a) Forklar hva Lars prøver å finne ut med programmet. Hva blir svaret hvis man kjører programmet?
>b) Hvilken strategi bruker Lars i programmet sitt? Vil strategien fungere uavhengig av hvilken funksjon $f$ er?

## Fasit
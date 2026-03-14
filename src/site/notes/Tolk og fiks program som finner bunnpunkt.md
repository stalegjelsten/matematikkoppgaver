---
{"tags":["oppgave"],"temaer":["programmering","derivasjon"],"aliases":[],"del":1,"oppgave":4,"fag":["r1"],"eksamen":"h23","dg-publish":true,"title":"Tolk og fiks program som finner bunnpunkt","date":"2023-11-15","modified":"2023-11-15","permalink":"/tolk-og-fiks-program-som-finner-bunnpunkt/","dgPassFrontmatter":true}
---


# Tolk og fiks program som finner bunnpunkt

Funksjonen $f$ er gitt ved

$$
f(x)=2x^{2}-9x-2
$$

Egil ønsker å lage et program som regner ut koordinatene til bunnpunktet på grafen til $f$. Han har skrevet koden nedenfor.

```python
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 1
    
print("Bunnpunktet er", (a, f(a)))
```

Programmet gir utskriften `Bunnpunktet er (3, -11)`

> **a)** Forklar hvilken strategi Egil har brukt.

Svaret han får, er ikke riktig.

> **b)** Foreslå en endring i koden som vil gi Egil et riktigere svar.

>[!question]- Fasit
> b) Endre `a = a + 1` til `a = a + 0.01`
>

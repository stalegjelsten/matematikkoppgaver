---
{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"dg-publish":true,"temaer":["programmering"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Ukjent program h23","source":null,"todo":null,"status":3,"permalink":"/ukjent-program-h23/","dgPassFrontmatter":true}
---


# Ukjent program h23


En elev har skrevet koden nedenfor

```python ln
N = 1000
start = -2
slutt = 2
dx = (slutt - start)/N

def f(x):
   return x**2-1

S = 0
for i in range(N):
    xi = start + i*dx
    S = S + abs(f(xi))*dx  # abs(f(x)) gir absoluttverdien til f(x)

print(S)
```

>[!oppgave]
>a) Forklar hva eleven ønsker å regne ut med denne koden.
>b) Finn ved regning den verdien eleven ønsker å bestemme.

>[!question]- Fasit
> 
>

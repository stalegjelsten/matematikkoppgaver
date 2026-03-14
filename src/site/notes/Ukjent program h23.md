---
{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"dg-publish":true,"temaer":["programmering"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":"4","title":"Ukjent program h23","source":null,"todo":null,"permalink":"/ukjent-program-h23/","dgPassFrontmatter":true}
---


# Ukjent program h23


En elev har skrevet koden nedenfor

```python
 1 N = 1000
 2 start = -2
 3 slutt = 2
 4 dx = (slutt - start)/N
 5
 6 def f(x):
 7    return x**2-1
 8 
 9 S = 0
10 for i in range(N):
11     xi = start + i*dx
12     S = S + abs(f(xi))*dx  # abs(f(x)) gir absoluttverdien til f(x)
13 
14 print(S)
```

>a) Forklar hva eleven ønsker å regne ut med denne koden.
>b) Finn ved regning den verdien eleven ønsker å bestemme.

>[!question]- Fasit
> 
>

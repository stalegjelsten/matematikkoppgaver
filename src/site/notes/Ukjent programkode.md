---
{"tags":["oppgave"],"temaer":["programmering","utforskning","funksjoner"],"aliases":null,"del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"fag":["s2"],"eksamen":"e22","dg-publish":true,"title":"Ukjent programkode","date":"2023-06-06","modified":"2023-06-06","todo":["løsningsforslag"],"permalink":"/ukjent-programkode/","dgPassFrontmatter":true}
---


# Ukjent programkode

En elev har skrevet følgende kode

```python ln
from math import sqrt            # importerer kvadratrotfunksjon
a = 0
b = 2
n = 10000

def f(x):
	return x**2 + 2

I = 0
h = (b - a)/n

for i in range(n):
	I = I + f(a + i*h)*h

print(round(I,3))
```

>[!oppgave]
> a) Forklar hva eleven ønsker å regne ut.
> b) Hva blir det eksakte svaret på oppgaven eleven ønsker å løse?

>[!question]- Fasit
> a) Eleven ønsker å beregne en tilnærmingsverdi for dette integralet $\int_{0}^{2} \left(x^{2}+2\right) \, dx$
> b) $\frac{20}{3}$
>

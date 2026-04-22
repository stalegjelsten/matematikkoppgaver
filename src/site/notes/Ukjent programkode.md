---
{"aliases":null,"date":"2023-06-06","del":1,"dg-permalink":"/ukjent-programkode/","dg-publish":true,"eksamen":"e22","fag":["s2"],"modified":"2023-06-06","oppgave":7,"oppgavenummer":[{"del":1,"fag":"s2","oppgave":7}],"tags":["oppgave"],"temaer":["programmering","utforskning","funksjoner"],"title":"Ukjent programkode","todo":["løsningsforslag"],"status":2,"permalink":"/ukjent-programkode/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"date":"2023-06-06","del":1,"eksamen":"e22","fag":["s2"],"modified":"2023-06-06","oppgave":7,"oppgavenummer":[{"del":1,"fag":"s2","oppgave":7}],"tags":["oppgave"],"temaer":["programmering","utforskning","funksjoner"],"title":"Ukjent programkode","todo":["løsningsforslag"],"status":2}}
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

## Fasit

a) Eleven ønsker å beregne en tilnærmingsverdi for dette integralet $\int_{0}^{2} \left(x^{2}+2\right) \, dx$
b) $\frac{20}{3}$
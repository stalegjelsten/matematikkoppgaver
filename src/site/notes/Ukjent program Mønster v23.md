---
{"tags":["oppgave"],"temaer":["programmering","sannsynlighet","simulering"],"aliases":null,"del":1,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"fag":["s2"],"eksamen":null,"dg-publish":true,"title":"Ukjent program Mønster v23","date":"2024-01-01","modified":"2024-01-01","source":"Mønster S2 terminprøve v23","todo":["fasit","løsningsforslag"],"permalink":"/ukjent-program-monster-v23/","dgPassFrontmatter":true}
---


# Ukjent program Mønster v23

Martin har skrevet følgende kode:

```python
import random

N = 100000

samlet_gevinst = 0

for i in range(N):
	mynt1 = random.randint(0, 1)
	mynt2 = random.randint(0, 1)
	resultat = mynt1 + mynt2
	gevinst = -50 + 40*resultat
	samlet_gevinst += gevinst

print(samlet_gevinst)
```

a) Forklar hva Martin ønsker å simulere og regne ut.
b) Hva blir det eksakte svaret på oppgaven Martin ønsker å løse?

>[!question]- Fasit
> 
>

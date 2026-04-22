---
{"aliases":null,"date":"2024-01-01","del":1,"dg-permalink":"/ukjent-program-monster-v23/","dg-publish":true,"eksamen":null,"fag":["s2"],"modified":"2024-01-01","oppgave":"5","oppgavenummer":[{"del":1,"fag":"s2","oppgave":5}],"source":"Mønster S2 terminprøve v23","tags":["oppgave"],"temaer":["programmering","sannsynlighet","simulering"],"title":"Ukjent program Mønster v23","todo":["løsningsforslag"],"permalink":"/ukjent-program-monster-v23/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"date":"2024-01-01","del":1,"eksamen":null,"fag":["s2"],"modified":"2024-01-01","oppgave":"5","oppgavenummer":[{"del":1,"fag":"s2","oppgave":5}],"source":"Mønster S2 terminprøve v23","tags":["oppgave"],"temaer":["programmering","sannsynlighet","simulering"],"title":"Ukjent program Mønster v23","todo":["løsningsforslag"]}}
---


# Ukjent program Mønster v23

Martin har skrevet følgende kode:

```python ln
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

> [!oppgave]
> 
> a) Forklar hva Martin ønsker å simulere og regne ut.
> b) Hva blir det eksakte svaret på oppgaven Martin ønsker å løse?

## Fasit

a)
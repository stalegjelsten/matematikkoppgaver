---
{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","geogebra","programmering","eksponentiell vekst"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Eksponentialfunksjon for tomflasker","source":null,"todo":null,"status":1,"permalink":"/eksponentialfunksjon-for-tomflasker/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"temaer":["eksponentialfunksjoner","geogebra","programmering","eksponentiell vekst"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Eksponentialfunksjon for tomflasker","source":null,"todo":null,"status":1}}
---


# Eksponentialfunksjon for tomflasker

I august 2022 satte elevene i 3PBB seg som mål å samle inn tomflasker for 25 000 kroner før 1. juni 2023. De brukte funksjonen $P$ gitt ved 
$$
P(x)=1600 \cdot 1{,}045^{x} \quad , \quad 0\leq x\leq 9
$$
som en modell for hvor stort beløp kroner de måtte samle inn hver måned for å nå målet. 

I modellen svarte $x=0$ til august, $x=1$ til september og så videre. 

>[!oppgave]
> a) Gjør rede for hva modellen forteller om elevenes plan for å nå målet. 
> b) Hvor stort beløp regnet elevene med å samle inn i mai 2023 ifølge modellen? Elevene laget programmet nedenfor.

```python ln
def P(x):
    return 1600 * 1.045 ** x     # Definerer funksjonen P

sum_pant = 0

x = 0

while x <= 9:
    
    sum_pant = sum_pant + P(x)
    
    x = x + 1
    
print(sum_pant)
```

>[!oppgave]
> c) Bruk programmet til å vise at elevene ikke vil nå målet med den planen de har lagt. Foreslå justeringer av modellen som vil gjøre at de kan nå målet.

>[!question]- Fasit
>
> a) Starter på 1600 kr i august, øker 4,5 % per måned
> b) $P(9) \approx 2378 \, \mathrm{kr}$
> c) Programmet summerer til ca. 19 661 kr < 25 000 kr. Øk startbeløpet til ca. 2034 kr.
> [[Løsningsforslag/Løsningsforslag 2P-Y eksamen V2023#Oppgave 2-6\|Løsningsforslag 2P-Y eksamen V2023#Oppgave 2-6]]


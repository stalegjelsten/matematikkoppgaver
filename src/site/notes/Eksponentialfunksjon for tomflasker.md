---
{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","geogebra","programmering","eksponentiell vekst"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Eksponentialfunksjon for tomflasker","source":null,"todo":null,"status":3,"permalink":"/eksponentialfunksjon-for-tomflasker/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"temaer":["eksponentialfunksjoner","geogebra","programmering","eksponentiell vekst"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Eksponentialfunksjon for tomflasker","source":null,"todo":null,"status":3}}
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

## Fasit

a) Starter på 1600 kr i august, øker 4,5 % per måned
b) $P(9) \approx 2378 \, \mathrm{kr}$
c) Programmet summerer til ca. 19 661 kr < 25 000 kr. Øk startbeløpet til ca. 2034 kr.

## Løsningsforslag

### 2-6a

Funksjonen $P(x) = 1600 \cdot 1{,}045^x$ beskriver planen slik:

- I august ($x = 0$) regner elevene med å samle inn $P(0) = 1600 \, \mathrm{kr}$
- Vekstfaktoren 1,045 betyr at beløpet øker med 4,5 % for hver måned
- Planen strekker seg over 10 måneder ($x = 0$ til $x = 9$), dvs. august til mai

### 2-6b

Mai svarer til $x = 9$:

$$
P(9) = 1600 \cdot 1{,}045^9 \approx 1600 \cdot 1{,}486 \approx 2378 \, \mathrm{kr}
$$

**Ifølge modellen regnet elevene med å samle inn ca. $\underline{\underline{2378 \, \mathrm{kr}}}$ i mai 2023.**

### 2-6c

Programmet summerer $P(x)$ for $x = 0, 1, 2, \ldots, 9$. Resultatet er ca. **19 661 kr**, som er langt under målet på 25 000 kr. Elevene vil **ikke** nå målet med den opprinnelige planen.

**Mulige justeringer:**

- Øke startbeløpet. For å samle inn 25 000 kr totalt med samme vekstfaktor (4,5 %) trenger man ca. **2034 kr** i august – mot 1600 kr i den opprinnelige planen.
- Øke vekstfaktoren (raskere økning per måned).

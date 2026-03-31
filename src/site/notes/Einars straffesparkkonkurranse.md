---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","programmering"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":6}],"title":"Einars straffesparkkonkurranse","status":3,"source":null,"todo":null,"permalink":"/einars-straffesparkkonkurranse/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["sannsynlighet","programmering"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":6}],"title":"Einars straffesparkkonkurranse","status":3,"source":null,"todo":null,"permalink":"/einars-straffesparkkonkurranse/"}}
---


# Einars straffesparkkonkurranse

Einar er fotballspiller og har skrevet programmet nedenfor.

```python ln
from random import choice
#choice returnerer en tilfeldig verdi fra en liste

alternativer = ["bom", "bom", "bom", "treff", "treff"]
#liste med alternativer

skuddserie = 3
antall_treff = 0

for i in range(skuddserie):
	skudd = choice(alternativer)
	if skudd == "treff":
		antall_treff = antall_treff + 1
		
print(antall_treff/skuddserie)
```

>[!oppgave]
>a) Hvilke mulige verdier kan programmet skrive ut?
>b) Bestem sannsynligheten for at programmet skriver ut $1{,}0$.

Når Einar tar et straffespark, er sannsynligheten for at han scorer mål, $30\,\%$.

>[!oppgave]
>c) Hva er det minste antallet straffespark Einar må ta for at sannsynligheten for at han scorer minst ett mål, skal være $50\,\%$ eller mer?

## Fasit

a) 0, 0,333, 0,666 eller 1,0
b) $\dfrac{8}{125}$
c) $2$ straffespark

## Løsningsforslag

### 1-6a

Programmet kjører løkken `for i in range(3)` tre ganger. Hvert skudd gir enten `"treff"` (sannsynlighet $\frac{2}{5}$) eller `"bom"`. Programmet skriver ut $\frac{\texttt{antall\_treff}}{3}$.

**Programmet kan skrive ut: 0, 0,333, 0,666 eller 1,0.**


### 1-6b

Programmet skriver ut $1{,}0$ kun hvis alle tre skudd er treff:

$$P(\text{alle tre treff}) = \left(\frac{2}{5}\right)^3 = \frac{8}{125}$$

**$\underline{\underline{P = \dfrac{8}{125}}}$**

### 1-6c

Sannsynligheten for at Einar scorer minst ett mål på $n$ straffespark:

$$P(\text{minst ett mål}) = 1 - 0{,}7^n \geq 0{,}5$$

$$0{,}7^n \leq 0{,}5$$

Vi prøver:

- $n = 1$: $1 - 0{,}7 = 0{,}30 < 0{,}5$
- $n = 2$: $1 - 0{,}49 = 0{,}51 \geq 0{,}5$ ✓

**Einar må ta minst $\underline{\underline{2}}$ straffespark.**

---

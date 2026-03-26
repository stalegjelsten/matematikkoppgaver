---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","programmering"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":6}],"title":"Einars straffesparkkonkurranse","status":1,"source":null,"todo":null,"permalink":"/einars-straffesparkkonkurranse/","dgPassFrontmatter":true}
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

>[!question]- Fasit
>
> a) $0$, $\dfrac{1}{3}$, $\dfrac{2}{3}$, $1{,}0$
> b) $\dfrac{8}{125}$
> c) $2$ straffespark
> [[Løsningsforslag/Løsningsforslag S1 eksamen H2025#Oppgave 1-6\|Løsningsforslag S1 eksamen H2025#Oppgave 1-6]]

---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","programmering","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"title":"Terningspill og forventningsverdi","status":1,"source":null,"todo":null,"permalink":"/terningspill-og-forventningsverdi/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["sannsynlighet","programmering","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"title":"Terningspill og forventningsverdi","status":1,"source":null,"todo":null}}
---


# Terningspill og forventningsverdi

Ola spiller et spill med mange vanlige terninger. Spillet går over flere runder.

For å kaste terninger og spille bruker Ola programmet nedenfor.

```python ln
from random import randint
#randint(a,b) gir et tilfeldig heltall fra og med a til og med b

runder = 0
terninger = 100
while terninger > 0:
	for i in range(terninger):
		if randint(1,6) == 6:
			terninger = terninger + 3
		else:
			terninger = terninger - 1
	runder = runder + 1

print(runder)
```

>[!oppgave]
>a) Hva er reglene for spillet?

Ola spiller mange ganger.

>[!oppgave]
>b) Bestem det gjennomsnittlige antallet runder spillet vil vare.

>[!question]- Fasit
>
> a) Start med 100 terninger; 6 → +3, annet → −1; fortsett til 0 terninger
> b) $\approx 8{,}5$ runder
> [[Løsningsforslag/Løsningsforslag S1 eksamen H2025#Oppgave 2-6\|Løsningsforslag S1 eksamen H2025#Oppgave 2-6]]

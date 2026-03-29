---
{"tags":["oppgave"],"date":"2025-09-26","modified":"2025-09-26","aliases":[],"dg-publish":true,"temaer":["prosentvis endring i flere perioder","programmering"],"fag":["2p-y","2p"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":5},{"fag":"2p","del":1,"oppgave":5}],"title":"Utslippsreduksjon med prosentvis nedgang","source":null,"todo":null,"status":1,"permalink":"/utslippsreduksjon-med-prosentvis-nedgang/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-09-26","modified":"2025-09-26","aliases":[],"temaer":["prosentvis endring i flere perioder","programmering"],"fag":["2p-y","2p"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":5},{"fag":"2p","del":1,"oppgave":5}],"title":"Utslippsreduksjon med prosentvis nedgang","source":null,"todo":null,"status":1}}
---


# Utslippsreduksjon med prosentvis nedgang


Sara har lest om en bedrift som regner med å slippe ut $200 \,\mathrm{tonn}$ CO$_2$ i 2025.  

Bedriften har som mål å redusere utslippet med $2{,}5 ~\%$ hvert år framover.  

Sara har laget programmet nedenfor:  

```python ln
def f(x):
	return 200 * 0.975 ** x

x = 0
s = 0

while x <= 4:
	s = s + f(x)
	x = x + 1
	
print(s)
```

>[!oppgave]
> a) Gi en praktisk tolkning av uttrykket Sara har brukt i linje 2.  
> b) Hva vil verdien som skrives ut når programmet kjøres, fortelle Sara?  

>[!question]- Fasit
>
> a) Uttrykket gir utslippet (tonn CO₂) $x$ år etter 2025
> b) Det totale CO₂-utslippet i 2025–2029 ($\approx 951 \, \mathrm{tonn}$)
> [[Løsningsforslag/Løsningsforslag 2P-Y eksamen H2024#Oppgave 1-5\|Løsningsforslag 2P-Y eksamen H2024#Oppgave 1-5]]

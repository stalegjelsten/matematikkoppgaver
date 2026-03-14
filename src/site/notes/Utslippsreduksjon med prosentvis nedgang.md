---
{"tags":["oppgave"],"date":"2025-09-26","modified":"2025-09-26","aliases":[],"dg-publish":true,"temaer":["prosentvis endring i flere perioder","programmering"],"fag":["2p-y"],"eksamen":"h24","del":1,"oppgave":5,"title":"Utslippsreduksjon med prosentvis nedgang","source":null,"todo":null,"permalink":"/utslippsreduksjon-med-prosentvis-nedgang/","dgPassFrontmatter":true}
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
>

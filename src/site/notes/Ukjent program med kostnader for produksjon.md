---
{"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"alias":[null],"del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Ukjent program med kostnader for produksjon","date":"2023-05-29","modified":"2023-05-29","dg-permalink":"/ukjent-program-med-kostnader-for-produksjon/","permalink":"/ukjent-program-med-kostnader-for-produksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"alias":[null],"del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"fag":"s1","eksamen":"v23","title":"Ukjent program med kostnader for produksjon","date":"2023-05-29","modified":"2023-05-29"}}
---


# Ukjent program med kostnader for produksjon

For en bedrift er kostnaden $K$ i kroner ved produksjon av $x$ enheter per uke av en varetype gitt ved

$$
K(x)=0{,}2x^2+140x+7000
$$

Bedriften har laget følgende program.

```python ln
def K(x): 
	return 0.2*x**2 + 140*x + 7000

v = 260
h = 0.001
x = 0

while (K(x + h) - K(x))/h < v:
	x = x + 1

print(x)
```

Hva blir resultatet når programmet kjøres? Hva forteller dette svaret bedriften?

## Fasit

300 fordi $K'(300) = 260$

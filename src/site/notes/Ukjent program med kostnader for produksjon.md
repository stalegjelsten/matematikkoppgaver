---
{"alias":[null],"date":"2023-05-29","del":1,"dg-permalink":"/ukjent-program-med-kostnader-for-produksjon/","dg-publish":true,"eksamen":"v23","fag":"s1","modified":"2023-05-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"title":"Ukjent program med kostnader for produksjon","todo":["løsningsforslag"],"permalink":"/ukjent-program-med-kostnader-for-produksjon/","dgPassFrontmatter":true,"dg-note-properties":{"alias":[null],"date":"2023-05-29","del":1,"eksamen":"v23","fag":"s1","modified":"2023-05-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"title":"Ukjent program med kostnader for produksjon","todo":["løsningsforslag"]}}
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
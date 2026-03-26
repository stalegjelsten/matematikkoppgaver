---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","grenseinntekt og grensekostnad","økonomi"],"fag":["s1"],"eksamen":"h23","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"poeng":null,"title":"Grensekostnad og programmering","status":1,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/grensekostnad-og-programmering/","dgPassFrontmatter":true}
---


# Grensekostnad og programmering

En bedrift produserer en vare. De daglige kostnadene $K$ (i kroner) ved produksjon av $x$ enheter av varen er gitt ved

$$K(x) = 0{,}1x^2 + 100x + 9000$$

Den økonomiansvarlige i bedriften har laget programmet nedenfor.

```python ln
def K(x):
    return 0.1*x**2 + 100*x + 9000

grense = 200
h = 0.00001
a = 1

while (K(a + h) - K(a))/h < grense:
    a = a + 1

print(a)
```

>[!oppgave]
>Hva blir resultatet når programmet kjøres? Gi en praktisk tolkning av svaret.

>[!question]- Fasit
>
>[[Løsningsforslag S1 eksamen H2023#Oppgave 1-5\|Løsningsforslag S1 eksamen H2023#Oppgave 1-5]]

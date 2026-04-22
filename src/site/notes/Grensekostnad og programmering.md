---
{"aliases":[],"date":"2023-11-14","del":1,"dg-permalink":"/grensekostnad-og-programmering/","dg-publish":true,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","grenseinntekt og grensekostnad","økonomi"],"title":"Grensekostnad og programmering","todo":["løsningsforslag"],"permalink":"/grensekostnad-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":1,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","grenseinntekt og grensekostnad","økonomi"],"title":"Grensekostnad og programmering","todo":["løsningsforslag"]}}
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

## Fasit
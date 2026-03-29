---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","funksjonsdrøfting"],"fag":["s1","r1"],"eksamen":"h24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":2},{"fag":"r1","del":1,"oppgave":2}],"poeng":2,"title":"Finne verdi programmet skriver ut","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/finne-verdi-programmet-skriver-ut/","dgPassFrontmatter":true}
---


# Finne verdi programmet skriver ut

Bruk en egnet strategi til å bestemme verdien som skrives ut når programmet nedenfor kjøres.


```python ln
def O(x):
    return -0.1*x**2 + 2000*x - 50000

x = 0

while O(x + 1) > O(x):
    x = x + 1

print(x)
```

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag S1 eksamen H2024#Oppgave 1-2\|Løsningsforslag S1 eksamen H2024#Oppgave 1-2]]

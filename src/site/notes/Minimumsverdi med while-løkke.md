---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","funksjoner"],"fag":["1t"],"eksamen":"v25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":7}],"poeng":2,"title":"Minimumsverdi med while-løkke","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/minimumsverdi-med-while-lokke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["programmering","funksjoner"],"fag":["1t"],"eksamen":"v25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":7}],"poeng":2,"title":"Minimumsverdi med while-løkke","status":0,"source":null,"todo":["fasit","løsningsforslag"]}}
---


# Minimumsverdi med while-løkke

Siri har laget programmet nedenfor.

```python ln
def f(x):
    return x ** 2 + 2 * x - 15

x = -5
verdi = f(x)

while x <= 5:

    if f(x) < verdi:
        verdi = f(x)

    x = x + 1

print(verdi)
```

>[!oppgave]
>Hva finner Siri ut når hun kjører programmet? Hvilken verdi skrives ut?

>[!question]- Fasit
>
>[[Løsningsforslag 1T eksamen V2025#1-7\|Løsningsforslag 1T eksamen V2025#1-7]]

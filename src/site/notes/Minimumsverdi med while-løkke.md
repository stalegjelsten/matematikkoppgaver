---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/minimumsverdi-med-while-lokke/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":7}],"poeng":2,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","funksjoner"],"title":"Minimumsverdi med while-løkke","todo":["løsningsforslag"],"permalink":"/minimumsverdi-med-while-lokke/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":7}],"poeng":2,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","funksjoner"],"title":"Minimumsverdi med while-løkke","todo":["løsningsforslag"]}}
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

## Fasit
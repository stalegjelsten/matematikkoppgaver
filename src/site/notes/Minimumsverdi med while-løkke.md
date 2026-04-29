---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/minimumsverdi-med-while-lokke/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":7}],"poeng":2,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","funksjoner"],"title":"Minimumsverdi med while-løkke","todo":[],"permalink":"/minimumsverdi-med-while-lokke/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":7}],"poeng":2,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","funksjoner"],"title":"Minimumsverdi med while-løkke","todo":[]}}
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

Programmet skriver ut $\underline{\underline{-16}}$. Siri finner den minste funksjonsverdien til $f(x) = x^2 + 2x - 15$ for heltall $x \in [-5, 5]$.

## Løsningsforslag

Programmet definerer $f(x) = x^2 + 2x - 15$ og starter med $x = -5$ og `verdi = f(-5)`.

While-løkka går gjennom heltallene $x = -5, -4, -3, \ldots, 5$. For hvert steg sjekkes det om $f(x)$ er mindre enn den lagrede `verdi`. Hvis ja, oppdateres `verdi`. Til slutt skrives den minste verdien som ble funnet.

Vi regner ut $f(x)$ for alle heltall i intervallet:

| $x$ | $f(x) = x^2 + 2x - 15$ |
|-----|------------------------|
| $-5$ | $25 - 10 - 15 = 0$ |
| $-4$ | $16 - 8 - 15 = -7$ |
| $-3$ | $9 - 6 - 15 = -12$ |
| $-2$ | $4 - 4 - 15 = -15$ |
| $-1$ | $1 - 2 - 15 = \mathbf{-16}$ |
| $0$ | $0 + 0 - 15 = -15$ |
| $1$ | $1 + 2 - 15 = -12$ |
| $2$ | $4 + 4 - 15 = -7$ |
| $3$ | $9 + 6 - 15 = 0$ |
| $4$ | $16 + 8 - 15 = 9$ |
| $5$ | $25 + 10 - 15 = 20$ |

Den minste funksjonsverdien er $f(-1) = -16$.

Programmet skriver ut $\underline{\underline{-16}}$.
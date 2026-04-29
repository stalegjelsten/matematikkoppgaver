---
{"aliases":[],"date":"2024-05-23","del":1,"dg-permalink":"/gjennomsnittlig-vekstfart-med-program/","dg-publish":true,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":2,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["programmering","gjennomsnittlig vekstfart"],"title":"Gjennomsnittlig vekstfart med program","todo":[],"permalink":"/gjennomsnittlig-vekstfart-med-program/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":1,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":2,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["programmering","gjennomsnittlig vekstfart"],"title":"Gjennomsnittlig vekstfart med program","todo":[]}}
---


# Gjennomsnittlig vekstfart med program

Ada har laget programmet nedenfor.

```python ln
def f(x):
    return x ** 2 - 3 * x + 7

a = 0
b = 5

v = (f(b) - f(a)) / (b - a)

print(v)
```

>[!oppgave]
>Hvilken verdi skrives ut når Ada kjører programmet, og hva forteller denne verdien?

## Fasit

Programmet skriver ut $\underline{\underline{2}}$.

Verdien er den gjennomsnittlige vekstfarten til $f$ på intervallet $[0, 5]$. Det vil si at $f(x)$ i gjennomsnitt øker med $2$ per enhet $x$ på dette intervallet.

## Løsningsforslag

Programmet beregner $v = \dfrac{f(b) - f(a)}{b - a}$ med $a = 0$ og $b = 5$.

Vi finner $f(0)$ og $f(5)$:

$$f(0) = 0^2 - 3 \cdot 0 + 7 = 7$$

$$f(5) = 5^2 - 3 \cdot 5 + 7 = 25 - 15 + 7 = 17$$

Deretter beregner programmet:

$$v = \frac{f(5) - f(0)}{5 - 0} = \frac{17 - 7}{5} = \frac{10}{5} = \mathbf{2}$$

**Programmet skriver ut $\underline{\underline{2}}$.**

Denne verdien er den gjennomsnittlige vekstfarten til $f(x)$ på intervallet $[0, 5]$. Det betyr at $f(x)$ i gjennomsnitt øker med $2$ enheter per enhet $x$ i dette intervallet.
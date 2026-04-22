---
{"aliases":[],"date":"2024-05-23","del":1,"dg-permalink":"/ada-sparer-med-eksponentialfunksjon/","dg-publish":true,"eksamen":"v24","fag":["1p"],"modified":"2026-03-28","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":2}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","programmering"],"title":"Ada sparer med eksponentialfunksjon","todo":["løsningsforslag"],"permalink":"/ada-sparer-med-eksponentialfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":1,"eksamen":"v24","fag":["1p"],"modified":"2026-03-28","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":2}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","programmering"],"title":"Ada sparer med eksponentialfunksjon","todo":["løsningsforslag"]}}
---


# Ada sparer med eksponentialfunksjon

Ada vil spare penger og har funnet ut at hun kan bruke funksjonen $f$ gitt ved

$$f(x) = 20000 \cdot 1{,}0485^{x}$$

for å regne ut hvor mye penger hun vil ha i banken om $x$ år.

>[!oppgave]
>a) Gi en praktisk tolkning av tallet 20 000 og av tallet 1,0485.

Ada har laget programmet nedenfor.

```python ln
def f(x):
    return 20000 * 1.0485 ** x

start = 0
slutt = 10

v = (f(slutt) - f(start))/(slutt - start)

print(v)
```

>[!oppgave]
>b) Hva forteller tallet som vil bli skrevet ut når hun kjører programmet?

## Fasit
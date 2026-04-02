---
{"tags":["oppgave"],"date":"2024-05-23","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","programmering"],"fag":["1p"],"eksamen":"v24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":2}],"poeng":4,"title":"Ada sparer med eksponentialfunksjon","status":1,"source":null,"todo":null,"dg-permalink":"/ada-sparer-med-eksponentialfunksjon/","permalink":"/ada-sparer-med-eksponentialfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-23","modified":"2026-03-28","aliases":[],"temaer":["eksponentialfunksjoner","programmering"],"fag":["1p"],"eksamen":"v24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":2}],"poeng":4,"title":"Ada sparer med eksponentialfunksjon","status":1,"source":null,"todo":null}}
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

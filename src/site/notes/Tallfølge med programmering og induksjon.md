---
{"tags":["oppgave"],"date":"2025-05-14","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["programmering","rekker","bevis"],"fag":["r2"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":3}],"poeng":6,"title":"Tallfølge med programmering og induksjon","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/tallfolge-med-programmering-og-induksjon/","dgPassFrontmatter":true}
---


# Tallfølge med programmering og induksjon

En elev arbeider med en tallfølge og har skrevet denne koden:

```python ln
a = 2
n = 5
for i in range(1, n + 1):
    print(a)
    a = a + (i + 2)
```

>[!oppgave]
>a) Beskriv mønsteret i tallfølgen eleven arbeider med. Hva blir resultatet når koden kjøres?

Eleven har også skrevet denne koden:

```python ln
a = 2
n = 5
S = 0
for i in range(1, n + 1):
    S = S + a
    a = a + (i + 2)
print(S)
```

>[!oppgave]
>b) Hva ønsker eleven nå å finne ut? Hva blir resultatet når koden kjøres?

Tallene fra oppgave a) er starten på en rekke.

>[!oppgave]
>c) Bruk induksjon til å vise at et ledd i rekken kan uttrykkes som
>$$a_n = \frac{n(n+3)}{2}, \quad n \geq 1$$

>[!question]- Fasit
>
>[[Løsningsforslag R2 eksamen V2025#Oppgave 1-3\|Løsningsforslag R2 eksamen V2025#Oppgave 1-3]]

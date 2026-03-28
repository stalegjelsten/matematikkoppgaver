---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["programmering","eksponentiell vekst","lineær vekst"],"fag":["1p"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":4}],"poeng":3,"title":"Lisas salg og to programmer","status":1,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/lisas-salg-og-to-programmer/","dgPassFrontmatter":true}
---


# Lisas salg og to programmer

Lisa driver en butikk. Butikken skal begynne å selge et nytt produkt 1. januar 2025. Lisa håper å selge 1000 enheter av produktet i januar. Hun håper også at salget av produktet vil øke hver måned.

Lisa har laget de to programmene nedenfor.

<!-- two-column start left-width=50% -->

**Program 1**

```python ln
e = 1000
t = 0
m = 1

while m <= 12:
    t = t + e
    e = e * 1.04
    m = m + 1

print(t)
```

---

**Program 2**

```python ln
e = 1000
t = 0
m = 1

while m <= 12:
    t = t + e
    e = e + 40
    m = m + 1

print(t)
```

<!-- two-column stop -->




>[!oppgave]
>a) Gi en praktisk tolkning av koden Lisa bruker i linje 7 i hvert av programmene.
>b) Hva vil verdiene som skrives ut fortelle Lisa?

>[!question]- Fasit
>
>[[Løsningsforslag 1P eksamen H2024#Oppgave 1-4\|Løsningsforslag 1P eksamen H2024#Oppgave 1-4]]

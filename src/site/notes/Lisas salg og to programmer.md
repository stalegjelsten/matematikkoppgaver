---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["programmering","eksponentiell vekst","lineær vekst"],"fag":["1p"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":4}],"poeng":3,"title":"Lisas salg og to programmer","status":1,"source":null,"todo":null,"dg-permalink":"/lisas-salg-og-to-programmer/","permalink":"/lisas-salg-og-to-programmer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"temaer":["programmering","eksponentiell vekst","lineær vekst"],"fag":["1p"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":4}],"poeng":3,"title":"Lisas salg og to programmer","status":1,"source":null,"todo":null}}
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

## Fasit

a) P1 linje 7: salget øker med 4 % hver måned. P2 linje 7: salget øker med 40 enheter hver måned.
b) Totalt antall solgte enheter i løpet av de 12 månedene. Program 1: 15 026, Program 2: 14 640.

## Løsningsforslag

### a

**Program 1, linje 7:** `e = e * 1.04`

Dette betyr at salget for neste måned er 4 % høyere enn salget denne måneden. Lisa antar at salget vokser **eksponentielt** – med samme prosentsats hver måned.

**Program 2, linje 7:** `e = e + 40`

Dette betyr at salget for neste måned er 40 enheter høyere enn salget denne måneden. Lisa antar at salget vokser **lineært** – med samme antall enheter hver måned.

### b

Variabelen `t` akkumulerer salget for alle 12 månedene. Verdiene som skrives ut, forteller Lisa det **totale antallet solgte enheter** i løpet av året (januar–desember):

- **Program 1** (eksponentiell vekst): $\underline{\underline{15\,026 \text{ enheter}}}$
- **Program 2** (lineær vekst): $\underline{\underline{14\,640 \text{ enheter}}}$

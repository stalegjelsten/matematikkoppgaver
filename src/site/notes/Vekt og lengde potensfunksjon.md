---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["potensfunksjon","derivasjon","regresjon"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1}],"title":"Vekt og lengde potensfunksjon","status":1,"source":null,"todo":null,"poeng":8,"permalink":"/vekt-og-lengde-potensfunksjon/","lf-source-claude":true,"dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["potensfunksjon","derivasjon","regresjon"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1}],"title":"Vekt og lengde potensfunksjon","status":1,"source":null,"todo":null,"poeng":8,"permalink":"/vekt-og-lengde-potensfunksjon/","lf-source-claude":true}}
---


# Vekt og lengde potensfunksjon

Tabellen nedenfor viser sammenhengen mellom lengde og vekt for en type fisk.

| Lengde (cm) | 50   | 70   | 80   | 100  | 120    | 130    |
|-------------|------|------|------|------|--------|--------|
| Vekt (gram) | 1190 | 3320 | 5070 | 9610 | 16 080 | 21 590 |

Sammenhengen kan beskrives med en modell gitt på formen

$$F(x) = a \cdot x^b$$

der $F(x)$ gram er vekten til en fisk som er $x$ centimeter lang.

>[!oppgave]
>a) Bruk opplysningene i tabellen til å bestemme tallene $a$ og $b$. Tegn grafen til $F$.
>
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(75,\ F(75))$ og $(95,\ F(95))$. Gi en praktisk tolkning av svaret.
>
>c) Bestem den momentane vekstfarten når $x = 100$. Gi en praktisk tolkning av svaret.
>
>d) Hvor mange prosent vil vekten av en fisk øke med dersom lengden øker med $20\ \%$ ifølge modellen?

## Fasit

a) $F(x) \approx 0{,}00966 \cdot x^{3{,}00}$
b) $\approx 210 \mathrm{~gram/cm}$
c) $\approx 289 \mathrm{~gram/cm}$
d) $\approx 72{,}8\ \%$

## Løsningsforslag

### a

Legger inn datapunktene i GeoGebra og bruker PotensRegresjon. GeoGebra gir:

$$F(x) \approx 0{,}00966 \cdot x^{3{,}00}$$

![1t-h25-2-1.png](/img/user/_resources/1t-h25-2-1.png)

### b

$$k = \frac{F(95) - F(75)}{95 - 75} \approx \frac{8219 - 4105}{20} \approx \underline{\underline{210 \mathrm{~gram/cm}}}$$

Gjennomsnittlig øker vekten med omtrent $210\ \mathrm{gram}$ per centimeter ekstra lengde i intervallet $75$–$95\ \mathrm{cm}$.

### c

$F'(100) = a \cdot b \cdot 100^{b-1} \approx 0{,}00966 \cdot 3{,}00 \cdot 100^{2{,}00} \approx \underline{\underline{289 \mathrm{~gram/cm}}}$

Når fisken er $100\ \mathrm{cm}$, øker vekten med omtrent $289\ \mathrm{gram}$ per centimeter ekstra lengde.

### d

$$\frac{F(1{,}2x)}{F(x)} = \frac{a(1{,}2x)^b}{ax^b} = 1{,}2^b \approx 1{,}2^3 = 1{,}728$$

**Vekten øker med omtrent $\underline{\underline{72{,}8\ \%}}$.**

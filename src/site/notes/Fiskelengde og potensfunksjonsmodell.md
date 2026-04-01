---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-24","aliases":[],"dg-publish":true,"temaer":["potensfunksjon","regresjon","stigningstall"],"fag":["1p"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"title":"Fiskelengde og potensfunksjonsmodell","status":1,"source":null,"todo":null,"permalink":"/fiskelengde-og-potensfunksjonsmodell/","lf-source-claude":true,"dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-24","aliases":[],"temaer":["potensfunksjon","regresjon","stigningstall"],"fag":["1p"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":1}],"title":"Fiskelengde og potensfunksjonsmodell","status":1,"source":null,"todo":null,"permalink":"/fiskelengde-og-potensfunksjonsmodell/","lf-source-claude":true}}
---


# Fiskelengde og potensfunksjonsmodell

Tabellen nedenfor viser sammenhengen mellom lengde og vekt for en type fisk.

| Lengde (cm) | 50   | 70   | 80   | 100  | 120    | 130    |
|-------------|------|------|------|------|--------|--------|
| Vekt (gram) | 1190 | 3320 | 5070 | 9610 | 16 080 | 21 590 |

Sammenhengen kan beskrives med en modell gitt på formen

$$F(x) = a \cdot x^b$$

der $F(x)$ gram er vekten til en fisk som er $x$ centimeter lang.

>[!oppgave]
>a) Bruk opplysningene i tabellen til å bestemme tallene $a$ og $b$. Tegn grafen til $F$.
>b) Hvor lang er en fisk som veier $11{,}5 \mathrm{~kg}$ ifølge modellen?
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(75,\ F(75))$ og $(95,\ F(95))$. Gi en praktisk tolkning av svaret.
>d) Hvor mange prosent vil vekten av en fisk øke med dersom lengden øker med $20\ \%$ ifølge modellen?

## Fasit

a) $a \approx 0{,}00966$, $b \approx 3{,}00$
b) $\approx 106 \, \mathrm{cm}$
c) $\approx 210 \, \mathrm{g/cm}$
d) $\approx 72{,}8 \, \%$

## Løsningsforslag

> [!warning] KI-løsning
> Denne løsningen er skrevet av KI. Løsningen ser riktig ut, men jeg har lyst til å endre på fremgangsmåten slik at det passer bedre med hvordan vi vanligvis løser slike oppgaver i norsk videregående skole.

### 2-1a

Vi bruker potensregresjon for å finne $a$ og $b$ i $F(x) = a \cdot x^b$.

Regresjon i GeoGebra gir:

$$\underline{\underline{a \approx 0{,}00966 \quad \text{og} \quad b \approx 3{,}00}}$$

Modellen er dermed tilnærmet

$$F(x) \approx 0{,}00966 \cdot x^3$$

![Graf for F(x)](/img/user/_resources/1p-h25-2-1-a-graf.png)

### 2-1b

Vi løser likningen $F(x) = 11\,500$:

$$0{,}00966 \cdot x^3 = 11\,500$$

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/1p-h25-2-1-b-CAS.png)

**Ifølge modellen er en fisk som veier $11{,}5 \, \mathrm{kg}$ omtrent $\underline{\underline{106 \, \mathrm{cm}}}$ lang.**

### 2-1c

Vi beregner $F(75)$ og $F(95)$:

$$F(75) = 0{,}00966 \cdot 75^3 \approx 4075 \, \mathrm{g}$$

$$F(95) = 0{,}00966 \cdot 95^3 \approx 8282 \, \mathrm{g}$$

Stigningstallet til linjen gjennom $(75,\ F(75))$ og $(95,\ F(95))$:

$$a = \frac{F(95) - F(75)}{95 - 75} = \frac{8282 - 4075}{20} \approx 210$$

**Stigningstallet er $\underline{\underline{\approx 210 \, \mathrm{g/cm}}}$.**

Dette betyr at for fisk med lengde mellom 75 og 95 cm vil vekten øke med cirka 210 gram for hver ekstra centimeter.

### 2-1d

Dersom lengden øker med 20 %, blir den nye lengden $1{,}2 \cdot x$. Da blir den nye vekten:

$$F(1{,}2x) = 0{,}00966 \cdot (1{,}2x)^3 = 0{,}00966 \cdot 1{,}2^3 \cdot x^3 = 1{,}2^3 \cdot F(x)$$

$$1{,}2^3 = 1{,}728$$

Prosentvis økning: $(1{,}728 - 1) \cdot 100 \, \% = 72{,}8 \, \%$

**Vekten vil øke med $\underline{\underline{72{,}8 \, \%}}$ dersom lengden øker med 20 %.**

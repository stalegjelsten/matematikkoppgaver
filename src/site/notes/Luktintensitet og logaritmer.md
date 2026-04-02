---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["logaritmer","modellering"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":5}],"title":"Luktintensitet og logaritmer","status":3,"source":null,"todo":null,"dg-permalink":"/luktintensitet-og-logaritmer/","permalink":"/luktintensitet-og-logaritmer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["logaritmer","modellering"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":5}],"title":"Luktintensitet og logaritmer","status":3,"source":null,"todo":null}}
---


# Luktintensitet og logaritmer

Beboerne i et boligområde klager på lukt fra et biogassanlegg. Kommunen tar luftprøver og vurderer værdata som vind og temperatur.

Prøvene analyseres, og hver prøve gis en luktverdi $C$. Denne luktverdien er gitt i luktenheter (odour units) per kubikkmeter ($\mathrm{OU/m^3}$).

Sammenhengen mellom $C$ og luktintensiteten $I$ er gitt ved

$$I = 1{,}4 \cdot \lg(C) - 0{,}3$$

Biogassanlegget er pålagt å forholde seg til tabellen nedenfor.

| Luktintensitet ($I$) | Vurdering |
|---|---|
| $< 1$ | uproblematisk |
| $1$–$2$ | akseptabelt |
| $2$–$3$ | kan aksepteres kortvarig |
| $3$–$4$ | plagsom lukt, bør begrenses |
| $> 4$ | plagsomt, tiltak kreves |

Resultatet av prøvene viser luktverdier mellom $500 \mathrm{~OU/m^3}$ og $1400 \mathrm{~OU/m^3}$.

>[!oppgave]
>a) Har beboerne grunnlag for å klage?

Biogassanlegget tar klagene på alvor og ønsker å redusere luktplagene.

>[!oppgave]
>b) Hvilken luktverdi må nye prøver vise for at luktintensiteten skal bli akseptabel?

## Fasit

a) Ja ($I$ mellom $3{,}48$ og $4{,}10$)
b) $8{,}5 \leq C \leq 44 \, \mathrm{OU/m^3}$

## Løsningsforslag

### 2-5a

Vi beregner luktintensiteten $I = 1{,}4 \cdot \lg(C) - 0{,}3$ for begge grenseverdiene:

![GeoGebra CAS løsning for oppgave 2-5a](/img/user/_resources/s1-h25-2-5-a-CAS.png){width=60%}

CAS gir:

- $I(500) \approx 3{,}48$: «plagsom lukt, bør begrenses»
- $I(1400) \approx 4{,}10$: «plagsomt, tiltak kreves»

Prøvene viser luktintensiteter i området $3{,}48$ til $4{,}10$, noe som tilsvarer kategoriene «plagsom» og «tiltak kreves».

**Ja, beboerne har grunnlag for å klage.**

### 2-5b

For at luktintensiteten skal bli akseptabel, trenger vi $1 \leq I \leq 2$. Vi løser i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-5b](/img/user/_resources/s1-h25-2-5-b-CAS.png){width=60%}

CAS gir:
- $I = 2$ gir $C \approx 44$
- $I = 1$ gir $C \approx 8{,}5$

**Nye prøver må vise luktverdier i intervallet $\underline{\underline{8{,}5 \leq C \leq 44 \, \mathrm{OU/m^3}}}$ for at luktintensiteten skal bli akseptabel.**

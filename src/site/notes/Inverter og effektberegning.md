---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["elektrofag","effekttrekant","formler"],"fag":["1p-y el"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Inverter og effektberegning","status":3,"source":null,"todo":null,"permalink":"/inverter-og-effektberegning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-17","aliases":[],"temaer":["elektrofag","effekttrekant","formler"],"fag":["1p-y el"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Inverter og effektberegning","status":3,"source":null,"todo":null,"permalink":"/inverter-og-effektberegning/"}}
---


# Inverter og effektberegning

![Inverter](/img/user/_resources/1py-el-h23-2-1.jpeg){width=60%}

En inverter omformer 12 V likestrøm, for eksempel fra et bilbatteri, til 230 V vekselstrøm. I denne oppgaven kan du få behov for formelen

$$P = U \cdot I$$

- $P$ er effekt i watt.
- $U$ er spenning i volt.
- $I$ er strømstyrke i ampere.

>[!oppgave]
>a) Hvor mange ampere går det fra $12 \mathrm{~V}$-batteriet når det leverer $300 \mathrm{~W}$ inn til inverteren?

Inverteren har en virkningsgrad på 85 prosent, noe som betyr at 15 prosent av strømmen fra batteriet går tapt som varme og ikke blir omgjort til vekselstrøm.

Batteriet som er koblet til inverteren, vil etter en stund levere maksimalt 55 ampere.

Du har behov for $600 \mathrm{~W}$ med $230 \mathrm{~V}$ vekselstrøm.

>[!oppgave]
>b) Gjør utregninger, og vurder om batteriet kan levere nok strøm til inverteren, eller om det må oppgraderes.

## Fasit

a) 25 A
b) Batteriet må oppgraderes – det trengs 58,8 A, men batteriet leverer maks 55 A

## Løsningsforslag

### 2-1a

Vi bruker formelen $P = U \cdot I$ og løser for $I$:

$$
I = \frac{P}{U} = \frac{300 \, \mathrm{W}}{12 \, \mathrm{V}} = 25 \, \mathrm{A}
$$

**Det går $\underline{\underline{25 \, \mathrm{A}}}$ fra $12 \, \mathrm{V}$-batteriet.**

### 2-1b

Vi trenger 600 W ut fra inverteren. Med virkningsgrad på 85 % må batteriet levere mer inn enn det vi får ut:

$$
P_{\text{inn}} = \frac{600 \, \mathrm{W}}{0{,}85} \approx 705{,}9 \, \mathrm{W}
$$

Strømstyrken som trengs fra batteriet:

$$
I = \frac{P_{\text{inn}}}{U} = \frac{705{,}9 \, \mathrm{W}}{12 \, \mathrm{V}} \approx 58{,}8 \, \mathrm{A}
$$

Batteriet leverer maksimalt $55 \, \mathrm{A}$, men vi trenger $58{,}8 \, \mathrm{A}$.

**Batteriet kan ikke levere nok strøm. Det må oppgraderes.**

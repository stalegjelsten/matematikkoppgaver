---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-16","aliases":[],"dg-publish":true,"temaer":["trigonometri","elektrofag","geometri","prosentregning"],"fag":["1p-y el"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Solcellepaneler og trigonometri","status":1,"source":null,"todo":null,"dg-permalink":"/solcellepaneler-og-trigonometri/","permalink":"/solcellepaneler-og-trigonometri/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-16","aliases":[],"temaer":["trigonometri","elektrofag","geometri","prosentregning"],"fag":["1p-y el"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Solcellepaneler og trigonometri","status":1,"source":null,"todo":null}}
---


# Solcellepaneler og trigonometri

Solceller gjør om energien i sollys til elektrisk strøm. Det er installert 1400 solcellepaneler i en solcellepark. Den forventede årlige produksjonen av energi er 624 MWh.

>[!oppgave]
>a) Hvor mye energi forventes det at hvert solcellepanel produserer i løpet av ett år? Oppgi svaret i kWh.

Illustrasjonen nedenfor viser en skisse av ett av panelene i solcelleparken. Lengden av panelet er $1134 \mathrm{~mm}$.

Denne lengden kan ses på som hypotenusen i en trekant.

Panelet skal monteres i en vinkel på $35\degree$.

![Skisse av oppsett av solcellepanel](/img/user/_resources/1py-h25-2-1-2.jpeg){width=60%}

>[!oppgave]
>b) Hva blir lengden av $AB$? Hva blir lengden av $AC$?

Det skal monteres solcellepaneler på et privat hustak:

- dimensjon: $1762 \mathrm{~mm} \times 1134 \mathrm{~mm}$
- maksimal solinnstråling: $1000 \mathrm{~W/m^2}$
- virkningsgrad: 21 %


> [!info] Virkningsgrad
 > Virkningsgraden angir hvor stor andel av energien i solinnstrålingen som solcellepanelet klarer å omdanne til elektrisk energi.

Anlegget panelene skal levere strømmen til, kan ikke motta mer enn 15 kW.

>[!oppgave]
>c) Hvor mange hele paneler kan maksimalt monteres i dette anlegget?

## Fasit

a) $\approx 446 \, \mathrm{kWh}$
b) $AB \approx 929 \, \mathrm{mm}$, $AC \approx 650 \, \mathrm{mm}$
c) 35 hele paneler

## Løsningsforslag

### a
Total produksjon $624\mathrm{~MWh} = 624\,000\mathrm{~kWh}$ fordelt på 1400 paneler:

$$\frac{624\,000}{1400} \approx \underline{\underline{446\mathrm{~kWh}}}$$


### b
Fra illustrasjonen er $CB = 1134\mathrm{~mm}$ hypotenusen i rettvinklet trekant $ACB$ med rett vinkel i $A$ og vinkel $35°$ ved $B$:

$$AB = 1134 \cdot \cos(35°) \approx \underline{\underline{929\mathrm{~mm}}}$$
$$AC = 1134 \cdot \sin(35°) \approx \underline{\underline{650\mathrm{~mm}}}$$


### c
Areal per panel: $1{,}762 \cdot 1{,}134 \approx 1{,}998\mathrm{~m}^2$

Effekt per panel med maks solinnstråling og $21\,\%$ virkningsgrad:

$$P_{\text{panel}} = 1{,}998 \cdot 1000 \cdot 0{,}21 \approx 419{,}6\mathrm{~W}$$

Maksimalt antall hele paneler:

$$n = \frac{15\,000}{419{,}6} \approx 35{,}7 \implies \underline{\underline{35\text{ hele paneler}}}$$
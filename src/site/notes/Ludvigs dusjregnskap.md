---
{"tags":["oppgave"],"date":"2026-03-10","modified":"2026-03-10","aliases":[],"dg-publish":true,"temaer":["excel"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":4}],"title":"Ludvigs dusjregnskap","source":null,"todo":null,"status":3,"permalink":"/ludvigs-dusjregnskap/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-10","modified":"2026-03-10","aliases":[],"temaer":["excel"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":4}],"title":"Ludvigs dusjregnskap","source":null,"todo":null,"status":3,"permalink":"/ludvigs-dusjregnskap/"}}
---


# Ludvigs dusjregnskap


Ludvig bor i hybelleilighet. Han synes strømregningene for 2022 var høye.
Han lurer på hvor mye strøm han brukte på oppvarming av varmtvann til dusjing.
Ludvig gjør undersøkelser og fyller inn data i et regneark. Se nedenfor.
Strømforbruk måles i kilowattimer (kWh).

![Regneark som viser Ludvigs dusjregnskap](/img/user/_resources/ludvigs-dusj.png){width=40%}

a) Lag et regneark som vist ovenfor. Lag formler i de grønne cellene slik at utregningene blir riktige. Husk å ta med formlene i besvarelsen din.

I celle B11 skriver Ludvig `=B3 * B5/60`

b) Hvilket tall får Ludvig som svar i celle B11?

   Foreslå en tekst han kan skrive i celle A11, som forklarer hva tallet i celle B11 betyr.

I 2023 har Ludvig blitt sammen med Ines. Hun er opptatt av både miljø og sparing. Ines gir Ludvig noen sparetips:

- Bytt dusjhode til sparedusj. Den bruker bare 8 liter per minutt.
- Bruk kortere tid i dusjen. 10 minutter er nok.
- Dusj på senteret etter trening. Da trenger du å dusje hjemme bare 4 ganger per uke.

Regn med samme strømpris for 2023 som for 2022.

c) Hvor mange kroner kan Ludvig spare i 2023 hvis han følger alle rådene fra Ines?

## Fasit

a) Excel-regneark med formler: `=B2*B3`, `=B7*B4`, `=B8*B5`, `=B9*B6`
b) $91{,}25$ timer i dusjen per år
c) Sparing $\approx 3725 \, \mathrm{kr}$

## Løsningsforslag

> [!note] Excel-oppgave
> Denne oppgaven er ment å løses i et regneark. Her vises fremgangsmåten og formlene.

a) Regnearket for 2022 fylles inn slik:

   | Celle | Tekst | Formel / verdi |
   |:-----:|-------|---------------|
   | B7 | Vannmengde per dusj (liter) | `=B2*B3` |
   | B8 | Strømforbruk per dusj (kWh) | `=B7*B4` |
   | B9 | Strømforbruk per år (kWh) | `=B8*B5` |
   | B10 | Strømutgifter per år (kroner) | `=B9*B6` |

   Med verdiene fra regnearket får vi:

   - B7 = $16 \cdot 15 = 240$ liter per dusj
   - B8 = $240 \cdot 0{,}035 = 8{,}4$ kWh per dusj
   - B9 = $8{,}4 \cdot 365 = 3066$ kWh per år
   - B10 = $3066 \cdot 1{,}50 = 4599$ kr per år

b) Formelen `=B3*B5/60` gir:

   $$15 \cdot 365 \div 60 = \underline{\underline{91{,}25}}$$

   En passende tekst i celle A11 er: **«Total tid brukt på dusj per år (timer)»**

   Det tilsvarer at Ludvig bruker $91{,}25$ timer i dusjen i løpet av ett år.

c) Med alle rådene fra Ines:

   - Nytt dusjhode: 8 liter/minutt (var 16)
   - Kortere dusjing: 10 minutter (var 15)
   - Dusjer hjemme 4 ganger per uke: $4 \cdot 52 = 208$ ganger per år (var 365)

   Nytt strømforbruk:

   - Vann per dusj: $8 \cdot 10 = 80$ liter
   - Forbruk per dusj: $80 \cdot 0{,}035 = 2{,}8$ kWh
   - Forbruk per år: $2{,}8 \cdot 208 = 582{,}4$ kWh
   - Kostnad per år: $582{,}4 \cdot 1{,}50 = 873{,}60$ kr

   Sparing: $4599 - 873{,}60 = \underline{\underline{3725{,}40 \, \mathrm{kr}}}$

   **Ludvig kan spare omtrent 3725 kroner i 2023 hvis han følger alle rådene.**

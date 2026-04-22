---
{"tags":["oppgave"],"date":"2024-05-23","modified":"2026-04-07","aliases":[],"dg-publish":true,"temaer":["geometri","regneark","mva"],"fag":["1p-y ba"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y ba","del":2,"oppgave":1}],"poeng":null,"title":"Bindingsverk og kappliste for vegg","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/bindingsverk-og-kappliste-for-vegg/","permalink":"/bindingsverk-og-kappliste-for-vegg/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-23","modified":"2026-04-07","aliases":[],"temaer":["geometri","regneark","mva"],"fag":["1p-y ba"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y ba","del":2,"oppgave":1}],"poeng":null,"title":"Bindingsverk og kappliste for vegg","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Bindingsverk og kappliste for vegg

Arbeidstegningen viser bindingsverket i en vegg.

![Bindingsverk](/img/user/_resources/1pyba-v24-2-1.jpeg){width=80%}

|                         | Kappliste       |                     |        |                                      |
|-------------------------|-----------------|---------------------|--------|--------------------------------------|
| Nr. / Navn              | Dimensjon (mm)  | Kappelengde (mm)    | Antall | Total lengde pluss 10 % svinn (m)    |
| 1 Bunnsvill             | 48 × 98         |                     |        |                                      |
| 2 Toppsvill             | 48 × 98         |                     |        |                                      |
| 3 Stender               | 48 × 98         |                     |        |                                      |

>[!oppgave]
>a) Bruk arbeidstegningen. Skriv av tabellen, og fyll ut kapplisten.

Nedenfor ser du to ulike pristilbud på 48 × 98 plank. Satsen for merverdiavgift (mva.) er 25 prosent.

**Butikk 1:** $23{,}90$ kr per meter uten mva.

**Butikk 2:** $28{,}50$ kr per meter med mva.

Du skal handle 175 meter plank.

>[!oppgave]
>b) Finn ut hvilken butikk det er billigst å handle i, og hvor mye du kan spare ved å handle der det er billigst. Oppgi svaret i hele kroner.

I tabellen ser du hvordan prisen på materialene til en enebolig utvikler seg fra januar til desember 2023.

| Måned     | Materialkostnader (i tusen kroner) |
|-----------|------------------------------------|
| Januar    | 2 000                              |
| Februar   | 1 975                              |
| Mars      | 1 966                              |
| April     | 1 983                              |
| Mai       | 2 003                              |
| Juni      | 1 986                              |
| Juli      | 1 997                              |
| August    | 1 978                              |
| September | 1 977                              |
| Oktober   | 2 011                              |
| November  | 2 017                              |
| Desember  | 2 010                              |

>[!oppgave]
>c) Bruk regneark og finn endringen i pris fra måned til måned. Vurder når endringen var størst.
>
>Lag en grafisk framstilling som viser endringene i materialkostnadene.
>
>Husk å vise hvilke formler du bruker i regnearket.

## Fasit

a) Se kappliste under. b) Butikk 2 er billigst, sparer $241 \, \mathrm{kr}$. c) Størst endring fra september til oktober ($+34$ tusen kr).

## Løsningsforslag

### a

Fra arbeidstegningen leser vi av:
- Totalbredde: $4200 \, \mathrm{mm}$
- Totalhøyde: $2400 \, \mathrm{mm}$
- 8 stendere (vertikale elementer)
- Toppsvill har dobbel svill (2 stk)

Stenderlengde: trekker fra bunnsvill ($48 \, \mathrm{mm}$) og dobbel toppsvill ($2 \times 48 = 96 \, \mathrm{mm}$):

$$2400 - 3 \cdot 48 = 2400 - 144 = 2256 \, \mathrm{mm}$$

![Utfylt kappliste. Kilde: Udir](/img/user/_resources/1pyba-v24-2-1a-kappliste-udir.png){width=70%}

Formel for total med svinn: `=(kappelengde*antall)*1,1/1000`

Formel for stenderlengde: `=2400-(3*48)`

### b

Vi regner ut meterpris med mva. og sammenligner.

![Prissammenligning butikker. Kilde: Udir](/img/user/_resources/1pyba-v24-2-1b-plankpris-udir.png){width=70%}

**Butikk 1:** `=23,9*1,25` = $29{,}88 \, \mathrm{kr/m}$ med mva.

**Butikk 2:** $28{,}50 \, \mathrm{kr/m}$ med mva. (allerede inkludert)

Totalpris for $175 \, \mathrm{m}$:
- Butikk 1: `=C3*B6` = $5\,228{,}13 \, \mathrm{kr}$
- Butikk 2: `=C4*B6` = $4\,987{,}50 \, \mathrm{kr}$

**Det er billigst å handle i butikk 2.** Du kan spare `=B8-B9` = $\underline{\underline{241 \, \mathrm{kr}}}$.

### c

Vi bruker regneark til å finne endringen i materialkostnader fra måned til måned.

![Endring i materialkostnader, regneark. Kilde: Udir](/img/user/_resources/1pyba-v24-2-1c-materialkostnader-udir.png){width=80%}

Formel for endring: `=B2-B3` (forrige måned minus neste, slik at økning gir positiv verdi).

**Den største endringen er fra september til oktober, med en økning på $\underline{\underline{34}}$ tusen kroner.**

![Grafisk fremstilling av endringene. Kilde: Udir](/img/user/_resources/1pyba-v24-2-1c-graf-udir.png){width=80%}

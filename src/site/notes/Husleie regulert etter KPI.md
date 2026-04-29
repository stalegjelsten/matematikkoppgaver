---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/husleie-regulert-etter-kpi/","dg-publish":true,"eksamen":"v25","fag":["2p"],"modified":"2026-03-25","oppgave":5,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":5}],"source":null,"status":1,"tags":["oppgave"],"temaer":["prosentregning","prosentvis endring","prisindeks"],"title":"Husleie regulert etter KPI","todo":[],"lf-source-claude":true,"permalink":"/husleie-regulert-etter-kpi/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["2p"],"modified":"2026-03-25","oppgave":5,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":5}],"source":null,"status":1,"tags":["oppgave"],"temaer":["prosentregning","prosentvis endring","prisindeks"],"title":"Husleie regulert etter KPI","todo":[],"lf-source-claude":true}}
---


# Husleie regulert etter KPI

|  År  | KPI for oktober |
| :--: | :-------------: |
| 2021 |      117,2      |
| 2022 |      126,0      |
| 2023 |      131,1      |
| 2024 |      134,5      |

Tabellen ovenfor viser konsumprisindeksen for oktober måned i perioden 2021–2024.

Felix leier en leilighet. I oktober 2023 gikk husleien opp og ble satt til $8500$ kroner per måned.

Husleieloven sier at ny leie kan fastsettes én gang i året, tidligst ett år etter forrige leiefastsetting. Endringen kan ikke overstige endringen i konsumprisindeksen (KPI).

I oktober 2024 fikk Felix varsel fra huseieren om at leien igjen skulle settes opp, og at ny pris ville bli $9000$ kroner per måned.

>[!oppgave]
>a) Gjør beregninger og avgjør om huseieren hadde lov til å sette opp leien til $9000$ kroner per måned på dette tidspunktet.
>b) Lag en oversikt som viser hvor mange prosent konsumprisen økte med per år fra oktober 2021 til oktober 2024.
>c) Gjør antakelser og beregninger, og finn ut hvor mye Felix må regne med å betale i husleie per måned fra og med oktober 2026.

## Fasit

a) Huseieren hadde **ikke** lov til å sette opp leien til $9000$ kr — maksimalt tillatt var $\underline{\underline{8720{,}44 \, \mathrm{kr}}}$.
b) Se regneark/tabell i løsningsforslaget.
c) Med gjennomsnittlig KPI-vekst som antakelse: $\underline{\underline{\approx 9559 \, \mathrm{kr/mnd}}}$ fra oktober 2026.

## Løsningsforslag

Tabellen nedenfor er laget i regneark (openpyxl) og viser alle beregningene samlet:

![Regneark: KPI-regulert husleie](/img/user/_resources/2p-v25-2-5.png)

### a

Vi skal sjekke om en husleieøkning fra $8500 \, \mathrm{kr}$ til $9000 \, \mathrm{kr}$ er lovlig i oktober 2024.

Husleieloven sier at økningen ikke kan overstige endringen i KPI. Vi regner ut prosentvis KPI-endring fra oktober 2023 til oktober 2024:

$$\text{KPI-endring} = \frac{134{,}5 - 131{,}1}{131{,}1} \cdot 100 \approx 2{,}59 \,\%$$

Maksimalt tillatt husleie i oktober 2024 blir da:

$$8500 \cdot \left(1 + \frac{2{,}59}{100}\right) \approx 8500 \cdot 1{,}0259 \approx 8720{,}44 \, \mathrm{kr}$$

Siden $9000 \, \mathrm{kr} > 8720{,}44 \, \mathrm{kr}$, hadde huseieren **ikke** lov til å sette opp leien til $9000 \, \mathrm{kr}$.

**Huseieren kan maksimalt sette husleien til $\underline{\underline{8720{,}44 \, \mathrm{kr}}}$ i oktober 2024.**

### b

Vi regner ut prosentvis endring i KPI for hvert år:

$$\text{Endring} = \frac{\text{KPI dette år} - \text{KPI forrige år}}{\text{KPI forrige år}} \cdot 100$$

| Periode | KPI forrige år | KPI dette år | Prosentvis endring |
| :-----: | :------------: | :----------: | :----------------: |
| okt 2021 → okt 2022 | $117{,}2$ | $126{,}0$ | $\approx 7{,}51 \,\%$ |
| okt 2022 → okt 2023 | $126{,}0$ | $131{,}1$ | $\approx 4{,}05 \,\%$ |
| okt 2023 → okt 2024 | $131{,}1$ | $134{,}5$ | $\approx 2{,}59 \,\%$ |

Utregning for 2021–2022: $\dfrac{126{,}0 - 117{,}2}{117{,}2} \cdot 100 \approx 7{,}51 \,\%$

### c

Vi vet ikke fremtidig KPI, så vi må gjøre en **antakelse**. Vi bruker gjennomsnittlig årlig KPI-vekst fra 2021 til 2024 som grunnlag.

Total vekst fra 2021 til 2024 (3 år):

$$\left(\frac{134{,}5}{117{,}2}\right)^{1/3} - 1 \approx 1{,}0470 - 1 = 0{,}0470 \approx 4{,}70 \,\%\text{ per år}$$

Vi tar utgangspunkt i maks tillatt husleie i oktober 2024 ($8720{,}44 \, \mathrm{kr}$):

| Tidspunkt | Beregning | Husleie |
| :-------: | :-------: | :-----: |
| Oktober 2024 | maks tillatt | $8720{,}44 \, \mathrm{kr}$ |
| Oktober 2025 | $8720{,}44 \cdot 1{,}0470$ | $\approx 9130 \, \mathrm{kr}$ |
| Oktober 2026 | $9130 \cdot 1{,}0470$ | $\approx 9559 \, \mathrm{kr}$ |

**Med gjennomsnittlig KPI-vekst som antakelse må Felix regne med å betale omtrent $\underline{\underline{9559 \, \mathrm{kr/mnd}}}$ fra oktober 2026.**

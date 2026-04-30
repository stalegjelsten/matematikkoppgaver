---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["omdreiningslegeme","integral","volum"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"poeng":2,"title":"Volum av pære med omdreiningslegeme","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/volum-av-paere-med-omdreiningslegeme/","permalink":"/volum-av-paere-med-omdreiningslegeme/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["omdreiningslegeme","integral","volum"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"poeng":2,"title":"Volum av pære med omdreiningslegeme","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Volum av pære med omdreiningslegeme

Bildet nedenfor viser halve snittflaten til en pære som er skåret over på midten. Bildet er satt inn i et koordinatsystem. Enheten langs begge aksene er centimeter.

![Pæresnitt i koordinatsystem](/img/user/_resources/r2-v24-2-2.jpeg){width=60%}

>[!oppgave]
>Bruk informasjonen i bildet til å bestemme det omtrentlige volumet av pæra.

## Fasit

$\underline{\underline{V \approx 310 \, \mathrm{cm}^3}}$

## Løsningsforslag

Vi skal bestemme det omtrentlige volumet av pæra ved å modellere konturen med en funksjon og beregne volumet av omdreiningslegemet rundt $x$-aksen.

**Steg 1 – Les av datapunkter fra bildet**

Vi leser av omtrentlige koordinater langs den øvre kanten av pærekonturen (halvt snitt) fra koordinatsystemet i bildet. Enheten er centimeter:

| $x$ | $0$     | $1$     | $2$     | $3$     | $4$     | $5$     | $6$     | $7$     | $8$     | $9$     | $10$    | $11$    | $12$    |
| --- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| $y$ | $1{,}0$ | $2{,}1$ | $3{,}0$ | $3{,}6$ | $3{,}9$ | $3{,}9$ | $3{,}7$ | $3{,}4$ | $2{,}9$ | $2{,}2$ | $1{,}4$ | $0{,}7$ | $0{,}0$ |

Pæra strekker seg fra $x = 0$ til $x \approx 12 \, \mathrm{cm}$, med maksimal bredde $y \approx 3{,}9 \, \mathrm{cm}$ ved $x \approx 4{-}5 \, \mathrm{cm}$.

**Steg 2 – Finn regresjonspolynom i GeoGebra**

Vi legger inn datapunktene i GeoGebra og bruker polynomregresjon av grad 4 (`Polynomregresjon(L, 4)` der `L` er listen av punkter). Dette gir funksjonen $f$ som modellerer halve pærekonturen:

$$f(x) \approx 0{,}000312x^4 - 0{,}001838x^3 - 0{,}1356x^2 + 1{,}2739x + 0{,}9923$$

![Datapunkter og regresjonskurve for pærekonturen](/img/user/_resources/r2-v24-2-2-graf.png){width=80%}

Kurven passer godt til de avleste punktene.

**Steg 3 – Beregn volumet med CAS**

Volumet av omdreiningslegemet som dannes når grafen til $f$ roteres rundt $x$-aksen er gitt ved:

$$V = \pi \int_0^{12} (f(x))^2 \, \mathrm{d}x$$

Vi beregner integralet i GeoGebra CAS:

![CAS-beregning av volumet](/img/user/_resources/r2-v24-2-2-cas.png){width=80%}

GeoGebra gir $V \approx 309{,}55 \, \mathrm{cm}^3$.

**Svar:** Det omtrentlige volumet av pæra er $\underline{\underline{V \approx 310 \, \mathrm{cm}^3}}$.

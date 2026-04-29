---
{"aliases":[],"date":"2024-11-28","del":2,"dg-permalink":"/forbrukslan-med-betalingsplan/","dg-publish":true,"eksamen":"h24","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":7}],"poeng":3,"source":null,"status":3,"tags":["oppgave"],"temaer":["lån","økonomi"],"title":"Forbrukslån med betalingsplan","permalink":"/forbrukslan-med-betalingsplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-28","del":2,"eksamen":"h24","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":7}],"poeng":3,"source":null,"status":3,"tags":["oppgave"],"temaer":["lån","økonomi"],"title":"Forbrukslån med betalingsplan"}}
---


# Forbrukslån med betalingsplan

Julia har tatt opp et forbrukslån som skal betales ned i løpet av de neste 12 månedene.

Hun skal betale ned på lånet hver måned.

Betalingsplanen ser slik ut:

| Måned | Terminbeløp | Renter | Avdrag | Restlån |
|---|---|---|---|---|
| 1 | kr 6 962,00 | kr 1 275,00 | kr 5 687,00 | kr 69 313,00 |
| 2 | kr 6 962,00 | kr 1 178,32 | kr 5 783,68 | kr 63 529,32 |
| 3 | kr 6 962,00 | kr 1 080,00 | kr 5 882,00 | kr 57 647,32 |
| 4 | kr 6 962,00 | kr 980,00 | kr 5 982,00 | kr 51 665,32 |
| 5 | kr 6 962,00 | kr 878,31 | kr 6 083,69 | kr 45 581,63 |
| 6 | kr 6 962,00 | kr 774,89 | kr 6 187,11 | kr 39 394,52 |
| 7 | kr 6 962,00 | kr 669,71 | kr 6 292,29 | kr 33 102,23 |
| 8 | kr 6 962,00 | kr 562,74 | kr 6 399,26 | kr 26 702,97 |
| 9 | kr 6 962,00 | kr 453,95 | kr 6 508,05 | kr 20 194,92 |
| 10 | kr 6 962,00 | kr 343,31 | kr 6 618,69 | kr 13 576,23 |
| 11 | kr 6 962,00 | kr 230,80 | kr 6 731,20 | kr 6 845,03 |
| 12 | kr 6 961,39 | kr 116,37 | kr 6 845,03 | – |

>[!oppgave]
>Bruk betalingsplanen til å avgjøre
>
>- om lånet er et serielån eller et annuitetslån
>- hvor mye penger Julia har lånt
>- hvor mange prosent Julia betaler i månedlig rente

## Fasit

- Annuitetslån
- Julia lånte $\underline{\underline{75\,000 \, \mathrm{kr}}}$
- Månedlig rente: $\underline{\underline{1{,}70 \,\%}}$

## Løsningsforslag

Vi bruker betalingsplanen i regnearket nedenfor.

![Betalingsplan for Julias forbrukslån](/img/user/_resources/2p-h24-2-7.png){width=80%}

### Serielån eller annuitetslån?

Vi ser på **terminbeløpet** (det Julia betaler hver måned):

- Alle terminbeløp er kr 6 962,00 (unntatt siste måned som er kr 6 961,39 på grunn av avrunding).

Terminbeløpet er **konstant** gjennom hele nedbetalingsperioden.

Vi ser også at **avdraget øker** for hver måned (fra kr 5 687 i mnd 1 til kr 6 845 i mnd 12), mens **rentene synker**.

Dette er kjennetegnet på et **annuitetslån**: konstant terminbeløp, voksende avdrag og synkende renter.

**Julia har et annuitetslån.**

### Opprinnelig lånebeløp

Det opprinnelige lånet er restlånet etter måned 1 pluss avdraget i måned 1:

$$75\,000 = 69\,313 + 5\,687$$

**Julia lånte $\underline{\underline{75\,000 \, \mathrm{kr}}}$.**

### Månedlig rentesats

Rentene i måned 1 beregnes av det opprinnelige lånet:

$$r = \frac{\text{renter mnd 1}}{\text{opprinnelig lån}} = \frac{1\,275}{75\,000} = 0{,}017 = 1{,}70\,\%$$

Vi kan verifisere med måned 2: restlånet etter mnd 1 er kr 69 313,00, og

$$69\,313{,}00 \cdot 0{,}017 = 1\,178{,}32 \, \mathrm{kr}$$

som stemmer nøyaktig med tabellen.

**Den månedlige renten er $\underline{\underline{1{,}70 \,\%}}$.**

---
{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"dg-publish":true,"temaer":["lån","rekker"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/mathias-sine-lan-for-a-kjope-bil/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"temaer":["lån","rekker"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/mathias-sine-lan-for-a-kjope-bil/"}}
---




Mathias ønsker å kjøpe seg en bil. Han går innom nærmeste bilforhandler, der han ser to ulike biler som vekker interesse.

Mathias har ingen egenkapital og må derfor låne hele beløpet. Bilforretningen gir Mathias følgende to tilbud for bilene:

> [!yellow-box] Tilbud 1: Dieselbil
> En brukt dieselbil. Pris 357 000 kroner. Nedbetalingstid 8 år, med én termin per år. Første innbetaling etter ett år. Rentesats 4 %.

> [!green-box] Tilbud 2: Elbil
> En ny elbil. Pris 450 000 kroner. Nedbetalingstid 10 år, med én termin per år og terminbeløp på 52 000 kroner. Første innbetaling etter ett år.

>[!oppgave]
>a) Sett opp en geometrisk rekke som viser hvor mye Mathias må betale for den brukte dieselbilen.
>
>Bruk rekken til å bestemme terminbeløpene Mathias må betale dersom han kjøper bilen.

>[!oppgave]
> b) Bestem rentesatsen Mathias får dersom han velger å kjøpe elbilen.

>[!oppgave]
>c) Hvilket tilbud fører til at Mathias må betale mest renter totalt?

## Fasit

a) 53 024 kr
b) 2,72 %
c) Kjøp av elbil gir høyest rentekostnad.

## Løsningsforslag

![Løsning av oppgave 4 del 2 i CAS](/img/user/_resources/s2-h25-2-4-cas.png){width=60%}

### 2-4a
Et annuitetslån passer godt til oppgaven siden den spør etter en geometrisk rekke som viser hvor mye Mathias må betale.

I et annuitetslån må summen av nåverdiene til terminbeløpene tilsvare lånebeløpet, altså
$$
\sum_{i=1}^8 \frac{T}{1{,}04^{i}}=357\,000
$$
Jeg løser denne i CAS (se linje 1).

**Terminbeløpene er 53 024 kr.**

### 2-4b
Siden det er fast terminbeløp på 52 000 kr, så vil også dette lånet være et annuitetslån.

Jeg setter opp likningen i CAS og løser (se linje 2). Vekstfaktoren er $1{,}0272$ (vi ser bort fra den negative løsningen da vekstfaktorer alltid er positive), dette gir $2{,}72 \,\%$ rente.

**Rentesatsen er 2,72 %.**

### 2-4c
Rentekostnadene er summen av terminbeløpene minus prisen på bilene. Disse har jeg beregnet i linje 3 og 4 i utklippet.

**Å kjøpe elbilen vil gi høyest rentekostnader totalt, men det er først og fremst på grunn av at elbilen er dyrere og nedbetalingstiden er lengre. Rentesatsen er lavest for elbilen.**

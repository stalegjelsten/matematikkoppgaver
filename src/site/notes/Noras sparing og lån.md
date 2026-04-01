---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"dg-publish":true,"temaer":["lån","sparing","excel","cas"],"fag":["s2","r2"],"eksamen":"v25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":2}],"title":"Noras sparing og lån","source":"Eksamen S2 høst 2025","todo":null,"status":3,"permalink":"/noras-sparing-og-lan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"temaer":["lån","sparing","excel","cas"],"fag":["s2","r2"],"eksamen":"v25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":2}],"title":"Noras sparing og lån","source":"Eksamen S2 høst 2025","todo":null,"status":3,"permalink":"/noras-sparing-og-lan/"}}
---


# Noras sparing og lån


Nora blir 37 år i 2026 og vil begynne å spare til egen pensjon. 

Hun vil sette et fast beløp inn på en konto i banken 1. januar hvert år. Hun vil begynne sparingen 1. januar 2026 og holde på til og med januar 2055.

Målet hennes er å ha 3 750 000 kroner i banken etter at rentene for 2055 er lagt til. Nora venter at den årlige rentesatsen på kontoen vil være 2,5 \%.

>[!oppgave]
>a) Hvor stort beløp må Nora sette i banken hvert år for å nå målet?

Nora har et huslån. Lånet har årlige terminer, og Nora betaler terminbeløpet i januar hvert år. I januar 2026 vil lånet være på 3 000 000 kroner.

Nora vil betale ned lånet før det året hun fyller 70. Hun har regnet seg fram til at hun da må betale 150 000 kroner hver termin fra og med januar 2026 til og med januar 2058.

>[!oppgave]
>b) Hvor høy har Nora regnet med at den årlige rentesatsen på lånet vil være?

Nora ønsker å hjelpe datteren med egenkapital til bolig. Nora oppretter derfor en ekstra sparekonto og setter opp en spareplan med ett årlig innskudd i 10 år. Det første innskuddet skal være 10000 kroner, deretter skal beløpene hun setter inn, øke med 6 \% per år. Nora venter at rentesatsen vil være 2,5 \% per år.

Målet er å ha 150 000 kroner på sparekontoen ett år etter at hun har satt inn det siste beløpet.

>[!oppgave]
> c) Vil Nora nå målet sitt?

## Fasit

a) 83 333 kr
b) 3,258 %
c) Nei, 149 581 kr

## Løsningsforslag

![CAS-løsning av 2-4](/img/user/_resources/s2-v25-2-4-cas.png){width=70%}

### 2-4a
Vi kaller det ukjente beløpet $B$. Nora skal sette inn $B$ på konto 30 ganger. Det siste beløpet skal ha fått renter i 1 år, mens det første beløpet skal ha fått renter i 30 år. 

For å ha 3 750 000 kr på konto etter 30 år så kan vi altså sette opp en likning med ei rekke. Likningen er løst i linje 1 i GeoGebra.
$$
\underbrace{ \textcolor{tomato}{B\cdot 1{,}025^{1}} }_{ \text{År 2055} }+\underbrace{ \textcolor{seagreen}{B\cdot 1{,}025^{2}} }_{ \text{År 2054} }+\dots+ \underbrace{ \textcolor{maroon}{B\cdot 1{,}025^{30}} }_{ \text{År 2026} }=3\,750\,000
$$

**Nora må sette inn 83 333 kr hvert år for å nå målet.**

### 2-4b
Vi kaller den ukjente vekstfaktoren til renta $v$. Nora skal betale inn lånet over 33 terminer med første termin 1. januar 2026. Nåverdien (NV) til terminbeløpene vil være:
$$
\underbrace{ \textcolor{orange}{\frac{150\,000}{v^{0}}} }_{ \text{NV til 2026-beløpet} }+\underbrace{ \textcolor{seagreen}{\frac{150\,000}{v^{1}}} }_{ \text{NV til 2027-beløpet} }+\dots+\underbrace{ \textcolor{tomato}{\frac{150\,000}{v^{32}}} }_{ \text{NV til 2058-beløpet} }=3\,000\,000
$$
Likningen er løst i linje 2 i GeoGebra.

**Nora har regnet med at den årlige rentesatsen er 3,528 %.**

### 2-4c
Sparebeløpene til Nora kan sees på som en rekke der det første beløpet er 10000 kr og får renter i 10 år, mens det siste beløpet er $10000\cdot 1{,}06^{9}$ og får renter i ett år.
$$
\underbrace{ \textcolor{tomato}{10000 \cdot 1{,}06^{0}\cdot 1{,}025^{10}} }_{ \text{Beløp år 0} } + \underbrace{ \textcolor{seagreen}{10000 \cdot 1{,}06^{1}\cdot 1{,}025^{9}} }_{ \text{Beløp år 1} } + \dots + \underbrace{ \textcolor{maroon}{10000 \cdot 1{,}06^{9}\cdot 1{,}025^{1}} }_{ \text{ Beløp år 9 } }
$$
Beløpet er beregnet i linje 3 i GeoGebra.

**Nora vil ikke nå målet på 150 000 kr. Hun vil ha 149 581 kr på kontoen etter 10 år.**

>[!note] Alternativ løsning med målsøking i Excel
>
> I regnearket nedenfor har jeg satt opp de tre deloppgavene i Excel for å løse med målsøking. 
>
>**Oppgave a** er løst ved å beregne innskuddet på kontoen i starten og slutten av hvert år. Noras sparebeløp er satt i celle `C5`. Ved å bruke målsøking og sette at celle `C37` skal bli 3 750 000 kr ved å endre på `C5` fikk jeg svaret 83 333 kr.
>
>**Oppgave b** er løst ved å skrive inn restlånet 1. januar 2026, og beregne restlånene etter innbetaling hvert år. Restlånet etter innbetaling beregnes ved å sette avdraget lik $\frac{T}{v^{32-i}}$, der $v$ er vekstfaktoren til renta og $i$ er antall år siden 1. januar 2026. Renta ble funnet ved å gjøre målsøking der restlånet etter innbetaling skal være 0 kr i 2058.
>
>**Oppgave c.** I denne oppgaven øker sparebeløpet med 6 % per år i kolonne `O`, samtidig som vi beregner renter i kolonner `Q`. I slutten av 2035 vil Nora ha 149 581 kr på konto.

![Regneark for løsning av Noras sparing og lån](/img/user/_resources/s2-v25-2-4-excel1.png)

![Formler for regneark med målsøking](/img/user/_resources/s2-v25-2-4-excel-formler.png)

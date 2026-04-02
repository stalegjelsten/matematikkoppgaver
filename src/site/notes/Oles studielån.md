---
{"tags":["oppgave"],"date":"2024-12-14","modified":"2024-12-14","aliases":null,"dg-publish":true,"temaer":["lån"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Oles studielån","source":null,"todo":null,"status":3,"dg-permalink":"/oles-studielan/","permalink":"/oles-studielan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-14","modified":"2024-12-14","aliases":null,"temaer":["lån"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Oles studielån","source":null,"todo":null,"status":3}}
---


# Oles studielån


Ole vil studere i Tyskland og skal fullføre en mastergrad i løpet av 5 år. Han undersøker hva han kan få i stipend og lån fra Lånekassen for å dekke opphold og skolepenger.

Etter 5 år vil det samlede lånebeløpet være 799 273 kr. Rentesatsen er 5,242 % per år.

Rentene i Lånekassen begynner først å løpe rett etter fullført studium. Første avdrag betales ett år etter at du har fullført studiet. Nedbetalingstid er maks 30 år med én termin per år.

>[!oppgave]
>a) Vis at terminbeløpene Ole må betale, blir 53 437 kr dersom han velger maks nedbetalingstid.

Det er forventet at rentesatsen blir lavere fremover. Ole regner litt på det og tenker at med den forventede rentesatsen kan han klare å betale ned lånet på 25 år, med det samme terminbeløpet som i oppgave a).

>[!oppgave]
>b) Hva må rentesatsen være hvis han skal klare det?

Ole tenker at han etter hvert kan klare å betale et større terminbeløp. Han ser for seg at han betaler samme terminbeløp som i oppgave a) de 12 første årene. Deretter øker han terminbeløpet med 5 % per termin resten av nedbetalingstiden. Han antar at rentesatsen vil være 5,242 % per år gjennom hele perioden.

>[!oppgave]
>c) Hvor mange år vil det ta før lånet er nedbetalt, dersom Ole klarer dette?

## Fasit

b) 4,416 %
c) 24 år

## Løsningsforslag

![Løsning av oppgave 5 del 2 i CAS](/img/user/_resources/s2-h24-2-5-cas.png){width=80%}

a) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. Terminbeløpet er ukjent, og dette ble funnet i linje 1 i GeoGebra. **Lånebeløpet er 53 437 kr.**
b) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. Vekstfaktoren er ukjent, og denne ble funnet i linje 2 i GeoGebra. **Rentesatsen må være 4,416 %.**
c) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. De 12 første årene bruker vi vanlig formel, de $b$ neste årene så vil terminbeløpet øke med 5 % per år. Antall ledd i rekka er ukjent, og dette ble bestemt i linje 3 i GeoGebra. **Det tar 24 år før lånet er nedbetalt.**

### 2-5 med Excel
Vi kan løse hele denne oppgaven med Excel og målsøking. Se utklippet av regnearket

For å løse a) kan vi sette at alle terminbeløpene skal være lik det første terminbeløpet, og for å beregne nåverdien av terminbeløpet i celle D10 har jeg brukt formelen `=(C10/(1+$D$5)^B10)`. Vi kan da bruke målsøking på terminbeløpet og sjekke hva det må være for at summen skal bli lik lånebeløpet. (*Obs, jeg har rundet av svaret etter målsøking*.)

For å løse b) kan vi gå ned til 25 terminer og bruke målsøking på renta hvis summen skal bli lik lånebløpet. (*Obs, jeg har rundet av svaret etter målsøking*.)

I oppgave c) så har jeg satt at terminbeløpet skal fra år 13 skal være 1,05 ganger det forrige terminbeløpet. Ved å markere cellene i kolonne L så kunne jeg lett finne ut at etter 24 år ble summen mer enn lånebeløpet. Jeg fjernet terminbeløpene etter år 24.

![Løsning av oppgave 5 del 2 i Excel](/img/user/_resources/s2-h24-2-5-excel.png)

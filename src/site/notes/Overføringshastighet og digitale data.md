---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["bits og bytes","store tall","tallregning"],"fag":["1p-y el","1p-y im"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2},{"fag":"1p-y im","del":2,"oppgave":2}],"title":"Overføringshastighet og digitale data","status":0,"lf-source-claude":true,"source":null,"todo":null,"dg-permalink":"/overforingshastighet-og-digitale-data/","permalink":"/overforingshastighet-og-digitale-data/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["bits og bytes","store tall","tallregning"],"fag":["1p-y el","1p-y im"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2},{"fag":"1p-y im","del":2,"oppgave":2}],"title":"Overføringshastighet og digitale data","status":0,"lf-source-claude":true,"source":null,"todo":null}}
---


# Overføringshastighet og digitale data

Omar undersøker den historiske utviklingen av overføringshastigheten for digitale data. Den har utviklet seg enormt, synes Omar.

Han tar utgangspunkt i romsonden Voyager 2, som ble skutt opp i verdensrommet i 1977. Den kommuniserer fremdeles med oss her på jorda med en overføringshastighet på 160 bit/s.

Voyager 2 har en datamaskin med et minne på $69{,}6 \mathrm{~kB}$.

>[!tip] Husk
>$$\text{overføringshastighet} = \frac{\text{datamengde}}{\text{tid}}$$
>$$1 \, \mathrm{B} = 8 \, \mathrm{bit}$$

>[!green-box] Omars grønne spørsmål
>- Hvor mange bit er minnet til Voyager 2?
>- Hvor lang tid vil romsonden bruke på å sende en kopi av hele minnet på $69{,}6 \mathrm{~kB}$ når overføringshastigheten er 160 bit/s?

>[!yellow-box] Omars gule spørsmål
> Da internett ble vanlig i private hjem var det ofte ISDN-linjer med en kapasitet på 128 kbit/s som ble valgt.
> 
> Hvor mange ISDN-linjer måtte jeg ha hatt for å ha minst like høy nedlastingshastighet som et bredbånd på 100 Mbit/s, som er vanlig i dag?

> [!blue-box] Omars blå spørsmål
> Jeg hører på en sang på Spotify som varer i 3 minutter og 30 sekunder, med en kvalitet på 96 kbit/s. 
> 
> Hvor mange timer ville det ha tatt å laste ned denne sangen i samme kvalitet dersom overføringshastigheten hadde tilsvart den Voyager 2 kommuniserer med?
> 
> Jeg vil høre sangen offline. Hvor høy bredbåndshastighet i Mbit/s trenger jeg for å laste ned denne sangen på ett sekund?

>[!oppgave]
>Gjør beregninger og vurderinger, og finn ut mest mulig av det Omar lurer på.

## Fasit

Voyager 2 minne: 556 800 bit · Tid å sende: 58 min · 782 ISDN-linjer · Sang med Voyager: 35 timer · Bredbånd for 1 sek: 20,16 Mbit/s

## Løsningsforslag

**Omars grønne spørsmål**

*Hvor mange bit er minnet til Voyager 2?*

Vi gjør om fra kB til bit. Først fra kB til B, deretter fra B til bit:

$$69{,}6 \, \mathrm{kB} = 69{,}6 \cdot 1000 \, \mathrm{B} = 69\,600 \, \mathrm{B}$$

$$69\,600 \, \mathrm{B} \cdot 8 = \underline{\underline{556\,800 \, \mathrm{bit}}}$$

*Hvor lang tid bruker romsonden på å sende hele minnet?*

Vi bruker formelen og løser for tid:

$$\text{tid} = \frac{\text{datamengde}}{\text{overføringshastighet}} = \frac{556\,800 \, \mathrm{bit}}{160 \, \mathrm{bit/s}} = 3480 \, \mathrm{s}$$

Vi gjør om til minutter: $3480 \div 60 = \underline{\underline{58 \, \mathrm{min}}}$

**Omars gule spørsmål**

*Hvor mange ISDN-linjer for 100 Mbit/s?*

Vi gjør om til samme enhet: $100 \, \mathrm{Mbit/s} = 100\,000 \, \mathrm{kbit/s}$

$$\frac{100\,000 \, \mathrm{kbit/s}}{128 \, \mathrm{kbit/s}} = 781{,}25$$

Siden vi må ha *minst* like høy hastighet, runder vi opp. **Vi trenger $\underline{\underline{782 \text{ ISDN-linjer}}}$.**

**Omars blå spørsmål**

*Hvor lang tid med Voyager-hastighet?*

Sangen varer $3 \, \mathrm{min} \, 30 \, \mathrm{s} = 210 \, \mathrm{s}$ med kvalitet $96 \, \mathrm{kbit/s}$.

Størrelsen på sangen:

$$96 \, \mathrm{kbit/s} \cdot 210 \, \mathrm{s} = 20\,160 \, \mathrm{kbit} = 20\,160\,000 \, \mathrm{bit}$$

Tid med Voyager 2 sin hastighet på 160 bit/s:

$$\frac{20\,160\,000}{160} = 126\,000 \, \mathrm{s} = \frac{126\,000}{3600} = \underline{\underline{35 \, \mathrm{timer}}}$$

*Bredbåndshastighet for å laste ned på ett sekund?*

$$\frac{20\,160\,000 \, \mathrm{bit}}{1 \, \mathrm{s}} = 20\,160\,000 \, \mathrm{bit/s} = \underline{\underline{20{,}16 \, \mathrm{Mbit/s}}}$$

**For å laste ned sangen på ett sekund trenger Omar et bredbånd på minst $\underline{\underline{20{,}16 \, \mathrm{Mbit/s}}}$.**

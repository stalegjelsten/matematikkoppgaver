---
{"aliases":[],"date":"2023-11-28","del":2,"dg-permalink":"/klimagassutslipp-eksponentiell-vekst/","dg-publish":true,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":8,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":8}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["modellering","eksponentialfunksjoner"],"title":"Klimagassutslipp eksponentiell vekst","lf-source-claude":true,"todo":[],"permalink":"/klimagassutslipp-eksponentiell-vekst/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-28","del":2,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":8,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":8}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["modellering","eksponentialfunksjoner"],"title":"Klimagassutslipp eksponentiell vekst","lf-source-claude":true,"todo":[]}}
---


# Klimagassutslipp eksponentiell vekst

- I 1990 var Norges klimagassutslipp på 51,3 millioner tonn CO₂-ekvivalenter.
- I 2022 var Norges klimagassutslipp på 48,9 millioner tonn CO₂-ekvivalenter.

Norske myndigheter har satt som mål at klimagassutslippet skal reduseres med 55 % innen 2030, sammenliknet med hva utslippet var i 1990.

Arne ser for seg at utslippet reduseres med en fast prosent hvert år. Han ønsker å lage en modell som viser hvor mange prosent den årlige reduksjonen må være for å nå målet i 2030.

>[!oppgave]
>a) La $x$ være antall år etter 2022 og lag modellen.

Norge har som mål å bli et lavutslippssamfunn innen 2050. Da må klimagassutslippet reduseres med 90–95 % sammenliknet med utslippet i 1990.

>[!oppgave]
>b) Bruk modellen du fant i oppgave a), og vurder den opp mot opplysningene om målet for klimagassutslipp i 2050.

## Fasit

a) $U(x) = 48{,}9 \cdot 0{,}9104^x$, der nedgangen er ca. $\underline{\underline{8{,}96 \,\%}}$ per år.
b) Modellen gir $U(28) \approx \underline{\underline{3{,}53}}$ mill. tonn i 2050, som tilsvarer ca. 93 % reduksjon fra 1990-nivå — innenfor målet på 90–95 %.

## Løsningsforslag

### a

Utslippet i 2022 er startverdi: $48{,}9$ millioner tonn CO₂-ekvivalenter.

Vi setter opp en eksponentialfunksjon der $x$ er antall år etter 2022:

$$U(x) = 48{,}9 \cdot r^x$$

Klimamålet for 2030 er 55 % reduksjon fra 1990-nivå:

$$\text{Mål}_{2030} = 51{,}3 \cdot (1 - 0{,}55) = 51{,}3 \cdot 0{,}45 = 23{,}085 \text{ mill. tonn}$$

I 2030 er $x = 2030 - 2022 = 8$. Vi setter opp likningen:

$$48{,}9 \cdot r^8 = 23{,}085$$

$$r^8 = \frac{23{,}085}{48{,}9} \approx 0{,}4721$$

$$r = 0{,}4721^{\frac{1}{8}} \approx 0{,}9104$$

Den prosentvise nedgangen per år er:

$$1 - 0{,}9104 = 0{,}0896 \approx 8{,}96 \,\%$$

**Modellen er:**

$$U(x) = 48{,}9 \cdot 0{,}9104^x$$

der $x$ er antall år etter 2022.

### b

Vi bruker GeoGebra til å tegne modellen og legger inn målene for 2050.

![Eksponentiell modell for klimagassutslipp med mål for 2030 og 2050](/img/user/_resources/2p-h23-2-8.png){width=80%}

Vi leser av grafen (se `P2050`) at modellen gir

$$U(28) = 48{,}9 \cdot 0{,}9104^{28} \approx 3{,}53 \text{ millioner tonn i 2050}$$

Målet for 2050 er 90–95 % reduksjon fra 1990-nivå:

$$\text{Mål}_{90\%} = 51{,}3 \cdot 0{,}10 = 5{,}13 \text{ mill. tonn} \quad \text{(se \texttt{Maal2050lo})}$$
$$\text{Mål}_{95\%} = 51{,}3 \cdot 0{,}05 = 2{,}565 \text{ mill. tonn} \quad \text{(se \texttt{Maal2050hi})}$$

Modellverdien $3{,}53$ mill. tonn ligger mellom de to målinjene (de to grønne linjene i grafen), som betyr at den er innenfor intervallet 90–95 % reduksjon.

**Modellen viser at hvis utslippet reduseres med ca. $8{,}96 \,\%$ hvert år fra 2022, vil utslippet i 2050 være ca. $3{,}53$ millioner tonn — det er en reduksjon på ca. 93 % fra 1990-nivå, og dermed innenfor lavutslippsmålet på 90–95 %.**

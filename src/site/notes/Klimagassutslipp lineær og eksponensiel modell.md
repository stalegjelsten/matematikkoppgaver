---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["modellering","lineær vekst","eksponentialfunksjoner"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":8,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":8}],"title":"Klimagassutslipp lineær og eksponensiel modell","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/klimagassutslipp-lineaer-og-eksponensiel-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["modellering","lineær vekst","eksponentialfunksjoner"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":8,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":8}],"title":"Klimagassutslipp lineær og eksponensiel modell","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Klimagassutslipp lineær og eksponensiel modell

- I 1990 var Norges klimagassutslipp på 51,3 millioner tonn CO₂-ekvivalenter.
- I 2022 var Norges klimagassutslipp på 48,9 millioner tonn CO₂-ekvivalenter.

Norske myndigheter har satt som mål at klimagassutslippet skal reduseres med 55 % innen 2030, sammenliknet med hva utslippet var i 1990.

Anders og Arne diskuterer hvordan det kan være mulig å nå dette målet.

- Anders ser for seg at utslippet reduseres med et fast antall tonn hvert år. Han ønsker å lage en modell som viser hvor mange tonn den årlige reduksjonen må være på for å nå målet i 2030.
- Arne ser for seg at utslippet reduseres med en fast prosent hvert år. Han ønsker å lage en modell som viser hvor mange prosent den årlige reduksjonen må være for å nå målet i 2030.

>[!oppgave]
>a) La $x$ være antall år etter 2022 og hjelp Anders og Arne med å lage modellene.

Norge har som mål å bli et lavutslippssamfunn innen 2050. Da må klimagassutslippet reduseres med 90–95 % sammenliknet med utslippet i 1990.

>[!oppgave]
>b) Bruk modellene du fant i oppgave a), og vurder dem opp mot opplysningene om målet for klimagassutslipp i 2050.

## Fasit

a) $A(x) = 48{,}9 - 3{,}23 \cdot x$ (lineær), $F(x) = 48{,}9 \cdot 0{,}9104^{x}$ (eksponentiell, ca. 9 % reduksjon/år)
b) Lineær modell gir negativt utslipp i 2050 (urealistisk). Eksponentiell modell gir ca. 3,53 mill. tonn i 2050 ≈ 93 % reduksjon fra 1990, som er innenfor 90–95 %-målet.

## Løsningsforslag

### 2-8a

Norske myndigheter ønsker at klimagassutslippet skal reduseres med 55 % fra 1990-nivå innen 2030. Det betyr at målet for 2030 er:

$$51{,}3 \cdot (1 - 0{,}55) = 51{,}3 \cdot 0{,}45 = 23{,}085 \text{ millioner tonn}$$

Siden $x$ er antall år etter 2022, tilsvarer 2030 $x = 8$.

**Anders – lineær modell:**

Vi vet at modellen skal starte i $A(0) = 48{,}9$ og nå $A(8) = 23{,}085$. Den lineære modellen er:

$$A(x) = 48{,}9 - d \cdot x$$

Vi finner den faste reduksjonen $d$ per år:

$$
\begin{aligned}
A(8) &= 23{,}085 \\
48{,}9 - 8d &= 23{,}085 \\
8d &= 48{,}9 - 23{,}085 = 25{,}815 \\
d &= \frac{25{,}815}{8} \approx 3{,}23
\end{aligned}
$$

**Anders sin lineære modell er $\underline{\underline{A(x) = 48{,}9 - 3{,}23 \cdot x}}$.**

Det betyr at utslippet må reduseres med omtrent 3,23 millioner tonn per år.

**Arne – eksponentiell modell:**

Vi vet at modellen skal starte i $F(0) = 48{,}9$ og nå $F(8) = 23{,}085$. Den eksponentielle modellen er:

$$F(x) = 48{,}9 \cdot k^{x}$$

Vi finner vekstfaktoren $k$:

$$
\begin{aligned}
F(8) &= 23{,}085 \\
48{,}9 \cdot k^{8} &= 23{,}085 \\
k^{8} &= \frac{23{,}085}{48{,}9} \approx 0{,}4721 \\
k &= 0{,}4721^{\frac{1}{8}} \approx 0{,}9104
\end{aligned}
$$

**Arne sin eksponentielle modell er $\underline{\underline{F(x) = 48{,}9 \cdot 0{,}9104^{x}}}$.**

Det betyr at utslippet må reduseres med omtrent $1 - 0{,}9104 \approx 8{,}96 \,\%$ per år.

### 2-8b

Vi bruker modellene til å beregne utslippet i 2050 ($x = 28$):

$$A(28) = 48{,}9 - 3{,}23 \cdot 28 \approx -41{,}5 \text{ millioner tonn}$$

$$F(28) = 48{,}9 \cdot 0{,}9104^{28} \approx 3{,}53 \text{ millioner tonn}$$

Målet for 2050 er 90–95 % reduksjon fra 1990, altså mellom 2,565 og 5,13 millioner tonn.

![Lineær og eksponentiell modell for klimagassutslipp](/img/user/_resources/2p-y-h23-2-8-a-graf.png)

**Vurdering av modellene:**

Anders sin lineære modell gir et negativt utslipp i 2050 (ca. −41,5 millioner tonn). Det er ikke fysisk mulig – utslippet kan ikke bli negativt. Den lineære modellen er derfor ikke egnet for å vurdere 2050-målet.

Arne sin eksponentielle modell gir ca. 3,53 millioner tonn i 2050. Det tilsvarer en reduksjon på

$$\frac{51{,}3 - 3{,}53}{51{,}3} \approx 93{,}1 \,\%$$

fra 1990-nivå, som er innenfor målet på 90–95 %. **Den eksponentielle modellen viser at det er mulig å nå lavutslippsmålet i 2050 dersom utslippet reduseres med ca. 9 % hvert år.**

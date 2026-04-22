---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["sparing","rekker","økonomi"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":4,"title":"Camillas aksjefond","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/camillas-aksjefond/","permalink":"/camillas-aksjefond/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["sparing","rekker","økonomi"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":4,"title":"Camillas aksjefond","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Camillas aksjefond

Camilla er 11 år. Da hun ble født, bestemte foreldrene seg for å gi henne 6000 kroner hver gang hun hadde bursdag. Pengene ble plassert i et aksjefond. Første beløp ble satt inn den dagen hun fylte 1 år. Dette fortsatte de med hvert år til og med det året hun ble 10 år. Aksjefondet ga en årlig gjennomsnittlig avkastning på 6 prosent.

>[!oppgave]
>a) Hva var verdien på Camillas andel i aksjefondet dagen før hun fylte 11 år?

På elleveårsdagen økte de beløpet de satte inn i fondet til 12 000 kroner. Deretter vil de øke det årlige beløpet med 5 prosent hvert år, helt til og med den dagen Camilla fyller 20 år. Det vil si at de på tolvårsdagen vil sette inn 12 600 kroner, på trettenårsdagen vil de sette inn 13 230 kroner, og så videre.

Vi antar at avkastningen på aksjefondet fortsatt vil være 6 prosent per år.

>[!oppgave]
>b) Hva vil verdien på Camillas andel i aksjefondet være like etter at det siste beløpet blir satt inn?

## Fasit

a) $\approx 83\,830 \text{~kr}$
b) $\approx 335\,972 \text{~kr}$

## Løsningsforslag

### a

Innskudd nummer $i$ (satt inn på $i$-årsdagen) har vokst med rente i $(11 - i)$ år når vi måler «dagen før 11-årsdagen». Men verdien «dagen før 11-årsdagen» betyr at hvert innskudd har fått rente i hele år fra innskuddstidspunktet:

- Innskudd 1 (1-årsdag) vokser i 10 år: $6000 \cdot 1{,}06^{10}$
- Innskudd 2 (2-årsdag) vokser i 9 år: $6000 \cdot 1{,}06^9$
- $\vdots$
- Innskudd 10 (10-årsdag) vokser i 1 år: $6000 \cdot 1{,}06^1$

Totalverdien er en geometrisk rekke:

$$S = \sum_{i=1}^{10} 6000 \cdot 1{,}06^i = 6000 \cdot 1{,}06 \cdot \frac{1{,}06^{10} - 1}{1{,}06 - 1}$$

Vi beregner i CAS (se linje 1 i utklippet):

![CAS-beregning av aksjefond](/img/user/_resources/s2-h21-2-2-cas.png)

$$\underline{\underline{S \approx 83\,830 \text{~kr}}}$$

### b

Verdien fra a) vokser i 9 nye år (fra 11- til 20-årsdag):

$$S_a \cdot 1{,}06^{9} \approx 141\,629 \text{~kr}$$

I tillegg kommer nye innskudd fra 11-årsdagen til 20-årsdagen. Innskudd på $j$-årsdagen er $12\,000 \cdot 1{,}05^{j-11}$ og vokser med 6 % i $(20-j)$ år:

$$S_{\text{ny}} = \sum_{j=11}^{20} 12\,000 \cdot 1{,}05^{j-11} \cdot 1{,}06^{20-j}$$

Fra CAS (linje 4): $S_{\text{ny}} \approx 194\,344 \text{~kr}$

Totalverdi:

$$\underline{\underline{S_a \cdot 1{,}06^{9} + S_{\text{ny}} \approx 335\,972 \text{~kr}}}$$

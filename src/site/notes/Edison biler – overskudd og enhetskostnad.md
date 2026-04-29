---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/edison-biler-overskudd-og-enhetskostnad/","dg-publish":true,"eksamen":"v24","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["økonomi","derivasjon","enhetskostnad"],"title":"Edison biler – overskudd og enhetskostnad","todo":[],"permalink":"/edison-biler-overskudd-og-enhetskostnad/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["økonomi","derivasjon","enhetskostnad"],"title":"Edison biler – overskudd og enhetskostnad","todo":[]}}
---


# Edison biler – overskudd og enhetskostnad

Bedriften Edison produserer biler. Kostnaden (oppgitt i 1000 kroner) ved å produsere $x$ biler per måned er gitt ved

$$K(x) = 200x \cdot 1{,}015^{x} + 200.$$

Edison selger alle bilene de produserer. Hver bil selges for 600 000 kroner.

>[!oppgave]
>a) Hvilken produksjonsmengde gir størst mulig overskudd?
>b) Hvilken produksjonsmengde gir lavest mulig enhetskostnad?

En måned trenger et firma 70 biler. De er villige til å betale mer enn 600 000 kroner per bil. Firmaet inngår en kontrakt om at Edison skal lage 70 biler denne måneden og selge alle til dem. Kontrakten gir Edison et overskudd på 15 millioner kroner.

>[!oppgave]
>c) Hvilken pris ble avtalt per bil i denne kontrakten?

## Fasit

a) $\underline{\underline{x = 41 \text{ biler}}}$ gir størst overskudd, $O(41) \approx 9302 \text{ tusen kr} \approx 9{,}3 \text{ mill. kr}$
b) $\underline{\underline{x = 8 \text{ biler}}}$ gir lavest enhetskostnad, $E(8) \approx 250{,}3 \text{ tusen kr per bil}$
c) $\underline{\underline{p \approx 784\,234 \text{ kr per bil}}}$

## Løsningsforslag

Vi definerer inntektsfunksjonen. Edison selger hver bil for 600 000 kr = 600 tusen kr, så

$$I(x) = 600x$$

Overskuddet er inntekt minus kostnad:

$$O(x) = I(x) - K(x) = 600x - 200x \cdot 1{,}015^x - 200$$

Vi bruker GeoGebra CAS til å løse alle deloppgavene:

![GeoGebra CAS – Edison biler](/img/user/_resources/s1-v24-2-1-cas.png)

### a

Vi finner maksimalt overskudd ved å løse $O'(x) = 0$.

Fra CAS (linje 4): $x \approx 41{,}48$.

Siden Edison produserer et heltall biler, sjekker vi $x = 41$ og $x = 42$:

- $O(41) \approx 9301{,}9$ tusen kr
- $O(42) \approx 9301{,}7$ tusen kr

$x = 41$ gir litt høyere overskudd.

**$x = 41$ biler per måned gir størst overskudd, $O(41) \approx 9302$ tusen kr $\approx 9{,}3$ mill. kr.**

### b

Enhetskostnaden er kostnad per bil:

$$E(x) = \frac{K(x)}{x} = \frac{200x \cdot 1{,}015^x + 200}{x} = 200 \cdot 1{,}015^x + \frac{200}{x}$$

Vi finner minimumet ved å prøve heltallsverdier rundt det kontinuerlige minimumet ($x \approx 7{,}7$ fra CAS):

- $E(7) \approx 250{,}54$ tusen kr
- $E(8) \approx 250{,}30$ tusen kr
- $E(9) \approx 250{,}90$ tusen kr

$x = 8$ gir lavest enhetskostnad.

**$x = 8$ biler per måned gir lavest enhetskostnad, $E(8) \approx 250{,}3$ tusen kr $\approx 250\,300$ kr per bil.**

### c

Overskuddet er inntekt minus kostnad. Vi setter opp ligningen

$$p \cdot 70 - K(70) = 15\,000$$

Fra CAS (linje 12): $K(70) \approx 39\,896{,}4$ tusen kr.

Vi løser for $p$:

$$p = \frac{15\,000 + K(70)}{70} = \frac{15\,000 + 39\,896{,}4}{70} = \frac{54\,896{,}4}{70} \approx 784{,}2 \text{ tusen kr}$$

**Avtalt pris per bil er $\underline{\underline{p \approx 784\,234 \text{ kr}}}$.**

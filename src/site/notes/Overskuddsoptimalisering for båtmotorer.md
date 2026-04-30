---
{"aliases":[],"date":"2024-11-14","del":2,"dg-permalink":"/overskuddsoptimalisering-for-batmotorer/","dg-publish":true,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6}],"poeng":6,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["funksjonsdrøfting","derivasjon","økonomi"],"title":"Overskuddsoptimalisering for båtmotorer","todo":[],"permalink":"/overskuddsoptimalisering-for-batmotorer/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":2,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6}],"poeng":6,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["funksjonsdrøfting","derivasjon","økonomi"],"title":"Overskuddsoptimalisering for båtmotorer","todo":[]}}
---


# Overskuddsoptimalisering for båtmotorer

Bedriften Skipsmotor AS ønsker å optimalisere produksjonen av båtmotorer i Norge. Inntektene og kostnadene ved produksjon og salg av $x$ båtmotorer per år er gitt ved

$$I(x) = 250x - 0{,}5x^2$$
$$K(x) = 70x + 600$$

$I(x)$ og $K(x)$ er gitt i 1000 kroner.

>[!oppgave]
>a) Bestem $I'(15)$. Gi en praktisk tolkning av svaret.
>b) Hvor mange båtmotorer må Skipsmotor AS selge for at overskuddet skal bli størst mulig? Hvor stort er dette overskuddet?

Skipsmotor AS frykter at høy produksjon vil føre til dårligere kvalitet. De antar at de 50 første motorene produseres uten feil, og at 10 % av motorene etter dette ikke kan selges.

>[!oppgave]
>c) Bestem det største overskuddet Skipsmotor AS kan få dersom denne antakelsen er riktig.

## Fasit

a) $\underline{\underline{I'(15) = 235}}$ (i 1000 kr). Den 16. motoren gir en ekstra inntekt på omtrent 235 000 kr.
b) $\underline{\underline{x = 180 \text{ motorer}}}$, maksimalt overskudd $\underline{\underline{O(180) = 15{\ }600}}$ (i 1000 kr) $= 15{,}6 \text{ mill. kr}$
c) Maksimalt overskudd $\underline{\underline{\approx 14{\ }619}}$ (i 1000 kr) $\approx 14{,}6 \text{ mill. kr}$ ved produksjon av $\underline{\underline{x \approx 186 \text{ motorer}}}$

## Løsningsforslag

Vi definerer funksjonene og løser alle deloppgavene i GeoGebra CAS:

![CAS-utregning for oppgave 6](/img/user/_resources/s1-h24-2-6.png)

### a

Vi skal finne $I'(15)$ og tolke svaret.

GeoGebra CAS (linje 3–4) gir

$$I'(x) = -x + 250$$

$$I'(15) = \mathbf{235}$$

**$\underline{\underline{I'(15) = 235}}$** (i 1000 kr)

Praktisk tolkning: Grenseinntekten ved $x = 15$ er 235 (i 1000 kr). Det betyr at når Skipsmotor AS allerede har solgt 15 båtmotorer, vil salg av én motor til gi en ekstra inntekt på omtrent **235 000 kr**.

### b

Vi setter opp overskuddsfunksjonen og finner maksimum i GeoGebra CAS (linje 5–7):

$$O(x) = I(x) - K(x) = \left(250x - 0{,}5x^2\right) - \left(70x + 600\right) = -\frac{1}{2}x^2 + 180x - 600$$

CAS løser $O'(x) = 0$ og gir $x = 180$, og $O(180) = 15{\ }600$.

Siden ledende koeffisient er negativ ($-\tfrac{1}{2}$) er $x = 180$ et maksimum.

Skipsmotor AS bør selge **$\underline{\underline{180 \text{ motorer}}}$** for størst mulig overskudd. Det maksimale overskuddet er **$\underline{\underline{15{\ }600 \text{ (i 1000 kr)}}}$**, altså **15,6 mill. kr**.

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at maksimalt overskudd er ca. **14,6 mill. kr** ved produksjon av **186 motorer** (172 solgte), mens matematikk.net oppgir **12,75 mill. kr** ved 172 enheter. Vår beregning er konsistent uavhengig av om man regner ut fra antall solgte eller produserte motorer. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Vi antar at de 50 første motorene produseres uten feil, mens 10 % av motorene etter dette ikke kan selges. Av de motorene som produseres etter de første 50, kan altså 90 % selges.

Antall solgte motorer som funksjon av antall produserte ($x \geq 50$):

$$s(x) = 50 + 0{,}9 \cdot (x - 50) = 0{,}9x + 5$$

Det nye overskuddet er inntekt fra solgte motorer minus produksjonskostnad for alle $x$ produserte:

$$O_2(x) = I(s(x)) - K(x)$$

GeoGebra CAS (linje 8–11) gir

$$O_2(x) = -\frac{81}{200}x^2 + \frac{301}{2}x + \frac{1275}{2}$$

CAS løser $O_2'(x) = 0$ og gir $x = \dfrac{15050}{81} \approx 185{,}80$.

Vi runder til $x = 186$ (hele motorer) og beregner

$$O_2(186) = \frac{365478}{25} \approx 14{\ }619 \text{ (i 1000 kr)}$$

Det største overskuddet Skipsmotor AS kan oppnå under den nye antakelsen er **$\underline{\underline{\approx 14{\ }619 \text{ (i 1000 kr)}}}$**, altså omtrent **14,6 mill. kr**, ved produksjon av **$\underline{\underline{186 \text{ motorer}}}$**.
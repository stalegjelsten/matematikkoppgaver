---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["uendelig rekke","rekker","modellering"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Virkestoff og halveringstid","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/virkestoff-og-halveringstid/","permalink":"/virkestoff-og-halveringstid/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["uendelig rekke","rekker","modellering"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Virkestoff og halveringstid","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Virkestoff og halveringstid

Marit har i mange år tatt medisiner. Hver dag tar hun én tablett som inneholder 20 mg av et virkestoff. I løpet av ett døgn bryter kroppen ned 25 % av virkestoffet i tabletten.

>[!oppgave]
>a) Vis at Marit har i underkant av 80 mg av virkestoffet i kroppen like etter at hun har tatt den daglige tabletten sin.

Det viser seg at Marit ikke tåler mer enn 60 mg av virkestoffet i kroppen. Hun må derfor få nye tabletter, som inneholder mindre av virkestoffet.

>[!oppgave]
>b) Hvor mye virkestoff kan det være i hver tablett for at Marit skal unngå å få mer enn 60 mg av virkestoffet i kroppen?

I en annen medisin har virkestoffet en halveringstid på 66 timer. Det vil si at det går 66 timer fra en bruker tar en tablett, til det kun er halvparten av virkestoffet fra tabletten igjen i kroppen.

En bruker har tatt én tablett med 10 mg av virkestoffet hver dag over en lang tidsperiode.

>[!oppgave]
>c) Hvor mye av virkestoffet vil brukeren ha i kroppen like etter at han har tatt den daglige tabletten sin?

## Fasit

a) I underkant av $80 \text{~mg}$
b) Høyst $15 \text{~mg}$
c) Ca. $44{,}9 \text{~mg}$

## Løsningsforslag

### a

Kroppen bryter ned 25 % per døgn, så 75 % av virkestoffet blir igjen. Like etter at Marit har tatt tabletten dag $n$, er mengden virkestoff $M_n$.

Over lang tid stabiliserer mengden seg. Like etter at tabletten er tatt:

$$M = 20 + 20 \cdot 0{,}75 + 20 \cdot 0{,}75^2 + 20 \cdot 0{,}75^3 + \cdots$$

Dette er en uendelig geometrisk rekke med $a_1 = 20$ og $k = 0{,}75$.

![GeoGebra CAS: virkestoff](/img/user/_resources/s2-h20-2-4.png)

Fra linje 1:

$$M = \frac{20}{1 - 0{,}75} = \frac{20}{0{,}25} = 80$$

Men dette er grenseverdien som aldri oppnås helt. Etter et endelig antall dager er mengden alltid litt under 80 mg. Altså har Marit **i underkant av $\underline{\underline{80 \text{~mg}}}$** av virkestoffet i kroppen.

### b

Dersom hver tablett inneholder $d$ mg, blir den stabile mengden

$$M = \frac{d}{1 - 0{,}75} = 4d$$

Vi krever $4d \leq 60$:

$$d \leq \frac{60}{4} = \underline{\underline{15 \text{~mg}}}$$

Fra linje 2 i CAS-utklippet: $60 \cdot (1 - 0{,}75) = 15$. ✓

### c

Halveringstid 66 timer betyr at nedbrytningsfaktoren per døgn (24 timer) er

$$k = \left(\frac{1}{2}\right)^{24/66} \approx 0{,}7772$$

Fra linje 3 i CAS-utklippet: $k \approx 0{,}7772$.

Den stabile mengden virkestoff like etter tablett-inntak er

$$M = \frac{10}{1 - k} = \frac{10}{1 - 0{,}7772}$$

Fra linje 4: $M \approx \underline{\underline{44{,}9 \text{~mg}}}$

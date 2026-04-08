---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["sparing","lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Sparing og annuitetslån Camilla","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sparing-og-annuitetslan-camilla/","permalink":"/sparing-og-annuitetslan-camilla/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["sparing","lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Sparing og annuitetslån Camilla","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sparing og annuitetslån Camilla

Camilla ønsker å arbeide som frivillig nødhjelpsarbeider etter at hun er ferdig med videregående skole. Hun har planlagt dette i 2 år. I denne perioden har hun spart 5000 kroner i måneden på en fastrentekonto. Den månedlige rentefoten på denne kontoen er 0,2 prosent.

>[!oppgave]
>a) Hvor mye hadde Camilla på kontoen like etter at hun satte inn det 24. beløpet?

Etter at Camilla kommer hjem, ønsker hun å kjøpe seg en bruktbil. Hun vurderer å ta opp et forbrukslån på 100 000 kroner. En bank tilbyr henne et lån med en månedlig rentefot på 1,5 prosent. Lånet skal nedbetales som et annuitetslån med 36 månedlige terminer. Første innbetaling skal skje én måned etter låneopptaket.

>[!oppgave]
>b) Hvor stort terminbeløp må Camilla betale?

Dersom moren til Camilla stiller sikkerhet for lånet, kan banken tilby et lån med bedre betingelser. Dette lånet skal også nedbetales som et annuitetslån med 36 månedlige terminer, og første innbetaling skal skje én måned etter låneopptak. Terminbeløpet Camilla må betale på dette lånet, er 2926 kroner.

>[!oppgave]
>c) Hva er den månedlige rentefoten til dette lånet?

## Fasit

a) Ca. $122\,801 \, \mathrm{kr}$
b) Ca. $3615 \, \mathrm{kr}$
c) Ca. $0{,}28 \, \%$ per måned

## Løsningsforslag

Vi bruker GeoGebra CAS til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-3.png)

### a

Camilla setter inn 5000 kr per måned i 24 måneder med månedlig rentefot $r = 0{,}002$. Innskuddene danner en geometrisk rekke.

Det første innskuddet vokser i 23 måneder, det andre i 22 måneder, ..., og det siste vokser i 0 måneder:

$$S = 5000 \cdot \frac{1{,}002^{24} - 1}{0{,}002}$$

Se `Sparekonto` i linje 1: $S \approx \underline{\underline{122\,801 \, \mathrm{kr}}}$.

### b

Et annuitetslån på $100\,000 \, \mathrm{kr}$ med månedlig rentefot $r = 0{,}015$ og 36 terminer gir:

$$T \cdot \sum_{i=1}^{36} \frac{1}{1{,}015^i} = 100\,000$$

Se `Terminbeløp` i linje 2: $T \approx \underline{\underline{3615 \, \mathrm{kr}}}$.

### c

Vi skal finne $r$ slik at terminbeløpet er $2926 \, \mathrm{kr}$:

$$\sum_{i=1}^{36} \frac{2926}{(1+r)^i} = 100\,000$$

Se linje 3 i CAS: $r \approx 0{,}00284$.

Den månedlige rentefoten er ca. **$\underline{\underline{0{,}28 \, \%}}$**.

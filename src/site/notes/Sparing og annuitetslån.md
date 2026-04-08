---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","lån","sparing"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Sparing og annuitetslån","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sparing-og-annuitetslan/","permalink":"/sparing-og-annuitetslan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["rekker","lån","sparing"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Sparing og annuitetslån","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sparing og annuitetslån

Da Anniken fylte 15 år, satte hun $30\,000$ kroner inn på en konto med en fast månedlig rentesats på $0{,}1$ prosent. Hver måned etter dette satte hun inn 500 kroner på kontoen. Det siste innskuddet gjorde hun den dagen hun fylte 20 år.

>[!oppgave]
>a) Hvor mye hadde hun på kontoen etter innskuddet på 20-årsdagen?

Anniken skal kjøpe leilighet og tar opp et annuitetslån på 2 millioner kroner. Lånet skal betales tilbake med en nedbetalingstid på 30 år, én termin per år og en fast årlig rentesats på $2{,}4$ prosent. Første innbetaling er om ett år.

>[!oppgave]
>b) Vis at det årlige terminbeløpet er $94\,286$ kroner.

Anniken frykter en renteoppgang. Hun kan maksimalt betale et terminbeløp på $110\,000$ kroner.

>[!oppgave]
>c) Bestem den høyeste rentesatsen hun har råd til å betale.

## Fasit

a) Ca. $62\,756 \, \mathrm{kr}$
b) Terminbeløp $\approx 94\,286 \, \mathrm{kr}$
c) Ca. $3{,}6 \, \%$

## Løsningsforslag

Vi bruker GeoGebra CAS til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-2.png)

### a

Den månedlige rentesatsen er $r = 0{,}001$. Fra 15 til 20 år er det 60 måneder.

Startbeløpet på $30\,000 \, \mathrm{kr}$ vokser i 60 måneder:

$$30\,000 \cdot 1{,}001^{60}$$

De månedlige innskuddene på $500 \, \mathrm{kr}$ danner en geometrisk rekke. Innskudd nr. 1 vokser i 59 måneder, innskudd nr. 2 i 58 måneder, osv., og det siste innskuddet (nr. 60) vokser i 0 måneder:

$$500 \cdot \sum_{i=0}^{59} 1{,}001^i = 500 \cdot \frac{1{,}001^{60} - 1}{0{,}001}$$

Se `Saldo` i linje 4: totalt ca. **$\underline{\underline{62\,756 \, \mathrm{kr}}}$** på kontoen.

### b

Et annuitetslån med terminbeløp $T$, rentesats $r = 0{,}024$ og $n = 30$ terminer gir:

$$T \cdot \sum_{i=1}^{30} \frac{1}{1{,}024^i} = 2\,000\,000$$

Se `Terminbeløp` i linje 5:

$$T = \frac{2\,000\,000}{\sum_{i=1}^{30} \frac{1}{1{,}024^i}} \approx 94\,286$$

Det årlige terminbeløpet er **$\underline{\underline{94\,286 \, \mathrm{kr}}}$**.

### c

Vi skal finne $r$ slik at terminbeløpet er $110\,000 \, \mathrm{kr}$:

$$\sum_{i=1}^{30} \frac{110\,000}{(1+r)^i} = 2\,000\,000$$

Se linje 6 i CAS: $r \approx 0{,}03592$.

Den høyeste rentesatsen Anniken har råd til er ca. **$\underline{\underline{3{,}6 \, \%}}$**.

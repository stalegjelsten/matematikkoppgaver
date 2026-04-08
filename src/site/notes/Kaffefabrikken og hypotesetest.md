---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":9,"title":"Kaffefabrikken og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/kaffefabrikken-og-hypotesetest/","permalink":"/kaffefabrikken-og-hypotesetest/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":9,"title":"Kaffefabrikken og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Kaffefabrikken og hypotesetest

Kaffefabrikken har en maskin som fyller kaffe i poser. La $X$ være mengden kaffe i en tilfeldig pose. Det viser seg at $X$ er normalfordelt med en forventningsverdi lik 250 gram og standardavvik lik 5 gram.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt pose inneholder mellom 245 gram og 255 gram kaffe.

Kaffefabrikken har den siste tiden fått klager på at det er for lite kaffe i posene. De bestemmer seg for å justere pakkemaskinen slik at det blir mer kaffe i posene. Forventningsverdien blir da større, men vi kan anta at standardavviket fortsatt er 5 gram.

>[!oppgave]
>b) Hva må forventningsverdien minst være dersom høyst 5 prosent av posene skal veie mindre enn 250 gram?

For å være på den sikre siden justerer Kaffefabrikken maskinen slik at den i gjennomsnitt fyller 260 gram i hver pose. De selger kaffe i esker med 10 poser i hver eske. Vi antar at mengden kaffe i hver pose er uavhengig av hverandre.

>[!oppgave]
>c) Hva er sannsynligheten for at ingen av posene i en tilfeldig valgt eske inneholder mindre enn 250 gram kaffe?

Ledelsen på Kaffefabrikken mistenker at det er noe galt med innstillingen til pakkemaskinen. De tror at forventningsverdien er mindre enn 260 gram.

>[!oppgave]
>d) Sett opp en nullhypotese og en alternativ hypotese som kan brukes for å teste ledelsens mistanke.

I en stikkprøve viste det seg at gjennomsnittsvekten til 50 tilfeldige poser var 258,4 gram.

>[!oppgave]
>e) Gjennomfør hypotesetesten. Bruk et signifikansnivå på 5 prosent til å avgjøre om det er grunnlag for ledelsens mistanke.

## Fasit

a) $\approx 0{,}6827$
b) $\mu \geq 258{,}2 \, \mathrm{g}$
c) $\approx 0{,}7944$
d) $H_0\!: \mu = 260$, $H_1\!: \mu < 260$
e) $p$-verdi $\approx 0{,}012 < 0{,}05$, forkaster $H_0$

## Løsningsforslag

Vi bruker GeoGebra til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-2.png)

### a

$X$ er normalfordelt med $\mu = 250$ og $\sigma = 5$.

Se `PMellom` i linje 1:

$$P(245 < X < 255) \approx \underline{\underline{0{,}6827}}$$

### b

Vi skal finne $\mu$ slik at $P(X < 250) \leq 0{,}05$.

$$P(X < 250) = P\left(Z < \frac{250 - \mu}{5}\right) = 0{,}05$$

$$\frac{250 - \mu}{5} = -1{,}645 \implies \mu = 250 + 5 \cdot 1{,}645$$

Se `MuMin` i linje 2: $\mu \geq \underline{\underline{258{,}2 \, \mathrm{g}}}$.

### c

Med $\mu = 260$ og $\sigma = 5$: sannsynligheten for at én pose har mer enn 250 g:

Se `POver250` i linje 3: $P(X > 250) \approx 0{,}9772$.

For at alle 10 posene i en eske har mer enn 250 g:

Se `PAlleOver` i linje 4: $P = 0{,}9772^{10} \approx \underline{\underline{0{,}7944}}$.

### d

Ledelsen tror at $\mu < 260$. Vi setter opp:

- $H_0\!: \mu = 260$ (maskinen er korrekt innstilt)
- $H_1\!: \mu < 260$ (forventningsverdien er lavere enn 260)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

### e

Testobservatoren med $\bar{X} = 258{,}4$, $\sigma = 5$ og $n = 50$:

Se `ZVerdi` i linje 5:

$$Z = \frac{258{,}4 - 260}{5/\sqrt{50}} \approx -2{,}26$$

Se `PVerdi` i linje 6: $p$-verdi $\approx 0{,}012$.

Siden $p$-verdien $0{,}012 < 0{,}05 = \alpha$, forkaster vi $H_0$.

**Det er grunnlag for ledelsens mistanke** — det er statistisk signifikant at forventningsverdien er lavere enn 260 gram.

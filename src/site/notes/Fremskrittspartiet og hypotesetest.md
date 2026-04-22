---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["binomisk","hypotesetest"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":6,"title":"Fremskrittspartiet og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/fremskrittspartiet-og-hypotesetest/","permalink":"/fremskrittspartiet-og-hypotesetest/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["binomisk","hypotesetest"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":6,"title":"Fremskrittspartiet og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Fremskrittspartiet og hypotesetest

Ved stortingsvalget i september 2017 fikk Fremskrittspartiet 15,2 % av stemmene. Vi lar $X$ være antall personer som stemte Fremskrittspartiet blant 1500 tilfeldig valgte personer som stemte ved forrige stortingsvalg.

Vi kan betrakte $X$ som en binomisk fordelt variabel.

>[!oppgave]
>a) Bestem $P(X \geq 240)$.

En avis hadde mistanke om at oppslutningen til Fremskrittspartiet hadde gått ned. I april 2020 ble 1500 tilfeldig valgte personer som stemte ved forrige stortingsvalg, spurt hvilket parti de ville ha stemt på om det hadde vært valg i dag.

>[!oppgave]
>b) Sett opp en nullhypotese og en alternativ hypotese som kan brukes for å teste avisens mistanke.

Det viste seg at 13,8 % av de spurte ville ha stemt på Fremskrittspartiet.

>[!oppgave]
>c) Gjennomfør hypotesetesten. Bruk den til å avgjøre om det er grunnlag for å si at Fremskrittspartiet har fått mindre oppslutning. Bruk et signifikansnivå på 5 %.

## Fasit

a) $P(X \geq 240) \approx 0{,}2033$
b) $H_0\colon p = 0{,}152$, $H_1\colon p < 0{,}152$
c) $P$-verdi $\approx 0{,}069 > 0{,}05$. Vi forkaster ikke $H_0$.

## Løsningsforslag

### a

$X$ er binomisk fordelt med $n = 1500$ og $p = 0{,}152$.

Vi bruker normalapproksimasjon:

$$\mu = np = 1500 \cdot 0{,}152 = 228$$

$$\sigma = \sqrt{np(1-p)} = \sqrt{1500 \cdot 0{,}152 \cdot 0{,}848} \approx 13{,}90$$

Med halvkorreksjon:

$$P(X \geq 240) \approx P\left(Z \geq \frac{239{,}5 - 228}{13{,}90}\right) = P(Z \geq 0{,}83) \approx \underline{\underline{0{,}2033}}$$

### b

Avisen har mistanke om at oppslutningen har gått ned. Vi tester:

$$H_0\colon p = 0{,}152$$

$$H_1\colon p < 0{,}152$$

### c

Vi har $n = 1500$ og observert andel $\hat{p} = 0{,}138$, altså $x = 0{,}138 \cdot 1500 = 207$ personer.

Vi beregner $P$-verdien under $H_0$ ($p = 0{,}152$):

$$P\text{-verdi} = P(X \leq 207)$$

Med normalapproksimasjon:

$$z = \frac{207 - 228}{13{,}90} \approx -1{,}51$$

$$P\text{-verdi} = \Phi(-1{,}51) \approx 0{,}066$$

Siden $P$-verdien $\approx 0{,}066 > 0{,}05$, forkaster vi **ikke** $H_0$ på 5 % signifikansnivå.

**Vi har ikke tilstrekkelig grunnlag for å si at oppslutningen til Fremskrittspartiet har gått ned.**

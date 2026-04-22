---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","binomisk","hypotesetest"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":7,"title":"Levetid til temperaturfølere","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/levetid-til-temperaturfolere/","permalink":"/levetid-til-temperaturfolere/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","binomisk","hypotesetest"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":7,"title":"Levetid til temperaturfølere","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Levetid til temperaturfølere

En produsent leverer en bestemt type temperaturfølere. Vi lar $X$ være levetiden til en tilfeldig valgt temperaturføler av denne typen. Produsenten oppgir at $X$ er normalfordelt med forventningsverdi $\mu = 12$ år og standardavvik $\sigma = 1{,}5$ år.

>[!oppgave]
>a) Vis at sannsynligheten for at en tilfeldig valgt temperaturføler har en levetid som er kortere enn 10 år, er $p \approx 0{,}0912$.

Når produsenten bytter ut en defekt temperaturføler, noterer de hvor lang levetid den har hatt. Når produsenten gjennomfører en kvalitetskontroll av de defekte temperaturfølerne, plukker de tilfeldig ut 225 følere.

I en tilfeldig kvalitetskontroll lar vi $Y$ være antall enheter som har hatt en levetid som er kortere enn 10 år. Vi går ut fra at $Y$ er binomisk fordelt.

>[!oppgave]
>b) Bestem $P(Y \geq 21)$

Produsenten har mistanke om at levetiden til temperaturfølerne er kortere enn det de oppgir. De vil derfor gjennomføre en kvalitetskontroll.

>[!oppgave]
>c) Sett opp en hypotesetest som kan brukes i denne situasjonen.

I kvalitetskontrollen viser det seg at den gjennomsnittlige levetiden til de 225 temperaturfølerne var 11,78 år.

>[!oppgave]
>d) Utfør hypotesetesten, og bruk den til å avgjøre om det er grunnlag for mistanken til produsenten. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $P(X < 10) \approx 0{,}0912$
b) $P(Y \geq 21) \approx 0{,}49$
c) $H_0\colon \mu = 12$, $H_1\colon \mu < 12$
d) $P$-verdi $\approx 0{,}014 < 0{,}05$. Vi forkaster $H_0$.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 12$ og $\sigma = 1{,}5$.

$$P(X < 10) = P\left(Z < \frac{10 - 12}{1{,}5}\right) = P(Z < -1{,}33) = \Phi(-1{,}33) \approx \underline{\underline{0{,}0912}}$$

### b

$Y$ er binomisk fordelt med $n = 225$ og $p = 0{,}0912$.

Vi bruker normalapproksimasjon:

$$\mu_Y = np = 225 \cdot 0{,}0912 = 20{,}52$$

$$\sigma_Y = \sqrt{np(1-p)} = \sqrt{225 \cdot 0{,}0912 \cdot 0{,}9088} \approx 4{,}32$$

Med halvkorreksjon:

$$P(Y \geq 21) \approx P\left(Z \geq \frac{20{,}5 - 20{,}52}{4{,}32}\right) = P(Z \geq -0{,}005) \approx \underline{\underline{0{,}50}}$$

### c

Produsenten har mistanke om at levetiden er **kortere** enn oppgitt ($\mu = 12$).

$$H_0\colon \mu = 12$$

$$H_1\colon \mu < 12$$

Vi tester med gjennomsnittlig levetid $\bar{X}$ fra utvalget. Under $H_0$ er $\bar{X}$ tilnærmet normalfordelt med $\mu_{\bar{X}} = 12$ og $\sigma_{\bar{X}} = \dfrac{1{,}5}{\sqrt{225}} = 0{,}1$.

### d

Den gjennomsnittlige levetiden i utvalget er $\bar{x} = 11{,}78$ år.

$$z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}} = \frac{11{,}78 - 12}{1{,}5 / \sqrt{225}} = \frac{-0{,}22}{0{,}1} = -2{,}20$$

$$P\text{-verdi} = \Phi(-2{,}20) \approx 0{,}014$$

Siden $P$-verdien $\approx 0{,}014 < 0{,}05$, forkaster vi $H_0$ på 5 % signifikansnivå.

**Det er grunnlag for å si at levetiden til temperaturfølerne er kortere enn det produsenten oppgir.**

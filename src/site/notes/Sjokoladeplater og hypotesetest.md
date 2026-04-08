---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":10,"title":"Sjokoladeplater og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sjokoladeplater-og-hypotesetest/","permalink":"/sjokoladeplater-og-hypotesetest/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":10,"title":"Sjokoladeplater og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sjokoladeplater og hypotesetest

En fabrikk lager sjokoladeplater som skal veie 200 gram. La $X$ være vekten til en tilfeldig sjokoladeplate. Vi går ut fra at $X$ er normalfordelt med $\mu = 200$ gram og $\sigma = 4$ gram.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt sjokoladeplate veier mindre enn 195 gram.

Sjokoladeplatene blir pakket i esker på 10 plater.

>[!oppgave]
>b) Bestem sannsynligheten for at alle platene i en eske veier mer enn 195 gram.

Eskene blir pakket i kartonger, 10 esker i hver kartong. Det er altså 100 sjokoladeplater i en kartong.

Ledelsen ved sjokoladefabrikken krever at en kartong skal veie mellom $19\,900$ gram og $20\,100$ gram.

>[!oppgave]
>c) Bestem sannsynligheten for at en tilfeldig valgt kartong er innenfor vektkravet til ledelsen.

Ledelsen har mistanke om at maskinen som lager sjokoladeplatene, er stilt inn slik at sjokoladeplatene veier for lite. De vil plukke ut 100 tilfeldige sjokoladeplater i en kontroll.

>[!oppgave]
>d) Sett opp en hypotesetest som du kan bruke for å avgjøre om det er hold i mistanken.

Ledelsen velger tilfeldig ut 100 sjokoladeplater. Det viser seg at gjennomsnittsvekten til disse er $199{,}1$ gram. Vi antar at standardavviket fremdeles er 4 gram.

>[!oppgave]
>e) Utfør hypotesetesten, og avgjør om det er hold i mistanken. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $\approx 0{,}1057$
b) $\approx 0{,}3274$
c) $\approx 0{,}9876$
d) $H_0\!: \mu = 200$, $H_1\!: \mu < 200$
e) $p$-verdi $\approx 0{,}012 < 0{,}05$, forkaster $H_0$

## Løsningsforslag

Vi bruker GeoGebra til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-3.png)

### a

$X$ er normalfordelt med $\mu = 200$ og $\sigma = 4$.

Se `PUnder195` i linje 1:

$$P(X < 195) \approx \underline{\underline{0{,}1057}}$$

### b

Sannsynligheten for at én plate veier mer enn 195 gram er $P(X > 195) = 1 - 0{,}1057 = 0{,}8943$.

For at alle 10 platene i en eske veier mer enn 195 gram (uavhengige hendelser):

Se `PAlleOver` i linje 2:

$$P(\text{alle} > 195) = 0{,}8943^{10} \approx \underline{\underline{0{,}3274}}$$

### c

La $S = X_1 + X_2 + \cdots + X_{100}$ være totalvekten av 100 plater. Da er $S$ normalfordelt med

$$\text{E}(S) = 100 \cdot 200 = 20\,000 \, \mathrm{g}$$

$$\text{SD}(S) = \sqrt{100} \cdot 4 = 40 \, \mathrm{g}$$

Se `PInnenfor` i linje 4:

$$P(19\,900 < S < 20\,100) \approx \underline{\underline{0{,}9876}}$$

### d

Ledelsen mistenker at $\mu < 200$. Vi setter opp:

- $H_0\!: \mu = 200$ (maskinen er korrekt innstilt)
- $H_1\!: \mu < 200$ (sjokoladeplatene veier for lite)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

Testobservatoren er $Z = \dfrac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$.

### e

Vi setter inn $\bar{X} = 199{,}1$, $\mu_0 = 200$, $\sigma = 4$ og $n = 100$.

Se `ZVerdi` i linje 5:

$$Z = \frac{199{,}1 - 200}{4/\sqrt{100}} = \frac{-0{,}9}{0{,}4} = -2{,}25$$

Se `PVerdi` i linje 6: $p$-verdi $\approx 0{,}012$.

Siden $p$-verdien $0{,}012 < 0{,}05 = \alpha$, forkaster vi $H_0$.

**Det er hold i mistanken** — det er statistisk grunnlag for å hevde at sjokoladeplatene veier for lite.

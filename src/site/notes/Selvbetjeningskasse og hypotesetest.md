---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["binomisk","normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":8,"title":"Selvbetjeningskasse og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/selvbetjeningskasse-og-hypotesetest/","permalink":"/selvbetjeningskasse-og-hypotesetest/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["binomisk","normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":8,"title":"Selvbetjeningskasse og hypotesetest","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Selvbetjeningskasse og hypotesetest

I en selvbetjeningskasse i en matbutikk blir i gjennomsnitt hver tiende kunde trukket tilfeldig ut til kontroll. Dette kan vi betrakte som et binomisk forsøk med $p = 0{,}1$.

>[!oppgave]
>a) Bestem sannsynligheten for at fem kunder etter hverandre ikke blir trukket ut til kontroll.

La $X$ være antall kunder som blir trukket ut til kontroll av de 200 første kundene som bruker selvbetjeningskassen en tilfeldig dag.

>[!oppgave]
>b) Bestem forventningsverdien $\text{E}(X)$ og variansen $\text{Var}(X)$.
>c) Bestem $P(X \geq 25)$.

Ledelsen i butikkjeden har mistanke om at færre enn 10 prosent av kundene blir kontrollert.

>[!oppgave]
>d) Sett opp hypoteser som de kan bruke til å avgjøre om mistanken er berettiget.

Ledelsen bestemmer seg for å undersøke hvor mange kunder som ble kontrollert en tilfeldig valgt dag. Det viser seg at 579 kunder brukte selvbetjeningskassen den dagen. Av disse ble 47 trukket ut til kontroll.

>[!oppgave]
>e) Utfør hypotesetesten og avgjør om mistanken er berettiget. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $0{,}9^5 \approx 0{,}590$
b) $\text{E}(X) = 20$, $\text{Var}(X) = 18$
c) $P(X \geq 25) \approx 0{,}145$
d) Se løsningsforslag
e) Mistanken er ikke berettiget ($p$-verdi $\approx 0{,}066 > 0{,}05$)

## Løsningsforslag

### a

Sannsynligheten for at én kunde ikke blir kontrollert er $1 - 0{,}1 = 0{,}9$.

For fem kunder etter hverandre:

$$P = 0{,}9^5 \approx \underline{\underline{0{,}590}}$$

### b

$X$ er binomisk fordelt med $n = 200$ og $p = 0{,}1$.

$$\text{E}(X) = np = 200 \cdot 0{,}1 = \underline{\underline{20}}$$

$$\text{Var}(X) = np(1-p) = 200 \cdot 0{,}1 \cdot 0{,}9 = \underline{\underline{18}}$$

### c

Siden $n$ er stor, kan vi tilnærme $X$ med normalfordeling:

$$X \approx N(\mu = 20{,}\ \sigma = \sqrt{18} \approx 4{,}24)$$

$$P(X \geq 25) \approx P\!\left(Z \geq \frac{24{,}5 - 20}{4{,}24}\right) = P(Z \geq 1{,}06) = 1 - \Phi(1{,}06) \approx \underline{\underline{0{,}145}}$$

(Vi bruker kontinuitetskorreksjon: $P(X \geq 25) = P(X > 24{,}5)$.)

### d

Ledelsen mistenker at andelen kontrollerte er **lavere** enn 10 %. Vi setter opp:

$$H_0\colon p = 0{,}1 \quad \text{(andelen er 10 \%)}$$

$$H_1\colon p < 0{,}1 \quad \text{(andelen er lavere enn 10 \%)}$$

Vi gjennomfører en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

### e

Vi har $n = 579$ og $\hat{p} = \dfrac{47}{579} \approx 0{,}0812$.

Under $H_0$ er $X$ binomisk fordelt med $n = 579$ og $p = 0{,}1$. Vi tilnærmer med normalfordeling:

$$\text{E}(X) = 57{,}9 \quad \text{og} \quad \text{SD}(X) = \sqrt{579 \cdot 0{,}1 \cdot 0{,}9} \approx 7{,}22$$

Testobservator:

$$z = \frac{47 - 57{,}9}{7{,}22} \approx -1{,}51$$

$p$-verdi: $P(Z \leq -1{,}51) = \Phi(-1{,}51) \approx 0{,}066$

Siden $p$-verdien $0{,}066 > 0{,}05 = \alpha$, forkaster vi **ikke** $H_0$.

$\underline{\underline{\text{Konklusjon: Det er ikke grunnlag for å si at mistanken er berettiget.}}}$

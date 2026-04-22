---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","hypotesetest","sannsynlighet"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":10,"title":"Bruddstyrke fiskesene","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/bruddstyrke-fiskesene/","permalink":"/bruddstyrke-fiskesene/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","hypotesetest","sannsynlighet"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":10,"title":"Bruddstyrke fiskesene","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Bruddstyrke fiskesene

En leverandør selger en type sene for fiske. De oppgir at bruddstyrken $X$ for senen i en tilfeldig valgt spole av denne typen er normalfordelt med forventningsverdi $\mu = 56$ kg og standardavvik $\sigma = 2{,}3$ kg.

>[!oppgave]
>a) Hva er sannsynligheten for at senen i en tilfeldig valgt spole tåler minst 53 kg?

Tenk deg at du skal gjøre målinger av bruddstyrken til senen i 25 tilfeldig valgte spoler av denne typen.

>[!oppgave]
>b) Bestem sannsynligheten for at senen i alle de 25 spolene tåler mer enn 50 kg.

La $\bar{X}$ være gjennomsnittet til målingene.

>[!oppgave]
>c) Bestem $P(\bar{X} \leq 55)$.

Leverandøren har en mistanke om at bruddstyrken er lavere enn 56 kg. De ønsker derfor å gjennomføre en hypotesetest der de vil teste senen i 25 tilfeldig valgte spoler.

>[!oppgave]
>d) Sett opp en hypotesetest som du kan bruke for å avgjøre om det er grunnlag for leverandørens mistanke.

Vi går ut fra at standardavviket til bruddstyrken fremdeles er $\sigma = 2{,}3$ kg. Vi vil bruke et signifikansnivå på 5 prosent.

>[!oppgave]
>e) Hva er den høyeste gjennomsnittlige verdien for bruddstyrken til senene i 25 tilfeldig valgte spoler, som gjør at vi kan konkludere med at det er grunnlag for leverandørens mistanke?

## Fasit

a) $P(X \geq 53) \approx 0{,}904$
b) $\approx 0{,}892$
c) $P(\bar{X} \leq 55) \approx 0{,}015$
d) Se løsningsforslag
e) $\bar{x} \approx 55{,}24 \text{~kg}$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 56$ og $\sigma = 2{,}3$.

$$P(X \geq 53) = 1 - P(X < 53) = 1 - \Phi\!\left(\frac{53 - 56}{2{,}3}\right) = 1 - \Phi(-1{,}30)$$

$$= 1 - 0{,}0968 = \underline{\underline{0{,}904}}$$

### b

La $Y$ være antall spoler der senen tåler mer enn 50 kg. Sannsynligheten for at én spole tåler mer enn 50 kg:

$$P(X > 50) = 1 - \Phi\!\left(\frac{50 - 56}{2{,}3}\right) = 1 - \Phi(-2{,}61) = 0{,}9955$$

For at alle 25 spolene tåler mer enn 50 kg:

$$P(Y = 25) = 0{,}9955^{25} \approx \underline{\underline{0{,}892}}$$

### c

$\bar{X}$ er normalfordelt med $\text{E}(\bar{X}) = 56$ og $\text{SD}(\bar{X}) = \dfrac{2{,}3}{\sqrt{25}} = 0{,}46$.

$$P(\bar{X} \leq 55) = \Phi\!\left(\frac{55 - 56}{0{,}46}\right) = \Phi(-2{,}17) \approx \underline{\underline{0{,}015}}$$

### d

Leverandøren mistenker at bruddstyrken er **lavere** enn oppgitt. Vi setter opp:

$$H_0\colon \mu = 56 \quad \text{(bruddstyrken er som oppgitt)}$$

$$H_1\colon \mu < 56 \quad \text{(bruddstyrken er lavere enn oppgitt)}$$

Vi gjennomfører en venstresidig test med $n = 25$, $\sigma = 2{,}3$ og signifikansnivå $\alpha = 0{,}05$.

### e

Under $H_0$ er $\bar{X}$ normalfordelt med $\mu = 56$ og $\text{SD}(\bar{X}) = 0{,}46$.

Vi forkaster $H_0$ dersom $\bar{X}$ er lavere enn den kritiske verdien $\bar{x}_k$ som oppfyller

$$P(\bar{X} \leq \bar{x}_k) = 0{,}05$$

$$\frac{\bar{x}_k - 56}{0{,}46} = z_{0{,}05} = -1{,}645$$

$$\bar{x}_k = 56 - 1{,}645 \cdot 0{,}46 \approx \underline{\underline{55{,}24 \text{~kg}}}$$

Dersom den gjennomsnittlige bruddstyrken i utvalget er 55,24 kg eller lavere, kan vi konkludere med at det er grunnlag for leverandørens mistanke.

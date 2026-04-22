---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","standard normalfordeling"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"poeng":4,"title":"Normalfordeling med ukjente parametere","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/normalfordeling-med-ukjente-parametere/","permalink":"/normalfordeling-med-ukjente-parametere/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","standard normalfordeling"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"poeng":4,"title":"Normalfordeling med ukjente parametere","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Normalfordeling med ukjente parametere

I denne oppgaven kan du få bruk for tabellen over standard normalfordeling i vedlegg 1.

La $X$ være normalfordelt med forventningsverdi $\mu = 1$ og varians $\sigma^2 = 4$.

>[!oppgave]
>a) Bestem $P(2 < X < 3)$.

Om en annen normalfordelt stokastisk variabel $Y$ får du vite at $P(Y \leq 0{,}92) = 0{,}0228$ og $P(Y \geq 1{,}41) = 0{,}0668$.

>[!oppgave]
>b) Bestem $\mu$ og $\sigma$.

## Fasit

a) $P(2 < X < 3) \approx 0{,}15$
b) $\mu = 1{,}20$ og $\sigma = 0{,}14$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 1$ og $\sigma^2 = 4$, altså $\sigma = 2$.

Vi standardiserer:

$$z_1 = \frac{2 - 1}{2} = 0{,}5 \qquad z_2 = \frac{3 - 1}{2} = 1{,}0$$

$$P(2 < X < 3) = \Phi(1{,}0) - \Phi(0{,}5) = 0{,}8413 - 0{,}6915 = \underline{\underline{0{,}1498 \approx 0{,}15}}$$

### b

Vi slår opp i tabellen og finner $z$-verdiene:

$$P(Y \leq 0{,}92) = 0{,}0228 \implies \frac{0{,}92 - \mu}{\sigma} = -2{,}00$$

$$P(Y \geq 1{,}41) = 0{,}0668 \implies P(Y \leq 1{,}41) = 0{,}9332 \implies \frac{1{,}41 - \mu}{\sigma} = 1{,}50$$

Vi har likningssystemet:

$$0{,}92 - \mu = -2\sigma \quad \text{(I)}$$

$$1{,}41 - \mu = 1{,}5\sigma \quad \text{(II)}$$

Trekker (I) fra (II):

$$1{,}41 - 0{,}92 = 1{,}5\sigma + 2\sigma \implies 0{,}49 = 3{,}5\sigma \implies \sigma = 0{,}14$$

Setter inn i (I):

$$\mu = 0{,}92 + 2 \cdot 0{,}14 = 1{,}20$$

$$\underline{\underline{\mu = 1{,}20 \quad \text{og} \quad \sigma = 0{,}14}}$$

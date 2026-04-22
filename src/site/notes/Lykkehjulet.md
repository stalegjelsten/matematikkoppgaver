---
{"aliases":null,"tags":["oppgave"],"temaer":["sannsynlighet","normalfordeling","binomisk"],"alias":[],"del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"fag":"s2","eksamen":"h22","dg-publish":true,"title":"Lykkehjulet","date":"2023-05-31","modified":"2024-04-05","dg-permalink":"/lykkehjulet/","lf-source-claude":true,"status":1,"permalink":"/lykkehjulet/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"tags":["oppgave"],"temaer":["sannsynlighet","normalfordeling","binomisk"],"alias":[],"del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"fag":"s2","eksamen":"h22","title":"Lykkehjulet","date":"2023-05-31","modified":"2024-04-05","lf-source-claude":true,"status":1}}
---


# Lykkehjulet

Et lykkehjul har fem felter. Et av feltene er grønt, og de fire andre er røde. Når du snurrer lykkehjulet, er sannsynligheten for at det stopper på hvert av de fem feltene 0,2.

Tenk deg at du skal snurre lykkehjulet 100 ganger. La $X$ være antall ganger lykkehjulet stopper på det grønne feltet.

>[!oppgave]
> a) Forklar at $X$ er binomisk fordelt med $μ_{X} =20$ og $σ_{X} =4$.
> b) Forklar at $X$ er tilnærmet normalfordelt.
> c) Bestem sannsynligheten for at lykkehjulet stopper på det grønne feltet mer enn 25 ganger.
> d) Bestem den minste verdien $k$ kan ha dersom $P(X \geq k) \leq 0{,}01$. Hva forteller dette svaret deg i denne situasjonen?

## Fasit

a) Binomisk med $n = 100$, $p = 0{,}2$, $\mu_X = 20$, $\sigma_X = 4$
b) Sentralgrensesetningen, $n \geq 30$ og $np(1-p) > 5$
c) $\approx 0{,}084$
d) $k = 30$

## Løsningsforslag

### a

Hvert snurr er et Bernoulli-forsøk med to utfall (grønt eller ikke grønt), konstant sannsynlighet $p = 0{,}2$, og forsøkene er uavhengige. Vi utfører $n = 100$ slike forsøk. Dermed er $X$ binomisk fordelt med $n = 100$ og $p = 0{,}2$.

$$\mu_X = np = 100 \cdot 0{,}2 = 20$$

$$\sigma_X = \sqrt{np(1-p)} = \sqrt{100 \cdot 0{,}2 \cdot 0{,}8} = \sqrt{16} = 4$$

### b

Siden $n = 100 \geq 30$ og $np(1-p) = 16 > 5$, følger det av sentralgrensesetningen at $X$ er tilnærmet normalfordelt.

### c

Vi skal finne $P(X > 25)$. Med halvkorreksjon og normalfordelingstilnærming:

$$P(X > 25) = P(X \geq 26) \approx P\left(Z > \frac{25{,}5 - 20}{4}\right) = P(Z > 1{,}375)$$

$$= 1 - P(Z \leq 1{,}375) \approx 1 - 0{,}9154 = \underline{\underline{0{,}0846}}$$

### d

Vi skal finne minste $k$ slik at $P(X \geq k) \leq 0{,}01$.

Med halvkorreksjon: $P(X \geq k) \approx P\left(Z \geq \frac{k - 0{,}5 - 20}{4}\right) \leq 0{,}01$.

Dette krever

$$\frac{k - 0{,}5 - 20}{4} \geq 2{,}326$$

$$k \geq 0{,}5 + 20 + 4 \cdot 2{,}326 = 29{,}8$$

Siden $k$ må være et heltall, er $\underline{\underline{k = 30}}$.

Dette betyr at dersom lykkehjulet stopper på grønt 30 eller flere ganger av 100, er det svært usannsynlig (under 1 % sjanse) at dette har skjedd ved ren tilfeldighet.

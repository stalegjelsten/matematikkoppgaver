---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["forventningsverdi","standardavvik","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Tomatfrø og normalfordeling","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/tomatfro-og-normalfordeling/","permalink":"/tomatfro-og-normalfordeling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["forventningsverdi","standardavvik","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Tomatfrø og normalfordeling","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Tomatfrø og normalfordeling

Et gartneri selger poser med tomatfrø. La $X$ være antall tomatfrø i en tilfeldig valgt pose. Sannsynlighetsfordelingen til $X$ er gitt i tabellen nedenfor.

| $k$ | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,1 | 0,1 | 0,6 | 0,1 | 0,1 |

>[!oppgave]
>a) Bestem forventningsverdien $\text{E}(X)$, og vis at standardavviket er $\text{SD}(X) = 1$.
>Hva forteller $\text{E}(X)$ oss?

Eline ønsker å kjøpe 49 slike frøposer. Posene vil hun nummerere fra 1 til 49. La $X_i$ være antall frø i pose nummer $i$. Vi antar at $X_i$-ene er uavhengige av hverandre. Det totale antallet frø i de 49 posene er gitt ved den stokastiske variabelen

$$S = X_1 + X_2 + \cdots + X_{49}$$

>[!oppgave]
>b) Begrunn at $S$ er tilnærmet normalfordelt.
>Vis at $\text{E}(S) = 392$ og $\text{SD}(S) = 7{,}0$.

Eline har et drivhus der hun har plass til 400 potter som hun vil plante frøene i.

>[!oppgave]
>c) Bestem sannsynligheten for at Eline får nok frø til alle pottene sine.

## Fasit

a) $\text{E}(X) = 8$, $\text{SD}(X) = 1$
b) $\text{E}(S) = 392$, $\text{SD}(S) = 7{,}0$
c) $P(S \geq 400) \approx 0{,}1265$

## Løsningsforslag

### a

$$\text{E}(X) = \sum k \cdot P(X = k) = 6 \cdot 0{,}1 + 7 \cdot 0{,}1 + 8 \cdot 0{,}6 + 9 \cdot 0{,}1 + 10 \cdot 0{,}1$$

$$= 0{,}6 + 0{,}7 + 4{,}8 + 0{,}9 + 1{,}0 = \underline{\underline{8}}$$

$\text{E}(X) = 8$ forteller oss at det i gjennomsnitt er 8 tomatfrø i en pose.

Vi beregner variansen:

$$\text{E}(X^2) = 6^2 \cdot 0{,}1 + 7^2 \cdot 0{,}1 + 8^2 \cdot 0{,}6 + 9^2 \cdot 0{,}1 + 10^2 \cdot 0{,}1$$

$$= 3{,}6 + 4{,}9 + 38{,}4 + 8{,}1 + 10{,}0 = 65$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 65 - 64 = 1$$

$$\underline{\underline{\text{SD}(X) = \sqrt{1} = 1}}$$

### b

$S$ er summen av 49 uavhengige, identisk fordelte stokastiske variable. Ifølge sentralgrenseteoremet er $S$ tilnærmet normalfordelt når $n$ er tilstrekkelig stor. Med $n = 49$ er tilnærmingen god.

$$\text{E}(S) = 49 \cdot \text{E}(X) = 49 \cdot 8 = \underline{\underline{392}}$$

$$\text{Var}(S) = 49 \cdot \text{Var}(X) = 49 \cdot 1 = 49$$

$$\underline{\underline{\text{SD}(S) = \sqrt{49} = 7{,}0}}$$

### c

Eline trenger minst 400 frø, så vi skal finne $P(S \geq 400)$.

$S$ er tilnærmet normalfordelt med $\mu = 392$ og $\sigma = 7$.

$$z = \frac{400 - 392}{7} = \frac{8}{7} \approx 1{,}14$$

$$P(S \geq 400) = 1 - \Phi(1{,}14) \approx 1 - 0{,}8735$$

$$\underline{\underline{P(S \geq 400) \approx 0{,}1265}}$$

Det er ca. 12,7 % sannsynlighet for at Eline får nok frø til alle 400 pottene.

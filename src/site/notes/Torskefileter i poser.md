---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["forventningsverdi","varians","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Torskefileter i poser","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/torskefileter-i-poser/","permalink":"/torskefileter-i-poser/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["forventningsverdi","varians","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Torskefileter i poser","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Torskefileter i poser

Caroline driver et cateringfirma og kjøper ofte poser med frosne torskefileter. La $X$ være antall torskefileter i en tilfeldig valgt pose. Sannsynlighetsfordelingen til $X$ er gitt i tabellen nedenfor.

| $k$ | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,1 | 0,2 | 0,4 | 0,2 | 0,1 |

>[!oppgave]
>a) Regn ut forventningsverdien til $X$. Hva forteller dette svaret?
>b) Vis at variansen til $X$ er 1,2.

La $S$ være det totale antallet torskefileter i 120 tilfeldig valgte poser. Vi antar at antall torskefileter i de ulike posene er uavhengig av hverandre.

>[!oppgave]
>c) Begrunn at $\text{E}(S) = 840$, og at $\text{Var}(S) = 144$.

En uke trenger Caroline 822 torskefileter. Hun bestiller derfor 120 poser.

>[!oppgave]
>d) Begrunn at $S$ er tilnærmet normalfordelt, og bruk dette til å bestemme sannsynligheten for at Caroline får nok torskefileter denne uken.

## Fasit

a) $\text{E}(X) = 7$
b) $\text{Var}(X) = 1{,}2$
c) $\text{E}(S) = 840$, $\text{Var}(S) = 144$
d) $P(S \geq 822) \approx 0{,}933$

## Løsningsforslag

### a

$$\text{E}(X) = 5 \cdot 0{,}1 + 6 \cdot 0{,}2 + 7 \cdot 0{,}4 + 8 \cdot 0{,}2 + 9 \cdot 0{,}1$$

$$= 0{,}5 + 1{,}2 + 2{,}8 + 1{,}6 + 0{,}9 = \underline{\underline{7}}$$

Forventningsverdien forteller at man i gjennomsnitt får 7 torskefileter per pose.

### b

$$\text{E}(X^2) = 25 \cdot 0{,}1 + 36 \cdot 0{,}2 + 49 \cdot 0{,}4 + 64 \cdot 0{,}2 + 81 \cdot 0{,}1$$

$$= 2{,}5 + 7{,}2 + 19{,}6 + 12{,}8 + 8{,}1 = 50{,}2$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 50{,}2 - 49 = 1{,}2$$

### c

$S = X_1 + X_2 + \cdots + X_{120}$, der $X_i$ er uavhengige med samme fordeling som $X$.

$$\text{E}(S) = 120 \cdot \text{E}(X) = 120 \cdot 7 = 840$$

$$\text{Var}(S) = 120 \cdot \text{Var}(X) = 120 \cdot 1{,}2 = 144$$

### d

Siden $S$ er summen av 120 uavhengige, identisk fordelte stokastiske variabler og $n = 120 \geq 30$, følger det av sentralgrensesetningen at $S$ er tilnærmet normalfordelt med $\text{E}(S) = 840$ og $\text{SD}(S) = \sqrt{144} = 12$.

$$P(S \geq 822) = P\left(Z \geq \frac{822 - 840}{12}\right) = P(Z \geq -1{,}5) = P(Z \leq 1{,}5) \approx \underline{\underline{0{,}933}}$$

Det er ca. 93 % sannsynlighet for at Caroline får nok torskefileter.

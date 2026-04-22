---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["binomisk","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Gule drops i poser","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/gule-drops-i-poser/","permalink":"/gule-drops-i-poser/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["binomisk","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Gule drops i poser","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Gule drops i poser

En bedrift produserer drops. 20 % av dropsene er gule, og resten er røde. Dropsene blir tilfeldig fordelt i poser. Det er 100 drops i hver pose.

La $X$ være antall gule drops i en tilfeldig valgt pose.

Vi kan anta at $X$ er en binomisk fordelt variabel.

>[!oppgave]
>a) Vis at $\text{E}(X) = 20$ og $\text{Var}(X) = 16$.

I resten av oppgaven går vi ut fra at $X$ er tilnærmet normalfordelt.

>[!oppgave]
>b) Bestem sannsynligheten for at det er 25 eller flere gule drops i en tilfeldig valgt pose.
>c) Lag en skisse som viser sannsynlighetsfordelingen til $X$. Skraver området som illustrerer svaret i oppgave b).
>d) Bestem $a$ slik at $P(20 - a \leq X \leq 20 + a) = 0{,}90$.
>Hva forteller intervallet $[20 - a, 20 + a]$ oss i denne situasjonen?

## Fasit

a) $\text{E}(X) = 20$, $\text{Var}(X) = 16$
b) $P(X \geq 25) \approx 0{,}1303$
c) Skisse
d) $a \approx 6{,}58$

## Løsningsforslag

### a

$X$ er binomisk fordelt med $n = 100$ og $p = 0{,}20$.

$$\text{E}(X) = n \cdot p = 100 \cdot 0{,}20 = \underline{\underline{20}}$$

$$\text{Var}(X) = n \cdot p \cdot (1 - p) = 100 \cdot 0{,}20 \cdot 0{,}80 = \underline{\underline{16}}$$

### b

$X$ er tilnærmet normalfordelt med $\mu = 20$ og $\sigma = \sqrt{16} = 4$.

Vi bruker halvkorreksjon og finner $P(X \geq 24{,}5)$:

$$z = \frac{24{,}5 - 20}{4} = 1{,}125$$

$$P(X \geq 25) \approx P(Z \geq 1{,}125) = 1 - \Phi(1{,}125) \approx \underline{\underline{0{,}1303}}$$

(Den eksakte binomiske sannsynligheten er $0{,}1314$.)

### c

Vi tegner en normalfordelingskurve med $\mu = 20$ og $\sigma = 4$. Området til høyre for $x = 24{,}5$ skraveres. Dette området representerer $P(X \geq 25)$.

### d

Vi skal finne $a$ slik at $P(20 - a \leq X \leq 20 + a) = 0{,}90$.

Siden $X$ er tilnærmet normalfordelt med $\mu = 20$ og $\sigma = 4$, standardiserer vi:

$$P\left(\frac{-a}{4} \leq Z \leq \frac{a}{4}\right) = 0{,}90$$

Symmetrien gir:

$$P\left(Z \leq \frac{a}{4}\right) = 0{,}95$$

Vi slår opp i normalfordelingstabellen og finner $z_{0{,}95} = 1{,}6449$.

$$\frac{a}{4} = 1{,}6449 \implies \underline{\underline{a \approx 6{,}58}}$$

Intervallet $[20 - 6{,}58, \; 20 + 6{,}58] = [13{,}42, \; 26{,}58]$ forteller oss at det er 90 % sannsynlighet for at en tilfeldig valgt pose inneholder mellom ca. 13 og 27 gule drops.

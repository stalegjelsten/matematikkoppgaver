---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["areal","prosentregning","argumentasjon"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":6}],"poeng":null,"title":"Parkeringsplass og prosentendring","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/parkeringsplass-og-prosentendring/","permalink":"/parkeringsplass-og-prosentendring/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"temaer":["areal","prosentregning","argumentasjon"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":6}],"poeng":null,"title":"Parkeringsplass og prosentendring","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Parkeringsplass og prosentendring

En parkeringsplass har form som et rektangel. Parkeringsplassen skal endres. Bredden skal minskes med en gitt prosentandel, og lengden skal økes med den samme prosentandelen.

Avgjør hvilken av de tre påstandene nedenfor som er riktig. Husk å argumentere for hvorfor du mener påstanden er riktig.

>[!oppgave]
>1) Arealet av den nye parkeringsplassen vil bli mindre.
>2) Arealet av den nye parkeringsplassen vil bli større.
>3) Arealet av den nye parkeringsplassen kan bli større eller mindre. Det kommer an på hvilken prosentandel vi bruker.

## Fasit

Påstand 1 er riktig: Arealet vil alltid bli mindre.

## Løsningsforslag

Vi kaller bredden $b$ og lengden $l$. Det opprinnelige arealet er

$$A = b \cdot l$$

Bredden minskes med $p \,\%$ og lengden økes med $p \,\%$. Da blir den nye bredden $b \cdot \left(1 - \frac{p}{100}\right)$ og den nye lengden $l \cdot \left(1 + \frac{p}{100}\right)$.

Det nye arealet blir

$$A_{\text{ny}} = b \cdot \left(1 - \frac{p}{100}\right) \cdot l \cdot \left(1 + \frac{p}{100}\right) = b \cdot l \cdot \left(1 - \frac{p}{100}\right)\left(1 + \frac{p}{100}\right)$$

Vi bruker tredje kvadratsetning $(a - b)(a + b) = a^2 - b^2$:

$$A_{\text{ny}} = b \cdot l \cdot \left(1 - \left(\frac{p}{100}\right)^2\right)$$

Siden $\left(\frac{p}{100}\right)^2$ alltid er et positivt tall (så lenge $p \neq 0$), vil faktoren $\left(1 - \left(\frac{p}{100}\right)^2\right)$ alltid være mindre enn $1$.

Vi kan sjekke med noen eksempler:

| Prosentandel $p$ | Vekstfaktor for arealet | Endring i areal |
| :---: | :---: | :---: |
| $10 \,\%$ | $1 - 0{,}1^2 = 0{,}99$ | $-1 \,\%$ |
| $20 \,\%$ | $1 - 0{,}2^2 = 0{,}96$ | $-4 \,\%$ |
| $50 \,\%$ | $1 - 0{,}5^2 = 0{,}75$ | $-25 \,\%$ |

**Påstand 1 er riktig: $\underline{\underline{\text{Arealet av den nye parkeringsplassen vil alltid bli mindre.}}}$**

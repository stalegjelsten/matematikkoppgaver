---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/valgresultat-og-binomisk-sannsynlighet/","dg-publish":true,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":4,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","statistikk"],"title":"Valgresultat og binomisk sannsynlighet","todo":[],"permalink":"/valgresultat-og-binomisk-sannsynlighet/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":4,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","statistikk"],"title":"Valgresultat og binomisk sannsynlighet","todo":[]}}
---


# Valgresultat og binomisk sannsynlighet

Ved kommunevalget i 2023 stemte 11,3 % på Fremskrittspartiet. Vi skal plukke ut 10 tilfeldige personer som stemte ved valget.

>[!oppgave]
>a) Bestem sannsynligheten for at vi plukker ut minst 4 som stemte Fremskrittspartiet ved valget.

I en valgkrets var det totalt 243 som stemte. Bildet viser en oversikt over de fem partiene som fikk størst oppslutning i denne valgkretsen.

Også her skal vi plukke ut 10 tilfeldige personer blant dem som stemte.

![Valgresultat i valgkrets](/img/user/_resources/s1-v25-2-4.jpeg){width=60%}

>[!oppgave]
>b) Bestem sannsynligheten for at vi plukker ut minst 4 som stemte Arbeiderpartiet ved valget. Husk å begrunne valget av metoden du bruker for å regne ut sannsynligheten.

## Fasit

a) $\underline{\underline{P(X \geq 4) \approx 1{,}95 \,\%}}$
b) $\underline{\underline{P(Y \geq 4) \approx 65{,}0 \,\%}}$

## Løsningsforslag

### a

La $X$ være antall av de 10 personene som stemte Fremskrittspartiet.

Vi trekker 10 tilfeldige personer fra hele landet, der $11{,}3\,\%$ stemte FrP. Siden populasjonen (alle som stemte ved valget) er svært stor i forhold til utvalget, er sannsynligheten tilnærmet konstant fra trekning til trekning. Derfor er $X$ binomisk fordelt med $n = 10$ og $p = 0{,}113$.

Vi ønsker $P(X \geq 4) = 1 - P(X \leq 3)$.

I GeoGebra CAS:

$$1 - \texttt{FordelingBinomial}(10;\; 0{,}113;\; 3;\; \text{true})$$

![GeoGebra CAS – binomisk og hypergeometrisk](/img/user/_resources/s1-v25-2-4-cas.png){width=60%}

**$P(X \geq 4) \approx \underline{\underline{1{,}95 \,\%}}$**

Det er altså svært liten sannsynlighet for at minst 4 av de 10 stemte FrP.

### b

I denne valgkretsen stemte 100 av 243 på Arbeiderpartiet. Vi trekker 10 personer **uten tilbakelegging** fra en avgrenset populasjon på 243 personer.

**Begrunnelse for hypergeometrisk fordeling:** Fordi populasjonen er liten ($N = 243$) i forhold til utvalget ($n = 10$), endres sannsynligheten for å trekke en Ap-velger for hvert nye trekk. Binomisk fordeling forutsetter konstant sannsynlighet og passer ikke her. Vi bruker derfor hypergeometrisk fordeling med

$$N = 243, \quad K = 100, \quad n = 10.$$

La $Y$ være antall av de 10 som stemte Arbeiderpartiet. Vi ønsker $P(Y \geq 4) = 1 - P(Y \leq 3)$.

I GeoGebra CAS:

$$1 - \texttt{FordelingHypergeometrisk}(243;\; 100;\; 10;\; 3;\; \text{true})$$

(Se bildet over.)

**$P(Y \geq 4) \approx \underline{\underline{65{,}0 \,\%}}$**

Det er altså omtrent $65$ % sannsynlighet for at minst 4 av de 10 tilfeldige personene stemte Arbeiderpartiet i denne valgkretsen.

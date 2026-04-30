---
{"aliases":[],"date":"2023-11-14","del":1,"dg-permalink":"/logaritmer-i-stigende-rekkefolge/","dg-publish":true,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":2}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["logaritmer"],"title":"Logaritmer i stigende rekkefølge","todo":[],"permalink":"/logaritmer-i-stigende-rekkefolge/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":1,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":2}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["logaritmer"],"title":"Logaritmer i stigende rekkefølge","todo":[]}}
---


# Logaritmer i stigende rekkefølge

>[!oppgave]
>Skriv uttrykkene nedenfor i stigende rekkefølge.
>
>$$2\ln e^3 \qquad  3\lg 70 \qquad e^{3\ln 2}$$
>
>Husk å begrunne svaret.

## Fasit

$$\underline{\underline{3\lg 70 < 2\ln e^3 < e^{3\ln 2}}}$$

## Løsningsforslag

Vi beregner verdien av hvert uttrykk uten kalkulator.

**$2\ln e^3$**

Vi bruker at $\ln(e^a) = a$:

$$2\ln e^3 = 2 \cdot 3 = 6$$

**$e^{3\ln 2}$**

Vi skriver om eksponenten ved å bruke at $3\ln 2 = \ln 2^3$, og deretter $e^{\ln a} = a$:

$$e^{3\ln 2} = e^{\ln 2^3} = 2^3 = 8$$

**$3\lg 70$**

Vi kan ikke beregne dette eksakt uten kalkulator, men vi kan avgrense verdien:

$$\lg 10 = 1 \implies 3\lg 10 = 3$$

$$\lg 100 = 2 \implies 3\lg 100 = 6$$

Siden $10 < 70 < 100$, er $1 < \lg 70 < 2$, altså $3 < 3\lg 70 < 6$.

Dermed er $3\lg 70$ mellom $3$ og $6$, og vi kan konkludere:

$$3\lg 70 < 6 = 2\ln e^3 < 8 = e^{3\ln 2}$$

**Stigende rekkefølge: $\boldsymbol{3\lg 70 < 2\ln e^3 < e^{3\ln 2}}$**
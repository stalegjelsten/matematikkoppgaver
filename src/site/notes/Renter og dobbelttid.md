---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["geometrisk vekst","logaritmer","sparing"],"fag":["s1"],"eksamen":"h23","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":3}],"poeng":null,"title":"Renter og dobbelttid","status":1,"source":null,"todo":null,"dg-permalink":"/renter-og-dobbelttid/","lf-source-claude":true,"permalink":"/renter-og-dobbelttid/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-03-26","aliases":[],"temaer":["geometrisk vekst","logaritmer","sparing"],"fag":["s1"],"eksamen":"h23","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":3}],"poeng":null,"title":"Renter og dobbelttid","status":1,"source":null,"todo":null,"lf-source-claude":true}}
---


# Renter og dobbelttid

Per og Kåre setter inn like store beløp på hver sin konto. Per får en årlig rente på 3,00 prosent, mens Kåre får en årlig rente på 6,00 prosent.

>[!oppgave]
>a) Hvilket beløp må Per sette inn dersom han skal ha 30 000 kroner på kontoen etter 8 år?

>[!blue-box] Påstand
>Det vil gå nøyaktig dobbelt så lang tid før beløpet Per har på konto, har doblet seg, som det vil gå før beløpet Kåre har på konto, har doblet seg.

>[!oppgave]
>b) Argumenter for at påstanden *ikke* er riktig.
>c) Hvor lang tid vil det gå før Per og Kåre til sammen har dobbelt så mye penger som de satte inn på kontoene, dersom den årlige renten er henholdsvis 3,00 prosent og 6,00 prosent?

## Fasit

a) $\approx 23\,682 \, \mathrm{kr}$
b) Forholdet er $\approx 1{,}97$, ikke nøyaktig 2
c) $\approx 15{,}2 \, \mathrm{år}$

## Løsningsforslag

### a

Per sin konto vokser med vekstfaktor $1{,}03$ per år. Etter 8 år skal han ha 30 000 kr:

$$K_0 \cdot 1{,}03^8 = 30\,000$$

$$K_0 = \frac{30\,000}{1{,}03^8}$$

Vi regner ut i CAS, se linje 1 i utklippet.

![GeoGebra CAS: renter og dobbelttid](/img/user/_resources/s1-h23-2-3-cas.png){width=50%}

**Per må sette inn $\underline{\underline{\approx 23\,682 \, \mathrm{kr}}}$.**

### b

Dobbelttiden finner vi ved å løse $1{,}03^t = 2$ og $1{,}06^t = 2$:

$$t_{\text{Per}} = \frac{\ln 2}{\ln 1{,}03} \approx 23{,}45 \, \text{år}$$

$$t_{\text{Kåre}} = \frac{\ln 2}{\ln 1{,}06} \approx 11{,}90 \, \text{år}$$

Se linje 2 og 3 i CAS-utklippet. Forholdet mellom dobbelttidene er (linje 4):

$$\frac{t_{\text{Per}}}{t_{\text{Kåre}}} = \frac{\ln 1{,}06}{\ln 1{,}03} \approx 1{,}97$$

Forholdet er **ikke** nøyaktig 2. For at det skulle vært nøyaktig 2, måtte $\ln 1{,}06 = 2 \cdot \ln 1{,}03 = \ln 1{,}03^2 = \ln 1{,}0609$, men $\ln 1{,}06 \neq \ln 1{,}0609$.

**Påstanden er altså ikke riktig** — dobbelttiden til Per er ca. $1{,}97$ ganger dobbelttiden til Kåre, ikke nøyaktig 2 ganger.

### c

La $K_0$ være beløpet hver setter inn. Samlet beløp etter $t$ år:

$$K_0 \cdot 1{,}03^t + K_0 \cdot 1{,}06^t = 2 \cdot 2K_0$$

Vi deler på $K_0$:

$$1{,}03^t + 1{,}06^t = 4$$

Vi tegner $h(t) = 1{,}03^t + 1{,}06^t$ og linjen $y = 4$ i GeoGebra og finner skjæringspunktet:

![Graf: h(t) = 1,03^t + 1,06^t og y = 4](/img/user/_resources/s1-h23-2-3-graf.png){width=70%}

Fra grafen leser vi av at $h(t) = 4$ når $t \approx 15{,}2$.

**Det vil gå omtrent $\underline{\underline{15{,}2 \, \text{år}}}$ før de til sammen har dobbelt så mye.**

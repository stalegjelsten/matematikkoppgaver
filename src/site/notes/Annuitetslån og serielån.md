---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Annuitetslån og serielån","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/annuitetslan-og-serielan/","permalink":"/annuitetslan-og-serielan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Annuitetslån og serielån","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Annuitetslån og serielån

Caroline skal kjøpe en leilighet og har skaffet et annuitetslån på 2 500 000 kr i en bank. Lånet skal betales tilbake med en nedbetalingstid på 30 år, én termin per år og en fast årlig rentesats på 2,7 %. Første innbetaling er om ett år.

>[!oppgave]
>a) Hvor mye må Caroline totalt betale til banken i løpet av hele låneperioden?

Rett etter innbetaling av det 10. terminbeløpet får Caroline banken til å gjøre lånet om til et serielån. Da gjenstår 20 årlige terminer før lånet er nedbetalt, den første om ett år. Rentesatsen er fortsatt 2,7 %.

>[!oppgave]
>b) Vis at de årlige avdragene på serielånet blir 93 820 kroner.
>c) Bestem summen av de 20 terminbeløpene for serielånet.

## Fasit

a) Ca. $3\,679\,560 \text{~kr}$
b) Avdrag $\approx 93\,820 \text{~kr}$
c) Ca. $2\,408\,372 \text{~kr}$

## Løsningsforslag

### a

Vi finner terminbeløpet for annuitetslånet. Nåverdien av alle terminbeløp skal være lik lånebeløpet:

$$T \cdot \frac{1 - 1{,}027^{-30}}{0{,}027} = 2\,500\,000$$

Vi løser i GeoGebra CAS:

![GeoGebra CAS: annuitetslån](/img/user/_resources/s2-v20-2-4.png)

Fra linje 1 ser vi at terminbeløpet er $T \approx 122\,652 \text{~kr}$.

Totalt betaler Caroline

$$30 \cdot T = 30 \cdot 122\,652 \approx \underline{\underline{3\,679\,560 \text{~kr}}}$$

### b

Vi finner restgjelden etter 10 terminer (se linje 3 i CAS-utklippet):

$$R_{10} = 2\,500\,000 \cdot 1{,}027^{10} - T \cdot \frac{1{,}027^{10} - 1}{0{,}027} \approx 1\,876\,410 \text{~kr}$$

Med serielån over 20 terminer blir de årlige avdragene

$$\text{Avdrag} = \frac{R_{10}}{20} = \frac{1\,876\,410}{20} \approx \underline{\underline{93\,820 \text{~kr}}}$$

### c

Terminbeløp nummer $k$ i serielånet er avdrag pluss renter på gjenstående gjeld:

$$T_k = 93\,820 + (1\,876\,410 - (k-1) \cdot 93\,820) \cdot 0{,}027$$

Vi bruker GeoGebra CAS til å summere:

![GeoGebra CAS: serielån sum](/img/user/_resources/s2-v20-2-4b.png)

Fra linje 3 ser vi at summen av de 20 terminbeløpene er

$$\sum_{k=1}^{20} T_k \approx \underline{\underline{2\,408\,372 \text{~kr}}}$$

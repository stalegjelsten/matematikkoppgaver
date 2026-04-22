---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","uendelig rekke","økonomi"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Geometrisk rekke og sparing","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/geometrisk-rekke-og-sparing/","permalink":"/geometrisk-rekke-og-sparing/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["rekker","uendelig rekke","økonomi"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Geometrisk rekke og sparing","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Geometrisk rekke og sparing

I en uendelig geometrisk rekke er $a_1 = \dfrac{3}{1{,}04}$ og $k = \dfrac{1}{1{,}04}$.

>[!oppgave]
>a) Begrunn at rekken konvergerer, og bestem summen av rekken.

Frode har blitt bestefar. Han ønsker å gi barnebarnet Benjamin 10 000 kroner i gave hvert år i 20 år framover, første gang om ett år. Frode oppretter i den forbindelse en konto der han vil sette inn et engangsbeløp i dag som vil dekke alle de 20 framtidige utbetalingene. Kontoen har en fast årlig rentefot på 2,0 %.

>[!oppgave]
>b) Sett opp en rekke som du kan bruke til å regne ut hvor mye Frode må sette inn på kontoen sin i dag for å kunne gjennomføre de 20 utbetalingene. (Du behøver ikke å regne ut beløpet.)

## Fasit

a) $s = 75$
b) $s = \displaystyle\sum_{i=1}^{20} \frac{10\,000}{1{,}02^i}$

## Løsningsforslag

### a

Vi har $a_1 = \dfrac{3}{1{,}04}$ og $k = \dfrac{1}{1{,}04}$.

Siden $|k| = \dfrac{1}{1{,}04} \approx 0{,}962 < 1$, konvergerer rekken.

Summen er

$$s = \frac{a_1}{1 - k} = \frac{\dfrac{3}{1{,}04}}{1 - \dfrac{1}{1{,}04}} = \frac{\dfrac{3}{1{,}04}}{\dfrac{1{,}04 - 1}{1{,}04}} = \frac{\dfrac{3}{1{,}04}}{\dfrac{0{,}04}{1{,}04}} = \frac{3}{0{,}04}$$

$$\underline{\underline{s = 75}}$$

### b

Frode setter inn et engangsbeløp $s$ i dag. Om $i$ år skal han betale ut 10 000 kr. Nåverdien av utbetalingen om $i$ år er

$$\frac{10\,000}{1{,}02^i}$$

Engangsbeløpet må dekke nåverdien av alle 20 utbetalingene:

$$\underline{\underline{s = \sum_{i=1}^{20} \frac{10\,000}{1{,}02^i} = \frac{10\,000}{1{,}02} + \frac{10\,000}{1{,}02^2} + \cdots + \frac{10\,000}{1{,}02^{20}}}}$$

Dette er en endelig geometrisk rekke med $a_1 = \dfrac{10\,000}{1{,}02}$ og $k = \dfrac{1}{1{,}02}$.

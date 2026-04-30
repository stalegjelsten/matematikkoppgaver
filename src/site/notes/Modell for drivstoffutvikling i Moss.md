---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/modell-for-drivstoffutvikling-i-moss/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6},{"del":2,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["regresjon","modellering","eksponentiell vekst"],"title":"Modell for drivstoffutvikling i Moss","todo":[],"lf-source-claude":true,"permalink":"/modell-for-drivstoffutvikling-i-moss/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6},{"del":2,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["regresjon","modellering","eksponentiell vekst"],"title":"Modell for drivstoffutvikling i Moss","todo":[],"lf-source-claude":true}}
---


# Modell for drivstoffutvikling i Moss

Det har vært en stor endring i hvilken type drivstoff bilene i Norge bruker. Statistisk sentralbyrå samler inn data om dette, og tabellen viser en oversikt over typen drivstoff til registrerte personbiler i Moss i perioden 2010–2022.

>[!oppgave]
>a) Bruk opplysningene i tabellen til å lage modeller du mener beskriver utviklingen i drivstofftypene bensin og elektrisk («El.») $t$ år etter 2010. Argumenter for valg av modeller.
>b) Ut fra modellene du har laget, hvordan vil du vurdere veksten i drivstofftypene bensin og elektrisk i årene framover, etter 2022? Kommenter gyldigheten til modellene dine.


![Personbiler per drivstofftype i Moss. Kilde: Skjermdump av ssb.no, utdrag fra tabell 07849](/img/user/_resources/s1-v24-2-6-moss.png){width=100% #fig:moss}

## Fasit

a) Bensin: lineær modell $B(t) = -452t + 14\,243$. Elektrisk: eksponentiell modell $E(t) = 100{,}5 \cdot 1{,}395^t$.

b) Bensin-modellen gir $B(20) \approx 5\,200$ biler i 2030, men forutsier negativt antall etter 2041 — ugyldig. El.-modellen gir $E(20) \approx 78\,000$ biler, som overstiger antall husstander i Moss — urealistisk.

## Løsningsforslag

### a

La $t$ være antall år etter 2010. Vi bruker GeoGebra til å kjøre regresjon på datapunktene fra tabellen.

**Bensin — lineær modell:**

Datapunktene for bensin viser en jevn nedgang år for år. Absolutt nedgang per år er omtrent 450 biler, noe som tyder på at en lineær modell passer godt. Regresjonen i GeoGebra gir

$$B(t) = -451{,}79t + 14\,243{,}25$$

med korrelasjonskoeffisient $r \approx -0{,}996$, altså en svært god lineær tilpasning. Vi avrunder til

$$\underline{\underline{B(t) = -452t + 14\,243}}$$

**Elektrisk — eksponentiell modell:**

Datapunktene for elbiler stiger kraftig og kurver oppover, noe en rett linje ikke fanger opp. Fordi veksten ser ut til å ha en tilnærmet konstant prosentvis økning per år, er en eksponentiell modell naturlig. Regresjonen i GeoGebra gir

$$E(t) = 100{,}5 \cdot 1{,}395^t$$

Vekstfaktoren $1{,}395$ tilsvarer omtrent $39{,}5\,\%$ økning per år. Modellen passer godt til data i perioden 2010–2022.

$$\underline{\underline{E(t) = 100{,}5 \cdot 1{,}395^t}}$$

Grafen under viser datapunktene (rødt: bensin, blått: elektrisk) og de to modellkurvene:

![Datapunkter og modeller for bensin (rød, lineær) og elektrisk (blå, eksponentiell)](/img/user/_resources/s1-v24-2-6-modell.png){width=100%}

### b

**Bensin-modellen fremover:**

Vi setter $t = 20$ (år 2030):

$$B(20) = -452 \cdot 20 + 14\,243 = -9\,040 + 14\,243 = \underline{\underline{5\,203 \text{ biler}}}$$

Modellen forutsier altså omtrent 5 200 bensinbiler i Moss i 2030, noe som virker rimelig på mellomlang sikt. Modellen har imidlertid en viktig begrensning: den gir negativt antall biler når $B(t) = 0$, det vil si ved

$$t = \frac{14\,243}{452} \approx 31{,}5 \quad \Rightarrow \quad \text{år 2041}$$

I virkeligheten kan ikke antall biler bli negativt. Nedgangen vil trolig avta og asymptotisk nærme seg null. Ekstrapolering til 2030 er rimelig, men modellen er ugyldig etter ca. 2041.

**El.-modellen fremover:**

Vi setter $t = 20$ (år 2030):

$$E(20) = 100{,}5 \cdot 1{,}395^{20} \approx 100{,}5 \cdot 779 \approx \underline{\underline{78\,300 \text{ biler}}}$$

Dette er klart urealistisk — Moss har omtrent 35 000 husstander, og antall personbiler totalt er begrenset. Den eksponentielle veksten kan ikke fortsette i det uendelige. I praksis vil veksten flate ut etter hvert som markedet nærmer seg metning (logistisk vekst ville gitt en mer realistisk modell for lengre tidsperspektiv).

**Konklusjon:** Bensin-modellen er rimelig til omtrent 2030–2035. El.-modellen overestimerer kraftig på lengre sikt og er kun gyldig noen få år utover 2022.
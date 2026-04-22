---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["rekker","geometrisk vekst","modellering","konvergens","uendelig rekke"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"title":"CCl4-konsentrasjon og geometrisk rekke","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Geometrisk rekke for akkumulert CCl₄-konsentrasjon; finne antall netter numerisk og utskillelsesprosent via grenseverdi.","deloppgaver":[{"deloppgave":"a","kategori":2,"beskrivelse":"Sette opp $c(n) = 2 \\cdot \\frac{1-0{,}82^n}{0{,}18}$ og løse $c(n) = 10$ numerisk i CAS."},{"deloppgave":"b","kategori":3,"beskrivelse":"Løse $\\frac{2}{1-k} = 10$ for å bestemme utskillelsesprosent fra grenseverdi av geometrisk rekke."}],"dg-permalink":"/c-cl4-konsentrasjon-og-geometrisk-rekke/","permalink":"/c-cl4-konsentrasjon-og-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["rekker","geometrisk vekst","modellering","konvergens","uendelig rekke"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"title":"CCl4-konsentrasjon og geometrisk rekke","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Geometrisk rekke for akkumulert CCl₄-konsentrasjon; finne antall netter numerisk og utskillelsesprosent via grenseverdi.","deloppgaver":[{"deloppgave":"a","kategori":2,"beskrivelse":"Sette opp $c(n) = 2 \\cdot \\frac{1-0{,}82^n}{0{,}18}$ og løse $c(n) = 10$ numerisk i CAS."},{"deloppgave":"b","kategori":3,"beskrivelse":"Løse $\\frac{2}{1-k} = 10$ for å bestemme utskillelsesprosent fra grenseverdi av geometrisk rekke."}]}}
---


# CCl4-konsentrasjon og geometrisk rekke

Karbontetraklorid ($\text{CCl}_4$) er et skadelig stoff som brytes sakte ned i kroppen og delvis lagres i fettvev. Så lenge konsentrasjonen av $\text{CCl}_4$ i kroppen er under 10 enheter, klarer leveren å skille ut stoffet som normalt. Når konsentrasjonen overstiger 10 enheter, begynner ammoniakk å hope seg opp i blodet, og det blir potensielt farlig.

Sofie skal bo nær et gammelt industriområde der det har foregått ulovlig dumping av kjemikalier. Hver natt kommer hun til å puste inn $\text{CCl}_4$ som fordamper fra grunnen og kommer inn på soverommet hennes gjennom ventilasjon og sprekker i kjelleren.

Sofie utsettes for 2 enheter $\text{CCl}_4$ per natt. Vi regner med at kroppen hennes klarer å skille ut 18 % av total mengde i kroppen i løpet av en dag.

Anta at Sofie kun skiller ut $\text{CCl}_4$ når hun ikke blir utsatt for stoffet, og at hun bare blir utsatt for $\text{CCl}_4$ om natten.

>[!oppgave]
>a) Regn ut hvor mange netter Sofie kan sove på soverommet sitt før konsentrasjonen av $\text{CCl}_4$ i kroppen hennes kommer opp på et potensielt farlig nivå.

Sofie leser en artikkel om $\text{CCl}_4$ der det blir påstått at en voksen person aldri vil ha mer enn 10 enheter av stoffet i kroppen dersom personen utsettes for 2 enheter $\text{CCl}_4$ per natt.

>[!oppgave]
>b) Regn ut hvor mange prosent av mengden $\text{CCl}_4$ artikkelen antar at en voksen person skiller ut fra kroppen per dag.

## Fasit

a) 11 netter
b) 20 %

## Løsningsforslag

### 2-3a

La $c_n$ være konsentrasjonen rett etter den $n$-te natten. Kroppen skiller ut 18 % per dag, så 82 % gjenstår. Hvert døgn tilføres 2 nye enheter:

$$c_n = 2 + 2\cdot0{,}82 + 2\cdot0{,}82^2 + \ldots + 2\cdot0{,}82^{n-1}$$

Dette er en geometrisk rekke med første ledd $a_1 = 2$ og kvotient $k = 0{,}82$, som gir sumformelen

$$c(n) = 2 \cdot \frac{1 - 0{,}82^n}{1 - 0{,}82}$$

Vi definerer $c(n)$, løser $c(n) = 10$ og kontrollerer $c(11)$ og $c(12)$ i GeoGebra CAS:

![GeoGebra CAS: definisjon av c(n), løsning av c(n)=10, og kontroll av c(11) og c(12)](/img/user/_resources/r2-h25-2-3-a-CAS-numerisk.png){width=50%}

CAS gir $n \approx 11{,}6$, og vi ser at $c(11) \approx 9{,}86 < 10$ mens $c(12) \approx 10{,}08 > 10$.

**Sofie kan sove $\underline{\underline{11 \text{ netter}}}$ på soverommet sitt før konsentrasjonen når et potensielt farlig nivå.**

### 2-3b

Grenseverdien til $c_n$ når $n \to \infty$ er $\dfrac{2}{1-k}$ der $k$ er andelen som gjenstår etter utskillelse. For at konsentrasjonen aldri skal overstige 10 enheter, må grenseverdien være $\leq 10$:

$$\frac{2}{1-k} = 10$$

Vi løser for $k$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-3b](/img/user/_resources/r2-h25-2-3-b-CAS.png){width=50%}

CAS gir $k = \dfrac{4}{5}$, og utskillelsesprosenten er $1 - k = \dfrac{1}{5} = 20\,\%$.

**Artikkelen antar at kroppen skiller ut $\underline{\underline{20 \,\%}}$ av $\text{CCl}_4$-mengden per dag.**

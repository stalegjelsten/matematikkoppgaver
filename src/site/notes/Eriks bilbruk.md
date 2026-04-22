---
{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"dg-publish":true,"temaer":["excel","økonomi","formler"],"fag":["1p-y el","1p-y ba","1p-y tp","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3},{"fag":"1p-y tp","del":2,"oppgave":3},{"fag":"1p-y fd","del":2,"oppgave":3},{"fag":"1p-y hs","del":2,"oppgave":3},{"fag":"1p-y dt","del":2,"oppgave":3},{"fag":"1p-y im","del":2,"oppgave":3},{"fag":"1p-y na","del":2,"oppgave":3},{"fag":"1p-y rm","del":2,"oppgave":3},{"fag":"1p-y sr","del":2,"oppgave":3}],"title":"Eriks bilbruk","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Regneark med bilkostnader; netto månedlig disponibelt etter skatt, husleie og bil; formelinnsetting for tidsforskjell i kjøretid.","deloppgaver":[{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Beregne netto etter skatt og trekke fra faste utgifter; vurdere om kjøpet er fornuftig."},{"deloppgave":"c","kategori":1,"vanskegrad":2,"beskrivelse":"Sette inn $v_1=58$, $v_2=65$ og $s=18$ i gitt tidsforskjellsformel."}],"dg-permalink":"/eriks-bilbruk/","lf-source-claude":true,"permalink":"/eriks-bilbruk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"temaer":["excel","økonomi","formler"],"fag":["1p-y el","1p-y ba","1p-y tp","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3},{"fag":"1p-y tp","del":2,"oppgave":3},{"fag":"1p-y fd","del":2,"oppgave":3},{"fag":"1p-y hs","del":2,"oppgave":3},{"fag":"1p-y dt","del":2,"oppgave":3},{"fag":"1p-y im","del":2,"oppgave":3},{"fag":"1p-y na","del":2,"oppgave":3},{"fag":"1p-y rm","del":2,"oppgave":3},{"fag":"1p-y sr","del":2,"oppgave":3}],"title":"Eriks bilbruk","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Regneark med bilkostnader; netto månedlig disponibelt etter skatt, husleie og bil; formelinnsetting for tidsforskjell i kjøretid.","deloppgaver":[{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Beregne netto etter skatt og trekke fra faste utgifter; vurdere om kjøpet er fornuftig."},{"deloppgave":"c","kategori":1,"vanskegrad":2,"beskrivelse":"Sette inn $v_1=58$, $v_2=65$ og $s=18$ i gitt tidsforskjellsformel."}],"lf-source-claude":true}}
---


# Eriks bilbruk


Erik vil kjøpe ny elbil. Elbilen koster 685 000 kroner. Regnearket nedenfor viser kostnadene han må regne med det første året dersom han kjører 15 000 km.

![Oversikt over Eriks bilkostnader](/img/user/_resources/eriks-bilkjoring.png){width=40%}

> [!oppgave]
>  a) Lag et regneark som vist ovenfor. Lag formler i de grønne cellene slik at du finner totale kostnader første år og kostnader per kjørte kilometer.
>  
>  Husk å vise formlene du bruker i regnearket.

Erik har en brutto månedslønn på 42 000 kroner og betaler 29 % skatt.  
Han leier en leilighet og betaler 16 000 kroner i husleie hver måned.

> [!oppgave]
>  b) Regn ut hvor mange kroner Erik vil ha til overs hver måned når kostnader til bil og leilighet er trukket fra. 
>  
>  Vurder om det er fornuftig av Erik å kjøpe elbilen. Husk å begrunne svaret ditt.

Erik kjører til jobb hver dag med den gamle bilen sin. Strekningen $s$ er 18 km.

En mandag kjører han til jobb med en gjennomsnittsfart $v_{1}=58 \mathrm{~km/h}$.

En fredag kjører han til jobb med en gjennomsnittsfart $v_{2}=65 \mathrm{~km/h}$

Tidsforskjellen $t$ minutter mellom de to turene er gitt ved formelen
$$
t=\left( \frac{1}{v_{1}}- \frac{1}{v_{2}} \right)  \cdot s \cdot 60
$$

> [!oppgave]
>  c) Hvor mye lengre tid bruker Erik på kjøreturen på mandagen sammenliknet med kjøreturen på fredagen?

## Fasit

a) Totale kostnader: $141\,300 \, \mathrm{kr}$, per km: $9{,}42 \, \mathrm{kr/km}$
b) $2\,045 \, \mathrm{kr}$ til overs – ikke fornuftig å kjøpe bilen
c) $\approx 2 \, \mathrm{min}$ lengre tid på mandagen

## Løsningsforslag

### a


![Kostnader for elbil](/img/user/_resources/1py-el-v25-2-3-erik.png){width=50%}

- **Totale kostnader første år** (celle B11): `=SUM(B5:B10)`
- **Kostnader per kjørte kilometer** (celle B12): `=B11/B2`

**Erik vil bruke 141 300 kr det første året, det tilsvarer 9,42 kr per km.**

### b

Erik har en brutto månedslønn på 42 000 kr og betaler 29 % skatt:
$$\text{Netto lønn} = 42\,000 \cdot (1 - 0{,}29) = 42\,000 \cdot 0{,}71 = 29\,820 \, \mathrm{kr/mnd}$$

Bilkostnadene per måned er:
$$\frac{141\,300}{12} = 11\,775 \, \mathrm{kr/mnd}$$

Etter å ha betalt for husleie og bil sitter Erik igjen med:
$$29\,820 - 16\,000 - 11\,775 = \underline{\underline{2\,045 \, \mathrm{kr}}}$$

**Erik vil ha $\underline{\underline{2\,045 \, \mathrm{kr}}}$ til overs per måned etter bil og leilighet.**

Det er svært lite å leve av – bare til mat, klær og andre utgifter. Med en netto lønn på rundt 30 000 kr og faste utgifter til bil og leilighet på nesten 28 000 kr, vil de fleste mene at det ikke er fornuftig å kjøpe elbilen.

### c

Vi setter inn i formelen med $v_1 = 58 \, \mathrm{km/h}$, $v_2 = 65 \, \mathrm{km/h}$ og $s = 18 \, \mathrm{km}$:
$$t = \left( \frac{1}{v_1} - \frac{1}{v_2} \right) \cdot s \cdot 60 = \left( \frac{1}{58} - \frac{1}{65} \right) \cdot 18 \cdot 60$$

$$= \frac{65 - 58}{58 \cdot 65} \cdot 1080 = \frac{7}{3770} \cdot 1080 \approx \underline{\underline{2 \, \mathrm{min}}}$$

**Erik bruker omtrent $\underline{\underline{2 \, \mathrm{minutt}}}$ lengre tid på mandagen enn på fredagen.**

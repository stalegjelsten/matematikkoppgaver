---
{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"dg-publish":true,"temaer":["excel","økonomi","formler"],"fag":["1p-y el","1p-y ba"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3}],"title":"Eriks bilbruk","source":null,"todo":null,"status":3,"permalink":"/eriks-bilbruk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"temaer":["excel","økonomi","formler"],"fag":["1p-y el","1p-y ba"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3}],"title":"Eriks bilbruk","source":null,"todo":null,"status":3,"permalink":"/eriks-bilbruk/"}}
---


# Eriks bilbruk


Erik vil kjøpe ny elbil. Elbilen koster 685 000 kroner. Regnearket nedenfor viser kostnadene han må regne med det første året dersom han kjører 15 000 km.

![Oversikt over Eriks bilkostnader](/img/user/_resources/eriks-bilkjoring.png)

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

### 2-3a

> [!note] Excel-oppgave
> Åpne filen `eriks-bilbruk-losning.xlsx` og ta skjermbilde av regnearket med formler.

Regnearket skal inneholde disse formlene i de grønne cellene:

- **Totale kostnader første år** (celle C11): `=SUM(C5:C10)`
- **Kostnader per kjørte kilometer** (celle C12): `=C11/C2`

Resultater:

$$\text{Totale kostnader} = 64\,000 + 37\,900 + 14\,500 + 19\,100 + 3\,800 + 2\,000 = \underline{\underline{141\,300 \, \mathrm{kr}}}$$

$$\text{Kostnader per km} = \frac{141\,300}{15\,000} = \underline{\underline{9{,}42 \, \mathrm{kr/km}}}$$

### 2-3b

Erik har en brutto månedslønn på 42 000 kr og betaler 29 % skatt:
$$\text{Netto lønn} = 42\,000 \cdot (1 - 0{,}29) = 42\,000 \cdot 0{,}71 = 29\,820 \, \mathrm{kr/mnd}$$

Bilkostnadene per måned er:
$$\frac{141\,300}{12} = 11\,775 \, \mathrm{kr/mnd}$$

Erik har til overs hver måned:
$$29\,820 - 16\,000 - 11\,775 = \underline{\underline{2\,045 \, \mathrm{kr}}}$$

**Erik vil ha $\underline{\underline{2\,045 \, \mathrm{kr}}}$ til overs per måned etter bil og leilighet.**

Det er svært lite å leve av – bare til mat, klær og andre utgifter. Med en netto lønn på rundt 30 000 kr og faste utgifter til bil og leilighet på nesten 28 000 kr, vil de fleste mene at det ikke er fornuftig å kjøpe elbilen.

### 2-3c

Vi setter inn i formelen med $v_1 = 58 \, \mathrm{km/h}$, $v_2 = 65 \, \mathrm{km/h}$ og $s = 18 \, \mathrm{km}$:
$$t = \left( \frac{1}{v_1} - \frac{1}{v_2} \right) \cdot s \cdot 60 = \left( \frac{1}{58} - \frac{1}{65} \right) \cdot 18 \cdot 60$$

$$= \frac{65 - 58}{58 \cdot 65} \cdot 1080 = \frac{7}{3770} \cdot 1080 \approx \underline{\underline{2 \, \mathrm{min}}}$$

**Erik bruker omtrent $\underline{\underline{2 \, \mathrm{minutt}}}$ lengre tid på mandagen enn på fredagen.**

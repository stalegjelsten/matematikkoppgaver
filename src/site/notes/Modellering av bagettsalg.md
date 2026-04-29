---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/modellering-av-bagettsalg/","dg-publish":true,"eksamen":"v24","fag":["1t","1p"],"lf-source-claude":true,"modified":"2026-03-28","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1},{"del":2,"fag":"1p","oppgave":1}],"poeng":8,"source":null,"status":1,"tags":["oppgave"],"temaer":["regresjon","modellering","derivasjon","optimering"],"title":"Modellering av bagettsalg","permalink":"/modellering-av-bagettsalg/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t","1p"],"lf-source-claude":true,"modified":"2026-03-28","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1},{"del":2,"fag":"1p","oppgave":1}],"poeng":8,"source":null,"status":1,"tags":["oppgave"],"temaer":["regresjon","modellering","derivasjon","optimering"],"title":"Modellering av bagettsalg"}}
---


# Modellering av bagettsalg

Tabellen nedenfor viser hvor mange bagetter en kantine har solgt hver av de siste sju ukene, og hvor stort overskudd salget har gitt.

| Solgte bagetter    | 100  | 130  | 160  | 175  | 190  | 220  | 235  |
| ------------------ | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Overskudd (kroner) | 1450 | 2300 | 3050 | 3365 | 3720 | 4140 | 4175 |

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $O$ gitt ved
>$$O(x) = -0{,}09x^2 + 51{,}04x - 2776{,}98$$
>er en god modell for hvor stort overskuddet en uke blir når kantinen produserer og selger $x$ bagetter i løpet av uken.
>b) Hvor mange bagetter må kantinen produsere og selge i løpet av en uke, ifølge modellen $O$, for at overskuddet skal bli størst mulig? Hvor stort blir dette overskuddet?
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(100, O(100))$ og $(200, O(200))$. Gi en praktisk tolkning av svaret du får.
>d) Bestem den momentane vekstfarten når $x = 235$. Gi en praktisk tolkning av svaret du får.

## Fasit

a) Alle datapunkter ligger nær kurven — $O(x)$ er en god modell.

b) **Maksimalt overskudd $\underline{\underline{\approx 4459 \, \mathrm{kr}}}$ ved $\underline{\underline{x \approx 284}}$ bagetter.**

c) Stigningstallet er $\underline{\underline{24{,}04 \, \mathrm{kr/bagett}}}$.

d) Momentan vekstfart: $\underline{\underline{O'(235) \approx 8{,}74 \, \mathrm{kr/bagett}}}$.

## Løsningsforslag

### a

Vi plotter datapunktene fra tabellen og grafen til $O(x) = -0{,}09x^2 + 51{,}04x - 2776{,}98$ i GeoGebra:

![Datapunkter og O(x) plottet i GeoGebra](/img/user/_resources/1t-v24-2-1.png)

Vi ser at alle de røde datapunktene ligger svært nær den blå kurven. Vi kan også beregne modellverdiene og sammenligne:

| $x$ | $O(x)$ (modell) | Faktisk overskudd | Avvik |
|-----|-----------------|-------------------|-------|
| 100 | $1\,427$ kr | $1\,450$ kr | $23$ kr |
| 130 | $2\,348$ kr | $2\,300$ kr | $48$ kr |
| 160 | $3\,092$ kr | $3\,050$ kr | $42$ kr |
| 175 | $3\,405$ kr | $3\,365$ kr | $40$ kr |
| 190 | $3\,706$ kr | $3\,720$ kr | $14$ kr |
| 220 | $4\,102$ kr | $4\,140$ kr | $38$ kr |
| 235 | $4\,178$ kr | $4\,175$ kr | $3$ kr |

Avvikene er små (under $50$ kr) sammenlignet med overskuddet. **$O(x)$ er en god modell.**

### b

Vi finner toppunktet til $O(x)$ ved å sette den deriverte lik null.

$$O'(x) = -0{,}18x + 51{,}04 = 0$$

Vi løser dette i GeoGebra CAS:

![CAS: derivert og optimum](/img/user/_resources/1t-v24-2-1-cas.png)

$$x = \frac{51{,}04}{0{,}18} \approx 283{,}56$$

Det vil si at overskuddet er størst ved $x \approx 284$ bagetter. Maksimalt overskudd:

$$O(283{,}56) \approx 4459{,}36 \, \mathrm{kr}$$

**Kantinen bør produsere og selge ca. $\underline{\underline{284}}$ bagetter per uke. Da blir overskuddet $\underline{\underline{\approx 4459 \, \mathrm{kr}}}$.**

### c

Vi beregner stigningstallet til sekanten gjennom $(100,\, O(100))$ og $(200,\, O(200))$:

$$O(100) = -0{,}09 \cdot 100^2 + 51{,}04 \cdot 100 - 2776{,}98 = 1\,427{,}02 \, \mathrm{kr}$$

$$O(200) = -0{,}09 \cdot 200^2 + 51{,}04 \cdot 200 - 2776{,}98 = 3\,831{,}02 \, \mathrm{kr}$$

$$\text{Stigningstall} = \frac{O(200) - O(100)}{200 - 100} = \frac{3831{,}02 - 1427{,}02}{100} = \frac{2404}{100} = 24{,}04$$

**Stigningstallet er $\underline{\underline{24{,}04 \, \mathrm{kr/bagett}}}$.**

Praktisk tolkning: Når antall solgte bagetter øker fra 100 til 200, øker overskuddet i gjennomsnitt med $24{,}04$ kr per ekstra bagett.

### d

Den momentane vekstfarten er verdien av den deriverte i punktet $x = 235$:

$$O'(x) = -0{,}18x + 51{,}04$$

$$O'(235) = -0{,}18 \cdot 235 + 51{,}04 = -42{,}30 + 51{,}04 = 8{,}74$$

**Den momentane vekstfarten er $\underline{\underline{O'(235) \approx 8{,}74 \, \mathrm{kr/bagett}}}$.**

Praktisk tolkning: Når kantinen allerede selger 235 bagetter per uke, vil én ekstra solgt bagett øke overskuddet med ca. $8{,}74$ kr.
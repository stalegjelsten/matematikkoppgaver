---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["økonomi","prosentregning","modellering","systematisering","sammensatte måleenheter"],"fag":["1p-y el","1p-y fd","1p-y dt","1p-y ba","1p-y hs","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":4},{"fag":"1p-y fd","del":2,"oppgave":4},{"fag":"1p-y dt","del":2,"oppgave":4},{"fag":"1p-y ba","del":2,"oppgave":4},{"fag":"1p-y hs","del":2,"oppgave":4},{"fag":"1p-y im","del":2,"oppgave":4},{"fag":"1p-y na","del":2,"oppgave":4},{"fag":"1p-y rm","del":2,"oppgave":4},{"fag":"1p-y sr","del":2,"oppgave":4},{"fag":"1p-y tp","del":2,"oppgave":4}],"title":"Isak reiser Oslo til Stockholm","status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Sammenlikne to reisealternativ ved å systematisere pris, tid, gjennomsnittsfart, CO₂-utslipp og prosentvis forskjell, og gi en helhetlig anbefaling.","source":null,"todo":null,"dg-permalink":"/isak-reiser-oslo-til-stockholm/","lf-source-claude":true,"permalink":"/isak-reiser-oslo-til-stockholm/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["økonomi","prosentregning","modellering","systematisering","sammensatte måleenheter"],"fag":["1p-y el","1p-y fd","1p-y dt","1p-y ba","1p-y hs","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":4},{"fag":"1p-y fd","del":2,"oppgave":4},{"fag":"1p-y dt","del":2,"oppgave":4},{"fag":"1p-y ba","del":2,"oppgave":4},{"fag":"1p-y hs","del":2,"oppgave":4},{"fag":"1p-y im","del":2,"oppgave":4},{"fag":"1p-y na","del":2,"oppgave":4},{"fag":"1p-y rm","del":2,"oppgave":4},{"fag":"1p-y sr","del":2,"oppgave":4},{"fag":"1p-y tp","del":2,"oppgave":4}],"title":"Isak reiser Oslo til Stockholm","status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Sammenlikne to reisealternativ ved å systematisere pris, tid, gjennomsnittsfart, CO₂-utslipp og prosentvis forskjell, og gi en helhetlig anbefaling.","source":null,"todo":null,"lf-source-claude":true}}
---


# Isak reiser Oslo til Stockholm

Isak skal reise fra Oslo til Stockholm. Han finner to alternative måter:

| Alternativ 1                               |  Pris  | Avgang | Ankomst | Distanse |
| :-------------------------- | :----: | :----: | :-----: | :------: |
| Tog fra Oslo sentrum til Stockholm sentrum | 551 kr | 07:32  |  14:19  |  416 km  |

| Alternativ 2                                     |  Pris  | Avgang | Ankomst | Distanse |
| :-------------------------- | :----: | :----: | :-----: | :------: |
| Tog fra Oslo sentrum til Oslo lufthavn           | 118 kr | 07:54  |  08:17  |  48 km   |
| Fly fra Oslo lufthavn til Stockholm lufthavn     | 799 kr | 09:20  |  10:20  |  385 km  |
| Tog fra Stockholm lufthavn til Stockholm sentrum | 178 kr | 11:13  |  11:52  |  38 km   |

>[!oppgave]
>Ta utgangspunkt i spørsmålene til Isak. Gjør beregninger og vurderinger som gir mest mulig informasjon om det han lurer på:
>
>- Hvor mange kroner sparer jeg ved å velge alternativ 1?
>- Hvor mye tid sparer jeg ved å velge alternativ 2?
>- Jeg lurer på hvor fort toget i alternativ 1 kjører. Kan jeg regne ut gjennomsnittsfarten med formelen $s = vt$?
>- Utslippet av CO₂ er 133 gram per kilometer jeg reiser med fly, og 10 gram per kilometer jeg reiser med tog. Hvor mange kilogram utslipp blir det for hvert av alternativene?
>- Hvor mange prosent lavere utslipp blir det med alternativ 1, sammenlignet med alternativ 2?
>
>Vurder i tillegg hvilket reisealternativ du mener Isak bør velge.

## Fasit

Alt 1 er 544 kr billigere. Alt 2 er 2 t 49 min raskere. Gjennomsnittsfart tog ≈ 61,4 km/h. CO₂: alt 1 = 4,16 kg, alt 2 = 52,1 kg. Alt 1 har 92 % lavere utslipp.

## Løsningsforslag

Vi beregner og svarer på hvert av Isaks spørsmål.

**Pris:**

$$
\text{Alt 2:} \quad 118 + 799 + 178 = 1095 \, \mathrm{kr}
$$

$$
1095 - 551 = 544 \, \mathrm{kr}
$$

**Isak sparer $\underline{\underline{544 \, \mathrm{kr}}}$ ved å velge alternativ 1.**

---

**Tid:**

$$
\text{Alt 1:} \quad 14{:}19 - 07{:}32 = 6 \text{ t } 47 \text{ min} = 407 \text{ min}
$$

$$
\text{Alt 2:} \quad 11{:}52 - 07{:}54 = 3 \text{ t } 58 \text{ min} = 238 \text{ min}
$$

$$
407 - 238 = 169 \text{ min} = 2 \text{ t } 49 \text{ min}
$$

**Isak sparer $\underline{\underline{2 \, \mathrm{timer} \, 49 \, \mathrm{minutter}}}$ ved å velge alternativ 2.**

---

**Gjennomsnittsfart, alternativ 1:**

Vi bruker $v = \dfrac{s}{t}$ med $s = 416 \, \mathrm{km}$ og $t = \dfrac{407}{60} \, \mathrm{h}$:

$$
v = \frac{416}{\frac{407}{60}} = \frac{416 \cdot 60}{407} \approx 61{,}4 \, \mathrm{km/h}
$$

**Gjennomsnittsfarten til toget er $\underline{\underline{61{,}4 \, \mathrm{km/h}}}$.**

---

**CO₂-utslipp:**

Alternativ 1 (kun tog, 416 km):

$$
416 \cdot 10 = 4\,160 \, \mathrm{g} = 4{,}16 \, \mathrm{kg}
$$

Alternativ 2 (tog + fly + tog):

$$
\underbrace{48 \cdot 10}_{480} + \underbrace{385 \cdot 133}_{51\,205} + \underbrace{38 \cdot 10}_{380} = 52\,065 \, \mathrm{g} \approx 52{,}1 \, \mathrm{kg}
$$

**CO₂-utslipp: alternativ 1 gir $\underline{\underline{4{,}16 \, \mathrm{kg}}}$, alternativ 2 gir $\underline{\underline{52{,}1 \, \mathrm{kg}}}$.**

---

**Prosentvis lavere utslipp, alternativ 1:**

$$
\frac{52{,}065 - 4{,}160}{52{,}065} \cdot 100 \approx 92{,}0 \, \%
$$

**Alternativ 1 har $\underline{\underline{92 \, \%}}$ lavere CO₂-utslipp enn alternativ 2.**

---

**Vurdering:**

Alternativ 1 er klart å foretrekke ut fra pris og miljø – det er 544 kr billigere og slipper ut 92 % mindre CO₂. Alternativ 2 er 2 timer og 49 minutter raskere, men den store miljøforskjellen gjør at **jeg anbefaler Isak å velge alternativ 1 (direktetoget).**

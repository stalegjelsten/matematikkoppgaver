---
{"aliases":[],"date":"2024-11-14","del":2,"dg-permalink":"/antrekk-og-sannsynlighet-hos-drakt-og-som/","dg-publish":true,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"lf-source-claude":true,"temaer":["kombinatorikk","sannsynlighet"],"title":"Antrekk og sannsynlighet hos Drakt og Søm","todo":[],"permalink":"/antrekk-og-sannsynlighet-hos-drakt-og-som/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":2,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"lf-source-claude":true,"temaer":["kombinatorikk","sannsynlighet"],"title":"Antrekk og sannsynlighet hos Drakt og Søm","todo":[]}}
---


# Antrekk og sannsynlighet hos Drakt og Søm

Bedriften Drakt & Søm leier ut komplette antrekk. Et antrekk består av et hodeplagg, en skjorte, en jakke, en bukse og et par sko. Bedriften har 10 hodeplagg, 20 skjorter, 15 jakker, 15 bukser og 5 par sko. Alle plagg og skopar som bedriften leier ut, er ulike.

>[!oppgave]
>a) Hvor mange forskjellige antrekk er det mulig å lage?

Tore leier et antrekk. Han har det litt travelt når han skal hente antrekket, og tar med seg 3 tilfeldige sko.

>[!oppgave]
>b) Bestem sannsynligheten for at Tore får med seg et skopar.

I byen Draktenburg bor det 542 000 mennesker.

>[!oppgave]
>c) Hva er minste antall nye plagg og/eller skopar Drakt & Søm må anskaffe for at de skal ha flere mulige antrekk enn antall mennesker i Draktenburg?

## Fasit

a) $\underline{\underline{225\,000 \text{ ulike antrekk}}}$

b) $\underline{\underline{P = \dfrac{1}{3}}}$

c) **Minste antall nye plagg/skopar: $\underline{\underline{7}}$** (f.eks. 1 hodeplagg + 6 skopar)

## Løsningsforslag

### a

Antrekket skal bestå av fem deler: ett hodeplagg, én skjorte, én jakke, én bukse og ett skopar. For hvert valg er alternativene uavhengige av hverandre, så vi bruker **multiplikasjonsprinsippet**:

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 5 = \underline{\underline{225\,000}}$$

Det er **225 000 forskjellige antrekk** mulig å lage.

### b

Tore tar med seg 3 tilfeldige sko fra 5 skopar, altså totalt 10 enkeltsko. Vi teller antall måter å velge 3 sko av 10:

$$\binom{10}{3} = \frac{10!}{3! \cdot 7!} = 120$$

Vi finner antall måter Tore *ikke* får med seg noe komplett skopar (altså at alle tre skoene er fra forskjellige par):

- Velg 3 av de 5 parene: $\binom{5}{3} = 10$
- Fra hvert valgte par velges én av to sko: $2^3 = 8$
- Antall utfall uten noe par: $10 \cdot 8 = 80$

Antall gunstige utfall (minst ett skopar):

$$120 - 80 = 40$$

Sannsynligheten for at Tore får med seg et skopar:

$$P = \frac{40}{120} = \underline{\underline{\frac{1}{3} \approx 0{,}333}}$$

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at **7 nye plagg/skopar** (f.eks. 1 hodeplagg + 6 skopar) er minimum, mens matematikk.net mener **8 skopar** er minimum. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Drakt & Søm trenger å ha flere mulige antrekk enn 542 000. Nåværende antall er $10 \cdot 20 \cdot 15 \cdot 15 \cdot 5 = 225\,000$.

Vi vil legge til færrest mulig nye plagg/skopar slik at produktet overstiger 542 000. For å minimere antall nye enheter lønner det seg å øke det faktoren som gir størst relativ økning per ny enhet.

Relativ økning per ny enhet for hvert element:

| Kategori | Opprinnelig | Ny faktor per ekstra enhet |
|----------|-------------|---------------------------|
| Hodeplagg | 10 | $\frac{11}{10} = 1{,}10$ |
| Skjorte | 20 | $\frac{21}{20} = 1{,}05$ |
| Jakke | 15 | $\frac{16}{15} \approx 1{,}07$ |
| Bukse | 15 | $\frac{16}{15} \approx 1{,}07$ |
| Skopar | 5 | $\frac{6}{5} = 1{,}20$ |

Hvert nye skopar gir størst relativ effekt, så vi starter der. Vi sjekker systematisk:

Med 7 ekstra skopar alene (5 + 7 = 12 skopar):

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 12 = 540\,000 < 542\,000 \quad \text{✗}$$

Med 7 ekstra totalt — 6 skopar + 1 hodeplagg (11 hodeplagg, 11 skopar):

$$11 \cdot 20 \cdot 15 \cdot 15 \cdot 11 = 544\,500 > 542\,000 \quad \text{✓}$$

Vi sjekker at 6 ekstra ikke er nok. Best mulig fordeling med 6 ekstra er f.eks. 6 skopar (5 + 6 = 11):

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 11 = 495\,000 < 542\,000 \quad \text{✗}$$

Eller 5 skopar + 1 hodeplagg:

$$11 \cdot 20 \cdot 15 \cdot 15 \cdot 10 = 495\,000 < 542\,000 \quad \text{✗}$$

Ingen fordeling av 6 ekstra plagg gir over 542 000.

**Drakt & Søm må anskaffe minst 7 nye plagg/skopar**, for eksempel 1 hodeplagg og 6 skopar, slik at antallet mulige antrekk blir $544\,500 > 542\,000$.
---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","regresjon","integral","modellering"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":9,"title":"Immunitet og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/immunitet-og-logistisk-modell/","permalink":"/immunitet-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","regresjon","integral","modellering"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":9,"title":"Immunitet og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Immunitet og logistisk modell

I en by i Norge ble det i 2021 kartlagt hvor mange som ble immune mot en sykdom.

Tabellen viser hvor stor prosentandel av befolkningen som var immune ved slutten av noen utvalgte måneder i 2021.

| $t$ | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| Prosentandel immune | 6 | 21 | 41 | 68 | 81 |

Her er $t = 1$ slutten av januar 2021, $t = 2$ slutten av februar 2021 og så videre.

>[!oppgave]
>a) Bruk regresjon til å bestemme en logistisk modell $g$ for situasjonen.
>b) Ved hvilket tidspunkt vil andelen immune passere 85 prosent ifølge modellen?
>c) Vil hele befolkningen noen gang bli immune ifølge modellen? Begrunn svaret.

I en annen by er $N$ gitt ved

$$N(t) = \frac{2300e^{-0{,}61t}}{(1 + 40e^{-0{,}61t})^2}$$

en god modell for hvor mye prosentandelen som er immune, økte med per måned, $t$ måneder etter 1. januar 2021. Det vil si at $N(1)$ er prosentandelen nye immune i januar 2021, $N(2)$ er prosentandelen nye immune i februar 2021, og så videre.

>[!oppgave]
>d) Bruk graftegner til å tegne grafen til $N$.
>e) Bestem $\displaystyle\int_{0{,}5}^{12{,}5} N(t) \, \mathrm{d}t$. Hva forteller svaret i denne situasjonen?

## Fasit

a) $g(t) \approx \dfrac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}}$
b) $t \approx 11$, dvs. slutten av november 2021
c) Nei, grenseverdien er ca. 90 %
d) Se graf
e) $\approx 89{,}4$ prosentpoeng

## Løsningsforslag

### a

Vi bruker logistisk regresjon på datapunktene $(2, 6)$, $(4, 21)$, $(6, 41)$, $(8, 68)$, $(10, 81)$.

Regresjonen gir en logistisk modell:

$$\underline{\underline{g(t) \approx \frac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}}}}$$

### b

Vi skal løse $g(t) = 85$:

$$\frac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}} = 85$$

$$1 + 38{,}6 \cdot e^{-0{,}59t} = \frac{90}{85} \approx 1{,}059$$

$$e^{-0{,}59t} = \frac{0{,}059}{38{,}6} \approx 0{,}00153$$

$$t = \frac{-\ln(0{,}00153)}{0{,}59} \approx \underline{\underline{11}}$$

Andelen immune passerer 85 % ved slutten av november 2021.

### c

Grenseverdien til den logistiske modellen er $L \approx 90$:

$$\lim_{t \to \infty} g(t) = \frac{90}{1 + 0} = 90$$

**Nei**, hele befolkningen vil aldri bli immune ifølge modellen. Andelen nærmer seg 90 %, men når aldri 100 %.

### d

![Graf av N(t)](/img/user/_resources/s2-v22-2-1-graf.png)

Grafen viser at $N(t)$ starter lavt, stiger til et maksimum rundt $t \approx 6$ (juni), og avtar deretter mot null.

### e

Vi beregner integralet i CAS, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-1-cas.png)

$$\int_{0{,}5}^{12{,}5} N(t) \, \mathrm{d}t \approx \underline{\underline{89{,}4}}$$

Svaret forteller at den totale prosentandelen av befolkningen som ble immune i løpet av de 12 månedene fra midten av januar til midten av januar (altså hele 2021), var ca. **89,4 prosentpoeng**.

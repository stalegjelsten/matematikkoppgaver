---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","stigningstall","gjennomsnittlig vekstfart","derivasjon","geometrisk vekst"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1}],"poeng":8,"title":"Avisabonnenter, sekant og momentan vekstfart","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke eksponentialmodellen $P(x)=3600\\cdot 0{,}85^x+600$: startverdi, sekantstigningstall, momentan vekstfart og krysningstidspunkt mot digital modell.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Finne $P(0)=4200$ ved direkte innsetting og ved å lese av modellens nivå når $0{,}85^x$ er størst."},{"deloppgave":"d","vanskegrad":3,"beskrivelse":"Finne første år da digital modell $D(x)=1000\\cdot 1{,}055^{x-9}$ overstiger $P(x)$ ved skjæringspunkt eller helårssjekk."}],"source":null,"lf-source-claude":true,"todo":null,"permalink":"/avisabonnenter-sekant-og-momentan-vekstfart/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["eksponentialfunksjoner","stigningstall","gjennomsnittlig vekstfart","derivasjon","geometrisk vekst"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1}],"poeng":8,"title":"Avisabonnenter, sekant og momentan vekstfart","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke eksponentialmodellen $P(x)=3600\\cdot 0{,}85^x+600$: startverdi, sekantstigningstall, momentan vekstfart og krysningstidspunkt mot digital modell.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Finne $P(0)=4200$ ved direkte innsetting og ved å lese av modellens nivå når $0{,}85^x$ er størst."},{"deloppgave":"d","vanskegrad":3,"beskrivelse":"Finne første år da digital modell $D(x)=1000\\cdot 1{,}055^{x-9}$ overstiger $P(x)$ ved skjæringspunkt eller helårssjekk."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Avisabonnenter, sekant og momentan vekstfart

Funksjonen $P$ gitt ved

$$P(x) = 3600 \cdot 0{,}85^x + 600$$

er en modell som viser hvor mange personer som abonnerte på papirutgaven av en avis $x$ år etter 2010.

>[!oppgave]
>a) Vis hvordan du på to ulike måter kan finne ut hvor mange personer som abonnerte på papirutgaven i 2010.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4,\ P(4))$ og $(14,\ P(14))$. Gi en praktisk tolkning av svaret du får.
>c) Bestem den momentane vekstfarten når $x = 10$. Gi en praktisk tolkning av svaret du får.

I 2019 abonnerte 1000 personer på den digitale utgaven av avisen. Antallet personer som abonnerte på den digitale utgaven, økte med 5,5 % hvert år fra 2019 til 2024.

>[!oppgave]
>d) Hvilket år var det for første gang flere personer som abonnerte på den digitale utgaven av avisen enn på papirutgaven?

## Fasit

a) $\underline{\underline{P(0) = 4200}}$ abonnenter i 2010.

b) Stigningstallet er $\underline{\underline{\approx -150{,}93}}$. I gjennomsnitt mistet papirutgaven ca. 151 abonnenter per år i perioden 2014–2024.

c) $\underline{\underline{P'(10) \approx -115{,}18}}$. I 2020 falt antall papir­abonnenter med ca. 115 per år momentant.

d) $\underline{\underline{2022}}$ var første år da digitale abonnenter oversteg papir­abonnenter.

## Løsningsforslag

![Graf som viser P(x) (blå), D(x) (grønn) og sekantlinjen (oransje)](/img/user/_resources/1t-h24-2-1.png)

### a

Vi skal finne antall abonnenter på papirutgaven i 2010, som tilsvarer $x = 0$.

**Metode 1 – direkte innsetting:**

$$P(0) = 3600 \cdot 0{,}85^0 + 600 = 3600 \cdot 1 + 600 = \mathbf{\underline{\underline{4200}}}$$

**Metode 2 – tolke modellen:**

I uttrykket $P(x) = 3600 \cdot 0{,}85^x + 600$ er leddet $3600 \cdot 0{,}85^x$ en eksponentialfunksjon som starter i $3600$ når $x = 0$. Konstanten $600$ er horisontal asymptote. Startverdien er dermed $3600 + 600 = 4200$.

**I 2010 abonnerte $\underline{\underline{4200}}$ personer på papirutgaven.**

### b

Stigningstallet til sekanten gjennom $(4,\ P(4))$ og $(14,\ P(14))$ er den gjennomsnittlige vekstfarten i intervallet $[4, 14]$.

Vi beregner funksjonsverdiene:

$$P(4) = 3600 \cdot 0{,}85^4 + 600 \approx 2479{,}22$$

$$P(14) = 3600 \cdot 0{,}85^{14} + 600 \approx 969{,}97$$

Stigningstallet (gjennomsnittlig vekstfart):

$$a = \frac{P(14) - P(4)}{14 - 4} = \frac{969{,}97 - 2479{,}22}{10} \approx \mathbf{\underline{\underline{-150{,}93}}}$$

Sekantlinjen er $\textcolor{tomato}{sek(x) = -150{,}93x + 3082{,}92}$ (vist i oransje på grafen, med punktene $A = (4,\ 2479{,}22)$ og $B = (14,\ 969{,}97)$).

**Praktisk tolkning:** Fra 2014 til 2024 mistet papirutgaven i gjennomsnitt ca. 151 abonnenter per år.

### c

Den momentane vekstfarten er den deriverte $P'(x)$.

Siden $P(x) = 3600 \cdot 0{,}85^x + 600$ er en eksponentialfunksjon, bruker vi at $(a^x)' = a^x \cdot \ln a$:

$$P'(x) = 3600 \cdot 0{,}85^x \cdot \ln(0{,}85)$$

CAS bekrefter (se utklipp fra GeoGebra CAS):

![CAS-utregning av den deriverte](/img/user/_resources/1t-h24-2-1-cas.png)

Ved $x = 10$:

$$P'(10) = 3600 \cdot 0{,}85^{10} \cdot \ln(0{,}85) \approx \mathbf{\underline{\underline{-115{,}18}}}$$

**Praktisk tolkning:** I 2020 ($x = 10$) falt antall papir­abonnenter med ca. 115 per år momentant.

### d

Vi setter opp modellen for digitale abonnenter. I 2019 ($x = 9$) var det 1000 digitale abonnenter, og antallet økte med 5,5 % per år:

$$D(x) = 1000 \cdot 1{,}055^{x-9}$$

Vi sjekker heltallsverdiene rundt der de to grafene krysser hverandre (synlig på grafen ca. ved $x \approx 11{,}7$):

| $x$ | År | $P(x)$ | $D(x)$ | $D > P$? |
|-----|----|--------|--------|----------|
| 11 | 2021 | $\approx 1202$ | $\approx 1113$ | Nei |
| 12 | 2022 | $\approx 1112$ | $\approx 1174$ | **Ja** |

I 2021 var det fortsatt flere papir­abonnenter enn digitale. I 2022 oversteg digitale abonnenter papir­abonnenter for første gang.

**$\underline{\underline{2022}}$ var første år da flere abonnerte digitalt enn på papir.**

---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/kikhoste-som-eksponentiell-vekst/","dg-publish":true,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","modellering","gjennomsnittlig vekstfart"],"title":"Kikhoste som eksponentiell vekst","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Vurdere, tolke og bruke en eksponentiell modell for smittespredning av kikhoste.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Vise at den eksponentielle modellen passer godt ved å sammenligne med tabellverdier."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Gi praktisk tolkning av vekstfaktoren 1,2 i modellen."},{"deloppgave":"c","kategori":2,"vanskegrad":2,"beskrivelse":"Beregne gjennomsnittlig vekstfart (sekantens stigningstall) og tolke svaret praktisk."},{"deloppgave":"d","kategori":2,"vanskegrad":1,"beskrivelse":"Bruke modellen til å predikere antall tilfeller i mai 2025."}],"lf-source-claude":true,"permalink":"/kikhoste-som-eksponentiell-vekst/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","modellering","gjennomsnittlig vekstfart"],"title":"Kikhoste som eksponentiell vekst","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Vurdere, tolke og bruke en eksponentiell modell for smittespredning av kikhoste.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Vise at den eksponentielle modellen passer godt ved å sammenligne med tabellverdier."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Gi praktisk tolkning av vekstfaktoren 1,2 i modellen."},{"deloppgave":"c","kategori":2,"vanskegrad":2,"beskrivelse":"Beregne gjennomsnittlig vekstfart (sekantens stigningstall) og tolke svaret praktisk."},{"deloppgave":"d","kategori":2,"vanskegrad":1,"beskrivelse":"Bruke modellen til å predikere antall tilfeller i mai 2025."}],"lf-source-claude":true}}
---


# Kikhoste som eksponentiell vekst

Tabellen nedenfor viser antall registrerte tilfeller av kikhoste i Norge noen måneder i perioden januar 2023–oktober 2024.

| Måned                        | Jan 2023 | Mai 2023 | Okt 2023 | Feb 2024 | Aug 2024 | Okt 2024 |
| ---------------------------- | :------: | :------: | :------: | :------: | :------: | :------: |
| Antall registrerte tilfeller |    29    |    93    |   164    |   284    |   1035   |   1657   |

La $x$ være antall måneder etter desember 2022. Det vil si at $x = 1$ tilsvarer januar 2023, $x = 3$ tilsvarer mars 2023, og så videre.

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $K$ gitt ved
>$$K(x) = 27{,}8 \cdot 1{,}2^{x}$$
>er en god modell for antall registrerte tilfeller av kikhoste i Norge i perioden januar 2023–oktober 2024.
>b) Gi en praktisk tolkning av tallet $1{,}2$ i modellen.
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4,\ K(4))$ og $(21,\ K(21))$. Gi en praktisk tolkning av svaret du får.
>d) Hvor mange tilfeller av kikhoste vil bli registrert i Norge i mai 2025 ifølge modellen?

## Fasit

a) Modellens verdier er i samme størrelsesorden som de observerte — modellen er god.

b) Antall registrerte tilfeller øker med $\underline{\underline{20 \,\%}}$ per måned.

c) $\underline{\underline{\approx 72}}$ tilfeller per måned (gjennomsnittlig vekstfart fra mai 2023 til september 2024).

d) $\underline{\underline{\approx 5500}}$ tilfeller i mai 2025.

## Løsningsforslag

![GeoGebra-graf med eksponentialfunksjon, datapunkter og sekantlinje](/img/user/_resources/1p-v25-2-1-graf.png)

### a

Vi setter inn $x$-verdiene fra tabellen i modellen $K(x) = 27{,}8 \cdot 1{,}2^{x}$ og sammenligner med de observerte tallene:

| Måned | $x$ | $K(x)$ (modell) | Observert |
| ----- | :-: | :-------------: | :-------: |
| Jan 2023 | 1 | $\approx 33$ | 29 |
| Mai 2023 | 5 | $\approx 69$ | 93 |
| Okt 2023 | 10 | $\approx 172$ | 164 |
| Feb 2024 | 14 | $\approx 357$ | 284 |
| Aug 2024 | 20 | $\approx 1066$ | 1035 |
| Okt 2024 | 22 | $\approx 1535$ | 1657 |

Modellens verdier er i samme størrelsesorden som de observerte verdiene i hele perioden. Noen måneder treffer modellen svært godt (oktober 2023, august 2024), og ingen av avvikene er dramatisk store sett opp mot den sterke veksten. **Modellen $K(x) = 27{,}8 \cdot 1{,}2^{x}$ er en god modell for datamaterialet.**

### b

Funksjonen $K(x) = 27{,}8 \cdot 1{,}2^{x}$ er en eksponentialfunksjon med vekstfaktor $1{,}2$.

Vekstfaktoren $1{,}2$ betyr at antallet multipliseres med $1{,}2$ for hver måned som går. Det tilsvarer en økning på $20 \,\%$ per måned.

**Praktisk tolkning:** Antall registrerte tilfeller av kikhoste i Norge økte med ca. $20 \,\%$ per måned i perioden januar 2023–oktober 2024.

### c

Vi skal finne stigningstallet til den rette linjen gjennom punktene $(4,\ K(4))$ og $(21,\ K(21))$.

Først beregner vi funksjonsverdiene:

$$K(4) = 27{,}8 \cdot 1{,}2^{4} \approx 57{,}65$$

$$K(21) = 27{,}8 \cdot 1{,}2^{21} \approx 1278{,}94$$

Deretter bruker vi formelen for stigningstall:

$$a = \frac{K(21) - K(4)}{21 - 4} = \frac{1278{,}94 - 57{,}65}{17} = \frac{1221{,}29}{17} \approx \mathbf{\underline{\underline{72}}}$$

Vi kan også lese av sekantlinjens stigningstall i GeoGebra: `stign = 71.84 ≈ 72`.

**Praktisk tolkning:** I gjennomsnitt økte antall registrerte tilfeller av kikhoste med ca. 72 tilfeller per måned i perioden fra mai 2023 ($x = 4$) til september 2024 ($x = 21$).

### d

Mai 2025 tilsvarer $x = 29$ (29 måneder etter desember 2022).

$$K(29) = 27{,}8 \cdot 1{,}2^{29} \approx \mathbf{\underline{\underline{5499}}} \approx 5500$$

**Ifølge modellen vil ca. 5500 tilfeller av kikhoste bli registrert i Norge i mai 2025.**
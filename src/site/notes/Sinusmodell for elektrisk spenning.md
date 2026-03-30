---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["regresjon","trigonometri","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"title":"Sinusmodell for elektrisk spenning","status":3,"source":null,"todo":null,"permalink":"/sinusmodell-for-elektrisk-spenning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["regresjon","trigonometri","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"title":"Sinusmodell for elektrisk spenning","status":3,"source":null,"todo":null}}
---


# Sinusmodell for elektrisk spenning

Tabellen nedenfor viser elektrisk spenning målt i en stikkontakt i Norge.

| Sekunder  ($t$)     | 0,0020 | 0,0050 | 0,0070 |  0,0100   | 0,0130 | 0,0150 | 0,0180 |  0,0200  |
| ------------------- | :----: | :----: | :----: | :-------: | :----: | :----: | :----: | :------: |
| Målt spenning ($U$) |  189   |  323   |  259   | $-2{,}12$ | $-261$ | $-327$ | $-189$ | $3{,}52$ |
|                     |        |        |        |           |        |        |        |          |

>[!oppgave]
>a) Bestem en modell $U$ for spenningen $U(t)$ volt (V) i stikkontakten $t$ sekunder etter at målingene startet.
>
>b) På hvilke tidspunkter i løpet av de første $0{,}0200$ sekundene er spenningen 230 V ifølge modellen?

Nettspenningen i Norge (den elektriske spenningen i vanlige stikkontakter) er 230 V.

Truls lurer på om målingene som er gjort, kan være riktige. Han finner ut at spenningen i kontakten er en vekselspenning. Det betyr at spenningen varierer periodisk med tiden. Når spenningen oppgis å være 230 V, er dette noe som kalles effektivverdien til spenningen og er gitt ved

$$U_{\text{effektiv}} = \sqrt{\frac{1}{T} \int_{0}^{T} (U(t))^2\, dt}$$

der $T$ er perioden til funksjonen $U$.

>[!oppgave]
>c) Bruk modellen fra oppgave a og formelen ovenfor til å hjelpe Truls med å avgjøre om målingene kan være riktige.

## Fasit

a) $U(t) \approx 323\sin(100\pi t)$
b) $t \approx 0{,}0025 \, \mathrm{s}$ og $t \approx 0{,}0075 \, \mathrm{s}$
c) $U_{\text{effektiv}} = \dfrac{323}{\sqrt{2}} \approx 229 \, \mathrm{V} \approx 230 \, \mathrm{V}$ — målingene er riktige

## Løsningsforslag

### 2-2a

Vi legger inn datapunktene i GeoGebra og bruker `RegSin` til å finne en sinusmodell:

![Regresjonsmodell og datapunkter for oppgave 2-2a](/img/user/_resources/r2-h25-2-2-a-graf.png)

`RegSin` gir

$$U(t) \approx 323{,}47 \cdot \sin(314{,}81 \cdot t - 0{,}003) - 0{,}91$$

Siden fasevinkelen ($-0{,}003$) og konstantleddet ($-0{,}91$) er svært nær null, og $314{,}81 \approx 100\pi$, forenkler vi til

$$U(t) \approx 323 \cdot \sin(100\pi t)$$

**Modellen $\underline{\underline{U(t) \approx 323\sin(100\pi t)}}$ beskriver spenningen godt.**

### 2-2b

Vi løser $U(t) = 230$:

$$323\sin(100\pi t) = 230 \implies \sin(100\pi t) = \frac{230}{323} \approx 0{,}7121$$

$$100\pi t = \arcsin(0{,}7121) \approx 0{,}789 \, \mathrm{rad} \quad \text{eller} \quad 100\pi t = \pi - 0{,}789 \approx 2{,}353 \, \mathrm{rad}$$

$$t_1 = \frac{0{,}789}{100\pi} \approx 0{,}0025 \, \mathrm{s}, \qquad t_2 = \frac{2{,}353}{100\pi} \approx 0{,}0075 \, \mathrm{s}$$

**Spenningen er $230 \, \mathrm{V}$ ved $\underline{\underline{t \approx 0{,}0025 \, \mathrm{s}}}$ og $\underline{\underline{t \approx 0{,}0075 \, \mathrm{s}}}$.**

### 2-2c

Vi bruker modellen $U(t) = 323\sin(100\pi t)$ med periode $T = 0{,}0200 \, \mathrm{s}$:

$$
\begin{aligned}
U_{\text{effektiv}} &= \sqrt{\frac{1}{T} \int_{0}^{T} [U(t)]^2 \, \mathrm{d}t} \\
&= \sqrt{\frac{1}{T} \int_{0}^{T} 323^2 \sin^2(100\pi t) \, \mathrm{d}t}
\end{aligned}
$$

Siden $\displaystyle\int_0^T \sin^2(\omega t)\, \mathrm{d}t = \dfrac{T}{2}$ for en hel periode:

$$U_{\text{effektiv}} = \sqrt{\frac{323^2}{T} \cdot \frac{T}{2}} = \frac{323}{\sqrt{2}} \approx 228{,}5 \approx 229 \, \mathrm{V}$$

**Effektivverdien er $\approx 229 \, \mathrm{V} \approx 230 \, \mathrm{V}$, som stemmer godt med at nettspenningen i Norge er 230 V. Målingene kan være riktige.**

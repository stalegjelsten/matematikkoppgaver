---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker","geometrisk vekst","økonomi"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Lønnsøkning og videreutdanning","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/lonnsokning-og-videreutdanning/","permalink":"/lonnsokning-og-videreutdanning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["rekker","geometrisk vekst","økonomi"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Lønnsøkning og videreutdanning","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Lønnsøkning og videreutdanning

Svein jobber som lærer. I 2019 har han en årslønn på 478 400 kroner. Han regner med å få en årlig lønnsøkning på 4,0 % per år i årene framover.

>[!oppgave]
>a) Vis at Sveins samlede inntekt i årene 2020–2029 da vil bli i overkant av 5,97 millioner kroner.

Svein vurderer å videreutdanne seg i årene 2020 og 2021. Han vil da ikke ha noen inntekt disse to årene. Han regner så med å få en årslønn på 574 000 kroner i 2022 og en årlig lønnsøkning på 4,0 % hvert år etterpå.

>[!oppgave]
>b) Bestem den samlede inntekten i årene 2020–2029 dersom han tar videreutdanningen.

Selv om han vil få høyere årslønn dersom han tar videreutdanning, vil det ta noen år før den samlede inntekten i årene etter 2019 blir større enn om han ikke tar videreutdanning.

>[!oppgave]
>c) Bruk CAS til å bestemme hvor lenge han må jobbe etter at han er ferdig med videreutdanningen, for at den samlede inntekten fra og med 2020 skal bli minst like stor som om han ikke tar videreutdanning.

## Fasit

a) Se løsningsforslag
b) $\approx 5\,289\,000 \text{ kr}$
c) Etter 20 år (i 2041)

## Løsningsforslag

### a

Svein har årslønn $478\,400 \cdot 1{,}04^n$ kroner i år $2019 + n$.

Samlet inntekt 2020–2029 er en geometrisk rekke med $a_1 = 478\,400 \cdot 1{,}04$ og $k = 1{,}04$, 10 ledd:

$$s_{10} = 478\,400 \cdot 1{,}04 \cdot \frac{1{,}04^{10} - 1}{1{,}04 - 1} \approx 5\,973\,471 \text{ kr}$$

som er i overkant av 5{,}97 millioner kroner. ✓

### b

Med videreutdanning har Svein ingen inntekt i 2020–2021. Fra 2022 tjener han $574\,000 \cdot 1{,}04^{n}$ der $n = 0, 1, \ldots, 7$ for årene 2022–2029.

Geometrisk rekke med $a_1 = 574\,000$, $k = 1{,}04$, 8 ledd:

$$s_8 = 574\,000 \cdot \frac{1{,}04^8 - 1}{1{,}04 - 1} \approx \underline{\underline{5\,289\,000 \text{ kr}}}$$

### c

Vi definerer samlede inntekter som funksjoner i CAS:

![CAS: Lønnsøkning](/img/user/_resources/s2-h19-2-4.png)

Uten videreutdanning (linje 1–2): $S_{\text{uten}}(n) = 478\,400 \cdot 1{,}04 \cdot \frac{1{,}04^n - 1}{0{,}04}$

Med videreutdanning (linje 3–4): $S_{\text{med}}(n) = 574\,000 \cdot \frac{1{,}04^{n-2} - 1}{0{,}04}$

Vi bruker CAS til å finne det minste heltallet $n$ slik at $S_{\text{med}}(n) \geq S_{\text{uten}}(n)$, og finner at dette inntreffer for $n = 22$, altså i år 2041.

Svein må jobbe i **20 år** etter videreutdanningen for at det skal lønne seg.

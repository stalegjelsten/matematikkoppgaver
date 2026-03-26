---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["regresjon","trigonometri","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"title":"Sinusmodell for elektrisk spenning","status":2,"source":null,"todo":null,"permalink":"/sinusmodell-for-elektrisk-spenning/","dgPassFrontmatter":true}
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

>[!question]- Fasit
>
> a) $U(t) \approx 323\sin(100\pi t)$
> b) $t \approx 0{,}0025 \, \mathrm{s}$ og $t \approx 0{,}0075 \, \mathrm{s}$
> c) $U_{\text{effektiv}} = \dfrac{323}{\sqrt{2}} \approx 229 \, \mathrm{V} \approx 230 \, \mathrm{V}$ — målingene er riktige
> [[Løsningsforslag/Løsningsforslag R2 eksamen H2025#2-2\|Løsningsforslag R2 eksamen H2025#2-2]]

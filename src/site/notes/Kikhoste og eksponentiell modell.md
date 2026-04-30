---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/kikhoste-og-eksponentiell-modell/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1}],"poeng":5,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentiell vekst","modellering","gjennomsnittlig vekstfart"],"title":"Kikhoste og eksponentiell modell","todo":[],"lf-source-claude":true,"permalink":"/kikhoste-og-eksponentiell-modell/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1}],"poeng":5,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentiell vekst","modellering","gjennomsnittlig vekstfart"],"title":"Kikhoste og eksponentiell modell","todo":[],"lf-source-claude":true}}
---


# Kikhoste og eksponentiell modell

Tabellen nedenfor viser antallet registrerte tilfeller av kikhoste i Norge noen måneder i perioden januar 2023–oktober 2024.

| Måned | Januar 2023 | Mai 2023 | Oktober 2023 | Februar 2024 | August 2024 | Oktober 2024 |
|---|---|---|---|---|---|---|
| Antall registrerte tilfeller | 29 | 93 | 164 | 284 | 1035 | 1657 |

La $x$ være antall måneder etter desember 2022, det vil si at $x = 1$ tilsvarer januar 2023, $x = 3$ tilsvarer mars 2023, og så videre.

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $K$ gitt ved
>
>$$K(x) = 27{,}8 \cdot 1{,}2^x$$
>
>er en god modell for antall registrerte tilfeller av kikhoste i Norge i perioden januar 2023–oktober 2024.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4, K(4))$ og $(21, K(21))$. Gi en praktisk tolkning av svaret du får.
>c) Hvor mange tilfeller av kikhoste vil bli registrert i Norge i mai 2025 ifølge modellen?

## Fasit

a) Modellverdiene ligger nær de observerte verdiene – $K$ er en god modell.

b) $\underline{\underline{\text{Stigning} \approx 71{,}84 \text{ tilfeller per måned}}}$

c) $\underline{\underline{K(29) \approx 5499 \text{ tilfeller}}}$

## Løsningsforslag

Vi definerer $K(x) = 27{,}8 \cdot 1{,}2^x$ i GeoGebra CAS og beregner alle deloppgavene i én sesjon.

![CAS-beregninger for alle deloppgaver](/img/user/_resources/1t-v25-2-1.png)

### a

Vi beregner $K(x)$ for de seks månedene i tabellen og sammenligner med de observerte verdiene:

| Måned | $x$ | Observert | $K(x)$ |
|---|---|---|---|
| Januar 2023 | 1 | 29 | $\approx 33$ |
| Mai 2023 | 5 | 93 | $\approx 69$ |
| Oktober 2023 | 10 | 164 | $\approx 172$ |
| Februar 2024 | 14 | 284 | $\approx 357$ |
| August 2024 | 20 | 1035 | $\approx 1066$ |
| Oktober 2024 | 22 | 1657 | $\approx 1535$ |

Modellverdiene er av samme størrelsesorden som de observerte verdiene i alle månedene. Avvikene er relativt små sammenlignet med de faktiske tallene. **$K$ er derfor en god modell for antall registrerte tilfeller av kikhoste i perioden.**

### b

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi får stigningstall $\approx 71{,}84$ ved å bruke den oppgitte modellen $K(x) = 27{,}8 \cdot 1{,}2^x$, mens matematikk.net gjør en lineær regresjon på tabelldataene og får $70{,}2$. Oppgaven ber eksplisitt om punktene $(4, K(4))$ og $(21, K(21))$, så vi mener vårt svar er det riktige. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/1T_2025_v%C3%A5r_LK20_L%C3%98SNING) og vurder selv.

Vi beregner stigningstallet til linjen gjennom $(4, K(4))$ og $(21, K(21))$:

$$\frac{K(21) - K(4)}{21 - 4} = \frac{1278{,}94 - 57{,}65}{17} \approx \underline{\underline{71{,}84}}$$

**Praktisk tolkning:** I gjennomsnitt økte antallet registrerte kikhoste-tilfeller med ca. $\textbf{72}$ tilfeller per måned i perioden fra mai 2023 ($x = 4$) til september 2024 ($x = 21$).

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi får $K(29) \approx 5499$ ved å bruke den oppgitte modellen, mens matematikk.net får $5336$ basert på sin lineære regresjonsmodell. Vi mener vårt svar er det riktige siden oppgaven ber om å bruke $K(x) = 27{,}8 \cdot 1{,}2^x$. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/1T_2025_v%C3%A5r_LK20_L%C3%98SNING) og vurder selv.

Mai 2025 er 29 måneder etter desember 2022, altså $x = 29$.

$$K(29) = 27{,}8 \cdot 1{,}2^{29} \approx \underline{\underline{5499 \text{ tilfeller}}}$$

Ifølge modellen vil det bli registrert ca. **5499 tilfeller** av kikhoste i Norge i mai 2025.
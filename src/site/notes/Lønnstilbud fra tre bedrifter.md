---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["likningssystem","økonomi","lineær vekst"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6}],"poeng":3,"title":"Lønnstilbud fra tre bedrifter","status":1,"source":null,"todo":null,"permalink":"/lonnstilbud-fra-tre-bedrifter/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"temaer":["likningssystem","økonomi","lineær vekst"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6}],"poeng":3,"title":"Lønnstilbud fra tre bedrifter","status":1,"source":null,"todo":null,"permalink":"/lonnstilbud-fra-tre-bedrifter/"}}
---


# Lønnstilbud fra tre bedrifter

Du har fått tilbud om jobb hos tre ulike bedrifter. Bedriftene har ulike måter å regne ut lønn på.

| Bedrift | Fast månedslønn | Tillegg ved reiseoppdrag |
|---------|-----------------|--------------------------|
| A       | 32 000 kroner   | 20 000 kroner            |
| B       | 63 000 kroner   | 16 000 kroner            |
| C       | 75 000 kroner   | 8 000 kroner             |

>[!oppgave]
>a) Bestem årslønnen din hos hver av bedriftene dersom du får tre reiseoppdrag i løpet av året.

Du forventer å ha like mange reiseoppdrag hos hver av de tre bedriftene.

>[!oppgave]
>b) Hvor mange reiseoppdrag må du ha i løpet av ett år for at du skal få best lønn i bedrift A, for at du skal få best lønn i bedrift B, og for at du skal få best lønn i bedrift C?

## Fasit

a) A: 444 000 kr, B: 804 000 kr, C: 924 000 kr
b) Bedrift C best ved færre enn 18 oppdrag, bedrift B best ved 18–93 oppdrag, bedrift A best ved flere enn 93 oppdrag

## Løsningsforslag

### a

Med 3 reiseoppdrag:

| Bedrift | Fast årslønn | Reiseoppdrag | Årslønn |
|---------|-------------|--------------|---------|
| A | $32\,000 \cdot 12 = 384\,000$ kr | $3 \cdot 20\,000 = 60\,000$ kr | $\underline{\underline{444\,000 \, \mathrm{kr}}}$ |
| B | $63\,000 \cdot 12 = 756\,000$ kr | $3 \cdot 16\,000 = 48\,000$ kr | $\underline{\underline{804\,000 \, \mathrm{kr}}}$ |
| C | $75\,000 \cdot 12 = 900\,000$ kr | $3 \cdot 8\,000 = 24\,000$ kr | $\underline{\underline{924\,000 \, \mathrm{kr}}}$ |

### b

Vi setter opp funksjoner for årslønn med $n$ reiseoppdrag:

$$A(n) = 384\,000 + 20\,000n$$
$$B(n) = 756\,000 + 16\,000n$$
$$C(n) = 900\,000 + 8\,000n$$

Vi plotter funksjonene i GeoGebra og leser av skjæringspunktene:

![1p-h24-2-6.png](/img/user/_resources/1p-h24-2-6.png)

Fra grafen (se `BC`, `AC` og `AB`):

**B og C er like gode** ved $n = 18$ oppdrag (se punkt `BC = (18, 1\,044\,000)`):

$$756\,000 + 16\,000 \cdot 18 = 900\,000 + 8\,000 \cdot 18 = 1\,044\,000 \text{ kr}$$

**A og B er like gode** ved $n = 93$ oppdrag (se punkt `AB = (93, 2\,244\,000)`):

$$384\,000 + 20\,000 \cdot 93 = 756\,000 + 16\,000 \cdot 93 = 2\,244\,000 \text{ kr}$$

**Konklusjon:**

- **Bedrift C** gir best lønn ved **færre enn 18 reiseoppdrag** per år
- **Bedrift B** gir best lønn ved **18 til 93 reiseoppdrag** per år
- **Bedrift A** gir best lønn ved **flere enn 93 reiseoppdrag** per år

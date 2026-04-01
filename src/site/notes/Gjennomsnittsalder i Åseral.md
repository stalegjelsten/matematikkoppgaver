---
{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-12-19","aliases":[],"dg-publish":true,"temaer":["grupperte data","sentralmål"],"fag":["2p-y","2p"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":5}],"title":"Gjennomsnittsalder i Åseral","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"permalink":"/gjennomsnittsalder-i-aseral/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-12-19","aliases":[],"temaer":["grupperte data","sentralmål"],"fag":["2p-y","2p"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":5}],"title":"Gjennomsnittsalder i Åseral","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"permalink":"/gjennomsnittsalder-i-aseral/"}}
---


# Gjennomsnittsalder i Åseral


Tabellen nedenfor viser aldersfordelingen i Åseral kommune i 2024.

|    Alder (år)     | Antall personer |
| :---------------: | :-------------: |
| $[0, 18 \rangle$  |       188       |
| $[18, 50\rangle$  |       347       |
| $[50, 67\rangle$  |       237       |
| $[67, 80\rangle$  |       103       |
| $[80, 90\rangle$  |       33        |
| $[90, 100\rangle$ |       15        |

>[!oppgave]
>a) Hvilke antagelser må du gjøre for å kunne bruke tabellen til å bestemme ulike sentralmål for innbyggerne i Åseral kommune i 2024?
>b) Bestem gjennomsnittsalderen for innbyggerne i Åseral kommune i 2024.
>c) Hvor mange prosent av befolkningen i Åseral kommune var eldre enn gjennomsnittsalderen i kommunen i 2024?

## Fasit

a) Vi må anta at alle i hver aldersgruppe har alderen som er midt i intervallet.
b) 42,5 år
c) 42,2 %

## Løsningsforslag

### 2-5a

Vi må anta **jevn fordeling av aldre innenfor hvert intervall**. Dermed blir midtpunktet en god tilnærmingsverdi for av gjennomsnittsalderen i gruppen.

### 2-5b


Vi bruker midtpunktet i hvert intervall:

|  Aldersintervall  | Midtpunkt | Antall personer |               Bidrag til sum |
| :---------------: | :-------: | :-------------: | ---------------------------: |
|  $[0, 18\rangle$  |     9     |       188       |         $9 \cdot 188 = 1692$ |
| $[18, 50\rangle$  |    34     |       347       |     $34 \cdot 347 = 11\,798$ |
| $[50, 67\rangle$  |   58,5    |       237       | $58{,}5 \cdot 237 = 13\,865$ |
| $[67, 80\rangle$  |   73,5    |       103       |    $73{,}5 \cdot 103 = 7571$ |
| $[80, 90\rangle$  |    85     |       33        |         $85 \cdot 33 = 2805$ |
| $[90, 100\rangle$ |    95     |       15        |         $95 \cdot 15 = 1425$ |

$$
\begin{aligned}
\text{Sum alder} &= 1692 + 11\,798 + 13\,865 + 7571 + 2805 + 1425 = 39\,156 \\
\text{Antall personer} &= 188 + 347 + 237 + 103 + 33 + 15 = 923 \\
\text{Gjennomsnittsalder} &= \frac{39\,156}{923} = 42{,}4 \text{ år}
\end{aligned}
$$

**Gjennomsnittsalderen i Åseral kommune var $\underline{\underline{42{,}4}}$ år i 2024.**

### 2-5c
Gjennomsnittsalderen er 42,4 år. Vi må finne hvor mange som var eldre enn dette.

Intervallene som er helt over 42,4 år:

- $[50, 67\rangle$: 237 personer
- $[67, 80\rangle$: 103 personer
- $[80, 90\rangle$: 33 personer
- $[90, 100\rangle$: 15 personer

**Sum:** $237 + 103 + 33 + 15 = 388$ personer

Men vi må også inkludere noen fra intervallet $[18, 50\rangle$ siden gjennomsnittsalderen (42,4 år) ligger i dette intervallet.

Hvis vi antar jevn fordeling i intervallet $[18, 50\rangle$:

- Intervallet går fra 18 til 50 år (32 år bredt)
- Vi vil ha de fra 42,4 til 50 år (7,6 år)
- Andelen: $\frac{7{,}6}{32} \approx 0{,}238$
- Antall personer: $347 \cdot 0{,}238 \approx 83$ personer

Totalt antall over gjennomsnittet: $388 + 83 = 471$

Prosentandel:
$$\frac{471}{923} \cdot 100\,\% \approx 51{,}0\,\%$$

**Omtrent $\underline{\underline{51\,\%}}$ av befolkningen i Åseral kommune var eldre enn gjennomsnittsalderen i 2024.**

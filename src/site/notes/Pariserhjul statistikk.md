---
{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-11-14","aliases":[],"dg-publish":true,"temaer":["statistikk","gjennomsnitt","median","kumulativ frekvens"],"fag":["2p-y","2p"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4},{"fag":"2p","del":1,"oppgave":4}],"title":"Pariserhjul statistikk 2P-Y H25","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"dg-permalink":"/pariserhjul-statistikk/","permalink":"/pariserhjul-statistikk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-11-14","aliases":[],"temaer":["statistikk","gjennomsnitt","median","kumulativ frekvens"],"fag":["2p-y","2p"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4},{"fag":"2p","del":1,"oppgave":4}],"title":"Pariserhjul statistikk 2P-Y H25","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3}}
---


# Pariserhjul statistikk 2P-Y H25

I et pariserhjul er det 20 vogner. Det er plass til 4 personer i hver vogn. Nedenfor ser du hvor mange personer det var i vognene på et tidspunkt.

| Antall personer i vognen | Antall vogner |
| :----------------------: | :-----------: |
|            0             |               |
|            1             |       2       |
|            2             |       3       |
|            3             |       4       |
|            4             |       6       |

Stine påstår at fem vogner var tomme.

>[!oppgave]
>a) Vis at påstanden er riktig.

>[!oppgave]
>b) Bestem gjennomsnittet og medianen for antallet personer i hver vogn.

>[!oppgave]
>c) Bestem den kumulative frekvensen for to personer i hver vogn, og gi en praktisk tolkning av svaret.

## Fasit

b) Gjennomsnitt: 2,2 personer. Median: 2,5 personer
c) Kumulativ frekvens: 10. Det var 10 vogner med 2 eller færre personer i.

## Løsningsforslag

### 1-4a

Vi vet at det er 20 vogner totalt. Fra tabellen kan vi finne hvor mange vogner som hadde personer i seg:

$$
\begin{aligned}
\text{Vogner med personer} &= 2 + 3 + 4 + 6 \\
&= 15 \text{ vogner}
\end{aligned}
$$

Antall tomme vogner blir da:
$$\text{Tomme vogner} = 20 - 15 = 5$$

**Dette viser at Stines påstand er riktig - det var $\underline{\underline{5}}$ tomme vogner.**

### 4b

Vi skal finne gjennomsnittet og medianen for antallet personer i hver vogn.

**Gjennomsnitt:**

For å finne gjennomsnittet må vi summere alle personene og dele på antall vogner:
$$
\begin{aligned}
\text{Totalt antall personer} &= 0 \cdot 5 + 1 \cdot 2 + 2 \cdot 3 + 3 \cdot 4 + 4 \cdot 6 \\
&= 0 + 2 + 6 + 12 + 24 \\
&= 44 \text{ personer}
\end{aligned}
$$

$$\text{Gjennomsnitt} = \frac{44}{20} = 2{,}2$$

**Median:**

For å finne medianen må vi sortere alle vognene etter antall personer. Vi har:

- 5 vogner med 0 personer
- 2 vogner med 1 person
- 3 vogner med 2 personer
- 4 vogner med 3 personer
- 6 vogner med 4 personer

Sortert liste: $0, 0, 0, 0, 0, 1, 1, 2, 2, \textcolor{steelblue}{2}, \textcolor{seagreen}{3}, 3, 3, 3, 4, 4, 4, 4, 4, 4$

Siden vi har 20 vogner (et partall), blir medianen gjennomsnittet av vogn nummer 10 og 11:
$$\text{Median} = \frac{\textcolor{steelblue}{2} + \textcolor{seagreen}{3}}{2} = 2{,}5$$

**Gjennomsnittet er $\underline{\underline{2{,}2}}$ personer per vogn, og medianen er $\underline{\underline{2{,}5}}$ personer per vogn.**

### 4c

Kumulativ frekvens forteller oss hvor mange vogner som har to personer eller færre.

**Framgangsmåte:**

Vi summerer antall vogner med 0, 1 og 2 personer:
$$\text{Kumulativ frekvens} = 5 + 2 + 3 = 10$$

**Praktisk tolkning:** Den kumulative frekvensen for to personer er $\underline{\underline{10}}$. Dette betyr at 10 vogner hadde 2 personer eller færre i seg. Med andre ord: halvparten av vognene var enten tomme eller hadde maksimalt 2 personer.

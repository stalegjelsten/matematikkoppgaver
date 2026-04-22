---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":null,"dg-publish":true,"temaer":["sentralmål","gjennomsnitt","grupperte data","argumentasjon"],"kategori":3,"vanskegrad":2,"beskrivelse":"Finne gjennomsnitt og median fra klassedelt aldersfordeling, og forklare antakelsen (jevn fordeling innen klasser) som gir Trines verdier.","fag":["2p-y","2p"],"eksamen":"v25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":7},{"fag":"2p","del":1,"oppgave":6}],"title":"Median og gjennomsnitt fra klassedelt alder","source":null,"todo":null,"status":3,"dg-permalink":"/median-og-gjennomsnitt-fra-klassedelt-alder/","permalink":"/median-og-gjennomsnitt-fra-klassedelt-alder/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":null,"temaer":["sentralmål","gjennomsnitt","grupperte data","argumentasjon"],"kategori":3,"vanskegrad":2,"beskrivelse":"Finne gjennomsnitt og median fra klassedelt aldersfordeling, og forklare antakelsen (jevn fordeling innen klasser) som gir Trines verdier.","fag":["2p-y","2p"],"eksamen":"v25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":7},{"fag":"2p","del":1,"oppgave":6}],"title":"Median og gjennomsnitt fra klassedelt alder","source":null,"todo":null,"status":3}}
---


# Median og gjennomsnitt fra klassedelt alder


I tabellen nedenfor finner du informasjon om alderen til $100$ personer som er medlemmer på et treningssenter:

|   Alder (år)    | Antall medlemmer |
| :-------------: | :--------------: |
| $[16,20\rangle$ |       $20$       |
| $[20,40\rangle$ |       $40$       |
| $[40,60\rangle$ |       $30$       |
| $[60,90\rangle$ |       $10$       |

Trine påstår at gjennomsnittsalderen er ca. $38$ år, og at medianalderen er ca. $35$ år.

Gjør beregninger og vis at påstandene kan være riktige. Trine må ha gjort en antakelse for å kunne regne seg fram til disse verdiene. Gjør rede for en mulig antakelse. 

## Fasit

Gjennomsnitt ≈$38{,}1$ år, median ≈$35$ år (ved jevn fordeling i hver klasse).

## Løsningsforslag

Trine må ha antatt at det er omtrent like mange personer i hver alder i hver klasse, altså at det for eksempel er 5 16-åringer, 5 17-åringer, 5 18-årnger og 5 19-åringer i den første klassen.

Hvis den antakelsen stemmer så kan vi finne gjennomsnittsalder ved å ta klassemidtpunktet for hver klasse og multiplisere med antallet medlemmer i klassen.

|      Alder       | Midtpunkt | Frekvens | Midtpunkt $\cdot$ frekvens |
| :--------------: | :-------: | :------: | :------------------------: |
| $[16, 20\rangle$ |    18     |    20    |            360             |
| $[20,40\rangle$  |    30     |    40    |            1200            |
| $[40,60\rangle$  |    50     |    30    |            1500            |
| $[60,90\rangle$  |    75     |    10    |            750             |
|     **Sum**      |           |   100    |            3810            |

**Gjennomsnittsalderen er omtrent $\frac{3810}{100}=\underline{\underline{38{,}1}}$ år.**

Medianen er «den midterste personen» blant de 100 hvis vi sorterer dem etter alder. Altså vil medianen være gjennomsnittet av alderen til person nr. 50 og 51. 

Vi tenker oss de 100 personene sortert etter alder i en lang rekke. De 20 yngste personene er under 20 år. I den neste klassen er det 40 personer, og medianpersonen vil være gjennomsnittet av person nr. 30 og 31 inni denne klassen. 

Hvis vi fordeler personene i klassen $[20, 40\rangle$ i 5-årsgrupper så finner vi ut at person nummer 21–30 er mellom 20–24 år, person 31–40 er 25–30 år, person 41–50 er 30–35 år og 51–60 er 35–40 år. Personene 50 og 51 er altså begge rett rundt 35 år, og dermed er medianalderen 35 år.

**Gjennomsnittet er ca. 38 år og medianalderen er ca. 35 år hvis personene er jevnt fordelt innenfor hver klasse.**

>[!tip] Diagram som viser aldersfordelingen
>
> I dette diagrammet har jeg forsøkt å vise aldersfordelingen. Hvert kryss er en person. Personene er jevnt fordelt innenfor hver klasse, slik som Trine må ha antatt.
> 
> ![](/img/user/_resources/2py-v25-1-7.png)

---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["statistikk","kumulativ frekvens","sentralmål","spredningsmål"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":3},{"fag":"2p","del":2,"oppgave":2}],"title":"Skiturstatistikk Solveig og Miriam","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/skiturstatistikk-solveig-og-miriam/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["statistikk","kumulativ frekvens","sentralmål","spredningsmål"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":3},{"fag":"2p","del":2,"oppgave":2}],"title":"Skiturstatistikk Solveig og Miriam","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Skiturstatistikk Solveig og Miriam

Nedenfor ser du hvor mange timer Solveig brukte på hver av de 20 skiturene hun gikk vinteren 2024.

Table: Solveigs skiturer {.noborders}

|  8  |  4  |  7  |  5  | 10  |  3  | 12  |  6  |  8  |  9  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  6  |  5  |  8  |  9  | 11  |  5  |  3  |  7  |  9  |  8  |

Solveigs venninne, Miriam, gikk også 20 skiturer vinteren 2024. I gjennomsnitt brukte Miriam 4,7 timer per tur. Medianen var 4, og standardavviket hennes for antall timer per tur var 4,2.

>[!oppgave]
>a) Hva kan du ut fra dette si om skiturene til Miriam sammenliknet med skiturene til Solveig?

Solveig og Miriam gikk noen av skiturene sammen. Tabellen nedenfor viser den kumulative frekvensen for antallet timer disse skiturene varte.

| Lengde turer sammen (timer) | Kumulativ frekvens |
| :-------------------------: | :----------------: |
|              0              |         10         |
|              3              |         11         |
|              5              |         14         |
|              8              |         17         |
|              9              |         19         |
|             12              |         20         |

>[!oppgave]
>b) Argumenter for at hver av de to påstandene nedenfor er riktig.
>
>    1) Miriam og Solveig gikk 3 skiturer på 5 timer sammen.
>    2) Miriam var ikke med alle gangene Solveig gikk en skitur på 8 timer.

## Fasit

b) 3 turer på 5 timer; Solveig gikk 1 tur på 8 timer alene

## Løsningsforslag

### 2-3a
Jeg beregnet gjennomsnittet og standardavviket til turene til Solveig ved å bruke formlene `=gjennomsnitt()` og `=stdav.p()` i Excel. Jeg oppsummerer opplysningene om gjennomsnitt og standardavvik til venninnene i tabellen

|         | Gjennomsnitt | Standardavvik |  Median   |
| ------- | :----------: | :-----------: | :-------: |
| Solveig |  7,15 timer  |  2,45 timer   | 7,5 timer |
| Miriam  |  4,7 timer   |   4,2 timer   |  4 timer  |

Solveig har omtrent 2,5 timer høyere gjennomsnitt enn Miriam. Solveig går derfor oftere turer som er veldig lange (hun har et gjennomsnitt på over 7 timer). Gjennomsnittet og medianen til Solveig er ganske like, det tyder på at det er få ekstreme verdier i datamaterialet.

Solveig har et mye lavere standardavvik enn Miriam, nesten 2 timer eller kun$\frac{4{,}2-2{,}45}{4{,}2}=41{,}7 \,\%$ av Miriams standardavvik. Det er derfor mye større variasjon lengdene på turene til Miriam. Sannsynligvis har hun gått noen veldig lange turer siden standardavviket er nesten like høyt som gjennomsnittet.

### 2-3b
Den kumulative frekvensen for turer på 5 timer er 14, og den kumulative frekvensen for turer på 3 timer er 11. De har ikke gått noen turer sammen på 4 timer.

Siden kumulativ frekvens er summen av alle frekvenser for observasjoner som er mindre eller lik den aktuelle observasjonen, kan vi finne frekvensen for antall turer på 5 timer slik:
$$
14-11=3
$$

Ifølge datamaterialet i starten av oppgaven har Solveig gått 4 turer på 8 timer. Ifølge de kumulative frekvensene i tabellen har de to venninnene vært på $17-14=3$ turer sammen på 8 timer. Solveig har altså gått en skitur på 8 timer alene, og 3 sammen med Miriam.

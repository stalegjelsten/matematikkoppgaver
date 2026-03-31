---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["statistikk","sentralmål"],"fag":["2p-y","2p"],"eksamen":"h23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4},{"fag":"2p","del":1,"oppgave":3}],"title":"Joggeavstander med gitte sentralmål","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/joggeavstander-med-gitte-sentralmal/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["statistikk","sentralmål"],"fag":["2p-y","2p"],"eksamen":"h23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4},{"fag":"2p","del":1,"oppgave":3}],"title":"Joggeavstander med gitte sentralmål","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/joggeavstander-med-gitte-sentralmal/"}}
---


# Joggeavstander med gitte sentralmål

Jonas har notert hvor mange kilometer han har jogget hver av de siste ti dagene. Han ser at typetallet er 5 km, medianen er 8 km og gjennomsnittet er 9 km.

>[!oppgave]
>Du skal sette opp to mulige alternativer som viser hvor mange kilometer han kan ha jogget hver av de ti dagene.
>
>- I det første alternativet skal du bruke 8 km minst én dag.
>- I det andre alternativet skal du ikke bruke 8 km noen av dagene, og minst halvparten av tallene du bruker, skal være tall du ikke brukte i det første alternativet.

## Fasit

Mange mulige svar. Eks. alt. 1: 5, 5, 5, 7, 8, 8, 10, 12, 15, 15 | alt. 2: 3, 5, 5, 5, 6, 10, 11, 14, 15, 16

## Løsningsforslag

Vi trenger en tallrekke med 10 tall der:

- typetallet er 5 (5 km forekommer flest ganger)
- medianen er 8 km (gjennomsnittet av det 5. og 6. tallet i sortert rekkefølge er 8)
- gjennomsnittet er 9 km (summen av alle tallene er $10 \cdot 9 = 90$)

**Alternativ 1** (bruker 8 km minst én gang):

$$5, \; 5, \; 5, \; 7, \; \textcolor{seagreen}{8}, \; \textcolor{seagreen}{8}, \; 10, \; 12, \; 15, \; 15$$

- Typetall: 5 forekommer 3 ganger ✓
- Median: $\dfrac{8+8}{2} = 8$ ✓
- Gjennomsnitt: $\dfrac{5+5+5+7+8+8+10+12+15+15}{10} = \dfrac{90}{10} = 9$ ✓

**Alternativ 2** (bruker ikke 8 km, minst halvparten nye tall):

$$3, \; 5, \; 5, \; 5, \; \textcolor{steelblue}{6}, \; \textcolor{steelblue}{10}, \; 11, \; 14, \; 15, \; 16$$

- Typetall: 5 forekommer 3 ganger ✓
- Median: $\dfrac{6+10}{2} = 8$ ✓
- Gjennomsnitt: $\dfrac{3+5+5+5+6+10+11+14+15+16}{10} = \dfrac{90}{10} = 9$ ✓
- Ingen 8 km ✓
- Nye tall (ikke i alt. 1): 3, 6, 11, 14, 16 – det er 5 av 10 tall som ikke ble brukt i alternativ 1 ✓

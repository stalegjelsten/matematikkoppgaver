---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"dg-publish":true,"temaer":["statistikk","gjennomsnitt"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":2},{"fag":"2p","del":2,"oppgave":2}],"poeng":null,"title":"Kaffekoppers gjennomsnitt med ukjent","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3,"kategori":3,"vanskegrad":2,"beskrivelse":"Baklengsproblem med gjennomsnitt — finne grensen for den ukjente verdien slik at snittet overstiger 4 (sum over $48$ med 12 tall).","dg-permalink":"/kaffekoppers-gjennomsnitt-med-ukjent/","lf-source-claude":false,"permalink":"/kaffekoppers-gjennomsnitt-med-ukjent/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"temaer":["statistikk","gjennomsnitt"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":2},{"fag":"2p","del":2,"oppgave":2}],"poeng":null,"title":"Kaffekoppers gjennomsnitt med ukjent","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3,"kategori":3,"vanskegrad":2,"beskrivelse":"Baklengsproblem med gjennomsnitt — finne grensen for den ukjente verdien slik at snittet overstiger 4 (sum over $48$ med 12 tall).","lf-source-claude":false}}
---


# Kaffekoppers gjennomsnitt med ukjent

En morgen spør Tore 12 kolleger om hvor mange kopper kaffe de drakk dagen før. Resultatene ser du nedenfor. Dessverre har Tore sølt kaffe på arket sitt, men han antar at gjennomsnittet er mer enn fire.

![2py-v23-2-2.jpeg](/img/user/_resources/2py-v23-2-2.jpeg)

Gjør beregninger og kommenter antakelsen til Tore.

## Fasit

Tores antakelse stemmer hvis tallet er 3 eller mer.

## Løsningsforslag


Summen av de 11 kjente verdiene er

$$
4+5+0+4+2+6+5+7+5+5+3 = 46
$$

For at gjennomsnittet skal være **nøyaktig 4** med 12 verdier, må totalsummen være $4 \cdot 12 = 48$. Dersom det skjulte tallet var 2 så ville gjennomsnittet blitt nøyaktig 4.

Det betyr også at dersom det skjulte tallet er 3 eller mer, så ville gjennomsnittet vært over 4. For eksempel ville tallet 3 gitt en sum på 49 og gjennomsnitt $\frac{49}{12}=4{,}08$.

**Tores antakelse stemmer dersom det skjulte tallet er 3 eller mer.**
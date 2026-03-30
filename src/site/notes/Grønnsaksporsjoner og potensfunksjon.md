---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"dg-publish":true,"temaer":["modellering","potensfunksjon","stigningstall","derivasjon","tolkning"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":7}],"title":"Grønnsaksporsjoner og potensfunksjon","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3,"permalink":"/gronnsaksporsjoner-og-potensfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"temaer":["modellering","potensfunksjon","stigningstall","derivasjon","tolkning"],"fag":["2p-y"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":7}],"title":"Grønnsaksporsjoner og potensfunksjon","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3}}
---


# Grønnsaksporsjoner og potensfunksjon

Frisk videregående skole har satt i gang prosjektet «Sunne valg».

Hver uke registrerer elevene hvor mange porsjoner grønnsaker, frukt eller bær de har spist.

Nedenfor ser du noen resultater fra perioden januar–mai.

| Uke                      | 1    | 5    | 8    | 10   | 12        | 15        | 18        | 20        |
|--------------------------|------|------|------|------|-----------|-----------|-----------|----------|
| Registrerte porsjoner    | 2060 | 5770 | 7795 | 8992 | 10 105    | 11 656    | 13 099    | 14 000   |

>[!oppgave]
>a) Bestem en modell på formen
>$$P(x) = a \cdot x^b$$
>som kan brukes for å beskrive sammenhengen mellom ukenummer og antall registrerte porsjoner.

>[!oppgave]
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(1, P(1))$ og $(20, P(20))$. Gi en praktisk tolkning av svaret.

>[!oppgave]
>c) Bestem stigningstallet til tangenten til grafen til $P$ i punktet $(6, P(6))$. Gi en praktisk tolkning av svaret.

## Fasit

a) $P(x) = 2060 \cdot x^{0{,}64}$
b) Stigningstall sekant $\approx 629$ porsjoner/uke
c) Stigningstall tangent i uke 6 $\approx 692$ porsjoner/uke

## Løsningsforslag

### 2-7a

Vi bruker potensregresjon på dataene:

| Uke          | 1    | 5    | 8    | 10   | 12     | 15     | 18     | 20     |
| :----------: | :--: | :--: | :--: | :--: | :----: | :----: | :----: | :----: |
| Porsjoner    | 2060 | 5770 | 7795 | 8992 | 10 105 | 11 656 | 13 099 | 14 000 |

Regresjonsanalysen gir modellen

$$
P(x) = 2060 \cdot x^{0{,}64}
$$

Modellen passer svært godt til dataene ($R^2 \approx 1{,}00$):

![Regresjonsmodell og datapunkter for oppgave 2-7a](/img/user/_resources/2p-y-v23-2-7-a-graf.png)

**En modell for sammenhengen er $\underline{\underline{P(x) = 2060 \cdot x^{0{,}64}}}$.**

### 2-7b

Stigningstallet til sekanten gjennom $(1, P(1))$ og $(20, P(20))$:

$$
P(1) = 2060 \cdot 1^{0{,}64} = 2060
$$

$$
P(20) = 2060 \cdot 20^{0{,}64} \approx 14\,009
$$

$$
a = \frac{P(20) - P(1)}{20 - 1} = \frac{14\,009 - 2060}{19} \approx 629
$$

**Stigningstallet er omtrent $\underline{\underline{629 \text{ porsjoner per uke}}}$.**

Det betyr at antall registrerte porsjoner økte i gjennomsnitt med ca. 629 per uke i perioden fra uke 1 til uke 20.

### 2-7c

Stigningstallet til tangenten i $(6, P(6))$ er den deriverte $P'(6)$:

$$
P'(x) = 2060 \cdot 0{,}64 \cdot x^{0{,}64 - 1} = 1318{,}4 \cdot x^{-0{,}36}
$$

$$
P'(6) = 1318{,}4 \cdot 6^{-0{,}36} \approx 692
$$

**Stigningstallet til tangenten i uke 6 er omtrent $\underline{\underline{692 \text{ porsjoner per uke}}}$.**

Det betyr at antallet registrerte porsjoner økte med ca. 692 per uke akkurat i uke 6 (øyeblikkelig endringsrate). Dette er noe høyere enn det gjennomsnittlige stigningstallet for hele perioden.

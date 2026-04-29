---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"dg-publish":true,"temaer":["regresjon","eksponentialfunksjoner","modellering","derivasjon"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":1}],"poeng":null,"title":"Konsentrasjon i kjemisk reaksjon","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Bruke regresjon til å bekrefte eksponentiell modell $f(t)=2{,}5-2{,}5\\cdot 0{,}99^t$, og finne når $f(t)=2{,}0$ og når $f'(t)<0{,}001$.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $f(t)=2{,}0$ for $t$."}],"source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/konsentrasjon-i-kjemisk-reaksjon/","permalink":"/konsentrasjon-i-kjemisk-reaksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"temaer":["regresjon","eksponentialfunksjoner","modellering","derivasjon"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":1}],"poeng":null,"title":"Konsentrasjon i kjemisk reaksjon","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Bruke regresjon til å bekrefte eksponentiell modell $f(t)=2{,}5-2{,}5\\cdot 0{,}99^t$, og finne når $f(t)=2{,}0$ og når $f'(t)<0{,}001$.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $f(t)=2{,}0$ for $t$."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Konsentrasjon i kjemisk reaksjon

Tabellen nedenfor viser konsentrasjonen, i millimol per liter (mmol/L), av et stoff, $t$ sekunder etter at en kjemisk reaksjon startet. Når det har gått lang tid, vil konsentrasjonen av stoffet stabilisere seg på $2{,}5 \mathrm{~mmol/L}$.

| Tid (s)                           | 0    | 10    | 20    | 30    | 40    | 50    | 60    |
|-----------------------------------|------|-------|-------|-------|-------|-------|-------|
| Konsentrasjon (mmol/L)            | 0    | 0,28  | 0,53  | 0,76  | 0,95  | 1,13  | 1,28  |
| Konsentrasjon $-\,2{,}5$ (mmol/L) | −2,5 | −2,22 | −1,97 | −1,74 | −1,55 | −1,37 | −1,22 |

>[!oppgave]
>a) Bruk blant annet regresjon til å vise at funksjonen $f$ gitt ved
>$$f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$$
>er en god modell for konsentrasjonen av stoffet $t$ sekunder etter at reaksjonen startet.
>b) Hvor lang tid vil det ta før konsentrasjonen er $2{,}0 \mathrm{~mmol/L}$?
>c) Hvor lang tid vil det ta før konsentrasjonen øker med mindre enn $0{,}001 \mathrm{~mmol/L}$ per sekund?

## Fasit

a) Regresjon på de forskjøvede verdiene $(t,\, c(t)-2{,}5)$ gir $a \approx -2{,}5$ og $b \approx 0{,}99$, som bekrefter modellen $f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$.
b) $\underline{\underline{t \approx 160 \text{~sekunder}}}$
c) $\underline{\underline{t \approx 321 \text{~sekunder}}}$

## Løsningsforslag

### a

Tabellen i oppgaven inkluderer en rad med de forskjøvede verdiene $c(t) - 2{,}5$. Siden $f(t) \to 2{,}5$ når $t \to \infty$, forventer vi at $f(t) - 2{,}5$ følger en eksponentialfunksjon av typen $g(t) = a \cdot b^t$.

Vi logger de forskjøvede verdiene:

$$\ln|c(t) - 2{,}5| = \ln|a| + t \cdot \ln b$$

Dette er en lineær funksjon av $t$. Vi utfører lineær regresjon (eller eksponentialregresjon) på punktene

$$(t,\ c(t) - 2{,}5) = (0,\ {-2{,}5}),\ (10,\ {-2{,}22}),\ (20,\ {-1{,}97}),\ \ldots,\ (60,\ {-1{,}22})$$

og får $a \approx -2{,}5$ og $b \approx 0{,}99$. Dermed er

$$f(t) = 2{,}5 + g(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$$

Grafen nedenfor viser at modellkurven ligger svært nært datapunktene:

![Datapunkter og modellkurve for konsentrasjonen](/img/user/_resources/r1-h23-2-1-graf.png){width=80%}

### b

Vi løser $f(t) = 2{,}0$ i GeoGebra CAS (se linje 2 i utklippet nedenfor):

$$2{,}5 - 2{,}5 \cdot 0{,}99^t = 2{,}0$$

$$0{,}99^t = \frac{0{,}5}{2{,}5} = 0{,}2$$

$$t = \frac{\ln 0{,}2}{\ln 0{,}99} \approx \underline{\underline{160 \text{~sekunder}}}$$

**Det tar omtrent 160 sekunder før konsentrasjonen er $2{,}0 \mathrm{~mmol/L}$.**

### c

Vi deriverer $f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$ og bruker at $0{,}99^t = e^{t \ln 0{,}99}$:

$$f'(t) = -2{,}5 \cdot \ln(0{,}99) \cdot 0{,}99^t$$

Siden $\ln(0{,}99) < 0$ er $f'(t) > 0$, det vil si konsentrasjonen øker hele tiden (som forventet). Vi ønsker å finne når $f'(t) < 0{,}001$, det vil si vi løser $f'(t) = 0{,}001$ (se linje 5 i CAS-utklippet):

$$-2{,}5 \cdot \ln(0{,}99) \cdot 0{,}99^t = 0{,}001$$

$$0{,}99^t = \frac{0{,}001}{-2{,}5 \cdot \ln(0{,}99)} \approx 0{,}0398$$

$$t = \frac{\ln(0{,}0398)}{\ln(0{,}99)} \approx \underline{\underline{321 \text{~sekunder}}}$$

**Etter omtrent 321 sekunder øker konsentrasjonen med mindre enn $0{,}001 \mathrm{~mmol/L}$ per sekund.**

![GeoGebra CAS: definisjon av f, løsning av b) og c)](/img/user/_resources/r1-h23-2-1.png){width=80%}

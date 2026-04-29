---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/folketall-i-et-omrade/","dg-publish":true,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["modellering","derivasjon","gjennomsnittlig vekstfart"],"title":"Folketall i et område","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Drøfte tredjegradsmodellen $F(x)$ for folketallet — finne maksimum, gjennomsnittlig vekstfart i et tidsintervall og det tidspunktet folketallet avtar raskest (vendepunkt).","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Finne tidspunktet for høyeste folketall på to ulike måter (toppunkt grafisk og $F'(x)=0$)."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Bestemme stigningstallet til sekanten gjennom $(30, F(30))$ og $(70, F(70))$ og tolke det som gjennomsnittlig endring."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finne tidspunktet folketallet avtar raskest ved å løse $F''(x)=0$ (vendepunkt der $F'$ er minimal)."}],"permalink":"/folketall-i-et-omrade/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":1}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["modellering","derivasjon","gjennomsnittlig vekstfart"],"title":"Folketall i et område","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Drøfte tredjegradsmodellen $F(x)$ for folketallet — finne maksimum, gjennomsnittlig vekstfart i et tidsintervall og det tidspunktet folketallet avtar raskest (vendepunkt).","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Finne tidspunktet for høyeste folketall på to ulike måter (toppunkt grafisk og $F'(x)=0$)."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Bestemme stigningstallet til sekanten gjennom $(30, F(30))$ og $(70, F(70))$ og tolke det som gjennomsnittlig endring."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finne tidspunktet folketallet avtar raskest ved å løse $F''(x)=0$ (vendepunkt der $F'$ er minimal)."}]}}
---


# Folketall i et område

En gruppe statistikere har sett på hvordan folketallet i et område har endret seg siden 1960, og laget en modell $F$ gitt ved

$$F(x) = \frac{1}{1000} \cdot \left(0{,}027x^3 - 5{,}8x^2 + 220x + 7900\right), \quad x \in [0, 80]$$

for folketallet $F(x)$ tusen innbyggere i området $x$ år etter 1960.

>[!oppgave]
>a) Vis hvordan du på to ulike måter kan bestemme når folketallet var høyest ifølge modellen.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(30, F(30))$ og $(70, F(70))$. Gi en praktisk tolkning av dette stigningstallet.
>c) Når vil folketallet avta raskest ifølge modellen?

## Fasit

a) Folketallet var høyest etter $\underline{\underline{x \approx 22{,}5 \text{~år (år 1982/1983)}}}$, med $\underline{\underline{F(22{,}5) \approx 10{,}22 \text{~tusen innbyggere}}}$.

b) Stigningstallet er $\underline{\underline{-0{,}1467 \text{~tusen innbyggere per år} \approx -147 \text{~innb/år}}}$.

c) Folketallet avtar raskest etter $\underline{\underline{x \approx 71{,}6 \text{~år (rundt år 2031/2032)}}}$.

## Løsningsforslag

![Graf for Folketall i et område](/img/user/_resources/1t-h23-2-1.png)

![CAS-utregning](/img/user/_resources/1t-h23-2-1-cas.png)

### a

Vi skal finne når $F(x)$ har sitt maksimum for $x \in [0, 80]$.

**Metode 1 – grafisk (toppunkt):**

Vi plotter $F(x)$ i GeoGebra og bruker verktøyet for å finne toppunktet. Grafen viser at toppunktet ligger ved $x \approx 22{,}5$, se `Topp` i grafen.

**Metode 2 – $F'(x) = 0$ og fortegnstest:**

Vi deriverer:

$$F'(x) = \frac{1}{1000}\left(0{,}081x^2 - 11{,}6x + 220\right)$$

Vi løser $F'(x) = 0$ i CAS (linje 4) og får to løsninger. Den ene er $x \approx 22{,}5$ (innenfor domenet $[0, 80]$) og den andre er $x \approx 120{,}7$ (utenfor domenet).

Vi sjekker med andrederiverte (linje 3):

$$F''(x) = \frac{1}{1000}\left(0{,}162x - 11{,}6\right)$$

$$F''(22{,}5) = \frac{1}{1000}(0{,}162 \cdot 22{,}5 - 11{,}6) \approx \frac{1}{1000}(3{,}645 - 11{,}6) < 0$$

Siden $F''(22{,}5) < 0$, er $x \approx 22{,}5$ et toppunkt.

Funksjonsverdi (linje 5):

$$F(22{,}5) = \frac{654163}{64000} \approx 10{,}22 \text{~tusen innbyggere}$$

**Folkretallet var høyest etter omtrent $22{,}5$ år, det vil si rundt 1982/1983, med ca. 10 220 innbyggere.**

### b

Vi beregner stigningstallet til sekanten gjennom $(30, F(30))$ og $(70, F(70))$ (se CAS linje 6–8 og sekantlinjen `sek` i grafen):

$$F(30) = \frac{10009}{1000} = 10{,}009 \quad \text{og} \quad F(70) = \frac{4141}{1000} = 4{,}141$$

$$a = \frac{F(70) - F(30)}{70 - 30} = \frac{4{,}141 - 10{,}009}{40} = \frac{-5{,}868}{40} = -\frac{1467}{10000} \approx -0{,}1467$$

**Stigningstallet er $\approx -0{,}1467$ tusen innbyggere per år.**

Praktisk tolkning: Fra 1990 ($x = 30$) til 2030 ($x = 70$) avtok folketallet i gjennomsnitt med omtrent $\mathbf{147}$ innbyggere per år.

### c

Folketallet avtar raskest der $F'(x)$ er mest negativ. Det skjer i vendepunktet til $F$, altså der $F''(x) = 0$.

$$F''(x) = \frac{1}{1000}(0{,}162x - 11{,}6) = 0$$

Vi løser i CAS (linje 9):

$$x = \frac{5800}{81} \approx 71{,}6$$

Momentan vekstfart i dette punktet (linje 10):

$$F'(71{,}6) = -\frac{1220679}{6250000} \approx -0{,}1953 \text{~tusen innbyggere per år} \approx -195 \text{~innb/år}$$

$x \approx 71{,}6$ svarer til år $1960 + 71{,}6 \approx 2031/2032$, se vendepunktet `Vend` i grafen.

**Ifølge modellen vil folketallet avta raskest rundt år 2031/2032, med en nedgang på ca. 195 innbyggere per år.**
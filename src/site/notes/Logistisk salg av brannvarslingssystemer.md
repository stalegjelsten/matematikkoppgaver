---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"dg-publish":true,"temaer":["logistisk funksjon","modellering","derivasjon"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Logistisk salg av brannvarslingssystemer","source":"Eksamen S2 vår 2025","todo":null,"status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Logistisk salgsmodell: finne $t$ for $B(t)=N/2$, derivert og tolkning; konstruere ny modell fra bæreevne, startverdi og vendepunkt.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Løse $B(t)=850\\,000$ grafisk for $t\\approx 94$ uker."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Beregne $B'(52)\\approx 7828$ og tolke som nye husstander per uke etter 1 år."},{"deloppgave":"c","beskrivelse":"Bygge $F(t)=\\frac{N}{1+ae^{-kt}}$ fra $N=10^6$, $F(0)=4000$, vendepunkt ved $t=65$."}],"dg-permalink":"/logistisk-salg-av-brannvarslingssystemer/","permalink":"/logistisk-salg-av-brannvarslingssystemer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"temaer":["logistisk funksjon","modellering","derivasjon"],"fag":["s2"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Logistisk salg av brannvarslingssystemer","source":"Eksamen S2 vår 2025","todo":null,"status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Logistisk salgsmodell: finne $t$ for $B(t)=N/2$, derivert og tolkning; konstruere ny modell fra bæreevne, startverdi og vendepunkt.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Løse $B(t)=850\\,000$ grafisk for $t\\approx 94$ uker."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Beregne $B'(52)\\approx 7828$ og tolke som nye husstander per uke etter 1 år."},{"deloppgave":"c","beskrivelse":"Bygge $F(t)=\\frac{N}{1+ae^{-kt}}$ fra $N=10^6$, $F(0)=4000$, vendepunkt ved $t=65$."}]}}
---


# Logistisk salg av brannvarslingssystemer


Sikkerhetsselskapet SaifY skal lansere et nytt brannvarslingssystem i en by med 2 millioner husstander. SaifY regner med at antallet husstander som har brannvarslingssystemet $t$ uker etter lanseringen, vil følge modellen $B$ gitt ved

$$
B(t)=\frac{1700000}{1+500 e^{-0,07 t}}
$$

>[!oppgave]
>a) Hvor lang tid vil det ta før halvparten av husstandene i byen har brannvarslingssystemet, ifølge modellen?
>b) Bestem $B^{\prime}(52)$.
>  Gi en praktisk tolkning av svaret.

Det viser seg at konkurrenten UnSaif planlegger å lansere et brannvarslingssystem med tilsvarende teknologi samtidig. Dette vil påvirke salget til SaifY.

Etter å ha hørt om planene til UnSaif antar SaifY at

- de totalt vil få solgt brannvarslingssystemet sitt til en million husstander
- fire tusen husstander har brannvarslingssystemet når det lanseres
- flest nye husstander kjøper brannvarslingssystemet i uke 65

>[!oppgave]
>c) Bruk antakelsene ovenfor til å lage en ny logistisk modell $F$ for antallet husstander som har brannvarslingssystemet etter $t$ uker.

## Fasit

a) 94 uker
b) 7827,7
c) $F(t)=\frac{1000000}{1+249e^{-0{,}0849t}}$

## Løsningsforslag

![Logistisk modell for brannalarmer i by](/img/user/_resources/s2-v25-2-3a.png)

### 2-3a
Jeg la inn modellen i GeoGebra og la inn linja $y=1\,000\,000$ for å sjekke når halvparten hadde fått systemet. Jeg fant skjæringen med $B$ i punktet $A=(93{,}88, 1000000)$.

**Det tar 94 uker før halvparten av husstandene i byen har brannvarslingssystemet ifølge modellen.**

### 2-3b
Se nederst i GeoGebra-utklippet.
$$
\underline{\underline{B'(52)=7827{,}7}}
$$
**Etter 52 uker (ett år) så selges brannvarslingssystemet til omtrent 7828 husstander per uke.**

### 2-3c
En logistisk modell er gitt ved
$$
f(x)=\frac{N}{1+a \cdot e ^{-kx}}
$$

- $N$ er «bæreevnen» eller maksimalverdien for funksjonen
- $\frac{N}{1+a}$ vil være funksjonsverdien når $x=0$
- Vi har raskest vekst i vendepunktet som vi finner i $\left( \frac{\ln a}{k} , \frac{N}{2}\right)$

Med bakgrunn i opplysningene i oppgaveteksten kan vi bestemme $\textcolor{orange}{N=1\,000\,000}$ siden dette er antallet husstander de totalt selger til.

Videre vet vi at det er 4000 husstander som har systemet ved $x=0$, derfor må
$$\frac{\textcolor{orange}{N}}{1+a}=4000 \iff \frac{1000\cancel{ 000 }}{1+a}=4\cancel{ 000 } \iff \frac{1000}{4} = 1+a \iff \textcolor{seagreen}{a=250-1=249}$$

Til sist vet vi at vendepunktet (den raskeste veksten) er i uke 65, altså må
$$
\frac{\ln \textcolor{seagreen}{a}}{k} =65 \iff \frac{\ln \textcolor{seagreen}{249}}{k}=65 \iff 5{,}517=65k \iff \textcolor{steelblue}{k=\frac{5{,}517}{65}=0{,}0849}
$$
En logistisk modell som passer til dataene vil være
$$
\underline{\underline{F(t)=\frac{1 \, 000 \, 000}{1+249e^{-0{,}0849t}}}}
$$

>[!note] Løsning av 2-4 i CAS
>
>Denne oppgaven kan også løses i CAS ved å sette opp 3 likninger for å bestemme $N$, $a$ og $k$, se skjermbildet under. Du kan også gjøre regresjon på punktene $(0, 4000)$, $(65, 500\,000)$ og $(200, \, 1\,000\,000)$ med logistisk modell.
>
>![](/img/user/_resources/s2-v25-2-3c-cas.png){width=50%}

---
{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-30","aliases":null,"dg-publish":true,"temaer":["etterspørsel","modellering","regresjon","grenseinntekt og grensekostnad","eksponentialfunksjoner","derivasjon"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"1","oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Modell for etterspørsel av vare","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Eksponentiell regresjon på etterspørsel; maksimere $I(x)=p(x)\\cdot x$ via $I'=0$, og finne $I'=K'$.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Eksponentiell regresjon $e(p)=495 \\cdot 0{,}927^p$ og vurdere gyldighetsområde."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $e(p)=70$ i CAS for $p=25{,}8$."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Sette opp $I(x)=p(x)\\cdot x$ og løse $I'(x)=0$ for maksimal inntekt."},{"deloppgave":"d","beskrivelse":"Løse $I'=K'$ i CAS for optimal produksjonsmengde og tolke."}],"dg-permalink":"/modell-for-ettersporsel-av-vare/","permalink":"/modell-for-ettersporsel-av-vare/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-30","aliases":null,"temaer":["etterspørsel","modellering","regresjon","grenseinntekt og grensekostnad","eksponentialfunksjoner","derivasjon"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"1","oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Modell for etterspørsel av vare","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Eksponentiell regresjon på etterspørsel; maksimere $I(x)=p(x)\\cdot x$ via $I'=0$, og finne $I'=K'$.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Eksponentiell regresjon $e(p)=495 \\cdot 0{,}927^p$ og vurdere gyldighetsområde."},{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $e(p)=70$ i CAS for $p=25{,}8$."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Sette opp $I(x)=p(x)\\cdot x$ og løse $I'(x)=0$ for maksimal inntekt."},{"deloppgave":"d","beskrivelse":"Løse $I'=K'$ i CAS for optimal produksjonsmengde og tolke."}]}}
---


# Modell for etterspørsel av vare


Tabellen viser den daglige etterspørselen etter en vare for ulike priser.

| Pris (kroner) | Etterspørsel |  
| ---- | ---- | 
| 10 | 237 | 
| 20 | 111 |
| 30 | 49 |
| 40 | 22 |
| 50 | 12 |

>[!oppgave]
>a) Lag en modell $q$ som kan brukes til å beskrive sammenhengen mellom prisen $p$ (i kroner) og den daglige etterspørselen. Vurder gyldighetsområdet til modellen.

>[!oppgave]
>b) Hva bør prisen for varen være dersom bedriften skal selge 70 enheter per dag?

For en annen vare viser det seg at $p=79-12{,}2\ln x$.

Her er $x$ den daglige etterspørselen når varen koster $p$ kroner.

>[!oppgave]
>c) Hva må prisen være dersom inntektene skal bli størst mulig?

Kostnadene $K$ (i kroner) ved produksjon og salg av $x$ enheter per dag er gitt ved 

$$
K(x) = 0{,}021x^{2}+10x+910
$$

>[!oppgave]
>d) Hvor mange enheter må produseres og selges per dag for at grenseinntektene skal bli lik grensekostnadene?
>Gi en praktisk tolkning av svaret

## Fasit

a) $e(p)=495\cdot 0{,}927^{p}$ 
b) 25,8 kr
c) Etterspørsel 238,75 $\approx$ 239 enheter. Pris ca. 12,2 kr.
d) 80 kr

## Løsningsforslag

### a
![Eksponentiell modell til oppgave 2-1a](/img/user/_resources/s2-h23-2-1a.png)

Jeg brukte GeoGebra til å lage en eksponentiell modell som passet godt til dataene. Jeg vurderer at gyldighetsområdet til modellen er for priser fra omtrent 5 kroner til 70 kroner. Hvis varen hadde kostet veldig lite, så ville nok etterspørselen vært enda større (teoretisk kan man ofte tenke seg at etterspørselen går mot uendelig når prisen går mot null). Det er vanskelig å sette en øvre grense her, men ved prisen 70 kroner så er etterspørselen kun 2,4 – dette er veldig lavt sammenlignet med etterspørselen på 237 ved prisen 10 kroner.

**En modell som viser sammenhengen mellom prisen, $p$, i kroner og etterspørselen er $e(p)=495\cdot 0{,}927^{p}$**

### b
Jeg brukte GeoGebra og løste $e(p)=70$ i CAS. 

**Prisen for varen bør være 25,8 kroner dersom bedriften skal selge 70 enheter per dag.**

### c
![CAS til oppgave 2-1c](/img/user/_resources/s2-h23-2-1c.png){width=70%}

Gitt at $p(x)=79-12{,}2 \ln x$ er en funksjon som angir prisen ved etterspørselen $x$, så er inntekten gitt ved

$$
I(x)=p(x)\cdot x = (79-12{,}2 \ln x)\cdot x
$$

Jeg brukte GeoGebra til å finne ekstremalpunktet til $I$ ved å derivere funksjonen og sette den deriverte lik null. Jeg sjekket også at dette punktet var et toppunkt i grafikkfeltet. 

**Vi har høyest inntekt ved etterspørselen 238,75 enheter, da er prisen $p(238{,}75)=12{,}2$.**

### d
![CAS til oppgave 2-1d](/img/user/_resources/s2-h23-2-1d.png){width=70%}

Jeg la inn funksjonsuttrykket for $K(x)$ i CAS. CAS gir at $I'=K'$ ved $x\approx 80$.

Grenseinntektene er lik grensekostnadene når det produseres og selges 80 enheter. Når grenseinntektene er lik grensekostnadene så har vi det største overskuddet – dette er altså den optimale produksjons- og salgsmengden.

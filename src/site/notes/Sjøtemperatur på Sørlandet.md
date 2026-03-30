---
{"tags":["oppgave"],"date":"2024-01-18","modified":"2024-01-18","aliases":null,"dg-publish":true,"temaer":["funksjoner","gjennomsnittlig vekstfart"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1}],"title":"Sjøtemperatur på Sørlandet","source":null,"todo":null,"status":3,"permalink":"/sjotemperatur-pa-sorlandet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-18","modified":"2024-01-18","aliases":null,"temaer":["funksjoner","gjennomsnittlig vekstfart"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1}],"title":"Sjøtemperatur på Sørlandet","source":null,"todo":null,"status":3}}
---


# Sjøtemperatur på Sørlandet

Funksjonen $T$ gitt ved

$$
T(x)=-\frac{1}{1000}(0{,}0028x^{3}-x^{2}+25x-380) \quad {,}\quad 0\leq x\leq 300
$$

er en modell for temperaturen $T(x)$ grader celsius i sjøen ett sted på Sørlandet $x$ døgn etter 31. desember 2020.

>[!oppgave]
>a) Bruk modellen til å bestemme forskjellen mellom høyeste og laveste temperatur i sjøen de 300 første dagene i 2021.
>b) Hvor mange grader steg temperaturen i sjøen i gjennomsnitt med hvert døgn i mars ifølge modellen?

## Fasit

a) 13,27 ºC
b) 0,0767 ºC

## Løsningsforslag

### 2-1a

![Graf som viser sjøtemperaturen](/img/user/_resources/2py-h23-2-1-a.png)

Vi legger inn $T(x)$ i GeoGebra for å få et overblikk over temperaturen og vi bruker *ekstremalpunkt* for å bestemme høyeste og laveste temperatur. Se punktene $A$ og $B$.

**Forskjellen mellom høyeste og laveste temperatur er 13,27 ºC.**

### 2-1b
Måneden mars tilsvarer omtrent dagene $x=59$ til $x=90$.

Vi regner ut temperaturen for disse dagene i GeoGebra:

$$
\begin{aligned}
T(59)&=1{,}81 \, \degree\text{C}\\
T(90)&=4{,}19 \, \degree\text{C}\\
\end{aligned}
$$

I løpet av de 31 dagene i mars er altså gjennomsnittsstigningen:

$$
\frac{4{,}19-1{,}81}{31}=\underline{\underline{ 0{,}0767 \, \degree \text{C per dag} }}
$$

**Temperaturen stiger med 0,0767 ºC per dag i mars.**

---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/logistisk-vekstmodell-batteriteknologi/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":1}],"poeng":6,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["logistisk funksjon","modellering","derivasjon"],"title":"Logistisk vekstmodell batteriteknologi","todo":[],"permalink":"/logistisk-vekstmodell-batteriteknologi/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":1}],"poeng":6,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["logistisk funksjon","modellering","derivasjon"],"title":"Logistisk vekstmodell batteriteknologi","todo":[]}}
---


# Logistisk vekstmodell batteriteknologi

Teknologiselskapet PowBat skal lansere en ny batteriteknologi i en by med 3 millioner husstander. PowBat regner med at antallet husstander som har batteriet $t$ uker etter lanseringen, vil følge modellen $S$ gitt ved

$$S(t) = \frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}}$$

>[!oppgave]
>a) Hvor lang tid vil det ta før halvparten av husstandene i byen har batteriet, ifølge modellen?
>b) Bestem $S'(52)$. Gi en praktisk tolkning av svaret.

Det viser seg at konkurrenten BA3 planlegger å lansere et batteri med tilsvarende teknologi samtidig. Dette vil påvirke salget til PowBat.

Etter å ha hørt om planene til BA3 antar PowBat at

- de totalt vil få solgt batteriet sitt til 1,5 millioner husstander
- 500 husstander har batteriet når det lanseres
- flest nye husstander kjøper batteriet i uke 60

>[!oppgave]
>c) Bruk antakelsene ovenfor til å finne en ny logistisk modell $F$ for antallet husstander som har batteriet etter $t$ uker.

## Fasit

a) $\underline{\underline{t \approx 102{,}87 \text{ uker}}}$

b) $\underline{\underline{S'(52) \approx 4873}}$ husstander per uke. Omtrent ett år etter lansering øker antallet husstander med batteriet med ca. 4873 per uke.

c) $\underline{\underline{F(t) = \dfrac{1\ 500\ 000}{1 + 2999 \cdot e^{-0{,}1334t}}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS (numerisk modus) til å løse alle tre deloppgavene i én sesjon.

![GeoGebra CAS – logistisk vekstmodell batteriteknologi](/img/user/_resources/r1-v25-2-1.png)

### a

Halvparten av husstandene i byen er $\tfrac{3\ 000\ 000}{2} = 1\ 500\ 000$. Vi skal finne $t$ slik at $S(t) = 1\ 500\ 000$.

Vi definerer $S$ og løser likningen i CAS:

$$S(t) := \frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}}$$

$$\texttt{Løs}(S(t) = 1\ 500\ 000,\; t) \quad \Rightarrow \quad t \approx 102{,}87$$

Vi kan også løse for hånd for å bekrefte:

$$\frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}} = 1\ 500\ 000$$

$$1 + 2500 \cdot e^{-0{,}08t} = \frac{5}{3}$$

$$e^{-0{,}08t} = \frac{2}{3 \cdot 2500} = \frac{1}{3750}$$

$$-0{,}08t = \ln\!\left(\frac{1}{3750}\right) = -\ln(3750)$$

$$t = \frac{\ln(3750)}{0{,}08} \approx \frac{8{,}230}{0{,}08} \approx 102{,}87$$

**Det vil ta omtrent $\underline{\underline{102{,}87 \text{ uker}}}$ før halvparten av husstandene i byen har batteriet.**

### b

Vi beregner den deriverte i $t = 52$ i CAS:

$$S'(52) \approx 4872{,}76$$

Til kontroll: $S(52) \approx 62\ 470$ husstander.

**$\underline{\underline{S'(52) \approx 4873}}$ husstander per uke.**

Praktisk tolkning: Omtrent 52 uker (ett år) etter lansering øker antallet husstander som har batteriet, med ca. 4873 per uke.

### c

Vi skal finne en logistisk modell $F(t) = \dfrac{B}{1 + A \cdot e^{-rt}}$ basert på tre antakelser:

- Bæreevne: $B = 1\ 500\ 000$
- $F(0) = 500$
- Vendepunktet (flest nye husstander per uke) er ved $t = 60$

**Bestem $A$:** Vendepunktet for en logistisk funksjon ligger når $F(t) = \tfrac{B}{2}$, og ved vendepunktet er $t_v = \dfrac{\ln A}{r}$. Fra $F(0) = 500$:

$$\frac{1\ 500\ 000}{1 + A} = 500 \quad \Rightarrow \quad 1 + A = 3000 \quad \Rightarrow \quad A = 2999$$

**Bestem $r$:** Vendepunktet er ved $t = 60$:

$$t_v = \frac{\ln A}{r} \quad \Rightarrow \quad r = \frac{\ln 2999}{60} \approx \frac{8{,}006}{60} \approx 0{,}1334$$

Vi bekrefter i CAS at $F(0) = 500$ og at vendepunktet er $(60,\; 750\ 000)$.

$$\boxed{F(t) = \frac{1\ 500\ 000}{1 + 2999 \cdot e^{-0{,}1334t}}}$$
---
{"aliases":[],"date":"2024-05-23","del":1,"dg-permalink":"/ada-sparer-med-eksponentialfunksjon/","dg-publish":true,"eksamen":"v24","fag":["1p"],"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke parametrene i en eksponentialfunksjon og lese et Python-program som beregner gjennomsnittlig vekstfart.","lf-source-claude":true,"modified":"2026-03-28","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":2}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","programmering"],"title":"Ada sparer med eksponentialfunksjon","todo":[],"permalink":"/ada-sparer-med-eksponentialfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":1,"eksamen":"v24","fag":["1p"],"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke parametrene i en eksponentialfunksjon og lese et Python-program som beregner gjennomsnittlig vekstfart.","lf-source-claude":true,"modified":"2026-03-28","oppgave":2,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":2}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","programmering"],"title":"Ada sparer med eksponentialfunksjon","todo":[]}}
---


# Ada sparer med eksponentialfunksjon

Ada vil spare penger og har funnet ut at hun kan bruke funksjonen $f$ gitt ved

$$f(x) = 20000 \cdot 1{,}0485^{x}$$

for å regne ut hvor mye penger hun vil ha i banken om $x$ år.

>[!oppgave]
>a) Gi en praktisk tolkning av tallet 20 000 og av tallet 1,0485.

Ada har laget programmet nedenfor.

```python ln
def f(x):
    return 20000 * 1.0485 ** x

start = 0
slutt = 10

v = (f(slutt) - f(start))/(slutt - start)

print(v)
```

>[!oppgave]
>b) Hva forteller tallet som vil bli skrevet ut når hun kjører programmet?

## Fasit

a) $20\,000$ er beløpet Ada har i banken nå (ved $x = 0$). $1{,}0485$ er vekstfaktoren, som tilsvarer $4{,}85\,\%$ årlig rente.

b) Programmet skriver ut den gjennomsnittlige vekstfarten fra $x = 0$ til $x = 10$, altså omtrent **$\underline{\underline{1211{,}55 \, \mathrm{kr/år}}}$** — beløpet øker i gjennomsnitt med ca. 1212 kr per år de første 10 årene.

## Løsningsforslag

### a

Funksjonen er $f(x) = 20000 \cdot 1{,}0485^{x}$, der $x$ er antall år.

Når vi setter inn $x = 0$, får vi

$$f(0) = 20000 \cdot 1{,}0485^{0} = 20000 \cdot 1 = 20000$$

Tallet $\textcolor{steelblue}{20\,000}$ er altså beløpet Ada har i banken i dag (startbeløpet).

Vekstfaktoren $\textcolor{seagreen}{1{,}0485}$ betyr at beløpet vokser med $4{,}85\,\%$ hvert år. Beløpet ganges med $1{,}0485$ for hvert år som går.

**$\textcolor{steelblue}{20\,000}$ kr er beløpet Ada har i banken nå. $\textcolor{seagreen}{1{,}0485}$ er vekstfaktoren, som tilsvarer $4{,}85\,\%$ årlig rente.**

### b

Programmet regner ut dette uttrykket:

$$v = \frac{f(10) - f(0)}{10 - 0}$$

Vi finner de to verdiene:

$$f(0) = 20000 \cdot 1{,}0485^{0} = 20\,000$$

$$f(10) = 20000 \cdot 1{,}0485^{10} \approx 32\,115{,}47$$

Deretter:

$$v = \frac{32\,115{,}47 - 20\,000}{10} = \frac{12\,115{,}47}{10} \approx 1211{,}55$$

Programmet skriver ut **$\underline{\underline{v \approx 1211{,}55 \, \mathrm{kr/år}}}$**.

Dette er den gjennomsnittlige vekstfarten fra år 0 til år 10. Det betyr at beløpet i gjennomsnitt øker med ca. 1212 kr per år de første 10 årene.
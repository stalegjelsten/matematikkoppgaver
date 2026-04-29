---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/hengelaskode-og-simulering/","dg-publish":true,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","simulering","kombinatorikk"],"title":"Hengelåskode og simulering","permalink":"/hengelaskode-og-simulering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","simulering","kombinatorikk"],"title":"Hengelåskode og simulering"}}
---


# Hengelåskode og simulering

Peder har glemt koden på hengelåsen sin. Koden består av tre sifre. Peder husker at sifrene 7, 8, 9 og 0 ikke er med i koden. Han bestemmer seg for å prøve seg fram.

>[!oppgave]
>a) Bestem sannsynligheten for at Peder klarer å åpne hengelåsen på første forsøk.
>b) Bruk simulering til å bestemme sannsynligheten for at Peder klarer å åpne hengelåsen på første forsøk.

## Fasit

a) $\underline{\underline{P = \frac{1}{216} \approx 0{,}46 \,\%}}$
b) Simuleringen gir ca. $0{,}43 \,\%$, nært den teoretiske verdien $0{,}46 \,\%$.

## Løsningsforslag

### a

Sifrene 7, 8, 9 og 0 er ikke med, så hvert siffer velges fra mengden $\{1, 2, 3, 4, 5, 6\}$ — 6 mulige sifre per posisjon. Vi antar at sifrene kan gjentas (vanligste tolkning for hengelåskoder).

Antall mulige koder:

$$6 \cdot 6 \cdot 6 = 216$$

Peder vet ikke koden, og vi antar han gjetter tilfeldig blant alle 216 mulige koder. Det er bare én riktig kode, så sannsynligheten for å treffe på første forsøk er:

$$P(\text{riktig kode}) = \frac{1}{216} \approx 0{,}0046$$

**Sannsynligheten er $\underline{\underline{\frac{1}{216} \approx 0{,}46 \,\%}}$.**

### b

Vi simulerer situasjonen 100 000 ganger. I hver runde trekkes en tilfeldig «fasit-kode» og en tilfeldig «gjetting», begge med sifre fra $\{1, 2, 3, 4, 5, 6\}$. Vi teller hvor mange ganger gjettingen treffer fasit-koden.

```python
import numpy as np
rng = np.random.default_rng(42)
n = 100_000
faktisk = rng.integers(1, 7, size=(n, 3))
gjett = rng.integers(1, 7, size=(n, 3))
treff = np.all(faktisk == gjett, axis=1)
print(f"Estimat: {np.mean(treff):.4f}")
```

**Resultat:**
```
Estimat: 0.0043
```

Simuleringen gir ca. $0{,}43 \,\%$, som stemmer godt med den teoretiske verdien $\frac{1}{216} \approx 0{,}46 \,\%$. Avviket skyldes tilfeldig variasjon i simuleringen.

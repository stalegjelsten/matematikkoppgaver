---
{"aliases":[],"date":"2024-11-14","del":2,"dg-permalink":"/knekkebrod-gavekort-og-simulering/","dg-publish":true,"eksamen":"h24","fag":["s1"],"lf-source-claude":true,"modified":"2026-04-30","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","simulering","økonomi"],"title":"Knekkebrød, gavekort og simulering","todo":[],"permalink":"/knekkebrod-gavekort-og-simulering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":2,"eksamen":"h24","fag":["s1"],"lf-source-claude":true,"modified":"2026-04-30","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["sannsynlighet","simulering","økonomi"],"title":"Knekkebrød, gavekort og simulering","todo":[]}}
---


# Knekkebrød, gavekort og simulering

Trollmat AS selger pakker med knekkebrød. I én av 1000 pakker som selges, ligger det et gavekort. En kunde som finner et gavekort, vinner en reise. Hver reise har en verdi på 5000 kroner. Knekkebrødene selges for 40 kroner per pakke, og de koster 10 kroner per pakke å produsere.

Hassan kjøper én pakke knekkebrød hver dag.

>[!oppgave]
>a) Hvor mange dager tar det før sannsynligheten for at Hassan har vunnet minst én reise, er 20 %? Husk å begrunne valget av sannsynlighetsmodell.

Trollmat AS lanserer en ny knekkebrødpakke som de kaller «Gullknekk». I én av 100 pakker med Gullknekk ligger det et gavekort. Det koster 10 kroner å produsere en pakke Gullknekk.

>[!oppgave]
>b) Hvilken pris må Trollmat AS ta betalt per pakke Gullknekk for å ha samme overskudd per pakke som for de vanlige knekkebrødene?

Hassan endrer vanene sine og kjøper vanlige knekkebrødpakker på hverdager og en pakke Gullknekk hver lørdag og søndag.

>[!oppgave]
>c) Bruk simulering til å bestemme sannsynligheten for at Hassan vinner minst én reise i løpet av 52 uker med de nye kjøpsvanene sine.

## Fasit

a) $\underline{\underline{n = 224 \text{ dager}}}$

b) $\underline{\underline{85 \, \mathrm{kr}}}$

c) $\underline{\underline{P \approx 0{,}729}}$

## Løsningsforslag

### a

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at minste antall dager er **224**, mens matematikk.net oppgir **223**. Det er et tolkningsspørsmål: $0{,}999^{223} \approx 0{,}80016 > 0{,}80$, så strengt sett oppfylles ikke kravet før dag 224. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Vi lar $X$ være antall gavekort Hassan finner på $n$ dager. Siden hver pakke er et uavhengig forsøk med to utfall (gavekort eller ikke), samme sannsynlighet $p = \frac{1}{1000}$ for gevinst i hver pakke, og Hassan kjøper én pakke per dag, er $X$ binomisk fordelt med $n$ forsøk og $p = \frac{1}{1000}$.

Vi vil finne minste $n$ slik at

$$P(X \geq 1) \geq 0{,}20$$

Vi bruker komplementregelen:

$$P(X \geq 1) = 1 - P(X = 0) = 1 - \left(\frac{999}{1000}\right)^n$$

Vi setter opp ulikheten:

$$1 - \left(\frac{999}{1000}\right)^n \geq 0{,}20$$

$$\left(\frac{999}{1000}\right)^n \leq 0{,}80$$

Vi løser dette i GeoGebra CAS:

![CAS-utregning for oppgave 4a og 4b](/img/user/_resources/s1-h24-2-4.png)

CAS gir $n \approx 223{,}03$, altså er minste hele antall $n = 224$.

**Hassan må kjøpe knekkebrød i minst $\underline{\underline{224 \text{ dager}}}$ før sannsynligheten for å ha vunnet minst én reise er 20 %.**

### b

Overskudd per vanlige pakke:

$$\text{Inntekt} - \text{Produksjon} - \text{Forventet gevinst} = 40 - 10 - 5000 \cdot \frac{1}{1000} = 40 - 10 - 5 = 25 \, \mathrm{kr}$$

For Gullknekk med ukjent pris $p$:

$$p - 10 - 5000 \cdot \frac{1}{100} = p - 10 - 50 = p - 60$$

Vi setter overskuddet lik 25 kr og løser i GeoGebra CAS (se bilde over):

$$p - 60 = 25 \implies p = 85$$

**Trollmat AS må ta $\underline{\underline{85 \, \mathrm{kr}}}$ per pakke Gullknekk.**

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at sannsynligheten er ca. **$0{,}729$ (≈ 73 %)**, mens matematikk.net oppgir **0,36 %**. Vår verdi er verifisert både ved simulering og eksakt utregning ($1 - 0{,}999^{260} \cdot 0{,}99^{104} \approx 0{,}7289$). Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Hassan kjøper 5 vanlige pakker per uke og 2 Gullknekk-pakker per uke i 52 uker:

- Vanlige pakker: $5 \cdot 52 = 260$ pakker, $p_v = \frac{1}{1000}$
- Gullknekk-pakker: $2 \cdot 52 = 104$ pakker, $p_g = \frac{1}{100}$

Vi simulerer 100 000 år og teller hvor mange ganger Hassan vinner minst én reise:

```python
import random
random.seed(42)
N = 100000
vunnet = 0
for _ in range(N):
    vinst = 0
    for _ in range(260):  # vanlige pakker
        if random.random() < 1/1000:
            vinst += 1
    for _ in range(104):  # Gullknekk
        if random.random() < 1/100:
            vinst += 1
    if vinst >= 1:
        vunnet += 1
print(vunnet/N)  # ≈ 0,729
```

Simuleringen gir $\approx 0{,}729$, som stemmer godt med den eksakte verdien:

$$P(\text{minst én gevinst}) = 1 - (0{,}999)^{260} \cdot (0{,}99)^{104} \approx 0{,}7289$$

**Sannsynligheten for at Hassan vinner minst én reise i løpet av 52 uker er $\underline{\underline{P \approx 0{,}729}}$.**
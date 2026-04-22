---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjonsdrøfting","programmering"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":5}],"title":"Funksjonsdrøfting og halveringsmetode","status":0,"source":null,"todo":null,"dg-permalink":"/funksjonsdrofting-og-halveringsmetode/","permalink":"/funksjonsdrofting-og-halveringsmetode/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjonsdrøfting","programmering"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":5}],"title":"Funksjonsdrøfting og halveringsmetode","status":0,"source":null,"todo":null}}
---


# Funksjonsdrøfting og halveringsmetode

En funksjon $f$ er gitt ved

$$f(x) = 4x^2 \cdot \ln x$$

>[!oppgave]
>a) Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

En elev jobber med funksjonen $f$ og har skrevet programmet nedenfor:

```python ln
from math import log              # log(x) er kode for ln(x)

a = 0.1
b = 3

maks_avvik = 0.0001

def f(x):                         # definerer funksjonen
    return 4*x**2*log(x)

m = (a + b)/2

while abs(f(m)) >= maks_avvik:    # abs() finner absoluttverdi

	if f(a)*f(m) < 0:
		b = m
    else:
        a = m

    m = (a + b)/2

print(m)
```

>[!oppgave]
>b) Hva ønsker eleven å finne ut?  
>Forklar hva programmet gjør i linje 11–20.  
>Bestem verdien som blir skrevet ut når eleven kjører programmet.

## Fasit

a) Bunnpunkt $\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)$, ingen toppunkt
b) $m \approx 1{,}000$

## Løsningsforslag

### 1-5a

$f(x) = 4x^2 \ln x$ er definert for $x > 0$.

$$
f'(x) = 8x \ln x + 4x^2 \cdot \frac{1}{x} = 8x \ln x + 4x = 4x(2\ln x + 1)
$$

For $x > 0$ er $4x > 0$, så $f'(x) = 0$ når $2\ln x + 1 = 0$, det vil si $\ln x = -\dfrac{1}{2}$, altså $x = e^{-1/2} = \dfrac{1}{\sqrt{e}}$.

Fortegnskifte: $f' < 0$ for $x < e^{-1/2}$ og $f' > 0$ for $x > e^{-1/2}$, så dette er et **bunnpunkt**.

$$
f\left(e^{-1/2}\right) = 4 \cdot e^{-1} \cdot \ln\left(e^{-1/2}\right) = \frac{4}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}
$$

**Bunnpunkt: $\underline{\underline{\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)}}$**

Grafen til $f$ har ingen toppunkt.

### 1-5b

Eleven ønsker å finne **nullpunktet** til $f$ i intervallet $[0{,}1,\; 3]$, ved hjelp av **halveringsmetoden**.

$f(0{,}1) = 4 \cdot 0{,}01 \cdot \ln(0{,}1) \approx -0{,}092 < 0$ og $f(3) = 36\ln 3 \approx 39{,}6 > 0$, så det finnes ett nullpunkt i intervallet. (Vi ser at $f(x) = 4x^2 \ln x = 0$ for $x = 1$.)

**Hva programmet gjør i linje 11–20:**

- Linje 11 setter $m$ til midtpunktet i intervallet $[a, b]$.
- Linje 13: loopen fortsetter så lenge $|f(m)| \ge 0{,}0001$.
- Linje 15–16: dersom $f(a)$ og $f(m)$ har motsatt fortegn, er nullpunktet i $[a, m]$ → vi oppdaterer $b = m$.
- Linje 17–18: ellers er nullpunktet i $[m, b]$ → vi oppdaterer $a = m$.
- Linje 20: ny midtpunkt beregnes.

Programmet halverer intervallet i hver iterasjon til $|f(m)|$ er tilstrekkelig liten.

**Programmet skriver ut $\underline{\underline{m \approx 1{,}000}}$.**

---

---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjonsdrøfting","programmering"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":5}],"title":"Funksjonsdrøfting og halveringsmetode","status":1,"source":null,"todo":null,"permalink":"/funksjonsdrofting-og-halveringsmetode/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjonsdrøfting","programmering"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":5}],"title":"Funksjonsdrøfting og halveringsmetode","status":1,"source":null,"todo":null}}
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

>[!question]- Fasit
>
> a) Bunnpunkt $\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)$, ingen toppunkt
> b) $m \approx 1{,}000$
> [[Løsningsforslag/Løsningsforslag R1 eksamen H2025#Oppgave 1-5\|Løsningsforslag R1 eksamen H2025#Oppgave 1-5]]

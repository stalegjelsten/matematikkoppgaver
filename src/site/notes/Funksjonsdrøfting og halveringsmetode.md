---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjonsdrøfting","programmering"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":5,"title":"Funksjonsdrøfting og halveringsmetode","status":1,"source":null,"todo":null,"permalink":"/funksjonsdrofting-og-halveringsmetode/","dgPassFrontmatter":true}
---


# Funksjonsdrøfting og halveringsmetode

En funksjon $f$ er gitt ved

$$f(x) = 4x^2 \cdot \ln x$$

>[!oppgave]
>a) Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

En elev jobber med funksjonen $f$ og har skrevet programmet nedenfor:

```python
1   from math import log              # log(x) er kode for ln(x)
2
3   a = 0.1
4   b = 3
5
6   maks_avvik = 0.0001
7
8   def f(x):                         # definerer funksjonen
9       return 4*x**2*log(x)
10
11  m = (a + b)/2
12
13  while abs(f(m)) >= maks_avvik:    # abs() finner absolutverdi
14
15      if f(a)*f(m) < 0:
16          b = m
17      else:
18          a = m
19
20      m = (a + b)/2
21
22  print(m)
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

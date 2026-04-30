---
{"aliases":[],"date":"2023-05-24","del":2,"dg-permalink":"/grafens-lengde-med-polylinje/","dg-publish":true,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":6,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":6}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["integral","programmering"],"title":"Grafens lengde med polylinje","todo":[],"lf-source-claude":true,"permalink":"/grafens-lengde-med-polylinje/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":2,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":6,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":6}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["integral","programmering"],"title":"Grafens lengde med polylinje","todo":[],"lf-source-claude":true}}
---


# Grafens lengde med polylinje

For en deriverbar funksjon $f$ kan vi finne en tilnærmet verdi for lengden av grafen mellom to $x$-verdier ved å bruke en polylinje, slik figuren nedenfor illustrerer.

![Polylinje langs graf](/img/user/_resources/r2-v23-2-6.jpeg){width=60%}

Dersom vi skal finne lengden av grafen i et intervall $[a,b]$, kan vi dele dette intervallet i $N$ like store delintervall $[x_i, x_{i+1}]$ med bredde $h = \dfrac{b-a}{N}$ og $x_i = a + i \cdot h$.

Vi regner da ut lengdene av linjestykkene som går mellom punktene $(x_i, f(x_i))$ og $(x_{i+1}, f(x_{i+1}))$. Summen av disse lengdene vil da være en tilnærmet verdi for lengden av grafen fra $x = a$ til $x = b$.

>[!oppgave]
>a) Forklar at lengden av linjestykket som går fra punktet $(x_i, f(x_i))$ til punktet $(x_{i+1}, f(x_{i+1}))$, er gitt ved
>

<!-- two-column start left-width=70% -->

$$S_i = \sqrt{h^2 + k_i^2}, \quad \text{der } k_i = f(x_{i+1}) - f(x_i)$$

Funksjonen $g$ er gitt ved

$$g(x) = \sqrt{1 - x^2}, \quad D_g = [-1, 1]$$

---

![$S_{i}$,  $k_{i}$ og $h_{i}$](/img/user/_resources/r2-v23-2-6-2.jpeg){width=50%}

<!-- two-column stop -->







>[!oppgave]
>b) Regn ut en god tilnærmet verdi for lengden av grafen til $g$ ved å bruke framgangsmåten beskrevet ovenfor. Vurder om svaret er rimelig.

## Fasit

a) Se løsningsforslag.

b) **$\underline{\underline{L \approx 3{,}1416}}$** (konvergerer mot $\pi$)

## Løsningsforslag

### a

Vi ser på linjestykket fra $(x_i,\, f(x_i))$ til $(x_{i+1},\, f(x_{i+1}))$.

Den horisontale komponenten er

$$\Delta x = x_{i+1} - x_i = h$$

og den vertikale komponenten er

$$k_i = f(x_{i+1}) - f(x_i)$$

Disse to komponentene utgjør katetene i en rettvinklet trekant der linjestykket er hypotenusen. Pythagoras' setning gir da

$$S_i = \sqrt{(\Delta x)^2 + k_i^2} = \sqrt{h^2 + k_i^2}$$

### b

Vi deler $[-1, 1]$ i $N = 1000$ like store delintervall og summerer lengdene $S_i$:

```python
import math
a, b, N = -1, 1, 1000
h = (b - a) / N
L = 0
for i in range(N):
    xi = a + i * h
    xj = a + (i + 1) * h
    ki = math.sqrt(max(1 - xj**2, 0)) - math.sqrt(max(1 - xi**2, 0))
    L += math.sqrt(h**2 + ki**2)
print(L)   # ≈ 3,1416
```

Programmet gir $L \approx 3{,}1416$.

**Rimelighetsvurdering:** Funksjonen $g(x) = \sqrt{1 - x^2}$ er den øvre halvdelen av enhetssirkelen (radius $r = 1$). Den eksakte buelengden er halve omkretsen av enhetssirkelen:

$$L = \frac{2\pi r}{2} = \pi \approx 3{,}14159\ldots$$

Tilnærmingen $3{,}1416$ stemmer godt med $\pi$, noe som bekrefter at svaret er rimelig.
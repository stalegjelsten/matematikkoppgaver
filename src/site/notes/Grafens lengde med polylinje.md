---
{"aliases":[],"date":"2023-05-24","del":2,"dg-permalink":"/grafens-lengde-med-polylinje/","dg-publish":true,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":6,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":6}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["integral","programmering"],"title":"Grafens lengde med polylinje","todo":["løsningsforslag"],"permalink":"/grafens-lengde-med-polylinje/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":2,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":6,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":6}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["integral","programmering"],"title":"Grafens lengde med polylinje","todo":["løsningsforslag"]}}
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
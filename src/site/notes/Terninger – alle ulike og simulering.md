---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/terninger-alle-ulike-og-simulering/","dg-publish":true,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":4,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","simulering"],"title":"Terninger – alle ulike og simulering","todo":[],"permalink":"/terninger-alle-ulike-og-simulering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":4,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","simulering"],"title":"Terninger – alle ulike og simulering","todo":[]}}
---


# Terninger – alle ulike og simulering

Du kaster fem terninger.

>[!oppgave]
>a) Bestem sannsynligheten for at alle terningene viser forskjellige antall øyne.
>b) Bruk simulering til å bestemme sannsynligheten for at du får nøyaktig tre seksere.

## Fasit

a) **$\underline{\underline{P = \dfrac{5}{54} \approx 9{,}26 \,\%}}$**
b) **$\underline{\underline{P \approx 3{,}22 \,\%}}$** (teoretisk); simuleringen gir ca. $3{,}2 \,\%$

## Løsningsforslag

### a

Vi kaster fem terninger og ønsker at alle viser forskjellige antall øyne.

Vi bruker multiplikasjonsprinsippet. Den første terningen kan vise et hvilket som helst tall — 6 muligheter. Den andre må vise noe annet enn den første — 5 muligheter. Slik fortsetter vi:

$$P(\text{alle ulike}) = \frac{6 \cdot 5 \cdot 4 \cdot 3 \cdot 2}{6^5} = \frac{720}{7776} = \frac{5}{54} \approx 0{,}0926$$

**$\underline{\underline{P(\text{alle ulike}) = \dfrac{5}{54} \approx 9{,}26 \,\%}}$**

### b

La $X$ være antall seksere når vi kaster fem terninger. $X$ er binomisk fordelt med $n = 5$ og $p = \frac{1}{6}$.

**Teoretisk sannsynlighet:**

$$P(X = 3) = \binom{5}{3} \cdot \left(\frac{1}{6}\right)^3 \cdot \left(\frac{5}{6}\right)^2 = 10 \cdot \frac{1}{216} \cdot \frac{25}{36} = \frac{250}{7776} \approx 0{,}0322$$

**Simulering med Python:**

```python
# uv run --with numpy simulering-seksere.py
import numpy as np

rng = np.random.default_rng(42)
n = 100_000
dice = rng.integers(1, 7, size=(n, 5))
treffer = np.sum(dice == 6, axis=1)
p = np.mean(treffer == 3)
print(f"Estimat: {p:.4f}")  # → Estimat: 0.0316
```

Simuleringen med 100 000 forsøk ga $\hat{p} \approx 0{,}0316$, som stemmer godt overens med den teoretiske verdien $\frac{250}{7776} \approx 0{,}0322$.

**$\underline{\underline{P(X = 3) = \dfrac{250}{7776} \approx 3{,}22 \,\%}}$**

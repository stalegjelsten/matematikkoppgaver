---
{"aliases":[],"date":"2023-11-14","del":1,"dg-permalink":"/grensekostnad-og-programmering/","dg-publish":true,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"poeng":null,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["programmering","grenseinntekt og grensekostnad","økonomi"],"title":"Grensekostnad og programmering","todo":[],"permalink":"/grensekostnad-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":1,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"poeng":null,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["programmering","grenseinntekt og grensekostnad","økonomi"],"title":"Grensekostnad og programmering","todo":[]}}
---


# Grensekostnad og programmering

En bedrift produserer en vare. De daglige kostnadene $K$ (i kroner) ved produksjon av $x$ enheter av varen er gitt ved

$$K(x) = 0{,}1x^2 + 100x + 9000$$

Den økonomiansvarlige i bedriften har laget programmet nedenfor.

```python ln
def K(x):
    return 0.1*x**2 + 100*x + 9000

grense = 200
h = 0.00001
a = 1

while (K(a + h) - K(a))/h < grense:
    a = a + 1

print(a)
```

>[!oppgave]
>Hva blir resultatet når programmet kjøres? Gi en praktisk tolkning av svaret.

## Fasit

**500**. Programmet finner minste antall produserte enheter der grensekostnaden er minst 200 kr.

## Løsningsforslag

Vi finner grensekostnaden ved å derivere $K(x)$:

$$K'(x) = 0{,}2x + 100$$

Programmet beregner den numeriske tilnærmingen til $K'(a)$ med formelen

$$\frac{K(a + h) - K(a)}{h}, \quad h = 0{,}00001$$

og øker $a$ med 1 så lenge denne tilnærmingen er **mindre enn** `grense = 200`. Løkken stopper første gang tilnærmingen er $\geq 200$, og programmet skriver ut $a$.

Vi finner den eksakte verdien analytisk. Betingelsen $K'(a) \geq 200$ gir

$$0{,}2a + 100 \geq 200 \implies 0{,}2a \geq 100 \implies a \geq 500$$

Minste heltall som oppfyller dette er $a = 500$.

**Kontroll med programmet:**

- For $a = 499$: $\dfrac{K(499{,}00001) - K(499)}{0{,}00001} \approx 199{,}8 < 200$, så løkken kjører videre.
- For $a = 500$: $\dfrac{K(500{,}00001) - K(500)}{0{,}00001} \approx 200{,}000001 \geq 200$, så betingelsen blir usann og løkken stopper.

Programmet skriver ut $\underline{\underline{500}}$.

**Praktisk tolkning:** Når bedriften produserer 500 enheter daglig, er grensekostnaden 200 kr — det vil si at den ekstra kostnaden ved å produsere én enhet til er omtrent 200 kr. Programmet finner altså det minste produksjonsvolumet der grensekostnaden når 200 kr.
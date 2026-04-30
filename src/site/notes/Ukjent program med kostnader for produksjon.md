---
{"alias":[null],"date":"2023-05-29","del":1,"dg-permalink":"/ukjent-program-med-kostnader-for-produksjon/","dg-publish":true,"eksamen":"v23","fag":"s1","modified":"2023-05-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"title":"Ukjent program med kostnader for produksjon","lf-source-claude":true,"todo":[],"permalink":"/ukjent-program-med-kostnader-for-produksjon/","dgPassFrontmatter":true,"dg-note-properties":{"alias":[null],"date":"2023-05-29","del":1,"eksamen":"v23","fag":"s1","modified":"2023-05-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5}],"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"title":"Ukjent program med kostnader for produksjon","lf-source-claude":true,"todo":[]}}
---


# Ukjent program med kostnader for produksjon

For en bedrift er kostnaden $K$ i kroner ved produksjon av $x$ enheter per uke av en varetype gitt ved

$$
K(x)=0{,}2x^2+140x+7000
$$

Bedriften har laget følgende program.

```python ln
def K(x): 
	return 0.2*x**2 + 140*x + 7000

v = 260
h = 0.001
x = 0

while (K(x + h) - K(x))/h < v:
	x = x + 1

print(x)
```

Hva blir resultatet når programmet kjøres? Hva forteller dette svaret bedriften?

## Fasit

300 fordi $K'(300) = 260$

## Løsningsforslag

Løkken kjører så lenge den numeriske tilnærmingen til vekstfarten er under $v = 260$. Uttrykket

$$
\frac{K(x+h)-K(x)}{h}
$$

er den numeriske deriverte av $K$ i punktet $x$, og med $h = 0{,}001$ er dette svært nær $K'(x)$.

Vi finner $K'(x)$:

$$
K'(x) = 0{,}4x + 140
$$

Løkken stopper ved første hele $x$ der $K'(x) \geq 260$. Vi løser

$$
0{,}4x + 140 = 260 \implies 0{,}4x = 120 \implies x = 300
$$

**Verifikasjon:** $K'(299) = 0{,}4 \cdot 299 + 140 = 259{,}6 < 260$, så løkken kjører videre til $x = 300$. Da er $K'(300) = 0{,}4 \cdot 300 + 140 = 260$, og den numeriske tilnærmingen $\frac{K(300{,}001)-K(300)}{0{,}001} \approx 260{,}0002 \geq 260$, slik at betingelsen blir falsk og løkken avslutter.

Programmet skriver ut $\textbf{300}$.

**Praktisk tolkning:** Når bedriften produserer $\underline{\underline{300}}$ enheter per uke, er grensekostnaden $260 \, \mathrm{kr}$ — det vil si at den ekstra kostnaden ved å produsere én enhet til er akkurat $260 \, \mathrm{kr}$. Programmet finner det minste produksjonsnivået der grensekostnaden når $260 \, \mathrm{kr}$.
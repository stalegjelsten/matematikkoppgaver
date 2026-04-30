---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/tangent-til-ln-og-trekantareal/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["logaritmer","derivasjon","areal"],"title":"Tangent til ln og trekantareal","todo":[],"permalink":"/tangent-til-ln-og-trekantareal/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["logaritmer","derivasjon","areal"],"title":"Tangent til ln og trekantareal","todo":[]}}
---


# Tangent til ln og trekantareal

Nedenfor ser du grafen til funksjonen $f$ gitt ved $f(x) = \ln x$.

Et punkt $B$ på grafen til $f$ er plassert slik at tangenten til grafen i punktet $B$ går gjennom $A(0,0)$.

Punktet $C$ er plassert på linja $y = x$ slik at $\angle ACB = 90\degree$.

![Grafen til f(x) = ln x med punkt B, tangent og trekant ABC](/img/user/_resources/r1-v25-2-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem eksakte verdier for koordinatene til punktet $B$.
>b) Bestem det eksakte arealet av trekant $ABC$.

## Fasit

a) $\underline{\underline{B = (e,\ 1)}}$

b) $\underline{\underline{T = \dfrac{e^2-1}{4} \approx 1{,}60}}$

## Løsningsforslag

Vi bruker GeoGebra CAS.

![GeoGebra CAS – tangentbetingelse og trekantareal](/img/user/_resources/r1-v25-2-5-cas.png)

### a

Vi definerer $f(x) = \ln x$ og finner den deriverte.

$$f'(x) = \frac{1}{x}$$

Tangenten i punktet $B = (b,\ \ln b)$ har stigning $f'(b) = \tfrac{1}{b}$ og likning

$$y - \ln b = \frac{1}{b}(x - b)$$

For at tangenten skal gå gjennom $A(0,0)$ setter vi inn $x = 0,\ y = 0$:

$$-\ln b = \frac{1}{b}(0 - b) = -1 \quad \Rightarrow \quad \ln b = 1 \quad \Rightarrow \quad b = e$$

CAS bekrefter: `Løs(ln(x) = 1, x)` → $\{x = e\}$.

**$B = (e,\ 1)$.**

### b

$C$ ligger på linja $y = x$, så $C = (c,\ c)$ for et tall $c > 0$.

Betingelsen $\angle ACB = 90°$ betyr at $\overrightarrow{CA} \perp \overrightarrow{CB}$.

$$\overrightarrow{CA} = A - C = (-c,\ -c), \qquad \overrightarrow{CB} = B - C = (e - c,\ 1 - c)$$

Prikkprodukt lik null:

$$(-c)(e-c) + (-c)(1-c) = 0 \quad \Rightarrow \quad -c\bigl[(e-c)+(1-c)\bigr] = 0 \quad \Rightarrow \quad c(e + 1 - 2c) = 0$$

$c = 0$ gir punktet $A$, så

$$c = \frac{e+1}{2}, \qquad C = \left(\frac{e+1}{2},\ \frac{e+1}{2}\right)$$

CAS bekrefter koordinatene til $C$ (se linje 5 i utklippet).

Siden $\angle ACB = 90°$ er arealet av trekanten

$$T = \frac{1}{2} \cdot |AC| \cdot |CB|$$

Vi beregner sidelengdene:

$$|AC| = \sqrt{c^2 + c^2} = c\sqrt{2} = \frac{(e+1)\sqrt{2}}{2}$$

$$e - c = e - \frac{e+1}{2} = \frac{e-1}{2}, \qquad 1 - c = 1 - \frac{e+1}{2} = \frac{1-e}{2} = -\frac{e-1}{2}$$

$$|CB| = \sqrt{\left(\frac{e-1}{2}\right)^2 + \left(\frac{e-1}{2}\right)^2} = \frac{(e-1)\sqrt{2}}{2}$$

$$T = \frac{1}{2} \cdot \frac{(e+1)\sqrt{2}}{2} \cdot \frac{(e-1)\sqrt{2}}{2} = \frac{1}{2} \cdot \frac{(e+1)(e-1) \cdot 2}{4} = \frac{e^2-1}{4}$$

CAS bekrefter: `Forenkle((e+1)/2 · (e-1)/2)` → $\tfrac{1}{4}e^2 - \tfrac{1}{4}$ (se linje 6).

**Arealet av trekant $ABC$ er $\dfrac{e^2-1}{4} \approx 1{,}60$.**
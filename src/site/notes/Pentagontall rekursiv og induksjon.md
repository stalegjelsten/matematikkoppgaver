---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/pentagontall-rekursiv-og-induksjon/","dg-publish":true,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-30","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["figurtall","rekursiv sammenheng","programmering","bevis"],"title":"Pentagontall rekursiv og induksjon","todo":[],"permalink":"/pentagontall-rekursiv-og-induksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-30","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["figurtall","rekursiv sammenheng","programmering","bevis"],"title":"Pentagontall rekursiv og induksjon","todo":[]}}
---


# Pentagontall rekursiv og induksjon

Hver figur nedenfor består av kuler plassert på pentagoner. Antall kuler på hver av ytterkantene øker med én sammenlignet med antall kuler på ytterkanten i figuren før. La $P_n$ være antall kuler i figur $n$.

De fem første figurtallene er 1, 6, 16, 31 og 51.

![Pentagonfigurer 1–4](/img/user/_resources/r2-h23-2-2.jpeg){width=80%}

>[!oppgave]
>a) Beskriv en rekursiv sammenheng mellom $P_n$ og $P_{n-1}$.
>b) Lag et program som regner ut $P_{100}$ ved å bruke den rekursive sammenhengen du fant i oppgave a).
>c) Bestem en eksplisitt formel for $P_n$, og vis at formelen stemmer ved å gjennomføre et induksjonsbevis.

## Fasit

a) $P_1 = 1$, $P_n = P_{n-1} + 5(n-1)$ for $n \geq 2$

b) $\underline{\underline{P_{100} = 24751}}$

c) $\underline{\underline{P_n = \dfrac{5n^2 - 5n + 2}{2}}}$

## Løsningsforslag

### a

Vi observerer differansene mellom påfølgende pentagontall:

$$P_2 - P_1 = 6 - 1 = 5 = 5 \cdot 1$$
$$P_3 - P_2 = 16 - 6 = 10 = 5 \cdot 2$$
$$P_4 - P_3 = 31 - 16 = 15 = 5 \cdot 3$$
$$P_5 - P_4 = 51 - 31 = 20 = 5 \cdot 4$$

Mønsteret er at $P_n - P_{n-1} = 5(n-1)$, altså legger man til $5(n-1)$ kuler for å gå fra figur $n-1$ til figur $n$.

**Rekursiv sammenheng:**

$$\begin{cases} P_1 = 1 \\ P_n = P_{n-1} + 5(n-1) & \text{for } n \geq 2 \end{cases}$$

### b

Vi bruker den rekursive sammenhengen fra a) direkte i et program:

```python
P = 1
for n in range(2, 101):
    P = P + 5*(n-1)
print(P)
```

Programmet gir **$\underline{\underline{P_{100} = 24751}}$**.

### c

Vi bruker teleskopsummering. Fra den rekursive sammenhengen får vi:

$$P_n = P_1 + \sum_{k=2}^{n} 5(k-1) = 1 + 5 \sum_{j=1}^{n-1} j = 1 + 5 \cdot \frac{(n-1)n}{2}$$

$$P_n = 1 + \frac{5n(n-1)}{2} = \frac{2 + 5n^2 - 5n}{2} = \frac{5n^2 - 5n + 2}{2}$$

**Eksplisitt formel:** $\underline{\underline{P_n = \dfrac{5n^2 - 5n + 2}{2}}}$

**Kontroll:** $P_5 = \dfrac{5 \cdot 25 - 25 + 2}{2} = \dfrac{102}{2} = 51$ ✓

**Induksjonsbevis**

Vi skal bevise at $P_n = \dfrac{5n^2 - 5n + 2}{2}$ for alle $n \geq 1$.

**Grunntrinn** ($n = 1$):

$$\frac{5 \cdot 1^2 - 5 \cdot 1 + 2}{2} = \frac{5 - 5 + 2}{2} = \frac{2}{2} = 1 = P_1 \checkmark$$

**Induksjonssteg:** Anta at påstanden holder for $n = k$, det vil si at

$$P_k = \frac{5k^2 - 5k + 2}{2}$$

Vi skal vise at den da også holder for $n = k+1$, altså at $P_{k+1} = \dfrac{5(k+1)^2 - 5(k+1) + 2}{2}$.

Fra den rekursive sammenhengen i a) har vi $P_{k+1} = P_k + 5k$. Vi setter inn induksjonshypotesen:

$$P_{k+1} = \frac{5k^2 - 5k + 2}{2} + 5k = \frac{5k^2 - 5k + 2 + 10k}{2} = \frac{5k^2 + 5k + 2}{2}$$

Vi sjekker at dette stemmer overens med formelen for $n = k+1$:

$$\frac{5(k+1)^2 - 5(k+1) + 2}{2} = \frac{5(k^2 + 2k + 1) - 5k - 5 + 2}{2} = \frac{5k^2 + 10k + 5 - 5k - 5 + 2}{2} = \frac{5k^2 + 5k + 2}{2}$$

De to uttrykkene er like, så induksjonssteget er vist. ∎

Ved induksjonsprinsippet gjelder dermed $P_n = \dfrac{5n^2 - 5n + 2}{2}$ for alle $n \geq 1$.
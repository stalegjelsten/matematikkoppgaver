---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["trigonometri","areal","arealsetningen","cosinussetningen"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":2}],"poeng":null,"title":"Areal av firekantet figur","status":0,"source":null,"todo":null,"dg-permalink":"/areal-av-firekantet-figur/","lf-source-claude":true,"permalink":"/areal-av-firekantet-figur/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["trigonometri","areal","arealsetningen","cosinussetningen"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":2}],"poeng":null,"title":"Areal av firekantet figur","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Areal av firekantet figur

![Firekantet figur ABCD med mål](/img/user/_resources/1t-h23-2-2.jpeg){width=60%}

I denne oppgaven skal du vise at du kan bruke trigonometri til å bestemme arealet av figuren ovenfor.

>[!oppgave]
>Bestem arealet. Husk å gjøre rede for hvilke trigonometriske sammenhenger du bruker.

## Fasit

$\approx 38{,}6$

## Løsningsforslag

Vi deler firkanten ABCD i to trekanter ved å trekke diagonalen $BD$.

**Trekant ABD:** Vi kjenner $BD = 12$, $\angle A = 125°$ og $\angle ABD = 35°$.

Vinkelsummen gir den siste vinkelen:

$$\angle ADB = 180° - 125° - 35° = 20°$$

Vi bruker **sinussetningen** til å finne $AB$:

$$\frac{AB}{\sin(\angle ADB)} = \frac{BD}{\sin(\angle A)} \quad \Rightarrow \quad AB = \frac{12 \cdot \sin 20°}{\sin 125°}$$

Deretter bruker vi **arealsetningen** for trekant ABD:

$$A_{\triangle ABD} = \frac{1}{2} \cdot AB \cdot BD \cdot \sin(\angle ABD) = \frac{1}{2} \cdot AB \cdot 12 \cdot \sin 35°$$

**Trekant BCD:** Vi kjenner $BC = 6$, $DC = 8$ og $BD = 12$.

Vi bruker **cosinussetningen** til å finne $\angle BCD$:

$$\cos(\angle BCD) = \frac{BC^2 + DC^2 - BD^2}{2 \cdot BC \cdot DC} = \frac{36 + 64 - 144}{96}$$

Deretter bruker vi **arealsetningen** for trekant BCD:

$$A_{\triangle BCD} = \frac{1}{2} \cdot BC \cdot DC \cdot \sin(\angle BCD) = \frac{1}{2} \cdot 6 \cdot 8 \cdot \sin(\angle BCD)$$

Vi beregner alt i CAS, se linje 1–6 i utklippet:

![GeoGebra CAS: areal av firkant ABCD](/img/user/_resources/1t-h23-2-2-cas.png){width=50%}

Fra linje 6 leser vi av at det totale arealet er

$$A_{ABCD} = A_{\triangle ABD} + A_{\triangle BCD} \approx 17{,}2 + 21{,}3 = 38{,}6$$

**Arealet av figuren er $\underline{\underline{\approx 38{,}6}}$.**

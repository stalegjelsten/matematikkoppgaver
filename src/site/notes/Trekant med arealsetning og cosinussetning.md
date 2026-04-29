---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/trekant-med-arealsetning-og-cosinussetning/","dg-publish":true,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":3}],"poeng":4,"source":null,"status":0,"tags":["oppgave"],"temaer":["arealsetningen","cosinussetningen","trigonometri"],"title":"Trekant med arealsetning og cosinussetning","lf-source-claude":true,"todo":[],"permalink":"/trekant-med-arealsetning-og-cosinussetning/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":3}],"poeng":4,"source":null,"status":0,"tags":["oppgave"],"temaer":["arealsetningen","cosinussetningen","trigonometri"],"title":"Trekant med arealsetning og cosinussetning","lf-source-claude":true,"todo":[]}}
---


# Trekant med arealsetning og cosinussetning

Du får vite følgende om en trekant $ABC$

- $AB$ er 8
- $\angle A = 120\degree$
- Arealet av trekanten er $4\sqrt{3}$

>[!oppgave]
>Bestem lengdene av sidene $AC$ og $BC$ eksakt.

## Fasit

$AC = \underline{\underline{2}}$, $BC = \underline{\underline{2\sqrt{21}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å løse oppgaven eksakt.

![GeoGebra CAS: arealsetning og cosinussetning](/img/user/_resources/1t-v24-2-3.png)

**Finn AC med arealsetningen:**

Arealsetningen gir

$$T = \frac{1}{2} \cdot AB \cdot AC \cdot \sin A$$

Vi setter inn kjente verdier og løser for $AC$:

$$\frac{1}{2} \cdot 8 \cdot AC \cdot \sin(120\degree) = 4\sqrt{3}$$

CAS gir $\textcolor{seagreen}{AC = 2}$.

**Finn BC med cosinussetningen:**

$$BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos A$$

$$BC^2 = 8^2 + 2^2 - 2 \cdot 8 \cdot 2 \cdot \cos(120\degree) = 64 + 4 - 32 \cdot \left(-\frac{1}{2}\right) = 68 + 16 = 84$$

$$BC = \sqrt{84} = \sqrt{4 \cdot 21} = \textcolor{seagreen}{2\sqrt{21}}$$

CAS bekrefter $\textcolor{seagreen}{BC = 2\sqrt{21}}$.

**Svar:** $\underline{\underline{AC = 2}}$ og $\underline{\underline{BC = 2\sqrt{21}}}$
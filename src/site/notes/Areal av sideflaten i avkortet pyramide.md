---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/areal-av-sideflaten-i-avkortet-pyramide/","dg-publish":true,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":null,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","areal","geometri"],"title":"Areal av sideflaten i avkortet pyramide","todo":[],"permalink":"/areal-av-sideflaten-i-avkortet-pyramide/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":null,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","areal","geometri"],"title":"Areal av sideflaten i avkortet pyramide","todo":[]}}
---


# Areal av sideflaten i avkortet pyramide

<!-- two-column start left-width=55% -->
Figuren viser en rett avkortet pyramide med hjørner i punktene $O(0,0,0)$, $A(4,0,0)$, $B(4,4,0)$, $C(0,4,0)$, $D(1,1,3)$, $E(3,1,3)$, $F(3,3,3)$ og $G(1,3,3)$.

>[!oppgave]
>Bruk vektorregning til å bestemme arealet av sideflaten $BCGF$.
---
![Avkortet pyramide](/img/user/_resources/r2-h23-1-6.jpeg){width=100%}
<!-- two-column stop -->

## Fasit

$\underline{\underline{3\sqrt{10} \approx 9{,}49}}$

## Løsningsforslag

Vi deler trapeset $BCGF$ i to trekanter ved diagonalen $BG$: trekant $BCG$ og trekant $BFG$.

**Trekant $BCG$**

Vi finner vektorene fra $B(4,4,0)$:

$$\overrightarrow{BC} = C - B = (0-4,\; 4-4,\; 0-0) = (-4, 0, 0)$$

$$\overrightarrow{BG} = G - B = (1-4,\; 3-4,\; 3-0) = (-3, -1, 3)$$

Kryssprodukt:

$$\overrightarrow{BC} \times \overrightarrow{BG} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -4 & 0 & 0 \\ -3 & -1 & 3 \end{vmatrix}$$

$$= \bigl(0 \cdot 3 - 0 \cdot (-1),\; 0 \cdot (-3) - (-4) \cdot 3,\; (-4) \cdot (-1) - 0 \cdot (-3)\bigr) = (0, 12, 4)$$

$$|\overrightarrow{BC} \times \overrightarrow{BG}| = \sqrt{0^2 + 12^2 + 4^2} = \sqrt{160} = 4\sqrt{10}$$

$$T_{BCG} = \frac{4\sqrt{10}}{2} = 2\sqrt{10}$$

**Trekant $BFG$**

Vi finner vektoren fra $B(4,4,0)$ til $F(3,3,3)$:

$$\overrightarrow{BF} = F - B = (3-4,\; 3-4,\; 3-0) = (-1, -1, 3)$$

Kryssprodukt med $\overrightarrow{BG} = (-3, -1, 3)$:

$$\overrightarrow{BG} \times \overrightarrow{BF} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -3 & -1 & 3 \\ -1 & -1 & 3 \end{vmatrix}$$

$$= \bigl((-1) \cdot 3 - 3 \cdot (-1),\; 3 \cdot (-1) - (-3) \cdot 3,\; (-3) \cdot (-1) - (-1) \cdot (-1)\bigr) = (0, 6, 2)$$

$$|\overrightarrow{BG} \times \overrightarrow{BF}| = \sqrt{0^2 + 6^2 + 2^2} = \sqrt{40} = 2\sqrt{10}$$

$$T_{BFG} = \frac{2\sqrt{10}}{2} = \sqrt{10}$$

**Samlet areal**

$$T_{BCGF} = T_{BCG} + T_{BFG} = 2\sqrt{10} + \sqrt{10} = \mathbf{\underline{\underline{3\sqrt{10} \approx 9{,}49}}}$$
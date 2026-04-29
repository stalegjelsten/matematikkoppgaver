---
{"aliases":[],"date":"2024-11-14","del":1,"dg-permalink":"/koordinatvektorer-lengde-og-ortogonalitet/","dg-publish":true,"eksamen":"h24","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["vektorer"],"title":"Koordinatvektorer, lengde og ortogonalitet","todo":[],"permalink":"/koordinatvektorer-lengde-og-ortogonalitet/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":1,"eksamen":"h24","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":5}],"poeng":4,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["vektorer"],"title":"Koordinatvektorer, lengde og ortogonalitet","todo":[]}}
---


# Koordinatvektorer, lengde og ortogonalitet

Fire vektorer er gitt ved $\vec{u} = [3, -2]$, $\vec{v} = [4, -6]$, $\vec{w} = [2, -3]$ og $\vec{p} = [8, 12]$

>[!oppgave]
>a) Avgjør om noen av vektorene er
>- like lange
>- ortogonale

En vektor er gitt ved $\vec{q} = [2a - 3,\ 1 + 3b]$

>[!oppgave]
>b) Bestem $a$ og $b$ slik at $\vec{u} + 2\vec{q} = [7, 5]$

## Fasit

a) $\vec{u}$ og $\vec{w}$ er like lange. $\vec{u}$ og $\vec{p}$ er ortogonale.
b) $a = \dfrac{5}{2}$, $\quad b = \dfrac{5}{6}$

## Løsningsforslag

### a

Vi beregner lengden av hver vektor:

$$|\vec{u}| = \sqrt{3^2 + (-2)^2} = \sqrt{9 + 4} = \sqrt{13}$$

$$|\vec{v}| = \sqrt{4^2 + (-6)^2} = \sqrt{16 + 36} = \sqrt{52} = 2\sqrt{13}$$

$$|\vec{w}| = \sqrt{2^2 + (-3)^2} = \sqrt{4 + 9} = \sqrt{13}$$

$$|\vec{p}| = \sqrt{8^2 + 12^2} = \sqrt{64 + 144} = \sqrt{208} = 4\sqrt{13}$$

$|\vec{u}| = |\vec{w}| = \sqrt{13}$, så $\underline{\underline{\vec{u} \text{ og } \vec{w} \text{ er like lange}}}$.

For å avgjøre ortogonalitet beregner vi skalarproduktet for alle par. To vektorer er ortogonale hvis og bare hvis skalarproduktet er null.

$$\vec{u} \cdot \vec{v} = 3 \cdot 4 + (-2) \cdot (-6) = 12 + 12 = 24 \neq 0$$

$$\vec{u} \cdot \vec{w} = 3 \cdot 2 + (-2) \cdot (-3) = 6 + 6 = 12 \neq 0$$

$$\vec{u} \cdot \vec{p} = 3 \cdot 8 + (-2) \cdot 12 = 24 - 24 = 0$$

$$\vec{v} \cdot \vec{w} = 4 \cdot 2 + (-6) \cdot (-3) = 8 + 18 = 26 \neq 0$$

$$\vec{v} \cdot \vec{p} = 4 \cdot 8 + (-6) \cdot 12 = 32 - 72 = -40 \neq 0$$

$$\vec{w} \cdot \vec{p} = 2 \cdot 8 + (-3) \cdot 12 = 16 - 36 = -20 \neq 0$$

$\vec{u} \cdot \vec{p} = 0$, så $\underline{\underline{\vec{u} \text{ og } \vec{p} \text{ er ortogonale}}}$. Ingen andre par er ortogonale.

### b

Vi setter inn $\vec{u} = [3, -2]$ og $\vec{q} = [2a - 3,\ 1 + 3b]$:

$$\vec{u} + 2\vec{q} = [7, 5]$$

$$[3, -2] + 2[2a - 3,\ 1 + 3b] = [7, 5]$$

$$[3 + 4a - 6,\ -2 + 2 + 6b] = [7, 5]$$

$$[4a - 3,\ 6b] = [7, 5]$$

Dette gir likningssystemet:

$$\begin{aligned} 4a - 3 &= 7 \\ 6b &= 5 \end{aligned}$$

Fra første likning: $4a = 10$, altså $\underline{\underline{a = \dfrac{5}{2}}}$.

Fra andre likning: $\underline{\underline{b = \dfrac{5}{6}}}$.

---
{"aliases":[],"date":"2023-05-24","del":1,"dg-permalink":"/pyramide-med-fire-punkter-i-rommet/","dg-publish":true,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":3,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri","volum","areal"],"title":"Pyramide med fire punkter i rommet","todo":[],"permalink":"/pyramide-med-fire-punkter-i-rommet/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":1,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":3,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri","volum","areal"],"title":"Pyramide med fire punkter i rommet","todo":[]}}
---


# Pyramide med fire punkter i rommet

Punktene $A(0,0,0)$, $B(5,0,0)$, $C(4,2,0)$ og $T(0,0,5)$ danner en pyramide, slik figuren viser.

![Pyramide med punktene A, B, C og T](/img/user/_resources/r2-v23-1-3.jpeg){width=60%}

>[!oppgave]
>a) Regn ut volumet av pyramiden.
>b) Regn ut arealet av $\triangle BCT$.
>c) Bestem avstanden fra $A$ til planet som går gjennom $B$, $C$ og $T$.

## Fasit

a) $\underline{\underline{V = \dfrac{25}{3}}}$

b) $\underline{\underline{A = \dfrac{15}{2}}}$

c) $\underline{\underline{h = \dfrac{10}{3}}}$

## Løsningsforslag

Vi setter opp vektorene fra $A$:

$$\vec{AB} = (5, 0, 0), \quad \vec{AC} = (4, 2, 0), \quad \vec{AT} = (0, 0, 5)$$

### a

Volumet av en tetraeder (pyramide med tre kanter fra samme hjørne) er

$$V = \frac{1}{6} \left| \vec{AB} \cdot \left( \vec{AC} \times \vec{AT} \right) \right|$$

Vi beregner først kryssproduktert $\vec{AC} \times \vec{AT}$:

$$\vec{AC} \times \vec{AT} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 4 & 2 & 0 \\ 0 & 0 & 5 \end{vmatrix} = (2 \cdot 5 - 0 \cdot 0,\ 0 \cdot 0 - 4 \cdot 5,\ 4 \cdot 0 - 2 \cdot 0) = (10, -20, 0)$$

Deretter skalarproduktet:

$$\vec{AB} \cdot (10, -20, 0) = 5 \cdot 10 + 0 \cdot (-20) + 0 \cdot 0 = 50$$

Volumet blir:

$$V = \frac{1}{6} \cdot |50| = \frac{50}{6} = \mathbf{\underline{\underline{\dfrac{25}{3}}}}$$

### b

Vi setter opp vektorene fra $B$:

$$\vec{BC} = C - B = (4-5,\ 2-0,\ 0-0) = (-1, 2, 0)$$

$$\vec{BT} = T - B = (0-5,\ 0-0,\ 5-0) = (-5, 0, 5)$$

Kryssprodukt:

$$\vec{BC} \times \vec{BT} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -1 & 2 & 0 \\ -5 & 0 & 5 \end{vmatrix} = (2 \cdot 5 - 0 \cdot 0,\ 0 \cdot (-5) - (-1) \cdot 5,\ (-1) \cdot 0 - 2 \cdot (-5)) = (10, 5, 10)$$

Lengden:

$$|\vec{BC} \times \vec{BT}| = \sqrt{10^2 + 5^2 + 10^2} = \sqrt{100 + 25 + 100} = \sqrt{225} = 15$$

Arealet av $\triangle BCT$ er halvparten av dette:

$$A = \frac{1}{2} \cdot 15 = \mathbf{\underline{\underline{\dfrac{15}{2}}}}$$

### c

Vi bruker sammenhengen mellom volumet, grunnflaten og høyden i en pyramide:

$$V = \frac{1}{3} \cdot A \cdot h$$

Her er $A = \dfrac{15}{2}$ arealet av grunnflaten $\triangle BCT$ og $h$ er avstanden fra $A$ til dette planet. Vi løser for $h$:

$$\frac{25}{3} = \frac{1}{3} \cdot \frac{15}{2} \cdot h$$

$$h = \frac{25/3}{1/3 \cdot 15/2} = \frac{25/3}{15/6} = \frac{25}{3} \cdot \frac{6}{15} = \frac{25 \cdot 6}{3 \cdot 15} = \frac{150}{45} = \mathbf{\underline{\underline{\dfrac{10}{3}}}}$$
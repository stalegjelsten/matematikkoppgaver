---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":4}],"poeng":8,"title":"Trekant og plan i rommet","status":0,"source":null,"lf-source-claude":true,"dg-permalink":"/trekant-og-plan-i-rommet/","permalink":"/trekant-og-plan-i-rommet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":4}],"poeng":8,"title":"Trekant og plan i rommet","status":0,"source":null,"lf-source-claude":true}}
---


# Trekant og plan i rommet

Vi har gitt punktene $A(1, 1, 0)$, $B(4, 1, 1)$ og $C(2, 0, -1)$.

>[!oppgave]
>a) Bestem arealet av trekanten $\triangle ABC$.
>b) Bestem avstanden fra punktet $C$ til linja gjennom $A$ og $B$.

$A$, $B$ og $C$ ligger i planet $\alpha$. Punktet $P$ har koordinatene $P(-2, 1, 4)$.

>[!oppgave]
>c) Lag en parameterframstilling for linja $\ell$ som går gjennom punktet $P$ og står vinkelrett på planet $\alpha$.

En rett linje $m$ går gjennom punktet $P$, er parallell med planet $\alpha$ og skjærer $z$-aksen i punktet $D$.

>[!oppgave]
>d) Bestem koordinatene til $D$.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-4\|Løsningsforslag R2 eksamen V2024#Oppgave 1-4]]

## Fasit

a) $\underline{\underline{\text{Areal} = \dfrac{\sqrt{26}}{2} \approx 2{,}55}}$

b) $\underline{\underline{d = \dfrac{\sqrt{65}}{5} \approx 1{,}61}}$

c) $\underline{\underline{\ell \colon (x, y, z) = (-2 + t,\ 1 + 4t,\ 4 - 3t)}}$

d) $\underline{\underline{D = \left(0,\ 0,\ \dfrac{10}{3}\right)}}$

## Løsningsforslag

### a

Vi finner vektorene $\overrightarrow{AB}$ og $\overrightarrow{AC}$:

$$\overrightarrow{AB} = B - A = (4-1,\ 1-1,\ 1-0) = (3, 0, 1)$$

$$\overrightarrow{AC} = C - A = (2-1,\ 0-1,\ -1-0) = (1, -1, -1)$$

Kryssprodukt:

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & 0 & 1 \\ 1 & -1 & -1 \end{vmatrix}$$

$$= \mathbf{i}(0\cdot(-1) - 1\cdot(-1)) - \mathbf{j}(3\cdot(-1) - 1\cdot 1) + \mathbf{k}(3\cdot(-1) - 0\cdot 1)$$

$$= \mathbf{i}(0+1) - \mathbf{j}(-3-1) + \mathbf{k}(-3-0) = (1, 4, -3)$$

Lengden av kryssproduktet:

$$|\overrightarrow{AB} \times \overrightarrow{AC}| = \sqrt{1^2 + 4^2 + (-3)^2} = \sqrt{1 + 16 + 9} = \sqrt{26}$$

Arealet av trekanten er halvparten av parallelogrammet utspent av $\overrightarrow{AB}$ og $\overrightarrow{AC}$:

$$\text{Areal} = \frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \frac{\sqrt{26}}{2} \approx \mathbf{2{,}55}$$

### b

Avstanden fra et punkt $C$ til linja gjennom $A$ og $B$ er:

$$d = \frac{|\overrightarrow{AB} \times \overrightarrow{AC}|}{|\overrightarrow{AB}|}$$

Vi beregner $|\overrightarrow{AB}|$:

$$|\overrightarrow{AB}| = \sqrt{3^2 + 0^2 + 1^2} = \sqrt{10}$$

Dermed:

$$d = \frac{\sqrt{26}}{\sqrt{10}} = \sqrt{\frac{26}{10}} = \frac{\sqrt{26}}{\sqrt{10}} \cdot \frac{\sqrt{10}}{\sqrt{10}} = \frac{\sqrt{260}}{10} = \frac{\sqrt{4 \cdot 65}}{10} = \frac{2\sqrt{65}}{10} = \frac{\sqrt{65}}{5} \approx \mathbf{1{,}61}$$

### c

Linja $\ell$ gjennom $P(-2, 1, 4)$ og vinkelrett på planet $\alpha$ har retningsvektor lik normalvektoren til $\alpha$.

Normalvektoren til $\alpha$ er $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = (1, 4, -3)$ (beregnet i oppgave a).

Parameterframstilling for $\ell$:

$$\ell \colon (x, y, z) = (-2, 1, 4) + t(1, 4, -3) = (-2 + t,\ 1 + 4t,\ 4 - 3t), \quad t \in \mathbb{R}$$

### d

Punkt $D$ ligger på $z$-aksen, så $D = (0, 0, d)$ for et tall $d$.

Linja $m$ gjennom $P(-2, 1, 4)$ og $D$ er parallell med planet $\alpha$. Det betyr at retningsvektoren $\overrightarrow{PD}$ er vinkelrett på normalvektoren $\mathbf{n} = (1, 4, -3)$.

Vi beregner $\overrightarrow{PD}$:

$$\overrightarrow{PD} = D - P = (0-(-2),\ 0-1,\ d-4) = (2, -1, d-4)$$

Betingelsen $\overrightarrow{PD} \perp \mathbf{n}$ gir $\overrightarrow{PD} \cdot \mathbf{n} = 0$:

$$1 \cdot 2 + 4 \cdot (-1) + (-3)(d-4) = 0$$

$$2 - 4 - 3d + 12 = 0$$

$$10 - 3d = 0$$

$$d = \frac{10}{3}$$

Dermed er $D = \left(0,\ 0,\ \dfrac{10}{3}\right)$.

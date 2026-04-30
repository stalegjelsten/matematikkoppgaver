---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/plan-normalvektor-og-avstand-til-punkt/","dg-publish":true,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Plan, normalvektor og avstand til punkt","todo":[],"permalink":"/plan-normalvektor-og-avstand-til-punkt/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Plan, normalvektor og avstand til punkt","todo":[]}}
---


# Plan, normalvektor og avstand til punkt

Et plan $\alpha$ er gitt ved likningen

$$x - 2y + 2z + 1 = 0$$

Vi har gitt punktet $A(4,\ 2,\ 2)$.

>[!oppgave]
>a) Bestem en parameterframstilling for linjen gjennom $A$ som står normalt på planet $\alpha$.
>b) Bestem avstanden fra $A$ til $\alpha$.

## Fasit

a) $(x, y, z) = (4 + t,\ 2 - 2t,\ 2 + 2t),\quad t \in \mathbb{R}$

b) $\underline{\underline{d = \dfrac{5}{3}}}$

## Løsningsforslag

Planet $\alpha$ er gitt ved $x - 2y + 2z + 1 = 0$, og vi leser av normalvektoren direkte fra koeffisientene:

$$\vec{n} = \begin{bmatrix} 1 \\ -2 \\ 2 \end{bmatrix}$$

Lengden av normalvektoren er

$$|\vec{n}| = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$$

### a

En linje normalt på planet $\alpha$ har retning $\vec{n}$. Linjen gjennom $A(4,\ 2,\ 2)$ med retning $\vec{n}$ kan skrives som

$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 4 \\ 2 \\ 2 \end{bmatrix} + t \begin{bmatrix} 1 \\ -2 \\ 2 \end{bmatrix}, \quad t \in \mathbb{R}$$

Det vil si

$$\mathbf{(x, y, z) = (4 + t,\ 2 - 2t,\ 2 + 2t), \quad t \in \mathbb{R}}$$

### b

Avstanden fra et punkt $A(x_0, y_0, z_0)$ til planet $ax + by + cz + d = 0$ er gitt ved formelen

$$D = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

Her er $A(4,\ 2,\ 2)$ og planet er $x - 2y + 2z + 1 = 0$, altså $a = 1$, $b = -2$, $c = 2$, $d = 1$.

Vi setter inn:

$$D = \frac{|1 \cdot 4 + (-2) \cdot 2 + 2 \cdot 2 + 1|}{3} = \frac{|4 - 4 + 4 + 1|}{3} = \frac{|5|}{3} = \mathbf{\underline{\underline{\dfrac{5}{3}}}}$$
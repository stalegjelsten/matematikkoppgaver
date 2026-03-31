---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":4}],"title":"Koordinater, linje og ortogonalitet","status":3,"source":null,"todo":null,"permalink":"/koordinater-linje-og-ortogonalitet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["vektorer","geometri"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":4}],"title":"Koordinater, linje og ortogonalitet","status":3,"source":null,"todo":null,"permalink":"/koordinater-linje-og-ortogonalitet/"}}
---


# Koordinater, linje og ortogonalitet

I et koordinatsystem har vi gitt punktene $A(-2, 3)$ og $B(3, 2)$.

>[!oppgave]
>a) Bestem lengden av linjestykket $AB$.

Linja gjennom $A$ og $B$ skjærer $x$-aksen i punktet $C$.

>[!oppgave]
>b) Bestem koordinatene til $C$.

Et punkt $D$ er gitt ved $D(2, t)$ der $t \in \mathbb{R}$.

>[!oppgave]
>c) Bestem $t$ slik at $\angle ABD$ blir $90\degree$.

## Fasit

a) $|AB| = \sqrt{26}$
b) $C = (13,\; 0)$
c) $t = -3$

## Løsningsforslag

### 1-4a

$$
|AB| = \sqrt{(3-(-2))^2 + (2-3)^2} = \sqrt{25 + 1} = \sqrt{26}
$$

**$\underline{\underline{|AB| = \sqrt{26}}}$**

### 1-4b

Stigningstallet til linjen gjennom $A(-2,3)$ og $B(3,2)$ er

$$
m = \frac{2-3}{3-(-2)} = -\frac{1}{5}
$$

Linjens ligning: $y - 3 = -\dfrac{1}{5}(x + 2)$, det vil si $y = \dfrac{13}{5} - \dfrac{x}{5}$.

For $y = 0$: $x = 13$.

**$\underline{\underline{C = (13,\; 0)}}$**

### 1-4c

Vinkelen $\angle ABD = 90°$ betyr at $\vec{BA} \perp \vec{BD}$, altså $\vec{BA} \cdot \vec{BD} = 0$.

$$
\vec{BA} = (-5,\; 1) \qquad \vec{BD} = (2-3,\; t-2) = (-1,\; t-2)
$$

$$
\vec{BA} \cdot \vec{BD} = (-5)(-1) + 1 \cdot (t-2) = 5 + t - 2 = 3 + t = 0
\implies t = -3
$$

**$\underline{\underline{t = -3}}$**

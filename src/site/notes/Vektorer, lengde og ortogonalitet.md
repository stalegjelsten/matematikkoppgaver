---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["vektorer","trigonometri"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":5}],"title":"Vektorer, lengde og ortogonalitet","status":3,"source":null,"todo":null,"dg-permalink":"/vektorer-lengde-og-ortogonalitet/","permalink":"/vektorer-lengde-og-ortogonalitet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["vektorer","trigonometri"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":5}],"title":"Vektorer, lengde og ortogonalitet","status":3,"source":null,"todo":null}}
---


# Vektorer, lengde og ortogonalitet

For $\vec{a}$ og $\vec{b}$ er $|\vec{a}| = 4$, $|\vec{b}| = 2\sqrt{3}$ og vinkelen mellom $\vec{a}$ og $\vec{b}$ er $30\degree$.

Det er gitt at $\vec{p} = \vec{a} + \vec{b}$.

>[!oppgave]
>a) Regn ut den eksakte lengden av $\vec{p}$.

Det er gitt at $\vec{q} = t \cdot \vec{a} + \vec{b}$, der $t \in \mathbb{R}$.

>[!oppgave]
>b) Bestem $t$ slik at $\vec{p}$ og $\vec{q}$ blir ortogonale.

## Fasit

a) $|\vec{p}| = 2\sqrt{13}$
b) $t = -\dfrac{6}{7}$

## Løsningsforslag

### 2-5a

Vi beregner $|\vec{p}|^2 = |\vec{a} + \vec{b}|^2$:

$$
|\vec{p}|^2 = |\vec{a}|^2 + 2\,\vec{a} \cdot \vec{b} + |\vec{b}|^2
$$

Prikkproduktet er

$$
\vec{a} \cdot \vec{b} = |\vec{a}|\,|\vec{b}|\cos 30° = 4 \cdot 2\sqrt{3} \cdot \frac{\sqrt{3}}{2} = 4 \cdot 3 = 12
$$

Dermed

$$
|\vec{p}|^2 = 16 + 2 \cdot 12 + 12 = 52
$$

**$\underline{\underline{|\vec{p}| = \sqrt{52} = 2\sqrt{13}}}$**

### 2-5b

$\vec{p} \perp \vec{q}$ krever $\vec{p} \cdot \vec{q} = 0$:

$$
(\vec{a} + \vec{b}) \cdot (t\vec{a} + \vec{b})
= t|\vec{a}|^2 + \vec{a} \cdot \vec{b} + t\,\vec{a} \cdot \vec{b} + |\vec{b}|^2
= 16t + 12 + 12t + 12 = 28t + 24
$$

$$
28t + 24 = 0 \implies t = -\frac{24}{28} = -\frac{6}{7}
$$

**$\underline{\underline{t = -\dfrac{6}{7}}}$**

---

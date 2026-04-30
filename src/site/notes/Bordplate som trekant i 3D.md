---
{"aliases":[],"date":"2025-05-14","del":1,"dg-permalink":"/bordplate-som-trekant-i-3-d/","dg-publish":true,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":5}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["vektorer","geometri","areal"],"title":"Bordplate som trekant i 3D","todo":[],"lf-source-claude":true,"permalink":"/bordplate-som-trekant-i-3-d/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-14","del":1,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":5}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["vektorer","geometri","areal"],"title":"Bordplate som trekant i 3D","todo":[],"lf-source-claude":true}}
---


# Bordplate som trekant i 3D

Et bord har en bordplate med en form som en trekant $ABC$. Dersom vi tenker oss bordet plassert i et tredimensjonalt koordinatsystem der enhetene langs aksene er desimeter, vil hjørnene ha koordinatene $A(0, 0, 0)$, $B(2, 3, 0)$ og $C(1, 4, 1)$.

>[!oppgave]
>a) Er noen av vinklene i trekanten større enn $90°$? Husk å begrunne svaret.
>b) Bestem arealet av bordplaten.

En plante på veggen har en gren som vokser slik at den følger en rett linje gjennom punktene $D(3, 7, 3)$ og $E(2, 3, 2)$.

>[!oppgave]
>c) Vis at grenen aldri vil treffe bordplaten.

## Fasit

a) **Ja, vinkelen ved $B$ er større enn $90°$** (ca. $99{,}2°$)

b) $\underline{\underline{\text{Areal} = \dfrac{\sqrt{38}}{2} \approx 3{,}08 \, \mathrm{dm}^2}}$

c) Retningsvektoren til grenen er parallell med planet — linja og planet har ingen felles punkt.

## Løsningsforslag

### a

Vi undersøker om noen av vinklene er større enn $90°$ ved å beregne skalarproduktet mellom sidene som møtes i hvert hjørne. En vinkel er stump dersom og bare dersom skalarproduktet er negativt.

Vi setter opp vektorene mellom hjørnene:

$$\overrightarrow{AB} = B - A = (2, 3, 0)$$

$$\overrightarrow{AC} = C - A = (1, 4, 1)$$

$$\overrightarrow{BA} = A - B = (-2, -3, 0)$$

$$\overrightarrow{BC} = C - B = (-1, 1, 1)$$

$$\overrightarrow{CA} = A - C = (-1, -4, -1)$$

$$\overrightarrow{CB} = B - C = (1, -1, -1)$$

**Vinkel ved $A$:**

$$\overrightarrow{AB} \cdot \overrightarrow{AC} = 2 \cdot 1 + 3 \cdot 4 + 0 \cdot 1 = 2 + 12 + 0 = 14 > 0$$

Vinkelen ved $A$ er akutt.

**Vinkel ved $B$:**

$$\overrightarrow{BA} \cdot \overrightarrow{BC} = (-2)(-1) + (-3)(1) + 0 \cdot 1 = 2 - 3 + 0 = -1 < 0$$

**Vinkelen ved $B$ er stump**, altså større enn $90°$.

**Vinkel ved $C$:**

$$\overrightarrow{CA} \cdot \overrightarrow{CB} = (-1)(1) + (-4)(-1) + (-1)(-1) = -1 + 4 + 1 = 4 > 0$$

Vinkelen ved $C$ er akutt.

Vi kan beregne den eksakte vinkelen ved $B$:

$$\cos B = \frac{\overrightarrow{BA} \cdot \overrightarrow{BC}}{|\overrightarrow{BA}| \cdot |\overrightarrow{BC}|} = \frac{-1}{\sqrt{13} \cdot \sqrt{3}} = \frac{-1}{\sqrt{39}} \approx -0{,}160$$

$$B \approx 99{,}2°$$

**Konklusjon:** Vinkelen ved $B$ er større enn $90°$.

### b

Arealet av trekant $ABC$ beregner vi med kryssprodukt-formelen:

$$\text{Areal} = \frac{1}{2} |\overrightarrow{AB} \times \overrightarrow{AC}|$$

Vi beregner kryssproduktet:

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 3 & 0 \\ 1 & 4 & 1 \end{vmatrix}$$

$$= \mathbf{i}(3 \cdot 1 - 0 \cdot 4) - \mathbf{j}(2 \cdot 1 - 0 \cdot 1) + \mathbf{k}(2 \cdot 4 - 3 \cdot 1)$$

$$= \mathbf{i}(3) - \mathbf{j}(2) + \mathbf{k}(5) = (3, -2, 5)$$

Lengden av kryssproduktet:

$$|\overrightarrow{AB} \times \overrightarrow{AC}| = \sqrt{3^2 + (-2)^2 + 5^2} = \sqrt{9 + 4 + 25} = \sqrt{38}$$

Arealet blir:

$$\text{Areal} = \frac{\sqrt{38}}{2} \approx 3{,}08 \, \mathrm{dm}^2$$

### c

Vi skal vise at grenen (linja gjennom $D(3,7,3)$ og $E(2,3,2)$) aldri treffer bordplaten (planet gjennom $A$, $B$ og $C$).

**Steg 1: Finn planlikningen for bordplaten.**

Fra deloppgave b) vet vi at $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = (3, -2, 5)$ er normalvektor til planet. Siden $A(0,0,0)$ ligger i planet, blir planlikningen:

$$3x - 2y + 5z = 0$$

**Steg 2: Parametriser grenen.**

Retningsvektoren til grenen er:

$$\overrightarrow{DE} = E - D = (2-3,\, 3-7,\, 2-3) = (-1, -4, -1)$$

Et punkt på grenen: $(x, y, z) = (3 - s,\, 7 - 4s,\, 3 - s)$ for $s \in \mathbb{R}$.

**Steg 3: Sett inn i planlikningen.**

$$3(3 - s) - 2(7 - 4s) + 5(3 - s)$$

$$= 9 - 3s - 14 + 8s + 15 - 5s$$

$$= (9 - 14 + 15) + (-3 + 8 - 5)s$$

$$= 10 + 0 \cdot s = 10$$

Siden koeffisienten foran $s$ er $0$, er uttrykket konstant lik $10$ for alle $s$. Ligningen $10 = 0$ har ingen løsning.

Det betyr at $\overrightarrow{DE} \cdot \mathbf{n} = (-1)(3) + (-4)(-2) + (-1)(5) = -3 + 8 - 5 = 0$, altså er retningsvektoren til grenen vinkelrett på normalvektoren til planet. Dermed er grenen **parallell med bordplaten**.

Siden $D$ ikke ligger i planet ($3 \cdot 3 - 2 \cdot 7 + 5 \cdot 3 = 9 - 14 + 15 = 10 \neq 0$), ligger grenen i sin helhet utenfor planet.

Avstanden fra et vilkårlig punkt på grenen til bordplaten er konstant:

$$d = \frac{|10|}{\sqrt{38}} = \frac{10}{\sqrt{38}} \approx 1{,}62 \, \mathrm{dm}$$

**Konklusjon:** Grenen er parallell med bordplaten og aldri treffer den.
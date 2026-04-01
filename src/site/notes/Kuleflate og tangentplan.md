---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":7}],"title":"Kuleflate og tangentplan","status":3,"source":null,"todo":null,"permalink":"/kuleflate-og-tangentplan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":7}],"title":"Kuleflate og tangentplan","status":3,"source":null,"todo":null,"permalink":"/kuleflate-og-tangentplan/"}}
---


# Kuleflate og tangentplan

En likning for en kuleflate $S$ er gitt ved

$$x^2 + y^2 + z^2 - 4x + 2z = 4$$

>[!oppgave]
>a) Bestem sentrum og radius til kuleflaten $S$.

En annen kuleflate $K$ har sentrum i $(1, -1, 3)$ og radius $2$.

Et plan $\alpha$ tangerer kuleflaten $K$ i punktet $P(3, -1, 3)$.

>[!oppgave]
>b) Bestem en likning for plan $\alpha$.

Et annet plan $\beta$ er gitt ved

$$3x + y - 2z + 1 = 0$$

>[!oppgave]
>c) Avgjør om plan $\beta$ vil skjære gjennom kuleflaten $K$.

## Fasit

a) Sentrum $(2,0,-1)$, radius $3$
b) $x = 3$
c) Ja, planet skjærer kuleflaten

## Løsningsforslag

### 1-7a

Vi fullfører kvadratene i ligningen $x^2 + y^2 + z^2 - 4x + 2z = 4$:

$$
\begin{aligned}
(x-2)^2 - 4 + y^2 + (z+1)^2 - 1 &= 4 \\
(x-2)^2 + y^2 + (z+1)^2 &= 9
\end{aligned}
$$

**Sentrum er $\underline{\underline{(2,\, 0,\, -1)}}$ og radius er $\underline{\underline{r = 3}}$.**

### 1-7b

Kule $K$ har sentrum $M(1, -1, 3)$ og radius $2$. Vi sjekker at $P(3,-1,3)$ ligger på kula:

$$|MP| = \sqrt{(3-1)^2 + 0^2 + 0^2} = 2 \checkmark$$

Normalvektoren til tangentplanet er $\overrightarrow{MP} = (2, 0, 0)$.

Planet gjennom $P(3,-1,3)$ med normalvektor $(2,0,0)$:

$$2(x-3) = 0 \implies x = 3$$

**En likning for plan $\alpha$ er $\underline{\underline{x = 3}}$.**

### 1-7c

Avstand fra sentrum $M(1,-1,3)$ til planet $\beta\colon 3x + y - 2z + 1 = 0$:

$$d = \frac{|3\cdot1 + (-1) - 2\cdot3 + 1|}{\sqrt{3^2 + 1^2 + (-2)^2}} = \frac{|3 - 1 - 6 + 1|}{\sqrt{14}} = \frac{3}{\sqrt{14}} \approx 0{,}80$$

Siden $d \approx 0{,}80 < 2 = r$, vil planet $\beta$ skjære gjennom kuleflaten $K$.

**Planet $\beta$ skjærer gjennom kuleflaten $\underline{\underline{K}}$.**

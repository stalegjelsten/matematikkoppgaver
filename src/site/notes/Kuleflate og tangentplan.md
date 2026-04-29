---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":7,"poeng":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":7}],"title":"Kuleflate og tangentplan","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Kuleflate via kvadratfullføring, tangentplan via normalvektor $\\overrightarrow{MP}$, og sjekke skjæring plan–kule via avstandsformelen.","deloppgaver":[{"deloppgave":"a","kategori":1,"beskrivelse":"Fullføre kvadratene i $x^2+y^2+z^2-4x+2z=4$ for å lese av sentrum og radius."},{"deloppgave":"b","beskrivelse":"Normalvektor $\\overrightarrow{MP}=(2,0,0)$ gir planlikning $x=3$ gjennom $P$."},{"deloppgave":"c","beskrivelse":"Avstand $d=3/\\sqrt{14}$ fra $M$ til $\\beta$ mindre enn $r=2$, så $\\beta$ skjærer $K$."}],"source":null,"todo":null,"dg-permalink":"/kuleflate-og-tangentplan/","permalink":"/kuleflate-og-tangentplan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":7,"poeng":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":7}],"title":"Kuleflate og tangentplan","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Kuleflate via kvadratfullføring, tangentplan via normalvektor $\\overrightarrow{MP}$, og sjekke skjæring plan–kule via avstandsformelen.","deloppgaver":[{"deloppgave":"a","kategori":1,"beskrivelse":"Fullføre kvadratene i $x^2+y^2+z^2-4x+2z=4$ for å lese av sentrum og radius."},{"deloppgave":"b","beskrivelse":"Normalvektor $\\overrightarrow{MP}=(2,0,0)$ gir planlikning $x=3$ gjennom $P$."},{"deloppgave":"c","beskrivelse":"Avstand $d=3/\\sqrt{14}$ fra $M$ til $\\beta$ mindre enn $r=2$, så $\\beta$ skjærer $K$."}],"source":null,"todo":null}}
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

### a

Vi fullfører kvadratene i ligningen $x^2 + y^2 + z^2 - 4x + 2z = 4$:

$$
\begin{aligned}
(x-2)^2 - 4 + y^2 + (z+1)^2 - 1 &= 4 \\
(x-2)^2 + y^2 + (z+1)^2 &= 9
\end{aligned}
$$

**Sentrum er $\underline{\underline{(2,\, 0,\, -1)}}$ og radius er $\underline{\underline{r = 3}}$.**

### b

Kule $K$ har sentrum $M(1, -1, 3)$ og radius $2$. Vi sjekker at $P(3,-1,3)$ ligger på kula:

$$|MP| = \sqrt{(3-1)^2 + 0^2 + 0^2} = 2 \checkmark$$

Normalvektoren til tangentplanet er $\overrightarrow{MP} = (2, 0, 0)$.

Planet gjennom $P(3,-1,3)$ med normalvektor $(2,0,0)$:

$$2(x-3) = 0 \implies x = 3$$

**En likning for plan $\alpha$ er $\underline{\underline{x = 3}}$.**

### c

Avstand fra sentrum $M(1,-1,3)$ til planet $\beta\colon 3x + y - 2z + 1 = 0$:

$$d = \frac{|3\cdot1 + (-1) - 2\cdot3 + 1|}{\sqrt{3^2 + 1^2 + (-2)^2}} = \frac{|3 - 1 - 6 + 1|}{\sqrt{14}} = \frac{3}{\sqrt{14}} \approx 0{,}80$$

Siden $d \approx 0{,}80 < 2 = r$, vil planet $\beta$ skjære gjennom kuleflaten $K$.

**Planet $\beta$ skjærer gjennom kuleflaten $\underline{\underline{K}}$.**

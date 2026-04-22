---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["rekker","geometrisk vekst","aritmetisk rekke","konvergens","uendelig rekke"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":6}],"title":"Aritmetisk og geometrisk rekke","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Sumformel for aritmetisk rekke, konvergensintervall for parametrisk geometrisk rekke, og total tilbakelagt strekning via uendelig geometrisk rekke.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Bestemme $n$ og bruke sumformelen $s_n = \\frac{a_1+a_n}{2}\\cdot n$."}],"dg-permalink":"/aritmetisk-og-geometrisk-rekke/","permalink":"/aritmetisk-og-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["rekker","geometrisk vekst","aritmetisk rekke","konvergens","uendelig rekke"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":6}],"title":"Aritmetisk og geometrisk rekke","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Sumformel for aritmetisk rekke, konvergensintervall for parametrisk geometrisk rekke, og total tilbakelagt strekning via uendelig geometrisk rekke.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Bestemme $n$ og bruke sumformelen $s_n = \\frac{a_1+a_n}{2}\\cdot n$."}]}}
---


# Aritmetisk og geometrisk rekke

Ta utgangspunkt i den aritmetiske rekken

$$-3 + 0 + 3 + \dots + 69$$

>[!oppgave]
>a) Bestem summen av rekken.

Ta utgangspunkt i den uendelige geometriske rekken

$$5 + 5\cdot\left(\frac{1}{2}-x\right) + 5\cdot\left(\frac{1}{2}-x\right)^2 + \ldots$$

>[!oppgave]
>b) Bestem konvergensområdet til rekken.

En ball faller fra 2 meters høyde. Hver gang ballen treffer bakken, spretter den opp til en høyde som er 75 % av høyden den falt fra.

>[!oppgave]
>c) Hvor mange meter vil ballen bevege seg totalt?

## Fasit

a) $825$
b) $x \in \left\langle -\dfrac{1}{2},\, \dfrac{3}{2} \right\rangle$
c) $14 \, \mathrm{m}$

## Løsningsforslag

### a

Den aritmetiske rekken $-3 + 0 + 3 + \ldots + 69$ har $a_1 = -3$, $d = 3$ og siste ledd $a_n = 69$.

$$a_n = a_1 + (n-1)d \implies 69 = -3 + (n-1)\cdot 3 \implies n = 25$$

$$s_{25} = \frac{a_1 + a_n}{2} \cdot n = \frac{-3 + 69}{2} \cdot 25 = 33 \cdot 25 = 825$$

**Summen av rekken er $\underline{\underline{825}}$.**

### b

Rekken $5 + 5\cdot\left(\dfrac{1}{2}-x\right) + 5\cdot\left(\dfrac{1}{2}-x\right)^2 + \ldots$ er geometrisk med kvotient $k = \dfrac{1}{2} - x$.

En uendelig geometrisk rekke konvergerer når $|k| < 1$:

$$\left|\frac{1}{2} - x\right| < 1 \implies -1 < \frac{1}{2} - x < 1 \implies -\frac{1}{2} < x < \frac{3}{2}$$

**Konvergensområdet er $\underline{\underline{x \in \left\langle -\dfrac{1}{2},\, \dfrac{3}{2} \right\rangle}}$.**

### c

Ballen faller $2 \, \mathrm{m}$, spretter opp $2 \cdot 0{,}75 \, \mathrm{m}$, faller ned $2 \cdot 0{,}75 \, \mathrm{m}$, spretter opp $2 \cdot 0{,}75^2 \, \mathrm{m}$, osv.

$$
\begin{aligned}
d &= \underbrace{2}_{\text{første fall}} + 2 \cdot \underbrace{\left(2\cdot 0{,}75 + 2\cdot 0{,}75^2 + \ldots\right)}_{\text{opp og ned}} \\
  &= 2 + 2 \cdot \frac{2 \cdot 0{,}75}{1 - 0{,}75} \\
  &= 2 + 2 \cdot \frac{1{,}5}{0{,}25} \\
  &= 2 + 12 = 14
\end{aligned}
$$

**Ballen beveger seg totalt $\underline{\underline{14 \, \mathrm{m}}}$.**

---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["bevis","rekker"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":8}],"title":"Induksjonsbevis for geometrisk rekke","status":3,"source":null,"todo":null,"permalink":"/induksjonsbevis-for-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["bevis","rekker"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":8}],"title":"Induksjonsbevis for geometrisk rekke","status":3,"source":null,"todo":null}}
---


# Induksjonsbevis for geometrisk rekke

>[!oppgave]
>Vis ved induksjon at
>
>$$1 + 4 + 4^2 + \ldots + 4^n = \frac{4^{n+1}-1}{3} \quad \text{for } n \ge 0$$

## Fasit

Se løsningsforslag for fullstendig bevis.

## Løsningsforslag

Vi beviser ved induksjon at

$$1 + 4 + 4^2 + \ldots + 4^n = \frac{4^{n+1}-1}{3} \quad \text{for } n \ge 0$$

**Basissteg** ($n = 0$):

VS $= 1$, HS $= \dfrac{4^1 - 1}{3} = \dfrac{3}{3} = 1$. VS $=$ HS $\checkmark$

**Induksjonssteg:**

Anta at påstanden holder for $n = k$, dvs.

$$1 + 4 + 4^2 + \ldots + 4^k = \frac{4^{k+1}-1}{3}$$

Vi viser at den da også holder for $n = k+1$:

$$
\begin{aligned}
1 + 4 + \ldots + 4^k + 4^{k+1} &= \frac{4^{k+1}-1}{3} + 4^{k+1} \\
&= \frac{4^{k+1}-1 + 3 \cdot 4^{k+1}}{3} \\
&= \frac{4 \cdot 4^{k+1}-1}{3} \\
&= \frac{4^{k+2}-1}{3}
\end{aligned}
$$

Dette er nettopp formelen for $n = k+1$. Påstanden er bevist ved induksjon. $\blacksquare$

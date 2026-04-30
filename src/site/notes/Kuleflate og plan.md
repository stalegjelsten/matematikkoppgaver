---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":5}],"poeng":4,"title":"Kuleflate og plan","status":0,"source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/kuleflate-og-plan/","permalink":"/kuleflate-og-plan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["vektorer","geometri"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":5}],"poeng":4,"title":"Kuleflate og plan","status":0,"source":null,"lf-source-claude":true,"todo":null}}
---


# Kuleflate og plan

Punktene $A(1, 2, 1)$ og $B(3, 0, -3)$ ligger på en kuleflate. $AB$ er en diameter til kuleflaten. Planet $\gamma$ er gitt ved likningen $x + 2y + 2z = 14$.

>[!oppgave]
>a) Finn den minste avstanden fra kuleflaten til planet $\gamma$.

Et plan $\alpha$ har samme avstand til kuleflaten og er parallelt med planet $\gamma$.

>[!oppgave]
>b) Bestem en likning for planet $\alpha$.

## Fasit

a) $\underline{\underline{4 - \sqrt{6} \approx 1{,}55}}$

b) $\underline{\underline{x + 2y + 2z = -10}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å utføre beregningene.

![Kuleflate og plan – CAS-beregninger](/img/user/_resources/r2-v24-2-5.png)

**Sentrum og radius:**

Siden $AB$ er diameter, er sentrum $M$ midtpunktet av $AB$:

$$M = \left(\frac{1+3}{2},\ \frac{2+0}{2},\ \frac{1+(-3)}{2}\right) = (2, 1, -1)$$

Radius er halvparten av $|AB|$:

$$r = \frac{|AB|}{2} = \frac{\sqrt{(3-1)^2 + (0-2)^2 + (-3-1)^2}}{2} = \frac{\sqrt{4+4+16}}{2} = \frac{\sqrt{24}}{2} = \sqrt{6}$$

Planet $\gamma$ har normalvektor $\mathbf{n} = (1, 2, 2)$ med $|\mathbf{n}| = \sqrt{1+4+4} = 3$.

### a

Avstanden fra sentrum $M(2, 1, -1)$ til planet $\gamma\colon x + 2y + 2z = 14$ er:

$$d(M, \gamma) = \frac{|1 \cdot 2 + 2 \cdot 1 + 2 \cdot (-1) - 14|}{3} = \frac{|2 + 2 - 2 - 14|}{3} = \frac{12}{3} = 4$$

Den minste avstanden fra kuleflaten til planet er avstanden fra sentrum minus radius:

$$d_{\min} = d(M, \gamma) - r = 4 - \sqrt{6} \approx \mathbf{\underline{\underline{1{,}55}}}$$

**Den minste avstanden fra kuleflaten til planet $\gamma$ er $4 - \sqrt{6} \approx 1{,}55$.**

### b

Planet $\alpha$ er parallelt med $\gamma$, altså på formen $x + 2y + 2z = D$.

Avstanden fra $M(2, 1, -1)$ til $\alpha$ er den samme som til $\gamma$, det vil si $4$, men $\alpha$ ligger på motsatt side av sentrum:

$$d(M, \alpha) = \frac{|1 \cdot 2 + 2 \cdot 1 + 2 \cdot (-1) - D|}{3} = \frac{|2 - D|}{3} = 4$$

$$|2 - D| = 12 \implies D = 14 \quad \text{eller} \quad D = -10$$

$D = 14$ gir planet $\gamma$ selv, så $\alpha$ har $D = -10$.

**En likning for planet $\alpha$ er $\underline{\underline{x + 2y + 2z = -10}}$.**

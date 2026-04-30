---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/vektorfunksjoner-og-smygplan/","dg-publish":true,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","funksjoner","bevis"],"title":"Vektorfunksjoner og smygplan","todo":[],"permalink":"/vektorfunksjoner-og-smygplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","funksjoner","bevis"],"title":"Vektorfunksjoner og smygplan","todo":[]}}
---


# Vektorfunksjoner og smygplan

En kurve $C$ er grafen til vektorfunksjonen $\vec{r}_1$ gitt ved

$$\vec{r}_1(t) = [\sin t,\ t,\ \cos t], \quad 0 < t < 2\pi$$

>[!oppgave]
>a) Bestem koordinatene til eventuelle punkter på $C$ der tangenten er parallell med $xy$-planet.
>b) Vis at $\vec{r}_1'(t) \perp \vec{r}_1''(t)$ for alle $t$.

> [!tip] Definisjon
> La $\vec{r}$ være posisjonsvektoren til en romkurve, der $\vec{r}'(t)$ og $\vec{r}''(t)$ ikke er parallelle for noen verdier av $t$. Da kan vi til hvert punkt på kurven lage et plan som tangerer kurven i punktet, og som inneholder $\vec{r}'(t)$ og $\vec{r}''(t)$. Dette planet kaller vi for kurvens *smygplan* i punktet.

>[!oppgave]
>c) Vis at vinkelen mellom smygplanet og $y$-aksen alltid er den samme for kurven $C$. Bestem denne vinkelen.

En annen kurve er grafen til vektorfunksjonen $\vec{r}_2$ gitt ved

$$\vec{r}_2(t) = [\sin t,\ t,\ 2\sin t + 1]$$

>[!oppgave]
>d) Undersøk smygplanet til denne kurven for ulike verdier av $t$. Gi en tolkning av det du har funnet i undersøkelsene dine.

## Fasit

a) **Punkt $(0, \pi, -1)$**

b) Se løsningsforslag — prikkproduktet er identisk lik 0.

c) **Vinkelen er alltid $45°$.**

d) Normalretningen er alltid $(-2, 0, 1)$ — smygplanet har konstant orientering. Kurven ligger i planet $z = 2x + 1$.

## Løsningsforslag

### a

Tangenten til kurven $C$ er gitt ved $\vec{r}_1'(t)$. Vi deriverer:

$$\vec{r}_1'(t) = [\cos t,\ 1,\ -\sin t]$$

Tangenten er parallell med $xy$-planet når $z$-komponenten er null:

$$-\sin t = 0 \implies t = \pi \quad (t \in \langle 0, 2\pi \rangle)$$

Punktet på kurven ved $t = \pi$:

$$\vec{r}_1(\pi) = [\sin \pi,\ \pi,\ \cos \pi] = [0,\ \pi,\ -1]$$

**Punktet $(0,\ \pi,\ -1)$ er det eneste punktet der tangenten er parallell med $xy$-planet.**

### b

Vi deriverer $\vec{r}_1'(t)$ én gang til:

$$\vec{r}_1''(t) = [-\sin t,\ 0,\ -\cos t]$$

Prikkproduktet er:

$$\vec{r}_1'(t) \cdot \vec{r}_1''(t) = \cos t \cdot (-\sin t) + 1 \cdot 0 + (-\sin t) \cdot (-\cos t)$$

$$= -\sin t \cos t + 0 + \sin t \cos t = \mathbf{0}$$

GeoGebra CAS bekrefter:

![r2-h23-2-5-cas-prikk-kryss.png](/img/user/_resources/r2-h23-2-5-cas-prikk-kryss.png){width=70%}

Siden prikkproduktet er null for alle $t$, er $\vec{r}_1'(t) \perp \vec{r}_1''(t)$ for alle $t$. $\square$

### c

Smygplanet i et punkt inneholder $\vec{r}_1'(t)$ og $\vec{r}_1''(t)$. Normalvektoren til smygplanet er:

$$\vec{n} = \vec{r}_1'(t) \times \vec{r}_1''(t)$$

Vi regner ut kryssprodukt komponent for komponent:

$$\vec{n} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \cos t & 1 & -\sin t \\ -\sin t & 0 & -\cos t \end{vmatrix}$$

$$= \left(1 \cdot (-\cos t) - (-\sin t) \cdot 0,\ (-\sin t)(-\sin t) - \cos t \cdot (-\cos t),\ \cos t \cdot 0 - 1 \cdot (-\sin t)\right)$$

$$= \left(-\cos t,\ \sin^2 t + \cos^2 t,\ \sin t\right) = (-\cos t,\ 1,\ \sin t)$$

Lengden av $\vec{n}$:

$$|\vec{n}|^2 = \cos^2 t + 1 + \sin^2 t = 2 \implies |\vec{n}| = \sqrt{2}$$

Vinkelen $\theta$ mellom normalvektoren $\vec{n}$ og $y$-aksen $\hat{j} = (0, 1, 0)$:

$$\cos \theta = \frac{\vec{n} \cdot \hat{j}}{|\vec{n}| \cdot |\hat{j}|} = \frac{1}{\sqrt{2}} \implies \theta = \frac{\pi}{4} = 45°$$

GeoGebra CAS bekrefter $|\vec{n}|^2 = 2$ og $\theta = \frac{\pi}{4}$:

![r2-h23-2-5-cas-vinkel.png](/img/user/_resources/r2-h23-2-5-cas-vinkel.png){width=70%}

Vinkelen mellom smygplanet og $y$-aksen er $90° - \theta = 90° - 45° = 45°$.

Siden $\cos\theta = \frac{1}{\sqrt{2}}$ er uavhengig av $t$, er **vinkelen mellom smygplanet og $y$-aksen alltid $\underline{\underline{45°}}$**, uavhengig av hvilket punkt på kurven vi ser på. $\square$

### d

Vi finner $\vec{r}_2'(t)$ og $\vec{r}_2''(t)$:

$$\vec{r}_2(t) = [\sin t,\ t,\ 2\sin t + 1]$$

$$\vec{r}_2'(t) = [\cos t,\ 1,\ 2\cos t]$$

$$\vec{r}_2''(t) = [-\sin t,\ 0,\ -2\sin t]$$

Normalvektoren til smygplanet:

$$\vec{n}_2 = \vec{r}_2'(t) \times \vec{r}_2''(t)$$

$$= \left(1 \cdot (-2\sin t) - 2\cos t \cdot 0,\ 2\cos t \cdot (-\sin t) - \cos t \cdot (-2\sin t),\ \cos t \cdot 0 - 1 \cdot (-\sin t)\right)$$

$$= \left(-2\sin t,\ -2\sin t \cos t + 2\sin t \cos t,\ \sin t\right) = (-2\sin t,\ 0,\ \sin t)$$

$$= \sin t \cdot (-2,\ 0,\ 1)$$

**Tolkning:** Normalvektoren $\vec{n}_2 = \sin t \cdot (-2, 0, 1)$ peker alltid i retningen $(-2, 0, 1)$ (eller motsatt retning) uavhengig av $t$ (der $\sin t \neq 0$). Det betyr at smygplanet har den samme orienteringen for alle $t$ — det er alltid parallelt med planet med normal $(-2, 0, 1)$.

En naturlig forklaring er at kurven faktisk ligger i et fast plan: $z$-komponenten er $2\sin t + 1 = 2x + 1$, altså $z = 2x + 1$. Kurven $C_2$ ligger i sin helhet i planet $z = 2x + 1$, og smygplanet er det samme for alle punkter.

Merk at der $\sin t = 0$ (dvs. $t = 0, \pi, 2\pi, \ldots$) er $\vec{r}_2'$ og $\vec{r}_2''$ parallelle, og smygplanet er ikke definert i disse punktene.
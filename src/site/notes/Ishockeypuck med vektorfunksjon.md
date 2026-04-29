---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"dg-publish":true,"temaer":["vektorer","derivasjon","modellering"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":5}],"poeng":null,"title":"Ishockeypuck med vektorfunksjon","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Finne startfart $|\\vec r'(0)|$, tidspunkt for treff i vanten (løse $|x|=30$ eller $|y|=15$), og vise at rett-linje-spiller $P+t\\vec v$ ikke skjærer banen til pucken.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Lengden av $\\vec r'(0)$."}],"source":null,"lf-source-claude":true,"todo":[],"dg-permalink":"/ishockeypuck-med-vektorfunksjon/","permalink":"/ishockeypuck-med-vektorfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"temaer":["vektorer","derivasjon","modellering"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":5}],"poeng":null,"title":"Ishockeypuck med vektorfunksjon","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Finne startfart $|\\vec r'(0)|$, tidspunkt for treff i vanten (løse $|x|=30$ eller $|y|=15$), og vise at rett-linje-spiller $P+t\\vec v$ ikke skjærer banen til pucken.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Lengden av $\\vec r'(0)$."}],"source":null,"lf-source-claude":true,"todo":[]}}
---


# Ishockeypuck med vektorfunksjon

En ishockeybane er $60 \mathrm{~m}$ lang og $30 \mathrm{~m}$ bred. Vi plasserer et koordinatsystem slik at origo er midt på banen. Se figuren nedenfor.

![Ishockeybane](/img/user/_resources/r1-h23-2-5.jpeg){width=70%}

En hockeyspiller sendte av gårde en puck. Vektorfunksjonen $\vec{r}$ gitt ved

$$\vec{r}(t) = \left[8(e^{-t}-t),\; 5(e^{-t}-t)\right]$$

gir puckens posisjon $t$ sekunder etter at den ble sendt av gårde. Denne vektorfunksjonen gir puckens posisjon helt til den treffer vantet (veggen på banen).

>[!oppgave]
>a) Hvilken fart hadde pucken idet den ble sendt av gårde?
>b) Hvor lang tid gikk det før pucken traff vantet?

En annen hockeyspiller var i posisjonen $P(-18, 11)$ da pucken ble sendt av gårde. Spilleren hadde konstant fart $\vec{v} = [3, -7]$.

>[!oppgave]
>c) Begrunn at denne spilleren ikke ble truffet av pucken.

## Fasit

a) $\underline{\underline{|\vec{r}'(0)| = 2\sqrt{89} \approx 18{,}87 \, \mathrm{m/s}}}$
b) **Pucken treffer lang-vanten etter ca. $3{,}05$ sekunder.**
c) **Spilleren ble ikke truffet av pucken** — pucken beveger seg langs linjen $5x = 8y$, og selv om spillerens bane krysser denne linjen, er spilleren og pucken ikke i samme punkt på samme tidspunkt.

## Løsningsforslag

![GeoGebra CAS-utregning](/img/user/_resources/r1-h23-2-5-cas.png)

### a

Puckens posisjon er gitt ved $\vec{r}(t) = [8(e^{-t} - t),\; 5(e^{-t} - t)]$. Farten er lengden av hastighetsvektoren $\vec{r}'(t)$.

Vi deriverer komponentvis:

$$\vec{r}'(t) = \left[-8e^{-t} - 8,\; -5e^{-t} - 5\right] = -(e^{-t}+1)\cdot[8,\; 5]$$

Ved $t = 0$:

$$\vec{r}'(0) = -(e^{0}+1)\cdot[8,\; 5] = -2\cdot[8,\; 5] = [-16,\; -10]$$

Farten er:

$$|\vec{r}'(0)| = \sqrt{(-16)^2 + (-10)^2} = \sqrt{256 + 100} = \sqrt{356} = 2\sqrt{89}$$

**Pucken hadde fart $\underline{\underline{2\sqrt{89} \approx 18{,}87 \, \mathrm{m/s}}}$ idet den ble sendt av gårde.**

### b

Banen er $60 \, \mathrm{m}$ lang og $30 \, \mathrm{m}$ bred med origo i midten, så $-30 \leq x \leq 30$ og $-15 \leq y \leq 15$.

Vi observerer at $\vec{r}(t) = (e^{-t} - t) \cdot [8,\; 5]$. La $u(t) = e^{-t} - t$. Da er $x(t) = 8u(t)$ og $y(t) = 5u(t)$.

Siden $u'(t) = -e^{-t} - 1 < 0$ for alle $t$, avtar $u(t)$ strengt, og dermed avtar både $x$ og $y$ fra startverdiene $x(0) = 8$ og $y(0) = 5$. Pucken beveger seg mot negative $x$- og $y$-verdier, så de aktuelle grensene er $x = -30$ og $y = -15$.

Vi undersøker hvilken grense som nås først ved å løse to likninger:

- $y = -15$: $5(e^{-t} - t) = -15 \;\Rightarrow\; e^{-t} - t = -3$. Numerisk løsning: $t \approx 3{,}05$.
- $x = -30$: $8(e^{-t} - t) = -30 \;\Rightarrow\; e^{-t} - t = -3{,}75$. Numerisk løsning: $t \approx 3{,}77$.

Siden $u(t)$ er avtagende, nås $u = -3$ (tilsvarer $y = -15$) før $u = -3{,}75$ (tilsvarer $x = -30$).

Kontroll: ved $t \approx 3{,}05$ er $x = 8 \cdot (-3) = -24 \, \mathrm{m}$, som er innenfor banen ($-30 \leq -24 \leq 30$ ✓).

**Pucken treffer lang-vanten ($y = -15$) etter ca. $\underline{\underline{3{,}05 \, \mathrm{sekunder}}}$.**

### c

Puckens posisjon er alltid $\vec{r}(t) = u(t) \cdot [8,\; 5]$ der $u(t) = e^{-t} - t$. Det betyr at pucken beveger seg langs den rette linjen gjennom origo i retning $[8,\; 5]$, altså langs linjen $5x = 8y$.

Spillerens posisjon ved tid $t$ er:

$$\vec{P}(t) = (-18 + 3t,\; 11 - 7t)$$

For at spilleren skal treffes av pucken, må $\vec{P}(t) = \vec{r}(t)$ for et tidspunkt $t \geq 0$. Dette gir likningssystemet:

$$\begin{cases} -18 + 3t = 8(e^{-t} - t) \\ 11 - 7t = 5(e^{-t} - t) \end{cases}$$

Fra begge likninger kan vi isolere $e^{-t} - t$:

- Ligning 1: $e^{-t} - t = \dfrac{3t - 18}{8}$
- Ligning 2: $e^{-t} - t = \dfrac{11 - 7t}{5}$

Setter de to uttrykkene like hverandre:

$$\frac{3t - 18}{8} = \frac{11 - 7t}{5}$$

$$5(3t - 18) = 8(11 - 7t)$$

$$15t - 90 = 88 - 56t$$

$$71t = 178 \quad \Rightarrow \quad t = \frac{178}{71} \approx 2{,}51$$

Dette er det eneste tidspunktet der spillerens bane og puckens bane er på samme rette linje. Vi sjekker om de er i samme punkt:

- Spillerens posisjon: $(-18 + 3 \cdot 2{,}51,\; 11 - 7 \cdot 2{,}51) \approx (-10{,}47,\; -6{,}55)$
- Puckens posisjon: $(8(e^{-2{,}51} - 2{,}51),\; 5(e^{-2{,}51} - 2{,}51)) \approx (-19{,}40,\; -12{,}13)$

De to posisjonene er ulike — selv om banen til spilleren krysser linjen pucken beveger seg langs, er de ikke i samme punkt på samme tid.

**Spilleren ble dermed ikke truffet av pucken.**

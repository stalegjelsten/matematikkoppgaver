---
{"aliases":[],"date":"2023-05-24","del":2,"dg-permalink":"/banefart-til-3-d-printer/","dg-publish":true,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","derivasjon"],"title":"Banefart til 3D-printer","permalink":"/banefart-til-3-d-printer/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":2,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["vektorer","derivasjon"],"title":"Banefart til 3D-printer"}}
---


# Banefart til 3D-printer

En fabrikk lager kroker ved hjelp av en 3D-printer. Posisjonen til dysen i 3D-printeren etter $t$ sekunder er gitt ved posisjonsvektoren

$$\vec{r}(t) = \left[1 + e^{\frac{t}{20}},\ 1 - \sin t,\ \frac{1}{10}e^{-2t+2} + \cos t\right], \quad t \in [0, 5]$$

Her er cm enheten langs aksene.

>[!oppgave]
>a) Bestem banefarten til 3D-printeren etter 1 sekund.
>b) Ved hvilket tidspunkt er banefarten lavest?
>c) Avgjør om fartsretningen noen gang er parallell med $xy$-planet eller parallell med $yz$-planet. Husk å begrunne svaret.

## Fasit

a) $\underline{\underline{v(1) \approx 1{,}17 \, \mathrm{cm/s}}}$

b) $\underline{\underline{v_{\min} \approx 1{,}00 \, \mathrm{cm/s} \text{ ved } t \approx 3{,}54 \, \mathrm{s}}}$

c) Fartsretningen er parallell med $xy$-planet én gang (ved $t \approx 3{,}14 \, \mathrm{s}$). Fartsretningen er aldri parallell med $yz$-planet.

## Løsningsforslag

Banefarten er størrelsen av hastighetsvektoren $\vec{r}'(t)$. Vi deriverer posisjonsvektoren komponentvis:

$$\vec{r}'(t) = \left[\frac{e^{t/20}}{20},\ -\cos t,\ -\frac{1}{5}e^{-2t+2} - \sin t\right]$$

Vi definerer disse komponentene i GeoGebra CAS som `vx`, `vy` og `vz`, og beregner banefarten som $|\vec{r}'(t)| = \sqrt{v_x^2 + v_y^2 + v_z^2}$.

### a

Vi setter inn $t = 1$ i komponentene og beregner banefarten:

$$v_x(1) = \frac{e^{1/20}}{20} \approx 0{,}0526$$

$$v_y(1) = -\cos 1 \approx -0{,}5403$$

$$v_z(1) = -\frac{e^{0}}{5} - \sin 1 = -0{,}2 - 0{,}8415 \approx -1{,}0415$$

![GeoGebra CAS: banefart ved t=1](/img/user/_resources/r2-v23-2-3-del-a.png)

Fra CAS-utklippet ser vi at

$$v(1) = \sqrt{v_x(1)^2 + v_y(1)^2 + v_z(1)^2} \approx \mathbf{\underline{\underline{1{,}17 \, \mathrm{cm/s}}}}$$

### b

Vi ønsker å finne minimumet til $v(t) = |\vec{r}'(t)|$ på intervallet $[0, 5]$. Vi definerer `fart(t)` i GeoGebra CAS og evaluerer ved det kjente minimumet $t \approx 3{,}542$:

![GeoGebra CAS: banefart ved t=3.542](/img/user/_resources/r2-v23-2-3-del-b.png)

CAS bekrefter at $v(3{,}542) \approx \mathbf{\underline{\underline{1{,}00 \, \mathrm{cm/s}}}}$.

Minimumet inntreffer ved $t \approx 3{,}54 \, \mathrm{s}$.

### c

**Parallell med $xy$-planet** betyr at fartsretningen ikke har noen $z$-komponent, altså $v_z(t) = 0$:

$$v_z(t) = -\frac{1}{5}e^{-2t+2} - \sin t = 0$$

Vi undersøker fortegnet til $v_z$ rundt $t = \pi \approx 3{,}1416$ i GeoGebra CAS:

![GeoGebra CAS: fortegnskifte for vz](/img/user/_resources/r2-v23-2-3-del-c.png)

Fra utklippet ser vi at

- $v_z(3{,}1416) \approx -0{,}00275 < 0$
- $v_z(3{,}1443) \approx 0$ (nullpunktet)
- $v_z(3{,}15) \approx 0{,}00569 > 0$

Siden $v_z$ skifter fortegn fra negativ til positiv i intervallet $[0, 5]$ (mellomverdisetningen garanterer et nullpunkt), er fartsretningen **parallell med $xy$-planet ved $t \approx 3{,}14 \, \mathrm{s}$**.

**Parallell med $yz$-planet** betyr at $x$-komponenten er null, altså $v_x(t) = 0$:

$$v_x(t) = \frac{e^{t/20}}{20}$$

Siden $e^{t/20} > 0$ for alle $t$, er $v_x(t) > 0$ for alle $t \in [0, 5]$. Det er **aldri** slik at fartsretningen er parallell med $yz$-planet.
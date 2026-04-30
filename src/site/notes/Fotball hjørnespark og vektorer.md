---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["vektorer","modellering"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"poeng":6,"title":"Fotball hjørnespark og vektorer","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/fotball-hjornespark-og-vektorer/","permalink":"/fotball-hjornespark-og-vektorer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["vektorer","modellering"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"poeng":6,"title":"Fotball hjørnespark og vektorer","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Fotball hjørnespark og vektorer

En fotballspiller skal ta et hjørnespark (corner) på en fotballbane. Posisjonen $\vec{r}$ til ballen etter $t$ sekunder er gitt ved

$$\vec{r}(t) = [30t,\ 5t,\ 7t - 4{,}9t^2].$$

Her er posisjonen gitt i meter, og koordinatsystemet er lagt slik at origo er i hjørnet av fotballbanen, $x$-aksen går langs kortsiden og $y$-aksen går langs langsiden.

>[!oppgave]
>a) Hvor stor er farten til ballen idet den blir skutt?
>b) Hvor langt fra hjørnemerket er ballen når den treffer fotballbanen igjen?
>c) Hvor stor er farten til ballen når den er på sitt høyeste? Hvor høyt over fotballbanen er ballen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-1\|Løsningsforslag R2 eksamen V2024#Oppgave 2-1]]

## Fasit

a) $\underline{\underline{|\vec{v}(0)| = \sqrt{974} \approx 31{,}2 \, \mathrm{m/s}}}$

b) **Ballen lander $\dfrac{50\sqrt{37}}{7} \approx 43{,}4 \, \mathrm{m}$ fra hjørnemerket.**

c) $\underline{\underline{|\vec{v}| = 5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}}}$, høyde $\underline{\underline{2{,}5 \, \mathrm{m}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å definere posisjonsvektoren og beregne alle størrelser.

![GeoGebra CAS – hjørnespark-vektorer](/img/user/_resources/r2-v24-2-1.png)

### a

Farten er lengden av hastighetsvektoren $\vec{v}(t) = \vec{r}'(t)$.

Vi definerer $\vec{r}(t) = (30t,\ 5t,\ 7t - 4{,}9t^2)$ og deriverer (linje 1–2 i CAS).

Ved $t = 0$ (idet ballen sparkes) gir CAS:

$$\vec{v}(0) = (30,\ 5,\ 7)$$

$$|\vec{v}(0)| = \sqrt{30^2 + 5^2 + 7^2} = \sqrt{900 + 25 + 49} = \sqrt{974} \approx 31{,}2$$

**Farten til ballen idet den blir skutt er $\underline{\underline{\sqrt{974} \approx 31{,}2 \, \mathrm{m/s}}}$.**

### b

Ballen treffer banen igjen når $z$-koordinaten er 0 (og $t > 0$). Vi setter opp likningen

$$7t - 4{,}9t^2 = 0$$

CAS gir $t = 0$ eller $t = \dfrac{10}{7}$ s (linje 5). Vi bruker $t = \dfrac{10}{7}$.

Posisjonen ved landing er (linje 6):

$$\vec{r}\!\left(\frac{10}{7}\right) = \left(\frac{300}{7},\ \frac{50}{7},\ 0\right)$$

Avstand fra origo (hjørnemerket) er lengden av $(x, y)$-komponenten:

$$d = \sqrt{\left(\frac{300}{7}\right)^{\!2} + \left(\frac{50}{7}\right)^{\!2}} = \frac{50\sqrt{37}}{7} \approx 43{,}4$$

CAS bekrefter dette i linje 7.

**Ballen er $\underline{\underline{\dfrac{50\sqrt{37}}{7} \approx 43{,}4 \, \mathrm{m}}}$ fra hjørnemerket når den treffer banen.**

### c

Ballen er på sitt høyeste når $z$-komponenten av hastighetsvektoren er null:

$$v_z = 7 - 9{,}8t = 0 \implies t = \frac{5}{7} \, \mathrm{s}$$

CAS bekrefter $t = \dfrac{5}{7}$ i linje 8.

Da er hastighetsvektoren (linje 9):

$$\vec{v}\!\left(\frac{5}{7}\right) = (30,\ 5,\ 0)$$

Farten er (linje 10):

$$|\vec{v}| = \sqrt{30^2 + 5^2} = \sqrt{925} = 5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}$$

Høyden ved dette tidspunktet er:

$$z\!\left(\frac{5}{7}\right) = 7 \cdot \frac{5}{7} - 4{,}9 \cdot \left(\frac{5}{7}\right)^{\!2} = 5 - \frac{49}{10} \cdot \frac{25}{49} = 5 - 2{,}5 = 2{,}5$$

**Farten på det høyeste punktet er $\underline{\underline{5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}}}$, og ballen er da $\underline{\underline{2{,}5 \, \mathrm{m}}}$ over fotballbanen.**

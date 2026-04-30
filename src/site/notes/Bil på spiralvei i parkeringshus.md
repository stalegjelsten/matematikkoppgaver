---
{"aliases":[],"date":"2025-05-14","del":2,"dg-permalink":"/bil-pa-spiralvei-i-parkeringshus/","dg-publish":true,"eksamen":"v25","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-25","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":1}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["vektorer","derivasjon","modellering"],"title":"Bil på spiralvei i parkeringshus","todo":[],"permalink":"/bil-pa-spiralvei-i-parkeringshus/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-14","del":2,"eksamen":"v25","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-25","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":1}],"poeng":6,"source":null,"status":1,"tags":["oppgave"],"temaer":["vektorer","derivasjon","modellering"],"title":"Bil på spiralvei i parkeringshus","todo":[]}}
---


# Bil på spiralvei i parkeringshus

En bil kjører opp en spiralformet vei inne i et parkeringshus.

Posisjonen til bilen etter $t$ sekunder er gitt ved

$$\vec{r}(t) = \left[ 4\cos\left(\frac{\pi}{5}t\right),\ 4\sin\left(\frac{\pi}{5}t\right) + 2,\ 5 + \frac{1}{3}t \right], \qquad t \in [0, 20]$$

der bakkenivået er $xy$-planet i et koordinatsystem med meter som enhet langs aksene.

>[!oppgave]
>a) Hvor høyt over bakkenivået er bilen etter 5 sekunder?
>b) Bestem fartsvektoren $\vec{v}(t)$ og farten til bilen etter 10 sekunder.
>c) Gjør nødvendige antakelser og bestem en mulig avstand mellom etasjene i parkeringshuset.

## Fasit

a) **$\underline{\underline{\frac{20}{3} \approx 6{,}67 \, \mathrm{m}}}$** over bakkenivået

b) $\vec{v}(t) = \left[ -\dfrac{4\pi}{5}\sin\!\left(\dfrac{\pi}{5}t\right),\ \dfrac{4\pi}{5}\cos\!\left(\dfrac{\pi}{5}t\right),\ \dfrac{1}{3} \right]$, **fart $\underline{\underline{\approx 2{,}54 \, \mathrm{m/s}}}$** (konstant)

c) Avstanden mellom etasjene er **$\underline{\underline{\frac{10}{3} \approx 3{,}3 \, \mathrm{m}}}$**

## Løsningsforslag

Vi har gitt posisjonsvektor

$$\vec{r}(t) = \left[ 4\cos\!\left(\frac{\pi}{5}t\right),\ 4\sin\!\left(\frac{\pi}{5}t\right) + 2,\ 5 + \frac{1}{3}t \right], \qquad t \in [0, 20]$$

### a

$z$-koordinaten gir høyden over bakkenivået ($xy$-planet). Vi setter $t = 5$:

$$z(5) = 5 + \frac{1}{3} \cdot 5 = 5 + \frac{5}{3} = \frac{15}{3} + \frac{5}{3} = \frac{20}{3} \approx 6{,}67$$

**Bilen er $\underline{\underline{\frac{20}{3} \approx 6{,}67 \, \mathrm{m}}}$ over bakkenivået etter 5 sekunder.**

### b

Vi deriverer $\vec{r}(t)$ komponentvis for å finne fartsvektoren. I GeoGebra CAS definerer vi $r(t)$ og beregner $v(t) = \vec{r}\,'(t)$, farten $|\vec{v}(t)|$ og evaluerer ved $t = 10$:

![GeoGebra CAS – r(t), v(t) og fart](/img/user/_resources/r2-v25-2-1.png)

CAS gir:

$$\vec{v}(t) = \left[ -\frac{4\pi}{5}\sin\!\left(\frac{\pi}{5}t\right),\ \frac{4\pi}{5}\cos\!\left(\frac{\pi}{5}t\right),\ \frac{1}{3} \right]$$

Farten er lengden av fartsvektoren:

$$|\vec{v}(t)| = \sqrt{\left(\frac{4\pi}{5}\right)^2\!\sin^2\!\left(\frac{\pi}{5}t\right) + \left(\frac{4\pi}{5}\right)^2\!\cos^2\!\left(\frac{\pi}{5}t\right) + \left(\frac{1}{3}\right)^2}$$

Siden $\sin^2(\cdot) + \cos^2(\cdot) = 1$ forenkler CAS uttrykket til:

$$|\vec{v}(t)| = \frac{\sqrt{144\pi^2 + 25}}{15} \approx 2{,}535 \, \mathrm{m/s}$$

Farten er **konstant** – den er uavhengig av $t$. Etter 10 sekunder er farten den samme:

$$|\vec{v}(10)| = \frac{\sqrt{144\pi^2 + 25}}{15} \approx \mathbf{2{,}54 \, \mathrm{m/s}}$$

**Farten til bilen etter 10 sekunder er $\underline{\underline{\frac{\sqrt{144\pi^2+25}}{15} \approx 2{,}54 \, \mathrm{m/s}}}$.**

### c

Vi antar at én etasje tilsvarer én full omdreining av spiralen. En full omdreining skjer når argumentet $\frac{\pi}{5}t$ øker med $2\pi$, det vil si når $t$ øker med $10$ sekunder.

Høydeforskjellen i løpet av én omdreining ($\Delta t = 10 \, \mathrm{s}$) er:

$$\Delta z = z(t + 10) - z(t) = \frac{1}{3}(t+10) - \frac{1}{3}t = \frac{10}{3} \approx 3{,}3 \, \mathrm{m}$$

Dette er en realistisk etasjehøyde for et parkeringshus (typisk $2{,}5$–$3{,}5 \, \mathrm{m}$).

**Avstanden mellom etasjene er $\underline{\underline{\frac{10}{3} \approx 3{,}3 \, \mathrm{m}}}$.**
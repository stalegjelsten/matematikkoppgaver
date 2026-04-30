---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/fiskebat-og-vektorbevegelse/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":4}],"poeng":8,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["vektorer","modellering"],"title":"Fiskebåt og vektorbevegelse","todo":[],"permalink":"/fiskebat-og-vektorbevegelse/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":4}],"poeng":8,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["vektorer","modellering"],"title":"Fiskebåt og vektorbevegelse","todo":[]}}
---


# Fiskebåt og vektorbevegelse

Posisjonen $\vec{r}$ til en fiskebåt $t$ timer etter at den drar fra land, er gitt ved

$$\vec{r}(t) = [1+5t,\ 4+8t]$$

Enhetene langs aksene er kilometer.

Farten til en båt måles vanligvis i knop, der 1 knop er 1852 meter per time.

>[!oppgave]
>a) Bestem farten til fiskebåten i knop.

Et fyr står i posisjonen $(4, 7)$.

>[!oppgave]
>b) Bestem den minste avstanden mellom fiskebåten og fyret.

En fiskestim er i punktet $(1, -3)$ ved tiden $t = 0$, og stimen svømmer med hastigheten $\vec{v}(t) = [4, 11]$.

>[!oppgave]
>c) Vil fiskebåten treffe fiskestimen?

En annen fiskebåt er i punktet $(-2, 0)$ ved tiden $t = 0$ og holder konstant fart i retning langs $\vec{u} = [6, 4]$.

>[!oppgave]
>d) Bestem farten denne fiskebåten må holde for å treffe fiskestimen.

## Fasit

a) $\underline{\underline{\approx 5{,}1 \, \mathrm{knop}}}$

b) $\underline{\underline{\dfrac{9\sqrt{89}}{89} \approx 0{,}954 \, \mathrm{km}}}$

c) Nei, fiskebåten treffer ikke fiskestimen.

d) $\underline{\underline{3\sqrt{13} \approx 10{,}8 \, \mathrm{km/t} \approx 5{,}8 \, \mathrm{knop}}}$

## Løsningsforslag

GeoGebra CAS ble brukt til å beregne fart, minimumsavstand og skjæringspunkter i én felles sesjon.

![GeoGebra CAS – alle deloppgaver](/img/user/_resources/r1-v25-2-4.png)

### a

Hastighetsvektoren til fiskebåten leses direkte av posisjonsuttrykket:

$$\vec{v} = [5,\ 8]$$

Farten (i km/t) er lengden av hastighetsvektoren:

$$|\vec{v}| = \sqrt{5^2 + 8^2} = \sqrt{89} \approx 9{,}434 \, \mathrm{km/t}$$

Omregnet til knop (1 knop = 1,852 km/t):

$$\frac{\sqrt{89}}{1{,}852} \approx \mathbf{5{,}1 \, \mathrm{knop}}$$

Se `FartKnop` i CAS-utklippet (linje 4).

### b

Fyret står i $F = (4, 7)$. Avstandsfunksjonen fra båten til fyret er

$$\text{Avstand}(t) = |\vec{r}(t) - F| = \sqrt{(1+5t-4)^2 + (4+8t-7)^2} = \sqrt{89t^2 - 78t + 18}$$

CAS finner minimumspunktet (linje 7):

$$\text{MinAvstand} = \left(\frac{39}{89},\ \frac{9\sqrt{89}}{89}\right)$$

Det vil si at minimum nås ved $t = \dfrac{39}{89} \approx 0{,}438$ timer, og den minste avstanden er

$$\frac{9\sqrt{89}}{89} \approx \mathbf{0{,}954 \, \mathrm{km}}$$

### c

Fiskestimmen har posisjon $\vec{s}(t) = [1+4t,\ {-3}+11t]$.

For at fiskebåten skal treffe stimen, må begge koordinater være like til samme tid:

$$\begin{cases} 1 + 5t &= 1 + 4t \\ 4 + 8t &= -3 + 11t \end{cases}$$

Første likning gir $t = 0$, andre likning gir $t = \dfrac{7}{3}$. Siden de to verdiene er ulike, finnes det ingen $t$ der båt og stim er på samme sted.

**Fiskebåten treffer ikke fiskestimen.**

(Se linje 9 i CAS-utklippet — likningssystemet har ingen løsning.)

### d

Den andre fiskebåten starter i $(-2, 0)$ og beveger seg i retning $\vec{u} = [6, 4]$ med konstant fart. La $k > 0$ være en skalar slik at hastighetsvektoren er $k \cdot [6, 4]$. Posisjonen er da

$$\vec{r}_2(t) = (-2 + 6kt,\ 4kt)$$

For at denne båten skal treffe fiskestimen $\vec{s}(t) = (1+4t,\ {-3}+11t)$ ved samme tidspunkt $t$:

$$\begin{cases} -2 + 6kt &= 1 + 4t \\ 4kt &= -3 + 11t \end{cases}$$

CAS løser systemet (linje 10) og gir $k = \dfrac{3}{2}$ og $t = \dfrac{3}{5}$.

Farten til den andre båten er lengden av hastighetsvektoren $\dfrac{3}{2} \cdot [6, 4]$:

$$\left|\frac{3}{2}[6, 4]\right| = \frac{3}{2} \cdot \sqrt{6^2 + 4^2} = \frac{3}{2} \cdot \sqrt{52} = \frac{3}{2} \cdot 2\sqrt{13} = 3\sqrt{13} \approx 10{,}8 \, \mathrm{km/t}$$

Omregnet til knop:

$$\frac{3\sqrt{13}}{1{,}852} \approx \mathbf{5{,}8 \, \mathrm{knop}}$$
---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":4}],"title":"Parameterframstilling og møtepunkt","status":3,"source":null,"todo":null,"dg-permalink":"/parameterframstilling-og-motepunkt/","permalink":"/parameterframstilling-og-motepunkt/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["vektorer","geometri"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":4}],"title":"Parameterframstilling og møtepunkt","status":3,"source":null,"todo":null}}
---


# Parameterframstilling og møtepunkt

Ina følger en sti fra ei hytte til et utsiktspunkt. I et koordinatsystem der enheten langs aksene er meter, ligger hytta i punktet $H(0, 300)$ og utsiktspunktet i $U(1200, 400)$. Stien mellom hytta og utsiktspunktet er en rett linje. Ina går med konstant fart.

>[!oppgave]
>a) Forklar at parameterframstillingen
>$$I: \begin{cases} x = 1200s &\\ y = 300 + 100s \end{cases} \quad s \in [0, 1]$$
>gir den rette linja mellom hytta og utsiktspunktet.

Hele turen tar 20 minutter.

>[!oppgave]
>b) Bestem posisjonen til Ina etter 5 minutter.
>c) Regn ut farten til Ina. Gi svaret i $\mathrm{m/s}$.

Jonas er ute på tur i samme område som Ina. De to vennene møter hverandre.

Jonas sin posisjon $t$ minutter etter at han startet sin tur, er gitt ved

$$j: \begin{cases} x = 520 - 20t &\\ y = 310 + 5t \end{cases}$$

>[!oppgave]
>d) Hvor langt har Ina gått når hun møter Jonas?

## Fasit

b) $(300,\; 325)$
c) $\dfrac{\sqrt{145}}{12} \approx 1{,}00 \, \mathrm{m/s}$
d) $35\sqrt{145} \approx 421{,}5 \, \mathrm{m}$

## Løsningsforslag

### 2-4a

Parameterframstillingen er

$$
I: \begin{cases} x = 1200s \\ y = 300 + 100s \end{cases} \quad s \in [0, 1]
$$

Vi sjekker endepunktene:

- $s = 0$: $(x, y) = (0, 300) = H$ ✓
- $s = 1$: $(x, y) = (1200, 400) = U$ ✓

Retningsvektoren er $(1200, 100) = \vec{HU}$, og startpunktet er $H$. Dermed er parameterfremstillingen den rette linjen fra $H$ til $U$, og for $s \in [0, 1]$ dekker den nøyaktig linjestykket $HU$.

### 2-4b

Hele turen er 20 minutter, og etter 5 minutter er $s = \dfrac{5}{20} = \dfrac{1}{4}$.

$$
x = 1200 \cdot \frac{1}{4} = 300 \qquad y = 300 + 100 \cdot \frac{1}{4} = 325
$$

**Etter 5 minutter er Ina i posisjonen $\underline{\underline{(300,\; 325)}}$.**

### 2-4c

Strekningslengden fra $H$ til $U$ er

$$
|HU| = \sqrt{1200^2 + 100^2} = \sqrt{1\,440\,000 + 10\,000} = \sqrt{1\,450\,000} = 100\sqrt{145} \approx 1204 \, \mathrm{m}
$$

Turen tar 20 min $= 20 \cdot 60 \, \mathrm{s} = 1200 \, \mathrm{s}$.

$$
v = \frac{100\sqrt{145}}{1200} = \frac{\sqrt{145}}{12} \approx 1{,}00 \, \mathrm{m/s}
$$

**Farten til Ina er $\underline{\underline{\dfrac{\sqrt{145}}{12} \approx 1{,}00 \, \mathrm{m/s}}}$.**

### 2-4d

Vi skriver Inas posisjon som funksjon av sin tid $t_I$ (minutter fra start):

$$
I: \begin{cases} x = 60\, t_I \\ y = 300 + 5\, t_I \end{cases}
$$

Vi setter Inas og Jonas sin posisjon lik hverandre:

$$
\begin{cases}
60\, t_I = 520 - 20\, t_J \\
300 + 5\, t_I = 310 + 5\, t_J
\end{cases}
$$

Fra andre ligning: $t_I - t_J = 2$, dvs. $t_I = t_J + 2$.

Setter inn i første ligning:

$$
60(t_J + 2) = 520 - 20\, t_J \implies 80\, t_J = 400 \implies t_J = 5
$$

Altså $t_I = 7$ (Ina har gått i 7 minutter).

Møtepunkt: $(60 \cdot 7,\; 300 + 5 \cdot 7) = (420, 335)$.

Avstand Ina har gått:

$$
\sqrt{(420 - 0)^2 + (335 - 300)^2} = \sqrt{420^2 + 35^2} = \sqrt{176\,400 + 1\,225} = \sqrt{177\,625} = 35\sqrt{145}
$$

Alternativt: Ina har gått $\dfrac{7}{20}$ av turen, så $\dfrac{7}{20} \cdot 100\sqrt{145} = 35\sqrt{145}$.

**Ina har gått $\underline{\underline{35\sqrt{145} \approx 421{,}5 \, \mathrm{m}}}$ når hun møter Jonas.**

---

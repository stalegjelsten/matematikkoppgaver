---
{"aliases":[],"date":"2023-05-24","del":2,"dg-permalink":"/omdreiingslegeme-til-trigonometrisk-funksjon/","dg-publish":true,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","omdreiningslegeme","trigonometri"],"title":"Omdreiingslegeme til trigonometrisk funksjon","todo":[],"permalink":"/omdreiingslegeme-til-trigonometrisk-funksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":2,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":5,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","omdreiningslegeme","trigonometri"],"title":"Omdreiingslegeme til trigonometrisk funksjon","todo":[]}}
---


# Omdreiingslegeme til trigonometrisk funksjon

Funksjonen $f$ er gitt ved

$$f(x) = \frac{2 - \cos x}{\sin x}, \quad D_f = \left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$$

Vi roterer grafen til $f$ om $x$-aksen.

![Omdreiingslegemet til f](/img/user/_resources/r2-v23-2-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem volumet av omdreiingslegemet vi da får.

Omdreiingslegemet skal plasseres i en rett kjegle med radius 4 og volum 45.

>[!oppgave]
>b) Avgjør om omdreiingslegemet får plass i kjeglen.

## Fasit

a) $\underline{\underline{V = \dfrac{-\pi^2 + 20\pi}{2} \approx 26{,}48}}$

b) **Nei**, omdreiingslegemet får ikke plass i kjeglen.

## Løsningsforslag

### a

Volumet av et omdreiingslegeme om $x$-aksen er gitt ved

$$V = \pi \int_a^b f(x)^2 \, \mathrm{d}x$$

Vi bruker GeoGebra CAS med kommandoen

```
Integral(pi * f(x)^2, x, pi/4, 3*pi/4)
```

![GeoGebra CAS – volum og analyse av f](/img/user/_resources/r2-v23-2-5-cas.png){width=60%}

CAS gir det eksakte svaret

$$V = \frac{-\pi^2 + 20\pi}{2} \approx \mathbf{26{,}48}$$

**Volumet av omdreiingslegemet er $\underline{\underline{V = \dfrac{-\pi^2 + 20\pi}{2} \approx 26{,}48}}$.**

### b

Vi må sjekke om omdreiingslegemet kan plasseres inne i kjeglen.

**Kjeglens høyde:** Volumet av en rett kjegle er $V_k = \dfrac{1}{3}\pi r^2 h$. Vi løser for $h$:

$$h = \frac{3 V_k}{\pi r^2} = \frac{3 \cdot 45}{\pi \cdot 4^2} = \frac{135}{16\pi} \approx 2{,}69$$

**Omdreiingslegemets ytterpunkter:** Vi har

$$f\!\left(\frac{\pi}{4}\right) = \frac{2 - \tfrac{\sqrt{2}}{2}}{\tfrac{\sqrt{2}}{2}} = 2\sqrt{2} - 1 \approx 1{,}83$$

$$f\!\left(\frac{3\pi}{4}\right) = \frac{2 + \tfrac{\sqrt{2}}{2}}{\tfrac{\sqrt{2}}{2}} = 2\sqrt{2} + 1 \approx 3{,}83$$

Lengden langs $x$-aksen er $\frac{3\pi}{4} - \frac{\pi}{4} = \frac{\pi}{2} \approx 1{,}57$.

**Plassering i kjeglen:** Vi legger kjeglen slik at toppunktet er i origo og bunnen ved $x = h$, slik at kjegleveggen er gitt ved den lineære funksjonen

$$g(x) = \frac{r}{h} \cdot x = \frac{4}{\tfrac{135}{16\pi}} \cdot x = \frac{64\pi}{135} \cdot x$$

For at omdreiingslegemet skal få plass, må radien $f$ til omdreiingslegemet ligge under kjegleveggen $g$ overalt. Plasser omdreiingslegemet slik at den smale enden tangerer kjegleveggen. Vi løser $g(x) = f\!\left(\tfrac{\pi}{4}\right)$:

$$\frac{64\pi}{135} \cdot x = 2\sqrt{2} - 1 \quad \Rightarrow \quad x = \frac{135 \,(2\sqrt{2} - 1)}{64\pi} \approx 0{,}11$$

Da må den brede enden ligge ved $x + \frac{\pi}{2} \approx 0{,}11 + 1{,}57 = 1{,}68$. Den resterende plassen i kjeglen fra $x \approx 0{,}11$ til $x = h$ er

$$h - x \approx 2{,}69 - 0{,}11 = 2{,}58$$

Men *kjegleveggen smalner* — i posisjon $x \approx 1{,}68$ er kjegleradien

$$g(1{,}68) = \frac{64\pi}{135} \cdot 1{,}68 \approx 2{,}50$$

Omdreiingslegemets brede ende har radius $\approx 3{,}83 > 2{,}50$, så den brede enden stikker utenfor kjeglen.

**Alternativ tilnærming:** Vi kan også forsøke å plassere den brede enden mot bunnen. Da må $h - x_\text{smal} \geq \frac{\pi}{2}$, dvs. $x_\text{smal} \leq h - \frac{\pi}{2} \approx 1{,}11$. Men i denne posisjonen er kjegleradien

$$g(1{,}11) = \frac{64\pi}{135} \cdot 1{,}11 \approx 1{,}66 < 1{,}83$$

så den smale enden stikker også utenfor.

Uansett orientering passer altså ikke omdreiingslegemet inn i kjeglen.

**Nei, omdreiingslegemet får ikke plass i kjeglen.**
---
{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag R1 eksamen H2025","author":"Ståle Gjelsten","date":"2026-03-25","modified":"2026-03-25","fag":["r1"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-r1-eksamen-h2025/","dgPassFrontmatter":true}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

## Oppgave 1-1

### 1-1a

Vi skriver om $f(x) = \frac{1}{3}x^3 + x^{1/2} + 2$ og deriverer ledd for ledd:

$$
f'(x) = x^2 + \frac{1}{2}x^{-1/2} = x^2 + \frac{1}{2\sqrt{x}}
$$

**$\underline{\underline{f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}}}$**

### 1-1b

Vi bruker kvotientsregelen på $g(x) = \dfrac{2x-3}{e^x}$:

$$
g'(x) = \frac{2 \cdot e^x - (2x-3) \cdot e^x}{e^{2x}} = \frac{e^x \bigl(2 - (2x-3)\bigr)}{e^{2x}} = \frac{5-2x}{e^x}
$$

Da er

$$
g'(2) = \frac{5-4}{e^2} = \frac{1}{e^2} \approx 0{,}14 \qquad \text{og} \qquad g'(3) = \frac{5-6}{e^3} = -\frac{1}{e^3} \approx -0{,}05
$$

**$\underline{\underline{g'(2) = \dfrac{1}{e^2} \approx 0{,}14}}$ og $\underline{\underline{g'(3) = -\dfrac{1}{e^3} \approx -0{,}05}}$**

### 1-1c

Siden $g'(2) > 0$ er $g$ stigende i $x = 2$, og siden $g'(3) < 0$ er $g$ avtagende i $x = 3$. Dermed må $g$ ha et **toppunkt** et sted i det åpne intervallet $\langle 2, 3 \rangle$.

## Oppgave 1-2

### 1-2a

Vi setter $u = \lg x$ og løser den kvadratiske likningen:

$$
u^2 - 2u - 8 = 0 \implies (u-4)(u+2) = 0
$$

Så $u = 4$ eller $u = -2$, det vil si

$$
\lg x = 4 \implies x = 10^4 = 10000
\qquad \text{eller} \qquad
\lg x = -2 \implies x = 10^{-2} = 0{,}01
$$

**$\underline{\underline{x = 10000}}$ eller $\underline{\underline{x = 0{,}01}}$**

### 1-2b

Likningen $\log_a \dfrac{1}{64} = -3$ betyr $a^{-3} = \dfrac{1}{64}$, altså $a^3 = 64$.

**$\underline{\underline{a = 4}}$**

## Oppgave 1-3

### 1-3a

Vi faktoriserer nevneren: $x^2 - 2x - 8 = (x-4)(x+2)$.

Nevneren går mot 0 når $x \to -2$, mens telleren gir

$$
(-2)^2 - 4(-2) + 2 = 4 + 8 + 2 = 14 \neq 0
$$

Siden teller $\to 14$ og nevner $\to 0$, eksisterer **ikke** grenseverdien.

### 1-3b

**Del 1 – bestemme $a$:**

For at grenseverdien skal eksistere, må telleren også gå mot 0 når $x \to -2$ (siden nevneren gjør det). Vi krever

$$
(-2)^2 + a(-2) + 2 = 0 \implies 4 - 2a + 2 = 0 \implies a = 3
$$

**$\underline{\underline{a = 3}}$**

**Del 2 – beregne grenseverdien:**

Med $a = 3$: teller $= x^2 + 3x + 2 = (x+1)(x+2)$.

$$
\lim_{x \to -2} \frac{(x+1)(x+2)}{(x-4)(x+2)} = \lim_{x \to -2} \frac{x+1}{x-4} = \frac{-2+1}{-2-4} = \frac{-1}{-6} = \frac{1}{6}
$$

**Grenseverdien er $\underline{\underline{\dfrac{1}{6}}}$.**

## Oppgave 1-4

### 1-4a

$$
|AB| = \sqrt{(3-(-2))^2 + (2-3)^2} = \sqrt{25 + 1} = \sqrt{26}
$$

**$\underline{\underline{|AB| = \sqrt{26}}}$**

### 1-4b

Stigningstallet til linjen gjennom $A(-2,3)$ og $B(3,2)$ er

$$
m = \frac{2-3}{3-(-2)} = -\frac{1}{5}
$$

Linjens ligning: $y - 3 = -\dfrac{1}{5}(x + 2)$, det vil si $y = \dfrac{13}{5} - \dfrac{x}{5}$.

For $y = 0$: $x = 13$.

**$\underline{\underline{C = (13,\; 0)}}$**

### 1-4c

Vinkelen $\angle ABD = 90°$ betyr at $\vec{BA} \perp \vec{BD}$, altså $\vec{BA} \cdot \vec{BD} = 0$.

$$
\vec{BA} = (-5,\; 1) \qquad \vec{BD} = (2-3,\; t-2) = (-1,\; t-2)
$$

$$
\vec{BA} \cdot \vec{BD} = (-5)(-1) + 1 \cdot (t-2) = 5 + t - 2 = 3 + t = 0
\implies t = -3
$$

**$\underline{\underline{t = -3}}$**

## Oppgave 1-5

### 1-5a

$f(x) = 4x^2 \ln x$ er definert for $x > 0$.

$$
f'(x) = 8x \ln x + 4x^2 \cdot \frac{1}{x} = 8x \ln x + 4x = 4x(2\ln x + 1)
$$

For $x > 0$ er $4x > 0$, så $f'(x) = 0$ når $2\ln x + 1 = 0$, det vil si $\ln x = -\dfrac{1}{2}$, altså $x = e^{-1/2} = \dfrac{1}{\sqrt{e}}$.

Fortegnskifte: $f' < 0$ for $x < e^{-1/2}$ og $f' > 0$ for $x > e^{-1/2}$, så dette er et **bunnpunkt**.

$$
f\!\left(e^{-1/2}\right) = 4 \cdot e^{-1} \cdot \ln\!\left(e^{-1/2}\right) = \frac{4}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}
$$

**Bunnpunkt: $\underline{\underline{\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)}}$**

Grafen til $f$ har ingen toppunkt.

### 1-5b

Eleven ønsker å finne **nullpunktet** til $f$ i intervallet $[0{,}1,\; 3]$, ved hjelp av **halveringsmetoden**.

$f(0{,}1) = 4 \cdot 0{,}01 \cdot \ln(0{,}1) \approx -0{,}092 < 0$ og $f(3) = 36\ln 3 \approx 39{,}6 > 0$, så det finnes ett nullpunkt i intervallet. (Vi ser at $f(x) = 4x^2 \ln x = 0$ for $x = 1$.)

**Hva programmet gjør i linje 11–20:**

- Linje 11 setter $m$ til midtpunktet i intervallet $[a, b]$.
- Linje 13: loopen fortsetter så lenge $|f(m)| \ge 0{,}0001$.
- Linje 15–16: dersom $f(a)$ og $f(m)$ har motsatt fortegn, er nullpunktet i $[a, m]$ → vi oppdaterer $b = m$.
- Linje 17–18: ellers er nullpunktet i $[m, b]$ → vi oppdaterer $a = m$.
- Linje 20: ny midtpunkt beregnes.

Programmet halverer intervallet i hver iterasjon til $|f(m)|$ er tilstrekkelig liten.

**Programmet skriver ut $\underline{\underline{m \approx 1{,}000}}$.**

---

## Oppgave 2-1

### 2-1a

Vi plotter datapunktene i GeoGebra og bruker **Regresjon → Logistisk** til å tilpasse en logistisk modell på formen $F(t) = \dfrac{B}{1 + a \cdot e^{-kt}}$.

Regresjonen gir (avrundede verdier):

$$
F(t) = \frac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}
$$

**Modell: $\underline{\underline{F(t) = \dfrac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}}}$**

**Gyldighetsområde:** Dataene strekker seg fra 1960 til 1980 ($t \in [0, 20]$). Modellen gir rimelige resultater i dette intervallet. Utenfor dette vil vi ha større usikkerhet – særlig for $t \gg 20$ der befolkningstallet ifølge modellen nærmer seg metningsgrensen $B \approx 2841$.

### 2-1b

Vi deriverer $F(t)$ og evaluerer i GeoGebra CAS:

$$F'(t) = \frac{B \cdot k \cdot a \cdot e^{-kt}}{(1 + a \cdot e^{-kt})^2}$$

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/r1-h25-2-1-b-CAS.png)

**$\underline{\underline{F'(12) \approx 115}}$ personer per år.**

Praktisk tolkning: I 1972 (dvs. $t = 12$) økte befolkningstallet med omtrent 115 personer per år.

**$\underline{\underline{F''(12) \approx -16{,}7}}$ (personer per år) per år.**

Praktisk tolkning: $F''(12) < 0$ betyr at veksthastigheten er **avtagende** i 1972 – befolkningsveksten er på vei ned fra toppen. (Vendepunktet, der veksthastigheten er størst, inntreffer ved $t \approx 6{,}6$, dvs. rundt 1966–1967.)

### 2-1c

Vi setter $F'(t) = 150$ og løser i GeoGebra CAS:

$$F'(t) = 150$$

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/r1-h25-2-1-c-CAS.png)

**Løsningene er $t \approx 3{,}33$ og $t \approx 9{,}82$.**

Siden $F'(t)$ stiger mot maksimum og deretter synker, er $F'(t) > 150$ for $t \in (3{,}33,\; 9{,}82)$, det vil si fra ca. **midten av 1963 til slutten av 1969** økte befolkningstallet med mer enn 150 personer per år.

**$\underline{\underline{t \in (3{,}33,\; 9{,}82)}}$, dvs. fra ca. 1963 til 1970.**

---

## Oppgave 2-2

### 2-2a

Vi undersøker om $f$ er kontinuerlig i $x = -2$ med $a = 2$ og $b = -2$.

Venstresiden ($x \le -2$): $f(-2) = 2(-2) + (-2) = -6$

Høyresiden ($-2 < x$): $\lim_{x \to -2^+} f(x) = 2(-2)^3 + 2(-2)^2 - 2(-2) = -16 + 8 + 4 = -4$

Siden $-6 \neq -4$ er ikke grenseverdien lik funksjonsverdien, og **$f$ er ikke kontinuerlig i $x = -2$**.

### 2-2b

**Kontinuitet og deriverbarhet i $x = -2$:**

Middeldelen i $x = -2$ gir (som beregnet ovenfor):

$$\lim_{x \to -2^+} f(x) = 2(-2)^3 + 2(-2)^2 - 2(-2) = -4$$

Venstresiden: $f(-2) = -2a + b$.

Krav om kontinuitet: $-2a + b = -4$ … (1)

For deriverbarhet: middeldelen har $f'(x) = 6x^2 + 4x - 2$, som gir $f'(-2) = 6 \cdot 4 + 4 \cdot (-2) - 2 = 14$. Venstresiden har $f'(x) = a$.

Krav om deriverbarhet: $a = 14$ … (2)

Fra (1) og (2): $-2 \cdot 14 + b = -4 \implies b = 24$.

**Kontinuitet og deriverbarhet i $x = k$:**

Middeldelen i $x = k$: $f(k) = 2k^3 + 2k^2 - 2k$, og høyresiden er konstanten $c$.

Krav om kontinuitet: $c = 2k^3 + 2k^2 - 2k$ … (3)

For deriverbarhet: høyresiden har $f'(x) = 0$. Middeldelen: $f'(k) = 6k^2 + 4k - 2$.

Krav om deriverbarhet: $6k^2 + 4k - 2 = 0 \implies 3k^2 + 2k - 1 = 0 \implies (3k-1)(k+1) = 0$

$$k = \frac{1}{3} \quad \text{eller} \quad k = -1$$

Begge verdiene er i $\langle -2, \rightarrow \rangle$. Vi beregner $c$ for begge:

- **$k = \dfrac{1}{3}$:** $c = 2 \cdot \dfrac{1}{27} + 2 \cdot \dfrac{1}{9} - 2 \cdot \dfrac{1}{3} = \dfrac{2}{27} + \dfrac{6}{27} - \dfrac{18}{27} = -\dfrac{10}{27}$

- **$k = -1$:** $c = 2(-1)^3 + 2(-1)^2 - 2(-1) = -2 + 2 + 2 = 2$

**Svar:**

$$\underline{\underline{a = 14, \quad b = 24}}$$

og enten $\underline{\underline{k = \dfrac{1}{3},\ c = -\dfrac{10}{27}}}$ eller $\underline{\underline{k = -1,\ c = 2}}$.

---

## Oppgave 2-3

### 2-3a

Vi beregner luktintensiteten for de to ytterverdiene $C = 500$ og $C = 1400$:

$$
\begin{aligned}
I(500) &= 1{,}4 \cdot \lg(500) - 0{,}3 \approx 1{,}4 \cdot 2{,}699 - 0{,}3 \approx 3{,}48 \\
I(1400) &= 1{,}4 \cdot \lg(1400) - 0{,}3 \approx 1{,}4 \cdot 3{,}146 - 0{,}3 \approx 4{,}10
\end{aligned}
$$

Luktintensiteten ligger mellom ca. $3{,}5$ og $4{,}1$, noe som ifølge tabellen tilsvarer kategoriene «plagsom lukt, bør begrenses» og «plagsomt, tiltak kreves».

**Ja, beboerne har grunnlag for å klage. $\underline{\underline{I \in (3{,}48,\; 4{,}10)}}$, som er langt over akseptabelt nivå.**

### 2-3b

For akseptabel luktintensitet kreves $I \le 2$:

$$
1{,}4 \cdot \lg(C) - 0{,}3 \le 2 \implies 1{,}4 \cdot \lg(C) \le 2{,}3 \implies \lg(C) \le \frac{2{,}3}{1{,}4} = \frac{23}{14}
$$

$$
C \le 10^{23/14} \approx 44 \, \mathrm{OU/m^3}
$$

**Nye prøver må vise $\underline{\underline{C \le 44 \, \mathrm{OU/m^3}}}$ for at luktintensiteten skal bli akseptabel.**

(Til sammenligning viser nåværende prøver 500–1400 $\mathrm{OU/m^3}$, så en reduksjon på over 90 % er nødvendig.)

---

## Oppgave 2-4

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

## Oppgave 2-5

### 2-5a

Vi beregner $|\vec{p}|^2 = |\vec{a} + \vec{b}|^2$:

$$
|\vec{p}|^2 = |\vec{a}|^2 + 2\,\vec{a} \cdot \vec{b} + |\vec{b}|^2
$$

Prikkproduktet er

$$
\vec{a} \cdot \vec{b} = |\vec{a}|\,|\vec{b}|\cos 30° = 4 \cdot 2\sqrt{3} \cdot \frac{\sqrt{3}}{2} = 4 \cdot 3 = 12
$$

Dermed

$$
|\vec{p}|^2 = 16 + 2 \cdot 12 + 12 = 52
$$

**$\underline{\underline{|\vec{p}| = \sqrt{52} = 2\sqrt{13}}}$**

### 2-5b

$\vec{p} \perp \vec{q}$ krever $\vec{p} \cdot \vec{q} = 0$:

$$
(\vec{a} + \vec{b}) \cdot (t\vec{a} + \vec{b})
= t|\vec{a}|^2 + \vec{a} \cdot \vec{b} + t\,\vec{a} \cdot \vec{b} + |\vec{b}|^2
= 16t + 12 + 12t + 12 = 28t + 24
$$

$$
28t + 24 = 0 \implies t = -\frac{24}{28} = -\frac{6}{7}
$$

**$\underline{\underline{t = -\dfrac{6}{7}}}$**

---

## Oppgave 2-6

### 2-6a

Vi analyserer de åtte grafene ut fra egenskapene til de fire funksjonstypene og deres andredeiverte:

| Funksjon | Andredeiverte |
| :--- | :--- |
| $a^x$ | $(\ln a)^2 \cdot a^x$ – samme form, alltid positiv |
| $x^2 - c$ | $2$ – en konstant, horisontal linje |
| $x^3 - c$ | $6x$ – lineær gjennom origo |
| $x^4 - c$ | $12x^2$ – parabel åpnende oppover gjennom origo |

**Parene er:**

- **A og G:** A er eksponentielt voksende (grafen til $a^x$, alltid positiv, konveks). G har samme form – dette er grafen til den andredeiverte $(\ln a)^2 a^x$, som er proporsjonal med $a^x$.

- **E og H:** E er en parabel med bunnpunkt under $x$-aksen, som passer med $x^2 - c$ for $c > 0$. H er en horisontal linje, noe som stemmer med den konstanteandredeiverte $f''(x) = 2$.

- **B og C:** B er en S-formet kurve (stigende gjennom hele definisjonsmengden), som passer med $x^3 - c$. C viser en rett stigende linje for $x > 0$, noe som stemmer med den lineære andredeiverte $f''(x) = 6x$.

- **D og F:** D er en U-formet kurve, flatere enn en parabel nær origo, som passer med $x^4 - c$. F er en parabel åpnende oppover med toppunkt i origo, noe som stemmer med $f''(x) = 12x^2$.

**Sammenstilling:**

| Par | Funksjon | Andredeiverte |
| :---: | :---: | :---: |
| 1 | A ($a^x$) | G |
| 2 | E ($x^2 - c$) | H |
| 3 | B ($x^3 - c$) | C |
| 4 | D ($x^4 - c$) | F |

### 2-6b

En funksjon har en invers funksjon dersom og bare dersom den er injektiv (en-til-en), dvs. strengt stigende eller strengt avtagende på hele definisjonsmengden.

- **A** ($a^x$): strengt stigende for alle $x$ → **har invers** ✓
- **B** ($x^3 - c$): strengt stigende for alle $x$ → **har invers** ✓
- **C** ($6x$): strengt stigende for alle $x$ → **har invers** ✓
- **G** ($(\ln a)^2 a^x$): strengt stigende for alle $x$ → **har invers** ✓
- **D** ($x^4 - c$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **E** ($x^2 - c$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **F** ($12x^2$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **H** (konstant): ikke en-til-en → har **ikke** invers

**$\underline{\underline{\text{Grafene A, B, C og G er grafer til funksjoner med invers funksjon.}}}$**

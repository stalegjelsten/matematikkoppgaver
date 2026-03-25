---
{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag R2 eksamen H2025","author":"Ståle Gjelsten","date":"2026-03-17","modified":"2026-03-17","fag":["r2"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-r2-eksamen-h2025/","dgPassFrontmatter":true}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

## 1-1

Vi bruker delvis integrasjon (DI-metoden):

| | D | I |
| :-: | :-: | :-: |
| $+$ | $\textcolor{seagreen}{4x}$ | $\textcolor{seagreen}{\cos x}$ |
| $-$ | $\textcolor{tomato}{4}$ | $\textcolor{tomato}{\sin x}$ |
| $+$ | $0$ | $-\cos x$ |

$$
\int 4x \cdot \cos x \, \mathrm{d}x = 4x\sin x - \int 4\sin x \, \mathrm{d}x = 4x\sin x + 4\cos x + C
$$

**$\underline{\underline{\int 4x \cdot \cos x \, \mathrm{d}x = 4x\sin x + 4\cos x + C}}$**

## 1-2

Koppen dannes når grafen til $f(x) = \sqrt{x+4}$ dreies om $x$-aksen. Volumet av et omdreiningslegeme er gitt ved

$$V = \pi \int_a^b [f(x)]^2 \, \mathrm{d}x$$

Her er $a = 0$ og $b = 10$:

$$
\begin{aligned}
V &= \pi \int_0^{10} \left(\sqrt{x+4}\right)^2 \, \mathrm{d}x \\
  &= \pi \int_0^{10} (x+4) \, \mathrm{d}x \\
  &= \pi \left[\frac{x^2}{2} + 4x\right]_0^{10} \\
  &= \pi \left(\frac{100}{2} + 40\right) \\
  &= 90\pi
\end{aligned}
$$

**Koppen rommer $\underline{\underline{90\pi \approx 283 \, \mathrm{cm}^3}}$ kakao.**

## 1-3

### 1-3a

Funksjonen $f(x) = x^3 + x^2 - 2x = x(x+2)(x-1)$ har nullpunkter i $x = -2$, $x = 0$ og $x = 1$.

Fra grafen ser vi at det markerte området ligger mellom $x = -2$ og $x = 1$, der kurven er over $x$-aksen på $[-2, 0]$ og under $x$-aksen på $[0, 1]$.

For å finne arealet av et område under $x$-aksen, trekker vi fra det negative integralet:

$$A = \int_{-2}^{0} f(x)\, \mathrm{d}x - \int_{0}^{1} f(x)\, \mathrm{d}x$$

**Riktig alternativ er $\underline{\underline{4}}$.**

Alternativ 1 og 3 gir nettointegralet $\int_{-2}^1 f(x)\, \mathrm{d}x$ der det negative arealet trekkes fra. Alternativ 2 gir bare arealet på $[-2, 0]$.

### 1-3b

$$
\begin{aligned}
\int_{-2}^{0} f(x)\, \mathrm{d}x &= \left[\frac{x^4}{4} + \frac{x^3}{3} - x^2\right]_{-2}^{0} = 0 - \left(4 - \frac{8}{3} - 4\right) = \frac{8}{3}
\end{aligned}
$$

$$
\begin{aligned}
\int_{0}^{1} f(x)\, \mathrm{d}x &= \left[\frac{x^4}{4} + \frac{x^3}{3} - x^2\right]_{0}^{1} = \frac{1}{4} + \frac{1}{3} - 1 = -\frac{5}{12}
\end{aligned}
$$

$$A = \frac{8}{3} - \left(-\frac{5}{12}\right) = \frac{32}{12} + \frac{5}{12} = \frac{37}{12}$$

**Arealet av det markerte området er $\underline{\underline{\dfrac{37}{12}}}$.**

### 1-3c

La $F(x) = \dfrac{x^4}{4} + \dfrac{x^3}{3} - x^2$ være en antiderivert til $f$. Da er

$$\int_a^1 f(x)\, \mathrm{d}x = F(1) - F(a) = 0 \quad \Rightarrow \quad F(a) = F(1) = -\frac{5}{12}$$

Vi må altså løse $F(a) = -\dfrac{5}{12}$ for $a < 0$.

Siden $F'(x) = f(x)$ er $F$ stigende der $f > 0$ og avtagende der $f < 0$:

- $F$ er avtagende for $x < -2$ (siden $f < 0$ her), med $F(-3) = 2{,}25$ og $F(-2) = -\dfrac{8}{3} \approx -2{,}67$
- $F$ er stigende for $-2 < x < 0$ (siden $f > 0$ her), fra $-\dfrac{8}{3}$ opp til $F(0) = 0$

Siden $F(-3) = 2{,}25 > -\dfrac{5}{12} > -\dfrac{8}{3} = F(-2)$, er det én løsning for $a \in (-3, -2)$ i tillegg til Kristians løsning på $(-2, 0)$. Det bekrefter Unnis påstand.

Fra figuren ser kurven til $F$ ut til å krysse $-\dfrac{5}{12}$ rundt $a \approx -2{,}7$.

## 1-4

### 1-4a

$$
\sin x - \sqrt{3}\cos x = 0 \implies \sin x = \sqrt{3}\cos x \implies \tan x = \sqrt{3}
$$

$$x = \frac{\pi}{3} + n\pi, \quad n \in \mathbb{Z}$$

I intervallet $[0, 2\pi)$:

**$\underline{\underline{x = \dfrac{\pi}{3}}}$ og $\underline{\underline{x = \dfrac{4\pi}{3}}}$**

### 1-4b

Likningen $\left(\sin x - \dfrac{1}{2}\right)\left(\sin x - a\right) = 0$ gir

$$\sin x = \frac{1}{2} \quad \text{eller} \quad \sin x = a$$

$\sin x = \dfrac{1}{2}$ har to løsninger i $[0, 2\pi)$: $x = \dfrac{\pi}{6}$ og $x = \dfrac{5\pi}{6}$.

$\sin x = a$ kan ha $0$, $1$ eller $2$ løsninger avhengig av $a$, og eventuelt de samme som $\sin x = \dfrac{1}{2}$.

**To løsninger:**

- $|a| > 1$: $\sin x = a$ har ingen løsninger. Totalt 2 løsninger fra $\sin x = \dfrac{1}{2}$.
- $a = \dfrac{1}{2}$: Begge faktorer gir samme to løsninger. Totalt 2 løsninger.

**Tre løsninger:**

- $a = 1$: $\sin x = 1$ gir $x = \dfrac{\pi}{2}$ (én ny løsning). Totalt 3 løsninger.
- $a = -1$: $\sin x = -1$ gir $x = \dfrac{3\pi}{2}$ (én ny løsning). Totalt 3 løsninger.

**Fire løsninger:**

- $-1 < a < 1$ og $a \neq \dfrac{1}{2}$: $\sin x = a$ gir to nye løsninger (ulike fra $\dfrac{\pi}{6}$ og $\dfrac{5\pi}{6}$). Totalt 4 løsninger.

## 1-5

**Påstand 1: Usann.**

Arealet under en fartsgraf representerer tilbakelagt strekning (posisjon), ikke akselerasjon. Akselerasjon er den deriverte av farten, ikke integralet.

**Påstand 2: Sann.**

$$36° = 36 \cdot \frac{\pi}{180} = \frac{\pi}{5} \text{ radianer}$$

## 1-6

### 1-6a

Den aritmetiske rekken $-3 + 0 + 3 + \ldots + 69$ har $a_1 = -3$, $d = 3$ og siste ledd $a_n = 69$.

$$a_n = a_1 + (n-1)d \implies 69 = -3 + (n-1)\cdot 3 \implies n = 25$$

$$s_{25} = \frac{a_1 + a_n}{2} \cdot n = \frac{-3 + 69}{2} \cdot 25 = 33 \cdot 25 = 825$$

**Summen av rekken er $\underline{\underline{825}}$.**

### 1-6b

Rekken $5 + 5\cdot\left(\dfrac{1}{2}-x\right) + 5\cdot\left(\dfrac{1}{2}-x\right)^2 + \ldots$ er geometrisk med kvotient $k = \dfrac{1}{2} - x$.

En uendelig geometrisk rekke konvergerer når $|k| < 1$:

$$\left|\frac{1}{2} - x\right| < 1 \implies -1 < \frac{1}{2} - x < 1 \implies -\frac{1}{2} < x < \frac{3}{2}$$

**Konvergensområdet er $\underline{\underline{x \in \left\langle -\dfrac{1}{2},\, \dfrac{3}{2} \right\rangle}}$.**

### 1-6c

Ballen faller $2 \, \mathrm{m}$, spretter opp $2 \cdot 0{,}75 \, \mathrm{m}$, faller ned $2 \cdot 0{,}75 \, \mathrm{m}$, spretter opp $2 \cdot 0{,}75^2 \, \mathrm{m}$, osv.

$$
\begin{aligned}
d &= \underbrace{2}_{\text{første fall}} + 2 \cdot \underbrace{\left(2\cdot 0{,}75 + 2\cdot 0{,}75^2 + \ldots\right)}_{\text{opp og ned}} \\
  &= 2 + 2 \cdot \frac{2 \cdot 0{,}75}{1 - 0{,}75} \\
  &= 2 + 2 \cdot \frac{1{,}5}{0{,}25} \\
  &= 2 + 12 = 14
\end{aligned}
$$

**Ballen beveger seg totalt $\underline{\underline{14 \, \mathrm{m}}}$.**

## 1-7

### 1-7a

Vi fullfører kvadratene i ligningen $x^2 + y^2 + z^2 - 4x + 2z = 4$:

$$
\begin{aligned}
(x-2)^2 - 4 + y^2 + (z+1)^2 - 1 &= 4 \\
(x-2)^2 + y^2 + (z+1)^2 &= 9
\end{aligned}
$$

**Sentrum er $\underline{\underline{(2,\, 0,\, -1)}}$ og radius er $\underline{\underline{r = 3}}$.**

### 1-7b

Kule $K$ har sentrum $M(1, -1, 3)$ og radius $2$. Vi sjekker at $P(3,-1,3)$ ligger på kula:

$$|MP| = \sqrt{(3-1)^2 + 0^2 + 0^2} = 2 \checkmark$$

Normalvektoren til tangentplanet er $\overrightarrow{MP} = (2, 0, 0)$.

Planet gjennom $P(3,-1,3)$ med normalvektor $(2,0,0)$:

$$2(x-3) = 0 \implies x = 3$$

**En likning for plan $\alpha$ er $\underline{\underline{x = 3}}$.**

### 1-7c

Avstand fra sentrum $M(1,-1,3)$ til planet $\beta\colon 3x + y - 2z + 1 = 0$:

$$d = \frac{|3\cdot1 + (-1) - 2\cdot3 + 1|}{\sqrt{3^2 + 1^2 + (-2)^2}} = \frac{|3 - 1 - 6 + 1|}{\sqrt{14}} = \frac{3}{\sqrt{14}} \approx 0{,}80$$

Siden $d \approx 0{,}80 < 2 = r$, vil planet $\beta$ skjære gjennom kuleflaten $K$.

**Planet $\beta$ skjærer gjennom kuleflaten $\underline{\underline{K}}$.**

## 1-8

Vi beviser ved induksjon at

$$1 + 4 + 4^2 + \ldots + 4^n = \frac{4^{n+1}-1}{3} \quad \text{for } n \ge 0$$

**Basissteg** ($n = 0$):

VS $= 1$, HS $= \dfrac{4^1 - 1}{3} = \dfrac{3}{3} = 1$. VS $=$ HS $\checkmark$

**Induksjonssteg:**

Anta at påstanden holder for $n = k$, dvs.

$$1 + 4 + 4^2 + \ldots + 4^k = \frac{4^{k+1}-1}{3}$$

Vi viser at den da også holder for $n = k+1$:

$$
\begin{aligned}
1 + 4 + \ldots + 4^k + 4^{k+1} &= \frac{4^{k+1}-1}{3} + 4^{k+1} \\
&= \frac{4^{k+1}-1 + 3 \cdot 4^{k+1}}{3} \\
&= \frac{4 \cdot 4^{k+1}-1}{3} \\
&= \frac{4^{k+2}-1}{3}
\end{aligned}
$$

Dette er nettopp formelen for $n = k+1$. Påstanden er bevist ved induksjon. $\blacksquare$

## 2-1

### 2-1a

Vi definerer posisjonsvektoren, deriverer og beregner farten ved $t = 2$ i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-a-CAS.png)

**Farten til miniubåten etter 2 sekunder er $\underline{\underline{\approx 10{,}3 \, \mathrm{m/s}}}$.**

### 2-1b

Vi definerer $z$-koordinaten, løser $z'(t) = 0$ og evaluerer minimumsposisjonen i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-b-CAS.png)

CAS gir $t = 25$ og $\mathrm{dyp}(25) = -\frac{625}{2} = -312{,}5$.

**Miniubåten er dypest $\underline{\underline{312{,}5 \, \mathrm{m}}}$ under havoverflaten.**

### 2-1c

Vi definerer begge posisjonsvektorene, beregner differansevektoren $\vec{d}(t) = \vec{r}(t) - \vec{s}(t)$ og avstandsfunksjonen $A(t) = |\vec{d}(t)|$. Så bruker vi `Min(A, 0, 60)` for å finne minimumsavstanden numerisk:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-c-CAS.png)

CAS gir minimumsavstand $\approx 39{,}83 \, \mathrm{m}$ ved $t \approx 8{,}39 \, \mathrm{s}$.

For at miniubåten skal kollidere med fiskestimen, må avstanden mellom sentrene være mindre enn fiskestimens radius ($15 \, \mathrm{m}$) pluss halvparten av miniubåtens største tverrsnitt ($\approx 4 \, \mathrm{m}$), altså under $19 \, \mathrm{m}$.

Siden minimumsavstanden $\approx 39{,}8 \, \mathrm{m} \gg 19 \, \mathrm{m}$, vil miniubåten **ikke** kollidere med fiskestimen.

## 2-2

### 2-2a

Vi legger inn datapunktene i GeoGebra og bruker `RegSin` til å finne en sinusmodell:

![Regresjonsmodell og datapunkter for oppgave 2-2a](/img/user/_resources/r2-h25-2-2-a-graf.png)

`RegSin` gir

$$U(t) \approx 323{,}47 \cdot \sin(314{,}81 \cdot t - 0{,}003) - 0{,}91$$

Siden fasevinkelen ($-0{,}003$) og konstantleddet ($-0{,}91$) er svært nær null, og $314{,}81 \approx 100\pi$, forenkler vi til

$$U(t) \approx 323 \cdot \sin(100\pi t)$$

**Modellen $\underline{\underline{U(t) \approx 323\sin(100\pi t)}}$ beskriver spenningen godt.**

### 2-2b

Vi løser $U(t) = 230$:

$$323\sin(100\pi t) = 230 \implies \sin(100\pi t) = \frac{230}{323} \approx 0{,}7121$$

$$100\pi t = \arcsin(0{,}7121) \approx 0{,}789 \, \mathrm{rad} \quad \text{eller} \quad 100\pi t = \pi - 0{,}789 \approx 2{,}353 \, \mathrm{rad}$$

$$t_1 = \frac{0{,}789}{100\pi} \approx 0{,}0025 \, \mathrm{s}, \qquad t_2 = \frac{2{,}353}{100\pi} \approx 0{,}0075 \, \mathrm{s}$$

**Spenningen er $230 \, \mathrm{V}$ ved $\underline{\underline{t \approx 0{,}0025 \, \mathrm{s}}}$ og $\underline{\underline{t \approx 0{,}0075 \, \mathrm{s}}}$.**

### 2-2c

Vi bruker modellen $U(t) = 323\sin(100\pi t)$ med periode $T = 0{,}0200 \, \mathrm{s}$:

$$
\begin{aligned}
U_{\text{effektiv}} &= \sqrt{\frac{1}{T} \int_{0}^{T} [U(t)]^2 \, \mathrm{d}t} \\
&= \sqrt{\frac{1}{T} \int_{0}^{T} 323^2 \sin^2(100\pi t) \, \mathrm{d}t}
\end{aligned}
$$

Siden $\displaystyle\int_0^T \sin^2(\omega t)\, \mathrm{d}t = \dfrac{T}{2}$ for en hel periode:

$$U_{\text{effektiv}} = \sqrt{\frac{323^2}{T} \cdot \frac{T}{2}} = \frac{323}{\sqrt{2}} \approx 228{,}5 \approx 229 \, \mathrm{V}$$

**Effektivverdien er $\approx 229 \, \mathrm{V} \approx 230 \, \mathrm{V}$, som stemmer godt med at nettspenningen i Norge er 230 V. Målingene kan være riktige.**

## 2-3

### 2-3a

La $c_n$ være konsentrasjonen rett etter den $n$-te natten. Kroppen skiller ut 18 % per dag, så 82 % gjenstår. Hvert døgn tilføres 2 nye enheter:

$$c_n = 2 + 2\cdot0{,}82 + 2\cdot0{,}82^2 + \ldots + 2\cdot0{,}82^{n-1}$$

Dette er en geometrisk rekke med første ledd $a_1 = 2$ og kvotient $k = 0{,}82$, som gir sumformelen

$$c(n) = 2 \cdot \frac{1 - 0{,}82^n}{1 - 0{,}82}$$

Vi definerer $c(n)$, løser $c(n) = 10$ og kontrollerer $c(11)$ og $c(12)$ i GeoGebra CAS:

![GeoGebra CAS: definisjon av c(n), løsning av c(n)=10, og kontroll av c(11) og c(12)](/img/user/L%C3%B8sningsforslag/r2-h25-2-3-a-CAS-numerisk.png)

CAS gir $n \approx 11{,}6$, og vi ser at $c(11) \approx 9{,}86 < 10$ mens $c(12) \approx 10{,}08 > 10$.

**Sofie kan sove $\underline{\underline{11 \text{ netter}}}$ på soverommet sitt før konsentrasjonen når et potensielt farlig nivå.**

### 2-3b

Grenseverdien til $c_n$ når $n \to \infty$ er $\dfrac{2}{1-k}$ der $k$ er andelen som gjenstår etter utskillelse. For at konsentrasjonen aldri skal overstige 10 enheter, må grenseverdien være $\leq 10$:

$$\frac{2}{1-k} = 10$$

Vi løser for $k$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-3b](/img/user/_resources/r2-h25-2-3-b-CAS.png)

CAS gir $k = \dfrac{4}{5}$, og utskillelsesprosenten er $1 - k = \dfrac{1}{5} = 20\,\%$.

**Artikkelen antar at kroppen skiller ut $\underline{\underline{20 \,\%}}$ av $\text{CCl}_4$-mengden per dag.**

## 2-4

### 2-4a

Funksjonen $f(x) = 3^{2x} = 9^x$ er strengt stigende på $[0, 2]$.

For en stigende funksjon gjelder:

- **`areal_til_hoyre()`** bruker venstre endepunkt ($x = 0, \Delta x, 2\Delta x, \ldots$) i hvert delintervall. Venstre endepunkt gir den minste funksjonsverdien → summerer **for lav** verdi.
- **`areal_til_venstre()`** bruker høyre endepunkt ($x = \Delta x, 2\Delta x, \ldots, 2$). Høyre endepunkt gir den største funksjonsverdien → summerer **for høy** verdi.

Det faktiske arealet (nøyaktig) er $\displaystyle\int_0^2 9^x \, \mathrm{d}x = \frac{9^2-1}{\ln 9} \approx 36{,}4$.

### 2-4b

En bedre metode er **trapesmetoden**: vi bruker gjennomsnittet av funksjonsverdiene i begge endepunktene av hvert delintervall.

```python
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3**(2*x)

def bedre_metode():
    areal = 0
    for i in range(n):
        x = start + i*dx
        areal = areal + (f(x) + f(x + dx)) / 2 * dx
    return areal

print(bedre_metode())
```

Trapesmetoden gir $\approx 36{,}415$, som er svært nær den eksakte verdien $\approx 36{,}410$.

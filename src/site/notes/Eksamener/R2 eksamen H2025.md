---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"h25","del1_tid":3,"del2_tid":2,"title":"R2 eksamen H2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-h2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"h25","del1_tid":3,"del2_tid":2,"title":"R2 eksamen H2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-h2025/"}}
---

# Oversikt over oppgavene

**Del 1** — 3 timer — uten hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Ubestemt integral med delvis integrasjon](https://matematikkoppgaver.vercel.app/ubestemt-integral-med-delvis-integrasjon/) | integral | ✔︎ |
| [1-2](#oppgave-1-2) | [Volum av omdreiningslegeme – kopp](https://matematikkoppgaver.vercel.app/volum-av-omdreiningslegeme-kopp/) | integral, geometri | ✔︎ |
| [1-3](#oppgave-1-3) | [Tolkning av integral og areal fra graf](https://matematikkoppgaver.vercel.app/tolkning-av-integral-og-areal-fra-graf/) | tolke grafer, tolkning av integraler, integral, areal under graf | ✔︎ |
| [1-4](#oppgave-1-4) | [Trigonometriske likninger og antall løsninger](https://matematikkoppgaver.vercel.app/trigonometriske-likninger-og-antall-losninger/) | trigonometri, likninger | ✔︎ |
| [1-5](#oppgave-1-5) | [Sanne og usanne påstander om fart og vinkel](https://matematikkoppgaver.vercel.app/sanne-og-usanne-pastander-om-fart-og-vinkel/) | tolkning, trigonometri | ✔︎ |
| [1-6](#oppgave-1-6) | [Aritmetisk og geometrisk rekke](https://matematikkoppgaver.vercel.app/aritmetisk-og-geometrisk-rekke/) | rekker, geometrisk vekst | ✔︎ |
| [1-7](#oppgave-1-7) | [Kuleflate og tangentplan](https://matematikkoppgaver.vercel.app/kuleflate-og-tangentplan/) | vektorer, geometri | ✔︎ |
| [1-8](#oppgave-1-8) | [Induksjonsbevis for geometrisk rekke](https://matematikkoppgaver.vercel.app/induksjonsbevis-for-geometrisk-rekke/) | bevis, rekker | ✔︎ |

**Del 2** — 2 timer — med hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Miniubåt, fart og kollisjon med fiskestim](https://matematikkoppgaver.vercel.app/miniubat-fart-og-kollisjon-med-fiskestim/) | vektorer, geometri | ✔︎ |
| [2-2](#oppgave-2-2) | [Sinusmodell for elektrisk spenning](https://matematikkoppgaver.vercel.app/sinusmodell-for-elektrisk-spenning/) | regresjon, trigonometri, integral | ✔︎ |
| [2-3](#oppgave-2-3) | [CCl4-konsentrasjon og geometrisk rekke](https://matematikkoppgaver.vercel.app/c-cl4-konsentrasjon-og-geometrisk-rekke/) | rekker, geometrisk vekst, modellering | ✔︎ |
| [2-4](#oppgave-2-4) | [Programmering og numerisk integrasjon](https://matematikkoppgaver.vercel.app/programmering-og-numerisk-integrasjon/) | programmering, integral | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ubestemt-integral-med-delvis-integrasjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ubestemt integral med delvis integrasjon

>[!oppgave]
>Bestem integralet
>
>$$\int 4x \cdot \cos x \, dx$$

## Fasit

$4x\sin x + 4\cos x + C$

## Løsningsforslag

Vi bruker delvis integrasjon (DI-metoden):

|     |             D              |                I                 |
| :-: | :------------------------: | :------------------------------: |
| $+$ | $\textcolor{seagreen}{4x}$ |  $\textcolor{seagreen}{\cos x}$  |
| $-$ |  $\textcolor{tomato}{4}$   |   $\textcolor{tomato}{\sin x}$   |
| $+$ |  $\textcolor{maroon}{0}$   | $\textcolor{steelblue}{-\cos x}$ |

$$
\int 4x \cdot \cos x \, \mathrm{d}x = \textcolor{seagreen}{4x}\textcolor{tomato}{\sin x} - \textcolor{tomato}{4} \textcolor{steelblue}{\left( - \cos x \right)}  + \textcolor{maroon}{0} + C=4x \sin x  + 4 \cos x +C
$$

**$$\underline{\underline{ 4(x \sin x + \cos x) + C }}$$**


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/volum-av-omdreiningslegeme-kopp/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Volum av omdreiningslegeme – kopp

Funksjonen er gitt ved

$$f(x) = \sqrt{x+4} \quad , \quad D_f = [0,10]$$

Innsiden av en kopp har samme form som vi får når vi dreier grafen til $f$ om førsteaksen i et koordinatsystem der enheten langs aksene er cm.

>[!oppgave]
>Hvor mye kakao er det plass til i koppen dersom den fylles helt opp?

## Fasit

$V = 90\pi \approx 270 \, \mathrm{cm}^3$

## Løsningsforslag

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

**Koppen rommer $\underline{\underline{90\pi \, \mathrm{cm}^3}}$ kakao. Det tilsvarer litt over $\underline{\underline{ 270 \, \mathrm{cm}^{3} }}$.**


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tolkning-av-integral-og-areal-fra-graf/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">






Nedenfor ser du grafen til funksjonen $f$ gitt ved $f(x)=x^3+x^2-2 x$.

![Grafen til $f$](/img/user/_resources/r2-h25-1-3.jpeg){width=70%}

>[!oppgave]
> a) Hvilket av uttrykkene nedenfor gir arealet av det markerte området på figuren? Husk å begrunne svaret ditt.


::: {.grid cols=2}

   1. $$\int_{-2}^1 f(x) \mathrm{~d} x$$
   2. $$\int_{-2}^1 f(x) \mathrm{~d} x-\int_0^1 f(x) \mathrm{~d} x$$
   3. $$\int_{-2}^0 f(x) \mathrm{~d} x+\int_0^1 f(x) \mathrm{~d} x$$
   4. $$\int_{-2}^0 f(x) \mathrm{~d} x-\int_0^1 f(x) \mathrm{~d} x$$

:::

>[!oppgave]
> b) Regn ut arealet av det markerte området på figuren.

Kristian ønsker å finne en verdi $a<0$, som er slik at $\int_a^1 f(x) d x=0$.
Han bruker en kalkulator og finner at $a \approx -0{,}6$.

Unni påstår at likningen til Kristian har to løsninger.

>[!oppgave]
> c) Forklar hvorfor påstanden til Unni er riktig, og bruk figuren til å anslå omtrent hvilken verdi den andre løsningen kan ha.

## Fasit

a) 4
b) $\frac{37}{12}$
c) Mellom -3 og -2,5.

## Løsningsforslag

### 1-3a
Områder som ligger over $x$-aksen vil ha identisk areal og integral. Områder som ligger under $x$-aksen vil ha motsatt fortegn på integralet og arealet. 

Vi deler derfor opp integrasjonen vår i to deler, en for området over $x$-aksen (fra $x=-2$ til $x=0$), og en annen del for området under $x$-aksen (fra $x=0$ til $x=1$).

Området fra $x=-2$ til $x=0$ ligger over $x$-aksen, arealet og integralet er identiske. Området fra $x=0$ til $x=1$ ligger under $x$-aksen, så arealet og integralet vil ha motsatt fortegn. For å beregne det samlede arealet må vi derfor endre fortegnet til integralet fra $x=0$ til $x=1$, altså
$$
\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx}
$$
**Uttrykk 4 gir arealet markert på figuren.**

### 1-3b
Jeg finner først det ubestemte integralet
$$
F(x)=\int \left(   x^{3}+x^{2}-2x  \right) \, \mathrm{d}x = \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- \frac{2}{2}x^{2} +C
$$
Arealet er gitt ved
$$
\begin{aligned}
A&=\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx} \\ &
= \textcolor{seagreen}{\left[ F(x) \right]_{-2}^0} - \textcolor{tomato}{\left[ F(x) \right]_{0}^1} \\
&= \textcolor{seagreen}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{-2}^0} -\textcolor{tomato}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{0}^1} \\
&= \textcolor{seagreen}{\left( \left( 0 \right) - \left( \frac{1}{4}(-2)^{4} +\frac{1}{3} (-2)^{3} - (-2)^{2}\right)   \right)} - \textcolor{tomato}{\left( \left( \frac{1}{4}1^{4}+ \frac{1}{3}1^{3}- 1^{2} \right) - \left( 0 \right)  \right)} \\
&= \textcolor{seagreen}{- \left(  \frac{1}{4}\cdot 16 + \frac{1}{3}\cdot (-8) - 4 \right)} - \textcolor{tomato}{\left( \frac{1}{4} + \frac{1}{3} -1 \right)} \\
&= \textcolor{seagreen}{- \left( \cancel{ 4 }- \frac{8}{3} - \cancel{ 4 } \right)} - \textcolor{tomato}{\left( \frac{3}{12} + \frac{4}{12} - \frac{12}{12} \right)} \\
&= \textcolor{seagreen}{\frac{8}{3}} - \textcolor{tomato}{\left( -\frac{5}{12} \right)} \\
&= \textcolor{seagreen}{\frac{32}{12}} + \textcolor{tomato}{\frac{5}{12}}= \frac{37}{12}
\end{aligned}
$$
**Arealet er $\underline{\underline{\frac{37}{12}}}$.**

### 1-3c
Likningen til Kristian er sann når vi velger $a$ slik at vi får nøyaktig like store områder på oversiden og undersiden av $x$-aksen. 

Fra figuren kan vi se at Kristians beregning ser riktig ut, området som er avgrenset av $x$-aksen og $f(x)$ fra $x=-0{,}6$ til $x=1$ ser ut til å ha omtrent like mye areal over og under $x$-aksen.

Hvis vi tar $\int_{-2}^{1} f(x) \, dx$ så må svaret bli positivt siden det er mer areal på oversiden av $x$-aksen. 

Vi ser videre at $f(x)$ er negativ for $x<-2$, altså må det være mulig å velge en verdi for $a$ som er mindre enn $-2$ slik at $\int_{a}^{1} f(x) \, dx=0$. 

- Hvis vi velger $a=-2{,}5$ så ser det ut til at vi har litt mer areal over $x$-aksen enn under.
- Hvis vi velger $a=-3$ så ser det ut til at vi har litt mer areal under $x$-aksen enn over.

**Likningen til Kristian krever like mye areal på oversiden og undersiden av $x$-aksen. Unni har rett i at det finnes to løsninger på likningen, der den andre løsningen ligger i intervallet $\langle -3, -2{,}5\rangle$.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/trigonometriske-likninger-og-antall-losninger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Trigonometriske likninger og antall løsninger

>[!oppgave]
>a) Løs likningen
>
>$$\sin x - \sqrt{3}\cos x = 0 \quad , \quad x \in    \left[0, 2\pi \right\rangle$$

Ta utgangspunkt i likningen

$$\left(\sin x - \frac{1}{2}\right)\left(\sin x - a\right) = 0 \quad , \quad x \in \left[0, 2\pi\right\rangle \text{ og } a \in \mathbb{R}$$

>[!oppgave]
>b) For hvilke verdier av $a$ har likningen henholdsvis to, tre og fire løsninger?

## Fasit

a) $x = \dfrac{\pi}{3}$ og $x = \dfrac{4\pi}{3}$
b) To løsninger: $|a|>1$ eller $a=\dfrac{1}{2}$; tre løsninger: $a=\pm 1$; fire løsninger: $-1<a<1$ og $a \neq \dfrac{1}{2}$

## Løsningsforslag

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


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sanne-og-usanne-pastander-om-fart-og-vinkel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sanne og usanne påstander om fart og vinkel

>[!oppgave]
>Avgjør om hver av påstandene nedenfor er sann eller usann. Husk å begrunne svarene dine.
>
>**Påstand 1**
>
>Vi kan tolke arealet under en fartsgraf som akselerasjon.
>
>**Påstand 2**
>
>En vinkel på $36 \degree$ er det samme som en vinkel på $\dfrac{\pi}{5}$ radianer.

## Fasit

Påstand 1: Usann. Påstand 2: Sann.

## Løsningsforslag

**Påstand 1: Usann.**

Arealet under en fartsgraf representerer tilbakelagt strekning (posisjon), ikke akselerasjon. Akselerasjon er den deriverte av farten, ikke integralet.

**Påstand 2: Sann.**

$$36° = 36 \cdot \frac{\pi}{180} = \frac{\pi}{5} \text{ radianer}$$


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-og-geometrisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk og geometrisk rekke

Ta utgangspunkt i den aritmetiske rekken

$$-3 + 0 + 3 + \dots + 69$$

>[!oppgave]
>a) Bestem summen av rekken.

Ta utgangspunkt i den uendelige geometriske rekken

$$5 + 5\cdot\left(\frac{1}{2}-x\right) + 5\cdot\left(\frac{1}{2}-x\right)^2 + \ldots$$

>[!oppgave]
>b) Bestem konvergensområdet til rekken.

En ball faller fra 2 meters høyde. Hver gang ballen treffer bakken, spretter den opp til en høyde som er 75 % av høyden den falt fra.

>[!oppgave]
>c) Hvor mange meter vil ballen bevege seg totalt?

## Fasit

a) $825$
b) $x \in \left\langle -\dfrac{1}{2},\, \dfrac{3}{2} \right\rangle$
c) $14 \, \mathrm{m}$

## Løsningsforslag

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


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuleflate-og-tangentplan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuleflate og tangentplan

En likning for en kuleflate $S$ er gitt ved

$$x^2 + y^2 + z^2 - 4x + 2z = 4$$

>[!oppgave]
>a) Bestem sentrum og radius til kuleflaten $S$.

En annen kuleflate $K$ har sentrum i $(1, -1, 3)$ og radius $2$.

Et plan $\alpha$ tangerer kuleflaten $K$ i punktet $P(3, -1, 3)$.

>[!oppgave]
>b) Bestem en likning for plan $\alpha$.

Et annet plan $\beta$ er gitt ved

$$3x + y - 2z + 1 = 0$$

>[!oppgave]
>c) Avgjør om plan $\beta$ vil skjære gjennom kuleflaten $K$.

## Fasit

a) Sentrum $(2,0,-1)$, radius $3$
b) $x = 3$
c) Ja, planet skjærer kuleflaten

## Løsningsforslag

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


</div></div>


## Oppgave 1-8


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/induksjonsbevis-for-geometrisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Induksjonsbevis for geometrisk rekke

>[!oppgave]
>Vis ved induksjon at
>
>$$1 + 4 + 4^2 + \ldots + 4^n = \frac{4^{n+1}-1}{3} \quad \text{for } n \ge 0$$

## Fasit

Se løsningsforslag for fullstendig bevis.

## Løsningsforslag

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


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/miniubat-fart-og-kollisjon-med-fiskestim/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Miniubåt, fart og kollisjon med fiskestim

En miniubåt passerer 250 meter under en bøye som ligger på havoverflaten.

I et koordinatsystem der $x$-aksen og $y$-aksen ligger parallelt med havoverflaten, $z$-aksen står normalt på havoverflaten, og enheten langs aksene er meter, er posisjonen til miniubåten $t$ sekunder etter passeringen gitt ved

$$\vec{r}(t) = [6t,\ 7t,\ -250 - 5t + {,}1t^2] \quad , \quad t \in [0, 60]$$

>[!oppgave]
>a) Bestem farten til miniubåten etter 2 sekunder.
>b) Hvor langt under havoverflaten er miniubåten på det dypeste?

Posisjonen til en fiskestim i området $t$ sekunder etter at miniubåten passerte under bøyen, er gitt ved

$$\vec{s}(t) = [40+2t,\ 60+2t,\ -250] \quad , \quad t \in [0, 60]$$

Fiskestimen har en tilnærmet kuleform med radius på 15 meter. Miniubåten er 4 meter bred, 5 meter høy og 8 meter lang.

>[!oppgave]
>c) Gjør beregninger og vurder om miniubåten kommer til å kollidere med fiskestimen.

## Fasit

a) $\approx 10{,}3 \, \mathrm{m/s}$
b) $312{,}5 \, \mathrm{m}$ under havoverflaten
c) Minimumsavstand $\approx 39{,}8 \, \mathrm{m}$ — ingen kollisjon

## Løsningsforslag

### 2-1a

Vi definerer posisjonsvektoren, deriverer og beregner farten ved $t = 2$ i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-a-CAS.png){width=50%}

**Farten til miniubåten etter 2 sekunder er $\underline{\underline{\approx 10{,}3 \, \mathrm{m/s}}}$.**

### 2-1b

Vi definerer $z$-koordinaten, løser $z'(t) = 0$ og evaluerer minimumsposisjonen i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-b-CAS.png){width=50%}

CAS gir $t = 25$ og $\mathrm{dyp}(25) = -\frac{625}{2} = -312{,}5$.

**Miniubåten er dypest $\underline{\underline{312{,}5 \, \mathrm{m}}}$ under havoverflaten.**

### 2-1c

Vi definerer begge posisjonsvektorene, beregner differansevektoren $\vec{d}(t) = \vec{r}(t) - \vec{s}(t)$ og avstandsfunksjonen $A(t) = |\vec{d}(t)|$. Så bruker vi `Min(A, 0, 60)` for å finne minimumsavstanden numerisk:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-c-CAS.png){width=50%}

CAS gir minimumsavstand $\approx 39{,}83 \, \mathrm{m}$ ved $t \approx 8{,}39 \, \mathrm{s}$.

For at miniubåten skal kollidere med fiskestimen, må avstanden mellom sentrene være mindre enn fiskestimens radius ($15 \, \mathrm{m}$) pluss halvparten av miniubåtens største tverrsnitt ($\approx 4 \, \mathrm{m}$), altså under $19 \, \mathrm{m}$.

Siden minimumsavstanden $\approx 39{,}8 \, \mathrm{m} \gg 19 \, \mathrm{m}$, vil miniubåten **ikke** kollidere med fiskestimen.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sinusmodell-for-elektrisk-spenning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sinusmodell for elektrisk spenning

Tabellen nedenfor viser elektrisk spenning målt i en stikkontakt i Norge.

| Sekunder  ($t$)     | 0,0020 | 0,0050 | 0,0070 |  0,0100   | 0,0130 | 0,0150 | 0,0180 |  0,0200  |
| ------------------- | :----: | :----: | :----: | :-------: | :----: | :----: | :----: | :------: |
| Målt spenning ($U$) |  189   |  323   |  259   | $-2{,}12$ | $-261$ | $-327$ | $-189$ | $3{,}52$ |
|                     |        |        |        |           |        |        |        |          |

>[!oppgave]
>a) Bestem en modell $U$ for spenningen $U(t)$ volt (V) i stikkontakten $t$ sekunder etter at målingene startet.
>
>b) På hvilke tidspunkter i løpet av de første $0{,}0200$ sekundene er spenningen 230 V ifølge modellen?

Nettspenningen i Norge (den elektriske spenningen i vanlige stikkontakter) er 230 V.

Truls lurer på om målingene som er gjort, kan være riktige. Han finner ut at spenningen i kontakten er en vekselspenning. Det betyr at spenningen varierer periodisk med tiden. Når spenningen oppgis å være 230 V, er dette noe som kalles effektivverdien til spenningen og er gitt ved

$$U_{\text{effektiv}} = \sqrt{\frac{1}{T} \int_{0}^{T} (U(t))^2\, dt}$$

der $T$ er perioden til funksjonen $U$.

>[!oppgave]
>c) Bruk modellen fra oppgave a og formelen ovenfor til å hjelpe Truls med å avgjøre om målingene kan være riktige.

## Fasit

a) $U(t) \approx 323\sin(100\pi t)$
b) $t \approx 0{,}0025 \, \mathrm{s}$ og $t \approx 0{,}0075 \, \mathrm{s}$
c) $U_{\text{effektiv}} = \dfrac{323}{\sqrt{2}} \approx 229 \, \mathrm{V} \approx 230 \, \mathrm{V}$ — målingene er riktige

## Løsningsforslag

### 2-2a

Vi legger inn datapunktene i GeoGebra og bruker `RegSin` til å finne en sinusmodell:

![Regresjonsmodell og datapunkter for oppgave 2-2a](/img/user/_resources/r2-h25-2-2-a-graf.png){width=70%}

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


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/c-cl4-konsentrasjon-og-geometrisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# CCl4-konsentrasjon og geometrisk rekke

Karbontetraklorid ($\text{CCl}_4$) er et skadelig stoff som brytes sakte ned i kroppen og delvis lagres i fettvev. Så lenge konsentrasjonen av $\text{CCl}_4$ i kroppen er under 10 enheter, klarer leveren å skille ut stoffet som normalt. Når konsentrasjonen overstiger 10 enheter, begynner ammoniakk å hope seg opp i blodet, og det blir potensielt farlig.

Sofie skal bo nær et gammelt industriområde der det har foregått ulovlig dumping av kjemikalier. Hver natt kommer hun til å puste inn $\text{CCl}_4$ som fordamper fra grunnen og kommer inn på soverommet hennes gjennom ventilasjon og sprekker i kjelleren.

Sofie utsettes for 2 enheter $\text{CCl}_4$ per natt. Vi regner med at kroppen hennes klarer å skille ut 18 % av total mengde i kroppen i løpet av en dag.

Anta at Sofie kun skiller ut $\text{CCl}_4$ når hun ikke blir utsatt for stoffet, og at hun bare blir utsatt for $\text{CCl}_4$ om natten.

>[!oppgave]
>a) Regn ut hvor mange netter Sofie kan sove på soverommet sitt før konsentrasjonen av $\text{CCl}_4$ i kroppen hennes kommer opp på et potensielt farlig nivå.

Sofie leser en artikkel om $\text{CCl}_4$ der det blir påstått at en voksen person aldri vil ha mer enn 10 enheter av stoffet i kroppen dersom personen utsettes for 2 enheter $\text{CCl}_4$ per natt.

>[!oppgave]
>b) Regn ut hvor mange prosent av mengden $\text{CCl}_4$ artikkelen antar at en voksen person skiller ut fra kroppen per dag.

## Fasit

a) 11 netter
b) 20 %

## Løsningsforslag

### 2-3a

La $c_n$ være konsentrasjonen rett etter den $n$-te natten. Kroppen skiller ut 18 % per dag, så 82 % gjenstår. Hvert døgn tilføres 2 nye enheter:

$$c_n = 2 + 2\cdot0{,}82 + 2\cdot0{,}82^2 + \ldots + 2\cdot0{,}82^{n-1}$$

Dette er en geometrisk rekke med første ledd $a_1 = 2$ og kvotient $k = 0{,}82$, som gir sumformelen

$$c(n) = 2 \cdot \frac{1 - 0{,}82^n}{1 - 0{,}82}$$

Vi definerer $c(n)$, løser $c(n) = 10$ og kontrollerer $c(11)$ og $c(12)$ i GeoGebra CAS:

![GeoGebra CAS: definisjon av c(n), løsning av c(n)=10, og kontroll av c(11) og c(12)](/img/user/_resources/r2-h25-2-3-a-CAS-numerisk.png){width=50%}

CAS gir $n \approx 11{,}6$, og vi ser at $c(11) \approx 9{,}86 < 10$ mens $c(12) \approx 10{,}08 > 10$.

**Sofie kan sove $\underline{\underline{11 \text{ netter}}}$ på soverommet sitt før konsentrasjonen når et potensielt farlig nivå.**

### 2-3b

Grenseverdien til $c_n$ når $n \to \infty$ er $\dfrac{2}{1-k}$ der $k$ er andelen som gjenstår etter utskillelse. For at konsentrasjonen aldri skal overstige 10 enheter, må grenseverdien være $\leq 10$:

$$\frac{2}{1-k} = 10$$

Vi løser for $k$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-3b](/img/user/_resources/r2-h25-2-3-b-CAS.png){width=50%}

CAS gir $k = \dfrac{4}{5}$, og utskillelsesprosenten er $1 - k = \dfrac{1}{5} = 20\,\%$.

**Artikkelen antar at kroppen skiller ut $\underline{\underline{20 \,\%}}$ av $\text{CCl}_4$-mengden per dag.**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/programmering-og-numerisk-integrasjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Programmering og numerisk integrasjon

Funksjonen $f$ er gitt ved

$$f(x) = 3^{2x}$$

Programmet nedenfor beregner arealet avgrenset av grafen til $f$, $x$-aksen og linjene $x = 0$ og $x = 2$ ved hjelp av to ulike metoder.


```python ln
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3**(2*x)

def areal_til_hoyre():
    areal = 0
    for i in range(n):
        x = start + i*dx
        areal = areal + f(x)*dx
    return areal

def areal_til_venstre():
    areal = 0
    for i in range(1, n+1):
        x = start + i*dx
        areal = areal + f(x)*dx
    return areal

print(areal_til_hoyre())
print(areal_til_venstre())
```

>[!oppgave]
>a) Forklar hvorfor den ene metoden vil gi en litt for høy verdi for arealet, og den andre metoden en litt for lav verdi.

>[!oppgave]
>b) Lag et program som beregner arealet mer nøyaktig uten å dele det opp i flere deler. Ta utgangspunkt i koden nedenfor, og skriv ferdig funksjonen «bedre\_metode()». Hvis du programmerer i et annet programmeringsspråk enn Python, må du først skrive en kode som samsvarer med koden nedenfor i språket du bruker.
>
>Husk å legge ved skjermbilde av programmet du lager, og resultatet du får når du kjører programmet.

```python ln
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3** (2*x)

def bedre_metode():
    areal = 0
    
    #Skriv ny kode her
    
    return areal
    
print(bedre_metode())
```

## Fasit

a) `areal_til_hoyre` bruker venstre endepunkter (for lav), `areal_til_venstre` bruker høyre endepunkter (for høy)
b) Trapesmetode: `(f(x) + f(x+dx)) / 2 * dx`

## Løsningsforslag

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


</div></div>


---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"h25","del1_tid":2,"del2_tid":3,"title":"R1 eksamen H2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r1-eksamen-h2025/","permalink":"/eksamener/r1-eksamen-h2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"h25","del1_tid":2,"del2_tid":3,"title":"R1 eksamen H2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over oppgavene

**Del 1** — 2 timer — uten hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon og graffortolkning](https://matematikkoppgaver.vercel.app/derivasjon-og-graffortolkning/) | derivasjon, funksjoner | ✔︎ |
| [1-2](#oppgave-1-2) | [Logaritmeligninger](https://matematikkoppgaver.vercel.app/logaritmeligninger/) | logaritmer, likninger | ✔︎ |
| [1-3](#oppgave-1-3) | [Grenseverdier](https://matematikkoppgaver.vercel.app/grenseverdier/) | grenseverdi, kontinuitet | ✔︎ |
| [1-4](#oppgave-1-4) | [Koordinater, linje og ortogonalitet](https://matematikkoppgaver.vercel.app/koordinater-linje-og-ortogonalitet/) | vektorer, geometri | ✔︎ |
| [1-5](#oppgave-1-5) | [Funksjonsdrøfting og halveringsmetode](https://matematikkoppgaver.vercel.app/funksjonsdrofting-og-halveringsmetode/) | derivasjon, funksjonsdrøfting, programmering | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Logistisk vekstmodell](https://matematikkoppgaver.vercel.app/logistisk-vekstmodell/) | logistisk funksjon, modellering, derivasjon | ✔︎ |
| [2-2](#oppgave-2-2) | [Stykkevis funksjon og deriverbarhet](https://matematikkoppgaver.vercel.app/stykkevis-funksjon-og-deriverbarhet/) | kontinuitet, derivasjon, funksjoner, delt forskrift | ✔︎ |
| [2-3](#oppgave-2-3) | [Luktintensitet og logaritmisk modell](https://matematikkoppgaver.vercel.app/luktintensitet-og-logaritmisk-modell/) | logaritmer, modellering | ✔︎ |
| [2-4](#oppgave-2-4) | [Parameterframstilling og møtepunkt](https://matematikkoppgaver.vercel.app/parameterframstilling-og-motepunkt/) | vektorer, geometri | ✔︎ |
| [2-5](#oppgave-2-5) | [Vektorer, lengde og ortogonalitet](https://matematikkoppgaver.vercel.app/vektorer-lengde-og-ortogonalitet/) | vektorer, trigonometri | ✔︎ |
| [2-6](#oppgave-2-6) | [Grafer og dobbeltderivert](https://matematikkoppgaver.vercel.app/grafer-og-dobbeltderivert/) | derivasjon, funksjonsdrøfting, eksponentialfunksjoner | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-og-graffortolkning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon og graffortolkning

>[!oppgave]
>a) Deriver funksjonen $f$ gitt ved
>$$f(x) = \frac{1}{3}x^3 + \sqrt{x} + 2$$

Funksjon $g$ gitt ved

$$g(x) = \frac{2x-3}{e^x}$$

er kontinuerlig og deriverbar for alle $x \in \mathbb{R}$.

>[!oppgave]
>b) Bestem $g'(2)$ og $g'(3)$.
>c) Hva forteller svarene i oppgave b om grafen til $g$ når $x \in [2, 3]$?

## Fasit

a) $f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}$
b) $g'(2) = \dfrac{1}{e^2}$, $g'(3) = -\dfrac{1}{e^3}$
c) $g$ har et toppunkt i $\langle 2, 3 \rangle$

## Løsningsforslag

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


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmeligninger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmeligninger

>[!oppgave]
>a) Løs likningen
>$$(\lg x)^2 - 2\lg x = 8$$
>b) Bestem $a$ slik at
>$$\log_a \frac{1}{64} = -3$$

## Fasit

a) $x = 10000$ eller $x = 0{,}01$
b) $a = 4$

## Løsningsforslag

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


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdier/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdier

>[!oppgave]
>a) Bestem grenseverdien dersom den eksisterer:
>$$\lim_{x \to -2} \frac{x^2 - 4x + 2}{x^2 - 2x - 8}$$
>
>b)
>    1) Bestem $a$ slik at grenseverdien eksisterer:
>    $$\lim_{x \to -2} \frac{x^2 + ax + 2}{x^2 - 2x - 8}$$
>    2) Bestem grenseverdien for denne verdien av $a$.

## Fasit

a) Grenseverdien eksisterer ikke
b) $a = 3$, grenseverdi $= \dfrac{1}{6}$

## Løsningsforslag

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


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/koordinater-linje-og-ortogonalitet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Koordinater, linje og ortogonalitet

I et koordinatsystem har vi gitt punktene $A(-2, 3)$ og $B(3, 2)$.

>[!oppgave]
>a) Bestem lengden av linjestykket $AB$.

Linja gjennom $A$ og $B$ skjærer $x$-aksen i punktet $C$.

>[!oppgave]
>b) Bestem koordinatene til $C$.

Et punkt $D$ er gitt ved $D(2, t)$ der $t \in \mathbb{R}$.

>[!oppgave]
>c) Bestem $t$ slik at $\angle ABD$ blir $90\degree$.

## Fasit

a) $|AB| = \sqrt{26}$
b) $C = (13,\; 0)$
c) $t = -3$

## Løsningsforslag

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


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/funksjonsdrofting-og-halveringsmetode/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Funksjonsdrøfting og halveringsmetode

En funksjon $f$ er gitt ved

$$f(x) = 4x^2 \cdot \ln x$$

>[!oppgave]
>a) Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

En elev jobber med funksjonen $f$ og har skrevet programmet nedenfor:

```python ln
from math import log              # log(x) er kode for ln(x)

a = 0.1
b = 3

maks_avvik = 0.0001

def f(x):                         # definerer funksjonen
    return 4*x**2*log(x)

m = (a + b)/2

while abs(f(m)) >= maks_avvik:    # abs() finner absoluttverdi

	if f(a)*f(m) < 0:
		b = m
    else:
        a = m

    m = (a + b)/2

print(m)
```

>[!oppgave]
>b) Hva ønsker eleven å finne ut?  
>Forklar hva programmet gjør i linje 11–20.  
>Bestem verdien som blir skrevet ut når eleven kjører programmet.

## Fasit

a) Bunnpunkt $\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)$, ingen toppunkt
b) $m \approx 1{,}000$

## Løsningsforslag

### 1-5a

$f(x) = 4x^2 \ln x$ er definert for $x > 0$.

$$
f'(x) = 8x \ln x + 4x^2 \cdot \frac{1}{x} = 8x \ln x + 4x = 4x(2\ln x + 1)
$$

For $x > 0$ er $4x > 0$, så $f'(x) = 0$ når $2\ln x + 1 = 0$, det vil si $\ln x = -\dfrac{1}{2}$, altså $x = e^{-1/2} = \dfrac{1}{\sqrt{e}}$.

Fortegnskifte: $f' < 0$ for $x < e^{-1/2}$ og $f' > 0$ for $x > e^{-1/2}$, så dette er et **bunnpunkt**.

$$
f\left(e^{-1/2}\right) = 4 \cdot e^{-1} \cdot \ln\left(e^{-1/2}\right) = \frac{4}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}
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


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-vekstmodell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logistisk vekstmodell

Tabellen nedenfor viser folketallet på et lite tettsted, noen år i perioden 1960–1980.

| År | 1960 | 1961 | 1963 | 1965 | 1967 | 1971 | 1975 | 1977 | 1980 |
|---|---|---|---|---|---|---|---|---|---|
| Folketall | 500 | 604 | 852 | 1043 | 1510 | 2163 | 2544 | 2639 | 2715 |

>[!oppgave]
>a) Bruk informasjonen til å lage en modell $F$ på formen
>$$F(t) = \frac{B}{1 + a \cdot e^{-kt}}$$
>for antall personer $F(t)$ som bodde på dette tettstedet $t$ år etter 1960. Vurder modellens gyldighetsområde.
>b) Bestem $F'(12)$ og $F''(12)$. Gi en praktisk tolkning av svarene.
>c) Når økte antall personer som bodde på dette tettstedet, med mer enn 150 personer per år ifølge modellen?

## Fasit

a) $F(t) = \dfrac{2841}{1 + 5{,}08 \cdot e^{-0{,}247t}}$
b) $F'(12) \approx 115$ pers/år, $F''(12) \approx -16{,}7$ (veksten avtar)
c) $t \in (3{,}33,\; 9{,}82)$, dvs. ca. 1963–1970

## Løsningsforslag

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

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/r1-h25-2-1-b-CAS.png){width=70%}

**$\underline{\underline{F'(12) \approx 115}}$ personer per år.**

Praktisk tolkning: I 1972 (dvs. $t = 12$) økte befolkningstallet med omtrent 115 personer per år.

**$\underline{\underline{F''(12) \approx -16{,}7}}$ (personer per år) per år.**

Praktisk tolkning: $F''(12) < 0$ betyr at veksthastigheten er **avtagende** i 1972 – befolkningsveksten er på vei ned fra toppen. (Vendepunktet, der veksthastigheten er størst, inntreffer ved $t \approx 6{,}6$, dvs. rundt 1966–1967.)

### 2-1c

Vi setter $F'(t) = 150$ og løser i GeoGebra CAS:

$$F'(t) = 150$$

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/r1-h25-2-1-c-CAS.png){width=70%}

**Løsningene er $t \approx 3{,}33$ og $t \approx 9{,}82$.**

Siden $F'(t)$ stiger mot maksimum og deretter synker, er $F'(t) > 150$ for $t \in (3{,}33,\; 9{,}82)$, det vil si fra ca. **midten av 1963 til slutten av 1969** økte befolkningstallet med mer enn 150 personer per år.

**$\underline{\underline{t \in (3{,}33,\; 9{,}82)}}$, dvs. fra ca. 1963 til 1970.**

---


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/stykkevis-funksjon-og-deriverbarhet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Stykkevis funksjon og deriverbarhet

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} ax + b & x \le -2 \\ 2x^3 + 2x^2 - 2x \quad  & -2 < x < k \\ c & x \ge k \end{cases} \quad \text{der } a, b, c \in \mathbb{R} \text{ og } k \in \langle -2, \rightarrow \rangle$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig når $x = -2$ dersom $a = 2$ og $b = -2$.
>b) Bestem $a$, $b$, $c$ og $k$ slik at $f$ er kontinuerlig og deriverbar når $x = -2$ og når $x = k$.

## Fasit

a) Ikke kontinuerlig ($f(-2) = -6$, midtdel $\to -4$)
b) $a = 14$, $b = 24$.  Enten $k = \frac{1}{3}$, $c = -\frac{10}{27}$ eller $k = -1$, $c = 2$

## Løsningsforslag

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

$$\underline{\underline{a = 14 \wedge b = 24}}$$

og enten $\underline{\underline{k = \dfrac{1}{3},\ c = -\dfrac{10}{27}}}$ eller $\underline{\underline{k = -1,\ c = 2}}$.

---


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/luktintensitet-og-logaritmisk-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Luktintensitet og logaritmisk modell

Beboerne i et boligområde klager på lukt fra et biogassanlegg. Kommunen tar luftprøver og vurderer værdata som vind og temperatur.

Prøvene analyseres, og hver prøve gis en luktverdi $C$. Denne luktverdien er gitt i luktenheter (odour units) per kubikkmeter ($\mathrm{OU/m^3}$).

Sammenhengen mellom $C$ og luktintensiteten $I$ er gitt ved

$$I = 1{,}4 \cdot \lg(C) - 0{,}3$$

Biogassanlegget er pålagt å forholde seg til tabellen nedenfor.

| Luktintensitet ($I$) | Vurdering |
|---|---|
| $< 1$ | uproblematisk |
| $1$–$2$ | akseptabelt |
| $2$–$3$ | kan aksepteres kortvarig |
| $3$–$4$ | plagsom lukt, bør begrenses |
| $> 4$ | plagsomt, tiltak kreves |

Resultatet av prøvene viser luktverdier mellom $500 \mathrm{~OU/m^3}$ og $1400 \mathrm{~OU/m^3}$.

>[!oppgave]
>a) Har beboerne grunnlag for å klage?

Biogassanlegget tar klagene på alvor og ønsker å redusere luktplagene.

>[!oppgave]
>b) Hvilken luktverdi må nye prøver vise for at luktintensiteten skal bli akseptabel?

## Fasit

a) Ja, $I \in (3{,}48,\; 4{,}10)$ – godt over akseptabelt nivå
b) $C \le 44 \, \mathrm{OU/m^3}$

## Løsningsforslag

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


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/parameterframstilling-og-motepunkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





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


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vektorer-lengde-og-ortogonalitet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vektorer, lengde og ortogonalitet

For $\vec{a}$ og $\vec{b}$ er $|\vec{a}| = 4$, $|\vec{b}| = 2\sqrt{3}$ og vinkelen mellom $\vec{a}$ og $\vec{b}$ er $30\degree$.

Det er gitt at $\vec{p} = \vec{a} + \vec{b}$.

>[!oppgave]
>a) Regn ut den eksakte lengden av $\vec{p}$.

Det er gitt at $\vec{q} = t \cdot \vec{a} + \vec{b}$, der $t \in \mathbb{R}$.

>[!oppgave]
>b) Bestem $t$ slik at $\vec{p}$ og $\vec{q}$ blir ortogonale.

## Fasit

a) $|\vec{p}| = 2\sqrt{13}$
b) $t = -\dfrac{6}{7}$

## Løsningsforslag

### 2-5a

Vi beregner $|\vec{p}|^2 = |\vec{a} + \vec{b}|^2$:

$$
|\vec{p}|^2 = |\vec{a}|^2 + 2\,\vec{a} \cdot \vec{b} + |\vec{b}|$$

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
= t|\vec{a}|^2 + \vec{a} \cdot \vec{b} + t\,\vec{a} \cdot \vec{b} + |\vec{b}|= 16t + 12 + 12t + 12 = 28t + 24
$$

$$
28t + 24 = 0 \implies t = -\frac{24}{28} = -\frac{6}{7}
$$

**$\underline{\underline{t = -\dfrac{6}{7}}}$**

---


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grafer-og-dobbeltderivert/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grafer og dobbeltderivert

Nedenfor ser du åtte grafer.

- En av grafene er grafen til en funksjon på formen $a^x$, der $a$ er et positivt helt tall.
- Tre av grafene er grafer til funksjoner på formen $x^b - c$, der $b$ og $c$ er positive hele tall.
- Fire av grafene er grafene til den dobbeltderiverte til de fire funksjonene som er beskrevet ovenfor.

![Åtte grafer](/img/user/_resources/r1-h25-2-6.jpeg){width=100%}

>[!oppgave]
>a) Sorter grafene i par.
>- De to grafene i hvert par skal være grafen til en funksjon og grafen til den dobbeltderiverte av funksjonen.
>- Det må komme tydelig fram hvilken graf som er grafen til funksjonen, og hvilken som er grafen til den dobbeltderiverte.
>
>Husk å begrunne svarene.
>
>b) Hvilke av de åtte grafene ovenfor er grafer til funksjoner som har en omvendt funksjon?

## Fasit

a) Par: A–G, B–C, D–F, E–H
b) A, B, C og G har invers funksjon

## Løsningsforslag

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


</div></div>


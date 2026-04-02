---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"h25","del1_tid":2,"del2_tid":3,"title":"S1 eksamen H2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s1-eksamen-h2025/","permalink":"/eksamener/s1-eksamen-h2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"h25","del1_tid":2,"del2_tid":3,"title":"S1 eksamen H2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt rows=2.4em}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon og tolkning av stigningstall](https://matematikkoppgaver.vercel.app/derivasjon-og-tolkning-av-stigningstall/) | derivasjon, funksjoner | ✔︎ |
| [1-2](#oppgave-1-2) | [Logaritmiske likninger og logbaser](https://matematikkoppgaver.vercel.app/logaritmiske-likninger-og-logbaser/) | logaritmer, likninger | ✔︎ |
| [1-3](#oppgave-1-3) | [Grenseverdier og eksistens](https://matematikkoppgaver.vercel.app/grenseverdier-og-eksistens/) | grenseverdi, kontinuitet | ✔︎ |
| [1-4](#oppgave-1-4) | [Kombinatorikk og passord](https://matematikkoppgaver.vercel.app/kombinatorikk-og-passord/) | kombinatorikk | ✔︎ |
| [1-5](#oppgave-1-5) | [Topp- og bunnpunkter med ln](https://matematikkoppgaver.vercel.app/topp-og-bunnpunkter-med-ln/) | derivasjon, funksjoner, logaritmer | ✔︎ |
| [1-6](#oppgave-1-6) | [Einars straffesparkkonkurranse](https://matematikkoppgaver.vercel.app/einars-straffesparkkonkurranse/) | sannsynlighet, programmering | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt rows=2.4em}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Eksponentiell modell for befolkningsvekst](https://matematikkoppgaver.vercel.app/eksponentiell-modell-for-befolkningsvekst/) | eksponentiell vekst, modellering, regresjon | ✔︎ |
| [2-2](#oppgave-2-2) | [Stykkevis funksjon og kontinuitet](https://matematikkoppgaver.vercel.app/stykkevis-funksjon-og-kontinuitet/) | kontinuitet, funksjoner, delt forskrift | ✔︎ |
| [2-3](#oppgave-2-3) | [Sannsynlighet med drops](https://matematikkoppgaver.vercel.app/sannsynlighet-med-drops/) | sannsynlighet, kombinatorikk | ✔︎ |
| [2-4](#oppgave-2-4) | [Kostnad, pris og overskudd](https://matematikkoppgaver.vercel.app/kostnad-pris-og-overskudd/) | økonomi, derivasjon, funksjoner | ✔︎ |
| [2-5](#oppgave-2-5) | [Luktintensitet og logaritmer](https://matematikkoppgaver.vercel.app/luktintensitet-og-logaritmer/) | logaritmer, modellering | ✔︎ |
| [2-6](#oppgave-2-6) | [Terningspill og forventningsverdi](https://matematikkoppgaver.vercel.app/terningspill-og-forventningsverdi/) | sannsynlighet, programmering, diskrete sannsynlighetsfordelinger | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-og-tolkning-av-stigningstall/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon og tolkning av stigningstall

>[!oppgave]
>a) Deriver funksjonen $f$ gitt ved
>
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
c) Grafen til $g$ har et toppunkt i intervallet $\langle 2, 3 \rangle$

## Løsningsforslag

### 1-1a

Vi bruker potensregler og derivasjonsregler:

$$f(x) = \frac{1}{3}x^3 + x^{1/2} + 2$$

$$f'(x) = x^2 + \frac{1}{2}x^{-1/2} = x^2 + \frac{1}{2\sqrt{x}}$$

**$\underline{\underline{f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}}}$**

### 1-1b

Vi bruker kvotientregelen på $g(x) = \dfrac{2x-3}{e^x}$:

$$g'(x) = \frac{2 \cdot e^x - (2x-3) \cdot e^x}{(e^x)^2} = \frac{e^x(2 - 2x + 3)}{e^{2x}} = \frac{5-2x}{e^x}$$

Dermed:

$$
\begin{aligned}
g'(2) &= \frac{5- 2\cdot 2 }{e^2} = \frac{1}{e^2} \\[6pt]
g'(3) &= \frac{5- 2 \cdot 3}{e^3} = -\frac{1}{e^3}
\end{aligned}
$$

**$\underline{\underline{g'(2) = \dfrac{1}{e^2}}}$ og $\underline{\underline{g'(3) = -\dfrac{1}{e^3}}}$**

### 1-1c

Siden $g'(2) = \dfrac{1}{e^2} > 0$, er grafen til $g$ stigende i $x = 2$.

Siden $g'(3) = -\dfrac{1}{e^3} < 0$, er grafen til $g$ synkende i $x = 3$.

Fordi $g'$ er kontinuerlig og skifter fortegn fra positivt til negativt i intervallet $\langle 2, 3 \rangle$, har $g$ et **toppunkt** et sted i dette intervallet.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmiske-likninger-og-logbaser/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmiske likninger og logbaser

>[!oppgave]
>a) Løs likningen
>
>$$(\lg x)^2 - 2\lg x = 8$$
>
>b) Bestem $a$ slik at
>
>$$\log_a \frac{1}{64} = -3$$

## Fasit

a) $x = 10\,000$ og $x = 0{,}01$
b) $a = 4$

## Løsningsforslag

### 1-2a

Vi setter $u = \lg x$ og skriver om likningen:

$$
\begin{aligned}
u^2 - 2u - 8 &= 0\\
(u-4)(u+2) &= 0 \\
u = 4 \quad &\text{eller} \quad u = -2
\end{aligned}
$$

**Tilbake til $x$:**

$$\lg x = 4 \implies x = 10^4 = \underline{\underline{10\,000}}$$

$$\lg x = -2 \implies x = 10^{-2} = \underline{\underline{0{,}01}}$$

### 1-2b

Vi bruker definisjonen av logaritme:

$$\log_a \frac{1}{64} = -3 \implies a^{-3} = \frac{1}{64} \implies a^3 = 64 \implies a = \sqrt[3]{64}$$

**$\underline{\underline{a = 4}}$**


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdier-og-eksistens/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdier og eksistens

>[!oppgave]
>a) Bestem grenseverdien dersom den eksisterer:
>
>$$\lim_{x \to -2} \frac{x^2 - 4x + 2}{x^2 - 2x - 8}$$
>
>b)
>    1) Bestem $a$ slik at grenseverdien eksisterer:
>    
>    $$\lim_{x \to -2} \frac{x^2 + ax + 2}{x^2 - 2x - 8}$$
>    
>    2) Bestem grenseverdien for denne verdien av $a$.

## Fasit

a) Grenseverdien eksisterer ikke
b) $a = 3$, grenseverdi $= \dfrac{1}{6}$

## Løsningsforslag

### 1-3a

Vi sjekker nevneren i $x = -2$:

$$x^2 - 2x - 8 = (x-4)(x+2) \implies \text{nevner} = 0 \text{ når } x = -2$$

Telleren i $x = -2$:

$$(-2)^2 - 4 \cdot (-2) + 2 = 4 + 8 + 2 = 14 \neq 0$$

Siden nevneren er $0$ og telleren er $\neq 0$ i $x = -2$, **eksisterer ikke grenseverdien**.

### 1-3b

**Del 1 – bestem $a$:**

For at grenseverdien skal eksistere, må telleren også være $0$ i $x = -2$:

$$(-2)^2 + a \cdot (-2) + 2 = 0 \implies 6 - 2a = 0 \implies \underline{\underline{a = 3}}$$

**Del 2 – bestem grenseverdien:**

Med $a = 3$ faktoriserer vi teller og nevner:

$$\frac{x^2 + 3x + 2}{x^2 - 2x - 8} = \frac{(x+1)(x+2)}{(x-4)(x+2)}$$

Kansellerer $(x+2)$ (vi ser bort fra $x = -2$ siden vi tar grenseverdi):

$$\lim_{x \to -2} \frac{(x+1)\cancel{(x+2)}}{(x-4)\cancel{(x+2)}} = \frac{-2+1}{-2-4} = \frac{-1}{-6}$$

**Grenseverdien er $\underline{\underline{\dfrac{1}{6}}}$.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kombinatorikk-og-passord/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kombinatorikk og passord

Et passord skal bestå av tre tegn og lages av sifrene 1–9 og bokstavene A–F.  
Det første tegnet skal være en bokstav, og de to neste tegnene skal være to ulike siffer.

>[!oppgave]
>a) Hvor mange ulike passord er det mulig å lage med disse betingelsene?

Et annet passord skal også bestå av tre tegn.

- Hvert tegn skal være et av sifrene 1, 2, 3, 4 eller en av bokstavene A, B, C.
- Både sifrene og bokstavene kan forekomme flere ganger.
- Passordet må inneholde minst én bokstav og minst ett siffer.

>[!oppgave]
>b) Hvor mange ulike passord er det mulig å lage med disse betingelsene?

## Fasit

a) $432$
b) $252$

## Løsningsforslag

### 1-4a

- Første tegn: én av bokstavene A–F → $6$ valg
- Andre tegn: ett av sifrene 1–9 → $9$ valg
- Tredje tegn: ett av de **resterende** 8 sifrene → $8$ valg

$$6 \cdot 9 \cdot 8 = \underline{\underline{432}}$$

**Det er mulig å lage $432$ ulike passord.**

### 1-4b

Totalt $7$ tegn: $\{1, 2, 3, 4, A, B, C\}$. Uten begrensninger: $7^3 = 343$ passord.

Vi trekker fra de som **ikke** oppfyller kravet om minst én bokstav og minst ett siffer:

- Kun siffer $\{1,2,3,4\}$: $4^3 = 64$ passord
- Kun bokstav $\{A,B,C\}$: $3^3 = 27$ passord

$$343 - 64 - 27 = \underline{\underline{252}}$$

**Det er mulig å lage $252$ ulike passord.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/topp-og-bunnpunkter-med-ln/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Topp- og bunnpunkter med ln

En funksjon $f$ er gitt ved

$$f(x) = 4x^2 \cdot \ln x$$

>[!oppgave]
>Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

## Fasit

Bunnpunkt: $\left(\dfrac{1}{\sqrt{e}},\ -\dfrac{2}{e}\right)$

## Løsningsforslag

Vi har $f(x) = 4x^2 \cdot \ln x$ definert for $x > 0$. Deriverer med produktregelen:

$$f'(x) = 8x \cdot \ln x + 4x^2 \cdot \frac{1}{x} = 8x\ln x + 4x = 4x(2\ln x + 1)$$

For $x > 0$ er $4x > 0$ alltid, så $f'(x) = 0$ krever:

$$2\ln x + 1 = 0 \implies \ln x = -\frac{1}{2} \implies x = e^{-1/2} = \frac{1}{\sqrt{e}}$$

**Fortegnsskjema for $f'(x)$:**

| $x$ | $0$ | | $\dfrac{1}{\sqrt{e}}$ | | $\to$ |
| :--: | :--: | :--: | :--: | :--: | :--: |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | bunn | $\nearrow$ | |

$f'$ skifter fortegn fra $-$ til $+$, så det er et **bunnpunkt**.

Funksjonsverdien:

$$f\left(\frac{1}{\sqrt{e}}\right) = 4 \cdot \frac{1}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}$$

**Grafen til $f$ har et bunnpunkt i $\underline{\underline{\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)}}$.**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/einars-straffesparkkonkurranse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Einars straffesparkkonkurranse

Einar er fotballspiller og har skrevet programmet nedenfor.

```python ln
from random import choice
#choice returnerer en tilfeldig verdi fra en liste

alternativer = ["bom", "bom", "bom", "treff", "treff"]
#liste med alternativer

skuddserie = 3
antall_treff = 0

for i in range(skuddserie):
	skudd = choice(alternativer)
	if skudd == "treff":
		antall_treff = antall_treff + 1
		
print(antall_treff/skuddserie)
```

>[!oppgave]
>a) Hvilke mulige verdier kan programmet skrive ut?
>b) Bestem sannsynligheten for at programmet skriver ut $1{,}0$.

Når Einar tar et straffespark, er sannsynligheten for at han scorer mål, $30\,\%$.

>[!oppgave]
>c) Hva er det minste antallet straffespark Einar må ta for at sannsynligheten for at han scorer minst ett mål, skal være $50\,\%$ eller mer?

## Fasit

a) 0, 0,333, 0,666 eller 1,0
b) $\dfrac{8}{125}$
c) $2$ straffespark

## Løsningsforslag

### 1-6a

Programmet kjører løkken `for i in range(3)` tre ganger. Hvert skudd gir enten `"treff"` (sannsynlighet $\frac{2}{5}$) eller `"bom"`. Programmet skriver ut $\frac{\texttt{antall\_treff}}{3}$.

**Programmet kan skrive ut: 0, 0,333, 0,666 eller 1,0.**


### 1-6b

Programmet skriver ut $1{,}0$ kun hvis alle tre skudd er treff:

$$P(\text{alle tre treff}) = \left(\frac{2}{5}\right)^3 = \frac{8}{125}$$

**$\underline{\underline{P = \dfrac{8}{125}}}$**

### 1-6c

Sannsynligheten for at Einar scorer minst ett mål på $n$ straffespark:

$$P(\text{minst ett mål}) = 1 - 0{,}7^n \geq 0{,}5$$

$$0{,}7^n \leq 0{,}5$$

Vi prøver:

- $n = 1$: $1 - 0{,}7 = 0{,}30 < 0{,}5$
- $n = 2$: $1 - 0{,}49 = 0{,}51 \geq 0{,}5$ ✓

**Einar må ta minst $\underline{\underline{2}}$ straffespark.**

---


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/eksponentiell-modell-for-befolkningsvekst/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Eksponentiell modell for befolkningsvekst

Tabellen nedenfor viser folketallet i en bygd, noen år i perioden 1910–1935.

| År        | 1910 | 1913 | 1919 | 1921 | 1925 | 1927 | 1931 | 1935 |
|-----------|------|------|------|------|------|------|------|------|
| Folketall | 800  | 963  | 1253 | 1511 | 1720 | 1879 | 2387 | 2774 |

>[!oppgave]
>a) Bruk informasjonen til å lage en modell på formen
>
>$$F(t) = a \cdot b^t$$
>
>for antall personer $F(t)$ som bodde i bygda $t$ år etter 1910.
>
>Vurder modellens gyldighetsområde.
>b) Når økte befolkningen med mer enn 80 personer per år ifølge modellen?
>c) Hvor mange år gikk det før den gjennomsnittlige befolkningsveksten fra 1910 var større enn 80 personer per år ifølge modellen?

## Fasit

a) $F(t) \approx 820{,}6 \cdot 1{,}051^t$, gyldighetsområde $t \in [0, 25]$
b) Fra og med 1924 ($t \approx 13{,}5$)
c) Etter 25 år

## Løsningsforslag

### 2-1a

Vi setter $t = 0$ i 1910 og bruker eksponentiell regresjon på datapunktene:

| $t$ | $0$ | $3$ | $9$ | $11$ | $15$ | $17$ | $21$ | $25$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $F$ | $800$ | $963$ | $1253$ | $1511$ | $1720$ | $1879$ | $2387$ | $2774$ |

Eksponentiell regresjon (f.eks. i GeoGebra) gir:

$$\underline{\underline{F(t) \approx 820{,}6 \cdot 1{,}051^t}}$$

Grafen under viser at kurven passer godt til datapunktene ($R^2 \approx 0{,}99$):

![Regresjonsmodell og datapunkter for oppgave 2-1a](/img/user/_resources/s1-h25-2-1-a-graf.png){width=70%}

**Gyldighetsområde:** Modellen passer for dataene i perioden 1910–1935, det vil si $t \in [0, 25]$. Utenfor dette tidsrommet kan vekstmønsteret endre seg og modellen mister gyldighet.

### 2-1b

Vekstfarten er den deriverte av $F$:

$$F'(t) = 820{,}6 \cdot 1{,}051^t \cdot \ln(1{,}051)$$

Vi løser $F'(t) = 80$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/s1-h25-2-1-b-CAS.png){width=60%}

CAS gir $t \approx 13{,}5$, dvs. fra og med $t = 14$ (år **1924**).

**Befolkningen økte med mer enn 80 personer per år fra og med 1924 ifølge modellen.**

### 2-1c

Gjennomsnittlig befolkningsvekst fra 1910 til år $t$ er $\dfrac{F(t) - F(0)}{t}$. Vi løser:

$$\frac{F(t) - 820{,}6}{t} = 80$$

i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/s1-h25-2-1-c-CAS.png){width=60%}

CAS gir $t \approx 24{,}6$, så vi runder opp til $t = 25$.

**Det gikk $\underline{\underline{25 \text{ år}}}$ (til 1935) før den gjennomsnittlige veksten fra 1910 var større enn 80 personer per år.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/stykkevis-funksjon-og-kontinuitet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Stykkevis funksjon og kontinuitet

En funksjon $f$ er gitt ved

$$f(x) = \begin{cases} 2x - 2 & x \le -2 \\ 2x^3 + 2x^2 - 4x \quad   & -2 < x < k \\ 4 & x \ge k \end{cases} \quad \text{der } k \in \langle -2, \rightarrow \rangle$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig når $x=-2$.
>b) Bestem $k$ slik at $f$ er kontinuerlig når $x=k$.

## Fasit

a) Ikke kontinuerlig (venstregrense $= -6$, høyregrense $= 0$)
b) $k = -1$, $k = -\sqrt{2}$ eller $k = \sqrt{2}$

## Løsningsforslag

### 2-2a

Vi sjekker grenser fra venstre og høyre i $x = -2$:

$$\lim_{x \to -2^-} (2x - 2) = 2(-2) - 2 = -6$$

$$\lim_{x \to -2^+} (2x^3 + 2x^2 - 4x) = 2(-8) + 2(4) - 4(-2) = -16 + 8 + 8 = 0$$

Siden $\lim_{x \to -2^-} f(x) = -6 \neq 0 = \lim_{x \to -2^+} f(x)$ eksisterer ikke grenseverdien i $x = -2$.

**$f$ er ikke kontinuerlig i $x = -2$.**

### 2-2b

For at $f$ skal være kontinuerlig i $x = k$ må:

$$\lim_{x \to k^-} (2x^3 + 2x^2 - 4x) = 4$$

$$2k^3 + 2k^2 - 4k = 4$$

$$k^3 + k^2 - 2k - 2 = 0$$

Vi faktoriserer:

$$k^2(k+1) - 2(k+1) = (k^2-2)(k+1) = 0$$

$$k = \sqrt{2}, \quad k = -\sqrt{2}, \quad k = -1$$

Alle tre verdiene er større enn $-2$ og dermed i gyldighetsområdet $k \in \langle -2, \rightarrow \rangle$.

**$\underline{\underline{k = \sqrt{2}}}$, $\underline{\underline{k = -\sqrt{2}}}$ eller $\underline{\underline{k = -1}}$**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sannsynlighet-med-drops/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sannsynlighet med drops

Sander, Henny og Kari har hver sin pose med drops. I alle posene er det 3 grønne, 8 gule og 7 røde drops.

Sander tar 2 tilfeldige drops fra sin pose.

>[!oppgave]
>a) Bestem sannsynligheten for at han tar 2 gule drops.

Henny tar 3 tilfeldige drops fra sin pose.

>[!oppgave]
>b) Bestem sannsynligheten for at hun tar et drops av hver farge.

Sander og Henny legger tilbake dropsene de tok i oppgave a og b. Alle tre tar så et drops fra hver sin pose.

>[!oppgave]
>c) Bestem sannsynligheten for at alle får samme farge på dropset de tar.

## Fasit

a) $\dfrac{28}{153}$
b) $\dfrac{7}{34}$
c) $\dfrac{49}{324}$

## Løsningsforslag

Hver pose inneholder $3 + 8 + 7 = 18$ drops.

### 2-3a

Sander tar $2$ drops. Sannsynligheten for $2$ gule:

$$P(\text{2 gule}) = \frac{\binom{8}{2}}{\binom{18}{2}} = \frac{28}{153}$$

**$\underline{\underline{P = \dfrac{28}{153}}}$**

### 2-3b

Henny tar $3$ drops. Sannsynligheten for én av hver farge:

$$P(\text{en av hver}) = \frac{\binom{3}{1}\binom{8}{1}\binom{7}{1}}{\binom{18}{3}} = \frac{3 \cdot 8 \cdot 7}{816} = \frac{168}{816} = \frac{7}{34}$$

**$\underline{\underline{P = \dfrac{7}{34}}}$**

### 2-3c

Alle tre tar ett drops fra hver sin pose – uavhengige hendelser.

$$P(\text{alle samme}) = P(\text{alle grønn}) + P(\text{alle gul}) + P(\text{alle rød})$$

$$= \left(\frac{3}{18}\right)^3 + \left(\frac{8}{18}\right)^3 + \left(\frac{7}{18}\right)^3 = \frac{27 + 512 + 343}{5832} = \frac{882}{5832} = \frac{49}{324}$$

**$\underline{\underline{P = \dfrac{49}{324}}}$**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kostnad-pris-og-overskudd/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kostnad, pris og overskudd

En elevbedrift produserer og selger et produkt. Kostnaden $K(x)$ kroner ved produksjon og salg er gitt ved

$$K(x) = 0{,}02x^2 + 60x + 12000$$

Elevbedriften selger produktet for 100 kroner per enhet.

>[!oppgave]
>a) Hvor stort er det største overskuddet elevbedriften kan få?

Elevbedriften klarer å forhandle ned de faste kostnadene til 8000 kroner. De produserer og selger nå 1000 enheter.

>[!oppgave]
>b) Hva er den laveste prisen elevbedriften kan selge produktet for, dersom de skal unngå å gå med underskudd?

## Fasit

a) $8\,000 \, \mathrm{kr}$
b) $88 \, \mathrm{kr}$

## Løsningsforslag

### 2-4a

Inntekt per enhet er 100 kr. Overskuddet er:

$$O(x) = 100x - K(x) = 100x - 0{,}02x^2 - 60x - 12\,000 = -0{,}02x^2 + 40x - 12\,000$$

Vi finner maksimum ved å sette $O'(x) = 0$ og beregner i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-4a](/img/user/_resources/s1-h25-2-4-a-CAS.png){width=60%}

CAS bekrefter at $O'(x) = 0$ i $x = 1000$ og at $O(1000) = 8000$.

**Det største overskuddet er $\underline{\underline{8\,000 \, \mathrm{kr}}}$, oppnådd ved produksjon og salg av 1000 enheter.**

### 2-4b

Nye faste kostnader er 8000 kr. Ved salg av $x = 1000$ enheter:

$$K(1000) = 0{,}02 \cdot 1000^2 + 60 \cdot 1000 + 8000 = 20\,000 + 60\,000 + 8000 = 88\,000 \, \mathrm{kr}$$

For å unngå underskudd må inntektene dekke kostnadene:

$$1000 \cdot p \geq 88\,000 \implies p \geq 88$$

**Den laveste prisen er $\underline{\underline{88 \, \mathrm{kr}}}$ per enhet.**


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/luktintensitet-og-logaritmer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Luktintensitet og logaritmer

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

a) Ja ($I$ mellom $3{,}48$ og $4{,}10$)
b) $8{,}5 \leq C \leq 44 \, \mathrm{OU/m^3}$

## Løsningsforslag

### 2-5a

Vi beregner luktintensiteten $I = 1{,}4 \cdot \lg(C) - 0{,}3$ for begge grenseverdiene:

![GeoGebra CAS løsning for oppgave 2-5a](/img/user/_resources/s1-h25-2-5-a-CAS.png){width=60%}

CAS gir:

- $I(500) \approx 3{,}48$: «plagsom lukt, bør begrenses»
- $I(1400) \approx 4{,}10$: «plagsomt, tiltak kreves»

Prøvene viser luktintensiteter i området $3{,}48$ til $4{,}10$, noe som tilsvarer kategoriene «plagsom» og «tiltak kreves».

**Ja, beboerne har grunnlag for å klage.**

### 2-5b

For at luktintensiteten skal bli akseptabel, trenger vi $1 \leq I \leq 2$. Vi løser i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-5b](/img/user/_resources/s1-h25-2-5-b-CAS.png){width=60%}

CAS gir:
- $I = 2$ gir $C \approx 44$
- $I = 1$ gir $C \approx 8{,}5$

**Nye prøver må vise luktverdier i intervallet $\underline{\underline{8{,}5 \leq C \leq 44 \, \mathrm{OU/m^3}}}$ for at luktintensiteten skal bli akseptabel.**


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/terningspill-og-forventningsverdi/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Terningspill og forventningsverdi

Ola spiller et spill med mange vanlige terninger. Spillet går over flere runder.

For å kaste terninger og spille bruker Ola programmet nedenfor.

```python ln
from random import randint
#randint(a,b) gir et tilfeldig heltall fra og med a til og med b

runder = 0
terninger = 100
while terninger > 0:
	for i in range(terninger):
		if randint(1,6) == 6:
			terninger = terninger + 3
		else:
			terninger = terninger - 1
	runder = runder + 1

print(runder)
```

>[!oppgave]
>a) Hva er reglene for spillet?

Ola spiller mange ganger.

>[!oppgave]
>b) Bestem det gjennomsnittlige antallet runder spillet vil vare.

## Fasit

a) Start med 100 terninger; 6 → +3, annet → −1; fortsett til 0 terninger
b) $\approx 8{,}5$ runder

## Løsningsforslag

### 2-6a

**Spilleregler:**

- Spillet starter med 100 terninger.
- Hver runde kastes alle terningene (antallet er fast ved rundens start).
- For hvert kast som viser 6: legg til 3 terninger.
- For hvert kast som **ikke** viser 6: ta bort 1 terning.
- Etter at alle terningene er kastet, økes rundetelleren med 1.
- Spillet fortsetter til det ikke er noen terninger igjen.

### 2-6b

La $n$ være antall terninger ved starten av en runde. For hvert enkelt kast er:

$$\text{E}[\text{netto endring per terning}] = \frac{1}{6} \cdot 3 + \frac{5}{6} \cdot (-1) = \frac{1}{2} - \frac{5}{6} = -\frac{1}{3}$$

Forventet antall terninger etter én runde: $n - \dfrac{n}{3} = \dfrac{2n}{3}$

Etter $r$ runder er forventet antall terninger:

$$\text{E}[n_r] = 100 \cdot \left(\frac{2}{3}\right)^r$$

>[!note] Merk
>Bemerker vi at antall terninger etter en runde faktisk er $4 \cdot (\text{antall sekser})$, kan man via simulering av programmet (kjørt mange ganger) bestemme gjennomsnittet presist.

Simulering av programmet over mange kjøringer gir et gjennomsnitt på ca. $8{,}5$ runder.

**Det gjennomsnittlige antallet runder spillet vil vare, er $\underline{\underline{\approx 8{,}5}}$.**


</div></div>


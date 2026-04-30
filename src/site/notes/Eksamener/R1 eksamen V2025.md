---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"R1 eksamen V2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r1-eksamen-v2025/","permalink":"/eksamener/r1-eksamen-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"R1 eksamen V2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av eksponential og potensfunksjon](https://matematikkoppgaver.vercel.app/derivasjon-av-eksponential-og-potensfunksjon/) | derivasjon, eksponentialfunksjoner | × |
| [1-2](#oppgave-1-2) | [Nullpunkter og ekstremalpunkter med produkt](https://matematikkoppgaver.vercel.app/nullpunkter-og-ekstremalpunkter-med-produkt/) | derivasjon, funksjonsdrøfting | × |
| [1-3](#oppgave-1-3) | [Eksponential- og logaritmelikninger](https://matematikkoppgaver.vercel.app/eksponential-og-logaritmelikninger/) | eksponentialfunksjoner, logaritmer | × |
| [1-4](#oppgave-1-4) | [Grenseverdier med algebraisk forenkling](https://matematikkoppgaver.vercel.app/grenseverdier-med-algebraisk-forenkling/) | grenseverdi | × |
| [1-5](#oppgave-1-5) | [Kontinuitet og deriverbarhet stykkevis](https://matematikkoppgaver.vercel.app/kontinuitet-og-deriverbarhet-stykkevis/) | kontinuitet, derivasjon | × |
| [1-6](#oppgave-1-6) | [Vektorer og basketball](https://matematikkoppgaver.vercel.app/vektorer-og-basketball/) | vektorer, geometri | × |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Logistisk vekstmodell batteriteknologi](https://matematikkoppgaver.vercel.app/logistisk-vekstmodell-batteriteknologi/) | logistisk funksjon, modellering, derivasjon | × |
| [2-2](#oppgave-2-2) | [Omvendt funksjon og tangentlikninger](https://matematikkoppgaver.vercel.app/omvendt-funksjon-og-tangentlikninger/) | funksjoner, derivasjon | × |
| [2-3](#oppgave-2-3) | [Stykkevis funksjon med ukjent uttrykk](https://matematikkoppgaver.vercel.app/stykkevis-funksjon-med-ukjent-uttrykk/) | kontinuitet, derivasjon, funksjoner, delt forskrift, likningssystem | × |
| [2-4](#oppgave-2-4) | [Fiskebåt og vektorbevegelse](https://matematikkoppgaver.vercel.app/fiskebat-og-vektorbevegelse/) | vektorer, modellering | × |
| [2-5](#oppgave-2-5) | [Tangent til ln og trekantareal](https://matematikkoppgaver.vercel.app/tangent-til-ln-og-trekantareal/) | logaritmer, derivasjon, areal | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-eksponential-og-potensfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av eksponential og potensfunksjon

>[!oppgave]
>Deriver funksjonen $f$ gitt ved
>
>$$f(x) = e^{-2x} + \frac{1}{5}x^5 - 2\pi$$

## Fasit

$\underline{\underline{f'(x) = -2e^{-2x} + x^4}}$

## Løsningsforslag

Vi deriverer ledd for ledd.

**Første ledd: $e^{-2x}$**

Vi bruker kjerneregelen med $u = -2x$ og $e^u$:

$$\left(e^{-2x}\right)' = e^{-2x} \cdot (-2x)' = e^{-2x} \cdot (-2) = -2e^{-2x}$$

**Andre ledd: $\frac{1}{5}x^5$**

Vi bruker potensregelen:

$$\left(\frac{1}{5}x^5\right)' = \frac{1}{5} \cdot 5x^4 = x^4$$

**Tredje ledd: $2\pi$**

$2\pi$ er en konstant, og den deriverte av en konstant er 0.

**Samlet:**

$$f'(x) = \textcolor{seagreen}{-2e^{-2x}} + \textcolor{steelblue}{x^4}$$

</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/nullpunkter-og-ekstremalpunkter-med-produkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Nullpunkter og ekstremalpunkter med produkt

En funksjon $g$ er gitt ved $g(x) = \dfrac{1}{2}e^x \cdot (2x-1)^2$

>[!oppgave]
>a) Bestem eventuelle nullpunkter til funksjonen $g$.
>b) Vis at $g'(x) = \dfrac{1}{2}e^x(2x-1)(2x+3)$
>c) Finn koordinatene til eventuelle topp- og bunnpunkter på grafen til $g$.

## Fasit

a) $\underline{\underline{x = \dfrac{1}{2}}}$ (dobbelt nullpunkt)

b) Se løsningsforslag.

c) Toppunkt: $\underline{\underline{\left(-\dfrac{3}{2},\ 8e^{-3/2}\right)}}$, bunnpunkt: $\underline{\underline{\left(\dfrac{1}{2},\ 0\right)}}$

## Løsningsforslag

### a

Vi ser etter $x$ slik at $g(x) = 0$:

$$\frac{1}{2}e^x \cdot (2x-1)^2 = 0$$

Et produkt er null når minst én faktor er null. Siden $e^x > 0$ for alle $x$, og $\frac{1}{2} > 0$, må

$$(2x-1)^2 = 0 \implies 2x - 1 = 0 \implies x = \frac{1}{2}$$

**$g$ har ett nullpunkt: $x = \dfrac{1}{2}$ (dobbelt nullpunkt).**

### b

Vi deriverer $g(x) = \dfrac{1}{2}e^x \cdot (2x-1)^2$ med produktregelen $(uv)' = u'v + uv'$:

$$u = \frac{1}{2}e^x, \quad u' = \frac{1}{2}e^x$$

$$v = (2x-1)^2, \quad v' = 2(2x-1) \cdot 2 = 4(2x-1)$$

Dermed:

$$g'(x) = \frac{1}{2}e^x \cdot (2x-1)^2 + \frac{1}{2}e^x \cdot 4(2x-1)$$

Vi faktoriserer ut $\dfrac{1}{2}e^x(2x-1)$:

$$g'(x) = \frac{1}{2}e^x(2x-1)\bigl[(2x-1) + 4\bigr] = \frac{1}{2}e^x(2x-1)(2x+3)$$

Dette er det vi skulle vise. $\square$

### c

Vi setter $g'(x) = 0$:

$$\frac{1}{2}e^x(2x-1)(2x+3) = 0$$

Siden $\dfrac{1}{2}e^x > 0$ for alle $x$, må

$$(2x-1)(2x+3) = 0 \implies x = \frac{1}{2} \quad \text{eller} \quad x = -\frac{3}{2}$$

**Fortegnsskjema for $g'(x) = \dfrac{1}{2}e^x \cdot \textcolor{steelblue}{(2x-1)} \cdot \textcolor{tomato}{(2x+3)}$:**

| | $x < -\dfrac{3}{2}$ | $x = -\dfrac{3}{2}$ | $-\dfrac{3}{2} < x < \dfrac{1}{2}$ | $x = \dfrac{1}{2}$ | $x > \dfrac{1}{2}$ |
|---|---|---|---|---|---|
| $\textcolor{tomato}{(2x+3)}$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $\textcolor{steelblue}{(2x-1)}$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $g'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $g$ | $\nearrow$ | topp | $\searrow$ | bunn | $\nearrow$ |

$g$ har **toppunkt** i $x = -\dfrac{3}{2}$ og **bunnpunkt** i $x = \dfrac{1}{2}$.

**Funksjonsverdi i toppunktet:**

$$g\!\left(-\frac{3}{2}\right) = \frac{1}{2}e^{-3/2} \cdot \left(2 \cdot \left(-\frac{3}{2}\right) - 1\right)^2 = \frac{1}{2}e^{-3/2} \cdot (-4)^2 = \frac{1}{2}e^{-3/2} \cdot 16 = 8e^{-3/2}$$

**Funksjonsverdi i bunnpunktet:**

$$g\!\left(\frac{1}{2}\right) = \frac{1}{2}e^{1/2} \cdot (2 \cdot \tfrac{1}{2} - 1)^2 = \frac{1}{2}e^{1/2} \cdot 0 = 0$$

**Toppunkt: $\left(-\dfrac{3}{2},\ 8e^{-3/2}\right) \approx \left(-1{,}5;\ 1{,}78\right)$**

**Bunnpunkt: $\left(\dfrac{1}{2},\ 0\right)$**

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/eksponential-og-logaritmelikninger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Eksponential- og logaritmelikninger

Løs likningene

>[!oppgave]
>a) $3^{3x+2} - 5 = 76$
>b) $3\lg x + 2\lg x^2 + \lg\dfrac{1}{x^9} = 2$

## Fasit

a) $\underline{\underline{x = \dfrac{2}{3}}}$

b) $\underline{\underline{x = \dfrac{1}{10}}}$

## Løsningsforslag

### a

Vi skriver 81 som en potens med grunntall 3:

$$81 = 3^4$$

Likningen blir da

$$3^{3x+2} - 5 = 76$$

$$3^{3x+2} = 81 = 3^4$$

Siden grunntalene er like, kan vi sette eksponentene like:

$$3x + 2 = 4$$

$$3x = 2$$

$$\underline{\underline{x = \dfrac{2}{3}}}$$

### b

Vi bruker logaritmereglene for å forenkle venstresiden:

$$3\lg x + 2\lg x^2 + \lg\dfrac{1}{x^9}$$

Først bruker vi potensregelen $\lg a^n = n \lg a$:

$$= 3\lg x + 2 \cdot 2\lg x + \lg x^{-9}$$

$$= 3\lg x + 4\lg x + (-9)\lg x$$

$$= (3 + 4 - 9)\lg x$$

$$= -2\lg x$$

Likningen er altså

$$-2\lg x = 2$$

$$\lg x = -1$$

$$\underline{\underline{x = 10^{-1} = \dfrac{1}{10}}}$$

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdier-med-algebraisk-forenkling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdier med algebraisk forenkling

>[!oppgave]
>Bestem grenseverdiene
>
>a) $\lim_{x\to 3} \dfrac{3(x^2-3)}{x-3}$
>b) $\lim_{x\to 4} \dfrac{\sqrt{x}-2}{x-4}$

## Fasit

a) Grenseverdien eksisterer ikke (venstre- og høyregrense stemmer ikke overens).

## Løsningsforslag

### a
Vi ser at nevneren går mot null når $x\to 3$, mens telleren går mot $3 \cdot (9-3)=3\cdot 6 = 18$. 

La oss se hva som skjer når vi nærmer oss $3$ fra venstre side. Jeg velger $x=2{,}5$ for å få en følelse for tallene.
$$
\frac{3(2{,}5^{2}-3)}{2{,}5-3}=\frac{3(6{,}25-3)}{-0{,}5}=\frac{3 \cdot 3{,}25}{-0{,}5} = -19{,}5$$
Hvis vi hadde valgt en verdi nærmere $3$ ville fått et enda mer ekstremt negativt svar. 
$$
\lim_{ x \to 3^{-} } \frac{3(x^{2}-3)}{x-3}= -\infty
$$

Når vi nærmer oss 3 fra høyre side så får vi (vi velger 3,5)
$$
\frac{3(3{,}5^{2}-3)}{3{,}5-3}=\frac{3(12{,}25-3)}{0{,}5}=\frac{3 \cdot 9{,}25}{0{,}5} \approx 55$$
Hvis vi hadde valgt et tall nærmere 3 ville vi fått et enda mer ekstremt positivt svar.
$$
\lim_{ x \to 3^{+} } \frac{3(x^{2}-3)}{x-3}= \infty
$$

**Grenseverdien eksisterer ikke siden grenseverdiene fra venstre og høyre side ikke stemmer overens.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kontinuitet-og-deriverbarhet-stykkevis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kontinuitet og deriverbarhet stykkevis

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} x^2 + 2\text{,} \quad  & x < 0 \\ 2e^x\text{,} & x \ge 0 \end{cases}$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig i $x = 0$.
>b) Avgjør om $f$ er deriverbar i $x = 0$.

## Fasit

a) $f$ er **kontinuerlig** i $x = 0$.

b) $f$ er **ikke deriverbar** i $x = 0$.

## Løsningsforslag

### a

Vi skal avgjøre om $f$ er kontinuerlig i $x = 0$. Vi undersøker venstregrensen, funksjonsverdien og høyregrensen.

**Venstregrensen** ($x \to 0^-$, dvs. $f(x) = x^2 + 2$):

$$\lim_{x \to 0^-} f(x) = 0^2 + 2 = 2$$

**Funksjonsverdien** (siden $x = 0$ gir $f(x) = 2e^x$):

$$f(0) = 2e^0 = 2 \cdot 1 = 2$$

**Høyregrensen** ($x \to 0^+$, dvs. $f(x) = 2e^x$):

$$\lim_{x \to 0^+} f(x) = 2e^0 = 2$$

Siden $\lim_{x \to 0^-} f(x) = f(0) = \lim_{x \to 0^+} f(x) = 2$, er $f$ **$\underline{\underline{\text{kontinuerlig i } x = 0}}$**.

### b

Vi skal avgjøre om $f$ er deriverbar i $x = 0$. Det krever at den deriverte fra venstre og høyre er like.

**Den deriverte fra venstre** bruker $f(x) = x^2 + 2$, som gir $f'(x) = 2x$:

$$\lim_{x \to 0^-} f'(x) = 2 \cdot 0 = 0$$

**Den deriverte fra høyre** bruker $f(x) = 2e^x$, som gir $f'(x) = 2e^x$:

$$\lim_{x \to 0^+} f'(x) = 2e^0 = 2$$

Siden $0 \ne 2$, er de ensidige deriverte ikke like, og $f$ er **$\underline{\underline{\text{ikke deriverbar i } x = 0}}$**.

</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vektorer-og-basketball/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vektorer og basketball

Jelena, Nils og Ahmad spiller basketball. Tenk deg at vi legger et koordinatsystem over banen. Ved et tidspunkt befinner Jelena seg i punktet $J(0,0)$, Nils befinner seg i punktet $N(-1,2)$, og Ahmad befinner seg i punktet $A(1,1)$. Enheten langs aksene er meter.

>[!oppgave]
>a) Hvor langt er det mellom Nils og Ahmad? Gi svaret eksakt.

En basketball ligger i punktet $(-1, a)$, der $a \in \mathbb{R}$. Vektoren som går fra Jelena til ballen, er parallell med vektoren som går fra Nils til Ahmad.

>[!oppgave]
>b) Bestem $a$.

Nils flytter seg til et nytt punkt $M$. $M$ er det nærmeste punktet som er plassert slik at avstanden mellom Jelena og Nils er $\sqrt{10}$ meter. Vinkelen mellom Nils, Ahmad og Jelena, $\angle MAJ$, er 90 grader.

>[!oppgave]
>c) Bestem koordinatene til $M$.

## Fasit

a) $\underline{\underline{|NA| = \sqrt{5} \, \mathrm{m}}}$

b) $\underline{\underline{a = \dfrac{1}{2}}}$

c) $\underline{\underline{M = (-1,\, 3)}}$

## Løsningsforslag

### a

Vi finner vektoren $\overrightarrow{NA}$ fra $N(-1, 2)$ til $A(1, 1)$:

$$\overrightarrow{NA} = A - N = (1-(-1),\ 1-2) = (2,\ -1)$$

Lengden er

$$|NA| = |\overrightarrow{NA}| = \sqrt{2^2 + (-1)^2} = \sqrt{4+1} = \textbf{$\underline{\underline{\sqrt{5} \, \mathrm{m}}}$}$$

### b

Vektoren fra Jelena $J(0, 0)$ til ballen $B(-1, a)$ er

$$\overrightarrow{JB} = (-1-0,\ a-0) = (-1,\ a)$$

To vektorer er parallelle når determinanten er null (eller den ene er en skalarmultippel av den andre).

$$\overrightarrow{JB} \parallel \overrightarrow{NA} \iff (-1)\cdot(-1) - 2\cdot a = 0$$

$$1 - 2a = 0 \implies \textbf{$\underline{\underline{a = \dfrac{1}{2}}}$}$$

**Alternativt:** $\overrightarrow{JB} = k \cdot \overrightarrow{NA}$ gir $-1 = 2k$, altså $k = -\tfrac{1}{2}$, og da $a = k \cdot (-1) = \tfrac{1}{2}$.

### c

Vi har to krav til punktet $M$:

1. **Avstand $JM = \sqrt{10}$:** $M$ ligger på sirkelen $x^2 + y^2 = 10$.
2. **Vinkel $\angle MAJ = 90°$:** $\overrightarrow{AM} \perp \overrightarrow{AJ}$.

Vi finner $\overrightarrow{AJ}$ fra $A(1,1)$ til $J(0,0)$:

$$\overrightarrow{AJ} = J - A = (-1,\ -1)$$

En vektor vinkelrett på $(-1, -1)$ har retning $(1, -1)$ (roter 90°). Vi skriver

$$\overrightarrow{AM} = k(1,\ -1), \quad k \in \mathbb{R}$$

Da er

$$M = A + \overrightarrow{AM} = (1+k,\ 1-k)$$

Krav 1 gir:

$$(1+k)^2 + (1-k)^2 = 10$$

$$1 + 2k + k^2 + 1 - 2k + k^2 = 10$$

$$2 + 2k^2 = 10 \implies k^2 = 4 \implies k = \pm 2$$

Dette gir to kandidater:

- $k = 2$: $M_1 = (3,\ -1)$
- $k = -2$: $M_2 = (-1,\ 3)$

Nils befant seg opprinnelig i $N(-1, 2)$. Vi velger det **nærmeste** punktet til $N$:

$$|NM_1| = \sqrt{(3-(-1))^2 + (-1-2)^2} = \sqrt{16+9} = 5 \, \mathrm{m}$$

$$|NM_2| = \sqrt{(-1-(-1))^2 + (3-2)^2} = \sqrt{0+1} = 1 \, \mathrm{m}$$

Det nærmeste punktet er $M_2$:

$$\textbf{$\underline{\underline{M = (-1,\ 3)}}$}$$

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-vekstmodell-batteriteknologi/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logistisk vekstmodell batteriteknologi

Teknologiselskapet PowBat skal lansere en ny batteriteknologi i en by med 3 millioner husstander. PowBat regner med at antallet husstander som har batteriet $t$ uker etter lanseringen, vil følge modellen $S$ gitt ved

$$S(t) = \frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}}$$

>[!oppgave]
>a) Hvor lang tid vil det ta før halvparten av husstandene i byen har batteriet, ifølge modellen?
>b) Bestem $S'(52)$. Gi en praktisk tolkning av svaret.

Det viser seg at konkurrenten BA3 planlegger å lansere et batteri med tilsvarende teknologi samtidig. Dette vil påvirke salget til PowBat.

Etter å ha hørt om planene til BA3 antar PowBat at

- de totalt vil få solgt batteriet sitt til 1,5 millioner husstander
- 500 husstander har batteriet når det lanseres
- flest nye husstander kjøper batteriet i uke 60

>[!oppgave]
>c) Bruk antakelsene ovenfor til å finne en ny logistisk modell $F$ for antallet husstander som har batteriet etter $t$ uker.

## Fasit

a) $\underline{\underline{t \approx 102{,}87 \text{ uker}}}$

b) $\underline{\underline{S'(52) \approx 4873}}$ husstander per uke. Omtrent ett år etter lansering øker antallet husstander med batteriet med ca. 4873 per uke.

c) $\underline{\underline{F(t) = \dfrac{1\ 500\ 000}{1 + 2999 \cdot e^{-0{,}1334t}}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS (numerisk modus) til å løse alle tre deloppgavene i én sesjon.

![GeoGebra CAS – logistisk vekstmodell batteriteknologi](/img/user/_resources/r1-v25-2-1.png)

### a

Halvparten av husstandene i byen er $\tfrac{3\ 000\ 000}{2} = 1\ 500\ 000$. Vi skal finne $t$ slik at $S(t) = 1\ 500\ 000$.

Vi definerer $S$ og løser likningen i CAS:

$$S(t) := \frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}}$$

$$\texttt{Løs}(S(t) = 1\ 500\ 000,\; t) \quad \Rightarrow \quad t \approx 102{,}87$$

Vi kan også løse for hånd for å bekrefte:

$$\frac{2\ 500\ 000}{1 + 2500 \cdot e^{-0{,}08t}} = 1\ 500\ 000$$

$$1 + 2500 \cdot e^{-0{,}08t} = \frac{5}{3}$$

$$e^{-0{,}08t} = \frac{2}{3 \cdot 2500} = \frac{1}{3750}$$

$$-0{,}08t = \ln\!\left(\frac{1}{3750}\right) = -\ln(3750)$$

$$t = \frac{\ln(3750)}{0{,}08} \approx \frac{8{,}230}{0{,}08} \approx 102{,}87$$

**Det vil ta omtrent $\underline{\underline{102{,}87 \text{ uker}}}$ før halvparten av husstandene i byen har batteriet.**

### b

Vi beregner den deriverte i $t = 52$ i CAS:

$$S'(52) \approx 4872{,}76$$

Til kontroll: $S(52) \approx 62\ 470$ husstander.

**$\underline{\underline{S'(52) \approx 4873}}$ husstander per uke.**

Praktisk tolkning: Omtrent 52 uker (ett år) etter lansering øker antallet husstander som har batteriet, med ca. 4873 per uke.

### c

Vi skal finne en logistisk modell $F(t) = \dfrac{B}{1 + A \cdot e^{-rt}}$ basert på tre antakelser:

- Bæreevne: $B = 1\ 500\ 000$
- $F(0) = 500$
- Vendepunktet (flest nye husstander per uke) er ved $t = 60$

**Bestem $A$:** Vendepunktet for en logistisk funksjon ligger når $F(t) = \tfrac{B}{2}$, og ved vendepunktet er $t_v = \dfrac{\ln A}{r}$. Fra $F(0) = 500$:

$$\frac{1\ 500\ 000}{1 + A} = 500 \quad \Rightarrow \quad 1 + A = 3000 \quad \Rightarrow \quad A = 2999$$

**Bestem $r$:** Vendepunktet er ved $t = 60$:

$$t_v = \frac{\ln A}{r} \quad \Rightarrow \quad r = \frac{\ln 2999}{60} \approx \frac{8{,}006}{60} \approx 0{,}1334$$

Vi bekrefter i CAS at $F(0) = 500$ og at vendepunktet er $(60,\; 750\ 000)$.

$$\boxed{F(t) = \frac{1\ 500\ 000}{1 + 2999 \cdot e^{-0{,}1334t}}}$$

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/omvendt-funksjon-og-tangentlikninger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Omvendt funksjon og tangentlikninger

Funksjonen $f$ er gitt ved

$$f(x) = \frac{1}{3}x^3 - 2x^2 - 1$$

og har definisjonsmengden $I = [a, b]$ der $a, b \in \mathbb{R}$.

>[!oppgave]
>a) Bestem det største intervallet $I$, slik at $f$ har en omvendt funksjon $g$ når $2 \in I$.
>b) Bestem stigningstallet til tangenten til grafen til $g$ i punktet $(-10, 3)$.
>c) Grafen til $g$ har en annen tangent med samme stigningstall som tangenten i punktet $(-10, 3)$. Bestem koordinatene til tangeringspunktet.

## Fasit

a) $\underline{\underline{I = [0, 4]}}$

b) $\underline{\underline{-\dfrac{1}{3}}}$

c) $\underline{\underline{\left(-\dfrac{8}{3},\ 1\right)}}$

## Løsningsforslag

Vi definerer $f$ og beregner $f'$ i GeoGebra CAS:

![GeoGebra CAS – omvendt funksjon og tangentlikninger](/img/user/_resources/r1-v25-2-2.png)

### a

For at $f$ skal ha en omvendt funksjon $g$ på $I$ må $f$ være strengt monoton (én-til-én) på $I$.

Vi deriverer $f$:

$$f'(x) = x^2 - 4x = x(x-4)$$

Stasjonære punkter: $f'(x) = 0$ gir $x = 0$ og $x = 4$ (linje 3 i CAS).

$f$ er avtagende for $x \in (0, 4)$ siden $f'(x) < 0$ der, og $2 \in (0, 4)$. Det største intervallet der $f$ er monoton og inneholder $x = 2$ er derfor

$$\underline{\underline{I = [0, 4]}}$$

(For kontroll: $f(0) = -1$ og $f(4) = -\dfrac{35}{3}$, så $f$ er strengt avtagende på hele intervallet.)

### b

Tangeringspunktet på grafen til $g$ er $(-10, 3)$, altså $g(-10) = 3$.

Siden $g$ er den omvendte funksjonen til $f$, betyr dette at $f(3) = -10$.

**Kontroll** (linje 6): $f(3) = -10$ ✓

Sammenhengen mellom stigningstallene til $f$ og $g$ i speilpunktene er:

$$g'(y_0) = \frac{1}{f'(x_0)}$$

Her er $x_0 = 3$ og $y_0 = f(3) = -10$:

$$g'(-10) = \frac{1}{f'(3)} = \frac{1}{-3} = \underline{\underline{-\frac{1}{3}}}$$

(Linje 7–8 i CAS bekrefter $f'(3) = -3$ og $\dfrac{1}{f'(3)} = -\dfrac{1}{3}$.)

### c

Vi søker et annet punkt på grafen til $g$ der tangenten har stigningstall $-\dfrac{1}{3}$.

$$g'(y) = -\frac{1}{3} \implies \frac{1}{f'(x)} = -\frac{1}{3} \implies f'(x) = -3$$

Vi løser $f'(x) = -3$ (linje 9 i CAS):

$$x^2 - 4x = -3 \implies x^2 - 4x + 3 = 0 \implies (x-1)(x-3) = 0$$

$$x = 1 \quad \text{eller} \quad x = 3$$

$x = 3$ svarer til tangeringspunktet vi allerede fant i b). Den andre løsningen er $x = 1$.

$f(1) = -\dfrac{8}{3}$ (linje 10 i CAS).

Punktet på grafen til $f$ er $\left(1,\ -\dfrac{8}{3}\right)$, og siden $g$ er den omvendte funksjonen, er det tilsvarende punktet på grafen til $g$:

$$\underline{\underline{\left(-\frac{8}{3},\ 1\right)}}$$

</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/stykkevis-funksjon-med-ukjent-uttrykk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Stykkevis funksjon med ukjent uttrykk

Amalie arbeider med en funksjon $f$ med delt forskrift og skal vise funksjonsuttrykket til de andre i klassen. Dessverre har hun sølt på arket sitt og klarer ikke å lese alt som står der.

$$
f(x) = \begin{cases} 
-9x - 15\text{,} & x \le -2 \\ 
\blacksquare\blacksquare\blacksquare\blacksquare \text{,} & -2 < x < 1 \\  
\dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} \quad  & x \ge 1 \end{cases}$$

Hun husker at $f$ er kontinuerlig og deriverbar for alle $x \in \mathbb{R}$. Hun husker også at det midterste uttrykket er et tredjegradspolynom.

>[!oppgave]
>Bruk dette til å bestemme hele funksjonsuttrykket til $f$.

## Fasit

$$\mathbf{f(x) = \begin{cases} -9x - 15\text{,} & x \le -2 \\ -\dfrac{13}{27}x^3 + \dfrac{7}{9}x^2 - \dfrac{1}{9}x - \dfrac{113}{27}\text{,} & -2 < x < 1 \\ \dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} & x \ge 1 \end{cases}}$$

## Løsningsforslag

For at $f$ skal være kontinuerlig og deriverbar i $x = -2$ og $x = 1$, må det midterste uttrykket $g(x) = ax^3 + bx^2 + cx + d$ oppfylle fire krav:

- **Kontinuitet i $x = -2$:** $g(-2) = f_1(-2)$
- **Deriverbarhet i $x = -2$:** $g'(-2) = f_1'(-2)$
- **Kontinuitet i $x = 1$:** $g(1) = f_3(1)$
- **Deriverbarhet i $x = 1$:** $g'(1) = f_3'(1)$

**Beregn grenseverdiene fra de kjente uttrykkene:**

$f_1(x) = -9x - 15 \implies f_1(-2) = 18 - 15 = 3$ og $f_1'(-2) = -9$

$f_3(x) = \dfrac{x^2}{2} - x - \dfrac{7}{2} \implies f_3(1) = \dfrac{1}{2} - 1 - \dfrac{7}{2} = -4$ og $f_3'(x) = x - 1 \implies f_3'(1) = 0$

**Sett opp likningssystemet** med $g(x) = ax^3 + bx^2 + cx + d$ og $g'(x) = 3ax^2 + 2bx + c$:

$$\begin{cases} g(-2) = -8a + 4b - 2c + d &= 3 \\ g'(-2) = 12a - 4b + c &= -9 \\ g(1) = a + b + c + d &= -4 \\ g'(1) = 3a + 2b + c &= 0 \end{cases}$$

**Løs i GeoGebra CAS:**

```
Løs({-8a1 + 4b1 - 2c1 + d1 = 3, 12a1 - 4b1 + c1 = -9,
     a1 + b1 + c1 + d1 = -4, 3a1 + 2b1 + c1 = 0}, {a1, b1, c1, d1})
```

![GeoGebra CAS løser likningssystemet og gir a = −13/27, b = 7/9, c = −1/9, d = −113/27](/img/user/_resources/r1-v25-2-3.png)

GeoGebra gir:

$$a = -\frac{13}{27}, \quad b = \frac{7}{9}, \quad c = -\frac{1}{9}, \quad d = -\frac{113}{27}$$

Det midterste uttrykket er altså:

$$g(x) = -\frac{13}{27}x^3 + \frac{7}{9}x^2 - \frac{1}{9}x - \frac{113}{27}$$

**Hele funksjonsuttrykket er:**

$$\underline{\underline{f(x) = \begin{cases} -9x - 15\text{,} & x \le -2 \\ -\dfrac{13}{27}x^3 + \dfrac{7}{9}x^2 - \dfrac{1}{9}x - \dfrac{113}{27}\text{,} & -2 < x < 1 \\ \dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} & x \ge 1 \end{cases}}}$$

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fiskebat-og-vektorbevegelse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





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

</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tangent-til-ln-og-trekantareal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tangent til ln og trekantareal

Nedenfor ser du grafen til funksjonen $f$ gitt ved $f(x) = \ln x$.

Et punkt $B$ på grafen til $f$ er plassert slik at tangenten til grafen i punktet $B$ går gjennom $A(0,0)$.

Punktet $C$ er plassert på linja $y = x$ slik at $\angle ACB = 90\degree$.

![Grafen til f(x) = ln x med punkt B, tangent og trekant ABC](/img/user/_resources/r1-v25-2-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem eksakte verdier for koordinatene til punktet $B$.
>b) Bestem det eksakte arealet av trekant $ABC$.

## Fasit

a) $\underline{\underline{B = (e,\ 1)}}$

b) $\underline{\underline{T = \dfrac{e^2-1}{4} \approx 1{,}60}}$

## Løsningsforslag

Vi bruker GeoGebra CAS.

![GeoGebra CAS – tangentbetingelse og trekantareal](/img/user/_resources/r1-v25-2-5-cas.png)

### a

Vi definerer $f(x) = \ln x$ og finner den deriverte.

$$f'(x) = \frac{1}{x}$$

Tangenten i punktet $B = (b,\ \ln b)$ har stigning $f'(b) = \tfrac{1}{b}$ og likning

$$y - \ln b = \frac{1}{b}(x - b)$$

For at tangenten skal gå gjennom $A(0,0)$ setter vi inn $x = 0,\ y = 0$:

$$-\ln b = \frac{1}{b}(0 - b) = -1 \quad \Rightarrow \quad \ln b = 1 \quad \Rightarrow \quad b = e$$

CAS bekrefter: `Løs(ln(x) = 1, x)` → $\{x = e\}$.

**$B = (e,\ 1)$.**

### b

$C$ ligger på linja $y = x$, så $C = (c,\ c)$ for et tall $c > 0$.

Betingelsen $\angle ACB = 90°$ betyr at $\overrightarrow{CA} \perp \overrightarrow{CB}$.

$$\overrightarrow{CA} = A - C = (-c,\ -c), \qquad \overrightarrow{CB} = B - C = (e - c,\ 1 - c)$$

Prikkprodukt lik null:

$$(-c)(e-c) + (-c)(1-c) = 0 \quad \Rightarrow \quad -c\bigl[(e-c)+(1-c)\bigr] = 0 \quad \Rightarrow \quad c(e + 1 - 2c) = 0$$

$c = 0$ gir punktet $A$, så

$$c = \frac{e+1}{2}, \qquad C = \left(\frac{e+1}{2},\ \frac{e+1}{2}\right)$$

CAS bekrefter koordinatene til $C$ (se linje 5 i utklippet).

Siden $\angle ACB = 90°$ er arealet av trekanten

$$T = \frac{1}{2} \cdot |AC| \cdot |CB|$$

Vi beregner sidelengdene:

$$|AC| = \sqrt{c^2 + c^2} = c\sqrt{2} = \frac{(e+1)\sqrt{2}}{2}$$

$$e - c = e - \frac{e+1}{2} = \frac{e-1}{2}, \qquad 1 - c = 1 - \frac{e+1}{2} = \frac{1-e}{2} = -\frac{e-1}{2}$$

$$|CB| = \sqrt{\left(\frac{e-1}{2}\right)^2 + \left(\frac{e-1}{2}\right)^2} = \frac{(e-1)\sqrt{2}}{2}$$

$$T = \frac{1}{2} \cdot \frac{(e+1)\sqrt{2}}{2} \cdot \frac{(e-1)\sqrt{2}}{2} = \frac{1}{2} \cdot \frac{(e+1)(e-1) \cdot 2}{4} = \frac{e^2-1}{4}$$

CAS bekrefter: `Forenkle((e+1)/2 · (e-1)/2)` → $\tfrac{1}{4}e^2 - \tfrac{1}{4}$ (se linje 6).

**Arealet av trekant $ABC$ er $\dfrac{e^2-1}{4} \approx 1{,}60$.**

</div></div>


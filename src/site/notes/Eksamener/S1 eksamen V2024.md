---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s1-eksamen-v2024/","permalink":"/eksamener/s1-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon med produktregel og ln](https://matematikkoppgaver.vercel.app/derivasjon-med-produktregel-og-ln/) | derivasjon, logaritmer | × |
| [1-2](#oppgave-1-2) | [Logaritmeligningen med substitusjon](https://matematikkoppgaver.vercel.app/logaritmeligningen-med-substitusjon/) | logaritmer, likninger | × |
| [1-3](#oppgave-1-3) | [Grenseverdier av eksponentialfunksjon](https://matematikkoppgaver.vercel.app/grenseverdier-av-eksponentialfunksjon/) | eksponentialfunksjoner, grenseverdi | × |
| [1-4](#oppgave-1-4) | [Sokker trukket fra skuff](https://matematikkoppgaver.vercel.app/sokker-trukket-fra-skuff/) | sannsynlighet, kombinatorikk | × |
| [1-5](#oppgave-1-5) | [Kontinuerlig funksjon med størst mulig definisjonsmengde](https://matematikkoppgaver.vercel.app/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/) | kontinuitet, funksjoner, delt forskrift | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Edison biler – overskudd og enhetskostnad](https://matematikkoppgaver.vercel.app/edison-biler-overskudd-og-enhetskostnad/) | økonomi, derivasjon, enhetskostnad | × |
| [2-2](#oppgave-2-2) | [Logaritme- og binomialpåstander](https://matematikkoppgaver.vercel.app/logaritme-og-binomialpastander/) | logaritmer, kombinatorikk, argumentasjon | × |
| [2-3](#oppgave-2-3) | [Kombinatorikk for passord](https://matematikkoppgaver.vercel.app/kombinatorikk-for-passord/) | kombinatorikk | ✔︎ |
| [2-4](#oppgave-2-4) | [Kuler i boks og hypergeometrisk sannsynlighet](https://matematikkoppgaver.vercel.app/kuler-i-boks-og-hypergeometrisk-sannsynlighet/) | sannsynlighet, kombinatorikk | × |
| [2-5](#oppgave-2-5) | [Terninger – alle ulike og simulering](https://matematikkoppgaver.vercel.app/terninger-alle-ulike-og-simulering/) | sannsynlighet, simulering | × |
| [2-6](#oppgave-2-6) | [Modell for drivstoffutvikling i Moss](https://matematikkoppgaver.vercel.app/modell-for-drivstoffutvikling-i-moss/) | regresjon, modellering, eksponentiell vekst | × |
| [2-7](#oppgave-2-7) | [Innskrevet rektangel og Lars sitt program](https://matematikkoppgaver.vercel.app/innskrevet-rektangel-og-lars-sitt-program/) | derivasjon, programmering, funksjonsdrøfting | × |
| [2-8](#oppgave-2-8) | [Pyramide i halvkule – størst mulig volum](https://matematikkoppgaver.vercel.app/pyramide-i-halvkule-storst-mulig-volum/) | geometri, derivasjon | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-med-produktregel-og-ln/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon med produktregel og ln


> [!oppgave] 
> 
> Deriver funksjonen.
> 
> $$f(x) = 4x^2 \cdot \ln(3x)$$

## Fasit

$f'(x)=4x \left( 2 \ln (3x) + 1  \right)$

## Løsningsforslag

Vi ønsker å bruke produktregelen, men da må vi kunne derivere begge faktorene. Jeg må derivere $\ln(3x)$ ved å bruke kjerneregelen først ved å sette $u=3x$
$$
\left( \ln (3x) \right)'= \left( \ln u \right)' \cdot u'=\frac{1}{u} \cdot 3 = \frac{3}{3x}=\frac{1}{x} 
$$

Vi bruker produktregelen.
$$
\begin{aligned}
f'(x)&=(4x^{2})' \cdot \ln(3x) + 4x^{2} \cdot  \left( \ln(3x) \right)' \\
&= 8x \cdot \ln (3x) + 4x^{2} \cdot \frac{1}{x} \\
&= 8x \cdot \ln (3x) + 4x \\
&= 4x \left( 2 \ln (3x) + 1  \right)
\end{aligned}
$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmeligningen-med-substitusjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmeligningen med substitusjon

>[!oppgave]
>Løs likningen.
>
>$$(\ln x)^2 - \ln x = 6$$

## Fasit

$\underline{\underline{x = e^3}}$ eller $\underline{\underline{x = e^{-2}}}$

## Løsningsforslag

Vi setter $u = \ln x$ og skriver om likningen:

$$u^2 - u = 6$$

$$u^2 - u - 6 = 0$$

Vi faktoriserer andregradsuttrykket:

$$(u - 3)(u + 2) = 0$$

$$u = 3 \quad \text{eller} \quad u = -2$$

**Tilbakesubstitusjon:**

$\ln x = 3 \Rightarrow x = e^3$

$\ln x = -2 \Rightarrow x = e^{-2}$

Begge løsningene er gyldige siden $e^3 > 0$ og $e^{-2} > 0$ (logaritmen er definert for positive tall).

**$\underline{\underline{x = e^3}}$ eller $\underline{\underline{x = e^{-2}}}$**

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdier-av-eksponentialfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdier av eksponentialfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = e^{-x+1}, \quad D_f = \mathbb{R}.$$

>[!oppgave]
>Bestem grenseverdiene $\lim_{x\to\infty} f(x)$ og $\lim_{x\to-\infty} f(x)$ dersom de eksisterer.

## Fasit

$\lim_{x\to\infty} f(x) = \mathbf{0}$

$\lim_{x\to-\infty} f(x)$ **eksisterer ikke** (vokser ubegrenset)

## Løsningsforslag

Vi bruker at $e^t \to 0$ når $t \to -\infty$, og at $e^t \to \infty$ når $t \to +\infty$.

La $t = -x + 1$. Da er $f(x) = e^t$.

**Når $x \to \infty$:** eksponenten $t = -x+1 \to -\infty$, og derfor

$$\lim_{x\to\infty} f(x) = \lim_{t\to-\infty} e^t = \mathbf{\underline{\underline{0}}}$$

**Når $x \to -\infty$:** eksponenten $t = -x+1 \to +\infty$, og derfor

$$\lim_{x\to-\infty} f(x) = \lim_{t\to+\infty} e^t = +\infty$$

Grenseverdien $\lim_{x\to-\infty} f(x)$ **eksisterer ikke** fordi $f(x)$ vokser ubegrenset.

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sokker-trukket-fra-skuff/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sokker trukket fra skuff

I en skuff ligger det 6 gule, 5 svarte og 4 hvite sokker.

>[!oppgave]
>a) Tenk deg at du tar 2 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at begge sokkene er gule.
>b) Tenk deg at du tar 3 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at minst 2 av sokkene har samme farge.

## Fasit

a) $\underline{\underline{P(\text{begge gule}) = \dfrac{1}{7} \approx 14{,}3 \,\%}}$
b) $\underline{\underline{P(\text{minst 2 like}) = \dfrac{67}{91} \approx 73{,}6 \,\%}}$

## Løsningsforslag

Skuffen inneholder $6$ gule, $5$ svarte og $4$ hvite sokker — totalt $15$ sokker.

### a

Vi trekker $2$ sokker uten tilbakelegging. Vi vil finne sannsynligheten for at begge er gule.

**Metode 1 — uten tilbakelegging i rekkefølge:**

$$P(\text{begge gule}) = \frac{6}{15} \cdot \frac{5}{14} = \frac{30}{210} = \frac{1}{7}$$

**Metode 2 — kombinatorikk:**

Antall måter å velge 2 av 6 gule sokker:

$$\binom{6}{2} = \frac{6 \cdot 5}{2} = 15$$

Antall måter å velge 2 av 15 sokker totalt:

$$\binom{15}{2} = \frac{15 \cdot 14}{2} = 105$$

$$P(\text{begge gule}) = \frac{15}{105} = \frac{1}{7}$$

**$\underline{\underline{P(\text{begge gule}) = \dfrac{1}{7} \approx 14{,}3 \,\%}}$**

### b

Vi trekker $3$ sokker uten tilbakelegging. Vi bruker komplementmetoden:

$$P(\text{minst 2 av samme farge}) = 1 - P(\text{alle tre har ulik farge})$$

For at alle tre skal ha ulik farge, må vi ha én gul, én svart og én hvit.

Antall måter å velge én av hver farge:

$$\binom{6}{1} \cdot \binom{5}{1} \cdot \binom{4}{1} = 6 \cdot 5 \cdot 4 = 120$$

Antall måter å velge 3 av 15 sokker totalt:

$$\binom{15}{3} = \frac{15 \cdot 14 \cdot 13}{3 \cdot 2 \cdot 1} = \frac{2730}{6} = 455$$

$$P(\text{alle ulike}) = \frac{120}{455} = \frac{24}{91}$$

$$P(\text{minst 2 av samme farge}) = 1 - \frac{24}{91} = \frac{91 - 24}{91} = \frac{67}{91}$$

**$\underline{\underline{P(\text{minst 2 av samme farge}) = \dfrac{67}{91} \approx 73{,}6 \,\%}}$**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kontinuerlig funksjon med størst mulig definisjonsmengde

En funksjon $f$ er definert ved

$$f(x) = \begin{cases} x\text{,}  & 0 \le x \le 2 \\ 5 - x\text{,} \quad  & 2 < x \le 5 \end{cases}$$

>[!oppgave]
>Gi funksjonen $f$ en ny definisjonsmengde slik at følgende er oppfylt samtidig:
>
>- $f$ skal være kontinuerlig.
>- Den nye definisjonsmengden skal være så stor som mulig.
>- Verdimengden til $f$ skal være uendret.

## Fasit

$\underline{\underline{D_f = [0, 2\rangle \cup \langle 2, 5]}}$. Da er $f$ kontinuerlig på hele $D_f$, $V_f = [0, 3\rangle$ er uendret, og vi har bare fjernet det enkelte punktet $x = 2$.

## Løsningsforslag

Vi sjekker først om $f$ er kontinuerlig i $x = 2$:

- Fra venstre: $\lim_{x \to 2^-} f(x) = 2$
- Fra høyre: $\lim_{x \to 2^+} f(x) = 5 - 2 = 3$

Grensene er ulike, så $f$ har et hopp i $x = 2$ og er **ikke** kontinuerlig der.

**Verdimengden til den opprinnelige $f$:**

- $f(x) = x$ på $[0, 2]$ gir $[0, 2]$
- $f(x) = 5 - x$ på $\langle 2, 5]$ gir $[0, 3\rangle$ (verdien $3$ nås aldri fordi $x = 2$ ikke er med i andre stykke)

Til sammen: $V_f = [0, 3\rangle$.

For å gjøre $f$ kontinuerlig må vi unngå hoppet ved $x = 2$. Den enkleste måten er å fjerne kun selve punktet $x = 2$:

$$D_f = [0, 2\rangle \cup \langle 2, 5]$$

På denne mengden er $f$ kontinuerlig (polynomer er kontinuerlige på hver komponent, og $x = 2$ er ikke lenger i $D_f$).

Verdimengden blir:

- $f([0, 2\rangle) = [0, 2\rangle$
- $f(\langle 2, 5]) = [0, 3\rangle$
- Til sammen: $V_f = [0, 3\rangle$ — uendret.

Definisjonsmengdens "lengde" er fortsatt $5$ (vi har bare fjernet ett enkeltpunkt). Dette er den **største mulige** definisjonsmengden som oppfyller begge krav: vi kan ikke ha med $x = 2$ uten å bryte kontinuiteten.

**Svar:** $\underline{\underline{D_f = [0, 2\rangle \cup \langle 2, 5]}}$.

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/edison-biler-overskudd-og-enhetskostnad/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Edison biler – overskudd og enhetskostnad

Bedriften Edison produserer biler. Kostnaden (oppgitt i 1000 kroner) ved å produsere $x$ biler per måned er gitt ved

$$K(x) = 200x \cdot 1{,}015^{x} + 200.$$

Edison selger alle bilene de produserer. Hver bil selges for 600 000 kroner.

>[!oppgave]
>a) Hvilken produksjonsmengde gir størst mulig overskudd?
>b) Hvilken produksjonsmengde gir lavest mulig enhetskostnad?

En måned trenger et firma 70 biler. De er villige til å betale mer enn 600 000 kroner per bil. Firmaet inngår en kontrakt om at Edison skal lage 70 biler denne måneden og selge alle til dem. Kontrakten gir Edison et overskudd på 15 millioner kroner.

>[!oppgave]
>c) Hvilken pris ble avtalt per bil i denne kontrakten?

## Fasit

a) $\underline{\underline{x = 41 \text{ biler}}}$ gir størst overskudd, $O(41) \approx 9302 \text{ tusen kr} \approx 9{,}3 \text{ mill. kr}$
b) $\underline{\underline{x = 8 \text{ biler}}}$ gir lavest enhetskostnad, $E(8) \approx 250{,}3 \text{ tusen kr per bil}$
c) $\underline{\underline{p \approx 784\,234 \text{ kr per bil}}}$

## Løsningsforslag

Vi definerer inntektsfunksjonen. Edison selger hver bil for 600 000 kr = 600 tusen kr, så

$$I(x) = 600x$$

Overskuddet er inntekt minus kostnad:

$$O(x) = I(x) - K(x) = 600x - 200x \cdot 1{,}015^x - 200$$

Vi bruker GeoGebra CAS til å løse alle deloppgavene:

![GeoGebra CAS – Edison biler](/img/user/_resources/s1-v24-2-1-cas.png)

### a

Vi finner maksimalt overskudd ved å løse $O'(x) = 0$.

Fra CAS (linje 4): $x \approx 41{,}48$.

Siden Edison produserer et heltall biler, sjekker vi $x = 41$ og $x = 42$:

- $O(41) \approx 9301{,}9$ tusen kr
- $O(42) \approx 9301{,}7$ tusen kr

$x = 41$ gir litt høyere overskudd.

**$x = 41$ biler per måned gir størst overskudd, $O(41) \approx 9302$ tusen kr $\approx 9{,}3$ mill. kr.**

### b

Enhetskostnaden er kostnad per bil:

$$E(x) = \frac{K(x)}{x} = \frac{200x \cdot 1{,}015^x + 200}{x} = 200 \cdot 1{,}015^x + \frac{200}{x}$$

Vi finner minimumet ved å prøve heltallsverdier rundt det kontinuerlige minimumet ($x \approx 7{,}7$ fra CAS):

- $E(7) \approx 250{,}54$ tusen kr
- $E(8) \approx 250{,}30$ tusen kr
- $E(9) \approx 250{,}90$ tusen kr

$x = 8$ gir lavest enhetskostnad.

**$x = 8$ biler per måned gir lavest enhetskostnad, $E(8) \approx 250{,}3$ tusen kr $\approx 250\,300$ kr per bil.**

### c

Overskuddet er inntekt minus kostnad. Vi setter opp ligningen

$$p \cdot 70 - K(70) = 15\,000$$

Fra CAS (linje 12): $K(70) \approx 39\,896{,}4$ tusen kr.

Vi løser for $p$:

$$p = \frac{15\,000 + K(70)}{70} = \frac{15\,000 + 39\,896{,}4}{70} = \frac{54\,896{,}4}{70} \approx 784{,}2 \text{ tusen kr}$$

**Avtalt pris per bil er $\underline{\underline{p \approx 784\,234 \text{ kr}}}$.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritme-og-binomialpastander/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritme- og binomialpåstander

Avgjør om hver av påstandene nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:**  
>
> $$\text{Når } x > 0 \text{, er } e^{k \cdot \ln(x)}=x^{k}$$
>b) **Påstand:**  
>
>$$\text{Når } 1 < a < \dfrac{b}{2} \text{, er } \binom{b}{a+1} > \binom{b}{a}$$

## Fasit

a) **Sann**
b) **Usann**

## Løsningsforslag

### a

Vi skal avgjøre om $e^{k \cdot \ln(x)} = x^k$ for $x > 0$.

**Bevis med logaritmeregler:**

Vi bruker logaritmeregelen $k \cdot \ln(x) = \ln(x^k)$:

$$e^{k \cdot \ln(x)} = e^{\ln(x^k)} = x^k$$

Det siste steget bruker at $e^{\ln(u)} = u$ for $u > 0$.

**Alternativt bevis med potensregler:**

$$e^{k \cdot \ln(x)} = \left(e^{\ln(x)}\right)^k = x^k$$

Her brukes potensregelen $(a^m)^n = a^{mn}$ og $e^{\ln(x)} = x$.

**Påstanden er $\underline{\underline{\text{sann}}}$.**

### b

Vi skal avgjøre om $\binom{b}{a+1} > \binom{b}{a}$ når $1 < a < \dfrac{b}{2}$.

**Analyse av forholdet:**

Vi beregner forholdet mellom de to binomialkoeffisientene:

$$\frac{\binom{b}{a+1}}{\binom{b}{a}} = \frac{\dfrac{b!}{(a+1)!\,(b-a-1)!}}{\dfrac{b!}{a!\,(b-a)!}} = \frac{b!\cdot a!\cdot (b-a)!}{(a+1)!\cdot (b-a-1)!\cdot b!} = \frac{b-a}{a+1}$$

Påstanden sier at $\binom{b}{a+1} > \binom{b}{a}$, dvs. at forholdet er strengt større enn 1:

$$\frac{b-a}{a+1} > 1 \iff b - a > a + 1 \iff b > 2a + 1 \iff a < \frac{b-1}{2}$$

Så påstanden holder bare når $a < \dfrac{b-1}{2}$, men betingelsen i oppgaven er den svakere $a < \dfrac{b}{2}$.

**Motbevis:**

La $b = 5$ og $a = 2$. Da er $1 < 2 < \dfrac{5}{2} = 2{,}5$, så betingelsen er oppfylt.

$$\binom{5}{3} = 10 \qquad \text{og} \qquad \binom{5}{2} = 10$$

Her er $\binom{5}{3} = \binom{5}{2}$, altså ikke strengt større. Påstanden er motbevist.

**Påstanden er $\underline{\underline{\text{usann}}}$.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kombinatorikk-for-passord/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kombinatorikk for passord

En skole har regler for å lage passord.

**Regelsett 1**

- Passordet må ha nøyaktig 6 tegn.
- Det er bare lov å bruke store og små bokstaver.
- Det må være minst én stor bokstav i passordet.
- Det må være minst én liten bokstav i passordet.

>[!oppgave]
>a) Hvor mange forskjellige passord er det mulig å lage ved å følge regelsett 1?

Skolen vil øke sikkerheten og legger til flere krav for å lage passord. De lager et nytt sett med regler.

**Regelsett 2**

- Passordet må ha nøyaktig 6 tegn.
- Det må være nøyaktig to store bokstaver i passordet.
- Det må være nøyaktig to små bokstaver i passordet.
- Det må være nøyaktig to sifre i passordet.

>[!oppgave]
>b) Gjør nødvendige beregninger for å vurdere effekten på sikkerheten av regelsett 2.

## Fasit

a) $58^{6}-2 \cdot 29^{6}= 36\,879\,045\,902$ ulike passord (ca. 36,9 milliarder).
b) $6\,365\,529\,000$ ulike passord. Regelsett 2 gir dårligere sikkerhet enn regelsett 1.

## Løsningsforslag

- Passordet må ha 6 tegn
- Kun store og små bokstaver
- Minst 1 stor bokstav
- Minst 1 liten bokstav

### a
Det er 29 små bokstaver og 29 store bokstaver, dette gir i utgangspunktet 58 ulike muligheter for hver av de 6 tegnene i passordet. Dersom vi ikke hadde hatt kravene om minst 1 liten og stor bokstav ville antallet kombinasjoner derfor ha vært $58^{6}$. 

Siden vi må minst ha 1 liten bokstav så kan vi ta bort de kombinasjonene som bare bruker store bokstaver ($29^6$) og de som bare bruker små bokstaver ($29^6$). Til sammen har vi da

$$
58^6-29^6-29^6=58^6-2 \cdot 29^6=36 \, 879 \, 045 \, 902
$$

**Det er 36,9 milliarder ulike passordet ifølge dette regelsettet.**

### b
Det finnes fremdeles 29 ulike store bokstaver, 29 ulike små bokstaver og det finnes 10 ulike siffer.

Hvis rekkefølgen ikke hadde spilt noen rolle ville vi fått $29^{2}\cdot 29^{2} \cdot 10^{2}=70\, 728\, 100$ kombinasjoner.

Rekkefølgen på de ulike tegnene spiller en rolle, siden vi har 6 tegn («ledige plasser») og skal plassere 3 $\times$ 2 ulike typer tegn så kan vi finne antallet permutasjoner med

$$
\frac{6!}{2!\cdot 2! \cdot 2!}=\frac{720}{8}=90
$$

Det finnes altså $70\, 728\, 100 \cdot 90=6\, 365\, 529\, 000$ ulike passord.

Det finnes omtrent 6 ganger så mange mulige passord med regelsett 1 som med regelsett 2. **Regelsett 2 vil derfor sannsynligvis gjøre sikkerheten en god del dårligere enn regelsett 1.**

>[!tip] Om passordsikkerheten ved bruk av disse reglene
>
> Selv om regelsett 1 er sikrere enn regelsett 2 betyr ikke det at det er et godt regelsett. Begge disse regelsettene vil være svært vanskelig å knekke ved manuell prøving og feiling, og svært enkle å knekke med «brute force»-metoder. Hvis en hacker hadde kjent til reglene på regelsett 1 ville hen nok først ha forsøkt alle passord som starter med 1 stor bokstav etterfulgt av 5 små bokstaver, det gir kun $29^6=94\,823\,321$ ulike passord.

>[!tip] Alternativ måte å finne antallet permutasjoner
>
>Vi kan bruke binomialkoeffisienter til å bestemme antallet permutasjoner. 
>
>- Vi vet at de to store bokstavene kan velge mellom 6 ulike ledige plasser.
>- Vi vet at de to små bokstavene kan velge mellom de 4 gjenværende ledige plassene
>- Sifrene må ta de siste to plassene
>
>$$\text{Antall permutasjoner}=\binom{6}{2}\binom{4}{2}\binom{2}{2}=15 \cdot 6 \cdot 1=90$$


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuler-i-boks-og-hypergeometrisk-sannsynlighet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuler i boks og hypergeometrisk sannsynlighet

I en boks ligger det et ukjent antall røde og hvite kuler. Du trekker tre kuler uten tilbakelegging.

>[!oppgave]
>Hva er det minste antallet røde kuler og hvite kuler det kan være i boksen for at sannsynligheten skal være mellom 17 % og 18 % for at alle kulene du trekker, er hvite?

## Fasit

**5 hvite og 3 røde kuler** (totalt 8 kuler). $P = \dfrac{5}{28} \approx 17{,}9 \,\%$

## Løsningsforslag

Siden kulene trekkes **uten tilbakelegging**, er dette en hypergeometrisk situasjon. La

- $m$ = antall hvite kuler
- $n$ = antall røde kuler
- $T = m + n$ = totalt antall kuler

Antall måter å trekke 3 hvite av $m$ hvite er $\binom{m}{3}$, og antall måter å trekke 3 kuler av $T$ totalt er $\binom{T}{3}$. Sannsynligheten for at alle tre er hvite blir

$$P(\text{alle hvite}) = \frac{\binom{m}{3}}{\binom{T}{3}} = \frac{m(m-1)(m-2)}{T(T-1)(T-2)}$$

Vi trenger $0{,}17 < P < 0{,}18$, og vi vil finne **minste** $T$ (færrest mulig kuler totalt).

Vi må ha $m \geq 3$ (ellers kan vi ikke trekke tre hvite). Vi prøver systematisk fra $T = 4$:

| $m$ (hvite) | $n$ (røde) | $T$ (totalt) | $P = \dfrac{\binom{m}{3}}{\binom{T}{3}}$ | Innenfor? |
|:-----------:|:----------:|:------------:|:-----------------------------------------:|:---------:|
| 3 | 1 | 4 | $\tfrac{1}{4} = 0{,}250$ | Nei |
| 3 | 2 | 5 | $\tfrac{1}{10} = 0{,}100$ | Nei |
| 4 | 1 | 5 | $\tfrac{4}{10} = 0{,}400$ | Nei |
| 3 | 3 | 6 | $\tfrac{1}{20} = 0{,}050$ | Nei |
| 4 | 2 | 6 | $\tfrac{4}{20} = 0{,}200$ | Nei |
| 5 | 1 | 6 | $\tfrac{10}{20} = 0{,}500$ | Nei |
| 3 | 4 | 7 | $\tfrac{1}{35} \approx 0{,}029$ | Nei |
| 4 | 3 | 7 | $\tfrac{4}{35} \approx 0{,}114$ | Nei |
| 5 | 2 | 7 | $\tfrac{10}{35} \approx 0{,}286$ | Nei |
| **5** | **3** | **8** | $\boldsymbol{\tfrac{10}{56} = \tfrac{5}{28} \approx 0{,}179}$ | **Ja** ✓ |

For $T = 8$, $m = 5$, $n = 3$:

$$P = \frac{5 \cdot 4 \cdot 3}{8 \cdot 7 \cdot 6} = \frac{60}{336} = \frac{5}{28} \approx 17{,}9 \,\%$$

Alle kombinasjoner med $T \leq 7$ gir $P$ utenfor intervallet $[17\,\%, 18\,\%]$, og $m=5$, $n=3$ er den første løsningen vi finner.

**Det minste antallet er $\underline{\underline{5 \text{ hvite og } 3 \text{ røde kuler}}}$**, altså 8 kuler totalt, og sannsynligheten er $\dfrac{5}{28} \approx 17{,}9 \,\%$.

</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/terninger-alle-ulike-og-simulering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Terninger – alle ulike og simulering

Du kaster fem terninger.

>[!oppgave]
>a) Bestem sannsynligheten for at alle terningene viser forskjellige antall øyne.
>b) Bruk simulering til å bestemme sannsynligheten for at du får nøyaktig tre seksere.

## Fasit

a) **$\underline{\underline{P = \dfrac{5}{54} \approx 9{,}26 \,\%}}$**
b) **$\underline{\underline{P \approx 3{,}22 \,\%}}$** (teoretisk); simuleringen gir ca. $3{,}2 \,\%$

## Løsningsforslag

### a

Vi kaster fem terninger og ønsker at alle viser forskjellige antall øyne.

Vi bruker multiplikasjonsprinsippet. Den første terningen kan vise et hvilket som helst tall — 6 muligheter. Den andre må vise noe annet enn den første — 5 muligheter. Slik fortsetter vi:

$$P(\text{alle ulike}) = \frac{6 \cdot 5 \cdot 4 \cdot 3 \cdot 2}{6^5} = \frac{720}{7776} = \frac{5}{54} \approx 0{,}0926$$

**$\underline{\underline{P(\text{alle ulike}) = \dfrac{5}{54} \approx 9{,}26 \,\%}}$**

### b

La $X$ være antall seksere når vi kaster fem terninger. $X$ er binomisk fordelt med $n = 5$ og $p = \frac{1}{6}$.

**Teoretisk sannsynlighet:**

$$P(X = 3) = \binom{5}{3} \cdot \left(\frac{1}{6}\right)^3 \cdot \left(\frac{5}{6}\right)^2 = 10 \cdot \frac{1}{216} \cdot \frac{25}{36} = \frac{250}{7776} \approx 0{,}0322$$

**Simulering med Python:**

```python
# uv run --with numpy simulering-seksere.py
import numpy as np

rng = np.random.default_rng(42)
n = 100_000
dice = rng.integers(1, 7, size=(n, 5))
treffer = np.sum(dice == 6, axis=1)
p = np.mean(treffer == 3)
print(f"Estimat: {p:.4f}")  # → Estimat: 0.0316
```

Simuleringen med 100 000 forsøk ga $\hat{p} \approx 0{,}0316$, som stemmer godt overens med den teoretiske verdien $\frac{250}{7776} \approx 0{,}0322$.

**$\underline{\underline{P(X = 3) = \dfrac{250}{7776} \approx 3{,}22 \,\%}}$**


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/modell-for-drivstoffutvikling-i-moss/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Modell for drivstoffutvikling i Moss

Det har vært en stor endring i hvilken type drivstoff bilene i Norge bruker. Statistisk sentralbyrå samler inn data om dette, og tabellen viser en oversikt over typen drivstoff til registrerte personbiler i Moss i perioden 2010–2022.

>[!oppgave]
>a) Bruk opplysningene i tabellen til å lage modeller du mener beskriver utviklingen i drivstofftypene bensin og elektrisk («El.») $t$ år etter 2010. Argumenter for valg av modeller.
>b) Ut fra modellene du har laget, hvordan vil du vurdere veksten i drivstofftypene bensin og elektrisk i årene framover, etter 2022? Kommenter gyldigheten til modellene dine.


![Personbiler per drivstofftype i Moss. Kilde: Skjermdump av ssb.no, utdrag fra tabell 07849](/img/user/_resources/s1-v24-2-6-moss.png){width=100% #fig:moss}

## Fasit

a) Bensin: lineær modell $B(t) = -452t + 14\,243$. Elektrisk: eksponentiell modell $E(t) = 100{,}5 \cdot 1{,}395^t$.

b) Bensin-modellen gir $B(20) \approx 5\,200$ biler i 2030, men forutsier negativt antall etter 2041 — ugyldig. El.-modellen gir $E(20) \approx 78\,000$ biler, som overstiger antall husstander i Moss — urealistisk.

## Løsningsforslag

### a

La $t$ være antall år etter 2010. Vi bruker GeoGebra til å kjøre regresjon på datapunktene fra tabellen.

**Bensin — lineær modell:**

Datapunktene for bensin viser en jevn nedgang år for år. Absolutt nedgang per år er omtrent 450 biler, noe som tyder på at en lineær modell passer godt. Regresjonen i GeoGebra gir

$$B(t) = -451{,}79t + 14\,243{,}25$$

med korrelasjonskoeffisient $r \approx -0{,}996$, altså en svært god lineær tilpasning. Vi avrunder til

$$\underline{\underline{B(t) = -452t + 14\,243}}$$

**Elektrisk — eksponentiell modell:**

Datapunktene for elbiler stiger kraftig og kurver oppover, noe en rett linje ikke fanger opp. Fordi veksten ser ut til å ha en tilnærmet konstant prosentvis økning per år, er en eksponentiell modell naturlig. Regresjonen i GeoGebra gir

$$E(t) = 100{,}5 \cdot 1{,}395^t$$

Vekstfaktoren $1{,}395$ tilsvarer omtrent $39{,}5\,\%$ økning per år. Modellen passer godt til data i perioden 2010–2022.

$$\underline{\underline{E(t) = 100{,}5 \cdot 1{,}395^t}}$$

Grafen under viser datapunktene (rødt: bensin, blått: elektrisk) og de to modellkurvene:

![Datapunkter og modeller for bensin (rød, lineær) og elektrisk (blå, eksponentiell)](/img/user/_resources/s1-v24-2-6-modell.png){width=100%}

### b

**Bensin-modellen fremover:**

Vi setter $t = 20$ (år 2030):

$$B(20) = -452 \cdot 20 + 14\,243 = -9\,040 + 14\,243 = \underline{\underline{5\,203 \text{ biler}}}$$

Modellen forutsier altså omtrent 5 200 bensinbiler i Moss i 2030, noe som virker rimelig på mellomlang sikt. Modellen har imidlertid en viktig begrensning: den gir negativt antall biler når $B(t) = 0$, det vil si ved

$$t = \frac{14\,243}{452} \approx 31{,}5 \quad \Rightarrow \quad \text{år 2041}$$

I virkeligheten kan ikke antall biler bli negativt. Nedgangen vil trolig avta og asymptotisk nærme seg null. Ekstrapolering til 2030 er rimelig, men modellen er ugyldig etter ca. 2041.

**El.-modellen fremover:**

Vi setter $t = 20$ (år 2030):

$$E(20) = 100{,}5 \cdot 1{,}395^{20} \approx 100{,}5 \cdot 779 \approx \underline{\underline{78\,300 \text{ biler}}}$$

Dette er klart urealistisk — Moss har omtrent 35 000 husstander, og antall personbiler totalt er begrenset. Den eksponentielle veksten kan ikke fortsette i det uendelige. I praksis vil veksten flate ut etter hvert som markedet nærmer seg metning (logistisk vekst ville gitt en mer realistisk modell for lengre tidsperspektiv).

**Konklusjon:** Bensin-modellen er rimelig til omtrent 2030–2035. El.-modellen overestimerer kraftig på lengre sikt og er kun gyldig noen få år utover 2022.

</div></div>


## Oppgave 2-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/innskrevet-rektangel-og-lars-sitt-program/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Innskrevet rektangel og Lars sitt program

En funksjon $f$ er gitt ved

$$f(x) = -x^2 + 4, \quad 0 \le x \le 2.$$

Lars har tegnet grafen til $f$ med et innskrevet rektangel $ABCD$. Lars har også skrevet et program.

<!-- two-column start left-width=40% -->

![Grafen til $f(x)$](/img/user/_resources/s1-v24-2-7.jpeg){width=90%}

---

```python ln
def f(x):
    return -x**2 + 4

def areal(x):
    return x*f(x)

h = 0.0001
def der_areal(x):
    return (areal(x + h) - areal(x))/h

x = 0
dx = 0.01
while der_areal(x + dx) > 0:
    x = x + dx

print(areal(x))
```

<!-- two-column stop -->



>[!oppgave]
>a) Forklar hva Lars prøver å finne ut med programmet. Hva blir svaret hvis man kjører programmet?
>b) Hvilken strategi bruker Lars i programmet sitt? Vil strategien fungere uavhengig av hvilken funksjon $f$ er?

## Fasit

a) Programmet finner det største arealet av et rektangel innskrevet under grafen. Svaret er ca. $\underline{\underline{3{,}079}}$.

b) Lars bruker en numerisk trinnvis tilnærming der han leter fremover til deriverte av arealet skifter fortegn. Strategien er **ikke** universell.

## Løsningsforslag

### a

Rektangelet $ABCD$ har ett hjørne på grafen til $f$. Hjørnet over $x$-aksen befinner seg i punktet $(x,\, f(x))$. Siden rektangelet er symmetrisk om $y$-aksen, har det bredde $2x$ og høyde $f(x)$.

Av figuren leser vi imidlertid at bare halvparten av rektangelet vises (fra $x = 0$ til $x$-verdien på grafen), altså bredde $x$ og høyde $f(x)$. Arealet er:

$$A(x) = x \cdot f(x) = x(-x^2 + 4) = -x^3 + 4x$$

**Hva programmet gjør:**

- `areal(x)` beregner $A(x) = x \cdot f(x)$.
- `der_areal(x)` beregner den numeriske deriverte $A'(x) \approx \dfrac{A(x+h) - A(x)}{h}$ med $h = 0{,}0001$.
- Løkken starter på $x = 0$ og øker $x$ med $\mathtt{dx} = 0{,}01$ i hvert steg, så lenge den numeriske deriverte i neste steg er positiv (dvs. arealet fortsatt vokser).
- Løkken stopper når `der_areal(x + dx) <= 0`, altså når arealet er i ferd med å avta — ved et (lokalt) maksimum.

**Programmet prøver å finne $x$-verdien som maksimerer arealet**, og skriver deretter ut $A(x)$ i dette punktet.

**Kjøring:** $x$ øker fra $0$ i steg på $0{,}01$. Den eksakte maksimumsverdien er $x = \dfrac{2}{\sqrt{3}} \approx 1{,}1547$. Programmet stopper siste gang $\mathtt{der\_areal}(x + 0{,}01) > 0$, noe som gir $x = 1{,}15$ (siden $A'(1{,}16) < 0$).

Programmet skriver ut:

$$A(1{,}15) = 1{,}15 \cdot (-(1{,}15)^2 + 4) = 1{,}15 \cdot 2{,}6775 \approx \underline{\underline{3{,}079}}$$

(Det eksakte maksimale arealet er $\dfrac{16\sqrt{3}}{9} \approx 3{,}0792$.)

### b

**Strategi:** Lars antar at arealet begynner med å vokse fra $x = 0$, og leter trinnvis fremover til den numeriske deriverte skifter fra positiv til ikke-positiv. Han finner altså det første punktet der $A'(x)$ snur fra positiv til negativ — et lokalt toppunkt.

**Strategien er ikke universell.** Den kan feile i følgende situasjoner:

- Hvis $A'(x)$ allerede er negativ eller lik null for $x = 0$ (arealet avtar fra start), stopper løkken umiddelbart uten å finne noe maksimum.
- Hvis $A(x)$ har flere lokale maksimumspunkter, finner programmet bare det første og overser et eventuelt høyere globalt maksimum lenger ut.
- Steglengden $\mathtt{dx} = 0{,}01$ gir en numerisk tilnærming, ikke det eksakte maksimumet. Her gir programmet $x = 1{,}15$ istedenfor det eksakte $x = \dfrac{2\sqrt{3}}{3} \approx 1{,}1547$.

Strategien fungerer kun for funksjoner der arealet er positivt, starter med å vokse, og har nøyaktig ett lokalt maksimum.

</div></div>


## Oppgave 2-8


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pyramide-i-halvkule-storst-mulig-volum/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Pyramide i halvkule – størst mulig volum

En kule med radius $r$ deles i to like deler. Vi skal skjære ut en pyramide med rektangulær grunnflate av den ene halvkulen. Grunnflaten skal ligge i snittflaten til halvkulen.

![Halvkule med innskrevet pyramide](/img/user/_resources/s1-v24-2-8.jpeg){width=40%}

Volumet av en pyramide er gitt ved

$$V = \frac{h \cdot G}{3},$$

der $G$ er grunnflaten og $h$ er høyden til pyramiden.

>[!oppgave]
>Bestem et uttrykk for det største volumet en slik pyramide kan ha.

## Fasit

$\underline{\underline{V_{\max} = \dfrac{2r^3}{3}}}$

## Løsningsforslag

Vi plasserer halvkulen med snittflaten som en sirkulær disk i planet $z = 0$, med sentrum i origo. Halvkulen har likningen $x^2 + y^2 + z^2 = r^2$ for $z \geq 0$.

**Oppsett av pyramiden**

Grunnflaten er et rektangel med sider $2x$ og $2y$ innskrevet i sirkelen $x^2 + y^2 = r^2$. Pyramidens topp ligger på halvkulen rett over sentrum, i punktet $(0, 0, h)$.

Toppen på halvkulen gir høyden $h = r$ (fast, siden $x = y = 0$ gir $z = r$).

Volumet av pyramiden er:

$$V = \frac{h \cdot G}{3} = \frac{r \cdot 4xy}{3} = \frac{4r}{3} \cdot xy$$

**Maksimering med GeoGebra CAS**

Vi setter $G = 4xy$ der $y = \sqrt{r^2 - x^2}$ (fra sirkelbetingelsen), og definerer volumfunksjonen:

$$V(x) = \frac{4r}{3} \cdot x \cdot \sqrt{r^2 - x^2}$$

Vi deriverer og setter den deriverte lik null med CAS:

![CAS-utregning for største volum av pyramide i halvkule](/img/user/_resources/s1-v24-2-8-cas.png)

CAS gir $x = \dfrac{\sqrt{2}}{2} \cdot r = \dfrac{r}{\sqrt{2}}$ (tar positiv verdi). Da er $y = \sqrt{r^2 - \frac{r^2}{2}} = \dfrac{r}{\sqrt{2}}$, det vil si $x = y$.

Grunnflaten er et kvadrat med side $2x = 2 \cdot \dfrac{r}{\sqrt{2}} = r\sqrt{2}$.

**Største volum**

CAS bekrefter at maksimalt volum er:

$$V_{\max} = \frac{2}{3} r^2 \cdot |r| = \frac{2r^3}{3}$$

**$\underline{\underline{V_{\max} = \dfrac{2r^3}{3}}}$**

</div></div>


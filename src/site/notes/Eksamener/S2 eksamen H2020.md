---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"h20","date":"2020-11-17","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2020","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-h2020/","permalink":"/eksamener/s2-eksamen-h2020/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"h20","date":"2020-11-17","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2020","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av sammensatte funksjoner](https://matematikkoppgaver.vercel.app/derivasjon-av-sammensatte-funksjoner/) | derivasjon, eksponentialfunksjoner, logaritmer | × |
| [1-2](#oppgave-1-2) | [Sum av aritmetisk rekke](https://matematikkoppgaver.vercel.app/sum-av-aritmetisk-rekke/) | rekker | × |
| [1-3](#oppgave-1-3) | [Geometrisk rekke og sparing](https://matematikkoppgaver.vercel.app/geometrisk-rekke-og-sparing/) | rekker, uendelig rekke, økonomi | × |
| [1-4](#oppgave-1-4) | [Polynom med delelighetskriterium](https://matematikkoppgaver.vercel.app/polynom-med-delelighetskriterium/) | polynomdivisjon, faktorisering | × |
| [1-5](#oppgave-1-5) | [Tredjegradsfunksjon med vendetangent](https://matematikkoppgaver.vercel.app/tredjegradsfunksjon-med-vendetangent/) | funksjonsdrøfting, derivasjon | × |
| [1-6](#oppgave-1-6) | [Enhetskostnad og grensekostnad](https://matematikkoppgaver.vercel.app/enhetskostnad-og-grensekostnad/) | optimering, derivasjon, økonomi | × |
| [1-7](#oppgave-1-7) | [Tomatfrø og normalfordeling](https://matematikkoppgaver.vercel.app/tomatfro-og-normalfordeling/) | forventningsverdi, standardavvik, normalfordeling, sannsynlighet | × |
| [1-8](#oppgave-1-8) | [Logaritmefunksjon uten ekstremalpunkter](https://matematikkoppgaver.vercel.app/logaritmefunksjon-uten-ekstremalpunkter/) | derivasjon, logaritmer | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Netflix-inntekter og integral](https://matematikkoppgaver.vercel.app/netflix-inntekter-og-integral/) | eksponentialfunksjoner, integral, modellering | × |
| [2-2](#oppgave-2-2) | [Etterspørselsfunksjon og prisreduksjon](https://matematikkoppgaver.vercel.app/ettersporselsfunksjon-og-prisreduksjon/) | etterspørsel, eksponentialfunksjoner, økonomi | × |
| [2-3](#oppgave-2-3) | [Levetid til temperaturfølere](https://matematikkoppgaver.vercel.app/levetid-til-temperaturfolere/) | normalfordeling, binomisk, hypotesetest | × |
| [2-4](#oppgave-2-4) | [Virkestoff og halveringstid](https://matematikkoppgaver.vercel.app/virkestoff-og-halveringstid/) | uendelig rekke, rekker, modellering | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-sammensatte-funksjoner/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av sammensatte funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 2e^x + 3\ln x$
>b) $g(x) = x \cdot (2x + 5)^4$
>c) $h(x) = \dfrac{x^2 - 1}{e^{2x}}$

## Fasit

a) $f'(x) = 2e^x + \dfrac{3}{x}$
b) $g'(x) = 5(2x+1)(2x+5)^3$
c) $h'(x) = \dfrac{-2x^2 + 2x + 2}{e^{2x}}$

## Løsningsforslag

### a

$$f(x) = 2e^x + 3\ln x$$

$$\underline{\underline{f'(x) = 2e^x + \frac{3}{x}}}$$

### b

Vi bruker produktregelen med $u = x$ og $v = (2x+5)^4$.

$$u' = 1, \quad v' = 4(2x+5)^3 \cdot 2 = 8(2x+5)^3$$

$$g'(x) = 1 \cdot (2x+5)^4 + x \cdot 8(2x+5)^3$$

$$= (2x+5)^3\big[(2x+5) + 8x\big]$$

$$= (2x+5)^3(10x + 5)$$

$$\underline{\underline{g'(x) = 5(2x+1)(2x+5)^3}}$$

### c

Vi bruker kvotientregelen med $u = x^2 - 1$ og $v = e^{2x}$.

$$u' = 2x, \quad v' = 2e^{2x}$$

$$h'(x) = \frac{2x \cdot e^{2x} - (x^2-1) \cdot 2e^{2x}}{(e^{2x})^2}$$

$$= \frac{2e^{2x}\big[x - (x^2-1)\big]}{e^{4x}} = \frac{2(-x^2 + x + 1)}{e^{2x}}$$

$$\underline{\underline{h'(x) = \frac{-2x^2 + 2x + 2}{e^{2x}}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sum-av-aritmetisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sum av aritmetisk rekke

Bruk formelen for summen av en aritmetisk rekke til å bestemme

$$-7 - 3 + 1 + 5 + \ldots + 389$$

>[!oppgave]
>Bestem summen.

## Fasit

$s_{100} = 19\,100$

## Løsningsforslag

Vi har en aritmetisk rekke med $a_1 = -7$ og differanse $d = -3 - (-7) = 4$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d$$

$$389 = -7 + (n-1) \cdot 4$$

$$396 = (n-1) \cdot 4 \implies n - 1 = 99 \implies n = 100$$

Vi bruker summeformelen:

$$s_n = \frac{a_1 + a_n}{2} \cdot n = \frac{-7 + 389}{2} \cdot 100 = \frac{382}{2} \cdot 100$$

$$\underline{\underline{s_{100} = 19\,100}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/geometrisk-rekke-og-sparing/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Geometrisk rekke og sparing

I en uendelig geometrisk rekke er $a_1 = \dfrac{3}{1{,}04}$ og $k = \dfrac{1}{1{,}04}$.

>[!oppgave]
>a) Begrunn at rekken konvergerer, og bestem summen av rekken.

Frode har blitt bestefar. Han ønsker å gi barnebarnet Benjamin 10 000 kroner i gave hvert år i 20 år framover, første gang om ett år. Frode oppretter i den forbindelse en konto der han vil sette inn et engangsbeløp i dag som vil dekke alle de 20 framtidige utbetalingene. Kontoen har en fast årlig rentefot på 2,0 %.

>[!oppgave]
>b) Sett opp en rekke som du kan bruke til å regne ut hvor mye Frode må sette inn på kontoen sin i dag for å kunne gjennomføre de 20 utbetalingene. (Du behøver ikke å regne ut beløpet.)

## Fasit

a) $s = 75$
b) $s = \displaystyle\sum_{i=1}^{20} \frac{10\,000}{1{,}02^i}$

## Løsningsforslag

### a

Vi har $a_1 = \dfrac{3}{1{,}04}$ og $k = \dfrac{1}{1{,}04}$.

Siden $|k| = \dfrac{1}{1{,}04} \approx 0{,}962 < 1$, konvergerer rekken.

Summen er

$$s = \frac{a_1}{1 - k} = \frac{\dfrac{3}{1{,}04}}{1 - \dfrac{1}{1{,}04}} = \frac{\dfrac{3}{1{,}04}}{\dfrac{1{,}04 - 1}{1{,}04}} = \frac{\dfrac{3}{1{,}04}}{\dfrac{0{,}04}{1{,}04}} = \frac{3}{0{,}04}$$

$$\underline{\underline{s = 75}}$$

### b

Frode setter inn et engangsbeløp $s$ i dag. Om $i$ år skal han betale ut 10 000 kr. Nåverdien av utbetalingen om $i$ år er

$$\frac{10\,000}{1{,}02^i}$$

Engangsbeløpet må dekke nåverdien av alle 20 utbetalingene:

$$\underline{\underline{s = \sum_{i=1}^{20} \frac{10\,000}{1{,}02^i} = \frac{10\,000}{1{,}02} + \frac{10\,000}{1{,}02^2} + \cdots + \frac{10\,000}{1{,}02^{20}}}}$$

Dette er en endelig geometrisk rekke med $a_1 = \dfrac{10\,000}{1{,}02}$ og $k = \dfrac{1}{1{,}02}$.


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynom-med-delelighetskriterium/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynom med delelighetskriterium

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 12x - 16$$

>[!oppgave]
>a) Begrunn, uten å utføre polynomdivisjon, at $P(x)$ er delelig med $(x + 2)$, men ikke med $(x - 2)$.
>b) Forkort brøken
>
>$$\frac{x^3 - 12x - 16}{4x - 16}$$

## Fasit

a) $P(-2) = 0$, så $(x+2)$ er faktor. $P(2) = -32 \neq 0$, så $(x-2)$ er ikke faktor.
b) $\dfrac{(x+2)^2}{4}$

## Løsningsforslag

### a

Vi bruker faktorsettningen. Et polynom $P(x)$ er delelig med $(x - a)$ hvis og bare hvis $P(a) = 0$.

$$P(-2) = (-2)^3 - 12 \cdot (-2) - 16 = -8 + 24 - 16 = 0$$

Siden $P(-2) = 0$, er $P(x)$ delelig med $(x + 2)$.

$$P(2) = 2^3 - 12 \cdot 2 - 16 = 8 - 24 - 16 = -32 \neq 0$$

Siden $P(2) \neq 0$, er $P(x)$ **ikke** delelig med $(x - 2)$.

### b

Vi utfører polynomdivisjon $P(x) : (x + 2)$:

$$x^3 - 12x - 16 = (x + 2)(x^2 - 2x - 8)$$

Vi faktoriserer andregradsuttrykket:

$$x^2 - 2x - 8 = (x - 4)(x + 2)$$

Altså: $P(x) = (x + 2)^2(x - 4)$.

Vi forkorter brøken:

$$\frac{x^3 - 12x - 16}{4x - 16} = \frac{(x+2)^2(x-4)}{4(x-4)} = \underline{\underline{\frac{(x+2)^2}{4}}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradsfunksjon-med-vendetangent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradsfunksjon med vendetangent

Funksjonen $f$ er gitt ved

$$f(x) = x^3 - 12x - 16$$

>[!oppgave]
>a) Bestem koordinatene til toppunktet og bunnpunktet på grafen til $f$.
>b) Bestem koordinatene til vendepunktet og en likning for vendetangenten til grafen til $f$.
>c) Lag en skisse av grafen til $f$ sammen med vendetangenten.

## Fasit

a) Toppunkt $(-2, 0)$, bunnpunkt $(2, -32)$
b) Vendepunkt $(0, -16)$, vendetangent $y = -12x - 16$
c) Skisse

## Løsningsforslag

### a

$$f(x) = x^3 - 12x - 16$$

$$f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$$

Vi setter $f'(x) = 0$:

$$x = -2 \quad \text{eller} \quad x = 2$$

Vi bruker andrederiverten til å klassifisere:

$$f''(x) = 6x$$

- $f''(-2) = -12 < 0$: **toppunkt** i $(-2, f(-2)) = (-2, 0)$
- $f''(2) = 12 > 0$: **bunnpunkt** i $(2, f(2)) = (2, -32)$

### b

Vendepunktet er der $f''(x) = 0$:

$$6x = 0 \implies x = 0$$

$$f(0) = 0 - 0 - 16 = -16$$

**Vendepunktet er $(0, -16)$.**

Vendetangenten har stigningstall $f'(0)$:

$$f'(0) = 3 \cdot 0 - 12 = -12$$

Likningen for vendetangenten:

$$y - (-16) = -12(x - 0) \implies \underline{\underline{y = -12x - 16}}$$

### c

Grafen til $f$ har:
- Nullpunkt i $x = -2$ (dobbelt, toppunkt) og $x = 4$
- Toppunkt i $(-2, 0)$
- Bunnpunkt i $(2, -32)$
- Vendepunkt i $(0, -16)$

Vendetangenten $y = -12x - 16$ skjærer grafen i vendepunktet og har stigningstall $-12$.


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/enhetskostnad-og-grensekostnad/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Enhetskostnad og grensekostnad

Kostnaden $K$ (i kroner) for en vare er gitt ved

$$K(x) = x^2 + 8x + 100$$

Her er $x$ antall produserte enheter av varen per dag.

>[!oppgave]
>a) Bestem et uttrykk for enhetskostnaden og et uttrykk for grensekostnaden.
>b) Bestem den minste enhetskostnaden. Hva er produksjonsmengden da?

## Fasit

a) $E(x) = x + 8 + \dfrac{100}{x}$, $K'(x) = 2x + 8$
b) Minste enhetskostnad er $28 \text{~kr}$ ved $x = 10$ enheter

## Løsningsforslag

### a

**Enhetskostnaden:**

$$E(x) = \frac{K(x)}{x} = \frac{x^2 + 8x + 100}{x} = \underline{\underline{x + 8 + \frac{100}{x}}}$$

**Grensekostnaden:**

$$\underline{\underline{K'(x) = 2x + 8}}$$

### b

Vi deriverer enhetskostnaden og setter lik null:

$$E'(x) = 1 - \frac{100}{x^2}$$

$$E'(x) = 0 \implies 1 = \frac{100}{x^2} \implies x^2 = 100 \implies x = 10$$

(Vi velger $x = 10$ siden $x > 0$.)

Vi sjekker at dette er et minimum: $E''(x) = \dfrac{200}{x^3} > 0$ for $x > 0$. ✓

$$E(10) = 10 + 8 + \frac{100}{10} = \underline{\underline{28 \text{~kr}}}$$

**Den minste enhetskostnaden er 28 kr ved produksjon av 10 enheter per dag.**


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tomatfro-og-normalfordeling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tomatfrø og normalfordeling

Et gartneri selger poser med tomatfrø. La $X$ være antall tomatfrø i en tilfeldig valgt pose. Sannsynlighetsfordelingen til $X$ er gitt i tabellen nedenfor.

| $k$ | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,1 | 0,1 | 0,6 | 0,1 | 0,1 |

>[!oppgave]
>a) Bestem forventningsverdien $\text{E}(X)$, og vis at standardavviket er $\text{SD}(X) = 1$.
>Hva forteller $\text{E}(X)$ oss?

Eline ønsker å kjøpe 49 slike frøposer. Posene vil hun nummerere fra 1 til 49. La $X_i$ være antall frø i pose nummer $i$. Vi antar at $X_i$-ene er uavhengige av hverandre. Det totale antallet frø i de 49 posene er gitt ved den stokastiske variabelen

$$S = X_1 + X_2 + \cdots + X_{49}$$

>[!oppgave]
>b) Begrunn at $S$ er tilnærmet normalfordelt.
>Vis at $\text{E}(S) = 392$ og $\text{SD}(S) = 7{,}0$.

Eline har et drivhus der hun har plass til 400 potter som hun vil plante frøene i.

>[!oppgave]
>c) Bestem sannsynligheten for at Eline får nok frø til alle pottene sine.

## Fasit

a) $\text{E}(X) = 8$, $\text{SD}(X) = 1$
b) $\text{E}(S) = 392$, $\text{SD}(S) = 7{,}0$
c) $P(S \geq 400) \approx 0{,}1265$

## Løsningsforslag

### a

$$\text{E}(X) = \sum k \cdot P(X = k) = 6 \cdot 0{,}1 + 7 \cdot 0{,}1 + 8 \cdot 0{,}6 + 9 \cdot 0{,}1 + 10 \cdot 0{,}1$$

$$= 0{,}6 + 0{,}7 + 4{,}8 + 0{,}9 + 1{,}0 = \underline{\underline{8}}$$

$\text{E}(X) = 8$ forteller oss at det i gjennomsnitt er 8 tomatfrø i en pose.

Vi beregner variansen:

$$\text{E}(X^2) = 6^2 \cdot 0{,}1 + 7^2 \cdot 0{,}1 + 8^2 \cdot 0{,}6 + 9^2 \cdot 0{,}1 + 10^2 \cdot 0{,}1$$

$$= 3{,}6 + 4{,}9 + 38{,}4 + 8{,}1 + 10{,}0 = 65$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 65 - 64 = 1$$

$$\underline{\underline{\text{SD}(X) = \sqrt{1} = 1}}$$

### b

$S$ er summen av 49 uavhengige, identisk fordelte stokastiske variable. Ifølge sentralgrenseteoremet er $S$ tilnærmet normalfordelt når $n$ er tilstrekkelig stor. Med $n = 49$ er tilnærmingen god.

$$\text{E}(S) = 49 \cdot \text{E}(X) = 49 \cdot 8 = \underline{\underline{392}}$$

$$\text{Var}(S) = 49 \cdot \text{Var}(X) = 49 \cdot 1 = 49$$

$$\underline{\underline{\text{SD}(S) = \sqrt{49} = 7{,}0}}$$

### c

Eline trenger minst 400 frø, så vi skal finne $P(S \geq 400)$.

$S$ er tilnærmet normalfordelt med $\mu = 392$ og $\sigma = 7$.

$$z = \frac{400 - 392}{7} = \frac{8}{7} \approx 1{,}14$$

$$P(S \geq 400) = 1 - \Phi(1{,}14) \approx 1 - 0{,}8735$$

$$\underline{\underline{P(S \geq 400) \approx 0{,}1265}}$$

Det er ca. 12,7 % sannsynlighet for at Eline får nok frø til alle 400 pottene.


</div></div>


## Oppgave 1-8


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmefunksjon-uten-ekstremalpunkter/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmefunksjon uten ekstremalpunkter

Funksjonen $f$ er gitt ved

$$f(x) = \ln(x^2 - 2x)$$

>[!oppgave]
>a) Bestem definisjonsmengden til $f$.
>b) Bruk derivasjon til å vise at $f$ verken har ekstremalpunkter eller vendepunkter.

## Fasit

a) $D_f = \langle \leftarrow, 0 \rangle \cup \langle 2, \to \rangle$
b) $f'(x) = 0$ gir $x = 1$, som ikke er i definisjonsmengden

## Løsningsforslag

### a

Vi trenger $x^2 - 2x > 0$, altså $x(x - 2) > 0$.

Fortegnslinje for $x(x-2)$:

| $x$ | $\leftarrow 0$ | $0$ | $0 \to 2$ | $2$ | $2 \to$ |
|---|---|---|---|---|---|
| $x(x-2)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

$$\underline{\underline{D_f = \langle \leftarrow, 0 \rangle \cup \langle 2, \to \rangle}}$$

### b

Vi deriverer med kjerneregelen:

$$f'(x) = \frac{2x - 2}{x^2 - 2x} = \frac{2(x-1)}{x(x-2)}$$

$f'(x) = 0$ gir $x = 1$. Men $x = 1$ ligger **ikke** i definisjonsmengden (siden $1 \in \langle 0, 2 \rangle$ der $f$ ikke er definert). Dermed har $f$ ingen ekstremalpunkter.

Vi deriverer på nytt:

$$f'(x) = \frac{2(x-1)}{x^2-2x}$$

Med kvotientregelen:

$$f''(x) = \frac{2(x^2-2x) - 2(x-1)(2x-2)}{(x^2-2x)^2}$$

$$= \frac{2x^2-4x - 2(x-1) \cdot 2(x-1)}{(x^2-2x)^2} = \frac{2x^2-4x - 4(x-1)^2}{(x^2-2x)^2}$$

$$= \frac{2x^2-4x-4x^2+8x-4}{(x^2-2x)^2} = \frac{-2x^2+4x-4}{(x^2-2x)^2}$$

$$= \frac{-2(x^2-2x+2)}{(x^2-2x)^2}$$

Diskriminanten til $x^2-2x+2$ er $4 - 8 = -4 < 0$, så telleren i $f''(x)$ er alltid $\neq 0$ for alle reelle $x$. Dermed har $f$ heller ingen vendepunkter.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/netflix-inntekter-og-integral/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Netflix-inntekter og integral

De årlige inntektene $I$ (i milliarder kroner) til selskapet Netflix er tilnærmet gitt ved

$$I(x) = 6{,}594 \cdot e^{0{,}234x}$$

Her er $x$ antall år etter 2005. Det vil si at $I(0)$ er inntektene i 2005, $I(1)$ er inntektene i 2006, og så videre.

>[!oppgave]
>a) Bruk funksjonen $I$ til å lage en grafisk framstilling av inntektene til Netflix for årene fra og med 2005 til og med 2030.
>b) I hvilket år vil inntektene første gang øke med mer enn 160 milliarder kroner per år?
>c) Bestem $\displaystyle\int_0^{15} I(x) \, \mathrm{d}x$. Gi en praktisk tolkning av dette tallet.

## Fasit

a) Se graf
b) I 2025 ($x \approx 19{,}8$)
c) Ca. $914$ milliarder kroner

## Løsningsforslag

### a

Vi tegner grafen til $I(x) = 6{,}594 \cdot e^{0{,}234x}$ for $x \in [0, 25]$ (2005–2030):

![Graf over Netflix-inntekter](/img/user/_resources/s2-h20-2-1-graf.png)

### b

Inntektene øker med mer enn 160 milliarder per år når $I'(x) > 160$.

Vi løser $I'(x) = 160$ i GeoGebra CAS:

![GeoGebra CAS: Netflix](/img/user/_resources/s2-h20-2-1.png)

Fra linje 2 ser vi at $x \approx 19{,}84$.

Siden $x = 19{,}84$ tilsvarer slutten av 2024, vil inntektene første gang øke med mer enn 160 milliarder per år i **$\underline{\underline{2025}}$** (da $x = 20$).

### c

Fra linje 3 i CAS-utklippet:

$$\int_0^{15} I(x) \, \mathrm{d}x \approx \underline{\underline{914 \text{~milliarder kroner}}}$$

**Praktisk tolkning:** Dette er de samlede inntektene til Netflix i perioden fra 2005 til 2020, altså over 15 år.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ettersporselsfunksjon-og-prisreduksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Etterspørselsfunksjon og prisreduksjon

En bedrift produserer en vare. Etterspørselen $q$ per uke for denne varen er gitt ved

$$q(p) = 1400 \cdot e^{-0{,}024p}, \quad p \in [10, 100]$$

Her er $p$ prisen i kroner for én enhet av varen.

>[!oppgave]
>a) Bestem prisen per enhet når etterspørselen er 500 enheter per uke.

Maria, som er salgsansvarlig i bedriften, påstår at dersom prisen per enhet økes med 1 krone, vil etterspørselen gå ned med 2,4 %, uavhengig av hva prisen per enhet er i utgangspunktet.

>[!oppgave]
>b) Gjør beregninger, og avgjør om påstanden til Maria stemmer med modellen $q$.

Bedriften ønsker å tømme lagerbeholdningen og vil derfor sette ned prisen på varen.

>[!oppgave]
>c) Hvor mange kroner må prisen per enhet settes ned for at etterspørselen skal dobles?

## Fasit

a) $p \approx 42{,}9 \text{~kr}$
b) Nedgangen er ca. $2{,}37 \,\%$ per krone, uavhengig av prisen. Påstanden stemmer tilnærmet.
c) Ca. $28{,}9 \text{~kr}$

## Løsningsforslag

### a

Vi løser $q(p) = 500$ i GeoGebra CAS:

![GeoGebra CAS: etterspørsel](/img/user/_resources/s2-h20-2-2.png)

Fra linje 2: $p \approx 42{,}9$.

**Prisen per enhet er ca. $\underline{\underline{42{,}9 \text{~kr}}}$ når etterspørselen er 500 enheter per uke.**

### b

Vi undersøker hva som skjer med etterspørselen når prisen økes med 1 krone:

$$\frac{q(p+1)}{q(p)} = \frac{1400 \cdot e^{-0{,}024(p+1)}}{1400 \cdot e^{-0{,}024p}} = e^{-0{,}024} \approx 0{,}9763$$

Nedgangen er

$$1 - e^{-0{,}024} \approx 1 - 0{,}9763 = 0{,}0237 = 2{,}37 \,\%$$

Nedgangen er ca. $2{,}37 \,\%$, som er uavhengig av prisen $p$. **Påstanden til Maria stemmer tilnærmet — nedgangen er ca. $2{,}4 \,\%$ (mer presist $2{,}37 \,\%$), og den er uavhengig av utgangsprisen, slik Maria påstår.**

### c

Vi skal finne $d$ slik at $q(p - d) = 2 \cdot q(p)$:

$$1400 \cdot e^{-0{,}024(p-d)} = 2 \cdot 1400 \cdot e^{-0{,}024p}$$

$$e^{-0{,}024p + 0{,}024d} = 2 \cdot e^{-0{,}024p}$$

$$e^{0{,}024d} = 2$$

$$0{,}024d = \ln 2$$

$$d = \frac{\ln 2}{0{,}024} \approx \underline{\underline{28{,}9 \text{~kr}}}$$

**Prisen per enhet må settes ned med ca. 28,9 kr for at etterspørselen skal dobles.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/levetid-til-temperaturfolere/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Levetid til temperaturfølere

En produsent leverer en bestemt type temperaturfølere. Vi lar $X$ være levetiden til en tilfeldig valgt temperaturføler av denne typen. Produsenten oppgir at $X$ er normalfordelt med forventningsverdi $\mu = 12$ år og standardavvik $\sigma = 1{,}5$ år.

>[!oppgave]
>a) Vis at sannsynligheten for at en tilfeldig valgt temperaturføler har en levetid som er kortere enn 10 år, er $p \approx 0{,}0912$.

Når produsenten bytter ut en defekt temperaturføler, noterer de hvor lang levetid den har hatt. Når produsenten gjennomfører en kvalitetskontroll av de defekte temperaturfølerne, plukker de tilfeldig ut 225 følere.

I en tilfeldig kvalitetskontroll lar vi $Y$ være antall enheter som har hatt en levetid som er kortere enn 10 år. Vi går ut fra at $Y$ er binomisk fordelt.

>[!oppgave]
>b) Bestem $P(Y \geq 21)$

Produsenten har mistanke om at levetiden til temperaturfølerne er kortere enn det de oppgir. De vil derfor gjennomføre en kvalitetskontroll.

>[!oppgave]
>c) Sett opp en hypotesetest som kan brukes i denne situasjonen.

I kvalitetskontrollen viser det seg at den gjennomsnittlige levetiden til de 225 temperaturfølerne var 11,78 år.

>[!oppgave]
>d) Utfør hypotesetesten, og bruk den til å avgjøre om det er grunnlag for mistanken til produsenten. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $P(X < 10) \approx 0{,}0912$
b) $P(Y \geq 21) \approx 0{,}49$
c) $H_0\colon \mu = 12$, $H_1\colon \mu < 12$
d) $P$-verdi $\approx 0{,}014 < 0{,}05$. Vi forkaster $H_0$.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 12$ og $\sigma = 1{,}5$.

$$P(X < 10) = P\left(Z < \frac{10 - 12}{1{,}5}\right) = P(Z < -1{,}33) = \Phi(-1{,}33) \approx \underline{\underline{0{,}0912}}$$

### b

$Y$ er binomisk fordelt med $n = 225$ og $p = 0{,}0912$.

Vi bruker normalapproksimasjon:

$$\mu_Y = np = 225 \cdot 0{,}0912 = 20{,}52$$

$$\sigma_Y = \sqrt{np(1-p)} = \sqrt{225 \cdot 0{,}0912 \cdot 0{,}9088} \approx 4{,}32$$

Med halvkorreksjon:

$$P(Y \geq 21) \approx P\left(Z \geq \frac{20{,}5 - 20{,}52}{4{,}32}\right) = P(Z \geq -0{,}005) \approx \underline{\underline{0{,}50}}$$

### c

Produsenten har mistanke om at levetiden er **kortere** enn oppgitt ($\mu = 12$).

$$H_0\colon \mu = 12$$

$$H_1\colon \mu < 12$$

Vi tester med gjennomsnittlig levetid $\bar{X}$ fra utvalget. Under $H_0$ er $\bar{X}$ tilnærmet normalfordelt med $\mu_{\bar{X}} = 12$ og $\sigma_{\bar{X}} = \dfrac{1{,}5}{\sqrt{225}} = 0{,}1$.

### d

Den gjennomsnittlige levetiden i utvalget er $\bar{x} = 11{,}78$ år.

$$z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}} = \frac{11{,}78 - 12}{1{,}5 / \sqrt{225}} = \frac{-0{,}22}{0{,}1} = -2{,}20$$

$$P\text{-verdi} = \Phi(-2{,}20) \approx 0{,}014$$

Siden $P$-verdien $\approx 0{,}014 < 0{,}05$, forkaster vi $H_0$ på 5 % signifikansnivå.

**Det er grunnlag for å si at levetiden til temperaturfølerne er kortere enn det produsenten oppgir.**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/virkestoff-og-halveringstid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Virkestoff og halveringstid

Marit har i mange år tatt medisiner. Hver dag tar hun én tablett som inneholder 20 mg av et virkestoff. I løpet av ett døgn bryter kroppen ned 25 % av virkestoffet i tabletten.

>[!oppgave]
>a) Vis at Marit har i underkant av 80 mg av virkestoffet i kroppen like etter at hun har tatt den daglige tabletten sin.

Det viser seg at Marit ikke tåler mer enn 60 mg av virkestoffet i kroppen. Hun må derfor få nye tabletter, som inneholder mindre av virkestoffet.

>[!oppgave]
>b) Hvor mye virkestoff kan det være i hver tablett for at Marit skal unngå å få mer enn 60 mg av virkestoffet i kroppen?

I en annen medisin har virkestoffet en halveringstid på 66 timer. Det vil si at det går 66 timer fra en bruker tar en tablett, til det kun er halvparten av virkestoffet fra tabletten igjen i kroppen.

En bruker har tatt én tablett med 10 mg av virkestoffet hver dag over en lang tidsperiode.

>[!oppgave]
>c) Hvor mye av virkestoffet vil brukeren ha i kroppen like etter at han har tatt den daglige tabletten sin?

## Fasit

a) I underkant av $80 \text{~mg}$
b) Høyst $15 \text{~mg}$
c) Ca. $44{,}9 \text{~mg}$

## Løsningsforslag

### a

Kroppen bryter ned 25 % per døgn, så 75 % av virkestoffet blir igjen. Like etter at Marit har tatt tabletten dag $n$, er mengden virkestoff $M_n$.

Over lang tid stabiliserer mengden seg. Like etter at tabletten er tatt:

$$M = 20 + 20 \cdot 0{,}75 + 20 \cdot 0{,}75^2 + 20 \cdot 0{,}75^3 + \cdots$$

Dette er en uendelig geometrisk rekke med $a_1 = 20$ og $k = 0{,}75$.

![GeoGebra CAS: virkestoff](/img/user/_resources/s2-h20-2-4.png)

Fra linje 1:

$$M = \frac{20}{1 - 0{,}75} = \frac{20}{0{,}25} = 80$$

Men dette er grenseverdien som aldri oppnås helt. Etter et endelig antall dager er mengden alltid litt under 80 mg. Altså har Marit **i underkant av $\underline{\underline{80 \text{~mg}}}$** av virkestoffet i kroppen.

### b

Dersom hver tablett inneholder $d$ mg, blir den stabile mengden

$$M = \frac{d}{1 - 0{,}75} = 4d$$

Vi krever $4d \leq 60$:

$$d \leq \frac{60}{4} = \underline{\underline{15 \text{~mg}}}$$

Fra linje 2 i CAS-utklippet: $60 \cdot (1 - 0{,}75) = 15$. ✓

### c

Halveringstid 66 timer betyr at nedbrytningsfaktoren per døgn (24 timer) er

$$k = \left(\frac{1}{2}\right)^{24/66} \approx 0{,}7772$$

Fra linje 3 i CAS-utklippet: $k \approx 0{,}7772$.

Den stabile mengden virkestoff like etter tablett-inntak er

$$M = \frac{10}{1 - k} = \frac{10}{1 - 0{,}7772}$$

Fra linje 4: $M \approx \underline{\underline{44{,}9 \text{~mg}}}$


</div></div>


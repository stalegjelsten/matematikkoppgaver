---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v20","date":"2020-05-22","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2020","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2020/","permalink":"/eksamener/s2-eksamen-v2020/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v20","date":"2020-05-22","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2020","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Enkel derivasjon](https://matematikkoppgaver.vercel.app/enkel-derivasjon/) | derivasjon, logaritmer, eksponentialfunksjoner | × |
| [1-2](#oppgave-1-2) | [Likningssystem med tre ukjente](https://matematikkoppgaver.vercel.app/likningssystem-med-tre-ukjente/) | likningssystem | × |
| [1-3](#oppgave-1-3) | [Aritmetisk sum og uendelig geometrisk rekke](https://matematikkoppgaver.vercel.app/aritmetisk-sum-og-uendelig-geometrisk-rekke/) | rekker, uendelig rekke | × |
| [1-4](#oppgave-1-4) | [Polynom og ulikhet](https://matematikkoppgaver.vercel.app/polynom-og-ulikhet/) | polynomdivisjon, faktorisering | × |
| [1-5](#oppgave-1-5) | [Tredjegradsfunksjon og vannstand](https://matematikkoppgaver.vercel.app/tredjegradsfunksjon-og-vannstand/) | funksjonsdrøfting, derivasjon, modellering | × |
| [1-6](#oppgave-1-6) | [Kostnadsfunksjon og tangent](https://matematikkoppgaver.vercel.app/kostnadsfunksjon-og-tangent/) | enhetskostnad, derivasjon, økonomi | × |
| [1-7](#oppgave-1-7) | [Gule drops i poser](https://matematikkoppgaver.vercel.app/gule-drops-i-poser/) | binomisk, normalfordeling, sannsynlighet | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Fremskrittspartiet og hypotesetest](https://matematikkoppgaver.vercel.app/fremskrittspartiet-og-hypotesetest/) | binomisk, hypotesetest | × |
| [2-2](#oppgave-2-2) | [Rottebestand og logistisk modell](https://matematikkoppgaver.vercel.app/rottebestand-og-logistisk-modell/) | logistisk funksjon, regresjon, modellering | × |
| [2-3](#oppgave-2-3) | [Overskuddsfunksjon og prisfunksjon](https://matematikkoppgaver.vercel.app/overskuddsfunksjon-og-prisfunksjon/) | optimering, derivasjon, økonomi | × |
| [2-4](#oppgave-2-4) | [Annuitetslån og serielån](https://matematikkoppgaver.vercel.app/annuitetslan-og-serielan/) | lån, rekker, økonomi | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/enkel-derivasjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Enkel derivasjon

Deriver funksjonene

>[!oppgave]
>a) $f(x) = x^3 + 3e^x$
>b) $g(x) = \dfrac{\ln(2x)}{x^2}$

## Fasit

a) $f'(x) = 3x^2 + 3e^x$
b) $g'(x) = \dfrac{1 - 2\ln(2x)}{x^3}$

## Løsningsforslag

### a

Vi deriverer ledd for ledd.

$$f(x) = x^3 + 3e^x$$

$$\underline{\underline{f'(x) = 3x^2 + 3e^x}}$$

### b

Vi bruker kvotientregelen med $u = \ln(2x)$ og $v = x^2$.

$$g(x) = \frac{\ln(2x)}{x^2}$$

Vi har $u' = \dfrac{1}{x}$ og $v' = 2x$.

$$g'(x) = \frac{u' \cdot v - u \cdot v'}{v^2} = \frac{\dfrac{1}{x} \cdot x^2 - \ln(2x) \cdot 2x}{x^4}$$

$$= \frac{x - 2x\ln(2x)}{x^4} = \frac{x(1 - 2\ln(2x))}{x^4}$$

$$\underline{\underline{g'(x) = \frac{1 - 2\ln(2x)}{x^3}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/likningssystem-med-tre-ukjente/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Likningssystem med tre ukjente

Løs likningssystemet

$$6x - y + 3z = 12$$

$$5x + 3y + z = 11$$

$$3x + 2y + z = 10$$

>[!oppgave]
>Løs likningssystemet.

## Fasit

$x = -1$, $y = 3$, $z = 7$

## Løsningsforslag

Vi har likningssystemet

$$\text{I:} \quad 6x - y + 3z = 12$$

$$\text{II:} \quad 5x + 3y + z = 11$$

$$\text{III:} \quad 3x + 2y + z = 10$$

Vi trekker likning III fra likning II for å eliminere $z$:

$$\text{II} - \text{III:} \quad 2x + y = 1 \quad \text{(IV)}$$

Vi ganger likning III med 3 og trekker fra likning I:

$$3 \cdot \text{III} - \text{I:} \quad 9x + 6y + 3z - 6x + y - 3z = 30 - 12$$

$$3x + 7y = 18 \quad \text{(V)}$$

Fra (IV) har vi $y = 1 - 2x$. Vi setter inn i (V):

$$3x + 7(1 - 2x) = 18$$

$$3x + 7 - 14x = 18$$

$$-11x = 11$$

$$\underline{\underline{x = -1}}$$

Vi setter $x = -1$ inn i (IV):

$$2(-1) + y = 1 \implies \underline{\underline{y = 3}}$$

Vi setter $x = -1$ og $y = 3$ inn i likning III:

$$3(-1) + 2 \cdot 3 + z = 10 \implies -3 + 6 + z = 10 \implies \underline{\underline{z = 7}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-sum-og-uendelig-geometrisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk sum og uendelig geometrisk rekke

>[!oppgave]
>a) Bestem summen av den aritmetiske rekken
>
>$$-8 - 3 + 2 + 7 + \cdots + 987$$

>[!oppgave]
>b) Begrunn at den uendelige geometriske rekken nedenfor konvergerer, og bestem summen av rekken
>
>$$80 - 20 + 5 - \frac{5}{4} + \cdots$$

## Fasit

a) $s_{200} = 97\,900$
b) $s = 64$

## Løsningsforslag

### a

Vi har en aritmetisk rekke med $a_1 = -8$ og differanse $d = -3 - (-8) = 5$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d$$

$$987 = -8 + (n-1) \cdot 5$$

$$995 = (n-1) \cdot 5$$

$$n - 1 = 199 \implies n = 200$$

Vi bruker summeformelen:

$$s_n = \frac{a_1 + a_n}{2} \cdot n = \frac{-8 + 987}{2} \cdot 200 = \frac{979}{2} \cdot 200$$

$$\underline{\underline{s_{200} = 97\,900}}$$

### b

Vi har en geometrisk rekke med $a_1 = 80$ og kvotient

$$k = \frac{-20}{80} = -\frac{1}{4}$$

Siden $|k| = \dfrac{1}{4} < 1$, konvergerer rekken.

Summen av en uendelig geometrisk rekke er

$$s = \frac{a_1}{1 - k} = \frac{80}{1 - \left(-\dfrac{1}{4}\right)} = \frac{80}{\dfrac{5}{4}} = 80 \cdot \frac{4}{5}$$

$$\underline{\underline{s = 64}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynom-og-ulikhet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynom og ulikhet

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 9x^2 + 15x - 7$$

>[!oppgave]
>a) Begrunn at $P(x)$ er delelig med $(x - 1)$.
>b) Løs ulikheten $P(x) \geq 0$.
>c) Forkort brøken
>
>$$\frac{x^2 - 2x + 1}{x^3 - 9x^2 + 15x - 7}$$

## Fasit

a) $P(1) = 0$, så $P(x)$ er delelig med $(x-1)$
b) $x \in \{1\} \cup [7, \to \rangle$
c) $\dfrac{1}{x - 7}$

## Løsningsforslag

### a

Vi setter inn $x = 1$:

$$P(1) = 1^3 - 9 \cdot 1^2 + 15 \cdot 1 - 7 = 1 - 9 + 15 - 7 = 0$$

Siden $P(1) = 0$, er $P(x)$ delelig med $(x - 1)$ ifølge faktorsettningen.

### b

Vi utfører polynomdivisjon $P(x) : (x - 1)$:

$$P(x) = (x - 1)(x^2 - 8x + 7)$$

Vi faktoriserer andregradsuttrykket:

$$x^2 - 8x + 7 = (x - 1)(x - 7)$$

Altså:

$$P(x) = (x - 1)^2(x - 7)$$

Vi løser ulikheten $P(x) \geq 0$:

$(x - 1)^2 \geq 0$ for alle $x$, så fortegnet til $P(x)$ bestemmes av $(x - 7)$.

- $(x-7) \geq 0$ når $x \geq 7$
- Når $x = 1$: $P(1) = 0$

$$\underline{\underline{x \in \{1\} \cup [7, \to \rangle}}$$

### c

Vi kjenner igjen telleren som et fullstendig kvadrat:

$$x^2 - 2x + 1 = (x - 1)^2$$

Fra oppgave b) har vi $P(x) = (x-1)^2(x-7)$. Vi forkorter:

$$\frac{x^2 - 2x + 1}{x^3 - 9x^2 + 15x - 7} = \frac{(x - 1)^2}{(x - 1)^2(x - 7)} = \underline{\underline{\frac{1}{x - 7}}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradsfunksjon-og-vannstand/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradsfunksjon og vannstand

Funksjonen $f$ er gitt ved

$$f(x) = (x - 1)^2 \cdot (x - 7)$$

>[!oppgave]
>a) Vis at grafen til $f$ har et bunnpunkt i $(5, -32)$.
>Bestem eventuelle andre toppunkter og bunnpunkter på grafen til $f$.
>b) Lag en skisse av grafen til $f$.

Vi skal nå studere vannstanden under en vårflom i en elv. Vannstanden er høyden (i meter) på vannet målt på en utplassert skala.

En modell $g$ for vannstanden er gitt ved

$$g(x) = -0{,}10 \cdot f(x), \quad D_g = [2, 6]$$

Her er $x$ antall dager etter at flommen startet.

>[!oppgave]
>c) Når var vannstanden på sitt høyeste, og hva var vannstanden da?
>d) Når økte vannstanden mest, og hvor raskt økte den da?

## Fasit

a) Bunnpunkt i $(5, -32)$, toppunkt i $(1, 0)$
b) Skisse
c) Vannstanden var høyest etter 5 dager, med $g(5) = 3{,}2 \text{~meter}$
d) Vannstanden økte mest etter 3 dager, med $1{,}2 \text{~meter per dag}$

## Løsningsforslag

### a

Vi utvider $f(x) = (x-1)^2(x-7)$:

$$f(x) = (x^2 - 2x + 1)(x - 7) = x^3 - 9x^2 + 15x - 7$$

Vi deriverer:

$$f'(x) = 3x^2 - 18x + 15 = 3(x^2 - 6x + 5) = 3(x - 1)(x - 5)$$

Vi setter $f'(x) = 0$:

$$3(x-1)(x-5) = 0 \implies x = 1 \quad \text{eller} \quad x = 5$$

Vi bruker fortegnsskjema for $f'(x)$:

| $x$ | $\leftarrow 1$ | $1$ | $1 \to 5$ | $5$ | $5 \to$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\nearrow$ | $0$ | $\searrow$ | $-32$ | $\nearrow$ |

Vi ser at $f$ har **toppunkt** i $(1, 0)$ og **bunnpunkt** i $(5, -32)$.

Vi kontrollerer: $f(5) = (5-1)^2(5-7) = 16 \cdot (-2) = -32$ ✓

### b

Grafen til $f$ har:
- Nullpunkter i $x = 1$ (dobbelt) og $x = 7$
- Toppunkt i $(1, 0)$
- Bunnpunkt i $(5, -32)$

Grafen starter negativt for $x < 1$, tangerer $x$-aksen i $x = 1$, synker ned til bunnpunktet $(5, -32)$, og krysser $x$-aksen igjen i $x = 7$.

### c

Siden $g(x) = -0{,}10 \cdot f(x)$, har $g$ maksimum der $f$ har minimum. Fra oppgave a) har $f$ minimum i $x = 5$.

$$g(5) = -0{,}10 \cdot f(5) = -0{,}10 \cdot (-32) = 3{,}2$$

**Vannstanden var på sitt høyeste etter $\underline{\underline{5 \text{~dager}}}$, og vannstanden var da $\underline{\underline{3{,}2 \text{~meter}}}$.**

### d

Vannstanden økte mest der $g'(x)$ er størst, altså i vendepunktet til $g$ der $g''(x) = 0$.

$$g'(x) = -0{,}10 \cdot f'(x) = -0{,}10(3x^2 - 18x + 15)$$

$$g''(x) = -0{,}10(6x - 18)$$

Vi setter $g''(x) = 0$:

$$6x - 18 = 0 \implies x = 3$$

Vi sjekker at $x = 3 \in [2, 6]$ ✓

$$g'(3) = -0{,}10(3 \cdot 9 - 18 \cdot 3 + 15) = -0{,}10(27 - 54 + 15) = -0{,}10 \cdot (-12) = 1{,}2$$

**Vannstanden økte mest etter $\underline{\underline{3 \text{~dager}}}$, og den økte da med $\underline{\underline{1{,}2 \text{~meter per dag}}}$.**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kostnadsfunksjon-og-tangent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kostnadsfunksjon og tangent

For en bedrift koster det $K(x)$ kroner å produsere $x$ enheter av en vare per dag.

Enhetskostnaden er

$$E(x) = \frac{K(x)}{x}$$

Figuren nedenfor viser grafen til $K$ og tangenten til grafen i punktet $(100, 1200)$.

![Grafen til K og tangenten i (100, 1200)](/img/user/_resources/s2-v20-1-6.jpeg){width=60%}

>[!oppgave]
>a) Bruk figuren nedenfor til å bestemme $K'(100)$ og $E(100)$.
>b) Vis at den deriverte av enhetskostnaden kan skrives som
>
>$$E'(x) = \frac{K'(x) - E(x)}{x}$$
>
>c) Bestem $E'(100)$. Hva forteller dette tallet oss?

## Fasit

a) $K'(100) = 5$ og $E(100) = 12$
b) Vis ved derivasjon av $E(x) = \dfrac{K(x)}{x}$
c) $E'(100) = -0{,}07$

## Løsningsforslag

### a

**Enhetskostnaden** er

$$E(100) = \frac{K(100)}{100} = \frac{1200}{100} = \underline{\underline{12}}$$

**Grensekostnaden** $K'(100)$ er stigningstallet til tangenten i $(100, 1200)$. Vi leser av figuren at tangenten skjærer $y$-aksen i omtrent $y = 700$. Stigningstallet blir

$$K'(100) = \frac{1200 - 700}{100 - 0} = \underline{\underline{5}}$$

### b

Vi deriverer $E(x) = \dfrac{K(x)}{x}$ med kvotientregelen:

$$E'(x) = \frac{K'(x) \cdot x - K(x) \cdot 1}{x^2} = \frac{K'(x) \cdot x - K(x)}{x^2}$$

Vi deler teller og nevner med $x$:

$$E'(x) = \frac{K'(x) - \dfrac{K(x)}{x}}{x} = \frac{K'(x) - E(x)}{x}$$

### c

Vi setter inn verdiene fra oppgave a):

$$E'(100) = \frac{K'(100) - E(100)}{100} = \frac{5 - 12}{100} = \underline{\underline{-0{,}07}}$$

Dette betyr at enhetskostnaden synker med omtrent $0{,}07$ kr per enhet når produksjonen økes fra 100 enheter. Grensekostnaden ($K'(100) = 5$) er lavere enn enhetskostnaden ($E(100) = 12$), så det lønner seg å produsere flere enheter.


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/gule-drops-i-poser/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Gule drops i poser

En bedrift produserer drops. 20 % av dropsene er gule, og resten er røde. Dropsene blir tilfeldig fordelt i poser. Det er 100 drops i hver pose.

La $X$ være antall gule drops i en tilfeldig valgt pose.

Vi kan anta at $X$ er en binomisk fordelt variabel.

>[!oppgave]
>a) Vis at $\text{E}(X) = 20$ og $\text{Var}(X) = 16$.

I resten av oppgaven går vi ut fra at $X$ er tilnærmet normalfordelt.

>[!oppgave]
>b) Bestem sannsynligheten for at det er 25 eller flere gule drops i en tilfeldig valgt pose.
>c) Lag en skisse som viser sannsynlighetsfordelingen til $X$. Skraver området som illustrerer svaret i oppgave b).
>d) Bestem $a$ slik at $P(20 - a \leq X \leq 20 + a) = 0{,}90$.
>Hva forteller intervallet $[20 - a, 20 + a]$ oss i denne situasjonen?

## Fasit

a) $\text{E}(X) = 20$, $\text{Var}(X) = 16$
b) $P(X \geq 25) \approx 0{,}1303$
c) Skisse
d) $a \approx 6{,}58$

## Løsningsforslag

### a

$X$ er binomisk fordelt med $n = 100$ og $p = 0{,}20$.

$$\text{E}(X) = n \cdot p = 100 \cdot 0{,}20 = \underline{\underline{20}}$$

$$\text{Var}(X) = n \cdot p \cdot (1 - p) = 100 \cdot 0{,}20 \cdot 0{,}80 = \underline{\underline{16}}$$

### b

$X$ er tilnærmet normalfordelt med $\mu = 20$ og $\sigma = \sqrt{16} = 4$.

Vi bruker halvkorreksjon og finner $P(X \geq 24{,}5)$:

$$z = \frac{24{,}5 - 20}{4} = 1{,}125$$

$$P(X \geq 25) \approx P(Z \geq 1{,}125) = 1 - \Phi(1{,}125) \approx \underline{\underline{0{,}1303}}$$

(Den eksakte binomiske sannsynligheten er $0{,}1314$.)

### c

Vi tegner en normalfordelingskurve med $\mu = 20$ og $\sigma = 4$. Området til høyre for $x = 24{,}5$ skraveres. Dette området representerer $P(X \geq 25)$.

### d

Vi skal finne $a$ slik at $P(20 - a \leq X \leq 20 + a) = 0{,}90$.

Siden $X$ er tilnærmet normalfordelt med $\mu = 20$ og $\sigma = 4$, standardiserer vi:

$$P\left(\frac{-a}{4} \leq Z \leq \frac{a}{4}\right) = 0{,}90$$

Symmetrien gir:

$$P\left(Z \leq \frac{a}{4}\right) = 0{,}95$$

Vi slår opp i normalfordelingstabellen og finner $z_{0{,}95} = 1{,}6449$.

$$\frac{a}{4} = 1{,}6449 \implies \underline{\underline{a \approx 6{,}58}}$$

Intervallet $[20 - 6{,}58, \; 20 + 6{,}58] = [13{,}42, \; 26{,}58]$ forteller oss at det er 90 % sannsynlighet for at en tilfeldig valgt pose inneholder mellom ca. 13 og 27 gule drops.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fremskrittspartiet-og-hypotesetest/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Fremskrittspartiet og hypotesetest

Ved stortingsvalget i september 2017 fikk Fremskrittspartiet 15,2 % av stemmene. Vi lar $X$ være antall personer som stemte Fremskrittspartiet blant 1500 tilfeldig valgte personer som stemte ved forrige stortingsvalg.

Vi kan betrakte $X$ som en binomisk fordelt variabel.

>[!oppgave]
>a) Bestem $P(X \geq 240)$.

En avis hadde mistanke om at oppslutningen til Fremskrittspartiet hadde gått ned. I april 2020 ble 1500 tilfeldig valgte personer som stemte ved forrige stortingsvalg, spurt hvilket parti de ville ha stemt på om det hadde vært valg i dag.

>[!oppgave]
>b) Sett opp en nullhypotese og en alternativ hypotese som kan brukes for å teste avisens mistanke.

Det viste seg at 13,8 % av de spurte ville ha stemt på Fremskrittspartiet.

>[!oppgave]
>c) Gjennomfør hypotesetesten. Bruk den til å avgjøre om det er grunnlag for å si at Fremskrittspartiet har fått mindre oppslutning. Bruk et signifikansnivå på 5 %.

## Fasit

a) $P(X \geq 240) \approx 0{,}2033$
b) $H_0\colon p = 0{,}152$, $H_1\colon p < 0{,}152$
c) $P$-verdi $\approx 0{,}069 > 0{,}05$. Vi forkaster ikke $H_0$.

## Løsningsforslag

### a

$X$ er binomisk fordelt med $n = 1500$ og $p = 0{,}152$.

Vi bruker normalapproksimasjon:

$$\mu = np = 1500 \cdot 0{,}152 = 228$$

$$\sigma = \sqrt{np(1-p)} = \sqrt{1500 \cdot 0{,}152 \cdot 0{,}848} \approx 13{,}90$$

Med halvkorreksjon:

$$P(X \geq 240) \approx P\left(Z \geq \frac{239{,}5 - 228}{13{,}90}\right) = P(Z \geq 0{,}83) \approx \underline{\underline{0{,}2033}}$$

### b

Avisen har mistanke om at oppslutningen har gått ned. Vi tester:

$$H_0\colon p = 0{,}152$$

$$H_1\colon p < 0{,}152$$

### c

Vi har $n = 1500$ og observert andel $\hat{p} = 0{,}138$, altså $x = 0{,}138 \cdot 1500 = 207$ personer.

Vi beregner $P$-verdien under $H_0$ ($p = 0{,}152$):

$$P\text{-verdi} = P(X \leq 207)$$

Med normalapproksimasjon:

$$z = \frac{207 - 228}{13{,}90} \approx -1{,}51$$

$$P\text{-verdi} = \Phi(-1{,}51) \approx 0{,}066$$

Siden $P$-verdien $\approx 0{,}066 > 0{,}05$, forkaster vi **ikke** $H_0$ på 5 % signifikansnivå.

**Vi har ikke tilstrekkelig grunnlag for å si at oppslutningen til Fremskrittspartiet har gått ned.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/rottebestand-og-logistisk-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Rottebestand og logistisk modell

I 2019 registrerte forskere antall rotter i en bypark noen dager i perioden fra og med 31. mai til og med 20. juli. Se tabellen.

| Antall dager etter 31. mai | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| Antall rotter | 6 | 15 | 37 | 72 | 104 | 126 |

>[!oppgave]
>a) La $t$ være antall dager etter 31. mai, og bruk regresjon til å bestemme en logistisk modell $g$ for antall rotter i parken.

Modellen $f$ gitt ved

$$f(t) = \frac{120}{1 + 19 \cdot e^{-0{,}12t}}$$

viser hvor mange rotter det var i den samme parken $t$ dager etter 31. mai i 2018.

>[!oppgave]
>b) Når økte antall rotter raskest, ifølge modellen $f$?
>Hvor raskt økte rottebestanden da?

I en annen park ble det i 2019 registrert 20 rotter den 31. mai. Anta at rottebestanden også i denne parken følger en logistisk modell. Anta videre at veksten i antall rotter var størst den 15. juli, og at bestanden stabiliserte seg på 200.

>[!oppgave]
>c) Hvor mange rotter var det i denne parken den 30. juli, ifølge disse antakelsene?

## Fasit

a) $g(t) \approx \dfrac{140{,}3}{1 + 23{,}1 \cdot e^{-0{,}1056t}}$
b) Etter ca. 24,5 dager. Veksten var da ca. 3,6 rotter per dag.
c) Ca. 135 rotter

## Løsningsforslag

### a

Vi legger inn datapunktene i GeoGebra og bruker logistisk regresjon.

| $t$ | 0 | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|
| Antall | 6 | 15 | 37 | 72 | 104 | 126 |

Vi tilpasser en logistisk modell $g(t) = \dfrac{C}{1 + a \cdot e^{-bt}}$.

Regresjonen gir

$$\underline{\underline{g(t) \approx \frac{140{,}3}{1 + 23{,}1 \cdot e^{-0{,}1056t}}}}$$

### b

For en logistisk funksjon $f(t) = \dfrac{C}{1 + a \cdot e^{-bt}}$ øker antallet raskest i vendepunktet, der $f(t) = \dfrac{C}{2}$.

Vi bruker GeoGebra CAS til å finne vendepunktet til $f$:

![GeoGebra CAS: vendepunkt](/img/user/_resources/s2-v20-2-2.png)

Fra linje 2 ser vi at vendepunktet er i $(24{,}54, \; 60)$.

Fra linje 3 ser vi at $f'(24{,}54) \approx 3{,}6$.

**Antall rotter økte raskest etter ca. $\underline{\underline{24{,}5 \text{~dager}}}$ (rundt 25. juni).**

**Veksten var da ca. $\underline{\underline{3{,}6 \text{~rotter per dag}}}$.**

### c

Vi skal finne en logistisk modell for den andre parken:

$$h(t) = \frac{C}{1 + a \cdot e^{-bt}}$$

Vi vet at:
- $C = 200$ (bestanden stabiliserer seg på 200)
- $h(0) = 20$ (20 rotter den 31. mai)
- Veksten er størst 15. juli, som er dag $t = 45$

I vendepunktet er $h(t) = \dfrac{C}{2} = 100$, og dette skjer ved $t = 45$.

Fra $h(0) = 20$:

$$\frac{200}{1 + a} = 20 \implies 1 + a = 10 \implies a = 9$$

Fra vendepunkt ved $t = 45$:

$$a \cdot e^{-45b} = 1 \implies 9 \cdot e^{-45b} = 1 \implies e^{-45b} = \frac{1}{9}$$

$$b = \frac{\ln 9}{45} \approx 0{,}0488$$

Den 30. juli er dag $t = 60$:

$$h(60) = \frac{200}{1 + 9 \cdot e^{-0{,}0488 \cdot 60}} = \frac{200}{1 + 9 \cdot e^{-2{,}929}}$$

$$= \frac{200}{1 + 9 \cdot 0{,}0535} = \frac{200}{1{,}482} \approx \underline{\underline{135 \text{~rotter}}}$$


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/overskuddsfunksjon-og-prisfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Overskuddsfunksjon og prisfunksjon

En bedrift produserer og selger en vare. Kostnaden $K$ i kroner ved å produsere og selge $x$ enheter av varen per dag, er gitt ved

$$K(x) = 0{,}03x^2 + 20x + 500, \quad 0 \leq x \leq 250$$

Inntekten $I$ i kroner dersom bedriften selger $x$ enheter per dag, er gitt ved

$$I(x) = -0{,}14x^2 + 74x, \quad 0 \leq x \leq 250$$

>[!oppgave]
>a) Tegn grafen til overskuddsfunksjonen.
>b) Bestem hvor mange enheter bedriften må produsere og selge per dag for å få størst overskudd. Hvor stort blir dette overskuddet?

For en annen vare antar vi at salgsprisen i kroner per enhet ved produksjon av $x$ enheter er gitt på formen

$$p(x) = ax + b$$

Her er $a$ og $b$ to reelle tall.

Kostnadsfunksjonen for denne varen er $K$ som gitt ovenfor.

>[!oppgave]
>c) Bestem $a$ og $b$ slik at overskuddet er
>
>- størst ved produksjon og salg av 175 enheter
>- 5625 kr ved produksjon av 175 enheter

## Fasit

a) Se graf
b) Ca. $158{,}8$ enheter, overskudd ca. $3788 \text{~kr}$
c) $a = -0{,}17$ og $b = 90$

## Løsningsforslag

### a

Overskuddsfunksjonen er

$$O(x) = I(x) - K(x) = -0{,}14x^2 + 74x - 0{,}03x^2 - 20x - 500$$

$$O(x) = -0{,}17x^2 + 54x - 500$$

![Graf over overskuddsfunksjonen](/img/user/_resources/s2-v20-2-3-graf.png)

### b

Vi finner maksimum ved å sette $O'(x) = 0$:

![GeoGebra CAS: overskuddsfunksjon](/img/user/_resources/s2-v20-2-3.png)

Fra linje 4 ser vi at $O'(x) = 0$ gir $x = \dfrac{2700}{17} \approx 158{,}8$.

Fra linje 5 ser vi at $O\!\left(\dfrac{2700}{17}\right) = \dfrac{64\,400}{17} \approx 3788$.

**Bedriften må produsere og selge ca. $\underline{\underline{159 \text{~enheter}}}$ per dag for størst overskudd. Overskuddet blir da ca. $\underline{\underline{3788 \text{~kr}}}$.**

### c

Inntekten med prisfunksjonen $p(x) = ax + b$ er

$$I(x) = x \cdot p(x) = ax^2 + bx$$

Overskuddet blir

$$O(x) = I(x) - K(x) = ax^2 + bx - 0{,}03x^2 - 20x - 500$$

$$O(x) = (a - 0{,}03)x^2 + (b - 20)x - 500$$

**Krav 1:** Størst overskudd ved $x = 175$, altså $O'(175) = 0$:

$$O'(x) = 2(a - 0{,}03)x + (b - 20)$$

$$O'(175) = 350(a - 0{,}03) + (b - 20) = 0$$

$$350a + b = 30{,}5 \quad \text{(I)}$$

**Krav 2:** $O(175) = 5625$:

$$(a - 0{,}03) \cdot 175^2 + (b - 20) \cdot 175 - 500 = 5625$$

$$30625a - 918{,}75 + 175b - 3500 - 500 = 5625$$

$$30625a + 175b = 10543{,}75 \quad \text{(II)}$$

Fra (I): $b = 30{,}5 - 350a$. Innsatt i (II):

$$30625a + 175(30{,}5 - 350a) = 10543{,}75$$

$$30625a + 5337{,}5 - 61250a = 10543{,}75$$

$$-30625a = 5206{,}25$$

$$\underline{\underline{a = -0{,}17}}$$

$$\underline{\underline{b = 30{,}5 - 350 \cdot (-0{,}17) = 90}}$$


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/annuitetslan-og-serielan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Annuitetslån og serielån

Caroline skal kjøpe en leilighet og har skaffet et annuitetslån på 2 500 000 kr i en bank. Lånet skal betales tilbake med en nedbetalingstid på 30 år, én termin per år og en fast årlig rentesats på 2,7 %. Første innbetaling er om ett år.

>[!oppgave]
>a) Hvor mye må Caroline totalt betale til banken i løpet av hele låneperioden?

Rett etter innbetaling av det 10. terminbeløpet får Caroline banken til å gjøre lånet om til et serielån. Da gjenstår 20 årlige terminer før lånet er nedbetalt, den første om ett år. Rentesatsen er fortsatt 2,7 %.

>[!oppgave]
>b) Vis at de årlige avdragene på serielånet blir 93 820 kroner.
>c) Bestem summen av de 20 terminbeløpene for serielånet.

## Fasit

a) Ca. $3\,679\,560 \text{~kr}$
b) Avdrag $\approx 93\,820 \text{~kr}$
c) Ca. $2\,408\,372 \text{~kr}$

## Løsningsforslag

### a

Vi finner terminbeløpet for annuitetslånet. Nåverdien av alle terminbeløp skal være lik lånebeløpet:

$$T \cdot \frac{1 - 1{,}027^{-30}}{0{,}027} = 2\,500\,000$$

Vi løser i GeoGebra CAS:

![GeoGebra CAS: annuitetslån](/img/user/_resources/s2-v20-2-4.png)

Fra linje 1 ser vi at terminbeløpet er $T \approx 122\,652 \text{~kr}$.

Totalt betaler Caroline

$$30 \cdot T = 30 \cdot 122\,652 \approx \underline{\underline{3\,679\,560 \text{~kr}}}$$

### b

Vi finner restgjelden etter 10 terminer (se linje 3 i CAS-utklippet):

$$R_{10} = 2\,500\,000 \cdot 1{,}027^{10} - T \cdot \frac{1{,}027^{10} - 1}{0{,}027} \approx 1\,876\,410 \text{~kr}$$

Med serielån over 20 terminer blir de årlige avdragene

$$\text{Avdrag} = \frac{R_{10}}{20} = \frac{1\,876\,410}{20} \approx \underline{\underline{93\,820 \text{~kr}}}$$

### c

Terminbeløp nummer $k$ i serielånet er avdrag pluss renter på gjenstående gjeld:

$$T_k = 93\,820 + (1\,876\,410 - (k-1) \cdot 93\,820) \cdot 0{,}027$$

Vi bruker GeoGebra CAS til å summere:

![GeoGebra CAS: serielån sum](/img/user/_resources/s2-v20-2-4b.png)

Fra linje 3 ser vi at summen av de 20 terminbeløpene er

$$\sum_{k=1}^{20} T_k \approx \underline{\underline{2\,408\,372 \text{~kr}}}$$


</div></div>


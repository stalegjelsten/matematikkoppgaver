---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v22","date":"2022-05-25","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2022","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2022/","permalink":"/eksamener/s2-eksamen-v2022/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v22","date":"2022-05-25","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2022","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av tre funksjoner](https://matematikkoppgaver.vercel.app/derivasjon-av-tre-funksjoner/) | derivasjon, logaritmer, eksponentialfunksjoner, rasjonale funksjoner | × |
| [1-2](#oppgave-1-2) | [Tredjegradsfunksjon med nullpunkter og vendetangent](https://matematikkoppgaver.vercel.app/tredjegradsfunksjon-med-nullpunkter-og-vendetangent/) | funksjonsdrøfting, polynomdivisjon, derivasjon | × |
| [1-3](#oppgave-1-3) | [Aritmetisk og geometrisk rekke med betingelser](https://matematikkoppgaver.vercel.app/aritmetisk-og-geometrisk-rekke-med-betingelser/) | rekker | × |
| [1-4](#oppgave-1-4) | [Virkestoff i tablett](https://matematikkoppgaver.vercel.app/virkestoff-i-tablett/) | uendelig rekke, rekker | × |
| [1-5](#oppgave-1-5) | [Grensekostnad og enhetskostnad bedrift](https://matematikkoppgaver.vercel.app/grensekostnad-og-enhetskostnad-bedrift/) | grenseinntekt og grensekostnad, enhetskostnad, økonomi | × |
| [1-6](#oppgave-1-6) | [Laveste daglige inntekt](https://matematikkoppgaver.vercel.app/laveste-daglige-inntekt/) | etterspørsel, optimering, økonomi | × |
| [1-7](#oppgave-1-7) | [Torskefileter i poser](https://matematikkoppgaver.vercel.app/torskefileter-i-poser/) | forventningsverdi, varians, normalfordeling, sannsynlighet | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Immunitet og logistisk modell](https://matematikkoppgaver.vercel.app/immunitet-og-logistisk-modell/) | logistisk funksjon, regresjon, integral, modellering | × |
| [2-2](#oppgave-2-2) | [Kaffefabrikken og hypotesetest](https://matematikkoppgaver.vercel.app/kaffefabrikken-og-hypotesetest/) | normalfordeling, hypotesetest | × |
| [2-3](#oppgave-2-3) | [Sparing og annuitetslån Camilla](https://matematikkoppgaver.vercel.app/sparing-og-annuitetslan-camilla/) | sparing, lån, rekker, økonomi | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-tre-funksjoner/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av tre funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 3x^3 + \ln x$
>b) $g(x) = x \cdot e^{-2x^2}$
>c) $h(x) = \dfrac{2x}{x^2 + 1}$

## Fasit

a) $f'(x) = 9x^2 + \dfrac{1}{x}$
b) $g'(x) = (1 - 4x^2) \cdot e^{-2x^2}$
c) $h'(x) = \dfrac{2(1-x^2)}{(x^2+1)^2}$

## Løsningsforslag

### a

Vi deriverer ledd for ledd:

   $$f'(x) = 3 \cdot 3x^2 + \frac{1}{x} = \underline{\underline{9x^2 + \frac{1}{x}}}$$

### b

Vi bruker produktregelen med $u = x$ og $v = e^{-2x^2}$:

   $$g'(x) = 1 \cdot e^{-2x^2} + x \cdot (-4x) \cdot e^{-2x^2} = e^{-2x^2}(1 - 4x^2)$$

   $$= \underline{\underline{(1 - 4x^2) \cdot e^{-2x^2}}}$$

### c

Vi bruker brøkregelen med $u = 2x$ og $v = x^2 + 1$:

   $$h'(x) = \frac{2(x^2+1) - 2x \cdot 2x}{(x^2+1)^2} = \frac{2x^2 + 2 - 4x^2}{(x^2+1)^2} = \underline{\underline{\frac{2 - 2x^2}{(x^2+1)^2}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradsfunksjon-med-nullpunkter-og-vendetangent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradsfunksjon med nullpunkter og vendetangent

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 6x^2 + 3x - 10$$

>[!oppgave]
>a) Vis at $x = 1$ er et nullpunkt til $f$. Bestem de andre nullpunktene til $f$.
>b) Bestem eksakte verdier for $x$-koordinatene til eventuelle toppunkter og til eventuelle bunnpunkter på grafen til $f$.
>c) Bestem likningen til vendetangenten til $f$.
>d) Lag en skisse av grafen til $f$.

## Fasit

a) $x = 1$, $x = -2$, $x = -5$
b) Topp: $x = -2 - \sqrt{3}$, bunn: $x = -2 + \sqrt{3}$
c) $y = -9x - 18$
d) Skisse

## Løsningsforslag

### a

Vi setter inn $x = 1$:

$$f(1) = 1 + 6 + 3 - 10 = 0 \checkmark$$

Siden $x = 1$ er et nullpunkt, er $(x-1)$ en faktor. Vi utfører polynomdivisjon:

$$(x^3 + 6x^2 + 3x - 10) \div (x-1) = x^2 + 7x + 10$$

Vi faktoriserer: $x^2 + 7x + 10 = (x+2)(x+5)$.

Nullpunktene er $\underline{\underline{x = 1, \; x = -2, \; x = -5}}$.

### b

Vi deriverer:

$$f'(x) = 3x^2 + 12x + 3$$

Vi setter $f'(x) = 0$:

$$3x^2 + 12x + 3 = 0 \implies x^2 + 4x + 1 = 0$$

$$x = \frac{-4 \pm \sqrt{16 - 4}}{2} = \frac{-4 \pm \sqrt{12}}{2} = -2 \pm \sqrt{3}$$

Vi sjekker med $f''(x) = 6x + 12$:

- $f''(-2-\sqrt{3}) = 6(-2-\sqrt{3}) + 12 = -6\sqrt{3} < 0$ → **toppunkt** i $\underline{\underline{x = -2 - \sqrt{3}}}$
- $f''(-2+\sqrt{3}) = 6(-2+\sqrt{3}) + 12 = 6\sqrt{3} > 0$ → **bunnpunkt** i $\underline{\underline{x = -2 + \sqrt{3}}}$

### c

Vendepunktet ligger der $f''(x) = 0$:

$$6x + 12 = 0 \implies x = -2$$

$$f(-2) = (-2)^3 + 6(-2)^2 + 3(-2) - 10 = -8 + 24 - 6 - 10 = 0$$

Stigningstallet til vendetangenten:

$$f'(-2) = 3 \cdot 4 + 12 \cdot (-2) + 3 = 12 - 24 + 3 = -9$$

Vendetangenten: $y - 0 = -9(x - (-2))$, altså

$$\underline{\underline{y = -9x - 18}}$$

### d

Grafen har nullpunkter i $x = -5$, $x = -2$ og $x = 1$. Toppunkt for $x = -2-\sqrt{3} \approx -3{,}7$ og bunnpunkt for $x = -2+\sqrt{3} \approx -0{,}3$. Vendepunktet er $(-2, \, 0)$, og vendetangenten $y = -9x - 18$ går gjennom dette punktet. For store $x$ går $f(x) \to +\infty$ og for $x \to -\infty$ går $f(x) \to -\infty$.


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-og-geometrisk-rekke-med-betingelser/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk og geometrisk rekke med betingelser

I en rekke $a_1 + a_2 + \cdots + a_n$ er $a_2 = 8$ og $a_4 = 2$.

>[!oppgave]
>a) Bestem summen av de seks første leddene i rekken, dersom den er aritmetisk.

Det fins to geometriske rekker som tilfredsstiller betingelsene ovenfor.

>[!oppgave]
>b) Bestem summen av de seks første leddene i hver av de to geometriske rekkene.

## Fasit

a) $s_6 = 21$
b) $s_6 = \frac{63}{2}$ eller $s_6 = -\frac{21}{2}$

## Løsningsforslag

### a

I en aritmetisk rekke er $a_n = a_1 + (n-1)d$. Vi har:

$$a_2 = a_1 + d = 8 \quad \text{og} \quad a_4 = a_1 + 3d = 2$$

Vi trekker den første fra den andre:

$$2d = 2 - 8 = -6 \implies d = -3$$

$$a_1 = 8 - (-3) = 11$$

Summen av de seks første leddene:

$$s_6 = \frac{6}{2}(2 \cdot 11 + 5 \cdot (-3)) = 3(22 - 15) = \underline{\underline{21}}$$

### b

I en geometrisk rekke er $a_n = a_1 \cdot k^{n-1}$. Vi har:

$$a_2 = a_1 k = 8 \quad \text{og} \quad a_4 = a_1 k^3 = 2$$

Vi deler:

$$\frac{a_4}{a_2} = k^2 = \frac{2}{8} = \frac{1}{4} \implies k = \pm \frac{1}{2}$$

**Tilfelle 1:** $k = \frac{1}{2}$, da er $a_1 = \frac{8}{1/2} = 16$

$$s_6 = 16 \cdot \frac{1 - (1/2)^6}{1 - 1/2} = 16 \cdot \frac{1 - 1/64}{1/2} = 16 \cdot \frac{63/64}{1/2} = 16 \cdot \frac{63}{32} = \underline{\underline{\frac{63}{2}}}$$

**Tilfelle 2:** $k = -\frac{1}{2}$, da er $a_1 = \frac{8}{-1/2} = -16$

$$s_6 = -16 \cdot \frac{1 - (-1/2)^6}{1 - (-1/2)} = -16 \cdot \frac{1 - 1/64}{3/2} = -16 \cdot \frac{63/64}{3/2} = -16 \cdot \frac{63}{96} = \underline{\underline{-\frac{21}{2}}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/virkestoff-i-tablett/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Virkestoff i tablett

En tablett inneholder 125 mg av et virkestoff. Elise tar én tablett hver dag i en periode. Kroppen til Elise bryter ned 20 prosent av virkestoffet hvert døgn.

>[!oppgave]
>a) Hvor mye virkestoff har Elise i kroppen like etter at hun har tatt den fjerde tabletten?
>b) Hvor mye virkestoff vil det være i kroppen til Elise dersom hun fortsetter å ta en tablett hver dag over en lang tidsperiode?

## Fasit

a) $369 \, \mathrm{mg}$
b) $625 \, \mathrm{mg}$

## Løsningsforslag

### a

Kroppen beholder 80 % av virkestoffet hvert døgn ($k = 0{,}8$). Like etter den $n$-te tabletten har Elise

$$V_n = 125 + 125 \cdot 0{,}8 + 125 \cdot 0{,}8^2 + \cdots + 125 \cdot 0{,}8^{n-1}$$

Etter den fjerde tabletten:

$$V_4 = 125(1 + 0{,}8 + 0{,}64 + 0{,}512) = 125 \cdot 2{,}952 = \underline{\underline{369 \, \mathrm{mg}}}$$

### b

Over en lang tidsperiode nærmer vi oss en uendelig geometrisk rekke med $a_1 = 125$ og $k = 0{,}8$:

$$V = \frac{125}{1 - 0{,}8} = \frac{125}{0{,}2} = \underline{\underline{625 \, \mathrm{mg}}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grensekostnad-og-enhetskostnad-bedrift/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grensekostnad og enhetskostnad bedrift

En bedrift produserer og selger en vare. De daglige kostnadene $K$ ved produksjon og salg av $x$ enheter av denne varen er gitt ved

$$K(x) = 0{,}2x^2 + 80x + 720, \quad 0 < x < 400$$

Ledelsen i bedriften har funnet ut at med dagens produksjonsmengde vil det koste 160 kroner å øke den daglige produksjonsmengden med 1 enhet.

>[!oppgave]
>a) Hvor mange enheter produserer bedriften daglig?

Bedriften får solgt varen for 180 kroner per enhet.

>[!oppgave]
>b) Vil det lønne seg å øke produksjonen til mer enn 300 enheter per dag?
>c) Bestem den daglige produksjonsmengden som gir lavest kostnad per enhet.

## Fasit

a) 200 enheter
b) Nei
c) 60 enheter

## Løsningsforslag

### a

Grensekostnaden er $K'(x) = 0{,}4x + 80$.

Dagens grensekostnad er 160 kr:

$$0{,}4x + 80 = 160 \implies 0{,}4x = 80 \implies \underline{\underline{x = 200}}$$

### b

Grensekostnaden ved $x = 300$:

$$K'(300) = 0{,}4 \cdot 300 + 80 = 200 \, \mathrm{kr}$$

Siden grensekostnaden ($200 \, \mathrm{kr}$) er høyere enn salgsprisen ($180 \, \mathrm{kr}$), vil det **ikke lønne seg** å øke produksjonen til mer enn 300 enheter. Hvert ekstra produkt koster mer å produsere enn det selges for.

### c

Enhetskostnaden er

$$E(x) = \frac{K(x)}{x} = 0{,}2x + 80 + \frac{720}{x}$$

Vi deriverer og setter lik null:

$$E'(x) = 0{,}2 - \frac{720}{x^2} = 0 \implies x^2 = \frac{720}{0{,}2} = 3600 \implies \underline{\underline{x = 60}}$$


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/laveste-daglige-inntekt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Laveste daglige inntekt

Dersom en bedrift selger en vare for $p$ kroner per enhet, vil den daglige etterspørselen $q$ være gitt ved

$$q(p) = \frac{10\,000}{\ln p}, \quad p \in [2, 10]$$

>[!oppgave]
>Bestem den laveste daglige inntekten bedriften kan få ved salg av denne varen.

## Fasit

$10\,000e \approx 27\,183 \, \mathrm{kr}$

## Løsningsforslag

Daglig inntekt er $I(p) = p \cdot q(p) = \dfrac{10\,000p}{\ln p}$.

Vi deriverer med brøkregelen:

$$I'(p) = 10\,000 \cdot \frac{\ln p - p \cdot \frac{1}{p}}{(\ln p)^2} = 10\,000 \cdot \frac{\ln p - 1}{(\ln p)^2}$$

Vi setter $I'(p) = 0$: $\ln p - 1 = 0 \implies p = e$.

Vi sjekker endepunktene og det stasjonære punktet:

$$I(2) = \frac{10\,000 \cdot 2}{\ln 2} \approx 28\,854 \, \mathrm{kr}$$

$$I(e) = \frac{10\,000 \cdot e}{\ln e} = 10\,000e \approx 27\,183 \, \mathrm{kr}$$

$$I(10) = \frac{10\,000 \cdot 10}{\ln 10} \approx 43\,429 \, \mathrm{kr}$$

Den laveste daglige inntekten er $\underline{\underline{10\,000e \approx 27\,183 \, \mathrm{kr}}}$, når prisen er $p = e \approx 2{,}72 \, \mathrm{kr}$.


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/torskefileter-i-poser/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Torskefileter i poser

Caroline driver et cateringfirma og kjøper ofte poser med frosne torskefileter. La $X$ være antall torskefileter i en tilfeldig valgt pose. Sannsynlighetsfordelingen til $X$ er gitt i tabellen nedenfor.

| $k$ | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,1 | 0,2 | 0,4 | 0,2 | 0,1 |

>[!oppgave]
>a) Regn ut forventningsverdien til $X$. Hva forteller dette svaret?
>b) Vis at variansen til $X$ er 1,2.

La $S$ være det totale antallet torskefileter i 120 tilfeldig valgte poser. Vi antar at antall torskefileter i de ulike posene er uavhengig av hverandre.

>[!oppgave]
>c) Begrunn at $\text{E}(S) = 840$, og at $\text{Var}(S) = 144$.

En uke trenger Caroline 822 torskefileter. Hun bestiller derfor 120 poser.

>[!oppgave]
>d) Begrunn at $S$ er tilnærmet normalfordelt, og bruk dette til å bestemme sannsynligheten for at Caroline får nok torskefileter denne uken.

## Fasit

a) $\text{E}(X) = 7$
b) $\text{Var}(X) = 1{,}2$
c) $\text{E}(S) = 840$, $\text{Var}(S) = 144$
d) $P(S \geq 822) \approx 0{,}933$

## Løsningsforslag

### a

$$\text{E}(X) = 5 \cdot 0{,}1 + 6 \cdot 0{,}2 + 7 \cdot 0{,}4 + 8 \cdot 0{,}2 + 9 \cdot 0{,}1$$

$$= 0{,}5 + 1{,}2 + 2{,}8 + 1{,}6 + 0{,}9 = \underline{\underline{7}}$$

Forventningsverdien forteller at man i gjennomsnitt får 7 torskefileter per pose.

### b

$$\text{E}(X^2) = 25 \cdot 0{,}1 + 36 \cdot 0{,}2 + 49 \cdot 0{,}4 + 64 \cdot 0{,}2 + 81 \cdot 0{,}1$$

$$= 2{,}5 + 7{,}2 + 19{,}6 + 12{,}8 + 8{,}1 = 50{,}2$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 50{,}2 - 49 = 1{,}2$$

### c

$S = X_1 + X_2 + \cdots + X_{120}$, der $X_i$ er uavhengige med samme fordeling som $X$.

$$\text{E}(S) = 120 \cdot \text{E}(X) = 120 \cdot 7 = 840$$

$$\text{Var}(S) = 120 \cdot \text{Var}(X) = 120 \cdot 1{,}2 = 144$$

### d

Siden $S$ er summen av 120 uavhengige, identisk fordelte stokastiske variabler og $n = 120 \geq 30$, følger det av sentralgrensesetningen at $S$ er tilnærmet normalfordelt med $\text{E}(S) = 840$ og $\text{SD}(S) = \sqrt{144} = 12$.

$$P(S \geq 822) = P\left(Z \geq \frac{822 - 840}{12}\right) = P(Z \geq -1{,}5) = P(Z \leq 1{,}5) \approx \underline{\underline{0{,}933}}$$

Det er ca. 93 % sannsynlighet for at Caroline får nok torskefileter.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/immunitet-og-logistisk-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Immunitet og logistisk modell

I en by i Norge ble det i 2021 kartlagt hvor mange som ble immune mot en sykdom.

Tabellen viser hvor stor prosentandel av befolkningen som var immune ved slutten av noen utvalgte måneder i 2021.

| $t$ | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| Prosentandel immune | 6 | 21 | 41 | 68 | 81 |

Her er $t = 1$ slutten av januar 2021, $t = 2$ slutten av februar 2021 og så videre.

>[!oppgave]
>a) Bruk regresjon til å bestemme en logistisk modell $g$ for situasjonen.
>b) Ved hvilket tidspunkt vil andelen immune passere 85 prosent ifølge modellen?
>c) Vil hele befolkningen noen gang bli immune ifølge modellen? Begrunn svaret.

I en annen by er $N$ gitt ved

$$N(t) = \frac{2300e^{-0{,}61t}}{(1 + 40e^{-0{,}61t})^2}$$

en god modell for hvor mye prosentandelen som er immune, økte med per måned, $t$ måneder etter 1. januar 2021. Det vil si at $N(1)$ er prosentandelen nye immune i januar 2021, $N(2)$ er prosentandelen nye immune i februar 2021, og så videre.

>[!oppgave]
>d) Bruk graftegner til å tegne grafen til $N$.
>e) Bestem $\displaystyle\int_{0{,}5}^{12{,}5} N(t) \, \mathrm{d}t$. Hva forteller svaret i denne situasjonen?

## Fasit

a) $g(t) \approx \dfrac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}}$
b) $t \approx 11$, dvs. slutten av november 2021
c) Nei, grenseverdien er ca. 90 %
d) Se graf
e) $\approx 89{,}4$ prosentpoeng

## Løsningsforslag

### a

Vi bruker logistisk regresjon på datapunktene $(2, 6)$, $(4, 21)$, $(6, 41)$, $(8, 68)$, $(10, 81)$.

Regresjonen gir en logistisk modell:

$$\underline{\underline{g(t) \approx \frac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}}}}$$

### b

Vi skal løse $g(t) = 85$:

$$\frac{90}{1 + 38{,}6 \cdot e^{-0{,}59t}} = 85$$

$$1 + 38{,}6 \cdot e^{-0{,}59t} = \frac{90}{85} \approx 1{,}059$$

$$e^{-0{,}59t} = \frac{0{,}059}{38{,}6} \approx 0{,}00153$$

$$t = \frac{-\ln(0{,}00153)}{0{,}59} \approx \underline{\underline{11}}$$

Andelen immune passerer 85 % ved slutten av november 2021.

### c

Grenseverdien til den logistiske modellen er $L \approx 90$:

$$\lim_{t \to \infty} g(t) = \frac{90}{1 + 0} = 90$$

**Nei**, hele befolkningen vil aldri bli immune ifølge modellen. Andelen nærmer seg 90 %, men når aldri 100 %.

### d

![Graf av N(t)](/img/user/_resources/s2-v22-2-1-graf.png)

Grafen viser at $N(t)$ starter lavt, stiger til et maksimum rundt $t \approx 6$ (juni), og avtar deretter mot null.

### e

Vi beregner integralet i CAS, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-1-cas.png)

$$\int_{0{,}5}^{12{,}5} N(t) \, \mathrm{d}t \approx \underline{\underline{89{,}4}}$$

Svaret forteller at den totale prosentandelen av befolkningen som ble immune i løpet av de 12 månedene fra midten av januar til midten av januar (altså hele 2021), var ca. **89,4 prosentpoeng**.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kaffefabrikken-og-hypotesetest/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kaffefabrikken og hypotesetest

Kaffefabrikken har en maskin som fyller kaffe i poser. La $X$ være mengden kaffe i en tilfeldig pose. Det viser seg at $X$ er normalfordelt med en forventningsverdi lik 250 gram og standardavvik lik 5 gram.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt pose inneholder mellom 245 gram og 255 gram kaffe.

Kaffefabrikken har den siste tiden fått klager på at det er for lite kaffe i posene. De bestemmer seg for å justere pakkemaskinen slik at det blir mer kaffe i posene. Forventningsverdien blir da større, men vi kan anta at standardavviket fortsatt er 5 gram.

>[!oppgave]
>b) Hva må forventningsverdien minst være dersom høyst 5 prosent av posene skal veie mindre enn 250 gram?

For å være på den sikre siden justerer Kaffefabrikken maskinen slik at den i gjennomsnitt fyller 260 gram i hver pose. De selger kaffe i esker med 10 poser i hver eske. Vi antar at mengden kaffe i hver pose er uavhengig av hverandre.

>[!oppgave]
>c) Hva er sannsynligheten for at ingen av posene i en tilfeldig valgt eske inneholder mindre enn 250 gram kaffe?

Ledelsen på Kaffefabrikken mistenker at det er noe galt med innstillingen til pakkemaskinen. De tror at forventningsverdien er mindre enn 260 gram.

>[!oppgave]
>d) Sett opp en nullhypotese og en alternativ hypotese som kan brukes for å teste ledelsens mistanke.

I en stikkprøve viste det seg at gjennomsnittsvekten til 50 tilfeldige poser var 258,4 gram.

>[!oppgave]
>e) Gjennomfør hypotesetesten. Bruk et signifikansnivå på 5 prosent til å avgjøre om det er grunnlag for ledelsens mistanke.

## Fasit

a) $\approx 0{,}6827$
b) $\mu \geq 258{,}2 \, \mathrm{g}$
c) $\approx 0{,}7944$
d) $H_0\!: \mu = 260$, $H_1\!: \mu < 260$
e) $p$-verdi $\approx 0{,}012 < 0{,}05$, forkaster $H_0$

## Løsningsforslag

Vi bruker GeoGebra til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-2.png)

### a

$X$ er normalfordelt med $\mu = 250$ og $\sigma = 5$.

Se `PMellom` i linje 1:

$$P(245 < X < 255) \approx \underline{\underline{0{,}6827}}$$

### b

Vi skal finne $\mu$ slik at $P(X < 250) \leq 0{,}05$.

$$P(X < 250) = P\left(Z < \frac{250 - \mu}{5}\right) = 0{,}05$$

$$\frac{250 - \mu}{5} = -1{,}645 \implies \mu = 250 + 5 \cdot 1{,}645$$

Se `MuMin` i linje 2: $\mu \geq \underline{\underline{258{,}2 \, \mathrm{g}}}$.

### c

Med $\mu = 260$ og $\sigma = 5$: sannsynligheten for at én pose har mer enn 250 g:

Se `POver250` i linje 3: $P(X > 250) \approx 0{,}9772$.

For at alle 10 posene i en eske har mer enn 250 g:

Se `PAlleOver` i linje 4: $P = 0{,}9772^{10} \approx \underline{\underline{0{,}7944}}$.

### d

Ledelsen tror at $\mu < 260$. Vi setter opp:

- $H_0\!: \mu = 260$ (maskinen er korrekt innstilt)
- $H_1\!: \mu < 260$ (forventningsverdien er lavere enn 260)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

### e

Testobservatoren med $\bar{X} = 258{,}4$, $\sigma = 5$ og $n = 50$:

Se `ZVerdi` i linje 5:

$$Z = \frac{258{,}4 - 260}{5/\sqrt{50}} \approx -2{,}26$$

Se `PVerdi` i linje 6: $p$-verdi $\approx 0{,}012$.

Siden $p$-verdien $0{,}012 < 0{,}05 = \alpha$, forkaster vi $H_0$.

**Det er grunnlag for ledelsens mistanke** — det er statistisk signifikant at forventningsverdien er lavere enn 260 gram.


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sparing-og-annuitetslan-camilla/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sparing og annuitetslån Camilla

Camilla ønsker å arbeide som frivillig nødhjelpsarbeider etter at hun er ferdig med videregående skole. Hun har planlagt dette i 2 år. I denne perioden har hun spart 5000 kroner i måneden på en fastrentekonto. Den månedlige rentefoten på denne kontoen er 0,2 prosent.

>[!oppgave]
>a) Hvor mye hadde Camilla på kontoen like etter at hun satte inn det 24. beløpet?

Etter at Camilla kommer hjem, ønsker hun å kjøpe seg en bruktbil. Hun vurderer å ta opp et forbrukslån på 100 000 kroner. En bank tilbyr henne et lån med en månedlig rentefot på 1,5 prosent. Lånet skal nedbetales som et annuitetslån med 36 månedlige terminer. Første innbetaling skal skje én måned etter låneopptaket.

>[!oppgave]
>b) Hvor stort terminbeløp må Camilla betale?

Dersom moren til Camilla stiller sikkerhet for lånet, kan banken tilby et lån med bedre betingelser. Dette lånet skal også nedbetales som et annuitetslån med 36 månedlige terminer, og første innbetaling skal skje én måned etter låneopptak. Terminbeløpet Camilla må betale på dette lånet, er 2926 kroner.

>[!oppgave]
>c) Hva er den månedlige rentefoten til dette lånet?

## Fasit

a) Ca. $122\,801 \, \mathrm{kr}$
b) Ca. $3615 \, \mathrm{kr}$
c) Ca. $0{,}28 \, \%$ per måned

## Løsningsforslag

Vi bruker GeoGebra CAS til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-v22-2-3.png)

### a

Camilla setter inn 5000 kr per måned i 24 måneder med månedlig rentefot $r = 0{,}002$. Innskuddene danner en geometrisk rekke.

Det første innskuddet vokser i 23 måneder, det andre i 22 måneder, ..., og det siste vokser i 0 måneder:

$$S = 5000 \cdot \frac{1{,}002^{24} - 1}{0{,}002}$$

Se `Sparekonto` i linje 1: $S \approx \underline{\underline{122\,801 \, \mathrm{kr}}}$.

### b

Et annuitetslån på $100\,000 \, \mathrm{kr}$ med månedlig rentefot $r = 0{,}015$ og 36 terminer gir:

$$T \cdot \sum_{i=1}^{36} \frac{1}{1{,}015^i} = 100\,000$$

Se `Terminbeløp` i linje 2: $T \approx \underline{\underline{3615 \, \mathrm{kr}}}$.

### c

Vi skal finne $r$ slik at terminbeløpet er $2926 \, \mathrm{kr}$:

$$\sum_{i=1}^{36} \frac{2926}{(1+r)^i} = 100\,000$$

Se linje 3 i CAS: $r \approx 0{,}00284$.

Den månedlige rentefoten er ca. **$\underline{\underline{0{,}28 \, \%}}$**.


</div></div>


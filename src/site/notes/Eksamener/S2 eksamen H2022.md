---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"h22","date":"2022-11-16","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2022","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-h2022/","permalink":"/eksamener/s2-eksamen-h2022/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"h22","date":"2022-11-16","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2022","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Deriver eksponential- og logaritmefunksjon](https://matematikkoppgaver.vercel.app/deriver-eksponential-og-logaritmefunksjon/) | derivasjon | × |
| [1-2](#oppgave-1-2) | [Begrunn at uendelig rekke konvergerer](https://matematikkoppgaver.vercel.app/begrunn-at-uendelig-rekke-konvergerer/) | rekker | × |
| [1-3](#oppgave-1-3) | [Polynomdivisjon og eksponentiallikning](https://matematikkoppgaver.vercel.app/polynomdivisjon-og-eksponentiallikning/) | polynomdivisjon, faktorisering, likninger | × |
| [1-4](#oppgave-1-4) | [Pris per kilo frukt og grønnsaker](https://matematikkoppgaver.vercel.app/pris-per-kilo-frukt-og-gronnsaker/) | likningssystem | × |
| [1-5](#oppgave-1-5) | [Idas jakke](https://matematikkoppgaver.vercel.app/idas-jakke/) | rekker | × |
| [1-6](#oppgave-1-6) | [Kostnad per enhet og størst overskudd](https://matematikkoppgaver.vercel.app/kostnad-per-enhet-og-storst-overskudd/) | optimering, grenseinntekt og grensekostnad | × |
| [1-7](#oppgave-1-7) | [Funksjonsdrøfting med eksponentialfaktor](https://matematikkoppgaver.vercel.app/funksjonsdrofting-med-eksponentialfaktor/) | funksjonsdrøfting, derivasjon | × |
| [1-8](#oppgave-1-8) | [Lykkehjulet](https://matematikkoppgaver.vercel.app/lykkehjulet/) | sannsynlighet, normalfordeling, binomisk | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Bakterievekst i avfall](https://matematikkoppgaver.vercel.app/bakterievekst-i-avfall/) | eksponentiell vekst, derivasjon, optimering | × |
| [2-2](#oppgave-2-2) | [Sparing og annuitetslån](https://matematikkoppgaver.vercel.app/sparing-og-annuitetslan/) | rekker, lån, sparing | × |
| [2-3](#oppgave-2-3) | [Sjokoladeplater og hypotesetest](https://matematikkoppgaver.vercel.app/sjokoladeplater-og-hypotesetest/) | normalfordeling, hypotesetest | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/deriver-eksponential-og-logaritmefunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Deriver eksponential- og logaritmefunksjon

Deriver funksjonene

>[!oppgave]
>a) $f(x) = e^{2x} + x^3$
>b) $g(x) = \ln(x^2 + 4)$

## Fasit

a) $f'(x) = 2e^{2x} + 3x^2$
b) $g'(x) = \dfrac{2x}{x^2 + 4}$

## Løsningsforslag

a) Vi deriverer ledd for ledd. For $e^{2x}$ bruker vi kjerneregelen med den ytre funksjonen $e^u$ og den indre funksjonen $u = 2x$:

   $$f'(x) = e^{2x} \cdot 2 + 3x^2 = \underline{\underline{2e^{2x} + 3x^2}}$$

b) Vi bruker kjerneregelen med den ytre funksjonen $\ln u$ og den indre funksjonen $u = x^2 + 4$:

   $$g'(x) = \frac{1}{x^2 + 4} \cdot 2x = \underline{\underline{\frac{2x}{x^2 + 4}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/begrunn-at-uendelig-rekke-konvergerer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Begrunn at uendelig rekke konvergerer

En uendelig geometrisk rekke er gitt ved

$$
36-24+16-\frac{32}{3}+\cdots
$$

Begrunn at rekken konvergerer, og bestem summen av rekken.

## Fasit

Kort begrunnelse: $-1<k<1$
Sum: $\frac{108}{5}$

## Løsningsforslag

Vi finner kvotienten $k$ ved å dele det andre leddet på det første:

$$k = \frac{-24}{36} = -\frac{2}{3}$$

Vi sjekker: $36 \cdot \left(-\frac{2}{3}\right)^2 = 36 \cdot \frac{4}{9} = 16$ ✓

Siden $|k| = \frac{2}{3} < 1$, konvergerer rekken.

Summen av en uendelig geometrisk rekke er gitt ved

$$s = \frac{a_1}{1-k} = \frac{36}{1-\left(-\frac{2}{3}\right)} = \frac{36}{\frac{5}{3}} = \frac{36 \cdot 3}{5} = \underline{\underline{\frac{108}{5}}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynomdivisjon-og-eksponentiallikning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynomdivisjon og eksponentiallikning

Funksjonen $f$ er gitt ved

$$f(x) = -2x^3 + 6x^2 - 8$$

>[!oppgave]
>a) Bruk blant annet polynomdivisjon til å vise at
>$$f(x) = -2(x+1)(x-2)^2$$
>b) Løs ulikheten $f(x) \leq 0$.
>c) Løs likningen
>$$e^{3x} - 3e^{2x} + 4 = 0$$

## Fasit

a) Vis med polynomdivisjon
b) $x \geq -1$, dvs. $x \in [-1, \,\to \rangle$
c) $x = \ln 2$

## Løsningsforslag

### a

Vi prøver å finne et nullpunkt ved innsetting. Vi prøver $x = -1$:

$$f(-1) = -2(-1)^3 + 6(-1)^2 - 8 = 2 + 6 - 8 = 0$$

Så $(x+1)$ er en faktor. Vi utfører polynomdivisjon:

$$(-2x^3 + 6x^2 - 8) \div (x+1) = -2x^2 + 8x - 8$$

Vi faktoriserer kvotienten:

$$-2x^2 + 8x - 8 = -2(x^2 - 4x + 4) = -2(x-2)^2$$

Dermed er

$$f(x) = (x+1) \cdot (-2)(x-2)^2 = -2(x+1)(x-2)^2$$

### b

Vi skal løse $f(x) \leq 0$, altså $-2(x+1)(x-2)^2 \leq 0$.

Nullpunktene er $x = -1$ og $x = 2$. Faktoren $(x-2)^2 \geq 0$ alltid, og $-2 < 0$, så fortegnet til $f(x)$ bestemmes av $(x+1)$:

- For $x < -1$: $(x+1) < 0$, så $f(x) = -2 \cdot (\text{negativ}) \cdot (\text{positiv}) > 0$
- For $x > -1$: $(x+1) > 0$, så $f(x) = -2 \cdot (\text{positiv}) \cdot (\text{positiv}) < 0$ (unntatt $x=2$ der $f=0$)

Løsningen er $\underline{\underline{x \geq -1}}$.

### c

Vi skal løse $e^{3x} - 3e^{2x} + 4 = 0$.

Vi substituerer $u = e^x$ (der $u > 0$):

$$u^3 - 3u^2 + 4 = 0$$

Vi prøver $u = 2$: $8 - 12 + 4 = 0$ ✓

Vi utfører polynomdivisjon:

$$(u^3 - 3u^2 + 4) \div (u-2) = u^2 - u - 2 = (u-2)(u+1)$$

Altså $u^3 - 3u^2 + 4 = (u-2)^2(u+1) = 0$, som gir $u = 2$ eller $u = -1$.

Siden $u = e^x > 0$, forkaster vi $u = -1$.

Fra $e^x = 2$ får vi $\underline{\underline{x = \ln 2}}$.


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pris-per-kilo-frukt-og-gronnsaker/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Pris per kilo frukt og grønnsaker

Tre kunder er innom frukt- og grønnsakhandleren for å kjøpe epler, poteter og moreller.

Den første kunden betaler til sammen 155 kroner for 1 kg epler, 2 kg poteter og 500 g moreller. Den andre kunden betaler til sammen 330 kroner for 2 kg epler, 5 kg poteter og 1 kg moreller. Den tredje kunden betaler til sammen 195 kroner for $1{,}5 \mathrm{~kg}$ epler, 3 kg poteter og 500 g moreller.

>[!oppgave]
>Bestem prisen per kilogram for epler, for poteter og for moreller.

## Fasit

Epler: $40 \, \mathrm{kr/kg}$, poteter: $20 \, \mathrm{kr/kg}$, moreller: $150 \, \mathrm{kr/kg}$

## Løsningsforslag

La $e$ være pris per kg epler, $p$ pris per kg poteter, og $m$ pris per kg moreller. Vi setter opp likningssystemet:

$$\begin{aligned}
\text{I:} \quad & e + 2p + 0{,}5m = 155 \\
\text{II:} \quad & 2e + 5p + m = 330 \\
\text{III:} \quad & 1{,}5e + 3p + 0{,}5m = 195
\end{aligned}$$

Vi ganger likning I med 2 og trekker fra likning II:

$$2e + 4p + m - (2e + 5p + m) = 310 - 330$$

$$-p = -20 \implies p = 20$$

Vi trekker likning I fra likning III:

$$0{,}5e + p = 40 \implies 0{,}5e = 20 \implies e = 40$$

Vi setter inn i likning I:

$$40 + 40 + 0{,}5m = 155 \implies 0{,}5m = 75 \implies m = 150$$

Prisen per kilogram er $\underline{\underline{40 \, \mathrm{kr}}}$ for epler, $\underline{\underline{20 \, \mathrm{kr}}}$ for poteter og $\underline{\underline{150 \, \mathrm{kr}}}$ for moreller.


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/idas-jakke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Idas jakke

Ida sparer til en jakke som koster 1900 kroner.

Hun sparer 100 kroner den første uken. Hun vil øke sparebeløpet med et fast beløp hver uke slik at hun får råd til jakken etter 10 sparebeløp.

Hvor mye må Ida minst øke sparebeløpet med hver uke for å få råd til jakken?

## Fasit

20 kr

## Løsningsforslag

Sparebeløpene danner en aritmetisk rekke med $a_1 = 100$ og differanse $d$. Etter 10 uker skal summen være minst 1900 kr.

Summen av en aritmetisk rekke med $n$ ledd:

$$s_n = \frac{n}{2}\left(2a_1 + (n-1) \cdot d\right)$$

Vi setter inn $n = 10$, $a_1 = 100$ og $s_{10} \geq 1900$:

$$\frac{10}{2}\left(2 \cdot 100 + 9d\right) \geq 1900$$

$$5(200 + 9d) \geq 1900$$

$$1000 + 45d \geq 1900$$

$$45d \geq 900$$

$$d \geq 20$$

**Ida må øke sparebeløpet med minst $\underline{\underline{20 \, \mathrm{kr}}}$ per uke.**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kostnad-per-enhet-og-storst-overskudd/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kostnad per enhet og størst overskudd

Kostnadene $K$ per dag ved produksjon av en vare er gitt ved

$$K(x) = 0{,}2x^2 + 600x + 8000, \quad 0 < x < 2000$$

Her er $x$ antall produserte enheter per dag, og $K(x)$ er gitt i kroner.

>[!oppgave]
>a) Bestem den produksjonsmengden som gir lavest kostnad per enhet.

Etterspørselen avhenger av prisen $p$ på varen. Det viser seg at etterspørselen er gitt ved

$$e(p) = 12\,000 - 10p$$

>[!oppgave]
>b) Bestem den prisen som vil gi størst daglig overskudd.

## Fasit

a) $x = 200$ enheter
b) $p = 1100 \, \mathrm{kr}$

## Løsningsforslag

### a

Kostnad per enhet (enhetskostnaden) er

$$E(x) = \frac{K(x)}{x} = 0{,}2x + 600 + \frac{8000}{x}$$

Vi deriverer og setter lik null:

$$E'(x) = 0{,}2 - \frac{8000}{x^2} = 0$$

$$x^2 = \frac{8000}{0{,}2} = 40\,000 \implies x = 200$$

Siden $E''(x) = \frac{16\,000}{x^3} > 0$, er dette et minimumspunkt.

Produksjonsmengden som gir lavest kostnad per enhet er $\underline{\underline{200 \text{ enheter}}}$.

### b

Antall solgte enheter er $x = e(p) = 12\,000 - 10p$. Inntekten er

$$I(p) = p \cdot (12\,000 - 10p) = 12\,000p - 10p^2$$

Kostnaden uttrykt ved prisen ($x = 12\,000 - 10p$):

$$K(p) = 0{,}2 \cdot (12\,000-10p)^2 + 600(12\,000-10p) + 8000$$

Vi utvider:

$$0{,}2 \cdot (12\,000-10p)^2 = 28\,800\,000 - 48\,000p + 20p^2$$

$$600(12\,000-10p) = 7\,200\,000 - 6000p$$

Overskuddet blir

$$O(p) = I(p) - K(p) = -30p^2 + 66\,000p - 36\,008\,000$$

Vi deriverer og setter lik null:

$$O'(p) = -60p + 66\,000 = 0 \implies \underline{\underline{p = 1100 \, \mathrm{kr}}}$$


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/funksjonsdrofting-med-eksponentialfaktor/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Funksjonsdrøfting med eksponentialfaktor

Funksjonen $f$ er gitt ved

$$f(x) = 4(x^2 - 5x + 4) \cdot e^{-\frac{1}{2}x}$$

>[!oppgave]
>a) Bestem nullpunktene til $f$.
>b) Vis at $f'(x) = -2(x^2 - 9x + 14) \cdot e^{-\frac{1}{2}x}$.

Nedenfor ser du fire grafer. En av dem er grafen til $f$.

![Fire grafer](/img/user/_resources/s2-h22-1-7.jpeg){width=80%}

>[!oppgave]
>c) Avgjør hvilken av grafene som er grafen til $f$. Husk å begrunne svaret.

## Fasit

a) $x = 1$ og $x = 4$
b) Vis med produktregelen
c) Graf B (begrunnes med nullpunkter, ekstrempunkter og fortegn)

## Løsningsforslag

### a

Nullpunktene finner vi ved å løse $f(x) = 0$:

$$4(x^2 - 5x + 4) \cdot e^{-\frac{1}{2}x} = 0$$

Siden $e^{-\frac{1}{2}x} > 0$ for alle $x$, må

$$x^2 - 5x + 4 = 0$$

Vi faktoriserer: $(x-1)(x-4) = 0$, som gir nullpunktene $\underline{\underline{x = 1}}$ og $\underline{\underline{x = 4}}$.

### b

Vi bruker produktregelen med $u = 4(x^2 - 5x + 4)$ og $v = e^{-\frac{1}{2}x}$:

$$u' = 4(2x - 5) = 8x - 20$$

$$v' = -\frac{1}{2}e^{-\frac{1}{2}x}$$

$$f'(x) = u'v + uv' = (8x-20) \cdot e^{-\frac{1}{2}x} + 4(x^2-5x+4) \cdot \left(-\frac{1}{2}\right)e^{-\frac{1}{2}x}$$

$$= e^{-\frac{1}{2}x}\left[8x - 20 - 2(x^2 - 5x + 4)\right]$$

$$= e^{-\frac{1}{2}x}\left[8x - 20 - 2x^2 + 10x - 8\right]$$

$$= e^{-\frac{1}{2}x}\left[-2x^2 + 18x - 28\right]$$

$$= -2(x^2 - 9x + 14) \cdot e^{-\frac{1}{2}x}$$

### c

Vi bruker informasjonen fra a) og b) til å identifisere grafen.

**Nullpunkter:** $x = 1$ og $x = 4$.

**Ekstrempunkter:** $f'(x) = 0$ når $x^2 - 9x + 14 = 0$, altså $(x-2)(x-7) = 0$, som gir $x = 2$ og $x = 7$.

**Fortegn til $f$:** For $x < 1$: $f > 0$ (begge faktorer i $x^2-5x+4$ negative). For $1 < x < 4$: $f < 0$. For $x > 4$: $f > 0$.

**Fortegn til $f'$:** $f'(x) = -2(x-2)(x-7) \cdot e^{-\frac{1}{2}x}$, som gir $f' > 0$ for $2 < x < 7$ (stigende) og $f' < 0$ ellers.

Altså har $f$ et lokalt minimum i $x = 2$ (i området der $f < 0$) og et lokalt maksimum i $x = 7$ (der $f > 0$). Sammen med nullpunktene $x = 1$ og $x = 4$ og at $f(x) \to 0$ for $x \to \infty$, er dette **graf B**.


</div></div>


## Oppgave 1-8


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/lykkehjulet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Lykkehjulet

Et lykkehjul har fem felter. Et av feltene er grønt, og de fire andre er røde. Når du snurrer lykkehjulet, er sannsynligheten for at det stopper på hvert av de fem feltene 0,2.

Tenk deg at du skal snurre lykkehjulet 100 ganger. La $X$ være antall ganger lykkehjulet stopper på det grønne feltet.

>[!oppgave]
> a) Forklar at $X$ er binomisk fordelt med $μ_{X} =20$ og $σ_{X} =4$.
> b) Forklar at $X$ er tilnærmet normalfordelt.
> c) Bestem sannsynligheten for at lykkehjulet stopper på det grønne feltet mer enn 25 ganger.
> d) Bestem den minste verdien $k$ kan ha dersom $P(X \geq k) \leq 0{,}01$. Hva forteller dette svaret deg i denne situasjonen?

## Fasit

a) Binomisk med $n = 100$, $p = 0{,}2$, $\mu_X = 20$, $\sigma_X = 4$
b) Sentralgrensesetningen, $n \geq 30$ og $np(1-p) > 5$
c) $\approx 0{,}084$
d) $k = 30$

## Løsningsforslag

### a

Hvert snurr er et Bernoulli-forsøk med to utfall (grønt eller ikke grønt), konstant sannsynlighet $p = 0{,}2$, og forsøkene er uavhengige. Vi utfører $n = 100$ slike forsøk. Dermed er $X$ binomisk fordelt med $n = 100$ og $p = 0{,}2$.

$$\mu_X = np = 100 \cdot 0{,}2 = 20$$

$$\sigma_X = \sqrt{np(1-p)} = \sqrt{100 \cdot 0{,}2 \cdot 0{,}8} = \sqrt{16} = 4$$

### b

Siden $n = 100 \geq 30$ og $np(1-p) = 16 > 5$, følger det av sentralgrensesetningen at $X$ er tilnærmet normalfordelt.

### c

Vi skal finne $P(X > 25)$. Med halvkorreksjon og normalfordelingstilnærming:

$$P(X > 25) = P(X \geq 26) \approx P\left(Z > \frac{25{,}5 - 20}{4}\right) = P(Z > 1{,}375)$$

$$= 1 - P(Z \leq 1{,}375) \approx 1 - 0{,}9154 = \underline{\underline{0{,}0846}}$$

### d

Vi skal finne minste $k$ slik at $P(X \geq k) \leq 0{,}01$.

Med halvkorreksjon: $P(X \geq k) \approx P\left(Z \geq \frac{k - 0{,}5 - 20}{4}\right) \leq 0{,}01$.

Dette krever

$$\frac{k - 0{,}5 - 20}{4} \geq 2{,}326$$

$$k \geq 0{,}5 + 20 + 4 \cdot 2{,}326 = 29{,}8$$

Siden $k$ må være et heltall, er $\underline{\underline{k = 30}}$.

Dette betyr at dersom lykkehjulet stopper på grønt 30 eller flere ganger av 100, er det svært usannsynlig (under 1 % sjanse) at dette har skjedd ved ren tilfeldighet.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bakterievekst-i-avfall/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bakterievekst i avfall

Ved en avfallsplass vil det i et spesifikt avfall utvikles en bakteriekultur. Ved naturlig vekst vil antall bakterier $N$ (i millioner) være gitt ved

$$N(t) = 0{,}8 \cdot e^{0{,}35t}$$

Her er $t$ antall dager etter at avfallet ble levert.

Dersom antall bakterier overstiger 15 millioner, regnes avfallet som helsefarlig.

>[!oppgave]
>a) Hvor lang tid tar det før avfallet blir helsefarlig dersom bakteriekulturen vokser naturlig?

For å dempe bakterieveksten tilsettes det en gitt mengde av et stoff. Antall bakterier i avfallet vil da følge modellen $B$ gitt ved

$$B(t) = 0{,}8 \cdot e^{0{,}35t - 0{,}01t^2}$$

>[!oppgave]
>b) Avgjør om avfallet noen gang vil bli helsefarlig dersom denne mengden av stoffet tilsettes.
>c) Når øker antall bakterier raskest ifølge modellen $B$? Hvor stor er bakterieveksten per dag da?

Bedriften ønsker å redusere stoffmengden som tilsettes.

En generell modell $S$ for antall bakterier etter $t$ dager er gitt ved

$$S(t) = 0{,}8 \cdot e^{0{,}35t - k \cdot t^2}$$

Her er $k$ en konstant som er avhengig av hvor mye stoff som tilsettes.

>[!oppgave]
>d) Hva er den laveste verdien $k$ kan ha, dersom avfallet ikke skal bli helsefarlig?

## Fasit

a) Ca. $8{,}4$ dager
b) Ja, $B_{\text{maks}} \approx 17{,}1 > 15$
c) Etter ca. $10{,}4$ dager, vekst ca. $1{,}47$ millioner per dag
d) $k \approx 0{,}0105$

## Løsningsforslag

Vi definerer funksjonene i GeoGebra CAS, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-1.png)

### a

Vi løser $N(t) = 15$ i CAS (linje 2):

$$0{,}8 \cdot e^{0{,}35t} = 15$$

Se `TidHelsefarlig` i utklippet: $t \approx 8{,}37$.

Avfallet blir helsefarlig etter ca. **$\underline{\underline{8{,}4 \text{ dager}}}$**.

### b

Eksponenten i $B(t) = 0{,}8 \cdot e^{0{,}35t - 0{,}01t^2}$ har maksimum når

$$\frac{\mathrm{d}}{\mathrm{d}t}(0{,}35t - 0{,}01t^2) = 0{,}35 - 0{,}02t = 0 \implies t = 17{,}5$$

Se `MaksB` i linje 4: $B(17{,}5) \approx 17{,}1$.

Siden $17{,}1 > 15$, vil avfallet **bli helsefarlig** også med denne mengden stoff.

### c

Antall bakterier øker raskest i vendepunktet til $B$. Se linje 5 i CAS:

$$\text{Vendepunkt}(B) \approx (10{,}43; \; 10{,}37)$$

Veksten per dag i dette punktet finner vi ved å evaluere $B'(10{,}43)$. Se `VekstVendepunkt` i linje 7:

$$B'(10{,}43) \approx 1{,}47$$

Bakteriene øker raskest etter ca. **$\underline{\underline{10{,}4 \text{ dager}}}$**, og veksten er da ca. **$\underline{\underline{1{,}47 \text{ millioner per dag}}}$**.

### d

Eksponenten i $S(t) = 0{,}8 \cdot e^{0{,}35t - kt^2}$ har maksimum for $t = \frac{0{,}35}{2k}$. Den største verdien av $S$ er

$$S_{\text{maks}} = 0{,}8 \cdot e^{\frac{0{,}35^2}{4k}} = 0{,}8 \cdot e^{\frac{0{,}1225}{4k}}$$

For at avfallet ikke skal bli helsefarlig, må $S_{\text{maks}} \leq 15$:

$$0{,}8 \cdot e^{\frac{0{,}1225}{4k}} = 15$$

Se linje 8 i CAS: $k \approx 0{,}01045$.

Den laveste verdien $k$ kan ha er $\underline{\underline{k \approx 0{,}0105}}$.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sparing-og-annuitetslan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sparing og annuitetslån

Da Anniken fylte 15 år, satte hun $30\,000$ kroner inn på en konto med en fast månedlig rentesats på $0{,}1$ prosent. Hver måned etter dette satte hun inn 500 kroner på kontoen. Det siste innskuddet gjorde hun den dagen hun fylte 20 år.

>[!oppgave]
>a) Hvor mye hadde hun på kontoen etter innskuddet på 20-årsdagen?

Anniken skal kjøpe leilighet og tar opp et annuitetslån på 2 millioner kroner. Lånet skal betales tilbake med en nedbetalingstid på 30 år, én termin per år og en fast årlig rentesats på $2{,}4$ prosent. Første innbetaling er om ett år.

>[!oppgave]
>b) Vis at det årlige terminbeløpet er $94\,286$ kroner.

Anniken frykter en renteoppgang. Hun kan maksimalt betale et terminbeløp på $110\,000$ kroner.

>[!oppgave]
>c) Bestem den høyeste rentesatsen hun har råd til å betale.

## Fasit

a) Ca. $62\,756 \, \mathrm{kr}$
b) Terminbeløp $\approx 94\,286 \, \mathrm{kr}$
c) Ca. $3{,}6 \, \%$

## Løsningsforslag

Vi bruker GeoGebra CAS til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-2.png)

### a

Den månedlige rentesatsen er $r = 0{,}001$. Fra 15 til 20 år er det 60 måneder.

Startbeløpet på $30\,000 \, \mathrm{kr}$ vokser i 60 måneder:

$$30\,000 \cdot 1{,}001^{60}$$

De månedlige innskuddene på $500 \, \mathrm{kr}$ danner en geometrisk rekke. Innskudd nr. 1 vokser i 59 måneder, innskudd nr. 2 i 58 måneder, osv., og det siste innskuddet (nr. 60) vokser i 0 måneder:

$$500 \cdot \sum_{i=0}^{59} 1{,}001^i = 500 \cdot \frac{1{,}001^{60} - 1}{0{,}001}$$

Se `Saldo` i linje 4: totalt ca. **$\underline{\underline{62\,756 \, \mathrm{kr}}}$** på kontoen.

### b

Et annuitetslån med terminbeløp $T$, rentesats $r = 0{,}024$ og $n = 30$ terminer gir:

$$T \cdot \sum_{i=1}^{30} \frac{1}{1{,}024^i} = 2\,000\,000$$

Se `Terminbeløp` i linje 5:

$$T = \frac{2\,000\,000}{\sum_{i=1}^{30} \frac{1}{1{,}024^i}} \approx 94\,286$$

Det årlige terminbeløpet er **$\underline{\underline{94\,286 \, \mathrm{kr}}}$**.

### c

Vi skal finne $r$ slik at terminbeløpet er $110\,000 \, \mathrm{kr}$:

$$\sum_{i=1}^{30} \frac{110\,000}{(1+r)^i} = 2\,000\,000$$

Se linje 6 i CAS: $r \approx 0{,}03592$.

Den høyeste rentesatsen Anniken har råd til er ca. **$\underline{\underline{3{,}6 \, \%}}$**.


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sjokoladeplater-og-hypotesetest/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sjokoladeplater og hypotesetest

En fabrikk lager sjokoladeplater som skal veie 200 gram. La $X$ være vekten til en tilfeldig sjokoladeplate. Vi går ut fra at $X$ er normalfordelt med $\mu = 200$ gram og $\sigma = 4$ gram.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt sjokoladeplate veier mindre enn 195 gram.

Sjokoladeplatene blir pakket i esker på 10 plater.

>[!oppgave]
>b) Bestem sannsynligheten for at alle platene i en eske veier mer enn 195 gram.

Eskene blir pakket i kartonger, 10 esker i hver kartong. Det er altså 100 sjokoladeplater i en kartong.

Ledelsen ved sjokoladefabrikken krever at en kartong skal veie mellom $19\,900$ gram og $20\,100$ gram.

>[!oppgave]
>c) Bestem sannsynligheten for at en tilfeldig valgt kartong er innenfor vektkravet til ledelsen.

Ledelsen har mistanke om at maskinen som lager sjokoladeplatene, er stilt inn slik at sjokoladeplatene veier for lite. De vil plukke ut 100 tilfeldige sjokoladeplater i en kontroll.

>[!oppgave]
>d) Sett opp en hypotesetest som du kan bruke for å avgjøre om det er hold i mistanken.

Ledelsen velger tilfeldig ut 100 sjokoladeplater. Det viser seg at gjennomsnittsvekten til disse er $199{,}1$ gram. Vi antar at standardavviket fremdeles er 4 gram.

>[!oppgave]
>e) Utfør hypotesetesten, og avgjør om det er hold i mistanken. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $\approx 0{,}1057$
b) $\approx 0{,}3274$
c) $\approx 0{,}9876$
d) $H_0\!: \mu = 200$, $H_1\!: \mu < 200$
e) $p$-verdi $\approx 0{,}012 < 0{,}05$, forkaster $H_0$

## Løsningsforslag

Vi bruker GeoGebra til beregningene, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-3.png)

### a

$X$ er normalfordelt med $\mu = 200$ og $\sigma = 4$.

Se `PUnder195` i linje 1:

$$P(X < 195) \approx \underline{\underline{0{,}1057}}$$

### b

Sannsynligheten for at én plate veier mer enn 195 gram er $P(X > 195) = 1 - 0{,}1057 = 0{,}8943$.

For at alle 10 platene i en eske veier mer enn 195 gram (uavhengige hendelser):

Se `PAlleOver` i linje 2:

$$P(\text{alle} > 195) = 0{,}8943^{10} \approx \underline{\underline{0{,}3274}}$$

### c

La $S = X_1 + X_2 + \cdots + X_{100}$ være totalvekten av 100 plater. Da er $S$ normalfordelt med

$$\text{E}(S) = 100 \cdot 200 = 20\,000 \, \mathrm{g}$$

$$\text{SD}(S) = \sqrt{100} \cdot 4 = 40 \, \mathrm{g}$$

Se `PInnenfor` i linje 4:

$$P(19\,900 < S < 20\,100) \approx \underline{\underline{0{,}9876}}$$

### d

Ledelsen mistenker at $\mu < 200$. Vi setter opp:

- $H_0\!: \mu = 200$ (maskinen er korrekt innstilt)
- $H_1\!: \mu < 200$ (sjokoladeplatene veier for lite)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

Testobservatoren er $Z = \dfrac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$.

### e

Vi setter inn $\bar{X} = 199{,}1$, $\mu_0 = 200$, $\sigma = 4$ og $n = 100$.

Se `ZVerdi` i linje 5:

$$Z = \frac{199{,}1 - 200}{4/\sqrt{100}} = \frac{-0{,}9}{0{,}4} = -2{,}25$$

Se `PVerdi` i linje 6: $p$-verdi $\approx 0{,}012$.

Siden $p$-verdien $0{,}012 < 0{,}05 = \alpha$, forkaster vi $H_0$.

**Det er hold i mistanken** — det er statistisk grunnlag for å hevde at sjokoladeplatene veier for lite.


</div></div>


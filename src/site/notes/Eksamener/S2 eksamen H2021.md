---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"h21","del1_tid":2,"del2_tid":3,"title":"S2 eksamen H2021","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-h2021/","permalink":"/eksamener/s2-eksamen-h2021/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"h21","del1_tid":2,"del2_tid":3,"title":"S2 eksamen H2021","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon med eksponential og logaritme](https://matematikkoppgaver.vercel.app/derivasjon-med-eksponential-og-logaritme/) | derivasjon, eksponentialfunksjoner, logaritmer | × |
| [1-2](#oppgave-1-2) | [Polynomdivisjon med ulikhet og eksponentiallikning](https://matematikkoppgaver.vercel.app/polynomdivisjon-med-ulikhet-og-eksponentiallikning/) | polynomdivisjon, faktorisering, likninger | × |
| [1-3](#oppgave-1-3) | [Aritmetisk rekke med sumformel](https://matematikkoppgaver.vercel.app/aritmetisk-rekke-med-sumformel/) | rekker | × |
| [1-4](#oppgave-1-4) | [Grensekostnad og grenseinntekt bedrift](https://matematikkoppgaver.vercel.app/grensekostnad-og-grenseinntekt-bedrift/) | grenseinntekt og grensekostnad, optimering, økonomi | × |
| [1-5](#oppgave-1-5) | [Logaritmefunksjon ln x delt på x](https://matematikkoppgaver.vercel.app/logaritmefunksjon-ln-x-delt-pa-x/) | derivasjon, logaritmer, funksjonsdrøfting | × |
| [1-6](#oppgave-1-6) | [Vekten til poteter](https://matematikkoppgaver.vercel.app/vekten-til-poteter/) | sannsynlighet, normalfordeling | × |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Timelønner for idrettstrener](https://matematikkoppgaver.vercel.app/timelonner-for-idrettstrener/) | likningssystem | × |
| [2-2](#oppgave-2-2) | [Camillas aksjefond](https://matematikkoppgaver.vercel.app/camillas-aksjefond/) | sparing, rekker, økonomi | × |
| [2-3](#oppgave-2-3) | [Selvbetjeningskasse og hypotesetest](https://matematikkoppgaver.vercel.app/selvbetjeningskasse-og-hypotesetest/) | binomisk, normalfordeling, hypotesetest | × |
| [2-4](#oppgave-2-4) | [Virussmitte og logistisk modell](https://matematikkoppgaver.vercel.app/virussmitte-og-logistisk-modell/) | logistisk funksjon, modellering, integral | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-med-eksponential-og-logaritme/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon med eksponential og logaritme

Deriver funksjonene

>[!oppgave]
>a) $f(x) = x^3 + e^x$
>b) $g(x) = \ln(x^3 + 1)$

## Fasit

a) $f'(x) = 3x^2 + e^x$
b) $g'(x) = \dfrac{3x^2}{x^3 + 1}$

## Løsningsforslag

### a

$$f(x) = x^3 + e^x$$

Vi deriverer ledd for ledd:

$$f'(x) = \underline{\underline{3x^2 + e^x}}$$

### b

$$g(x) = \ln(x^3 + 1)$$

Vi bruker kjerneregelen med ytre funksjon $\ln u$ og kjerne $u = x^3 + 1$:

$$g'(x) = \frac{1}{x^3 + 1} \cdot 3x^2 = \underline{\underline{\frac{3x^2}{x^3 + 1}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynomdivisjon-med-ulikhet-og-eksponentiallikning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynomdivisjon med ulikhet og eksponentiallikning

Polynomet $P$ er gitt ved

$$P(x) = x^3 - 2x^2 - 31x - 28$$

>[!oppgave]
>a) Vis, uten å utføre polynomdivisjon, at $P(x)$ ikke er delelig med $(x - 1)$.
>b) Utfør polynomdivisjonen $P(x) : (x + 1)$.
>c) Løs ulikheten $P(x) \geq 0$.
>d) Løs likningen $e^{3x} - 2e^{2x} - 31e^x - 28 = 0$.

## Fasit

a) $P(1) = -60 \neq 0$
b) $P(x) : (x+1) = x^2 - 3x - 28$
c) $x \in \{-4\} \cup [7, \to\rangle$
d) $x = \ln 7$

## Løsningsforslag

### a

Dersom $P(x)$ er delelig med $(x-1)$, må $P(1) = 0$ (faktorteoremet).

$$P(1) = 1 - 2 - 31 - 28 = -60 \neq 0$$

Altså er $P(x)$ **ikke** delelig med $(x - 1)$.

### b

Vi utfører polynomdivisjonen:

$$\begin{aligned}
&\quad (x^3 - 2x^2 - 31x - 28) : (x + 1) = x^2 - 3x - 28 \\[4pt]
&\quad\underline{-(x^3 + x^2)} \\
&\quad\quad -3x^2 - 31x \\
&\quad\quad \underline{-(-3x^2 - 3x)} \\
&\quad\quad\quad -28x - 28 \\
&\quad\quad\quad \underline{-(-28x - 28)} \\
&\quad\quad\quad\quad 0
\end{aligned}$$

Altså $P(x) = (x+1)(x^2 - 3x - 28)$.

### c

Vi faktoriserer $x^2 - 3x - 28$:

$$x^2 - 3x - 28 = (x - 7)(x + 4)$$

Dermed er $P(x) = (x+1)(x+4)(x-7)$ med nullpunkter $x = -4$, $x = -1$ og $x = 7$.

Fortegnslinje:

| | $x < -4$ | $-4 < x < -1$ | $-1 < x < 7$ | $x > 7$ |
|---|---|---|---|---|
| $P(x)$ | $-$ | $+$ | $-$ | $+$ |

$P(x) \geq 0$ for $x = -4$, $x \in [-4, -1]$... nei, la oss sjekke:

For $x = -3$: $P(-3) = (-3+1)(-3+4)(-3-7) = (-2)(1)(-10) = 20 > 0$ ✓

$$\underline{\underline{P(x) \geq 0 \quad \text{for} \quad x \in [-4{,}\ {-1}] \cup [7{,}\ \to\rangle}}$$

### d

Vi setter $u = e^x$ i likningen $e^{3x} - 2e^{2x} - 31e^x - 28 = 0$:

$$u^3 - 2u^2 - 31u - 28 = 0$$

Dette er $P(u) = 0$, som fra oppgave b) og c) har løsningene $u = -4$, $u = -1$ og $u = 7$.

Siden $u = e^x > 0$, er den eneste gyldige løsningen $u = 7$:

$$e^x = 7 \quad \Rightarrow \quad \underline{\underline{x = \ln 7 \approx 1{,}95}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-rekke-med-sumformel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk rekke med sumformel

En aritmetisk rekke $a_1 + a_2 + a_3 + \cdots + a_n$ har sum $S_n = 2n^2 + n$.

>[!oppgave]
>a) Bestem $a_1$ og $a_{10}$.
>b) Bestem en formel for $a_n$ uttrykt ved $n$.
>c) Bestem summen av rekken når $a_n = 399$.

## Fasit

a) $a_1 = 3$, $a_{10} = 39$
b) $a_n = 4n - 1$
c) $S_{100} = 20\,100$

## Løsningsforslag

### a

$$a_1 = S_1 = 2 \cdot 1^2 + 1 = \underline{\underline{3}}$$

$$a_{10} = S_{10} - S_9 = (2 \cdot 100 + 10) - (2 \cdot 81 + 9) = 210 - 171 = \underline{\underline{39}}$$

### b

For $n \geq 2$:

$$a_n = S_n - S_{n-1} = (2n^2 + n) - (2(n-1)^2 + (n-1))$$

$$= 2n^2 + n - 2n^2 + 4n - 2 - n + 1 = 4n - 1$$

Vi sjekker at formelen også gjelder for $n = 1$: $a_1 = 4 \cdot 1 - 1 = 3$ ✓

$$\underline{\underline{a_n = 4n - 1}}$$

### c

Vi finner $n$ når $a_n = 399$:

$$4n - 1 = 399 \quad \Rightarrow \quad n = 100$$

$$S_{100} = 2 \cdot 100^2 + 100 = 20\,000 + 100 = \underline{\underline{20\,100}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grensekostnad-og-grenseinntekt-bedrift/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grensekostnad og grenseinntekt bedrift

Når en bedrift produserer og selger $x$ enheter per dag, er grensekostnaden $K'$ og grenseinntekten $I'$ gitt ved

$$K'(x) = 0{,}4x + 500 \quad \text{og} \quad I'(x) = -0{,}3x + 850$$

Bedriften produserer og selger 400 enheter per dag.

>[!oppgave]
>a) Avgjør om en økning i den daglige produksjonsmengden vil kunne gi et større overskudd for bedriften.
>b) Hvor mange enheter må bedriften produsere og selge per dag for at overskuddet skal bli størst mulig?

Bedriftens daglige kostnader $K$ består av en fast del på 50 000 kroner og en variabel del som er avhengig av produksjonsmengden.

>[!oppgave]
>c) Hva er de daglige kostnadene ved produksjon av 400 enheter?

## Fasit

a) Ja, en økning vil gi større overskudd
b) 500 enheter
c) $282\,000 \text{~kr}$

## Løsningsforslag

### a

Overskuddet øker når grenseinntekten er større enn grensekostnaden, altså når $I'(x) > K'(x)$.

Vi sjekker for $x = 400$:

$$K'(400) = 0{,}4 \cdot 400 + 500 = 660$$

$$I'(400) = -0{,}3 \cdot 400 + 850 = 730$$

Siden $I'(400) = 730 > 660 = K'(400)$, vil en økning i produksjonsmengden gi **større overskudd**.

### b

Overskuddet er størst når $I'(x) = K'(x)$:

$$-0{,}3x + 850 = 0{,}4x + 500$$

$$350 = 0{,}7x \quad \Rightarrow \quad \underline{\underline{x = 500}}$$

Vi sjekker at dette gir maksimum: For $x < 500$ er $I'(x) > K'(x)$ (overskuddet øker), og for $x > 500$ er $I'(x) < K'(x)$ (overskuddet avtar). Altså er overskuddet størst ved 500 enheter.

### c

Vi finner $K(x)$ ved å integrere grensekostnaden:

$$K(x) = \int K'(x) \, \mathrm{d}x = 0{,}2x^2 + 500x + C$$

Den faste kostnaden er $C = 50\,000$, så

$$K(x) = 0{,}2x^2 + 500x + 50\,000$$

$$K(400) = 0{,}2 \cdot 160\,000 + 500 \cdot 400 + 50\,000 = 32\,000 + 200\,000 + 50\,000 = \underline{\underline{282\,000 \text{~kr}}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmefunksjon-ln-x-delt-pa-x/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmefunksjon ln x delt på x

Funksjonen $f$ er gitt ved

$$f(x) = \frac{\ln x}{x}$$

>[!oppgave]
>a) Vis at $f'(x) = \dfrac{1 - \ln x}{x^2}$.
>b) Bestem eventuelle toppunkt og bunnpunkt på grafen til $f$.

Funksjonen $g$ er gitt ved

$$g(x) = 3 - 6e \cdot f(x)$$

>[!oppgave]
>c) Bestem eventuelle toppunkt og bunnpunkt på grafen til $g$.

## Fasit

a) Se løsningsforslag
b) Toppunkt $(e, e^{-1})$
c) Bunnpunkt $(e, -3)$

## Løsningsforslag

### a

Vi deriverer $f(x) = \dfrac{\ln x}{x}$ med kvotientregelen:

$$f'(x) = \frac{\frac{1}{x} \cdot x - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$$

### b

Vi setter $f'(x) = 0$:

$$\frac{1 - \ln x}{x^2} = 0 \quad \Rightarrow \quad 1 - \ln x = 0 \quad \Rightarrow \quad \ln x = 1 \quad \Rightarrow \quad x = e$$

Siden $x^2 > 0$ for alle $x > 0$, bestemmes fortegnet til $f'(x)$ av telleren $1 - \ln x$:

- For $x < e$: $\ln x < 1$, så $f'(x) > 0$ (voksende)
- For $x > e$: $\ln x > 1$, så $f'(x) < 0$ (avtagende)

$f$ skifter fra voksende til avtagende, altså har vi et toppunkt:

$$f(e) = \frac{\ln e}{e} = \frac{1}{e}$$

$$\underline{\underline{\text{Toppunkt: } \left(e{,}\ \frac{1}{e}\right) \approx (2{,}72{,}\ 0{,}37)}}$$

Det er ingen bunnpunkter.

### c

$$g(x) = 3 - 6e \cdot f(x) = 3 - \frac{6e \cdot \ln x}{x}$$

Vi deriverer:

$$g'(x) = -6e \cdot f'(x) = -6e \cdot \frac{1 - \ln x}{x^2}$$

$g'(x) = 0$ gir $1 - \ln x = 0$, altså $x = e$ (samme som for $f$).

Fortegnsanalyse: Siden $-6e < 0$, snur $g'$ fortegnet sammenlignet med $f'$:

- For $x < e$: $g'(x) < 0$ (avtagende)
- For $x > e$: $g'(x) > 0$ (voksende)

$g$ skifter fra avtagende til voksende, altså har vi et bunnpunkt:

$$g(e) = 3 - 6e \cdot \frac{1}{e} = 3 - 6 = -3$$

$$\underline{\underline{\text{Bunnpunkt: } (e, -3) \approx (2{,}72{,}\ {-3})}}$$


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vekten-til-poteter/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vekten til poteter


Vi lar $X$ være vekten til en tilfeldig potet fra kjøkkenhagen til Jostein. Vi antar at $X$ er tilnærmet normalfordelt med forventningsverdi 200 gram og standardavvik 40 gram.

Jostein skal ta opp poteter. Han plukker en tilfeldig potet fra kjøkkenhagen.

>[!oppgave]
> a) Bestem sannsynligheten for at poteten veier mellom 180 gram og 220 gram

Normalfordelingskurven til $X$ er grafen til funksjonen $f$ gitt ved
$$
f(x)=\frac{1}{40\sqrt{ 2\pi }}\cdot e^{-\frac{(x-200)^{2}}{3200}}
$$

>[!oppgave]
> b) Bestem $\int_{0}^{150} f(x) \, dx$ og gi en praktisk tolkning av svaret.
> c) Lag en skisse av grafen til $f$. Bruk skissen til å visualisere resultatene fra oppgave a og oppgave b.

Jostein tar opp 500 tilfeldige poteter fra kjøkkenhagen.

>[!oppgave]
>d) Hvor mange av disse potetene kan han regne med at den veier minst 300 gram?

## Fasit

a) 0,383
b) 0,106. Dette er sannsynligheten for å trekke opp en potet som veier mindre enn 150 gram.
c) –
d) 3,1. Vi runder av til 3 poteter.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 200$ og $\sigma = 40$.

$$P(180 < X < 220) = P\!\left(\frac{180 - 200}{40} < Z < \frac{220 - 200}{40}\right) = P(-0{,}5 < Z < 0{,}5)$$

$$= \Phi(0{,}5) - \Phi(-0{,}5) = 0{,}6915 - 0{,}3085 = \underline{\underline{0{,}383}}$$

### b

$$\int_{0}^{150} f(x) \, \mathrm{d}x = P(X \leq 150) = \Phi\!\left(\frac{150 - 200}{40}\right) = \Phi(-1{,}25) \approx \underline{\underline{0{,}106}}$$

Dette er sannsynligheten for at en tilfeldig potet fra kjøkkenhagen veier mindre enn 150 gram.

### c

Normalfordelingskurven er symmetrisk om $\mu = 200$ og klokkeformet.

- Arealet mellom $x = 180$ og $x = 220$ (oppgave a) representerer $P(180 < X < 220) \approx 0{,}383$
- Arealet til venstre for $x = 150$ (oppgave b) representerer $P(X \leq 150) \approx 0{,}106$

### d

$$P(X \geq 300) = 1 - \Phi\!\left(\frac{300 - 200}{40}\right) = 1 - \Phi(2{,}5) = 1 - 0{,}9938 = 0{,}0062$$

Forventet antall poteter som veier minst 300 gram:

$$500 \cdot 0{,}0062 \approx \underline{\underline{3{,}1 \approx 3 \text{ poteter}}}$$


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/timelonner-for-idrettstrener/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Timelønner for idrettstrener

Solveig jobber som trener for en idrettsklubb. Timelønnen avhenger av om hun jobber på dagtid, på kveldstid eller i helgene.

Tabellen gir en oversikt over hvor mye Solveig tjente de tre første månedene i 2021.

| | Dag (timer) | Kveld (timer) | Helg (timer) | Lønn (kroner) |
|---|---|---|---|---|
| Januar | 45 | 21 | 14 | 17 830 |
| Februar | 28 | 35 | 24 | 21 470 |
| Mars | 33 | 18 | 12 | 14 280 |

>[!oppgave]
>Bruk opplysningene til å bestemme timelønnen til Solveig når hun jobber på dagtid.

## Fasit

Timelønn dagtid: $180 \text{~kr}$

## Løsningsforslag

La $d$, $k$ og $h$ være timelønnen for henholdsvis dag, kveld og helg.

Fra tabellen setter vi opp likningssystemet:

$$\begin{cases} 45d + 21k + 14h = 17\,830 & \text{(januar)} \\ 28d + 35k + 24h = 21\,470 & \text{(februar)} \\ 33d + 18k + 12h = 14\,280 & \text{(mars)} \end{cases}$$

Vi løser i CAS:

![CAS-løsning av likningssystemet](/img/user/_resources/s2-h21-2-1-cas.png)

$$\underline{\underline{d = 180 \text{~kr}}}$$

(Kveldstimelønn $k = 250 \text{~kr}$, helgetimelønn $h = 320 \text{~kr}$.)


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/camillas-aksjefond/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Camillas aksjefond

Camilla er 11 år. Da hun ble født, bestemte foreldrene seg for å gi henne 6000 kroner hver gang hun hadde bursdag. Pengene ble plassert i et aksjefond. Første beløp ble satt inn den dagen hun fylte 1 år. Dette fortsatte de med hvert år til og med det året hun ble 10 år. Aksjefondet ga en årlig gjennomsnittlig avkastning på 6 prosent.

>[!oppgave]
>a) Hva var verdien på Camillas andel i aksjefondet dagen før hun fylte 11 år?

På elleveårsdagen økte de beløpet de satte inn i fondet til 12 000 kroner. Deretter vil de øke det årlige beløpet med 5 prosent hvert år, helt til og med den dagen Camilla fyller 20 år. Det vil si at de på tolvårsdagen vil sette inn 12 600 kroner, på trettenårsdagen vil de sette inn 13 230 kroner, og så videre.

Vi antar at avkastningen på aksjefondet fortsatt vil være 6 prosent per år.

>[!oppgave]
>b) Hva vil verdien på Camillas andel i aksjefondet være like etter at det siste beløpet blir satt inn?

## Fasit

a) $\approx 83\,830 \text{~kr}$
b) $\approx 335\,972 \text{~kr}$

## Løsningsforslag

### a

Innskudd nummer $i$ (satt inn på $i$-årsdagen) har vokst med rente i $(11 - i)$ år når vi måler «dagen før 11-årsdagen». Men verdien «dagen før 11-årsdagen» betyr at hvert innskudd har fått rente i hele år fra innskuddstidspunktet:

- Innskudd 1 (1-årsdag) vokser i 10 år: $6000 \cdot 1{,}06^{10}$
- Innskudd 2 (2-årsdag) vokser i 9 år: $6000 \cdot 1{,}06^9$
- $\vdots$
- Innskudd 10 (10-årsdag) vokser i 1 år: $6000 \cdot 1{,}06^1$

Totalverdien er en geometrisk rekke:

$$S = \sum_{i=1}^{10} 6000 \cdot 1{,}06^i = 6000 \cdot 1{,}06 \cdot \frac{1{,}06^{10} - 1}{1{,}06 - 1}$$

Vi beregner i CAS (se linje 1 i utklippet):

![CAS-beregning av aksjefond](/img/user/_resources/s2-h21-2-2-cas.png)

$$\underline{\underline{S \approx 83\,830 \text{~kr}}}$$

### b

Verdien fra a) vokser i 9 nye år (fra 11- til 20-årsdag):

$$S_a \cdot 1{,}06^{9} \approx 141\,629 \text{~kr}$$

I tillegg kommer nye innskudd fra 11-årsdagen til 20-årsdagen. Innskudd på $j$-årsdagen er $12\,000 \cdot 1{,}05^{j-11}$ og vokser med 6 % i $(20-j)$ år:

$$S_{\text{ny}} = \sum_{j=11}^{20} 12\,000 \cdot 1{,}05^{j-11} \cdot 1{,}06^{20-j}$$

Fra CAS (linje 4): $S_{\text{ny}} \approx 194\,344 \text{~kr}$

Totalverdi:

$$\underline{\underline{S_a \cdot 1{,}06^{9} + S_{\text{ny}} \approx 335\,972 \text{~kr}}}$$


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/selvbetjeningskasse-og-hypotesetest/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Selvbetjeningskasse og hypotesetest

I en selvbetjeningskasse i en matbutikk blir i gjennomsnitt hver tiende kunde trukket tilfeldig ut til kontroll. Dette kan vi betrakte som et binomisk forsøk med $p = 0{,}1$.

>[!oppgave]
>a) Bestem sannsynligheten for at fem kunder etter hverandre ikke blir trukket ut til kontroll.

La $X$ være antall kunder som blir trukket ut til kontroll av de 200 første kundene som bruker selvbetjeningskassen en tilfeldig dag.

>[!oppgave]
>b) Bestem forventningsverdien $\text{E}(X)$ og variansen $\text{Var}(X)$.
>c) Bestem $P(X \geq 25)$.

Ledelsen i butikkjeden har mistanke om at færre enn 10 prosent av kundene blir kontrollert.

>[!oppgave]
>d) Sett opp hypoteser som de kan bruke til å avgjøre om mistanken er berettiget.

Ledelsen bestemmer seg for å undersøke hvor mange kunder som ble kontrollert en tilfeldig valgt dag. Det viser seg at 579 kunder brukte selvbetjeningskassen den dagen. Av disse ble 47 trukket ut til kontroll.

>[!oppgave]
>e) Utfør hypotesetesten og avgjør om mistanken er berettiget. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $0{,}9^5 \approx 0{,}590$
b) $\text{E}(X) = 20$, $\text{Var}(X) = 18$
c) $P(X \geq 25) \approx 0{,}145$
d) Se løsningsforslag
e) Mistanken er ikke berettiget ($p$-verdi $\approx 0{,}066 > 0{,}05$)

## Løsningsforslag

### a

Sannsynligheten for at én kunde ikke blir kontrollert er $1 - 0{,}1 = 0{,}9$.

For fem kunder etter hverandre:

$$P = 0{,}9^5 \approx \underline{\underline{0{,}590}}$$

### b

$X$ er binomisk fordelt med $n = 200$ og $p = 0{,}1$.

$$\text{E}(X) = np = 200 \cdot 0{,}1 = \underline{\underline{20}}$$

$$\text{Var}(X) = np(1-p) = 200 \cdot 0{,}1 \cdot 0{,}9 = \underline{\underline{18}}$$

### c

Siden $n$ er stor, kan vi tilnærme $X$ med normalfordeling:

$$X \approx N(\mu = 20{,}\ \sigma = \sqrt{18} \approx 4{,}24)$$

$$P(X \geq 25) \approx P\!\left(Z \geq \frac{24{,}5 - 20}{4{,}24}\right) = P(Z \geq 1{,}06) = 1 - \Phi(1{,}06) \approx \underline{\underline{0{,}145}}$$

(Vi bruker kontinuitetskorreksjon: $P(X \geq 25) = P(X > 24{,}5)$.)

### d

Ledelsen mistenker at andelen kontrollerte er **lavere** enn 10 %. Vi setter opp:

$$H_0\colon p = 0{,}1 \quad \text{(andelen er 10 \%)}$$

$$H_1\colon p < 0{,}1 \quad \text{(andelen er lavere enn 10 \%)}$$

Vi gjennomfører en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

### e

Vi har $n = 579$ og $\hat{p} = \dfrac{47}{579} \approx 0{,}0812$.

Under $H_0$ er $X$ binomisk fordelt med $n = 579$ og $p = 0{,}1$. Vi tilnærmer med normalfordeling:

$$\text{E}(X) = 57{,}9 \quad \text{og} \quad \text{SD}(X) = \sqrt{579 \cdot 0{,}1 \cdot 0{,}9} \approx 7{,}22$$

Testobservator:

$$z = \frac{47 - 57{,}9}{7{,}22} \approx -1{,}51$$

$p$-verdi: $P(Z \leq -1{,}51) = \Phi(-1{,}51) \approx 0{,}066$

Siden $p$-verdien $0{,}066 > 0{,}05 = \alpha$, forkaster vi **ikke** $H_0$.

$\underline{\underline{\text{Konklusjon: Det er ikke grunnlag for å si at mistanken er berettiget.}}}$


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/virussmitte-og-logistisk-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Virussmitte og logistisk modell

Et virus sprer seg i et land. Da virusutbruddet ble oppdaget, var allerede 1,5 prosent av befolkningen smittet. En forsker mente at dersom det ikke ble satt inn tiltak, ville 22 prosent av befolkningen ha blitt smittet etter 20 døgn og 44 prosent etter 30 døgn.

Andelen som har blitt smittet $t$ døgn etter at viruset ble oppdaget, kan modelleres med en funksjon $g$ på formen

$$g(t) = \frac{N}{1 + a \cdot e^{-kt}}$$

>[!oppgave]
>a) Bruk opplysningene ovenfor til å bestemme $N$, $a$ og $k$.
>b) Hvor stor andel av befolkningen ville blitt smittet ifølge denne modellen?

Det ble satt inn tiltak mot viruset den dagen utbruddet ble oppdaget. Vi kan gå ut fra at andelen nye registrerte smittede i løpet av døgn $t$ etter at utbruddet ble oppdaget, er gitt ved modellen

$$f(t) = 0{,}0070 \cdot e^{-\frac{(t - 18)^2}{300}}, \quad t \geq 0$$

>[!oppgave]
>c) Tegn grafen til $f$ i et koordinatsystem.
>d) Hvilket døgn vil smitten øke raskest ifølge modellen $f$?
>e) Hvor stor andel av befolkningen blir smittet av dette viruset?

## Fasit

a) $N = 0{,}60$, $a = 39$, $k \approx 0{,}156$
b) 60 % av befolkningen
c) Se graf
d) Døgn 18
e) Omtrent 20 % av befolkningen

## Løsningsforslag

### a

Vi bruker de tre opplysningene til å sette opp likninger.

**$g(0) = 0{,}015$:**

$$\frac{N}{1 + a} = 0{,}015 \quad \Rightarrow \quad N = 0{,}015(1 + a) \quad \text{(I)}$$

**$g(20) = 0{,}22$:**

$$\frac{N}{1 + a \cdot e^{-20k}} = 0{,}22 \quad \text{(II)}$$

**$g(30) = 0{,}44$:**

$$\frac{N}{1 + a \cdot e^{-30k}} = 0{,}44 \quad \text{(III)}$$

Fra (II) og (III):

$$\frac{g(30)}{g(20)} = \frac{0{,}44}{0{,}22} = 2 \quad \Rightarrow \quad \frac{1 + a \cdot e^{-20k}}{1 + a \cdot e^{-30k}} = 2$$

$$1 + a \cdot e^{-20k} = 2 + 2a \cdot e^{-30k}$$

La $u = e^{-10k}$. Da:

$$a u^2 - 2au^3 = 1 \quad \Rightarrow \quad a u^2(1 - 2u) = 1 \quad \text{(IV)}$$

Fra (I) og (II): $0{,}015(1+a) = 0{,}22(1 + au^2)$

Vi løser dette likningssystemet numerisk og får

$$\underline{\underline{N \approx 0{,}60{,} \quad a \approx 39{,} \quad k \approx 0{,}156}}$$

### b

Når $t \to \infty$, har vi $e^{-kt} \to 0$, slik at

$$g(t) \to \frac{N}{1 + 0} = N = 0{,}60$$

$\underline{\underline{\text{Ifølge modellen ville 60 \% av befolkningen blitt smittet.}}}$

### c

Vi tegner grafen til $f$ i GeoGebra:

![Graf av smittemodellen f](/img/user/_resources/s2-h21-2-4.png)

### d

$f(t) = 0{,}0070 \cdot e^{-\frac{(t-18)^2}{300}}$ er en Gauss-kurve med toppunkt i $t = 18$.

Eksponenten $-\dfrac{(t-18)^2}{300}$ er størst (dvs. lik 0) når $t = 18$.

$\underline{\underline{\text{Smitten øker raskest døgn 18.}}}$

### e

Den totale andelen av befolkningen som blir smittet er

$$\int_0^{\infty} f(t) \, \mathrm{d}t = \int_0^{\infty} 0{,}0070 \cdot e^{-\frac{(t-18)^2}{300}} \, \mathrm{d}t$$

Vi beregner integralet numerisk:

```python
from scipy.integrate import quad
import numpy as np

f = lambda t: 0.007 * np.exp(-(t-18)**2 / 300)
result, _ = quad(f, 0, np.inf)
print(result)  # 0.1997
```

$$\int_0^{\infty} f(t) \, \mathrm{d}t \approx 0{,}20$$

$\underline{\underline{\text{Omtrent 20 \% av befolkningen blir smittet.}}}$


</div></div>


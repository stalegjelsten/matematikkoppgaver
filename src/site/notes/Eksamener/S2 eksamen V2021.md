---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v21","date":"2021-05-26","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2021","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2021/","permalink":"/eksamener/s2-eksamen-v2021/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v21","date":"2021-05-26","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2021","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon med logaritme og eksponential](https://matematikkoppgaver.vercel.app/derivasjon-med-logaritme-og-eksponential/) | derivasjon, logaritmer, eksponentialfunksjoner | × |
| [1-2](#oppgave-1-2) | [Summer av rekker](https://matematikkoppgaver.vercel.app/summer-av-rekker/) | rekker, uendelig rekke | × |
| [1-3](#oppgave-1-3) | [Polynomdivisjon og ulikhet](https://matematikkoppgaver.vercel.app/polynomdivisjon-og-ulikhet/) | polynomdivisjon, faktorisering | × |
| [1-4](#oppgave-1-4) | [Logistisk funksjon fra graf](https://matematikkoppgaver.vercel.app/logistisk-funksjon-fra-graf/) | logistisk funksjon, modellering | × |
| [1-5](#oppgave-1-5) | [Bestemme koeffisienter i tredjegradsfunksjon](https://matematikkoppgaver.vercel.app/bestemme-koeffisienter-i-tredjegradsfunksjon/) | funksjonsdrøfting, likningssystem | × |
| [1-6](#oppgave-1-6) | [Logaritmefunksjon med drøfting](https://matematikkoppgaver.vercel.app/logaritmefunksjon-med-drofting/) | derivasjon, logaritmer, funksjonsdrøfting | × |
| [1-7](#oppgave-1-7) | [Sauevekt og normalfordeling](https://matematikkoppgaver.vercel.app/sauevekt-og-normalfordeling/) | normalfordeling, integral, sannsynlighet | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Enhetskostnad og prisreduksjon](https://matematikkoppgaver.vercel.app/enhetskostnad-og-prisreduksjon/) | enhetskostnad, optimering, økonomi | × |
| [2-2](#oppgave-2-2) | [Spareavtale og aksjefond](https://matematikkoppgaver.vercel.app/spareavtale-og-aksjefond/) | sparing, rekker, økonomi | × |
| [2-3](#oppgave-2-3) | [Bruddstyrke fiskesene](https://matematikkoppgaver.vercel.app/bruddstyrke-fiskesene/) | normalfordeling, hypotesetest, sannsynlighet | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-med-logaritme-og-eksponential/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon med logaritme og eksponential

Deriver funksjonene

>[!oppgave]
>a) $f(x) = x^4 - 4\ln x$
>b) $g(x) = \dfrac{e^{2x}}{x + 1}$

## Fasit

a) $f'(x) = 4x^3 - \dfrac{4}{x}$
b) $g'(x) = \dfrac{(2x+1) \cdot e^{2x}}{(x+1)^2}$

## Løsningsforslag

### a

$$f(x) = x^4 - 4\ln x$$

Vi deriverer ledd for ledd:

$$f'(x) = 4x^3 - \frac{4}{x}$$

### b

$$g(x) = \frac{e^{2x}}{x + 1}$$

Vi bruker kvotientregelen $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ med $u = e^{2x}$ og $v = x + 1$:

$$g'(x) = \frac{2e^{2x} \cdot (x+1) - e^{2x} \cdot 1}{(x+1)^2} = \frac{e^{2x}(2x + 2 - 1)}{(x+1)^2} = \underline{\underline{\frac{(2x+1) \cdot e^{2x}}{(x+1)^2}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/summer-av-rekker/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Summer av rekker

Nedenfor er det gitt en aritmetisk og en geometrisk rekke.

Bestem summen til hver av rekkene.

>[!oppgave]
>a) $-6 - 1 + 4 + 9 + 14 + \cdots + 189$
>b) $72 - 36 + 18 - 9 + \cdots$

## Fasit

a) $S_{40} = 3660$
b) $S = 48$

## Løsningsforslag

### a

Rekken $-6 - 1 + 4 + 9 + 14 + \cdots + 189$ er aritmetisk med $a_1 = -6$ og $d = 5$.

Vi finner antall ledd $n$:

$$a_n = a_1 + (n-1) \cdot d \quad \Rightarrow \quad 189 = -6 + (n-1) \cdot 5$$

$$195 = (n-1) \cdot 5 \quad \Rightarrow \quad n - 1 = 39 \quad \Rightarrow \quad n = 40$$

Summen av en aritmetisk rekke:

$$S_{40} = \frac{a_1 + a_{40}}{2} \cdot 40 = \frac{-6 + 189}{2} \cdot 40 = \frac{183}{2} \cdot 40 = \underline{\underline{3660}}$$

### b

Rekken $72 - 36 + 18 - 9 + \cdots$ er geometrisk med $a_1 = 72$ og $k = -\dfrac{1}{2}$.

Siden $|k| < 1$, konvergerer rekken, og summen er

$$S = \frac{a_1}{1 - k} = \frac{72}{1 - \left(-\frac{1}{2}\right)} = \frac{72}{\frac{3}{2}} = \underline{\underline{48}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynomdivisjon-og-ulikhet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynomdivisjon og ulikhet

Polynomet $P$ er gitt ved

$$P(x) = x^3 - 19x + 30$$

>[!oppgave]
>a) Utfør polynomdivisjonen $P(x) : (x - 2)$.
>b) Løs ulikheten $P(x) \geq 0$.
>c) Forkort brøken
>
>$$\frac{x^3 - 19x + 30}{x^3 - 2x^2 - 9x + 18}$$

## Fasit

a) $P(x) : (x-2) = x^2 + 2x - 15$
b) $x \in [-5{,}\ 2] \cup [3{,}\ \to\rangle$
c) $\dfrac{x+5}{x+3}$

## Løsningsforslag

### a

Vi utfører polynomdivisjonen $P(x) : (x - 2)$:

$$
\begin{aligned}
&\quad (x^3 - 19x + 30) : (x - 2) = x^2 + 2x - 15 \\[4pt]
&\quad\underline{-(x^3 - 2x^2)} \\
&\quad\quad 2x^2 - 19x \\
&\quad\quad \underline{-(2x^2 - 4x)} \\
&\quad\quad\quad -15x + 30 \\
&\quad\quad\quad \underline{-(-15x + 30)} \\
&\quad\quad\quad\quad 0
\end{aligned}$$

Vi får $P(x) = (x-2)(x^2 + 2x - 15)$.

### b

Vi faktoriserer $x^2 + 2x - 15$:

$$x^2 + 2x - 15 = (x + 5)(x - 3)$$

Dermed er $P(x) = (x-2)(x+5)(x-3)$ med nullpunkter $x = -5$, $x = 2$ og $x = 3$.

Vi lager en fortegnslinje:

|        | $x < -5$ | $-5 < x < 2$ | $2 < x < 3$ | $x > 3$ |
| ------ | -------- | ------------ | ----------- | ------- |
| $P(x)$ | $-$      | $+$          | $-$         | $+$     |

$$\underline{\underline{P(x) \geq 0 \quad \text{for} \quad x \in [-5{,}\ 2] \cup [3{,}\ \to\rangle}}$$

### c

Vi faktoriserer nevneren. Vi prøver $x = 2$:

$$Q(2) = 8 - 8 - 18 + 18 = 0 \quad \checkmark$$

Vi utfører $Q(x) : (x-2)$ og får $Q(x) = (x-2)(x^2 - 9) = (x-2)(x-3)(x+3)$.

Dermed:

$$\frac{P(x)}{Q(x)} = \frac{(x-2)(x+5)(x-3)}{(x-2)(x-3)(x+3)} = \underline{\underline{\frac{x+5}{x+3}}}$$

der $x \neq 2$ og $x \neq 3$.


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-funksjon-fra-graf/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logistisk funksjon fra graf

På figuren nedenfor har vi tegnet grafen til funksjonen $f$, der $f(x)$ er på formen

$$f(x) = \frac{A}{1 + B \cdot e^{-kx}}, \quad k > 0$$

I samme figur har vi også tegnet inn tangenten til grafen til $f$ i punktet $(0, 2)$. Vi har også tegnet inn linjen $y = 10$, som er en asymptote til grafen til $f$.

![Logistisk funksjon med tangent og asymptote](/img/user/_resources/s2-v21-1-4.jpeg){width=60%}

>[!oppgave]
>a) Bestem tallene $A$ og $B$.
>b) Gjør nødvendige beregninger og vis at $k = 0{,}5$.

## Fasit

a) $A = 10$ og $B = 4$
b) Se løsningsforslag

## Løsningsforslag

### a

Når $x \to \infty$, har vi $e^{-kx} \to 0$, slik at

$$f(x) \to \frac{A}{1 + 0} = A$$

Siden asymptoten er $y = 10$, er $\underline{\underline{A = 10}}$.

Grafen går gjennom $(0, 2)$:

$$f(0) = \frac{10}{1 + B \cdot e^0} = \frac{10}{1 + B} = 2$$

$$1 + B = 5 \quad \Rightarrow \quad \underline{\underline{B = 4}}$$

### b

Vi har $f(x) = \dfrac{10}{1 + 4e^{-kx}}$. Vi deriverer:

$$f'(x) = \frac{10 \cdot 4k \cdot e^{-kx}}{(1 + 4e^{-kx})^2}$$

Vi setter inn $x = 0$:

$$f'(0) = \frac{40k \cdot e^0}{(1 + 4)^2} = \frac{40k}{25} = \frac{8k}{5}$$

Fra figuren leser vi av at tangenten i $(0, 2)$ går gjennom punktet $(10, 10)$. Tangentens stigningstall er

$$a = \frac{10 - 2}{10 - 0} = \frac{8}{10} = 0{,}8$$

Vi setter $f'(0) = 0{,}8$:

$$\frac{8k}{5} = \frac{4}{5} \quad \Rightarrow \quad 8k = 4 \quad \Rightarrow \quad \underline{\underline{k = 0{,}5}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestemme-koeffisienter-i-tredjegradsfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestemme koeffisienter i tredjegradsfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = ax^3 + bx^2 + cx$$

Om grafen til $f$ får du vite at

- den går gjennom punktet $(1, 6)$
- den går gjennom punktet $(-1, 2)$
- den har et toppunkt med $x$-koordinat lik 3

>[!oppgave]
>a) Bruk disse opplysningene til å sette opp et likningssystem som du kan bruke til å bestemme $a$, $b$ og $c$.
>b) Løs likningssystemet.

## Fasit

a) Se løsningsforslag
b) $a = -1$, $b = 4$, $c = 3$

## Løsningsforslag

### a

Vi har $f(x) = ax^3 + bx^2 + cx$ og $f'(x) = 3ax^2 + 2bx + c$.

**Punkt $(1, 6)$:**

$$f(1) = a + b + c = 6 \quad \text{(I)}$$

**Punkt $(-1, 2)$:**

$$f(-1) = -a + b - c = 2 \quad \text{(II)}$$

**Toppunkt med $x = 3$** betyr $f'(3) = 0$:

$$f'(3) = 27a + 6b + c = 0 \quad \text{(III)}$$

### b

Vi legger sammen (I) og (II):

$$(a + b + c) + (-a + b - c) = 6 + 2 \quad \Rightarrow \quad 2b = 8 \quad \Rightarrow \quad b = 4$$

Vi setter $b = 4$ inn i (I): $a + c = 2$ , altså $c = 2 - a$ (IV).

Vi setter $b = 4$ og (IV) inn i (III):

$$27a + 24 + (2 - a) = 0 \quad \Rightarrow \quad 26a + 26 = 0 \quad \Rightarrow \quad a = -1$$

Fra (IV): $c = 2 - (-1) = 3$.

$$\underline{\underline{a = -1, \quad b = 4, \quad c = 3}}$$

Funksjonen er $f(x) = -x^3 + 4x^2 + 3x$.


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmefunksjon-med-drofting/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmefunksjon med drøfting

Funksjonen $f$ er gitt ved

$$f(x) = (\ln x)^2 - 2\ln x - 3, \quad D_f = \langle 0, \to \rangle$$

>[!oppgave]
>a) Bestem nullpunktene til $f$.
>b) Vis at $f'(x) = \dfrac{2\ln x - 2}{x}$ og bestem eventuelle toppunkter og bunnpunkter på grafen til $f$.
>c) Bestem eventuelle vendepunkter på grafen til $f$.
>d) Lag en skisse av grafen til $f$.

Disse potensene av $e$ kan komme til nytte når du skal skissere grafen:

$e^{-1} \approx 0{,}4$, $e^1 \approx 2{,}7$, $e^2 \approx 7{,}4$ og $e^3 \approx 20{,}1$

## Fasit

a) $x = e^{-1} \approx 0{,}37$ og $x = e^3 \approx 20{,}1$
b) Bunnpunkt $(e, -4)$
c) Vendepunkt $(e^2, -3)$
d) Se løsningsforslag

## Løsningsforslag

### a

Vi setter $f(x) = 0$:

$$(\ln x)^2 - 2\ln x - 3 = 0$$

Vi substituerer $u = \ln x$:

$$u^2 - 2u - 3 = 0 \quad \Rightarrow \quad (u - 3)(u + 1) = 0$$

$$u = 3 \quad \text{eller} \quad u = -1$$

$$\ln x = 3 \quad \Rightarrow \quad x = e^3 \approx 20{,}1$$

$$\ln x = -1 \quad \Rightarrow \quad x = e^{-1} \approx 0{,}37$$

$$\underline{\underline{x = e^{-1} \approx 0{,}37 \quad \text{og} \quad x = e^3 \approx 20{,}1}}$$

### b

Vi deriverer med kjerneregelen. La $u = \ln x$, da er $f = u^2 - 2u - 3$:

$$f'(x) = (2\ln x - 2) \cdot \frac{1}{x} = \frac{2\ln x - 2}{x}$$

Vi setter $f'(x) = 0$:

$$2\ln x - 2 = 0 \quad \Rightarrow \quad \ln x = 1 \quad \Rightarrow \quad x = e$$

Siden $x > 0$ er nevneren alltid positiv, og fortegnet til $f'(x)$ bestemmes av telleren $2\ln x - 2$:

- For $x < e$: $\ln x < 1$, så $f'(x) < 0$
- For $x > e$: $\ln x > 1$, så $f'(x) > 0$

Funksjonen skifter fra avtagende til voksende, altså har vi et bunnpunkt.

$$f(e) = (\ln e)^2 - 2\ln e - 3 = 1 - 2 - 3 = -4$$

$$\underline{\underline{\text{Bunnpunkt: } (e, -4) \approx (2{,}7{,}\ {-4})}}$$

### c

Vi deriverer $f'(x) = \dfrac{2\ln x - 2}{x}$ med kvotientregelen:

$$f''(x) = \frac{\frac{2}{x} \cdot x - (2\ln x - 2) \cdot 1}{x^2} = \frac{2 - 2\ln x + 2}{x^2} = \frac{4 - 2\ln x}{x^2}$$

Vi setter $f''(x) = 0$:

$$4 - 2\ln x = 0 \quad \Rightarrow \quad \ln x = 2 \quad \Rightarrow \quad x = e^2 \approx 7{,}4$$

Vi sjekker fortegnsskifte i $f''$: telleren $4 - 2\ln x$ skifter fra positiv til negativ i $x = e^2$, altså har vi et vendepunkt.

$$f(e^2) = (\ln e^2)^2 - 2\ln e^2 - 3 = 4 - 4 - 3 = -3$$

$$\underline{\underline{\text{Vendepunkt: } (e^2, -3) \approx (7{,}4{,}\ {-3})}}$$

### d

![Skisse av grafen til f](/img/user/_resources/s2-v21-1-6.png)

Viktige punkter i skissen:

| Punkt | $x$ | $f(x)$ |
|---|---|---|
| Nullpunkt | $e^{-1} \approx 0{,}4$ | $0$ |
| Bunnpunkt | $e \approx 2{,}7$ | $-4$ |
| Vendepunkt | $e^2 \approx 7{,}4$ | $-3$ |
| Nullpunkt | $e^3 \approx 20{,}1$ | $0$ |

Grafen nærmer seg $+\infty$ når $x \to 0^+$ og når $x \to \infty$.


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sauevekt-og-normalfordeling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sauevekt og normalfordeling

Vi antar at vekten $X$ til en tilfeldig sau av en bestemt rase er normalfordelt med forventningsverdi $\mu = 60$ kg og standardavvik $\sigma = 6$ kg.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt sau veier mellom 57 og 63 kg.

Normalfordelingskurven til $X$ er grafen til funksjonen $f$ gitt ved

$$f(x) = \frac{1}{6\sqrt{2\pi}} \cdot e^{-\frac{(x - 60)^2}{72}}$$

>[!oppgave]
>b) Bestem verdien av integralet $\displaystyle\int_{69}^{\infty} f(x) \, \mathrm{d}x$. Hva forteller denne verdien oss?
>c) Lag en skisse av grafen til $f$. Synliggjør resultatene fra oppgave a) og oppgave b) på skissen.

En bonde har mange sauer av denne rasen. Han velger tilfeldig 25 sauer som han vil sende til slakt. Slaktebilen har en lastekapasitet på 1550 kg.

>[!oppgave]
>d) Bestem sannsynligheten for at slaktebilen kan ta med seg alle de 25 sauene.

## Fasit

a) $P(57 < X < 63) \approx 0{,}383$
b) $\approx 0{,}0668$. Sannsynligheten for at en tilfeldig sau veier mer enn 69 kg.
c) Se løsningsforslag
d) $P(\bar{X} \leq 62) \approx 0{,}952$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 60$ og $\sigma = 6$.

Vi standardiserer:

$$P(57 < X < 63) = P\!\left(\frac{57 - 60}{6} < Z < \frac{63 - 60}{6}\right) = P(-0{,}5 < Z < 0{,}5)$$

$$= \Phi(0{,}5) - \Phi(-0{,}5) = 0{,}6915 - 0{,}3085 = \underline{\underline{0{,}383}}$$

### b

$$\int_{69}^{\infty} f(x) \, \mathrm{d}x = P(X > 69) = 1 - P(X \leq 69)$$

Vi standardiserer: $z = \dfrac{69 - 60}{6} = 1{,}5$

$$P(X > 69) = 1 - \Phi(1{,}5) = 1 - 0{,}9332 = \underline{\underline{0{,}0668}}$$

Dette er sannsynligheten for at en tilfeldig valgt sau veier mer enn 69 kg.

### c

Normalfordelingskurven er symmetrisk om $\mu = 60$ og klokkeformet.

- Arealet mellom $x = 57$ og $x = 63$ (oppgave a) representerer $P(57 < X < 63) \approx 0{,}383$
- Arealet til høyre for $x = 69$ (oppgave b) representerer $P(X > 69) \approx 0{,}067$

### d

La $\bar{X}$ være gjennomsnittsvekten til 25 sauer. Da er $\bar{X}$ normalfordelt med

$$\text{E}(\bar{X}) = \mu = 60 \quad \text{og} \quad \text{SD}(\bar{X}) = \frac{\sigma}{\sqrt{n}} = \frac{6}{\sqrt{25}} = 1{,}2$$

Slaktebilen kan ta med alle 25 sauene dersom totalvekten er høyst 1550 kg, altså dersom $\bar{X} \leq \dfrac{1550}{25} = 62$.

$$P(\bar{X} \leq 62) = P\!\left(Z \leq \frac{62 - 60}{1{,}2}\right) = P(Z \leq 1{,}67) = \Phi(1{,}67) \approx \underline{\underline{0{,}952}}$$


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/enhetskostnad-og-prisreduksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Enhetskostnad og prisreduksjon

En bedrift produserer og selger en vare. De månedlige enhetskostnadene, $E$, ved å produsere og selge $x$ enheter av denne varen er gitt ved

$$E(x) = \frac{9000}{x} + 0{,}02x + 160, \quad x \in [100, 3000]$$

>[!oppgave]
>a) Tegn grafen til $E$.
>b) Hvor mange enheter av varen må bedriften produsere og selge for at enhetskostnaden skal bli minst mulig?

Varen selges for 270 kroner per enhet.

>[!oppgave]
>c) Bestem hvilken produksjonsmengde som gir størst overskudd. Hvor stort er dette overskuddet?

Bedriften vil sette ned prisen på varen for å øke sin markedsandel. Eieren av bedriften går med på dette, men krever at overskuddet må være minst 100 000 kroner per måned.

>[!oppgave]
>d) Hvilken pris per enhet vil gjøre at det største overskuddet kan bli 100 000 kroner? Hvor mange enheter må de selge da?

## Fasit

a) Se graf
b) Omtrent 671 enheter, $E \approx 186{,}83 \text{~kr}$
c) 2750 enheter, overskudd $142\,250 \text{~kr}$
d) Pris $\approx 253{,}38 \text{~kr}$, antall $\approx 2335$ enheter

## Løsningsforslag

### a

Vi tegner grafen til $E$ i GeoGebra.

![Graf av enhetskostnaden E](/img/user/_resources/s2-v21-2-1.png)

### b

Vi finner minimum av $E$ ved å derivere og sette lik null.

$$E'(x) = -\frac{9000}{x^2} + 0{,}02 = 0$$

Vi løser i CAS (se linje 2 i utklippet):

![CAS-utregning for enhetskostnad](/img/user/_resources/s2-v21-2-1-cas.png)

Vi får $x = 300\sqrt{5} \approx 671$ (vi ser bort fra den negative løsningen).

Se punkt `A` i grafen: $\underline{\underline{x \approx 671 \text{ enheter og } E \approx 186{,}83 \text{~kr}}}$

### c

Kostnadene er $K(x) = E(x) \cdot x = 9000 + 0{,}02x^2 + 160x$.

Overskuddet er

$$O(x) = 270x - K(x) = 270x - 9000 - 0{,}02x^2 - 160x = -0{,}02x^2 + 110x - 9000$$

Vi finner maksimum: $O'(x) = -0{,}04x + 110 = 0$, som gir $x = 2750$ (se linje 6 i CAS-utklippet).

$$O(2750) = -0{,}02 \cdot 2750^2 + 110 \cdot 2750 - 9000 = \underline{\underline{142\,250 \text{~kr}}}$$

### d

Med en ny pris $p$ per enhet blir overskuddet

$$O(x) = px - K(x) = (p - 160)x - 0{,}02x^2 - 9000$$

Maksimalt overskudd finner vi ved $O'(x) = 0$:

$$p - 160 - 0{,}04x = 0 \quad \Rightarrow \quad x = \frac{p - 160}{0{,}04}$$

Vi setter inn i $O$:

$$O_{\max} = (p-160) \cdot \frac{p-160}{0{,}04} - 0{,}02 \cdot \left(\frac{p-160}{0{,}04}\right)^2 - 9000 = \frac{(p-160)^2}{0{,}08} - 9000$$

Vi setter $O_{\max} = 100\,000$:

$$\frac{(p-160)^2}{0{,}08} = 109\,000 \quad \Rightarrow \quad (p-160)^2 = 8720$$

$$p - 160 = \sqrt{8720} \approx 93{,}38 \quad \Rightarrow \quad \underline{\underline{p \approx 253{,}38 \text{~kr}}}$$

Antall enheter: $x = \dfrac{93{,}38}{0{,}04} \approx \underline{\underline{2335 \text{ enheter}}}$


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/spareavtale-og-aksjefond/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Spareavtale og aksjefond

For fem år siden opprettet Rannveig en spareavtale. Hun satte hver måned inn 1000 kroner på en konto med en fast månedlig rentefot på 0,25 prosent.

>[!oppgave]
>a) Hvor mye penger var det på kontoen like etter at innskudd nummer 40 ble satt inn?
>b) Hvor lang tid gikk det fra Rannveig satte inn første innskudd til det var mer enn 50 000 kroner på kontoen?

For fem år siden begynte også Ivar å spare. Han satte hver måned inn 1000 kroner i et aksjefond. Like etter at han hadde satt inn innskudd nummer 40, var verdien av hans andel i aksjefondet 47 900 kroner.

>[!oppgave]
>c) Hva måtte den månedlige rentefoten ha vært om han skulle ha fått tilsvarende sum på en sparekonto med fast rente?

## Fasit

a) $42\,013{,}20 \text{~kr}$
b) 47 måneder (3 år og 11 måneder)
c) $r \approx 0{,}90 \,\%$ per måned

## Løsningsforslag

### a

Med vekstfaktor $k = 1{,}0025$ og fast månedlig innskudd $b = 1000 \text{~kr}$ er beløpet etter $n$ innskudd gitt ved summen av en geometrisk rekke:

$$S_n = b \cdot \frac{k^n - 1}{k - 1}$$

Vi setter inn $n = 40$ i CAS (se linje 1 i utklippet):

![CAS-beregning av spareavtale](/img/user/_resources/s2-v21-2-2-cas.png)

$$S_{40} = 1000 \cdot \frac{1{,}0025^{40} - 1}{0{,}0025} \approx \underline{\underline{42\,013{,}20 \text{~kr}}}$$

### b

Vi må finne minste $n$ slik at $S_n > 50\,000$:

$$1000 \cdot \frac{1{,}0025^n - 1}{0{,}0025} > 50\,000$$

Fra CAS ser vi at $S_{48} \approx 50\,931 > 50\,000$ (linje 2), mens $S_{47} < 50\,000$.

Beløpet passerer 50 000 kroner idet innskudd nummer 48 settes inn. Tiden fra innskudd 1 til innskudd 48 er 47 måneder.

Det gikk altså $\underline{\underline{47 \text{ måneder}}}$ (3 år og 11 måneder) fra Rannveig satte inn første innskudd til det var mer enn 50 000 kroner på kontoen.

### c

Vi skal finne $r$ slik at

$$1000 \cdot \frac{(1+r)^{40} - 1}{r} = 47\,900$$

Vi løser numerisk i CAS:

$$\underline{\underline{r \approx 0{,}0090 = 0{,}90 \,\%}}$$


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bruddstyrke-fiskesene/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bruddstyrke fiskesene

En leverandør selger en type sene for fiske. De oppgir at bruddstyrken $X$ for senen i en tilfeldig valgt spole av denne typen er normalfordelt med forventningsverdi $\mu = 56$ kg og standardavvik $\sigma = 2{,}3$ kg.

>[!oppgave]
>a) Hva er sannsynligheten for at senen i en tilfeldig valgt spole tåler minst 53 kg?

Tenk deg at du skal gjøre målinger av bruddstyrken til senen i 25 tilfeldig valgte spoler av denne typen.

>[!oppgave]
>b) Bestem sannsynligheten for at senen i alle de 25 spolene tåler mer enn 50 kg.

La $\bar{X}$ være gjennomsnittet til målingene.

>[!oppgave]
>c) Bestem $P(\bar{X} \leq 55)$.

Leverandøren har en mistanke om at bruddstyrken er lavere enn 56 kg. De ønsker derfor å gjennomføre en hypotesetest der de vil teste senen i 25 tilfeldig valgte spoler.

>[!oppgave]
>d) Sett opp en hypotesetest som du kan bruke for å avgjøre om det er grunnlag for leverandørens mistanke.

Vi går ut fra at standardavviket til bruddstyrken fremdeles er $\sigma = 2{,}3$ kg. Vi vil bruke et signifikansnivå på 5 prosent.

>[!oppgave]
>e) Hva er den høyeste gjennomsnittlige verdien for bruddstyrken til senene i 25 tilfeldig valgte spoler, som gjør at vi kan konkludere med at det er grunnlag for leverandørens mistanke?

## Fasit

a) $P(X \geq 53) \approx 0{,}904$
b) $\approx 0{,}892$
c) $P(\bar{X} \leq 55) \approx 0{,}015$
d) Se løsningsforslag
e) $\bar{x} \approx 55{,}24 \text{~kg}$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 56$ og $\sigma = 2{,}3$.

$$P(X \geq 53) = 1 - P(X < 53) = 1 - \Phi\!\left(\frac{53 - 56}{2{,}3}\right) = 1 - \Phi(-1{,}30)$$

$$= 1 - 0{,}0968 = \underline{\underline{0{,}904}}$$

### b

La $Y$ være antall spoler der senen tåler mer enn 50 kg. Sannsynligheten for at én spole tåler mer enn 50 kg:

$$P(X > 50) = 1 - \Phi\!\left(\frac{50 - 56}{2{,}3}\right) = 1 - \Phi(-2{,}61) = 0{,}9955$$

For at alle 25 spolene tåler mer enn 50 kg:

$$P(Y = 25) = 0{,}9955^{25} \approx \underline{\underline{0{,}892}}$$

### c

$\bar{X}$ er normalfordelt med $\text{E}(\bar{X}) = 56$ og $\text{SD}(\bar{X}) = \dfrac{2{,}3}{\sqrt{25}} = 0{,}46$.

$$P(\bar{X} \leq 55) = \Phi\!\left(\frac{55 - 56}{0{,}46}\right) = \Phi(-2{,}17) \approx \underline{\underline{0{,}015}}$$

### d

Leverandøren mistenker at bruddstyrken er **lavere** enn oppgitt. Vi setter opp:

$$H_0\colon \mu = 56 \quad \text{(bruddstyrken er som oppgitt)}$$

$$H_1\colon \mu < 56 \quad \text{(bruddstyrken er lavere enn oppgitt)}$$

Vi gjennomfører en venstresidig test med $n = 25$, $\sigma = 2{,}3$ og signifikansnivå $\alpha = 0{,}05$.

### e

Under $H_0$ er $\bar{X}$ normalfordelt med $\mu = 56$ og $\text{SD}(\bar{X}) = 0{,}46$.

Vi forkaster $H_0$ dersom $\bar{X}$ er lavere enn den kritiske verdien $\bar{x}_k$ som oppfyller

$$P(\bar{X} \leq \bar{x}_k) = 0{,}05$$

$$\frac{\bar{x}_k - 56}{0{,}46} = z_{0{,}05} = -1{,}645$$

$$\bar{x}_k = 56 - 1{,}645 \cdot 0{,}46 \approx \underline{\underline{55{,}24 \text{~kg}}}$$

Dersom den gjennomsnittlige bruddstyrken i utvalget er 55,24 kg eller lavere, kan vi konkludere med at det er grunnlag for leverandørens mistanke.


</div></div>


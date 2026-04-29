---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v19","date":"2019-05-24","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2019","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2019/","permalink":"/eksamener/s2-eksamen-v2019/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v19","date":"2019-05-24","del1_tid":3,"del2_tid":2,"title":"S2 eksamen V2019","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av tre typer funksjoner](https://matematikkoppgaver.vercel.app/derivasjon-av-tre-typer-funksjoner/) | derivasjon, eksponentialfunksjoner, logaritmer | × |
| [1-2](#oppgave-1-2) | [Polynom med faktorisering](https://matematikkoppgaver.vercel.app/polynom-med-faktorisering/) | polynomdivisjon, faktorisering | × |
| [1-3](#oppgave-1-3) | [Fjerdegradspolynom med faktorer](https://matematikkoppgaver.vercel.app/fjerdegradspolynom-med-faktorer/) | polynomdivisjon, likningssystem | × |
| [1-4](#oppgave-1-4) | [Aritmetisk rekke med formel](https://matematikkoppgaver.vercel.app/aritmetisk-rekke-med-formel/) | rekker | × |
| [1-5](#oppgave-1-5) | [Sprettball og uendelig rekke](https://matematikkoppgaver.vercel.app/sprettball-og-uendelig-rekke/) | uendelig rekke, rekker | × |
| [1-6](#oppgave-1-6) | [Tredjegradsfunksjon med transformasjon](https://matematikkoppgaver.vercel.app/tredjegradsfunksjon-med-transformasjon/) | funksjonsdrøfting, derivasjon | × |
| [1-7](#oppgave-1-7) | [Terningspill med to terninger](https://matematikkoppgaver.vercel.app/terningspill-med-to-terninger/) | sannsynlighet, forventningsverdi | × |
| [1-8](#oppgave-1-8) | [Normalfordeling med ukjente parametere](https://matematikkoppgaver.vercel.app/normalfordeling-med-ukjente-parametere/) | normalfordeling, standard normalfordeling | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Sjørøverskatt med mynter](https://matematikkoppgaver.vercel.app/sjoroverskatt-med-mynter/) | likningssystem | × |
| [2-2](#oppgave-2-2) | [Harer på øy](https://matematikkoppgaver.vercel.app/harer-pa-oy/) | logistisk funksjon, regresjon, modellering | × |
| [2-3](#oppgave-2-3) | [Etterspørsel og grensekostnad vare](https://matematikkoppgaver.vercel.app/ettersporsel-og-grensekostnad-vare/) | etterspørsel, eksponentialfunksjoner, grenseinntekt og grensekostnad, økonomi | × |
| [2-4](#oppgave-2-4) | [Annuitetslån og serielån Pia](https://matematikkoppgaver.vercel.app/annuitetslan-og-serielan-pia/) | lån, rekker, økonomi | × |
| [2-5](#oppgave-2-5) | [Hypotesetest om russetid](https://matematikkoppgaver.vercel.app/hypotesetest-om-russetid/) | binomisk, normalfordeling, hypotesetest | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-tre-typer-funksjoner/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av tre typer funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = 5x^4 - 10 + e^x$
>b) $g(x) = 2x \cdot \ln x$
>c) $h(x) = \dfrac{8}{1 + e^{-2x}}$

## Fasit

a) $f'(x) = 20x^3 + e^x$
b) $g'(x) = 2\ln x + 2$
c) $h'(x) = \dfrac{16e^{-2x}}{(1 + e^{-2x})^2}$

## Løsningsforslag

### a

$$f(x) = 5x^4 - 10 + e^x$$

Vi deriverer ledd for ledd:

$$\underline{\underline{f'(x) = 20x^3 + e^x}}$$

### b

$$g(x) = 2x \cdot \ln x$$

Vi bruker produktregelen $(u \cdot v)' = u' \cdot v + u \cdot v'$ med $u = 2x$ og $v = \ln x$:

$$g'(x) = 2 \cdot \ln x + 2x \cdot \frac{1}{x} = \underline{\underline{2\ln x + 2}}$$

### c

$$h(x) = \frac{8}{1 + e^{-2x}} = 8 \cdot (1 + e^{-2x})^{-1}$$

Vi bruker kjerneregelen med $u = 1 + e^{-2x}$:

$$h'(x) = 8 \cdot (-1) \cdot (1 + e^{-2x})^{-2} \cdot (-2) \cdot e^{-2x} = \underline{\underline{\frac{16e^{-2x}}{(1 + e^{-2x})^2}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynom-med-faktorisering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynom med faktorisering

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 6x^2 + 9x - 4$$

>[!oppgave]
>a) Begrunn at $P(x)$ er delelig med $(x - 1)$.
>b) Faktoriser $P(x)$ i førstegradsfaktorer.

## Fasit

a) $P(1)=0$, altså må $(x-1)$ være en faktor i $P(x)$.
b) $P(x)=(x-1)^{2}(x-4)$

## Løsningsforslag

### a
$P(x)$ vil være delelig med $(x-1)$ dersom vi kan faktorisere $P(x)$ på denne måten $P(x)=(x-1) \cdot a(x-x_{1})(x-x_{2})$. For å kunne gjennomføre denne faktorisering så må $x=1$ være et nullpunkt til $P$.

$$
P(1)=1^{3}-6\cdot 1^{2}+9\cdot 1 - 4=1-6+9-4=0
$$
**$(x-1)$ må være en faktor i $P$ og $P$ må derfor være delelig på $(x-1)$.**

### b
$(x-1)$ er en faktor. Vi gjennomfører polynomdivisjon for å kunne finne de de andre faktorene.

$$
\begin{aligned}
&\phantom{0}(x^3 - 6x^2 + 9x - 4) : (x - 1) = x^2 - 5x + 4 \\
&\underline{-(x^3 - x^2)} \\
&\phantom{0000} -5x^2 + 9x \\
&\phantom{000} \underline{-(-5x^2 + 5x)} \\
&\phantom{000000000000} 4x - 4 \\
&\phantom{0000000000} \underline{-(4x - 4)} \\
&\phantom{00000000000000000} 0
\end{aligned}
$$

Dette gir oss at $P(x) = (x - 1)(x^2 - 5x + 4)$. 

Vi faktoriserer andregradsuttrykket $x^2 - 5x + 4$ ved hjelp av heltallsmetoden. Vi ser etter to tall som har sum $-5$ og produkt $4$. Tallene er $-1$ og $-4$:
$$x^2 - 5x + 4 = (x - 1)(x - 4)$$

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fjerdegradspolynom-med-faktorer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Fjerdegradspolynom med faktorer

Et polynom $Q$ er gitt ved

$$Q(x) = x^4 + ax^3 + bx^2 + cx - 12$$

Du får oppgitt at $(x + 1)$, $(x - 1)$ og $(x - 2)$ er faktorer i $Q(x)$.

>[!oppgave]
>a) Vis at dette gir likningssystemet
>
>$$a - b + c = -11$$
>
>$$a + b + c = 11$$
>
>$$8a + 4b + 2c = -4$$
>b) Bestem $a$, $b$ og $c$.

## Fasit

a) Se løsningsforslag
b) $a = -8$, $b = 11$, $c = 8$

## Løsningsforslag

### a

Siden $(x + 1)$, $(x - 1)$ og $(x - 2)$ er faktorer i $Q(x)$, vet vi at $Q(-1) = 0$, $Q(1) = 0$ og $Q(2) = 0$.

**$Q(-1) = 0$:**

$$(-1)^4 + a(-1)^3 + b(-1)^2 + c(-1) - 12 = 0$$

$$1 - a + b - c - 12 = 0$$

$$a - b + c = -11$$

**$Q(1) = 0$:**

$$1 + a + b + c - 12 = 0$$

$$a + b + c = 11$$

**$Q(2) = 0$:**

$$16 + 8a + 4b + 2c - 12 = 0$$

$$8a + 4b + 2c = -4$$

### b

Fra likning 1 og 2:

$$(a + b + c) - (a - b + c) = 11 - (-11)$$

$$2b = 22 \implies b = 11$$

Setter $b = 11$ inn i likning 1: $a + c = -11 + 11 = 0$, altså $c = -a$.

Setter $b = 11$ og $c = -a$ inn i likning 3:

$$8a + 44 - 2a = -4 \implies 6a = -48 \implies a = -8$$

Da er $c = -(-8) = 8$.

$$\underline{\underline{a = -8, \quad b = 11, \quad c = 8}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-rekke-med-formel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk rekke med formel

>[!oppgave]
>a) Bruk formelen for summen av en aritmetisk rekke til å bestemme
>
>$$1 + 7 + 13 + 19 + \cdots + 295$$

For en annen aritmetisk rekke gjelder

$$a_5 - a_2 = 12$$

$$a_1 + a_2 + a_3 = 18$$

>[!oppgave]
>b) Bestem en formel for $a_n$ uttrykt ved $n$.

## Fasit

a) $7400$
b) $a_n = 4n - 2$

## Løsningsforslag

### a

Vi har en aritmetisk rekke med $a_1 = 1$ og $d = 6$.

Finner antall ledd: $a_n = a_1 + (n-1) \cdot d$ gir

$$295 = 1 + (n-1) \cdot 6 \implies n - 1 = \frac{294}{6} = 49 \implies n = 50$$

Summen av rekken er

$$s_{50} = \frac{a_1 + a_{50}}{2} \cdot 50 = \frac{1 + 295}{2} \cdot 50 = 148 \cdot 50 = \underline{\underline{7400}}$$

### b

Fra $a_5 - a_2 = 12$ får vi

$$\bigl(a_1 + 4d\bigr) - \bigl(a_1 + d\bigr) = 12 \implies 3d = 12 \implies d = 4$$

Fra $a_1 + a_2 + a_3 = 18$ får vi

$$a_1 + (a_1 + d) + (a_1 + 2d) = 18 \implies 3a_1 + 3d = 18$$

$$3a_1 + 12 = 18 \implies a_1 = 2$$

Formelen for $a_n$ blir

$$\underline{\underline{a_n = 2 + (n-1) \cdot 4 = 4n - 2}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sprettball-og-uendelig-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sprettball og uendelig rekke

En ball slippes fra en høyde på 10,0 m. Første gang ballen treffer bakken, spretter den 6,0 m loddrett opp. Hver gang den så treffer bakken igjen, spretter den loddrett opp til en høyde som er 60 % av høyden den fikk ved forrige sprett.

>[!oppgave]
>Bestem den totale distansen ballen har tilbakelagt fra den slippes, til den faller til ro.

## Fasit

$40{,}0 \text{ m}$

## Løsningsforslag

Ballen faller først $10{,}0$ m ned. Deretter spretter den $6{,}0$ m opp og $6{,}0$ m ned, så $6{,}0 \cdot 0{,}6 = 3{,}6$ m opp og ned, osv.

Etter det første fallet beveger ballen seg opp og ned for hver sprett, så vi ganger med 2. Sprettene danner en uendelig geometrisk rekke med $a_1 = 6{,}0$ og $k = 0{,}6$:

$$\text{Total distanse} = 10{,}0 + 2 \cdot \frac{a_1}{1 - k} = 10{,}0 + 2 \cdot \frac{6{,}0}{1 - 0{,}6} = 10{,}0 + 2 \cdot 15{,}0 = \underline{\underline{40{,}0 \text{ m}}}$$


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradsfunksjon-med-transformasjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradsfunksjon med transformasjon

Funksjonen $f$ er gitt ved

$$f(x) = (x - 1)^2 \cdot (x - 4)$$

>[!oppgave]
>a) Bestem eventuelle toppunkter og bunnpunkter på grafen til $f$.
>b) Bestem eventuelle vendepunkter på grafen til $f$.
>c) Lag en skisse av grafen til $f$.

Funksjonen $g$ er gitt ved

$$g(x) = -2 \cdot f(x) + 3$$

>[!oppgave]
>d) Bestem eventuelle toppunkter og bunnpunkter på grafen til $g$.

## Fasit

a) Toppunkt $(1, 0)$, bunnpunkt $(3, -4)$
b) Vendepunkt $(2, -2)$
c) Se løsningsforslag
d) Toppunkt $(3, 11)$, bunnpunkt $(1, 3)$

## Løsningsforslag

### a

Vi utvider $f(x)$:

$$f(x) = (x-1)^2(x-4) = (x^2 - 2x + 1)(x - 4) = x^3 - 6x^2 + 9x - 4$$

Deriverer:

$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$$

Setter $f'(x) = 0$: $x = 1$ eller $x = 3$.

Fortegnslinje for $f'(x)$:

| $x$ | $x < 1$ | $x = 1$ | $1 < x < 3$ | $x = 3$ | $x > 3$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | stiger | | synker | | stiger |

- $f(1) = 0$: **Toppunkt** $\underline{\underline{(1, 0)}}$
- $f(3) = (3-1)^2(3-4) = 4 \cdot (-1) = -4$: **Bunnpunkt** $\underline{\underline{(3, -4)}}$

### b

$$f''(x) = 6x - 12 = 0 \implies x = 2$$

$f''$ skifter fortegn i $x = 2$ (fra negativ til positiv), så dette er et vendepunkt.

$$f(2) = (2-1)^2(2-4) = 1 \cdot (-2) = -2$$

**Vendepunkt** $\underline{\underline{(2, -2)}}$

### c

Grafen krysser $x$-aksen i $x = 1$ (dobbeltrot) og $x = 4$. Vi har toppunkt $(1, 0)$, bunnpunkt $(3, -4)$ og vendepunkt $(2, -2)$.

### d

Siden $g(x) = -2 \cdot f(x) + 3$, er grafen til $g$ en speiling av $f$ om $x$-aksen, strukket med faktor 2, og flyttet 3 opp. De stasjonære punktene har samme $x$-verdier:

- $f$ har toppunkt i $x = 1 \implies g$ har **bunnpunkt**: $g(1) = -2 \cdot 0 + 3 = 3$. Bunnpunkt $\underline{\underline{(1, 3)}}$
- $f$ har bunnpunkt i $x = 3 \implies g$ har **toppunkt**: $g(3) = -2 \cdot (-4) + 3 = 11$. Toppunkt $\underline{\underline{(3, 11)}}$


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/terningspill-med-to-terninger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Terningspill med to terninger

Vi har to terninger som begge har seks sider. Den ene er en vanlig terning, mens den andre har fire sider som viser ett øye, én side som viser to øyne, og én side som viser tre øyne.

Vi lar $X$ være summen av antall øyne vi får når vi kaster de to terningene.

>[!oppgave]
>a) Skriv av tabellen, og fyll ut sannsynlighetsfordelingen.
>
>| $k$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
>|---|---|---|---|---|---|---|---|---|
>| $P(X = k)$ | $\dfrac{4}{36}$ | $\dfrac{5}{36}$ | $\dfrac{6}{36}$ | $\dfrac{6}{36}$ | | $\dfrac{6}{36}$ | | $\dfrac{1}{36}$ |
>b) Vis at $\text{E}(X) = 5$.

De to terningene brukes i et pengespill.

- Dersom summen av antall øyne blir 5 eller mindre i ett kast, gis det ingen gevinst.
- Dersom summen av antall øyne blir 6, 7 eller 8 i ett kast, gis det 72 kroner i gevinst.
- Dersom summen av antall øyne blir 9 i ett kast, gis det 360 kroner i gevinst.

Vi lar $Y$ være gevinsten du får når du kaster terningene én gang.

>[!oppgave]
>c) Anslå om du kan forvente å gå i overskudd i det lange løp dersom det koster 40 kroner for hver gang du kaster terningene.

## Fasit

a) $P(X = 6) = \dfrac{6}{36}$, $P(X = 8) = \dfrac{2}{36}$
b) Se løsningsforslag
c) $\text{E}(Y) = 38 \text{ kr}$. Nei, du kan ikke forvente å gå i overskudd.

## Løsningsforslag

### a

Den vanlige terningen viser 1–6 med lik sannsynlighet $\frac{1}{6}$. Den spesielle terningen har $P(1) = \frac{4}{6}$, $P(2) = \frac{1}{6}$ og $P(3) = \frac{1}{6}$.

**$P(X = 6)$:** Vi trenger kombinasjonene (vanlig, spesiell) som gir sum 6:

- $(3, 3)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(4, 2)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(5, 1)$: $\frac{1}{6} \cdot \frac{4}{6} = \frac{4}{36}$

$$P(X = 6) = \frac{1 + 1 + 4}{36} = \underline{\underline{\frac{6}{36}}}$$

**$P(X = 8)$:** Kombinasjoner som gir sum 8:

- $(5, 3)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(6, 2)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$

$$P(X = 8) = \frac{1 + 1}{36} = \underline{\underline{\frac{2}{36}}}$$

### b

$$\text{E}(X) = \sum_{k=2}^{9} k \cdot P(X = k)$$

$$= 2 \cdot \frac{4}{36} + 3 \cdot \frac{5}{36} + 4 \cdot \frac{6}{36} + 5 \cdot \frac{6}{36} + 6 \cdot \frac{6}{36} + 7 \cdot \frac{6}{36} + 8 \cdot \frac{2}{36} + 9 \cdot \frac{1}{36}$$

$$= \frac{8 + 15 + 24 + 30 + 36 + 42 + 16 + 9}{36} = \frac{180}{36} = \underline{\underline{5}}$$

### c

Vi finner forventet gevinst $\text{E}(Y)$:

$$P(X \in \{6, 7, 8\}) = \frac{6 + 6 + 2}{36} = \frac{14}{36}$$

$$P(X = 9) = \frac{1}{36}$$

$$\text{E}(Y) = 72 \cdot \frac{14}{36} + 360 \cdot \frac{1}{36} = \frac{1008 + 360}{36} = \frac{1368}{36} = 38 \text{ kr}$$

Siden det koster 40 kr per kast og forventet gevinst er 38 kr, er forventet nettoresultat $38 - 40 = -2$ kr per kast.

**Du kan ikke forvente å gå i overskudd i det lange løp.**


</div></div>


## Oppgave 1-8


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/normalfordeling-med-ukjente-parametere/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Normalfordeling med ukjente parametere

I denne oppgaven kan du få bruk for tabellen over standard normalfordeling i vedlegg 1.

La $X$ være normalfordelt med forventningsverdi $\mu = 1$ og varians $\sigma^2 = 4$.

>[!oppgave]
>a) Bestem $P(2 < X < 3)$.

Om en annen normalfordelt stokastisk variabel $Y$ får du vite at $P(Y \leq 0{,}92) = 0{,}0228$ og $P(Y \geq 1{,}41) = 0{,}0668$.

>[!oppgave]
>b) Bestem $\mu$ og $\sigma$.

## Fasit

a) $P(2 < X < 3) \approx 0{,}15$
b) $\mu = 1{,}20$ og $\sigma = 0{,}14$

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 1$ og $\sigma^2 = 4$, altså $\sigma = 2$.

Vi standardiserer:

$$z_1 = \frac{2 - 1}{2} = 0{,}5 \qquad z_2 = \frac{3 - 1}{2} = 1{,}0$$

$$P(2 < X < 3) = \Phi(1{,}0) - \Phi(0{,}5) = 0{,}8413 - 0{,}6915 = \underline{\underline{0{,}1498 \approx 0{,}15}}$$

### b

Vi slår opp i tabellen og finner $z$-verdiene:

$$P(Y \leq 0{,}92) = 0{,}0228 \implies \frac{0{,}92 - \mu}{\sigma} = -2{,}00$$

$$P(Y \geq 1{,}41) = 0{,}0668 \implies P(Y \leq 1{,}41) = 0{,}9332 \implies \frac{1{,}41 - \mu}{\sigma} = 1{,}50$$

Vi har likningssystemet:

$$0{,}92 - \mu = -2\sigma \quad \text{(I)}$$

$$1{,}41 - \mu = 1{,}5\sigma \quad \text{(II)}$$

Trekker (I) fra (II):

$$1{,}41 - 0{,}92 = 1{,}5\sigma + 2\sigma \implies 0{,}49 = 3{,}5\sigma \implies \sigma = 0{,}14$$

Setter inn i (I):

$$\mu = 0{,}92 + 2 \cdot 0{,}14 = 1{,}20$$

$$\underline{\underline{\mu = 1{,}20 \quad \text{og} \quad \sigma = 0{,}14}}$$


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sjoroverskatt-med-mynter/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sjørøverskatt med mynter

En sjørøverskatt har mynter med verdiene 1, 5 og 10 skilling. Myntene veier henholdsvis 5 g, 8 g og 12 g. Du får vite at

- skatten inneholder 85 mynter
- den samlede verdien er på 356 skilling
- den samlede vekten er 633 g

>[!oppgave]
>a) Bruk opplysningene til å sette opp tre likninger med tre ukjente.
>b) Bruk CAS til å løse likningssystemet du satte opp i oppgave a).

## Fasit

a) Se løsningsforslag
b) 41 mynter med verdi 1, 25 mynter med verdi 5, 19 mynter med verdi 10

## Løsningsforslag

### a

La $x$, $y$ og $z$ være antall mynter med verdiene 1, 5 og 10 skilling.

Antall mynter: $x + y + z = 85$

Samlet verdi: $x + 5y + 10z = 356$

Samlet vekt: $5x + 8y + 12z = 633$

### b

Vi skriver inn i CAS:

![CAS: Sjørøverskatt](/img/user/_resources/s2-v19-2-1-cas.png)

Vi får $\underline{\underline{x = 41, \; y = 25, \; z = 19}}$.

Skatten inneholder 41 mynter med verdi 1 skilling, 25 mynter med verdi 5 skilling og 19 mynter med verdi 10 skilling.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/harer-pa-oy/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Harer på øy

På en øy ble det satt ut 50 harer. Tabellen nedenfor viser hvor mange harer det var på øya etter 0, 10, 20 og 30 uker.

| Antall uker etter utsettingen | 0 | 10 | 20 | 30 |
|---|---|---|---|---|
| Antall harer | 50 | 104 | 156 | 184 |

Antall harer på øya $t$ uker etter at harene ble satt ut, kan ifølge en forsker modelleres med en funksjon $g$ på formen

$$g(t) = \frac{N}{1 + a \cdot e^{-kt}}$$

>[!oppgave]
>a) Bruk regresjon til å bestemme $N$, $a$ og $k$.
>b) Hvilken informasjon gir tallet $N$ i denne situasjonen?

## Fasit

a) $N \approx 200$, $a \approx 3{,}00$, $k \approx 0{,}118$
b) $N = 200$ er den øvre grensen for antall harer på øya (bæreevnen).

## Løsningsforslag

### a

Vi bruker logistisk regresjon i CAS med datapunktene $(0, 50)$, $(10, 104)$, $(20, 156)$ og $(30, 184)$.

Regresjonen gir

$$\underline{\underline{N \approx 200, \quad a \approx 3{,}00, \quad k \approx 0{,}118}}$$

slik at modellen blir

$$g(t) = \frac{200}{1 + 3{,}00 \cdot e^{-0{,}118t}}$$

### b

Tallet $N = 200$ er den øvre grensen (bæreevnen) for antall harer på øya. Når $t \to \infty$, nærmer $g(t)$ seg $N = 200$. Det betyr at bestanden aldri vil overstige omtrent **200 harer**.


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ettersporsel-og-grensekostnad-vare/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Etterspørsel og grensekostnad vare

En ny vare blir lansert i et område. Vi antar at funksjonen $q$ gitt ved

$$q(t) = 230 \cdot e^{0{,}015t}, \quad t \in [0, 52]$$

er en god modell for etterspørselen etter varen per uke, $t$ uker etter lanseringen.

>[!oppgave]
>a) Bruk graftegner til å tegne grafen til $q$.

Enhetsprisen for varen settes lik 50 kroner det første året.

>[!oppgave]
>b) Bestem inntekten i uke 40 etter lanseringen.
>c) Bestem den samlede inntekten de første 52 ukene etter lanseringen.

Etter at varen har vært i markedet i ett år, vil enhetsprisen $p$ kroner være en funksjon av den ukentlige etterspørselen $x$. Vi går ut fra at $p$ er gitt ved

$$p(x) = -0{,}01x + 60, \quad x \in [500, 2000]$$

Grensekostnaden ved produksjon av $x$ enheter er

$$K'(x) = 0{,}02x + 25, \quad x \in [500, 2000]$$

>[!oppgave]
>d) Hva må enhetsprisen være for at overskuddet skal bli størst mulig?

## Fasit

a) Se løsningsforslag
b) $\approx 20\,955 \text{ kr}$
c) $\approx 905\,795 \text{ kr}$
d) $51{,}25 \text{ kr}$

## Løsningsforslag

### a

Vi tegner grafen til $q(t) = 230 \cdot e^{0{,}015t}$ for $t \in [0, 52]$ i GeoGebra.

![Graf: Etterspørsel](/img/user/_resources/s2-v19-2-3-graf.png)

### b

Inntekten i uke 40 er antall solgte enheter ganger enhetspris:

$$I_{40} = q(40) \cdot 50 = 230 \cdot e^{0{,}015 \cdot 40} \cdot 50$$

Vi regner ut i CAS og får

$$I_{40} \approx \underline{\underline{20\,955 \text{ kr}}}$$

### c

Den samlede inntekten er

$$I = 50 \cdot \int_0^{52} 230 \cdot e^{0{,}015t} \, \mathrm{d}t$$

Vi bruker CAS til å definere $q$, beregne integralet og løse optimeringen:

![CAS: Etterspørsel og grensekostnad](/img/user/_resources/s2-v19-2-3.png)

Fra linje 2 i CAS leser vi av at den samlede inntekten er $\approx \underline{\underline{905\,795 \text{ kr}}}$.

### d

Inntektsfunksjonen er $I(x) = x \cdot p(x) = x(-0{,}01x + 60) = -0{,}01x^2 + 60x$.

Grenseinntekten er $I'(x) = -0{,}02x + 60$.

Overskuddet er størst når grenseinntekt er lik grensekostnad. Fra linje 4 i CAS ser vi at $x = 875$.

Enhetsprisen blir

$$p(875) = -0{,}01 \cdot 875 + 60 = \underline{\underline{51{,}25 \text{ kr}}}$$


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/annuitetslan-og-serielan-pia/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Annuitetslån og serielån Pia

Pia vurderer å låne 800 000 kroner. En bank tilbyr henne et annuitetslån med en nedbetalingstid på 20 år, én termin per år og en fast rentesats på 3,0 % per år. Første innbetaling er om ett år.

>[!oppgave]
>a) Sett opp en geometrisk rekke som kan brukes til å bestemme terminbeløpet.
>Bruk CAS til å bestemme terminbeløpet.

Banken tilbyr henne også et serielån med en nedbetalingstid på 20 år, én termin per år og en fast rentesats på 3,0 % per år. Tabellen nedenfor viser avdrag, renter, terminbeløp og restlån for de tre første terminene.

| Termin | Avdrag | Renter | Terminbeløp | Restlån |
|---|---|---|---|---|
| 1 | 40 000 | 24 000 | 64 000 | 760 000 |
| 2 | 40 000 | 22 800 | 62 800 | 720 000 |
| 3 | 40 000 | 21 600 | 61 600 | 680 000 |

>[!oppgave]
>b) Forklar at terminbeløpene danner en aritmetisk følge.
>Bestem summen av de 20 terminbeløpene for dette serielånet.

En annen bank tilbyr henne et serielån på 800 000 kroner. Dette lånet har en nedbetalingstid på 20 år, én termin per år og en fast rentesats per år. Summen av alle terminbeløpene for dette lånet blir 1 000 000 kroner.

>[!oppgave]
>c) Bestem den faste rentesatsen per år for dette lånet.

## Fasit

a) $T \approx 53\,773 \text{ kr}$
b) Summen er $1\,052\,000 \text{ kr}$
c) $r \approx 2{,}38 \, \%$

## Løsningsforslag

### a

Nåverdien av alle terminbeløpene $T$ skal være lik lånebeløpet. Med vekstfaktor $1{,}03$ per år:

$$800\,000 = \frac{T}{1{,}03} + \frac{T}{1{,}03^2} + \cdots + \frac{T}{1{,}03^{20}}$$

Dette er en geometrisk rekke med $a_1 = \frac{T}{1{,}03}$ og $k = \frac{1}{1{,}03}$:

$$800\,000 = \frac{T}{1{,}03} \cdot \frac{1 - \left(\frac{1}{1{,}03}\right)^{20}}{1 - \frac{1}{1{,}03}}$$

Vi løser i CAS:

![CAS: Annuitetslån](/img/user/_resources/s2-v19-2-4.png)

Fra linje 2 leser vi av $\underline{\underline{T \approx 53\,773 \text{ kr}}}$.

### b

Avdraget er konstant: $\frac{800\,000}{20} = 40\,000 \text{ kr}$.

Renten i termin $n$ er $0{,}03 \cdot (800\,000 - (n-1) \cdot 40\,000)$. Renten avtar med $0{,}03 \cdot 40\,000 = 1\,200 \text{ kr}$ per termin.

Terminbeløpene er $64\,000, \; 62\,800, \; 61\,600, \ldots$ som er en aritmetisk følge med $a_1 = 64\,000$ og $d = -1\,200$.

Siste terminbeløp: $a_{20} = 64\,000 + 19 \cdot (-1\,200) = 41\,200$

$$s_{20} = \frac{a_1 + a_{20}}{2} \cdot 20 = \frac{64\,000 + 41\,200}{2} \cdot 20 = \underline{\underline{1\,052\,000 \text{ kr}}}$$

### c

For et serielån med avdrag $40\,000$ og rentesats $r$ per år:

Terminbeløp i termin $n$: $40\,000 + r \cdot (800\,000 - (n-1) \cdot 40\,000)$

Summen av alle terminbeløpene:

$$\sum_{n=1}^{20} \left(40\,000 + r \cdot (800\,000 - (n-1) \cdot 40\,000)\right) = 1\,000\,000$$

$$20 \cdot 40\,000 + r \cdot \sum_{n=1}^{20}(800\,000 - (n-1) \cdot 40\,000) = 1\,000\,000$$

$$800\,000 + r \cdot \frac{800\,000 + 420\,000}{2} \cdot 20 = 1\,000\,000$$

$$800\,000 + r \cdot 8\,400\,000 = 1\,000\,000$$

$$r = \frac{200\,000}{8\,400\,000} \approx \underline{\underline{0{,}0238 = 2{,}38 \, \%}}$$


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hypotesetest-om-russetid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hypotesetest om russetid

Tidligere statistikk fra en skole viser at 32 % av elevene i Vg3 hadde én eller flere timer fravær i russetiden.  

Vi trekker tilfeldig ut 27 elever i Vg3. Vi antar at sannsynligheten for at en tilfeldig valgt elev har fravær, er $p=0{,}32$ og er uavhengig av de andre elevenes fravær.  

>[!oppgave]
>a) Bestem sannsynligheten for at minst 20 av disse elevene ikke har fravær i russetiden.  

Ledelsen ved skolen hadde en mistanke om at det nye fraværsreglementet som ble innført i august 2016, ville føre til mindre fravær. Før russetiden startet, satte de derfor opp to hypoteser som de ønsket å teste.  

$$
\begin{aligned}
H_{0}&: \quad p=0{,}32 \\
H_{1}&: \quad p<0{,}32
\end{aligned}
$$

De ønsket å bruke et signifikansnivå på 5 %.  

Det var 120 elever i Vg3 på skolen dette skoleåret.  

>[!oppgave]
>b) Hva er det høyeste antall elever som kan ha fravær i russetiden, for at $H_{0}$ skal forkastes?

## Fasit

a) $P(X \leq 7) \approx 0{,}33$
b) Høyst 29 elever med fravær

## Løsningsforslag

### a

La $X$ = antall elever av de 27 som har fravær. $X$ er binomisk fordelt med $n = 27$ og $p = 0{,}32$.

«Minst 20 ikke har fravær» betyr at høyst $27 - 20 = 7$ elever har fravær, altså $X \leq 7$.

$$P(X \leq 7) \approx \underline{\underline{0{,}33}}$$

**Sannsynligheten for at minst 20 av 27 elever ikke har fravær er $\underline{\underline{0{,}33}}$.**

>[!tip] Alternativ metode
>
>La $Y$ = antall elever uten fravær. $Y$ er binomisk fordelt med $n = 27$ og $p = 0{,}68$.
>
>Da er «minst 20 ikke har fravær» direkte $Y \geq 20$:
>$$P(Y \geq 20) \approx 0{,}33$$
>
>Samme svar, men uten å måtte snu på problemstillingen.

### b

La $X$ = antall elever med fravær blant de 120. Under $H_0$ er $X$ binomisk fordelt med $n = 120$ og $p = 0{,}32$. Vi legger inn i GeoGebra og justerer på grensen helt fram til vi finner en sannsynlighet som ligger under signifikansnivået $\alpha$.

![](/img/user/_resources/s2-v19-2-5b-gg.png){width=40%}

$$P(X \leq 29) \approx 0{,}038 < 0{,}05 \quad \checkmark$$
$$P(X \leq 30) \approx 0{,}059 > 0{,}05 \quad \times$$

**Det høyeste antallet elever som kan ha fravær for at $H_0$ forkastes, er $\underline{\underline{29}}$.**


</div></div>


---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"h23","date":"2023-11-14","del1_tid":1,"del2_tid":4,"title":"R1 eksamen H2023","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r1-eksamen-h2023/","permalink":"/eksamener/r1-eksamen-h2023/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"h23","date":"2023-11-14","del1_tid":1,"del2_tid":4,"title":"R1 eksamen H2023","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Deriver x ln(x)](https://matematikkoppgaver.vercel.app/deriver-x-ln-x/) | derivasjon, logaritmer | × |
| [1-2](#oppgave-1-2) | [Sorter tallene i riktig rekkefølge](https://matematikkoppgaver.vercel.app/sorter-tallene-i-riktig-rekkefolge/) | logaritmer | × |
| [1-3](#oppgave-1-3) | [Vektorer til å bestemme sidekanter og vinkler i trekant](https://matematikkoppgaver.vercel.app/vektorer-til-a-bestemme-sidekanter-og-vinkler-i-trekant/) | vektorer | × |
| [1-4](#oppgave-1-4) | [Tolk og fiks program som finner bunnpunkt](https://matematikkoppgaver.vercel.app/tolk-og-fiks-program-som-finner-bunnpunkt/) | programmering, derivasjon | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Konsentrasjon i kjemisk reaksjon](https://matematikkoppgaver.vercel.app/konsentrasjon-i-kjemisk-reaksjon/) | regresjon, eksponentialfunksjoner, modellering, derivasjon | × |
| [2-2](#oppgave-2-2) | [Stykkevis funksjon med parameter k](https://matematikkoppgaver.vercel.app/stykkevis-funksjon-med-parameter-k/) | kontinuitet, derivasjon, delt forskrift, funksjoner, funksjonsdrøfting | × |
| [2-3](#oppgave-2-3) | [Påstander om tredjegradsfunksjon](https://matematikkoppgaver.vercel.app/pastander-om-tredjegradsfunksjon/) | funksjonsdrøfting, derivasjon, argumentasjon | ✔︎ |
| [2-4](#oppgave-2-4) | [Kasse uten lokk](https://matematikkoppgaver.vercel.app/kasse-uten-lokk/) | optimering, derivasjon, geometri | × |
| [2-5](#oppgave-2-5) | [Ishockeypuck med vektorfunksjon](https://matematikkoppgaver.vercel.app/ishockeypuck-med-vektorfunksjon/) | vektorer, derivasjon, modellering | × |
| [2-6](#oppgave-2-6) | [Cauchys middelverdisetning](https://matematikkoppgaver.vercel.app/cauchys-middelverdisetning/) | derivasjon, programmering, bevis, argumentasjon | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/deriver-x-ln-x/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Deriver x ln(x)

Deriver funksjonen

$$
f(x)=x^{2} \cdot \ln(x)
$$

## Fasit

$f'(x)=x(2\ln (x)+1)$

## Løsningsforslag

Vi bruker produktregelen $(uv)' = u'v + uv'$ med

$$u = x^2 \quad \Rightarrow \quad u' = 2x$$

$$v = \ln(x) \quad \Rightarrow \quad v' = \frac{1}{x}$$

Da får vi

$$f'(x) = \textcolor{seagreen}{2x} \cdot \ln(x) + x^2 \cdot \textcolor{steelblue}{\frac{1}{x}}$$

$$= 2x\ln(x) + x$$

$$= \mathbf{\underline{\underline{x(2\ln(x)+1)}}}$$

</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sorter-tallene-i-riktig-rekkefolge/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sorter tallene i riktig rekkefølge

Skriv uttrykkene nedenfor i stigende rekkefølge.

$$
2 \ln e^{3}\quad, \quad 3 \lg 70 \quad,\quad e^{3 \ln 2}
$$

Husk å begrunne svaret.

## Fasit

$3 \lg 70 < 2 \ln e^{3} < e^{3 \ln 2}$, det vil si $3 \lg 70 < 6 < 8$.

## Løsningsforslag

Vi forenkler hvert uttrykk algebraisk.

**$2 \ln e^{3}$**

Vi bruker logaritmeregelen $\ln e^{x} = x$:

$$2 \ln e^{3} = 2 \cdot 3 = \underline{6}$$

**$e^{3 \ln 2}$**

Vi bruker at $a \ln b = \ln b^{a}$, og deretter at $e^{\ln x} = x$:

$$e^{3 \ln 2} = e^{\ln 2^{3}} = 2^{3} = \underline{8}$$

**$3 \lg 70$**

Vi argumenterer uten kalkulator. Siden $10 < 70 < 100$, gjelder

$$\lg 10 < \lg 70 < \lg 100 \quad \Longrightarrow \quad 1 < \lg 70 < 2$$

Derfor er $3 < 3 \lg 70 < 6$.

Vi vet altså at $3 \lg 70$ er mellom 3 og 6, og dermed **mindre enn 6**.

**Rekkefølge (stigende):**

$$\boxed{3 \lg 70 \;<\; 2 \ln e^{3} = 6 \;<\; e^{3 \ln 2} = 8}$$

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vektorer-til-a-bestemme-sidekanter-og-vinkler-i-trekant/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vektorer til å bestemme sidekanter og vinkler i trekant


I trekanten $ABC$ er $A(3, 1)$, $B(2, -2)$ og $C(5, 2)$.

>[!oppgave]
> a) Avgjør ved hjelp av vektorregning hvilken side av trekanten som er kortest.
> b) Avgjør ved hjelp av vektorregning om noen av vinklene er $90\degree$.

## Fasit

a) $AC$ er kortest ($|AC| = \sqrt{5} \approx 2{,}24$)
b) Nei, ingen av vinklene er $90\degree$.

## Løsningsforslag

### a

Vi finner lengden til alle tre sidene ved å beregne de tre sidevektorene.

$$\vec{AB} = B - A = (2-3, \; -2-1) = (-1, -3)$$

$$|\vec{AB}| = \sqrt{(-1)^2 + (-3)^2} = \sqrt{1+9} = \sqrt{10} \approx 3{,}16$$

$$\vec{AC} = C - A = (5-3, \; 2-1) = (2, 1)$$

$$|\vec{AC}| = \sqrt{2^2 + 1^2} = \sqrt{4+1} = \sqrt{5} \approx 2{,}24$$

$$\vec{BC} = C - B = (5-2, \; 2-(-2)) = (3, 4)$$

$$|\vec{BC}| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5$$

Vi sammenligner: $\sqrt{5} < \sqrt{10} < 5$, det vil si $|AC| < |AB| < |BC|$.

**$AC$ er den korteste siden med lengde $\underline{\underline{\sqrt{5} \approx 2{,}24}}$.**

### b

En vinkel i trekanten er $90\degree$ hvis og bare hvis de to sidevektorene ut fra det hjørnet er ortogonale, det vil si at prikkproduktet er null.

**Vinkel i $A$** — vektorene $\vec{AB}$ og $\vec{AC}$:

$$\vec{AB} \cdot \vec{AC} = (-1) \cdot 2 + (-3) \cdot 1 = -2 - 3 = -5 \neq 0$$

Ikke $90\degree$ i $A$.

**Vinkel i $B$** — vektorene $\vec{BA} = -\vec{AB} = (1, 3)$ og $\vec{BC} = (3, 4)$:

$$\vec{BA} \cdot \vec{BC} = 1 \cdot 3 + 3 \cdot 4 = 3 + 12 = 15 \neq 0$$

Ikke $90\degree$ i $B$.

**Vinkel i $C$** — vektorene $\vec{CA} = -\vec{AC} = (-2, -1)$ og $\vec{CB} = -\vec{BC} = (-3, -4)$:

$$\vec{CA} \cdot \vec{CB} = (-2) \cdot (-3) + (-1) \cdot (-4) = 6 + 4 = 10 \neq 0$$

Ikke $90\degree$ i $C$.

Siden intet prikkprodukt er null, er **ingen av vinklene $\underline{\underline{90\degree}}$**.

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tolk-og-fiks-program-som-finner-bunnpunkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tolk og fiks program som finner bunnpunkt

Funksjonen $f$ er gitt ved

$$
f(x)=2x^{2}-9x-2
$$

Egil ønsker å lage et program som regner ut koordinatene til bunnpunktet på grafen til $f$. Han har skrevet koden nedenfor.

```python ln
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 1
    
print("Bunnpunktet er", (a, f(a)))
```

Programmet gir utskriften `Bunnpunktet er (3, -11)`

>[!oppgave]
> a) Forklar hvilken strategi Egil har brukt.

Svaret han får, er ikke riktig.

>[!oppgave]
> b) Foreslå en endring i koden som vil gi Egil et riktigere svar.

## Fasit

a) Egil sjekker om grafen synker ved å beregne tilnærmet stigningstall. Løkken stopper ved $a = 3$, og programmet printer $(3, -11)$.
b) Endre `a = a + 1` til `a = a + 0.01`

## Løsningsforslag

### a

Funksjonen `df(x, h)` beregner et tilnærmet stigningstall (den deriverte) i punktet $x$:

$$\texttt{df}(a, h) = \frac{f(a+h) - f(a)}{h}$$

Egils strategi er å starte i $a = 0$ og flytte seg til høyre i steg på 1. Så lenge `df(a, h) < 0` synker grafen — man har altså ikke nådd bunnpunktet ennå. Når stigningstallet ikke lenger er negativt (grafen har sluttet å synke), betyr det at bunnpunktet er passert, og løkken stopper.

Det ekte bunnpunktet ligger i $x = 2{,}25$. Siden $a$ øker fra 0 i heltallssteg, er verdiene som testes $a = 0, 1, 2, 3$. Ved $a = 2$ er `df(2, 0.001)` $\approx 4 \cdot 2 - 9 = -1 < 0$, så løkken fortsetter. Ved $a = 3$ er `df(3, 0.001)` $\approx 4 \cdot 3 - 9 = 3 > 0$, og betingelsen `df(a, h) < 0` er usann — løkken stopper.

Programmet printer derfor $(3,\ f(3)) = (3,\ -11)$, selv om det ekte bunnpunktet er $(2{,}25,\ -12{,}125)$.

### b

Problemet er at steglengden $1$ er for stor — programmet «hopper over» bunnpunktet. Ved å bruke et mindre steg vil $a$ komme mye nærmere $x = 2{,}25$ når løkken stopper.

Endre linje 8 fra

```python
    a = a + 1
```

til

```python
    a = a + 0.01
```

Da stopper løkken ved $a \approx 2{,}25$ og programmet printer et bunnpunkt som er langt nærmere det ekte svaret **$\mathbf{(2{,}25,\ -12{,}125)}$**.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/konsentrasjon-i-kjemisk-reaksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Konsentrasjon i kjemisk reaksjon

Tabellen nedenfor viser konsentrasjonen, i millimol per liter (mmol/L), av et stoff, $t$ sekunder etter at en kjemisk reaksjon startet. Når det har gått lang tid, vil konsentrasjonen av stoffet stabilisere seg på $2{,}5 \mathrm{~mmol/L}$.

| Tid (s)                           | 0    | 10    | 20    | 30    | 40    | 50    | 60    |
|-----------------------------------|------|-------|-------|-------|-------|-------|-------|
| Konsentrasjon (mmol/L)            | 0    | 0,28  | 0,53  | 0,76  | 0,95  | 1,13  | 1,28  |
| Konsentrasjon $-\,2{,}5$ (mmol/L) | −2,5 | −2,22 | −1,97 | −1,74 | −1,55 | −1,37 | −1,22 |

>[!oppgave]
>a) Bruk blant annet regresjon til å vise at funksjonen $f$ gitt ved
>$$f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$$
>er en god modell for konsentrasjonen av stoffet $t$ sekunder etter at reaksjonen startet.
>b) Hvor lang tid vil det ta før konsentrasjonen er $2{,}0 \mathrm{~mmol/L}$?
>c) Hvor lang tid vil det ta før konsentrasjonen øker med mindre enn $0{,}001 \mathrm{~mmol/L}$ per sekund?

## Fasit

a) Regresjon på de forskjøvede verdiene $(t,\, c(t)-2{,}5)$ gir $a \approx -2{,}5$ og $b \approx 0{,}99$, som bekrefter modellen $f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$.
b) $\underline{\underline{t \approx 160 \text{~sekunder}}}$
c) $\underline{\underline{t \approx 321 \text{~sekunder}}}$

## Løsningsforslag

### a

Tabellen i oppgaven inkluderer en rad med de forskjøvede verdiene $c(t) - 2{,}5$. Siden $f(t) \to 2{,}5$ når $t \to \infty$, forventer vi at $f(t) - 2{,}5$ følger en eksponentialfunksjon av typen $g(t) = a \cdot b^t$.

Vi logger de forskjøvede verdiene:

$$\ln|c(t) - 2{,}5| = \ln|a| + t \cdot \ln b$$

Dette er en lineær funksjon av $t$. Vi utfører lineær regresjon (eller eksponentialregresjon) på punktene

$$(t,\ c(t) - 2{,}5) = (0,\ {-2{,}5}),\ (10,\ {-2{,}22}),\ (20,\ {-1{,}97}),\ \ldots,\ (60,\ {-1{,}22})$$

og får $a \approx -2{,}5$ og $b \approx 0{,}99$. Dermed er

$$f(t) = 2{,}5 + g(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$$

Grafen nedenfor viser at modellkurven ligger svært nært datapunktene:

![Datapunkter og modellkurve for konsentrasjonen](/img/user/_resources/r1-h23-2-1-graf.png){width=80%}

### b

Vi løser $f(t) = 2{,}0$ i GeoGebra CAS (se linje 2 i utklippet nedenfor):

$$2{,}5 - 2{,}5 \cdot 0{,}99^t = 2{,}0$$

$$0{,}99^t = \frac{0{,}5}{2{,}5} = 0{,}2$$

$$t = \frac{\ln 0{,}2}{\ln 0{,}99} \approx \underline{\underline{160 \text{~sekunder}}}$$

**Det tar omtrent 160 sekunder før konsentrasjonen er $2{,}0 \mathrm{~mmol/L}$.**

### c

Vi deriverer $f(t) = 2{,}5 - 2{,}5 \cdot 0{,}99^t$ og bruker at $0{,}99^t = e^{t \ln 0{,}99}$:

$$f'(t) = -2{,}5 \cdot \ln(0{,}99) \cdot 0{,}99^t$$

Siden $\ln(0{,}99) < 0$ er $f'(t) > 0$, det vil si konsentrasjonen øker hele tiden (som forventet). Vi ønsker å finne når $f'(t) < 0{,}001$, det vil si vi løser $f'(t) = 0{,}001$ (se linje 5 i CAS-utklippet):

$$-2{,}5 \cdot \ln(0{,}99) \cdot 0{,}99^t = 0{,}001$$

$$0{,}99^t = \frac{0{,}001}{-2{,}5 \cdot \ln(0{,}99)} \approx 0{,}0398$$

$$t = \frac{\ln(0{,}0398)}{\ln(0{,}99)} \approx \underline{\underline{321 \text{~sekunder}}}$$

**Etter omtrent 321 sekunder øker konsentrasjonen med mindre enn $0{,}001 \mathrm{~mmol/L}$ per sekund.**

![GeoGebra CAS: definisjon av f, løsning av b) og c)](/img/user/_resources/r1-h23-2-1.png){width=80%}


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/stykkevis-funksjon-med-parameter-k/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Stykkevis funksjon med parameter k

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} -x^2 + (2+k)x\text{,} & x < k \\ x^2 + (2-k)x\text{,} \quad  & x \geq k \end{cases}$$

der $k \in \mathbb{R}$.

>[!oppgave]
>a) Forklar at $f$ er en kontinuerlig funksjon for alle verdier av $k$.
>b) Bestem $k$ slik at $f$ blir deriverbar i $x = k$.
>c) For hvilke verdier av $k$ har $f$ en omvendt funksjon?

## Fasit

a) $f$ er kontinuerlig for alle $k \in \mathbb{R}$.
b) $\underline{\underline{k = 0}}$
c) $\underline{\underline{k \in [-2,\, 2]}}$

## Løsningsforslag

![GeoGebra CAS-utregning for oppgave 2](/img/user/_resources/r1-h23-2-2.png)

### a

Hvert av uttrykkene $-x^2 + (2+k)x$ og $x^2 + (2-k)x$ er polynomer, og polynomer er kontinuerlige overalt. Det eneste stedet vi må sjekke kontinuitet spesielt er i bruddpunktet $x = k$.

$f$ er kontinuerlig i $x = k$ hvis og bare hvis

$$\lim_{x \to k^-} f(x) = \lim_{x \to k^+} f(x) = f(k)$$

Vi beregner grenseverdiene:

$$\lim_{x \to k^-} f(x) = -k^2 + (2+k)k = -k^2 + 2k + k^2 = 2k$$

$$\lim_{x \to k^+} f(x) = k^2 + (2-k)k = k^2 + 2k - k^2 = 2k$$

$$f(k) = k^2 + (2-k)k = 2k$$

Alle tre er lik $2k$ for alle verdier av $k$. Dermed er $f$ kontinuerlig i $x = k$ for alle $k \in \mathbb{R}$, og siden hvert deluttrykk er et polynom, er **$f$ kontinuerlig for alle $k$**.

### b

For at $f$ skal være deriverbar i $x = k$ må venstre- og høyrederiverte være like.

Vi deriverer hvert deluttrykk:

$$f_1'(x) = -2x + (2+k) \quad \Rightarrow \quad f_1'(k) = -2k + 2 + k = 2 - k$$

$$f_2'(x) = 2x + (2-k) \quad \Rightarrow \quad f_2'(k) = 2k + 2 - k = 2 + k$$

Vi setter venstre- og høyrederiverte like (se linje 10 i CAS-utklippet):

$$2 - k = 2 + k \implies -2k = 0 \implies \textbf{$\underline{\underline{k = 0}}$}$$

### c

$f$ har en omvendt funksjon hvis og bare hvis $f$ er strengt monoton (enten strengt voksende eller strengt avtagende) på hele $\mathbb{R}$.

**Strengt avtagende** er ikke mulig: $f_1(x) = -x^2 + (2+k)x$ er en nedovervendt parabel med toppunkt i $x = \frac{2+k}{2}$. For $x < k$ og $k < \frac{2+k}{2}$ (dvs. $k < 2$) er $f_1$ voksende i deler av $(-\infty, k)$, og for $k \geq 2$ er toppunktet utenfor $(-\infty, k)$, men da er $f_2$ oppovervendt og voksende på $[k, \infty)$. En strengt avtagende $f$ er dermed ikke mulig for noe $k$.

**Strengt voksende** krever to ting:

1. $f_1$ må være voksende på hele $(-\infty, k)$: $f_1$ er voksende til venstre for toppunktet $x = \frac{2+k}{2}$, så vi trenger

   $$\frac{2+k}{2} \geq k \implies 2 + k \geq 2k \implies k \leq 2$$

2. $f_2$ må være voksende på hele $[k, \infty)$: $f_2$ er en oppovervendt parabel med bunnpunkt i $x = \frac{k-2}{2}$, og er voksende til høyre for bunnpunktet, så vi trenger

   $$\frac{k-2}{2} \leq k \implies k - 2 \leq 2k \implies k \geq -2$$

Kontinuiteten i $x=k$ er allerede sikret (vist i a), så det er tilstrekkelig at begge delene er voksende.

**$f$ har omvendt funksjon for $\underline{\underline{k \in [-2,\, 2]}}$.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pastander-om-tredjegradsfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Påstander om tredjegradsfunksjon

La $f$ være en tredjegradsfunksjon.

Avgjør for hver av påstandene nedenfor om den er sann eller usann. Begrunn svaret.

>[!oppgave]
>a) Påstand 1: Grafen til $f$ har minst ett ekstremalpunkt.
>b) Påstand 2: Alle linjer på formen $y = ax + b$, der $a, b \in \mathbb{R}$, vil skjære grafen til $f$.
>c) Påstand 3: Dersom grafen til $f$ har et vendepunkt for $x = 3$, er $f'(1) = f'(5)$.

## Fasit

a) Usann

## Løsningsforslag

### a
Jeg vet at funksjonen $f(x)=x^{3}$ kun har et terrassepunkt og ingen ekstremalpunkter. Jeg bruker derfor denne funksjonen som et moteksempel til påstanden og konkluderer med at påstanden er feil.

**Påstanden er usann. $f$ trenger ikke ha ekstremalpunkter.**

### b
$f$ har et $x^{3}$-ledd som vil stige eller synke kubisk mye raskere enn $y=ax+b$. Det blir dermed umulig for den rette linja å «ikke bli tatt igjen» av $f$. 

Vi kan også bevise at disse vil skjære hverandre matematisk hvis vi lar $f(x)=cx^{3}+dx^{2}+mx +n$.

$$cx^{3}+dx^{2}+mx +n = ax + b$$ $$cx^{3}+dx^{2}+(m+a)x + (n+b)=0$$
Den siste likningen er en vanlig tredjegradslikning. Disse har alltid en løsning (tredjegradsfunksjoner må alltid krysse $x$-aksen minst en gang). Derfor må $y=ax+b$ skjære $f$ minst ett sted.

**Påstanden er sann. $y=ax+b$ vil alltid skjære $f$ minst ett sted.**

### c
Vi har vendepunkter når $f''(x)=0$. Vi prøver å dobbeltderivere $f$ og sette inn for $f''(3)=0$.
$$
\begin{aligned}
f(x)&=cx^{3}+dx^{2}+mx +n \\
f'(x)&=3cx^{2}+2dx+m\\
f''(x)&=6cx + 2d \\
f''(3)&=0 \\
6c \cdot 3+2d &= 0 \\
18c + 2d &=0\\
d &= -9c
\end{aligned}
$$
Vi sjekker hva $f'(1)$ og $f'(5)$ er og prøver innsettingsmetoden med $d=-9c$.
$$
\begin{aligned}
f'(1)&=3c \cdot 1 ^{2} + 2 d \cdot 1 + m \\
f'(1)&=3c  + 2(-9c) + m \\
f'(1)&=3c-18c+m \\
f'(1)&=-15c +m
\end{aligned}
$$
$$
\begin{aligned}
f'(5)&=3c \cdot 5^{2}+2d \cdot 5+ m \\
f'(5)&=3c \cdot 25+2(-9c) \cdot 5+ m\\
f'(5)&=75c +10 \cdot(-9c) + m\\
f'(5)&=75c -90c + m\\
f'(5)&=-15c + m
\end{aligned}
$$

**Påstanden stemmer. Når $f$ har vendepunkt i $x=3$ så er $f'(1)=f'(5)$.**

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kasse-uten-lokk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kasse uten lokk

Du skal lage en kasse uten lokk. Den skal ha form som et rett prisme. Grunnflaten i kassen skal være kvadratisk. For at vekten ikke skal bli for stor, kan ikke det samlede arealet av platene som brukes til å lage kassen, være mer enn 120 $\mathrm{dm^2}$.

![Kasse uten lokk](/img/user/_resources/s1-h23-2-5.jpeg){width=25%}

>[!oppgave]
>a) Hva er det største volumet kassen kan få dersom sidene i bunnen skal være 5 dm?
>b) Hva er det maksimale volumet kassen kan få?

Du skal lage en slik kasse som rommer 80 $\mathrm{dm^3}$.

>[!oppgave]
>c) Hva er det minste samlede arealet platene kan ha, dersom du skal lage en slik kasse?

## Fasit

a) **$\underline{\underline{V = 118{,}75 \, \mathrm{dm^3}}}$**
b) **$\underline{\underline{V_{\max} = 40\sqrt{10} \approx 126{,}5 \, \mathrm{dm^3}}}$**
c) **$\underline{\underline{A_{\min} = 12\sqrt[3]{20^2} \approx 88{,}4 \, \mathrm{dm^2}}}$**

## Løsningsforslag

La $x$ være sidelengden i bunnen (dm) og $h$ være høyden (dm).

Samlet areal (bunn + 4 sider):

$$A = x^2 + 4xh$$

Volum:

$$V = x^2 \cdot h$$

### a

Setter $x = 5$ og bruker hele arealbudsjettet ($A = 120$):

$$25 + 4 \cdot 5 \cdot h = 120 \implies 20h = 95 \implies h = 4{,}75 \, \mathrm{dm}$$

Volumet blir:

$$V = 5^2 \cdot 4{,}75 = \mathbf{\underline{\underline{118{,}75 \, \mathrm{dm^3}}}}$$

### b

For å maksimere volumet bruker vi hele arealbudsjettet ($A = 120$). Løser $A = 120$ for $h$:

$$h = \frac{120 - x^2}{4x}$$

Setter inn i volumformelen:

$$V(x) = x^2 \cdot \frac{120 - x^2}{4x} = \frac{x(120 - x^2)}{4} = 30x - \frac{x^3}{4}$$

Bruker GeoGebra CAS til å derivere og løse $V'(x) = 0$:

![GeoGebra CAS – optimering av kasse uten lokk](/img/user/_resources/r1-h23-2-4.png)

Fra CAS-utklippet (linje 1–6):

$$V'(x) = 30 - \frac{3}{4}x^2 = 0 \implies x = 2\sqrt{10} \approx 6{,}32 \, \mathrm{dm}$$

$$h = \sqrt{10} \approx 3{,}16 \, \mathrm{dm}$$

$$V_{\max} = 40\sqrt{10} \approx \mathbf{\underline{\underline{126{,}5 \, \mathrm{dm^3}}}}$$

$V'(x)$ skifter fortegn fra $+$ til $-$ i $x = 2\sqrt{10}$, så dette er et maksimum.

### c

Nå er $V = 80 \, \mathrm{dm^3}$. Løser for $h$:

$$h = \frac{80}{x^2}$$

Setter inn i arealformelen:

$$A(x) = x^2 + 4x \cdot \frac{80}{x^2} = x^2 + \frac{320}{x}$$

Bruker GeoGebra CAS til å minimere $A(x)$ (linje 7–12 i utklippet):

$$A'(x) = 2x - \frac{320}{x^2} = 0 \implies 2x^3 = 320 \implies x = 2\sqrt[3]{20} \approx 5{,}43 \, \mathrm{dm}$$

$$h = \frac{80}{(2\sqrt[3]{20})^2} = \frac{80}{4\sqrt[3]{400}} = \frac{20}{\sqrt[3]{400}} = \sqrt[3]{\frac{20^3}{400}} = \sqrt[3]{20} \approx 2{,}71 \, \mathrm{dm}$$

$$A_{\min} = 12\sqrt[3]{20^2} \approx \mathbf{\underline{\underline{88{,}4 \, \mathrm{dm^2}}}}$$

$A'(x)$ skifter fortegn fra $-$ til $+$ i $x = 2\sqrt[3]{20}$, så dette er et minimum.


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ishockeypuck-med-vektorfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ishockeypuck med vektorfunksjon

En ishockeybane er $60 \mathrm{~m}$ lang og $30 \mathrm{~m}$ bred. Vi plasserer et koordinatsystem slik at origo er midt på banen. Se figuren nedenfor.

![Ishockeybane](/img/user/_resources/r1-h23-2-5.jpeg){width=70%}

En hockeyspiller sendte av gårde en puck. Vektorfunksjonen $\vec{r}$ gitt ved

$$\vec{r}(t) = \left[8(e^{-t}-t),\; 5(e^{-t}-t)\right]$$

gir puckens posisjon $t$ sekunder etter at den ble sendt av gårde. Denne vektorfunksjonen gir puckens posisjon helt til den treffer vantet (veggen på banen).

>[!oppgave]
>a) Hvilken fart hadde pucken idet den ble sendt av gårde?
>b) Hvor lang tid gikk det før pucken traff vantet?

En annen hockeyspiller var i posisjonen $P(-18, 11)$ da pucken ble sendt av gårde. Spilleren hadde konstant fart $\vec{v} = [3, -7]$.

>[!oppgave]
>c) Begrunn at denne spilleren ikke ble truffet av pucken.

## Fasit

a) $\underline{\underline{|\vec{r}'(0)| = 2\sqrt{89} \approx 18{,}87 \, \mathrm{m/s}}}$
b) **Pucken treffer lang-vanten etter ca. $3{,}05$ sekunder.**
c) **Spilleren ble ikke truffet av pucken** — pucken beveger seg langs linjen $5x = 8y$, og selv om spillerens bane krysser denne linjen, er spilleren og pucken ikke i samme punkt på samme tidspunkt.

## Løsningsforslag

![GeoGebra CAS-utregning](/img/user/_resources/r1-h23-2-5-cas.png)

### a

Puckens posisjon er gitt ved $\vec{r}(t) = [8(e^{-t} - t),\; 5(e^{-t} - t)]$. Farten er lengden av hastighetsvektoren $\vec{r}'(t)$.

Vi deriverer komponentvis:

$$\vec{r}'(t) = \left[-8e^{-t} - 8,\; -5e^{-t} - 5\right] = -(e^{-t}+1)\cdot[8,\; 5]$$

Ved $t = 0$:

$$\vec{r}'(0) = -(e^{0}+1)\cdot[8,\; 5] = -2\cdot[8,\; 5] = [-16,\; -10]$$

Farten er:

$$|\vec{r}'(0)| = \sqrt{(-16)^2 + (-10)^2} = \sqrt{256 + 100} = \sqrt{356} = 2\sqrt{89}$$

**Pucken hadde fart $\underline{\underline{2\sqrt{89} \approx 18{,}87 \, \mathrm{m/s}}}$ idet den ble sendt av gårde.**

### b

Banen er $60 \, \mathrm{m}$ lang og $30 \, \mathrm{m}$ bred med origo i midten, så $-30 \leq x \leq 30$ og $-15 \leq y \leq 15$.

Vi observerer at $\vec{r}(t) = (e^{-t} - t) \cdot [8,\; 5]$. La $u(t) = e^{-t} - t$. Da er $x(t) = 8u(t)$ og $y(t) = 5u(t)$.

Siden $u'(t) = -e^{-t} - 1 < 0$ for alle $t$, avtar $u(t)$ strengt, og dermed avtar både $x$ og $y$ fra startverdiene $x(0) = 8$ og $y(0) = 5$. Pucken beveger seg mot negative $x$- og $y$-verdier, så de aktuelle grensene er $x = -30$ og $y = -15$.

Vi undersøker hvilken grense som nås først ved å løse to likninger:

- $y = -15$: $5(e^{-t} - t) = -15 \;\Rightarrow\; e^{-t} - t = -3$. Numerisk løsning: $t \approx 3{,}05$.
- $x = -30$: $8(e^{-t} - t) = -30 \;\Rightarrow\; e^{-t} - t = -3{,}75$. Numerisk løsning: $t \approx 3{,}77$.

Siden $u(t)$ er avtagende, nås $u = -3$ (tilsvarer $y = -15$) før $u = -3{,}75$ (tilsvarer $x = -30$).

Kontroll: ved $t \approx 3{,}05$ er $x = 8 \cdot (-3) = -24 \, \mathrm{m}$, som er innenfor banen ($-30 \leq -24 \leq 30$ ✓).

**Pucken treffer lang-vanten ($y = -15$) etter ca. $\underline{\underline{3{,}05 \, \mathrm{sekunder}}}$.**

### c

Puckens posisjon er alltid $\vec{r}(t) = u(t) \cdot [8,\; 5]$ der $u(t) = e^{-t} - t$. Det betyr at pucken beveger seg langs den rette linjen gjennom origo i retning $[8,\; 5]$, altså langs linjen $5x = 8y$.

Spillerens posisjon ved tid $t$ er:

$$\vec{P}(t) = (-18 + 3t,\; 11 - 7t)$$

For at spilleren skal treffes av pucken, må $\vec{P}(t) = \vec{r}(t)$ for et tidspunkt $t \geq 0$. Dette gir likningssystemet:

$$\begin{cases} -18 + 3t = 8(e^{-t} - t) \\ 11 - 7t = 5(e^{-t} - t) \end{cases}$$

Fra begge likninger kan vi isolere $e^{-t} - t$:

- Ligning 1: $e^{-t} - t = \dfrac{3t - 18}{8}$
- Ligning 2: $e^{-t} - t = \dfrac{11 - 7t}{5}$

Setter de to uttrykkene like hverandre:

$$\frac{3t - 18}{8} = \frac{11 - 7t}{5}$$

$$5(3t - 18) = 8(11 - 7t)$$

$$15t - 90 = 88 - 56t$$

$$71t = 178 \quad \Rightarrow \quad t = \frac{178}{71} \approx 2{,}51$$

Dette er det eneste tidspunktet der spillerens bane og puckens bane er på samme rette linje. Vi sjekker om de er i samme punkt:

- Spillerens posisjon: $(-18 + 3 \cdot 2{,}51,\; 11 - 7 \cdot 2{,}51) \approx (-10{,}47,\; -6{,}55)$
- Puckens posisjon: $(8(e^{-2{,}51} - 2{,}51),\; 5(e^{-2{,}51} - 2{,}51)) \approx (-19{,}40,\; -12{,}13)$

De to posisjonene er ulike — selv om banen til spilleren krysser linjen pucken beveger seg langs, er de ikke i samme punkt på samme tid.

**Spilleren ble dermed ikke truffet av pucken.**


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/cauchys-middelverdisetning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Cauchys middelverdisetning

I 1823 viste matematikeren Augustin Louis Cauchy følgende setning:

> [!info]
> Anta at en funksjon $f$ er kontinuerlig i det lukkede intervallet $[a, b]$ og deriverbar i det åpne intervallet $\langle a, b \rangle$. Da finnes en $c \in \langle a, b \rangle$ slik at
> $$f'(c) = \frac{f(b) - f(a)}{b - a}\text{.}$$

La $f(x) = x^2 + 3x + 1$.

>[!oppgave]
>a) Bestem $c$ når $a = 1$ og $b = 3$.
>b) Lag et program som bestemmer $c$, når du gir verdier til $a$ og $b$.
>c) Bruk programmet til å undersøke om det finnes en sammenheng mellom verdien av $c$ og verdiene av $a$ og $b$.

Anne påstår at dersom $a = 2$ og $b = 8$, så vil $c = 5$ for alle andregradsfunksjoner.

>[!oppgave]
>d) Avgjør om Annes påstand er riktig.

## Fasit

a) $\underline{\underline{c = 2}}$
b) Se program i løsningsforslaget.
c) $c$ er alltid midtpunktet $\frac{a+b}{2}$.
d) Annes påstand er **riktig** for alle andregradsfunksjoner (med $p \neq 0$).

## Løsningsforslag

### a

Vi skal finne $c \in \langle 1, 3 \rangle$ slik at $f'(c) = \dfrac{f(3) - f(1)}{3 - 1}$.

Vi beregner først høyresiden:

$$\frac{f(3) - f(1)}{3 - 1} = \frac{(9 + 9 + 1) - (1 + 3 + 1)}{2} = \frac{19 - 5}{2} = 7$$

Siden $f'(x) = 2x + 3$, løser vi likningen $f'(c) = 7$:

$$2c + 3 = 7$$

I GeoGebra CAS:

![GeoGebra CAS – løsning del a) og del d)](/img/user/_resources/r1-h23-2-6.png)

CAS gir $c = 2$. Vi sjekker at $c = 2 \in \langle 1, 3 \rangle$ ✓.

**$\underline{\underline{c = 2}}$**

### b

Programmet beregner den midlere stigningen $m = \dfrac{f(b) - f(a)}{b - a}$ og leter så trinnvis fra $x = a$ til $f'(x) \approx m$:

```python
def f(x):
    return x**2 + 3*x + 1

a = 1
b = 3
m = (f(b) - f(a)) / (b - a)     # midlere stigning

h = 0.0001
c = a
while (f(c + h) - f(c)) / h < m:   # finn c der f'(c) ≈ m
    c = c + h

print("c =", round(c, 4))
```

Programmet skriver ut `c = 2.0`.

### c

Ved å kjøre programmet for ulike verdier av $a$ og $b$ (for eksempel $a = 0, b = 4$ gir $c = 2$; $a = -2, b = 2$ gir $c = 0$; $a = 1, b = 5$ gir $c = 3$) ser vi at $c$ alltid er lik midtpunktet:

$$c = \frac{a + b}{2}$$

### d

Vi viser dette analytisk for en generell andregradsfunksjon $h(x) = px^2 + qx + r$ med $p \neq 0$.

**Midlere stigning:**

$$\frac{h(b) - h(a)}{b - a} = \frac{p(b^2 - a^2) + q(b - a)}{b - a} = \frac{(b - a)(p(b + a) + q)}{b - a} = p(a + b) + q$$

(CAS bekrefter: se linje 4 i skjermbildet over — uttrykket forenkles til $ap + pb + q$.)

**Setter $h'(c)$ lik midlere stigning:**

$$h'(c) = 2pc + q = p(a + b) + q$$

$$2pc = p(a + b) \implies c = \frac{a + b}{2}$$

(CAS bekrefter i linje 5: $c = \frac{1}{2}a + \frac{1}{2}b$.)

Siden $c = \dfrac{a+b}{2}$ gjelder for **alle** andregradsfunksjoner med $p \neq 0$, og spesielt for $a = 2$, $b = 8$:

$$c = \frac{2 + 8}{2} = 5$$

**Annes påstand er $\underline{\underline{\text{riktig}}}$.**


</div></div>


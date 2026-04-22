---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"h19","date":"2019-11-19","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2019","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-h2019/","permalink":"/eksamener/s2-eksamen-h2019/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"h19","date":"2019-11-19","del1_tid":3,"del2_tid":2,"title":"S2 eksamen H2019","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 3 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av funksjoner](https://matematikkoppgaver.vercel.app/derivasjon-av-funksjoner/) | derivasjon, logaritmer, eksponentialfunksjoner, rasjonale funksjoner | × |
| [1-2](#oppgave-1-2) | [Aritmetisk rekke med sum](https://matematikkoppgaver.vercel.app/aritmetisk-rekke-med-sum/) | rekker | × |
| [1-3](#oppgave-1-3) | [Uendelig geometrisk rekke og desimaltall](https://matematikkoppgaver.vercel.app/uendelig-geometrisk-rekke-og-desimaltall/) | rekker, uendelig rekke | × |
| [1-4](#oppgave-1-4) | [Likningssystem med parameter](https://matematikkoppgaver.vercel.app/likningssystem-med-parameter/) | likningssystem | × |
| [1-5](#oppgave-1-5) | [Polynomdivisjon og funksjonsdrøfting](https://matematikkoppgaver.vercel.app/polynomdivisjon-og-funksjonsdrofting/) | polynomdivisjon, funksjonsdrøfting, derivasjon | × |
| [1-6](#oppgave-1-6) | [Logistisk vekstmodell for gås](https://matematikkoppgaver.vercel.app/logistisk-vekstmodell-for-gas/) | logistisk funksjon, modellering | × |
| [1-7](#oppgave-1-7) | [Insektskader på epletrær](https://matematikkoppgaver.vercel.app/insektskader-pa-epletraer/) | forventningsverdi, varians, normalfordeling, sannsynlighet | × |

**Del 2** — 2 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Juleprodukter på bondegård](https://matematikkoppgaver.vercel.app/juleprodukter-pa-bondegard/) | likningssystem | × |
| [2-2](#oppgave-2-2) | [Inntektsfunksjon med eksponential](https://matematikkoppgaver.vercel.app/inntektsfunksjon-med-eksponential/) | optimering, derivasjon, eksponentialfunksjoner, økonomi | × |
| [2-3](#oppgave-2-3) | [Løpstid til Krigsskolen](https://matematikkoppgaver.vercel.app/lopstid-til-krigsskolen/) | normalfordeling, hypotesetest | × |
| [2-4](#oppgave-2-4) | [Lønnsøkning og videreutdanning](https://matematikkoppgaver.vercel.app/lonnsokning-og-videreutdanning/) | rekker, geometrisk vekst, økonomi | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-funksjoner/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av funksjoner

Deriver funksjonene

>[!oppgave]
>a) $f(x) = \dfrac{1}{2} \ln x$
>b) $g(x) = 3x \cdot e^{2x}$
>c) $h(x) = \dfrac{x^2 + 1}{x - 3}$

## Fasit

a) $f'(x) = \dfrac{1}{2x}$
b) $g'(x) = 3e^{2x} + 6xe^{2x} = 3e^{2x}(1 + 2x)$
c) $h'(x) = \dfrac{x^2 - 6x - 1}{(x-3)^2}$

## Løsningsforslag

### a

$$f(x) = \frac{1}{2} \ln x$$

$$\underline{\underline{f'(x) = \frac{1}{2} \cdot \frac{1}{x} = \frac{1}{2x}}}$$

### b

$$g(x) = 3x \cdot e^{2x}$$

Vi bruker produktregelen med $u = 3x$ og $v = e^{2x}$:

$$g'(x) = 3 \cdot e^{2x} + 3x \cdot 2e^{2x} = \underline{\underline{3e^{2x}(1 + 2x)}}$$

### c

$$h(x) = \frac{x^2 + 1}{x - 3}$$

Vi bruker brøkregelen med $u = x^2 + 1$ og $v = x - 3$:

$$h'(x) = \frac{2x(x - 3) - (x^2 + 1) \cdot 1}{(x - 3)^2} = \frac{2x^2 - 6x - x^2 - 1}{(x - 3)^2} = \underline{\underline{\frac{x^2 - 6x - 1}{(x - 3)^2}}}$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetisk-rekke-med-sum/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetisk rekke med sum

I en aritmetisk rekke er $a_1 = -8$ og $a_4 = 7$.

>[!oppgave]
>a) Bestem en formel for $a_n$ uttrykt ved $n$.
>b) Vis at $a_{40} = 187$, og bestem summen av de 40 første leddene i rekken.

## Fasit

a) $a_n = 5n - 13$
b) $s_{40} = 3580$

## Løsningsforslag

### a

Vi har $a_1 = -8$ og $a_4 = 7$. Differansen er

$$d = \frac{a_4 - a_1}{4 - 1} = \frac{7 - (-8)}{3} = 5$$

Formelen for det $n$-te leddet:

$$\underline{\underline{a_n = -8 + (n-1) \cdot 5 = 5n - 13}}$$

### b

$$a_{40} = 5 \cdot 40 - 13 = 200 - 13 = 187 \quad \checkmark$$

Summen av de 40 første leddene:

$$s_{40} = \frac{a_1 + a_{40}}{2} \cdot 40 = \frac{-8 + 187}{2} \cdot 40 = \frac{179}{2} \cdot 40 = \underline{\underline{3580}}$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/uendelig-geometrisk-rekke-og-desimaltall/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Uendelig geometrisk rekke og desimaltall

En uendelig geometrisk rekke er gitt ved

$$6 - 3 + \frac{3}{2} - \frac{3}{4} + \frac{3}{8} + \ldots$$

>[!oppgave]
>a) Begrunn at rekken konvergerer, og bestem summen av rekken.

>[!oppgave]
>b) Forklar at desimaltallet $0{,}135135135\ldots$ kan skrives som den uendelige geometriske rekken
>
>$$\frac{135}{1000} + \frac{135}{1000^2} + \frac{135}{1000^3} + \cdots$$
>
>Bruk dette til å skrive tallet $0{,}135135135\ldots$ som en brøk.

## Fasit

a) $s = 4$
b) $\dfrac{5}{37}$

## Løsningsforslag

### a

Rekken $6 - 3 + \frac{3}{2} - \frac{3}{4} + \cdots$ er geometrisk med $a_1 = 6$ og $k = \frac{-3}{6} = -\frac{1}{2}$.

Siden $|k| = \frac{1}{2} < 1$, konvergerer rekken.

$$s = \frac{a_1}{1 - k} = \frac{6}{1 - \left(-\frac{1}{2}\right)} = \frac{6}{\frac{3}{2}} = \underline{\underline{4}}$$

### b

Tallet $0{,}135135135\ldots$ kan skrives som

$$\frac{135}{1000} + \frac{135}{1000^2} + \frac{135}{1000^3} + \cdots$$

fordi hvert ledd plasserer $135$ tre desimalplasser lenger ut.

Dette er en uendelig geometrisk rekke med $a_1 = \frac{135}{1000}$ og $k = \frac{1}{1000}$:

$$s = \frac{\frac{135}{1000}}{1 - \frac{1}{1000}} = \frac{\frac{135}{1000}}{\frac{999}{1000}} = \frac{135}{999} = \underline{\underline{\frac{5}{37}}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/likningssystem-med-parameter/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Likningssystem med parameter

Gitt likningssystemet

$$a \cdot x - 2y + z = 4$$

$$2x + z = 6$$

$$3x + 3y + z = 7$$

Du får vite at $x = -2$ er en del av løsningen.

>[!oppgave]
>Bruk dette til å bestemme verdien av $a$.

## Fasit

$a = 2$

## Løsningsforslag

Vi setter $x = -2$ inn i likning 2 og 3 for å finne $y$ og $z$:

**Likning 2:** $2(-2) + z = 6 \implies z = 10$

**Likning 3:** $3(-2) + 3y + 10 = 7 \implies 3y = 3 \implies y = 1$

Setter $x = -2$, $y = 1$ og $z = 10$ inn i likning 1:

$$a \cdot (-2) - 2 \cdot 1 + 10 = 4 \implies -2a + 8 = 4 \implies \underline{\underline{a = 2}}$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/polynomdivisjon-og-funksjonsdrofting/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Polynomdivisjon og funksjonsdrøfting

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 3x^2 - 4$$

>[!oppgave]
>a) Bruk blant annet polynomdivisjon til å vise at $f(x) = (x + 2)^2 \cdot (x - 1)$.
>b) Bestem eventuelle toppunkt og bunnpunkt på grafen til $f$.
>c) Bestem likningen til vendetangenten til grafen til $f$.
>d) Lag en skisse av grafen til $f$.
>e) Løs likningen $(\ln x)^3 + 3(\ln x)^2 - 4 = 0$.

## Fasit

a) Se løsningsforslag
b) Toppunkt $(-2, 0)$, bunnpunkt $(0, -4)$
c) $y = -3x - 5$
d) Se løsningsforslag
e) $x = e^{-2}$ eller $x = e$

## Løsningsforslag

### a

Vi sjekker at $x = 1$ er en nullpunktsverdi: $f(1) = 1 + 3 - 4 = 0$ ✓

Vi utfører polynomdivisjon $(x^3 + 3x^2 - 4) : (x - 1)$:

$$x^3 + 3x^2 - 4 = (x - 1)(x^2 + 4x + 4)$$

Vi faktoriserer $x^2 + 4x + 4 = (x + 2)^2$, slik at

$$f(x) = (x + 2)^2(x - 1)$$

### b

$$f'(x) = 3x^2 + 6x = 3x(x + 2)$$

$f'(x) = 0$ gir $x = 0$ eller $x = -2$.

$f''(x) = 6x + 6$:

- $f''(-2) = -6 < 0$: **Toppunkt** $(-2, f(-2)) = \underline{\underline{(-2, 0)}}$
- $f''(0) = 6 > 0$: **Bunnpunkt** $(0, f(0)) = \underline{\underline{(0, -4)}}$

### c

Vendepunktet er der $f''(x) = 0$: $6x + 6 = 0 \implies x = -1$.

$f(-1) = -1 + 3 - 4 = -2$ og $f'(-1) = 3 - 6 = -3$.

Vendetangenten:

$$\underline{\underline{y = -3(x - (-1)) + (-2) = -3x - 5}}$$

### d

Grafen har dobbeltrot i $x = -2$ (tangerer $x$-aksen), nullpunkt i $x = 1$, toppunkt $(-2, 0)$, bunnpunkt $(0, -4)$ og vendepunkt $(-1, -2)$.

### e

Vi setter $u = \ln x$:

$$(\ln x)^3 + 3(\ln x)^2 - 4 = 0 \implies u^3 + 3u^2 - 4 = 0$$

Dette er likningen $f(u) = 0$, som fra oppgave a) gir $(u + 2)^2(u - 1) = 0$, altså $u = -2$ eller $u = 1$.

$$\ln x = -2 \implies x = e^{-2} \qquad \text{eller} \qquad \ln x = 1 \implies x = e$$

$$\underline{\underline{x = e^{-2} \approx 0{,}135 \quad \text{eller} \quad x = e \approx 2{,}718}}$$


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-vekstmodell-for-gas/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logistisk vekstmodell for gås

På en øy er hekkebestanden $h$ til en type gås $t$ år etter at en telling startet, gitt ved

$$h(t) = \frac{100}{1 + a \cdot e^{-0{,}0693t}}$$

Du får oppgitt at $h(0) = 20$ og $h''(20) = 0$

>[!oppgave]
>a) Bestem tallet $a$.
>b) Hvilken informasjon gir tallet 100 i denne modellen?
>c) Når øker hekkebestanden raskest?

## Fasit

a) $a = 4$
b) 100 er bæreevnen (øvre grense for hekkebestanden)
c) Etter 20 år

## Løsningsforslag

### a

Vi setter $t = 0$ inn i $h(t) = \frac{100}{1 + a \cdot e^{-0{,}0693t}}$:

$$h(0) = \frac{100}{1 + a \cdot e^0} = \frac{100}{1 + a} = 20$$

$$1 + a = 5 \implies \underline{\underline{a = 4}}$$

### b

Tallet 100 er **bæreevnen** for hekkebestanden. Når $t \to \infty$, nærmer $h(t)$ seg 100. Det betyr at øya kan opprettholde en hekkebestand på maksimalt omtrent **100 gjess**.

### c

Hekkebestanden øker raskest i vendepunktet, der $h''(t) = 0$. Oppgaven opplyser at $h''(20) = 0$.

For en logistisk funksjon inntreffer vendepunktet når $h(t) = \frac{N}{2} = 50$.

Hekkebestanden **øker raskest etter 20 år**.


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/insektskader-pa-epletraer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Insektskader på epletrær

En bestemt type insekt kan skade barken på et epletre.

La $X$ være antall skader som slike insekter har påført barken på et tilfeldig valgt epletre. På en bestemt eplegård er sannsynlighetsfordelingen til $X$ gitt i tabellen nedenfor.

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,45 | 0,30 | 0,10 | 0,10 | 0,05 |

>[!oppgave]
>a) Bestem forventningsverdien $\text{E}(X)$. Hva forteller $\text{E}(X)$ oss i denne situasjonen?
>b) Vis at $\text{Var}(X) = 1{,}4$.

På eplegården velger vi tilfeldig ut 400 epletrær og nummererer dem fra 1 til 400. Vi lar $X_i$ være antall insektskader på tre nummer $i$. Vi antar at $X_i$-ene er uavhengige.

Det totale antallet insektskader som finnes på de 400 trærne, er da gitt ved den stokastiske variabelen

$$S = X_1 + X_2 + \cdots + X_{400}$$

>[!oppgave]
>c) Begrunn at $S$ er tilnærmet normalfordelt.
>Bestem $\text{E}(S)$ og $\text{Var}(S)$.

Ved tilsyn på en eplegård blir 50 tilfeldig valgte trær kontrollert. Dersom det i gjennomsnitt er mer enn 1,2 skader per tre, får eplegården pålegg om å sette i verk tiltak.

På en bestemt eplegård er $Y$ det totale antallet insektskader på 50 tilfeldig valgte trær. Egne undersøkelser viser at $\mu_Y = 50$ og $\sigma_Y = 8$.

>[!oppgave]
>d) Bestem sannsynligheten for at denne eplegården må sette i verk tiltak dersom de får tilsyn.

## Fasit

a) $\text{E}(X) = 1$
b) Se løsningsforslag
c) $\text{E}(S) = 400$, $\text{Var}(S) = 560$
d) $P \approx 0{,}106$

## Løsningsforslag

### a

$$\text{E}(X) = 0 \cdot 0{,}45 + 1 \cdot 0{,}30 + 2 \cdot 0{,}10 + 3 \cdot 0{,}10 + 4 \cdot 0{,}05$$

$$= 0 + 0{,}30 + 0{,}20 + 0{,}30 + 0{,}20 = \underline{\underline{1{,}0}}$$

$\text{E}(X) = 1$ betyr at vi i gjennomsnitt forventer **én insektskade per epletre**.

### b

$$\text{E}(X^2) = 0^2 \cdot 0{,}45 + 1^2 \cdot 0{,}30 + 2^2 \cdot 0{,}10 + 3^2 \cdot 0{,}10 + 4^2 \cdot 0{,}05$$

$$= 0 + 0{,}30 + 0{,}40 + 0{,}90 + 0{,}80 = 2{,}4$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 2{,}4 - 1^2 = \underline{\underline{1{,}4}}$$

### c

Ifølge sentralgrensesetningen er $S = X_1 + X_2 + \cdots + X_{400}$ tilnærmet normalfordelt når $n = 400$ er tilstrekkelig stort (og $X_i$-ene er uavhengige og identisk fordelt).

$$\text{E}(S) = 400 \cdot \text{E}(X) = 400 \cdot 1 = \underline{\underline{400}}$$

$$\text{Var}(S) = 400 \cdot \text{Var}(X) = 400 \cdot 1{,}4 = \underline{\underline{560}}$$

### d

Eplegården må sette i verk tiltak dersom gjennomsnittet er mer enn $1{,}2$ skader per tre, altså dersom $Y > 50 \cdot 1{,}2 = 60$.

$Y$ er tilnærmet normalfordelt med $\mu_Y = 50$ og $\sigma_Y = 8$.

$$z = \frac{60 - 50}{8} = 1{,}25$$

$$P(Y > 60) = 1 - \Phi(1{,}25) = 1 - 0{,}8944 = \underline{\underline{0{,}106}}$$

Det er omtrent 10{,}6 % sannsynlighet for at eplegården får pålegg om tiltak.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/juleprodukter-pa-bondegard/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Juleprodukter på bondegård

En bondegård produserer juleprodukter. De har kalkuner, griser og juletrær.

- Til sammen er det 1284 dyr og juletrær på gården.
- Det samlede antall føtter er 2599. Vi antar at alle kalkunene har to føtter, alle grisene fire føtter og alle juletrærne én fot.
- Det er dobbelt så mange kalkuner som det er griser og juletrær til sammen.

>[!oppgave]
>a) Bruk opplysningene til å sette opp tre likninger med tre ukjente.
>b) Bruk CAS til å løse likningssystemet i oppgave a).
>Hvor mange griser er det på gården?

## Fasit

a) Se løsningsforslag
b) 153 griser

## Løsningsforslag

### a

La $x$ = antall kalkuner, $y$ = antall griser og $z$ = antall juletrær.

Til sammen 1284: $x + y + z = 1284$

Antall føtter: $2x + 4y + z = 2599$

Dobbelt så mange kalkuner: $x = 2(y + z)$

### b

Vi skriver inn i CAS:

![CAS: Juleprodukter](/img/user/_resources/s2-h19-2-1.png)

Vi får $x = 856$, $y = 153$, $z = 275$.

Det er $\underline{\underline{153 \text{ griser}}}$ på gården.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/inntektsfunksjon-med-eksponential/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Inntektsfunksjon med eksponential

En bedrift produserer og selger en vare. Når prisen er $p$ kroner per enhet, er inntekten $I$ kroner per uke gitt ved

$$I(p) = 1500p \cdot e^{-0.05p}, \quad p \in [10, 80]$$

>[!oppgave]
>a) Bruk graftegner til å tegne grafen til $I$.
>b) Bestem den prisen som gir høyest inntekt.

La $x$ være antall solgte enheter av varen en uke.

>[!oppgave]
>c) Vis at $I(x) = 20x \cdot \ln\left(\dfrac{1500}{x}\right)$

Den faste kostnaden for produksjonen er 2000 kroner per uke. I tillegg koster det 15 kroner for hver enhet bedriften produserer.

>[!oppgave]
>d) Bestem det største overskuddet bedriften kan få per uke.

## Fasit

a) Se løsningsforslag
b) $p = 20 \text{ kr}$
c) Se løsningsforslag
d) $\approx 3213 \text{ kr}$

## Løsningsforslag

### a

Vi tegner grafen til $I(p) = 1500p \cdot e^{-0{,}05p}$ for $p \in [10, 80]$ i GeoGebra.

![Graf: Inntektsfunksjon](/img/user/_resources/s2-h19-2-2-graf.png)

### b

Vi finner toppunktet ved å derivere og sette lik null i CAS (se linje 1–2 under).

![CAS: Inntektsfunksjon](/img/user/_resources/s2-h19-2-2.png)

Fra linje 2 i CAS ser vi at $\underline{\underline{p = 20 \text{ kr}}}$ gir høyest inntekt.

### c

Fra $I(p) = 1500p \cdot e^{-0{,}05p}$ og $x = 1500 \cdot e^{-0{,}05p}$ (antall solgte enheter) får vi

$$e^{-0{,}05p} = \frac{x}{1500} \implies p = -\frac{1}{0{,}05} \ln\frac{x}{1500} = 20 \ln\frac{1500}{x}$$

Inntekten uttrykt ved $x$:

$$I(x) = x \cdot p = 20x \cdot \ln\left(\frac{1500}{x}\right) \quad \square$$

### d

Kostnadsfunksjonen er $K(x) = 2000 + 15x$.

Overskuddet er $O(x) = I(x) - K(x) = 20x \cdot \ln\left(\frac{1500}{x}\right) - 2000 - 15x$.

Vi definerer overskuddsfunksjonen i CAS og finner maksimum:

![CAS: Overskudd](/img/user/_resources/s2-h19-2-2b.png)

Fra linje 4 leser vi av $x \approx 260{,}7$ og fra linje 5 at det største overskuddet er $\underline{\underline{\approx 3213 \text{ kr}}}$ per uke.


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/lopstid-til-krigsskolen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Løpstid til Krigsskolen

Denne oppgaven handler om gutter som søker opptak på Krigsskolen.

Vi lar $X$ være tiden en tilfeldig valgt gutt bruker når han løper 3000 meter. Vi antar at $X$ er normalfordelt. Forventningsverdien er 12 minutter og 43 sekunder. Standardavviket er 54 sekunder.

Et av kravene for å komme inn på Krigsskolen er at man løper 3000 meter på under 13 minutter.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt gutt greier tidskravet på 3000-metersløpet.

Pål har som mål å være blant de 5 prosent raskeste på 3000-metersløpet.

>[!oppgave]
>b) Hvor lang tid kan han høyst bruke hvis han skal nå dette målet?

Et spesielt treningsprogram ser ut til å ha god effekt på hvor raskt man løper 3000 meter. Vi ønsker å utføre en hypotesetest for å finne ut om treningsprogrammet har så god effekt som man tror.

Vi velger tilfeldig ut 25 gutter som søker opptak til Krigsskolen, og lar dem gjennomføre programmet før de skal løpe 3000-metersløpet.

>[!oppgave]
>c) Sett opp en hypotesetest som kan brukes i denne situasjonen.

Gjennomsnittstiden blir 12 minutter og 27 sekunder. Vi regner fortsatt at standardavviket er 54 sekunder for løpstiden til en tilfeldig gutt som søker opptak.

>[!oppgave]
>d) Utfør hypotesetesten, og bruk den til å avgjøre om det er grunnlag for å si at treningsprogrammet har god effekt. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $P \approx 0{,}624$
b) Ca. 11 min 14 s
c) Se løsningsforslag
d) $p$-verdi $\approx 0{,}069$. Ikke grunnlag for å forkaste $H_0$.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 12 \text{ min } 43 \text{ s} = 763 \text{ s}$ og $\sigma = 54 \text{ s}$.

Tidskravet er 13 min $= 780$ s. Vi standardiserer:

$$z = \frac{780 - 763}{54} \approx 0{,}31$$

$$P(X < 780) = \Phi(0{,}31) \approx \underline{\underline{0{,}624}}$$

### b

Vi trenger $P(X < t) = 0{,}05$:

$$z = \Phi^{-1}(0{,}05) \approx -1{,}645$$

$$t = 763 + (-1{,}645) \cdot 54 \approx 674 \text{ s} \approx \underline{\underline{11 \text{ min } 14 \text{ s}}}$$

### c

**Hypoteser:**

- $H_0$: $\mu = 763$ s (treningsprogrammet har ingen effekt)
- $H_1$: $\mu < 763$ s (treningsprogrammet gir lavere løpstid)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

Testobservator: $Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$

### d

Gjennomsnittstiden er $\bar{X} = 12 \text{ min } 27 \text{ s} = 747 \text{ s}$, med $n = 25$ og $\sigma = 54$ s.

$$z = \frac{747 - 763}{54 / \sqrt{25}} = \frac{-16}{10{,}8} \approx -1{,}48$$

$p$-verdien: $P(Z < -1{,}48) \approx 0{,}069$.

Siden $p = 0{,}069 > 0{,}05 = \alpha$, forkaster vi **ikke** $H_0$.

Det er **ikke grunnlag** for å si at treningsprogrammet har signifikant effekt på signifikansnivå 5 %.


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/lonnsokning-og-videreutdanning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Lønnsøkning og videreutdanning

Svein jobber som lærer. I 2019 har han en årslønn på 478 400 kroner. Han regner med å få en årlig lønnsøkning på 4,0 % per år i årene framover.

>[!oppgave]
>a) Vis at Sveins samlede inntekt i årene 2020–2029 da vil bli i overkant av 5,97 millioner kroner.

Svein vurderer å videreutdanne seg i årene 2020 og 2021. Han vil da ikke ha noen inntekt disse to årene. Han regner så med å få en årslønn på 574 000 kroner i 2022 og en årlig lønnsøkning på 4,0 % hvert år etterpå.

>[!oppgave]
>b) Bestem den samlede inntekten i årene 2020–2029 dersom han tar videreutdanningen.

Selv om han vil få høyere årslønn dersom han tar videreutdanning, vil det ta noen år før den samlede inntekten i årene etter 2019 blir større enn om han ikke tar videreutdanning.

>[!oppgave]
>c) Bruk CAS til å bestemme hvor lenge han må jobbe etter at han er ferdig med videreutdanningen, for at den samlede inntekten fra og med 2020 skal bli minst like stor som om han ikke tar videreutdanning.

## Fasit

a) Se løsningsforslag
b) $\approx 5\,289\,000 \text{ kr}$
c) Etter 20 år (i 2041)

## Løsningsforslag

### a

Svein har årslønn $478\,400 \cdot 1{,}04^n$ kroner i år $2019 + n$.

Samlet inntekt 2020–2029 er en geometrisk rekke med $a_1 = 478\,400 \cdot 1{,}04$ og $k = 1{,}04$, 10 ledd:

$$s_{10} = 478\,400 \cdot 1{,}04 \cdot \frac{1{,}04^{10} - 1}{1{,}04 - 1} \approx 5\,973\,471 \text{ kr}$$

som er i overkant av 5{,}97 millioner kroner. ✓

### b

Med videreutdanning har Svein ingen inntekt i 2020–2021. Fra 2022 tjener han $574\,000 \cdot 1{,}04^{n}$ der $n = 0, 1, \ldots, 7$ for årene 2022–2029.

Geometrisk rekke med $a_1 = 574\,000$, $k = 1{,}04$, 8 ledd:

$$s_8 = 574\,000 \cdot \frac{1{,}04^8 - 1}{1{,}04 - 1} \approx \underline{\underline{5\,289\,000 \text{ kr}}}$$

### c

Vi definerer samlede inntekter som funksjoner i CAS:

![CAS: Lønnsøkning](/img/user/_resources/s2-h19-2-4.png)

Uten videreutdanning (linje 1–2): $S_{\text{uten}}(n) = 478\,400 \cdot 1{,}04 \cdot \frac{1{,}04^n - 1}{0{,}04}$

Med videreutdanning (linje 3–4): $S_{\text{med}}(n) = 574\,000 \cdot \frac{1{,}04^{n-2} - 1}{0{,}04}$

Vi bruker CAS til å finne det minste heltallet $n$ slik at $S_{\text{med}}(n) \geq S_{\text{uten}}(n)$, og finner at dette inntreffer for $n = 22$, altså i år 2041.

Svein må jobbe i **20 år** etter videreutdanningen for at det skal lønne seg.


</div></div>


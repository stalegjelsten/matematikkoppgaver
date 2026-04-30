---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r1-eksamen-v2024/","permalink":"/eksamener/r1-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon med produktregel og ln](https://matematikkoppgaver.vercel.app/derivasjon-med-produktregel-og-ln/) | derivasjon, logaritmer | × |
| [1-2](#oppgave-1-2) | [Logaritmeligningen med substitusjon](https://matematikkoppgaver.vercel.app/logaritmeligningen-med-substitusjon/) | logaritmer, likninger | × |
| [1-3](#oppgave-1-3) | [Grenseverdier av eksponentialfunksjon](https://matematikkoppgaver.vercel.app/grenseverdier-av-eksponentialfunksjon/) | eksponentialfunksjoner, grenseverdi | × |
| [1-4](#oppgave-1-4) | [Tre punkter på linje og rettvinklet trekant](https://matematikkoppgaver.vercel.app/tre-punkter-pa-linje-og-rettvinklet-trekant/) | vektorer, geometri, likninger | × |
| [1-5](#oppgave-1-5) | [Kontinuerlig funksjon med størst mulig definisjonsmengde](https://matematikkoppgaver.vercel.app/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/) | kontinuitet, funksjoner, delt forskrift | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Influensaepidemi og logistisk vekst](https://matematikkoppgaver.vercel.app/influensaepidemi-og-logistisk-vekst/) | logistisk funksjon, derivasjon, asymptoter, modellering | × |
| [2-2](#oppgave-2-2) | [Påstander om logaritme, derivasjon og invers](https://matematikkoppgaver.vercel.app/pastander-om-logaritme-derivasjon-og-invers/) | logaritmer, derivasjon, funksjoner, argumentasjon, delt forskrift | × |
| [2-3](#oppgave-2-3) | [To biler på kryss og motorvei](https://matematikkoppgaver.vercel.app/to-biler-pa-kryss-og-motorvei/) | vektorer, derivasjon, modellering | × |
| [2-4](#oppgave-2-4) | [Momentmagnitudeskala og energi](https://matematikkoppgaver.vercel.app/momentmagnitudeskala-og-energi/) | logaritmer, eksponentialfunksjoner, modellering | × |
| [2-5](#oppgave-2-5) | [Modell for drivstoffutvikling i Moss](https://matematikkoppgaver.vercel.app/modell-for-drivstoffutvikling-i-moss/) | regresjon, modellering, eksponentiell vekst | × |
| [2-6](#oppgave-2-6) | [Innskrevet rektangel og Lars sitt program](https://matematikkoppgaver.vercel.app/innskrevet-rektangel-og-lars-sitt-program/) | derivasjon, programmering, funksjonsdrøfting | × |
| [2-7](#oppgave-2-7) | [Pyramide i halvkule – størst mulig volum](https://matematikkoppgaver.vercel.app/pyramide-i-halvkule-storst-mulig-volum/) | geometri, derivasjon | × |

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tre-punkter-pa-linje-og-rettvinklet-trekant/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tre punkter på linje og rettvinklet trekant

Vi har gitt tre punkter $A(3, 4)$, $B(-1, -2)$ og $C(3+t, 2t)$ der $t \in \mathbb{R}$.

>[!oppgave]
>a) Bestem $t$ slik at punktene $A$, $B$ og $C$ ligger på en rett linje.
>b) Bestem $t$ slik at punktene $A$, $B$ og $C$ danner en trekant slik at $\angle C = 90\degree$.

## Fasit

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/influensaepidemi-og-logistisk-vekst/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Influensaepidemi og logistisk vekst

En influensaepidemi bryter ut på en videregående skole med 1000 elever. I starten er det få smittede, men antallet øker raskt. Antallet smittede elever $S(t)$ etter $t$ dager er tilnærmet gitt ved

$$S(t) = \frac{300}{1 + 28 \cdot e^{-0{,}3t}}.$$

>[!oppgave]
>a) Hvor lang tid tar det før 100 elever er smittet?
>b) På hvilket tidspunkt blir flest elever smittet, og hvor raskt sprer smitten seg da?
>c) Undersøk om $S$ har asymptoter, og forklar hvilken praktisk tolkning asymptotene eventuelt har.

## Fasit

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pastander-om-logaritme-derivasjon-og-invers/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Påstander om logaritme, derivasjon og invers

Avgjør om hver av påstandene nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Når $x > 0$, er $e^{k \cdot \ln(x)} = x^k$.
>b) En funksjon $f$ er gitt ved
>$$f(x) = \begin{cases} x^3 - 2\text{,} & x < 2 \\ 3x^2 - 4\text{,} & x \ge 2 \end{cases}$$
>**Påstand:** Funksjonen er deriverbar i $x = 2$.
>c) **Påstand:** En funksjon som er både minkende og voksende i definisjonsmengden sin, kan ha en omvendt funksjon.

## Fasit


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/to-biler-pa-kryss-og-motorvei/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# To biler på kryss og motorvei

To biler, A og B, kjører på hver sin vei. Posisjonen til bil A er gitt ved $\overrightarrow{r_A}(t)$, og posisjonen til bil B er gitt ved $\overrightarrow{r_B}(t)$, der

$$\overrightarrow{r_A}(t) = \left[\frac{1}{2}(t-4),\ t\right] \quad \text{og} \quad \overrightarrow{r_B}(t) = \left[\frac{1}{2}t,\ \frac{3}{2}\left(t-\frac{1}{5}\right)\right].$$

Her er $t$ tiden målt i minutter, og avstandene er målt i kilometer.

>[!oppgave]
>a) Bestem avstanden i luftlinje mellom bilene etter 1 minutt.

En av veiene er en motorvei. Den andre veien er en vei med lavere fartsgrense.

>[!oppgave]
>b) Gjør beregninger og argumenter for hvilken av bilene som er på motorveien.

Veiene krysser hverandre i et veikryss.

>[!oppgave]
>c) Gjør beregninger og argumenter for hvilken av bilene som kommer til veikrysset først.

## Fasit

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/momentmagnitudeskala-og-energi/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Momentmagnitudeskala og energi

Momentmagnitudeskalaen er en skala for å måle størrelsen på jordskjelv. Sammenhengen mellom momentmagnituden $M$ og energien $E$ er

$$M = \frac{2}{3} \lg(E) - 3{,}2.$$

Energien $E$ måles i joule (J).

>[!oppgave]
>a) Bestem et uttrykk for energien $E$ som løses ut i et jordskjelv, uttrykt ved momentmagnituden $M$. Bruk dette uttrykket til å regne ut hvor mye energi som løses ut i et jordskjelv som måler $4{,}7$ på momentmagnitudeskalaen.
>b) Hvor mange ganger så stor er energien som løses ut i et jordskjelv, dersom $M$ øker med 1?

## Fasit

</div></div>


## Oppgave 2-5


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


## Oppgave 2-6


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


## Oppgave 2-7


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


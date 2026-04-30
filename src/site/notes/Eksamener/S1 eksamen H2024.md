---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen H2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s1-eksamen-h2024/","permalink":"/eksamener/s1-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen H2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon av eksponentialfunksjon](https://matematikkoppgaver.vercel.app/derivasjon-av-eksponentialfunksjon/) | derivasjon, eksponentialfunksjoner | ✔︎ |
| [1-2](#oppgave-1-2) | [Finne verdi programmet skriver ut](https://matematikkoppgaver.vercel.app/finne-verdi-programmet-skriver-ut/) | programmering, funksjonsdrøfting | ✔︎ |
| [1-3](#oppgave-1-3) | [Eksponentiallikning med substitusjon](https://matematikkoppgaver.vercel.app/eksponentiallikning-med-substitusjon/) | eksponentialfunksjoner, logaritmer, likninger | ✔︎ |
| [1-4](#oppgave-1-4) | [Grenseverdi for rasjonalt uttrykk](https://matematikkoppgaver.vercel.app/grenseverdi-for-rasjonalt-uttrykk/) | grenseverdi, rasjonale funksjoner | ✔︎ |
| [1-5](#oppgave-1-5) | [Sannsynlighet for kulefarge](https://matematikkoppgaver.vercel.app/sannsynlighet-for-kulefarge/) | sannsynlighet, kombinatorikk | ✔︎ |
| [1-6](#oppgave-1-6) | [Identifiser funksjon fra vekstfart og derivert](https://matematikkoppgaver.vercel.app/identifiser-funksjon-fra-vekstfart-og-derivert/) | gjennomsnittlig vekstfart, derivasjon, tolke grafer | ✔︎ |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Antrekk og sannsynlighet hos Drakt og Søm](https://matematikkoppgaver.vercel.app/antrekk-og-sannsynlighet-hos-drakt-og-som/) | kombinatorikk, sannsynlighet | × |
| [2-2](#oppgave-2-2) | [Vurder påstander om funksjoner](https://matematikkoppgaver.vercel.app/vurder-pastander-om-funksjoner/) | gjennomsnittlig vekstfart, grenseverdi, argumentasjon | ✔︎ |
| [2-3](#oppgave-2-3) | [Bestem grunntall i logaritmefunksjon](https://matematikkoppgaver.vercel.app/bestem-grunntall-i-logaritmefunksjon/) | logaritmer, tolke grafer | × |
| [2-4](#oppgave-2-4) | [Knekkebrød, gavekort og simulering](https://matematikkoppgaver.vercel.app/knekkebrod-gavekort-og-simulering/) | sannsynlighet, simulering, økonomi | × |
| [2-5](#oppgave-2-5) | [Optimalisering av parkeringsinntekt](https://matematikkoppgaver.vercel.app/optimalisering-av-parkeringsinntekt/) | funksjonsdrøfting, derivasjon, økonomi | × |
| [2-6](#oppgave-2-6) | [Overskuddsoptimalisering for båtmotorer](https://matematikkoppgaver.vercel.app/overskuddsoptimalisering-for-batmotorer/) | funksjonsdrøfting, derivasjon, økonomi | × |
| [2-7](#oppgave-2-7) | [Sannsynlighet for covid med positiv test](https://matematikkoppgaver.vercel.app/sannsynlighet-for-covid-med-positiv-test/) | sannsynlighet | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-eksponentialfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av eksponentialfunksjon

>[!oppgave]
>Deriver funksjonen
>$$f(x) = \frac{e^{2x}}{x}$$

## Fasit

$$f'(x)=e^{2x} \cdot \frac{2x+1}{x^{2}}$$

## Løsningsforslag

Funksjonen består av en brøk med funksjoner i både teller og nevner, så vi må bruke kvotientregelen når vi deriverer.
$$
f(x)=\frac{u}{v}\implies f'(x)=\frac{u'v+uv'}{v^{2}}
$$
$$
f'(x)=\frac{2e^{2x} \cdot x + e^{2x}\cdot 1}{x^{2}}=\underline{\underline{e^{2x} \frac{2x+1}{x^{2}}}}
$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/finne-verdi-programmet-skriver-ut/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Finne verdi programmet skriver ut

Bruk en egnet strategi til å bestemme verdien som skrives ut når programmet nedenfor kjøres.


```python ln
def O(x):
    return -0.1*x**2 + 2000*x - 50000

x = 0

while O(x + 1) > O(x):
    x = x + 1

print(x)
```

## Fasit

Programmet skriver ut $10\,000$.

## Løsningsforslag

Jeg ser at programmet består av en funksjon $O(x)$ som muligens er en overskuddsfunksjon. `while`-løkka i programmet kjører så lenge $O(x+1)>O(x)$, altså kjører løkka så lenge $O(x)$ stiger. Inni løkka økes $x$-verdien med 1, altså vil programmet skrive ut $x$-koordinaten til toppunktet til $O(x)$.

Den enkleste måten å bestemme toppunktet på er å derivere $O$ og sette lik null.
$$
\begin{aligned}
O'(x)&=-0{,}2x+2000 \\
-0{,}2x+2000 &= 0\\
0{,}2x&=2000\\
x&=10\,000
\end{aligned}
$$
**Programmet skriver ut 10 000.**


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/eksponentiallikning-med-substitusjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Eksponentiallikning med substitusjon

>[!oppgave]
>Løs likningen
>$$100^x - 3 \cdot 10^x = 4$$

## Fasit

$x=\log 4$

## Løsningsforslag

Jeg ser at likningen består av tierpotenser.
$$
\begin{aligned}
100^{x}-3 \cdot 10^{x}&=4\\
\left( 10^{x} \right)^{2}  -3 \cdot 10^{x} - 4&=0
\end{aligned}
$$
Dette ser jeg at kan skrives som en andregradslikning hvor $u=10^{x}$.
$$
u^{2}-3u-4=0 \implies \underbrace{ (u-4)(u+1)=0 }_{ \text{Heltallsmetode} } \implies \underline{ u= 4 \vee u=-1} 
$$
Vi bytter substituerer tilbake.
$$
\begin{aligned}
10^{x}&=4 \vee \underbrace{ \cancel{ 10^{x}=-1 } }_{ 10^{x} \text{ er positivt} } \\
\log 10^{x} &= \log 4\\
x&= \log 4
\end{aligned}
$$
**Løsningen er $\underline{\underline{x=\log 4}}$**.


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdi-for-rasjonalt-uttrykk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdi for rasjonalt uttrykk

>[!oppgave]
>Finn grenseverdien hvis den eksisterer.
>$$\lim_{x \to \infty} \frac{x^2 + x - 12}{2x^2 - 18}$$

## Fasit

Grenseverdien er $\frac{1}{2}$.

## Løsningsforslag

Vi ser at både teller og nevner går mot uendelig når $x \to \infty$. Vi kan altså bruke L'Hopitals regel.
$$
\lim_{ x \to \infty } \frac{x^{2}+x-12}{2x^{2}-18}=\lim_{ x \to \infty } \frac{2x+1}{4x}=\lim_{ x \to \infty } \frac{2+\frac{1}{x}}{4}=\frac{2+0}{4}=\frac{1}{2}
$$
**Grenseverdien er $\underline{\underline{\frac{1}{2}}}$.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sannsynlighet-for-kulefarge/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sannsynlighet for kulefarge

I en kasse ligger det 4 røde, 3 blå og 2 gule kuler. Audun tar tilfeldig to kuler fra kassen.

>[!oppgave]
>a) Bestem sannsynligheten for at han tar to kuler med samme farge.
>b) Bestem sannsynligheten for at han tar nøyaktig én gul kule.

## Fasit

a) $P(\text{to like}) = \frac{5}{18}$

## Løsningsforslag

### a
For å ta to kuler av samme farge må Audun enten ta to røde ($R$), to blå ($B$) eller to gule ($G$) kuler. Det er 9 kuler i kassa.
$$
\begin{aligned}
P(\text{To samme farge})&=P(2R)+P(2B)+(2G)\\
&=\frac{4}{9} \cdot \frac{3}{8} + \frac{3}{9} \cdot \frac{2}{8} + \frac{2}{9}\cdot \frac{1}{8}\\
&=\frac{12+6+2}{72}=\frac{5}{18}
\end{aligned}
$$
**Sannsynligheten for å ta to kuler av samme farge er $\underline{\underline{\frac{5}{18}}}$**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/identifiser-funksjon-fra-vekstfart-og-derivert/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Identifiser funksjon fra vekstfart og derivert

I koordinatsystemet nedenfor ser du grafene til tre funksjoner, $f$, $g$ og $h$. En av funksjonene har gjennomsnittlig vekstfart lik $\frac{1}{2}$ i intervallet $\left[0, 4\right]$, og derivert lik 1 når $x = 1$.

![Koordinatsystem med tre funksjoner f, g og h](/img/user/_resources/s1-h24-1-6.jpeg){width=60%}

>[!oppgave]
>Hvilken av funksjonene er dette? Husk å begrunne svaret ditt.

## Fasit

Funksjonen $f$ passer til beskrivelsen.

## Løsningsforslag

At den deriverte er lik 1 når $x=1$ vil si at stigningstallet til tangenten til grafen når $x=1$ skal være 1. Det utelukker funksjon $g$ som har stigningstall $\frac{1}{2}$.

Funksjonen $h$ har gjennomsnittlig har null i gjennomsnittlig vekstfart i intervallet $[0,4]$, og dermed er også denne funksjonen utelukket.

Det er litt vanskelig å lese av stigningstallet til tangenten til $f$ i $x=1$, men det kan godt stemme at stigningstallet er 1. Den gjennomsnittlige vekstfarten i intervallet $[0,4]$ er $\frac{2}{4}=\frac{1}{2}$.

**Funksjon $\underline{\underline{f}}$ passer til beskrivelsen.**


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/antrekk-og-sannsynlighet-hos-drakt-og-som/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Antrekk og sannsynlighet hos Drakt og Søm

Bedriften Drakt & Søm leier ut komplette antrekk. Et antrekk består av et hodeplagg, en skjorte, en jakke, en bukse og et par sko. Bedriften har 10 hodeplagg, 20 skjorter, 15 jakker, 15 bukser og 5 par sko. Alle plagg og skopar som bedriften leier ut, er ulike.

>[!oppgave]
>a) Hvor mange forskjellige antrekk er det mulig å lage?

Tore leier et antrekk. Han har det litt travelt når han skal hente antrekket, og tar med seg 3 tilfeldige sko.

>[!oppgave]
>b) Bestem sannsynligheten for at Tore får med seg et skopar.

I byen Draktenburg bor det 542 000 mennesker.

>[!oppgave]
>c) Hva er minste antall nye plagg og/eller skopar Drakt & Søm må anskaffe for at de skal ha flere mulige antrekk enn antall mennesker i Draktenburg?

## Fasit

a) $\underline{\underline{225\,000 \text{ ulike antrekk}}}$

b) $\underline{\underline{P = \dfrac{1}{3}}}$

c) **Minste antall nye plagg/skopar: $\underline{\underline{7}}$** (f.eks. 1 hodeplagg + 6 skopar)

## Løsningsforslag

### a

Antrekket skal bestå av fem deler: ett hodeplagg, én skjorte, én jakke, én bukse og ett skopar. For hvert valg er alternativene uavhengige av hverandre, så vi bruker **multiplikasjonsprinsippet**:

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 5 = \underline{\underline{225\,000}}$$

Det er **225 000 forskjellige antrekk** mulig å lage.

### b

Tore tar med seg 3 tilfeldige sko fra 5 skopar, altså totalt 10 enkeltsko. Vi teller antall måter å velge 3 sko av 10:

$$\binom{10}{3} = \frac{10!}{3! \cdot 7!} = 120$$

Vi finner antall måter Tore *ikke* får med seg noe komplett skopar (altså at alle tre skoene er fra forskjellige par):

- Velg 3 av de 5 parene: $\binom{5}{3} = 10$
- Fra hvert valgte par velges én av to sko: $2^3 = 8$
- Antall utfall uten noe par: $10 \cdot 8 = 80$

Antall gunstige utfall (minst ett skopar):

$$120 - 80 = 40$$

Sannsynligheten for at Tore får med seg et skopar:

$$P = \frac{40}{120} = \underline{\underline{\frac{1}{3} \approx 0{,}333}}$$

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at **7 nye plagg/skopar** (f.eks. 1 hodeplagg + 6 skopar) er minimum, mens matematikk.net mener **8 skopar** er minimum. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Drakt & Søm trenger å ha flere mulige antrekk enn 542 000. Nåværende antall er $10 \cdot 20 \cdot 15 \cdot 15 \cdot 5 = 225\,000$.

Vi vil legge til færrest mulig nye plagg/skopar slik at produktet overstiger 542 000. For å minimere antall nye enheter lønner det seg å øke det faktoren som gir størst relativ økning per ny enhet.

Relativ økning per ny enhet for hvert element:

| Kategori | Opprinnelig | Ny faktor per ekstra enhet |
|----------|-------------|---------------------------|
| Hodeplagg | 10 | $\frac{11}{10} = 1{,}10$ |
| Skjorte | 20 | $\frac{21}{20} = 1{,}05$ |
| Jakke | 15 | $\frac{16}{15} \approx 1{,}07$ |
| Bukse | 15 | $\frac{16}{15} \approx 1{,}07$ |
| Skopar | 5 | $\frac{6}{5} = 1{,}20$ |

Hvert nye skopar gir størst relativ effekt, så vi starter der. Vi sjekker systematisk:

Med 7 ekstra skopar alene (5 + 7 = 12 skopar):

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 12 = 540\,000 < 542\,000 \quad \text{✗}$$

Med 7 ekstra totalt — 6 skopar + 1 hodeplagg (11 hodeplagg, 11 skopar):

$$11 \cdot 20 \cdot 15 \cdot 15 \cdot 11 = 544\,500 > 542\,000 \quad \text{✓}$$

Vi sjekker at 6 ekstra ikke er nok. Best mulig fordeling med 6 ekstra er f.eks. 6 skopar (5 + 6 = 11):

$$10 \cdot 20 \cdot 15 \cdot 15 \cdot 11 = 495\,000 < 542\,000 \quad \text{✗}$$

Eller 5 skopar + 1 hodeplagg:

$$11 \cdot 20 \cdot 15 \cdot 15 \cdot 10 = 495\,000 < 542\,000 \quad \text{✗}$$

Ingen fordeling av 6 ekstra plagg gir over 542 000.

**Drakt & Søm må anskaffe minst 7 nye plagg/skopar**, for eksempel 1 hodeplagg og 6 skopar, slik at antallet mulige antrekk blir $544\,500 > 542\,000$.

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vurder-pastander-om-funksjoner/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vurder påstander om funksjoner

Avgjør om hver enkelt påstand nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Den gjennomsnittlige vekstfarten til funksjonen $f(x) = x^2 + 2$ i intervallet $[1, 4]$ er 5.
>b) **Påstand:** Hvis $\lim_{x\to\infty} f(x) = \lim_{x\to\infty} g(x)$ og $\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty} g(x)$, så er $f(x) = g(x)$.
>c) **Påstand:** For likningen $a^x = a^y$, der $a \in \mathbb{R}$, er løsningen alltid $x = y$.

## Fasit

a) Sann. Den gjennomsnittlige vekstfarten er 5.
b) Usann. Flere funksjoner kan ha samme grenseverdier, for eksempel $f(x)=\frac{1}{x}$ og $g(x)=\frac{2}{x}$.
c) Usann. For $a \in \{ -1,0,1 \}$ finnes det flere løsninger.

## Løsningsforslag

### a
Vi kan finne gjennomsnittlig vekstfart i intervallet ved å beregne
$$
\frac{f(4)-f(1)}{3}=\frac{4^{2}+2-\left( 1^{2}+2 \right) }{3}=\frac{16+2-1-2}{3}=\frac{15}{3}=\underline{\underline{5}}
$$
**Påstanden stemmer. Den gjennomsnittlige vekstfarten i intervallet er 5.**

### b
Påstanden sier at dersom to funksjoner har samme grenseverdier når $x \to \pm \infty$, så er de like.

Det er enkelt å finne eksempler som motbeviser dette, for eksempel vil $f(x)=\frac{1}{x}$ og $g(x)=\frac{2}{x}$ begge gå mot null når $x \to \pm\infty$.

**Påstanden er usann. Det finnes eksempler hvor $f(x)\neq g(x)$.**

### c

>[!warning] Tolkning av påstanden
>Påstanden lyder: For likningen $a^{x}=a^{y}$, der $a \in \mathbb{R}$ så er løsningen alltid $x=y$.
>
>Her mener jeg at to ulike tolkninger begge er akseptable:
>
> 1. Det er kun én løsning på likningen, og denne er $x=y$.
> 2. Det kan finnes flere løsninger på likningen, men $x=y$ er alltid en løsning.

#### Alternativ 1: x = y er eneste løsning
Det finnes flere eksempler som motbeviser påstanden, for eksempel vil $a=1$ gjøre at $a^{x}=a^{y}$ for alle $x,y \in \mathbb{R}$. $a=-1$ og $a=0$ vil også gi mange løsninger.

**Påstanden er feil. For $a \in \{ -1,0,1 \}$ finnes det flere løsninger.**

#### Alternativ 2: x = y kan være en av flere løsninger
Avhengig av kontekst kan $0^{0}$ være definert på ulike måter

1. I kombinatorikk vil ofte $0^{0} \overset{\text{def}}{=} 1$
2. $0^{0}$ er en ubestemt form i de fleste andre deler av matematikken.

Hvis vi tolker at $0^{0}$ er en ubestemt form så vil likningen ha ingen løsninger for $a=0$.

**Påstanden er usann. For $a=0$ så er $x=y$ bare hvis $x,y\neq 0$.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestem-grunntall-i-logaritmefunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestem grunntall i logaritmefunksjon

I koordinatsystemet nedenfor ser du grafen til en funksjon $f$ gitt ved

$$f(x) = \log_a(x)$$

![Graf av logaritmefunksjon med ukjent grunntall](/img/user/_resources/s1-h24-2-3.jpeg){width=60%}

>[!oppgave]
>Bestem $a$. Husk å argumentere for at svaret ditt er riktig.

## Fasit

**$a = 5$**

## Løsningsforslag

Fra grafen avleser vi at $f(5) = 1$.

Det betyr at

$$\log_a(5) = 1$$

Definisjonen av logaritme sier at $\log_a(5) = 1$ er det samme som $a^1 = 5$, altså

$$a = 5$$

**Verifisering:** Vi sjekker mot et annet avlest punkt, $f(25) \approx 2$:

$$\log_5(25) = \log_5(5^2) = 2 \checkmark$$

Dette stemmer med grafen, så **$\underline{\underline{a = 5}}$**.

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/knekkebrod-gavekort-og-simulering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Knekkebrød, gavekort og simulering

Trollmat AS selger pakker med knekkebrød. I én av 1000 pakker som selges, ligger det et gavekort. En kunde som finner et gavekort, vinner en reise. Hver reise har en verdi på 5000 kroner. Knekkebrødene selges for 40 kroner per pakke, og de koster 10 kroner per pakke å produsere.

Hassan kjøper én pakke knekkebrød hver dag.

>[!oppgave]
>a) Hvor mange dager tar det før sannsynligheten for at Hassan har vunnet minst én reise, er 20 %? Husk å begrunne valget av sannsynlighetsmodell.

Trollmat AS lanserer en ny knekkebrødpakke som de kaller «Gullknekk». I én av 100 pakker med Gullknekk ligger det et gavekort. Det koster 10 kroner å produsere en pakke Gullknekk.

>[!oppgave]
>b) Hvilken pris må Trollmat AS ta betalt per pakke Gullknekk for å ha samme overskudd per pakke som for de vanlige knekkebrødene?

Hassan endrer vanene sine og kjøper vanlige knekkebrødpakker på hverdager og en pakke Gullknekk hver lørdag og søndag.

>[!oppgave]
>c) Bruk simulering til å bestemme sannsynligheten for at Hassan vinner minst én reise i løpet av 52 uker med de nye kjøpsvanene sine.

## Fasit

a) $\underline{\underline{n = 224 \text{ dager}}}$

b) $\underline{\underline{85 \, \mathrm{kr}}}$

c) $\underline{\underline{P \approx 0{,}729}}$

## Løsningsforslag

### a

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at minste antall dager er **224**, mens matematikk.net oppgir **223**. Det er et tolkningsspørsmål: $0{,}999^{223} \approx 0{,}80016 > 0{,}80$, så strengt sett oppfylles ikke kravet før dag 224. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Vi lar $X$ være antall gavekort Hassan finner på $n$ dager. Siden hver pakke er et uavhengig forsøk med to utfall (gavekort eller ikke), samme sannsynlighet $p = \frac{1}{1000}$ for gevinst i hver pakke, og Hassan kjøper én pakke per dag, er $X$ binomisk fordelt med $n$ forsøk og $p = \frac{1}{1000}$.

Vi vil finne minste $n$ slik at

$$P(X \geq 1) \geq 0{,}20$$

Vi bruker komplementregelen:

$$P(X \geq 1) = 1 - P(X = 0) = 1 - \left(\frac{999}{1000}\right)^n$$

Vi setter opp ulikheten:

$$1 - \left(\frac{999}{1000}\right)^n \geq 0{,}20$$

$$\left(\frac{999}{1000}\right)^n \leq 0{,}80$$

Vi løser dette i GeoGebra CAS:

![CAS-utregning for oppgave 4a og 4b](/img/user/_resources/s1-h24-2-4.png)

CAS gir $n \approx 223{,}03$, altså er minste hele antall $n = 224$.

**Hassan må kjøpe knekkebrød i minst $\underline{\underline{224 \text{ dager}}}$ før sannsynligheten for å ha vunnet minst én reise er 20 %.**

### b

Overskudd per vanlige pakke:

$$\text{Inntekt} - \text{Produksjon} - \text{Forventet gevinst} = 40 - 10 - 5000 \cdot \frac{1}{1000} = 40 - 10 - 5 = 25 \, \mathrm{kr}$$

For Gullknekk med ukjent pris $p$:

$$p - 10 - 5000 \cdot \frac{1}{100} = p - 10 - 50 = p - 60$$

Vi setter overskuddet lik 25 kr og løser i GeoGebra CAS (se bilde over):

$$p - 60 = 25 \implies p = 85$$

**Trollmat AS må ta $\underline{\underline{85 \, \mathrm{kr}}}$ per pakke Gullknekk.**

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at sannsynligheten er ca. **$0{,}729$ (≈ 73 %)**, mens matematikk.net oppgir **0,36 %**. Vår verdi er verifisert både ved simulering og eksakt utregning ($1 - 0{,}999^{260} \cdot 0{,}99^{104} \approx 0{,}7289$). Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Hassan kjøper 5 vanlige pakker per uke og 2 Gullknekk-pakker per uke i 52 uker:

- Vanlige pakker: $5 \cdot 52 = 260$ pakker, $p_v = \frac{1}{1000}$
- Gullknekk-pakker: $2 \cdot 52 = 104$ pakker, $p_g = \frac{1}{100}$

Vi simulerer 100 000 år og teller hvor mange ganger Hassan vinner minst én reise:

```python
import random
random.seed(42)
N = 100000
vunnet = 0
for _ in range(N):
    vinst = 0
    for _ in range(260):  # vanlige pakker
        if random.random() < 1/1000:
            vinst += 1
    for _ in range(104):  # Gullknekk
        if random.random() < 1/100:
            vinst += 1
    if vinst >= 1:
        vunnet += 1
print(vunnet/N)  # ≈ 0,729
```

Simuleringen gir $\approx 0{,}729$, som stemmer godt med den eksakte verdien:

$$P(\text{minst én gevinst}) = 1 - (0{,}999)^{260} \cdot (0{,}99)^{104} \approx 0{,}7289$$

**Sannsynligheten for at Hassan vinner minst én reise i løpet av 52 uker er $\underline{\underline{P \approx 0{,}729}}$.**

</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/optimalisering-av-parkeringsinntekt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Optimalisering av parkeringsinntekt

Stephanie leier ut parkeringsplasser. Hun leier ut plasser for 1000 kroner per plass per måned. Med denne prisen er samtlige plasser utleid. Dersom hun øker prisen, vil antallet utleide plasser minke med én for hver gang prisen øker med 50 kroner. Hvis hun øker prisen til 1500 kroner per plass, vil hun ha samme inntekt som nå.

>[!oppgave]
>a) Vis at Stephanie har 30 parkeringsplasser.
>b) Hva er den største mulige månedlige inntekten som Stephanie kan få?

## Fasit

a) Stephanie har $\underline{\underline{30}}$ parkeringsplasser.
b) Maksimal månedlig inntekt er $\underline{\underline{31\,250 \, \mathrm{kr}}}$, med pris $1\,250 \, \mathrm{kr}$ per plass og 25 utleide plasser.

## Løsningsforslag

Vi bruker GeoGebra CAS.

![CAS-utregning](/img/user/_resources/s1-h24-2-5.png)

### a

La $n$ være totalt antall parkeringsplasser. Med pris $1\,000 \, \mathrm{kr}$ per plass er samtlige $n$ plasser utleid, og inntekten er $1\,000 \cdot n$.

Dersom prisen økes til $1\,500 \, \mathrm{kr}$ (en økning på $500 \, \mathrm{kr}$), minker antall utleide plasser med $500/50 = 10$. Antall utleide plasser blir da $n - 10$.

Vi setter opp likningen for at inntekten skal være lik:

$$1\,500 \cdot (n - 10) = 1\,000 \cdot n$$

CAS (linje 1) gir $n = 30$.

**Stephanie har $\underline{\underline{30}}$ parkeringsplasser.** $\square$

### b

La $p$ være prisen per plass i kroner. Antall plasser som er utleid ved en gitt pris $p$:

- Ved pris $1\,000 \, \mathrm{kr}$: alle 30 plasser utleid.
- For hver $50 \, \mathrm{kr}$ prisøkning over $1\,000 \, \mathrm{kr}$ minker antall utleide plasser med 1.
- Antall utleide plasser: $30 - \dfrac{p - 1\,000}{50} = 50 - \dfrac{p}{50}$

Inntektsfunksjonen blir:

$$I(p) = p \cdot \left(50 - \frac{p}{50}\right) = 50p - \frac{p^2}{50}$$

Vi definerer $I(p)$ i CAS (linje 2) og løser $I'(p) = 0$ (linje 3):

$$I'(p) = 50 - \frac{p}{25} = 0 \implies p = 1\,250$$

CAS bekrefter $p = 1\,250$.

Siden $I''(p) = -\dfrac{1}{25} < 0$ er dette et maksimum.

Maksimal inntekt (linje 4):

$$I(1\,250) = 50 \cdot 1\,250 - \frac{1\,250^2}{50} = 62\,500 - 31\,250 = 31\,250$$

Antall utleide plasser ved optimal pris: $50 - \dfrac{1\,250}{50} = 50 - 25 = 25$.

**Den største mulige månedlige inntekten er $\underline{\underline{31\,250 \, \mathrm{kr}}}$, med pris $1\,250 \, \mathrm{kr}$ per plass og 25 utleide plasser.**

</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/overskuddsoptimalisering-for-batmotorer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Overskuddsoptimalisering for båtmotorer

Bedriften Skipsmotor AS ønsker å optimalisere produksjonen av båtmotorer i Norge. Inntektene og kostnadene ved produksjon og salg av $x$ båtmotorer per år er gitt ved

$$I(x) = 250x - 0{,}5x^2$$
$$K(x) = 70x + 600$$

$I(x)$ og $K(x)$ er gitt i 1000 kroner.

>[!oppgave]
>a) Bestem $I'(15)$. Gi en praktisk tolkning av svaret.
>b) Hvor mange båtmotorer må Skipsmotor AS selge for at overskuddet skal bli størst mulig? Hvor stort er dette overskuddet?

Skipsmotor AS frykter at høy produksjon vil føre til dårligere kvalitet. De antar at de 50 første motorene produseres uten feil, og at 10 % av motorene etter dette ikke kan selges.

>[!oppgave]
>c) Bestem det største overskuddet Skipsmotor AS kan få dersom denne antakelsen er riktig.

## Fasit

a) $\underline{\underline{I'(15) = 235}}$ (i 1000 kr). Den 16. motoren gir en ekstra inntekt på omtrent 235 000 kr.
b) $\underline{\underline{x = 180 \text{ motorer}}}$, maksimalt overskudd $\underline{\underline{O(180) = 15{\ }600}}$ (i 1000 kr) $= 15{,}6 \text{ mill. kr}$
c) Maksimalt overskudd $\underline{\underline{\approx 14{\ }619}}$ (i 1000 kr) $\approx 14{,}6 \text{ mill. kr}$ ved produksjon av $\underline{\underline{x \approx 186 \text{ motorer}}}$

## Løsningsforslag

Vi definerer funksjonene og løser alle deloppgavene i GeoGebra CAS:

![CAS-utregning for oppgave 6](/img/user/_resources/s1-h24-2-6.png)

### a

Vi skal finne $I'(15)$ og tolke svaret.

GeoGebra CAS (linje 3–4) gir

$$I'(x) = -x + 250$$

$$I'(15) = \mathbf{235}$$

**$\underline{\underline{I'(15) = 235}}$** (i 1000 kr)

Praktisk tolkning: Grenseinntekten ved $x = 15$ er 235 (i 1000 kr). Det betyr at når Skipsmotor AS allerede har solgt 15 båtmotorer, vil salg av én motor til gi en ekstra inntekt på omtrent **235 000 kr**.

### b

Vi setter opp overskuddsfunksjonen og finner maksimum i GeoGebra CAS (linje 5–7):

$$O(x) = I(x) - K(x) = \left(250x - 0{,}5x^2\right) - \left(70x + 600\right) = -\frac{1}{2}x^2 + 180x - 600$$

CAS løser $O'(x) = 0$ og gir $x = 180$, og $O(180) = 15{\ }600$.

Siden ledende koeffisient er negativ ($-\tfrac{1}{2}$) er $x = 180$ et maksimum.

Skipsmotor AS bør selge **$\underline{\underline{180 \text{ motorer}}}$** for størst mulig overskudd. Det maksimale overskuddet er **$\underline{\underline{15{\ }600 \text{ (i 1000 kr)}}}$**, altså **15,6 mill. kr**.

### c

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net har en annen løsning. Vi har funnet at maksimalt overskudd er ca. **14,6 mill. kr** ved produksjon av **186 motorer** (172 solgte), mens matematikk.net oppgir **12,75 mill. kr** ved 172 enheter. Vår beregning er konsistent uavhengig av om man regner ut fra antall solgte eller produserte motorer. Se [matematikk.net sitt løsningsforslag](https://matematikk.net/side/S1_2024_H%C3%B8st_L%C3%98SNING) og vurder selv.

Vi antar at de 50 første motorene produseres uten feil, mens 10 % av motorene etter dette ikke kan selges. Av de motorene som produseres etter de første 50, kan altså 90 % selges.

Antall solgte motorer som funksjon av antall produserte ($x \geq 50$):

$$s(x) = 50 + 0{,}9 \cdot (x - 50) = 0{,}9x + 5$$

Det nye overskuddet er inntekt fra solgte motorer minus produksjonskostnad for alle $x$ produserte:

$$O_2(x) = I(s(x)) - K(x)$$

GeoGebra CAS (linje 8–11) gir

$$O_2(x) = -\frac{81}{200}x^2 + \frac{301}{2}x + \frac{1275}{2}$$

CAS løser $O_2'(x) = 0$ og gir $x = \dfrac{15050}{81} \approx 185{,}80$.

Vi runder til $x = 186$ (hele motorer) og beregner

$$O_2(186) = \frac{365478}{25} \approx 14{\ }619 \text{ (i 1000 kr)}$$

Det største overskuddet Skipsmotor AS kan oppnå under den nye antakelsen er **$\underline{\underline{\approx 14{\ }619 \text{ (i 1000 kr)}}}$**, altså omtrent **14,6 mill. kr**, ved produksjon av **$\underline{\underline{186 \text{ motorer}}}$**.

</div></div>


## Oppgave 2-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sannsynlighet-for-covid-med-positiv-test/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sannsynlighet for covid med positiv test

En test for covid-19 har disse egenskapene:

- Dersom en person er smittet, så er det 99 % sikkert at testen vil vise dette.
- Dersom en person ikke er smittet, så er det 98 % sikkert at testen vil vise dette.

Anta at 99 % av befolkningen ikke er smittet. En tilfeldig valgt person tar en test, og testen viser at personen er smittet.

>[!oppgave]
>Bestem sannsynligheten for at personen faktisk har covid-19.

## Fasit

Sannsynligheten er $\frac{1}{3} \approx 33{,}3 \, \%$.

## Løsningsforslag

>[!tip] Bayes setning
>
>Denne oppgaven er enklest å løse dersom du kjenner til Bayes setning:
> $$ P(A\vert B )= \frac{P(B \vert A) \cdot P(A)}{P(B)} $$
> Der $P(A\vert B)$ betyr sannsynligheten for at $A$ inntreffer, gitt at vi har fått vite at $B$ inntreffer.
>
>I mitt løsningsforslag velger jeg å løse oppgaven uten å bruke Bayes setning

La oss først definere noen hendelser:

- $S:$ personen er smittet
- $\bar{S}:$ personen er ikke smittet
- $T_{S}:$ positiv test gitt at personen er smittet
- $T_{\bar{S}}$: positiv test gitt at personen er frisk

Ut fra opplysningene våre kan vi se at $P(T_{S})=0{,}99$ og $P(T_{\bar{S}})=0{,}02$.

Det er to ulike måter den tilfeldige valgte personen kan få utslag på testen, hen kan være smittet og få positiv test, eller hen kan være frisk og få en positiv test.

Sannsynligheten for en hendelse er $\dfrac{\text{gunstige utfall}}{\text{mulige utfall}}$

- Vi kan si at de gunstige utfallene (at personen er smittet og positiv test) er $P(T_{S})= \textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}$
	- $\textcolor{seagreen}{1 \,\%}$ kommer fra sannsynligheten for å være smittet (i hele befolkningen)
	- $\textcolor{steelblue}{99 \,\%}$ kommer fra sannsynligheten for at testen viser at du er smittet
- Vi har flere mulige utfall som gir positiv test
	- Smittet person og positiv test: $P(T_{S})=\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}$ 
	- Ikke-smittet person og positiv test: $P(T_{\bar{S}})=\textcolor{tomato}{99 \,\%}  \cdot \textcolor{maroon}{2} \,\%$ 
		- $\textcolor{tomato}{99 \,\%}$ er sannsynligheten for å ikke være smittet
		- $\textcolor{maroon}{2} \,\%$ er sannsynligheten for å få positiv test selv om du ikke er smittet
	- Når vi legger sammen alle mulighetene får vi
$$
P(T_{S})+P(T_{\bar{S}}) =\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%} + \textcolor{tomato}{99 \,\%}  \cdot \textcolor{maroon}{2} \,\%= \textcolor{darkblue}{3\,\% \cdot 99 \,\%}
$$

Sannsynligheten for at en person med positiv test er smittet er altså
$$
\frac{\text{gunstige utfall}}{\text{mulige utfall}}= \frac{\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}}{\textcolor{darkblue}{3\,\% \cdot 99 \,\%}}= \frac{1}{3}\approx \underline{\underline{ 33{,}3 \, \% }}
$$


</div></div>


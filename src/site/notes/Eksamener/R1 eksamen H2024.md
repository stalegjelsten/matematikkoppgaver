---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen H2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r1-eksamen-h2024/","permalink":"/eksamener/r1-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen H2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
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
| [1-5](#oppgave-1-5) | [Koordinatvektorer, lengde og ortogonalitet](https://matematikkoppgaver.vercel.app/koordinatvektorer-lengde-og-ortogonalitet/) | vektorer | × |
| [1-6](#oppgave-1-6) | [Identifiser funksjon fra vekstfart og derivert](https://matematikkoppgaver.vercel.app/identifiser-funksjon-fra-vekstfart-og-derivert/) | gjennomsnittlig vekstfart, derivasjon, tolke grafer | ✔︎ |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Vannreservoar med eksponentiell funksjon](https://matematikkoppgaver.vercel.app/vannreservoar-med-eksponentiell-funksjon/) | eksponentialfunksjoner, derivasjon, modellering | × |
| [2-2](#oppgave-2-2) | [Påstander om grenseverdi og deriverbarhet](https://matematikkoppgaver.vercel.app/pastander-om-grenseverdi-og-deriverbarhet/) | grenseverdi, derivasjon, eksponentialfunksjoner | × |
| [2-3](#oppgave-2-3) | [Fiskepopulasjon og logistisk modell](https://matematikkoppgaver.vercel.app/fiskepopulasjon-og-logistisk-modell/) | eksponentialfunksjoner, logistisk funksjon, derivasjon, modellering | × |
| [2-4](#oppgave-2-4) | [Bestem grunntall i logaritmefunksjon](https://matematikkoppgaver.vercel.app/bestem-grunntall-i-logaritmefunksjon/) | logaritmer, tolke grafer | × |
| [2-5](#oppgave-2-5) | [Omvendt funksjon fra graf](https://matematikkoppgaver.vercel.app/omvendt-funksjon-fra-graf/) | funksjoner, funksjonsdrøfting | × |
| [2-6](#oppgave-2-6) | [Posisjonsvektorer for småfugler og rovfugl](https://matematikkoppgaver.vercel.app/posisjonsvektorer-for-smafugler-og-rovfugl/) | vektorer, derivasjon | × |

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/koordinatvektorer-lengde-og-ortogonalitet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Koordinatvektorer, lengde og ortogonalitet

Fire vektorer er gitt ved $\vec{u} = [3, -2]$, $\vec{v} = [4, -6]$, $\vec{w} = [2, -3]$ og $\vec{p} = [8, 12]$

>[!oppgave]
>a) Avgjør om noen av vektorene er
>- like lange
>- ortogonale

En vektor er gitt ved $\vec{q} = [2a - 3,\ 1 + 3b]$

>[!oppgave]
>b) Bestem $a$ og $b$ slik at $\vec{u} + 2\vec{q} = [7, 5]$

## Fasit

a) $\vec{u}$ og $\vec{w}$ er like lange. $\vec{u}$ og $\vec{p}$ er ortogonale.
b) $a = \dfrac{5}{2}$, $\quad b = \dfrac{5}{6}$

## Løsningsforslag

### a

Vi beregner lengden av hver vektor:

$$|\vec{u}| = \sqrt{3^2 + (-2)^2} = \sqrt{9 + 4} = \sqrt{13}$$

$$|\vec{v}| = \sqrt{4^2 + (-6)^2} = \sqrt{16 + 36} = \sqrt{52} = 2\sqrt{13}$$

$$|\vec{w}| = \sqrt{2^2 + (-3)^2} = \sqrt{4 + 9} = \sqrt{13}$$

$$|\vec{p}| = \sqrt{8^2 + 12^2} = \sqrt{64 + 144} = \sqrt{208} = 4\sqrt{13}$$

$|\vec{u}| = |\vec{w}| = \sqrt{13}$, så $\underline{\underline{\vec{u} \text{ og } \vec{w} \text{ er like lange}}}$.

For å avgjøre ortogonalitet beregner vi skalarproduktet for alle par. To vektorer er ortogonale hvis og bare hvis skalarproduktet er null.

$$\vec{u} \cdot \vec{v} = 3 \cdot 4 + (-2) \cdot (-6) = 12 + 12 = 24 \neq 0$$

$$\vec{u} \cdot \vec{w} = 3 \cdot 2 + (-2) \cdot (-3) = 6 + 6 = 12 \neq 0$$

$$\vec{u} \cdot \vec{p} = 3 \cdot 8 + (-2) \cdot 12 = 24 - 24 = 0$$

$$\vec{v} \cdot \vec{w} = 4 \cdot 2 + (-6) \cdot (-3) = 8 + 18 = 26 \neq 0$$

$$\vec{v} \cdot \vec{p} = 4 \cdot 8 + (-6) \cdot 12 = 32 - 72 = -40 \neq 0$$

$$\vec{w} \cdot \vec{p} = 2 \cdot 8 + (-3) \cdot 12 = 16 - 36 = -20 \neq 0$$

$\vec{u} \cdot \vec{p} = 0$, så $\underline{\underline{\vec{u} \text{ og } \vec{p} \text{ er ortogonale}}}$. Ingen andre par er ortogonale.

### b

Vi setter inn $\vec{u} = [3, -2]$ og $\vec{q} = [2a - 3,\ 1 + 3b]$:

$$\vec{u} + 2\vec{q} = [7, 5]$$

$$[3, -2] + 2[2a - 3,\ 1 + 3b] = [7, 5]$$

$$[3 + 4a - 6,\ -2 + 2 + 6b] = [7, 5]$$

$$[4a - 3,\ 6b] = [7, 5]$$

Dette gir likningssystemet:

$$\begin{aligned} 4a - 3 &= 7 \\ 6b &= 5 \end{aligned}$$

Fra første likning: $4a = 10$, altså $\underline{\underline{a = \dfrac{5}{2}}}$.

Fra andre likning: $\underline{\underline{b = \dfrac{5}{6}}}$.


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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vannreservoar-med-eksponentiell-funksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vannreservoar med eksponentiell funksjon

Et gammelt vannreservoar lekker vann. Mengden vann i reservoaret $V$ er gitt ved

$$V(t) = 10000 \cdot e^{-0{,}07t} + 500$$

Her er $t$ antall timer etter lekkasjen startet, og mengden vann er målt i antall liter.

>[!oppgave]
>a) Hvor lang tid vil det gå før vannmengden er halvert?
>b) Bestem $V'(12)$ og $V''(12)$. Gi en praktisk tolkning av svarene.
>c) Undersøk om $V$ har asymptoter, og gi en praktisk tolkning av verdien til eventuelle asymptoter.

## Fasit

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pastander-om-grenseverdi-og-deriverbarhet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Påstander om grenseverdi og deriverbarhet

Avgjør om hver enkelt påstand nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Hvis $\lim_{x\to\infty} f(x) = \lim_{x\to\infty} g(x)$ og $\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty} g(x)$, så er $f(x) = g(x)$.
>b) **Påstand:** Funksjonen $f(x) = |x|$ er deriverbar for alle $x \in \mathbb{R}$, bortsett fra i $x = 0$.
>c) **Påstand:** For likningen $a^x = a^y$, der $a \in \mathbb{R}$, er løsningen alltid $x = y$.

## Fasit

</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fiskepopulasjon-og-logistisk-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Fiskepopulasjon og logistisk modell

Forskere har registrert en ny fiskeart i en innsjø. I tabellen nedenfor ser du hvor mange fisk av arten det var i innsjøen noen måneder etter at arten først ble registrert.

| Måneder etter første registrering | 0 | 1   | 2   | 3 | 4  | 5  | 6  | 7  | 8  |
|-----------------------------------|---|-----|-----|---|----|----|----|----|-----|
| Antall tusen fisk                 | 1 | 2,5 | 5,5 | 9 | 14 | 22 | 32 | 45 | 60 |

Fiskepopulasjonen kan beskrives med en modell på formen

$$A(t) = A_0 \cdot k^t$$

der $A(t)$ er antall tusen fisk $t$ måneder etter første registrering.

>[!oppgave]
>a) Bestem $A_0$ og $k$, og gi en praktisk tolkning av disse verdiene.

Fiskepopulasjonen kan også beskrives med en logistisk modell på formen

$$N(t) = \frac{B}{1 + \dfrac{B - N_0}{N_0} e^{-r \cdot t}}$$

$B$ er bæreevnen, $N_0$ er antall tusen fisk ved $t = 0$ og $r$ er vekstparameteren.

>[!oppgave]
>b) Bestem $N_0$, $B$ og $r$.
>c) Bestem den deriverte til funksjonene du fant i oppgavene a) og b). Forklar hvordan vekstfarten endrer seg ifølge hver av de to modellene.
>d) Hvilken modell mener du beskriver den praktiske situasjonen best? Hvor mange fisk vil det være 12 måneder etter første registrering, ifølge denne modellen?

## Fasit

a) $A_0 \approx 1{,}60$, $k \approx 1{,}63$. Populasjonen starter på ca. 1 600 fisk og vokser med ca. 63 % per måned.
b) $N_0 \approx 1{,}92$, $B \approx 111{,}37$, $r \approx 0{,}52$.
c) $A'(t) = A_0 \cdot \ln(k) \cdot k^t \approx 0{,}782 \cdot 1{,}63^t$ — alltid voksende. $N'(t) = r \cdot N(t)\!\left(1 - \tfrac{N(t)}{B}\right)$ — øker til vendepunktet ved $t \approx 7{,}7$ ($N \approx 55{,}7$), deretter avtar den.
d) Den logistiske modellen passer best. $N(12) \approx 100{,}8$ tusen fisk.

## Løsningsforslag

GeoGebra CAS-sesjon (alle deloppgaver):

![GeoGebra CAS – eksponential og logistisk modell, deriverte og vendepunkt](/img/user/_resources/r1-h24-2-3.png)

Graf med begge modeller og datapunkter:

![Graf – eksponentialmodell (rød) og logistisk modell (blå) med datapunkter (grønn)](/img/user/_resources/r1-h24-2-3-graf.png)

### a

Vi legger inn datapunktene i GeoGebra og utfører eksponentiell regresjonsanalyse. GeoGebra gir (linje 3 i CAS):

$$A(t) = 1{,}60 \cdot 1{,}63^t$$

**$A_0 \approx 1{,}60$ og $k \approx 1{,}63$.**

Praktisk tolkning:

- $A_0 = 1{,}60$ betyr at det var ca. **1 600 fisk** i innsjøen da arten ble første gang registrert ($t = 0$).
- $k = 1{,}63 = 1 + 0{,}63$ betyr at populasjonen vokser med ca. **63 % per måned** ifølge denne modellen.

### b

Vi utfører logistisk regresjonsanalyse i GeoGebra og får (linje 4 i CAS):

$$N(t) = \frac{111{,}37}{1 + 56{,}88 \cdot e^{-0{,}5244\,t}}$$

Sammenlikner vi med oppgavens form $N(t) = \dfrac{B}{1 + \dfrac{B - N_0}{N_0} e^{-r\,t}}$, leser vi av:

$$B = 111{,}37, \qquad \frac{B - N_0}{N_0} = 56{,}88 \;\Rightarrow\; N_0 = \frac{B}{1 + 56{,}88} \approx 1{,}92, \qquad r = 0{,}5244$$

**$N_0 \approx 1{,}92$, $B \approx 111{,}37$, $r \approx 0{,}52$.**

### c

**Eksponentialmodellen** $A(t) = A_0 \cdot k^t$ deriveres med kjerneregelen ($k^t = e^{t \ln k}$):

$$A'(t) = A_0 \cdot \ln(k) \cdot k^t$$

Fra linje 5 i CAS:

$$A'(t) \approx 0{,}782 \cdot 1{,}63^t$$

Siden $A'(t) > 0$ for alle $t$ og faktoren $1{,}63^t$ vokser uten begrensning, **øker vekstfarten hele tiden** — eksponentialmodellen gir alltid raskere og raskere vekst.

**Den logistiske modellen** $N(t) = \dfrac{B}{1 + \frac{B-N_0}{N_0}e^{-rt}}$ har derivert (linje 4 viser formen, beregnet analytisk):

$$N'(t) = r \cdot N(t) \cdot \left(1 - \frac{N(t)}{B}\right)$$

Vekstfarten avhenger både av nåværende populasjonsstørrelse $N(t)$ og av hvor nær bæreevnen $B$ populasjonen er. Vekstfarten er størst i **vendepunktet**, som finnes der $N(t) = B/2$. Vi beregner (linje 6 og 7 i CAS):

$$t_{\text{vend}} = \frac{\ln(56{,}88)}{0{,}5244} \approx 7{,}7 \text{~måneder}, \qquad N(t_{\text{vend}}) = \frac{B}{2} \approx 55{,}7 \text{~(tusen fisk)}$$

Maksimal vekstfart (linje 8 i CAS):

$$N'(t_{\text{vend}}) = \frac{r \cdot B}{4} \approx \frac{0{,}5244 \cdot 111{,}37}{4} \approx 14{,}6 \text{~(tusen fisk per måned)}$$

**Oppsummering:** Den logistiske modellen gir vekstfart som øker frem til $t \approx 7{,}7$ måneder, deretter avtar vekstfarten mot null når populasjonen nærmer seg bæreevnen $B \approx 111{,}4$ tusen fisk.

### d

**Den logistiske modellen passer best** for denne praktiske situasjonen. Begrunnelse:

- En fiskepopulasjon i en avgrenset innsjø har ikke ubegrenset tilgang på mat og plass. Bæreevnen $B$ representerer den maksimale populasjonen som innsjøen kan bære — en biologisk realistisk øvre grense.
- Eksponentialmodellen forutsetter evig ubegrenset vekst, noe som er urealistisk i et lukket økosystem. Ved $t = 12$ gir den $A(12) \approx 266$ tusen fisk — mer enn dobbelt så mye som bæreevnen til den logistiske modellen.
- Datapunktene viser tydelig at vekstfarten bremser opp mot slutten av observasjonsperioden (jf. grafen), noe som stemmer med logistisk atferd.

Ifølge den logistiske modellen vil det være

$$N(12) = \frac{111{,}37}{1 + 56{,}88 \cdot e^{-0{,}5244 \cdot 12}} \approx \mathbf{\underline{\underline{100{,}8 \text{~(tusen fisk)}}}}$$

12 måneder etter første registrering — det vil si omtrent **100 800 fisk**.


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestem-grunntall-i-logaritmefunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestem grunntall i logaritmefunksjon

I koordinatsystemet nedenfor ser du grafen til en funksjon $f$ gitt ved

$$f(x) = \log_a(x)$$

![Graf av logaritmefunksjon med ukjent grunntall](/img/user/_resources/s1-h24-2-3.jpeg){width=60%}

>[!oppgave]
>Bestem $a$. Husk å argumentere for at svaret ditt er riktig.

## Fasit

</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/omvendt-funksjon-fra-graf/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Omvendt funksjon fra graf

Nedenfor ser du grafene til funksjonene $f$, $g$ og $h$.

![Grafene til f, g og h](/img/user/_resources/r1-h24-2-5.jpeg){width=60%}

>[!oppgave]
>a) Avgjør og begrunn for hver av funksjonene om de har en omvendt funksjon.
>b) Bestem funksjonsuttrykket og definisjonsmengden til den omvendte funksjonen i de tilfellene den eksisterer.

## Fasit

</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/posisjonsvektorer-for-smafugler-og-rovfugl/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Posisjonsvektorer for småfugler og rovfugl

To småfugler er ute og flyr. Posisjonen til de to fuglene er gitt ved

$$\vec{r}_1(t) = [-10 + 6t,\ 35 - 3t] \quad \text{og} \quad \vec{r}_2(t) = [2 + 5t,\ 4t]$$

Tiden $t$ er målt i sekunder, og enhetene langs aksene er målt i meter.

>[!oppgave]
>a) Hvor fort flyr hver av de to småfuglene?
>b) Hvor stor er avstanden mellom småfuglene når $t = 0$?
>c) På hvilket tidspunkt er småfuglene nærmest hverandre, og hvor langt unna hverandre er de da?

En rovfugl er også ute og flyr og oppdager småfuglene ved tidspunktet $t = 0$. Posisjonen til rovfuglen de første 6 sekundene er gitt ved

$$\vec{r}_R(t) = [7t - 10,\ 2t^2 - 6t + 5]$$

>[!oppgave]
>d) Gjør nødvendige beregninger og beskriv jakten rovfuglen har på småfuglene.

## Fasit

</div></div>


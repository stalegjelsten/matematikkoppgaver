---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"h24","date":"2024-11-14","title":"S1 eksamen H2024","dg-publish":true,"contentClasses":"eksamen-side","permalink":"/eksamener/s1-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"h24","date":"2024-11-14","title":"S1 eksamen H2024","contentClasses":"eksamen-side","permalink":"/eksamener/s1-eksamen-h2024/"}}
---

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/derivasjon-av-eksponentialfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Derivasjon av eksponentialfunksjon

>[!oppgave]
>Deriver funksjonen
>$f(x) = \frac{e^{2x}}{x}$

## Fasit


## Løsningsforslag

Funksjonen består av en brøk med funksjoner i både teller og nevner, så vi må bruke kvotientregelen når vi deriverer.
$
f(x)=\frac{u}{v}\implies f'(x)=\frac{u'v+uv'}{v^{2}}
$
$
f'(x)=\frac{2e^{2x} \cdot x + e^{2x}\cdot 1}{x^{2}}=\underline{\underline{e^{2x} \frac{2x+1}{x^{2}}}}
$


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


## Løsningsforslag

Jeg ser at programmet består av en funksjon $O(x)$ som muligens er en overskuddsfunksjon. `while`-løkka i programmet kjører så lenge $O(x+1)>O(x)$, altså kjører løkka så lenge $O(x)$ stiger. Inni løkka økes $x$-verdien med 1, altså vil programmet skrive ut $x$-koordinaten til toppunktet til $O(x)$.

Den enkleste måten å bestemme toppunktet på er å derivere $O$ og sette lik null.
$
\begin{aligned}
O'(x)&=-0{,}2x+2000 \\
-0{,}2x+2000 &= 0\\
0{,}2x&=2000\\
x&=10\,000
\end{aligned}
$
**Programmet skriver ut 10 000.**


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/eksponentiallikning-med-substitusjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Eksponentiallikning med substitusjon

>[!oppgave]
>Løs likningen
>$100^x - 3 \cdot 10^x = 4$

## Fasit


## Løsningsforslag

Jeg ser at likningen består av tierpotenser.
$
\begin{aligned}
100^{x}-3 \cdot 10^{x}&=4\\
\left( 10^{x} \right)^{2}  -3 \cdot 10^{x} - 4&=0\\
\end{aligned}
$
Dette ser jeg at kan skrives som en andregradslikning hvor $u=10^{x}$.
$
u^{2}-3u-4=0 \implies \underbrace{ (u-4)(u+1)=0 }_{ \text{Heltallsmetode} } \implies \underline{ u= 4 \vee u=-1} 
$
Vi bytter substituerer tilbake.
$
\begin{aligned}
10^{x}&=4 \vee \underbrace{ \cancel{ 10^{x}=-1 } }_{ 10^{x} \text{ er positivt} } \\
\log 10^{x} &= \log 4\\
x&= \log 4
\end{aligned}
$
**Løsningen er $\underline{\underline{x=\log 4}}$**.


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdi-for-rasjonalt-uttrykk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdi for rasjonalt uttrykk

>[!oppgave]
>Finn grenseverdien hvis den eksisterer.
>$\lim_{x \to \infty} \frac{x^2 + x - 12}{2x^2 - 18}$

## Fasit


## Løsningsforslag

Vi ser at både teller og nevner går mot uendelig når $x \to \infty$. Vi kan altså bruke L'Hopitals regel.
$
\lim_{ x \to \infty } \frac{x^{2}+x-12}{2x^{2}-18}=\lim_{ x \to \infty } \frac{2x+1}{4x}=\lim_{ x \to \infty } \frac{2+\frac{1}{x}}{4}=\frac{2+0}{4}=\frac{1}{2}
$
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


## Løsningsforslag

### 1-5a
For å ta to kuler av samme farge må Audun enten ta to røde ($R$), to blå ($B$) eller to gule ($G$) kuler. Det er 9 kuler i kassa.
$
\begin{aligned}
P(\text{To samme farge})&=P(2R)+P(2B)+(2G)\\
&=\frac{4}{9} \cdot \frac{3}{8} + \frac{3}{9} \cdot \frac{2}{8} + \frac{2}{9}\cdot \frac{1}{8}\\
&=\frac{12+6+2}{72}=\frac{5}{18}
\end{aligned}
$
**Sannsynligheten for å ta to kuler av samme farge er $\underline{\underline{\frac{5}{18}}}$**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/identifiser-funksjon-fra-vekstfart-og-derivert/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Identifiser funksjon fra vekstfart og derivert

I koordinatsystemet nedenfor ser du grafene til tre funksjoner, $f$, $g$ og $h$. En av funksjonene har gjennomsnittlig vekstfart lik $\frac{1}{2}$ i intervallet $\left[0, 4\right]$, og derivert lik 1 når $x = 1$.

![Koordinatsystem med tre funksjoner f, g og h](/img/user/_resources/s1-h24-1-6.jpeg)

>[!oppgave]
>Hvilken av funksjonene er dette? Husk å begrunne svaret ditt.

## Fasit


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


## Løsningsforslag

### 2-2a
Vi kan finne gjennomsnittlig vekstfart i intervallet ved å beregne
$
\frac{f(4)-f(1)}{3}=\frac{4^{2}+2-\left( 1^{2}+2 \right) }{3}=\frac{16+2-1-2}{3}=\frac{15}{3}=\underline{\underline{5}}
$
**Påstanden stemmer. Den gjennomsnittlige vekstfarten i intervallet er 5.**

### Oppgave 2-2b
Påstanden sier at dersom to funksjoner har samme grenseverdier når $x \to \pm \infty$, så er de like.

Det er enkelt å finne eksempler som motbeviser dette, for eksempel vil $f(x)=\frac{1}{x}$ og $g(x)=\frac{2}{x}$ begge gå mot null når $x \to \pm\infty$.

**Påstanden er usann. Det finnes eksempler hvor $f(x)\neq g(x)$.**

### Oppgave 2-2c

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

$f(x) = \log_a(x)$

![Graf av logaritmefunksjon med ukjent grunntall](/img/user/_resources/s1-h24-2-3.jpeg)

>[!oppgave]
>Bestem $a$. Husk å argumentere for at svaret ditt er riktig.

## Fasit


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


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/optimalisering-av-parkeringsinntekt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Optimalisering av parkeringsinntekt

Stephanie leier ut parkeringsplasser. Hun leier ut plasser for 1000 kroner per plass per måned. Med denne prisen er samtlige plasser utleid. Dersom hun øker prisen, vil antallet utleide plasser minke med én for hver gang prisen øker med 50 kroner. Hvis hun øker prisen til 1500 kroner per plass, vil hun ha samme inntekt som nå.

>[!oppgave]
>a) Vis at Stephanie har 30 parkeringsplasser.
>b) Hva er den største mulige månedlige inntekten som Stephanie kan få?

## Fasit


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/overskuddsoptimalisering-for-batmotorer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Overskuddsoptimalisering for båtmotorer

Bedriften Skipsmotor AS ønsker å optimalisere produksjonen av båtmotorer i Norge. Inntektene og kostnadene ved produksjon og salg av $x$ båtmotorer per år er gitt ved

$I(x) = 250x - 0{,}5x^2$
$K(x) = 70x + 600$

$I(x)$ og $K(x)$ er gitt i 1000 kroner.

>[!oppgave]
>a) Bestem $I'(15)$. Gi en praktisk tolkning av svaret.
>b) Hvor mange båtmotorer må Skipsmotor AS selge for at overskuddet skal bli størst mulig? Hvor stort er dette overskuddet?

Skipsmotor AS frykter at høy produksjon vil føre til dårligere kvalitet. De antar at de 50 første motorene produseres uten feil, og at 10 % av motorene etter dette ikke kan selges.

>[!oppgave]
>c) Bestem det største overskuddet Skipsmotor AS kan få dersom denne antakelsen er riktig.

## Fasit


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


## Løsningsforslag

>[!tip] Bayes setning
>
>Denne oppgaven er enklest å løse dersom du kjenner til Bayes setning:
> $ P(A\vert B )= \frac{P(B \vert A) \cdot P(A)}{P(B)} $
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
$
P(T_{S})+P(T_{\bar{S}}) =\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%} + \textcolor{tomato}{99 \,\%}  \cdot \textcolor{maroon}{2} \,\%= \textcolor{darkblue}{3\,\% \cdot 99 \,\%}
$

Sannsynligheten for at en person med positiv test er smittet er altså
$
\frac{\text{gunstige utfall}}{\text{mulige utfall}}= \frac{\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}}{\textcolor{darkblue}{3\,\% \cdot 99 \,\%}}= \frac{1}{3}\approx \underline{\underline{ 33{,}3 \, \% }}
$


</div></div>


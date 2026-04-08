---
{"tags":["eksamen"],"fag":["1p"],"eksamen":"v23","del2_tid":4,"title":"1P eksamen V2023","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/1p-eksamen-v2023/","permalink":"/eksamener/1p-eksamen-v2023/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["1p"],"eksamen":"v23","del2_tid":4,"title":"1P eksamen V2023","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Gjennomsnittstemperatur på Svalbard](https://matematikkoppgaver.vercel.app/gjennomsnittstemperatur-pa-svalbard/) | geogebra, gjennomsnittlig vekstfart | ✔︎ |
| [2-2](#oppgave-2-2) | [Bredden av teltplassen](https://matematikkoppgaver.vercel.app/bredden-av-teltplassen/) | excel, utforskning | ✔︎ |

# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/gjennomsnittstemperatur-pa-svalbard/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Gjennomsnittstemperatur på Svalbard

De siste årene har Lars bodd på Svalbard fra 1. februar til 1. oktober. Hvert år har han målt temperaturen utenfor huset sitt på ulike tidspunkt noen dager hver uke.

Han har funnet at funksjonen $T$ gitt ved

$$
T(x)=0{,}048 x^{4}-1{,}4 x^{3}+13{,}36 x^{2}-45{,}8 x+35{,}2 \quad, \quad x \in[2,10]
$$

er en rimelig bra modell for gjennomsnittstemperaturen $T(x) \degree \mathrm{C}$ hvert døgn de månedene han bor på Svalbard, når han lar $x=2$ svare til 1. februar, $x=3$ til 1. mars, $x=4$ til 1 . april og så videre.

>[!oppgave]
>a) Omtrent hvor mange døgn i perioden 1. februar-1. oktober er gjennomsnittstemperaturen over $0 \degree \mathrm{C}$ ifølge modellen?

>[!oppgave]
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(3, T(3))$ og $(7, T(7))$. Gi en praktisk tolkning av dette stigningstallet.

*Denne oppgaven har også én c)-oppgave som passer for 1T: [[Gjennomsnittstemperatur på Svalbard og den deriverte\|Gjennomsnittstemperatur på Svalbard og den deriverte]]*

## Fasit

a) ca 95–96 døgn
b) Gjennomsnittlig vekstfart er 5,04. Gjennomsnittlig øker temp med 5,04 ºC per måned

## Løsningsforslag

### 2-1a
Jeg tegnet grafen til funksjonen og fant skjæringspunktene ved $x$-aksen, hvor temperaturen er 0 °C, se punkt $B$ og $C$. 

![Del 2 oppgave 1. Gjennomsnittemperatur på Svalbard 1. februar–1. oktober](/img/user/_resources/1t-v2023-2-1a.png){ width=80% }

Det er $8{,}906-5{,}772=3{,}134$ måneder mellom skjæringspunktene. Jeg setter at det er 30,5 døgn i hver måned slik at vi får:

$$
3{,}134\cdot 30{,}5=95{,}6 \approx  \underline{\underline{96}}
$$

**Temperaturen er over 0 °C i omtrent 96 døgn**

### 2-1b
Jeg la inn punktene i GeoGebra, dro en linje mellom dem og fant stigningstallet, se $b=5{,}04$ i utklippet.

![Del 2 oppgave 1b. Gjennomsnittlig vekstfart fra mars til juli](/img/user/_resources/1t-v23-2-1b.png){ width=80% }

Stigningstallet til linja gir den gjennomsnittlige vekstfarten fra $x=3$ til $x=7$. 

**Temperaturen steg med 5,04 grader per måned i gjennomsnitt i perioden fra 1. mars til 1. juli.**

### 2-1c
Jeg tegnet $T'$ sammen med $T$ i koordinatsystemet og fant nullpunkter og ekstremalpunkter til $T'$. 

![Del 2 oppgave 1c. Vekstfarten til temperaturen på Svalbard](/img/user/_resources/1t-v23-2-1c.png){ width=80% }

$$
\begin{aligned}
\text{Toppunkt (M)}:& \quad (4{,}69 , 6{,}94)\\
\text{Bunnpunkt (N)}:& \quad (9{,}90 , -6{,}62)\\
\text{Nullpunkter (G og H):}& \quad (2{,}76 , 0)\text{ og } (7{,}33 , 0)
\end{aligned}
$$

Jeg sammenlignet disse punktene med tilsvarende punkter på grafen til $T$. 

Nullpunktene til $T'$ ligger ved samme $x$-verdi som ekstremalpunktene til $T$. $y$-koordinatene til nullpunktene til $T'$ er selvsagt null, og det stemmer godt med at vekstfarten i ekstremalpunktene til $T$ er null. **Ved hjelp av nullpunktene til $T'$ finner vi den kaldeste temperaturen i bunnpunktet 23. februar og den varmeste temperaturen i toppunktet 10. juli.** 

Toppunktet til $T'$ er er ved $x=4,69$ og $y=6,94$. Det vil si at rundt den 21. april vil temperaturen øke raskest. **Gjennomsnittstemperaturen stiger raskest med 6,94 grader per måned rundt 21. april.**

Bunnpunktet til $T'$ er er ved $x=9,90$ og $y=-6,62$. Det vil si at rundt den 27. september vil temperaturen synke raskest. **Gjennomsnittstemperaturen synker raskest med 6,62 grader per måned rundt 27. september.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bredden-av-teltplassen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bredden av teltplassen

![1t eksamen v2023 teltplass.excalidraw.png](/img/user/_resources/1t%20eksamen%20v2023%20teltplass.excalidraw.png)

En gruppe speidere har slått opp telt ved en elv. De har et tau som er 80 m langt, og fire pinner. Tauet og pinnene skal de bruke til å sette opp et gjerde rundt teltet. Området de gjerder inn, skal ha form som et rektangel, og de vil ikke sette opp gjerde langs elven. Se skissen ovenfor.

>[!oppgave]
>a) Hvor stort blir arealet av området dersom de velger at lengden skal være 60 meter?

Herman påstår at arealet av området blir størst dersom lengden er dobbelt så lang som bredden.

>[!oppgave]
>b) Lag en systematisk oversikt som viser arealet av ulike områder som de kan gjerde inn. Bruk oversikten til å argumentere for at Herman sin påstand kan være riktig.

Josefine lurer på om de kan tegne en graf som viser at Herman har rett. Hun prøver å sette opp et funksjonsuttrykk som hun kan bruke.

>[!oppgave]
>c) Sett opp et funksjonsuttrykk for Josefine. Tegn grafen og vis at Hermann sin påstand er riktig. 

## Fasit

a) 600 m²
b) Herman har rett
c) En mulighet er $A(x)=x\cdot (80-2x)$

## Løsningsforslag

### 2-2a
Med 80 m tau og et område med lengde 60 m så har de 20 m igjen å fordele til de to siste sidene. Matematisk kan vi skrive $\frac{80-60}{2}=10$. Bredden blir altså 10 m.

$$
A=10\cdot 60=600
$$

**Arealet av området er 600 m².**

### 2-2b
Jeg satte opp en oversikt i Excel, se formlene i formelutklippet. Vi ser at arealet øker når bredden øker helt fram til lengden er 40 m og bredden er 20 m, deretter minker arealet. 

![Del 2 oppgave 2b. Oversikt over lengde og bredde av teltplass](/img/user/_resources/1t-v23-2-2b.png){ width=80% } 

**Hermann har rett i at vi får det største arealet dersom lengden er dobbelt så lang som bredden.**

### 2-2c
La oss kalle bredden i meter for $x$. Da må lengden i meter være $80-2x$. Vi kan sette opp et funksjonsuttrykk for arealet $A(x)$ der bredden er $x$ meter.

$$
A(x)=(80-2x)\cdot x
$$

![Del 2 oppgave 2c. Areal av teltplass som funksjon av bredden](/img/user/_resources/1t-v23-2-2c.png) \ 

Jeg tegnet denne grafen i GeoGebra og fant toppunktet, se punkt $B$. 
**Toppunktet ligger ved bredden $x=20$, så Hermann sin påstand er riktig.**


</div></div>


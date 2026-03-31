---
{"tags":["eksamen"],"fag":["r1"],"eksamen":"v24","date":"2024-05-24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen V2024","dg-publish":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r1-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r1"],"eksamen":"v24","date":"2024-05-24","del1_tid":1,"del2_tid":4,"title":"R1 eksamen V2024","contentClasses":"eksamen-side","permalink":"/eksamener/r1-eksamen-v2024/"}}
---

## Oversikt

**Del 1** — 1 time — uten hjelpemidler

| Oppgave | Navn | Temaer | Løsningsforslag |
| ------- | ---- | ------ | --------------- |
| 1-1 | [[Derivasjon med produktregel og ln\|Derivasjon med produktregel og ln]] | derivasjon, logaritmer | ❌ |
| 1-2 | [[Logaritmeligningen med substitusjon\|Logaritmeligningen med substitusjon]] | logaritmer, likninger | ❌ |
| 1-3 | [[Grenseverdier av eksponentialfunksjon\|Grenseverdier av eksponentialfunksjon]] | eksponentialfunksjoner, grenseverdi | ❌ |
| 1-4 | [[Tre punkter på linje og rettvinklet trekant\|Tre punkter på linje og rettvinklet trekant]] | vektorer, geometri, likninger | ❌ |
| 1-5 | [[Kontinuerlig funksjon med størst mulig definisjonsmengde\|Kontinuerlig funksjon med størst mulig definisjonsmengde]] | kontinuitet, funksjoner, delt forskrift | ❌ |

**Del 2** — 4 timer — med hjelpemidler

| Oppgave | Navn | Temaer | Løsningsforslag |
| ------- | ---- | ------ | --------------- |
| 2-1 | [[Influensaepidemi og logistisk vekst\|Influensaepidemi og logistisk vekst]] | logistisk funksjon, derivasjon, asymptoter, modellering | ❌ |
| 2-2 | [[Påstander om logaritme, derivasjon og invers\|Påstander om logaritme, derivasjon og invers]] | logaritmer, derivasjon, funksjoner, argumentasjon, delt forskrift | ❌ |
| 2-3 | [[To biler på kryss og motorvei\|To biler på kryss og motorvei]] | vektorer, derivasjon, modellering | ❌ |
| 2-4 | [[Momentmagnitudeskala og energi\|Momentmagnitudeskala og energi]] | logaritmer, eksponentialfunksjoner, modellering | ❌ |
| 2-5 | [[Modell for drivstoffutvikling i Moss\|Modell for drivstoffutvikling i Moss]] | regresjon, modellering, eksponentiell vekst | ❌ |
| 2-6 | [[Innskrevet rektangel og Lars sitt program\|Innskrevet rektangel og Lars sitt program]] | derivasjon, programmering, funksjonsdrøfting | ❌ |
| 2-7 | [[Pyramide i halvkule – størst mulig volum\|Pyramide i halvkule – størst mulig volum]] | geometri, derivasjon | ❌ |

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


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdier-av-eksponentialfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdier av eksponentialfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = e^{-x+1}, \quad D_f = \mathbb{R}.$$

>[!oppgave]
>Bestem grenseverdiene $\lim_{x\to\infty} f(x)$ og $\lim_{x\to-\infty} f(x)$ dersom de eksisterer.

## Fasit


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
>
>b) En funksjon $f$ er gitt ved
>$$f(x) = \begin{cases} x^3 - 2\text{,} & x < 2 \\ 3x^2 - 4\text{,} & x \ge 2 \end{cases}$$
>**Påstand:** Funksjonen er deriverbar i $x = 2$.
>
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


![Personbiler per drivstofftype i Moss. Kilde: Skjermdump av ssb.no, utdrag fra tabell 07849](/img/user/_resources/s1-v24-2-6-moss.png)

## Fasit


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/innskrevet-rektangel-og-lars-sitt-program/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Innskrevet rektangel og Lars sitt program

En funksjon $f$ er gitt ved

$$f(x) = -x^2 + 4, \quad 0 \le x \le 2.$$

Lars har tegnet grafen til $f$ med et innskrevet rektangel $ABCD$. Lars har også skrevet et program.

<!-- two-column start left-width=40% -->

![Grafen til $f(x)$](/img/user/_resources/s1-v24-2-7.jpeg)

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


</div></div>


## Oppgave 2-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pyramide-i-halvkule-storst-mulig-volum/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Pyramide i halvkule – størst mulig volum

En kule med radius $r$ deles i to like deler. Vi skal skjære ut en pyramide med rektangulær grunnflate av den ene halvkulen. Grunnflaten skal ligge i snittflaten til halvkulen.

![Halvkule med innskrevet pyramide](/img/user/_resources/s1-v24-2-8.jpeg)

Volumet av en pyramide er gitt ved

$$V = \frac{h \cdot G}{3},$$

der $G$ er grunnflaten og $h$ er høyden til pyramiden.

>[!oppgave]
>Bestem et uttrykk for det største volumet en slik pyramide kan ha.

## Fasit


</div></div>


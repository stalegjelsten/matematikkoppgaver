---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s1-eksamen-v2024/","permalink":"/eksamener/s1-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Derivasjon med produktregel og ln](https://matematikkoppgaver.vercel.app/derivasjon-med-produktregel-og-ln/) | derivasjon, logaritmer | × |
| [1-2](#oppgave-1-2) | [Logaritmeligningen med substitusjon](https://matematikkoppgaver.vercel.app/logaritmeligningen-med-substitusjon/) | logaritmer, likninger | × |
| [1-3](#oppgave-1-3) | [Grenseverdier av eksponentialfunksjon](https://matematikkoppgaver.vercel.app/grenseverdier-av-eksponentialfunksjon/) | eksponentialfunksjoner, grenseverdi | × |
| [1-4](#oppgave-1-4) | [Sokker trukket fra skuff](https://matematikkoppgaver.vercel.app/sokker-trukket-fra-skuff/) | sannsynlighet, kombinatorikk | × |
| [1-5](#oppgave-1-5) | [Kontinuerlig funksjon med størst mulig definisjonsmengde](https://matematikkoppgaver.vercel.app/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/) | kontinuitet, funksjoner, delt forskrift | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Edison biler – overskudd og enhetskostnad](https://matematikkoppgaver.vercel.app/edison-biler-overskudd-og-enhetskostnad/) | økonomi, derivasjon, enhetskostnad | × |
| [2-2](#oppgave-2-2) | [Logaritme- og binomialpåstander](https://matematikkoppgaver.vercel.app/logaritme-og-binomialpastander/) | logaritmer, kombinatorikk, argumentasjon | × |
| [2-3](#oppgave-2-3) | [Kombinatorikk for passord](https://matematikkoppgaver.vercel.app/kombinatorikk-for-passord/) | kombinatorikk | ✔︎ |
| [2-4](#oppgave-2-4) | [Kuler i boks og hypergeometrisk sannsynlighet](https://matematikkoppgaver.vercel.app/kuler-i-boks-og-hypergeometrisk-sannsynlighet/) | sannsynlighet, kombinatorikk | × |
| [2-5](#oppgave-2-5) | [Terninger – alle ulike og simulering](https://matematikkoppgaver.vercel.app/terninger-alle-ulike-og-simulering/) | sannsynlighet, simulering | × |
| [2-6](#oppgave-2-6) | [Modell for drivstoffutvikling i Moss](https://matematikkoppgaver.vercel.app/modell-for-drivstoffutvikling-i-moss/) | regresjon, modellering, eksponentiell vekst | × |
| [2-7](#oppgave-2-7) | [Innskrevet rektangel og Lars sitt program](https://matematikkoppgaver.vercel.app/innskrevet-rektangel-og-lars-sitt-program/) | derivasjon, programmering, funksjonsdrøfting | × |
| [2-8](#oppgave-2-8) | [Pyramide i halvkule – størst mulig volum](https://matematikkoppgaver.vercel.app/pyramide-i-halvkule-storst-mulig-volum/) | geometri, derivasjon | × |

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sokker-trukket-fra-skuff/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sokker trukket fra skuff

I en skuff ligger det 6 gule, 5 svarte og 4 hvite sokker.

>[!oppgave]
>a) Tenk deg at du tar 2 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at begge sokkene er gule.
>b) Tenk deg at du tar 3 sokker tilfeldig fra skuffen. Bestem sannsynligheten for at minst 2 av sokkene har samme farge.

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/edison-biler-overskudd-og-enhetskostnad/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Edison biler – overskudd og enhetskostnad

Bedriften Edison produserer biler. Kostnaden (oppgitt i 1000 kroner) ved å produsere $x$ biler per måned er gitt ved

$$K(x) = 200x \cdot 1{,}015^{x} + 200.$$

Edison selger alle bilene de produserer. Hver bil selges for 600 000 kroner.

>[!oppgave]
>a) Hvilken produksjonsmengde gir størst mulig overskudd?
>b) Hvilken produksjonsmengde gir lavest mulig enhetskostnad?

En måned trenger et firma 70 biler. De er villige til å betale mer enn 600 000 kroner per bil. Firmaet inngår en kontrakt om at Edison skal lage 70 biler denne måneden og selge alle til dem. Kontrakten gir Edison et overskudd på 15 millioner kroner.

>[!oppgave]
>c) Hvilken pris ble avtalt per bil i denne kontrakten?

## Fasit


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritme-og-binomialpastander/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritme- og binomialpåstander

Avgjør om hver av påstandene nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:**  
>
> $$\text{Når } x > 0 \text{, er } e^{k \cdot \ln(x)}=x^{k}$$
>
>b) **Påstand:**  
>
>$$\text{Når } 1 < a < \dfrac{b}{2} \text{, er } \binom{b}{a+1} > \binom{b}{a}$$

## Fasit


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kombinatorikk-for-passord/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kombinatorikk for passord

En skole har regler for å lage passord.

**Regelsett 1**

- Passordet må ha nøyaktig 6 tegn.
- Det er bare lov å bruke store og små bokstaver.
- Det må være minst én stor bokstav i passordet.
- Det må være minst én liten bokstav i passordet.

>[!oppgave]
>a) Hvor mange forskjellige passord er det mulig å lage ved å følge regelsett 1?

Skolen vil øke sikkerheten og legger til flere krav for å lage passord. De lager et nytt sett med regler.

**Regelsett 2**

- Passordet må ha nøyaktig 6 tegn.
- Det må være nøyaktig to store bokstaver i passordet.
- Det må være nøyaktig to små bokstaver i passordet.
- Det må være nøyaktig to sifre i passordet.

>[!oppgave]
>b) Gjør nødvendige beregninger for å vurdere effekten på sikkerheten av regelsett 2.

## Fasit


## Løsningsforslag

- Passordet må ha 6 tegn
- Kun store og små bokstaver
- Minst 1 stor bokstav
- Minst 1 liten bokstav

### 2-3a
Det er 29 små bokstaver og 29 store bokstaver, dette gir i utgangspunktet 58 ulike muligheter for hver av de 6 tegnene i passordet. Dersom vi ikke hadde hatt kravene om minst 1 liten og stor bokstav ville antallet kombinasjoner derfor ha vært $58^{6}$. 

Siden vi må minst ha 1 liten bokstav så kan vi ta bort de kombinasjonene som bare bruker store bokstaver ($29^6$) og de som bare bruker små bokstaver ($29^6$). Til sammen har vi da

$$
58^6-29^6-29^6=58^6-2 \cdot 29^6=36 \, 879 \, 045 \, 902
$$

**Det er 36,9 milliarder ulike passordet ifølge dette regelsettet.**

### 2-3b
Det finnes fremdeles 29 ulike store bokstaver, 29 ulike små bokstaver og det finnes 10 ulike siffer.

Hvis rekkefølgen ikke hadde spilt noen rolle ville vi fått $29^{2}\cdot 29^{2} \cdot 10^{2}=70\, 728\, 100$ kombinasjoner.

Rekkefølgen på de ulike tegnene spiller en rolle, siden vi har 6 tegn («ledige plasser») og skal plassere 3 $\times$ 2 ulike typer tegn så kan vi finne antallet permutasjoner med

$$
\frac{6!}{2!\cdot 2! \cdot 2!}=\frac{720}{8}=90
$$

Det finnes altså $70\, 728\, 100 \cdot 90=6\, 365\, 529\, 000$ ulike passord.

Det finnes omtrent 6 ganger så mange mulige passord med regelsett 1 som med regelsett 2. **Regelsett 2 vil derfor sannsynligvis gjøre sikkerheten en god del dårligere enn regelsett 1.**

>[!tip] Om passordsikkerheten ved bruk av disse reglene
>
> Selv om regelsett 1 er sikrere enn regelsett 2 betyr ikke det at det er et godt regelsett. Begge disse regelsettene vil være svært vanskelig å knekke ved manuell prøving og feiling, og svært enkle å knekke med «brute force»-metoder. Hvis en hacker hadde kjent til reglene på regelsett 1 ville hen nok først ha forsøkt alle passord som starter med 1 stor bokstav etterfulgt av 5 små bokstaver, det gir kun $29^6=94\,823\,321$ ulike passord.

>[!tip] Alternativ måte å finne antallet permutasjoner
>
>Vi kan bruke binomialkoeffisienter til å bestemme antallet permutasjoner. 
>
>- Vi vet at de to store bokstavene kan velge mellom 6 ulike ledige plasser.
>- Vi vet at de to små bokstavene kan velge mellom de 4 gjenværende ledige plassene
>- Sifrene må ta de siste to plassene
>
>$$\text{Antall permutasjoner}=\binom{6}{2}\binom{4}{2}\binom{2}{2}=15 \cdot 6 \cdot 1=90$$


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuler-i-boks-og-hypergeometrisk-sannsynlighet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuler i boks og hypergeometrisk sannsynlighet

I en boks ligger det et ukjent antall røde og hvite kuler. Du trekker tre kuler uten tilbakelegging.

>[!oppgave]
>Hva er det minste antallet røde kuler og hvite kuler det kan være i boksen for at sannsynligheten skal være mellom 17 % og 18 % for at alle kulene du trekker, er hvite?

## Fasit


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/terninger-alle-ulike-og-simulering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Terninger – alle ulike og simulering

Du kaster fem terninger.

>[!oppgave]
>a) Bestem sannsynligheten for at alle terningene viser forskjellige antall øyne.
>b) Bruk simulering til å bestemme sannsynligheten for at du får nøyaktig tre seksere.

## Fasit


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/modell-for-drivstoffutvikling-i-moss/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Modell for drivstoffutvikling i Moss

Det har vært en stor endring i hvilken type drivstoff bilene i Norge bruker. Statistisk sentralbyrå samler inn data om dette, og tabellen viser en oversikt over typen drivstoff til registrerte personbiler i Moss i perioden 2010–2022.

>[!oppgave]
>a) Bruk opplysningene i tabellen til å lage modeller du mener beskriver utviklingen i drivstofftypene bensin og elektrisk («El.») $t$ år etter 2010. Argumenter for valg av modeller.
>b) Ut fra modellene du har laget, hvordan vil du vurdere veksten i drivstofftypene bensin og elektrisk i årene framover, etter 2022? Kommenter gyldigheten til modellene dine.


![Personbiler per drivstofftype i Moss. Kilde: Skjermdump av ssb.no, utdrag fra tabell 07849](/img/user/_resources/s1-v24-2-6-moss.png){width=100% #fig:moss}

## Fasit


</div></div>


## Oppgave 2-7


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


</div></div>


## Oppgave 2-8


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


</div></div>


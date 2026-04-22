---
{"tags":["eksamen"],"fag":["1p"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"1P eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/1p-eksamen-v2024/","permalink":"/eksamener/1p-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["1p"],"eksamen":"v24","del1_tid":1,"del2_tid":4,"title":"1P eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Verdens befolkning og promille](https://matematikkoppgaver.vercel.app/verdens-befolkning-og-promille/) | prosentregning, store tall | × |
| [1-2](#oppgave-1-2) | [Ada sparer med eksponentialfunksjon](https://matematikkoppgaver.vercel.app/ada-sparer-med-eksponentialfunksjon/) | eksponentialfunksjoner, programmering | × |
| [1-4](#oppgave-1-4) | [Bremselengde og fart](https://matematikkoppgaver.vercel.app/bremselengde-og-fart/) | formler, modellering, likninger | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Modellering av bagettsalg](https://matematikkoppgaver.vercel.app/modellering-av-bagettsalg/) | regresjon, modellering, derivasjon, optimering | × |
| [2-2](#oppgave-2-2) | [Gautes sparekonto](https://matematikkoppgaver.vercel.app/gautes-sparekonto/) | sparing, vekstfaktor | ✔︎ |
| [2-3](#oppgave-2-3) | [Oljeproduksjon på norsk sokkel](https://matematikkoppgaver.vercel.app/oljeproduksjon-pa-norsk-sokkel/) | standardform, store tall, prosentvis endring | × |
| [2-4](#oppgave-2-4) | [Jakob Ingebrigtsens løpsrekorder](https://matematikkoppgaver.vercel.app/jakob-ingebrigtsens-lopsrekorder/) | gjennomsnitt, tallregning | × |
| [2-5](#oppgave-2-5) | [Knut og Sabrina tallfølge](https://matematikkoppgaver.vercel.app/knut-og-sabrina-tallfolge/) | mønstre, rekursiv sammenheng, argumentasjon | × |
| [2-6](#oppgave-2-6) | [Lufttrykk og kokepunkt for vann](https://matematikkoppgaver.vercel.app/lufttrykk-og-kokepunkt-for-vann/) | potensfunksjon, eksponentiell vekst, modellering | × |
| [2-7](#oppgave-2-7) | [Skobutikk ta 3 betal for 2](https://matematikkoppgaver.vercel.app/skobutikk-ta-3-betal-for-2/) | prosentregning, økonomi | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/verdens-befolkning-og-promille/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Verdens befolkning og promille

Anta at det på et tidspunkt vil bo 18 millioner mennesker i et land, og at dette vil tilsvare 2 promille av verdens befolkning.

>[!oppgave]
>Hvor stor vil verdens befolkning være på dette tidspunktet?

## Fasit

</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ada-sparer-med-eksponentialfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ada sparer med eksponentialfunksjon

Ada vil spare penger og har funnet ut at hun kan bruke funksjonen $f$ gitt ved

$$f(x) = 20000 \cdot 1{,}0485^{x}$$

for å regne ut hvor mye penger hun vil ha i banken om $x$ år.

>[!oppgave]
>a) Gi en praktisk tolkning av tallet 20 000 og av tallet 1,0485.

Ada har laget programmet nedenfor.

```python ln
def f(x):
    return 20000 * 1.0485 ** x

start = 0
slutt = 10

v = (f(slutt) - f(start))/(slutt - start)

print(v)
```

>[!oppgave]
>b) Hva forteller tallet som vil bli skrevet ut når hun kjører programmet?

## Fasit

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bremselengde-og-fart/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bremselengde og fart

For å regne ut bremselengder på sommerføre kan vi bruke formelen

$$B = \frac{x^2}{2}$$

Her er $B$ bremselengde (meter), og $x$ er fart (km/h) delt på 10.

På nettsidene til Viking Redningstjeneste står det at en bil som kjører i $70 \mathrm{~km/h}$, har en bremselengde på $24{,}5 \mathrm{~m}$.

>[!oppgave]
>a) Vis hvordan Viking Redningstjeneste kan ha regnet ut denne bremselengden.
>b) Hvor fort kjører en bil som har en bremselengde på $40{,}5 \mathrm{~m}$?

## Fasit

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/modellering-av-bagettsalg/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Modellering av bagettsalg

Tabellen nedenfor viser hvor mange bagetter en kantine har solgt hver av de siste sju ukene, og hvor stort overskudd salget har gitt.

| Solgte bagetter    | 100  | 130  | 160  | 175  | 190  | 220  | 235  |
| ------------------ | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Overskudd (kroner) | 1450 | 2300 | 3050 | 3365 | 3720 | 4140 | 4175 |

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $O$ gitt ved
>$$O(x) = -0{,}09x^2 + 51{,}04x - 2776{,}98$$
>er en god modell for hvor stort overskuddet en uke blir når kantinen produserer og selger $x$ bagetter i løpet av uken.
>b) Hvor mange bagetter må kantinen produsere og selge i løpet av en uke, ifølge modellen $O$, for at overskuddet skal bli størst mulig? Hvor stort blir dette overskuddet?
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(100, O(100))$ og $(200, O(200))$. Gi en praktisk tolkning av svaret du får.
>d) Bestem den momentane vekstfarten når $x = 235$. Gi en praktisk tolkning av svaret du får.

## Fasit

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/gautes-sparekonto/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Gautes sparekonto

Oppgave a) og oppgave b) nedenfor skal du løse på to ulike måter. Du skal løse hver av deloppgavene

1. ved å gjøre beregninger
2. grafisk

For fem år siden satte Gaute inn sparepengene sine på en konto med en fast rente på $3{,}25\%$ per år. I dag står det litt over $105\,607$ kroner på kontoen.

>[!oppgave]
>a) Hvor mye vil det være på kontoen om fem år?
>b) Hvor mye satte Gaute inn på kontoen for fem år siden?

## Fasit

a) 123 920 kr
b) 90 000 kr

## Løsningsforslag

Jeg lager først funksjonen $f(x)=105\,607 \cdot 1{,}0325^{x}$ ut fra opplysningene i oppgaven (3,25 % rente tilsvarer vekstfaktoren 1,0325).

**Grafisk løsning**  
For å løse oppgaven grafisk la jeg inn funksjonsuttrykket i GeoGebra og fant skjæringen med $x=-5$ og $x=5$, se punkt $A$ og $B$ i utklippet. 

![Grafisk løsning fra GeoGebra](/img/user/_resources/1p-v24-2-2-grafisk.png){width=75%}

**Beregnet løsning**  
For å løse oppgaven med beregning brukte jeg det samme funksjonsuttrykket og beregnet $f(5)$ og $f(-5)$ i CAS, se skjermbildet.

![Løsning med beregning i CAS](/img/user/_resources/1p-v24-2-2-cas.png){width=25%}

Vi runder av svarene til 90 000 kr og 123 920 kr.

**Gaute satte inn 90 000 kroner for 5 år siden, og han kommer til å ha 123 920 kroner på kontoen om renta ikke endrer seg.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/oljeproduksjon-pa-norsk-sokkel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Oljeproduksjon på norsk sokkel

Fat er en enhet for volummåling av olje.

$1 \mathrm{~fat} \approx 158{,}987 \mathrm{~liter}$

I 2023 ble det i gjennomsnitt produsert $1{,}794$ millioner fat olje på norsk sokkel hvert døgn.

>[!oppgave]
>a) Omtrent hvor mange liter olje ble det produsert på norsk sokkel i 2023? Skriv svaret på standardform.

I 2022 ble det i gjennomsnitt produsert $1{,}685$ millioner fat hvert døgn.

>[!oppgave]
>b) Hvor mange prosent steg produksjonsmengden med fra 2022 til 2023?

## Fasit

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/jakob-ingebrigtsens-lopsrekorder/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Jakob Ingebrigtsens løpsrekorder

Tabellen nedenfor viser noen av de personlige rekordene til friidrettsutøveren Jakob Ingebrigtsen.

Table: Jakob Ingebrigtsens personlige rekorder utendørs

| Dato       | Øvelse        | Tid     |
| ---------- | ------------- | ------- |
| 01.09.2017 | 400 m         | 51,03   |
| 30.06.2020 | 800 m         | 1:46,44 |
| 16.07.2023 | 1500 m        | 3:27,14 |
| 16.09.2023 | 1 engelsk mil | 3:43,73 |
| 08.09.2023 | 2000 m        | 4:43,13 |
| 17.09.2023 | 3000 m        | 7:23,63 |

Tidene er gitt i minutter (før kolon) og sekunder (etter kolon). For eksempel betyr 7:23,63 en tid på 7 minutter og 23,63 sekunder.

Alle løpene i tabellen er gjennomført på en bane der en runde er 400 meter lang.

>[!oppgave]
>a) Bestem den gjennomsnittlige rundetiden til Jakob Ingebrigtsen da han satte personlig rekord på 1500 meter.

Da Jakob Ingebrigtsen satte personlig rekord på 1 engelsk mil, holdt han en gjennomsnittsfart på omtrent $25{,}89 \mathrm{~km/h}$.

>[!oppgave]
>b) Vis hvordan vi kan bruke opplysningene om Jakob sitt rekordløp til å avgjøre omtrent hvor mange meter det er i 1 engelsk mil.

## Fasit

</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/knut-og-sabrina-tallfolge/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Knut og Sabrina tallfølge

Knut og Sabrina jobber med tallfølgen

$$2, 5, 11, 23, 47, \ldots$$

>[!blue-box] Knut
>Jeg tror jeg har oppdaget et mønster, og jeg er nokså sikker på at alle leddene bortsett fra det første er oddetall.

>[!green-box] Sabrina
>Har du funnet en formel som kan gi deg et hvilket som helst ledd i tallfølgen?

>[!blue-box] Knut
>Nei, det klarte jeg ikke, men jeg er nokså sikker på at jeg har funnet et mønster som gjør at jeg alltid kan finne det neste leddet i tallfølgen. Jeg er helt sikker på at det bare blir oddetall videre.

>[!oppgave]
>Ta utgangspunkt i det Knut og Sabrina sier og
>- beskriv et mønster for tallfølgen
>- argumenter for at alle leddene i tallfølgen bortsett fra det første er oddetall

## Fasit

</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/lufttrykk-og-kokepunkt-for-vann/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Lufttrykk og kokepunkt for vann

> [!tip] Info om lufttrykk
>
> - Lufttrykk måles ofte i hektopascal (hPa).
> - Jo høyere over havet vi befinner oss, jo lavere er lufttrykket.
> - Lufttrykket ved havets overflate er ca. 1000 hPa.

Når lufttrykket er lavere enn 1000 hPa, vil kokepunktet for vann være lavere enn $100 \degree\mathrm{C}$. Se tabellen nedenfor.

| Lufttrykk (hPa) | Kokepunkt for vann ($\degree\mathrm{C}$) |
| :-------------: | :--------------------------------------: |
|      1000       |                   100                    |
|       500       |                   81,4                   |
|       200       |                   60,1                   |
|       80        |                   41,5                   |
|       40        |                    29                    |

>[!oppgave]
>a) Bestem en modell $K$ på formen
>
>$$K(x) = a \cdot x^b$$
>
>som tilnærmet viser sammenhengen mellom lufttrykket $x$ hPa og kokepunktet $K(x)$ $\degree\mathrm{C}$.

>[!blue-box] Ari
>Betyr dette at det ikke går an å få egg hardkokte oppe på et høyt fjell? Et egg blir ikke hardkokt dersom temperaturen i vannet er lavere enn $85 \degree\mathrm{C}$.

>[!green-box] Lisa
>Det kommer vel an på hvor høyt fjellet er?

>[!blue-box] Ari
>Jeg vil lage en modell som viser hvor høyt lufttrykket er $x$ kilometer over havets overflate. Jeg har lært at lufttrykket minker med ca. 12 % per km.

>[!green-box] Lisa
>Jeg har lært at lufttrykket halveres for hver 5,5 km. Jeg vil ta utgangspunkt i dette og lage en modell på samme form som den du lager, Ari.

>[!oppgave]
>b) Lag modellene for Ari og Lisa.
>c) Omtrent hvor høyt over havet er det mulig å få egg hardkokte?

## Fasit

</div></div>


## Oppgave 2-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/skobutikk-ta-3-betal-for-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Skobutikk ta 3 betal for 2

>[!yellow-box]
>**TA 3 PAR SKO, BETAL FOR 2 PAR**
>
>Vi spanderer det rimeligste paret

Du har bestemt deg for å benytte et «Ta 3, betal for 2»-tilbud i en skobutikk. Du trenger bare to par sko selv, men du tar med deg en venn som også trenger et par sko.

Du velger et par sko som koster $800$ kroner, og et par sko som koster $1550$ kroner. Vennen din velger et par sko som koster $1350$ kroner.

>[!oppgave]
>Vis hvordan du kan bruke prosentregning til å bestemme hvor mye hver av dere bør betale. Begrunn framgangsmåten din, og forklar hvordan du har tenkt.

## Fasit

Mange ulike løsninger

## Løsningsforslag


> [!NOTE] Mange løsninger
> Her er det mange ulike måter å fordele rabatten på. Jeg tror ikke det er noe fasitsvar på hva som er riktig – det kommer an på deg og vennen din. Selv om det kanskje ikke finnes et fasitsvar så er det likevel lett å regne feil her, så sensor vil nok se på utregningene dine.

Jeg mener det er enklest og mest rettferdig at jeg får $\frac{2}{3}$ av rabatten og at vennen min får $\frac{1}{3}$ av rabatten. Snittprisen for mine to par med sko er $1175$ kroner, slik at det ikke er alt for stor forskjell på prisene på skoene våre (men jeg burde kanskje ha valgt et dyrere par, siden jeg kunne fått et til 1350 kroner i stedet).

Til sammen betaler vi $1550 \mathrm{~kr}+1350 \mathrm{~kr}=2900 \mathrm{~kr}$. Den samlede rabatten er $800$ kr. Min del av rabatten er $0{,}67 \cdot 800=536 \mathrm{~kr}$ og min venns andel er $0{,}33 \cdot 800=264\mathrm{~kr}$. 

**Jeg må betale: $1550+800-536=\underline{\underline{ 1814 \mathrm{~kr} }}$.**  
**Min venn må betale $1350-264=\underline{\underline{ 1086 \mathrm{~kr} }}$.**


</div></div>


---
{"tags":["eksamen"],"fag":["s1"],"eksamen":"v23","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2023","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s1-eksamen-v2023/","permalink":"/eksamener/s1-eksamen-v2023/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s1"],"eksamen":"v23","del1_tid":1,"del2_tid":4,"title":"S1 eksamen V2023","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Algebra potensregning](https://matematikkoppgaver.vercel.app/algebra-potensregning/) | potenser, algebra | × |
| [1-2](#oppgave-1-2) | [Deriver logaritmefunksjon](https://matematikkoppgaver.vercel.app/deriver-logaritmefunksjon/) | derivasjon, logaritmer | × |
| [1-3](#oppgave-1-3) | [Grenseverdi når x går mot 2](https://matematikkoppgaver.vercel.app/grenseverdi-nar-x-gar-mot-2/) | grenseverdi, derivasjon, funksjoner, asymptoter | × |
| [1-4](#oppgave-1-4) | [Kuler i krukke hypergeometrisk](https://matematikkoppgaver.vercel.app/kuler-i-krukke-hypergeometrisk/) | sannsynlighet, hypergeometrisk | × |
| [1-5](#oppgave-1-5) | [Ukjent program med kostnader for produksjon](https://matematikkoppgaver.vercel.app/ukjent-program-med-kostnader-for-produksjon/) | programmering, økonomi, vekstfart | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Timelønn og lønnsvekst](https://matematikkoppgaver.vercel.app/timelonn-og-lonnsvekst/) | prosent, eksponentialfunksjoner, regresjon, økonomi | × |
| [2-2a](#oppgave-2-2a) | [Logaritmepåstand](https://matematikkoppgaver.vercel.app/logaritmepastand/) | logaritmer | × |
| [2-2b](#oppgave-2-2b) | [Har alle fjerdegradsfunksjoner ekstremalpunkt](https://matematikkoppgaver.vercel.app/har-alle-fjerdegradsfunksjoner-ekstremalpunkt/) | funksjoner, funksjonsdrøfting | × |
| [2-2c](#oppgave-2-2c) | [Sannsynligheter ved lottospill](https://matematikkoppgaver.vercel.app/sannsynligheter-ved-lottospill/) | sannsynlighet, hypergeometrisk | × |
| [2-5](#oppgave-2-5) | [Billetter til fotballkamp](https://matematikkoppgaver.vercel.app/billetter-til-fotballkamp/) | sannsynlighet, binomisk, utforskning, programmering, excel | × |
| [2-6](#oppgave-2-6) | [Lydstyrke fra fly](https://matematikkoppgaver.vercel.app/lydstyrke-fra-fly/) | formler, cas, logaritmer | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/algebra-potensregning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Algebra potensregning


Skriv så enkelt som mulig

$$
\frac{\left( 2ab^{-1} \right)^3 \cdot \left( a^2b^{-2} \right)^{-1}  }{4a^2b^{-3}} 
$$

## Fasit

$\frac{2b}{a}$

## Løsningsforslag

$$
\frac{\left( 2ab^{-1} \right)^3 \cdot \left( a^2b^{-2} \right)^{-1}  }{4a^2b^{-3}} = \frac{2^3a^3b^{-1\cdot3}a^{2\cdot(-1)}b^{(-2)\cdot(-1)}a^{-2}b^{3}}{4}=\frac{8}{4}\cdot a^{(3-2-2)}\cdot b^{(-3+2+3)}=\underline{\underline{\frac{2b^2}{a}}}
$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/deriver-logaritmefunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Deriver logaritmefunksjon

Deriver funksjonen $f$ gitt ved

$$
f(x)=x\cdot \ln x
$$

## Fasit

$\ln(x)+1$

## Løsningsforslag

Bruker produktregelen med $u=x, v=\ln x$.

$$
f'(x)=(u'\cdot v+u\cdot v')=1\cdot \ln x+\cancelto{ 1 }{ x\cdot \frac{1}{x} }=\underline{\underline{\ln x + 1}}
$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseverdi-nar-x-gar-mot-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseverdi når x går mot 2

Bestem grenseverdien

$$
\lim_{ x \to 2 } \frac{x^3-8}{x^2-4}
$$

## Fasit

3

## Løsningsforslag

Ser at både teller og nevner går mot null når $x\to 2$. Vi kan derfor bruke L'Hopitals regel. 

$$
\lim_{ x \to 2 } \frac{f(x)}{g(x)} = \lim_{ x \to 2 } \frac{f'(x)}{g'(x)}=\lim_{ x \to 2 }  \frac{3x^2}{2x}=\lim_{ x \to 2 } \frac{3x}{2}=\frac{3\cdot2}{2}=\underline{\underline{3}}
$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuler-i-krukke-hypergeometrisk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuler i krukke hypergeometrisk

I en krukke ligger det fire hvite og tre svarte kuler. Du trekker tilfeldig tre kuler uten tilbakelegging.

> [!oppgave]
> a) Hva er sannsynligheten for at to av de tre kulene er svarte?
> b) Hva er sannsynligheten for at du trekker minst to hvite kuler?

## Fasit

a) $\frac{12}{35}$
b) $\frac{22}{35}$

## Løsningsforslag

### a
Dette er et hypergeometrisk forsøk siden vi har to typer objekter og skal trekke $k_{1}=2$ av den ene typen og $k_{2}=1$ av den andre typen

$$
\frac{ \binom{n_{1}}{k_{1}}\binom{n_{2}}{k_{2}}}{\binom{n}{k}} = \frac{ \binom{3}{2}\binom{4}{1}}{\binom{7}{3}} = \frac{\frac{3!}{2!\cdot 1!}\cdot4}{\frac{7!}{3!\cdot4!}}=\frac{3\cdot4}{\frac{7\cdot6\cdot 5}{3\cdot2}}=\frac{12\cdot3\cdot2}{210}=\frac{72}{210}=\frac{12}{35}
$$

### b
La $X$ være antall hvite kuler. Da er 

$$P(X\geq 2)=1-P(X\leq 1)=1-\left( P(X=1) +P(X=0)\right)$$

Vi har allerede bestemt sannsynligheten for $P(X=1)=\frac{12}{35}$ i oppgave a).

$$
P(X=0)=\frac{3}{7}\cdot \frac{2}{6}\cdot \frac{1}{5} = \frac{3\cdot 2}{7\cdot6\cdot 5}=\frac{6}{210}=\frac{1}{35}
$$

$$
P(X\geq 2)=1-\left(  \frac{12}{35}+\frac{1}{35} \right)=1- \frac{13}{35}=\underline{\underline{\frac{22}{35}}}
$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ukjent-program-med-kostnader-for-produksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ukjent program med kostnader for produksjon

For en bedrift er kostnaden $K$ i kroner ved produksjon av $x$ enheter per uke av en varetype gitt ved

$$
K(x)=0{,}2x^2+140x+7000
$$

Bedriften har laget følgende program.

```python ln
def K(x): 
	return 0.2*x**2 + 140*x + 7000

v = 260
h = 0.001
x = 0

while (K(x + h) - K(x))/h < v:
	x = x + 1

print(x)
```

Hva blir resultatet når programmet kjøres? Hva forteller dette svaret bedriften?

## Fasit

300 fordi $K'(300) = 260$

## Løsningsforslag

Løkken kjører så lenge den numeriske tilnærmingen til vekstfarten er under $v = 260$. Uttrykket

$$
\frac{K(x+h)-K(x)}{h}
$$

er den numeriske deriverte av $K$ i punktet $x$, og med $h = 0{,}001$ er dette svært nær $K'(x)$.

Vi finner $K'(x)$:

$$
K'(x) = 0{,}4x + 140
$$

Løkken stopper ved første hele $x$ der $K'(x) \geq 260$. Vi løser

$$
0{,}4x + 140 = 260 \implies 0{,}4x = 120 \implies x = 300
$$

**Verifikasjon:** $K'(299) = 0{,}4 \cdot 299 + 140 = 259{,}6 < 260$, så løkken kjører videre til $x = 300$. Da er $K'(300) = 0{,}4 \cdot 300 + 140 = 260$, og den numeriske tilnærmingen $\frac{K(300{,}001)-K(300)}{0{,}001} \approx 260{,}0002 \geq 260$, slik at betingelsen blir falsk og løkken avslutter.

Programmet skriver ut $\textbf{300}$.

**Praktisk tolkning:** Når bedriften produserer $\underline{\underline{300}}$ enheter per uke, er grensekostnaden $260 \, \mathrm{kr}$ — det vil si at den ekstra kostnaden ved å produsere én enhet til er akkurat $260 \, \mathrm{kr}$. Programmet finner det minste produksjonsnivået der grensekostnaden når $260 \, \mathrm{kr}$.

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/timelonn-og-lonnsvekst/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Timelønn og lønnsvekst

Tabellen nedenfor viser timelønnen til en yrkesgruppe for noen år i perioden 2008-2022.

| Årstall  |  2008  |  2010  |  2013  |  2015  |  2019  |  2022  |
| :------- | :----: | :----: | :----: | :----: | :----: | :----: |
| Timelønn | 272,55 | 285,50 | 307,30 | 314,00 | 327,60 | 340,10 |

>[!oppgave]
>a) Hva har den gjennomsnittlige årlige prosentvise veksten i lønn vært i årene 2008-2022?

>[!oppgave]
>b) Bruk tallene i tabellen til å lage en eksponentiell funksjon $g$ som er en modell for timelønnen til denne yrkesgruppen $x$ år etter 2008.

Per og Amalie hadde begge en timelønn på 272,55 kroner i 2008. Per har hatt en lønnsutvikling tilsvarende tabellen i starten av oppgaven, mens Amalies lønn har steget med 2,3 prosent per år. De har begge jobbet 1700 timer per år.

>[!oppgave]
>c) Bestem den samlede lønnen til Amalie i årene 2008 til 2022. Bestem også den samlede lønnen til Per i disse årene.

Fagforeningen til Per krever at han i 2025 skal ha samme timelønn som Amalie. Vi går ut fra at Amalie fortsatt vil ha en lønnsvekst på 2,3 prosent per år.

>[!oppgave]
>d) Hvor mange prosent må lønnen til Per gå opp hvert år dersom dette kravet skal innfris?

## Fasit

a) 1,59 %
b) $g(x)=277{,}8\cdot 1{,}0155^x$
c) Her kan ulike svar godtas. Amalies samlede lønn er omtrent 8 188 600 kr i perioden. Pers samlede lønn er omtrent 7 906 600 kr
d) Omtrent 2,19 %

## Løsningsforslag

### a
Timelønna har vokst med $340{,}10-272{,}55=67{,}55$ kr i løpet av disse 14 årene. Vi kan sette opp dette uttrykket for å bestemme vekstfaktoren $x$

$$
\begin{aligned}
272{,}55\cdot x^{14} &= 340{,}10\\
x &= \sqrt[14]{ \frac{340{,}10}{272{,}55} }\\
x &=1{,}01594
\end{aligned}
$$

**Den gjennomsnittlige årlige prosentvise økninga har vært 1,59 %.**

### b
Jeg brukte regresjon i GeoGebra og fant at en god eksponentialmodell for lønnsveksten er 

$$
g(x)=277{,}8\cdot 1{,}0155$$
![](/img/user/_resources/s1-v23-2-1-b.png)
### c
Hvis man skal regne Per sin lønn riktig så må man egentlig vite lønna hvert år og summere opp årslønnene som ei rekke. Jeg bruker heller modell $g$ som en tilnærming til Pers lønn.

For min del er det raskest å legge inn formelen `=272,55*1,023^(2008-A2)*1700` i cellene til Amalie for å regne ut hennes lønn, og tilsvarende for Per.

| År   | Per               | Amalie           |
|:----:|:-----------------:|:----------------:|
| 2008 |  kr 472 260,00    |  kr 463 335,00   |
| 2009 |  kr 479 580,03    |  kr 473 991,71   |
| 2010 |  kr 487 013,52    |  kr 484 893,51   |
| 2011 |  kr 494 562,23    |  kr 496 046,07   |
| 2012 |  kr 502 227,94    |  kr 507 455,12   |
| 2013 |  kr 510 012,48    |  kr 519 126,59   |
| 2014 |  kr 517 917,67    |  kr 531 066,50   |
| 2015 |  kr 525 945,40    |  kr 543 281,03   |
| 2016 |  kr 534 097,55    |  kr 555 776,50   |
| 2017 |  kr 542 376,06    |  kr 568 559,36   |
| 2018 |  kr 550 782,89    |  kr 581 636,22   |
| 2019 |  kr 559 320,02    |  kr 595 013,86   |
| 2020 |  kr 567 989,48    |  kr 608 699,17   |
| 2021 |  kr 576 793,32    |  kr 622 699,25   |
| 2022 |  kr 585 733,62    |  kr 637 021,34   |
| Sum  |  kr 7 906 612,22  |  kr 8 188 601,24 |

**Amalies samlede lønn er omtrent 8 188 600 kr i perioden. Pers samlede lønn er omtrent 7 906 600 kr.**

### d
Igjen så er det enklest og raskest for meg å bruke målsøking i Excel for å løse oppgaver som dette. Jeg lager en celle med vekstfaktoren til Per og målsøker slik at lønna i 2022 skal bli lik for begge.
![](/img/user/_resources/s1-v23-2-1-d.png)

Vekstfaktoren ble endret til 1,02185.

**Lønnen til Per må stige med omtrent 2,185 % hvert år for at de skal ha lik lønn i 2025.**


</div></div>


## Oppgave 2-2a


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logaritmepastand/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logaritmepåstand

Nedenfor ser du tre påstander. Avgjør i hvert tilfelle om påstanden er sann eller usann. Husk å vise tydelig hvordan du argumenterer og resonnerer.

>[!oppgave]
>a) Hvis $x>0$, så er $(\ln x)^4=4 \ln x$.

Neste påstand finner du her: [[Har alle fjerdegradsfunksjoner ekstremalpunkt\|Har alle fjerdegradsfunksjoner ekstremalpunkt]]
Påstand c finner du i [[Sannsynligheter ved lottospill\|Sannsynligheter ved lottospill]]

## Fasit

Påstanden er feil

## Løsningsforslag

>[!info] Kommentar
>Det er enklest å vise dette ved å tegne opp grafene til $(\ln x)^4$ og $4 \ln x$. Da ser man at disse uttrykkene ikke er like unntatt for $x=1\vee x=e^{\sqrt[3]{ 4 }}$. Det er også mulig å løse oppgaven ved å argumentere med tekst slik som jeg har gjort nedenfor.

$(\ln x)^4$ er det samme som $\ln x \cdot \ln x \cdot \ln x \cdot \ln x$, og dette er ikke nødvendigvis det samme som $4 \ln x$. Som et konkret moteksempel lar vi $x=e$.

$$
(\ln x)^4 =(\ln e)^4=1^4=1
$$

Hvis vi sjekker $4 \ln x$ får vi

$$
4 \ln x = 4 \ln e=4\cdot1=4
$$

**$(\ln x)^4 \neq 4 \ln x$. Påstanden er ikke riktig.**


</div></div>


## Oppgave 2-2b


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/har-alle-fjerdegradsfunksjoner-ekstremalpunkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Har alle fjerdegradsfunksjoner ekstremalpunkt

Nedenfor ser du tre påstander. Avgjør i hvert tilfelle om påstanden er sann eller usann. Husk å vise tydelig hvordan du argumenterer og resonnerer.

Oppgave a finner du her: [[Logaritmepåstand\|Logaritmepåstand]]

>[!oppgave]
>b) Alle fjerdegradsfunksjoner må ha minst ett ekstremalpunkt.

Oppgave c finner du her: [[Sannsynligheter ved lottospill\|Sannsynligheter ved lottospill]]

## Fasit

Påstanden stemmer

## Løsningsforslag

En fjerdegradsfunksjon $f(x)=ax^4+bx^3+cx^2+dx+e$ har minst ett stasjonært dersom $f'(x)=4ax^3+3bx^2+2cx+d$ har minst ett nullpunkt.

Tredjegradsfunksjonen $f'$ vil alltid ha minst ett nullpunkt. $f'$ vil oppføre seg på en av to måter
- $\lim_{ x \to \infty } f'(x) = \infty \wedge \lim_{ x \to -\infty } f'(x)=-\infty$. $f'$ vil altså gå fra $-\infty$ mot $+\infty$ når $x$ vokser.
- $\lim_{ x \to \infty } f'(x) = -\infty \wedge \lim_{ x \to -\infty } f'(x)=\infty$. $f'$ vil altså bevege seg fra $+\infty$ mot $-\infty$ når $x$ vokser.

Siden $f'$ må krysse $x$-aksen så må det stasjonære punktet være enten et toppunkt eller et bunnpunkt.

**En fjerdegradsfunksjon har alltid minst ett toppunkt eller bunnpunkt.**


</div></div>


## Oppgave 2-2c


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sannsynligheter-ved-lottospill/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sannsynligheter ved lottospill

Nedenfor ser du tre påstander. Avgjør i hvert tilfelle om påstanden er sann eller usann. Husk å vise tydelig hvordan du argumenterer og resonnerer.

Oppgave a finner du her [[Logaritmepåstand\|Logaritmepåstand]]
Oppgave b finner du her [[Har alle fjerdegradsfunksjoner ekstremalpunkt\|Har alle fjerdegradsfunksjoner ekstremalpunkt]]

I spillet Lotto trekkes det sju tilfeldige naturlige tall mindre eller lik 34 uten tilbakelegging.

>[!oppgave]
>c) Sannsynligheten for at alle de sju tallene er mindre enn 18 , er like stor som sannsynligheten for at ingen av de sju tallene er mindre enn 18.

## Fasit

Påstanden stemmer

## Løsningsforslag

La den stokastiske variabelen $X_{1}$ være resultatet av første trekning fra de 34 tallene. Sannsynligheten for hvert tall er like stor. Det er 17 tall som er mindre enn 18, altså

$$
P(X_{1}<18)=\frac{17}{34}=\frac{1}{2}
$$

La den stokastiske variabelen $X_2$ være resultatet av andre trekning fra de 33 tallene. $P(X_{2}<18)=\frac{16}{33}$. For hvert tall vi trekker vil tallene i teller og nevner reduseres med 1. 

Vi får det samme mønsteret for at ingen tall er mindre enn 18. 
Sannsynligheten for tallet ikke er mindre enn 18 er gitt ved

$$
\begin{aligned}
P(X_{1}\geq 18)&=\frac{17}{34}=\frac{1}{2}\\
P(X_{2}\geq18)&= \frac{16}{33}
\end{aligned}
$$

Mønsterne vil utvikle seg på samme måte.

**Det er like sannsynlig at alle lottotallene er mindre enn 18 som at ingen av lottotallene er mindre enn 18.**


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/billetter-til-fotballkamp/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Billetter til fotballkamp

I en kampanje deles det ut gratisbilletter til en fotballkamp. Av erfaring vet arrangøren at cirka 45 prosent av dem som får gratisbilletter, kommer på kampen.  

> [!oppgave]
> a) Det deles ut 1300 gratisbilletter. Bestem sannsynligheten for at minst 600 av disse billettene blir benyttet.  
> b) Hvor mange gratisbilletter må de minst dele ut dersom sannsynligheten for at minst 600 av dem blir brukt skal være over 95 prosent?

## Fasit

a) 0,2094
b) 1401 billetter

## Løsningsforslag

### a
Vi kan regne med en binomisk sannsynlighetsfordeling her med $n=1300$ og $p=0{,}45$ siden
- billettmottakerne har to muligheter: de kommer på kamp, eller de kommer ikke på kamp
- det er samme sannsynlighet for hver billettmottaker
- så lenge billettmottakerne er uavhengige av hverandre (hvis de 1300 billettene deles ut i stor by stemmer sikkert dette, men hvis det er på en veldig liten plass så er nok ikke billettmottakerne egentlig uavhengige av hverandre)

Denne løses enklest i sannsynlighetskalkulatoren i GeoGebra, eller ved et enkelt program:
```python
from scipy.stats import binom
P = 1-binom.cdf(599,1300,0.45)      # 1 - sannsynlighet for 
									# at opptil 599 kommer
print(f"P(X >= 600) = {P:.4f}")
```
`output: P(X >= 600) = 0.2094`

**Sannsynligheten for at minst 600 mennesker kommer er 20,9 %.**

### b
```python
from scipy.stats import binom
n = 1299
P = 0
while P < 0.95:
    n = n + 1
    P = 1-binom.cdf(599,n,0.45)
print(f"Ved n = {n} er P(X >= 600) = {P:.4f}.")
```

`output: Ved n = 1401 er P(X >= 600) = 0.9519`

Siden jeg allerede var igang med programmering så programmerte jeg denne også. Du kan også finne sannsynlighetene i Excel ved å lage et regneark på denne formen:

| Rad/Kol | A           | B                                       |
| ------- | ----------- | --------------------------------------- |
| 1       | Antall, $n$ | $P(X\leq n)$                            |
| 2       | 1300        | ` =BINOM.FORDELING.N(599;A2;0,45;SANN)` |


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/lydstyrke-fra-fly/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Lydstyrke fra fly

Sammenhengen mellom lydstyrken $L$ (målt i dB) og lydintensiteten $I$ (målt i $\mathrm{W} / \mathrm{m}^2$) er gitt ved

$$
L=120+10 \cdot \lg I
$$

Menneskets øre har en smertegrense for lydstyrke som ligger omkring $130 \mathrm{~dB}$.

>[!oppgave]
>a) Bestem lydintensiteten når lydstyrken er $130 \mathrm{~dB}$.

>[!oppgave]
>b) Hvor mange prosent øker lydintensiteten dersom lydstyrken øker med $2 \mathrm{~dB}$ ?

Dersom effekten til lyden som sendes ut fra en lydkilde er $E$, vil lydintensiteten $I$ på en avstand $r$ (målt i m) fra denne lydkilden være

$$
I=\frac{E}{4 \pi \cdot r^2}
$$

Lydstyrken fra et fly er $140 \mathrm{~dB}$ dersom du er $50 \mathrm{~m}$ fra flyet.

>[!oppgave]
>c) Bestem den minste avstanden til dette flyet der lydstyrken er lavere enn $130 \mathrm{~dB}$.

## Fasit

a) 10 W/m²
b) 58,5 %
c) 158,12 m

## Løsningsforslag

### a
$$
\begin{aligned}
130 &= 120 + 10 \log I\\
10\log I&=130-120\\
\log I&=\cancelto{ 1 }{ \frac{10}{10} }\\
{ 10^{\log I} }&=10^1\\
I&=10
\end{aligned}
$$

**Lydintensiteten er 10 W/m² når lydstyrken er 130 dB.**

### b
Når $L=132$ blir 

$$
I=10^{\frac{132-120}{10}}=10^{1{,}2}=15{,}85
$$

Økningen i prosent er 

$$
\frac{15{,}85-10}{10}=0{,}585=58{,}5 \,\%
$$

**Når lydstyrken øker fra 130 dB til 132 dB øker lydintensiteten med 58,5 %.**

### c
Vi vet at $L=140$ når $r=50$. Jeg løser for $E$ og finner (dette gjøres enklest i CAS)

$$
\begin{aligned}
L&=120+10 \log I\\
L&=120+10 \log \frac{E}{4\pi r^2}\\
140&=120+10 \log \frac{E}{4\pi 50^2}\\
E&=1 000 000\pi 
\end{aligned}
$$

Jeg tolker formlene slik at et fly lager lyd med effekten $E=1\,000\,000\pi \,\text{W}$, mens lydintensiteten og lydstyrken avtar med avstanden. Vi setter opp en likning med lydstyrke lik 130 dB og finner avstanden som kreves (dette gjøres også enklest i CAS).

$$
\begin{aligned}
130&=120+10 \log \frac{1000000\pi}{4\pi r^2}\\
10&=10 \log \frac{1000000}{4r^2}\\
1&=\log \frac{250000}{r^2}\\
10&=\frac{250000}{r^2}\\
r^2&=\frac{250000}{10}\\
r^2&=25000\\
r&=\vert 158{,}113\vert
\end{aligned}
$$

Ved 158,113 m så er altså lydstyrken 130 dB. Siden vi skulle finne den minste avstanden hvor lydstyrken var *lavere* enn 130 dB så runder jeg opp i svaret mitt.

**158,12 m fra flyet er den minste avstanden hvor lydstyrken er lavere enn 130 dB.**


</div></div>


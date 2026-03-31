---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"h24","del1_tid":2,"del2_tid":3,"title":"S2 eksamen H2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/s2-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"h24","del1_tid":2,"del2_tid":3,"title":"S2 eksamen H2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/s2-eksamen-h2024/"}}
---

# Oversikt over oppgavene

**Del 1** — 2 timer — uten hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1a](#oppgave-1-1a) | [Ubestemt integral h24](https://matematikkoppgaver.vercel.app/ubestemt-integral-h24/) | integral | ✔︎ |
| [1-1b-c](#oppgave-1-1b-c) | [Integral med ukjent grense](https://matematikkoppgaver.vercel.app/integral-med-ukjent-grense/) | integral, likninger | ✔︎ |
| [1-2](#oppgave-1-2) | [Aritmetiske og geometriske rekker h24](https://matematikkoppgaver.vercel.app/aritmetiske-og-geometriske-rekker-h24/) | rekker, uendelig rekke | ✔︎ |
| [1-3](#oppgave-1-3) | [Varians i diskret sannsynlighetsfordeling](https://matematikkoppgaver.vercel.app/varians-i-diskret-sannsynlighetsfordeling/) | diskrete sannsynlighetsfordelinger, varians | ✔︎ |
| [1-4](#oppgave-1-4) | [Figurer som viser normalfordeling](https://matematikkoppgaver.vercel.app/figurer-som-viser-normalfordeling/) | normalfordeling, standard normalfordeling, binomisk | ✔︎ |
| [1-5](#oppgave-1-5) | [Grensekostnad og enhetskostnad del 1](https://matematikkoppgaver.vercel.app/grensekostnad-og-enhetskostnad-del-1/) | økonomi, grenseinntekt og grensekostnad, enhetskostnad | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Marcos logistiske løpetrening](https://matematikkoppgaver.vercel.app/marcos-logistiske-lopetrening/) | logistisk funksjon, regresjon, samlet mengde | ✔︎ |
| [2-2](#oppgave-2-2) | [Hypergeometrisk hypotesetest](https://matematikkoppgaver.vercel.app/hypergeometrisk-hypotesetest/) | hypotesetest, hypergeometrisk | ✔︎ |
| [2-3a](#oppgave-2-3a) | [Påstand om sum av rekke](https://matematikkoppgaver.vercel.app/pastand-om-sum-av-rekke/) | rekker, uendelig rekke | ✔︎ |
| [2-3b](#oppgave-2-3b) | [Påstand om områder avgrenset av grafer](https://matematikkoppgaver.vercel.app/pastand-om-omrader-avgrenset-av-grafer/) | funksjoner, areal under graf, integral | ✔︎ |
| [2-4](#oppgave-2-4) | [Rekursiv formel og programmering](https://matematikkoppgaver.vercel.app/rekursiv-formel-og-programmering/) | programmering, rekursiv sammenheng | ✔︎ |
| [2-5](#oppgave-2-5) | [Oles studielån](https://matematikkoppgaver.vercel.app/oles-studielan/) | lån | ✔︎ |
| [2-6](#oppgave-2-6) | [Etterspørsel av vare](https://matematikkoppgaver.vercel.app/ettersporsel-av-vare/) | etterspørsel, økonomi | ✔︎ |

# Del 1

## Oppgave 1-1a


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ubestemt-integral-h24/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ubestemt integral h24

> [!oppgave]
>  a) Regn ut integralet
>  $$ \int x^{2} \cdot \ln x \, \mathrm{d}x  $$

## Fasit

$\frac{1}{3}x^{3}\left( \ln x-\frac{1}{3} \right)+C$

## Løsningsforslag

Siden vi skal regne ut integralet til produktet av to ulike funksjoner vil jeg forsøke delvis integrasjon. Jeg benytter DI-metoden, og velger at $x^{2}$ er den faktoren som skal integreres, og $\ln x$ er faktoren som skal deriveres.

>[!tip]- Hvordan velge hva som skal deriveres og integreres
>
> I lignende oppgaver har vi ofte valgt å derivere den faktoren som er et polynomuttrykk, slik at faktoren blir null etter at vi har derivert en eller flere ganger. I dette tilfellet er det likevel lurt å velge å integrere polynomfaktoren, siden $\ln x$ er litt vanskelig å integrere. I tillegg ser vi et veldig flott mønster med at $(\ln x)'=\frac{1}{x}$ og vi dermed får en rad i DI-systemet som vi kan integrere produktet av.

|     |       D       |         I          |
| :-: | :-----------: | :----------------: |
| $+$ |    $\ln x$    |      $x^{2}$       |
| $-$ | $\frac{1}{x}$ | $\frac{1}{3}x^{3}$ |

Vi ser at produktet i rad 2 er $\frac{1}{x} \cdot \frac{1}{3}x^{3}$, som vi kan integrere.

Vi kan altså sette opp
$$
\begin{aligned}
\int x^{2} \ln x \, \mathrm{d}x &=
\ln x \cdot \frac{1}{3}x^{3} - \int \frac{1}{x}\cdot \frac{1}{3} x^{3} \, \mathrm{d}x \\
&=\frac{1}{3} x^{3}\ln x - \frac{1}{3} \int x^{2} \, \mathrm{d}x\\
&=\frac{1}{3} x^{3} \ln x - \frac{1}{3}\cdot \frac{1}{3} x^{3}+C\\
&=\underline{\underline{\frac{1}{3}x^{3}\left( \ln x-\frac{1}{3} \right)+C}}
\end{aligned}
$$


</div></div>


## Oppgave 1-1b-c


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/integral-med-ukjent-grense/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Integral med ukjent grense


b) Bestem $x$ når 

 $$\int_{-1}^{x} \left( 3t^{2}-1 \right)  \, \mathrm{d}t = 0, \quad x>-1$$

 c) Gi en praktisk tolkning av svaret i oppgave b).

## Fasit

b) $x=0 \vee x=1$

## Løsningsforslag

Vi setter opp likningen og løser
$$
\begin{aligned}
\int _{-1}^{x} \left( 3t^{2}-1 \right)  \, \mathrm{d}t &= 0 \\
\left[ t^{3}-t \right]_{-1}^{x} &= 0\\
\left( x^{3}-x \right) -\left( (-1)^{3}-(-1) \right) &=0\\
\left( x^{3}-x \right) - \left( -1+1 \right) &=0\\
\left( x^{3}-x \right) - 0 &=0\\
x^{3}-x&=0\\
x(x^{2}-1)&=0
\end{aligned}
$$
Denne likningen har tre løsninger: $x=0 \vee x=-1 \vee x=1$. Vi forkaster løsningen $x=-1$ siden vi har fått oppgitt at $x>-1$ i oppgaveteksten.
$$
\underline{\underline{x=0 \vee x=1}}
$$


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/aritmetiske-og-geometriske-rekker-h24/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Aritmetiske og geometriske rekker h24

> [!oppgave]
>  a) Finn summen av den aritmetiske rekken $3+7+11+15+\dots+399$.
>  b) Bestem kvotienten $k$ for en uendelig geometrisk rekke som konvergerer og som har $a_{1}=12$ og sum $= 18$.
>  c) Vis at tallet $0{,}75757575\dots$ kan skrives som en uendelig geometrisk rekke. Bruk dette til å vise at $1{,}75757575\dots=\frac{58}{33}$.

## Fasit

a) 20 100
b) $\frac{1}{3}$

## Løsningsforslag

### 1-2a
Summen av en aritmetisk rekke er gitt ved
$$
s_{n}=\frac{a_{1}+a_{n}}{2}\cdot n
$$
Vi ser at differansen $d=4$. For å finne ut hvor mange ledd det er i rekka vår kan vi løse
$$
3+(n-1) \cdot 4=399 \implies n-1=\frac{399-3}{4} \implies n=100
$$
Summen av de 100 første leddene blir altså
$$
s_{100}=\frac{3+399}{2}\cdot 100=\frac{402}{2} \cdot 100= 201\cdot 100=\underline{\underline{20\,100}}
$$

### 1-2b
Vi vet at summen av en uendelig geometrisk rekke som konvergerer er
$$
s=\frac{a_{1}}{1-k} \iff 1-k=\frac{a_{1}}{s}\iff k=1-\frac{a_{1}}{s}
$$
Vi setter inn verdiene i uttrykket for $k$
$$
k=1-\frac{12}{18}=1-\frac{2}{3}=\underline{\underline{\frac{1}{3}}}
$$

### 1-2c
Vi kan omskrive tallet som summen av en uendelig rekke med ledd på denne måten $0{,}75757575\ldots=0{,}75+0{,}0075+0{,}000075+\cdots$

Hvert av disse leddene kan vi skrive om som brøker
$$
\begin{aligned}
0{,}75&=\frac{3}{4}\\
0{,}0075&=\frac{\frac{3}{4}}{100}=\frac{3}{400}\\
0{,}000075&=\frac{\frac{3}{4}}{10000}=\frac{3}{40000}
\end{aligned}
$$
Vi ser et mønster hvor hvert ledd er $\frac{1}{100}$ av det forrige, altså har vi
$$
\frac{3}{4}+\frac{3}{400}+\frac{3}{40000}+\dots=\frac{3}{4\cdot 100^0}+\frac{3}{4\cdot 100^1}+\frac{3}{4 \cdot 100^2}+ \dots
$$
**Vi har altså vist at $0{,}75757575\dots$ kan skrives som en uendelig geometrisk rekke**, og med sumnotasjon blir rekka
$$
\lim_{ n \to \infty }  \sum_{i=1}^n \frac{3}{4\cdot 100^{i-1}}=0{,}75757575\dots
$$
Denne uendelig geometrisk rekka har $a_{1}=\frac{3}{4}$ og $k=\frac{1}{100}$. Summen av rekka er gitt ved
$$
s=\frac{\frac{3}{4}}{1-\frac{1}{100}}=\frac{\frac{3}{4}}{\frac{99}{100}}=\frac{300}{396}=\frac{75}{99}=\frac{25}{33}
$$
Siden vi nå vet at $0{,}75757575+\dots=\frac{25}{33}$ så kan vi vise følgende
$$
1{,}75757575\ldots=1+0{,}75757575\ldots=1+\frac{25}{33}=\frac{58}{33}
$$
**Vi har altså vist at $1{,}75757575\ldots=\underline{\underline{\frac{58}{33}}}$**.


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/varians-i-diskret-sannsynlighetsfordeling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Varians i diskret sannsynlighetsfordeling


Tabellen viser sannsynlighetsfordelingen til en stokastisk variabel $X$.

|   $x$    |    0     |    1     |    4     |   $b$    |
| :------: | :------: | :------: | :------: | :------: |
| $P(X=x)$ | $0{,}30$ | $0{,}40$ | $0{,}10$ | $0{,}20$ |

$E(X)=2$.

Vis at $b=6$, og bestem $\text{Var}(X)$.

## Fasit

$\mathrm{Var}(X)=4$

## Løsningsforslag

<p style="text-align:center;">Tabell: Sannsynlighetsfordelingen til oppgave 1-3</p>

|            $x$             |           0            |            1            |            4            |           $b$           |
| :------------------------: | :--------------------: | :---------------------: | :---------------------: | :---------------------: |
|          $P(X=x)$          |        $0{,}30$        |        $0{,}40$         |        $0{,}10$         |        $0{,}20$         |
|      $x \cdot P(X=x)$      |          $0$           |        $0{,}40$         |        $0{,}40$         |    $0{,}20 \cdot b$     |
|       $(x-\mu)^{2}$        |       $(-2)^2=4$       |         $1^2=1$         |         $2^2=4$         |       $4^{2}=16$        |
| $(x-\mu)^{2} \cdot P(X=x)$ | $4\cdot 0{,}30 =1{,}2$ | $1 \cdot 0{,}40=0{,}40$ | $4 \cdot 0{,}10=0{,}40$ | $16 \cdot 0{,}20=3{,}2$ |

Vi vet at forventningsverdien er summen av produktene av $x \cdot P(X=x)$, se rad 2 i tabellen. Det betyr at
$$
0+0{,}40+0{,}40+0{,}20b = 2 \iff 0{,}20 b = 1{,}2 \iff b=6
$$
**Vi har vist at $\underline{\underline{b=6}}$.**

Variansen til $X$ er gitt ved
$$
\begin{aligned}
\text{Var}(X)&=\sum_{i=1}^{N}\left( ( x_{i}-\mu)^{2}\cdot P(X=x_{i}) \right)\\
\text{Var}(X)&=1{,}2+0{,}40+0{,}40+3{,}2=\underline{\underline{5{,}2}}\\
\end{aligned}
$$
**Variansen $\underline{\underline{\mathrm{Var}(X)=5{,}2}}$.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/figurer-som-viser-normalfordeling/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Figurer som viser normalfordeling


En gartner sår 1000 frø. Frøene har en spireevne på 70 %.

>[!oppgave]
> a) Hvilken av de to figurene nedenfor viser sannsynlighetstettheten for antall frø som spirer?
> 
> Husk å begrunne svaret ditt.

![](/img/user/_resources/s2-h24-1-4a.png)

En stokastisk variabel er normalfordelt med $E(X)=50$ og $\sigma=10$.

>[!oppgave]
>b) Hvilken av de to figurene nedenfor viser sannsynlighetstettheten til denne stokastiske variabelen?
>
>Husk å begrunne svaret ditt.

![](/img/user/_resources/s2-h24-1-4b.png)

## Fasit

a) Figur 2
b) Figur 3

## Løsningsforslag

### 1-4a
Vi kan bruke en binomisk sannsynlighetsmodell siden vi kan regne dette som 1000 uavhengige forsøk hvor frøene enten spirer eller ikke spirer. På grunn av sentralgrensesetningen kan vi også bruke normalfordeling som en tilnærming til den binomiske fordelingen. 
$$\text{Var}(X)=np(1-p)=1000\cdot 0{,}7\cdot 0{,}3=210$$
I dette tilfellet er normalfordelingen en svært god tilnærming til den binomiske fordelingen siden variansen er mye større enn 5.

Vi bestemmer forventningsverdien og standardavviket
$$
E(X)=\mu=np=1000\cdot 0{,}7=700 \quad \text{og} \quad \sigma=\sqrt{ 210 } \approx 14
$$
Vi vet at omtrent 68 % av utfallene kommer til å havne innenfor ett standardavvik fra forventningsverdien, altså at $P(\mu-\sigma<X<\mu+\sigma)\approx 0{,}68$.

Vi ser at figur 1 må ha et standardavvik på mer enn 100, **derfor må figur 2 være riktig figur.**

### 1-4b
Vi kan bruke samme tankegang som i forrige oppgave. Vi ser at figur 4 har mye mer enn 68 % av sitt skraverte areal innenfor intervallet $\left[ \mu-\sigma , \mu+\sigma \right]=\left[ 40 , 60 \right]$.

**Figur 3 viser sannsynlighetstettheten.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grensekostnad-og-enhetskostnad-del-1/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grensekostnad og enhetskostnad del 1


En bedrift produserer og selger en vare. Kostnaden $K(x)$ i kroner er gitt ved

$$
K(x)=0{,}3x^{2}+10x+3000
$$

Her er $x$ antall enheter produsert og solgt per uke.

>[!oppgave]
>a) For hvilken $x$-verdi er grensekostnaden lik enhetskostnaden? Gi en praktisk tolkning av svaret.

Bedriften regner med å selge varen for 400 kr per enhet.

>[!oppgave]
>b) Hvor mange enheter må bedriften produsere og selge for at overskuddet skal bli størst mulig?

## Fasit

a) 100 enheter
b) 650 enheter

## Løsningsforslag

### 1-5a
Vi kan finne grensekostnaden ved å derivere kostnadsfunksjonen
$$
K'(x)=2 \cdot 0{,}3x+10=0{,}6x+10
$$
Enhetskostnaden er gitt ved
$$
E(x)=\frac{K(x)}{x}=\frac{0{,}3x^{2}+10x+3000}{x}=0{,}3x+10+\frac{3000}{x}
$$
Vi setter disse lik hverandre
$$
\begin{aligned}
K'(x)&=E(x)\\
0{,}6x+10 &= 0{,}3x+10+\frac{3000}{x}\\
0{,}3x  &= \frac{3000}{x}\\
0{,}3x^{2} &= 3000 \\
x^{2} &= \frac{3000}{0{,}3}\\
x^{2} &= 10\,000\\
x&=100
\end{aligned}
$$
Vi ser bort fra den negative løsningen av likningen siden vi snakker om produksjon av $x$ enheter.

**Grensekostnaden er lik enhetskostnaden ved produksjon av 100 enheter. Dette er også den produksjonsmengden som gir de laveste enhetskostnadene.**

### 1-5b
Inntektene fra salget er gitt ved
$$
I(x)=\text{pris} \cdot x =400x \implies I'(x)=400
$$
Vi har største overskudd når grensekostnaden er lik grenseinntekten
$$
\begin{aligned}
K'(x)&=I'(x)\\
0{,}6x+10&=400\\
0{,}6x&=390\\
x&=\frac{390}{0{,}6}\\
x&=\frac{3900}{6}\\
x&=650\
\end{aligned}
$$
**Bedriften må produsere og selge 650 enheter for at overskuddet skal bli størst mulig.**


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/marcos-logistiske-lopetrening/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Marcos logistiske løpetrening


Marco skal løpe maraton og starter løpetrening. I tabellen nedenfor ser du hvor mange kilometer han løp noen av ukene etter at han startet treningen.

| Uker etter treningsstart $(t)$      |  1  |  5  | 10  | 15  | 20  |
| :---------------------------------- | :-: | :-: | :-: | :-: | :-: |
| Antall kilometer løpt per uke $(L)$ | 14  | 32  | 80  | 115 | 145 |

>[!oppgave]
>a) Vis at funksjonen $L$ gitt ved
>
>$$L(t)=\frac{156{,}31}{1+12{,}21 e^{-0{,}24 t}}$$
>
>er en god modell for sammenhengen mellom uker etter treningsstart ($t$) og antall kilometer løpt per uke ($L$).
>
>Forklar hvorfor en modell av denne typen kan passe godt til denne praktiske situasjonen.
>
>b) Når økte antallet løpte kilometer per uke raskest, ifølge modellen?
>
>Hvor stor var økningen da?

Marco merket etter noen uker at løpeskoene begynte å bli slitt, og at han trengte nye sko. Han bestemte seg for ả kjøpe nye sko etter å ha løpt totalt 500 km.

>[!oppgave]
>c) Hvor mange uker hadde Marco løpt da han kjøpte seg nye sko? 
>
>Hvor mange kilometer hadde han løpt i gjennomsnitt per uke før dette?

## Fasit

b) Ved $t=10{,}4$, det vil si i den 11. uka. Økningen var da 9,4 km per uke.
c) Litt under 12 uker, med 43–45 km per uke i gjennomsnitt avhengig av hvordan man gjør tilnærmingen.

## Løsningsforslag

### 2-1a
Jeg la inn dataene i GeoGebra og gjorde en regresjonsanalyse med logistisk modell. Som vi ser fra funksjonen som GeoGebra foreslår, så passer funksjonen $L(t)$ godt til denne situasjonen.
$$
L(t)=\frac{156{,}31}{1+12{,}21e^{-0{,}24t}}
$$

![Regresjon av logistisk funksjon i GeoGebra](/img/user/_resources/s2-h24-2-1a.png)

En logistisk modell vil passe godt for denne typen situasjon, siden veksten vil avta før funksjonen nærmer seg en øvre grense. Den øvre grensen er i dette tilfellet 156,3 km. Det høres ut som en rimelig øvre grense for maratontrening (Jakob Ingebrigtsen, som er verdensmester på 1500 m, trener opp mot 180 km i uka på det meste).

### 2-1b

![Løsning av oppgave 1a og 1b del 2 i CAS](/img/user/_resources/s2-h24-2-1.png)

Vi vet at funksjonen vokser raskest i vendepunktet, så vi finner dette med GeoGebra i linje 2. $t=10{,}43$ tilsvarer at vi er omtrent midtveis i den ellevte uka. Økningen i vendepunktet er det samme som den deriverte til funksjonen i vendepunktet, se linje 3 i GeoGebra.

**Antall løpte kilometer øker raskest i den ellevte uka, og økningen er da på omtrent 9,4 km per uke.**

### 2-1c
Vi kan løse denne oppgaven på flere måter, men oppgaveteksten legger på mange måter opp til at vi skal bruke funksjonsuttrykket fra a), og finne ut hvor mange uker det går før arealet under grafen blir 500 km.

Å anta at $L(t)$ har tilnærmet kontinuerlig endring kan være en god tilnærming siden Marco sannsynligvis løper flere ganger i uka,

Vi kan finne en god tilnærming til svaret ved å løse likningen
$$
\int _{0}^{b}L(t) \, \mathrm{d}t=500 
$$
og deretter finne gjennomsnittet ved å dividere 500 km med antall uker $b$.

Vi kan finne en enda bedre tilnærming til svaret dersom vi forskyver grensene for integrasjonen med 0,5 mot høyre
 $$\int _{0{,}5}^{b+0{,}5} L(t) \, \mathrm{d}t = 500 $$

Vi løser likningen i linje 4 i GeoGebra, og finner at **det tar omtrent 11,19 uker før Marco har løpt 500 km og kjøper nye sko. I gjennomsnitt har han da løpt 44,7 km i uka**, se linje 5.

>[!tip] Blir resultatet mer nøyaktig ved å justere grensene i denne oppgaven?
>
> Når vi justerer grensene med $+0{,}5$ får vi et svar som er omtrent en halv uke mindre enn hvis vi ikke justerer. Det er ikke fryktelig stor forskjell, men det er en forskjell.  
>
> Vi kan lage et eksempel for å overbevise oss selv om at det er lurt å justere grensene. La oss se på uke 5. I denne uka har Marco faktisk løpt 32 km, mens den logistiske modellen overestimerer løpslengden og gir $L(5)=33{,}417$.   
> 
> Hvis vi bruker $\int_{4}^{5} L(t) \, dt$ for å finne ut hvor langt Marco har løpt i uke 5, så vil alle verdiene for $L(t)$ være lavere enn $L(5)$ siden grafen stiger i hele intervallet. Dermed underestimerer vi Marcos løpsdistanse. Ved å heller flytte grensene til $\int_{4{,}5}^{5{,}5} L(t) \, dt$ så vil $L(t)<L(5)$ for $t \in [4{,}5 , 5 \rangle$ og $L(t)>L(5)$ for $t \in \langle 5 , 5{,}5]$. Dermed vil underestimeringen i intervallet $t \in [4{,}5 , 5 \rangle$ «jevnes ut» av overestimeringen i intervallet $t \in \langle 5 , 5{,}5]$.
> 
> ![](/img/user/_resources/s2-h24-2-1c-forklaring.png)


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hypergeometrisk-hypotesetest/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hypergeometrisk hypotesetest


En bedrift skal ansette en ny person i en stilling og har fått 100 godt kvalifiserte søkere. 60 av søkerne er kvinner, og 40 av søkerne er menn. Ledelsen i bedriften rekker ikke å intervjue alle, derfor blir 8 kvinner og 12 menn tilfeldig invitert til intervju av ledelsen.

Fagforeningen lurer på om dette faktisk er tilfeldig, eller om ledelsen bevisst velger menn. De ber deg gjennomføre en hypotesetest med signifikansnivå 5 %.

>[!oppgave]
>a) Formuler nullhypotesen $H_{0}$ og alternativhypotesen $H_{1}$ for testen. Forklar hvorfor en hypergeometrisk sannsynlighetsfordeling er mest passende for denne testen.

>[!oppgave]
>b) Gjennomfør hypotesetesten og vurder om det er grunnlag for å si at ledelsen bevisst velger menn.

## Fasit

b) Ja, vi kan forkaste $H_{0}$ siden $p=0{,}038$.

## Løsningsforslag

### 2-2a
Vi har en situasjon hvor vi har to ulike grupper og vi tenker oss at vi skal trekke 20 kandidater tilfeldig blant disse. Vi kan selvsagt ikke trekke den samme kandidaten til intervju 2 ganger, så dette blir en trekning uten tilbakelegging. Derfor passer en hypergeometrisk sannsynnlighetsfordeling godt i dette tilfellet.

Hvis trekningen hadde vært tilfeldig burde sannsynligheten for å trekke en mann på første trekning være $p_{m}=\frac{40}{100}=0{,}4$. Altså kan vi sette opp følgende hypoteser
$$
\begin{aligned}
H_{0}:& \quad p_{m}=0{,}4 \\
H_{1}:& \quad p_{m}>0{,}4
\end{aligned}
$$

>[!info] Andre hypoteser
>
>Vi kan selvsagt bruke andelen kvinner som utgangspunkt for hypotesene våre. Ved tilfeldig trekning burde sannsynligheten for kvinne på første trekning være $p_{k}=0{,}6$. Dette gir hypotesene
>$$H_{0}: \quad p_{k}=0{,}6 \quad \text{mot} \quad H_{1}: \quad p_{k}<0{,}6$$

### 2-2b

![Hypergeometrisk hypotesetest i GeoGebra til oppgave 2-2](/img/user/_resources/s2-h24-2-2-hypotesetest.png)

I GeoGebra har vi satt opp en hypergeometrisk fordeling med 100 kandidater hvorav 40 er menn. Vi velger 20 tilfeldige kandidater. Sannsynligheten for at minst 12 av disse er menn er $P(X\geq12) = 0{,}038$.

**$\boldsymbol{p}$-verdien på 0,038 er mindre enn signifikansnivået på 5 %, derfor forkaster vi nullhypotesen.**

**En hypotesetest med signifikansnivå 5 % gir grunnlag for å si at bedriften bevisst velger menn foran kvinner.**


</div></div>


## Oppgave 2-3a


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pastand-om-sum-av-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Påstand om sum av rekke


>[!oppgave]
>Avgjør om påstanden nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

En uendelig geometriske rekke er gitt ved $1+\left( \ln x -1 \right) + \left( \ln x -1 \right)^{2}\dots$

**Påstand**: Dersom $x=\frac{1}{e}$ vil summen av rekka være $\frac{1}{3}$.

## Fasit

Påstanden er usann. $k=-2$ og rekka konvergerer ikke.

## Løsningsforslag

Jeg vet at summen av en uendelig geometrisk rekke er gitt ved
$$
s=\frac{a_{1}}{1-k}
$$
dersom $-1<k<1$.

Hvis vi vi lar $x=\frac{1}{e}$ så vil rekka bli
$$
1+ \left( \ln \frac{1}{e}-1 \right) + \left( \ln \frac{1}{e}-1 \right)^{2} + \dots 
$$
La oss se hva $\ln \frac{1}{e}-1$ blir
$$
\ln \frac{1}{e}-1=\ln 1 - \ln e - 1=0-1-1=-2
$$
Det første leddet i rekka er $a_{1}=1$ og det andre leddet er $a_{2}=-2$, det vil si at
$$
k=\frac{-2}{1}=-2
$$
$k$ ligger ikke i intervallet $\langle-1,1\rangle$, og dermed konvergerer ikke rekka.

**Påstanden er usann, rekka konvergerer ikke når $\boldsymbol{x=\frac{1}{e}}$.**


</div></div>


## Oppgave 2-3b


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pastand-om-omrader-avgrenset-av-grafer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Påstand om områder avgrenset av grafer


>[!oppgave]
>Avgjør om påstanden nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

To funksjoner er gitt ved $f(x)=x^{3}-x^{2}-ax$, der $a \in \mathbb{R}$, og $g(x)=-x^{2}+x$

**Påstand**: Grafene til $f$ og $g$ avgrenser to områder som er like store når $a>-1$.

## Fasit

Påstanden er sann

## Løsningsforslag

$f$ og $g$ kommer til å avgrense maksimalt 2 områder siden $f$ er en tredjegradsfunksjon og $g$ er en andregradsfunksjon. For å finne disse to områdene må vi først finne skjæringspunktene mellom grafene.

![Bestemmelse av skjæringspunktet mellom funksjoner i CAS](/img/user/_resources/s2-h24-2-3b-1.png)

Jeg fant skjæringspunktene i GeoGebra. (*Vi ser her at kravet om at $a>-1$ gjør at vi får reelle løsninger*).

La oss undersøke arealet av områdene som er avgrenset. Jeg gjør dette i GeoGebra ved å integrere fra skjæringspunkt til skjæringspunkt ved hjelp av `IntegralMellom`.

![Bestemmelse av arealet mellom grafene](/img/user/_resources/s2-h24-2-3b-2.png)

**Påstanden stemmer. Vi ser at arealene mellom grafene er like store.**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/rekursiv-formel-og-programmering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Rekursiv formel og programmering

>[!oppgave]
>a) Bestem en rekursiv formel for tallfølgen $1, 2, 6,15,31,56,\dots$
>b) Bruk den rekursive formelen du fant i oppgave a), og lag et program som regner ut summen av de 30 første leddene i tallfølgen.
>
>Husk å legge ved bilde av både koden og resultatet av kjøringen.

## Fasit

a) $a_{n+1}=a_{n}+n^{2}$
b) 67 455

## Løsningsforslag

### 2-4a
Jeg setter opp tallene i følgen og sjekker differansene mellom hvert ledd (*det er alltid et godt tips for å finne mønstre!*). Jeg fant ut at differansene mellom tallene var 1, 4, 9, 16, 25, og disse tallene kjenner jeg igjen som kvadrattallene.

Jeg sjekker om jeg finner en god sammenheng for et av leddene
$$a_{5}=31=15+16=15+4^2=a_{4}+4^{2}$$
Jeg ser at jeg kan generalisere denne sammenhengen som
$$
\underline{\underline{a_{n+1}=a_{n}+n^{2}}}
$$

>[!tip] Alternative rekursive sammenhenger
>
>Det finnes også andre rekursive sammenhenger som som gir samme rekke:
>
>- $a_{n}=a_{n-1}+(n-1)^{2}$ er den samme sammenhengen som vi nettopp fant, men den gjelder for $n\geq 2$
>- $a_{n}=\left( \sqrt{ a_{n-1}-a_{n-2}  } +1 \right)^{2} + a_{n-1}$ er en sammenheng som ikke bruker $n$, slik at du ikke er avhengig av å kjenne til hvor i rekka du befinner deg når du bruker formelen

### 2-4b

![Program for å regne ut ledd i rekke](/img/user/_resources/s2-h24-2-4b.png)

Jeg brukte en `for`-løkke til å regne meg fram til delsummen til ledd nummer 30 og skrev ut svarene i konsollen. 

**Summen av de 30 første leddene er 67 455.**

>[!tip] Ulike løsninger på denne oppgaven
>
>Det finnes mange ulike løsninger på denne oppgaven – det viktigste er å passe på at ledd nr. 1 faktisk blir 1, ledd nr. 2 blir 2, ledd nr. 3 blir 6 og så videre. Derfor er det lurt å skrive ut alle leddene, og sjekke at de første leddene blir riktige sammelignet med oppgaveteksten. Her er ulike løsningsforslag til samme oppgave.
>```python
>a = 1
>sum = 0
>for n in range(1, 31):
>    a = a + (n - 1) ** 2  # regner ut nytt ledd
>    sum = sum + a         # finner delsummen
>    print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>
>a = 1
>sum = 1
>for n in range(1, 30):
>	a = a + n ** 2
>	sum = sum + a
>	print(f"Ledd {n + 1}: {a}. Delsum {n + 1}: {sum}")
>
>a = 1
>sum = 1
>for n in range(2, 31):
>    a = (n - 1) ** 2 + a  
>    sum = sum + a         
>    print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>
>
>a = 1
>sum = 1
>for n in range(1, 31):
>	print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>	a = a + n ** 2
>	sum = sum + a
>```


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/oles-studielan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Oles studielån


Ole vil studere i Tyskland og skal fullføre en mastergrad i løpet av 5 år. Han undersøker hva han kan få i stipend og lån fra Lånekassen for å dekke opphold og skolepenger.

Etter 5 år vil det samlede lånebeløpet være 799 273 kr. Rentesatsen er 5,242 % per år.

Rentene i Lånekassen begynner først å løpe rett etter fullført studium. Første avdrag betales ett år etter at du har fullført studiet. Nedbetalingstid er maks 30 år med én termin per år.

>[!oppgave]
>a) Vis at terminbeløpene Ole må betale, blir 53 437 kr dersom han velger maks nedbetalingstid.

Det er forventet at rentesatsen blir lavere fremover. Ole regner litt på det og tenker at med den forventede rentesatsen kan han klare å betale ned lånet på 25 år, med det samme terminbeløpet som i oppgave a).

>[!oppgave]
>b) Hva må rentesatsen være hvis han skal klare det?

Ole tenker at han etter hvert kan klare å betale et større terminbeløp. Han ser for seg at han betaler samme terminbeløp som i oppgave a) de 12 første årene. Deretter øker han terminbeløpet med 5 % per termin resten av nedbetalingstiden. Han antar at rentesatsen vil være 5,242 % per år gjennom hele perioden.

>[!oppgave]
>c) Hvor mange år vil det ta før lånet er nedbetalt, dersom Ole klarer dette?

## Fasit

b) 4,416 %
c) 24 år

## Løsningsforslag

![Løsning av oppgave 5 del 2 i CAS](/img/user/_resources/s2-h24-2-5-cas.png)

a) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. Terminbeløpet er ukjent, og dette ble funnet i linje 1 i GeoGebra. **Lånebeløpet er 53 437 kr.**
b) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. Vekstfaktoren er ukjent, og denne ble funnet i linje 2 i GeoGebra. **Rentesatsen må være 4,416 %.**
c) Summen av nåverdiene til terminbeløpene skal være lik lånebeløpet ved annuitetslån. De 12 første årene bruker vi vanlig formel, de $b$ neste årene så vil terminbeløpet øke med 5 % per år. Antall ledd i rekka er ukjent, og dette ble bestemt i linje 3 i GeoGebra. **Det tar 24 år før lånet er nedbetalt.**

### 2-5 med Excel
Vi kan løse hele denne oppgaven med Excel og målsøking. Se utklippet av regnearket

For å løse a) kan vi sette at alle terminbeløpene skal være lik det første terminbeløpet, og for å beregne nåverdien av terminbeløpet i celle D10 har jeg brukt formelen `=(C10/(1+$D$5)^B10)`. Vi kan da bruke målsøking på terminbeløpet og sjekke hva det må være for at summen skal bli lik lånebeløpet. (*Obs, jeg har rundet av svaret etter målsøking*.)

For å løse b) kan vi gå ned til 25 terminer og bruke målsøking på renta hvis summen skal bli lik lånebløpet. (*Obs, jeg har rundet av svaret etter målsøking*.)

I oppgave c) så har jeg satt at terminbeløpet skal fra år 13 skal være 1,05 ganger det forrige terminbeløpet. Ved å markere cellene i kolonne L så kunne jeg lett finne ut at etter 24 år ble summen mer enn lånebeløpet. Jeg fjernet terminbeløpene etter år 24.

![Løsning av oppgave 5 del 2 i Excel](/img/user/_resources/s2-h24-2-5-excel.png)


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ettersporsel-av-vare/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Etterspørsel av vare


En bedrift produserer og selger en vare. Kostnaden $K(x)$ i kroner er gitt ved

$$
K(x)=0{,}2x^{2}+50x+1500
$$

der $x$ er antall enheter.

Etterspørselen etter varen er gitt ved

$$
E(p)=300e^{-0{,}01p}
$$

der $p$ er prisen per vare i kroner

>[!oppgave]
>a) Regn ut $E(30)$. Gi en praktisk tolkning av svaret du får.

>[!oppgave]
>b) Finn et uttrykk $I(x)$ for inntekten som en funksjon av antall solgte enheter.

## Fasit

a) 220 enheter.
b) $-100x \ln \left( \frac{x}{300} \right)$

## Løsningsforslag

>[!warning] Kostnadsfunksjon
>
> I oppgaven får vi oppgitt en kostnadsfunksjon $K(x)$, men jeg kan ikke se at vi har noen som helst bruk for den i løsningen.

### 2-6a
$$
E(30)=300e^{-0{,}01 \cdot 30}=\underline{\underline{222{,}2}}
$$
**Etterspørselen etter varen er 222,2 enheter når prisen er 30 kr per vare. Det betyr at vi kan forvente å selge 222 enheter dersom vi prisen varen til 30 kr.**

### 2-6b
Vi lar etterspørselen $E(p)$ være lik $x$ (antall solgte varer), og løser med hensyn på $p$, se linje 3 i GeoGebra. 

![Løsning av oppgave 6 del 2 i CAS](/img/user/_resources/s2-h24-2-6.png)

Inntektene er gitt ved antall solgte varer $\times$ prisen per vare.
$$
I(x)= x \cdot p = x \cdot \left( -100 \ln \left( \frac{x}{300} \right)  \right)= \underline{\underline{-100x \ln \left( \frac{x}{300} \right) }}
$$


</div></div>


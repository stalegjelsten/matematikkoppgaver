---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"h24","del1_tid":2,"del2_tid":3,"title":"R2 eksamen H2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r2-eksamen-h2024/","permalink":"/eksamener/r2-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"h24","del1_tid":2,"del2_tid":3,"title":"R2 eksamen H2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Integral med delvis integrasjon og trigonometri](https://matematikkoppgaver.vercel.app/integral-med-delvis-integrasjon-og-trigonometri/) | integral, trigonometri | ✔︎ |
| [1-2](#oppgave-1-2) | [Sumformel, kvotient og geometrisk rekke](https://matematikkoppgaver.vercel.app/sumformel-kvotient-og-geometrisk-rekke/) | rekker, uendelig rekke | ✔︎ |
| [1-3](#oppgave-1-3) | [Telt med vektorer i rommet](https://matematikkoppgaver.vercel.app/telt-med-vektorer-i-rommet/) | vektorer, areal | ✔︎ |
| [1-4](#oppgave-1-4) | [Radianer og eksakte trigonometriske verdier](https://matematikkoppgaver.vercel.app/radianer-og-eksakte-trigonometriske-verdier/) | trigonometri, enhetssirkel | ✔︎ |
| [1-5](#oppgave-1-5) | [Sinusfunksjon og cosinusfunksjon](https://matematikkoppgaver.vercel.app/sinusfunksjon-og-cosinusfunksjon/) | trigonometri, funksjoner | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Ball i bevegelse med posisjonsvektor](https://matematikkoppgaver.vercel.app/ball-i-bevegelse-med-posisjonsvektor/) | vektorer, derivasjon | ✔︎ |
| [2-2](#oppgave-2-2) | [Vurder påstander om rekke, plan og areal](https://matematikkoppgaver.vercel.app/vurder-pastander-om-rekke-plan-og-areal/) | rekker, vektorer, integral, argumentasjon | ✔︎ |
| [2-3](#oppgave-2-3) | [Jordbær som omdreiningslegeme](https://matematikkoppgaver.vercel.app/jordbaer-som-omdreiningslegeme/) | integral, volum, omdreiningslegeme | ✔︎ |
| [2-4](#oppgave-2-4) | [Russebil med trigonometrisk fartsfunksjon](https://matematikkoppgaver.vercel.app/russebil-med-trigonometrisk-fartsfunksjon/) | trigonometri, integral, derivasjon | ✔︎ |
| [2-5](#oppgave-2-5) | [Rekursiv formel og programmering](https://matematikkoppgaver.vercel.app/rekursiv-formel-og-programmering/) | programmering, rekursiv sammenheng | ✔︎ |
| [2-6](#oppgave-2-6) | [Omdreiningslegeme av sirkel om y-aksen](https://matematikkoppgaver.vercel.app/omdreiningslegeme-av-sirkel-om-y-aksen/) | integral, volum, omdreiningslegeme, bevis | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/integral-med-delvis-integrasjon-og-trigonometri/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Integral med delvis integrasjon og trigonometri

>[!oppgave]
>a) Regn ut integralet $\int x^2 \cdot \ln x \, dx$
>b) Bestem $x$ når $\int_0^x \sin\left(\pi t + \frac{\pi}{4}\right) \, \mathrm{d}t = 0$ og $x \in \langle 0, \pi \rangle$.
>c) Gi en praktisk tolkning av svaret i oppgave b).

## Fasit

a) $\dfrac{1}{3}x^3\left(\ln x - \dfrac{1}{3}\right) + C$
b) $x = \dfrac{3}{2}$ og $x = 2$
c) Like mye positivt og negativt areal mellom 0 og $x$

## Løsningsforslag

### 1-1a
Siden vi skal regne ut integralet til produktet av to ulike funksjoner vil jeg forsøke delvis integrasjon. Jeg benytter DI-metoden, og velger at $x^{2}$ er den faktoren som skal integreres, og $\ln x$ er faktoren som skal deriveres. 

|     |       D       |         I          |
| :-: | :-----------: | :----------------: |
|  +  |    $\ln x$    |      $x^{2}$       |
|  -  | $\frac{1}{x}$ | $\frac{1}{3}x^{3}$ |

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

### 1-1b
Vi løser først det tilhørende ubestemte integralet ved hjelp av variabelskiftet $u=\pi t+\frac{\pi}{4}$. Da er
$$
\frac{du}{dt}=\pi \iff dt=\frac{du}{\pi}
$$
Vi gjennomfører variabelskiftet
$$
\int \sin \left( \pi t + \frac{\pi}{4} \right)  \, \mathrm{d}t=\int \sin u \, \frac{\mathrm{d}u}{\pi} =-\frac{1}{\pi}\cos(u)+C=-\frac{1}{\pi}\cos\left( \pi t + \frac{\pi}{4} \right)+C
$$
Vi setter opp det bestemte integralet og setter lik 0.
$$
\begin{aligned}
-\frac{1}{\pi} \left[ \cos\left( \pi t + \frac{\pi}{4} \right) \right]_{0}^{x}&=0\\
\left[ \cos\left( \pi t + \frac{\pi}{4} \right) \right]_{0}^{x}&=0\\
\left( \cos\left( \pi x + \frac{\pi}{4} \right) \right)-\left( \cos\left( \pi \cdot 0 + \frac{\pi}{4} \right) \right)  &=0\\
\left( \cos\left( \pi x + \frac{\pi}{4} \right) \right)-\left( \cos\left(\frac{\pi}{4} \right) \right)  &=0\\
\cos\left( \pi x + \frac{\pi}{4}  \right)- \cos\left(\frac{\pi}{4} \right)  &=0\\
\cos\left( \pi x + \frac{\pi}{4}  \right) &= \cos\left(\frac{\pi}{4} \right)
\end{aligned}
$$
Vi vet at vi at følgende uttrykk er like
$$
\begin{aligned}
\text{(1)} \quad \cos \left( \frac{\pi}{4} \right) &=\cos\left( 2k\pi+ \frac{\pi}{4}\right) \quad \text{der} \quad k\in \mathbb{Z}\\
\text{(2)} \quad \cos \left( \frac{\pi}{4} \right) &=\cos\left( 2k\pi+\frac{7\pi}{4}\right) \quad \text{der} \quad k\in \mathbb{Z}
\end{aligned}
$$
$x$ er begrenset til intervallet $\langle 0, \pi\rangle$, derfor får vi kun en gyldig løsning fra likning $(1)$
$$
x=2k \implies x=2
$$
Fra likning $(2)$ får vi følgende løsning
$$
\begin{aligned}
\pi x + \frac{\pi}{4}&=2k \pi + \frac{7\pi}{4}\\
\pi x&=2\pi k+\frac{6\pi}{4}\\
x &=2k + \frac{3}{2}\\
x&=\frac{3}{2} \quad \text{ hvis } x \in \langle 0, \pi \rangle
\end{aligned}
$$
**Løsningene er $\underline{\underline{x=\frac{3}{2}}}$ og $\underline{\underline{x=2}}$.**

### 1-1c
Hvis integralet av $\int_{0}^{x} f(t) \, dt$ skal være lik 0 så må vi ha nøyaktig like mye areal mellom grafen og $x$-aksen på den positive og negative siden av $x$-aksen mellom $0$ og $x$. For en sinusfunksjon så vil vi like mye areal på begge sider av $x$-aksen når funksjonen har gjennomført et heltall antall perioder fra tiden $t=0$.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sumformel-kvotient-og-geometrisk-rekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sumformel, kvotient og geometrisk rekke

>[!oppgave]
>a) Finn summen av den aritmetiske rekken $3+7+11+15+\cdots+399$.
>b) Bestem kvotienten $k$ for en uendelig geometrisk rekke som konvergerer og som har $a_1 = 12$ og sum = 18.
>c) Vis at tallet $0{,}75757575\ldots$ kan skrives som en uendelig geometrisk rekke. Bruk dette til å vise at $1{,}75757575\ldots = \dfrac{58}{33}$.

## Fasit

a) $s_{100} = 20\,100$
b) $k = \dfrac{1}{3}$
c) $1{,}75757575\ldots = \dfrac{58}{33}$ (bevis)

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
Vi kan omskrive tallet som sum summen av uendelig rekke med ledd på denne måten $0{,}75757575\ldots=0{,}75+0{,}0075+0{,}000075+\cdots$

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
\frac{3}{4}+\frac{3}{400}+\frac{3}{40000}+\dots=\frac{3}{4\cdot 100^0}+\frac{3}{4\cdot 100^1}+\frac{3}{4 \cdot 100^2}+ \cdots
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
 **Vi har altså vist at $1{,}75757575\ldots=\frac{58}{33}$**.


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/telt-med-vektorer-i-rommet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Telt med vektorer i rommet

Et telt står i en plan skråning. Teltet har tre rette teltstenger som er plassert i punktene $A(0, 0, 0)$, $B(3, 1, 2)$ og $C(-1, 3, 1)$. De tre teltstengene er samlet i toppunktet $T$.

>[!oppgave]
>a) Bestem arealet av bunnen i teltet.

Lengden av teltstanga fra punkt $C$ til punkt $T$ er $\sqrt{17}$. Teltstanga fra punkt $A$ til punkt $T$ følger linja $\ell$, gitt ved

$$
\ell: \begin{cases}
x=t &\\
y=t &\\
z=4t &
\end{cases}
$$

>[!oppgave]
>b) Bestem koordinatene til toppunktet $T$.

## Fasit

a) $\dfrac{5}{2}\sqrt{6}$
b) $T(1,\ 1,\ 4)$

## Løsningsforslag

### 1-3a
Jeg vet at arealet til et parallellogram utspent av $\vec{a}$ og $\vec{b}$ er gitt ved $\lvert \vec{a} \times \vec{b} \rvert$, derfor må arealet av  bunnen av teltet være gitt ved
$$
A_{\triangle}=\frac{1}{2} \left| \vec{AB} \times \vec{AC} \right|
$$
$$
\begin{aligned}
\vec{AB} \times \vec{AC} &=\begin{vmatrix}
\vec{e}_{x} &\vec{e}_{y} & \vec{e}_{z}\\
3 & 1 & 2\\
-1 & 3 & 1 
\end{vmatrix} \\
&=
\vec{e}_{x} \left(   1 \cdot 1 - 2 \cdot 3 \right)- \vec{e}_{y} \left( 3 \cdot 1 - 2 \cdot (-1) \right)+ \vec{e}_{z} ( 3 \cdot 3 - 1 \cdot (-1) ) \\
&=\begin{bmatrix}
-5, & -5, & 10
\end{bmatrix}
\end{aligned}
$$
Arealet er derfor
$$
A_{\triangle}=\frac{1}{2} \left| \vec{AB} \times \vec{AC} \right|=\frac{1}{2}\sqrt{ (-5)^{2}+(-5)^{2}+10^{2} }=\frac{1}{2}\sqrt{ 150 }=\frac{1}{2}\sqrt{ 25 \cdot 6 }=\frac{1}{2}5\cdot \sqrt{ 6 }=\underline{\underline{\frac{5}{2}\sqrt{ 6 }}}
$$
**Arealet av bunnen av teltet er $\underline{\underline{\frac{5}{2}\sqrt{ 6 }}}$.**

### 1-3b
$T$ ligger på linja $\ell$ med parameterframstillingen $T(t, t, 4t)$. Vi vet at lengden av teltstanga $CT$ er $\sqrt{17}$, altså $|\vec{CT}| = \sqrt{17}$. Vi setter opp:
$$
\begin{aligned}
|\vec{CT}|^{2} &= 17\\
(t-(-1))^{2}+(t-3)^{2}+(4t-1)^{2} &= 17\\
(t+1)^{2}+(t-3)^{2}+(4t-1)^{2} &= 17\\
t^{2}+2t+1+t^{2}-6t+9+16t^{2}-8t+1 &= 17\\
18t^{2}-12t+11 &= 17\\
18t^{2}-12t-6 &= 0\\
3t^{2}-2t-1 &= 0\\
(3t+1)(t-1) &= 0\\
t &= 1 \quad \vee \quad t=-\frac{1}{3}
\end{aligned}
$$
Fra figuren skal toppunktet befinne seg over $xy$-planet, så vi velger $t=1$.

**Koordinatene til toppunktet er $\underline{\underline{T(1,\,1,\,4)}}$.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/radianer-og-eksakte-trigonometriske-verdier/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Radianer og eksakte trigonometriske verdier

>[!oppgave]
>a) Hva er definisjonen av det absolutte vinkelmålet (radianen) til en vinkel? Hvor mange radianer er $80\degree$?
>b) Finn de eksakte verdiene til $\cos v$ og $\tan v$ når $\sin v = -\dfrac{1}{4}$ og $v \in \left[\pi, \dfrac{3\pi}{2}\right]$.

## Fasit

a) $\dfrac{4}{9}\pi$ radianer
b) $\cos v = -\dfrac{\sqrt{15}}{4}$, $\tan v = \dfrac{1}{\sqrt{15}}$

## Løsningsforslag

### 1-4a

Vi tar utgangspunkt i en sirkel med radius $r=1$ og legger toppunktet til en vinkel $\theta$ i sentrum av sirkelen. Vinkelbeina vil skjære sirkelperiferien og avgrense en sirkelbue $b$. 

Det absolutte vinkelmålet er forholdet mellom sirkelbuen $b$ og omkretsen til hele sirkelen.
 $$
\theta = \frac{b}{2\pi r}=\frac{b}{2\pi}
$$
Vi kan bruke forholdet mellom et vinkelmål og en hel omdreining for å gjøre om fra grader til radianer. La $\theta$ være det absolutte vinkelmålet til $80^\circ$, da er
$$\frac{\theta}{2\pi} =\frac{80^\circ}{360^\circ} \iff \theta=\frac{160}{360}\pi \iff \theta=\frac{4}{9}\pi$$
**$80^\circ$ er $\frac{4}{9}\pi$ radianer.**

### 1-4b

$$
\sin v = -\frac{1}{4}=\frac{\text{motstående katet}}{\text{hypotenus}} $$
Vi vet at hypotenusen i en enhetssirkel er 1, derfor har vi $\text{mk}=-\frac{1}{4}$. Lengden av den siste kateten i en slik trekant må være
$$
\text{hosliggende katet}=\sqrt{ h^{2}-\text{mk}^{2} }=\sqrt{ 1^{2}- \left( -\frac{1}{4} \right) ^{2} }=\sqrt{ 1-\frac{1}{16} }=\sqrt{ \frac{15}{16} }
$$

Vi ser at vinkelen vår må befinne seg i tredje kvadrant siden $v \in \left[ \pi, \frac{3\pi}{2} \right]$. Det betyr at $\cos v=-\sqrt{ \frac{15}{16} }$.

$\tan v$ er gitt ved
$$
\tan v = \frac{\sin v}{\cos v}=\frac{-\frac{1}{4}}{-\sqrt{ \frac{15}{16} }}=\frac{1}{\sqrt{ 15 }}
$$
$$
\underline{\underline{\cos v = -\sqrt{ \frac{15}{16} } \quad \text{og} \quad \tan v=\frac{1}{\sqrt{ 15 }}}}
$$


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sinusfunksjon-og-cosinusfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sinusfunksjon og cosinusfunksjon

Figuren viser grafen til funksjonen

$$f(x) = 2 \cdot \sin\left(\frac{\pi}{4}x - \frac{\pi}{2}\right) - 1$$

![Grafen til $f(x)$](/img/user/_resources/r2-h24-1-5.jpeg){width=50%}

>[!oppgave]
>a) Bestem en funksjon på formen $g(x) = A \cdot \cos(cx + \varphi) + d$, som passer til grafen.
>
>b) Løs likningen $\cos\left(\dfrac{\pi}{4}x - \pi\right) = \dfrac{1}{2}$, der $x \in [0, 3\pi]$. Forklar hvor på figuren løsningene ligger.

## Fasit

a) $g(x) = 2\cos\left(\dfrac{\pi}{4}x + \pi\right) - 1$
b) $x = \dfrac{8}{3}$ og $x = \dfrac{16}{3}$

## Løsningsforslag

### 1-5a
Vi kan omskrive en sinusfunksjon til en cosinusfunksjon ved å endre på faseforksyvningen. Likevektslinje, periode og amplitude vil være lik som for sinusfunksjonen.

Vi ser at $f$ har et bunnpunkt i $(0,-3)$. Vi vet at $\cos u$ har bunnpunkt når $u=\pi$, så vi kan faseforskyve med $\pi$
$$
g(x)=2 \cdot \cos\left( \frac{\pi}{4}x+\pi \right)-1
$$

### 1-5b
Vi vet at $\cos 60\degree=\cos \frac{\pi}{3}=\frac{1}{2}$, derfor må $\cos \left( \frac{\pi}{3}+2k\pi \right)=\frac{1}{2}=\cos \left(  \frac{5\pi}{3}+2k\pi \right)$ der $k \in \mathbb{Z}$. Vi kan løse for $x$ i to steg. Først setter vi opp likningen
$$
\frac{\pi}{3}+2k\pi=\frac{\pi}{4}x-\pi \iff x=8k+\frac{16}{3}
$$
Siden $x$ er begrenset til $\left[ 0,3\pi \right]$, så er det kun løsningen $x=\frac{16}{3}$ som er gyldig fra denne likningen.

Deretter kan vi sette opp
$$
\frac{5\pi}{3}+2k \pi=\frac{\pi}{4}x-\pi \iff x=8k+\frac{32}{3}
$$
På grunn av avgresningen av $x$, så får vi kun en gyldig løsning hvis vi velger $k=-1$. 
$$
x=8\cdot (-1)+\frac{32}{3}=\frac{8}{3}
$$
Likningen har løsningene $x=\frac{8}{3}$ og $x=\frac{16}{3}$.


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ball-i-bevegelse-med-posisjonsvektor/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ball i bevegelse med posisjonsvektor

En ball ruller av taket på et hus og ned på bakken. Vi plasserer et koordinatsystem slik at

- $y$-aksen ligger på bakken parallelt med husveggen
- $x$-aksen ligger på bakken, står vinkelrett på husveggen og skjærer $y$-aksen der ballen forlater hustaket
- $z$-aksen angir høyden over bakken med positiv retning oppover

![Koordinatsystem med hus og ball](/img/user/_resources/r2-h24-2-1.jpeg){width=40%}

Måleenheten på aksene er meter.

Posisjonen til ballen er gitt ved

$$\vec{r}(t) = [2t,\ 4t,\ 6 - 0{,}7t - 4{,}9t^2]$$

der $t$ er antall sekunder etter at ballen forlater taket.

>[!oppgave]
>a) Hvor høyt over bakken er kanten på taket? Hva er posisjonen til ballen etter $0{,}5$ s?
>b) Bestem farten til ballen når den treffer bakken.
>c) Ved hvilket tidspunkt er farten til ballen $10 \mathrm{~m/s}$?

## Fasit

a) 6 m over bakken; posisjon $(1,\ 2,\ 4{,}425)$ etter 0,5 s
b) $\approx 11{,}8 \, \mathrm{m/s}$
c) $t \approx 0{,}84 \, \mathrm{s}$

## Løsningsforslag

![Løsning av oppgave 1 del 2 i CAS](/img/user/_resources/r2-h24-2-1-cas.png){width=50%}

### 2-1a
$z$-komponenten til $\vec{r}(t)$ gir oss høyden ved tiden $t=0$
$$
\vec{r}_{z}(0)=6-0{,}7 \cdot 0 - 4{,}9 \cdot 0^{2}=6
$$
Posisjonen til ballen etter 0,5 s er gitt ved
$$
\vec{r}(0{,}5)=\begin{bmatrix}
2\cdot 0{,}5, & 4 \cdot 0{,}5, & 6-0{,}7\cdot 0{,}5-4{,}9\cdot 0{,}5^{2}
\end{bmatrix}= \begin{bmatrix}
 1, &2, &4{,}425
\end{bmatrix}
$$
**Kanten av hustaket er 6 meter over bakken og ballen befinner seg i punktet $(1, 2, 4{,}425)$ etter 0,5 sekunder.**

### 2-1b
Vi må først finne ut når ballen treffer bakken, altså når $\vec{r}_{z}(t)=0$, se linje 1 i GeoGebra. Vi kan se bort fra negative løsninger siden denne modellen kun er gyldig etter at ballen har forlatt kanten av taket.
$$
\begin{aligned}
\vec{r}_{z}(t)&=0\\
6-0{,}7t-4{,}9t^{2}&=0\\
t&=1{,}0374
\end{aligned}
$$
Farten til ballen er gitt ved
$$
\vec{v}(t)=\dot{\vec{r}}(t)=\begin{bmatrix}
2, &4, &-9{,}8t-0{,}7
\end{bmatrix}
$$
Jeg tolker oppgaven slik at vi kun er interessert i farten og ikke retningen til ballen i det den treffer bakken. Z-komponenten til fartsvektoren er $\frac{d}{dt}(6-0{,}7t-4{,}9t^{2})=-0{,}7-9{,}8t$. Farten er i så fall gitt ved
$$
\lvert \vec{v}(t)\rvert=\sqrt{ 2^{2}+4^{2}+(0{,}7+9{,}8t)^{2} }=\sqrt{ (9{,}8t+0{,}7)^{2} +20 }
$$
Farten når ballen treffer bakken vil være (se linje 2 i GeoGebra)
$$
\lvert \vec{v}(1{,}0374)\rvert=\sqrt{ (9{,}8\cdot 1{,}0374+0{,}7)^{2} +20 }=\sqrt{138{,}1}\approx 11{,}75
$$
**Farten er $\underline{\underline{\approx 11{,}8 \text{ m/s}}}$ når ballen treffer bakken.**

### 2-1c
Vi løser likningen (se linje 3 i GeoGebra)
$$
\sqrt{ (9{,}8t+0{,}7)^{2} +20 }=10 \implies 9{,}8t+0{,}7=\sqrt{80} \implies t=\frac{\sqrt{80}-0{,}7}{9{,}8}\approx 0{,}841
$$
Igjen kan vi se bort fra den negative løsningen.

**Farta til ballen er 10 m/s etter $\underline{\underline{0{,}84}}$ sekunder.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vurder-pastander-om-rekke-plan-og-areal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vurder påstander om rekke, plan og areal

Avgjør om hver enkelt påstand nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Likningen til et plan kan alltid bestemmes av 3 punkter i planet.

>[!oppgave]
>b) En uendelig geometrisk rekke er gitt ved $1 + (\ln x - 1) + (\ln x - 1)^2 + \cdots$
>
>    **Påstand:** Dersom $x = \dfrac{1}{e}$ vil summen av rekka være $\dfrac{1}{3}$.

>[!oppgave]
>c) To funksjoner er gitt ved $f(x) = x^3 - x^2 - ax$, der $a \in \mathbb{R}$, og $g(x) = -x^2 + x$.
>
>    **Påstand:** Grafene til $f$ og $g$ avgrenser to områder som er like store når $a > -1$.

## Fasit

a) Usann – tre kollineære punkter bestemmer ikke et entydig plan
b) Usann – rekka divergerer for $x = \dfrac{1}{e}$
c) Sann – de to arealene er like store

## Løsningsforslag

### 2-2a
**Påstand:** Likningen til et plan kan alltid bestemmes av 3 punkter i planet.

Påstanden er **usann**. Tre punkter bestemmer et entydig plan hvis og bare hvis de ikke er kollineære (ikke ligger på samme rette linje). Hvis tre punkter er kollineære, spenner vektorene $\vec{AB}$ og $\vec{AC}$ over det samme retningsrommet, og kryssprodukt $\vec{AB} \times \vec{AC} = \vec{0}$. Vi får dermed ingen normalvektor og kan ikke bestemme planet entydig.

**Moteksempel:** La $A=(0,0,0)$, $B=(1,0,0)$ og $C=(2,0,0)$. Disse tre punktene ligger på $x$-aksen, og uendelig mange plan inneholder denne linja (f.eks. $y=0$-planet, $z=0$-planet, $y=z$-planet m.fl.).

**Påstanden er usann.**

### 2-2b
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

**Påstanden er usann, rekka konvergerer ikke når $x=\frac{1}{e}$.**

### 2-2c
$f$ og $g$ kommer til å avgrense maksimalt 2 områder siden $f$ er en tredjegradsfunksjon og $g$ er en andregradsfunksjon. For å finne disse to områdene må vi først finne skjæringspunktene mellom grafene.

![Bestemmelse av skjæringspunktet mellom funksjoner i CAS](/img/user/_resources/s2-h24-2-3b-1.png){width=50%}

Jeg fant skjæringspunktene i GeoGebra. (*Vi ser her at kravet om at $a>-1$ gjør at vi får reelle løsninger*).

La oss undersøke arealet av områdene som er avgrenset. Jeg gjør dette i GeoGebra ved å integrere fra skjæringspunkt til skjæringspunkt ved hjelp av `IntegralMellom`.

![Bestemmelse av arealet mellom grafene](/img/user/_resources/s2-h24-2-3b-2.png){width=50%}

**Påstanden stemmer. Vi ser at arealene mellom grafene er like store.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/jordbaer-som-omdreiningslegeme/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Jordbær som omdreiningslegeme


> [!danger] Bildene er ikke i målestokk
> I det originale eksamenssettet er bildene i målestokk 1:1, men det er vanskelig å få til her. Ved å måle på arket har jeg funnet av avstanden fra bunnen til toppen (i $y$-retning på arket) er omtrent 4,4 cm.


<!-- two-column start left-width=50% -->

<!-- gap:0.7cm -->

![Tverrsnitt av jordbær i målestokk 1:1](/img/user/_resources/r2-h24-2-3-1.jpeg){width=65%}

---
![Linjal i målestokk 1:1](/img/user/_resources/r2-h24-2-3-2.jpeg){width=20%}

<!-- two-column stop -->


>[!oppgave]
>Bildet viser tverrsnittet av et jordbær i målestokk 1:1. Bruk integrasjon og omdreiningslegeme til å beregne volumet av hele jordbæret. Kommenter formen på omdreiningslegemet ditt og vurder svaret.

## Fasit

$V \approx 35 \, \mathrm{cm}^3$ (avhenger av målinger fra bildet)

## Løsningsforslag

Vi legger et koordinatsystem med origo spissen på jordbæret og måler avstanden fra $x$-aksen til kanten av jordbæret. Jeg har gjort dette i GeoGebra ved å sette ut punkter, se figur &fig:regresjon-jordbar.

Jeg valgte en andregradsmodell siden denne passet «godt nok». Vi ser at modellen følger omrisset av jordbæret relativt godt fram til punkt $H$. Vi underestimerer volumet mellom $C$ og $D$, men vi overestimerer mellom $D$ og $E$. Jeg setter integrasjonsgrensen til 3,65 cm siden toppen av jordbæret «bøyer seg tilbake» inn mot stilkfestet.

![Regresjon og beregning av volum i GeoGebra](/img/user/_resources/r2-h24-2-3-regresjon.png){width=70% #fig:regresjon-jordbar}

Jeg beregner volumet som et omdreiningslegeme med $\pi \int_{a}^{b} \left( f(x) \right)^{2} \, \mathrm{d}x$ i GeoGebra.

> [!warning] Tolkning av oppgavetekst
> Jeg tolker oppgaveteksten som at jeg skal finne volumet av jordbæret før det ble delt i to. Volumet av det halve jordbæret på bildet vil være omtrent halvparten av omdreiningslegemet.

**Volumet av jordbæret er omtrent $\underline{\underline{ 35 \mathrm{~cm}^{3} }}$.**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/russebil-med-trigonometrisk-fartsfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Russebil med trigonometrisk fartsfunksjon

Anders og Ivana har kjøpt seg russebil. De skal kjøre bilen til en garasje, men på turen begynner motoren å fuske. Farten $v$ følger funksjonen

$$v(t) = -6\sin\left(360t - \frac{\pi}{2}\right) + 54$$

Her er $v$ gitt i km/t, og $t$ er antall timer etter at motoren har begynt å fuske.

>[!oppgave]
>a) Bestem det første tidspunktet gjennomsnittsfarten blir 54 km/t.
>b) På hvilke tidspunkt har bilen størst akselerasjon når den kjører med farten $v$? Hvor stor er denne akselerasjonen?

Når bilen begynner å fuske, er det 2 km til garasjen som bilen skal parkeres i.

>[!oppgave]
>c) Hvor lenge må Anders og Ivana kjøre for å komme til garasjen, når bilen kjører med farten $v$?

## Fasit

a) Gjennomsnittsfart 54 km/t etter $\approx 0{,}00873 \, \mathrm{t}$ (≈ 31 s)
b) Størst akselerasjon ved vendepunktene: $\approx 0{,}00436 \, \mathrm{t}$ og $\approx 0{,}01309 \, \mathrm{t}$
c) $\approx 0{,}03684 \, \mathrm{t}$ (≈ 2 min 13 s)

## Løsningsforslag

![Løsning av oppgave 4 del 2 i CAS](/img/user/_resources/r2-h24-2-4.png)

### 2-4a
Vi ser at likevektslinja er ved 54 km/t, og at sinusfunksjonen har amplituden 6 km/t, samt at den er faseforskjøvet slik vi er allerede har toppfarten 60 km/t ved tiden $t=0$. Dermed kan vi konkludere med at gjennomsnittsfarten må være 54 km/t i det vi kommer til fartens første bunnpunkt. Ut fra grafen i GeoGebra ser vi at dette er etter 0,00873 timer.

Vi kan også finne gjennomsnittet av funksjonen slik vi har gjort i linje 2 i CAS i GeoGebra. 

**Gjennomsnittsfarten var 54 km/t for første gang etter 0,00873 timer eller 31 sekunder.**

### 2-4b
Bilen har størst akselerasjon i vendepunktene. Alle vendepunktene ligger langs likevektslinja $y=54$, og vi kan også finne dem ved å løse $v''(t)=54$, se linje 3 i CAS.

Perioden til funksjonen er 0,01745 timer eller 63 sekunder, se linja mellom $B$ og $D$ i figuren.

**Akselerasjonen har sin største negative verdi etter 0,00436 timer eller 16 sekunder, og deretter hvert 63 sekund etter dette.** Se punkt $C$ i figuren.

**Akselerasjonen har sin største positive verdi etter 0,01309 timer eller 47 sekunder, og deretter hvert 63 sekund etter dette.** Se punkt $D$ i figuren.

### 2-4c
Vi kan sette opp likningen (se linje 5 i CAS)
$$
\int_{0}^{x} v(t) \, dt =2 \implies x=0{,}03684
$$

**Anders og Ivana må kjøre i 0,03684 timer eller ca 2,21 minutter for å komme til garasjen.**


</div></div>


## Oppgave 2-5


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

![Program for å regne ut ledd i rekke](/img/user/_resources/s2-h24-2-4b.png){width=60%}

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


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/omdreiningslegeme-av-sirkel-om-y-aksen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Omdreiningslegeme av sirkel om y-aksen

En sirkel har sentrum i $S(a, 0)$ og har radius $R < a$. Sirkelen roteres om $y$-aksen.

>[!oppgave]
>Vis at volumet av omdreiningslegemet blir $2\pi^2 R^2 a$.

## Fasit

$V = 2\pi^2 R^2 a$ (bevis)

## Løsningsforslag

![Flytting av sirkelen i oppgave 6](/img/user/_resources/r2-h24-2-6-sirkler.png){width=50%}

For å gjøre jobben enklere for meg selv så vil jeg flytte sirkelen fra $S(a,0)$ til $S^*(0,a)$ og rotere sirkelen om $x$-aksen istedenfor om $y$-aksen. Sirkelens radius er fremdeles $R<a$.

En sirkel har likningen $x^{2}+y^{2}=R^{2}$, eller omskrevet for $y$ får vi
$$
y=\pm \sqrt{ R^{2} - x^{2} }
$$

Der den positive løsningen vil gi oss den øvre halvsirkelen, og den negative løsningen gir oss den nedre halvsirkelen.

Vår sirkel er forskjøvet med $a$ enheter i positiv $y$-retning, derfor er uttrykket for sirkelen vår
$$
y=\pm \sqrt{ R^{2}-x^{2} }+a
$$

Vi kan bruke formelen for omdreiningslegeme for å finne volumet. Vi bruker først formelen for den øvre halvsirkelen og finner dermed volumet av en slags smultring uten hull. Deretter lager vi et hull i smultringen ved å trekke fra volumet av omdreiningslegemet definert av den nedre halvsirkelen.

Formelen for 360º omdreining rundt $x$-aksen er
$$
V=\pi \int_{a}^{b} \left( f(x) \right) ^{2} \, dx 
$$

Grensene for integrasjonen er $x=-R$ og $x=R$.

![](/img/user/_resources/r2-h24-2-6.png)

$R$ er positiv, så vi har $\text{sgn}(R)=1$ i vårt tilfelle (se faktaboks lenger nede for mer info). 

**Volumet av omdreiningslegemet er $2\pi^{2} R^{2}a$, som skulle vises.**

>[!warning] sgn-funksjonen
>
>GeoGebra gir oss en litt ukjent `sgn(R)`-funksjon i tillegg til uttrykket vi skulle finne. `sgn()`-funksjonen er definert slik >
>$$
>\text{sgn}(x)=\begin{cases} 1 &\quad \text{hvis } x>0 \\ 
> 0&\quad \text{hvis } x=0 \\ 
> -1&\quad \text{hvis } x<0
>\end{cases}
>$$
>Hvis du møter på slike ukjente funksjoner på eksamen, prøv å skrive inn `sgn(2)` og `sgn(-5)` i GeoGebra og sjekk hva du får som svar, eller forsøk å tegne funksjonen.


</div></div>


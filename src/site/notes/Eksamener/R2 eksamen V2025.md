---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"v25","del1_tid":3,"del2_tid":2,"title":"R2 eksamen V2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"v25","del1_tid":3,"del2_tid":2,"title":"R2 eksamen V2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-v2025/"}}
---

# Oversikt over oppgavene

**Del 1** — 3 timer — uten hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Integraler S2 v25](https://matematikkoppgaver.vercel.app/integraler-s2-v25/) | integral | ✔︎ |
| [1-2](#oppgave-1-2) | [Bestem f ut fra den deriverte](https://matematikkoppgaver.vercel.app/bestem-f-ut-fra-den-deriverte/) | integral, tolkning av integraler, areal under graf | ✔︎ |
| [1-3](#oppgave-1-3) | [Tallfølge med programmering og induksjon](https://matematikkoppgaver.vercel.app/tallfolge-med-programmering-og-induksjon/) | programmering, rekker, bevis | × |
| [1-4](#oppgave-1-4) | [Trigonometrisk funksjon og likning](https://matematikkoppgaver.vercel.app/trigonometrisk-funksjon-og-likning/) | trigonometri, funksjoner, likninger | × |
| [1-5](#oppgave-1-5) | [Bordplate som trekant i 3D](https://matematikkoppgaver.vercel.app/bordplate-som-trekant-i-3-d/) | vektorer, geometri, areal | × |
| [1-6](#oppgave-1-6) | [Caspers kode](https://matematikkoppgaver.vercel.app/caspers-kode/) | programmering | × |
| [1-7](#oppgave-1-7) | [Vinkel i sirkel og trigonometri](https://matematikkoppgaver.vercel.app/vinkel-i-sirkel-og-trigonometri/) | trigonometri, enhetssirkel | ✔︎ |

**Del 2** — 2 timer — med hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Bil på spiralvei i parkeringshus](https://matematikkoppgaver.vercel.app/bil-pa-spiralvei-i-parkeringshus/) | vektorer, derivasjon, modellering | × |
| [2-2](#oppgave-2-2) | [Noras sparing og lån](https://matematikkoppgaver.vercel.app/noras-sparing-og-lan/) | lån, sparing, excel, cas | ✔︎ |
| [2-3](#oppgave-2-3) | [Harens fart og gjennomsnittsfart](https://matematikkoppgaver.vercel.app/harens-fart-og-gjennomsnittsfart/) | integral, derivasjon, modellering | × |
| [2-4](#oppgave-2-4) | [Vis at rekke blir ln 2](https://matematikkoppgaver.vercel.app/vis-at-rekke-blir-ln-2/) | bevis, utforskning, integral | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/integraler-s2-v25/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Integraler S2 v25


Regn ut integralene

>[!oppgave]
>a)
>
>$$\int_{0}^{1} (2e^{x}+2x^{2}) \, \mathrm{d}x $$

>[!oppgave]
>b)
>
>$$\int \frac{2x-1}{x^{2}-x-6} \, \mathrm{d}x $$

## Fasit

a) $2e-\frac{4}{3}$
b) $\ln \left| x^{2}-x-6 \right|+C$

## Løsningsforslag

### 1-1a
$$
\int_{0}^{1} \left( 2e^{x}+2x^{2} \right)  \, \mathrm{d}x = \left[  2e^{x}+\frac{2}{3}x^{3} \right]_{0}^{1}= \left( 2e^{1}+\frac{2}{3}1^{3}  \right)  -\left(  2e^{0}  +\frac{2}{3}0^{3} \right) =2e+\frac{2}{3}-2=\underline{\underline{2e-\frac{4}{3}}}
$$

### 1-1b
Vi ser at den deriverte av uttrykket i nevneren er det samme som telleren, og det er derfor lurt å forsøke variabelskiftet $\textcolor{tomato}{u=x^{2}-x-6}$.
$$
\textcolor{tomato}{u=x^{2}-x-6} \implies \frac{du}{dx}=\textcolor{seagreen}{2x-1} \iff \frac{du}{\textcolor{seagreen}{2x-1}}=dx
$$
Vi substituerer inn i det opprinnelige uttrykket
$$
\int \frac{\textcolor{seagreen}{2x-1}}{\textcolor{tomato}{x^{2}-x-6}} \, \mathrm{d}x=\int \frac{\cancel{ \textcolor{seagreen}{2x-1} }}{\textcolor{tomato}{u}} \, \frac{\mathrm{d}u}{\cancel{ \textcolor{seagreen}{2x-1} }}  = \int \frac{1}{\textcolor{tomato}{u}} \, \mathrm{d}u=\ln \left| \textcolor{tomato}{u} \right| +C=\underline{\underline{\ln \left| x^{2} -x -6\right| + C}} 
$$

>[!tip] Løsning med delbrøkoppspalting
>
>Hvis du velger å løse ved hjelp av delbrøkoppspalting så vil du etter faktorisering få følgende likning
>$$2x-1=A(x+2)+B(x-3)$$
>Etter integrasjon får du svaret $\ln \left| x+2 \right| + \ln \left| x-3 \right|+C$, som er det samme svaret som vi får med variabelskiftet skrevet på en annen form.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestem-f-ut-fra-den-deriverte/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestem f ut fra den deriverte


Bestem et uttrykk for funksjonen $f$ når du får vite at

- $f'(x)=-\frac{2}{x^{3}}$
- Arealet av området som er avgrenset av grafen til $f$, $x$-aksen og linjene $x=1$ og $x=2$ er $\frac{11}{14}$. Dette arealet ligger over $x$-aksen.

## Fasit

$f(x)=\frac{1}{x^{2}}+\frac{2}{7}$

## Løsningsforslag

Vi vet at $f'(x)=-\frac{2}{x^{3}}$ vil ha uendelig mange antideriverte med ulike konstantledd
$$
\int -\frac{2}{x^{3}} \, \mathrm{d}x =\int -2x^{-3} \, \mathrm{d}x = \frac{-2}{-2}x^{-2}+C=\frac{1}{x^{2}}+C
$$
Her er $C$ et hvilket som helst tall. Siden vi har fått vite at arealet av området som avgrenses av grafen til $f$, $x=1$, $x=2$ og $x$-aksen er lik $\frac{11}{14}$, samt at hele arealet ligger over $x$-aksen, kan vi bruke et bestemt integral for å finne verdien av $C$.
$$
\begin{aligned}
\int_{1}^{2} \left(  \frac{1}{x^{2}} +C  \right)\, \mathrm{d}x &=\frac{11}{14} \\
\int_{1}^{2} \left(  x ^{ -2}+C  \right)\, \mathrm{d}x &=\frac{11}{14} \\
\left[ -\frac{1}{x}+Cx \right]_{1}^{2} &=\frac{11}{14} \\
\textcolor{orange}{\left(  -\frac{1}{2}+C \cdot 2 \right)}-\textcolor{seagreen}{\left( -\frac{1}{1}+C\cdot 1 \right)} &=\frac{11}{14} \\
\textcolor{orange}{-\frac{1}{2}+2C} + \textcolor{seagreen}{\frac{1}{1}-C} &=\frac{11}{14} \\
C&=\frac{11}{14}-\frac{1}{2}=\frac{2}{7}
\end{aligned}
$$
Vår antideriverte til $f'(x)$ har altså $C=\frac{2}{7}$, derfor har vi for alle $x\neq 0$:
$$
\underline{\underline{f(x)=\frac{1}{x^{2}}+\frac{2}{7}}}
$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tallfolge-med-programmering-og-induksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tallfølge med programmering og induksjon

En elev arbeider med en tallfølge og har skrevet denne koden:

```python ln
a = 2
n = 5
for i in range(1, n + 1):
    print(a)
    a = a + (i + 2)
```

>[!oppgave]
>a) Beskriv mønsteret i tallfølgen eleven arbeider med. Hva blir resultatet når koden kjøres?

Eleven har også skrevet denne koden:

```python ln
a = 2
n = 5
S = 0
for i in range(1, n + 1):
    S = S + a
    a = a + (i + 2)
print(S)
```

>[!oppgave]
>b) Hva ønsker eleven nå å finne ut? Hva blir resultatet når koden kjøres?

Tallene fra oppgave a) er starten på en rekke.

>[!oppgave]
>c) Bruk induksjon til å vise at et ledd i rekken kan uttrykkes som
>$$a_n = \frac{n(n+3)}{2}, \quad n \geq 1$$

## Fasit

## Løsningsforslag

### a
Her setter vi opp en oversikt for å se hvordan variablene i programmet utvikler seg.

| `i` | `a` |  Beregning av neste `a` |
| :-: | :-: | ----------------------: |
|  1  |  2  |   $2+1+2=\underline{5}$ |
|  2  |  5  |   $5+2+2=\underline{9}$ |
|  3  |  9  |  $9+3+2=\underline{14}$ |
|  4  | 14  | $14+4+2=\underline{20}$ |
|  5  | 20  |                         |

Vi ser en tallfølge hvor differansene mellom leddene starter på 3, og deretter øker med 1 for hvert ledd. Matematisk kan dette uttrykkes med den rekursive sammenhengen
$$
a_{n+1}=a_{n}+n+2
$$
**Koden skriver ut leddene i tallfølgen 2, 5, 9, 14, 20.**

### b
Eleven har lagt til en variabel `S`. `S` gir en løpende sum av verdiene til `a`, derfor vil `S` være delsummen til rekka etter `n` ledd. 

**Eleven ønsker å finne delsummen til rekka etter 5 ledd, altså $2+5+9+14+20=\underline{\underline{50}}$**

### c
Påstanden vår er at
$$a_n = \frac{n(n+3)}{2}, \quad n \geq 1$$

Vi viser at dette gjelder for $n=1$
$$
a_{1} = \frac{1(1+3)}{2}=\frac{4}{2}=2 \quad \checkmark
$$
Vi antar at formelen gjelder for $n=k$ slik at
$$
a_{k}= \frac{k(k+3)}{2}
$$
Vi finner $a_{k+1}$ ved å bruke den rekursive sammenhengen fra b).
$$
a_{k+1}=a_{k}+k+2=\frac{k(k+3)}{2}+\frac{2k}{2}+\frac{4}{2}=\frac{k^{2}+3k+2k+4}{2}=\frac{k^{2}+5k+4}{2}
$$

Deretter finner vi $a_{k+1}$ ved å bruke formelen.
$$
a_{k+1}=\frac{(k+1)\left( (k+1) +3 \right) }{2}= \frac{k^{2}+2k+1+3k+3}{2}=\frac{k^{2}+5k+4}{2} \quad  \checkmark 
$$
 

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/trigonometrisk-funksjon-og-likning/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Trigonometrisk funksjon og likning

En funksjon $f$ er gitt ved

$$f(x) = 2\sqrt{3} \cdot \sin\left(2x + \frac{\pi}{6}\right) \quad ,  \quad D_f = \left\langle 0, \frac{\pi}{2} \right\rangle$$

>[!oppgave]
>a) Bestem amplituden, likevektslinja, perioden og faseforskyvningen.
>b) Løs likningen $f(x) = \sqrt{3}$

En funksjon $g$ er gitt ved

$$g(x) = 3\sin(2x) + \sqrt{3}\cos(2x) \quad , \quad  D_g = \langle 0, 2\pi \rangle$$

>[!oppgave]
>c) Løs likningen $g(x) = \sqrt{3}$

## Fasit

## Løsningsforslag

### a
Vi sammenligner med det generelle uttrykket for sinusfunksjoner
$$
\textcolor{seagreen}{A} \sin(\textcolor{steelblue}{k}x + \textcolor{tomato}{\phi})+\textcolor{maroon}{d}
$$
Vi ser fra funksjonsuttrykket til $g$ at
$$
\textcolor{seagreen}{A=2\sqrt{ 3 }}, \quad  \textcolor{steelblue}{k=2}, \quad \textcolor{tomato}{\phi=\frac{\pi}{6}}, \quad \textcolor{maroon}{d=0}
$$
Når $k=2$ så har sinusfunksjonen dobbelt så «tette» svingninger og perioden blir derfor $T=\frac{2\pi}{k}=\frac{2\pi}{2}=\pi$. Da blir også faseforskyvningen $\frac{\phi}{2}=\frac{\pi}{12}$.

**Amplituden er $2\sqrt{ 3 }$, likevektslinja er $y=0$, perioden er $\pi$ og faseforskyvningen er $\frac{\pi}{12}$ mot venstre.**

</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bordplate-som-trekant-i-3-d/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bordplate som trekant i 3D

Et bord har en bordplate med en form som en trekant $ABC$. Dersom vi tenker oss bordet plassert i et tredimensjonalt koordinatsystem der enhetene langs aksene er desimeter, vil hjørnene ha koordinatene $A(0, 0, 0)$, $B(2, 3, 0)$ og $C(1, 4, 1)$.

>[!oppgave]
>a) Er noen av vinklene i trekanten større enn $90°$? Husk å begrunne svaret.
>b) Bestem arealet av bordplaten.

En plante på veggen har en gren som vokser slik at den følger en rett linje gjennom punktene $D(3, 7, 3)$ og $E(2, 3, 2)$.

>[!oppgave]
>c) Vis at grenen aldri vil treffe bordplaten.

## Fasit


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/caspers-kode/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Caspers kode

Casper har skrevet denne koden:

```python ln
def f(x):
	return x**3

def g(x):
	return -2*x**2

dx = 0.0001

s = 0
x = 0
while x <= 2:
	s = s + f(x)*dx + g(x)*dx
	x = x + dx

print(s)
```

>[!oppgave]
>Bestem verdien som skrives ut når koden kjøres.

## Fasit


</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vinkel-i-sirkel-og-trigonometri/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vinkel i sirkel og trigonometri

I en sirkel er radius lik 3.

Figuren nedenfor viser en vinkel $v$ der toppunktet er plassert i sentrum av sirkelen og buelengden er 4.

![Vinkel $v$ i sirkel](/img/user/_resources/r2-v25-1-7.jpeg){width=30%}

>[!oppgave]
>a) Hvor stor er vinkelen $v$ gitt i
>
>    - radianer?
>    - grader?

Om en annen vinkel $u$ får du vite at $u \in \left\langle 0, \frac{\pi}{2} \right\rangle$ og $\tan u = 2$.

>[!oppgave]
>b) Bestem de eksakte verdiene til $\sin u$ og $\cos u$.

## Fasit

a) 4/3 radianer og omtrent 75º
b) $\sin u = \frac{2}{\sqrt{ 3 }}$ og $\cos u =\frac{1}{\sqrt{ 3 }}$

## Løsningsforslag

### a
Radius $r=3$ og buelengden $b=4$. 
$$v=\frac{b}{r}=\frac{4}{3}$$
Det går $360\degree$ på $2\pi$ radianer.
$$
v_{\text{grader}}=\frac{4}{3} \cdot \frac{360}{2\pi}=\frac{4}{2} \cdot \frac{360}{3\pi}=2 \cdot \frac{120}{\pi}=\frac{240}{\pi} \approx 75 \degree
$$
**Vinkelen er $\underline{\underline{ \frac{4}{3} }}$ radianer og omtrent $\underline{\underline{ 75 \degree }}$.**

### b
Hvis $\tan u =2$ så er $\frac{mk}{hk}=2$. Hvis vi gir hosliggende katet lengden 1, så blir motstående katet 2. Da blir hypotenusen
$$
h=\sqrt{ 1+ 2}=\sqrt{ 3 }
$$
Vi kan dermed sette opp eksakte verdier for $\sin u$ og $\cos u$.
$$
\sin u = \frac{mk}{h}=\underline{\underline{ \frac{2}{\sqrt{ 3 }} }} \quad \text{og} \quad \cos u = \frac{hk}{h}=\underline{\underline{ \frac{1}{\sqrt{ 3 }} }}
$$

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bil-pa-spiralvei-i-parkeringshus/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bil på spiralvei i parkeringshus

En bil kjører opp en spiralformet vei inne i et parkeringshus.

Posisjonen til bilen etter $t$ sekunder er gitt ved

$$\vec{r}(t) = \left[ 4\cos\left(\frac{\pi}{5}t\right),\ 4\sin\left(\frac{\pi}{5}t\right) + 2,\ 5 + \frac{1}{3}t \right], \qquad t \in [0, 20]$$

der bakkenivået er $xy$-planet i et koordinatsystem med meter som enhet langs aksene.

>[!oppgave]
>a) Hvor høyt over bakkenivået er bilen etter 5 sekunder?
>b) Bestem fartsvektoren $\vec{v}(t)$ og farten til bilen etter 10 sekunder.
>c) Gjør nødvendige antakelser og bestem en mulig avstand mellom etasjene i parkeringshuset.

## Fasit


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/noras-sparing-og-lan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Noras sparing og lån


Nora blir 37 år i 2026 og vil begynne å spare til egen pensjon. 

Hun vil sette et fast beløp inn på en konto i banken 1. januar hvert år. Hun vil begynne sparingen 1. januar 2026 og holde på til og med januar 2055.

Målet hennes er å ha 3 750 000 kroner i banken etter at rentene for 2055 er lagt til. Nora venter at den årlige rentesatsen på kontoen vil være 2,5 \%.

>[!oppgave]
>a) Hvor stort beløp må Nora sette i banken hvert år for å nå målet?

Nora har et huslån. Lånet har årlige terminer, og Nora betaler terminbeløpet i januar hvert år. I januar 2026 vil lånet være på 3 000 000 kroner.

Nora vil betale ned lånet før det året hun fyller 70. Hun har regnet seg fram til at hun da må betale 150 000 kroner hver termin fra og med januar 2026 til og med januar 2058.

>[!oppgave]
>b) Hvor høy har Nora regnet med at den årlige rentesatsen på lånet vil være?

Nora ønsker å hjelpe datteren med egenkapital til bolig. Nora oppretter derfor en ekstra sparekonto og setter opp en spareplan med ett årlig innskudd i 10 år. Det første innskuddet skal være 10000 kroner, deretter skal beløpene hun setter inn, øke med 6 \% per år. Nora venter at rentesatsen vil være 2,5 \% per år.

Målet er å ha 150 000 kroner på sparekontoen ett år etter at hun har satt inn det siste beløpet.

>[!oppgave]
> c) Vil Nora nå målet sitt?

## Fasit

a) 83 333 kr
b) 3,258 %
c) Nei, 149 581 kr

## Løsningsforslag

![CAS-løsning av 2-4](/img/user/_resources/s2-v25-2-4-cas.png){width=70%}

### 2-4a
Vi kaller det ukjente beløpet $B$. Nora skal sette inn $B$ på konto 30 ganger. Det siste beløpet skal ha fått renter i 1 år, mens det første beløpet skal ha fått renter i 30 år. 

For å ha 3 750 000 kr på konto etter 30 år så kan vi altså sette opp en likning med ei rekke. Likningen er løst i linje 1 i GeoGebra.
$$
\underbrace{ \textcolor{tomato}{B\cdot 1{,}025^{1}} }_{ \text{År 2055} }+\underbrace{ \textcolor{seagreen}{B\cdot 1{,}025^{2}} }_{ \text{År 2054} }+\dots+ \underbrace{ \textcolor{maroon}{B\cdot 1{,}025^{30}} }_{ \text{År 2026} }=3\,750\,000
$$

**Nora må sette inn 83 333 kr hvert år for å nå målet.**

### 2-4b
Vi kaller den ukjente vekstfaktoren til renta $v$. Nora skal betale inn lånet over 33 terminer med første termin 1. januar 2026. Nåverdien (NV) til terminbeløpene vil være:
$$
\underbrace{ \textcolor{orange}{\frac{150\,000}{v^{0}}} }_{ \text{NV til 2026-beløpet} }+\underbrace{ \textcolor{seagreen}{\frac{150\,000}{v^{1}}} }_{ \text{NV til 2027-beløpet} }+\dots+\underbrace{ \textcolor{tomato}{\frac{150\,000}{v^{32}}} }_{ \text{NV til 2058-beløpet} }=3\,000\,000
$$
Likningen er løst i linje 2 i GeoGebra.

**Nora har regnet med at den årlige rentesatsen er 3,528 %.**

### 2-4c
Sparebeløpene til Nora kan sees på som en rekke der det første beløpet er 10000 kr og får renter i 10 år, mens det siste beløpet er $10000\cdot 1{,}06^{9}$ og får renter i ett år.
$$
\underbrace{ \textcolor{tomato}{10000 \cdot 1{,}06^{0}\cdot 1{,}025^{10}} }_{ \text{Beløp år 0} } + \underbrace{ \textcolor{seagreen}{10000 \cdot 1{,}06^{1}\cdot 1{,}025^{9}} }_{ \text{Beløp år 1} } + \dots + \underbrace{ \textcolor{maroon}{10000 \cdot 1{,}06^{9}\cdot 1{,}025^{1}} }_{ \text{ Beløp år 9 } }
$$
Beløpet er beregnet i linje 3 i GeoGebra.

**Nora vil ikke nå målet på 150 000 kr. Hun vil ha 149 581 kr på kontoen etter 10 år.**

>[!note] Alternativ løsning med målsøking i Excel
>
> I regnearket nedenfor har jeg satt opp de tre deloppgavene i Excel for å løse med målsøking. 
>
>**Oppgave a** er løst ved å beregne innskuddet på kontoen i starten og slutten av hvert år. Noras sparebeløp er satt i celle `C5`. Ved å bruke målsøking og sette at celle `C37` skal bli 3 750 000 kr ved å endre på `C5` fikk jeg svaret 83 333 kr.
>
>**Oppgave b** er løst ved å skrive inn restlånet 1. januar 2026, og beregne restlånene etter innbetaling hvert år. Restlånet etter innbetaling beregnes ved å sette avdraget lik $\frac{T}{v^{32-i}}$, der $v$ er vekstfaktoren til renta og $i$ er antall år siden 1. januar 2026. Renta ble funnet ved å gjøre målsøking der restlånet etter innbetaling skal være 0 kr i 2058.
>
>**Oppgave c.** I denne oppgaven øker sparebeløpet med 6 % per år i kolonne `O`, samtidig som vi beregner renter i kolonner `Q`. I slutten av 2035 vil Nora ha 149 581 kr på konto.

![Regneark for løsning av Noras sparing og lån](/img/user/_resources/s2-v25-2-4-excel1.png)

![Formler for regneark med målsøking](/img/user/_resources/s2-v25-2-4-excel-formler.png)


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/harens-fart-og-gjennomsnittsfart/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Harens fart og gjennomsnittsfart

En hare løper vekk fra en rev som angriper den. Farten $v$ til haren er gitt ved

$$v(t) = 8{,}3 - 17{,}4 \cdot e^{-5t} + 9{,}1 \cdot e^{-0{,}08t}$$

Her er $v$ meter per sekund, og $t$ er antall sekunder etter at haren starter å løpe.

>[!oppgave]
>a) Hvor lang tid vil det gå før akselerasjonen til haren er null? Hva forteller dette svaret?
>b) Hvor langt løper haren i løpet av de første 7 sekundene?

Gjennomsnittsfarten $v_g$ til haren de første $x$ sekundene er gitt ved

$$v_g(x) = \frac{1}{x} \int_{0}^{x} v(t) \, \mathrm{d}t$$

>[!oppgave]
>c) Bestem gjennomsnittsfarten til haren de første 200 meterne.

## Fasit


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vis-at-rekke-blir-ln-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vis at rekke blir ln 2


En uendelig geometrisk rekke er gitt ved $1+x+x^{2}+x^{3}+\dots$

Det kan vises at 
$$ \int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int x^{2} \, \mathrm{d}x + \int x^{3} \, \mathrm{d}x + \dots= \int \frac{1}{1-x} \, \mathrm{d}x $$

Bruk denne sammenhengen til å vise at

$$ \frac{1}{2^{1}}+\frac{1}{2} \cdot \frac{1}{2^{2}} +\frac{1}{3} \cdot \frac{1}{2^{3}} +\frac{1}{4} \cdot \frac{1}{2^{4}} + \dots = \ln 2 $$

I denne oppgaven kan du se bort fra integrasjonskonstantene.

## Fasit


## Løsningsforslag

Vi har fått oppgitt at

$$\int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int  x^{2} \, \mathrm{d}x + \int  x^{3} \, \mathrm{d}x + \dots= \int \frac{1}{1-x} \, \mathrm{d}x$${#eq:opprinnelig}

Vi gjennomfører resonnementet vårt i flere steg.

### Integrasjon av høyre side
Vi ser først på høyre side av likning &eq:opprinnelig. Vi ser at vi kan integrere denne siden ved å gjøre variabelskiftet $u=1-x \implies \frac{du}{dx}=-1 \iff dx =-1 \cdot du$.

Integralet blir (sett bort fra integrasjonskonstantene)

$$
\int \frac{1}{1-x} \, \mathrm{d}x  = \int \frac{1}{u} \cdot (-1)\, \mathrm{d}u = -\int \frac{1}{u}\, \mathrm{d}u = -\ln \left| 1-x \right| 
$$

### Integrasjon av venstre side
Vi gjennomfører så integrasjonene på venstre side av likning &eq:opprinnelig og får

$$
\int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int  x^{2} \, \mathrm{d}x + \int  x^{3} \, \mathrm{d}x + \dots =\textcolor{orange}{x}+\textcolor{seagreen}{\frac{1}{2}x^{2}}+\textcolor{steelblue}{\frac{1}{3}x^{3}}+ \textcolor{tomato}{\frac{1}{4}x^{4}} + \dots
$$

Ved å integrere begge sidene av likning &eq:opprinnelig har vi altså foreløpig vist at:

$$
x+\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+ \frac{1}{4}x^{4} + \dots = -\ln \left| 1-x \right|
$$

### Vise at rekka er lik $\ln 2$
Vi skal vise at

$$\textcolor{orange}{\frac{1}{2^{1}}}+\textcolor{seagreen}{\frac{1}{2} \cdot \frac{1}{2^{2}}} +\textcolor{steelblue}{\frac{1}{3} \cdot \frac{1}{2^{3}}} +\textcolor{tomato}{\frac{1}{4} \cdot \frac{1}{2^{4}}} + \dots = \ln 2 $$ {#eq:lik2}

Vi sammenligner venstre side i likning &eq:lik2 med svaret vi fikk da vi integrerte venstre side i likning &eq:opprinnelig.

$$
\textcolor{orange}{x}+\textcolor{seagreen}{\frac{1}{2}x^{2}}+\textcolor{steelblue}{\frac{1}{3}x^{3}}+ \textcolor{tomato}{\frac{1}{4}x^{4}} + \dots=\textcolor{orange}{\frac{1}{2^{1}}}+\textcolor{seagreen}{\frac{1}{2} \cdot \frac{1}{2^{2}}} +\textcolor{steelblue}{\frac{1}{3} \cdot \frac{1}{2^{3}}} +\textcolor{tomato}{\frac{1}{4} \cdot \frac{1}{2^{4}}} + \dots
$${#eq:sammenligning}

Ved sammenligning av leddene ser vi at $x=\frac{1}{2}$ er en løsning av likning &eq:sammenligning.

Siden $x=\frac{1}{2}$, så sjekker vi hva $-\ln \left| 1-x \right|$ gir oss når $x=\frac{1}{2}$

$$-\ln \left| 1-x \right| = - \ln \left| 1-\frac{1}{2} \right| =-\ln \underbrace{ \left| \frac{1}{2} \right| }_{ \left| \frac{1}{2} \right| = \frac{1}{2} } = \underbrace{ {- \ln \left( \frac{1}{2} \right) =-\left( \cancelto{ 0 }{ \ln 1 } - \ln 2 \right)}}_{\text{Regel:} \ln\left( \frac{a}{b} \right) = \ln a - \ln b} =\ln 2$$

Vi har altså vist at

$$
x+\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+ \frac{1}{4}x^{4} + \dots = -\ln \left| 1-x \right|
$$

Og for $x=\frac{1}{2}$ gjelder derfor:

$$
\frac{1}{2^{1}}+\frac{1}{2} \cdot \frac{1}{2^{2}} +\frac{1}{3} \cdot \frac{1}{2^{3}} +\frac{1}{4} \cdot \frac{1}{2^{4}} + \dots = \ln 2 \qquad  \blacksquare
$$


</div></div>


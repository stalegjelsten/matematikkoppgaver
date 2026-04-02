---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"S2 eksamen V2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2025/","permalink":"/eksamener/s2-eksamen-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"S2 eksamen V2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over oppgavene

**Del 1** — 2 timer — uten hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Integraler S2 v25](https://matematikkoppgaver.vercel.app/integraler-s2-v25/) | integral | ✔︎ |
| [1-2](#oppgave-1-2) | [Bestem f ut fra den deriverte](https://matematikkoppgaver.vercel.app/bestem-f-ut-fra-den-deriverte/) | integral, tolkning av integraler, areal under graf | ✔︎ |
| [1-3](#oppgave-1-3) | [Sannsynlighetsfordeling til brettspill](https://matematikkoppgaver.vercel.app/sannsynlighetsfordeling-til-brettspill/) | diskrete sannsynlighetsfordelinger, varians, forventningsverdi | ✔︎ |
| [1-4](#oppgave-1-4) | [Ukjente programmer S2 v25](https://matematikkoppgaver.vercel.app/ukjente-programmer-s2-v25/) | programmering, rekker | ✔︎ |
| [1-5](#oppgave-1-5) | [Enhetskostnader og grensekostnader fra graf v25](https://matematikkoppgaver.vercel.app/enhetskostnader-og-grensekostnader-fra-graf-v25/) | tolke grafer, enhetskostnad, grenseinntekt og grensekostnad | ✔︎ |
| [1-6](#oppgave-1-6) | [Hypotesetest bensin](https://matematikkoppgaver.vercel.app/hypotesetest-bensin/) | hypotesetest, standard normalfordeling, normalfordeling | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

| № | Navn | Temaer | LF |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Grenseinntekt og grensekostnad på del 2](https://matematikkoppgaver.vercel.app/grenseinntekt-og-grensekostnad-pa-del-2/) | regresjon, tolkning av integraler, samlet mengde, grenseinntekt og grensekostnad | ✔︎ |
| [2-2](#oppgave-2-2) | [Normalfordelt hoppkonkurranse](https://matematikkoppgaver.vercel.app/normalfordelt-hoppkonkurranse/) | normalfordeling, simulering, programmering | ✔︎ |
| [2-3](#oppgave-2-3) | [Logistisk salg av brannvarslingssystemer](https://matematikkoppgaver.vercel.app/logistisk-salg-av-brannvarslingssystemer/) | logistisk funksjon | ✔︎ |
| [2-4](#oppgave-2-4) | [Noras sparing og lån](https://matematikkoppgaver.vercel.app/noras-sparing-og-lan/) | lån, sparing, excel, cas | ✔︎ |
| [2-5](#oppgave-2-5) | [Vis at rekke blir ln 2](https://matematikkoppgaver.vercel.app/vis-at-rekke-blir-ln-2/) | bevis, utforskning, integral | ✔︎ |

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sannsynlighetsfordeling-til-brettspill/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sannsynlighetsfordeling til brettspill


Til et brettspill hører det med en spesiell terning med 6 sider. Det er en side med en ener, en side med en toer, en side med en treer og tre sider med seksere. Vi kaster terningen én gang. La $X$ være antall øyne terningen viser.

Table: {.tall}

|   $k$    |       1       |  2  |  3  |  6  |
| :------: | :-----------: | :-: | :-: | :-: |
| $P(X=k)$ | $\frac{1}{6}$ |     |     |     |

>[!oppgave]
>a) Skriv av og fyll ut tabellen. Vis at $E(X)=4$.
>b) Bestem $\text{Var}(X)$.

## Fasit

a) –
b) 13/3

## Løsningsforslag

### 1-3a

Table: {inset=0.7em}

|            $k$            |                  $\textcolor{orange}{1}$                  |                 $\textcolor{seagreen}{2}$                  |                 $\textcolor{steelblue}{3}$                  |                  $\textcolor{tomato}{6}$                  |             Sum             |
| :-------: | :----: | :----: | :----: | :----: | :----: |
|         $P(X=k)$          |             $\textcolor{orange}{\frac{1}{6}}$             |            $\textcolor{seagreen}{\frac{1}{6}}$             |            $\textcolor{steelblue}{\frac{1}{6}}$             |       $\textcolor{tomato}{\frac{3}{6}=\frac{1}{2}}$       |             $1$             |
|     $k \cdot P(X=k)$      |             $\textcolor{orange}{\frac{1}{6}}$             |            $\textcolor{seagreen}{\frac{2}{6}}$             |            $\textcolor{steelblue}{\frac{3}{6}}$             |            $\textcolor{tomato}{\frac{18}{6}}$             |      $\frac{24}{6}=4$       |
| $(k-\mu)^{2}\cdot P(X=k)$ | $\textcolor{orange}{3^{2} \cdot \frac{1}{6}=\frac{9}{6}}$ | $\textcolor{seagreen}{2^{2}\cdot \frac{1}{6}=\frac{4}{6}}$ | $\textcolor{steelblue}{1^{2}\cdot \frac{1}{6}=\frac{1}{6}}$ | $\textcolor{tomato}{2^{2}\cdot \frac{3}{6}=\frac{12}{6}}$ | $\frac{26}{6}=\frac{13}{3}$ |

Vi finner forventningsverdien ved å finne summen av rad 3 siden $E(X)=\sum k \cdot P(X=k)$
$$
E(X)=\textcolor{orange}{\frac{1}{6}}+ \textcolor{seagreen}{\frac{2}{6}}+ \textcolor{steelblue}{\frac{3}{6}}+ \textcolor{tomato}{\frac{18}{6}}=\frac{24}{6}=4
$$

**Forventningsverdien $\mathrm{E}(X)=\underline{\underline{4}}$**

### 1-3b
Vi finner variansen ved å summere rad 4 i tabellen siden $\text{Var}(X)=\sum (k-\mu)^{2}\cdot P(X=k)$
$$
\text{Var}(X)=\textcolor{orange}{\frac{9}{6}}+ \textcolor{seagreen}{\frac{4}{6}}+ \textcolor{steelblue}{\frac{1}{6}}+ \textcolor{tomato}{\frac{12}{6}}=\frac{26}{6}=\frac{13}{3}
$$

**Variansen er $\mathrm{Var}(X)=\underline{\underline{\frac{13}{3}}}$**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ukjente-programmer-s2-v25/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ukjente programmer S2 v25


En elev arbeider med en tallfølge og har skrevet denne koden:
```python ln
a = 2
n = 5
for i in range(1, n + 1):
    print(a)
    a = a + (i + 2)
```

> [!oppgave]
> a) Beskriv mønsteret i tallfølgen eleven arbeider med.  
> Hva blir resultatet når koden kjøres?

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

> [!oppgave]
> b) Hva ønsker eleven nå å finne ut?  
> Hva blir resultatet når koden kjøres?

## Fasit

a) 2, 5, 9, 14, 20
b) Eleven ønsker å finne summen av de 5 første leddene. Summen blir 50.

## Løsningsforslag

### 1-4a
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

### 1-4b
Eleven har lagt til en variabel `S`. `S` gir en løpende sum av verdiene til `a`, derfor vil `S` være delsummen til rekka etter `n` ledd. 

**Eleven ønsker å finne delsummen til rekka etter 5 ledd, altså $2+5+9+14+20=\underline{\underline{50}}$**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/enhetskostnader-og-grensekostnader-fra-graf-v25/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Enhetskostnader og grensekostnader fra graf v25


Figuren viser grafen til en kostnadsfunksjon $K$ og to rette linjer.  
Linjen $y=138x-9920$ tangerer grafen $K$ i punktet $\left( 180, \,14\,920 \right)$.

![Kostnadsfunksjon med to rette linjer](/img/user/_resources/s2-v25-kostnadsfunksjon.png){width=80%}


>[!oppgave]
>a) Bruk figuren til å finne enhetskostnaden og grensekostnaden når det blir produsert 180 enheter. Husk å begrunne svarene.

Vi setter prisen per enhet til $p$ kroner, slik at inntekten $I(x)$ kroner er gitt ved $I(x)=p \cdot x$.

>[!oppgave]
>b) Bestem prisen $p$ slik at overskuddet vil bli størst mulig ved produksjon og salg av 180 enheter

## Fasit

a) Enhetskostnaden er 82,89 kr/enhet og grensekostnaden er 138 kr/enhet.
b) 138 kr

## Løsningsforslag

### 1-5a
Enhetskostnaden når det produseres 180 enheter er gitt ved
$$
E(180)=\frac{K(180)}{180}=\frac{14\,920}{180}=82{,}89
$$

> [!tip] Du trenger ikke regne ut delestykket over
> 
> Du trenger ikke regne ut $\frac{14920}{180}$ siden du har fått oppgitt en linje fra origo til punktet $(180, 14\,920)$. Stigningstallet til en rett linje er jo $\frac{\Delta y}{\Delta x}$, og i vårt tilfelle vil $K(180)=\Delta y$ og $180=\Delta x$. Denne linja har stigningstallet $82{,}89$, derfor må $\frac{\Delta y}{\Delta x}=\frac{14920}{180}=82{,}89$

Grensekostnaden er den deriverte av kostnadsfunksjonen, og grensekostnaden ved 180 enheter er derfor lik stigningstallet til tangenten til $K$ ved $x=180$. Jeg leser av stigningstallet til tangenten og finner at grensekostnaden er 138.

**Enhetskostnaden ved 180 enheter er 82,89 kr/enhet og grensekostnaden er 138 kr/enhet.**

### 1-5b
For at vi skal ha størst overskudd må $I'(x)=K'(x)$. Vi bestemmer grenseinntekten.
$$
I(x)=p \cdot x \implies I'(x)=p
$$
For å finne prisen som gir størst overskudd ved produksjon og salg av 180 enheter så setter vi opp $I'(180)=K'(180)$.
$$I'(180)=K'(180) \iff p = 138$$
**Prisen 138 kr gir oss størst overskudd ved produksjon og salg av 180 enheter.**


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hypotesetest-bensin/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hypotesetest bensin


Benz A/S har utviklet en ny type bensin som de mener øker kjørelengden per liter. Den gamle bensinen gir en gjennomsnittlig kjørelengde på $20 \mathrm{~km} / \mathrm{L}$, med et standardavvik på $2{,}5 \mathrm{~km} / \mathrm{L}$.

Benz A/S ønsker å teste om den nye bensinen øker kjørelengden, og planlegger å gjennomføre en hypotesetest med 25 biler.

>[!oppgave]
> a) Sett opp en nullhypotese og en alternativ hypotese for testen.

Det viser seg at de 25 bilene kjører i gjennomsnitt $21 \mathrm{~km} / \mathrm{L}$. Gå ut fra at kjørelengden er normalfordelt med standardavvik $2{,}5 \mathrm{~km} / \mathrm{L}$.

>[!oppgave]
> b) Gjennomfør hypotesetesten, og bruk den til å avgjøre om Benz A/S kan si at den nye bensinen øker kjørelengden. Bruk et signifikansnivå på 5 \%.

## Fasit

a) $H_{0}: \, \mu=20, \quad H_{A}: \, \mu > 20$
b) Vi kan forkaste $H_{0}$ med $p$-verdien 0,0228

## Løsningsforslag

### 1-6a
Vi ønsker å teste om den nye bensinen gir bedre drivstofføkonomi enn den gamle. La $\mu$ være forventningsverdien for kjørelengde per L for den nye bensinen. Da er hypotesene våre:
$$
\begin{aligned}
H_{0}: \quad \mu=20\\
H_{A}: \quad \mu > 20
\end{aligned}
$$

### 1-6b
Denne hypotesetesten er av et gjennomsnitt. La $\bar{X}$ være gjennomsnittsverdien for drivstofføkonomien for et utvalg av biler. Etter sentralgrensesetningen er $\bar{X}$ normalfordelt med:
$$
\begin{aligned}
E(\bar{X}) &= \mu  = 20 \\
\text{SD}(\bar{X})&=\frac{\text{SD}(X)}{\sqrt{ n }} = \frac{2{,}5}{\sqrt{ 25 }}=\frac{2{,}5}{5}=\frac{1}{2}
\end{aligned}
$$
Observasjonen vår er $\bar{X}=21$. Vi gjør om til standard normalfordeling:
$$
z=\frac{\bar{X}-\mu}{\text{SD}(\bar{X})}=\frac{21-20}{0{,}5}=2
$$
Sannsynligheten for at $\bar{X}$ skal ligge mer enn 2 standardavvik over forventningsverdien er kan vi finne ved hjelp av den vedlagte normalfordelingstabellen.
$$
P(Z>2)=1-\Phi(2)=1-0{,}9772=0{,}0228
$$
***p*-verdien er 0,0228, som er mindre enn signifikansnivået vårt. Vi kan dermed forkaste nullhypotesen om at den nye bensinen er like god som den gamle.**


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grenseinntekt-og-grensekostnad-pa-del-2/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grenseinntekt og grensekostnad på del 2


En bedrift produserer og selger $x$ enheter av en vare per uke.
Tabellen nedenfor viser kostnaden ved ulike produksjonsmengder.

| Produksjon <br> (enheter per uke) | 10  | 20  |  40  |  50  |
| :-------------------------------- | :-: | :-: | :--: | :--: |
| Kostnad (kroner)                  | 400 | 850 | 2070 | 2890 |

En modell for kostnaden $K(x)$ kroner kan skrives på formen

$$
K(x)=a x^2+b x+c
$$

>[!oppgave]
> a) Vis at $K^{\prime}(x)=1,23 x+25$

Inntekten $I(x)$ kroner per uke er gitt ved

$$
I(x)=3000 \cdot \ln (5 x)
$$

>[!oppgave]
> b) Bestem $I^{\prime}(35)$ og $K^{\prime}(35)$.
> 	Gi en praktisk tolkning av svarene.
> c) Bestem $\int_{20}^{30} K^{\prime}(x) d x$.
> 	Gi en praktisk tolkning av svaret.

## Fasit

b) $I'(35)=85{,}71 \text{ og } K'(35)=68{,}19$
c) 558,5 kr. Dette er differansen mellom produksjonskostnader for 20 enheter og 30 enheter.

## Løsningsforslag

### 2-1a

![Regresjon i GeoGebra](/img/user/_resources/s2-v25-2-1a.png){width=60%}

Vi finner en andregradsmodell for kostnadene ved hjelp av regresjon i GeoGebra. Se utklippet over.
$$
K(x)=0{,}617 x^{2}+25x+93{,}33
$$

**Grenseinntekten $K'(x)=2 \cdot 0{,}617x+25=\underline{\underline{1{,}23x+25}}$.** 

### 2-1b

![Grenseinntekt og grensekostnad i GeoGebra](/img/user/_resources/s2-v25-2-1b.png){width=60%}

Se linje 3 og 4 i CAS.
$$
\underline{\underline{I'(35)=85{,}71 \text{ og } K'(35)=68{,}19 }}
$$
**Her øker grenseinntekten mer enn grensekostnaden, altså vil vi tjene mer penger ($85{,}71 \text{ kr}$) på å produsere en mer enhet, enn hva vi må betale i produksjonskostnader for å produsere en mer enhet ($68{,}19 \text{ kr}$). Vi tjener altså omtrent $85{,}71-68{,}19=17{,}5$ kr på å produsere og selge 36 enheter framfor 35 enheter.**

### 2-1c
Se linje 5 i CAS.
$$
\underline{\underline{\int_{20}^{30} K'(x) \, dx =558{,}5}}
$$
Dette er det bestemte integralet av *grensekostnaden* $K'(x)$, altså vil svaret vårt tilsvare
$$
\int_{20}^{30} K'(x) \, dx = K(30)-K(20)
$$
**558,5 kr er altså differansen i produksjonskostnader mellom å produsere 20 enheter og 30 enheter.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/normalfordelt-hoppkonkurranse/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Normalfordelt hoppkonkurranse


Tre skihoppere skal delta i en hoppkonkurranse.
Tabellen nedenfor viser forventningsverdi og standardavvik for lengden på et hopp for hver av de tre hopperne. Vi antar at lengden på hoppene er uavhengig og normalfordelt.

|        | Forventningsverdi | Standardavvik |
| :----: | :---------------: | :-----------: |
| Birger |     70 meter      |   20 meter    |
| Maren  |     80 meter      |    5 meter    |
| Espen  |     75 meter      |   10 meter    |

>[!oppgave]
>a) Gjør beregninger for hver skihopper, og bestem sannsynligheten for at skihopperen hopper lenger enn 90 meter i et tilfeldig hopp.

I første omgang hoppet Maren 83 meter.

>[!oppgave]
>b) Bestem sannsynligheten for at Maren hoppet lengst i denne omgangen.

I andre omgang gjør alle et nytt hopp.

>[!oppgave]
> c) Bruk simulering og bestem sannsynligheten for at Maren hopper lengst i denne omgangen.

## Fasit

a) 0,1587, 0,0228 og 0,0668
b) 0,5849
c) Omtrent 47,4 %

## Løsningsforslag

La $B, M \text{ og } E$ være lengdene av hoppene til henholdsvis Birger, Maren og Espen.

Vi bestemmer sannsynligheten for at hver av dem hopper 90 meter eller lengre ved hjelp av sannsynlighetsvinduet i GeoGebra, se skjermbildet under. (Kun Birgers utklipp er vist).

![Sannsynligheten for at Birger hopper 90 meter eller lengre](/img/user/_resources/s2-v25-2-2a.png){width=60%}

$$
\textcolor{orange}{P(B>90)}=0{,}1587 ,\quad \textcolor{seagreen}{P(M>90)}=0{,}0228, \quad \textcolor{steelblue}{P(E>90)}=0{,}0668
$$
**Sannsynlighetene for at Birger, Maren og Espen hopper lengre enn 90 meter er i ett tilfeldig hopp er henholdsvis 0,1587, 0,0228 og 0,0668.**

### 2-2b
Hvis Maren skal hoppe lengst med et hopp på 83 meter så må både $B<83$ og $E < 83$. Vi kan bruke multiplikasjonsprinsippet for å finne sannsynligheten for at begge disse utfallene skjer samtidig. Igjen bestemmer vi sannsynligheten ved hjelp av sannsynlighetsvinduet i GeoGebra.

![Sannsynligheten for at Birger hopper kortere enn 83 meter](/img/user/_resources/s2-v25-2-2b.png){width=60%}

$$
\begin{aligned}
P(\text{Maren vinner med 83 m}) &= \textcolor{orange}{P(B<83)}\cdot \textcolor{steelblue}{P(E<83)}\\
&= \textcolor{orange}{0{,}7422} \cdot \textcolor{steelblue}{0{,}7881} = \underline{\underline{0{,}5849}}
\end{aligned}
$$
**Sannsynligheten for at Maren vinner med et hopp på 83 meter er 0,5849.**

### 2-2c
Vi lager en simulering i Python hvor vi trekker hopplengder ut fra normalfordelingene til $B$, $M$ og $E$. Deretter sjekker vi om Marens hopp er det lengste hoppet.

```python
from random import gauss
N = 100_000
antall_gunstige = 0

for i in range(N):
    # Trekker hopplengder fra normalfordelingene
    B = gauss(70, 20)
    M = gauss(80, 5)
    E = gauss(75, 10)

    # Sjekker om Marens hopp er lengre enn både Espens og Birgers
    if (M > B and M > E):
        antall_gunstige += 1

ssh = antall_gunstige / N

print(f"Det er omtrent {ssh * 100:.2f} % sannsynlighet for at Maren hopper lengst i andre omgang")
```

Etter å ha kjørt programmet flere ganger ser jeg at sannsynligheten er stabil på omtrent 47,4 %.

**Det er omtrent 47,4 % sannsynlighet for at Maren hopper lengst i andre omgang.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-salg-av-brannvarslingssystemer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Logistisk salg av brannvarslingssystemer


Sikkerhetsselskapet SaifY skal lansere et nytt brannvarslingssystem i en by med 2 millioner husstander. SaifY regner med at antallet husstander som har brannvarslingssystemet $t$ uker etter lanseringen, vil følge modellen $B$ gitt ved

$$
B(t)=\frac{1700000}{1+500 e^{-0,07 t}}
$$

>[!oppgave]
>a) Hvor lang tid vil det ta før halvparten av husstandene i byen har brannvarslingssystemet, ifølge modellen?
>b) Bestem $B^{\prime}(52)$.
>  Gi en praktisk tolkning av svaret.

Det viser seg at konkurrenten UnSaif planlegger å lansere et brannvarslingssystem med tilsvarende teknologi samtidig. Dette vil påvirke salget til SaifY.

Etter å ha hørt om planene til UnSaif antar SaifY at
- de totalt vil få solgt brannvarslingssystemet sitt til en million husstander
- fire tusen husstander har brannvarslingssystemet når det lanseres
- flest nye husstander kjøper brannvarslingssystemet i uke 65

>[!oppgave]
>c) Bruk antakelsene ovenfor til å lage en ny logistisk modell $F$ for antallet husstander som har brannvarslingssystemet etter $t$ uker.

## Fasit

a) 94 uker
b) 7827,7
c) $F(t)=\frac{1000000}{1+249e^{-0{,}0849t}}$

## Løsningsforslag

![Logistisk modell for brannalarmer i by](/img/user/_resources/s2-v25-2-3a.png)

### 2-3a
Jeg la inn modellen i GeoGebra og la inn linja $y=1\,000\,000$ for å sjekke når halvparten hadde fått systemet. Jeg fant skjæringen med $B$ i punktet $A=(93{,}88, 1000000)$.

**Det tar 94 uker før halvparten av husstandene i byen har brannvarslingssystemet ifølge modellen.**

### 2-3b
Se nederst i GeoGebra-utklippet.
$$
\underline{\underline{B'(52)=7827{,}7}}
$$
**Etter 52 uker (ett år) så selges brannvarslingssystemet til omtrent 7828 husstander per uke.**

### 2-3c
En logistisk modell er gitt ved
$$
f(x)=\frac{N}{1+a \cdot e ^{-kx}}
$$

- $N$ er «bæreevnen» eller maksimalverdien for funksjonen
- $\frac{N}{1+a}$ vil være funksjonsverdien når $x=0$
- Vi har raskest vekst i vendepunktet som vi finner i $\left( \frac{\ln a}{k} , \frac{N}{2}\right)$

Med bakgrunn i opplysningene i oppgaveteksten kan vi bestemme $\textcolor{orange}{N=1\,000\,000}$ siden dette er antallet husstander de totalt selger til.

Videre vet vi at det er 4000 husstander som har systemet ved $x=0$, derfor må
$$\frac{\textcolor{orange}{N}}{1+a}=4000 \iff \frac{1000\cancel{ 000 }}{1+a}=4\cancel{ 000 } \iff \frac{1000}{4} = 1+a \iff \textcolor{seagreen}{a=250-1=249}$$

Til sist vet vi at vendepunktet (den raskeste veksten) er i uke 65, altså må
$$
\frac{\ln \textcolor{seagreen}{a}}{k} =65 \iff \frac{\ln \textcolor{seagreen}{249}}{k}=65 \iff 5{,}517=65k \iff \textcolor{steelblue}{k=\frac{5{,}517}{65}=0{,}0849}
$$
En logistisk modell som passer til dataene vil være
$$
\underline{\underline{F(t)=\frac{1 \, 000 \, 000}{1+249e^{-0{,}0849t}}}}
$$

>[!note] Løsning av 2-4 i CAS
>
>Denne oppgaven kan også løses i CAS ved å sette opp 3 likninger for å bestemme $N$, $a$ og $k$, se skjermbildet under. Du kan også gjøre regresjon på punktene $(0, 4000)$, $(65, 500\,000)$ og $(200, \, 1\,000\,000)$ med logistisk modell.
>
>![](/img/user/_resources/s2-v25-2-3c-cas.png){width=50%}


</div></div>


## Oppgave 2-4


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


## Oppgave 2-5


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


---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v24","del1_tid":2,"del2_tid":3,"title":"S2 eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2024/","permalink":"/eksamener/s2-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v24","del1_tid":2,"del2_tid":3,"title":"S2 eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Bestemt integral og areal](https://matematikkoppgaver.vercel.app/bestemt-integral-og-areal/) | integral, areal under graf, bestemt integral | ✔︎ |
| [1-2](#oppgave-1-2) | [Ubestemt integral v24](https://matematikkoppgaver.vercel.app/ubestemt-integral-v24/) | integral, substitusjon | ✔︎ |
| [1-3](#oppgave-1-3) | [Ukjent program S2 v24](https://matematikkoppgaver.vercel.app/ukjent-program-s2-v24/) | programmering, rekker, aritmetisk rekke | ✔︎ |
| [1-4](#oppgave-1-4) | [Normalfordelt laks](https://matematikkoppgaver.vercel.app/normalfordelt-laks/) | standard normalfordeling, normalfordeling | ✔︎ |
| [1-5](#oppgave-1-5) | [Vis at enhetskostnad er like grensekostnad ved laveste enhetskostnad](https://matematikkoppgaver.vercel.app/vis-at-enhetskostnad-er-like-grensekostnad-ved-laveste-enhetskostnad/) | bevis, enhetskostnad, grenseinntekt og grensekostnad, økonomi | ✔︎ |
| [1-6](#oppgave-1-6) | [Hildes terningkast](https://matematikkoppgaver.vercel.app/hildes-terningkast/) | forventningsverdi, normalfordeling, standard normalfordeling, utforskning, sentralgrenseteoremet | ✔︎ |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Logistisk vekst for et produkt](https://matematikkoppgaver.vercel.app/logistisk-vekst-for-et-produkt/) | økonomi, logistisk funksjon, samlet mengde, integral, derivasjon | ✔︎ |
| [2-2](#oppgave-2-2) | [Hypotesetest om legemiddel](https://matematikkoppgaver.vercel.app/hypotesetest-om-legemiddel/) | hypotesetest, binomisk, binomisk fordeling | ✔︎ |
| [2-3](#oppgave-2-3) | [Olivias annuitetslån](https://matematikkoppgaver.vercel.app/olivias-annuitetslan/) | lån, rekker, excel, cas, annuitetslån | ✔︎ |
| [2-4](#oppgave-2-4) | [Kubikktall](https://matematikkoppgaver.vercel.app/kubikktall/) | rekursiv sammenheng, figurtall, programmering, rekker, regresjon | ✔︎ |
| [2-5](#oppgave-2-5) | [Sveins kurv med baller](https://matematikkoppgaver.vercel.app/sveins-kurv-med-baller/) | sannsynlighet, hypergeometrisk, utforskning, programmering | ✔︎ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestemt-integral-og-areal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestemt integral og areal


En funksjon $f$ er gitt ved
$$
f(x)=-x^{3}+3x
$$

>[!oppgave]
>
> a) Regn ut integralet
> $$\int_{-1}^{0} f(x) \, dx $$
> b) Bestem arealet av området som er avgrenset av grafen til $f$, $x$-aksen og linjene $x=-1$ og $x=1$

## Fasit

a) $-\frac{5}{4}$
b) $\frac{5}{2}$

## Løsningsforslag

### a

$$
\begin{aligned}
\int_{-1}^{0} \left( -x^{3}+3x \right)  \, dx& \\
\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{-1}^0& \\
0-\left( -\frac{1}{4}(-1)^{4} + \frac{3}{2}(-1)^{2} \right)& \\
-\left( -\frac{1}{4} + \frac{3}{2} \right)&=-\frac{5}{4} 
\end{aligned}
$$

**Integralet er $\underline{\underline{-\frac{5}{4}}}$.** 

### b
Jeg finner først nullpunktene ved å faktorisere uttrykket.

$$
f(x)=-x^{3}+3x=-x(x^{2}-3)=-x\left(x^{2}-\left(  \sqrt{ 3 } \right)^{2} \right) = -x(x+\sqrt{ 3 })(x-\sqrt{ 3 })
$$

Vi har nullpunkter når $f(x)=0$. Det vil si at vi har nullpunkter når $x=-\sqrt{ 3 }, x=0, x=\sqrt{ 3 }$. Det er kun nullpunktet $x=0$ som ligger mellom $x=-1$ og $x=1$. 

For å finne ut om funksjonen er positiv eller negativ i intervallene så sjekker jeg funksjonsverdien i $x=-1$ og $x=1$.

$$f(-1)=-(-1)^{3}+3(-1)=1-3=-2$$

$$f(1)=-(1)^{3}+3 \cdot 1=-1+3=2$$
>[!tip]- Alternativ måte å sjekke hvor funksjonen er positiv og negativ
>
>Siden integralet $\int_{-1}^{0} f(x) \, d < 0$ og det ikke finnes noen nullpunkter for $x \in \langle-1, 0 \rangle$, så må $f$ være negativ når $x \in \langle-1, 0 \rangle$

$f$ er altså negativ i intervallet $[-1, 0\rangle$ og positiv i intervallet $\langle 0 , 1]$. Vi finner arealet ved å ta integralene av hver del (og husker minustegn foran integralet til området som ligger under $x$-aksen).

$$
\begin{aligned}
A&=-\int_{-1}^{0} f(x) \, dx + \int_{0}^{1} f(x) \, dx  \\
A&=- \left( -\frac{5}{4} \right) +\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{0}^1 \\
A&=\frac{5}{4} + -\frac{1}{4}+\frac{3}{2}=\frac{10}{4}=\frac{5}{2}
\end{aligned}
$$

**Arealet av området er $\underline{\underline{\frac{5}{2}}}$.**

>[!tip] Antisymmetri
>
>Du kan utnytte antisymmetrien til $f$ til å argumentere for at arealet avgrenset av $x=-1$, $f$, $x$-aksen og $x=0$ vil være like stort som arealet avgrenset av $f$, $x$-aksen, $x=0$ og $x=1$.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ubestemt-integral-v24/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ubestemt integral v24


Regn ut integralet
$$
\int \left( x^{2}+1 \right)^{3} \cdot 2x \, \mathrm{d}x 
$$

## Fasit

$\frac{1}{4}(x^{2}+1)^{4}+C$

## Løsningsforslag

Jeg ser at hvis jeg velger $u=x^{2}+1$ og bruker variabelskifte, så kan jeg forkorte bort $2x$-faktoren senere.

$$
\begin{aligned}
\int (x^{2}+1)^{3} \cdot 2x \, \mathrm{d}x &= \int u \cdot 2x \, \mathrm{d}x \\
u&=x^{2}+1\\
\frac{du}{dx}&=2x\\
dx&=\frac{du}{2x}
\end{aligned}
$$

Jeg erstatter $dx$ i det opprinnelige integralet med $\frac{du}{2x}$

$$
\int u^{3} \cdot 2x \, \mathrm{d}x =\int u^{3}\cdot \cancel{ 2x } \, \frac{du}{\cancel{ 2x }} =\int u^{3} \, \mathrm{d}u=\frac{1}{4}u^{4}+C= \underline{\underline{\frac{1}{4}(x^{2}+1)^{4}+C}}
$$


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ukjent-program-s2-v24/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ukjent program S2 v24


En elev har laget programmet under. 

```python ln
n = 0
S = 0

while S <= 200:
	n = n + 1
	S = S + 4*n - 2

print(n)
```

>[!oppgave]
>a) Forklar hva eleven prøver å finne ut.
>b) Finn verdien eleven får skrevet ut når programmet kjøres.

## Fasit

a) Delsummer av aritmetisk rekke hvor hvert ledd er gitt ved $a_{n}=4n-2$
b) 11

## Løsningsforslag

### a
Programmet viser en aritmetisk følge hvor hvert ledd er gitt av $a_{n}=4n-2$ for $n>0$. Programmet regner ut delsummene, $S_{n}$, til den tilhørende rekka. 

**Programmet finner ut hvilket ledd i rekka som gjør at delsummen blir *over* 200.**

### b
Siden tallfølgen er aritmetisk kan vi regne ut summen av de $n$ første leddene med

$$
S_{n}=\frac{a_{1}+a_{n}}{2}n
$$

Jeg vet at summen skal være *over* 200, at $a_{1}=2$ og jeg kan erstatte $a_{n}$ med $4n-2$. Dette gir

$$
\begin{aligned}
200&=\frac{2+4n-2}{2}n\\
200&=2n^{2}\\
100&=n^{2}\\
10&=n
\end{aligned}
$$

$n=10$ gir oss altså nøyaktig delsummen $S_{10}=200$. $n=11$ gir oss den første delsummen som er over 200.

**Programmet skriver ut 11.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/normalfordelt-laks/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Normalfordelt laks


Hos en lakseoppdretter er slaktevekten til laksen normalfordelt med forventningsverdi 4700 gram. Det viser seg at $11{,}5 \,\%$ av laksen som slaktes, veier mer enn 5300 gram.

>[!oppgave]
>a) Vis at standardavviket for vekten til en vilkårlig laks er omtrent 500 gram.
>b) Bestem sannsynligheten for at en vilkårlig laks veier mindre enn 4500 gram

## Fasit

b) 34,5 %

## Løsningsforslag

### a
La $X$ være vekten til en tilfeldig valgt fisk. Da er forventningsverdien $E(X)=4700$. 

Vi vet at 88,5 % av fisken som slaktes veier mindre eller lik 5300 gram. Ifølge normalfordelingstabellen så er $0{,}885=\Phi(1{,}2) \implies z=1{,}2$.

Vi kan da sette opp likningen

$$
z=\frac{x-\mu}{\sigma} \iff 1{,}2=\frac{5300-4700}{\sigma} \iff \sigma = \frac{600}{1{,}2}=500
$$

**Standardavviket for en vilkårlig valgt laks er 500 gram.**

### b
Vi gjør om til standard normalfordeling

$$
z=\frac{4500-4700}{500}=-\frac{200}{500}=-0{,}4
$$

Normalfordelingstabellen gir oss $\Phi(-0{,}4)=0{,}345$.

**Sannsynligheten for at en vilkårlig valgt laks veier mindre enn 4500 gram er 34,5 %.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/vis-at-enhetskostnad-er-like-grensekostnad-ved-laveste-enhetskostnad/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Vis at enhetskostnad er like grensekostnad ved laveste enhetskostnad


La $K(x)$ være kostnadsfunksjonen til en bedrift som produserer $x$ enheter av en vare, og la $E(x)$ være enhetskostnaden. La $x_0$ være antallet enheter som gir den laveste enhetskostnaden. Vis at grensekostnaden er lik enhetskostnaden for $x=x_0$.

## Fasit

Oppgaven er et bevis. Se løsningsforslag.

## Løsningsforslag

Vi har de laveste enhetskostnadene når $E'(x)=0$. Vi kan altså sette opp

$$
\begin{aligned}
E'(x)&=0\\
\left(  \frac{K(x)}{x} \right)'&=0\\
\frac{K'(x) \cdot x-K(x) \cdot 1}{x^{2}}&=0\\
K'(x) \cdot x - K(x)&=0\\
K'(x)&=\frac{K(x)}{x} \\
K'(x)&=E(x)
\end{aligned}
$$

Hvis $x_{0}$ er antallet enheter som gir lavest enhetskostnader så ser vi at dette må være lik grensekostnaden, altså $K'(x_{0})=E(x_{0})$.


</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hildes-terningkast/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hildes terningkast


Hilde kaster en terning med seks sider. La $X$ være antall øyne hun får på terningen.

>[!oppgave]
>a) Bestem forventningsverdien $E(X)$

Hilde regner ut at standardavviket $SD(X)=1{,}7$. Hun vil kaste terningen flere ganger og summere antall øyne fra hvert kast.

>[!oppgave]
>b) Hvor mange ganger må Hilde kaste terningen før det er omtrent 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen?

## Fasit

a) 3,5
b) 100

## Løsningsforslag

### a
For å finne forventningsverdien lager jeg en tabell og regner ut $\sum_{i=1}^6 x \cdot P(X=x)$ 

| $x$ |   $P(X=x)$    |         $x \cdot P(X=x)$          |
| :-: | :-----------: | :-------------------------------: |
|  1  | $\frac{1}{6}$ | $1 \cdot \frac{1}{6}=\frac{1}{6}$ |
|  2  | $\frac{1}{6}$ | $2\cdot \frac{1}{6}=\frac{2}{6}$  |
|  3  | $\frac{1}{6}$ | $3\cdot \frac{1}{6}=\frac{3}{6}$  |
|  4  | $\frac{1}{6}$ | $4\cdot \frac{1}{6}=\frac{4}{6}$  |
|  5  | $\frac{1}{6}$ | $5\cdot \frac{1}{6}=\frac{5}{6}$  |
|  6  | $\frac{1}{6}$ | $6\cdot \frac{1}{6}=\frac{6}{6}$  |
| Sum |       1       | $\frac{21}{6}=\frac{7}{2}=3{,}5$  |

**Forventningsverdien er 3,5.**

### b
Standardavviket til ett kast er $SD(X)=1{,}7$. 

Vi lar $S$ være summen av $n$ forsøk med $X$ slik at

$$
S=X_{1}+X_{2}+X_{3}+ \dots + X_{n}
$$

Sentralgrensesetningen sier at $S$ vil være tilnærmet normalfordelt med variansen og standardavviket:

$$
\text{Var}(S)=n \cdot \text{Var}(X) \implies SD(S)=\sqrt{ n } \cdot SD(X)
$$

Fra normalfordelingstabellen så kan jeg finne ut at 68 % av arealet under normalfordelingskurven ligger innenfor pluss/minus ett standardavvik fra forventningsverdien. Altså må det være 32 % sannsynlighet for å få observasjon *mer enn* ett standardavvik fra forventningsverdien.

![](/img/user/_resources/s2-v24-1-6b.png)

Siden vi vet at 32 % tilsvarer mer enn ett standardavvik fra forventningsverdien, må 17 øyne være ett standardavvik.

$$
\begin{aligned}
SD(S)&=17\\
\sqrt{ n } \cdot SD(X)&=17 \\
\sqrt{ n } \cdot 1{,}7 &= 17\\
\sqrt{ n }&=10\\
n&=100
\end{aligned}
$$

**Hilde må kaste terningen 100 ganger før det er omtrent 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen.**


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/logistisk-vekst-for-et-produkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">




# Logistisk vekst for et produkt


For et år siden begynte en butikk å selge et nytt produkt. Funksjonen $f$ gitt ved

$$
f(t)=\frac{700}{1+20e^{-0{,}12t}}
$$

er en god modell for antallet enheter butikken har solgt av produktet per uke, $t$ uker etter at produktet kom i salg.

>[!oppgave]
>a) Når økte slaget raskest, ifølge modellen, og hvor mye økte salget da?
>b) Hvor lang tid gikk det før det samlede salget passerte 2000 enheter, ifølge modellen?

Inntekten fra salget av produktet har vært 1 000 000 kroner det første året.

>[!oppgave]
>c) Hvilken pris har butikken solgt produktet for?

## Fasit

a) Uke 25, 21 enheter per uke
b) 18,83 uker
c) 53 kr
[[Løsningsforslag/Løsningsforslag S2 eksamen V2024#Oppgave 2-1\|Løsningsforslag S2 eksamen V2024]]

## Løsningsforslag


![CAS-utklipp til oppgave 2-1](/img/user/_resources/s2-v24-2-1.png){ width=50% }

### a
Jeg ser at funksjonen er logistisk og jeg vet at den største vekstfarten er i vendepunktet.

Jeg finner vendepunktet i GeoGebra, se linje 2 i utklippet, vendepunktet er ved 25 enheter solgt. Vekstfarten ved 25 solgte enheter finner jeg ved å bestemme $f'(25)$ i linje 3.

**Salget økte raskest i uke 25, da økte salget med 21 enheter per uke.**

### b
Vi kan finne det samlede salget ved å bestemme arealet under grafen til $f$.

I linje 4 setter jeg opp likningen

$$
\int_{0}^{x} f(t) \, dt=2000 
$$

**Det tok nesten 19 uker før salget passerte 2000 enheter.**

### c
Inntektene fra salget må være gitt ved antall enheter solgt $\times$ pris per enhet.

I linje 5 setter jeg opp likningen

$$
\int_{0}^{52} f(t) \, dt \cdot p = 1\, 000 \, 000 
$$

der $p$ er den ukjente prisen per enhet.

**Butikken har solgt produktet for 53 kr.**

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hypotesetest-om-legemiddel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hypotesetest om legemiddel


Et smertestillende legemiddel, A, er tilgjengelig på markedet. Legemiddelet demper smerte for mange pasienter, men ikke for alle.

- Sannsynligheten for at legemiddel A virker på en pasient, er 75 %.
- Vi tester legemiddel A på $n$ pasienter.
- Legemiddel A virker på $X$ av disse pasientene.
 
>[!oppgave]
>a) Hvilken sannsynlighetsfordeling har $X$? Begrunn svaret ditt.
> 
> Regn ut $P(X=9)$ når $n=12$.

Et nytt legemiddel, B, skal også dempe smerte hos pasienter.

- Legemiddel B er testet ut på 10 pasienter.
- Legemiddel B virket på 9 av disse 10 pasientene.

>[!oppgave]
>b) La $p$ være sannsynligheten for at B virker på en pasient. Gjennomfør en hypotesetest med signifikansnivå på 5 %. Bruk denne til å vurdere om du kan si at legemiddel B virker med høyere sannsynlighet enn A.

Legemiddel B blir gitt til 200 pasienter.

>[!oppgave]
>c) Hvor mange pasienter må legemiddel B minst virke på for at vi skal kunne konkludere med at legemiddel B virker med høyere sannsynlighet enn legemiddel A? Bruk et signifikansnivå på 5 %.

## Fasit

a) Binomisk. 0,2581
b) Vi kan ikke si at B fungerer bedre.
c) 100

## Løsningsforslag

### a
$X$ er binomisk fordelt fordi

- Vi har $n$ delforsøk
- Sannsynligheten for at legemiddelet fungerer er $p=0{,}75$ i alle forsøkene
- Vi må anta at vi tester legemiddelet på tilfeldige pasienter slik at delforsøkene blir uavhengige. 

Jeg bruker GeoGebras sannsynlighetskalkulator til å bestemme $P(X=9)$.

![Utklipp til oppgave 2-2a](/img/user/_resources/s2-v24-2-2a.png){width=50%}

$$
P(X=9)=\underline{\underline{0{,}258}}
$$

>[!tip] Utregning med formel for binomisk
>
>Du kan også finne denne punktsannsynligheten enkelt med formelen for binomisk sannsynlighetsfordeling
>
>$$P(X=k)=\binom{n}{k} \cdot p^{k}\cdot (1-p)^{n-k}$$
>
>$$P(X=9)=\binom{12}{9}\cdot 0{,}75^{9} \cdot 0{,}25^{3}=0{,}2581$$

### b
Nullhypotesen vår er at begge legemidlene er like effektive, mens den alternative hypotesen er at legemiddel B er bedre.

$$
\begin{aligned}
H_{0}: \quad p=0{,}75\\
H_{A}: \quad p>0{,}75
\end{aligned}
$$

Jeg finner sannsynligheten for at legemiddel B skal ha fungert på 9 av 10 pasienter gitt at $H_{0}$ er sann ved hjelp av GeoGebra.

![Utklipp til oppgave 2-2b](/img/user/_resources/s2-v24-2-2b.png){width=50%}

**$p$-verdien er 0,244, dette er større enn signifikansnivået 0,05. Vi kan ikke forkaste $H_{0}$, og vi kan dermed ikke si at legemiddel B fungerer bedre enn legemiddel A.**

### c

>[!tip] Oppgaven kan også løses med binomisk fordeling
>
> Denne oppgaven lar seg fint løse i GeoGebra ved å prøve seg fram med binomisk fordeling. Av gammel vane har jeg valgt å bruke normalfordeling som en tilnærming til den binomiske. Dette gir meg også mulighet til å skrive inn signifikansnivået 0,05 i svarfeltet i sannsynlighetskalkulatoren i GeoGebra.
>
>Siden $\text{Var}(X)$ er høy så er normalfordelingen en veldig god tilnærming, og vi får samme svar uansett hvilken fordeling vi velger.

Jeg lar $Y$ være antallet pasienter som legemiddel B fungerer for av de 200 pasientene. $Y$ er tilnærmet normalfordelt siden $\left( \text{Var}(Y)=200 \cdot 0{,}75 \cdot 0{,}25 \right) \gg 5$.

![Utklipp til oppgave 2-2c](/img/user/_resources/s2-v24-2-2c.png){width=50%}

Jeg legger inn normalfordelingen med $\mu=200\cdot 0{,}75$ og $\sigma=\sqrt{ 200 \cdot 0{,}75 \cdot 0{,}25 }$. Deretter la jeg inn signifikansnivået 0,05 i svarfeltet, det gir oss at $Y$ må være minst 160,07. Vi må runde opp til 161 for å være sikre på at $p$-verdien blir lavere enn signifikansnivået.

**For å konkludere med at legemiddel B virker bedre enn A må det virke på minst 161 av de 200 pasientene.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/olivias-annuitetslan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Olivias annuitetslån


Olivia tar opp et annuitetslån på 2 500 000 kroner for å kjøpe bolig. Hun velger årlige terminer og en nedbetalingstid på 25 år. Det første terminbeløpet skal betales om ett år. Renten er på 5,5 % per år.

>[!oppgave]
>a) Hvor store blir de årlige terminbeløpene?

Etter 5 år vil Olivia utvide lånet for å pusse opp badet. Hun håper å få låne 500 000 kroner ekstra til samme rente, men hun vil ikke forlenge nedbetalingstiden på lånet.

>[!oppgave]
>b) Hvor store blir de nye terminbeløpene?

Olivia vet at dersom de nye terminbeløpene blir for store, må hun forlenge nedbetalingstiden.

>[!oppgave]
>c) Hvor lang blir nedbetalingstiden dersom hun betaler 200 000 kroner hver termin etter at hun har utvidet lånet?

## Fasit

a) 186 373 kr
b) 228 213 kr
c) 31 år fra starten, eller 26 år etter utvidelsen av lånet

## Løsningsforslag

Jeg velger å løse disse oppgavene i CAS, men jeg har tatt med et eksempel på løsning i regneark på oppgave 3c), se nedenfor.

![Utklipp til oppgave 2-3](/img/user/_resources/s2-v24-2-3-cas.png){width=70%}

### a
Summen av nåverdiene til terminbeløpene skal bli lik lånebeløpet. Jeg setter opp dette som en likning i CAS med `Sum((x/1.055^i), i, 1, 25) = 25000000` og løser, se linje 1 i utklippet.

**Terminbeløpet er 186 373 kr.**

### b
Jeg setter opp det det ekstra lånet som et nytt lån til samme rente med 20 års nedbetalingstid. Jeg regner ut terminbeløpet til dette lånet på samme måte som i a), og får terminbeløpet 41 839,67 kr. Se linje 2 i utklippet. 

Olivia må betale for begge lånene fra år 5 og utover, se linje 3.

**Det nye terminbeløpet blir 228 213 kr fra år 5 og utover.**

### c
Etter 5 år så har Olivia allerede betalt ned lånet med kr 272 767, se linje 4.

I linje 5 så setter jeg opp en likning. På venstre side har vi summen av nåverdiene til terminbeløpene, men med ukjent antall terminer. På høyre side har vi lånebeløpet etter 5 år, som blir det originale lånebeløpet og ekstralånet, minus 272 767 kr. Fra CAS ser jeg at det tar 25,89 år etter de 5 første årene før lånet er nedbetalt. Jeg runder opp til 26 siden det er først i dette året at lånet er tilbakebetalt.

**Den nye tilbakebetalingstiden blir 31 år.**

>[!tip] Løsning med regneark
>
>Det er mulig å gjøre alle deloppgavene i denne oppgaven i regneark (i hvert fall hvis du bruker målsøking).
>
>Nedenfor har jeg løst oppgave c) i regneark ved å sette opp lånet og beregne renter for hvert år. I år 5 så legger jeg til 500 000 kr ekstra på lånet (celle `C43`) og endrer terminbeløpet til 200 000 kr (celle `E43`). 
>
>Deretter fyller jeg bare formlene nedover og utvider tabellen fram til jeg ser at lånet er tilbakebetalt. 
>
>Som vi ser er lånet fullstendig tilbakebetalt i år 31 hvor avdragene er større enn restlånet.

![Utklipp av regneark til oppgave 2-c](/img/user/_resources/s2-v4-2-3-excel.png)


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kubikktall/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kubikktall


<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="772.01"
   height="197.095"
   viewBox="0 0 772.01 197.095"
   version="1.1"
   id="svg202"
   sodipodi:docname="kubikk.svg"
   inkscape:version="1.4 (e7c3feb1, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview202"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="0.13191608"
     inkscape:cx="386.60943"
     inkscape:cy="98.547501"
     inkscape:window-width="1512"
     inkscape:window-height="913"
     inkscape:window-x="3"
     inkscape:window-y="38"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg202" />
  <defs
     id="defs32">
    <linearGradient
       id="swatch371"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop371" />
    </linearGradient>
    <linearGradient
       id="swatch370"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop370" />
    </linearGradient>
    <linearGradient
       id="swatch369"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop369" />
    </linearGradient>
    <linearGradient
       id="swatch368"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop368" />
    </linearGradient>
    <linearGradient
       id="swatch367"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop367" />
    </linearGradient>
    <linearGradient
       id="swatch366"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop366" />
    </linearGradient>
    <linearGradient
       id="swatch365"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop365" />
    </linearGradient>
    <linearGradient
       id="swatch364"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop364" />
    </linearGradient>
    <linearGradient
       id="swatch363"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop363" />
    </linearGradient>
    <linearGradient
       id="swatch362"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop362" />
    </linearGradient>
    <linearGradient
       id="swatch361"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop361" />
    </linearGradient>
    <linearGradient
       id="swatch360"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop360" />
    </linearGradient>
    <linearGradient
       id="swatch359"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop359" />
    </linearGradient>
    <linearGradient
       id="swatch358"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop358" />
    </linearGradient>
    <linearGradient
       id="swatch357"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop357" />
    </linearGradient>
    <linearGradient
       id="swatch356"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop356" />
    </linearGradient>
    <linearGradient
       id="swatch355"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop355" />
    </linearGradient>
    <linearGradient
       id="swatch354"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop354" />
    </linearGradient>
    <linearGradient
       id="swatch353"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop353" />
    </linearGradient>
    <linearGradient
       id="swatch352"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop352" />
    </linearGradient>
    <linearGradient
       id="swatch351"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop351" />
    </linearGradient>
    <linearGradient
       id="swatch350"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop350" />
    </linearGradient>
    <linearGradient
       id="swatch349"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop349" />
    </linearGradient>
    <linearGradient
       id="swatch348"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop348" />
    </linearGradient>
    <linearGradient
       id="swatch347"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop347" />
    </linearGradient>
    <linearGradient
       id="swatch346"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop346" />
    </linearGradient>
    <linearGradient
       id="swatch345"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop345" />
    </linearGradient>
    <linearGradient
       id="swatch344"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop344" />
    </linearGradient>
    <linearGradient
       id="swatch343"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop343" />
    </linearGradient>
    <linearGradient
       id="swatch342"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop342" />
    </linearGradient>
    <linearGradient
       id="swatch341"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop341" />
    </linearGradient>
    <linearGradient
       id="swatch340"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop340" />
    </linearGradient>
    <linearGradient
       id="swatch339"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop339" />
    </linearGradient>
    <linearGradient
       id="swatch338"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop338" />
    </linearGradient>
    <linearGradient
       id="swatch337"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop337" />
    </linearGradient>
    <linearGradient
       id="swatch336"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop336" />
    </linearGradient>
    <linearGradient
       id="swatch335"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop335" />
    </linearGradient>
    <linearGradient
       id="swatch334"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop334" />
    </linearGradient>
    <linearGradient
       id="swatch333"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop333" />
    </linearGradient>
    <linearGradient
       id="swatch332"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop332" />
    </linearGradient>
    <linearGradient
       id="swatch331"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop331" />
    </linearGradient>
    <linearGradient
       id="swatch330"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop330" />
    </linearGradient>
    <linearGradient
       id="swatch329"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop329" />
    </linearGradient>
    <linearGradient
       id="swatch328"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop328" />
    </linearGradient>
    <linearGradient
       id="swatch327"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop327" />
    </linearGradient>
    <linearGradient
       id="swatch326"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop326" />
    </linearGradient>
    <linearGradient
       id="swatch325"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop325" />
    </linearGradient>
    <linearGradient
       id="swatch324"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop324" />
    </linearGradient>
    <linearGradient
       id="swatch323"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop323" />
    </linearGradient>
    <linearGradient
       id="swatch322"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop322" />
    </linearGradient>
    <linearGradient
       id="swatch321"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop321" />
    </linearGradient>
    <linearGradient
       id="swatch320"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop320" />
    </linearGradient>
    <linearGradient
       id="swatch319"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop319" />
    </linearGradient>
    <linearGradient
       id="swatch318"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop318" />
    </linearGradient>
    <linearGradient
       id="swatch317"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop317" />
    </linearGradient>
    <linearGradient
       id="swatch316"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop316" />
    </linearGradient>
    <linearGradient
       id="swatch315"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop315" />
    </linearGradient>
    <linearGradient
       id="swatch314"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop314" />
    </linearGradient>
    <linearGradient
       id="swatch313"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop313" />
    </linearGradient>
    <linearGradient
       id="swatch312"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop312" />
    </linearGradient>
    <linearGradient
       id="swatch311"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop311" />
    </linearGradient>
    <linearGradient
       id="swatch310"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop310" />
    </linearGradient>
    <linearGradient
       id="swatch309"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop309" />
    </linearGradient>
    <linearGradient
       id="swatch308"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop308" />
    </linearGradient>
    <linearGradient
       id="swatch307"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop307" />
    </linearGradient>
    <linearGradient
       id="swatch306"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop306" />
    </linearGradient>
    <linearGradient
       id="swatch305"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop305" />
    </linearGradient>
    <linearGradient
       id="swatch304"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop304" />
    </linearGradient>
    <linearGradient
       id="swatch303"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop303" />
    </linearGradient>
    <linearGradient
       id="swatch302"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop302" />
    </linearGradient>
    <linearGradient
       id="swatch301"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop301" />
    </linearGradient>
    <linearGradient
       id="swatch300"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop300" />
    </linearGradient>
    <linearGradient
       id="swatch299"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop299" />
    </linearGradient>
    <linearGradient
       id="swatch298"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop298" />
    </linearGradient>
    <linearGradient
       id="swatch297"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop297" />
    </linearGradient>
    <linearGradient
       id="swatch296"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop296" />
    </linearGradient>
    <linearGradient
       id="swatch295"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop295" />
    </linearGradient>
    <linearGradient
       id="swatch294"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop294" />
    </linearGradient>
    <linearGradient
       id="swatch293"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop293" />
    </linearGradient>
    <linearGradient
       id="swatch292"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop292" />
    </linearGradient>
    <linearGradient
       id="swatch291"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop291" />
    </linearGradient>
    <linearGradient
       id="swatch290"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop290" />
    </linearGradient>
    <linearGradient
       id="swatch289"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop289" />
    </linearGradient>
    <linearGradient
       id="swatch288"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop288" />
    </linearGradient>
    <linearGradient
       id="swatch287"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop287" />
    </linearGradient>
    <linearGradient
       id="swatch286"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop286" />
    </linearGradient>
    <linearGradient
       id="swatch285"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop285" />
    </linearGradient>
    <linearGradient
       id="swatch284"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop284" />
    </linearGradient>
    <linearGradient
       id="swatch283"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop283" />
    </linearGradient>
    <linearGradient
       id="swatch282"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop282" />
    </linearGradient>
    <linearGradient
       id="swatch281"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop281" />
    </linearGradient>
    <linearGradient
       id="swatch280"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop280" />
    </linearGradient>
    <linearGradient
       id="swatch279"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop279" />
    </linearGradient>
    <linearGradient
       id="swatch278"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop278" />
    </linearGradient>
    <linearGradient
       id="swatch277"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop277" />
    </linearGradient>
    <linearGradient
       id="swatch276"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop276" />
    </linearGradient>
    <linearGradient
       id="swatch275"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop275" />
    </linearGradient>
    <linearGradient
       id="swatch274"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop274" />
    </linearGradient>
    <linearGradient
       id="swatch273"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop273" />
    </linearGradient>
    <linearGradient
       id="swatch272"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop272" />
    </linearGradient>
    <linearGradient
       id="swatch271"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop271" />
    </linearGradient>
    <linearGradient
       id="swatch270"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop270" />
    </linearGradient>
    <linearGradient
       id="swatch269"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop269" />
    </linearGradient>
    <linearGradient
       id="swatch268"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop268" />
    </linearGradient>
    <linearGradient
       id="swatch267"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop267" />
    </linearGradient>
    <linearGradient
       id="swatch266"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop266" />
    </linearGradient>
    <linearGradient
       id="swatch265"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop265" />
    </linearGradient>
    <linearGradient
       id="swatch264"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop264" />
    </linearGradient>
    <linearGradient
       id="swatch263"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop263" />
    </linearGradient>
    <linearGradient
       id="swatch262"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop262" />
    </linearGradient>
    <linearGradient
       id="swatch261"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop261" />
    </linearGradient>
    <linearGradient
       id="swatch260"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop260" />
    </linearGradient>
    <linearGradient
       id="swatch259"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop259" />
    </linearGradient>
    <linearGradient
       id="swatch258"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop258" />
    </linearGradient>
    <linearGradient
       id="swatch257"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop257" />
    </linearGradient>
    <linearGradient
       id="swatch256"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop256" />
    </linearGradient>
    <linearGradient
       id="swatch255"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop255" />
    </linearGradient>
    <linearGradient
       id="swatch254"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop254" />
    </linearGradient>
    <linearGradient
       id="swatch253"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop253" />
    </linearGradient>
    <linearGradient
       id="swatch252"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop252" />
    </linearGradient>
    <linearGradient
       id="swatch251"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop251" />
    </linearGradient>
    <linearGradient
       id="swatch250"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop250" />
    </linearGradient>
    <linearGradient
       id="swatch249"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop249" />
    </linearGradient>
    <linearGradient
       id="swatch248"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop248" />
    </linearGradient>
    <linearGradient
       id="swatch247"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop247" />
    </linearGradient>
    <linearGradient
       id="swatch246"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop246" />
    </linearGradient>
    <linearGradient
       id="swatch245"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop245" />
    </linearGradient>
    <linearGradient
       id="swatch244"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop244" />
    </linearGradient>
    <linearGradient
       id="swatch243"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop243" />
    </linearGradient>
    <linearGradient
       id="swatch242"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop242" />
    </linearGradient>
    <linearGradient
       id="swatch241"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop241" />
    </linearGradient>
    <linearGradient
       id="swatch240"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop240" />
    </linearGradient>
    <linearGradient
       id="swatch239"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop239" />
    </linearGradient>
    <linearGradient
       id="swatch238"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop238" />
    </linearGradient>
    <linearGradient
       id="swatch237"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop237" />
    </linearGradient>
    <linearGradient
       id="swatch236"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop236" />
    </linearGradient>
    <linearGradient
       id="swatch235"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop235" />
    </linearGradient>
    <linearGradient
       id="swatch234"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop234" />
    </linearGradient>
    <linearGradient
       id="swatch233"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop233" />
    </linearGradient>
    <linearGradient
       id="swatch232"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop232" />
    </linearGradient>
    <linearGradient
       id="swatch231"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop231" />
    </linearGradient>
    <linearGradient
       id="swatch230"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop230" />
    </linearGradient>
    <linearGradient
       id="swatch229"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop229" />
    </linearGradient>
    <linearGradient
       id="swatch228"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop228" />
    </linearGradient>
    <linearGradient
       id="swatch227"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop227" />
    </linearGradient>
    <linearGradient
       id="swatch226"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop226" />
    </linearGradient>
    <linearGradient
       id="swatch225"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop225" />
    </linearGradient>
    <linearGradient
       id="swatch224"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop224" />
    </linearGradient>
    <linearGradient
       id="swatch223"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop223" />
    </linearGradient>
    <linearGradient
       id="swatch222"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop222" />
    </linearGradient>
    <linearGradient
       id="swatch221"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop221" />
    </linearGradient>
    <linearGradient
       id="swatch220"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop220" />
    </linearGradient>
    <linearGradient
       id="swatch219"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop219" />
    </linearGradient>
    <linearGradient
       id="swatch218"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop218" />
    </linearGradient>
    <linearGradient
       id="swatch217"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop217" />
    </linearGradient>
    <linearGradient
       id="swatch216"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop216" />
    </linearGradient>
    <linearGradient
       id="swatch215"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop215" />
    </linearGradient>
    <linearGradient
       id="swatch214"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop214" />
    </linearGradient>
    <linearGradient
       id="swatch213"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop213" />
    </linearGradient>
    <linearGradient
       id="swatch212"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop212" />
    </linearGradient>
    <linearGradient
       id="swatch211"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop211" />
    </linearGradient>
    <linearGradient
       id="swatch210"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop210" />
    </linearGradient>
    <linearGradient
       id="swatch209"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop209" />
    </linearGradient>
    <linearGradient
       id="swatch208"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop208" />
    </linearGradient>
    <linearGradient
       id="swatch207"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop207" />
    </linearGradient>
    <linearGradient
       id="swatch206"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop206" />
    </linearGradient>
    <linearGradient
       id="swatch205"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop205" />
    </linearGradient>
    <linearGradient
       id="swatch204"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop204" />
    </linearGradient>
    <linearGradient
       id="swatch203"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop203" />
    </linearGradient>
    <linearGradient
       id="swatch202"
       inkscape:swatch="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop202" />
    </linearGradient>
    <clipPath
       id="clip-0">
      <path
         clip-rule="nonzero"
         d="M 0 167 L 30 167 L 30 197.09375 L 0 197.09375 Z M 0 167 "
         id="path1" />
    </clipPath>
    <clipPath
       id="clip-1">
      <path
         clip-rule="nonzero"
         d="M 17 174 L 51 174 L 51 197.09375 L 17 197.09375 Z M 17 174 "
         id="path2" />
    </clipPath>
    <clipPath
       id="clip-2">
      <path
         clip-rule="nonzero"
         d="M 77 167 L 107 167 L 107 197.09375 L 77 197.09375 Z M 77 167 "
         id="path3" />
    </clipPath>
    <clipPath
       id="clip-3">
      <path
         clip-rule="nonzero"
         d="M 105 167 L 135 167 L 135 197.09375 L 105 197.09375 Z M 105 167 "
         id="path4" />
    </clipPath>
    <clipPath
       id="clip-4">
      <path
         clip-rule="nonzero"
         d="M 123 174 L 157 174 L 157 197.09375 L 123 197.09375 Z M 123 174 "
         id="path5" />
    </clipPath>
    <clipPath
       id="clip-5">
      <path
         clip-rule="nonzero"
         d="M 134 163 L 168 163 L 168 197.09375 L 134 197.09375 Z M 134 163 "
         id="path6" />
    </clipPath>
    <clipPath
       id="clip-6">
      <path
         clip-rule="nonzero"
         d="M 200 167 L 230 167 L 230 197.09375 L 200 197.09375 Z M 200 167 "
         id="path7" />
    </clipPath>
    <clipPath
       id="clip-7">
      <path
         clip-rule="nonzero"
         d="M 228 167 L 258 167 L 258 197.09375 L 228 197.09375 Z M 228 167 "
         id="path8" />
    </clipPath>
    <clipPath
       id="clip-8">
      <path
         clip-rule="nonzero"
         d="M 256 167 L 287 167 L 287 197.09375 L 256 197.09375 Z M 256 167 "
         id="path9" />
    </clipPath>
    <clipPath
       id="clip-9">
      <path
         clip-rule="nonzero"
         d="M 274 174 L 308 174 L 308 197.09375 L 274 197.09375 Z M 274 174 "
         id="path10" />
    </clipPath>
    <clipPath
       id="clip-10">
      <path
         clip-rule="nonzero"
         d="M 285 163 L 319 163 L 319 197.09375 L 285 197.09375 Z M 285 163 "
         id="path11" />
    </clipPath>
    <clipPath
       id="clip-11">
      <path
         clip-rule="nonzero"
         d="M 366 167 L 396 167 L 396 197.09375 L 366 197.09375 Z M 366 167 "
         id="path12" />
    </clipPath>
    <clipPath
       id="clip-12">
      <path
         clip-rule="nonzero"
         d="M 394 167 L 424 167 L 424 197.09375 L 394 197.09375 Z M 394 167 "
         id="path13" />
    </clipPath>
    <clipPath
       id="clip-13">
      <path
         clip-rule="nonzero"
         d="M 423 167 L 453 167 L 453 197.09375 L 423 197.09375 Z M 423 167 "
         id="path14" />
    </clipPath>
    <clipPath
       id="clip-14">
      <path
         clip-rule="nonzero"
         d="M 451 167 L 481 167 L 481 197.09375 L 451 197.09375 Z M 451 167 "
         id="path15" />
    </clipPath>
    <clipPath
       id="clip-15">
      <path
         clip-rule="nonzero"
         d="M 468 174 L 503 174 L 503 197.09375 L 468 197.09375 Z M 468 174 "
         id="path16" />
    </clipPath>
    <clipPath
       id="clip-16">
      <path
         clip-rule="nonzero"
         d="M 479 163 L 514 163 L 514 197.09375 L 479 197.09375 Z M 479 163 "
         id="path17" />
    </clipPath>
    <clipPath
       id="clip-17">
      <path
         clip-rule="nonzero"
         d="M 574 167 L 605 167 L 605 197.09375 L 574 197.09375 Z M 574 167 "
         id="path18" />
    </clipPath>
    <clipPath
       id="clip-18">
      <path
         clip-rule="nonzero"
         d="M 603 167 L 633 167 L 633 197.09375 L 603 197.09375 Z M 603 167 "
         id="path19" />
    </clipPath>
    <clipPath
       id="clip-19">
      <path
         clip-rule="nonzero"
         d="M 631 167 L 661 167 L 661 197.09375 L 631 197.09375 Z M 631 167 "
         id="path20" />
    </clipPath>
    <clipPath
       id="clip-20">
      <path
         clip-rule="nonzero"
         d="M 659 167 L 690 167 L 690 197.09375 L 659 197.09375 Z M 659 167 "
         id="path21" />
    </clipPath>
    <clipPath
       id="clip-21">
      <path
         clip-rule="nonzero"
         d="M 688 167 L 718 167 L 718 197.09375 L 688 197.09375 Z M 688 167 "
         id="path22" />
    </clipPath>
    <clipPath
       id="clip-22">
      <path
         clip-rule="nonzero"
         d="M 705 174 L 740 174 L 740 197.09375 L 705 197.09375 Z M 705 174 "
         id="path23" />
    </clipPath>
    <clipPath
       id="clip-23">
      <path
         clip-rule="nonzero"
         d="M 716 163 L 751 163 L 751 197.09375 L 716 197.09375 Z M 716 163 "
         id="path24" />
    </clipPath>
    <clipPath
       id="clip-24">
      <path
         clip-rule="nonzero"
         d="M 749 130 L 772.011719 130 L 772.011719 165 L 749 165 Z M 749 130 "
         id="path25" />
    </clipPath>
    <clipPath
       id="clip-25">
      <path
         clip-rule="nonzero"
         d="M 749 102 L 772.011719 102 L 772.011719 136 L 749 136 Z M 749 102 "
         id="path26" />
    </clipPath>
    <clipPath
       id="clip-26">
      <path
         clip-rule="nonzero"
         d="M 749 74 L 772.011719 74 L 772.011719 108 L 749 108 Z M 749 74 "
         id="path27" />
    </clipPath>
    <clipPath
       id="clip-27">
      <path
         clip-rule="nonzero"
         d="M 749 45 L 772.011719 45 L 772.011719 80 L 749 80 Z M 749 45 "
         id="path28" />
    </clipPath>
    <clipPath
       id="clip-28">
      <path
         clip-rule="nonzero"
         d="M 749 17 L 772.011719 17 L 772.011719 51 L 749 51 Z M 749 17 "
         id="path29" />
    </clipPath>
    <clipPath
       id="clip-29">
      <path
         clip-rule="nonzero"
         d="M 749 0 L 772.011719 0 L 772.011719 23 L 749 23 Z M 749 0 "
         id="path30" />
    </clipPath>
    <clipPath
       id="clip-30">
      <path
         clip-rule="nonzero"
         d="M 629 0 L 772.011719 0 L 772.011719 1 L 629 1 Z M 629 0 "
         id="path31" />
    </clipPath>
    <clipPath
       id="clip-31">
      <path
         clip-rule="nonzero"
         d="M 771 0 L 772.011719 0 L 772.011719 143 L 771 143 Z M 771 0 "
         id="path32" />
    </clipPath>
  </defs>
  <g
     clip-path="url(#clip-0)"
     id="g33"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 28.346437 0.0006875 L 56.694094 0.0006875 L 56.694094 28.348344 L 28.346437 28.348344 Z M 28.346437 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path33"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <g
     clip-path="url(#clip-1)"
     id="g34"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 56.694094 0.0006875 L 67.608156 10.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path34"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 56.694094 28.348344 L 67.608156 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path35"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 28.346437 28.348344 L 39.2605 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path36"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 39.2605 39.2585 L 67.608156 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path37"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 67.608156 10.91475 L 67.608156 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path38"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-2)"
     id="g39"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 105.768312 0.0006875 L 134.115969 0.0006875 L 134.115969 28.348344 L 105.768312 28.348344 Z M 105.768312 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path39"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 105.768312 28.348344 L 134.115969 28.348344 L 134.115969 56.692094 L 105.768312 56.692094 Z M 105.768312 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path40"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-3)"
     id="g41"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 134.115969 0.0006875 L 162.463625 0.0006875 L 162.463625 28.348344 L 134.115969 28.348344 Z M 134.115969 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path41"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 134.115969 28.348344 L 162.463625 28.348344 L 162.463625 56.692094 L 134.115969 56.692094 Z M 134.115969 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path42"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-4)"
     id="g43"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 162.463625 0.0006875 L 173.377688 10.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path43"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <g
     clip-path="url(#clip-5)"
     id="g44"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 173.377688 10.91475 L 184.287844 21.824906 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path44"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 162.463625 28.348344 L 173.377688 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path45"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 173.377688 39.2585 L 184.287844 50.172562 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path46"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 162.463625 56.692094 L 173.377688 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path47"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 173.377688 67.606156 L 184.287844 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path48"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 105.768312 56.692094 L 127.596437 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path49"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 134.115969 56.692094 L 155.944094 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path50"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 116.682375 67.606156 L 173.377688 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path51"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 127.596437 78.520219 L 184.287844 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path52"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 173.377688 10.91475 L 173.377688 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path53"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 184.287844 21.824906 L 184.287844 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path54"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-6)"
     id="g55"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 228.553469 0.0006875 L 256.901125 0.0006875 L 256.901125 28.348344 L 228.553469 28.348344 Z M 228.553469 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path55"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 228.553469 28.348344 L 256.901125 28.348344 L 256.901125 56.692094 L 228.553469 56.692094 Z M 228.553469 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path56"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 228.553469 56.692094 L 256.901125 56.692094 L 256.901125 85.03975 L 228.553469 85.03975 Z M 228.553469 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path57"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-7)"
     id="g58"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 256.901125 0.0006875 L 285.248781 0.0006875 L 285.248781 28.348344 L 256.901125 28.348344 Z M 256.901125 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path58"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 256.901125 28.348344 L 285.248781 28.348344 L 285.248781 56.692094 L 256.901125 56.692094 Z M 256.901125 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path59"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 256.901125 56.692094 L 285.248781 56.692094 L 285.248781 85.03975 L 256.901125 85.03975 Z M 256.901125 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path60"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-8)"
     id="g61"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 285.248781 0.0006875 L 313.596437 0.0006875 L 313.596437 28.348344 L 285.248781 28.348344 Z M 285.248781 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path61"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 285.248781 28.348344 L 313.596437 28.348344 L 313.596437 56.692094 L 285.248781 56.692094 Z M 285.248781 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path62"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 285.248781 56.692094 L 313.596437 56.692094 L 313.596437 85.03975 L 285.248781 85.03975 Z M 285.248781 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path63"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-9)"
     id="g64"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 313.596437 0.0006875 L 324.506594 10.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path64"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <g
     clip-path="url(#clip-10)"
     id="g65"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 324.506594 10.91475 L 335.420656 21.824906 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path65"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 335.420656 21.824906 L 346.334719 32.738969 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path66"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 313.596437 28.348344 L 324.506594 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path67"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 324.506594 39.2585 L 335.420656 50.172562 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path68"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 335.420656 50.172562 L 346.334719 61.086625 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path69"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 313.596437 56.692094 L 324.506594 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path70"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 324.506594 67.606156 L 335.420656 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path71"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 335.420656 78.520219 L 346.334719 89.434281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path72"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 313.596437 85.03975 L 324.506594 95.953812 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path73"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 324.506594 95.953812 L 335.420656 106.867875 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path74"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 335.420656 106.867875 L 346.334719 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path75"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 228.553469 85.03975 L 261.295656 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path76"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 256.901125 85.03975 L 289.639406 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path77"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 285.248781 85.03975 L 317.987062 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path78"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 239.467531 95.953812 L 324.506594 95.953812 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path79"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 250.381594 106.867875 L 335.420656 106.867875 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path80"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 261.295656 117.781937 L 346.334719 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path81"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 324.506594 10.91475 L 324.506594 95.953812 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path82"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 335.420656 21.824906 L 335.420656 106.867875 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path83"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 346.334719 32.738969 L 346.334719 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path84"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-11)"
     id="g85"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 394.819094 0.0006875 L 423.16675 0.0006875 L 423.16675 28.348344 L 394.819094 28.348344 Z M 394.819094 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path85"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 394.819094 28.348344 L 423.16675 28.348344 L 423.16675 56.692094 L 394.819094 56.692094 Z M 394.819094 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path86"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 394.819094 56.692094 L 423.16675 56.692094 L 423.16675 85.03975 L 394.819094 85.03975 Z M 394.819094 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path87"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 394.819094 85.03975 L 423.16675 85.03975 L 423.16675 113.387406 L 394.819094 113.387406 Z M 394.819094 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path88"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-12)"
     id="g89"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 423.16675 0.0006875 L 451.514406 0.0006875 L 451.514406 28.348344 L 423.16675 28.348344 Z M 423.16675 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path89"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 423.16675 28.348344 L 451.514406 28.348344 L 451.514406 56.692094 L 423.16675 56.692094 Z M 423.16675 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path90"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 423.16675 56.692094 L 451.514406 56.692094 L 451.514406 85.03975 L 423.16675 85.03975 Z M 423.16675 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path91"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 423.16675 85.03975 L 451.514406 85.03975 L 451.514406 113.387406 L 423.16675 113.387406 Z M 423.16675 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path92"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-13)"
     id="g93"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 451.514406 0.0006875 L 479.858156 0.0006875 L 479.858156 28.348344 L 451.514406 28.348344 Z M 451.514406 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path93"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 451.514406 28.348344 L 479.858156 28.348344 L 479.858156 56.692094 L 451.514406 56.692094 Z M 451.514406 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path94"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 451.514406 56.692094 L 479.858156 56.692094 L 479.858156 85.03975 L 451.514406 85.03975 Z M 451.514406 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path95"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 451.514406 85.03975 L 479.858156 85.03975 L 479.858156 113.387406 L 451.514406 113.387406 Z M 451.514406 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path96"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-14)"
     id="g97"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 479.858156 0.0006875 L 508.205812 0.0006875 L 508.205812 28.348344 L 479.858156 28.348344 Z M 479.858156 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path97"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 479.858156 28.348344 L 508.205812 28.348344 L 508.205812 56.692094 L 479.858156 56.692094 Z M 479.858156 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path98"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 479.858156 56.692094 L 508.205812 56.692094 L 508.205812 85.03975 L 479.858156 85.03975 Z M 479.858156 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path99"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 479.858156 85.03975 L 508.205812 85.03975 L 508.205812 113.387406 L 479.858156 113.387406 Z M 479.858156 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path100"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-15)"
     id="g101"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 508.205812 0.0006875 L 519.119875 10.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path101"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <g
     clip-path="url(#clip-16)"
     id="g102"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 519.119875 10.91475 L 530.033937 21.824906 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path102"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 21.824906 L 540.948 32.738969 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path103"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 32.738969 L 551.858156 43.653031 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path104"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 508.205812 28.348344 L 519.119875 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path105"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 519.119875 39.2585 L 530.033937 50.172562 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path106"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 50.172562 L 540.948 61.086625 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path107"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 61.086625 L 551.858156 72.000687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path108"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 508.205812 56.692094 L 519.119875 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path109"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 519.119875 67.606156 L 530.033937 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path110"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 78.520219 L 540.948 89.434281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path111"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 89.434281 L 551.858156 100.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path112"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 508.205812 85.03975 L 519.119875 95.953812 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path113"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 519.119875 95.953812 L 530.033937 106.867875 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path114"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 106.867875 L 540.948 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path115"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 117.781937 L 551.858156 128.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path116"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 508.205812 113.387406 L 519.119875 124.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path117"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 519.119875 124.301469 L 530.033937 135.215531 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path118"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 135.215531 L 540.948 146.125687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path119"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 146.125687 L 551.858156 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path120"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 394.819094 113.387406 L 438.471437 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path121"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 423.16675 113.387406 L 466.819094 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path122"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 451.514406 113.387406 L 495.16675 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path123"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 479.858156 113.387406 L 523.514406 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path124"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 405.733156 124.301469 L 519.119875 124.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path125"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 416.647219 135.215531 L 530.033937 135.215531 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path126"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 427.561281 146.125687 L 540.948 146.125687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path127"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 438.471437 157.03975 L 551.858156 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path128"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 519.119875 10.91475 L 519.119875 124.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path129"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 530.033937 21.824906 L 530.033937 135.215531 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path130"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 540.948 32.738969 L 540.948 146.125687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path131"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 551.858156 43.653031 L 551.858156 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path132"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-17)"
     id="g133"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 603.268312 0.0006875 L 631.615969 0.0006875 L 631.615969 28.348344 L 603.268312 28.348344 Z M 603.268312 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path133"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 603.268312 28.348344 L 631.615969 28.348344 L 631.615969 56.692094 L 603.268312 56.692094 Z M 603.268312 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path134"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 603.268312 56.692094 L 631.615969 56.692094 L 631.615969 85.03975 L 603.268312 85.03975 Z M 603.268312 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path135"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 603.268312 85.03975 L 631.615969 85.03975 L 631.615969 113.387406 L 603.268312 113.387406 Z M 603.268312 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path136"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 603.268312 113.387406 L 631.615969 113.387406 L 631.615969 141.735062 L 603.268312 141.735062 Z M 603.268312 113.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path137"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-18)"
     id="g138"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 631.615969 0.0006875 L 659.963625 0.0006875 L 659.963625 28.348344 L 631.615969 28.348344 Z M 631.615969 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path138"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 631.615969 28.348344 L 659.963625 28.348344 L 659.963625 56.692094 L 631.615969 56.692094 Z M 631.615969 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path139"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 631.615969 56.692094 L 659.963625 56.692094 L 659.963625 85.03975 L 631.615969 85.03975 Z M 631.615969 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path140"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 631.615969 85.03975 L 659.963625 85.03975 L 659.963625 113.387406 L 631.615969 113.387406 Z M 631.615969 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path141"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 631.615969 113.387406 L 659.963625 113.387406 L 659.963625 141.735062 L 631.615969 141.735062 Z M 631.615969 113.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path142"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-19)"
     id="g143"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 659.963625 0.0006875 L 688.311281 0.0006875 L 688.311281 28.348344 L 659.963625 28.348344 Z M 659.963625 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path143"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 659.963625 28.348344 L 688.311281 28.348344 L 688.311281 56.692094 L 659.963625 56.692094 Z M 659.963625 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path144"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 659.963625 56.692094 L 688.311281 56.692094 L 688.311281 85.03975 L 659.963625 85.03975 Z M 659.963625 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path145"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 659.963625 85.03975 L 688.311281 85.03975 L 688.311281 113.387406 L 659.963625 113.387406 Z M 659.963625 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path146"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 659.963625 113.387406 L 688.311281 113.387406 L 688.311281 141.735062 L 659.963625 141.735062 Z M 659.963625 113.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path147"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-20)"
     id="g148"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 688.311281 0.0006875 L 716.655031 0.0006875 L 716.655031 28.348344 L 688.311281 28.348344 Z M 688.311281 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path148"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 688.311281 28.348344 L 716.655031 28.348344 L 716.655031 56.692094 L 688.311281 56.692094 Z M 688.311281 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path149"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 688.311281 56.692094 L 716.655031 56.692094 L 716.655031 85.03975 L 688.311281 85.03975 Z M 688.311281 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path150"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 688.311281 85.03975 L 716.655031 85.03975 L 716.655031 113.387406 L 688.311281 113.387406 Z M 688.311281 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path151"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 688.311281 113.387406 L 716.655031 113.387406 L 716.655031 141.735062 L 688.311281 141.735062 Z M 688.311281 113.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path152"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-21)"
     id="g153"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 716.655031 0.0006875 L 745.002687 0.0006875 L 745.002687 28.348344 L 716.655031 28.348344 Z M 716.655031 0.0006875 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path153"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 716.655031 28.348344 L 745.002687 28.348344 L 745.002687 56.692094 L 716.655031 56.692094 Z M 716.655031 28.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path154"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 716.655031 56.692094 L 745.002687 56.692094 L 745.002687 85.03975 L 716.655031 85.03975 Z M 716.655031 56.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path155"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 716.655031 85.03975 L 745.002687 85.03975 L 745.002687 113.387406 L 716.655031 113.387406 Z M 716.655031 85.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path156"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 716.655031 113.387406 L 745.002687 113.387406 L 745.002687 141.735062 L 716.655031 141.735062 Z M 716.655031 113.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path157"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-22)"
     id="g158"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 745.002687 0.0006875 L 755.91675 10.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path158"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <g
     clip-path="url(#clip-23)"
     id="g159"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 755.91675 10.91475 L 766.830812 21.824906 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path159"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 21.824906 L 777.744875 32.738969 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path160"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 32.738969 L 788.655031 43.653031 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path161"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-24)"
     id="g162"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 43.653031 L 799.569094 54.567094 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path162"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 745.002687 28.348344 L 755.91675 39.2585 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path163"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 39.2585 L 766.830812 50.172562 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path164"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 50.172562 L 777.744875 61.086625 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path165"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 61.086625 L 788.655031 72.000687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path166"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-25)"
     id="g167"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 72.000687 L 799.569094 82.91475 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path167"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 745.002687 56.692094 L 755.91675 67.606156 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path168"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 67.606156 L 766.830812 78.520219 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path169"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 78.520219 L 777.744875 89.434281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path170"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 89.434281 L 788.655031 100.348344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path171"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-26)"
     id="g172"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 100.348344 L 799.569094 111.2585 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path172"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 745.002687 85.03975 L 755.91675 95.953812 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path173"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 95.953812 L 766.830812 106.867875 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path174"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 106.867875 L 777.744875 117.781937 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path175"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 117.781937 L 788.655031 128.692094 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path176"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-27)"
     id="g177"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 128.692094 L 799.569094 139.606156 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path177"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 745.002687 113.387406 L 755.91675 124.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path178"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 124.301469 L 766.830812 135.215531 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path179"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 135.215531 L 777.744875 146.125687 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path180"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 146.125687 L 788.655031 157.03975 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path181"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-28)"
     id="g182"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 157.03975 L 799.569094 167.953812 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path182"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 745.002687 141.735062 L 755.91675 152.649125 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path183"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 152.649125 L 766.830812 163.559281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path184"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 163.559281 L 777.744875 174.473344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path185"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 174.473344 L 788.655031 185.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path186"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-29)"
     id="g187"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 788.655031 185.387406 L 799.569094 196.301469 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path187"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 603.268312 141.735062 L 657.834719 196.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path188"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 631.615969 141.735062 L 686.182375 196.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path189"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 659.963625 141.735062 L 714.530031 196.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path190"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 688.311281 141.735062 L 742.877687 196.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path191"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 716.655031 141.735062 L 771.221437 196.301469 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path192"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 614.182375 152.649125 L 755.91675 152.649125 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path193"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 625.096437 163.559281 L 766.830812 163.559281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path194"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 636.0105 174.473344 L 777.744875 174.473344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path195"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 646.920656 185.387406 L 788.655031 185.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path196"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-30)"
     id="g197"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 657.834719 196.301469 L 799.569094 196.301469 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path197"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 755.91675 10.91475 L 755.91675 152.649125 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path198"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 766.830812 21.824906 L 766.830812 163.559281 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path199"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 777.744875 32.738969 L 777.744875 174.473344 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path200"
     style="stroke:#000000;stroke-opacity:1" />
  <path
     fill="none"
     stroke-width="0.79701"
     stroke-linecap="butt"
     stroke-linejoin="miter"
     stroke="rgb(100%, 100%, 100%)"
     stroke-opacity="1"
     stroke-miterlimit="10"
     d="M 788.655031 43.653031 L 788.655031 185.387406 "
     transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
     id="path201"
     style="stroke:#000000;stroke-opacity:1" />
  <g
     clip-path="url(#clip-31)"
     id="g202"
     style="stroke:#000000;stroke-opacity:1">
    <path
       fill="none"
       stroke-width="0.79701"
       stroke-linecap="butt"
       stroke-linejoin="miter"
       stroke="rgb(100%, 100%, 100%)"
       stroke-opacity="1"
       stroke-miterlimit="10"
       d="M 799.569094 54.567094 L 799.569094 196.301469 "
       transform="matrix(1, 0, 0, -1, -27.948, 196.696)"
       id="path202"
       style="stroke:#000000;stroke-opacity:1" />
  </g>
</svg>
{width=60%}

De fem første kubikktallene er $1^{3}, 2^{3}, 3^{3}, 4^{3}$ og $5^{3}$, se figuren over. La $S_{n}$ være summen av de $n$ første kubikktallene.

>[!oppgave]
>a) Beskriv den rekursive sammenhengen mellom $S_{n}$ og $S_{n+1}$. Bestem en eksplisitt formel for $S_{n}$.
>b) Lag et program som regner ut $S_{50}$ ved å bruke den rekursive sammenhengen du fant i oppgave a.

## Fasit

a) $S_{n+1}=S_{n}+(n+1)^{3}$ og $S_{n}=\frac{1}{4}\left( n^{4}+2n^{3}+n^{2} \right)$
b) $S_{50}=1625625$

## Løsningsforslag

### a
Jeg setter opp de første leddene og ser om jeg finner en rekursiv sammenheng som jeg kan bruke.

$$
\begin{aligned}
S_{1}&=1^{3}\\
S_{2}&=1^{3}+2^{3}=S_{1}+2^{3}\\
S_{3}&=1^{3}+2^{3}+3^{3}=S_{2}+3^{3}
\end{aligned}
$$

Jeg ser at hvert ledd er det forrige leddet, pluss det neste kubikktallet. En rekursiv sammenheng mellom summene er altså

$$
\underline{\underline{S_{n+1}=S_{n}+(n+1)^{3}}}
$$

For å bestemme en eksplisitt formel brukte jeg regresjon i GeoGebra.

![](/img/user/_resources/s2-v24-2-4a.png)

En eksplisitt formel for summene er

$$S_{n}=\underline{\underline{\frac{1}{4}\left( n^{4}+ 2n^{3}+n^{2} \right)}}$$

### b
Jeg bruker følgende program

```python
S = 0 # starter summen på 0

for n in range(1, 51):
	# kjører løkka 50 ganger
	S = S + n**3 #legger n^3 til S

print(S)
```

**Programmet gir at $S_{50}=1 \, 625 \, 625$.**

<!--
>[!tip]- TikZ-kode for å lage kuber
>
>```tikz
>\begin{document}
>
>\begin{tikzpicture}
>    % Define the size of each small cube
>    \def\cubesize{1}
>	% Define how many cubes you want to generate
>    \foreach \cube [evaluate=\cube as \smallCube using int(\cube-1)] in {1,...,4}{
>     \begin{scope}[shift={(\cube^1.9,0)}]
>
>	    % Draw the front face
>	    \foreach \x in {0,...,\smallCube}
>	        \foreach \y in {0,...,\smallCube}
>	            \draw[thick] (\x*\cubesize, \y*\cubesize, 0) -- ++(\cubesize,0,0) -- ++(0,\cubesize,0) -- ++(-\cubesize,0,0) -- cycle;
>
>	    % Draw the horizontal connections on the right face
>	    \foreach \y in {0,...,\cube}
>	        \foreach \z in {0,...,\smallCube}
>	            \draw[thick] (\cube*\cubesize, \y*\cubesize, -\z*\cubesize) -- ++(0, 0, -\cubesize);
>	    \foreach \x in {0,...,\smallCube}
>	        \draw[thick] (\x*\cubesize,\cube*\cubesize,0) -- ++(0,0,-\cube);
>
>		% draw all horizontal lines on top
>		\foreach \z in {1,...,\cube}
>			\draw[thick] (0,\cube*\cubesize,-\z*\cubesize) -- ++({\cube*\cubesize}, 0, 0);
>
>		\foreach \z in {1,...,\cube}
>			\draw[thick] (\cube,0,-\z*\cubesize) -- (\cube*\cubesize,\cube*\cubesize,-\z*\cubesize);
>        \end{scope}
>   }
>\end{tikzpicture}
>\end{document}
-->


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sveins-kurv-med-baller/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sveins kurv med baller


Svein har en kurv med røde og blå baller. Det er like mange baller av hver farge i kurven. Svein tar 15 baller tilfeldig fra kurven. Han ser etterpå at han trakk 9 røde og 6 blå baller.

>[!oppgave]
>a) Bestem sannsynligheten for at han får dette resultatet dersom han starter med 30 baller i kurven.
>b) Hva er det mest sannsynlige antallet baller som lå i kurven?

## Fasit

a) 16,1 %
b) 34 eller 36 baller

## Løsningsforslag

### a
Vi har et forsøk uten tilbakelegging med to typer baller, så vi kan bruke en hypergeometrisk sannsynlighetsfordeling. Hvis det er 15 baller av hver type er sannsynligheten for å trekke 9 røde og 6 blå baller gitt ved

$$
P(R=9)=\frac{\binom{15}{9}\binom{15}{6}}{\binom{30}{15}}=0{,}161
$$

**Sannsynligheten for å trekke 9 røde og 6 blå baller er 16,1 %.**

### b

#### Løsningsmetode 1: Programmering
Her prøver jeg meg fram med programmering og setter inn ulike verdier for antallet baller i kurva. Man kan programmere binomialkoeffisientfunksjonen selv, eller bruke en ferdig funksjon fra `math`-biblioteket. 

```python
import math #math.comb er binomialkoeff.funksjonen

rod = 9
bla = 6

for n in range(18, 201, 2): 
	# lager ei løkke som tester alle partall fra 18 til og med 200
	n1 = int(n/2) # halvparten av ballene er røde (må gjøre om til heltall)
	teller = math.comb(n1, rod) * math.comb(n1, bla)
	nevner = math.comb(n, (rod+bla))
	ssh = teller / nevner

	print(f"Ved {n} baller P(R=9) = {ssh:.5f}")
```

**Utskriften forteller meg at det mest sannsynlige antallet baller i kurven er 34 eller 36.**

>[!tip] Bruk 2n istedenfor n/2
>
>I mitt løsningsforslag har jeg gått ut fra at krukka inneholder $n$ baller. Det er nok lurere å si at det er $n$ røde baller i krukka, og at krukka samlet sett inneholder $2n$ baller. Da slipper du å gjøre om $\frac{n}{2}$ til heltall med `int()`.

#### Løsningsmetode 2: Funksjon
Jeg lager en funksjon hvor antall baller i kurva er ukjent.

$$
f(x)= \frac{\binom{\frac{x}{2}}{9}\binom{\frac{x}{2}}{6}}{\binom{x}{15}}
$$

Denne funksjonen er egentlig bare gyldig for partallene fra 18 og oppover, men jeg velger å tegne den uten begrensning i GeoGebra for å kunne finne ekstremalpunkter enkelt.

![](/img/user/_resources/s2-v24-2-5b.png)

Jeg definerer funksjonen i CAS og finner ekstremalpunktet, se linje 1 og 2. Ekstremalpunktet ligger ved $x=34{,}96$, dette er ikke en gyldig verdi for $x$. Jeg tester derfor sannsynligheten ved $x=34$ og $x=36$, begge disse er like store.

**Det lå mest sannsynlig 34 eller 36 baller i kurven.**


</div></div>


---
{"tags":["eksamen"],"fag":["1t"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"1T eksamen V2025","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/1t-eksamen-v2025/","permalink":"/eksamener/1t-eksamen-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["1t"],"eksamen":"v25","del1_tid":2,"del2_tid":3,"title":"1T eksamen V2025","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Asymptoter til rasjonal funksjon](https://matematikkoppgaver.vercel.app/asymptoter-til-rasjonal-funksjon/) | asymptoter, rasjonale funksjoner | × |
| [1-2](#oppgave-1-2) | [Andregradsulikhet](https://matematikkoppgaver.vercel.app/andregradsulikhet/) | andregradslikninger, algebra | × |
| [1-3](#oppgave-1-3) | [Andregradsfunksjon med ett nullpunkt](https://matematikkoppgaver.vercel.app/andregradsfunksjon-med-ett-nullpunkt/) | andregradslikninger, funksjoner | ✔︎ |
| [1-4](#oppgave-1-4) | [Tredjegradslikning og grafvalg](https://matematikkoppgaver.vercel.app/tredjegradslikning-og-grafvalg/) | likninger, polynomdivisjon, funksjoner | × |
| [1-5](#oppgave-1-5) | [Trigonometri med arealsetning og cosinus](https://matematikkoppgaver.vercel.app/trigonometri-med-arealsetning-og-cosinus/) | trigonometri, arealsetningen, cosinussetningen | × |
| [1-6](#oppgave-1-6) | [Identitet i CAS-verktøy](https://matematikkoppgaver.vercel.app/identitet-i-cas-verktoy/) | identiteter, cas, algebra | × |
| [1-7](#oppgave-1-7) | [Minimumsverdi med while-løkke](https://matematikkoppgaver.vercel.app/minimumsverdi-med-while-lokke/) | programmering, funksjoner | × |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Kikhoste og eksponentiell modell](https://matematikkoppgaver.vercel.app/kikhoste-og-eksponentiell-modell/) | eksponentiell vekst, modellering, gjennomsnittlig vekstfart | × |
| [2-2](#oppgave-2-2) | [Sekker hundemat og likningssystem](https://matematikkoppgaver.vercel.app/sekker-hundemat-og-likningssystem/) | likningssystem | × |
| [2-3](#oppgave-2-3) | [Tolvkant innskrevet i sirkel](https://matematikkoppgaver.vercel.app/tolvkant-innskrevet-i-sirkel/) | geometri, trigonometri, areal | × |
| [2-4](#oppgave-2-4) | [Figurtall og programmering](https://matematikkoppgaver.vercel.app/figurtall-og-programmering/) | figurtall, programmering | ✔︎ |
| [2-5](#oppgave-2-5) | [Sylinderboks med minst overflate](https://matematikkoppgaver.vercel.app/sylinderboks-med-minst-overflate/) | optimering, volum, funksjoner | × |
| [2-6](#oppgave-2-6) | [Rasjonale funksjoner Noah og Johanne](https://matematikkoppgaver.vercel.app/rasjonale-funksjoner-noah-og-johanne/) | rasjonale funksjoner, asymptoter, funksjoner | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/asymptoter-til-rasjonal-funksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Asymptoter til rasjonal funksjon

En funksjon $f$ er gitt ved

$$f(x) = \frac{12x-3}{2x+1}$$

>[!oppgave]
>Bestem likningene for eventuelle asymptoter til grafen til $f$.

## Fasit

$x=-\frac{1}{2}$ og $y=6$

## Løsningsforslag

Vi får vertikale asymptoter der hvor nevner er lik 0.
$$
2x+1=0 \iff 2x =-1 \iff x = -\frac{1}{2}
$$
Vi har en vertikal asymptote i $x=-\frac{1}{2}$.

Både teller og nevner består av lineære funksjoner. Siden graden på polynomene er lik så vil vi få en horisontal asymptote. Når $x \to \infty$ så vil $-3$ og $+1$ leddene ha infinitesimalt  liten betydning og vi får:
$$
\lim_{ x \to \infty } f(x)=\frac{12}{2}=6
$$

**Vi har vertikal asymptote i $x=-\frac{1}{2}$ og horisontal asymptote i $y=6$.**

</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/andregradsulikhet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Andregradsulikhet

>[!oppgave]
>Løs ulikheten
>
>$$x^2 - 4x - 12 < 0$$

## Fasit

$\underline{\underline{x \in \langle -2,\ 6 \rangle}}$

## Løsningsforslag

Vi løser først den tilhørende andregradslikningen ved å faktorisere:

$$x^2 - 4x - 12 = 0$$

Vi søker to tall som multipliserer til $-12$ og adderer til $-4$. Tallene $-6$ og $2$ passer:

$$x^2 - 4x - 12 = (x - 6)(x + 2) = 0$$

Dette gir nullpunktene $x = 6$ og $x = -2$.

Siden ledende koeffisient er positiv ($a = 1 > 0$), åpner parabelen oppover. Det betyr at parabelen er **under** $x$-aksen mellom nullpunktene.

Vi setter opp et fortegnsskjema:

| | $x < -2$ | $x = -2$ | $-2 < x < 6$ | $x = 6$ | $x > 6$ |
|---|---|---|---|---|---|
| $(x+2)$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $(x-6)$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $(x+2)(x-6)$ | $+$ | $0$ | $\mathbf{-}$ | $0$ | $+$ |

Ulikheten $x^2 - 4x - 12 < 0$ er oppfylt der produktet er negativt, altså mellom nullpunktene.

**Løsningen er $\underline{\underline{x \in \langle -2,\ 6 \rangle}}$.**

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/andregradsfunksjon-med-ett-nullpunkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Andregradsfunksjon med ett nullpunkt

En andregradsfunksjon $f$ har ett nullpunkt. Grafen til $f$ skjærer $y$-aksen i punktet $(0, 9)$.

>[!oppgave]
>Bestem et mulig funksjonsuttrykk $f(x)$ for andregradsfunksjonen.

## Fasit

For eksempel $f(x)=x^{2}+6x+9$ eller $f(x)=x^{2}-6x+9$.

## Løsningsforslag

- Ett nullpunkt → grafen «toucher» akkurat $x$-aksen og diskriminanten $b^{2}-4ac$ må være 0.
- Grafen skal skjære i $(0,9)$ → $a$ må være positiv og $f(0)=9$

Vi setter opp det generelle uttrykket.
$$
f(x)=ax^{2}+bx+c
$$
Siden diskriminanten må være null kan vi utnytte at $b^{2}=4ac$ og forenkle. Vi er kun ute etter en mulig løsning her, så jeg bruker kvadratroten slik at $b=\sqrt{ 4ac }$
$$
f(x)=ax^{2}+\sqrt{ 4ac }x+c
$$
Vi utnytter at $f(0)=9$ som gir oss
$$a \cdot 0^{2}+ \sqrt{ 4ac } \cdot 0+c=9 \implies \underline{c=9}$$
Vi har altså
$$
f(x)=ax^{2}+\sqrt{ 4a \cdot9 }x +9=ax^{2}+\sqrt{ 36a }x+9=ax^{2}+6\sqrt{ a }x+9
$$
Den enkleste løsningen her vil være $a=1$ slik at funksjonen vår blir:
$$
\underline{\underline{ f(x)=x^{2}+6x+9 }}
$$



</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradslikning-og-grafvalg/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradslikning og grafvalg

>[!oppgave]
>a) Løs likningen
>
>$$x^3 - 7x^2 - 10x + 16 = 0$$

Funksjonen $f$ er gitt ved

$$f(x) = x^3 - 7x^2 - 10x + 16$$

>[!oppgave]
>b) Hvilken av grafene nedenfor kan være grafen til $f$? Husk å begrunne svaret.

![Fire grafer A, B, C og D](/img/user/_resources/1t-v25-1-4.jpeg){width=60%}

## Fasit

a) $\underline{\underline{x = -2, \quad x = 1, \quad x = 8}}$

b) **Graf C**

## Løsningsforslag

### a

Vi prøver $x = 1$:

$$1^3 - 7 \cdot 1^2 - 10 \cdot 1 + 16 = 1 - 7 - 10 + 16 = 0 \checkmark$$

Siden $x = 1$ er en rot, er $(x - 1)$ en faktor. Vi utfører polynomdivisjon:

$$\frac{x^3 - 7x^2 - 10x + 16}{x - 1}$$

$$\begin{array}{r}
x^2 - 6x - 16 \\[-4pt]
\hline
x - 1 \;\Big)\; x^3 - 7x^2 - 10x + 16 \\
x^3 - x^2 \\[-4pt]
\hline
-6x^2 - 10x \\
-6x^2 + 6x \\[-4pt]
\hline
-16x + 16 \\
-16x + 16 \\[-4pt]
\hline
0
\end{array}$$

Vi har nå:

$$x^3 - 7x^2 - 10x + 16 = (x - 1)(x^2 - 6x - 16)$$

Vi løser $x^2 - 6x - 16 = 0$ med abc-formelen:

$$x = \frac{6 \pm \sqrt{36 + 64}}{2} = \frac{6 \pm \sqrt{100}}{2} = \frac{6 \pm 10}{2}$$

$$x = \frac{6 + 10}{2} = 8 \qquad \text{eller} \qquad x = \frac{6 - 10}{2} = -2$$

**Løsningene er $x = -2$, $x = 1$ og $x = 8$.**

### b

Vi bruker egenskapene til $f(x) = x^3 - 7x^2 - 10x + 16$ for å velge riktig graf:

- **Ledende koeffisient positiv** ($+x^3$): grafen går mot $-\infty$ når $x \to -\infty$ og mot $+\infty$ når $x \to +\infty$. Det utelukker **A** og **B** (som begge har negativ ledende koeffisient).
- **Tre nullpunkter** ved $x = -2$, $x = 1$ og $x = 8$: én negativ rot og to positive røtter.
- **$y$-skjæring:** $f(0) = 16 > 0$.
- **Lokalt toppunkt** mellom røttene $-2$ og $1$ ligger ved en negativ $x$-verdi (til venstre for $y$-aksen). Lokalt bunnpunkt ligger mellom røttene $1$ og $8$, altså ved en positiv $x$-verdi (til høyre for $y$-aksen).

Graf **D** har lokalt toppunkt til høyre for $y$-aksen og lokalt bunnpunkt til venstre – det stemmer ikke med $f$.

Graf **C** har:

- positiv ledende koeffisient (riktig retning)
- én negativ rot (ca. $x = -2$), lokalt toppunkt like til venstre for $y$-aksen
- positiv $y$-skjæring
- en rot ved liten positiv $x$ (ca. $x = 1$), lokalt bunnpunkt lengre til høyre
- en rot ved større positiv $x$ (ca. $x = 8$)

Dette stemmer med $f$. **Graf C er riktig.**

</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/trigonometri-med-arealsetning-og-cosinus/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Trigonometri med arealsetning og cosinus

![Likesidet trekant med sidelengder 2](/img/user/_resources/1t-v25-1-5.jpeg){width=40%}

>[!oppgave]
>a) Bruk den likesidede trekanten ovenfor til å vise at $\sin 30\degree = \cos 60\degree = \dfrac{1}{2}$

Gitt en trekant $ABC$ der $AB = 10$, $AC = 6$ og $\angle A = 30\degree$

>[!oppgave]
>b) Bestem arealet av trekanten.

Gitt en trekant $PQR$ der $PQ = 8$, $PR = 3$ og $\angle P = 60\degree$

>[!oppgave]
>c) Bestem lengden av siden $QR$.

## Fasit

a) $\sin 30\degree = \cos 60\degree = \dfrac{1}{2}$ (vist ved halvering av likesidet trekant)

b) **Areal $= \underline{\underline{15}}$**

c) $\underline{\underline{QR = 7}}$

## Løsningsforslag

### a

Vi halverer den likesidede trekanten med et loddrett snitt fra ett hjørne ned til midtpunktet på den motsatte siden.

Dette gir en rettvinklet trekant med:

- hypotenus $= 2$
- kort katet $= 1$ (halvparten av bunnsiden)
- lang katet $= \sqrt{2^2 - 1^2} = \sqrt{3}$

Vinklene i den rettvinklede trekanten er $30\degree$, $60\degree$ og $90\degree$.

Fra definisjonen av sinus og cosinus:

$$\sin 30\degree = \frac{\text{motstående katet}}{\text{hypotenus}} = \frac{1}{2}$$

$$\cos 60\degree = \frac{\text{hosliggende katet}}{\text{hypotenus}} = \frac{1}{2}$$

**Dermed er $\sin 30\degree = \cos 60\degree = \dfrac{1}{2}$.**

### b

Vi bruker arealsetningen:

$$T = \frac{1}{2} \cdot AB \cdot AC \cdot \sin A$$

$$T = \frac{1}{2} \cdot 10 \cdot 6 \cdot \sin 30\degree = \frac{1}{2} \cdot 10 \cdot 6 \cdot \frac{1}{2} = \underline{\underline{15}}$$

### c

Vi bruker cosinussetningen:

$$QR^2 = PQ^2 + PR^2 - 2 \cdot PQ \cdot PR \cdot \cos P$$

$$QR^2 = 8^2 + 3^2 - 2 \cdot 8 \cdot 3 \cdot \cos 60\degree$$

$$QR^2 = 64 + 9 - 48 \cdot \frac{1}{2} = 73 - 24 = 49$$

$$QR = \sqrt{49} = \underline{\underline{7}}$$

</div></div>


## Oppgave 1-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/identitet-i-cas-verktoy/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Identitet i CAS-verktøy

Kari arbeider med algebraiske uttrykk, likninger og identiteter. Hun prøver å løse likningen

$$x^2 - 4 = (x+2)(x-2)$$

i et CAS-verktøy og får resultatet $x = x$. Se nedenfor.

> $x^2 - 4 = (x + 2)(x - 2)$
>
> Løs: $\{x = x\}$

>[!oppgave]
>Ta utgangspunkt i dette resultatet og forklar Kari hva en identitet er.

## Fasit

**$x^2 - 4 = (x+2)(x-2)$ er en identitet — den er sann for alle reelle tall $x$.**

## Løsningsforslag

CAS prøver å finne hvilke $x$-verdier som gjør likningen sann. For å forstå hvorfor den svarer $x = x$, kan vi se hva som skjer når vi forenkler høyre side:

$$
(x+2)(x-2) = x^2 - 2x + 2x - 4 = x^2 - 4
$$

De to sidene er altså nøyaktig det samme algebraiske uttrykket. Det betyr at likningen

$$
x^2 - 4 = (x+2)(x-2)
$$

er sann uansett hvilken verdi $x$ har. Velger vi for eksempel $x = 3$:

$$
3^2 - 4 = 5 \qquad \text{og} \qquad (3+2)(3-2) = 5 \cdot 1 = 5
$$

eller $x = 0$:

$$
0^2 - 4 = -4 \qquad \text{og} \qquad (0+2)(0-2) = 2 \cdot (-2) = -4
$$

Begge sider gir alltid samme svar.

En slik likhet kalles en **identitet** — en likhet mellom to uttrykk som er sann for *alle* verdier av variabelen. CAS uttrykker dette med $x = x$: det er CAS sin måte å si «alle reelle tall er løsninger».

Dette er annerledes enn en vanlig likning, for eksempel $x^2 - 4 = 0$, der bare de spesielle verdiene $x = 2$ og $x = -2$ er løsninger.

**Kari kan altså forklare at $x^2 - 4 = (x+2)(x-2)$ er en identitet fordi de to sidene er ekvivalente uttrykk, og at CAS bekrefter dette ved å returnere $x = x$.**

</div></div>


## Oppgave 1-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/minimumsverdi-med-while-lokke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Minimumsverdi med while-løkke

Siri har laget programmet nedenfor.

```python ln
def f(x):
    return x ** 2 + 2 * x - 15

x = -5
verdi = f(x)

while x <= 5:

    if f(x) < verdi:
        verdi = f(x)

    x = x + 1

print(verdi)
```

>[!oppgave]
>Hva finner Siri ut når hun kjører programmet? Hvilken verdi skrives ut?

## Fasit

Programmet skriver ut $\underline{\underline{-16}}$. Siri finner den minste funksjonsverdien til $f(x) = x^2 + 2x - 15$ for heltall $x \in [-5, 5]$.

## Løsningsforslag

Programmet definerer $f(x) = x^2 + 2x - 15$ og starter med $x = -5$ og `verdi = f(-5)`.

While-løkka går gjennom heltallene $x = -5, -4, -3, \ldots, 5$. For hvert steg sjekkes det om $f(x)$ er mindre enn den lagrede `verdi`. Hvis ja, oppdateres `verdi`. Til slutt skrives den minste verdien som ble funnet.

Vi regner ut $f(x)$ for alle heltall i intervallet:

| $x$ | $f(x) = x^2 + 2x - 15$ |
|-----|------------------------|
| $-5$ | $25 - 10 - 15 = 0$ |
| $-4$ | $16 - 8 - 15 = -7$ |
| $-3$ | $9 - 6 - 15 = -12$ |
| $-2$ | $4 - 4 - 15 = -15$ |
| $-1$ | $1 - 2 - 15 = \mathbf{-16}$ |
| $0$ | $0 + 0 - 15 = -15$ |
| $1$ | $1 + 2 - 15 = -12$ |
| $2$ | $4 + 4 - 15 = -7$ |
| $3$ | $9 + 6 - 15 = 0$ |
| $4$ | $16 + 8 - 15 = 9$ |
| $5$ | $25 + 10 - 15 = 20$ |

Den minste funksjonsverdien er $f(-1) = -16$.

Programmet skriver ut $\underline{\underline{-16}}$.

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kikhoste-og-eksponentiell-modell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kikhoste og eksponentiell modell

Tabellen nedenfor viser antallet registrerte tilfeller av kikhoste i Norge noen måneder i perioden januar 2023–oktober 2024.

| Måned | Januar 2023 | Mai 2023 | Oktober 2023 | Februar 2024 | August 2024 | Oktober 2024 |
|---|---|---|---|---|---|---|
| Antall registrerte tilfeller | 29 | 93 | 164 | 284 | 1035 | 1657 |

La $x$ være antall måneder etter desember 2022, det vil si at $x = 1$ tilsvarer januar 2023, $x = 3$ tilsvarer mars 2023, og så videre.

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $K$ gitt ved
>
>$$K(x) = 27{,}8 \cdot 1{,}2^x$$
>
>er en god modell for antall registrerte tilfeller av kikhoste i Norge i perioden januar 2023–oktober 2024.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4, K(4))$ og $(21, K(21))$. Gi en praktisk tolkning av svaret du får.
>c) Hvor mange tilfeller av kikhoste vil bli registrert i Norge i mai 2025 ifølge modellen?

## Fasit

a) Modellverdiene ligger nær de observerte verdiene – $K$ er en god modell.

b) $\underline{\underline{\text{Stigning} \approx 71{,}84 \text{ tilfeller per måned}}}$

c) $\underline{\underline{K(29) \approx 5499 \text{ tilfeller}}}$

## Løsningsforslag

Vi definerer $K(x) = 27{,}8 \cdot 1{,}2^x$ i GeoGebra CAS og beregner alle deloppgavene i én sesjon.

![CAS-beregninger for alle deloppgaver](/img/user/_resources/1t-v25-2-1.png)

### a

Vi beregner $K(x)$ for de seks månedene i tabellen og sammenligner med de observerte verdiene:

| Måned | $x$ | Observert | $K(x)$ |
|---|---|---|---|
| Januar 2023 | 1 | 29 | $\approx 33$ |
| Mai 2023 | 5 | 93 | $\approx 69$ |
| Oktober 2023 | 10 | 164 | $\approx 172$ |
| Februar 2024 | 14 | 284 | $\approx 357$ |
| August 2024 | 20 | 1035 | $\approx 1066$ |
| Oktober 2024 | 22 | 1657 | $\approx 1535$ |

Modellverdiene er av samme størrelsesorden som de observerte verdiene i alle månedene. Avvikene er relativt små sammenlignet med de faktiske tallene. **$K$ er derfor en god modell for antall registrerte tilfeller av kikhoste i perioden.**

### b

Vi beregner stigningstallet til linjen gjennom $(4, K(4))$ og $(21, K(21))$:

$$\frac{K(21) - K(4)}{21 - 4} = \frac{1278{,}94 - 57{,}65}{17} \approx \underline{\underline{71{,}84}}$$

**Praktisk tolkning:** I gjennomsnitt økte antallet registrerte kikhoste-tilfeller med ca. $\textbf{72}$ tilfeller per måned i perioden fra mai 2023 ($x = 4$) til september 2024 ($x = 21$).

### c

Mai 2025 er 29 måneder etter desember 2022, altså $x = 29$.

$$K(29) = 27{,}8 \cdot 1{,}2^{29} \approx \underline{\underline{5499 \text{ tilfeller}}}$$

Ifølge modellen vil det bli registrert ca. **5499 tilfeller** av kikhoste i Norge i mai 2025.

</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sekker-hundemat-og-likningssystem/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sekker hundemat og likningssystem

En butikk selger små og store sekker med hundemat. De små sekkene veier $4{,}5 \mathrm{~kg}$, og de store veier $12 \mathrm{~kg}$.

En dag solgte butikken 80 sekker. Sekkene veide til sammen $720 \mathrm{~kg}$.

>[!oppgave]
>Hvor mange små og hvor mange store sekker solgte butikken denne dagen?

## Fasit

**32 små sekker og 48 store sekker**

## Løsningsforslag

La $x$ være antall små sekker og $y$ være antall store sekker.

Vi setter opp likningssystemet:

$$\begin{cases} x + y = 80 \\ 4{,}5x + 12y = 720 \end{cases}$$

Vi løser systemet i GeoGebra CAS med kommandoen `Løs({x + y = 80, (9/2)·x + 12·y = 720}, {x, y})`:

![GeoGebra CAS-løsning av likningssystemet](/img/user/_resources/1t-v25-2-2.png){width=70%}

CAS gir $x = 32$ og $y = 48$.

**Butikken solgte $\underline{\underline{32 \text{ små sekker}}}$ og $\underline{\underline{48 \text{ store sekker}}}$ denne dagen.**

</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tolvkant-innskrevet-i-sirkel/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tolvkant innskrevet i sirkel

![Tolvkant innskrevet i sirkel med 30°-vinkel](/img/user/_resources/1t-v25-2-3.jpeg){width=35%}

En tolvkant er innskrevet i en sirkel. Se figuren ovenfor. Tolvkanten er satt sammen av tolv like store likebeinte trekanter. Arealet av tolvkanten er 120.

>[!oppgave]
>a) Bestem diameter i sirkelen. Gi svaret eksakt.
>b) Bestem omkretsen av tolvkanten. Gi svaret eksakt.

## Fasit

a) $d=4\sqrt{ 10 }$
b) $O=24\left( \sqrt{ 15 } -\sqrt{ 5 }  \right) $

## Løsningsforslag

### a
Alle 12 trekantene er like store. Dermed må arealet av hver trekant være $\frac{120}{12}=\underline{ 10 }$.

Arealsetningen sier at 
$$
A=\frac{1}{2}ab \sin v
$$
Siden trekantene våre er likebeinte med sidelengde $r$ og vi kjenner vinkelen mellom beina kan vi forenkle og regne ut.
$$
\begin{aligned}
A&=\frac{1}{2}ab \sin v \\
10 &= \frac{1}{2} r^{2}  \cdot \sin 30 \degree \\
\frac{2 \cdot 10}{\sin 30 \degree} &= r^{2} \\
\frac{20}{\frac{1}{2}} &= r^{2} \\
r&=\sqrt{ 40 }
\end{aligned}
$$
Vi kan bestemme diameteren eksakt.
$$d=2r=2 \cdot \sqrt{ 40 }=2 \cdot \sqrt{ 4 \cdot 10 }=2 \cdot 2 \sqrt{ 10 } = 4\sqrt{ 10 } $$

**Diameteren er $\underline{\underline{ 4\sqrt{ 10 } }}$.**

### b
Vi kjenner to sider i trekantene og mangler den siste. Vi kan bruke cosinussetningen.
$$
\begin{aligned}

a^{2}&=b^{2}+c^{2}-2bc \cdot \cos A \\
a^{2}&=\sqrt{ 40 }^{2}+\sqrt{ 40 }^{2}- 2\sqrt{ 40 }\cdot \sqrt{ 40 } \cdot \cos 30 \degree \\
a^{2}&=40+40-2 \cdot 40 \cdot \cos 30\degree \\
a^{2}&=80-80\cdot \frac{\sqrt{ 3 }}{2} \\
a^{2}&=80\left( 1-\frac{\sqrt{ 3 }}{2} \right) \\
a^{2}&=80\left( \frac{2}{2}-\frac{\sqrt{ 3 }}{2} \right)  \\
a^{2}&=40\left( 2-\sqrt{ 3 }\right)   \\
a &= \sqrt{ 40 } \cdot \sqrt{ 2-\sqrt{ 3 }} \\
a &= 2\sqrt{ 10  } \cdot \sqrt{ 2-\sqrt{ 3 } } \\
a &= 2 \cdot \sqrt{ 20-10\sqrt{ 3 } } 
\end{aligned}
$$
Tolvkanten består av tolv slike kanter.
$$
O=12\cdot 2 \sqrt{ 20-10\sqrt{ 3 } }=24 \sqrt{ 20-10 \sqrt{ 3 } } 
$$
GeoGebra viser at dette kan forenkles til
$$
\underline{\underline{ O=24 \left( \sqrt{ 15 } -\sqrt{ 5 } \right)  }}
$$

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/figurtall-og-programmering/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Figurtall og programmering

![Figur 1, 2 og 3 med grønne kvadrater](/img/user/_resources/1t-v25-2-4.jpeg){width=60%}

Ovenfor ser du tre figurer. Figurene er satt sammen av små grønne kvadrater. Tenk deg at du skal fortsette å lage figurer etter samme mønster.

Du skal lage et program som beregner og skriver ut hvor mange små grønne kvadrater det vil være i hver av de 20 første figurene.

>[!oppgave]
>a) Sett opp en algoritme du kan bruke for å lage programmet.
>b) Ta utgangspunkt i algoritmen fra oppgave a) og lag programmet.

Tenk deg at du har 1 000 000 små kvadrater. Du starter med å lage figur 1 og fortsetter så med å lage figur 2, figur 3 osv.

>[!oppgave]
>c) Lag et program som du kan bruke for å finne ut hvor mange figurer du kan lage, og hvor mange små kvadrater du har igjen når du har laget alle figurene.

## Fasit

a) –
b) –
c) Du kan lage 143 figurer. Da har du 15 017 brikker til overs.

## Løsningsforslag

### a

> [!tip] Tilsvarende oppgave hos 1P
> 1P-eksamen hadde en tilsvarende oppgave hvor de skulle finne formelen: [[Figurtall med grønne kvadrater\|Figurtall med grønne kvadrater]].

Jeg deler opp figuren slik:

![Oppdeling av figurtall](/img/user/_resources/1p-v25-1-6-losn.png){width=40%}

Jeg velger å skrive algoritmen som pseudokode slik at det går raskt å skrive den i Python etterpå.

```pseudo
for hver figur fra n = 1 til n = 20:
	kvadrat = n	høyre_side = n
	nede_venstre = n + 1
	sum = kvadrat + høyre_side + nede_venstre
	print sum
```

### b
```python
for n in range(1, 21):
	kvadrat = n ** 2
	høyre_side = n
	nede_venstre = n + 1
	sum = kvadrat + høyre_side + nede_venstre
	print(f"Figur {n} har {sum} kvadrater.")
```

Programmet skrev ut hvor mange kvadrater det er i hver figur. Figur 20 har 441 kvadrater.

### c
Vi må holde styr på hvor mange kvadrater vi har brukt med en `totalsum`, også bruker vi en whileløkke for å avslutte når vi er gått tomme for brikker.

```python
totalsum = 0
n = 1

while totalsum <= 1_000_000:
	kvadrat = n ** 2
	høyre_side = n
	nede_venstre = n + 1
	n = n + 1
	figur = kvadrat + høyre_side + nede_venstre
	totalsum = totalsum + figur   # Legger til den siste figuren

# While-løkka har kjørt en gang for mye og 
# har brukt opp flere brikker enn vi har.
# Vi må derfor "gå en figur tilbake"
brikker_brukt_før_siste = totalsum - figur
brikker_til_overs = 1_000_000 - brikker_brukt_før_siste

print(f"Etter figur {n-1} har du {brikker_til_overs} brikker til overs.")
```

Output: `Etter figur 143 har du 15017 brikker til overs.`

**Du kan lage 143 figurer. Da har du 15 017 brikker til overs.**


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sylinderboks-med-minst-overflate/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sylinderboks med minst overflate

Isabel er industridesigner. Hun arbeider med et design på bokser med form som sylindre.

Formel for å regne ut volumet av en boks med radius $r$ og høyde $h$

$$V = \pi \cdot r^2 \cdot h$$

Formel for å regne ut arealet av overflaten av boksen

$$O = \pi \cdot r^2 + 2 \cdot \pi \cdot r \cdot h$$

![Sylindrisk boks](/img/user/_resources/1t-v25-2-5.jpeg){width=25%}

Isabel lurer på hvor stor radius hun bør velge og hvor høye boksene må være, når hver boks skal ha

- et volum $V$ på $450 \mathrm{~cm^3}$
- minst mulig overflate $O$

Isabel ser at når hun har gitt volum og radius, kan hun regne ut høyden ved å bruke formelen $V = \pi \cdot r^2 \cdot h$

>[!oppgave]
>a) Lag en oversikt som vist nedenfor. Gjør beregninger og fyll inn verdiene som mangler.
>
>| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
>|---|---|---|---|
>| 2 | 35,8 | 462,6 | 450 |
>| 4 |  |  | 450 |
>| 6 |  |  | 450 |
>| 8 |  |  | 450 |

Isabel ønsker å lage en modell som viser overflaten av ulike bokser hun kan lage ved å endre radius.

>[!oppgave]
>b) Sett opp et funksjonsuttrykk Isabel kan bruke, og lag en grafisk framstilling som viser sammenhengen mellom radius og overflate.
>c) Hvor stor må radius i boksene være for at overflaten skal bli minst mulig? Hvor stor blir overflaten da?

## Fasit

a)

| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
|---|---|---|---|
| 2 | 35,8 | 462,6 | 450 |
| 4 | 8,95 | 275,3 | 450 |
| 6 | 3,98 | 263,1 | 450 |
| 8 | 2,24 | 313,6 | 450 |

b) $O(r) = \pi r^2 + \dfrac{900}{r}$

c) $\underline{\underline{r \approx 5{,}23 \, \mathrm{cm}}}$, $\underline{\underline{O_{\min} \approx 258 \, \mathrm{cm}^2}}$

## Løsningsforslag

### a

Isabel har gitt at $V = 450 \, \mathrm{cm}^3$. Hun løser volumformelen for $h$:

$$h = \frac{V}{\pi r^2} = \frac{450}{\pi r^2}$$

Deretter settes $h$ inn i overflateformelen:

$$O = \pi r^2 + 2\pi r \cdot \frac{450}{\pi r^2} = \pi r^2 + \frac{900}{r}$$

Vi beregner $h$ og $O$ for hver radiusverdi i GeoGebra CAS (se utklipp):

![GeoGebra CAS: tabellverdier for h og O](/img/user/_resources/1t-v25-2-5-cas.png)

| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
|---|---|---|---|
| 2 | 35,8 | 462,6 | 450 |
| 4 | 8,95 | 275,3 | 450 |
| 6 | 3,98 | 263,1 | 450 |
| 8 | 2,24 | 313,6 | 450 |

### b

Vi setter $h = \dfrac{450}{\pi r^2}$ inn i formelen for overflaten:

$$O(r) = \pi r^2 + 2\pi r \cdot \frac{450}{\pi r^2} = \pi r^2 + \frac{900}{r}$$

Grafen under viser $O(r)$ for $r > 0$ med bunnpunktet markert:

![Graf av O(r) med markert minimum](/img/user/_resources/1t-v25-2-5.png)

### c

Vi finner minimumet ved å derivere $O(r)$ og sette $O'(r) = 0$:

$$O'(r) = 2\pi r - \frac{900}{r^2}$$

Vi setter $O'(r) = 0$:

$$2\pi r = \frac{900}{r^2} \implies r^3 = \frac{450}{\pi}$$

GeoGebra CAS gir $r \approx 5{,}23 \, \mathrm{cm}$ (se utklipp over).

Høyden blir da:

$$h = \frac{450}{\pi \cdot 5{,}23^2} \approx 5{,}23 \, \mathrm{cm}$$

Vi merker oss at $h = r$ ved minimumet — boksen er like høy som den er bred.

Minste overflate:

$$O(5{,}23) = \pi \cdot 5{,}23^2 + \frac{900}{5{,}23} \approx 258 \, \mathrm{cm}^2$$

**Isabel bør velge radius $\underline{\underline{r \approx 5{,}23 \, \mathrm{cm}}}$. Da blir overflaten minst mulig, $\underline{\underline{O_{\min} \approx 258 \, \mathrm{cm}^2}}$.**

</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/rasjonale-funksjoner-noah-og-johanne/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Rasjonale funksjoner Noah og Johanne

Klassen til Noah og Johanne arbeider med rasjonale funksjoner. Læreren har tegnet grafene til to rasjonale funksjoner $f$ og $g$ og bedt elevene undersøke hvordan funksjonsuttrykkene kan se ut.

![Graf til f](/img/user/_resources/1t-v25-2-6-1.jpeg){width=60%}

>[!green-box] Noah
>Grafen til $f$ har to vertikale asymptoter. Hvordan må nevneren i brøken da se ut?

>[!yellow-box] Johanne
>Jeg tror jeg vet det! Tenk på hvordan vi har funnet den vertikale asymptoten til de rasjonale funksjonene vi har arbeidet med tidligere.

>[!green-box] Noah
>Ja! Da skjønner jeg også hvordan nevneren til $g$ kan se ut! Den grafen har jo ingen vertikale asymptoter!

>[!yellow-box] Johanne
>Vi må passe på at nullpunktet, skjæringspunktet med $y$-aksen og den horisontale asymptoten også blir riktig.

>[!oppgave]
>Hjelp Noah og Johanne med å finne fram til et mulig funksjonsuttrykk $f(x)$ for funksjonen $f$ og et mulig funksjonsuttrykk $g(x)$ for funksjonen $g$.
>
>Husk å argumentere for dine valg av funksjonsuttrykk.

## Fasit

$\underline{\underline{f(x) = \dfrac{5x - 2}{x^2 - 1}}}$ og $\underline{\underline{g(x) = \dfrac{5x - 2}{x^2 + 1}}}$

## Løsningsforslag

Vi leser av egenskapene til grafene og setter opp funksjonsuttrykk som passer.

### Funksjonen $f$

Grafen til $f$ har følgende egenskaper:

- **To vertikale asymptoter** ved $x = -1$ og $x = 1$
- **Horisontal asymptote** $y = 0$
- **Positiv $y$-skjæring** ($f(0) > 0$)
- **Nullpunkt** mellom $0$ og $1$ (ca. $x = 0{,}4$)

Siden $f$ har vertikale asymptoter ved $x = -1$ og $x = 1$, må nevneren ha nullpunkter nettopp der. En naturlig nevner er

$$
(x - 1)(x + 1) = x^2 - 1
$$

Telleren må gi nullpunkt nær $x = 0{,}4$. Et lineært uttrykk $5x - 2$ har nullpunkt i $x = \tfrac{2}{5}$, som passer godt. Da blir

$$
f(x) = \frac{5x - 2}{x^2 - 1}
$$

Vi verifiserer:

- Vertikale asymptoter: $x^2 - 1 = 0 \Rightarrow x = \pm 1$ ✓
- Nullpunkt: $5x - 2 = 0 \Rightarrow x = \tfrac{2}{5}$ ✓
- $y$-skjæring: $f(0) = \dfrac{-2}{-1} = 2 > 0$ ✓
- Horisontal asymptote: $\lim_{x \to \pm\infty} \dfrac{5x - 2}{x^2 - 1} = 0$ ✓

### Funksjonen $g$

Grafen til $g$ har følgende egenskaper:

- **Ingen vertikale asymptoter**
- **Horisontal asymptote** $y = 0$
- Negativ $y$-skjæring og samme type teller som $f$ (lik nullpunkt og y-skjæring i tallverdi før fortegn)
- Lokalt minimum like til venstre for $y$-aksen, lokalt maksimum til høyre

Siden $g$ ikke har vertikale asymptoter, må nevneren aldri bli null. Vi beholder samme teller som i $f$ og bytter nevner til $x^2 + 1$ (alltid positiv):

$$
g(x) = \frac{5x - 2}{x^2 + 1}
$$

Vi verifiserer:

- Ingen vertikale asymptoter: $x^2 + 1 \geq 1 > 0$ for alle $x$ ✓
- Nullpunkt: $5x - 2 = 0 \Rightarrow x = \tfrac{2}{5}$ ✓
- $y$-skjæring: $g(0) = \dfrac{-2}{1} = -2$ ✓
- Horisontal asymptote: $\lim_{x \to \pm\infty} \dfrac{5x - 2}{x^2 + 1} = 0$ ✓

Grafene er tegnet i GeoGebra (blå = $f$, rød = $g$) og samsvarer med originalfigurene:

![Grafer til f og g](/img/user/_resources/1t-v25-2-6-l%C3%B8sning.png)

</div></div>


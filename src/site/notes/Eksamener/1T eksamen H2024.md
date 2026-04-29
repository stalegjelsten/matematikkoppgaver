---
{"tags":["eksamen"],"fag":["1t"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"1T eksamen H2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/1t-eksamen-h2024/","permalink":"/eksamener/1t-eksamen-h2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["1t"],"eksamen":"h24","del1_tid":1,"del2_tid":4,"title":"1T eksamen H2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 1 time — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [[Verifiser dobbeltvinkelformel med 30-60-90-trekant\|Verifiser dobbeltvinkelformel med 30-60-90-trekant]] | trigonometri, identiteter, argumentasjon | × |
| [1-2](#oppgave-1-2) | [[Bunnpunkt på faktorisert andregradsfunksjon\|Bunnpunkt på faktorisert andregradsfunksjon]] | andregradslikninger, funksjonsdrøfting, faktorisering | × |
| [1-3](#oppgave-1-3) | [[Løs tredjegradsulikhet og illustrer grafisk\|Løs tredjegradsulikhet og illustrer grafisk]] | likninger, polynomdivisjon, faktorisering, funksjonsdrøfting | × |
| [1-4](#oppgave-1-4) | [[Begrunn tangensverdier i enhetssirkelen\|Begrunn tangensverdier i enhetssirkelen]] | enhetssirkel, trigonometri, argumentasjon | × |
| [1-5](#oppgave-1-5) | [[Identitet for kvadrert sum fra arealmodell\|Identitet for kvadrert sum fra arealmodell]] | identiteter, algebra, areal | × |

**Del 2** — 4 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [[Avisabonnenter, sekant og momentan vekstfart\|Avisabonnenter, sekant og momentan vekstfart]] | eksponentialfunksjoner, stigningstall, gjennomsnittlig vekstfart, derivasjon, geometrisk vekst | × |
| [2-2](#oppgave-2-2) | [[Stjernens areal med arealsetningen\|Stjernens areal med arealsetningen]] | trigonometri, areal, arealsetningen | × |
| [2-3](#oppgave-2-3) | [[Rasjonal funksjon fra asymptoter og nullpunkt\|Rasjonal funksjon fra asymptoter og nullpunkt]] | rasjonale funksjoner, asymptoter, argumentasjon | × |
| [2-4](#oppgave-2-4) | [[Programmer fakultet og forklar nuller i 100!\|Programmer fakultet og forklar nuller i 100!]] | programmering, faktorisering, argumentasjon, utforskning | × |
| [2-5](#oppgave-2-5) | [[Tredjegradsfunksjon fra punkt, toppunkt og tangent\|Tredjegradsfunksjon fra punkt, toppunkt og tangent]] | funksjonsdrøfting, likningssystem, derivasjon | × |
| [2-6](#oppgave-2-6) | [[Areal av firkant ABCD med trigonometri\|Areal av firkant ABCD med trigonometri]] | trigonometri, areal, cosinussetningen, arealsetningen | × |
| [2-7](#oppgave-2-7) | [[Optimalisering av grønnsakhage med 100 m gjerde\|Optimalisering av grønnsakhage med 100 m gjerde]] | optimering, modellering, funksjonsdrøfting, areal, Pytagoras | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/verifiser-dobbeltvinkelformel-med-30-60-90-trekant/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Verifiser dobbeltvinkelformel med 30-60-90-trekant

Snorre har funnet formelen nedenfor i en matematikkbok

$$2 \cdot \sin(u) \cdot \cos(u) = \sin(2 \cdot u)$$

![30-60-90-trekant med hypotenus 2, kateter 1 og $\sqrt{3}$](/img/user/_resources/1t-h24-1-1.jpeg){width=40%}

>[!oppgave]
>Bruk trekanten til høyre og vis at formelen gjelder når $u = 30\degree$.

## Fasit

**Begge sider er lik $\dfrac{\sqrt{3}}{2}$**, så formelen gjelder for $u = 30\degree$.

## Løsningsforslag

Fra 30-60-90-trekanten leser vi av sidene: hypotenus $= 2$, kateten motstående $30\degree$ er $1$, og kateten motstående $60\degree$ er $\sqrt{3}$.

Dette gir oss de trigonometriske verdiene vi trenger:

$$\sin(30\degree) = \frac{1}{2}, \qquad \cos(30\degree) = \frac{\sqrt{3}}{2}, \qquad \sin(60\degree) = \frac{\sqrt{3}}{2}$$

Vi beregner venstre side av formelen med $u = 30\degree$:

$$2 \cdot \sin(30\degree) \cdot \cos(30\degree) = 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}$$

Vi beregner høyre side av formelen med $u = 30\degree$:

$$\sin(2 \cdot 30\degree) = \sin(60\degree) = \frac{\sqrt{3}}{2}$$

Siden venstre side $=$ høyre side $= \dfrac{\sqrt{3}}{2}$, er formelen $2\sin(u)\cos(u) = \sin(2u)$ **verifisert for $u = 30\degree$**.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bunnpunkt-pa-faktorisert-andregradsfunksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bunnpunkt på faktorisert andregradsfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = (x - 1)(x + 3)$$

>[!oppgave]
>Bestem koordinatene til bunnpunktet på grafen til $f$.

## Fasit

Bunnpunkt $\underline{\underline{(-1,\,-4)}}$

## Løsningsforslag

Nullpunktene finner vi ved å sette $f(x) = 0$:

$$
(x - 1)(x + 3) = 0
\implies x = 1 \quad \text{eller} \quad x = -3
$$

En andregradsfunksjon er symmetrisk om aksen gjennom bunnpunktet. Symmetriaksen ligger midt mellom nullpunktene:

$$
x = \frac{1 + (-3)}{2} = \frac{-2}{2} = -1
$$

Vi beregner funksjonsverdien i $x = -1$:

$$
f(-1) = (-1 - 1)(-1 + 3) = (-2) \cdot 2 = -4
$$

**Bunnpunktet er $\underline{\underline{(-1,\,-4)}}$.**


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/los-tredjegradsulikhet-og-illustrer-grafisk/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Løs tredjegradsulikhet og illustrer grafisk

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 7x^2 + 4x - 12$$

>[!oppgave]
>Løs ulikheten $f(x) < 0$ og illustrer løsningen grafisk ved å lage en skisse.

## Fasit

**$x \in \langle -\infty, -6 \rangle \cup \langle -2, 1 \rangle$**

## Løsningsforslag

Vi skal løse $f(x) < 0$ der $f(x) = x^3 + 7x^2 + 4x - 12$.

Første steg er å finne nullpunktene til $f$.

**Gjett et heltallsnullpunkt.** Nullpunktene må være delere av konstantleddet $-12$, altså blant $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$. Vi prøver $x = 1$:

$$f(1) = 1 + 7 + 4 - 12 = 0 \checkmark$$

Så $(x - 1)$ er en faktor.

**Polynomdivisjon:**

$$\frac{x^3 + 7x^2 + 4x - 12}{x - 1} = x^2 + 8x + 12$$

Vi kontrollerer: $(x-1)(x^2 + 8x + 12) = x^3 + 8x^2 + 12x - x^2 - 8x - 12 = x^3 + 7x^2 + 4x - 12$ ✓

**Faktoriser andregradsuttrykket** $x^2 + 8x + 12$:

$$x = \frac{-8 \pm \sqrt{64 - 48}}{2} = \frac{-8 \pm \sqrt{16}}{2} = \frac{-8 \pm 4}{2}$$

Dette gir $x = -2$ og $x = -6$.

Dermed kan vi skrive:

$$f(x) = (x - 1)(x + 2)(x + 6)$$

**Nullpunktene** er $x = -6$, $x = -2$ og $x = 1$.

**Fortegnsanalyse.** Siden ledende koeffisient er positiv ($+1$ foran $x^3$), er $f(x) \to -\infty$ for $x \to -\infty$ og $f(x) \to +\infty$ for $x \to +\infty$. Fortegnet skifter ved hvert nullpunkt:

| Intervall | $f(x)$ |
|-----------|--------|
| $x < -6$ | $-$ |
| $-6 < x < -2$ | $+$ |
| $-2 < x < 1$ | $-$ |
| $x > 1$ | $+$ |

**Grafisk illustrasjon:**

![Skisse av f(x) med nullpunkter og fortegnsmerking](/img/user/_resources/1t-h24-1-3-skisse.png){width=80%}

Kurven starter nedenfra (negativ), krysser $x$-aksen i $x = -6$, går opp (positiv), krysser i $x = -2$, går ned (negativ), og krysser til slutt i $x = 1$ og fortsetter oppover. De røde skyggede områdene viser der $f(x) < 0$.

**Løsningen** er der $f(x) < 0$:

$$\underline{\underline{x \in \langle -\infty,\, -6 \rangle \cup \langle -2,\, 1 \rangle}}$$


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/begrunn-tangensverdier-i-enhetssirkelen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Begrunn tangensverdier i enhetssirkelen

I koordinatsystemet nedenfor har vi tegnet en sirkel med radius $r = 1$. Punktet $P(0{,}64,\ 0{,}77)$ ligger på sirkelen.

![Enhetssirkel med punkt $P(0{,}64,\ 0{,}77)$ og 50°-vinkel](/img/user/_resources/1t-h24-1-4.jpeg){width=55%}

>[!oppgave]
>a) Er $\tan 50\degree > 1$? Husk å begrunne svaret ditt.
>b) Er $\tan 130\degree > 0$? Husk å begrunne svaret ditt.

## Fasit

a) **Ja**, $\tan 50\degree > 1$

b) **Nei**, $\tan 130\degree < 0$

## Løsningsforslag

### a

I enhetssirkelen er $\cos v$ lik $x$-koordinaten og $\sin v$ lik $y$-koordinaten til punktet på sirkelen. Tangensen er definert som

$$\tan v = \frac{\sin v}{\cos v}$$

For $v = 50\degree$ gir punktet $P(0{,}64,\ 0{,}77)$ at

$$\tan 50\degree = \frac{\sin 50\degree}{\cos 50\degree} = \frac{0{,}77}{0{,}64} \approx 1{,}20$$

Siden $y$-koordinaten $0{,}77$ er større enn $x$-koordinaten $0{,}64$, blir forholdet større enn $1$.

**Ja, $\tan 50\degree > 1$.**

### b

Vinkelen $130\degree$ ligger i andre kvadrant. Her er $x$-koordinaten negativ og $y$-koordinaten positiv. Vi kan bruke symmetri i enhetssirkelen: $130\degree = 180\degree - 50\degree$, og punktet på sirkelen ved $130\degree$ har koordinater $(-0{,}64,\ 0{,}77)$.

$$\tan 130\degree = \frac{\sin 130\degree}{\cos 130\degree} = \frac{0{,}77}{-0{,}64} \approx -1{,}20$$

Fordi $x$-koordinaten er negativ og $y$-koordinaten er positiv, er forholdet $y/x$ negativt.

**Nei, $\tan 130\degree < 0$.**


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/identitet-for-kvadrert-sum-fra-arealmodell/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Identitet for kvadrert sum fra arealmodell

![Stort kvadrat satt sammen av et lite kvadrat med side $s$ og to rektangler med sider $s$ og $t$](/img/user/_resources/1t-h24-1-5.jpeg){width=45%}

Ovenfor ser du et lite kvadrat og to rektangler som til sammen utgjør et stort kvadrat.

Hver side i det lille kvadratet har lengde $s$.
Hver side i det store kvadratet har lengde $s + t$.

>[!oppgave]
>Sett opp en matematisk identitet med utgangspunkt i arealet av det store kvadratet.

## Fasit

$\underline{\underline{(s+t)^2 = s^2 + 2st + t^2}}$

## Løsningsforslag

Det store kvadratet har side $s + t$, så arealet er

$$\text{Areal} = (s+t)^2$$

Samtidig ser vi av figuren at det store kvadratet er satt sammen av fire deler:

- Et lite kvadrat med side $s$: areal $= s^2$
- To rektangler med sider $s$ og $t$: areal $= s \cdot t = st$ per rektangel, altså $2st$ til sammen
- Et lite kvadrat med side $t$: areal $= t^2$

Summen av delarealene gir det totale arealet:

$$\text{Areal} = s^2 + 2st + t^2$$

Siden begge uttrykkene beskriver arealet av det samme store kvadratet, er de like:

$$\boxed{(s+t)^2 = s^2 + 2st + t^2}$$


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/avisabonnenter-sekant-og-momentan-vekstfart/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Avisabonnenter, sekant og momentan vekstfart

Funksjonen $P$ gitt ved

$$P(x) = 3600 \cdot 0{,}85^x + 600$$

er en modell som viser hvor mange personer som abonnerte på papirutgaven av en avis $x$ år etter 2010.

>[!oppgave]
>a) Vis hvordan du på to ulike måter kan finne ut hvor mange personer som abonnerte på papirutgaven i 2010.
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(4,\ P(4))$ og $(14,\ P(14))$. Gi en praktisk tolkning av svaret du får.
>c) Bestem den momentane vekstfarten når $x = 10$. Gi en praktisk tolkning av svaret du får.

I 2019 abonnerte 1000 personer på den digitale utgaven av avisen. Antallet personer som abonnerte på den digitale utgaven, økte med 5,5 % hvert år fra 2019 til 2024.

>[!oppgave]
>d) Hvilket år var det for første gang flere personer som abonnerte på den digitale utgaven av avisen enn på papirutgaven?

## Fasit

a) $\underline{\underline{P(0) = 4200}}$ abonnenter i 2010.

b) Stigningstallet er $\underline{\underline{\approx -150{,}93}}$. I gjennomsnitt mistet papirutgaven ca. 151 abonnenter per år i perioden 2014–2024.

c) $\underline{\underline{P'(10) \approx -115{,}18}}$. I 2020 falt antall papir­abonnenter med ca. 115 per år momentant.

d) $\underline{\underline{2022}}$ var første år da digitale abonnenter oversteg papir­abonnenter.

## Løsningsforslag

![Graf som viser P(x) (blå), D(x) (grønn) og sekantlinjen (oransje)](/img/user/_resources/1t-h24-2-1.png)

### a

Vi skal finne antall abonnenter på papirutgaven i 2010, som tilsvarer $x = 0$.

**Metode 1 – direkte innsetting:**

$$P(0) = 3600 \cdot 0{,}85^0 + 600 = 3600 \cdot 1 + 600 = \mathbf{\underline{\underline{4200}}}$$

**Metode 2 – tolke modellen:**

I uttrykket $P(x) = 3600 \cdot 0{,}85^x + 600$ er leddet $3600 \cdot 0{,}85^x$ en eksponentialfunksjon som starter i $3600$ når $x = 0$. Konstanten $600$ er horisontal asymptote. Startverdien er dermed $3600 + 600 = 4200$.

**I 2010 abonnerte $\underline{\underline{4200}}$ personer på papirutgaven.**

### b

Stigningstallet til sekanten gjennom $(4,\ P(4))$ og $(14,\ P(14))$ er den gjennomsnittlige vekstfarten i intervallet $[4, 14]$.

Vi beregner funksjonsverdiene:

$$P(4) = 3600 \cdot 0{,}85^4 + 600 \approx 2479{,}22$$

$$P(14) = 3600 \cdot 0{,}85^{14} + 600 \approx 969{,}97$$

Stigningstallet (gjennomsnittlig vekstfart):

$$a = \frac{P(14) - P(4)}{14 - 4} = \frac{969{,}97 - 2479{,}22}{10} \approx \mathbf{\underline{\underline{-150{,}93}}}$$

Sekantlinjen er $\textcolor{tomato}{sek(x) = -150{,}93x + 3082{,}92}$ (vist i oransje på grafen, med punktene $A = (4,\ 2479{,}22)$ og $B = (14,\ 969{,}97)$).

**Praktisk tolkning:** Fra 2014 til 2024 mistet papirutgaven i gjennomsnitt ca. 151 abonnenter per år.

### c

Den momentane vekstfarten er den deriverte $P'(x)$.

Siden $P(x) = 3600 \cdot 0{,}85^x + 600$ er en eksponentialfunksjon, bruker vi at $(a^x)' = a^x \cdot \ln a$:

$$P'(x) = 3600 \cdot 0{,}85^x \cdot \ln(0{,}85)$$

CAS bekrefter (se utklipp fra GeoGebra CAS):

![CAS-utregning av den deriverte](/img/user/_resources/1t-h24-2-1-cas.png)

Ved $x = 10$:

$$P'(10) = 3600 \cdot 0{,}85^{10} \cdot \ln(0{,}85) \approx \mathbf{\underline{\underline{-115{,}18}}}$$

**Praktisk tolkning:** I 2020 ($x = 10$) falt antall papir­abonnenter med ca. 115 per år momentant.

### d

Vi setter opp modellen for digitale abonnenter. I 2019 ($x = 9$) var det 1000 digitale abonnenter, og antallet økte med 5,5 % per år:

$$D(x) = 1000 \cdot 1{,}055^{x-9}$$

Vi sjekker heltallsverdiene rundt der de to grafene krysser hverandre (synlig på grafen ca. ved $x \approx 11{,}7$):

| $x$ | År | $P(x)$ | $D(x)$ | $D > P$? |
|-----|----|--------|--------|----------|
| 11 | 2021 | $\approx 1202$ | $\approx 1113$ | Nei |
| 12 | 2022 | $\approx 1112$ | $\approx 1174$ | **Ja** |

I 2021 var det fortsatt flere papir­abonnenter enn digitale. I 2022 oversteg digitale abonnenter papir­abonnenter for første gang.

**$\underline{\underline{2022}}$ var første år da flere abonnerte digitalt enn på papir.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/stjernens-areal-med-arealsetningen/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Stjernens areal med arealsetningen

![Stjerne satt sammen av 12 like store likesidede trekanter](/img/user/_resources/1t-h24-2-2.jpeg){width=45%}

Maria skal lage en stjerne ved å sette sammen 12 like store likesidede trekanter. Lengdene av sidekantene i trekantene er 4.

Ved å bruke Pytagoras' setning og arealberegninger har Maria kommet fram til at arealet av stjernen vil bli $48\sqrt{3}$.

>[!oppgave]
>Vis at du kan komme fram til samme resultat ved å bruke trigonometri.

## Fasit

**Arealet av stjernen er $\underline{\underline{48\sqrt{3}}}$.**

## Løsningsforslag

Stjernen er satt sammen av 12 like store likesidede trekanter med sidelengde 4.

En likesidet trekant har alle vinkler lik $60°$. Vi bruker arealsetningen på én trekant, der to sider er $a = b = 4$ og den innesluttede vinkelen er $C = 60°$:

$$A_{\triangle} = \frac{1}{2} \cdot a \cdot b \cdot \sin C = \frac{1}{2} \cdot 4 \cdot 4 \cdot \sin 60°$$

Det totale arealet av stjernen er 12 slike trekanter:

$$A_{\text{stjerne}} = 12 \cdot \frac{1}{2} \cdot 4 \cdot 4 \cdot \sin 60°$$

CAS-beregning bekrefter:

![CAS-utregning: 12·(1/2)·4·4·sin(60°) = 48√3](/img/user/_resources/1t-h24-2-2.png)

**Arealet av stjernen er $\underline{\underline{48\sqrt{3}}}$.**


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/rasjonal-funksjon-fra-asymptoter-og-nullpunkt/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Rasjonal funksjon fra asymptoter og nullpunkt

En rasjonal funksjon $f$ har asymptotene $x = 2$ og $y = 4$.
Nullpunktet til funksjonen er $x = -3$.

>[!oppgave]
>Bestem et mulig funksjonsuttrykk $f(x)$.
>Gjør rede for hvordan du har tenkt for å komme fram til funksjonsuttrykket.

## Fasit

$$\underline{\underline{f(x) = \frac{4(x+3)}{x-2}}}$$

## Løsningsforslag

En rasjonal funksjon kan alltid skrives på formen

$$f(x) = \frac{a(x - x_0)}{x - x_1}$$

der $x_0$ er nullpunktet, $x_1$ gir den vertikale asymptoten, og $a$ bestemmer den horisontale asymptoten.

**Vertikal asymptote $x = 2$:** Nevneren er null når $x = 2$, så nevneren har faktoren $(x - 2)$.

**Nullpunkt $x = -3$:** Telleren er null når $x = -3$, så telleren har faktoren $(x + 3)$.

Funksjonen er dermed

$$f(x) = \frac{a(x+3)}{x-2}$$

**Horisontal asymptote $y = 4$:** Når $x \to \pm\infty$ dominerer de ledende leddene:

$$f(x) = \frac{a(x+3)}{x-2} \approx \frac{ax}{x} = a$$

Vi trenger $a = 4$.

**Funksjonsuttrykket blir:**

$$\underline{\underline{f(x) = \frac{4(x+3)}{x-2}}}$$

**Verifikasjon:**
- $f(-3) = \frac{4 \cdot 0}{-3-2} = 0$ — nullpunkt i $x = -3$ ✓
- $f(2)$: nevner $= 0$ — vertikal asymptote i $x = 2$ ✓
- $f(x) \to 4$ når $x \to \pm\infty$ — horisontal asymptote $y = 4$ ✓

Grafen nedenfor viser begge grenene av $f$, de stiplede asymptotene og nullpunktet $(-3, 0)$:

![Rasjonal funksjon med asymptoter og nullpunkt](/img/user/_resources/1t-h24-2-3.png)


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/programmer-fakultet-og-forklar-nuller-i-100/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Programmer fakultet og forklar nuller i 100!

$n!$ leses som «$n$ fakultet» og er produktet av de naturlige tallene fra og med 1 til og med $n$. Se eksemplene nedenfor.

$$
\begin{aligned}
1! &= 1 \\
2! &= 1 \cdot 2 \\
3! &= 1 \cdot 2 \cdot 3 \\
4! &= 1 \cdot 2 \cdot 3 \cdot 4 \\
5! &= 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \\
&\ldots
\end{aligned}
$$

>[!oppgave]
>a) Lag et program som kan regne ut $n!$ for et gitt naturlig tall $n$.
>Bruk programmet til å regne ut $5!$, $10!$ og $15!$.

$100!$ er et produkt av 100 faktorer, $1 \cdot 2 \cdot 3 \cdot 4 \cdot \ldots \cdot 99 \cdot 100$.

>[!oppgave]
>b) Gjør rede for hvilke faktorer som gjør at det er 24 nuller i slutten av tallet $100!$.

## Fasit

a) Se program under. $5! = 120$, $10! = 3\,628\,800$, $15! = 1\,307\,674\,368\,000$.

b) **$\underline{\underline{24}}$ sluttende nuller i $100!$**

## Løsningsforslag

### a

Vi lager en funksjon `fakultet(n)` som starter med $f = 1$ og multipliserer med hvert tall fra 1 til og med $n$ i en løkke:

```python
def fakultet(n):
    f = 1
    for i in range(1, n + 1):
        f = f * i
    return f

print(fakultet(5))   # 120
print(fakultet(10))  # 3628800
print(fakultet(15))  # 1307674368000
```

Programmet gir

$$
5! = \underline{\underline{120}}, \qquad 10! = \underline{\underline{3\,628\,800}}, \qquad 15! = \underline{\underline{1\,307\,674\,368\,000}}.
$$

### b

En sluttende null oppstår fordi $10 = 2 \cdot 5$. Antall sluttende nuller i $100!$ er derfor lik antall ganger vi kan skrive $10$ som en faktor i produktet $1 \cdot 2 \cdot 3 \cdot \ldots \cdot 100$, det vil si $\min(\text{antall faktorer 2},\ \text{antall faktorer 5})$.

**Faktorer 2** forekommer langt oftere enn faktorer 5 (hvert partall bidrar med minst én faktor 2), så det avgjørende er **antall faktorer 5**.

Vi teller faktorer 5 i $100!$ ved å se hvilke tall som bidrar:

- Multipler av $5$ (gir minst én faktor 5 hver): $\left\lfloor \dfrac{100}{5} \right\rfloor = 20$ stykker.
- Multipler av $25 = 5^2$ (gir én *ekstra* faktor 5 hver): $\left\lfloor \dfrac{100}{25} \right\rfloor = 4$ stykker.
- Multipler av $125 = 5^3$: $\left\lfloor \dfrac{100}{125} \right\rfloor = 0$ stykker.

Totalt antall faktorer 5:

$$
20 + 4 = 24.
$$

Siden det er minst 24 faktorer 2 (faktisk mange flere), kan vi danne nøyaktig $24$ par $(2 \cdot 5) = 10$.

**$100!$ har derfor $\underline{\underline{24}}$ sluttende nuller.**


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tredjegradsfunksjon-fra-punkt-toppunkt-og-tangent/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tredjegradsfunksjon fra punkt, toppunkt og tangent

Du får vite følgende om en tredjegradsfunksjon $f$ gitt ved

$$f(x) = a \cdot x^3 + b \cdot x^2 + c \cdot x + d$$

- Grafen til $f$ går gjennom punktet $(2,\ 6)$.
- Punktet $(-2,\ 8)$ er et toppunkt på grafen til $f$.
- Tangenten til grafen til $f$ i punktet $(3,\ f(3))$ har stigningstall 4.

>[!oppgave]
>Bruk opplysningene ovenfor til å bestemme $a$, $b$, $c$ og $d$.

## Fasit

$$\underline{\underline{f(x) = \frac{3}{20}x^3 + \frac{7}{40}x^2 - \frac{11}{10}x + \frac{63}{10}}}$$

## Løsningsforslag

Vi kjenner $f(x) = ax^3 + bx^2 + cx + d$ og $f'(x) = 3ax^2 + 2bx + c$.

De tre opplysningene gir fire likninger (toppunktet gir to — ett fra $f$-verdien og ett fra at den deriverte er null):

$$\textcolor{steelblue}{f(2) = 6:} \quad 8a + 4b + 2c + d = 6$$

$$\textcolor{seagreen}{f(-2) = 8:} \quad {-8a} + 4b - 2c + d = 8$$

$$\textcolor{seagreen}{f'(-2) = 0:} \quad 12a - 4b + c = 0$$

$$\textcolor{tomato}{f'(3) = 4:} \quad 27a + 6b + c = 4$$

Vi løser likningssystemet i GeoGebra CAS:

![GeoGebra CAS — likningssystem og løsning](/img/user/_resources/1t-h24-2-5.png)

CAS gir:

$$a = \frac{3}{20}, \quad b = \frac{7}{40}, \quad c = -\frac{11}{10}, \quad d = \frac{63}{10}$$

Dermed er

$$\underline{\underline{f(x) = \frac{3}{20}x^3 + \frac{7}{40}x^2 - \frac{11}{10}x + \frac{63}{10}}}$$


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/areal-av-firkant-abcd-med-trigonometri/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Areal av firkant ABCD med trigonometri

Klassen til Isabel og Anniken skal vise at de kan bruke trigonometri for å bestemme arealet av figuren nedenfor.

![Firkant $ABCD$ med $AB = 8{,}0$ og $DC = 12{,}0$](/img/user/_resources/1t-h24-2-6.jpeg){width=55%}

Læreren har delt klassen i grupper og gitt hver gruppe noen opplysninger i tillegg til informasjonen som kan leses ut fra figuren.

Gruppen til Isabel har fått vite at $AD = 6{,}0$, $BC = 10{,}0$ og at diagonalen $AC = 16{,}4$.

>[!oppgave]
>a) Vis hvordan gruppen til Isabel kan bestemme arealet ved å bruke opplysningene de har tilgang til. Husk å gjøre rede for hvilke trigonometriske sammenhenger du bruker.

Gruppen til Anniken har fått vite at $\angle A = 62{,}5\degree$, $\angle C = 38{,}3\degree$, $\angle ABD = 45{,}5\degree$ og $\angle CBD = 85{,}5\degree$.

>[!oppgave]
>b) Vis hvordan gruppen til Anniken kan bestemme arealet ved å bruke opplysningene de har tilgang til. Husk å gjøre rede for hvilke trigonometriske sammenhenger du bruker.

## Fasit

a) $\underline{\underline{\text{Areal} \approx 58{,}5 \, \mathrm{m}^2}}$

b) $\underline{\underline{\text{Areal} \approx 58{,}5 \, \mathrm{m}^2}}$

## Løsningsforslag

Utregningene er gjort i GeoGebra CAS:

![GeoGebra CAS-utregning for begge deloppgavene](/img/user/_resources/1t-h24-2-6.png)

### a

Vi deler firkanten $ABCD$ i to trekanter ved å trekke diagonalen $AC$.

**Trekant $ABC$ — finn $\angle B$ med cosinussetningen:**

Vi kjenner alle tre sidene $AB = 8{,}0$, $BC = 10{,}0$ og $AC = 16{,}4$, og bruker cosinussetningen til å finne $\angle ABC$:

$$\cos(\angle B) = \frac{AB^2 + BC^2 - AC^2}{2 \cdot AB \cdot BC} = \frac{64 + 100 - 268{,}96}{160} \approx -0{,}656$$

$$\angle B \approx 131{,}0\degree$$

**Areal av $\triangle ABC$ med arealsetningen:**

$$T_{ABC} = \frac{1}{2} \cdot AB \cdot BC \cdot \sin(\angle B) = \frac{1}{2} \cdot 8{,}0 \cdot 10{,}0 \cdot \sin(131{,}0\degree) \approx 30{,}2$$

**Trekant $ACD$ — finn $\angle D$ med cosinussetningen:**

Vi kjenner $AD = 6{,}0$, $DC = 12{,}0$ og $AC = 16{,}4$:

$$\cos(\angle D) = \frac{AD^2 + DC^2 - AC^2}{2 \cdot AD \cdot DC} = \frac{36 + 144 - 268{,}96}{144} \approx -0{,}618$$

$$\angle D \approx 128{,}2\degree$$

**Areal av $\triangle ACD$ med arealsetningen:**

$$T_{ACD} = \frac{1}{2} \cdot AD \cdot DC \cdot \sin(\angle D) = \frac{1}{2} \cdot 6{,}0 \cdot 12{,}0 \cdot \sin(128{,}2\degree) \approx 28{,}3$$

**Totalt areal:**

$$T_{ABCD} = T_{ABC} + T_{ACD} \approx 30{,}2 + 28{,}3 \approx \underline{\underline{58{,}5 \, \mathrm{m}^2}}$$

### b

Vi deler firkanten $ABCD$ i to trekanter ved å trekke diagonalen $BD$.

**Trekant $ABD$ — finn $BD$ med sinussetningen:**

Vinklene i $\triangle ABD$ er $\angle A = 62{,}5\degree$, $\angle ABD = 45{,}5\degree$, og dermed:

$$\angle ADB = 180\degree - 62{,}5\degree - 45{,}5\degree = 72{,}0\degree$$

Vi bruker sinussetningen med den kjente siden $AB = 8{,}0$:

$$\frac{BD}{\sin(\angle A)} = \frac{AB}{\sin(\angle ADB)} \implies BD = \frac{8{,}0 \cdot \sin(62{,}5\degree)}{\sin(72{,}0\degree)} \approx 7{,}46$$

**Areal av $\triangle ABD$ med arealsetningen:**

$$T_{ABD} = \frac{1}{2} \cdot AB \cdot BD \cdot \sin(\angle ABD) = \frac{1}{2} \cdot 8{,}0 \cdot 7{,}46 \cdot \sin(45{,}5\degree) \approx 21{,}3$$

**Trekant $BCD$ — finn $\angle BDC$:**

Vinklene er $\angle C = 38{,}3\degree$, $\angle CBD = 85{,}5\degree$, og dermed:

$$\angle BDC = 180\degree - 38{,}3\degree - 85{,}5\degree = 56{,}2\degree$$

**Areal av $\triangle BCD$ med arealsetningen:**

$$T_{BCD} = \frac{1}{2} \cdot BD \cdot DC \cdot \sin(\angle BDC) = \frac{1}{2} \cdot 7{,}46 \cdot 12{,}0 \cdot \sin(56{,}2\degree) \approx 37{,}2$$

**Totalt areal:**

$$T_{ABCD} = T_{ABD} + T_{BCD} \approx 21{,}3 + 37{,}2 \approx \underline{\underline{58{,}5 \, \mathrm{m}^2}}$$


</div></div>


## Oppgave 2-7


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/optimalisering-av-gronnsakhage-med-100-m-gjerde/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Optimalisering av grønnsakhage med 100 m gjerde

![Grønnsakhage med rektangel ($x \times y$) og to likebeinte rettvinklede trekanter med kateter $x$](/img/user/_resources/1t-h24-2-7.jpeg){width=70%}

Else skal gjerde inn tre områder for å lage en grønnsakhage. Det største området skal ha form som et rektangel og de to minste som likebeinte rettvinklede trekanter. Se figuren ovenfor.

Else skal sette opp gjerde langs alle linjestykkene vist på figuren ovenfor.
Hun har til sammen 100 m gjerde som hun vil bruke.

>[!oppgave]
>a) Hvor stort blir arealet av grønnsakhagen dersom hun velger at katetene i trekantene skal være 8 meter?
>b) Lag en oversikt som viser hvordan arealet av grønnsakhagen endrer seg dersom hun velger andre lengder på katetene. Av oversikten skal Else kunne se omtrent hvor lange katetene må være for at arealet av grønnsakhagen skal bli størst mulig.
>c) Lag en modell $A$ som Else kan bruke for å regne ut arealet $A(x)$ av grønnsakhagen for ulike verdier av $x$.
>d) Bruk modellen til å finne den lengden av katetene som vil gi det største arealet.
>e) Bestem modellens gyldighetsområde.

## Fasit

a) $\underline{\underline{A \approx 245{,}5 \, \mathrm{m}^2}}$

b) Tabellen viser at maksimum er rundt $x \approx 10$–$11 \, \mathrm{m}$.

c) $\underline{\underline{A(x) = 50x - x^2(1 + \sqrt{2})}}$

d) $\underline{\underline{x = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}}}$, maksimalt areal $\underline{\underline{A = 625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2}}$

e) $\underline{\underline{0 < x < 25(2-\sqrt{2}) \approx 14{,}6}}$

## Løsningsforslag

Vi lar $x$ være lengden på katetene i de to likebeinte rettvinklede trekantene, og $y$ være lengden på rektangelets lange side.

**Bibetingelse (totalt gjerde = 100 m):**

Gjerdet består av to lange rektangelsider ($2y$), to korte rektangelsider ($2x$) og per trekant: én ekstra katet ($x$) og én hypotenus. Hypotenusen i en likebeint rettvinklet trekant med kateter $x$ er $x\sqrt{2}$ (Pytagoras). Siden den delte kateten allerede er telt som rektangelets korte side, bidrar hver trekant med $x + x\sqrt{2}$ ekstra til gjerdet:

$$2y + 2x + 2(x + x\sqrt{2}) = 100$$

$$2y + 4x + 2x\sqrt{2} = 100 \implies y = 50 - 2x - x\sqrt{2}$$

### a

Vi setter $x = 8$:

$$y = 50 - 2 \cdot 8 - 8\sqrt{2} = 34 - 8\sqrt{2} \approx 22{,}69 \, \mathrm{m}$$

Arealet av rektangelet:

$$A_{\text{rekt}} = x \cdot y = 8(34 - 8\sqrt{2}) = 272 - 64\sqrt{2} \, \mathrm{m}^2$$

Arealet av to likebeinte rettvinklede trekanter med kateter $x$:

$$A_{\text{trek}} = 2 \cdot \frac{1}{2} \cdot x \cdot x = x^2 = 64 \, \mathrm{m}^2$$

Totalt areal:

$$A = (272 - 64\sqrt{2}) + 64 = 336 - 64\sqrt{2} \approx \mathbf{\underline{\underline{245{,}5 \, \mathrm{m}^2}}}$$

### b

Vi beregner $A(x) = 50x - x^2(1+\sqrt{2})$ for ulike verdier av $x$:

| $x$ (m) | $A(x)$ (m²) |
|---------|------------|
| 1       | 47,6        |
| 5       | 189,6       |
| 8       | 245,5       |
| 10      | 258,6       |
| 11      | 257,9       |
| 12      | 252,4       |
| 14      | 226,8       |

Av tabellen ser vi at arealet er størst rundt $x \approx 10$ m.

### c

En likebeint rettvinklet trekant med kateter $x$ har areal $\frac{x^2}{2}$. To slike trekanter gir samlet areal $x^2$.

Med bibetingelsen $y = 50 - 2x - x\sqrt{2}$ blir det totale arealet:

$$A(x) = x \cdot y + x^2 = x(50 - 2x - x\sqrt{2}) + x^2$$

$$= 50x - 2x^2 - x^2\sqrt{2} + x^2$$

$$\underline{\underline{A(x) = 50x - x^2(1 + \sqrt{2})}}$$

### d

Vi bruker CAS til å finne $A'(x)$ og løse $A'(x) = 0$:

![GeoGebra CAS: A(x), A'(x), løsning og maksimumsverdi](/img/user/_resources/1t-h24-2-7-cas.png)

CAS gir:

$$A'(x) = 50 - 2x(1 + \sqrt{2})$$

$$A'(x) = 0 \implies x = \frac{25}{1 + \sqrt{2}} = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}$$

(rasjonalisert ved å gange med $\frac{\sqrt{2}-1}{\sqrt{2}-1}$)

Maksimalt areal:

$$A_{\max} = 625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2$$

Siden $A'(x) > 0$ for $x < 25(\sqrt{2}-1)$ og $A'(x) < 0$ for $x > 25(\sqrt{2}-1)$, er dette et maksimum.

Grafen bekrefter resultatet:

![Graf av $A(x) = 50x - x^2(1+\sqrt{2})$ med toppunkt Maks $\approx (10{,}36;\, 258{,}9)$](/img/user/_resources/1t-h24-2-7.png)

**Katetlengden $x = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}$ gir størst areal på $625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2$.**

### e

For at modellen skal gi mening må både $x > 0$ og $y > 0$:

$$y = 50 - 2x - x\sqrt{2} > 0 \implies x < \frac{50}{2 + \sqrt{2}} = 25(2-\sqrt{2}) \approx 14{,}6 \, \mathrm{m}$$

Gyldighetsområdet er:

$$\underline{\underline{0 < x < 25(2-\sqrt{2})}} \quad \text{(dvs. } x \in \langle 0,\, 25(2-\sqrt{2}) \rangle \text{)}$$


</div></div>


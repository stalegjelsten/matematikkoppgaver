---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"v23","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2023","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r2-eksamen-v2023/","permalink":"/eksamener/r2-eksamen-v2023/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"v23","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2023","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [To bestemte integraler](https://matematikkoppgaver.vercel.app/to-bestemte-integraler/) | integral | × |
| [1-2](#oppgave-1-2) | [Tangens, derivert og integral](https://matematikkoppgaver.vercel.app/tangens-derivert-og-integral/) | trigonometri, derivasjon, integral | × |
| [1-3](#oppgave-1-3) | [Pyramide med fire punkter i rommet](https://matematikkoppgaver.vercel.app/pyramide-med-fire-punkter-i-rommet/) | vektorer, geometri, volum, areal | × |
| [1-4](#oppgave-1-4) | [Sum av aritmetisk rekke med kode](https://matematikkoppgaver.vercel.app/sum-av-aritmetisk-rekke-med-kode/) | programmering, rekker | × |
| [1-5](#oppgave-1-5) | [Bevis for grenseverdien til sin v delt på v](https://matematikkoppgaver.vercel.app/bevis-for-grenseverdien-til-sin-v-delt-pa-v/) | grenseverdi, trigonometri, bevis | × |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Regresjon på størrelsen av det norske musikkstrømmemarkedet](https://matematikkoppgaver.vercel.app/regresjon-pa-storrelsen-av-det-norske-musikkstrommemarkedet/) | regresjon, logistisk funksjon, derivasjon, funksjoner, tolkning av integraler, integral, samlet mengde | ✔︎ |
| [2-2](#oppgave-2-2) | [Parallelle plan og kule](https://matematikkoppgaver.vercel.app/parallelle-plan-og-kule/) | vektorer, geometri | × |
| [2-3](#oppgave-2-3) | [Banefart til 3D-printer](https://matematikkoppgaver.vercel.app/banefart-til-3-d-printer/) | vektorer, derivasjon | × |
| [2-4](#oppgave-2-4) | [Hildegunns ukepenger](https://matematikkoppgaver.vercel.app/hildegunns-ukepenger/) | excel, rekker, aritmetisk rekke, geometrisk rekke | ✔︎ |
| [2-5](#oppgave-2-5) | [Omdreiingslegeme til trigonometrisk funksjon](https://matematikkoppgaver.vercel.app/omdreiingslegeme-til-trigonometrisk-funksjon/) | integral, omdreiningslegeme, trigonometri | × |
| [2-6](#oppgave-2-6) | [Grafens lengde med polylinje](https://matematikkoppgaver.vercel.app/grafens-lengde-med-polylinje/) | integral, programmering | × |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/to-bestemte-integraler/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# To bestemte integraler

Regn ut integralene

>[!oppgave]
>a) $\int_{-1}^{1} (4x^3 - x) \, dx$
>b) $\int_{0}^{\ln 2} e^{2x} \, dx$

## Fasit

a) $\underline{\underline{0}}$

b) $\underline{\underline{\dfrac{3}{2}}}$

## Løsningsforslag

### a

Integranden $f(x) = 4x^3 - x$ er en odde funksjon, siden

$$f(-x) = 4(-x)^3 - (-x) = -4x^3 + x = -f(x)$$

Integralet av en odde funksjon over et symmetrisk intervall $[-a, a]$ er alltid null. Derfor er

$$\int_{-1}^{1} (4x^3 - x) \, \mathrm{d}x = \textbf{0}$$

Alternativt kan vi beregne direkte. En antiderivert er $F(x) = x^4 - \dfrac{x^2}{2}$, og

$$\left[ x^4 - \frac{x^2}{2} \right]_{-1}^{1} = \left(1 - \frac{1}{2}\right) - \left(1 - \frac{1}{2}\right) = \frac{1}{2} - \frac{1}{2} = \underline{\underline{0}}$$

### b

En antiderivert av $e^{2x}$ er $\dfrac{e^{2x}}{2}$. Vi får

$$\int_{0}^{\ln 2} e^{2x} \, \mathrm{d}x = \left[ \frac{e^{2x}}{2} \right]_{0}^{\ln 2} = \frac{e^{2\ln 2}}{2} - \frac{e^{0}}{2}$$

Siden $e^{2\ln 2} = e^{\ln 4} = 4$, blir dette

$$= \frac{4}{2} - \frac{1}{2} = 2 - \frac{1}{2} = \underline{\underline{\frac{3}{2}}}$$

</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/tangens-derivert-og-integral/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Tangens, derivert og integral

>[!oppgave]
>a) Vis at dersom $f(x) = \tan x$, så er $f'(x) = 1 + \tan^2 x$.
>b) Regn ut
>$$\int \frac{1 + \tan^2 x}{\tan x} \, dx$$

## Fasit

a) $f'(x) = \dfrac{1}{\cos^2 x} = 1 + \tan^2 x$

b) $\underline{\underline{\ln|\tan x| + C}}$

## Løsningsforslag

### a

Vi skriver $f(x) = \tan x = \dfrac{\sin x}{\cos x}$ og bruker **kvotientregelen**
$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$
med $u = \sin x$, $u' = \cos x$, $v = \cos x$, $v' = -\sin x$:

$$f'(x) = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}
= \frac{\cos^2 x + \sin^2 x}{\cos^2 x}$$

Siden $\cos^2 x + \sin^2 x = 1$ (Pytagoreisk identitet) får vi

$$f'(x) = \frac{1}{\cos^2 x}$$

Vi kan også skrive dette som

$$\frac{1}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = 1 + \frac{\sin^2 x}{\cos^2 x} = 1 + \tan^2 x$$

Dermed er $\mathbf{f'(x) = 1 + \tan^2 x}$. $\square$

### b

Vi kjenner igjen telleren fra del a): $f'(x) = 1 + \tan^2 x$ er den deriverte av $\tan x$.

Vi bruker **substitusjonen** $u = \tan x$, som gir $\mathrm{d}u = (1 + \tan^2 x)\,\mathrm{d}x$:

$$\int \frac{1 + \tan^2 x}{\tan x}\,\mathrm{d}x = \int \frac{\mathrm{d}u}{u} = \ln|u| + C = \underline{\underline{\ln|\tan x| + C}}$$

</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/pyramide-med-fire-punkter-i-rommet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Pyramide med fire punkter i rommet

Punktene $A(0,0,0)$, $B(5,0,0)$, $C(4,2,0)$ og $T(0,0,5)$ danner en pyramide, slik figuren viser.

![Pyramide med punktene A, B, C og T](/img/user/_resources/r2-v23-1-3.jpeg){width=60%}

>[!oppgave]
>a) Regn ut volumet av pyramiden.
>b) Regn ut arealet av $\triangle BCT$.
>c) Bestem avstanden fra $A$ til planet som går gjennom $B$, $C$ og $T$.

## Fasit

a) $\underline{\underline{V = \dfrac{25}{3}}}$

b) $\underline{\underline{A = \dfrac{15}{2}}}$

c) $\underline{\underline{h = \dfrac{10}{3}}}$

## Løsningsforslag

Vi setter opp vektorene fra $A$:

$$\vec{AB} = (5, 0, 0), \quad \vec{AC} = (4, 2, 0), \quad \vec{AT} = (0, 0, 5)$$

### a

Volumet av en tetraeder (pyramide med tre kanter fra samme hjørne) er

$$V = \frac{1}{6} \left| \vec{AB} \cdot \left( \vec{AC} \times \vec{AT} \right) \right|$$

Vi beregner først kryssproduktert $\vec{AC} \times \vec{AT}$:

$$\vec{AC} \times \vec{AT} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 4 & 2 & 0 \\ 0 & 0 & 5 \end{vmatrix} = (2 \cdot 5 - 0 \cdot 0,\ 0 \cdot 0 - 4 \cdot 5,\ 4 \cdot 0 - 2 \cdot 0) = (10, -20, 0)$$

Deretter skalarproduktet:

$$\vec{AB} \cdot (10, -20, 0) = 5 \cdot 10 + 0 \cdot (-20) + 0 \cdot 0 = 50$$

Volumet blir:

$$V = \frac{1}{6} \cdot |50| = \frac{50}{6} = \mathbf{\underline{\underline{\dfrac{25}{3}}}}$$

### b

Vi setter opp vektorene fra $B$:

$$\vec{BC} = C - B = (4-5,\ 2-0,\ 0-0) = (-1, 2, 0)$$

$$\vec{BT} = T - B = (0-5,\ 0-0,\ 5-0) = (-5, 0, 5)$$

Kryssprodukt:

$$\vec{BC} \times \vec{BT} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -1 & 2 & 0 \\ -5 & 0 & 5 \end{vmatrix} = (2 \cdot 5 - 0 \cdot 0,\ 0 \cdot (-5) - (-1) \cdot 5,\ (-1) \cdot 0 - 2 \cdot (-5)) = (10, 5, 10)$$

Lengden:

$$|\vec{BC} \times \vec{BT}| = \sqrt{10^2 + 5^2 + 10^2} = \sqrt{100 + 25 + 100} = \sqrt{225} = 15$$

Arealet av $\triangle BCT$ er halvparten av dette:

$$A = \frac{1}{2} \cdot 15 = \mathbf{\underline{\underline{\dfrac{15}{2}}}}$$

### c

Vi bruker sammenhengen mellom volumet, grunnflaten og høyden i en pyramide:

$$V = \frac{1}{3} \cdot A \cdot h$$

Her er $A = \dfrac{15}{2}$ arealet av grunnflaten $\triangle BCT$ og $h$ er avstanden fra $A$ til dette planet. Vi løser for $h$:

$$\frac{25}{3} = \frac{1}{3} \cdot \frac{15}{2} \cdot h$$

$$h = \frac{25/3}{1/3 \cdot 15/2} = \frac{25/3}{15/6} = \frac{25}{3} \cdot \frac{6}{15} = \frac{25 \cdot 6}{3 \cdot 15} = \frac{150}{45} = \mathbf{\underline{\underline{\dfrac{10}{3}}}}$$

</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sum-av-aritmetisk-rekke-med-kode/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sum av aritmetisk rekke med kode

En elev har skrevet følgende kode:

```python ln
a = 3
d = 4

N = 10
S = 0

for i in range(N):
    S = S + a
    a = a + d

print(S)
```

>[!oppgave]
>a) Forklar hva eleven ønsker å regne ut.
>b) Hva blir resultatet når programmet kjøres, dersom N settes til 100 i linje 4?

## Fasit

a) Programmet beregner summen av de 10 første leddene i en aritmetisk rekke med $a_1 = 3$ og $d = 4$. **$\underline{\underline{S_{10} = 210}}$**

b) **$\underline{\underline{S_{100} = 20100}}$**

## Løsningsforslag

### a

Variabelen `a` starter på 3 og variabelen `d` er lik 4. I løkken legges den gjeldende verdien av `a` til summen `S`, deretter økes `a` med `d`. Etter iterasjon $i$ (teller fra 0) er leddet som ble lagt til $a_{i+1} = 3 + i \cdot 4$.

Det betyr at programmet legger til leddene $3,\ 7,\ 11,\ 15,\ \ldots$ — altså leddene i en aritmetisk rekke med

$$a_1 = 3, \qquad d = 4.$$

For $N = 10$ beregner programmet summen av de 10 første leddene.

Det siste leddet er

$$a_{10} = 3 + (10-1) \cdot 4 = 3 + 36 = 39.$$

Summen av en aritmetisk rekke er

$$S_n = \frac{a_1 + a_n}{2} \cdot n.$$

Vi får

$$S_{10} = \frac{3 + 39}{2} \cdot 10 = \frac{42}{2} \cdot 10 = 21 \cdot 10 = \textbf{\underline{\underline{210}}}.$$

### b

For $N = 100$ beregner programmet summen av de 100 første leddene. Det siste leddet er

$$a_{100} = 3 + (100-1) \cdot 4 = 3 + 396 = 399.$$

Summen blir

$$S_{100} = \frac{3 + 399}{2} \cdot 100 = \frac{402}{2} \cdot 100 = 201 \cdot 100 = \textbf{\underline{\underline{20100}}}.$$

</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bevis-for-grenseverdien-til-sin-v-delt-pa-v/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bevis for grenseverdien til sin v delt på v

I denne oppgaven skal du vise at $\lim_{v \to 0^+} \dfrac{\sin v}{v} = 1$.

I figuren nedenfor er $AB = AD = 1$, og buen $BD$ er del av en sirkel med sentrum i $A$. Vi lar $\angle BAC = v$ (målt i radianer).

![Figur til grenseverdibevis](/img/user/_resources/r2-v23-1-5.jpeg){width=60%}

>[!oppgave]
>a) Bruk arealbetraktninger til å begrunne at
>$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v$$
>b) Forklar at dette gir oss
>$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}$$
>c) Bruk ulikhetene fra oppgave b til å begrunne at $\lim_{v \to 0^+} \dfrac{\sin v}{v} = 1$.

## Fasit

Se løsningsforslag.

## Løsningsforslag

### a

Vi ser på tre figurer som alle befinner seg innenfor sirkelen med sentrum $A$ og radius $1$, og sammenligner arealene.

**Trekant $ABD$.**
$DC$ er høyden fra $D$ ned til grunnlinjen $AB$. Siden $AD = 1$ og $\angle DAB = v$, er $|DC| = \sin v$. Grunnlinjen $|AB| = 1$, og arealet er

$$T_{\triangle ABD} = \frac{1}{2} \cdot 1 \cdot \sin v = \frac{1}{2}\sin v.$$

**Sirkelsektor $ABD$.**
En sektor med radius $r = 1$ og sentralvinkel $v$ (i radianer) har areal

$$T_{\text{sektor}} = \frac{1}{2}r^2 v = \frac{1}{2} \cdot 1^2 \cdot v = \frac{1}{2}v.$$

**Trekant $ABE$.**
La $E$ være punktet på linjen gjennom $A$ og $C$ slik at $BE \perp AB$. Da $AB = 1$ og $\angle BAE = v$, gir tangens at $|BE| = \tan v$. Arealet er

$$T_{\triangle ABE} = \frac{1}{2} \cdot 1 \cdot \tan v = \frac{1}{2}\tan v.$$

**Innklusjonen av figurene.**
Trekant $ABD$ er en delfigur av sektoren (alle punkter i trekanten ligger innenfor sektoren), og sektoren er en delfigur av trekant $ABE$ (buen $BD$ er kortere enn siden $BE$). Derfor gjelder:

$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v. \qquad \square$$

### b

Vi starter fra ulikheten i a:

$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v.$$

For $0 < v < \dfrac{\pi}{2}$ er $\sin v > 0$, så vi kan dele alle ledd med $\dfrac{1}{2}\sin v$ (positivt, ulikhetstegnene bevares):

$$1 < \frac{v}{\sin v} < \frac{\tan v}{\sin v}.$$

Vi forenkler høyre side:

$$\frac{\tan v}{\sin v} = \frac{\dfrac{\sin v}{\cos v}}{\sin v} = \frac{1}{\cos v}.$$

Dermed:

$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}. \qquad \square$$

### c

Fra b har vi for $0 < v < \dfrac{\pi}{2}$:

$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}.$$

Vi tar grenseverdien når $v \to 0^+$ i ytterleddet:

$$\lim_{v \to 0^+} 1 = 1 \qquad \text{og} \qquad \lim_{v \to 0^+} \frac{1}{\cos v} = \frac{1}{\cos 0} = \frac{1}{1} = 1.$$

Begge yttergrensene er $1$, og $\dfrac{v}{\sin v}$ er klemt mellom dem. Av **skviseteoremet** (sandwich-teoremet) følger det at

$$\lim_{v \to 0^+} \frac{v}{\sin v} = 1.$$

Siden $\dfrac{v}{\sin v} \neq 0$ i en omegn av $0$, kan vi ta den gjensidige verdien:

$$\lim_{v \to 0^+} \frac{\sin v}{v} = \frac{1}{1} = \underline{\underline{1}}. \qquad \square$$

</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/regresjon-pa-storrelsen-av-det-norske-musikkstrommemarkedet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Regresjon på størrelsen av det norske musikkstrømmemarkedet

Tabellen nedenfor viser hvor mange millioner kroner som ble brukt på strømming av musikk i Norge noen år i perioden 2008-2018.

| År        | 2008 | 2010 | 2012 | 2014 | 2016 | 2018 |
| --------- |:----:|:----:|:----:|:----:|:----:|:----:|
| Strømming |  2   |  70  | 246  | 456  | 582  | 655  |

>[!oppgave]
>a) Lag en modell $F$ som du kan bruke til å bestemme hvor mange millioner kroner som ble brukt på strømming i Norge per år i perioden 2008-2018 og årene etterpå. Velg $x$-verdier slik at $F(0)$ gir hvor mange millioner kroner som ble brukt i 2008. Begrunn valget av modell.

Nedenfor ser du fire formler.

$$
I=\int_{-0{,}5}^{10{,}5} F(x) \mathrm{d} x, \quad G=\frac{1}{5} \int_{2{,}5}^{7{,}5} F(x) \mathrm{d} x, \quad S=\sum_{i=0}^{10} F(i), \quad D=\frac{F(5{,}001)-F(5)}{0{,}001}
$$

>[!oppgave]
>b) Bestem $I, G, S$ og $D$.

>[!oppgave]
>c) Gi en praktisk tolkning av svarene i oppgave b. 

## Fasit

Mange modeller og ulike tolkninger kan fungere. Se løsningsforslaget.

## Løsningsforslag

### a
Jeg brukte regresjonsverktøyet i GeoGebra valgte den logistiske modellen:

$$\underline{\underline{F(x)=\frac{660{,}37}{1+30{,}72\,e^{-0{,}7066x}}}}$$

Logistiske funksjoner flater ut ved en horisontal asymptote (i dette tilfellet 660,37 millioner kr). Selv om det kanskje høres usannsynlig ut at markedet for musikkstrømming ikke kommer til å vokse, så tror jeg at nærmest all musikklytting *allerede* er blitt flyttet fra formater som CD og nedlasting, til strømming. Derfor er det usannsynlig veksten kommer til å fortsette i samme tempo. En logistisk modell har også asymptote ved $y=0$. Det stemmer også godt med at strømmemarkedet var svært lite (kanskje ikke-eksisterende?) i Norge før Spotify ble lansert i 2008.

*Kommentar: Man kan også argumentere for andre regresjonsmodeller, f.eks. vil en tredjegradsmodell passe fint. Vær imidlertid klar over at tredjegradsmodellen sannsynligvis vil ha et mindre gyldighetsområde siden denne har negativ vekstfart både før 2008 og etter 2018. Sensorveiledninga sier at flere ulike modeller kan gi full uttelling så lenge de begrunnes godt.* 

![Regresjon på størrelsen av musikkmarkedet](/img/user/_resources/s2-v23-del2-oppg-2a.png){width=60%}

### b
Se utklippet fra CAS.

![Beregning av verdier i CAS](/img/user/_resources/s2-v23-del2-oppg-2b.png.png){width=40%}

$$
\begin{aligned}
I&=3729{,}0\\
G&=344{,}5\\
S&=3729{,}1\\
D&=116{,}3
\end{aligned}
$$

### c
$I$ beregner integralet under $F$ fra $x=-0{,}5$ til $x=10{,}5$. Dette gir en tilnærmingsverdi for de samlede inntektene fra musikkstrømming i Norge fra og med 2008 til og med 2018. De samlede inntektene er omtrent 3729 millioner kr.

$G$ finner en tilnærmingsverdi de samlede inntektene fra og med 2011 til og med 2015 ved å integrere, deretter divideres svaret med 5. $G$ finner altså de gjennomsnittlige årlige inntektene mellom år 2011 og 2015. De gjennomsnittlige årlige inntektene i perioden er 344,5 millioner kr.

$S$ gir oss de samlede inntektene fra 2008 til 2018 beregnet som summen av en rekke, altså ved å legge sammen inntektene i hvert år. De samlede inntektene i perioden er omtrent 3729 millioner kr.

$D$ gir oss omtrent momentan vekstfart i 2013. Vi kjenner igjen uttrykket for den deriverte hvor vi har $f'(x)=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$. Her er $x=5$ og $h=0{,}001$. Den momentane vekstfarten i 2013 er omtrent 116,3 millioner kr per år.


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/parallelle-plan-og-kule/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Parallelle plan og kule

Planet $\alpha$ er bestemt av punktene $A(1,0,3)$, $B(0,1,2)$ og $C(2,3,2)$.

>[!oppgave]
>a) Bestem en likning for planet $\beta$ som er parallelt med $\alpha$ og går gjennom punktet $P(2,-5,5)$.

En kule tangerer $\alpha$ i punktet $A$ og $\beta$ i et punkt $Q$.

>[!oppgave]
>b) Bestem eksakte verdier for koordinatene til $Q$.

## Fasit

a) $\underline{\underline{\beta\colon x - y - 2z + 3 = 0}}$

b) $\underline{\underline{Q = \left(\dfrac{4}{3},\, -\dfrac{1}{3},\, \dfrac{7}{3}\right)}}$

## Løsningsforslag

Vi bestemmer først en likning for planet $\alpha$ ved å finne normalvektoren.

**Normalvektor til $\alpha$**

Vi bruker GeoGebra CAS til å beregne $\vec{AB}$, $\vec{AC}$ og kryssprodukt:

```
A := (1, 0, 3)
B := (0, 1, 2)
C := (2, 3, 2)
AB := B - A          → AB := (-1, 1, -1)
AC := C - A          → AC := (1, 3, -1)
n := AB ⊗ AC         → n := (2, -2, -4)
```

![GeoGebra CAS – kryssprodukt, beta og Q](/img/user/_resources/r2-v23-2-2-parallelle-plan-kule.png)

Normalvektoren er $\vec{n} = (2, -2, -4)$, som vi forenkler til $\vec{n} = (1, -1, -2)$.

**Likning for $\alpha$**

Planet $\alpha$ har likning $x - y - 2z + d = 0$. Vi setter inn $A(1, 0, 3)$:

$$1 - 0 - 2 \cdot 3 + d = 0 \implies d = 5$$

$$\alpha\colon x - y - 2z + 5 = 0$$

### a

Planet $\beta$ er parallelt med $\alpha$, så det har samme normalvektor og likning på formen $x - y - 2z + d = 0$.

Vi setter inn $P(2, -5, 5)$ i GeoGebra CAS:

```
beta_d := Løs(2 - (-5) - 2*5 + d = 0, d)    → {d = 3}
```

$$\textbf{$\beta\colon$} \quad \underline{\underline{x - y - 2z + 3 = 0}}$$

### b

Kulen tangerer $\alpha$ i $A$ og $\beta$ i $Q$. Siden begge plan er parallelle og kulen tangerer begge, ligger sentrum midt mellom tangentpunktene på linjen gjennom $A$ med retning $\vec{n} = (1, -1, -2)$.

**Linjen gjennom $A$ med retning $\vec{n}$:**

$$\ell\colon \quad (x, y, z) = (1, 0, 3) + t(1, -1, -2) = (1+t,\; -t,\; 3-2t)$$

**Finn $Q$ på $\beta$:**

Vi setter linjeuttrykkene inn i likningen for $\beta$ i GeoGebra CAS:

```
Q_t := Løs((1 + t) - (-t) - 2*(3 - 2*t) + 3 = 0, t)    → {t = 1/3}
Q := (1 + 1/3, -1/3, 3 - 2/3)                           → Q := (4/3, -1/3, 7/3)
```

$$Q = \left(\frac{4}{3},\; -\frac{1}{3},\; \frac{7}{3}\right)$$

Vi kan verifisere at $Q$ ligger på $\beta$: $\frac{4}{3} - \left(-\frac{1}{3}\right) - 2 \cdot \frac{7}{3} + 3 = \frac{4}{3} + \frac{1}{3} - \frac{14}{3} + \frac{9}{3} = \frac{0}{3} = 0$. ✓

$$\underline{\underline{Q = \left(\frac{4}{3},\; -\frac{1}{3},\; \frac{7}{3}\right)}}$$

</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/banefart-til-3-d-printer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Banefart til 3D-printer

En fabrikk lager kroker ved hjelp av en 3D-printer. Posisjonen til dysen i 3D-printeren etter $t$ sekunder er gitt ved posisjonsvektoren

$$\vec{r}(t) = \left[1 + e^{\frac{t}{20}},\ 1 - \sin t,\ \frac{1}{10}e^{-2t+2} + \cos t\right], \quad t \in [0, 5]$$

Her er cm enheten langs aksene.

>[!oppgave]
>a) Bestem banefarten til 3D-printeren etter 1 sekund.
>b) Ved hvilket tidspunkt er banefarten lavest?
>c) Avgjør om fartsretningen noen gang er parallell med $xy$-planet eller parallell med $yz$-planet. Husk å begrunne svaret.

## Fasit

a) $\underline{\underline{v(1) \approx 1{,}17 \, \mathrm{cm/s}}}$

b) $\underline{\underline{v_{\min} \approx 1{,}00 \, \mathrm{cm/s} \text{ ved } t \approx 3{,}54 \, \mathrm{s}}}$

c) Fartsretningen er parallell med $xy$-planet én gang (ved $t \approx 3{,}14 \, \mathrm{s}$). Fartsretningen er aldri parallell med $yz$-planet.

## Løsningsforslag

Banefarten er størrelsen av hastighetsvektoren $\vec{r}'(t)$. Vi deriverer posisjonsvektoren komponentvis:

$$\vec{r}'(t) = \left[\frac{e^{t/20}}{20},\ -\cos t,\ -\frac{1}{5}e^{-2t+2} - \sin t\right]$$

Vi definerer disse komponentene i GeoGebra CAS som `vx`, `vy` og `vz`, og beregner banefarten som $|\vec{r}'(t)| = \sqrt{v_x^2 + v_y^2 + v_z^2}$.

### a

Vi setter inn $t = 1$ i komponentene og beregner banefarten:

$$v_x(1) = \frac{e^{1/20}}{20} \approx 0{,}0526$$

$$v_y(1) = -\cos 1 \approx -0{,}5403$$

$$v_z(1) = -\frac{e^{0}}{5} - \sin 1 = -0{,}2 - 0{,}8415 \approx -1{,}0415$$

![GeoGebra CAS: banefart ved t=1](/img/user/_resources/r2-v23-2-3-del-a.png)

Fra CAS-utklippet ser vi at

$$v(1) = \sqrt{v_x(1)^2 + v_y(1)^2 + v_z(1)^2} \approx \mathbf{\underline{\underline{1{,}17 \, \mathrm{cm/s}}}}$$

### b

Vi ønsker å finne minimumet til $v(t) = |\vec{r}'(t)|$ på intervallet $[0, 5]$. Vi definerer `fart(t)` i GeoGebra CAS og evaluerer ved det kjente minimumet $t \approx 3{,}542$:

![GeoGebra CAS: banefart ved t=3.542](/img/user/_resources/r2-v23-2-3-del-b.png)

CAS bekrefter at $v(3{,}542) \approx \mathbf{\underline{\underline{1{,}00 \, \mathrm{cm/s}}}}$.

Minimumet inntreffer ved $t \approx 3{,}54 \, \mathrm{s}$.

### c

**Parallell med $xy$-planet** betyr at fartsretningen ikke har noen $z$-komponent, altså $v_z(t) = 0$:

$$v_z(t) = -\frac{1}{5}e^{-2t+2} - \sin t = 0$$

Vi undersøker fortegnet til $v_z$ rundt $t = \pi \approx 3{,}1416$ i GeoGebra CAS:

![GeoGebra CAS: fortegnskifte for vz](/img/user/_resources/r2-v23-2-3-del-c.png)

Fra utklippet ser vi at

- $v_z(3{,}1416) \approx -0{,}00275 < 0$
- $v_z(3{,}1443) \approx 0$ (nullpunktet)
- $v_z(3{,}15) \approx 0{,}00569 > 0$

Siden $v_z$ skifter fortegn fra negativ til positiv i intervallet $[0, 5]$ (mellomverdisetningen garanterer et nullpunkt), er fartsretningen **parallell med $xy$-planet ved $t \approx 3{,}14 \, \mathrm{s}$**.

**Parallell med $yz$-planet** betyr at $x$-komponenten er null, altså $v_x(t) = 0$:

$$v_x(t) = \frac{e^{t/20}}{20}$$

Siden $e^{t/20} > 0$ for alle $t$, er $v_x(t) > 0$ for alle $t \in [0, 5]$. Det er **aldri** slik at fartsretningen er parallell med $yz$-planet.

</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hildegunns-ukepenger/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hildegunns ukepenger

Foreldrene til Hildegunn/David[^1] vil gi hen ukepenger. De gir hen to ulike tilbud. I tilbud 1 får hen 100 kroner den første uken. Beløpet $a_{n}$ som hen får i uke $n$, er gitt ved den rekursive formelen

$$
a_{n}=a_{n-1}+10
$$

I tilbud 2 får hen 100 kroner den første uken. Beløpet $b_{n}$ som hen får i uke $n$, er gitt ved den rekursive formelen

$$
b_{n}=b_{n-1} \cdot 1,05
$$

>[!oppgave]
>a) Bestem det ukentlige beløpet hen får de fire første ukene med hvert av de to tilbudene.
>b) Hvor mange uker tar det før tilbud 2 vil gi mer ukelønn enn tilbud 1?
>c) Hvor mange uker tar det før tilbud 2 til sammen vil gi mer lønn enn tilbud 1 ?

## Fasit

a) Den fjerde uka får hen 130 kr og 115,76 kr (de andre beløpene kan du se i løsningforslaget)
b) I den 28. uka
c) I den 39. uka

## Løsningsforslag

Jeg gjorde disse oppgavene i Excel, se regnearket under.

![](/img/user/_resources/s2-v23-del2-oppg-4a.png.png)

### a
De ukentlige beløpene for de fire første ukene er markert i blått i utklippet. Det venstre blå rektangelet viser beløpene for tilbud 1, det høyre blå rektangelet viser beløpene for tilbud 2. Vi kan se at tilbud 1 vokser fortere enn tilbud 2 i starten.

### b
**I uke 28 så vil tilbud 2 for første gang gi større utbetaling enn tilbud 1**, se den røde markering i Excel-arket.

### c
**I uke 39 så vil tilbud 2 for første gang ha gitt større *samlet utbetaling* enn tilbud 1**, se den gule markeringen i Excel-arket.

[^1]: Oppgaven er både gitt [[Fagsider/S2\|S2]] og [[Fagsider/R2\|R2]] ved eksamen våren 2023. I S2-eksamen het personen Hildegunn, og i R2-eksamen het personen David. Derfor bruker jeg pronomenen hen i denne oppgaven.


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/omdreiingslegeme-til-trigonometrisk-funksjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Omdreiingslegeme til trigonometrisk funksjon

Funksjonen $f$ er gitt ved

$$f(x) = \frac{2 - \cos x}{\sin x}, \quad D_f = \left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$$

Vi roterer grafen til $f$ om $x$-aksen.

![Omdreiingslegemet til f](/img/user/_resources/r2-v23-2-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem volumet av omdreiingslegemet vi da får.

Omdreiingslegemet skal plasseres i en rett kjegle med radius 4 og volum 45.

>[!oppgave]
>b) Avgjør om omdreiingslegemet får plass i kjeglen.

## Fasit

a) $\underline{\underline{V = \dfrac{-\pi^2 + 20\pi}{2} \approx 26{,}48}}$

b) **Nei**, omdreiingslegemet får ikke plass i kjeglen.

## Løsningsforslag

### a

Volumet av et omdreiingslegeme om $x$-aksen er gitt ved

$$V = \pi \int_a^b f(x)^2 \, \mathrm{d}x$$

Vi bruker GeoGebra CAS med kommandoen

```
Integral(pi * f(x)^2, x, pi/4, 3*pi/4)
```

![GeoGebra CAS – volum og analyse av f](/img/user/_resources/r2-v23-2-5-cas.png){width=60%}

CAS gir det eksakte svaret

$$V = \frac{-\pi^2 + 20\pi}{2} \approx \mathbf{26{,}48}$$

**Volumet av omdreiingslegemet er $\underline{\underline{V = \dfrac{-\pi^2 + 20\pi}{2} \approx 26{,}48}}$.**

### b

Vi må sjekke om omdreiingslegemet kan plasseres inne i kjeglen.

**Kjeglens høyde:** Volumet av en rett kjegle er $V_k = \dfrac{1}{3}\pi r^2 h$. Vi løser for $h$:

$$h = \frac{3 V_k}{\pi r^2} = \frac{3 \cdot 45}{\pi \cdot 4^2} = \frac{135}{16\pi} \approx 2{,}69$$

**Omdreiingslegemets ytterpunkter:** Vi har

$$f\!\left(\frac{\pi}{4}\right) = \frac{2 - \tfrac{\sqrt{2}}{2}}{\tfrac{\sqrt{2}}{2}} = 2\sqrt{2} - 1 \approx 1{,}83$$

$$f\!\left(\frac{3\pi}{4}\right) = \frac{2 + \tfrac{\sqrt{2}}{2}}{\tfrac{\sqrt{2}}{2}} = 2\sqrt{2} + 1 \approx 3{,}83$$

Lengden langs $x$-aksen er $\frac{3\pi}{4} - \frac{\pi}{4} = \frac{\pi}{2} \approx 1{,}57$.

**Plassering i kjeglen:** Vi legger kjeglen slik at toppunktet er i origo og bunnen ved $x = h$, slik at kjegleveggen er gitt ved den lineære funksjonen

$$g(x) = \frac{r}{h} \cdot x = \frac{4}{\tfrac{135}{16\pi}} \cdot x = \frac{64\pi}{135} \cdot x$$

For at omdreiingslegemet skal få plass, må radien $f$ til omdreiingslegemet ligge under kjegleveggen $g$ overalt. Plasser omdreiingslegemet slik at den smale enden tangerer kjegleveggen. Vi løser $g(x) = f\!\left(\tfrac{\pi}{4}\right)$:

$$\frac{64\pi}{135} \cdot x = 2\sqrt{2} - 1 \quad \Rightarrow \quad x = \frac{135 \,(2\sqrt{2} - 1)}{64\pi} \approx 0{,}11$$

Da må den brede enden ligge ved $x + \frac{\pi}{2} \approx 0{,}11 + 1{,}57 = 1{,}68$. Den resterende plassen i kjeglen fra $x \approx 0{,}11$ til $x = h$ er

$$h - x \approx 2{,}69 - 0{,}11 = 2{,}58$$

Men *kjegleveggen smalner* — i posisjon $x \approx 1{,}68$ er kjegleradien

$$g(1{,}68) = \frac{64\pi}{135} \cdot 1{,}68 \approx 2{,}50$$

Omdreiingslegemets brede ende har radius $\approx 3{,}83 > 2{,}50$, så den brede enden stikker utenfor kjeglen.

**Alternativ tilnærming:** Vi kan også forsøke å plassere den brede enden mot bunnen. Da må $h - x_\text{smal} \geq \frac{\pi}{2}$, dvs. $x_\text{smal} \leq h - \frac{\pi}{2} \approx 1{,}11$. Men i denne posisjonen er kjegleradien

$$g(1{,}11) = \frac{64\pi}{135} \cdot 1{,}11 \approx 1{,}66 < 1{,}83$$

så den smale enden stikker også utenfor.

Uansett orientering passer altså ikke omdreiingslegemet inn i kjeglen.

**Nei, omdreiingslegemet får ikke plass i kjeglen.**

</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/grafens-lengde-med-polylinje/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Grafens lengde med polylinje

For en deriverbar funksjon $f$ kan vi finne en tilnærmet verdi for lengden av grafen mellom to $x$-verdier ved å bruke en polylinje, slik figuren nedenfor illustrerer.

![Polylinje langs graf](/img/user/_resources/r2-v23-2-6.jpeg){width=60%}

Dersom vi skal finne lengden av grafen i et intervall $[a,b]$, kan vi dele dette intervallet i $N$ like store delintervall $[x_i, x_{i+1}]$ med bredde $h = \dfrac{b-a}{N}$ og $x_i = a + i \cdot h$.

Vi regner da ut lengdene av linjestykkene som går mellom punktene $(x_i, f(x_i))$ og $(x_{i+1}, f(x_{i+1}))$. Summen av disse lengdene vil da være en tilnærmet verdi for lengden av grafen fra $x = a$ til $x = b$.

>[!oppgave]
>a) Forklar at lengden av linjestykket som går fra punktet $(x_i, f(x_i))$ til punktet $(x_{i+1}, f(x_{i+1}))$, er gitt ved
>

<!-- two-column start left-width=70% -->

$$S_i = \sqrt{h^2 + k_i^2}, \quad \text{der } k_i = f(x_{i+1}) - f(x_i)$$

Funksjonen $g$ er gitt ved

$$g(x) = \sqrt{1 - x^2}, \quad D_g = [-1, 1]$$

---

![$S_{i}$,  $k_{i}$ og $h_{i}$](/img/user/_resources/r2-v23-2-6-2.jpeg){width=50%}

<!-- two-column stop -->







>[!oppgave]
>b) Regn ut en god tilnærmet verdi for lengden av grafen til $g$ ved å bruke framgangsmåten beskrevet ovenfor. Vurder om svaret er rimelig.

## Fasit

a) Se løsningsforslag.

b) **$\underline{\underline{L \approx 3{,}1416}}$** (konvergerer mot $\pi$)

## Løsningsforslag

### a

Vi ser på linjestykket fra $(x_i,\, f(x_i))$ til $(x_{i+1},\, f(x_{i+1}))$.

Den horisontale komponenten er

$$\Delta x = x_{i+1} - x_i = h$$

og den vertikale komponenten er

$$k_i = f(x_{i+1}) - f(x_i)$$

Disse to komponentene utgjør katetene i en rettvinklet trekant der linjestykket er hypotenusen. Pythagoras' setning gir da

$$S_i = \sqrt{(\Delta x)^2 + k_i^2} = \sqrt{h^2 + k_i^2}$$

### b

Vi deler $[-1, 1]$ i $N = 1000$ like store delintervall og summerer lengdene $S_i$:

```python
import math
a, b, N = -1, 1, 1000
h = (b - a) / N
L = 0
for i in range(N):
    xi = a + i * h
    xj = a + (i + 1) * h
    ki = math.sqrt(max(1 - xj**2, 0)) - math.sqrt(max(1 - xi**2, 0))
    L += math.sqrt(h**2 + ki**2)
print(L)   # ≈ 3,1416
```

Programmet gir $L \approx 3{,}1416$.

**Rimelighetsvurdering:** Funksjonen $g(x) = \sqrt{1 - x^2}$ er den øvre halvdelen av enhetssirkelen (radius $r = 1$). Den eksakte buelengden er halve omkretsen av enhetssirkelen:

$$L = \frac{2\pi r}{2} = \pi \approx 3{,}14159\ldots$$

Tilnærmingen $3{,}1416$ stemmer godt med $\pi$, noe som bekrefter at svaret er rimelig.

</div></div>


---
{"aliases":[],"documentclass":"scrartcl","fontsize":"10.5pt","papersize":"a4","linestretch":1.25,"lang":"en-US","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag S2 eksamen H2025","author":"Ståle Gjelsten","date":"2025-11-21","modified":"2025-11-21","fag":["s2"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-s2-eksamen-h2025/","dgPassFrontmatter":true}
---



## Oppgave 1-1
Jeg ser at integranden er produktet av to funksjoner, og jeg velger derfor å bruke delvis integrasjon med DI-metoden.

|     |  D  |    I    |
| :-: | :-: | :-: |
|  $+$  | $\textcolor{seagreen}{x}$ | $\textcolor{seagreen}{e^{x}}$ |
|  $-$  | $\textcolor{tomato}{1}$ | $\textcolor{tomato}{e^{x}}$ |
|  $+$  |  0  |         |
$$\int e^{x} \cdot x \, \mathrm{d}x = \textcolor{seagreen}{x \cdot e^{x}} - \textcolor{tomato}{1 \cdot e^{x}} + C=\underline{\underline{e^{x}(x-1)+C}} $$

## Oppgave 1-2
### 1-2a
Vi kjenner $a_{1}=-3$ og $a_{n}=69$, men vi kjenner ikke $n$. Vi bruker derfor formelen for ledd i aritmetisk følge
$$
\begin{aligned}
a_{n}&=a_{1}+(n-1)\cdot d \\
69&=-3 + (n-1)\cdot 3 \\
\frac{69}{3} &=\frac{-\cancel{ 3 }+(n-1)\cdot \cancel{ 3 }}{\cancel{ 3 }} \\
23&=-1+(n-1) \\
23 + 1+1&=n \\
n&=25
\end{aligned}
$$
Summen av den aritmetisk rekka er dermed
$$s_{n}=\frac{a_{1}+a_{n}}{2}\cdot n =\frac{-3+69}{2}\cdot 25=\frac{66}{2}\cdot 25=33 \cdot 25 = \underline{\underline{825}}$$

### 1-2b
Konvergensområdet er de verdiene av $x$ som tilfredsstiller $-1<k(x)<1$, der $k(x)=\frac{1}{2}-x$.
$$
\begin{aligned}
-1&<k(x)<1 \\
-1&< \frac{1}{2} -x < 1 \\
1 &> -\frac{1}{2} + x > -1 \\
1 + \frac{1}{2} &> -\cancel{ \frac{1}{2} } + x + \cancel{ \frac{1}{2} } > -1 + \frac{1}{2}\\
\frac{3}{2} &>  x > -\frac{1}{2}
\end{aligned}
$$
**Konvergensområdet for rekka er $\underline{\underline{x \in \left\langle-\frac{1}{2}, \frac{3}{2} \right\rangle}}$.**

### 1-2c
Ballen vil bevege seg på følgende måte:

- $2$ m ned
- $2 \cdot 0{,}75=1{,}5$ m opp
- $2\cdot 0{,}75=1{,}5$ m ned
- $1{,}5 \cdot 0{,}75 =1{,}125$ m opp
- $1{,}5 \cdot 0{,}75 =1{,}125$ m ned
- Og så videre ...

Ballens totale distanse kan altså modelleres ved hjelp av to geometriske rekker, $a$ for distansen nedover, og $b$ for distansen oppover. Vi har $k=0{,}75$, samt startverdiene $a_{1}=2$ og $b_{1}=1{,}5$
$$
\begin{aligned}
s_{a}&=\frac{a_{1}}{1-k}=\frac{2}{1-\frac{3}{4}}=\frac{2}{\frac{1}{4}}=\frac{2 \cdot 4}{\frac{1}{4}\cdot 4}=\frac{8}{1}=8 \\
s_{b}&=\frac{b_{1}}{1-k}=\frac{1{,}5}{1-\frac{3}{4}}=\frac{1{,}5}{\frac{1}{4}}=\frac{1{,}5 \cdot 4}{\frac{1}{4}\cdot 4}=\frac{6}{1}=6 
\end{aligned}
$$
**Ballen vil totalt bevege seg 14 meter.**

## Oppgave 1-3
### 1-3a
Områder som ligger over $x$-aksen vil ha identisk areal og integral. Områder som ligger under $x$-aksen vil ha motsatt fortegn på integralet og arealet. 

Vi deler derfor opp integrasjonen vår i to deler, en for området over $x$-aksen (fra $x=-2$ til $x=0$), og en annen del for området under $x$-aksen (fra $x=0$ til $x=1$).

Området fra $x=-2$ til $x=0$ ligger over $x$-aksen, arealet og integralet er identiske. Området fra $x=0$ til $x=1$ ligger under $x$-aksen, så arealet og integralet vil ha motsatt fortegn. For å beregne det samlede arealet må vi derfor endre fortegnet til integralet fra $x=0$ til $x=1$, altså
$$
\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx}
$$
**Uttrykk 4 gir arealet markert på figuren.**

### 1-3b
Jeg finner først det ubestemte integralet
$$
F(x)=\int \left(   x^{3}+x^{2}-2x  \right) \, \mathrm{d}x = \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- \frac{2}{2}x^{2} +C
$$
Arealet er gitt ved
$$
\begin{aligned}
A&=\textcolor{seagreen}{\int_{-2}^{0} f(x) \, dx} - \textcolor{tomato}{\int_{0}^{1} f(x) \, dx} \\ &
= \textcolor{seagreen}{\left[ F(x) \right]_{-2}^0} - \textcolor{tomato}{\left[ F(x) \right]_{0}^1} \\
&= \textcolor{seagreen}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{-2}^0} -\textcolor{tomato}{\left[ \frac{1}{4}x^{4}+ \frac{1}{3}x^{3}- x^{2}  \right]_{0}^1} \\
&= \textcolor{seagreen}{\left( \left( 0 \right) - \left( \frac{1}{4}(-2)^{4} +\frac{1}{3} (-2)^{3} - (-2)^{2}\right)   \right)} - \textcolor{tomato}{\left( \left( \frac{1}{4}1^{4}+ \frac{1}{3}1^{3}- 1^{2} \right) - \left( 0 \right)  \right)} \\
&= \textcolor{seagreen}{- \left(  \frac{1}{4}\cdot 16 + \frac{1}{3}\cdot (-8) - 4 \right)} - \textcolor{tomato}{\left( \frac{1}{4} + \frac{1}{3} -1 \right)} \\
&= \textcolor{seagreen}{- \left( \cancel{ 4 }- \frac{8}{3} - \cancel{ 4 } \right)} - \textcolor{tomato}{\left( \frac{3}{12} + \frac{4}{12} - \frac{12}{12} \right)} \\
&= \textcolor{seagreen}{\frac{8}{3}} - \textcolor{tomato}{\left( -\frac{5}{12} \right)} \\
&= \textcolor{seagreen}{\frac{32}{12}} + \textcolor{tomato}{\frac{5}{12}}= \frac{37}{12}
\end{aligned}
$$
**Arealet er $\underline{\underline{\frac{37}{12}}}$.**

### 1-3c
Likningen til Kristian er sann når vi velger $a$ slik at vi får nøyaktig like store områder på oversiden og undersiden av $x$-aksen. 

Fra figuren kan vi se at Kristians beregning ser riktig ut, området som er avgrenset av $x$-aksen og $f(x)$ fra $x=-0{,}6$ til $x=1$ ser ut til å ha omtrent like mye areal over og under $x$-aksen.

Hvis vi tar $\int_{-2}^{1} f(x) \, dx$ så må svaret bli positivt siden det er mer areal på oversiden av $x$-aksen. 

Vi ser videre at $f(x)$ er negativ for $x<-2$, altså må det være mulig å velge en verdi for $a$ som er mindre enn $-2$ slik at $\int_{a}^{1} f(x) \, dx=0$. 

- Hvis vi velger $a=-2{,}5$ så ser det ut til at vi har litt mer areal over $x$-aksen enn under.
- Hvis vi velger $a=-3$ så ser det ut til at vi har litt mer areal under $x$-aksen enn over.

**Likningen til Kristian krever like mye areal på oversiden og undersiden av $x$-aksen. Unni har rett i at det finnes to løsninger på likningen, der den andre løsningen ligger i intervallet $\langle -3, -2{,}5\rangle$.**

## Oppgave 1-4
### 1-4a

Jeg forutsetter at sannsynligheten er lik for alle fire sidene av terningen.

| Farge    |  Gul     |   Grønn   |   Blå |  Rød  |
| :-----: | :--: | :--: | :--: | :--: |
| $x$                                | $\textcolor{orange}{-2}$          | $\textcolor{seagreen}{-1}$        | $\textcolor{steelblue}{0}$       | $\textcolor{tomato}{1}$          |
| $P(X=x)$                           | $\textcolor{orange}{\frac{1}{4}}$ | $\textcolor{seagreen}{\frac{1}{4}}$ | $\textcolor{steelblue}{\frac{1}{4}}$ | $\textcolor{tomato}{\frac{1}{4}}$ |
| $x \cdot P(X=x)$                   | $\textcolor{orange}{-\frac{2}{4}}$ | $\textcolor{seagreen}{-\frac{1}{4}}$ | $\textcolor{steelblue}{0}$        | $\textcolor{tomato}{\frac{1}{4}}$ |
| $(x-\text{E}(x))^{2}$              | $\textcolor{orange}{\left( -\frac{3}{2} \right)^{2}}$ | $\textcolor{seagreen}{\left( -\frac{1}{2} \right)^{2}}$ | $\textcolor{steelblue}{\left( \frac{1}{2} \right)^{2}}$ | $\textcolor{tomato}{\left( \frac{3}{2} \right)^{2}}$ |
| $(x-\text{E}(X))^{2} \cdot P(X=x)$ | $\textcolor{orange}{\frac{9}{16}}$ | $\textcolor{seagreen}{\frac{1}{16}}$ | $\textcolor{steelblue}{\frac{1}{16}}$ | $\textcolor{tomato}{\frac{9}{16}}$ |

### 1-4b
$$
\text{E}(X)=\sum x \cdot P(X=x)=\textcolor{orange}{-\frac{2}{4}}+ \textcolor{seagreen}{\left( -\frac{1}{4} \right)} + \textcolor{steelblue}{0} + \textcolor{tomato}{\frac{1}{4}}=-\frac{2}{4}=-\frac{1}{2}
$$
**$\underline{\underline{\text{E}(X)=-\frac{1}{2}}}$. Det betyr at en spiller i gjennomsnitt vil tape 0,5 poeng per gang hen spiller i det lange løp.**

### 1-4c
$$\text{Var}(X)=\sum (x-\text{E}(X))^{2} \cdot P(X=x)$$
Jeg har regnet ut hvert kvadratavvik i tabellen over.
$$
\text{Var}(X)=\textcolor{orange}{\frac{9}{16}}+\textcolor{seagreen}{\frac{1}{16}}+\textcolor{steelblue}{\frac{1}{16}}+\textcolor{tomato}{\frac{9}{16}}=\frac{20}{16}=\frac{5}{4}
$$
**Variansen $\underline{\underline{\text{Var}(X)=\frac{5}{4}}}$.**

## Oppgave 1-5
### 1-5a
Når standardavviket er 5 cm så skal ca. 68 % av sannsynligheten ligge innenfor intervallet $\langle 165, 175 \rangle$ og normalfordelingsfunksjonen skal ha toppunktet sitt ved $170$ cm. Vendepunktene til normalfordelingsfunksjonen skal også ligge ved $x=165$ og $x=175$.

Figurene A og B viser fordelinger med standardavvik som er svært mye lavere enn 5 cm. Figur D viser et standardavvik som er mye høyere enn 5 cm.

**Figur C passer til beskrivelsen.**

### 1-5b
Vi lar $X$ være høyden til en tilfeldig valgt elev, og $\bar{X}$ være gjennomsnittshøyden til 25 tilfeldig valgte elever. Fra sentralgrensesetningen har vi at 
$$
\begin{aligned}
\text{E}(\bar{X})&=E(X) = 170\\
\text{SD}(\bar{X}) &= \frac{\text{SD}(X)}{\sqrt{ n }}=\frac{5}{\sqrt{ 25 }}=\frac{5}{5}=1
\end{aligned}
$$
Vi ser at figur B har vendepunktene sine ved $x=169$ og $x=171$.

**Figur B passer til beskrivelsen.**

## Oppgave 2-1
### 2-1a

![Regresjon i GeoGebra til oppgave 1 del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-1a-regresjon.png)

Jeg brukte regresjon i GeoGebra for å finne en logistisk modell som passer til uttrykket i oppgaveteksten. Den modellen som passer best er
$$
\underline{\underline{I(t)=\frac{42\,000}{1+14{,}76 e ^{-0{,}9035t}}}}
$$
Salget starter i uke 17, så modellen er ikke gyldig før dette. I uke 24 så ser vi at salget minker noe fra uke 23, og det er naturlig med tanke på at uke 24 er starten av sommerferien. Sannsynligvis selger man ikke like mye planter på sommeren som man gjør i vekstperioden på våren.

**Jeg vurderer modellens gyldighetsområde til å kun være fra uke 17 til og med uke 24, altså $t \in [0,7]$.** 

### 2-1b

![CAS løsning av oppgave 1 del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-1bc.png)

Inntekten øker mest ved vendepunktet $t=3$ (etter 20 uker), se linje 2 i utklippet. Den deriverte til $I(t)$ gir oss vekstfarten etter 20 uker i linje 3.

**Inntektene vokser raskest i uke 20. De vokser da med omtrent 9486 kr per uke.**

### 2-1c
Se linje 4 i GeoGebra-utklippet. $x=4{,}3$ tilsvarer underveis i uke 21.

**De samlede salgsinntektene for planten passerte 65 000 kr i uke 21.**

## Oppgave 2-2

![Løsning i CAS av oppgave 2 del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-2.png)

### 2-2a
Se linje 2 i utklippet.

**Grensekostnaden $K'(150)=7{,}41$. Kostnaden ved å øke produksjonen fra 150 enheter til 151 er omtrent 7,4 kroner.**

### 2-2b
Enhetskostnadene er $E(x)=\frac{K(x)}{x}$. Vi har lavest enhetskostnad når $E(x)=K'(x)$. Jeg satt opp likningen i linje 4 i utklippet og regnet ut enhetskostnaden i linje 5.

**Vi har lavest enhetskostnader ved produksjon av 200 enheter. Da er enhetskostnaden 9,51 kroner.**

### 2-2c
Jeg løser ulikheten $I>K$ i linje 7. Siden definisjonsmengden til $K$ er $D_{K} \in \langle 0,500]$ så vil $I>K$ når $x \in [10,500]$.

**Bedriften må produsere og selge fra og med 10 enheter til og 500 enheter for å gå med overskudd.**

## Oppgave 2-3

### 2-3a
Vi lar $p$ være sannsynligheten for at en tilfeldig valgt komponent er defekt. Bedriften som klager påstår at $p>0{,}01$. Hypotesene våre er
$$
\begin{aligned}
H_{0}: \quad p\leq 0{,}01\\
H_{A}: \quad p > 0{,}01
\end{aligned}
$$

![Binomisk hypotesetest til oppgave 3a del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-3a-binomisk.png)

Vi lar $X$ være antallet defekte komponenter når vi produserer 20 komponenter gitt at nullhypotesen vår er sann. Fra sannsynlighetsvinduet i GeoGebra har vi at
$$
P(X\geq 1)=0{,}1821
$$
Sannsynligheten for å finne 1 eller flere defekte komponenter gitt at nullhypotesen er sann er omtrent $18{,}21 \,\%$.

**$p$-verdien er $0{,}1821$. Det er ikke grunnlag for forkaste nullhypotesen om at andelen er 1 % eller lavere. Klagen fra bedriften er ikke velbegrunnet.**

### 2-3b

>[!danger] Usikker løsning
>
>Jeg klarer ikke forstå hva oppgaven spør etter. Jeg er ikke sikker på at dette er riktig løsning.

Nullhypotesen er fremdeles  $H_{0}: \; p\leq 0{,}01$. 

Kontrolløren har kontrollert $n$ komponenter. Det skal maksimalt være 5 % sannsynlighet for at han «var så heldig» at han bare fant 0 eller 1 defekt komponent. Vi skal altså finne den minste verdi for $n$ som gjør at $P(X\leq 1)<0{,}05$, gitt at $p=0{,}01$.

![Binomisk hypotesetest til oppgave 3b del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-3b.png)

Ved å endre på $n$ finner jeg fort ut at

- Ved $n=472$ så er $P(X\leq 1)=0{,}0502$
- Ved $n=473$ så er $P(X\leq 1)=0{,}0498$

Hvis kontrolløren kontrollerte 473 komponenter, så er sannsynligheten for å kun finne 0 eller 1 defekte komponenter 4,98 %. 
 
**Kontrolløren må minst ha kontrollert 473 komponenter.**


## Oppgave 2-4

![Løsning av oppgave 4 del 2 i CAS](/img/user/L%C3%B8sningsforslag/s2-h25-2-4-cas.png)

### 2-4a
Et annuitetslån passer godt til oppgaven siden den spør etter en geometrisk rekke som viser hvor mye Mathias må betale.

I et annuitetslån må summen av nåverdiene til terminbeløpene tilsvare lånebeløpet, altså
$$
\sum_{i=1}^8 \frac{T}{1{,}04^{i}}=357\,000
$$
Jeg løser denne i CAS (se linje 1).

**Terminbeløpene er 53 024 kr.**

### 2-4b
Siden det er fast terminbeløp på 52 000 kr, så vil også dette lånet være et annuitetslån.

Jeg setter opp likningen i CAS og løser (se linje 2). Vekstfaktoren er $1{,}0272$ (vi ser bort fra den negative løsningen da vekstfaktorer alltid er positive), dette gir $2{,}72 \,\%$ rente.

**Rentesatsen er 2,72 %.**

### 2-4c
Rentekostnadene er summen av terminbeløpene minus prisen på bilene. Disse har jeg beregnet i linje 3 og 4 i utklippet.

**Å kjøpe elbilen vil gi høyest rentekostnader totalt, men det er først og fremst på grunn av at elbilen er dyrere og nedbetalingstiden er lengre. Rentesatsen er lavest for elbilen.**

## Oppgave 2-5
Den rekursive sammenhengen kan skrive matematisk som $B_{n+1} = B_n + 3 + n$, der $n \ge 1$ og $B_1=1$.

Vi kan også beskrive sammenhengen som at sparingen starter på 1 krone og at sparingen øker med 4 kroner til dag 2. Deretter øker sparingen med 1 krone mer per dag. Jeg velger å bruke dette mønsteret til programmeringen.

```python
sparing = 1             # daglig sparebeløp i starten
økning = 4              # den første økningen
sum_spart = sparing     # sum på sparekontoen
dag = 1                 # dag nummer

while sum_spart < 100_000:
    dag = dag + 1                       # ny dag
    sparing = sparing + økning          # nytt sparebeløp 
    sum_spart = sum_spart + sparing     # setter inn beløpet på konto
    økning = økning + 1                 # beregner økningen til neste dag

print(f"Etter {dag} dager har Wiggo spart over 100 000 kr. Han har da spart {sum_spart} kr.")
```

Output: `Etter 82 dager har Wiggo spart over 100 000 kr. Han har da spart 101926 kr.`

## Oppgave 2-6

### 2-6a


*I denne oppgaven er jeg veldig usikker på hva som kreves for å forklare at uttrykket i oppgaveteksten er det samme som forventningsverdien. Jeg tror ikke det er meningen at elever skal gjøre det samme som jeg har gjort her – men jeg klarer ikke helt å se en enklere måte å argumentere for at forventningsverdien er eksakt lik summen av «antall kast nødvendig».*

![Valgtre til oppgave 6 del 2](/img/user/L%C3%B8sningsforslag/s2-h25-2-6a-valgtre2.png)

Vi lar $X$ være antall kast som trengs før vi har fått 2 like terningkast på rad. Sannsynligheten for å at et terningkast har samme antall øyne som det forrige er $1/6$, og sannsynligheten for at antall øyne er ulikt er $5/6$. Vi kan bruke multiplikasjonsprinsippet og sette opp følgende sannsynlighetsfordeling for $X$:

| $x_{i}$ |                     $P(x_{i})$                     |
| :-----: | :------------------------------------------------: |
|   $1$   |                        $0$                         |
|   $2$   |                   $\frac{1}{6}$                    |
|   $3$   |          $\frac{5}{6} \cdot \frac{1}{6}$           |
|   $4$   | $\left( \frac{5}{6} \right)^{2} \cdot \frac{1}{6}$ |
|   $5$   | $\left( \frac{5}{6} \right)^{3} \cdot \frac{1}{6}$ |

Forventningsverdien til $X$ vil da være
$$
\begin{aligned}
\text{E}(X)&=\lim_{ n \to \infty } \sum_{i=1}^n x_{i} \cdot P(x_{i})\\
&=1 \cdot 0 + 2 \cdot \frac{1}{6} + 3 \cdot \frac{5}{6} \cdot \frac{1}{6} +4 \cdot \left( \frac{5}{6} \right)^{2} \cdot \frac{1}{6}+5 \cdot \left( \frac{5}{6} \right)^{3} \cdot \frac{1}{6} + \cdots \\
&= \frac{1}{6} \left(\underbrace{  2\left( \frac{5}{6} \right)^0 + 3\left( \frac{5}{6} \right)^{1} + 4\left( \frac{5}{6} \right)^{2} + 5\left( \frac{5}{6} \right)^{3}  + \cdots }_{ S } \right) 
\end{aligned}
$$
Vi kaller alt inni parentesen for $S$, og omskriver heltallene som står foran $\frac{5}{6}$ som en sum av enere:
$$
\begin{aligned}
S = \underbrace{ (\textcolor{seagreen}{1}+\textcolor{steelblue}{1}) }_{ 2 } \cdot \left( \frac{5}{6} \right)^{0} + \underbrace{ ( \textcolor{seagreen}{1} + \textcolor{steelblue}{1}+\textcolor{orange}{1}) }_{ 3 } \cdot \left( \frac{5}{6} \right)^{1}  \underbrace{ ( \textcolor{seagreen}{1} + \textcolor{steelblue}{1}+\textcolor{orange}{1} + \textcolor{tomato}{1}) }_{ 4 } \cdot \left( \frac{5}{6} \right)^{2} + \dots
\end{aligned}
$$
Vi deler nå opp denne summen i en rekke delsummer slik at $S = \lim_{ n \to \infty } S_{1} + S_{2} +  \dots + S_{n}$ hvor 

$$
\begin{aligned}
\color{seagreen} S_{1} & = \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{0} + \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{1}+ \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{2} + \dots = \frac{1}{1-\frac{5}{6}}=\frac{1}{\frac{1}{6}}=\textcolor{seagreen}{6}\\
\color{steelblue} S_{2} & = \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{0} + \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{1}+ \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{2} + \dots = \frac{1}{1-\frac{5}{6}}=\frac{1}{\frac{1}{6}}= \textcolor{steelblue}{6}\\
\color{orange} S_{3} & = \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{1} + \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{2}+ \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{3} + \dots \frac{\frac{5}{6}}{1-\frac{5}{6}}=\frac{\frac{5}{6}}{\frac{1}{6}}=\textcolor{orange}{5}\\
\color{tomato} S_{4} & = \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{2} + \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{3}+ \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{4} + \dots = \frac{\left( \frac{5}{6} \right)^{2}}{1-\frac{5}{6}}=\frac{\left( \frac{5}{6} \right)^{2}}{\frac{1}{6}}=\textcolor{tomato}{6 \cdot \left( \frac{5}{6} \right)^{2}}\\
\color{maroon} S_{5} & = \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{3} + \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{4}+ \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{5} + \dots = \frac{\left( \frac{5}{6} \right)^{3}}{1-\frac{5}{6}}=\frac{\left( \frac{5}{6} \right)^{3}}{\frac{1}{6}}=\textcolor{maroon}{6 \cdot \left( \frac{5}{6} \right)^{3}}
\end{aligned}
$$
Forventningsverdien er altså
$$
\begin{aligned}
\text{E}(X)&=\frac{1}{6}S \\
&=\frac{1}{6}\left( \textcolor{seagreen}{S_{1}}+\textcolor{steelblue}{S_{2}} + \textcolor{orange}{S_{3}} + \textcolor{tomato}{S_{4}} + \textcolor{maroon}{S_{5}} + \cdots \right) \\
&=\frac{1}{6} \left( \textcolor{seagreen}{6} + \textcolor{steelblue}{6} + \textcolor{orange}{5} + \textcolor{tomato}{6 \cdot \left( \frac{5}{6} \right)^{2} } + \textcolor{maroon}{6 \cdot \left( \frac{5}{6} \right)^{3}} + \cdots \right) \\
&=  \textcolor{seagreen}{1} + \textcolor{steelblue}{1} + \textcolor{orange}{\frac{5}{6}}+\textcolor{tomato}{\left( \frac{5}{6} \right)^{2}} + \textcolor{maroon}{\left( \frac{5}{6} \right)^{3}} + \dots &&  \blacksquare
\end{aligned}
$$

Hvis vi ser bort fra det aller første leddet ($\textcolor{seagreen}{1}$), så er dette en uendelig geometrisk rekke med $a_{1}=1$ og $k=\frac{5}{6}$
$$
s= \textcolor{steelblue}{1}+ \textcolor{orange}{\frac{5}{6}}+ \textcolor{tomato}{\left( \frac{5}{6} \right)^{2}} + \cdots
$$
Vi kan finne summen av rekka $s$ med GeoGebra, eller med formelen for sum av uendelig geometrisk rekke:
$$s=\frac{1}{1-\frac{5}{6}}= \frac{1}{\frac{1}{6}}= \frac{1\cdot 6}{\frac{1}{6}\cdot 6}= 6$$
Til sammen blir altså $\text{E}(X)=\textcolor{seagreen}{1}+s=\textcolor{seagreen}{1}+6=7$.

**Verdien av rekka er 7.**

### 2-6b
Vi skal simulere *forventningsverdien til summen av antall øyne på alle terningene* som kastes i jakten på å få to like kast på rad.

```python
from random import randint
N = 100_000                        
sum_øyne = 0                        # totalt antall øyne på terningene

for i in range(N):
    t1 = randint(1,6)               # terningkast 1
    t2 = randint(1,6)               # terningkast 2

    sum_øyne = sum_øyne + t1 + t2   # legger til resultatene til summen
    while t1 != t2:
        t1 = t2                     # flytter t2's verdi til t1
        t2 = randint(1,6)           # ruller t2 på nytt
        sum_øyne = sum_øyne + t2    # legger til nytt resultat til summen

EX = sum_øyne/N                     # forventningsverdi = snitt i det lange løp
print(f"Jeg estimerer forventningsverdien til å være {EX:.3f} etter {N} simuleringer.")
```

Output: `Jeg estimerer forventningsverdien til å være 24.502 etter 100000 simuleringer.`

Etter å ha kjørt programmet flere ganger ser det ut til estimatet mitt er stabilt på rundt $24{,}5$. Det stemmer også godt med at forventningsverdien for en terning er $3{,}5$ og vi trenger i snitt $7$ kast før vi har fått to like på rad.

**Jeg estimerer forventningsverdien til summen av antall øyne før Ane får to like terninger på rad til å være 24,5.**
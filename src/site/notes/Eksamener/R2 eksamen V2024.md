---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"v24","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2024","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/r2-eksamen-v2024/","permalink":"/eksamener/r2-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"v24","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2024","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 1** — 2 timer — uten hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [1-1](#oppgave-1-1) | [Bestemt integral og areal](https://matematikkoppgaver.vercel.app/bestemt-integral-og-areal/) | integral, areal under graf, bestemt integral | ✔︎ |
| [1-2](#oppgave-1-2) | [Ubestemt integral med substitusjon](https://matematikkoppgaver.vercel.app/ubestemt-integral-med-substitusjon/) | integral | × |
| [1-3](#oppgave-1-3) | [Ukjent program S2 v24](https://matematikkoppgaver.vercel.app/ukjent-program-s2-v24/) | programmering, rekker, aritmetisk rekke | ✔︎ |
| [1-4](#oppgave-1-4) | [Trekant og plan i rommet](https://matematikkoppgaver.vercel.app/trekant-og-plan-i-rommet/) | vektorer, geometri | × |
| [1-5](#oppgave-1-5) | [Sinusfunksjon og egenskaper](https://matematikkoppgaver.vercel.app/sinusfunksjon-og-egenskaper/) | trigonometri, funksjoner | × |

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-1](#oppgave-2-1) | [Fotball hjørnespark og vektorer](https://matematikkoppgaver.vercel.app/fotball-hjornespark-og-vektorer/) | vektorer, modellering | × |
| [2-2](#oppgave-2-2) | [Volum av pære med omdreiningslegeme](https://matematikkoppgaver.vercel.app/volum-av-paere-med-omdreiningslegeme/) | omdreiningslegeme, integral, volum | × |
| [2-3](#oppgave-2-3) | [Sensor for utelys og trigonometri](https://matematikkoppgaver.vercel.app/sensor-for-utelys-og-trigonometri/) | trigonometri, modellering, derivasjon | × |
| [2-4](#oppgave-2-4) | [Kubikktall og induksjonsbevis](https://matematikkoppgaver.vercel.app/kubikktall-og-induksjonsbevis/) | rekursiv sammenheng, figurtall, programmering, bevis | ✔︎ |
| [2-5](#oppgave-2-5) | [Kuleflate og plan](https://matematikkoppgaver.vercel.app/kuleflate-og-plan/) | vektorer, geometri | × |
| [2-6](#oppgave-2-6) | [Sum av integralrekke](https://matematikkoppgaver.vercel.app/sum-av-integralrekke/) | rekker, uendelig rekke, utforskning, funksjoner, integral | ✔︎ |

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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ubestemt-integral-med-substitusjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ubestemt integral med substitusjon

>[!oppgave]
>Regn ut integralet.
>
>$$\int \sin^3(x) \cdot \cos(x) \, \mathrm{d}x$$

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-2\|Løsningsforslag R2 eksamen V2024#Oppgave 1-2]]

## Fasit

**$\underline{\underline{\dfrac{\sin^4(x)}{4} + C}}$**

## Løsningsforslag

Vi bruker substitusjonen

$$u = \sin(x) \implies \frac{\mathrm{d}u}{\mathrm{d}x} = \cos(x) \implies \mathrm{d}u = \cos(x)\,\mathrm{d}x$$

Integralet skrives om:

$$\int \sin^3(x) \cdot \cos(x)\,\mathrm{d}x = \int u^3\,\mathrm{d}u$$

Vi integrerer:

$$\int u^3\,\mathrm{d}u = \frac{u^4}{4} + C$$

Vi substituerer tilbake $u = \sin(x)$:

$$\frac{u^4}{4} + C = \mathbf{\underline{\underline{\dfrac{\sin^4(x)}{4} + C}}}$$


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


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/trekant-og-plan-i-rommet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Trekant og plan i rommet

Vi har gitt punktene $A(1, 1, 0)$, $B(4, 1, 1)$ og $C(2, 0, -1)$.

>[!oppgave]
>a) Bestem arealet av trekanten $\triangle ABC$.
>b) Bestem avstanden fra punktet $C$ til linja gjennom $A$ og $B$.

$A$, $B$ og $C$ ligger i planet $\alpha$. Punktet $P$ har koordinatene $P(-2, 1, 4)$.

>[!oppgave]
>c) Lag en parameterframstilling for linja $\ell$ som går gjennom punktet $P$ og står vinkelrett på planet $\alpha$.

En rett linje $m$ går gjennom punktet $P$, er parallell med planet $\alpha$ og skjærer $z$-aksen i punktet $D$.

>[!oppgave]
>d) Bestem koordinatene til $D$.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-4\|Løsningsforslag R2 eksamen V2024#Oppgave 1-4]]

## Fasit

a) $\underline{\underline{\text{Areal} = \dfrac{\sqrt{26}}{2} \approx 2{,}55}}$

b) $\underline{\underline{d = \dfrac{\sqrt{65}}{5} \approx 1{,}61}}$

c) $\underline{\underline{\ell \colon (x, y, z) = (-2 + t,\ 1 + 4t,\ 4 - 3t)}}$

d) $\underline{\underline{D = \left(0,\ 0,\ \dfrac{10}{3}\right)}}$

## Løsningsforslag

### a

Vi finner vektorene $\overrightarrow{AB}$ og $\overrightarrow{AC}$:

$$\overrightarrow{AB} = B - A = (4-1,\ 1-1,\ 1-0) = (3, 0, 1)$$

$$\overrightarrow{AC} = C - A = (2-1,\ 0-1,\ -1-0) = (1, -1, -1)$$

Kryssprodukt:

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & 0 & 1 \\ 1 & -1 & -1 \end{vmatrix}$$

$$= \mathbf{i}(0\cdot(-1) - 1\cdot(-1)) - \mathbf{j}(3\cdot(-1) - 1\cdot 1) + \mathbf{k}(3\cdot(-1) - 0\cdot 1)$$

$$= \mathbf{i}(0+1) - \mathbf{j}(-3-1) + \mathbf{k}(-3-0) = (1, 4, -3)$$

Lengden av kryssproduktet:

$$|\overrightarrow{AB} \times \overrightarrow{AC}| = \sqrt{1^2 + 4^2 + (-3)^2} = \sqrt{1 + 16 + 9} = \sqrt{26}$$

Arealet av trekanten er halvparten av parallelogrammet utspent av $\overrightarrow{AB}$ og $\overrightarrow{AC}$:

$$\text{Areal} = \frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \frac{\sqrt{26}}{2} \approx \mathbf{2{,}55}$$

### b

Avstanden fra et punkt $C$ til linja gjennom $A$ og $B$ er:

$$d = \frac{|\overrightarrow{AB} \times \overrightarrow{AC}|}{|\overrightarrow{AB}|}$$

Vi beregner $|\overrightarrow{AB}|$:

$$|\overrightarrow{AB}| = \sqrt{3^2 + 0^2 + 1^2} = \sqrt{10}$$

Dermed:

$$d = \frac{\sqrt{26}}{\sqrt{10}} = \sqrt{\frac{26}{10}} = \frac{\sqrt{26}}{\sqrt{10}} \cdot \frac{\sqrt{10}}{\sqrt{10}} = \frac{\sqrt{260}}{10} = \frac{\sqrt{4 \cdot 65}}{10} = \frac{2\sqrt{65}}{10} = \frac{\sqrt{65}}{5} \approx \mathbf{1{,}61}$$

### c

Linja $\ell$ gjennom $P(-2, 1, 4)$ og vinkelrett på planet $\alpha$ har retningsvektor lik normalvektoren til $\alpha$.

Normalvektoren til $\alpha$ er $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = (1, 4, -3)$ (beregnet i oppgave a).

Parameterframstilling for $\ell$:

$$\ell \colon (x, y, z) = (-2, 1, 4) + t(1, 4, -3) = (-2 + t,\ 1 + 4t,\ 4 - 3t), \quad t \in \mathbb{R}$$

### d

Punkt $D$ ligger på $z$-aksen, så $D = (0, 0, d)$ for et tall $d$.

Linja $m$ gjennom $P(-2, 1, 4)$ og $D$ er parallell med planet $\alpha$. Det betyr at retningsvektoren $\overrightarrow{PD}$ er vinkelrett på normalvektoren $\mathbf{n} = (1, 4, -3)$.

Vi beregner $\overrightarrow{PD}$:

$$\overrightarrow{PD} = D - P = (0-(-2),\ 0-1,\ d-4) = (2, -1, d-4)$$

Betingelsen $\overrightarrow{PD} \perp \mathbf{n}$ gir $\overrightarrow{PD} \cdot \mathbf{n} = 0$:

$$1 \cdot 2 + 4 \cdot (-1) + (-3)(d-4) = 0$$

$$2 - 4 - 3d + 12 = 0$$

$$10 - 3d = 0$$

$$d = \frac{10}{3}$$

Dermed er $D = \left(0,\ 0,\ \dfrac{10}{3}\right)$.


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sinusfunksjon-og-egenskaper/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sinusfunksjon og egenskaper

Funksjonen $f$ er gitt ved

$$f(x) = 2 \cdot \sin\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) - 1, \quad D_f = \langle 0, 20 \rangle.$$

>[!oppgave]
>a) Løs likningen $f(x) = 0$.
>b) Finn amplituden, likevektslinja, perioden og forskyvningen langs likevektslinja.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-5\|Løsningsforslag R2 eksamen V2024#Oppgave 1-5]]

## Fasit

a) $\underline{\underline{x \in \{3,\, 7,\, 15,\, 19\}}}$

b) Amplitude: $\underline{\underline{2}}$, likevektslinje: $\underline{\underline{y = -1}}$, periode: $\underline{\underline{12}}$, forskyvning: $\underline{\underline{2 \text{ mot høyre}}}$

## Løsningsforslag

### a

Vi skal løse $f(x) = 0$:

$$2\sin\!\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) - 1 = 0$$

$$\sin\!\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) = \frac{1}{2}$$

Vi setter $u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}$ og løser $\sin u = \dfrac{1}{2}$.

Sinus er $\dfrac{1}{2}$ for $u = \dfrac{\pi}{6} + 2n\pi$ og $u = \pi - \dfrac{\pi}{6} + 2n\pi = \dfrac{5\pi}{6} + 2n\pi$, der $n \in \mathbb{Z}$.

**Tilfelle 1:**

$$\frac{\pi}{6}x - \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi$$

$$\frac{\pi}{6}x = \frac{\pi}{6} + \frac{\pi}{3} + 2n\pi = \frac{\pi}{2} + 2n\pi$$

$$x = 3 + 12n$$

**Tilfelle 2:**

$$\frac{\pi}{6}x - \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi$$

$$\frac{\pi}{6}x = \frac{5\pi}{6} + \frac{\pi}{3} + 2n\pi = \frac{7\pi}{6} + 2n\pi$$

$$x = 7 + 12n$$

Vi finner løsningene i $D_f = \langle 0, 20 \rangle$:

- Tilfelle 1: $x = 3 + 12n$ gir $x = 3$ (for $n=0$) og $x = 15$ (for $n=1$).
- Tilfelle 2: $x = 7 + 12n$ gir $x = 7$ (for $n=0$) og $x = 19$ (for $n=1$).

**$\underline{\underline{x \in \{3,\, 7,\, 15,\, 19\}}}$**

### b

Vi skriver funksjonen om til standardform $f(x) = A\sin\!\left(\frac{2\pi}{T}(x - x_0)\right) + d$:

$$f(x) = 2\sin\!\left(\frac{\pi}{6}(x - 2)\right) - 1$$

Dette leser vi av slik (vi trekker ut $\dfrac{\pi}{6}$ fra parentesen: $\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \dfrac{\pi}{6}(x-2)$):

- **Amplitude:** $A = \textcolor{seagreen}{2}$
- **Likevektslinje:** $y = \textcolor{steelblue}{-1}$ (vertikal forskyvning $d = -1$)
- **Periode:** $T = \dfrac{2\pi}{\pi/6} = \textcolor{orange}{12}$
- **Horisontal forskyvning:** $x_0 = \textcolor{tomato}{2}$ mot høyre (grafen er forskjøvet 2 enheter i positiv $x$-retning sammenlignet med $2\sin\!\left(\dfrac{\pi}{6}x\right) - 1$)


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fotball-hjornespark-og-vektorer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Fotball hjørnespark og vektorer

En fotballspiller skal ta et hjørnespark (corner) på en fotballbane. Posisjonen $\vec{r}$ til ballen etter $t$ sekunder er gitt ved

$$\vec{r}(t) = [30t,\ 5t,\ 7t - 4{,}9t^2].$$

Her er posisjonen gitt i meter, og koordinatsystemet er lagt slik at origo er i hjørnet av fotballbanen, $x$-aksen går langs kortsiden og $y$-aksen går langs langsiden.

>[!oppgave]
>a) Hvor stor er farten til ballen idet den blir skutt?
>b) Hvor langt fra hjørnemerket er ballen når den treffer fotballbanen igjen?
>c) Hvor stor er farten til ballen når den er på sitt høyeste? Hvor høyt over fotballbanen er ballen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-1\|Løsningsforslag R2 eksamen V2024#Oppgave 2-1]]

## Fasit

a) $\underline{\underline{|\vec{v}(0)| = \sqrt{974} \approx 31{,}2 \, \mathrm{m/s}}}$

b) **Ballen lander $\dfrac{50\sqrt{37}}{7} \approx 43{,}4 \, \mathrm{m}$ fra hjørnemerket.**

c) $\underline{\underline{|\vec{v}| = 5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}}}$, høyde $\underline{\underline{2{,}5 \, \mathrm{m}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å definere posisjonsvektoren og beregne alle størrelser.

![GeoGebra CAS – hjørnespark-vektorer](/img/user/_resources/r2-v24-2-1.png)

### a

Farten er lengden av hastighetsvektoren $\vec{v}(t) = \vec{r}'(t)$.

Vi definerer $\vec{r}(t) = (30t,\ 5t,\ 7t - 4{,}9t^2)$ og deriverer (linje 1–2 i CAS).

Ved $t = 0$ (idet ballen sparkes) gir CAS:

$$\vec{v}(0) = (30,\ 5,\ 7)$$

$$|\vec{v}(0)| = \sqrt{30^2 + 5^2 + 7^2} = \sqrt{900 + 25 + 49} = \sqrt{974} \approx 31{,}2$$

**Farten til ballen idet den blir skutt er $\underline{\underline{\sqrt{974} \approx 31{,}2 \, \mathrm{m/s}}}$.**

### b

Ballen treffer banen igjen når $z$-koordinaten er 0 (og $t > 0$). Vi setter opp likningen

$$7t - 4{,}9t^2 = 0$$

CAS gir $t = 0$ eller $t = \dfrac{10}{7}$ s (linje 5). Vi bruker $t = \dfrac{10}{7}$.

Posisjonen ved landing er (linje 6):

$$\vec{r}\!\left(\frac{10}{7}\right) = \left(\frac{300}{7},\ \frac{50}{7},\ 0\right)$$

Avstand fra origo (hjørnemerket) er lengden av $(x, y)$-komponenten:

$$d = \sqrt{\left(\frac{300}{7}\right)^{\!2} + \left(\frac{50}{7}\right)^{\!2}} = \frac{50\sqrt{37}}{7} \approx 43{,}4$$

CAS bekrefter dette i linje 7.

**Ballen er $\underline{\underline{\dfrac{50\sqrt{37}}{7} \approx 43{,}4 \, \mathrm{m}}}$ fra hjørnemerket når den treffer banen.**

### c

Ballen er på sitt høyeste når $z$-komponenten av hastighetsvektoren er null:

$$v_z = 7 - 9{,}8t = 0 \implies t = \frac{5}{7} \, \mathrm{s}$$

CAS bekrefter $t = \dfrac{5}{7}$ i linje 8.

Da er hastighetsvektoren (linje 9):

$$\vec{v}\!\left(\frac{5}{7}\right) = (30,\ 5,\ 0)$$

Farten er (linje 10):

$$|\vec{v}| = \sqrt{30^2 + 5^2} = \sqrt{925} = 5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}$$

Høyden ved dette tidspunktet er:

$$z\!\left(\frac{5}{7}\right) = 7 \cdot \frac{5}{7} - 4{,}9 \cdot \left(\frac{5}{7}\right)^{\!2} = 5 - \frac{49}{10} \cdot \frac{25}{49} = 5 - 2{,}5 = 2{,}5$$

**Farten på det høyeste punktet er $\underline{\underline{5\sqrt{37} \approx 30{,}4 \, \mathrm{m/s}}}$, og ballen er da $\underline{\underline{2{,}5 \, \mathrm{m}}}$ over fotballbanen.**


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/volum-av-paere-med-omdreiningslegeme/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Volum av pære med omdreiningslegeme

Bildet nedenfor viser halve snittflaten til en pære som er skåret over på midten. Bildet er satt inn i et koordinatsystem. Enheten langs begge aksene er centimeter.

![Pæresnitt i koordinatsystem](/img/user/_resources/r2-v24-2-2.jpeg){width=60%}

>[!oppgave]
>Bruk informasjonen i bildet til å bestemme det omtrentlige volumet av pæra.

## Fasit

$\underline{\underline{V \approx 310 \, \mathrm{cm}^3}}$

## Løsningsforslag

Vi skal bestemme det omtrentlige volumet av pæra ved å modellere konturen med en funksjon og beregne volumet av omdreiningslegemet rundt $x$-aksen.

**Steg 1 – Les av datapunkter fra bildet**

Vi leser av omtrentlige koordinater langs den øvre kanten av pærekonturen (halvt snitt) fra koordinatsystemet i bildet. Enheten er centimeter:

| $x$ | $0$     | $1$     | $2$     | $3$     | $4$     | $5$     | $6$     | $7$     | $8$     | $9$     | $10$    | $11$    | $12$    |
| --- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| $y$ | $1{,}0$ | $2{,}1$ | $3{,}0$ | $3{,}6$ | $3{,}9$ | $3{,}9$ | $3{,}7$ | $3{,}4$ | $2{,}9$ | $2{,}2$ | $1{,}4$ | $0{,}7$ | $0{,}0$ |

Pæra strekker seg fra $x = 0$ til $x \approx 12 \, \mathrm{cm}$, med maksimal bredde $y \approx 3{,}9 \, \mathrm{cm}$ ved $x \approx 4{-}5 \, \mathrm{cm}$.

**Steg 2 – Finn regresjonspolynom i GeoGebra**

Vi legger inn datapunktene i GeoGebra og bruker polynomregresjon av grad 4 (`Polynomregresjon(L, 4)` der `L` er listen av punkter). Dette gir funksjonen $f$ som modellerer halve pærekonturen:

$$f(x) \approx 0{,}000312x^4 - 0{,}001838x^3 - 0{,}1356x^2 + 1{,}2739x + 0{,}9923$$

![Datapunkter og regresjonskurve for pærekonturen](/img/user/_resources/r2-v24-2-2-graf.png){width=80%}

Kurven passer godt til de avleste punktene.

**Steg 3 – Beregn volumet med CAS**

Volumet av omdreiningslegemet som dannes når grafen til $f$ roteres rundt $x$-aksen er gitt ved:

$$V = \pi \int_0^{12} (f(x))^2 \, \mathrm{d}x$$

Vi beregner integralet i GeoGebra CAS:

![CAS-beregning av volumet](/img/user/_resources/r2-v24-2-2-cas.png){width=80%}

GeoGebra gir $V \approx 309{,}55 \, \mathrm{cm}^3$.

**Svar:** Det omtrentlige volumet av pæra er $\underline{\underline{V \approx 310 \, \mathrm{cm}^3}}$.


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sensor-for-utelys-og-trigonometri/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sensor for utelys og trigonometri

En sensor skal slå på utelyset foran ytterdøra til et hus. Lyset blir slått på $T(x)$ timer etter midnatt. $T(x)$ er gitt ved

$$T(x) = 4 \cdot \sin(0{,}0055\pi \cdot x - 0{,}5\pi) + 19.$$

$x$ er antall dager etter 31. desember 2023 slik at $x = 1$ svarer til 1. januar 2024. Tidspunktet sensoren slår på utelyset, varierer fra kl. 15:00 til kl. 23:00, og det varierer periodisk i løpet av et år. Den 1. april slår lyset seg på kl. 19:00.

>[!oppgave]
>a) Forklar hvordan de ulike verdiene i modellen $T(x)$ passer med opplysningene gitt ovenfor.
>b) Når i 2024 vil tidspunktet da lyset slår seg på, flytte seg 3 minutter per dag?
>c) Når endrer dette tidspunktet seg raskest, og hvor stor er endringen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-3\|Løsningsforslag R2 eksamen V2024#Oppgave 2-3]]

## Fasit

a) Se forklaring i løsningsforslaget.

b) Tidspunktet endrer seg 3 minutter per dag rundt **$\underline{\underline{16. \text{ februar}}}$**, **$\underline{\underline{14. \text{ mai}}}$**, **$\underline{\underline{16. \text{ august}}}$** og **$\underline{\underline{12. \text{ november}}}$**.

c) Tidspunktet endrer seg raskest rundt **$\underline{\underline{31. \text{ mars}}}$** (og 29. september) med ca. $\underline{\underline{4{,}1 \text{ min/dag}}}$.

## Løsningsforslag

### a

Modellen er $T(x) = 4 \cdot \sin(0{,}0055\pi \cdot x - 0{,}5\pi) + 19$.

**Likevektslinjen 19** svarer til gjennomsnittet av minimums- og maksimumsverdi:

$$\frac{15 + 23}{2} = 19 \checkmark$$

**Amplituden 4** svarer til halvparten av variasjonsbredden:

$$\frac{23 - 15}{2} = 4 \checkmark$$

Tidspunktet varierer altså mellom $19 - 4 = 15$ (kl. 15:00) og $19 + 4 = 23$ (kl. 23:00).

**Perioden** finner vi fra koeffisienten foran $x$ i argumentet:

$$P = \frac{2\pi}{0{,}0055\pi} = \frac{2}{0{,}0055} \approx 363{,}6 \text{ dager} \approx 1 \text{ år} \checkmark$$

**Faseforskyvningen** $-0{,}5\pi$ gir minimum der $\sin = -1$, altså når

$$0{,}0055\pi \cdot x - 0{,}5\pi = -0{,}5\pi \implies x = 0$$

$x = 0$ svarer til 31. desember 2023, og minimum $T = 15$ (kl. 15:00) tidligst på vinteren er rimelig.

**Kontroll 1. april** ($x = 91$, siden januar har 31 dager, februar 29 (skuddår) og mars 31):

$$T(91) = 4 \cdot \sin(0{,}0055\pi \cdot 91 - 0{,}5\pi) + 19 \approx 19{,}01 \approx 19 \checkmark$$

Lyset slår seg på ca. kl. 19:00 den 1. april.

### b

Vi bruker GeoGebra CAS til å definere $T(x)$, beregne den deriverte og løse $|T'(x)| = 0{,}05$ (siden $3 \text{ min/dag} = 0{,}05 \text{ t/dag}$).

![GeoGebra CAS: T(x), derivert og løsninger av T'(x)=±0,05](/img/user/_resources/r2-v24-2-3.png)

Fra CAS-utklippet ser vi:

$$T'(x) = \frac{11}{500}\pi \cdot \cos\left(\frac{11}{2000}\pi x - \frac{1}{2}\pi\right) \approx 0{,}06912 \cdot \cos(0{,}01728x - 1{,}5708)$$

**$T'(x) = 0{,}05$** (lyset slår seg på 3 min *senere* per dag):

$$x \approx 46{,}81 \quad \text{og} \quad x \approx 135{,}01$$

**$T'(x) = -0{,}05$** (lyset slår seg på 3 min *tidligere* per dag):

$$x \approx 228{,}62 \quad \text{og} \quad x \approx 316{,}83$$

Vi konverterer til datoer (med $x = 1$ som 1. januar 2024):

| $x$ | Dato | Beskrivelse |
|-----|------|-------------|
| $47$ | ca. 16. februar | Lyset slår seg på 3 min/dag *senere* |
| $135$ | ca. 14. mai | Lyset slår seg på 3 min/dag *senere* |
| $229$ | ca. 16. august | Lyset slår seg på 3 min/dag *tidligere* |
| $317$ | ca. 12. november | Lyset slår seg på 3 min/dag *tidligere* |

**Tidspunktet endrer seg 3 minutter per dag rundt 16. februar, 14. mai, 16. august og 12. november.**

### c

$|T'(x)|$ er størst når $|\cos(\ldots)| = 1$, altså når cosinus-leddet er $\pm 1$.

Maksimalt positiv endring (lyset slår seg på senest mulig per dag): $\cos(\ldots) = 1$, som gir

$$0{,}0055\pi \cdot x - 0{,}5\pi = 0 \implies x = \frac{0{,}5}{0{,}0055} = \frac{1000}{11} \approx 90{,}9$$

$x \approx 91$ svarer til ca. 31. mars / 1. april.

Fra CAS-utklippet: `xMaks := 90,909` og `Maks := 0,06912`.

Den største endringsraten er

$$|T'(x)|_{\max} = 0{,}022\pi \approx 0{,}06912 \text{ t/dag} = 0{,}06912 \cdot 60 \approx 4{,}1 \text{ min/dag}$$

Tilsvarende skjer den raskeste negative endringen (lyset slår seg på tidligere) en halv periode senere:

$$x \approx 90{,}9 + \frac{363{,}6}{2} \approx 272{,}7 \approx \text{29. september}$$

**Tidspunktet sensoren slår på lyset endrer seg raskest rundt 31. mars (og 29. september), med ca. $\underline{\underline{4{,}1 \text{ min/dag}}}$.**


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kubikktall-og-induksjonsbevis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kubikktall og induksjonsbevis


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
>c) Bruk induksjonsbevis til å bevise den eksplisitte formelen for $S_{n}$.

## Fasit

a) $S_{n+1}=S_{n}+(n+1)^{3}$ og $S_{n}=\frac{1}{4}\left( n^{4}+2n^{3}+n^{2} \right)$
b) $S_{50}=1\,625\,625$

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

### c
Påstanden vår er at
$$S_{n}=\frac{1}{4}\left( n^{4}+ 2n^{3}+n^{2} \right), \quad n \geq 1$$
Vi viser først at formelen stemmer for $k=1$.
$$
S_{1}=\frac{1}{4}\left( 1^{4}+2 \cdot 1^{3} + 1^{2} \right) =\frac{1}{4}\left( 1+2+1 \right) = 1 \quad  \checkmark 
$$

Vi antar at formelen stemmer for $k=n$. Vi finner $S_{k+1}$.
$$
S_{k+1}=\frac{1}{4}\left( (k+1)^{4}+ 2(k+1)^{3}+(k+1)^{2} \right)
$$
Så finner vi $S_{k+1}$ ved å bruke den rekursive formelen.
$$
S_{k+1}=S_{k}+(k+1)^{3}=\frac{1}{4}\left( k^{4}+ 2k^{3}+k^{2} \right)+(k+1)^{3}
$$
Vi tester om disse er identiske.
$$
\frac{1}{4}\left( (k+1)^{4}+ 2(k+1)^{3}+(k+1)^{2} \right)=\frac{1}{4}\left( k^{4}+ 2k^{3}+k^{2} \right)+(k+1)^{3} 
$$

![Tester identiteten i CAS ✔︎](/img/user/_resources/r2-v24-2-4-induksjon.png){width=60%}

Venstre side er lik høyre side. Vi har vist at formlen gjelder for $n=1$ og at dersom formelen gjelder for $n=k$ så gjelder den også for $n=k+1$. Vi har derfor bevist ved induksjon at følgende formel gjelder for summen av kubikktallene:
$$
S_{n}=\frac{1}{4}\left( n^{4}+ 2n^{3}+n^{2} \right)
$$


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuleflate-og-plan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuleflate og plan

Punktene $A(1, 2, 1)$ og $B(3, 0, -3)$ ligger på en kuleflate. $AB$ er en diameter til kuleflaten. Planet $\gamma$ er gitt ved likningen $x + 2y + 2z = 14$.

>[!oppgave]
>a) Finn den minste avstanden fra kuleflaten til planet $\gamma$.

Et plan $\alpha$ har samme avstand til kuleflaten og er parallelt med planet $\gamma$.

>[!oppgave]
>b) Bestem en likning for planet $\alpha$.

## Fasit

a) $\underline{\underline{4 - \sqrt{6} \approx 1{,}55}}$

b) $\underline{\underline{x + 2y + 2z = -10}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å utføre beregningene.

![Kuleflate og plan – CAS-beregninger](/img/user/_resources/r2-v24-2-5.png)

**Sentrum og radius:**

Siden $AB$ er diameter, er sentrum $M$ midtpunktet av $AB$:

$$M = \left(\frac{1+3}{2},\ \frac{2+0}{2},\ \frac{1+(-3)}{2}\right) = (2, 1, -1)$$

Radius er halvparten av $|AB|$:

$$r = \frac{|AB|}{2} = \frac{\sqrt{(3-1)^2 + (0-2)^2 + (-3-1)^2}}{2} = \frac{\sqrt{4+4+16}}{2} = \frac{\sqrt{24}}{2} = \sqrt{6}$$

Planet $\gamma$ har normalvektor $\mathbf{n} = (1, 2, 2)$ med $|\mathbf{n}| = \sqrt{1+4+4} = 3$.

### a

Avstanden fra sentrum $M(2, 1, -1)$ til planet $\gamma\colon x + 2y + 2z = 14$ er:

$$d(M, \gamma) = \frac{|1 \cdot 2 + 2 \cdot 1 + 2 \cdot (-1) - 14|}{3} = \frac{|2 + 2 - 2 - 14|}{3} = \frac{12}{3} = 4$$

Den minste avstanden fra kuleflaten til planet er avstanden fra sentrum minus radius:

$$d_{\min} = d(M, \gamma) - r = 4 - \sqrt{6} \approx \mathbf{\underline{\underline{1{,}55}}}$$

**Den minste avstanden fra kuleflaten til planet $\gamma$ er $4 - \sqrt{6} \approx 1{,}55$.**

### b

Planet $\alpha$ er parallelt med $\gamma$, altså på formen $x + 2y + 2z = D$.

Avstanden fra $M(2, 1, -1)$ til $\alpha$ er den samme som til $\gamma$, det vil si $4$, men $\alpha$ ligger på motsatt side av sentrum:

$$d(M, \alpha) = \frac{|1 \cdot 2 + 2 \cdot 1 + 2 \cdot (-1) - D|}{3} = \frac{|2 - D|}{3} = 4$$

$$|2 - D| = 12 \implies D = 14 \quad \text{eller} \quad D = -10$$

$D = 14$ gir planet $\gamma$ selv, så $\alpha$ har $D = -10$.

**En likning for planet $\alpha$ er $\underline{\underline{x + 2y + 2z = -10}}$.**


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sum-av-integralrekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sum av integralrekke


La $a_{1}>0$ og la $S(x)$ være summen av ei rekke gitt ved 
$$
S(x)=\sum_{n=0}^{\infty}a_{1} \cdot \left( \int_{0}^{x} e^{-t} \, \mathrm{d}t  \right)^{n}
$$

Bestem $a_{1}$ slik at den minste mulige summen blir 1.

## Fasit

Kanskje $a_{1}=\lim_{b \to 2^- } b$. Usikker.

## Løsningsforslag


> [!warning] Usikker løsning
> Jeg skrev denne løsningen rett etter eksamen. Jeg husker jeg var veldig usikker på om dette var svaret de var ute etter, om jeg hadde gjort noe galt eller om det er noe galt med oppgaven. Hvis jeg får tid så skal jeg undersøke videre.


$$
S(x)=\sum_{n=0}^{\infty}a_{1} \cdot \left( \int_{0}^{x} e^{-t} \, \mathrm{d}t  \right)^{n}
$$
Jeg ser at jeg kan bestemme integralet, så jeg begynner med det
$$
\int_{0}^{x} e^{-t} \, dt =\left[ -e^{-t} \right]_{0}^{x}=-e^{-x}-(-e^{0})=1-e^{-x}=1-\frac{1}{e^{x}}
$$
Jeg ser også at rekka er geometrisk med første ledd $a_{1}$ og kvotient $k(x)=1-\frac{1}{e^{x}}$.

Geometriske rekker er konvergente dersom $-1<k<1$. 

Jeg ser at 
$$
\lim_{ x \to \infty } \left( 1-\frac{1}{e^{x}} \right) = 1-0= 1
$$
Jeg undersøker om $k(x)>-1$ ved å sette opp likningen
$$
\begin{aligned}
k(x)&>-1\\
1-\frac{1}{e^{x}}&>-1\\
-\frac{1}{e^{x}}&>-2\\
\frac{1}{2}&<e^{x}\\
x&>\ln\left( \frac{1}{2} \right)\\
x&>\ln 1- \ln 2 \\
x&>-\ln 2
\end{aligned}
$$

Konvergensområdet til rekka er altså $-\ln 2 < x < \infty$.

$k(x)$ er strengt voksende, så vi bør få den minste summen når $x$ nærmer seg $-\ln 2$ fra den positive siden.

Hvis vi lar $x=- \ln 2$ så får vi
$$
S(x)=a_{1} \cdot e^{x} \iff 1=a_{1}\cdot e^{-\ln 2} \iff \frac{1}{a_{1}}=2^{-1}\iff a_{1}=2
$$

Verdien $x = -\ln 2$ ligger utenfor konvergensområdet, så summen $S(x) = 1$ oppnås aldri. Men $S(x)$ kan komme vilkårlig nær $1$ når $x \to (-\ln 2)^+$, og summen kan aldri bli lavere enn $1$. Den minste mulige summen er derfor $1$, og $a_1 = 2$.


>[!danger] Morsom løsning
>
>«Verdien» $a_{1}=e^{-x}$ vil gi
>$$S(x)=a_{1} \cdot e^{x}=e^{-x} \cdot e^{x} = 1 $$
>
>*Det er selvsagt implisert at $a_{1}$ er et tall og ikke en funksjon. Dette er derfor ikke et svar på oppgaven.*



</div></div>


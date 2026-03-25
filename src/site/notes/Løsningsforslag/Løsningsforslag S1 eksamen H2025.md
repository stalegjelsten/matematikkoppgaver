---
{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag S1 eksamen H2025","author":"Ståle Gjelsten","date":"2026-03-25","modified":"2026-03-25","fag":["s1"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-s1-eksamen-h2025/","dgPassFrontmatter":true}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

# Del 1

## Oppgave 1-1

### 1-1a

Vi bruker potensregler og derivasjonsregler:

$$f(x) = \frac{1}{3}x^3 + x^{1/2} + 2$$

$$f'(x) = x^2 + \frac{1}{2}x^{-1/2} = x^2 + \frac{1}{2\sqrt{x}}$$

**$\underline{\underline{f'(x) = x^2 + \dfrac{1}{2\sqrt{x}}}}$**

### 1-1b

Vi bruker kvotientregelen på $g(x) = \dfrac{2x-3}{e^x}$:

$$g'(x) = \frac{2 \cdot e^x - (2x-3) \cdot e^x}{(e^x)^2} = \frac{e^x(2 - 2x + 3)}{e^{2x}} = \frac{5-2x}{e^x}$$

Dermed:

$$
\begin{aligned}
g'(2) &= \frac{5- 2\cdot 2 }{e^2} = \frac{1}{e^2} \\[6pt]
g'(3) &= \frac{5- 2 \cdot 3}{e^3} = -\frac{1}{e^3}
\end{aligned}
$$

**$\underline{\underline{g'(2) = \dfrac{1}{e^2}}}$ og $\underline{\underline{g'(3) = -\dfrac{1}{e^3}}}$**

### 1-1c

Siden $g'(2) = \dfrac{1}{e^2} > 0$, er grafen til $g$ stigende i $x = 2$.

Siden $g'(3) = -\dfrac{1}{e^3} < 0$, er grafen til $g$ synkende i $x = 3$.

Fordi $g'$ er kontinuerlig og skifter fortegn fra positivt til negativt i intervallet $\langle 2, 3 \rangle$, har $g$ et **toppunkt** et sted i dette intervallet.

## Oppgave 1-2

### 1-2a

Vi setter $u = \lg x$ og skriver om likningen:

$$\begin{aligned}
u^2 - 2u - 8 &= 0\\
(u-4)(u+2) &= 0 \\
u = 4 \quad &\text{eller} \quad u = -2
\end{aligned}$$

**Tilbake til $x$:**

$$\lg x = 4 \implies x = 10^4 = \underline{\underline{10\,000}}$$

$$\lg x = -2 \implies x = 10^{-2} = \underline{\underline{0{,}01}}$$

### 1-2b

Vi bruker definisjonen av logaritme:

$$\log_a \frac{1}{64} = -3 \implies a^{-3} = \frac{1}{64} \implies a^3 = 64 \implies a = \sqrt[3]{64}$$

**$\underline{\underline{a = 4}}$**

## Oppgave 1-3

### 1-3a

Vi sjekker nevneren i $x = -2$:

$$x^2 - 2x - 8 = (x-4)(x+2) \implies \text{nevner} = 0 \text{ når } x = -2$$

Telleren i $x = -2$:

$$(-2)^2 - 4 \cdot (-2) + 2 = 4 + 8 + 2 = 14 \neq 0$$

Siden nevneren er $0$ og telleren er $\neq 0$ i $x = -2$, **eksisterer ikke grenseverdien**.

### 1-3b

**Del 1 – bestem $a$:**

For at grenseverdien skal eksistere, må telleren også være $0$ i $x = -2$:

$$(-2)^2 + a \cdot (-2) + 2 = 0 \implies 6 - 2a = 0 \implies \underline{\underline{a = 3}}$$

**Del 2 – bestem grenseverdien:**

Med $a = 3$ faktoriserer vi teller og nevner:

$$\frac{x^2 + 3x + 2}{x^2 - 2x - 8} = \frac{(x+1)(x+2)}{(x-4)(x+2)}$$

Kansellerer $(x+2)$ (vi ser bort fra $x = -2$ siden vi tar grenseverdi):

$$\lim_{x \to -2} \frac{(x+1)\cancel{(x+2)}}{(x-4)\cancel{(x+2)}} = \frac{-2+1}{-2-4} = \frac{-1}{-6}$$

**Grenseverdien er $\underline{\underline{\dfrac{1}{6}}}$.**

## Oppgave 1-4

### 1-4a

- Første tegn: én av bokstavene A–F → $6$ valg
- Andre tegn: ett av sifrene 1–9 → $9$ valg
- Tredje tegn: ett av de **resterende** 8 sifrene → $8$ valg

$$6 \cdot 9 \cdot 8 = \underline{\underline{432}}$$

**Det er mulig å lage $432$ ulike passord.**

### 1-4b

Totalt $7$ tegn: $\{1, 2, 3, 4, A, B, C\}$. Uten begrensninger: $7^3 = 343$ passord.

Vi trekker fra de som **ikke** oppfyller kravet om minst én bokstav og minst ett siffer:

- Kun siffer $\{1,2,3,4\}$: $4^3 = 64$ passord
- Kun bokstav $\{A,B,C\}$: $3^3 = 27$ passord

$$343 - 64 - 27 = \underline{\underline{252}}$$

**Det er mulig å lage $252$ ulike passord.**

## Oppgave 1-5

Vi har $f(x) = 4x^2 \cdot \ln x$ definert for $x > 0$. Deriverer med produktregelen:

$$f'(x) = 8x \cdot \ln x + 4x^2 \cdot \frac{1}{x} = 8x\ln x + 4x = 4x(2\ln x + 1)$$

For $x > 0$ er $4x > 0$ alltid, så $f'(x) = 0$ krever:

$$2\ln x + 1 = 0 \implies \ln x = -\frac{1}{2} \implies x = e^{-1/2} = \frac{1}{\sqrt{e}}$$

**Fortegnsskjema for $f'(x)$:**

| $x$ | $0$ | | $\dfrac{1}{\sqrt{e}}$ | | $\to$ |
| :--: | :--: | :--: | :--: | :--: | :--: |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | bunn | $\nearrow$ | |

$f'$ skifter fortegn fra $-$ til $+$, så det er et **bunnpunkt**.

Funksjonsverdien:

$$f\!\left(\frac{1}{\sqrt{e}}\right) = 4 \cdot \frac{1}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}$$

**Grafen til $f$ har et bunnpunkt i $\underline{\underline{\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)}}$.**

## Oppgave 1-6

### 1-6a

Programmet kjører løkken `for i in range(3)` tre ganger. Hvert skudd gir enten `"treff"` (sannsynlighet $\frac{2}{5}$) eller `"bom"`. Programmet skriver ut $\frac{\texttt{antall\_treff}}{3}$.

**Mulige verdier:**

$$\underline{\underline{0, \quad \frac{1}{3}, \quad \frac{2}{3}, \quad 1{,}0}}$$

### 1-6b

Programmet skriver ut $1{,}0$ kun hvis alle tre skudd er treff:

$$P(\text{alle tre treff}) = \left(\frac{2}{5}\right)^3 = \frac{8}{125}$$

**$\underline{\underline{P = \dfrac{8}{125}}}$**

### 1-6c

Sannsynligheten for at Einar scorer minst ett mål på $n$ straffespark:

$$P(\text{minst ett mål}) = 1 - 0{,}7^n \geq 0{,}5$$

$$0{,}7^n \leq 0{,}5$$

Vi prøver:

- $n = 1$: $1 - 0{,}7 = 0{,}30 < 0{,}5$
- $n = 2$: $1 - 0{,}49 = 0{,}51 \geq 0{,}5$ ✓

**Einar må ta minst $\underline{\underline{2}}$ straffespark.**

---

# Del 2

## Oppgave 2-1

### 2-1a

Vi setter $t = 0$ i 1910 og bruker eksponentiell regresjon på datapunktene:

| $t$ | $0$ | $3$ | $9$ | $11$ | $15$ | $17$ | $21$ | $25$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $F$ | $800$ | $963$ | $1253$ | $1511$ | $1720$ | $1879$ | $2387$ | $2774$ |

Eksponentiell regresjon (f.eks. i GeoGebra) gir:

$$\underline{\underline{F(t) \approx 820{,}6 \cdot 1{,}051^t}}$$

Grafen under viser at kurven passer godt til datapunktene ($R^2 \approx 0{,}99$):

![Regresjonsmodell og datapunkter for oppgave 2-1a](/img/user/_resources/s1-h25-2-1-a-graf.png)

**Gyldighetsområde:** Modellen passer for dataene i perioden 1910–1935, det vil si $t \in [0, 25]$. Utenfor dette tidsrommet kan vekstmønsteret endre seg og modellen mister gyldighet.

### 2-1b

Vekstfarten er den deriverte av $F$:

$$F'(t) = 820{,}6 \cdot 1{,}051^t \cdot \ln(1{,}051)$$

Vi løser $F'(t) = 80$ i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1b](/img/user/_resources/s1-h25-2-1-b-CAS.png)

CAS gir $t \approx 13{,}5$, dvs. fra og med $t = 14$ (år **1924**).

**Befolkningen økte med mer enn 80 personer per år fra og med 1924 ifølge modellen.**

### 2-1c

Gjennomsnittlig befolkningsvekst fra 1910 til år $t$ er $\dfrac{F(t) - F(0)}{t}$. Vi løser:

$$\frac{F(t) - 820{,}6}{t} = 80$$

i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-1c](/img/user/_resources/s1-h25-2-1-c-CAS.png)

CAS gir $t \approx 24{,}6$, så vi runder opp til $t = 25$.

**Det gikk $\underline{\underline{25 \text{ år}}}$ (til 1935) før den gjennomsnittlige veksten fra 1910 var større enn 80 personer per år.**

## Oppgave 2-2

### 2-2a

Vi sjekker grenser fra venstre og høyre i $x = -2$:

$$\lim_{x \to -2^-} (2x - 2) = 2(-2) - 2 = -6$$

$$\lim_{x \to -2^+} (2x^3 + 2x^2 - 4x) = 2(-8) + 2(4) - 4(-2) = -16 + 8 + 8 = 0$$

Siden $\lim_{x \to -2^-} f(x) = -6 \neq 0 = \lim_{x \to -2^+} f(x)$ eksisterer ikke grenseverdien i $x = -2$.

**$f$ er ikke kontinuerlig i $x = -2$.**

### 2-2b

For at $f$ skal være kontinuerlig i $x = k$ må:

$$\lim_{x \to k^-} (2x^3 + 2x^2 - 4x) = 4$$

$$2k^3 + 2k^2 - 4k = 4$$

$$k^3 + k^2 - 2k - 2 = 0$$

Vi faktoriserer:

$$k^2(k+1) - 2(k+1) = (k^2-2)(k+1) = 0$$

$$k = \sqrt{2}, \quad k = -\sqrt{2}, \quad k = -1$$

Alle tre verdiene er større enn $-2$ og dermed i gyldighetsområdet $k \in \langle -2, \rightarrow \rangle$.

**$\underline{\underline{k = \sqrt{2}}}$, $\underline{\underline{k = -\sqrt{2}}}$ eller $\underline{\underline{k = -1}}$**

## Oppgave 2-3

Hver pose inneholder $3 + 8 + 7 = 18$ drops.

### 2-3a

Sander tar $2$ drops. Sannsynligheten for $2$ gule:

$$P(\text{2 gule}) = \frac{\binom{8}{2}}{\binom{18}{2}} = \frac{28}{153}$$

**$\underline{\underline{P = \dfrac{28}{153}}}$**

### 2-3b

Henny tar $3$ drops. Sannsynligheten for én av hver farge:

$$P(\text{en av hver}) = \frac{\binom{3}{1}\binom{8}{1}\binom{7}{1}}{\binom{18}{3}} = \frac{3 \cdot 8 \cdot 7}{816} = \frac{168}{816} = \frac{7}{34}$$

**$\underline{\underline{P = \dfrac{7}{34}}}$**

### 2-3c

Alle tre tar ett drops fra hver sin pose – uavhengige hendelser.

$$P(\text{alle samme}) = P(\text{alle grønn}) + P(\text{alle gul}) + P(\text{alle rød})$$

$$= \left(\frac{3}{18}\right)^3 + \left(\frac{8}{18}\right)^3 + \left(\frac{7}{18}\right)^3 = \frac{27 + 512 + 343}{5832} = \frac{882}{5832} = \frac{49}{324}$$

**$\underline{\underline{P = \dfrac{49}{324}}}$**

## Oppgave 2-4

### 2-4a

Inntekt per enhet er 100 kr. Overskuddet er:

$$O(x) = 100x - K(x) = 100x - 0{,}02x^2 - 60x - 12\,000 = -0{,}02x^2 + 40x - 12\,000$$

Vi finner maksimum ved å sette $O'(x) = 0$ og beregner i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-4a](/img/user/_resources/s1-h25-2-4-a-CAS.png)

CAS bekrefter at $O'(x) = 0$ i $x = 1000$ og at $O(1000) = 8000$.

**Det største overskuddet er $\underline{\underline{8\,000 \, \mathrm{kr}}}$, oppnådd ved produksjon og salg av 1000 enheter.**

### 2-4b

Nye faste kostnader er 8000 kr. Ved salg av $x = 1000$ enheter:

$$K(1000) = 0{,}02 \cdot 1000^2 + 60 \cdot 1000 + 8000 = 20\,000 + 60\,000 + 8000 = 88\,000 \, \mathrm{kr}$$

For å unngå underskudd må inntektene dekke kostnadene:

$$1000 \cdot p \geq 88\,000 \implies p \geq 88$$

**Den laveste prisen er $\underline{\underline{88 \, \mathrm{kr}}}$ per enhet.**

## Oppgave 2-5

### 2-5a

Vi beregner luktintensiteten $I = 1{,}4 \cdot \lg(C) - 0{,}3$ for begge grenseverdiene:

![GeoGebra CAS løsning for oppgave 2-5a](/img/user/_resources/s1-h25-2-5-a-CAS.png)

CAS gir:

- $I(500) \approx 3{,}48$: «plagsom lukt, bør begrenses»
- $I(1400) \approx 4{,}10$: «plagsomt, tiltak kreves»

Prøvene viser luktintensiteter i området $3{,}48$ til $4{,}10$, noe som tilsvarer kategoriene «plagsom» og «tiltak kreves».

**Ja, beboerne har grunnlag for å klage.**

### 2-5b

For at luktintensiteten skal bli akseptabel, trenger vi $1 \leq I \leq 2$. Vi løser i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-5b](/img/user/_resources/s1-h25-2-5-b-CAS.png)

CAS gir:
- $I = 2$ gir $C \approx 44$
- $I = 1$ gir $C \approx 8{,}5$

**Nye prøver må vise luktverdier i intervallet $\underline{\underline{8{,}5 \leq C \leq 44 \, \mathrm{OU/m^3}}}$ for at luktintensiteten skal bli akseptabel.**

## Oppgave 2-6

### 2-6a

**Spilleregler:**

- Spillet starter med 100 terninger.
- Hver runde kastes alle terningene (antallet er fast ved rundens start).
- For hvert kast som viser 6: legg til 3 terninger.
- For hvert kast som **ikke** viser 6: ta bort 1 terning.
- Etter at alle terningene er kastet, økes rundetelleren med 1.
- Spillet fortsetter til det ikke er noen terninger igjen.

### 2-6b

La $n$ være antall terninger ved starten av en runde. For hvert enkelt kast er:

$$\text{E}[\text{netto endring per terning}] = \frac{1}{6} \cdot 3 + \frac{5}{6} \cdot (-1) = \frac{1}{2} - \frac{5}{6} = -\frac{1}{3}$$

Forventet antall terninger etter én runde: $n - \dfrac{n}{3} = \dfrac{2n}{3}$

Etter $r$ runder er forventet antall terninger:

$$\text{E}[n_r] = 100 \cdot \left(\frac{2}{3}\right)^r$$

>[!note] Merk
>Bemerker vi at antall terninger etter en runde faktisk er $4 \cdot (\text{antall sekser})$, kan man via simulering av programmet (kjørt mange ganger) bestemme gjennomsnittet presist.

Simulering av programmet over mange kjøringer gir et gjennomsnitt på ca. $8{,}5$ runder.

**Det gjennomsnittlige antallet runder spillet vil vare, er $\underline{\underline{\approx 8{,}5}}$.**

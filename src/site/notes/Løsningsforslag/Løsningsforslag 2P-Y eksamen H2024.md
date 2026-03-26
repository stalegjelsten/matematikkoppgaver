---
{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag 2P-Y eksamen H2024","author":"Ståle Gjelsten","date":"2026-03-25","modified":"2026-03-25","fag":["2p-y"],"eksamen":"h24","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-2-p-y-eksamen-h2024/","dgPassFrontmatter":true}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

## Oppgave 1-1

En økning på 30 % betyr at 30 % av den opprinnelige prisen er lik 12 kroner.

$$0{,}30 \cdot x = 12$$

$$x = \frac{12}{0{,}30} = 40$$

**Varen kostet $\underline{\underline{40 \, \mathrm{kr}}}$ før prisøkningen.**

## Oppgave 1-2

### 1-2a

Data sortert i stigende rekkefølge:

$$0 \quad 3 \quad 3 \quad 3 \quad \underbrace{ \textcolor{steelblue}{4} \quad \textcolor{steelblue}{5} }_{ \text{Median} } \quad 5 \quad 5 \quad 6 \quad 8$$


$$\text{Gjennomsnitt} = \frac{0 + 3 + 3 + 3 + 4 + 5 + 5 + 5 + 6 + 8}{10} = \frac{42}{10} = 4{,}2$$


$$\text{median} = \frac{4 + 5}{2} = 4{,}5$$

**Gjennomsnittet er 4,2 timer og medianen er 4,5 timer.**

### 1-2b

Den kumulative frekvensen for 5 timer er antall dager der Lars jobbet høyst 5 timer. Vi teller antall verdier som er mindre eller lik 5 timer: $0, 3, 3, 3, 4, 5, 5, 5$. 

**Den kumulative frekvensen for 5 timer er 8. Det betyr at Lars jobbet høyst 5 timer på 8 av de 10 siste dagene.**

## Oppgave 1-3

For at to størrelser skal være **proporsjonale**, må sammenhengen kunne skrives som $y = k \cdot x$ for en konstant $k > 0$. Grafen vil da være en rett linje som går gjennom origo.

For at to størrelser skal være **omvendt proporsjonale**, må sammenhengen kunne skrives som $y = \frac{k}{x}$ for en konstant $k > 0$. Grafen vil da være en hyperbel.

Fra grafen:

- **$f$ (grønn)** er en rett linje som går gjennom origo → $f$ viser **proporsjonale** størrelser.
- **$p$ (blå)** er en kraftig avtagende kurve som ligner en hyperbel → $p$ viser **omvendt proporsjonale** størrelser.
- **$q$ (rød)** er en avtagende kurve, men den er brattere enn en hyperbel ved lave $x$-verdier og flater mer ut – dette er ikke en ren hyperbel, og er verken proporsjonal eller omvendt proporsjonal.
- **$g$ (lilla)** er en stigende kurve som ikke går gjennom origo med konstant stigningstall – verken proporsjonal eller omvendt proporsjonal.

**$\underline{\underline{f}}$ viser proporsjonale størrelser, og $\underline{\underline{p}}$ viser omvendt proporsjonale størrelser.**

## Oppgave 1-4

### 1-4a

Vi teller sirkler i de tre figurene:

- Figur 1: $12$ sirkler
- Figur 2: $16$ sirkler
- Figur 3: $20$ sirkler

Mønsteret øker med $4$ sirkler for hvert figurnummer.

**Figur 4:**

$$12 + 3 \cdot 4 = 24$$

**Figur 10:**

$$12 + 9 \cdot 4 = 48$$

**Figur 4 har $\underline{\underline{24}}$ sirkler og figur 10 har $\underline{\underline{48}}$ sirkler.**

### 1-4b

Vi ser at $T(n) = 12 + (n-1) \cdot 4 = 4n + 8$.

**$\underline{\underline{T(n) = 4n + 8}}$**

## Oppgave 1-5

### 1-5a

Linje 2 i programmet er `return 200 * 0.975 ** x`.

- $200$ er utslippet i tonn CO₂ i 2025
- $0{,}975 = 1 - 0{,}025$ er vekstfaktoren når utslippet reduseres med $2{,}5 \,\%$ per år
- $x$ er antall år etter 2025

**Uttrykket $200 \cdot 0{,}975^x$ gir utslippet (i tonn CO₂) $x$ år etter 2025.**

### 1-5b

Programmet beregner $f(0) + f(1) + f(2) + f(3) + f(4)$, altså summen av utslippet for $x = 0, 1, 2, 3, 4$.

Dette tilsvarer utslippet i 2025, 2026, 2027, 2028 og 2029.

**Verdien som skrives ut ($\approx 951 \, \mathrm{tonn}$), er det totale CO₂-utslippet fra bedriften i perioden 2025–2029.**

## Oppgave 2-1

### 2-1a

**Metode 1 – bruke modellen direkte:**

Desember 2025 er 12 måneder etter desember 2024, så vi setter $x = 12$:

$$F(12) = 620 \cdot 1{,}045^{12} \approx 1051 \text{ flasker}$$

For å finne når salget overstiger 2000 flasker løser vi $F(x) > 2000$:

$$620 \cdot 1{,}045^x = 2000 \implies 1{,}045^x = \frac{2000}{620} \approx 3{,}226$$

$$x = \frac{\lg 3{,}226}{\lg 1{,}045} \approx 26{,}6$$

Det vil si at fra og med $x = 27$ (mars 2027) vil salget overstige 2000 flasker.

**Metode 2 – grafisk løsning:**

Vi tegner $F(x) = 620 \cdot 1{,}045^x$ og leser av. For spørsmål 1 leser vi av $y$-verdien ved $x = 12$ (grønt punkt). For spørsmål 2 finner vi skjæringspunktet mellom $F(x)$ og linjen $y = 2000$ (rødt punkt).

![Graf av $F(x) = 620 \cdot 1

Fra grafen leser vi av:

1) **I desember 2025 regner bedriften med å selge omtrent $\underline{\underline{1051 \text{ flasker}}}$ iste.**

2) **Fra og med $x = 27$, som tilsvarer mars 2027, vil bedriften for første gang selge mer enn $\underline{\underline{2000 \text{ flasker}}}$ i løpet av en måned.**

### 2-1b

Fra desember 2024 ($x = 0$) til desember 2026 ($x = 24$):

$$F(0) = 620 \qquad F(24) = 620 \cdot 1{,}045^{24} \approx 1783$$

$$\text{Prosentvis økning} = \frac{F(24) - F(0)}{F(0)} \cdot 100 = \frac{1783 - 620}{620} \cdot 100 \approx 187{,}6 \,\%$$

Vi kan også bruke at vekstfaktoren over 24 måneder er $1{,}045^{24} \approx 2{,}876$, dvs. $188 \,\%$ økning.

**Salget vil øke med omtrent $\underline{\underline{188 \,\%}}$ fra desember 2024 til desember 2026.**

## Oppgave 2-2

### 2-2a

Kjøkkensvampen har volum $150 \, \mathrm{cm^3}$, og det er mellom $25$ og $54$ milliarder bakterier per cm³.

Vi bruker midtverdien som overslag: omtrent $40$ milliarder $= 4 \times 10^{10}$ bakterier per cm³.

$$4 \times 10^{10} \cdot 150 = 6 \times 10^{12}$$

**Det er omtrent $\underline{\underline{6 \times 10^{12}}}$ bakterier i kjøkkensvampen.**

### 2-2b

De fleste bakterier er mellom $0{,}2$ og $2$ mikrometer, omtrent $1 \, \mathrm{\mu m} = 10^{-6} \, \mathrm{m}$.

Med $6 \times 10^{12}$ bakterier, hver på omtrent $1 \, \mathrm{\mu m}$:

$$6 \times 10^{12} \cdot 10^{-6} \, \mathrm{m} = 6 \times 10^{6} \, \mathrm{m}$$

**Rekken ville bli omtrent $\underline{\underline{6 \times 10^{6} \, \mathrm{m}}}$ lang – det tilsvarer $6\,000 \, \mathrm{km}$!**

## Oppgave 2-3

«$a \,\%$ av $b$» betyr $\frac{a}{100} \cdot b = \frac{a \cdot b}{100}$.

«$b \,\%$ av $a$» betyr $\frac{b}{100} \cdot a = \frac{b \cdot a}{100}$.

Siden multiplikasjon er kommutativ ($a \cdot b = b \cdot a$), gir de to regnestykket alltid det samme svaret:

$$\frac{a \cdot b}{100} = \frac{b \cdot a}{100}$$

**Vi kan bytte om tallene i prosentoppgaver: $a \,\%$ av $b$ gir alltid samme svar som $b \,\%$ av $a$, fordi vi i begge tilfeller deler produktet $a \cdot b$ på $100$. Multiplikasjon er kommutativ.**

## Oppgave 2-4

### 2-4a

La $x$ = antall dager Hermann parkerer i løpet av et år.

$$\textcolor{tomato}{A(x) = 50x}$$

$$\textcolor{steelblue}{B(x) = 1995 + 30x}$$

$$\textcolor{seagreen}{C(x) = 3490 + 24x}$$

### 2-4b

B lønner seg fremfor A når B er billigere enn A. Vi finner skjæringspunktet mellom A og B grafisk:

![Graf av parkeringsavtalene A, B og C](/img/user/_resources/2p-y-h24-2-4-graf.png)

Fra grafen ser vi at:

- $A$ og $B$ skjærer hverandre ved $x \approx 100$ (nøyaktig $x = 99{,}75$)
- $B$ og $C$ skjærer hverandre ved $x \approx 249$

Mellom 100 og 249 parkeringsdager er B det billigste alternativet.

**Hermann må parkere minst $\underline{\underline{100 \text{ dager}}}$ i løpet av året for at det skal lønne seg å velge avtale B fremfor A. Avtale B er gunstigst mellom 100 og 249 parkeringsdager.**

## Oppgave 2-5

### 2-5a

Lag A sortert: $15, 18, 24, 45, 60, 78$

**Medianalder:**

Seks personer → gjennomsnittet av den 3. og 4. verdien:

$$\text{median} = \frac{24 + 45}{2} = 34{,}5 \, \mathrm{år}$$

**Gjennomsnittsalder:**

$$\bar{x} = \frac{15 + 60 + 24 + 18 + 45 + 78}{6} = \frac{240}{6} = 40 \, \mathrm{år}$$

**Standardavvik** (beregnet med kalkulator):

$$\sigma \approx 23{,}2 \, \mathrm{år}$$

**$\underline{\underline{\text{Median} = 34{,}5 \, \mathrm{år}, \; \bar{x} = 40 \, \mathrm{år}, \; \sigma \approx 23{,}2 \, \mathrm{år}}}$**

### 2-5b

**Lag B** har høyere median og høyere gjennomsnitt enn lag A, men lavere standardavvik. Det betyr at personene på lag B generelt er eldre enn på lag A, og at de er mer jevnaldrende (mindre variasjon i alderen).

**Lag C** har lavere median men høyere gjennomsnitt enn lag A. Det tyder på at det er en eller noen få personer med svært høy alder som drar gjennomsnittet opp, mens over halvparten er yngre enn medianen på lag A. Det høyere standardavviket bekrefter at aldersfordelingen er mer spredt enn på lag A.

### 2-5c

**Eksempel på lag B** (median > 34,5, gjennomsnitt > 40, SD < 23,2):

$$38, \; 40, \; 42, \; 45, \; 50, \; 55$$

- Median: $\frac{42+45}{2} = 43{,}5 > 34{,}5$ ✓
- Gjennomsnitt: $\frac{270}{6} = 45 > 40$ ✓
- SD $\approx 5{,}9 < 23{,}2$ ✓

**Eksempel på lag C** (median < 34,5, gjennomsnitt > 40, SD > 23,2):

$$10, \; 15, \; 30, \; 35, \; 60, \; 100$$

- Median: $\frac{30+35}{2} = 32{,}5 < 34{,}5$ ✓
- Gjennomsnitt: $\frac{250}{6} \approx 41{,}7 > 40$ ✓
- SD $\approx 30{,}6 > 23{,}2$ ✓

## Oppgave 2-6

### 2-6a

Vi skal bestemme $a$ og $b$ i modellen $L(x) = a \cdot x^b$.

Vi bruker kalkulator (regresjon med potensmodell) på datapunktene:

| $x$ | $1$ | $8$ | $22$ | $36$ | $50$ | $64$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $L$ | $10$ | $20$ | $28$ | $33$ | $37$ | $40$ |

Regresjonen gir $a \approx 10$ og $b \approx 0{,}334$.

![Regresjonsmodell og datapunkter for oppgave 2-6a](/img/user/_resources/2p-y-h24-2-6-a-graf.png)

Grafen viser at modellen passer godt til datapunktene.

**$\underline{\underline{a \approx 10 \text{ og } b \approx 0{,}334}}$, slik at $L(x) \approx 10 \cdot x^{0{,}334}$.**

### 2-6b

Vi vil finne $x$ slik at $L(x) = 45$. Vi tegner linjen $y = 45$ og finner skjæringspunktet med $L(x)$:

![Graf av $L(x) = 10 \cdot x^

Fra grafen leser vi av at $L(x) = 45$ når $x \approx 91$ dager.

$91$ dager $\approx 13$ uker fra dag 1. Hanne begynte for 9 uker siden, så det er omtrent $13 - 9 = 4$ uker til hun klarer målet.

**Ifølge modellen vil det ta omtrent $\underline{\underline{13 \text{ uker}}}$ fra Hanne startet (ca. 4 uker fra nå) før hun klarer å løpe 45 minutter sammenhengende.**

### 2-6c

Gjennomsnittlig økning per dag fra dag 1 til dag 60:

$$\frac{L(60) - L(1)}{60 - 1} = \frac{10 \cdot 60^{0{,}334} - 10 \cdot 1^{0{,}334}}{59} \approx \frac{39{,}2 - 10{,}0}{59} \approx 0{,}495$$

**Hanne har i gjennomsnitt økt løpetiden med omtrent $\underline{\underline{0{,}5 \, \mathrm{min/dag}}}$ fra dag 1 til dag 60 ifølge modellen.**

## Oppgave 2-7

Dette er en åpen presentasjonsoppgave uten ett fasitsvar. Her er et eksempel på funn og framstillinger:

**Beregninger:**

Prosentvis endring i inntektsgivende arbeid for menn fra 1970 til 2010:

$$\frac{4{,}17 - 5{,}48}{5{,}48} \cdot 100 \approx -23{,}9 \,\%$$

Prosentvis endring i inntektsgivende arbeid for kvinner fra 1970 til 2010:

$$\frac{3{,}02 - 1{,}93}{1{,}93} \cdot 100 \approx 56{,}5 \,\%$$

**Interessante funn:**

- Menns tid på inntektsgivende arbeid har gått ned med ca. 24 % fra 1970 til 2010, mens kvinners tid har økt med ca. 57 %.
- Kvinner brukte i 1970 nesten tre ganger så mye tid på husholdsarbeid som menn (5,92 mot 2,22 timer), mens i 2010 er forskjellen mye mindre (3,83 mot 3,00 timer).
- Menn og kvinner bruker omtrent like mye tid på utdanning i alle tre årstall.

**Mulig diagram:** Et gruppert søylediagram der man sammenligner menn og kvinner for hvert år, eller et linjediagram som viser utviklingen fra 1970 til 2010 for hver kategori.

## Oppgave 2-8

Tores treningsplan er en geometrisk rekke med $a_1 = 40 \, \mathrm{km}$ og kvotient $k = 1{,}05$.

### 2-8a

Distansen i uke 50 er det 50. leddet i rekken:

$$a_{50} = a_1 \cdot k^{49} = 40 \cdot 1{,}05^{49} \approx 40 \cdot 10{,}921 \approx 436{,}9$$

**Tore vil sykle omtrent $\underline{\underline{437 \, \mathrm{km}}}$ i uke 50 dersom han klarer å følge planen.**

### 2-8b

Den totale distansen over 50 uker er summen av de 50 første leddene:

$$s_{50} = a_1 \cdot \frac{k^{50} - 1}{k - 1} = 40 \cdot \frac{1{,}05^{50} - 1}{1{,}05 - 1} = 40 \cdot \frac{11{,}467 - 1}{0{,}05} \approx 40 \cdot 209{,}35 \approx 8374$$

**Tore vil til sammen ha syklet omtrent $\underline{\underline{8374 \, \mathrm{km}}}$ i løpet av 50 uker.**

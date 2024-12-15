---
{"oppgave":null,"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":-3,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag 2P-Y eksamen V2024","author":"Ståle Gjelsten","date":"2024-05-24","modified":"2024-05-30","fag":["2p-y"],"eksamen":"v24","permalink":"/losningsforslag/losningsforslag-2-p-y-eksamen-v2024/","dgPassFrontmatter":true}
---

# Del 1

## Oppgave 1
Hvis prisene og antall sjokolader er proporsjonale størrelser, så skal vi få det samme svaret hvis vi deler pris på antall sjokolader for alle tilbudene

|  Pris | Sjokolader |  Forhold |
| :---: | :--------: | :------: |
|  25   |     2      |   12,5   |
|  100  |     8      |   12,5   |
|  200  |     16     |   12,5   |
|  300  |     24     |   12,5   |
Prisen per sjokolade er 12,5 kroner uansett hvilket tilbud vi ser på.

**Antall sjokolader og prisen du betaler er proporsjonale størrelser.**

>[!error] Feil i oppgaveteksten
>
>I denne oppgaveteksten så spør de om antall sjokolader og prisen du betaler for *hver* sjokolade. Disse to størrelsene er egentlig ikke proporsjonale siden prisen per sjokolade er 12,5 kroner uansett.

## Oppgave 2

- 32 kroner for 2 bagetter betyr at hver bagett koster 16 kroner.
- 48 kroner for 4 bagetter betyr at hver bagett koster 12 kroner.

For å regne den prosentvise forskjellen kan vi sammenligne differansen mellom de to tilbudene og den dyreste prisen.
$$
\frac{\text{differanse}}{\text{det vi sammenligner med}}=\frac{16-12}{16}=\frac{4}{16}=\frac{1}{4}=25 \,\% $$
 
**Prisen per bagett blir 25 % lavere dersom hun kjøper 4 istedenfor 2 bagetter.**

## Oppgave 3
For å finne den totale mengden vann på en måned må vi regne ut
$$
\text{antall mennesker} \cdot \text{gjennomsnittlig vannforbruk per døgn} \cdot \text{30 dager}$$
$$
\begin{aligned}
700\, 000 \cdot 150 \cdot 30\\
7 \cdot 10^{5} \cdot 1{,}5 \cdot 10^{2} \cdot 3\cdot 10^{1} \\
7 \cdot 3\cdot 1{,}5 \cdot 10^{5+2+1}\\
31{,}5 \cdot 10^{8}\\
3{,}15 \cdot 10^{9}
\end{aligned}
$$
**I Oslo bruker man $3{,}15 \cdot 10^{9}$ liter vann i måneden.**

## Oppgave 4
### 1-4a
Jeg fortsetter mønsteret, som jeg ser består av to kvadrater hvor kvadratene overlapper med en sirkel.

Det er $5\cdot 5 + 5 \cdot 5 -1=49$ sirkler i figur 4.
Det er $10 \cdot 10 + 10\cdot 10 -1 =199$ sirkler i figur 9.

### 1-4b
Hver figur består av to kvadrater, hvor det er én mer sirkel i sidekanten enn figurnummeret. I figur $n$ har hvert kvadrat $(n+1)^{2}$ sirkler. Vi har to slike kvadrater slik at formelen blir $(n+1)^{2} \cdot 2$ også må vi huske å trekke fra 1 siden det er en sirkel som overlapper. Det ferdige uttrykket blir
$$
2(n+1)^{2}-1
$$

# Del 2

## Oppgave 1
### 2-1a
Hvis det bare 1 person som skal på hyttetur så blir prisen per person
$$
H(1)=\frac{18000}{1}=18000
$$
Det koster altså 18 000 kr å leie hytta.

I tillegg får vi oppgitt definisjonsmengden $1\leq x\leq 12$. Det betyr at det maks er 12 venner som skal på hyttetur, kanskje fordi det ikke er plass til flere på hytta.

**Det koster 18 000 kroner å leie hytta, og det er maksimalt 12 venner som kan dra på hyttetur.**

### 2-1b
Jeg legger inn funksjonsuttrykket i GeoGebra og avgrenser funksjonen til definisjonsmengden ved å bruke `Funksjon()`-kommandoen. Deretter legger jeg inn $y=2250$ og finner skjæringspunktet mellom funksjonene. 

**Skjæringspunktet mellom grafen og den rette linja er $(6, 3000)$, se punkt $A$ i utklippet. Det betyr at de trenger å være 6 personer som spleiser på leia for at prisen skal bli 2250 kr.**

![](/img/user/_resources/2py-v24-2-1.png)

### 2-1c
Jeg setter ut punktene i koordinatsystemet ved å skrive dem inn slik de står i oppgaveteksten, se punkt $B$ og $C$. De to punktene ligger på grafen til $H$ ved 6 og 12 venner. Jeg bruker linjeverktøyet for å lage en linje mellom punktene, og stigningsverktøyet til å måle stigningen til linja.

**Stigningstallet for linja er -250, se verdi $a$. Stigningstallet til linja forteller oss at prisen per deltaker i gjennomsnitt blir 250 kr rimeligere per person, dersom vi øker antallet deltakere fra 6 til 12.**

## Oppgave 2
### 2-2a
For å bestemme forskjellen i prosentpoeng finner jeg differansen mellom prosenttallene
$$
5{,}4 - 5{,}15 = 0{,}25
$$
For å bestemme forskjellen i prosent så sammenligner jeg differansen med renten for 3 måneder
$$
\frac{5{,}4 \,\% - 5{,}15 \,\%}{5{,}15 \,\%}=\frac{0{,}25 \,\%}{5{,}15 \,\%}=0{,}0476=4{,}76 \,\%
$$
**Hvis hun binder pengene i ett år er renten 0,25 prosentpoeng og 4,76 % høyere enn hvis hun binder pengene i 3 måneder.**

### 2-2b
Jeg finner rentene ved å gange sparebeløpet med rentesatsen
$$
450 \, 000 \cdot 5{,}4 \,\%=450 \, 000 \cdot 0{,}054=24 \, 300
$$
**Renteinntektene er 24 300 kroner hvis hun binder pengene i ett år.**

## Oppgave 3
### 2-3a
Jeg beregnet gjennomsnittet og standardavviket til turene til Solveig ved å bruke formlene `=gjennomsnitt()` og `=stdav.p()` i Excel. Jeg oppsummerer opplysningene om gjennomsnitt og standardavvik til venninnene i tabellen

|         | Gjennomsnitt | Standardavvik |  Median   |
| ------- | :----------: | :-----------: | :-------: |
| Solveig |  7,15 timer  |  2,45 timer   | 7,5 timer |
| Miriam  |  4,7 timer   |   4,2 timer   |  4 timer  |

Solveig har omtrent 2,5 timer høyere gjennomsnitt enn Miriam. Solveig går derfor oftere turer som er veldig lange (hun har et gjennomsnitt på over 7 timer). Gjennomsnittet og medianen til Solveig er ganske like, det tyder på at det er få ekstreme verdier i datamaterialet.

Solveig har et mye lavere standardavvik enn Miriam, nesten 2 timer eller kun$\frac{4{,}2-2{,}45}{4{,}2}=41{,}7 \,\%$ av Miriams standardavvik. Det er derfor mye større variasjon lengdene på turene til Miriam. Sannsynligvis har hun gått noen veldig lange turer siden standardavviket er nesten like høyt som gjennomsnittet.

### 2-3b
Den kumulative frekvensen for turer på 5 timer er 14, og den kumulative frekvensen for turer på 3 timer er 11. De har ikke gått noen turer sammen på 4 timer.

Siden kumulativ frekvens er summen av alle frekvenser for observasjoner som er mindre eller lik den aktuelle observasjonen, kan vi finne frekvensen for antall turer på 5 timer slik:
$$
14-11=3
$$

Ifølge datamaterialet i starten av oppgaven har Solveig gått 4 turer på 8 timer. Ifølge de kumulative frekvensene i tabellen har de to venninnene vært på $17-14=3$ turer sammen på 8 timer. Solveig har altså gått en skitur på 8 timer alene, og 3 sammen med Miriam.

## Oppgave 4
### 2-4a
Vi lar $x$ være antall måneder etter november og bruker regresjon i GeoGebra. Siden modellen skal stige med 35 % per måned bør vi velge eksponentiell modell, siden disse vokser med en fast prosent.

![Regresjon i GeoGebra av Tuvas følgere](/img/user/_resources/2py-v24-2-4a.png)

**Modellen $f(x)=5244 \cdot 1{,}35^{x}$ er en modell som vokser med 35 % per måned, og som kan være modellen Tuva har brukt.**

### 2-4b
Tuva har 24 008 følgere i april. Hvis økningen i mai skal være 35 % + 5 prosentpoeng så har hun $24008 \cdot 1{,}40=33 \,611$ følgere i mai.

I juni øker økningen med enda 5 prosentpoeng til 45 %. Antall følgere i juni vil derfor være $33 \,611 \cdot 1{,}45=48\, 736$.

### 2-4c
Vi kan bruke modellen $f(x)=5244 \cdot 1{,}35^{x}$ til å beregne hvor mange følgere hun har i august med 35 % økning. August tilsvarer $x=9$
$$
f(9)=5244 \cdot 1{,}35^9=78 \,922
$$

Dersom Tuva klarer å holde målet sitt med 5 prosentpoeng økning vil hun i juli ha
$48 \, 736 \cdot 1{,}50=73 \, 104$ følgere, og i august $73 \, 104 \cdot 1{,}55=113 \, 311$ følgere.

Vi finner den prosentvise forskjellen
$$
\frac{113 \,311-78\,922}{78\,922} = \frac{34 \,389}{78\,922}=43{,}6 \,\%
$$
**Tuva vil ha 43,6 % flere følgere i august om hun klarer å nå det nye målet sitt.**

## Oppgave 5
### Påstand 1
Den første søylen i histogrammet har høyde 2 og bredde 40, altså er frekvensen $2 \cdot 40=80$. **Derfor stemmer det at 80 elever brukte 40 minutter eller mindre på lekser.**

### Påstand 2
Søylen mellom 100 og 150 minutter har høyde 2, altså er frekvensen $2 \cdot 50 = 100$. For å bestemme den relative frekvensen finner jeg først det totale antall elever ved å finne arealet til de siste to søylene: $6 \cdot 20=120$ og $5 \cdot 40=200$. Det er altså $80+120+200+100=500$ elever på skolen og **den relative frekvensen for 100 til 150 minutter blir $\frac{100}{500}=\frac{1}{5}$.**

### Påstand 3
Det er 80 elever som vi kan regne med at har brukt 20 minutter i gjennomsnitt (siden 20 ligger midt i intervallet $[0,40\rangle$). Det er 120 elever som i gjennomsnitt har brukt 50 minutter. Til sammen har disse elevene brukt
$$
80 \cdot 20 + 120 \cdot 50 = 1600 + 6000= 7600 \text{ minutter}
$$
Hvis vi fordeler tiden på de 200 elevene får vi gjennomsnittet
$$
\frac{7600 \text{ min}}{200 \text{ elever}}=\underline{\underline{38}} \text{ min per elev}
$$

### Påstand 4
Medianeleven blant de som brukte under 60 minutter er omtrent elev nummer 100. Siden det er 80 elever i det første intervallet, så må vår medianelev være elev nummer 20 av 120 i det andre intervallet. Med andre ord finner vi medianen vår $\frac{20}{120}=\frac{1}{6}$ ut i intervallet. For å finne ut hvor mange minutter dette tilsvarer så kan jeg ta bredden av intervallet og gange med $\frac{1}{6}$
$$
20 \cdot \frac{1}{6}=3{,}33
$$
Medianen vil være 3,33 minutter over bunnen av intervallet vårt, altså ved $40+3{,}33=43{,}33$ minutter. **Medianen 43,33 minutter er altså høyere enn gjennomsnittet på 38 minutter.**

## Oppgave 6
**Thea vil finne beløpet på BSU-kontoen for hvert år hvis hun setter inn 27 500 kr i 10 år fra 2024–2033.** Det ser ut til at programmet regner med at hun setter inn pengene i starten av året, og at rentene beregnes ved utgangen av året. 

- Linje 1: Setter at innskuddet skal være 27 500 kr
- Linje 2: Setter rentesatsen
- Linje 3: Setter innskuddet til null kroner foreløpig (hun initialiserer variabelen `BSU`)
- Linje 5: For-løkka kjører 10 ganger. Variabelen `år` tar verdiene 2024 til og med 2033.
- Linje 7: Hun legger til et nytt innskudd hvert år
- Linje 9: Hun regner ut rentene i kroner
- Linje 11: Hun legger rentene til BSU-kontoen
- Linje 13: Hun skriver ut hvilket år vi er ved utgangen av, hvor mye renteinntekter hun har hatt dette året og det totale beløpet på BSU-kontoen


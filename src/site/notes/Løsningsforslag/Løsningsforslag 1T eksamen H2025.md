---
{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag 1T eksamen H2025","author":"Ståle Gjelsten","date":"2026-04-01","modified":"2026-04-01","fag":["1t"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-1-t-eksamen-h2025/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"title":"Løsningsforslag 1T eksamen H2025","author":"Ståle Gjelsten","date":"2026-04-01","modified":"2026-04-01","fag":["1t"],"eksamen":"h25","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"]}}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

## Oppgave 1-1

Vi faktoriserer andregradsuttrykket. Vi leter etter to tall som multiplisert gir $-5$ og summert gir $4$. Det er $5$ og $-1$:

$$x^2 + 4x - 5 = (x + 5)(x - 1)$$

Ulikheten $(x+5)(x-1) < 0$ er oppfylt når de to faktorene har **motsatt fortegn**. Nullpunktene er $x = -5$ og $x = 1$.

Siden koeffisienten foran $x^2$ er positiv, er parabelen konveks (U-form), og uttrykket er negativt mellom nullpunktene.

$$\textbf{Løsning: } \quad \mathbf{-5 < x < 1}$$

## Oppgave 1-2

Vi prøver noen heltallsverdier for å finne et nullpunkt. For $x = 1$:

$$f(1) = 1 - 5 - 8 + 12 = 0$$

Siden $x = 1$ er et nullpunkt, er $(x - 1)$ en faktor. Vi utfører polynomdivisjon:

$$\frac{x^3 - 5x^2 - 8x + 12}{x - 1} = x^2 - 4x - 12$$

Vi faktoriserer $x^2 - 4x - 12 = 0$ med $abc$-formelen:

$$x = \frac{4 \pm \sqrt{16 + 48}}{2} = \frac{4 \pm \sqrt{64}}{2} = \frac{4 \pm 8}{2}$$

Dette gir $x = 6$ eller $x = -2$.

**Nullpunktene er $\underline{\underline{x = -2}}$, $\underline{\underline{x = 1}}$ og $\underline{\underline{x = 6}}$.**

## Oppgave 1-3

$$f(x) = \frac{2x + 6}{x^2 + 4}$$

**Påstand 1: Nøyaktig ett nullpunkt. — Riktig.**

Nullpunkt der $2x + 6 = 0$, altså $x = -3$. Nevneren $x^2 + 4 \geq 4 > 0$ for alle $x$, så $x = -3$ er gyldig. Det er nøyaktig ett nullpunkt.

**Påstand 2: Ingen vertikale asymptoter. — Riktig.**

Vertikale asymptoter oppstår der nevneren er null. Likningen $x^2 + 4 = 0$ har ingen reelle løsninger ($x^2 = -4$), så det finnes ingen vertikale asymptoter.

**Påstand 3: Skjærer aldri $y$-aksen. — Feil.**

$$f(0) = \frac{0 + 6}{0 + 4} = \frac{6}{4} = \frac{3}{2}$$

Grafen skjærer $y$-aksen i punktet $\left(0, \frac{3}{2}\right)$.

**Påstand 4: Horisontal asymptote $y = 2$. — Feil.**

Telleren er av grad 1 og nevneren av grad 2. Når $x \to \pm\infty$:

$$f(x) = \frac{2x + 6}{x^2 + 4} \to 0$$

Den horisontale asymptoten er $y = 0$, ikke $y = 2$.

**$\underline{\underline{\text{Påstand 1 og 2 er riktige.}}}$**

## Oppgave 1-4

Oskar satte inn et beløp $V_0$ for 5 år siden, og han fikk $4{,}5\ \%$ rente per år. I dag har han $250\,000\ \mathrm{kr}$. Sammenhengen er:

$$V_0 \cdot 1{,}045^5 = 250\,000$$

$$V_0 = \frac{250\,000}{1{,}045^5} = 250\,000 \cdot 1{,}045^{-5}$$

**Uttrykk 2) og 6) er riktige.**

De øvrige uttrykk er gale fordi:
- 1) og 3): $0{,}955 \neq \frac{1}{1{,}045}$ og 3) gir fremtidig verdi, ikke fortid
- 4) og 5): $0{,}955^{-5} = \frac{1}{0{,}955^5} \neq \frac{1}{1{,}045^5}$

## Oppgave 1-5

### 1-5a

Trekanten i figuren er rettvinklet og likebeint med begge kateter lik $1$.

Hypotenusen er $\sqrt{1^2 + 1^2} = \sqrt{2}$.

I en rettvinklet trekant er vinkelen mellom de to like katetene $45\degree$. Fra definisjonen av sinus:

$$\sin 45\degree = \frac{\text{motstående katet}}{\text{hypotenuse}} = \frac{1}{\sqrt{2}} \qquad \square$$

### 1-5b

Vi bruker arealsetningen for trekant $ABC$ med $AB = 3\sqrt{2}$, $AC = 8$ og $\angle A = 45\degree$:

$$T = \frac{1}{2} \cdot AB \cdot AC \cdot \sin A = \frac{1}{2} \cdot 3\sqrt{2} \cdot 8 \cdot \sin 45\degree = \frac{1}{2} \cdot 3\sqrt{2} \cdot 8 \cdot \frac{1}{\sqrt{2}} = \frac{1}{2} \cdot 3 \cdot 8 = \mathbf{\underline{\underline{12}}}$$

**Arealet av trekant $ABC$ er $\underline{\underline{12}}$.**

### 1-5c

For trekant $PQR$ med $PQ = 3\sqrt{2}$, $PR = 8$ og $\angle P = 140\degree$:

$$T_{PQR} = \frac{1}{2} \cdot PQ \cdot PR \cdot \sin P = \frac{1}{2} \cdot 3\sqrt{2} \cdot 8 \cdot \sin 140\degree$$

Siden $\sin 140\degree = \sin(180\degree - 140\degree) = \sin 40\degree$, og $\sin 40\degree \approx 0{,}643$, mens $\sin 45\degree = \frac{1}{\sqrt{2}} \approx 0{,}707$.

Fordi sidene $PQ = AB$ og $PR = AC$ er like i begge trekantene, er arealet størst der sinusverdien til vinkelen er størst. Siden $\sin 45\degree > \sin 40\degree$:

**$\underline{\underline{\text{Trekant } ABC}}$ har størst areal.**

## Oppgave 1-6

### 1-6

Variabelen `tall` inneholder antall sirkler i et femkanttall slik `tall` utvikler seg slik tabellen viser.

| $n$ | tall | differanse |
| :-: | :--: | :--------: |
|  1  |  1   |     4      |
|  2  |  5   |     7      |
|  3  |  12  |     10     |
|  4  |  22  |     13     |
|  5  |  35  |     16     |
|  6  |  51  |     19     |
|  7  |  70  |     22     |

**Tallene 1, 5, 12, 22, 35, 51 og 70 skrives ut av programmet.**

**Siri har oppdaget at antallet nye sirkler i femkanttalene (de som er tegnet oppe mot høyre i figuren) øker med 3 for hvert femkanttall.**

---

## Oppgave 2-1

### 2-1a

Vi bruker GeoGebra og legger inn datapunktene i regneark eller graffeltet. Deretter bruker vi PotensRegresjon for å finne $a$ og $b$:

$$F(x) \approx 0{,}00966 \cdot x^{3{,}00}$$

Siden $b \approx 3$ er modellen tilnærmet en kubikkfunksjon, $F(x) \approx 0{,}00966 \cdot x^3$.

![1t-h25-2-1.png](/img/user/_resources/1t-h25-2-1.png)

### 2-1b

Stigningstallet til sekantlinjen gjennom $(75,\ F(75))$ og $(95,\ F(95))$ er:

$$k = \frac{F(95) - F(75)}{95 - 75} \approx \frac{8219 - 4105}{20} \approx \underline{\underline{210\ \mathrm{gram/cm}}}$$

**Praktisk tolkning:** Gjennomsnittlig øker vekten med omtrent $210\ \mathrm{gram}$ per centimeter økning i lengde, for fisk i intervallet $75$–$95\ \mathrm{cm}$.

### 2-1c

Den momentane vekstfarten ved $x = 100$ er $F'(100)$. Med $F(x) = a \cdot x^b$:

$$F'(x) = a \cdot b \cdot x^{b-1}$$

$$F'(100) \approx 0{,}00966 \cdot 3{,}00 \cdot 100^{2{,}00} \approx \underline{\underline{289\ \mathrm{gram/cm}}}$$

**Praktisk tolkning:** Når fisken er $100\ \mathrm{cm}$ lang, øker vekten med omtrent $289\ \mathrm{gram}$ per centimeter ekstra lengde.

### 2-1d

Dersom lengden øker med $20\ \%$ blir ny lengde $1{,}2x$. Vektøkningen er:

$$\frac{F(1{,}2x)}{F(x)} = \frac{a \cdot (1{,}2x)^b}{a \cdot x^b} = 1{,}2^b$$

Med $b \approx 3$:

$$1{,}2^3 = 1{,}728$$

**Vekten øker med omtrent $\underline{\underline{72{,}8\ \%}}$ dersom lengden øker med $20\ \%$.**

## Oppgave 2-2

Vi lar $a$ = Abids alder, $t$ = Thereses alder, $h$ = Haralds alder i dag.

Vi setter opp likningssystemet:

$$\begin{aligned}
a + t + h &= 68 \\
t &= a + 17 \\
a + 3 &= 2(h + 3)
\end{aligned}$$

Vi løser i GeoGebra CAS:

```
Løs({a + t + h = 68, t = a + 17, a + 3 = 2*(h + 3)}, {a, t, h})
```

GeoGebra gir $\{a = 21,\ t = 38,\ h = 9\}$.

**Kontroll:**
- $21 + 38 + 9 = 68\ \checkmark$
- $38 = 21 + 17\ \checkmark$
- Om tre år: Abid er $24$, Harald er $12$, og $24 = 2 \cdot 12\ \checkmark$

**$\underline{\underline{\text{Abid er 21 år, Therese er 38 år og Harald er 9 år.}}}$**

## Oppgave 2-3

### 2-3a

I trekant $ADC$ er vinkelene $\angle D = 120\degree$ og $\angle DCA = 30\degree$, altså:

$$\angle DAC = 180\degree - 120\degree - 30\degree = 30\degree$$

Vi bruker sinussetningen med $DC = \sqrt{3}$:

$$\frac{AC}{\sin D} = \frac{DC}{\sin(\angle DAC)}$$

$$AC = \frac{\sqrt{3} \cdot \sin 120\degree}{\sin 30\degree} = \frac{\sqrt{3} \cdot \frac{\sqrt{3}}{2}}{\frac{1}{2}} = \frac{\frac{3}{2}}{\frac{1}{2}} = 3 \qquad \square$$

### 2-3b

**Areal av trekant $ADC$:**

Siden $\angle DAC = \angle DCA = 30\degree$ er trekanten likebeint med $AD = DC = \sqrt{3}$. Vi bruker arealsetningen:

$$T_{ADC} = \frac{1}{2} \cdot AD \cdot DC \cdot \sin D = \frac{1}{2} \cdot \sqrt{3} \cdot \sqrt{3} \cdot \sin 120\degree = \frac{1}{2} \cdot 3 \cdot \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{4}$$

**Areal av trekant $ABC$:**

I trekant $ABC$ er $AC = 3$, $BC = \sqrt{6}$ og $\angle BAC = 45\degree$. Vi finner $\angle ABC$ med sinussetningen:

$$\frac{BC}{\sin(\angle BAC)} = \frac{AC}{\sin(\angle ABC)} \implies \sin(\angle ABC) = \frac{AC \cdot \sin 45\degree}{BC} = \frac{3 \cdot \frac{1}{\sqrt{2}}}{\sqrt{6}} = \frac{3}{\sqrt{12}} = \frac{\sqrt{3}}{2}$$

Altså $\angle ABC = 60\degree$, og dermed $\angle ACB = 180\degree - 45\degree - 60\degree = 75\degree$.

$$T_{ABC} = \frac{1}{2} \cdot BC \cdot AC \cdot \sin(\angle ACB) = \frac{1}{2} \cdot \sqrt{6} \cdot 3 \cdot \sin 75\degree$$

Vi bruker $\sin 75\degree = \sin(45\degree + 30\degree) = \frac{\sqrt{3}+1}{2\sqrt{2}}$:

$$T_{ABC} = \frac{3\sqrt{6}}{2} \cdot \frac{\sqrt{3}+1}{2\sqrt{2}} = \frac{3\sqrt{3}(\sqrt{3}+1)}{4} = \frac{3(3 + \sqrt{3})}{4} = \frac{9 + 3\sqrt{3}}{4}$$

**Totalt areal:**

$$T_{ABCD} = T_{ADC} + T_{ABC} = \frac{3\sqrt{3}}{4} + \frac{9 + 3\sqrt{3}}{4} = \underline{\underline{\frac{9 + 6\sqrt{3}}{4}}}$$

## Oppgave 2-4

### 2-4a

Fra figuren ser vi at Maria hvert steg tar den største hvite trekanten, deler den i 4, og farger den midterste (inverterte) grå. Grå trekant nummer $n$ har areal $\dfrac{S}{4^n}$. Arealene danner en geometrisk følge med første ledd $\dfrac{S}{4}$ og kvotient $\dfrac{1}{4}$.

**Algoritme for summen av arealene til de 100 første grå trekantene:**

```
S_start = 36
total = 0
grå_areal = S_start / 4

gjenta 100 ganger:
    total = total + grå_areal
    grå_areal = grå_areal / 4

skriv ut total
```

### 2-4b

```python
S_start = 36
total = 0
graa_areal = S_start / 4

for i in range(100):
    total += graa_areal
    graa_areal /= 4

print(total)
```

Programmet skriver ut **$\underline{\underline{12{,}0}}$**.

Dette tilsvarer summen av den geometriske rekken $\displaystyle\sum_{n=1}^{100} \frac{36}{4^n} = \frac{S/4}{1 - 1/4} = \frac{S}{3} = 12$.

## Oppgave 2-5

### 2-5a

Dersom $B = (3,\ 0)$, er $C = (3,\ f(3))$ og $D = (0,\ f(3))$. Vi beregner:

$$f(3) = \frac{10}{3^2 + 3} = \frac{10}{12} = \frac{5}{6}$$

Arealet av rektangelet er:

$$A = 3 \cdot \frac{5}{6} = \underline{\underline{\frac{5}{2}}}$$

### 2-5b

La $B = (x,\ 0)$ med $x > 0$. Arealet av rektangelet er:

$$A(x) = x \cdot f(x) = \frac{10x}{x^2 + 3}$$

Vi deriverer og setter $A'(x) = 0$:

$$A'(x) = \frac{10(x^2 + 3) - 10x \cdot 2x}{(x^2 + 3)^2} = \frac{30 - 10x^2}{(x^2 + 3)^2}$$

$$A'(x) = 0 \implies 30 - 10x^2 = 0 \implies x^2 = 3 \implies x = \sqrt{3}$$

Siden $A'(x) > 0$ for $x < \sqrt{3}$ og $A'(x) < 0$ for $x > \sqrt{3}$, er dette et maksimum.

**Punktet $B$ må ligge i $\underline{\underline{x = \sqrt{3}}}$ for at arealet skal bli størst mulig.**

## Oppgave 2-6

### 2-6a

Parabelen er $p(x) = -\dfrac{1}{12}x^2 + 20$, og den deriverte er:

$$p'(x) = -\frac{1}{6}x$$

La tangentpunktet være $(c,\ p(c))$. Tangentlinjens stigningstall er $m = p'(c) = -\dfrac{c}{6}$.

Tangentlinjen gjennom $(c,\ p(c))$ er:

$$y - p(c) = m(x - c)$$

Siden tangenten skal gå gjennom $(0,\ 23)$:

$$23 - p(c) = m(0 - c) = -mc = \frac{c}{6} \cdot c = \frac{c^2}{6}$$

$$23 - \left(-\frac{c^2}{12} + 20\right) = \frac{c^2}{6}$$

$$3 + \frac{c^2}{12} = \frac{c^2}{6}$$

$$3 = \frac{c^2}{6} - \frac{c^2}{12} = \frac{c^2}{12}$$

$$c^2 = 36 \implies c = \pm 6$$

For $c = 6$: $m = -1$, og tangenten er $y = -(x - 6) + p(6) = -(x-6) + 17 = -x + 23$.

**Tangentens likning er $\underline{\underline{y = -x + 23}}$.**

(For $c = -6$ er tangenten $y = x + 23$ på venstre side, ved symmetri.)

### 2-6b

Vi finner veggens plassering der $p(x) = 0$:

$$-\frac{1}{12}x^2 + 20 = 0 \implies x^2 = 240 \implies x = 4\sqrt{15} \approx 15{,}5\ \mathrm{m}$$

Kameraet ser langs tangenten $y = -x + 23$. En tyv som er $2\ \mathrm{m}$ høy befinner seg utenfor kameraets synsfelt når linjen fra kameraet til hodet $(x_t,\ 2)$ akkurat tangerer bygget i $x = 6$:

$$23 - \frac{126}{x_t} = 17 \implies x_t = 21\ \mathrm{m}$$

Avstand fra veggen: $21 - 4\sqrt{15} \approx 21 - 15{,}5 \approx \underline{\underline{5{,}5\ \mathrm{m}}}$

**En tyv kan bevege seg uten å bli fotografert dersom de er mer enn $\underline{\underline{21 - 4\sqrt{15} \approx 5{,}5\ \mathrm{m}}}$ fra veggen.**

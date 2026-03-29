---
{"title":"Løsningsforslag 1P eksamen H2023","aliases":null,"tags":["løsningsforslag"],"dg-publish":true,"date":"2026-03-29","modified":"2026-03-29","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"fag":["1p"],"eksamen":"h23","author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null,"permalink":"/losningsforslag/losningsforslag-1-p-eksamen-h2023/","dgPassFrontmatter":true,"dg-note-properties":{"title":"Løsningsforslag 1P eksamen H2023","aliases":null,"tags":["løsningsforslag"],"date":"2026-03-29","modified":"2026-03-29","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"fag":["1p"],"eksamen":"h23","author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null}}
---


## Oppgave 2-1

### 2-1a

Jeg lar $x$ være antall år etter 1950, og setter inn datapunktene fra tabellen:

| $x$ | $2$ | $32$ | $42$ | $52$ | $62$ | $72$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Antall fiskere | $65\,956$ | $25\,289$ | $19\,780$ | $13\,841$ | $9\,825$ | $9\,591$ |

Siden antallet fiskere faller raskt i begynnelsen og deretter flater ut, passer en **eksponentiell modell** bedre enn en lineær. Jeg bruker GeoGebra til å finne eksponentiell regresjon gjennom datapunktene og får:

$$F(x) = 66\,360 \cdot 0{,}9714^{x}$$

![Regresjonsmodell og datapunkter for oppgave 2-1a](/img/user/_resources/1p-h23-2-1-a-graf.png)

Modellen passer godt til datapunktene ($R^2 \approx 0{,}99$).

**Modellen for antall fiskere er $\underline{\underline{F(x) = 66\,360 \cdot 0{,}9714^{x}}}$**, der $x$ er antall år etter 1950.

### 2-1b

I 2050 er $x = 2050 - 1950 = 100$. Vi setter inn i modellen:

$$F(100) = 66\,360 \cdot 0{,}9714^{100} \approx 3\,658$$

**Ifølge modellen vil det være omtrent $\underline{\underline{3\,658}}$ fiskere i 2050.**

Modellen er laget for å beskrive perioden 1952–2022, og det er usikkert om den gir et godt bilde utenfor dette området. Antallet fiskere kan ikke bli negativt, og modellen kan ikke brukes til å si noe sikkert om situasjonen i 2050.

### 2-1c

Vi beregner $F(30)$ og $F(70)$:

$$
\begin{aligned}
F(30) &= 66\,360 \cdot 0{,}9714^{30} \approx 27\,817 \\
F(70) &= 66\,360 \cdot 0{,}9714^{70} \approx 8\,727
\end{aligned}
$$

Stigningstallet til linjen gjennom $(30, F(30))$ og $(70, F(70))$ er:

$$
a = \frac{F(70) - F(30)}{70 - 30} = \frac{8\,727 - 27\,817}{40} = \frac{-19\,090}{40} \approx -477
$$

**Stigningstallet er $\underline{\underline{\approx -477}}$.**

Dette betyr at modellen viser en gjennomsnittlig nedgang på omtrent 477 fiskere per år i perioden fra 1980 ($x=30$) til 2020 ($x=70$).

## Oppgave 2-6

### 2-6a
Lengden reduseres med 10 % per linjestykke og den begynner på 100 cm. Da blir lengden av linjestykke nummer $n$:

$$
L(n)=100 \cdot 0{,}9^{n-1}
$$

Jeg bruker et regneark til å legge sammen de 8 første linjestykkene.

![Lengden av de 8 første linjestykkene](/img/user/_resources/1p-h23-2-6-excel.png)

**Lengden av de 8 første linjestykkene er 569,5 cm.**


> [!tip] Enklere beregning med regneark
> Det ville vært enklere å bruke en formel som tar forrige lengde og multipliserer med 0,9.


### 2-6b

```python
n = 1
L = 100
total = L

while total < 900:      # Kjører så lenge totalen er under 900 cm
    L = L * 0.9         # Beregner nytt linjestykke
    total = total + L   # Legger til linjestykke på totallengden
    n = n + 1           # Teller hvor mange linjestykker

print("Etter", n, "linjestykker er lengden", round(total, 2), "cm.")
```

Output: `Etter 22 linjestykker er lengden 901.52 cm.`

**Du må ha 22 linjestykker for at lengden skal bli minst 9 meter.**

### 2-6c

> [!tip] Andre løsningsmetoder
> Det er minst like enkelt å løse denne oppgaven med regnearket fra oppgave a).

```python
L = 100
total = L

for n in range(1, 101):
    if n == 50:            # Lagrer totallengden etter 50 figurer
        lengde_50 = total
    if n == 100:           # Lagrer totallengden etter 100 figurer
        lengde_100 = total
    L = L * 0.9            # Beregner nytt linjestykke
    total = total + L      # Legger til linjestykke på totallengden

prosent_endring = (lengde_100 - lengde_50) / (lengde_50) * 100

print(round(prosent_endring, 2))
```

Output: `0.52`

**Summen av lengdene øker med 0,52 % dersom vi øker antallet linjestykker fra 50 til 100.**

## Oppgave 2-7

### 2-7a
Vi beregner først $h$ med $a=3$ og $b=2$:

$$
h = \left(\frac{a-b}{a+b}\right)^2= \left( \frac{3-2}{3+2} \right) ^{2}=\left( \frac{1}{5} \right) ^{2}=\frac{1^{2}}{5^{2}}=\frac{1}{25}
$$

Så regner vi ut omkretsen $O$ ved hjelp av formelen (jeg bruker CAS i GeoGebra som kalkulator).

![Beregning av omkrets med Ramanujans formel](/img/user/_resources/1p-h23-ramanujan-cas.png)

**Omkretsen er omtrent 15,9 cm. Det er samme svaret som Mari har funnet.**

### 2-7b
En sirkel har omkretsen $O_{\text{sirkel}}=\pi \cdot d$, der $d$ er diameteren, eller $O_{\text{sirkel}}=2 \pi r$ dersom vi bruker radius istedenfor diameter.

I en sirkel vil begge halvaksene være like lange, og begge vil være lik radius i sirkelen, formelen for $h$ blir derfor:

$$
h = \left(\frac{a-b}{a+b}\right)^2= \left( \frac{r-r}{r+r} \right) ^{2}=\left( \frac{0}{2r} \right) ^{2}=0
$$

Vi setter inn $a=b=r$ og $h=0$ Ramanujans formel:

$$
O \approx \pi \left( r+r \right) \left( 1+ \underbrace{ \frac{3 \cdot 0}{10 + \sqrt{ 4- 3 \cdot 0 }} }_{ \text{Telleren blir 0} } \right) = \pi (r+r) \cdot 1= \pi \cdot 2r = 2\pi r
$$

**Ramanujans formel gjelder for spesialtilfellet der ellipsen er en sirkel.**

## Oppgave 2-8
Vi ser at farten av gått ned 3 ganger i løpet av runden. Det betyr løypa må ha hatt 3 svinger og vi kan utelukke alternativ A og D.

Vi ser videre at det går ganske kort tid før første sving, deretter lengre stykke til sving 2 og en nesten like lang stund til sving 3. Det er kun B, E og F som har kort avstand til første sving, så vi utelukker C.

Farten er lavest i sving 2, mens sving 3 tar lengre tid samtidig som farten ikke er veldig lav. Den eneste formen som passer til denne beskrivelsen er B.

**Bilen har kjørt på bane B.**

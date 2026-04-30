---
{"aliases":[],"date":"2023-11-14","del":2,"dg-permalink":"/sofaproduksjon-og-overskudd/","dg-publish":true,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["økonomi","andregradslikninger","modellering"],"title":"Sofaproduksjon og overskudd","todo":[],"permalink":"/sofaproduksjon-og-overskudd/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":2,"eksamen":"h23","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":1}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["økonomi","andregradslikninger","modellering"],"title":"Sofaproduksjon og overskudd","todo":[]}}
---


# Sofaproduksjon og overskudd

En møbelfabrikk produserer en type sofaer. Tabellen nedenfor viser sammenhengen mellom antall sofaer de produserer per måned, og produksjonskostnadene per måned.

| Antall sofaer                         | 10  | 25  | 40  |  70  | 100  | 140  | 180  |
| ------------------------ | :-: | :-: | :-: | :--: | :--: | :--: | :--: |
| Produksjonskostnader (i tusen kroner) | 270 | 550 | 870 | 1500 | 2200 | 3300 | 4500 |

Fabrikken selger alle sofaene til en møbelkjede. De får 28 000 kroner per sofa.

>[!oppgave]
>a) Bruk opplysningene ovenfor til å vise at funksjonen $O$ gitt ved
>
>$$O(x) = -0{,}041x^2 + 11x - 103$$
>
>er en god modell for det månedlige overskuddet (i tusen kroner) til fabrikken, dersom de produserer $x$ sofaer.
>b) Hvilken produksjonsmengde gir størst overskudd?

Fabrikken ønsker at overskuddet skal være 1 million kroner per måned. De vil derfor endre salgsprisen på sofaene.

>[!oppgave]
>c) Bestem den laveste salgsprisen de kan sette per sofa, dersom de skal få dette overskuddet.

## Fasit

a) Se graf — kurven $O(x) = -0{,}041x^2 + 11x - 103$ ligger nær alle de empiriske punktene.

b) **Størst overskudd ved produksjon av $\underline{\underline{134 \text{ sofaer}}}$ per måned**, noe som gir et overskudd på $\underline{\underline{634\,800 \, \mathrm{kr}}}$.

c) Laveste salgspris: $\underline{\underline{p \approx 30\,450 \, \mathrm{kr}}}$ per sofa.

## Løsningsforslag

### a

Vi beregner inntekten. Fabrikken selger alle sofaene til 28 000 kr per sofa, så inntekten per måned er

$$I(x) = 28x \quad \text{(tusen kr)}$$

Vi beregner overskuddet $O = I - K$ for hver verdi i tabellen:

| $x$ | $I(x) = 28x$ | $K(x)$ | $O = I - K$ |
|:---:|:---:|:---:|:---:|
| 10 | 280 | 270 | 10 |
| 25 | 700 | 550 | 150 |
| 40 | 1120 | 870 | 250 |
| 70 | 1960 | 1500 | 460 |
| 100 | 2800 | 2200 | 600 |
| 140 | 3920 | 3300 | 620 |
| 180 | 5040 | 4500 | 540 |

Vi plotter de empiriske overskuddspunktene (blå) og kurven $O(x) = -0{,}041x^2 + 11x - 103$ (grønn) i GeoGebra:

![s1-h23-2-1.png](/img/user/_resources/s1-h23-2-1.png)

Kurven ligger nær alle de sju punktene, så modellen passer godt.

### b

Overskuddet $O(x) = -0{,}041x^2 + 11x - 103$ er en andregradsfunksjon som åpner nedover, og har derfor et globalt toppunkt. Vi finner toppunktet ved å derivere og sette den deriverte lik null:

$$O'(x) = -0{,}082x + 11 = 0$$

$$x = \frac{11}{0{,}082} \approx 134{,}1$$

Siden $x$ må være et heltall, sammenlignes $x = 134$ og $x = 135$:

$$O(134) = -0{,}041 \cdot 134^2 + 11 \cdot 134 - 103 \approx 634{,}8 \quad \text{(tusen kr)}$$

$$O(135) = -0{,}041 \cdot 135^2 + 11 \cdot 135 - 103 \approx 634{,}8 \quad \text{(tusen kr)}$$

$O(134) > O(135)$, så $x = 134$ gir størst overskudd.

**Størst månedlig overskudd oppnås ved å produsere $\underline{\underline{134 \text{ sofaer}}}$, og overskuddet er da $\underline{\underline{634\,800 \, \mathrm{kr}}}$.**

### c

Vi finner kostnadsfunksjonen fra del a). Siden $O(x) = I(x) - K(x)$, er

$$K(x) = I(x) - O(x) = 28x - (-0{,}041x^2 + 11x - 103) = 0{,}041x^2 + 17x + 103$$

Med ny salgspris $p$ kr per sofa blir inntekten $I_{\text{ny}}(x) = \dfrac{p}{1000} \cdot x$ (i tusen kr), og det nye overskuddet er

$$O_{\text{ny}}(x) = \frac{p}{1000} x - (0{,}041x^2 + 17x + 103)$$

Dette er igjen en andregradsfunksjon som åpner nedover. Toppverdien til en funksjon $f(x) = -ax^2 + bx + c$ er $\dfrac{b^2}{4a} + c$. Her er $a = 0{,}041$, $b = \dfrac{p}{1000} - 17$ og $c = -103$:

$$O_{\text{ny, maks}} = \frac{\left(\dfrac{p}{1000} - 17\right)^2}{4 \cdot 0{,}041} - 103$$

Vi setter maksimum lik 1000 (= 1 million kr) og løser for $p$ i GeoGebra CAS:

![s1-h23-2-1c.png](/img/user/_resources/s1-h23-2-1c.png)

CAS gir to løsninger: $p \approx 3\,550$ og $p \approx 30\,450$. Løsningen $p \approx 3\,550$ er lavere enn 28 000 kr og forkastes (den svarer til et maksimum ved negativ produksjonsmengde, noe som ikke er fysisk meningsfullt). Den laveste salgsprisen som gir et maksimalt månedlig overskudd på 1 million kr er derfor

**$\underline{\underline{p \approx 30\,450 \, \mathrm{kr}}}$ per sofa.**
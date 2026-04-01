---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["formler","geometri"],"fag":["1p"],"eksamen":"h23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":7}],"poeng":null,"title":"Ellipse og Ramanujans formel","status":3,"source":null,"todo":null,"permalink":"/ellipse-og-ramanujans-formel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["formler","geometri"],"fag":["1p"],"eksamen":"h23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":7}],"poeng":null,"title":"Ellipse og Ramanujans formel","status":3,"source":null,"todo":null,"permalink":"/ellipse-og-ramanujans-formel/"}}
---


# Ellipse og Ramanujans formel

Nedenfor ser du en ellipse med sentrum i $S$. Linjestykket $SA = a$ kalles den store halvaksen, og linjestykket $SB = b$ kalles den lille halvaksen.

![Ellipse med stor halvakse a og liten halvakse b](/img/user/_resources/1p-h23-2-7.jpeg){width=50%}

>[!yellow-box]
>Den indiske matematikeren Ramanujan kom fram til en formel for omkretsen av en ellipse.
>
>Ifølge formelen er omkretsen $O$ tilnærmet gitt ved
>
>$$O \approx \pi(a+b)\left(1 + \frac{3h}{10 + \sqrt{4 - 3h}}\right)$$
>
>der $h = \left(\dfrac{a-b}{a+b}\right)^2$ og $a$ og $b$ er store og lille halvakse.

Mari har tegnet en ellipse der $a = 3$ cm og $b = 2$ cm, ved hjelp av et digitalt verktøy. Hun har funnet at ellipsen har en omkrets på $15{,}865 \mathrm{~cm}$.

>[!oppgave]
>a) Bruk Ramanujans formel, og bestem $O$ når $a = 3$ og $b = 2$. Sammenlikn med svaret Mari har funnet.
>b) Undersøk om Ramanujans formel gjelder i det spesialtilfellet at ellipsen er en sirkel.

## Fasit

a) Mari har regnet riktig.
b) Ja, den gjelder.

## Løsningsforslag

### 2-7a
Vi beregner først $h$ med $a=3$ og $b=2$:

$$
h = \left(\frac{a-b}{a+b}\right)^2= \left( \frac{3-2}{3+2} \right) ^{2}=\left( \frac{1}{5} \right) ^{2}=\frac{1^{2}}{5^{2}}=\frac{1}{25}
$$

Så regner vi ut omkretsen $O$ ved hjelp av formelen (jeg bruker CAS i GeoGebra som kalkulator).

![Beregning av omkrets med Ramanujans formel](/img/user/_resources/1p-h23-ramanujan-cas.png){width=30%}

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
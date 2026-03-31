---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["volum","optimering","funksjoner"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":8,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":8}],"poeng":7,"title":"Kasser av metallplater","status":1,"source":null,"todo":null,"permalink":"/kasser-av-metallplater/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"temaer":["volum","optimering","funksjoner"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":8,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":8}],"poeng":7,"title":"Kasser av metallplater","status":1,"source":null,"todo":null,"permalink":"/kasser-av-metallplater/"}}
---


# Kasser av metallplater

Sofie arbeider ved en bedrift og skal lage kasser av metallplater. Metallplatene har form som rektangler og er 1200 mm lange og 800 mm brede.

For å lage kassene skal hun skjære bort et kvadrat i hvert av hjørnene og brette opp sidekantene.

![Illustrasjon av metallplate, utskjæring og ferdig kasse](/img/user/_resources/1p-h24-2-8.jpeg)

Kassene skal fylles med sand.

>[!oppgave]
>a) Vis at det vil være plass til 60 L sand i en kasse dersom Sofie skjærer bort kvadrater med sidelengde 100 mm i hvert hjørne.

Sofie ønsker en oversikt som viser volumet av ulike kasser hun kan lage av metallplatene.

>[!oppgave]
>b) Lag en systematisk oversikt for Sofie. Av oversikten skal Sofie kunne se omtrent hvor lange sidene i kvadratene hun skal skjære bort må være, for at volumet av kassen skal bli størst mulig.

Sofie ønsker å lage en modell som viser volumet av de ulike kassene hun kan lage av metallplatene.

>[!oppgave]
>c) Sett opp et funksjonsuttrykk Sofie kan bruke, og lag en grafisk framstilling som viser sammenhengen mellom lengden av sidene i kvadratene hun skjærer bort, og volumet av kassene.
>d) Hvor mye av hjørnene må Sofie skjære bort dersom hun vil lage kassene slik at volumet blir størst mulig? Hvor stort blir dette volumet?
>e) Hva vil du si er modellens gyldighetsområde? Argumenter for svaret ditt.

## Fasit

a) Volum $= 1000 \cdot 600 \cdot 100 \, \mathrm{mm}^3 = 60\,000\,000 \, \mathrm{mm}^3 = 60 \, \mathrm{L}$
b) Maksimalt volum ved $x \approx 150 \, \mathrm{mm}$
c) $V(x) = (1200 - 2x)(800 - 2x) \cdot x$, se grafisk fremstilling
d) $x \approx 157 \, \mathrm{mm}$, maks volum $\approx 67{,}6 \, \mathrm{L}$
e) Gyldighetsområde: $0 < x < 400 \, \mathrm{mm}$

## Løsningsforslag

### a

Med sidelengde $x = 100 \, \mathrm{mm}$ på hvert utskåret kvadrat:

- Lengde: $1200 - 2 \cdot 100 = 1000 \, \mathrm{mm}$
- Bredde: $800 - 2 \cdot 100 = 600 \, \mathrm{mm}$
- Høyde: $100 \, \mathrm{mm}$

$$V = 1000 \cdot 600 \cdot 100 = 60\,000\,000 \, \mathrm{mm}^3$$

Vi omregner til liter ($1 \, \mathrm{L} = 1\,000\,000 \, \mathrm{mm}^3$):

$$V = \frac{60\,000\,000}{1\,000\,000} = \underline{\underline{60 \, \mathrm{L}}} \quad \checkmark$$

### b

La $x$ være sidelengden (i mm) til de utskårede kvadratene. Vi lager en oversikt:

| $x$ (mm) | Lengde (mm) | Bredde (mm) | Volum (L) |
|-----------|-------------|-------------|-----------|
| 50 | 1100 | 700 | 38,5 |
| 100 | 1000 | 600 | 60,0 |
| 150 | 900 | 500 | 67,5 |
| 200 | 800 | 400 | 64,0 |
| 250 | 700 | 300 | 52,5 |
| 300 | 600 | 200 | 36,0 |
| 350 | 500 | 100 | 17,5 |

Ut fra tabellen ser vi at volumet er størst når $x$ er **omtrent $150 \, \mathrm{mm}$**.

### c

Når Sofie skjærer bort kvadrater med sidelengde $x$ mm, får kassen:

- Lengde: $(1200 - 2x) \, \mathrm{mm}$
- Bredde: $(800 - 2x) \, \mathrm{mm}$
- Høyde: $x \, \mathrm{mm}$

Funksjonsuttrykket (volum i L):

$$\underline{\underline{V(x) = \frac{(1200 - 2x)(800 - 2x) \cdot x}{1\,000\,000}}}$$

Vi tegner grafen i GeoGebra:

![1p-h24-2-8.png](/img/user/_resources/1p-h24-2-8.png)

### d

Fra grafen (se punkt `Maks`) er volumet størst ved $x \approx 157 \, \mathrm{mm}$, og maksimalt volum er ca. $67{,}6 \, \mathrm{L}$.

**Sofie bør skjære bort kvadrater med sidelengde ca. $\underline{\underline{157 \, \mathrm{mm}}}$. Da blir volumet størst mulig med ca. $\underline{\underline{67{,}6 \, \mathrm{L}}}$.**

### e

For at kassen skal gi mening må alle dimensjonene være positive:

- Høyde: $x > 0$
- Bredde: $800 - 2x > 0 \Rightarrow x < 400$

(Lengdebetingelsen $x < 600$ er oppfylt automatisk når $x < 400$.)

**Gyldighetsområdet er $\underline{\underline{0 < x < 400 \, \mathrm{mm}}}$.**

I praksis vil det også være en nedre grense (for eksempel $x \geq 10 \, \mathrm{mm}$) siden det ikke er mulig å skjære bort kvadrater som er for bitte små, men matematisk sett er $0 < x < 400 \, \mathrm{mm}$ det naturlige gyldighetsområdet.

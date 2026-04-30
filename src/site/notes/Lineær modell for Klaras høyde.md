---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-29","lf-source-claude":true,"aliases":[],"dg-publish":true,"temaer":["modellering","lineær vekst","funksjoner"],"fag":["1p"],"eksamen":"v23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":4}],"poeng":null,"title":"Lineær modell for Klaras høyde","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Lage lineær modell fra tabellverdier, ekstrapolere til $x=19$ og vurdere gyldighetsområdet mot fødselshøyden 50 cm.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Sette $x=19$ inn i modellen."},{"deloppgave":"c","kategori":3,"beskrivelse":"Vurdere gyldighetsområdet ved å sammenlikne modellen med fødselshøyden 50 cm."}],"source":null,"todo":null,"dg-permalink":"/lineaer-modell-for-klaras-hoyde/","permalink":"/lineaer-modell-for-klaras-hoyde/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-29","lf-source-claude":true,"aliases":[],"temaer":["modellering","lineær vekst","funksjoner"],"fag":["1p"],"eksamen":"v23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":4}],"poeng":null,"title":"Lineær modell for Klaras høyde","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Lage lineær modell fra tabellverdier, ekstrapolere til $x=19$ og vurdere gyldighetsområdet mot fødselshøyden 50 cm.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Sette $x=19$ inn i modellen."},{"deloppgave":"c","kategori":3,"beskrivelse":"Vurdere gyldighetsområdet ved å sammenlikne modellen med fødselshøyden 50 cm."}],"source":null,"todo":null}}
---


# Lineær modell for Klaras høyde

Tabellen nedenfor viser høyden til Klara noen år fra hun var 4 år, til hun var 10 år.

| Alder (år) | 4   | 5   | 8   | 10  |
|:----------:|:---:|:---:|:---:|:---:|
| Høyde (cm) | 100 | 107 | 128 | 142 |

>[!oppgave]
>a) Lag en modell som viser sammenhengen mellom høyden og alderen til Klara basert på tallene i tabellen.
>b) Hvor høy vil Klara være når hun fyller 19 år, ifølge modellen?

Klara var 50 cm høy da hun ble født.

>[!oppgave]
>c) Gjør beregninger og vurder gyldighetsområdet til modellen du fant i oppgave a).

## Fasit

a) $\underline{\underline{H(x) = 7x + 72}}$

b) $\underline{\underline{H(19) = 205 \, \mathrm{cm}}}$ — urealistisk høyt

c) Modellen er bare gyldig for alder omtrent $4 \leq x \leq 14$ år

## Løsningsforslag

### a

Vi regner ut stigningen ved hjelp av to punkter fra tabellen. Vi bruker punktene $(4, 100)$ og $(10, 142)$:

$$a = \frac{142 - 100}{10 - 4} = \frac{42}{6} = 7$$

Stigningen er $7$, som betyr at Klara vokser $7 \, \mathrm{cm}$ per år.

Vi bruker punkt-stigningstall-formen og setter inn punktet $(4, 100)$ for å finne konstantleddet $b$:

$$H(x) = 7x + b$$

$$100 = 7 \cdot 4 + b$$

$$100 = 28 + b$$

$$b = 72$$

Vi sjekker at modellen stemmer med de andre verdiene i tabellen:

- $H(5) = 7 \cdot 5 + 72 = 35 + 72 = 107$ ✓
- $H(8) = 7 \cdot 8 + 72 = 56 + 72 = 128$ ✓
- $H(10) = 7 \cdot 10 + 72 = 70 + 72 = 142$ ✓

Modellen er:

$$\underline{\underline{H(x) = 7x + 72}}$$

der $x$ er alderen i år og $H(x)$ er høyden i cm.

### b

Vi setter $x = 19$ inn i modellen:

$$H(19) = 7 \cdot 19 + 72 = 133 + 72 = \underline{\underline{205 \, \mathrm{cm}}}$$

Ifølge modellen vil Klara være $205 \, \mathrm{cm}$ høy når hun fyller 19 år. Det er svært høyt og lite realistisk — de fleste jenter er ferdigvokst rundt 16–17 år.

### c

Ifølge oppgaven var Klara $50 \, \mathrm{cm}$ høy da hun ble født, det vil si ved $x = 0$.

Vi sjekker hva modellen gir for $x = 0$:

$$H(0) = 7 \cdot 0 + 72 = 72 \, \mathrm{cm}$$

Modellen gir $72 \, \mathrm{cm}$ ved fødselen, men den faktiske fødselshøyden var $50 \, \mathrm{cm}$. Det er et avvik på $22 \, \mathrm{cm}$.

Vi kan også finne hvilken alder modellen gir høyden $50 \, \mathrm{cm}$:

$$7x + 72 = 50$$

$$7x = -22$$

$$x \approx -3{,}1 \text{ år}$$

En negativ alder gir ingen mening.

Modellen stemmer ikke for nyfødte eller små barn, og vil heller ikke stemme for voksne (man vokser ikke $7 \, \mathrm{cm}$ i året hele livet). Gyldighetsområdet er omtrent $4 \leq x \leq 14$ år, det vil si aldersspennet tabellen dekker.

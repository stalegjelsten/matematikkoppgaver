---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["lineær vekst","eksponentiell vekst","funksjoner"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":4,"title":"Isabels Snapchat-følgere","status":1,"source":null,"todo":null,"dg-permalink":"/isabels-snapchat-folgere/","permalink":"/isabels-snapchat-folgere/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-28","aliases":[],"temaer":["lineær vekst","eksponentiell vekst","funksjoner"],"fag":["1p"],"eksamen":"h24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":4,"title":"Isabels Snapchat-følgere","status":1,"source":null,"todo":null}}
---


# Isabels Snapchat-følgere

For 8 måneder siden hadde Isabel 290 000 følgere på Snapchat. I dag har hun 340 000 følgere.

>[!oppgave]
>a) Sett opp et uttrykk for en funksjon $f$ som beskriver utviklingen dersom antallet følgere har økt med samme antall hver måned. Gjør rede for valg av funksjon.
>b) Sett opp et uttrykk for en funksjon $g$ som beskriver utviklingen dersom antallet følgere har økt med samme prosent hver måned. Gjør rede for valg av funksjon.

## Fasit

a) $f(x) = 290\,000 + 6\,250x$ (lineær, $x$ = måneder siden for 8 måneder siden)
b) $g(x) = 290\,000 \cdot 1{,}020^x$

## Løsningsforslag

La $x$ være antall måneder etter tidspunktet for 8 måneder siden. Da er $f(0) = 290\,000$ og $f(8) = 340\,000$.

### a

Øker med **samme antall** → lineær funksjon $f(x) = ax + b$.

Startverdi: $b = 290\,000$

Økning per måned:

$$a = \frac{340\,000 - 290\,000}{8} = \frac{50\,000}{8} = 6\,250$$

$$\underline{\underline{f(x) = 290\,000 + 6\,250x}}$$

### b

Øker med **samme prosent** → eksponentialfunksjon $g(x) = b \cdot k^x$.

Startverdi: $b = 290\,000$

Vi finner vekstfaktoren $k$ fra $g(8) = 340\,000$:

$$290\,000 \cdot k^8 = 340\,000$$

$$k^8 = \frac{340\,000}{290\,000} = \frac{34}{29}$$

$$k = \left(\frac{34}{29}\right)^{\frac{1}{8}} \approx 1{,}020$$

Antallet følgere øker med ca. $2{,}0 \, \%$ per måned.

$$\underline{\underline{g(x) = 290\,000 \cdot 1{,}020^x}}$$

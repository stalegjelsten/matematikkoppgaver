---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/rasjonale-funksjoner-noah-og-johanne/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":6}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["rasjonale funksjoner","asymptoter","funksjoner"],"title":"Rasjonale funksjoner Noah og Johanne","todo":[],"permalink":"/rasjonale-funksjoner-noah-og-johanne/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":6}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["rasjonale funksjoner","asymptoter","funksjoner"],"title":"Rasjonale funksjoner Noah og Johanne","todo":[]}}
---


# Rasjonale funksjoner Noah og Johanne

Klassen til Noah og Johanne arbeider med rasjonale funksjoner. Læreren har tegnet grafene til to rasjonale funksjoner $f$ og $g$ og bedt elevene undersøke hvordan funksjonsuttrykkene kan se ut.

![Graf til f](/img/user/_resources/1t-v25-2-6-1.jpeg){width=60%}

>[!green-box] Noah
>Grafen til $f$ har to vertikale asymptoter. Hvordan må nevneren i brøken da se ut?

>[!yellow-box] Johanne
>Jeg tror jeg vet det! Tenk på hvordan vi har funnet den vertikale asymptoten til de rasjonale funksjonene vi har arbeidet med tidligere.

>[!green-box] Noah
>Ja! Da skjønner jeg også hvordan nevneren til $g$ kan se ut! Den grafen har jo ingen vertikale asymptoter!

>[!yellow-box] Johanne
>Vi må passe på at nullpunktet, skjæringspunktet med $y$-aksen og den horisontale asymptoten også blir riktig.

>[!oppgave]
>Hjelp Noah og Johanne med å finne fram til et mulig funksjonsuttrykk $f(x)$ for funksjonen $f$ og et mulig funksjonsuttrykk $g(x)$ for funksjonen $g$.
>
>Husk å argumentere for dine valg av funksjonsuttrykk.

## Fasit

$\underline{\underline{f(x) = \dfrac{5x - 2}{x^2 - 1}}}$ og $\underline{\underline{g(x) = \dfrac{5x - 2}{x^2 + 1}}}$

## Løsningsforslag

Vi leser av egenskapene til grafene og setter opp funksjonsuttrykk som passer.

### Funksjonen $f$

Grafen til $f$ har følgende egenskaper:

- **To vertikale asymptoter** ved $x = -1$ og $x = 1$
- **Horisontal asymptote** $y = 0$
- **Positiv $y$-skjæring** ($f(0) > 0$)
- **Nullpunkt** mellom $0$ og $1$ (ca. $x = 0{,}4$)

Siden $f$ har vertikale asymptoter ved $x = -1$ og $x = 1$, må nevneren ha nullpunkter nettopp der. En naturlig nevner er

$$
(x - 1)(x + 1) = x^2 - 1
$$

Telleren må gi nullpunkt nær $x = 0{,}4$. Et lineært uttrykk $5x - 2$ har nullpunkt i $x = \tfrac{2}{5}$, som passer godt. Da blir

$$
f(x) = \frac{5x - 2}{x^2 - 1}
$$

Vi verifiserer:

- Vertikale asymptoter: $x^2 - 1 = 0 \Rightarrow x = \pm 1$ ✓
- Nullpunkt: $5x - 2 = 0 \Rightarrow x = \tfrac{2}{5}$ ✓
- $y$-skjæring: $f(0) = \dfrac{-2}{-1} = 2 > 0$ ✓
- Horisontal asymptote: $\lim_{x \to \pm\infty} \dfrac{5x - 2}{x^2 - 1} = 0$ ✓

### Funksjonen $g$

Grafen til $g$ har følgende egenskaper:

- **Ingen vertikale asymptoter**
- **Horisontal asymptote** $y = 0$
- Negativ $y$-skjæring og samme type teller som $f$ (lik nullpunkt og y-skjæring i tallverdi før fortegn)
- Lokalt minimum like til venstre for $y$-aksen, lokalt maksimum til høyre

Siden $g$ ikke har vertikale asymptoter, må nevneren aldri bli null. Vi beholder samme teller som i $f$ og bytter nevner til $x^2 + 1$ (alltid positiv):

$$
g(x) = \frac{5x - 2}{x^2 + 1}
$$

Vi verifiserer:

- Ingen vertikale asymptoter: $x^2 + 1 \geq 1 > 0$ for alle $x$ ✓
- Nullpunkt: $5x - 2 = 0 \Rightarrow x = \tfrac{2}{5}$ ✓
- $y$-skjæring: $g(0) = \dfrac{-2}{1} = -2$ ✓
- Horisontal asymptote: $\lim_{x \to \pm\infty} \dfrac{5x - 2}{x^2 + 1} = 0$ ✓

Grafene er tegnet i GeoGebra (blå = $f$, rød = $g$) og samsvarer med originalfigurene:

![Grafer til f og g](/img/user/_resources/1t-v25-2-6-l%C3%B8sning.png)
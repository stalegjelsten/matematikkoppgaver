---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/rasjonale-funksjoner-og-grafvalg/","dg-publish":true,"eksamen":"h23","fag":["1t"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["rasjonale funksjoner","asymptoter","tolke grafer"],"title":"Rasjonale funksjoner og grafvalg","kategori":2,"vanskegrad":2,"beskrivelse":"Identifisere grafene til to rasjonale funksjoner ved å bestemme asymptoter, nullpunkter og $y$-skjæring og argumentere ut fra disse kjennetegnene.","permalink":"/rasjonale-funksjoner-og-grafvalg/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["1t"],"lf-source-claude":true,"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["rasjonale funksjoner","asymptoter","tolke grafer"],"title":"Rasjonale funksjoner og grafvalg","kategori":2,"vanskegrad":2,"beskrivelse":"Identifisere grafene til to rasjonale funksjoner ved å bestemme asymptoter, nullpunkter og $y$-skjæring og argumentere ut fra disse kjennetegnene."}}
---


# Rasjonale funksjoner og grafvalg

Funksjonene $f$ og $g$ er gitt ved

$$f(x) = \frac{2x - 8}{x + 2}$$

$$g(x) = \frac{x^2 - 4}{(x - 3)(x + 3)}$$

![Grafer A–F for rasjonale funksjoner](/img/user/_resources/1t-h23-1-5.jpeg){width=80%}

>[!oppgave]
>a) Hvilken av grafene ovenfor er grafen til $f$?
>b) Hvilken av grafene ovenfor er grafen til $g$?
>
>Husk å argumentere for at svarene dine er riktige.

## Fasit

a) **Graf A**
b) **Graf E**

## Løsningsforslag

### a

Vi finner kjennetegnene til $f(x) = \dfrac{2x-8}{x+2}$.

**Vertikal asymptote** der nevneren er null:

$$x + 2 = 0 \implies \textcolor{steelblue}{x = -2}$$

**Horisontal asymptote** — teller og nevner er begge av grad 1, så vi tar forholdet mellom de ledende koeffisientene:

$$\textcolor{steelblue}{y = \frac{2}{1} = 2}$$

**Nullpunkt** — sett teller lik null:

$$2x - 8 = 0 \implies x = 4, \quad \text{altså } \textcolor{steelblue}{(4,\ 0)}$$

**Skjæring med $y$-aksen** ($x = 0$):

$$f(0) = \frac{2\cdot 0 - 8}{0 + 2} = \frac{-8}{2} = -4, \quad \text{altså } \textcolor{steelblue}{(0,\ {-4})}$$

Vi leter etter grafen som har:
- én vertikal asymptote til venstre for $y$-aksen (ved $x = -2$),
- horisontal asymptote ved $y = 2$ (over $x$-aksen),
- nullpunkt ved $x = 4$ (til høyre for $y$-aksen),
- skjærer $y$-aksen ved $y = -4$ (under $x$-aksen).

Dette passer med **graf A**.

### b

Vi finner kjennetegnene til $g(x) = \dfrac{x^2 - 4}{(x-3)(x+3)}$.

**Vertikale asymptoter** der nevneren er null:

$$x - 3 = 0 \implies x = 3 \qquad \text{og} \qquad x + 3 = 0 \implies \textcolor{seagreen}{x = -3}$$

Grafene med to vertikale asymptoter er D, E og F.

**Horisontal asymptote** — teller og nevner er begge av grad 2:

$$\textcolor{seagreen}{y = \frac{1}{1} = 1}$$

**Nullpunkter** — faktoriser telleren:

$$x^2 - 4 = (x-2)(x+2) = 0 \implies \textcolor{seagreen}{x = \pm 2}$$

Nullpunktene $x = -2$ og $x = 2$ ligger begge *mellom* de to asymptotene ved $x = -3$ og $x = 3$.

**Skjæring med $y$-aksen** ($x = 0$):

$$g(0) = \frac{0^2 - 4}{(0-3)(0+3)} = \frac{-4}{-9} = \frac{4}{9} \approx 0{,}44$$

$y$-skjæringen er positiv og litt under den horisontale asymptoten $y = 1$.

Vi leter etter grafen med:
- to vertikale asymptoter symmetrisk om $y$-aksen (ved $x = \pm 3$),
- horisontal asymptote ved $y = 1$,
- to nullpunkter mellom asymptotene (ved $x = \pm 2$),
- $y$-skjæring mellom 0 og 1.

Dette passer med **graf E**.
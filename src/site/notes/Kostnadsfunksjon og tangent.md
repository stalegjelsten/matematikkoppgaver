---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["enhetskostnad","derivasjon","økonomi"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":6,"title":"Kostnadsfunksjon og tangent","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/kostnadsfunksjon-og-tangent/","permalink":"/kostnadsfunksjon-og-tangent/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["enhetskostnad","derivasjon","økonomi"],"fag":["s2"],"eksamen":"v20","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":6,"title":"Kostnadsfunksjon og tangent","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Kostnadsfunksjon og tangent

For en bedrift koster det $K(x)$ kroner å produsere $x$ enheter av en vare per dag.

Enhetskostnaden er

$$E(x) = \frac{K(x)}{x}$$

Figuren nedenfor viser grafen til $K$ og tangenten til grafen i punktet $(100, 1200)$.

![Grafen til K og tangenten i (100, 1200)](/img/user/_resources/s2-v20-1-6.jpeg){width=60%}

>[!oppgave]
>a) Bruk figuren nedenfor til å bestemme $K'(100)$ og $E(100)$.
>b) Vis at den deriverte av enhetskostnaden kan skrives som
>
>$$E'(x) = \frac{K'(x) - E(x)}{x}$$
>
>c) Bestem $E'(100)$. Hva forteller dette tallet oss?

## Fasit

a) $K'(100) = 5$ og $E(100) = 12$
b) Vis ved derivasjon av $E(x) = \dfrac{K(x)}{x}$
c) $E'(100) = -0{,}07$

## Løsningsforslag

### a

**Enhetskostnaden** er

$$E(100) = \frac{K(100)}{100} = \frac{1200}{100} = \underline{\underline{12}}$$

**Grensekostnaden** $K'(100)$ er stigningstallet til tangenten i $(100, 1200)$. Vi leser av figuren at tangenten skjærer $y$-aksen i omtrent $y = 700$. Stigningstallet blir

$$K'(100) = \frac{1200 - 700}{100 - 0} = \underline{\underline{5}}$$

### b

Vi deriverer $E(x) = \dfrac{K(x)}{x}$ med kvotientregelen:

$$E'(x) = \frac{K'(x) \cdot x - K(x) \cdot 1}{x^2} = \frac{K'(x) \cdot x - K(x)}{x^2}$$

Vi deler teller og nevner med $x$:

$$E'(x) = \frac{K'(x) - \dfrac{K(x)}{x}}{x} = \frac{K'(x) - E(x)}{x}$$

### c

Vi setter inn verdiene fra oppgave a):

$$E'(100) = \frac{K'(100) - E(100)}{100} = \frac{5 - 12}{100} = \underline{\underline{-0{,}07}}$$

Dette betyr at enhetskostnaden synker med omtrent $0{,}07$ kr per enhet når produksjonen økes fra 100 enheter. Grensekostnaden ($K'(100) = 5$) er lavere enn enhetskostnaden ($E(100) = 12$), så det lønner seg å produsere flere enheter.

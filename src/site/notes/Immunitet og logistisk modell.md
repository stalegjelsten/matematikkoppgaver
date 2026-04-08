---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","regresjon","integral","modellering"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":9,"title":"Immunitet og logistisk modell","status":0,"source":null,"todo":["fasit","løsningsforslag"],"dg-permalink":"/immunitet-og-logistisk-modell/","permalink":"/immunitet-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","regresjon","integral","modellering"],"fag":["s2"],"eksamen":"v22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":9,"title":"Immunitet og logistisk modell","status":0,"source":null,"todo":["fasit","løsningsforslag"]}}
---


# Immunitet og logistisk modell

I en by i Norge ble det i 2021 kartlagt hvor mange som ble immune mot en sykdom.

Tabellen viser hvor stor prosentandel av befolkningen som var immune ved slutten av noen utvalgte måneder i 2021.

| $t$ | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| Prosentandel immune | 6 | 21 | 41 | 68 | 81 |

Her er $t = 1$ slutten av januar 2021, $t = 2$ slutten av februar 2021 og så videre.

>[!oppgave]
>a) Bruk regresjon til å bestemme en logistisk modell $g$ for situasjonen.
>b) Ved hvilket tidspunkt vil andelen immune passere 85 prosent ifølge modellen?
>c) Vil hele befolkningen noen gang bli immune ifølge modellen? Begrunn svaret.

I en annen by er $N$ gitt ved

$$N(t) = \frac{2300e^{-0{,}61t}}{(1 + 40e^{-0{,}61t})^2}$$

en god modell for hvor mye prosentandelen som er immune, økte med per måned, $t$ måneder etter 1. januar 2021. Det vil si at $N(1)$ er prosentandelen nye immune i januar 2021, $N(2)$ er prosentandelen nye immune i februar 2021, og så videre.

>[!oppgave]
>d) Bruk graftegner til å tegne grafen til $N$.
>e) Bestem $\displaystyle\int_{0{,}5}^{12{,}5} N(t) \, \mathrm{d}t$. Hva forteller svaret i denne situasjonen?

## Fasit



## Løsningsforslag

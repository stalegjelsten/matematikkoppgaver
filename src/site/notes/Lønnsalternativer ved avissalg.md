---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["lineær vekst","funksjoner","økonomi"],"fag":["1p-y el","1p-y ba","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":5},{"fag":"1p-y ba","del":2,"oppgave":5},{"fag":"1p-y fd","del":2,"oppgave":5},{"fag":"1p-y hs","del":2,"oppgave":5},{"fag":"1p-y dt","del":2,"oppgave":5},{"fag":"1p-y im","del":2,"oppgave":5},{"fag":"1p-y na","del":2,"oppgave":5},{"fag":"1p-y rm","del":2,"oppgave":5},{"fag":"1p-y sr","del":2,"oppgave":5},{"fag":"1p-y tp","del":2,"oppgave":5}],"title":"Lønnsalternativer ved avissalg","status":0,"source":null,"todo":null,"dg-permalink":"/lonnsalternativer-ved-avissalg/","lf-source-claude":true,"permalink":"/lonnsalternativer-ved-avissalg/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["lineær vekst","funksjoner","økonomi"],"fag":["1p-y el","1p-y ba","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":5},{"fag":"1p-y ba","del":2,"oppgave":5},{"fag":"1p-y fd","del":2,"oppgave":5},{"fag":"1p-y hs","del":2,"oppgave":5},{"fag":"1p-y dt","del":2,"oppgave":5},{"fag":"1p-y im","del":2,"oppgave":5},{"fag":"1p-y na","del":2,"oppgave":5},{"fag":"1p-y rm","del":2,"oppgave":5},{"fag":"1p-y sr","del":2,"oppgave":5},{"fag":"1p-y tp","del":2,"oppgave":5}],"title":"Lønnsalternativer ved avissalg","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Lønnsalternativer ved avissalg

Elise skal gå fra dør til dør og selge aviser hver lørdag. En avis koster 49 kroner.

Firmaet hun skal arbeide for, beregner lønn på ulike måter. Elise kan velge mellom to tilbud.


> [!green-box] Tilbud 1
> Lønn: 35 % av beløpet hun selger aviser for


> [!yellow-box] Tilbud 2
> Fast lønn: 150 kroner per lørdag  
> Tillegg: 10 kroner per avis hun selger

Elise gjør seg noen tanker og stiller noen spørsmål.

>[!green-box] 
> Hvor mye tjener jeg hvis jeg velger tilbud 1 og selger 15 aviser en lørdag?
>
> Hvor mye tjener jeg hvis jeg velger tilbud 2 og selger 15 aviser en lørdag?

> [!blue-box]
> Jeg tror jeg kan selge flere enn 15 aviser hver lørdag. 
> 
> Hvordan kan jeg lage en oversikt som viser hvilket tilbud som er best?


>[!oppgave]
>Svar på spørsmålene Elise stiller. Gjør beregninger og vurderinger, og gi Elise råd om hvilket tilbud hun bør velge.

## Fasit

Tilbud 1 med 15 aviser: 257,25 kr. Tilbud 2 med 15 aviser: 300 kr. Tilbud 1 lønner seg fra og med 21 aviser.

## Løsningsforslag

**Tilbud 1** gir 35 % av salgsbeløpet. Hver avis koster 49 kr, så lønnen per avis er

$$0{,}35 \cdot 49 = 17{,}15 \, \mathrm{kr}$$

Vi setter opp et uttrykk for lønnen ved $x$ solgte aviser:

$$f(x) = 17{,}15 \cdot x$$

**Tilbud 2** gir fast lønn pluss 10 kr per avis:

$$g(x) = 150 + 10 \cdot x$$

**Hvor mye tjener Elise med 15 aviser?**

- Tilbud 1: $f(15) = 17{,}15 \cdot 15 = 257{,}25 \, \mathrm{kr}$
- Tilbud 2: $g(15) = 150 + 10 \cdot 15 = 300 \, \mathrm{kr}$

**Med 15 aviser er $\underline{\underline{\text{tilbud 2 best}}}$ med $300 \, \mathrm{kr}$ mot $257{,}25 \, \mathrm{kr}$.**

**Hvilken oversikt kan Elise lage?**

Vi tegner begge grafene i GeoGebra og finner skjæringspunktet, se utklippet under.

![Grafer for tilbud 1 (grønn) og tilbud 2 (rød)](/img/user/_resources/1p-y-v25-2-5-graf.png){width=70%}

Fra grafen ser vi at linjene krysser hverandre ved omtrent 21 aviser.

Vi kan også regne ut: $f(x) = g(x)$ når $17{,}15x = 150 + 10x$, altså $7{,}15x = 150$, som gir $x \approx 21$.

| Antall aviser | 10 | 15 | 20 | 21 | 25 | 30 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Tilbud 1 | 171,50 | 257,25 | 343,00 | 360,15 | 428,75 | 514,50 |
| Tilbud 2 | 250 | 300 | 350 | 360 | 400 | 450 |
| Best | T2 | T2 | T2 | ≈ likt | T1 | T1 |

**Råd til Elise:** Dersom hun tror hun kan selge **21 aviser eller flere** per lørdag, bør hun velge **tilbud 1**. Selger hun færre enn 21, er **tilbud 2** best.

---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/sylinderboks-med-minst-overflate/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5}],"poeng":6,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["optimering","volum","funksjoner"],"title":"Sylinderboks med minst overflate","todo":[],"permalink":"/sylinderboks-med-minst-overflate/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5}],"poeng":6,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["optimering","volum","funksjoner"],"title":"Sylinderboks med minst overflate","todo":[]}}
---


# Sylinderboks med minst overflate

Isabel er industridesigner. Hun arbeider med et design på bokser med form som sylindre.

Formel for å regne ut volumet av en boks med radius $r$ og høyde $h$

$$V = \pi \cdot r^2 \cdot h$$

Formel for å regne ut arealet av overflaten av boksen

$$O = \pi \cdot r^2 + 2 \cdot \pi \cdot r \cdot h$$

![Sylindrisk boks](/img/user/_resources/1t-v25-2-5.jpeg){width=25%}

Isabel lurer på hvor stor radius hun bør velge og hvor høye boksene må være, når hver boks skal ha

- et volum $V$ på $450 \mathrm{~cm^3}$
- minst mulig overflate $O$

Isabel ser at når hun har gitt volum og radius, kan hun regne ut høyden ved å bruke formelen $V = \pi \cdot r^2 \cdot h$

>[!oppgave]
>a) Lag en oversikt som vist nedenfor. Gjør beregninger og fyll inn verdiene som mangler.
>
>| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
>|---|---|---|---|
>| 2 | 35,8 | 462,6 | 450 |
>| 4 |  |  | 450 |
>| 6 |  |  | 450 |
>| 8 |  |  | 450 |

Isabel ønsker å lage en modell som viser overflaten av ulike bokser hun kan lage ved å endre radius.

>[!oppgave]
>b) Sett opp et funksjonsuttrykk Isabel kan bruke, og lag en grafisk framstilling som viser sammenhengen mellom radius og overflate.
>c) Hvor stor må radius i boksene være for at overflaten skal bli minst mulig? Hvor stor blir overflaten da?

## Fasit

a)

| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
|---|---|---|---|
| 2 | 35,8 | 462,6 | 450 |
| 4 | 8,95 | 275,3 | 450 |
| 6 | 3,98 | 263,1 | 450 |
| 8 | 2,24 | 313,6 | 450 |

b) $O(r) = \pi r^2 + \dfrac{900}{r}$

c) $\underline{\underline{r \approx 5{,}23 \, \mathrm{cm}}}$, $\underline{\underline{O_{\min} \approx 258 \, \mathrm{cm}^2}}$

## Løsningsforslag

### a

Isabel har gitt at $V = 450 \, \mathrm{cm}^3$. Hun løser volumformelen for $h$:

$$h = \frac{V}{\pi r^2} = \frac{450}{\pi r^2}$$

Deretter settes $h$ inn i overflateformelen:

$$O = \pi r^2 + 2\pi r \cdot \frac{450}{\pi r^2} = \pi r^2 + \frac{900}{r}$$

Vi beregner $h$ og $O$ for hver radiusverdi i GeoGebra CAS (se utklipp):

![GeoGebra CAS: tabellverdier for h og O](/img/user/_resources/1t-v25-2-5-cas.png)

| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
|---|---|---|---|
| 2 | 35,8 | 462,6 | 450 |
| 4 | 8,95 | 275,3 | 450 |
| 6 | 3,98 | 263,1 | 450 |
| 8 | 2,24 | 313,6 | 450 |

### b

Vi setter $h = \dfrac{450}{\pi r^2}$ inn i formelen for overflaten:

$$O(r) = \pi r^2 + 2\pi r \cdot \frac{450}{\pi r^2} = \pi r^2 + \frac{900}{r}$$

Grafen under viser $O(r)$ for $r > 0$ med bunnpunktet markert:

![Graf av O(r) med markert minimum](/img/user/_resources/1t-v25-2-5.png)

### c

Vi finner minimumet ved å derivere $O(r)$ og sette $O'(r) = 0$:

$$O'(r) = 2\pi r - \frac{900}{r^2}$$

Vi setter $O'(r) = 0$:

$$2\pi r = \frac{900}{r^2} \implies r^3 = \frac{450}{\pi}$$

GeoGebra CAS gir $r \approx 5{,}23 \, \mathrm{cm}$ (se utklipp over).

Høyden blir da:

$$h = \frac{450}{\pi \cdot 5{,}23^2} \approx 5{,}23 \, \mathrm{cm}$$

Vi merker oss at $h = r$ ved minimumet — boksen er like høy som den er bred.

Minste overflate:

$$O(5{,}23) = \pi \cdot 5{,}23^2 + \frac{900}{5{,}23} \approx 258 \, \mathrm{cm}^2$$

**Isabel bør velge radius $\underline{\underline{r \approx 5{,}23 \, \mathrm{cm}}}$. Da blir overflaten minst mulig, $\underline{\underline{O_{\min} \approx 258 \, \mathrm{cm}^2}}$.**
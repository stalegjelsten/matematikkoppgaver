---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/isabels-sylinderformede-bokser/","dg-publish":true,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":6}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["volum","areal","optimering","funksjoner"],"title":"Isabels sylinderformede bokser","todo":[],"kategori":3,"vanskegrad":3,"beskrivelse":"Sette opp og optimere overflatearealet til en sylinder med gitt volum ved å bruke funksjonsuttrykk og GeoGebra.","lf-source-claude":true,"permalink":"/isabels-sylinderformede-bokser/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":6}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["volum","areal","optimering","funksjoner"],"title":"Isabels sylinderformede bokser","todo":[],"kategori":3,"vanskegrad":3,"beskrivelse":"Sette opp og optimere overflatearealet til en sylinder med gitt volum ved å bruke funksjonsuttrykk og GeoGebra.","lf-source-claude":true}}
---


# Isabels sylinderformede bokser

Isabel er industridesigner. Hun arbeider med et design på bokser med form som sylindre.

![Sylinder](/img/user/_resources/1p-v25-2-6.jpeg){width=30%}

> [!tip] Formler for sylinderboksene
>
> Formelen for å regne ut volumet av en boks med radius $r$ og høyde $h$ er $V = \pi \cdot r^2 \cdot h$  
>Formelen for å regne ut arealet av overflaten av boksen er $O = \pi \cdot r^2 + 2 \cdot \pi \cdot r \cdot h$ 

Isabel lurer på hvor stor radius hun bør velge og hvor høye boksene må være, når hver boks skal ha

- et volum $V$ på 450 cm³
- minst mulig overflate $O$

Isabel ser at når hun har gitt volum og radius, kan hun regne ut høyden ved å bruke formelen $V = \pi \cdot r^2 \cdot h$

>[!oppgave]
>a) Lag en oversikt som vist nedenfor. Gjør beregninger og fyll inn verdiene som mangler.
>
>| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
>|---|---|---|---|
>| 2 | $35{,}8$ | $462{,}6$ | 450 |
>| 4 | | | 450 |
>| 6 | | | 450 |
>| 8 | | | 450 |

Isabel ønsker å lage en modell som viser overflaten av ulike bokser hun kan lage ved å endre radius.

>[!oppgave]
>b) Sett opp et funksjonsuttrykk Isabel kan bruke, og lag en grafisk framstilling som viser sammenhengen mellom radius og overflate.
>c) Hvor stor må radius i boksene være for at overflaten skal bli minst mulig? Hvor stor blir overflaten da?

## Fasit

a) Tabell:

   | Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
   |---|---|---|---|
   | 2 | $35{,}8$ | $462{,}6$ | 450 |
   | 4 | $8{,}95$ | $275{,}3$ | 450 |
   | 6 | $3{,}98$ | $263{,}1$ | 450 |
   | 8 | $2{,}24$ | $313{,}6$ | 450 |

b) $O(r) = \pi r^2 + \dfrac{900}{r}$

c) **Radius $r \approx 5{,}23 \, \mathrm{cm}$ gir minst mulig overflate $O \approx 258 \, \mathrm{cm}^2$.**

## Løsningsforslag

### a

Oppgaven oppgir at $V = 450 \, \mathrm{cm}^3$ og at $V = \pi \cdot r^2 \cdot h$. Vi løser for høyden:

$$h = \frac{V}{\pi \cdot r^2} = \frac{450}{\pi \cdot r^2}$$

Vi bruker dette til å fylle inn tabellen for hvert valg av $r$:

**$r = 4$:**

$$h = \frac{450}{\pi \cdot 4^2} = \frac{450}{16\pi} \approx 8{,}95 \, \mathrm{cm}$$

$$O = \pi \cdot 4^2 + 2\pi \cdot 4 \cdot 8{,}95 \approx 50{,}3 + 225{,}0 \approx 275{,}3 \, \mathrm{cm}^2$$

**$r = 6$:**

$$h = \frac{450}{\pi \cdot 6^2} = \frac{450}{36\pi} \approx 3{,}98 \, \mathrm{cm}$$

$$O = \pi \cdot 6^2 + 2\pi \cdot 6 \cdot 3{,}98 \approx 113{,}1 + 150{,}0 \approx 263{,}1 \, \mathrm{cm}^2$$

**$r = 8$:**

$$h = \frac{450}{\pi \cdot 8^2} = \frac{450}{64\pi} \approx 2{,}24 \, \mathrm{cm}$$

$$O = \pi \cdot 8^2 + 2\pi \cdot 8 \cdot 2{,}24 \approx 201{,}1 + 112{,}5 \approx 313{,}6 \, \mathrm{cm}^2$$

Fullstendig tabell:

| Radius, $r$ (cm) | Høyde, $h$ (cm) | Overflate, $O$ (cm²) | Volum, $V$ (cm³) |
|---|---|---|---|
| 2 | $35{,}8$ | $462{,}6$ | 450 |
| 4 | $8{,}95$ | $275{,}3$ | 450 |
| 6 | $3{,}98$ | $263{,}1$ | 450 |
| 8 | $2{,}24$ | $313{,}6$ | 450 |

### b

Vi setter uttrykket for $h$ inn i formelen for overflaten:

$$O = \pi r^2 + 2\pi r \cdot h = \pi r^2 + 2\pi r \cdot \frac{450}{\pi r^2} = \pi r^2 + \frac{900}{r}$$

Funksjonsuttrykket er:

$$\boxed{O(r) = \pi r^2 + \frac{900}{r}}$$

Grafen nedenfor viser sammenhengen mellom radius $r$ og overflaten $O$. Bunnpunktet `A` er markert.

![Graf av overflaten O(r)](/img/user/_resources/1p-v25-2-6-graf.png)

I GeoGebra brukes kommandoene:

```
O(r) = pi * r^2 + 900/r
Extremum(O, 1, 10)
```

### c

Fra grafen leser vi av at bunnpunktet er ved $A \approx (5{,}23;\; 258{,}02)$.

**Radius $r \approx 5{,}23 \, \mathrm{cm}$ gir minst mulig overflate $O \approx 258 \, \mathrm{cm}^2$.**
---
{"tags":["oppgave"],"date":"2026-03-12","modified":"2026-03-12","aliases":[],"dg-publish":true,"temaer":["excel","lån","sparing","kredittkort"],"fag":["1p-y el","1p-y ba"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3}],"title":"Chris lån og sparing for å ta førerkort","source":null,"todo":null,"status":3,"permalink":"/chris-lan-og-sparing-for-a-ta-forerkort/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-12","modified":"2026-03-12","aliases":[],"temaer":["excel","lån","sparing","kredittkort"],"fag":["1p-y el","1p-y ba"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3}],"title":"Chris lån og sparing for å ta førerkort","source":null,"todo":null,"status":3,"permalink":"/chris-lan-og-sparing-for-a-ta-forerkort/"}}
---


# Chris lån og sparing for å ta førerkort


Chris ønsker å ta førerkort for bil. Han finner to alternativer. 

<!-- two-column start left-width=50% -->

**Alternativ 1** 

- Trafikalt grunnkurs: 3300 kr
- To trinnvurderinger: 1580 kr
- Sikkerhetskurs på bane: 5950 kr
- Sikkerhetskurs på vei: 8500 kr
- Kjøretime: 850 kr per time

---

 **Alternativ 2** 
 
 Pakketilbud: 25 000 kr. Pakken inkluderer
 
- Trafikalt grunnkurs
- To trinnvurderinger
- Sikkerhetskurs på bane
- Sikkerhetskurs på vei
- 8 kjøretimer

<!-- two-column stop -->

Chris tror han vil trenge 8 kjøretimer i tillegg til resten av opplæringen. 

> [!oppgave]
>  a) Hvilket alternativ bør Chris velge? Husk å begrunne svaret ditt. 

Chris har ikke penger. Han vurderer å bruke kredittkort til å ta opp et lån på 25 000 kroner som han skal betale tilbake med ett terminbeløp hver måned i ett år, slik betalingsplanen nedenfor viser.

| Termin | Terminbeløp | Renter | Gebyrer | Avdrag | Restgjeld |
| :----: | :---------: | :----: | :-----: | :----: | :-------: |
|   1    |    2321     |  425   |    0    |  1896  |  23 104   |
|   2    |    2321     |  393   |    0    |  1928  |  21 176   |
|   3    |    2321     |  360   |    0    |  1961  |  19 215   |
|   4    |    2321     |  327   |    0    |  1994  |  17 221   |
|   5    |    2321     |  293   |    0    |  2028  |  15 193   |
|   6    |    2321     |  258   |    0    |  2062  |  13 131   |
|   7    |    2321     |  223   |    0    |  2097  |  11 034   |
|   8    |    2321     |  188   |    0    |  2133  |   8901    |
|   9    |    2321     |  151   |    0    |  2169  |   6732    |
|   10   |    2321     |  114   |    0    |  2206  |   4526    |
|   11   |    2321     |   77   |    0    |  2244  |   2282    |
|   12   |    2321     |   39   |    0    |  2282  |     0     |

> [!oppgave]
>  b) Hva blir den totale kostnaden for lånet?

Chris finner ut at han heller vil spare 2300 kroner hver måned. Han har en sparekonto med 0,35 prosent rente per måned.

> [!oppgave]
> c) Lag et regneark som vist nedenfor. Lag formler i de grønne cellene slik at utregningene blir riktige.
>
> Lag flere rader, slik at du finner ut hvor mange måneder det tar før Chris har 25 000 kroner på kontoen. 
> 
> Husk å vise hvilke formler du bruker i regnearket.

![Regneark som viser Chris' sparing](/img/user/_resources/chris-sparing.png){width=80% #fig:chris-sparing}

## Fasit

a) Vi sjekker prisen for alternativ 1 med 8 kjøretimer.
  $$3300+1580+5950+8500+8 \cdot 850=26\,130 \mathrm{~kr}$$
  **Pakkeløsningen i alternativ 2 er rimeligere.**
b) Chris har lånt 25 000 kr og han betaler tilbake $12 \cdot 2321=27\,852 \mathrm{~kr}$. Differansen er $27\,852-25000=2852 \mathrm{~kr}$.  
**Lånet koster 2852 kr.**
c) ![](/img/user/_resources/chris-sparing-excel.png){width=100%}  
**Chris har 25 000 kr på kontoen etter han har satt inn sparebeløpet i måned 11.**

## Løsningsforslag

### a

Vi beregner prisen for alternativ 1 med 8 kjøretimer:

$$
\begin{aligned}
&3300 + 1580 + 5950 + 8500 + 8 \cdot 850 \\
= \, &3300 + 1580 + 5950 + 8500 + 6800 \\
= \, &26\,130 \, \mathrm{kr}
\end{aligned}
$$

Alternativ 2 koster $25\,000 \, \mathrm{kr}$ og inkluderer de samme kursene med 8 kjøretimer.

**Chris bør velge alternativ 2 (pakketilbudet). Det er $\underline{\underline{1\,130 \, \mathrm{kr}}}$ billigere enn alternativ 1.**

### b

Total innbetalt med lånet:

$$
12 \cdot 2321 = 27\,852 \, \mathrm{kr}
$$

Lånekostnad (det ekstra han betaler):

$$
27\,852 - 25\,000 = 2\,852 \, \mathrm{kr}
$$

**Den totale kostnaden for lånet er $\underline{\underline{2\,852 \, \mathrm{kr}}}$.**

### c

>[!note] Excel-oppgave
>Denne oppgaven løses i Excel. Under er et eksempel på hvordan regnearket kan se ut.

![Regneark for Chris' sparing](/img/user/_resources/chris-sparing-excel.png){width=100%}

Formlene i de grønne cellene er:

- **Renter:** `= forrige saldo × 0,0035`
- **Ny saldo:** `= forrige saldo + renter + innskudd`

**Chris har 25 000 kroner på kontoen etter at han har satt inn sparebeløpet i måned 11** (saldo ≈ 25 747 kr).
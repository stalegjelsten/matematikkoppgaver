---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["optimering","modellering","funksjonsdrøfting","areal","Pytagoras"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":7}],"poeng":8,"title":"Optimalisering av grønnsakhage med 100 m gjerde","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Modellere arealet $A(x)$ av grønnsakhage (rektangel + to likebeinte rettvinklede trekanter) under bibetingelse 100 m gjerde, finne maksimum og bestemme gyldighetsområde.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn $x=8$ og $y=50-2x-x\\sqrt{2}$ for å beregne arealet direkte."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Lage tabell for ulike $x$ og estimere $x$-verdien som gir størst areal."},{"deloppgave":"c","kategori":2,"vanskegrad":2,"beskrivelse":"Sette opp $A(x)=50x-x^2(1+\\sqrt{2})$ ved å bruke bibetingelsen $y=50-2x-x\\sqrt{2}$ og Pytagoras for hypotenusen."},{"deloppgave":"e","kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme $0<x<25(2-\\sqrt{2})$ slik at både $y>0$ og $x>0$."}],"source":null,"lf-source-claude":true,"todo":null,"permalink":"/optimalisering-av-gronnsakhage-med-100-m-gjerde/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["optimering","modellering","funksjonsdrøfting","areal","Pytagoras"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":7,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":7}],"poeng":8,"title":"Optimalisering av grønnsakhage med 100 m gjerde","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Modellere arealet $A(x)$ av grønnsakhage (rektangel + to likebeinte rettvinklede trekanter) under bibetingelse 100 m gjerde, finne maksimum og bestemme gyldighetsområde.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn $x=8$ og $y=50-2x-x\\sqrt{2}$ for å beregne arealet direkte."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Lage tabell for ulike $x$ og estimere $x$-verdien som gir størst areal."},{"deloppgave":"c","kategori":2,"vanskegrad":2,"beskrivelse":"Sette opp $A(x)=50x-x^2(1+\\sqrt{2})$ ved å bruke bibetingelsen $y=50-2x-x\\sqrt{2}$ og Pytagoras for hypotenusen."},{"deloppgave":"e","kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme $0<x<25(2-\\sqrt{2})$ slik at både $y>0$ og $x>0$."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Optimalisering av grønnsakhage med 100 m gjerde

![Grønnsakhage med rektangel ($x \times y$) og to likebeinte rettvinklede trekanter med kateter $x$](/img/user/_resources/1t-h24-2-7.jpeg){width=70%}

Else skal gjerde inn tre områder for å lage en grønnsakhage. Det største området skal ha form som et rektangel og de to minste som likebeinte rettvinklede trekanter. Se figuren ovenfor.

Else skal sette opp gjerde langs alle linjestykkene vist på figuren ovenfor.
Hun har til sammen 100 m gjerde som hun vil bruke.

>[!oppgave]
>a) Hvor stort blir arealet av grønnsakhagen dersom hun velger at katetene i trekantene skal være 8 meter?
>b) Lag en oversikt som viser hvordan arealet av grønnsakhagen endrer seg dersom hun velger andre lengder på katetene. Av oversikten skal Else kunne se omtrent hvor lange katetene må være for at arealet av grønnsakhagen skal bli størst mulig.
>c) Lag en modell $A$ som Else kan bruke for å regne ut arealet $A(x)$ av grønnsakhagen for ulike verdier av $x$.
>d) Bruk modellen til å finne den lengden av katetene som vil gi det største arealet.
>e) Bestem modellens gyldighetsområde.

## Fasit

a) $\underline{\underline{A \approx 245{,}5 \, \mathrm{m}^2}}$

b) Tabellen viser at maksimum er rundt $x \approx 10$–$11 \, \mathrm{m}$.

c) $\underline{\underline{A(x) = 50x - x^2(1 + \sqrt{2})}}$

d) $\underline{\underline{x = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}}}$, maksimalt areal $\underline{\underline{A = 625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2}}$

e) $\underline{\underline{0 < x < 25(2-\sqrt{2}) \approx 14{,}6}}$

## Løsningsforslag

Vi lar $x$ være lengden på katetene i de to likebeinte rettvinklede trekantene, og $y$ være lengden på rektangelets lange side.

**Bibetingelse (totalt gjerde = 100 m):**

Gjerdet består av to lange rektangelsider ($2y$), to korte rektangelsider ($2x$) og per trekant: én ekstra katet ($x$) og én hypotenus. Hypotenusen i en likebeint rettvinklet trekant med kateter $x$ er $x\sqrt{2}$ (Pytagoras). Siden den delte kateten allerede er telt som rektangelets korte side, bidrar hver trekant med $x + x\sqrt{2}$ ekstra til gjerdet:

$$2y + 2x + 2(x + x\sqrt{2}) = 100$$

$$2y + 4x + 2x\sqrt{2} = 100 \implies y = 50 - 2x - x\sqrt{2}$$

### a

Vi setter $x = 8$:

$$y = 50 - 2 \cdot 8 - 8\sqrt{2} = 34 - 8\sqrt{2} \approx 22{,}69 \, \mathrm{m}$$

Arealet av rektangelet:

$$A_{\text{rekt}} = x \cdot y = 8(34 - 8\sqrt{2}) = 272 - 64\sqrt{2} \, \mathrm{m}^2$$

Arealet av to likebeinte rettvinklede trekanter med kateter $x$:

$$A_{\text{trek}} = 2 \cdot \frac{1}{2} \cdot x \cdot x = x^2 = 64 \, \mathrm{m}^2$$

Totalt areal:

$$A = (272 - 64\sqrt{2}) + 64 = 336 - 64\sqrt{2} \approx \mathbf{\underline{\underline{245{,}5 \, \mathrm{m}^2}}}$$

### b

Vi beregner $A(x) = 50x - x^2(1+\sqrt{2})$ for ulike verdier av $x$:

| $x$ (m) | $A(x)$ (m²) |
|---------|------------|
| 1       | 47,6        |
| 5       | 189,6       |
| 8       | 245,5       |
| 10      | 258,6       |
| 11      | 257,9       |
| 12      | 252,4       |
| 14      | 226,8       |

Av tabellen ser vi at arealet er størst rundt $x \approx 10$ m.

### c

En likebeint rettvinklet trekant med kateter $x$ har areal $\frac{x^2}{2}$. To slike trekanter gir samlet areal $x^2$.

Med bibetingelsen $y = 50 - 2x - x\sqrt{2}$ blir det totale arealet:

$$A(x) = x \cdot y + x^2 = x(50 - 2x - x\sqrt{2}) + x^2$$

$$= 50x - 2x^2 - x^2\sqrt{2} + x^2$$

$$\underline{\underline{A(x) = 50x - x^2(1 + \sqrt{2})}}$$

### d

Vi bruker CAS til å finne $A'(x)$ og løse $A'(x) = 0$:

![GeoGebra CAS: A(x), A'(x), løsning og maksimumsverdi](/img/user/_resources/1t-h24-2-7-cas.png)

CAS gir:

$$A'(x) = 50 - 2x(1 + \sqrt{2})$$

$$A'(x) = 0 \implies x = \frac{25}{1 + \sqrt{2}} = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}$$

(rasjonalisert ved å gange med $\frac{\sqrt{2}-1}{\sqrt{2}-1}$)

Maksimalt areal:

$$A_{\max} = 625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2$$

Siden $A'(x) > 0$ for $x < 25(\sqrt{2}-1)$ og $A'(x) < 0$ for $x > 25(\sqrt{2}-1)$, er dette et maksimum.

Grafen bekrefter resultatet:

![Graf av $A(x) = 50x - x^2(1+\sqrt{2})$ med toppunkt Maks $\approx (10{,}36;\, 258{,}9)$](/img/user/_resources/1t-h24-2-7.png)

**Katetlengden $x = 25(\sqrt{2}-1) \approx 10{,}36 \, \mathrm{m}$ gir størst areal på $625(\sqrt{2}-1) \approx 258{,}9 \, \mathrm{m}^2$.**

### e

For at modellen skal gi mening må både $x > 0$ og $y > 0$:

$$y = 50 - 2x - x\sqrt{2} > 0 \implies x < \frac{50}{2 + \sqrt{2}} = 25(2-\sqrt{2}) \approx 14{,}6 \, \mathrm{m}$$

Gyldighetsområdet er:

$$\underline{\underline{0 < x < 25(2-\sqrt{2})}} \quad \text{(dvs. } x \in \langle 0,\, 25(2-\sqrt{2}) \rangle \text{)}$$

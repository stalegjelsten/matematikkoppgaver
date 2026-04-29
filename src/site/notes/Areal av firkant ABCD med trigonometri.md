---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["trigonometri","areal","cosinussetningen","arealsetningen"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"poeng":4,"title":"Areal av firkant ABCD med trigonometri","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne arealet av firkant $ABCD$ ved (a) cosinussetningen og arealsetningen fra sider, og (b) arealsetningen direkte fra vinkler.","deloppgaver":[{"deloppgave":"a","vanskegrad":3,"beskrivelse":"Bruke cosinussetningen til å finne en vinkel i $\\triangle ABC$, så arealsetningen for begge trekantene."}],"source":null,"lf-source-claude":true,"todo":null,"permalink":"/areal-av-firkant-abcd-med-trigonometri/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["trigonometri","areal","cosinussetningen","arealsetningen"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"poeng":4,"title":"Areal av firkant ABCD med trigonometri","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne arealet av firkant $ABCD$ ved (a) cosinussetningen og arealsetningen fra sider, og (b) arealsetningen direkte fra vinkler.","deloppgaver":[{"deloppgave":"a","vanskegrad":3,"beskrivelse":"Bruke cosinussetningen til å finne en vinkel i $\\triangle ABC$, så arealsetningen for begge trekantene."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Areal av firkant ABCD med trigonometri

Klassen til Isabel og Anniken skal vise at de kan bruke trigonometri for å bestemme arealet av figuren nedenfor.

![Firkant $ABCD$ med $AB = 8{,}0$ og $DC = 12{,}0$](/img/user/_resources/1t-h24-2-6.jpeg){width=55%}

Læreren har delt klassen i grupper og gitt hver gruppe noen opplysninger i tillegg til informasjonen som kan leses ut fra figuren.

Gruppen til Isabel har fått vite at $AD = 6{,}0$, $BC = 10{,}0$ og at diagonalen $AC = 16{,}4$.

>[!oppgave]
>a) Vis hvordan gruppen til Isabel kan bestemme arealet ved å bruke opplysningene de har tilgang til. Husk å gjøre rede for hvilke trigonometriske sammenhenger du bruker.

Gruppen til Anniken har fått vite at $\angle A = 62{,}5\degree$, $\angle C = 38{,}3\degree$, $\angle ABD = 45{,}5\degree$ og $\angle CBD = 85{,}5\degree$.

>[!oppgave]
>b) Vis hvordan gruppen til Anniken kan bestemme arealet ved å bruke opplysningene de har tilgang til. Husk å gjøre rede for hvilke trigonometriske sammenhenger du bruker.

## Fasit

a) $\underline{\underline{\text{Areal} \approx 58{,}5 \, \mathrm{m}^2}}$

b) $\underline{\underline{\text{Areal} \approx 58{,}5 \, \mathrm{m}^2}}$

## Løsningsforslag

Utregningene er gjort i GeoGebra CAS:

![GeoGebra CAS-utregning for begge deloppgavene](/img/user/_resources/1t-h24-2-6.png)

### a

Vi deler firkanten $ABCD$ i to trekanter ved å trekke diagonalen $AC$.

**Trekant $ABC$ — finn $\angle B$ med cosinussetningen:**

Vi kjenner alle tre sidene $AB = 8{,}0$, $BC = 10{,}0$ og $AC = 16{,}4$, og bruker cosinussetningen til å finne $\angle ABC$:

$$\cos(\angle B) = \frac{AB^2 + BC^2 - AC^2}{2 \cdot AB \cdot BC} = \frac{64 + 100 - 268{,}96}{160} \approx -0{,}656$$

$$\angle B \approx 131{,}0\degree$$

**Areal av $\triangle ABC$ med arealsetningen:**

$$T_{ABC} = \frac{1}{2} \cdot AB \cdot BC \cdot \sin(\angle B) = \frac{1}{2} \cdot 8{,}0 \cdot 10{,}0 \cdot \sin(131{,}0\degree) \approx 30{,}2$$

**Trekant $ACD$ — finn $\angle D$ med cosinussetningen:**

Vi kjenner $AD = 6{,}0$, $DC = 12{,}0$ og $AC = 16{,}4$:

$$\cos(\angle D) = \frac{AD^2 + DC^2 - AC^2}{2 \cdot AD \cdot DC} = \frac{36 + 144 - 268{,}96}{144} \approx -0{,}618$$

$$\angle D \approx 128{,}2\degree$$

**Areal av $\triangle ACD$ med arealsetningen:**

$$T_{ACD} = \frac{1}{2} \cdot AD \cdot DC \cdot \sin(\angle D) = \frac{1}{2} \cdot 6{,}0 \cdot 12{,}0 \cdot \sin(128{,}2\degree) \approx 28{,}3$$

**Totalt areal:**

$$T_{ABCD} = T_{ABC} + T_{ACD} \approx 30{,}2 + 28{,}3 \approx \underline{\underline{58{,}5 \, \mathrm{m}^2}}$$

### b

Vi deler firkanten $ABCD$ i to trekanter ved å trekke diagonalen $BD$.

**Trekant $ABD$ — finn $BD$ med sinussetningen:**

Vinklene i $\triangle ABD$ er $\angle A = 62{,}5\degree$, $\angle ABD = 45{,}5\degree$, og dermed:

$$\angle ADB = 180\degree - 62{,}5\degree - 45{,}5\degree = 72{,}0\degree$$

Vi bruker sinussetningen med den kjente siden $AB = 8{,}0$:

$$\frac{BD}{\sin(\angle A)} = \frac{AB}{\sin(\angle ADB)} \implies BD = \frac{8{,}0 \cdot \sin(62{,}5\degree)}{\sin(72{,}0\degree)} \approx 7{,}46$$

**Areal av $\triangle ABD$ med arealsetningen:**

$$T_{ABD} = \frac{1}{2} \cdot AB \cdot BD \cdot \sin(\angle ABD) = \frac{1}{2} \cdot 8{,}0 \cdot 7{,}46 \cdot \sin(45{,}5\degree) \approx 21{,}3$$

**Trekant $BCD$ — finn $\angle BDC$:**

Vinklene er $\angle C = 38{,}3\degree$, $\angle CBD = 85{,}5\degree$, og dermed:

$$\angle BDC = 180\degree - 38{,}3\degree - 85{,}5\degree = 56{,}2\degree$$

**Areal av $\triangle BCD$ med arealsetningen:**

$$T_{BCD} = \frac{1}{2} \cdot BD \cdot DC \cdot \sin(\angle BDC) = \frac{1}{2} \cdot 7{,}46 \cdot 12{,}0 \cdot \sin(56{,}2\degree) \approx 37{,}2$$

**Totalt areal:**

$$T_{ABCD} = T_{ABD} + T_{BCD} \approx 21{,}3 + 37{,}2 \approx \underline{\underline{58{,}5 \, \mathrm{m}^2}}$$

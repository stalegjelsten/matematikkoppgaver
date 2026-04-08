---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["eksponentiell vekst","derivasjon","optimering"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":8,"title":"Bakterievekst i avfall","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/bakterievekst-i-avfall/","permalink":"/bakterievekst-i-avfall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["eksponentiell vekst","derivasjon","optimering"],"fag":["s2"],"eksamen":"h22","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":8,"title":"Bakterievekst i avfall","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Bakterievekst i avfall

Ved en avfallsplass vil det i et spesifikt avfall utvikles en bakteriekultur. Ved naturlig vekst vil antall bakterier $N$ (i millioner) være gitt ved

$$N(t) = 0{,}8 \cdot e^{0{,}35t}$$

Her er $t$ antall dager etter at avfallet ble levert.

Dersom antall bakterier overstiger 15 millioner, regnes avfallet som helsefarlig.

>[!oppgave]
>a) Hvor lang tid tar det før avfallet blir helsefarlig dersom bakteriekulturen vokser naturlig?

For å dempe bakterieveksten tilsettes det en gitt mengde av et stoff. Antall bakterier i avfallet vil da følge modellen $B$ gitt ved

$$B(t) = 0{,}8 \cdot e^{0{,}35t - 0{,}01t^2}$$

>[!oppgave]
>b) Avgjør om avfallet noen gang vil bli helsefarlig dersom denne mengden av stoffet tilsettes.
>c) Når øker antall bakterier raskest ifølge modellen $B$? Hvor stor er bakterieveksten per dag da?

Bedriften ønsker å redusere stoffmengden som tilsettes.

En generell modell $S$ for antall bakterier etter $t$ dager er gitt ved

$$S(t) = 0{,}8 \cdot e^{0{,}35t - k \cdot t^2}$$

Her er $k$ en konstant som er avhengig av hvor mye stoff som tilsettes.

>[!oppgave]
>d) Hva er den laveste verdien $k$ kan ha, dersom avfallet ikke skal bli helsefarlig?

## Fasit

a) Ca. $8{,}4$ dager
b) Ja, $B_{\text{maks}} \approx 17{,}1 > 15$
c) Etter ca. $10{,}4$ dager, vekst ca. $1{,}47$ millioner per dag
d) $k \approx 0{,}0105$

## Løsningsforslag

Vi definerer funksjonene i GeoGebra CAS, se utklipp under.

![GeoGebra CAS](/img/user/_resources/s2-h22-2-1.png)

### a

Vi løser $N(t) = 15$ i CAS (linje 2):

$$0{,}8 \cdot e^{0{,}35t} = 15$$

Se `TidHelsefarlig` i utklippet: $t \approx 8{,}37$.

Avfallet blir helsefarlig etter ca. **$\underline{\underline{8{,}4 \text{ dager}}}$**.

### b

Eksponenten i $B(t) = 0{,}8 \cdot e^{0{,}35t - 0{,}01t^2}$ har maksimum når

$$\frac{\mathrm{d}}{\mathrm{d}t}(0{,}35t - 0{,}01t^2) = 0{,}35 - 0{,}02t = 0 \implies t = 17{,}5$$

Se `MaksB` i linje 4: $B(17{,}5) \approx 17{,}1$.

Siden $17{,}1 > 15$, vil avfallet **bli helsefarlig** også med denne mengden stoff.

### c

Antall bakterier øker raskest i vendepunktet til $B$. Se linje 5 i CAS:

$$\text{Vendepunkt}(B) \approx (10{,}43; \; 10{,}37)$$

Veksten per dag i dette punktet finner vi ved å evaluere $B'(10{,}43)$. Se `VekstVendepunkt` i linje 7:

$$B'(10{,}43) \approx 1{,}47$$

Bakteriene øker raskest etter ca. **$\underline{\underline{10{,}4 \text{ dager}}}$**, og veksten er da ca. **$\underline{\underline{1{,}47 \text{ millioner per dag}}}$**.

### d

Eksponenten i $S(t) = 0{,}8 \cdot e^{0{,}35t - kt^2}$ har maksimum for $t = \frac{0{,}35}{2k}$. Den største verdien av $S$ er

$$S_{\text{maks}} = 0{,}8 \cdot e^{\frac{0{,}35^2}{4k}} = 0{,}8 \cdot e^{\frac{0{,}1225}{4k}}$$

For at avfallet ikke skal bli helsefarlig, må $S_{\text{maks}} \leq 15$:

$$0{,}8 \cdot e^{\frac{0{,}1225}{4k}} = 15$$

Se linje 8 i CAS: $k \approx 0{,}01045$.

Den laveste verdien $k$ kan ha er $\underline{\underline{k \approx 0{,}0105}}$.

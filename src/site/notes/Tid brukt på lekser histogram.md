---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["statistikk","diagram","gjennomsnitt","median"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":5,"poeng":4,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":3}],"title":"Tid brukt på lekser histogram","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Vurdér fire påstander om gruppert histogram: frekvens via areal, relativ frekvens, gjennomsnitt fra intervallmidtpunkter og median innen et intervall.","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"dg-permalink":"/tid-brukt-pa-lekser-histogram/","permalink":"/tid-brukt-pa-lekser-histogram/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["statistikk","diagram","gjennomsnitt","median"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":5,"poeng":4,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":3}],"title":"Tid brukt på lekser histogram","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Vurdér fire påstander om gruppert histogram: frekvens via areal, relativ frekvens, gjennomsnitt fra intervallmidtpunkter og median innen et intervall.","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Tid brukt på lekser histogram

Oda har undersøkt hvor mange minutter elevene ved skolen brukte på lekser en ettermiddag i mai, og laget histogrammet nedenfor.

![Tid brukt på lekser en ettermiddag i mai](/img/user/_resources/2py-v24-2-5.jpeg){width=100%}

Bruk opplysningene du kan lese ut av histogrammet, gjør beregninger, og argumenter for at hver av de fire påstandene nedenfor kan være riktig.

> [!blue-box] Påstand 1
> 80 elever brukte mindre enn 40 minutter på lekser denne ettermiddagen.


>[!yellow-box] Påstand 2
>Den relative frekvensen for 100–150 minutter brukt på lekser er $\frac{1}{5}$.

>[!green-box] Påstand 3
>Elevene som brukte mindre enn 60 minutter på leksene, brukte i gjennomsnitt 38 minutter.

>[!blue-box] Påstand 4
>For elevene som brukte mindre enn 60 minutter på leksene, er medianen for antall minutter høyere enn gjennomsnittet for antall minutter.

## Fasit

Alle fire påstandene stemmer

## Løsningsforslag

### Påstand 1
Den første søylen i histogrammet har høyde 2 og bredde 40, altså er frekvensen $2 \cdot 40=80$. **Derfor stemmer det at 80 elever brukte 40 minutter eller mindre på lekser.**

### Påstand 2
Søylen mellom 100 og 150 minutter har høyde 2, altså er frekvensen $2 \cdot 50 = 100$. For å bestemme den relative frekvensen finner jeg først det totale antall elever ved å finne arealet til de siste to søylene: $6 \cdot 20=120$ og $5 \cdot 40=200$. Det er altså $80+120+200+100=500$ elever på skolen og **den relative frekvensen for 100 til 150 minutter blir $\frac{100}{500}=\frac{1}{5}$.**

### Påstand 3
Det er 80 elever som vi kan regne med at har brukt 20 minutter i gjennomsnitt (siden 20 ligger midt i intervallet $[0,40\rangle$). Det er 120 elever som i gjennomsnitt har brukt 50 minutter. Til sammen har disse elevene brukt
$$
80 \cdot 20 + 120 \cdot 50 = 1600 + 6000= 7600 \text{ minutter}
$$
Hvis vi fordeler tiden på de 200 elevene får vi gjennomsnittet
$$
\frac{7600 \text{ min}}{200 \text{ elever}}=\underline{\underline{38}} \text{ min per elev}
$$

### Påstand 4
Medianeleven blant de som brukte under 60 minutter er omtrent elev nummer 100. Siden det er 80 elever i det første intervallet, så må vår medianelev være elev nummer 20 av 120 i det andre intervallet. Med andre ord finner vi medianen vår $\frac{20}{120}=\frac{1}{6}$ ut i intervallet. For å finne ut hvor mange minutter dette tilsvarer så kan jeg ta bredden av intervallet og gange med $\frac{1}{6}$
$$
20 \cdot \frac{1}{6}=3{,}33
$$
Medianen vil være 3,33 minutter over bunnen av intervallet vårt, altså ved $40+3{,}33=43{,}33$ minutter. **Medianen 43,33 minutter er altså høyere enn gjennomsnittet på 38 minutter.**

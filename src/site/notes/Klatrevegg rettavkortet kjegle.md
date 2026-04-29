---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/klatrevegg-rettavkortet-kjegle/","dg-publish":true,"eksamen":"v24","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["geometri","areal","volum"],"title":"Klatrevegg rettavkortet kjegle","todo":[],"permalink":"/klatrevegg-rettavkortet-kjegle/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["geometri","areal","volum"],"title":"Klatrevegg rettavkortet kjegle","todo":[]}}
---


# Klatrevegg rettavkortet kjegle

Henrik og Hanne arbeider i et byggefirma. Byggefirmaet har fått i oppdrag å lage en klatrevegg til en skolegård. Klatreveggen skal ha form som en rettavkortet kjegle slik at elevene kan klatre opp til en plattform på toppen. Firmaet vurderer å støpe klatreveggen i betong. Se skissen nedenfor.

![Klatreveggen](/img/user/_resources/2p-v24-2-5.jpeg){width=20%}

Skolen har to krav når det gjelder utforming av klatreveggen.

- Klatreveggen må få plass på et kvadratisk område med areal $20 \mathrm{~m^2}$.
- Plattformen på toppen må ikke være mer enn $2{,}5 \mathrm{~m}$ over bakken, og den skal ha et areal på $10 \mathrm{~m^2}$.

Hanne og Henrik skal lage et forslag til hvordan klatreveggen kan utformes, og beregne hvor mye betong som vil gå med for å lage den.

>[!blue-box] Henrik
>Først må vi finne ut hvor stor grunnflaten kan være.

>[!green-box] Hanne
>For å regne ut volumet kan vi kanskje ta utgangspunkt i en hel kjegle og så kutte av den øverste delen?

>[!blue-box] Henrik
>Det var lurt. Vi må passe på at den nederste delen blir en rettavkortet kjegle som oppfyller kravene. Hvor høy skal vi la hele kjeglen være?

>[!oppgave]
>a) Lag en skisse som viser hvordan klatreveggen kan utformes for å oppfylle kravene fra skolen. Sett mål på skissen. Forklar hvordan du har tenkt, og vis utregningene dine.
>b) Hvor mye betong vil gå med for å lage klatreveggen?

## Fasit

a) Grunnradius $R = \sqrt{5} \approx 2{,}24 \, \mathrm{m}$, toppradius $r = \sqrt{\frac{10}{\pi}} \approx 1{,}78 \, \mathrm{m}$, høyde $h = 2{,}5 \, \mathrm{m}$
b) $\underline{\underline{V \approx 31{,}87 \, \mathrm{m^3}}}$

## Løsningsforslag

### a

Henrik påpeker at klatreveggen må få plass på et kvadratisk område med areal $20 \, \mathrm{m^2}$. Arealet av kvadratet er

$$A_{\text{kvadrat}} = s^2 = 20 \, \mathrm{m^2}$$

som gir sidelengde $s = \sqrt{20} = 2\sqrt{5} \approx 4{,}47 \, \mathrm{m}$.

Den størst mulige sirkelgrunnflaten som passer inni kvadratet er den innskrevne sirkelen med diameter lik kvadratets side. Da er grunnradiusen

$$R = \frac{s}{2} = \frac{2\sqrt{5}}{2} = \sqrt{5} \approx 2{,}24 \, \mathrm{m}$$

Plattformen på toppen skal ha areal $10 \, \mathrm{m^2}$, altså

$$\pi r^2 = 10 \implies r^2 = \frac{10}{\pi} \implies r = \sqrt{\frac{10}{\pi}} \approx 1{,}78 \, \mathrm{m}$$

For å oppfylle kravet om at plattformen ikke er mer enn $2{,}5 \, \mathrm{m}$ over bakken, setter vi høyden til det maksimale

$$h = 2{,}5 \, \mathrm{m}$$

**Skisse av klatreveggen (sett fra siden):**

```
        ←2r≈3,56 m→
        ___________
       /           \    ↑
      /             \   | h = 2,5 m
     /               \  ↓
    /_________________\
    ←— 2R ≈ 4,47 m —→
```

Klatreveggen er en rettavkortet kjegle med $\textcolor{seagreen}{R = \sqrt{5} \approx 2{,}24 \, \mathrm{m}}$, $\textcolor{steelblue}{r = \sqrt{\frac{10}{\pi}} \approx 1{,}78 \, \mathrm{m}}$ og $h = 2{,}5 \, \mathrm{m}$.

### b

Hanne foreslår å beregne volumet ved å ta en hel kjegle og trekke fra toppkjeglen som kuttes av.

Siden den rettavkortede kjeglen og den helhetlige kjeglen har samme halvvinkel, er forholdet mellom toppradius og grunnradius det samme som forholdet mellom høydene:

$$\frac{r}{R} = \frac{H - h}{H}$$

der $H$ er høyden til den hele kjeglen. Vi løser for $H$:

$$\frac{r}{R} = 1 - \frac{h}{H} \implies \frac{h}{H} = 1 - \frac{r}{R} \implies H = \frac{h}{1 - \dfrac{r}{R}}$$

Vi regner ut forholdet

$$\frac{r}{R} = \frac{\sqrt{10/\pi}}{\sqrt{5}} = \sqrt{\frac{10}{5\pi}} = \sqrt{\frac{2}{\pi}} \approx 0{,}798$$

og den hele kjeglens høyde

$$H = \frac{2{,}5}{1 - \sqrt{2/\pi}} \approx \frac{2{,}5}{0{,}202} \approx 12{,}37 \, \mathrm{m}$$

Høyden til toppkjeglen (den som kuttes av) er

$$H_{\text{topp}} = H - h \approx 12{,}37 - 2{,}5 = 9{,}87 \, \mathrm{m}$$

Volumet av den hele kjeglen er

$$V_{\text{hel}} = \frac{\pi}{3} R^2 H = \frac{\pi}{3} \cdot 5 \cdot 12{,}37 \approx 64{,}76 \, \mathrm{m^3}$$

Volumet av toppkjeglen som fjernes er

$$V_{\text{topp}} = \frac{\pi}{3} r^2 H_{\text{topp}} = \frac{\pi}{3} \cdot \frac{10}{\pi} \cdot 9{,}87 \approx 32{,}90 \, \mathrm{m^3}$$

Volumet av klatreveggen (den rettavkortede kjeglen) er

$$V = V_{\text{hel}} - V_{\text{topp}} \approx 64{,}76 - 32{,}90 \approx 31{,}87 \, \mathrm{m^3}$$

Man kan også bruke formelen for rettavkortet kjegle direkte:

$$V = \frac{\pi h}{3}\left(R^2 + Rr + r^2\right) = \frac{\pi \cdot 2{,}5}{3}\left(5 + \sqrt{5} \cdot \sqrt{\frac{10}{\pi}} + \frac{10}{\pi}\right) \approx 31{,}87 \, \mathrm{m^3}$$

**Det vil gå med omtrent $\underline{\underline{31{,}87 \, \mathrm{m^3}}}$ betong for å lage klatreveggen.**

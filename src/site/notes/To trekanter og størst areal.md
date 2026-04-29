---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/to-trekanter-og-storst-areal/","dg-publish":true,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["arealsetningen","trigonometri","argumentasjon"],"title":"To trekanter og størst areal","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Sammenligne arealet av to trekanter med arealsetningen og argumentere for hvilken er størst — utnytte at $\\sin(150\\degree)=\\sin(30\\degree)$ og at sin er stigende på $\\langle 0\\degree, 90\\degree\\rangle$.","permalink":"/to-trekanter-og-storst-areal/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":4,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":4}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["arealsetningen","trigonometri","argumentasjon"],"title":"To trekanter og størst areal","todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Sammenligne arealet av to trekanter med arealsetningen og argumentere for hvilken er størst — utnytte at $\\sin(150\\degree)=\\sin(30\\degree)$ og at sin er stigende på $\\langle 0\\degree, 90\\degree\\rangle$."}}
---


# To trekanter og størst areal

![To trekanter med oppgitte sider og vinkler](/img/user/_resources/1t-h23-1-4.jpeg){width=70%}

>[!oppgave]
>Hvilken av de to trekantene har størst areal?
>
>Husk å argumentere for at svaret ditt er riktig.

## Fasit

**Trekant 2 (med vinkel 32°) har størst areal.**

$A_1 = 9 \, \mathrm{cm}^2$, $\quad A_2 = 18\sin(32°) \, \mathrm{cm}^2 > 9 \, \mathrm{cm}^2$

## Løsningsforslag

Begge trekantene har to sider med lengde 6 (la oss kalle dem $a = b = 6$), men ulike inkluderte vinkler. Vi bruker **arealsetningen**:

$$A = \frac{1}{2} \cdot a \cdot b \cdot \sin(C)$$

**Trekant 1** har inkludert vinkel $C_1 = 150°$:

$$A_1 = \frac{1}{2} \cdot 6 \cdot 6 \cdot \sin(150°)$$

Vi utnytter at $\sin(150°) = \sin(180° - 30°) = \sin(30°) = \frac{1}{2}$:

$$A_1 = \frac{1}{2} \cdot 6 \cdot 6 \cdot \frac{1}{2} = \frac{1}{2} \cdot 36 \cdot \frac{1}{2} = \mathbf{9}$$

**Trekant 2** har inkludert vinkel $C_2 = 32°$:

$$A_2 = \frac{1}{2} \cdot 6 \cdot 6 \cdot \sin(32°) = 18\sin(32°)$$

**Sammenligning:** Vi trenger å avgjøre om $\sin(32°) > \sin(150°) = \frac{1}{2}$.

Sinusfunksjonen er stigende på intervallet $\langle 0°, 90° \rangle$, og siden $32° > 30°$:

$$\sin(32°) > \sin(30°) = \frac{1}{2}$$

Dermed er $A_2 = 18\sin(32°) > 18 \cdot \frac{1}{2} = 9 = A_1$.

**$\underline{\underline{\text{Trekant 2 har størst areal.}}}$**
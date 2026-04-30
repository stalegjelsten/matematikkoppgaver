---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/volum-av-tonne-ved-integrasjon/","dg-publish":true,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["integral","volum","omdreiningslegeme"],"title":"Volum av tønne ved integrasjon","todo":[],"permalink":"/volum-av-tonne-ved-integrasjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":null,"source":null,"lf-source-claude":true,"status":0,"tags":["oppgave"],"temaer":["integral","volum","omdreiningslegeme"],"title":"Volum av tønne ved integrasjon","todo":[]}}
---


# Volum av tønne ved integrasjon

![Tønne med mål](/img/user/_resources/r2-h23-2-3.jpeg){width=60%}

En tønne er 75 cm høy. Diameteren i bunnen og toppen er 45 cm. Den største diameteren er 52 cm.

Siden i tønnen fra toppen til bunnen er formet som en parabel.

>[!oppgave]
>Bruk blant annet integrasjon til å bestemme volumet av tønnen.

## Fasit

$\underline{\underline{V \approx 145\,562 \, \mathrm{cm}^3 \approx 145{,}6 \, \mathrm{L}}}$

## Løsningsforslag

> [!warning] Usikkert løsningsforslag
> Dette løsningsforslaget er skrevet av KI og matematikk.net (OpenMathBooks-prosjektet) har en annen løsning. Vi har funnet at $V \approx 145{,}6 \, \mathrm{L}$, mens [matematikk.net sitt løsningsforslag](https://drive.google.com/file/d/10Jh8XKeRJ-G3tiohP7nQ5azXnLDA5M_c/view?usp=drive_link) oppgir $V \approx 437 \, \mathrm{L}$. En sylinder med samme høyde (75 cm) og største radius (26 cm) har volum $\pi \cdot 26^2 \cdot 75 \approx 159 \, \mathrm{L}$, så 437 L kan ikke være riktig — vi mener vårt svar er korrekt, men vurder selv.

Vi setter opp et koordinatsystem med $z = 0$ i midten av tønna, slik at tønna strekker seg fra $z = -37{,}5$ til $z = 37{,}5 \, \mathrm{cm}$ (høyde 75 cm).

**Modell for radiusfunksjonen**

Siden tønna er symmetrisk og siden er formet som en parabel, velger vi

$$r(z) = 26 + a \cdot z^2$$

der $r(0) = 26 \, \mathrm{cm}$ (største radius, diameter 52 cm).

Randbetingelse: $r(\pm 37{,}5) = 22{,}5 \, \mathrm{cm}$ (radius i bunn/topp, diameter 45 cm):

$$22{,}5 = 26 + a \cdot 37{,}5^2$$

$$a = \frac{22{,}5 - 26}{37{,}5^2} = \frac{-3{,}5}{1406{,}25} = -\frac{7}{2812{,}5} \approx -0{,}00249$$

**Volumet som omdreiningslegeme**

Tønnen dannes ved å dreie kurven $r(z)$ om $z$-aksen. Volumet er:

$$V = \pi \int_{-37{,}5}^{37{,}5} \bigl[r(z)\bigr]^2 \, \mathrm{d}z$$

**Beregning i GeoGebra CAS**

```
a := -7/2812.5
r(z) := 26 + a*z^2
V := pi * Integral(r(z)^2, z, -37.5, 37.5)
```

![GeoGebra CAS-utregning av volumet](/img/user/_resources/r2-h23-2-3-cas.png)

GeoGebra gir $V \approx 145\,561{,}77 \, \mathrm{cm}^3$.

**Svar:** Volumet av tønnen er $\underline{\underline{V \approx 145\,562 \, \mathrm{cm}^3 \approx 145{,}6 \, \mathrm{L}}}$.
---
{"aliases":[],"date":"2025-05-14","del":2,"dg-permalink":"/harens-fart-og-gjennomsnittsfart/","dg-publish":true,"eksamen":"v25","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-25","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","derivasjon","modellering"],"title":"Harens fart og gjennomsnittsfart","todo":[],"permalink":"/harens-fart-og-gjennomsnittsfart/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-14","del":2,"eksamen":"v25","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-25","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":3}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","derivasjon","modellering"],"title":"Harens fart og gjennomsnittsfart","todo":[]}}
---


# Harens fart og gjennomsnittsfart

En hare løper vekk fra en rev som angriper den. Farten $v$ til haren er gitt ved

$$v(t) = 8{,}3 - 17{,}4 \cdot e^{-5t} + 9{,}1 \cdot e^{-0{,}08t}$$

Her er $v$ meter per sekund, og $t$ er antall sekunder etter at haren starter å løpe.

>[!oppgave]
>a) Hvor lang tid vil det gå før akselerasjonen til haren er null? Hva forteller dette svaret?
>b) Hvor langt løper haren i løpet av de første 7 sekundene?

Gjennomsnittsfarten $v_g$ til haren de første $x$ sekundene er gitt ved

$$v_g(x) = \frac{1}{x} \int_{0}^{x} v(t) \, \mathrm{d}t$$

>[!oppgave]
>c) Bestem gjennomsnittsfarten til haren de første 200 meterne.

## Fasit

a) Akselerasjonen er null etter $\underline{\underline{t \approx 0{,}97 \, \mathrm{s}}}$. Dette er tidspunktet der haren har størst fart: $v(0{,}97) \approx \underline{\underline{16{,}6 \, \mathrm{m/s}}}$.

b) $\underline{\underline{s \approx 103{,}4 \, \mathrm{m}}}$

c) $\underline{\underline{v_g \approx 13{,}4 \, \mathrm{m/s}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS med numerisk evaluering.

**Definer $v(t)$ og finn akselerasjonen $a(t) = v'(t)$, løs $a(t) = 0$, beregn integralet over $[0, 7]$, og løs $\int_0^x v(t)\,\mathrm{d}t = 200$ numerisk:**

![GeoGebra CAS – harens fart og gjennomsnittsfart](/img/user/_resources/r2-v25-2-3.png)

### a

Vi definerer $v(t)$ og deriverer for å finne akselerasjonen:

$$a(t) = v'(t) = 87 \cdot e^{-5t} - 0{,}728 \cdot e^{-0{,}08t}$$

GeoGebra løser $a(t) = 0$ numerisk og gir $t \approx 0{,}972 \, \mathrm{s}$.

**Det tar omtrent $\underline{\underline{t \approx 0{,}97 \, \mathrm{s}}}$ før akselerasjonen er null.**

Tolkning: For $t < 0{,}97$ er $a(t) > 0$, haren øker farten. For $t > 0{,}97$ er $a(t) < 0$, haren bremser ned. Tidspunktet $t \approx 0{,}97$ er altså når haren har sin **høyeste fart**: $v(0{,}972) \approx \underline{\underline{16{,}6 \, \mathrm{m/s}}}$.

### b

Strekningen haren løper i løpet av de første 7 sekundene er

$$s = \int_0^7 v(t) \, \mathrm{d}t$$

GeoGebra beregner integralet numerisk:

$$s \approx \underline{\underline{103{,}4 \, \mathrm{m}}}$$

### c

Vi søker $x$ slik at gjennomsnittsfarten de første $x$ sekundene er lik $\frac{200}{x}$, altså slik at haren har tilbakelagt nettopp 200 meter:

$$\int_0^x v(t) \, \mathrm{d}t = 200$$

Antideriverte til $v(t)$ er

$$V(t) = 8{,}3t + 3{,}48 \cdot e^{-5t} - 113{,}75 \cdot e^{-0{,}08t}$$

GeoGebra løser likningen $V(x) - V(0) = 200$ numerisk og gir (den positive løsningen) $x \approx 14{,}954 \, \mathrm{s}$.

Gjennomsnittsfarten de første 200 meterne er dermed

$$v_g = \frac{200}{x} \approx \frac{200}{14{,}954} \approx \underline{\underline{13{,}4 \, \mathrm{m/s}}}$$
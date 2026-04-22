---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["grenseinntekt og grensekostnad","optimering","økonomi"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":6,"title":"Grensekostnad og grenseinntekt bedrift","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/grensekostnad-og-grenseinntekt-bedrift/","permalink":"/grensekostnad-og-grenseinntekt-bedrift/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["grenseinntekt og grensekostnad","optimering","økonomi"],"fag":["s2"],"eksamen":"h21","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":6,"title":"Grensekostnad og grenseinntekt bedrift","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Grensekostnad og grenseinntekt bedrift

Når en bedrift produserer og selger $x$ enheter per dag, er grensekostnaden $K'$ og grenseinntekten $I'$ gitt ved

$$K'(x) = 0{,}4x + 500 \quad \text{og} \quad I'(x) = -0{,}3x + 850$$

Bedriften produserer og selger 400 enheter per dag.

>[!oppgave]
>a) Avgjør om en økning i den daglige produksjonsmengden vil kunne gi et større overskudd for bedriften.
>b) Hvor mange enheter må bedriften produsere og selge per dag for at overskuddet skal bli størst mulig?

Bedriftens daglige kostnader $K$ består av en fast del på 50 000 kroner og en variabel del som er avhengig av produksjonsmengden.

>[!oppgave]
>c) Hva er de daglige kostnadene ved produksjon av 400 enheter?

## Fasit

a) Ja, en økning vil gi større overskudd
b) 500 enheter
c) $282\,000 \text{~kr}$

## Løsningsforslag

### a

Overskuddet øker når grenseinntekten er større enn grensekostnaden, altså når $I'(x) > K'(x)$.

Vi sjekker for $x = 400$:

$$K'(400) = 0{,}4 \cdot 400 + 500 = 660$$

$$I'(400) = -0{,}3 \cdot 400 + 850 = 730$$

Siden $I'(400) = 730 > 660 = K'(400)$, vil en økning i produksjonsmengden gi **større overskudd**.

### b

Overskuddet er størst når $I'(x) = K'(x)$:

$$-0{,}3x + 850 = 0{,}4x + 500$$

$$350 = 0{,}7x \quad \Rightarrow \quad \underline{\underline{x = 500}}$$

Vi sjekker at dette gir maksimum: For $x < 500$ er $I'(x) > K'(x)$ (overskuddet øker), og for $x > 500$ er $I'(x) < K'(x)$ (overskuddet avtar). Altså er overskuddet størst ved 500 enheter.

### c

Vi finner $K(x)$ ved å integrere grensekostnaden:

$$K(x) = \int K'(x) \, \mathrm{d}x = 0{,}2x^2 + 500x + C$$

Den faste kostnaden er $C = 50\,000$, så

$$K(x) = 0{,}2x^2 + 500x + 50\,000$$

$$K(400) = 0{,}2 \cdot 160\,000 + 500 \cdot 400 + 50\,000 = 32\,000 + 200\,000 + 50\,000 = \underline{\underline{282\,000 \text{~kr}}}$$

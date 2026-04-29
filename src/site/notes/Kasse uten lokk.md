---
{"aliases":[],"date":"2023-11-14","del":2,"dg-permalink":"/kasse-uten-lokk/","dg-publish":true,"eksamen":"h23","fag":["s1","r1"],"modified":"2026-04-22","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5},{"del":2,"fag":"r1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["optimering","derivasjon","geometri"],"title":"Kasse uten lokk","lf-source-claude":true,"todo":[],"permalink":"/kasse-uten-lokk/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":2,"eksamen":"h23","fag":["s1","r1"],"modified":"2026-04-22","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5},{"del":2,"fag":"r1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["optimering","derivasjon","geometri"],"title":"Kasse uten lokk","lf-source-claude":true,"todo":[]}}
---


# Kasse uten lokk

Du skal lage en kasse uten lokk. Den skal ha form som et rett prisme. Grunnflaten i kassen skal være kvadratisk. For at vekten ikke skal bli for stor, kan ikke det samlede arealet av platene som brukes til å lage kassen, være mer enn 120 $\mathrm{dm^2}$.

![Kasse uten lokk](/img/user/_resources/s1-h23-2-5.jpeg){width=25%}

>[!oppgave]
>a) Hva er det største volumet kassen kan få dersom sidene i bunnen skal være 5 dm?
>b) Hva er det maksimale volumet kassen kan få?

Du skal lage en slik kasse som rommer 80 $\mathrm{dm^3}$.

>[!oppgave]
>c) Hva er det minste samlede arealet platene kan ha, dersom du skal lage en slik kasse?

## Fasit

a) **$\underline{\underline{V = 118{,}75 \, \mathrm{dm^3}}}$**
b) **$\underline{\underline{V_{\max} = 40\sqrt{10} \approx 126{,}5 \, \mathrm{dm^3}}}$**
c) **$\underline{\underline{A_{\min} = 12\sqrt[3]{20^2} \approx 88{,}4 \, \mathrm{dm^2}}}$**

## Løsningsforslag

La $x$ være sidelengden i bunnen (dm) og $h$ være høyden (dm).

Samlet areal (bunn + 4 sider):

$$A = x^2 + 4xh$$

Volum:

$$V = x^2 \cdot h$$

### a

Setter $x = 5$ og bruker hele arealbudsjettet ($A = 120$):

$$25 + 4 \cdot 5 \cdot h = 120 \implies 20h = 95 \implies h = 4{,}75 \, \mathrm{dm}$$

Volumet blir:

$$V = 5^2 \cdot 4{,}75 = \mathbf{\underline{\underline{118{,}75 \, \mathrm{dm^3}}}}$$

### b

For å maksimere volumet bruker vi hele arealbudsjettet ($A = 120$). Løser $A = 120$ for $h$:

$$h = \frac{120 - x^2}{4x}$$

Setter inn i volumformelen:

$$V(x) = x^2 \cdot \frac{120 - x^2}{4x} = \frac{x(120 - x^2)}{4} = 30x - \frac{x^3}{4}$$

Bruker GeoGebra CAS til å derivere og løse $V'(x) = 0$:

![GeoGebra CAS – optimering av kasse uten lokk](/img/user/_resources/r1-h23-2-4.png)

Fra CAS-utklippet (linje 1–6):

$$V'(x) = 30 - \frac{3}{4}x^2 = 0 \implies x = 2\sqrt{10} \approx 6{,}32 \, \mathrm{dm}$$

$$h = \sqrt{10} \approx 3{,}16 \, \mathrm{dm}$$

$$V_{\max} = 40\sqrt{10} \approx \mathbf{\underline{\underline{126{,}5 \, \mathrm{dm^3}}}}$$

$V'(x)$ skifter fortegn fra $+$ til $-$ i $x = 2\sqrt{10}$, så dette er et maksimum.

### c

Nå er $V = 80 \, \mathrm{dm^3}$. Løser for $h$:

$$h = \frac{80}{x^2}$$

Setter inn i arealformelen:

$$A(x) = x^2 + 4x \cdot \frac{80}{x^2} = x^2 + \frac{320}{x}$$

Bruker GeoGebra CAS til å minimere $A(x)$ (linje 7–12 i utklippet):

$$A'(x) = 2x - \frac{320}{x^2} = 0 \implies 2x^3 = 320 \implies x = 2\sqrt[3]{20} \approx 5{,}43 \, \mathrm{dm}$$

$$h = \frac{80}{(2\sqrt[3]{20})^2} = \frac{80}{4\sqrt[3]{400}} = \frac{20}{\sqrt[3]{400}} = \sqrt[3]{\frac{20^3}{400}} = \sqrt[3]{20} \approx 2{,}71 \, \mathrm{dm}$$

$$A_{\min} = 12\sqrt[3]{20^2} \approx \mathbf{\underline{\underline{88{,}4 \, \mathrm{dm^2}}}}$$

$A'(x)$ skifter fortegn fra $-$ til $+$ i $x = 2\sqrt[3]{20}$, så dette er et minimum.

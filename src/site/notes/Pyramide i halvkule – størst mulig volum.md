---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/pyramide-i-halvkule-storst-mulig-volum/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":8,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":8},{"del":2,"fag":"r1","oppgave":7}],"poeng":2,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["geometri","derivasjon"],"title":"Pyramide i halvkule – størst mulig volum","todo":[],"permalink":"/pyramide-i-halvkule-storst-mulig-volum/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":8,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":8},{"del":2,"fag":"r1","oppgave":7}],"poeng":2,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["geometri","derivasjon"],"title":"Pyramide i halvkule – størst mulig volum","todo":[]}}
---


# Pyramide i halvkule – størst mulig volum

En kule med radius $r$ deles i to like deler. Vi skal skjære ut en pyramide med rektangulær grunnflate av den ene halvkulen. Grunnflaten skal ligge i snittflaten til halvkulen.

![Halvkule med innskrevet pyramide](/img/user/_resources/s1-v24-2-8.jpeg){width=40%}

Volumet av en pyramide er gitt ved

$$V = \frac{h \cdot G}{3},$$

der $G$ er grunnflaten og $h$ er høyden til pyramiden.

>[!oppgave]
>Bestem et uttrykk for det største volumet en slik pyramide kan ha.

## Fasit

$\underline{\underline{V_{\max} = \dfrac{2r^3}{3}}}$

## Løsningsforslag

Vi plasserer halvkulen med snittflaten som en sirkulær disk i planet $z = 0$, med sentrum i origo. Halvkulen har likningen $x^2 + y^2 + z^2 = r^2$ for $z \geq 0$.

**Oppsett av pyramiden**

Grunnflaten er et rektangel med sider $2x$ og $2y$ innskrevet i sirkelen $x^2 + y^2 = r^2$. Pyramidens topp ligger på halvkulen rett over sentrum, i punktet $(0, 0, h)$.

Toppen på halvkulen gir høyden $h = r$ (fast, siden $x = y = 0$ gir $z = r$).

Volumet av pyramiden er:

$$V = \frac{h \cdot G}{3} = \frac{r \cdot 4xy}{3} = \frac{4r}{3} \cdot xy$$

**Maksimering med GeoGebra CAS**

Vi setter $G = 4xy$ der $y = \sqrt{r^2 - x^2}$ (fra sirkelbetingelsen), og definerer volumfunksjonen:

$$V(x) = \frac{4r}{3} \cdot x \cdot \sqrt{r^2 - x^2}$$

Vi deriverer og setter den deriverte lik null med CAS:

![CAS-utregning for største volum av pyramide i halvkule](/img/user/_resources/s1-v24-2-8-cas.png)

CAS gir $x = \dfrac{\sqrt{2}}{2} \cdot r = \dfrac{r}{\sqrt{2}}$ (tar positiv verdi). Da er $y = \sqrt{r^2 - \frac{r^2}{2}} = \dfrac{r}{\sqrt{2}}$, det vil si $x = y$.

Grunnflaten er et kvadrat med side $2x = 2 \cdot \dfrac{r}{\sqrt{2}} = r\sqrt{2}$.

**Største volum**

CAS bekrefter at maksimalt volum er:

$$V_{\max} = \frac{2}{3} r^2 \cdot |r| = \frac{2r^3}{3}$$

**$\underline{\underline{V_{\max} = \dfrac{2r^3}{3}}}$**
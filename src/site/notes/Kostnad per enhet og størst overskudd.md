---
{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["optimering","grenseinntekt og grensekostnad"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":4,"title":"Kostnad per enhet og størst overskudd","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/kostnad-per-enhet-og-storst-overskudd/","permalink":"/kostnad-per-enhet-og-storst-overskudd/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-11-16","modified":"2026-04-08","aliases":[],"temaer":["optimering","grenseinntekt og grensekostnad"],"fag":["s2"],"eksamen":"h22","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":4,"title":"Kostnad per enhet og størst overskudd","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Kostnad per enhet og størst overskudd

Kostnadene $K$ per dag ved produksjon av en vare er gitt ved

$$K(x) = 0{,}2x^2 + 600x + 8000, \quad 0 < x < 2000$$

Her er $x$ antall produserte enheter per dag, og $K(x)$ er gitt i kroner.

>[!oppgave]
>a) Bestem den produksjonsmengden som gir lavest kostnad per enhet.

Etterspørselen avhenger av prisen $p$ på varen. Det viser seg at etterspørselen er gitt ved

$$e(p) = 12\,000 - 10p$$

>[!oppgave]
>b) Bestem den prisen som vil gi størst daglig overskudd.

## Fasit

a) $x = 200$ enheter
b) $p = 1100 \, \mathrm{kr}$

## Løsningsforslag

### a

Kostnad per enhet (enhetskostnaden) er

$$E(x) = \frac{K(x)}{x} = 0{,}2x + 600 + \frac{8000}{x}$$

Vi deriverer og setter lik null:

$$E'(x) = 0{,}2 - \frac{8000}{x^2} = 0$$

$$x^2 = \frac{8000}{0{,}2} = 40\,000 \implies x = 200$$

Siden $E''(x) = \frac{16\,000}{x^3} > 0$, er dette et minimumspunkt.

Produksjonsmengden som gir lavest kostnad per enhet er $\underline{\underline{200 \text{ enheter}}}$.

### b

Antall solgte enheter er $x = e(p) = 12\,000 - 10p$. Inntekten er

$$I(p) = p \cdot (12\,000 - 10p) = 12\,000p - 10p^2$$

Kostnaden uttrykt ved prisen ($x = 12\,000 - 10p$):

$$K(p) = 0{,}2 \cdot (12\,000-10p)^2 + 600(12\,000-10p) + 8000$$

Vi utvider:

$$0{,}2 \cdot (12\,000-10p)^2 = 28\,800\,000 - 48\,000p + 20p^2$$

$$600(12\,000-10p) = 7\,200\,000 - 6000p$$

Overskuddet blir

$$O(p) = I(p) - K(p) = -30p^2 + 66\,000p - 36\,008\,000$$

Vi deriverer og setter lik null:

$$O'(p) = -60p + 66\,000 = 0 \implies \underline{\underline{p = 1100 \, \mathrm{kr}}}$$

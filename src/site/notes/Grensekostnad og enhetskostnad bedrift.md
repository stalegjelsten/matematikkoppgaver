---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["grenseinntekt og grensekostnad","enhetskostnad","økonomi"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":5,"title":"Grensekostnad og enhetskostnad bedrift","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/grensekostnad-og-enhetskostnad-bedrift/","permalink":"/grensekostnad-og-enhetskostnad-bedrift/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["grenseinntekt og grensekostnad","enhetskostnad","økonomi"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":5,"title":"Grensekostnad og enhetskostnad bedrift","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Grensekostnad og enhetskostnad bedrift

En bedrift produserer og selger en vare. De daglige kostnadene $K$ ved produksjon og salg av $x$ enheter av denne varen er gitt ved

$$K(x) = 0{,}2x^2 + 80x + 720, \quad 0 < x < 400$$

Ledelsen i bedriften har funnet ut at med dagens produksjonsmengde vil det koste 160 kroner å øke den daglige produksjonsmengden med 1 enhet.

>[!oppgave]
>a) Hvor mange enheter produserer bedriften daglig?

Bedriften får solgt varen for 180 kroner per enhet.

>[!oppgave]
>b) Vil det lønne seg å øke produksjonen til mer enn 300 enheter per dag?
>c) Bestem den daglige produksjonsmengden som gir lavest kostnad per enhet.

## Fasit

a) 200 enheter
b) Nei
c) 60 enheter

## Løsningsforslag

### a

Grensekostnaden er $K'(x) = 0{,}4x + 80$.

Dagens grensekostnad er 160 kr:

$$0{,}4x + 80 = 160 \implies 0{,}4x = 80 \implies \underline{\underline{x = 200}}$$

### b

Grensekostnaden ved $x = 300$:

$$K'(300) = 0{,}4 \cdot 300 + 80 = 200 \, \mathrm{kr}$$

Siden grensekostnaden ($200 \, \mathrm{kr}$) er høyere enn salgsprisen ($180 \, \mathrm{kr}$), vil det **ikke lønne seg** å øke produksjonen til mer enn 300 enheter. Hvert ekstra produkt koster mer å produsere enn det selges for.

### c

Enhetskostnaden er

$$E(x) = \frac{K(x)}{x} = 0{,}2x + 80 + \frac{720}{x}$$

Vi deriverer og setter lik null:

$$E'(x) = 0{,}2 - \frac{720}{x^2} = 0 \implies x^2 = \frac{720}{0{,}2} = 3600 \implies \underline{\underline{x = 60}}$$

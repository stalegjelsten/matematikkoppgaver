---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["optimering","derivasjon","økonomi"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":4,"title":"Enhetskostnad og grensekostnad","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/enhetskostnad-og-grensekostnad/","permalink":"/enhetskostnad-og-grensekostnad/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["optimering","derivasjon","økonomi"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":4,"title":"Enhetskostnad og grensekostnad","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Enhetskostnad og grensekostnad

Kostnaden $K$ (i kroner) for en vare er gitt ved

$$K(x) = x^2 + 8x + 100$$

Her er $x$ antall produserte enheter av varen per dag.

>[!oppgave]
>a) Bestem et uttrykk for enhetskostnaden og et uttrykk for grensekostnaden.
>b) Bestem den minste enhetskostnaden. Hva er produksjonsmengden da?

## Fasit

a) $E(x) = x + 8 + \dfrac{100}{x}$, $K'(x) = 2x + 8$
b) Minste enhetskostnad er $28 \text{~kr}$ ved $x = 10$ enheter

## Løsningsforslag

### a

**Enhetskostnaden:**

$$E(x) = \frac{K(x)}{x} = \frac{x^2 + 8x + 100}{x} = \underline{\underline{x + 8 + \frac{100}{x}}}$$

**Grensekostnaden:**

$$\underline{\underline{K'(x) = 2x + 8}}$$

### b

Vi deriverer enhetskostnaden og setter lik null:

$$E'(x) = 1 - \frac{100}{x^2}$$

$$E'(x) = 0 \implies 1 = \frac{100}{x^2} \implies x^2 = 100 \implies x = 10$$

(Vi velger $x = 10$ siden $x > 0$.)

Vi sjekker at dette er et minimum: $E''(x) = \dfrac{200}{x^3} > 0$ for $x > 0$. ✓

$$E(10) = 10 + 8 + \frac{100}{10} = \underline{\underline{28 \text{~kr}}}$$

**Den minste enhetskostnaden er 28 kr ved produksjon av 10 enheter per dag.**

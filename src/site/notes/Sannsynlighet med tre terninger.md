---
{"aliases":[],"date":"2023-11-14","del":1,"dg-permalink":"/sannsynlighet-med-tre-terninger/","dg-publish":true,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":3}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"lf-source-claude":true,"temaer":["sannsynlighet","kombinatorikk"],"title":"Sannsynlighet med tre terninger","todo":[],"permalink":"/sannsynlighet-med-tre-terninger/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":1,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":3}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"lf-source-claude":true,"temaer":["sannsynlighet","kombinatorikk"],"title":"Sannsynlighet med tre terninger","todo":[]}}
---


# Sannsynlighet med tre terninger

Du kaster tre terninger.

>[!oppgave]
>a) Bestem sannsynligheten for at alle terningene viser forskjellig antall øyne.
>b) Bestem sannsynligheten for at nøyaktig to av terningene viser samme antall øyne.

## Fasit

a) $\underline{\underline{P = \dfrac{5}{9} \approx 0{,}556}}$

b) $\underline{\underline{P = \dfrac{5}{12} \approx 0{,}417}}$

## Løsningsforslag

Det totale antallet utfall når vi kaster tre terninger er

$$6^3 = 216$$

### a

Vi teller antall utfall der alle tre terningene viser forskjellig antall øyne.

- Første terning: 6 muligheter
- Andre terning: må vise noe annet enn første – 5 muligheter
- Tredje terning: må vise noe annet enn de to første – 4 muligheter

Antall gunstige utfall:

$$6 \cdot 5 \cdot 4 = 120$$

Sannsynligheten blir

$$P(\text{alle forskjellige}) = \frac{120}{216} = \frac{5}{9} \approx 0{,}556$$

**Sannsynligheten for at alle terningene viser forskjellig antall øyne er $\underline{\underline{\dfrac{5}{9} \approx 0{,}556}}$.**

### b

Vi teller antall utfall der nøyaktig to terninger viser samme antall øyne (ett par og én ulik).

**Plassering av paret:** Vi velger hvilke to av de tre terningene som skal utgjøre paret. Det er

$$\binom{3}{2} = 3 \text{ måter}$$

**Verdi for paret:** Paret kan vise et hvilket som helst antall øyne – 6 muligheter.

**Verdi for den ulike:** Den tredje terningen må vise noe annet enn paret – 5 muligheter.

Antall gunstige utfall:

$$3 \cdot 6 \cdot 5 = 90$$

Sannsynligheten blir

$$P(\text{nøyaktig to like}) = \frac{90}{216} = \frac{5}{12} \approx 0{,}417$$

**Sannsynligheten for at nøyaktig to av terningene viser samme antall øyne er $\underline{\underline{\dfrac{5}{12} \approx 0{,}417}}$.**
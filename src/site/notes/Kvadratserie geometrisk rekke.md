---
{"aliases":[],"date":"2023-11-28","del":2,"dg-permalink":"/kvadratserie-geometrisk-rekke/","dg-publish":true,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":7}],"poeng":null,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["geometrisk vekst","rekker","programmering"],"title":"Kvadratserie geometrisk rekke","todo":[],"permalink":"/kvadratserie-geometrisk-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-28","del":2,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"2p","oppgave":7}],"poeng":null,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["geometrisk vekst","rekker","programmering"],"title":"Kvadratserie geometrisk rekke","todo":[]}}
---


# Kvadratserie geometrisk rekke

![Kvadratserie](/img/user/_resources/2p-h23-2-7.jpeg){width=80%}

Tenk deg at du skal tegne en serie med kvadrater der

- sidekantene i det største kvadratet er 10 cm
- sidekantene i det neste kvadratet alltid er 10 % kortere enn sidekantene i det forrige du tegnet

>[!oppgave]
>a) Vis at den samlede omkretsen av de tre første kvadratene i serien vil bli 108,4 cm.

Tenk deg at du har veldig mange kvadrater i serien.

>[!oppgave]
>b) Bruk programmering til å lage et program som finner samlet omkrets av alle kvadratene.

Tenk deg at du lager nye serier med kvadrater. Du endrer størrelsen på det største kvadratet i hver serie og lar alltid sidekantene i det neste kvadratet i serien være 10 % kortere enn sidekantene i det forrige du tegnet.

>[!oppgave]
>c) Undersøk og beskriv sammenhengen mellom lengden av sidekantene i det største kvadratet og den samlede omkretsen av alle kvadratene i hver serie.

Ole påstår at $T = \dfrac{4 \cdot s}{p} \cdot 100$ er en formel for å regne ut den samlede omkretsen $T$ av kvadratene i en serie når sidekanten i det største kvadratet er $s$ og sidekantene i det neste kvadratet er $p$ % kortere enn sidekantene i det forrige.

>[!oppgave]
>d) Undersøk om denne sammenhengen kan gjelde.

## Fasit

a) Samlet omkrets $= 40 + 36 + 32{,}4 = \underline{\underline{108{,}4 \, \mathrm{cm}}}$
b) $\underline{\underline{T = 400 \, \mathrm{cm}}}$
c) Sammenhengen er lineær: $T = 40 \cdot s$
d) Oles formel stemmer.

## Løsningsforslag

### a

Sidekantene i de tre første kvadratene er

$$s_1 = 10, \quad s_2 = 10 \cdot 0{,}9 = 9, \quad s_3 = 10 \cdot 0{,}9^2 = 8{,}1$$

Omkretsene er

$$O_1 = 4 \cdot 10 = 40, \quad O_2 = 4 \cdot 9 = 36, \quad O_3 = 4 \cdot 8{,}1 = 32{,}4$$

Samlet:

$$O_1 + O_2 + O_3 = 40 + 36 + 32{,}4 = \mathbf{\underline{\underline{108{,}4 \, \mathrm{cm}}}}$$

### b

Omkretsene danner en geometrisk rekke med første ledd $a_1 = 40$ og kvotient $k = 0{,}9$.
Siden $|k| < 1$ konvergerer rekken, og summen av uendelig mange ledd er

$$T = \frac{a_1}{1 - k} = \frac{40}{1 - 0{,}9} = \frac{40}{0{,}1} = \mathbf{\underline{\underline{400 \, \mathrm{cm}}}}$$

**Program (Python):**

```python
s = 10       # sidekant første kvadrat
k = 0.9      # kvotient
total = 0
while s > 0.0001:
    total += 4 * s
    s = s * k
print(total)  # → 400.0
```

### c

Vi lager nye serier der vi bare endrer størrelsen $s$ på det største kvadratet, men beholder at hvert neste kvadrat er $10 \,\%$ kortere. For en serie med største sidekant $s$ er første omkretsled $a_1 = 4s$ og kvotienten fortsatt $k = 0{,}9$.

Samlet omkrets:

$$T = \frac{4s}{1 - 0{,}9} = \frac{4s}{0{,}1} = 40 \cdot s$$

Sammenhengen er altså **lineær**: den samlede omkretsen er 40 ganger sidekanten i det største kvadratet.

![Sammenheng mellom sidekant og samlet omkrets](/img/user/_resources/2p-h23-2-7-sammenheng.png){width=80%}

Grafen (se `T(s) = 40s` i utklippet) bekrefter at sammenhengen er en rett linje gjennom origo. For $s = 10$ er $T = 400$, markert som punkt $A = (10, 400)$.

### d

For en serie der sidekantene reduseres med $p \,\%$ for hvert ledd, er kvotienten

$$k = 1 - \frac{p}{100}$$

Første ledd er $a_1 = 4s$, og sumformelen gir

$$T = \frac{4s}{1 - k} = \frac{4s}{1 - \left(1 - \dfrac{p}{100}\right)} = \frac{4s}{\dfrac{p}{100}} = \frac{4s \cdot 100}{p}$$

Dette er nøyaktig Oles formel $T = \dfrac{4 \cdot s}{p} \cdot 100$. **Formelen stemmer.**

Vi kan sjekke med $s = 10$ og $p = 10$:

$$T = \frac{4 \cdot 10}{10} \cdot 100 = 400 \, \mathrm{cm}$$

Dette stemmer med svaret fra b).

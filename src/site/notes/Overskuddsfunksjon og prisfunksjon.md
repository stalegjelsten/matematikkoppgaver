---
{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["optimering","derivasjon","økonomi"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Overskuddsfunksjon og prisfunksjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/overskuddsfunksjon-og-prisfunksjon/","permalink":"/overskuddsfunksjon-og-prisfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-05-22","modified":"2026-04-08","aliases":[],"temaer":["optimering","derivasjon","økonomi"],"fag":["s2"],"eksamen":"v20","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Overskuddsfunksjon og prisfunksjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Overskuddsfunksjon og prisfunksjon

En bedrift produserer og selger en vare. Kostnaden $K$ i kroner ved å produsere og selge $x$ enheter av varen per dag, er gitt ved

$$K(x) = 0{,}03x^2 + 20x + 500, \quad 0 \leq x \leq 250$$

Inntekten $I$ i kroner dersom bedriften selger $x$ enheter per dag, er gitt ved

$$I(x) = -0{,}14x^2 + 74x, \quad 0 \leq x \leq 250$$

>[!oppgave]
>a) Tegn grafen til overskuddsfunksjonen.
>b) Bestem hvor mange enheter bedriften må produsere og selge per dag for å få størst overskudd. Hvor stort blir dette overskuddet?

For en annen vare antar vi at salgsprisen i kroner per enhet ved produksjon av $x$ enheter er gitt på formen

$$p(x) = ax + b$$

Her er $a$ og $b$ to reelle tall.

Kostnadsfunksjonen for denne varen er $K$ som gitt ovenfor.

>[!oppgave]
>c) Bestem $a$ og $b$ slik at overskuddet er
>
>- størst ved produksjon og salg av 175 enheter
>- 5625 kr ved produksjon av 175 enheter

## Fasit

a) Se graf
b) Ca. $158{,}8$ enheter, overskudd ca. $3788 \text{~kr}$
c) $a = -0{,}17$ og $b = 90$

## Løsningsforslag

### a

Overskuddsfunksjonen er

$$O(x) = I(x) - K(x) = -0{,}14x^2 + 74x - 0{,}03x^2 - 20x - 500$$

$$O(x) = -0{,}17x^2 + 54x - 500$$

![Graf over overskuddsfunksjonen](/img/user/_resources/s2-v20-2-3-graf.png)

### b

Vi finner maksimum ved å sette $O'(x) = 0$:

![GeoGebra CAS: overskuddsfunksjon](/img/user/_resources/s2-v20-2-3.png)

Fra linje 4 ser vi at $O'(x) = 0$ gir $x = \dfrac{2700}{17} \approx 158{,}8$.

Fra linje 5 ser vi at $O\!\left(\dfrac{2700}{17}\right) = \dfrac{64\,400}{17} \approx 3788$.

**Bedriften må produsere og selge ca. $\underline{\underline{159 \text{~enheter}}}$ per dag for størst overskudd. Overskuddet blir da ca. $\underline{\underline{3788 \text{~kr}}}$.**

### c

Inntekten med prisfunksjonen $p(x) = ax + b$ er

$$I(x) = x \cdot p(x) = ax^2 + bx$$

Overskuddet blir

$$O(x) = I(x) - K(x) = ax^2 + bx - 0{,}03x^2 - 20x - 500$$

$$O(x) = (a - 0{,}03)x^2 + (b - 20)x - 500$$

**Krav 1:** Størst overskudd ved $x = 175$, altså $O'(175) = 0$:

$$O'(x) = 2(a - 0{,}03)x + (b - 20)$$

$$O'(175) = 350(a - 0{,}03) + (b - 20) = 0$$

$$350a + b = 30{,}5 \quad \text{(I)}$$

**Krav 2:** $O(175) = 5625$:

$$(a - 0{,}03) \cdot 175^2 + (b - 20) \cdot 175 - 500 = 5625$$

$$30625a - 918{,}75 + 175b - 3500 - 500 = 5625$$

$$30625a + 175b = 10543{,}75 \quad \text{(II)}$$

Fra (I): $b = 30{,}5 - 350a$. Innsatt i (II):

$$30625a + 175(30{,}5 - 350a) = 10543{,}75$$

$$30625a + 5337{,}5 - 61250a = 10543{,}75$$

$$-30625a = 5206{,}25$$

$$\underline{\underline{a = -0{,}17}}$$

$$\underline{\underline{b = 30{,}5 - 350 \cdot (-0{,}17) = 90}}$$

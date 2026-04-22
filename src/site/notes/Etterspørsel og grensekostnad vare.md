---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["etterspørsel","eksponentialfunksjoner","grenseinntekt og grensekostnad","økonomi"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":8,"title":"Etterspørsel og grensekostnad vare","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/ettersporsel-og-grensekostnad-vare/","permalink":"/ettersporsel-og-grensekostnad-vare/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["etterspørsel","eksponentialfunksjoner","grenseinntekt og grensekostnad","økonomi"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":8,"title":"Etterspørsel og grensekostnad vare","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Etterspørsel og grensekostnad vare

En ny vare blir lansert i et område. Vi antar at funksjonen $q$ gitt ved

$$q(t) = 230 \cdot e^{0{,}015t}, \quad t \in [0, 52]$$

er en god modell for etterspørselen etter varen per uke, $t$ uker etter lanseringen.

>[!oppgave]
>a) Bruk graftegner til å tegne grafen til $q$.

Enhetsprisen for varen settes lik 50 kroner det første året.

>[!oppgave]
>b) Bestem inntekten i uke 40 etter lanseringen.
>c) Bestem den samlede inntekten de første 52 ukene etter lanseringen.

Etter at varen har vært i markedet i ett år, vil enhetsprisen $p$ kroner være en funksjon av den ukentlige etterspørselen $x$. Vi går ut fra at $p$ er gitt ved

$$p(x) = -0{,}01x + 60, \quad x \in [500, 2000]$$

Grensekostnaden ved produksjon av $x$ enheter er

$$K'(x) = 0{,}02x + 25, \quad x \in [500, 2000]$$

>[!oppgave]
>d) Hva må enhetsprisen være for at overskuddet skal bli størst mulig?

## Fasit

a) Se løsningsforslag
b) $\approx 20\,955 \text{ kr}$
c) $\approx 905\,795 \text{ kr}$
d) $51{,}25 \text{ kr}$

## Løsningsforslag

### a

Vi tegner grafen til $q(t) = 230 \cdot e^{0{,}015t}$ for $t \in [0, 52]$ i GeoGebra.

![Graf: Etterspørsel](/img/user/_resources/s2-v19-2-3-graf.png)

### b

Inntekten i uke 40 er antall solgte enheter ganger enhetspris:

$$I_{40} = q(40) \cdot 50 = 230 \cdot e^{0{,}015 \cdot 40} \cdot 50$$

Vi regner ut i CAS og får

$$I_{40} \approx \underline{\underline{20\,955 \text{ kr}}}$$

### c

Den samlede inntekten er

$$I = 50 \cdot \int_0^{52} 230 \cdot e^{0{,}015t} \, \mathrm{d}t$$

Vi bruker CAS til å definere $q$, beregne integralet og løse optimeringen:

![CAS: Etterspørsel og grensekostnad](/img/user/_resources/s2-v19-2-3.png)

Fra linje 2 i CAS leser vi av at den samlede inntekten er $\approx \underline{\underline{905\,795 \text{ kr}}}$.

### d

Inntektsfunksjonen er $I(x) = x \cdot p(x) = x(-0{,}01x + 60) = -0{,}01x^2 + 60x$.

Grenseinntekten er $I'(x) = -0{,}02x + 60$.

Overskuddet er størst når grenseinntekt er lik grensekostnad. Fra linje 4 i CAS ser vi at $x = 875$.

Enhetsprisen blir

$$p(875) = -0{,}01 \cdot 875 + 60 = \underline{\underline{51{,}25 \text{ kr}}}$$

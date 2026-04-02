---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","logistisk funksjon","derivasjon","modellering"],"fag":["r1"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":3}],"poeng":8,"title":"Fiskepopulasjon og logistisk modell","status":0,"source":null,"todo":null,"dg-permalink":"/fiskepopulasjon-og-logistisk-modell/","permalink":"/fiskepopulasjon-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"temaer":["eksponentialfunksjoner","logistisk funksjon","derivasjon","modellering"],"fag":["r1"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":3}],"poeng":8,"title":"Fiskepopulasjon og logistisk modell","status":0,"source":null,"todo":null}}
---


# Fiskepopulasjon og logistisk modell

Forskere har registrert en ny fiskeart i en innsjø. I tabellen nedenfor ser du hvor mange fisk av arten det var i innsjøen noen måneder etter at arten først ble registrert.

| Måneder etter første registrering | 0 | 1   | 2   | 3 | 4  | 5  | 6  | 7  | 8  |
|-----------------------------------|---|-----|-----|---|----|----|----|----|-----|
| Antall tusen fisk                 | 1 | 2,5 | 5,5 | 9 | 14 | 22 | 32 | 45 | 60 |

Fiskepopulasjonen kan beskrives med en modell på formen

$$A(t) = A_0 \cdot k^t$$

der $A(t)$ er antall tusen fisk $t$ måneder etter første registrering.

>[!oppgave]
>a) Bestem $A_0$ og $k$, og gi en praktisk tolkning av disse verdiene.

Fiskepopulasjonen kan også beskrives med en logistisk modell på formen

$$N(t) = \frac{B}{1 + \dfrac{B - N_0}{N_0} e^{-r \cdot t}}$$

$B$ er bæreevnen, $N_0$ er antall tusen fisk ved $t = 0$ og $r$ er vekstparameteren.

>[!oppgave]
>b) Bestem $N_0$, $B$ og $r$.
>c) Bestem den deriverte til funksjonene du fant i oppgavene a) og b). Forklar hvordan vekstfarten endrer seg ifølge hver av de to modellene.
>d) Hvilken modell mener du beskriver den praktiske situasjonen best? Hvor mange fisk vil det være 12 måneder etter første registrering, ifølge denne modellen?

## Fasit

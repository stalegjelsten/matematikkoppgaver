---
{"aliases":[],"date":"2019-05-24","del":1,"dg-permalink":"/polynom-med-faktorisering/","dg-publish":true,"eksamen":"v19","fag":["s2"],"modified":"2026-04-08","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s2","oppgave":2}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["polynomdivisjon","faktorisering"],"title":"Polynom med faktorisering","todo":["fasit"],"permalink":"/polynom-med-faktorisering/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2019-05-24","del":1,"eksamen":"v19","fag":["s2"],"modified":"2026-04-08","oppgave":2,"oppgavenummer":[{"del":1,"fag":"s2","oppgave":2}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["polynomdivisjon","faktorisering"],"title":"Polynom med faktorisering","todo":["fasit"]}}
---


# Polynom med faktorisering

Et polynom $P$ er gitt ved

$$P(x) = x^3 - 6x^2 + 9x - 4$$

>[!oppgave]
>a) Begrunn at $P(x)$ er delelig med $(x - 1)$.
>b) Faktoriser $P(x)$ i førstegradsfaktorer.

## Fasit

a) $P(1)=0$, altså må $(x-1)$ være en faktor i $P(x)$.
b) $P(x)=(x-1)^{2}(x-4)$

## Løsningsforslag

### a
$P(x)$ vil være delelig med $(x-1)$ dersom vi kan faktorisere $P(x)$ på denne måten $P(x)=(x-1) \cdot a(x-x_{1})(x-x_{2})$. For å kunne gjennomføre denne faktorisering så må $x=1$ være et nullpunkt til $P$.

$$
P(1)=1^{3}-6\cdot 1^{2}+9\cdot 1 - 4=1-6+9-4=0
$$
**$(x-1)$ må være en faktor i $P$ og $P$ må derfor være delelig på $(x-1)$.**

### b
$(x-1)$ er en faktor. Vi gjennomfører polynomdivisjon for å kunne finne de de andre faktorene.

$$
\begin{aligned}
&\phantom{0}(x^3 - 6x^2 + 9x - 4) : (x - 1) = x^2 - 5x + 4 \\
&\underline{-(x^3 - x^2)} \\
&\phantom{0000} -5x^2 + 9x \\
&\phantom{000} \underline{-(-5x^2 + 5x)} \\
&\phantom{000000000000} 4x - 4 \\
&\phantom{0000000000} \underline{-(4x - 4)} \\
&\phantom{00000000000000000} 0
\end{aligned}
$$

Dette gir oss at $P(x) = (x - 1)(x^2 - 5x + 4)$. 

Vi faktoriserer andregradsuttrykket $x^2 - 5x + 4$ ved hjelp av heltallsmetoden. Vi ser etter to tall som har sum $-5$ og produkt $4$. Tallene er $-1$ og $-4$:
$$x^2 - 5x + 4 = (x - 1)(x - 4)$$
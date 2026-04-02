---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["derivasjon","gjennomsnittlig vekstfart","likningssystem"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"poeng":null,"title":"Tredjegradsfunksjon med ukjente koeffisienter","status":3,"source":null,"todo":null,"dg-permalink":"/tredjegradsfunksjon-med-ukjente-koeffisienter/","permalink":"/tredjegradsfunksjon-med-ukjente-koeffisienter/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["derivasjon","gjennomsnittlig vekstfart","likningssystem"],"fag":["1t"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"poeng":null,"title":"Tredjegradsfunksjon med ukjente koeffisienter","status":3,"source":null,"todo":null}}
---


# Tredjegradsfunksjon med ukjente koeffisienter

En tredjegradsfunksjon $f$ er gitt ved

$$f(x) = ax^3 + bx^2 + cx - 64$$

- Punktet $(-8, 0)$ er et toppunkt på grafen til $f$.
- Den gjennomsnittlige vekstfarten til $f$ i intervallet $[0, 5]$ er $\dfrac{64}{5}$.

>[!oppgave]
>Bestem $a$, $b$ og $c$.

## Fasit

$a=\frac{1}{5}, b=\frac{11}{5},c=-\frac{16}{5}$

## Løsningsforslag

Vi vet at $f'(x)=0$ i toppunktet, så jeg begynner med å derivere funksjonen og setter uttrykket lik null
$$
\begin{aligned}
f'(x)&=3ax^{2}+2bx+c \\
f'(-8)&=3a \cdot (-8)^{2}+2b \cdot (-8)+c\\
0&= 3a \cdot 64 + (-16b)+c \\
0&=192a -16b+c
\end{aligned}
$$
Vi kan også sette opp en likning for funksjonsverdien ved toppunktet.
$$
\begin{aligned}
f(x)&=ax^3 + bx^2 + cx - 64 \\
f(-8)&=a(-8)^3 + b(-8)^2 + c(-8) - 64 \\
0&=-512a+64b-8c-64
\end{aligned}
$$
Til slutt kan vi sette opp en likning for gjennomsnittlig vekstfart i intervallet $x \in \left[ 0,5 \right]$.
$$
\begin{aligned}
\frac{64}{5}&=\frac{f(5)-f(0)}{5-0}\\
\frac{64}{5}&= \frac{\left( a \cdot 5^{3}+b \cdot 5^{2}+ c \cdot 5 - 64 \right) - \left( 0+0+0-64 \right)  }{5}\\
\frac{64}{5}&=\frac{125a+25b+5c}{5} \\
64&=125a+25b+5c \\
0&=125a+25b+5c-64
\end{aligned}
$$

>Det var først nå jeg la merke til at dette var en del 2 oppgave, så jeg løste likningssystemet i GeoGebra 😄. Se utklippet.

![Løsning av likningssystem i GeoGebra](/img/user/_resources/1t-h23-2-6-cas.png){width=50%}

$$
\underline{\underline{ a=\frac{1}{5}, b=\frac{11}{5},c=-\frac{16}{5} }}
$$
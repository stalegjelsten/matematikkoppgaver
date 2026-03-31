---
{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"dg-publish":true,"temaer":["simulering","sannsynlighet","programmering"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/simulering-av-antall-terningkast-for-a-fa-samme-antall-oyne-i-to-kast-pa-rad/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"temaer":["simulering","sannsynlighet","programmering"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/simulering-av-antall-terningkast-for-a-fa-samme-antall-oyne-i-to-kast-pa-rad/"}}
---


Ane har en vanlig sekssidet terning. Hun ønsker å finne ut hvor mange ganger hun i gjennomsnitt må kaste terningen for å få det samme antallet øyne i to kast på rad.

Hun har laget tabellen nedenfor.

Table: Sannsynlighet for at et kast er nødvendig { .tall }

| Kast nummer      |  1  |  2  | 3  | 4   |     5      |  6    | ... |
| :--------------------------------------- | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| Sannsynlighet for at kastet er nødvendig |  1  |  1  | $\frac{5}{6}$ | $\left(\frac{5}{6}\right)^2$ | $\left(\frac{5}{6}\right)^3$ | $\left(\frac{5}{6}\right)^4$ |  ⋯  |

>[!oppgave]
>a) Forklar at
>$$1+1+\frac{5}{6}+\left(\frac{5}{6}\right)^2+\left(\frac{5}{6}\right)^3+\ldots$$
>vil gi det forventede antallet kast Ane må gjøre for å få det samme antallet øyne i to kast på rad.
>Bestem denne verdien.

>[!oppgave]
>b) Bruk simulering til å bestemme forventningsverdien til summen av antall øyne Ane vil få på terningen i kastene hun bruker for å få det samme antallet øyne i to kast på rad.

## Fasit

a) –
b) 24,5

## Løsningsforslag

### 2-6a


*I denne oppgaven er jeg veldig usikker på hva som kreves for å forklare at uttrykket i oppgaveteksten er det samme som forventningsverdien. Jeg tror ikke det er meningen at elever skal gjøre det samme som jeg har gjort her – men jeg klarer ikke helt å se en enklere måte å argumentere for at forventningsverdien er eksakt lik summen av «antall kast nødvendig».*

![Valgtre til oppgave 6 del 2](/img/user/_resources/s2-h25-2-6a-valgtre2.png)

Vi lar $X$ være antall kast som trengs før vi har fått 2 like terningkast på rad. Sannsynligheten for å at et terningkast har samme antall øyne som det forrige er $1/6$, og sannsynligheten for at antall øyne er ulikt er $5/6$. Vi kan bruke multiplikasjonsprinsippet og sette opp følgende sannsynlighetsfordeling for $X$:

| $x_{i}$ |                     $P(x_{i})$                     |
| :-----: | :------------------------------------------------: |
|   $1$   |                        $0$                         |
|   $2$   |                   $\frac{1}{6}$                    |
|   $3$   |          $\frac{5}{6} \cdot \frac{1}{6}$           |
|   $4$   | $\left( \frac{5}{6} \right)^{2} \cdot \frac{1}{6}$ |
|   $5$   | $\left( \frac{5}{6} \right)^{3} \cdot \frac{1}{6}$ |

Forventningsverdien til $X$ vil da være
$$
\begin{aligned}
\text{E}(X)&=\lim_{ n \to \infty } \sum_{i=1}^n x_{i} \cdot P(x_{i})\\
&=1 \cdot 0 + 2 \cdot \frac{1}{6} + 3 \cdot \frac{5}{6} \cdot \frac{1}{6} +4 \cdot \left( \frac{5}{6} \right)^{2} \cdot \frac{1}{6}+5 \cdot \left( \frac{5}{6} \right)^{3} \cdot \frac{1}{6} + \cdots \\
&= \frac{1}{6} \left(\underbrace{  2\left( \frac{5}{6} \right)^0 + 3\left( \frac{5}{6} \right)^{1} + 4\left( \frac{5}{6} \right)^{2} + 5\left( \frac{5}{6} \right)^{3}  + \cdots }_{ S } \right) 
\end{aligned}
$$
Vi kaller alt inni parentesen for $S$, og omskriver heltallene som står foran $\frac{5}{6}$ som en sum av enere:
$$
\begin{aligned}
S = \underbrace{ (\textcolor{seagreen}{1}+\textcolor{steelblue}{1}) }_{ 2 } \cdot \left( \frac{5}{6} \right)^{0} + \underbrace{ ( \textcolor{seagreen}{1} + \textcolor{steelblue}{1}+\textcolor{orange}{1}) }_{ 3 } \cdot \left( \frac{5}{6} \right)^{1}  \underbrace{ ( \textcolor{seagreen}{1} + \textcolor{steelblue}{1}+\textcolor{orange}{1} + \textcolor{tomato}{1}) }_{ 4 } \cdot \left( \frac{5}{6} \right)^{2} + \dots
\end{aligned}
$$
Vi deler nå opp denne summen i en rekke delsummer slik at $S = \lim_{ n \to \infty } S_{1} + S_{2} +  \dots + S_{n}$ hvor 

$$
\begin{aligned}
\color{seagreen} S_{1} & = \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{0} + \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{1}+ \textcolor{seagreen}{1} \cdot \left( \frac{5}{6} \right)^{2} + \dots = \frac{1}{1-\frac{5}{6}}=\frac{1}{\frac{1}{6}}=\textcolor{seagreen}{6}\\
\color{steelblue} S_{2} & = \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{0} + \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{1}+ \textcolor{steelblue}{1} \cdot \left( \frac{5}{6} \right)^{2} + \dots = \frac{1}{1-\frac{5}{6}}=\frac{1}{\frac{1}{6}}= \textcolor{steelblue}{6}\\
\color{orange} S_{3} & = \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{1} + \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{2}+ \textcolor{orange}{1} \cdot \left( \frac{5}{6} \right)^{3} + \dots \frac{\frac{5}{6}}{1-\frac{5}{6}}=\frac{\frac{5}{6}}{\frac{1}{6}}=\textcolor{orange}{5}\\
\color{tomato} S_{4} & = \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{2} + \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{3}+ \textcolor{tomato}{1} \cdot \left( \frac{5}{6} \right)^{4} + \dots = \frac{\left( \frac{5}{6} \right)^{2}}{1-\frac{5}{6}}=\frac{\left( \frac{5}{6} \right)^{2}}{\frac{1}{6}}=\textcolor{tomato}{6 \cdot \left( \frac{5}{6} \right)^{2}}\\
\color{maroon} S_{5} & = \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{3} + \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{4}+ \textcolor{maroon}{1} \cdot \left( \frac{5}{6} \right)^{5} + \dots = \frac{\left( \frac{5}{6} \right)^{3}}{1-\frac{5}{6}}=\frac{\left( \frac{5}{6} \right)^{3}}{\frac{1}{6}}=\textcolor{maroon}{6 \cdot \left( \frac{5}{6} \right)^{3}}
\end{aligned}
$$
Forventningsverdien er altså
$$
\begin{aligned}
\text{E}(X)&=\frac{1}{6}S \\
&=\frac{1}{6}\left( \textcolor{seagreen}{S_{1}}+\textcolor{steelblue}{S_{2}} + \textcolor{orange}{S_{3}} + \textcolor{tomato}{S_{4}} + \textcolor{maroon}{S_{5}} + \cdots \right) \\
&=\frac{1}{6} \left( \textcolor{seagreen}{6} + \textcolor{steelblue}{6} + \textcolor{orange}{5} + \textcolor{tomato}{6 \cdot \left( \frac{5}{6} \right)^{2} } + \textcolor{maroon}{6 \cdot \left( \frac{5}{6} \right)^{3}} + \cdots \right) \\
&=  \textcolor{seagreen}{1} + \textcolor{steelblue}{1} + \textcolor{orange}{\frac{5}{6}}+\textcolor{tomato}{\left( \frac{5}{6} \right)^{2}} + \textcolor{maroon}{\left( \frac{5}{6} \right)^{3}} + \dots &&  \blacksquare
\end{aligned}
$$

Hvis vi ser bort fra det aller første leddet ($\textcolor{seagreen}{1}$), så er dette en uendelig geometrisk rekke med $a_{1}=1$ og $k=\frac{5}{6}$
$$
s= \textcolor{steelblue}{1}+ \textcolor{orange}{\frac{5}{6}}+ \textcolor{tomato}{\left( \frac{5}{6} \right)^{2}} + \cdots
$$
Vi kan finne summen av rekka $s$ med GeoGebra, eller med formelen for sum av uendelig geometrisk rekke:
$$s=\frac{1}{1-\frac{5}{6}}= \frac{1}{\frac{1}{6}}= \frac{1\cdot 6}{\frac{1}{6}\cdot 6}= 6$$
Til sammen blir altså $\text{E}(X)=\textcolor{seagreen}{1}+s=\textcolor{seagreen}{1}+6=7$.

**Verdien av rekka er 7.**

### 2-6b
Vi skal simulere *forventningsverdien til summen av antall øyne på alle terningene* som kastes i jakten på å få to like kast på rad.

```python
from random import randint
N = 100_000                        
sum_øyne = 0                        # totalt antall øyne på terningene

for i in range(N):
    t1 = randint(1,6)               # terningkast 1
    t2 = randint(1,6)               # terningkast 2

    sum_øyne = sum_øyne + t1 + t2   # legger til resultatene til summen
    while t1 != t2:
        t1 = t2                     # flytter t2's verdi til t1
        t2 = randint(1,6)           # ruller t2 på nytt
        sum_øyne = sum_øyne + t2    # legger til nytt resultat til summen

EX = sum_øyne/N                     # forventningsverdi = snitt i det lange løp
print(f"Jeg estimerer forventningsverdien til å være {EX:.3f} etter {N} simuleringer.")
```

Output: `Jeg estimerer forventningsverdien til å være 24.502 etter 100000 simuleringer.`

Etter å ha kjørt programmet flere ganger ser det ut til estimatet mitt er stabilt på rundt $24{,}5$. Det stemmer også godt med at forventningsverdien for en terning er $3{,}5$ og vi trenger i snitt $7$ kast før vi har fått to like på rad.

**Jeg estimerer forventningsverdien til summen av antall øyne før Ane får to like terninger på rad til å være 24,5.**

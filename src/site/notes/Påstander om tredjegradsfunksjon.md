---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","derivasjon","argumentasjon"],"fag":["s1"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"poeng":null,"title":"Påstander om tredjegradsfunksjon","status":3,"source":null,"todo":null,"permalink":"/pastander-om-tredjegradsfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-03-26","aliases":[],"temaer":["funksjonsdrøfting","derivasjon","argumentasjon"],"fag":["s1"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"poeng":null,"title":"Påstander om tredjegradsfunksjon","status":3,"source":null,"todo":null,"permalink":"/pastander-om-tredjegradsfunksjon/"}}
---


# Påstander om tredjegradsfunksjon

La $f$ være en tredjegradsfunksjon.

Avgjør for hver av påstandene nedenfor om den er sann eller usann. Begrunn svaret.

>[!oppgave]
>a) Påstand 1: Grafen til $f$ har minst ett ekstremalpunkt.
>b) Påstand 2: Alle linjer på formen $y = ax + b$, der $a, b \in \mathbb{R}$, vil skjære grafen til $f$.
>c) Påstand 3: Dersom grafen til $f$ har et vendepunkt for $x = 3$, er $f'(1) = f'(5)$.

## Fasit

a) Usann

## Løsningsforslag

### a
Jeg vet at funksjonen $f(x)=x^{3}$ kun har et terrassepunkt og ingen ekstremalpunkter. Jeg bruker derfor denne funksjonen som et moteksempel til påstanden og konkluderer med at påstanden er feil.

**Påstanden er usann. $f$ trenger ikke ha ekstremalpunkter.**

### b
$f$ har et $x^{3}$-ledd som vil stige eller synke kubisk mye raskere enn $y=ax+b$. Det blir dermed umulig for den rette linja å «ikke bli tatt igjen» av $f$. 

Vi kan også bevise at disse vil skjære hverandre matematisk hvis vi lar $f(x)=cx^{3}+dx^{2}+mx +n$.

$$cx^{3}+dx^{2}+mx +n = ax + b$$ $$cx^{3}+dx^{2}+(m+a)x + (n+b)=0$$
Den siste likningen er en vanlig tredjegradslikning. Disse har alltid en løsning (tredjegradsfunksjoner må alltid krysse $x$-aksen minst en gang). Derfor må $y=ax+b$ skjære $f$ minst ett sted.

**Påstanden er sann. $y=ax+b$ vil alltid skjære $f$ minst ett sted.**

### c
Vi har vendepunkter når $f''(x)=0$. Vi prøver å dobbeltderivere $f$ og sette inn for $f''(3)=0$.
$$
\begin{aligned}
f(x)&=cx^{3}+dx^{2}+mx +n \\
f'(x)&=3cx^{2}+2dx+m\\
f''(x)&=6cx + 2d \\
f''(3)&=0 \\
6c \cdot 3+2d &= 0 \\
18c + 2d &=0\\
d &= -9c
\end{aligned}
$$
Vi sjekker hva $f'(1)$ og $f'(5)$ er og prøver innsettingsmetoden med $d=-9c$.
$$
\begin{aligned}
f'(1)&=3c \cdot 1 ^{2} + 2 d \cdot 1 + m \\
f'(1)&=3c  + 2(-9c) + m \\
f'(1)&=3c-18c+m \\
f'(1)&=-15c +m
\end{aligned}
$$
$$
\begin{aligned}
f'(5)&=3c \cdot 5^{2}+2d \cdot 5+ m \\
f'(5)&=3c \cdot 25+2(-9c) \cdot 5+ m\\
f'(5)&=75c +10 \cdot(-9c) + m\\
f'(5)&=75c -90c + m\\
f'(5)&=-15c + m
\end{aligned}
$$

**Påstanden stemmer. Når $f$ har vendepunkt i $x=3$ så er $f'(1)=f'(5)$.**
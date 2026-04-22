---
{"tags":["oppgave"],"temaer":["rasjonale funksjoner","funksjoner","utforskning","tolke grafer","asymptoter"],"aliases":[],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":4}],"fag":["1t"],"eksamen":"v23","dg-publish":true,"title":"Lag funksjonsuttrykk til grafen av rasjonal funksjon","date":"2023-05-31","modified":"2026-03-30","status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Konstruere rasjonal funksjon fra graf ved å bruke vertikal asymptote, horisontal asymptote og nullpunkt.","dg-permalink":"/lag-funksjonsuttrykk-til-grafen-av-rasjonal-funksjon/","permalink":"/lag-funksjonsuttrykk-til-grafen-av-rasjonal-funksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["rasjonale funksjoner","funksjoner","utforskning","tolke grafer","asymptoter"],"aliases":[],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":4}],"fag":["1t"],"eksamen":"v23","title":"Lag funksjonsuttrykk til grafen av rasjonal funksjon","date":"2023-05-31","modified":"2026-03-30","status":3,"kategori":3,"vanskegrad":3,"beskrivelse":"Konstruere rasjonal funksjon fra graf ved å bruke vertikal asymptote, horisontal asymptote og nullpunkt."}}
---


# Lag funksjonsuttrykk til grafen av rasjonal funksjon

Nedenfor ser du grafen til en rasjonal funksjon $f$.

Bestem $f(x)$. Husk å argumentere for at svaret ditt er riktig.

![Rasjonal funksjon $f$](/img/user/_resources/1t-v23-1-4-rasjonal.png){width=60%}

> [!info] Kommentar til oppgaven
> Kommentar: det finnes uendelig mange ulike funksjonsuttrykk som passer. Det holder å finne et funksjonsuttrykk. Inkluder gjerne definisjonsmengden i svaret ditt.

## Fasit

En mulighet er $f(x)=\frac{3x-6}{x-1}, \quad D_{f} = \mathbb{R} \setminus \{ 1 \}$

## Løsningsforslag

Jeg ser at vi skal lage en rasjonal funksjon på formen $f(x)=\frac{P(x)}{Q(x)}$. 

Det er en vertikal asymptote og bruddpunkt ved $x=1$, det betyr at uttrykket i nevneren vår må ha nullpunkt i $x=1 \implies Q(1)=0$.

Det er en horisontal asymptote ved $y=3$. Det betyr at $\lim_{ x \to \pm \infty } \frac{P(x)}{Q(x)}=3$. For at det skal være mulig må polynomene i teller og nevner ha samme grad. Dette ligner på en rasjonal funksjon med førstegradsuttrykk i teller og nevner der koeffisienten foran $x$ i telleren er 3 ganger så stor som koeffisienten foran $x$ i nevneren.

Jeg lar $Q(x)=x-1$ siden dette er et førstegradsuttrykk som vil gi riktig bruddpunkt.

Vi har nå tre krav til $P(x)$:

- $P(x)$ skal ha samme grad som $Q\implies P$ må være førstegradsuttrykk $ax+b$
- $P(x)$ skal ha 3 ganger så stor koeffisient som $Q(x)\implies P(x)=3x+b$ 
- $f(x)$ har et nullpunkt i $x=2\implies P$ skal ha nullpunkt i $x=2\implies P(2)=0$

For å oppfylle det siste kravet må $P$ være på formen $P(x)=3x+b$, der $b$ må være slik at $P(2)=0$.

$$
\begin{aligned}
P(2)&=0\\
3\cdot 2+b&=0\\
b&=-6
\end{aligned}
$$

Et funksjonsuttrykk som passer til grafen er

$$
\underline{\underline{f(x)=\frac{3x-6}{x-1}, \quad  D_{f} = \mathbb{R} \setminus \left\{ 1 \right\} }}
$$

*Kommentar: Jeg tolker oppgaveteksten som at vi skal finne én funksjon $f(x)$ som passer til grafen. Generelt vil alle uttrykk på formen $\frac{3cx-6c}{cx-c}$ der $\left( c\in \mathbb{R} \right)\wedge\left( x\in \mathbb{R}\setminus \left\{ 1 \right\} \right)$ passe til grafen, så det kan godt være at dette generelle uttrykket er et bedre svar på oppgaven.*

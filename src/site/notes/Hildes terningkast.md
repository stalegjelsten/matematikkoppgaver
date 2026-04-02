---
{"tags":["oppgave"],"date":"2024-05-28","modified":"2024-05-28","aliases":null,"dg-publish":true,"temaer":["forventningsverdi","normalfordeling","standard normalfordeling","utforskning"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"6","oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Hildes terningkast","source":null,"todo":null,"status":3,"dg-permalink":"/hildes-terningkast/","permalink":"/hildes-terningkast/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-28","modified":"2024-05-28","aliases":null,"temaer":["forventningsverdi","normalfordeling","standard normalfordeling","utforskning"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"6","oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Hildes terningkast","source":null,"todo":null,"status":3}}
---


# Hildes terningkast


Hilde kaster en terning med seks sider. La $X$ være antall øyne hun får på terningen.

>[!oppgave]
>a) Bestem forventningsverdien $E(X)$

Hilde regner ut at standardavviket $SD(X)=1{,}7$. Hun vil kaste terningen flere ganger og summere antall øyne fra hvert kast.

>[!oppgave]
>b) Hvor mange ganger må Hilde kaste terningen før det er omtrent 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen?

## Fasit

a) 3,5
b) 100

## Løsningsforslag

### 1-6a
For å finne forventningsverdien lager jeg en tabell og regner ut $\sum_{i=1}^6 x \cdot P(X=x)$ 

| $x$ |   $P(X=x)$    |         $x \cdot P(X=x)$          |
| :-: | :-----------: | :-------------------------------: |
|  1  | $\frac{1}{6}$ | $1 \cdot \frac{1}{6}=\frac{1}{6}$ |
|  2  | $\frac{1}{6}$ | $2\cdot \frac{1}{6}=\frac{2}{6}$  |
|  3  | $\frac{1}{6}$ | $3\cdot \frac{1}{6}=\frac{3}{6}$  |
|  4  | $\frac{1}{6}$ | $4\cdot \frac{1}{6}=\frac{4}{6}$  |
|  5  | $\frac{1}{6}$ | $5\cdot \frac{1}{6}=\frac{5}{6}$  |
|  6  | $\frac{1}{6}$ | $6\cdot \frac{1}{6}=\frac{6}{6}$  |
| Sum |       1       | $\frac{21}{6}=\frac{7}{2}=3{,}5$  |

**Forventningsverdien er 3,5.**

### 1-6b
Standardavviket til ett kast er $SD(X)=1{,}7$. 

Vi lar $S$ være summen av $n$ forsøk med $X$ slik at

$$
S=X_{1}+X_{2}+X_{3}+ \dots + X_{n}
$$

Sentralgrensesetningen sier at $S$ vil være tilnærmet normalfordelt med variansen og standardavviket:

$$
\text{Var}(S)=n \cdot \text{Var}(X) \implies SD(S)=\sqrt{ n } \cdot SD(X)
$$

Fra normalfordelingstabellen så kan jeg finne ut at 68 % av arealet under normalfordelingskurven ligger innenfor pluss/minus ett standardavvik fra forventningsverdien. Altså må det være 32 % sannsynlighet for å få observasjon *mer enn* ett standardavvik fra forventningsverdien.

![](/img/user/_resources/s2-v24-1-6b.png)

Siden vi vet at 32 % tilsvarer mer enn ett standardavvik fra forventningsverdien, må 17 øyne være ett standardavvik.

$$
\begin{aligned}
SD(S)&=17\\
\sqrt{ n } \cdot SD(X)&=17 \\
\sqrt{ n } \cdot 1{,}7 &= 17\\
\sqrt{ n }&=10\\
n&=100
\end{aligned}
$$

**Hilde må kaste terningen 100 ganger før det er omtrent 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen.**

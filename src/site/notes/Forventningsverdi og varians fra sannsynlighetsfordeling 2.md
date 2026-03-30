---
{"aliases":null,"tags":["oppgave","sannsynlighet","diskrete sannsynlighetsfordelinger","varians","forventningsverdi","del1","s2"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","varians","forventningsverdi"],"alias":[],"del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Forventningsverdi og varians fra sannsynlighetsfordeling S2","date":"2023-05-27","modified":"2025-03-06","permalink":"/forventningsverdi-og-varians-fra-sannsynlighetsfordeling-2/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"tags":["oppgave","sannsynlighet","diskrete sannsynlighetsfordelinger","varians","forventningsverdi","del1","s2"],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","varians","forventningsverdi"],"alias":[],"del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"fag":"s2","eksamen":"v23","title":"Forventningsverdi og varians fra sannsynlighetsfordeling S2","date":"2023-05-27","modified":"2025-03-06"}}
---


# Forventningsverdi og varians fra sannsynlighetsfordeling S2

En sannsynlighetsfordeling er gitt ved tabellen nedenfor.

|   $x$    | 0   |    1    |    2    |    3    |
|:--------:| --- |:-------:|:-------:|:-------:|
| $P(X=x)$ | $k$ | $0{,}3$ | $k-0,2$ | $0{,}1$ |

> [!oppgave]
> 
> a) Vis at $P(X>1)=0{,}3$
> b) Bestem $E(X)$ og $\operatorname{Var}(X)$.

## Fasit

a) $k=0{,}2$ kan brukes til å vise dette
b) Begge er 1

## Løsningsforslag

### 1-3a
Siden summen av sannsynlighetene skal være lik 1 må

$$
\begin{aligned}
\sum P(X=x) &= 1\\
k+0{,}3+k-0{,}2+0{,}1&=1\\
2k &= 1 -0{,}3-0{,}1+0{,}2\\
2k &=0{,}8\\
k &= 0{,}4
\end{aligned}
$$

Dermed er:

$$P(X>1)=P(X=2)+P(X=3)=(0.4-0.2) + 0.1 = \underline{\underline{0,3}}$$

### 1-3b
|           $x$            |  0  |  1  |  2  |  3  | Sum |
| :----------------------: | :-: | :-: | :-: | :-: | :-: |
|         $P(X=x)$         | 0,4 | 0,3 | 0,2 | 0,1 |  1  |
|     $x\cdot P(X=x)$      |  0  | 0,3 | 0,4 | 0,3 |  1  |
| $(x-\mu)^2 \cdot P(X=x)$ | 0,4 |  0  | 0,2 | 0,4 |  1  |

Forventningsverdien er $\text{E}(X) = \sum x\cdot P(X=x)=\underline{\underline{1}}$.  
Variansen er $\text{Var}(X)=\sum (x-\mu)^2\cdot P(X=x)=\underline{\underline{1}}$.

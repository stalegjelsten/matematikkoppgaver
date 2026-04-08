---
{"tags":["oppgave","sannsynlighet"],"temaer":["sannsynlighet","forventningsverdi","varians","diskrete sannsynlighetsfordelinger"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"e22","dg-publish":true,"title":"Forventningsverdi og varians fra diskret sannsynlighetsfordeling","date":"2023-05-30","modified":"2023-05-31","dg-permalink":"/forventningsverdi-og-varians-fra-sannsynlighetsfordeling/","permalink":"/forventningsverdi-og-varians-fra-sannsynlighetsfordeling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","sannsynlighet"],"temaer":["sannsynlighet","forventningsverdi","varians","diskrete sannsynlighetsfordelinger"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"e22","title":"Forventningsverdi og varians fra diskret sannsynlighetsfordeling","date":"2023-05-30","modified":"2023-05-31"}}
---


# Forventningsverdi og varians fra diskret sannsynlighetsfordeling

En sannsynlighetsfordeling er gitt ved tabellen nedenfor.

|   $x$    |    0    |  1  |  2   |  3   |
|:--------:|:-------:|:---:|:----:|:----:|
| $P(X=x)$ | $0{,}2$ | $k$ | $2k$ | $5k$ |

> [!oppgave]
> 
> a) Forklar hvorfor $k$ må være 0,1. Bestem forventningsverdien $\text{E}(X)$.
> b) Bestem variansen $\text{Var}(X)$

## Fasit

a) $E(X)=2$
b) $Var(X)=1{,}4$

## Løsningsforslag

### 1-4a
Summen av sannsynlighetene for alle utfallene skal være 1. Vi har dermed at 

$$
\begin{aligned}
0{,}2+k+2k+5k&=1\\
8k&=0{,}8\\
k&=0{,}1
\end{aligned}
$$

Forventningsverdien er gitt ved

$$
\sum x \cdot P(X=x)=0+1\cdot 0{,}1 + 2\cdot 0{,}2 + 3 \cdot 0,5=2{,}0
$$

**$k$ må være lik 0,1 og forventningsverdien $\text{E}(X)=2$**.

### 1-4b
Variansen til $X$ er gitt ved 

$$
Var(X)=\sum_{i=1}^{n}(x_{i}-\mu)^{2} \cdot P(X=x)
$$

Dette er enklest å regne ut ved å bruke sannsynlighetsfordelingen:

|              $x$               |            0            |           1           |       2       |           3           |
| :----------------------------: | :---------------------: | :-------------------: | :-----------: | :-------------------: |
|            $P(X=x)$            |         $0{,}2$         |        $0{,}1$        |    $0{,}2$    |        $0{,}5$        |
|       $(x_{i}-\mu)^{2}$        |      $(0-2)^{2}=4$      |     $(1-2)^{2}=1$     | $(2-2)^{2}=0$ |     $(3-2)^{2}=1$     |
| $(x_{i}-\mu)^{2} \cdot P(X=x)$ | $4 \cdot 0{,}2 = 0{,}8$ | $1 \cdot 0{,}1=0{,}1$ |      $0$      | $1 \cdot 0{,}5=0{,}5$ |

Summen av kvadratavvikene er 1,4.

**Variansen $\underline{\underline{\text{Var}(X)=1{,}4}}$.**

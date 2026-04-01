---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":[],"dg-publish":true,"temaer":["diskrete sannsynlighetsfordelinger","varians"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Varians i diskret sannsynlighetsfordeling","source":null,"todo":null,"status":3,"permalink":"/varians-i-diskret-sannsynlighetsfordeling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":[],"temaer":["diskrete sannsynlighetsfordelinger","varians"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Varians i diskret sannsynlighetsfordeling","source":null,"todo":null,"status":3,"permalink":"/varians-i-diskret-sannsynlighetsfordeling/"}}
---


# Varians i diskret sannsynlighetsfordeling


Tabellen viser sannsynlighetsfordelingen til en stokastisk variabel $X$.

|   $x$    |    0     |    1     |    4     |   $b$    |
| :------: | :------: | :------: | :------: | :------: |
| $P(X=x)$ | $0{,}30$ | $0{,}40$ | $0{,}10$ | $0{,}20$ |

$E(X)=2$.

Vis at $b=6$, og bestem $\text{Var}(X)$.

## Fasit

$\mathrm{Var}(X)=4$

## Løsningsforslag

Table: Sannsynlighetsfordelingen til oppgave 1-3 {#tbl:sshfordeling}

|            $x$             |           0            |            1            |            4            |           $b$           |
| :------------------------: | :--------------------: | :---------------------: | :---------------------: | :---------------------: |
|          $P(X=x)$          |        $0{,}30$        |        $0{,}40$         |        $0{,}10$         |        $0{,}20$         |
|      $x \cdot P(X=x)$      |          $0$           |        $0{,}40$         |        $0{,}40$         |    $0{,}20 \cdot b$     |
|       $(x-\mu)^{2}$        |       $(-2)^2=4$       |         $1^2=1$         |         $2^2=4$         |       $4^{2}=16$        |
| $(x-\mu)^{2} \cdot P(X=x)$ | $4\cdot 0{,}30 =1{,}2$ | $1 \cdot 0{,}40=0{,}40$ | $4 \cdot 0{,}10=0{,}40$ | $16 \cdot 0{,}20=3{,}2$ |

Vi vet at forventningsverdien er summen av produktene av $x \cdot P(X=x)$, se rad 2 i tabell &tbl:sshfordeling. Det betyr at
$$
0+0{,}40+0{,}40+0{,}20b = 2 \iff 0{,}20 b = 1{,}2 \iff b=6
$$
**Vi har vist at $\underline{\underline{b=6}}$.**

Variansen til $X$ er gitt ved
$$
\begin{aligned}
\text{Var}(X)&=\sum_{i=1}^{N}\left( ( x_{i}-\mu)^{2}\cdot P(X=x_{i}) \right)\\
\text{Var}(X)&=1{,}2+0{,}40+0{,}40+3{,}2=\underline{\underline{5{,}2}}
\end{aligned}
$$
**Variansen $\underline{\underline{\mathrm{Var}(X)=5{,}2}}$.**

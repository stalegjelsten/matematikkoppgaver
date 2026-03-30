---
{"tags":["oppgave","sannsynlighet","s1","del1","hypergeometrisk"],"temaer":["sannsynlighet","hypergeometrisk"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4}],"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Kuler i krukke hypergeometrisk","date":"2023-05-29","modified":"2023-05-29","permalink":"/kuler-i-krukke-hypergeometrisk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","sannsynlighet","s1","del1","hypergeometrisk"],"temaer":["sannsynlighet","hypergeometrisk"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4}],"fag":"s1","eksamen":"v23","title":"Kuler i krukke hypergeometrisk","date":"2023-05-29","modified":"2023-05-29"}}
---


# Kuler i krukke hypergeometrisk

I en krukke ligger det fire hvite og tre svarte kuler. Du trekker tilfeldig tre kuler uten tilbakelegging.

a) Hva er sannsynligheten for at to av de tre kulene er svarte?

b) Hva er sannsynligheten for at du trekker minst to hvite kuler?

## Fasit

a) $\frac{12}{35}$
b) $\frac{22}{35}$

## Løsningsforslag

### 1-4a
Dette er et hypergeometrisk forsøk siden vi har to typer objekter og skal trekke $k_{1}=2$ av den ene typen og $k_{2}=1$ av den andre typen

$$
\frac{ \binom{n_{1}}{k_{1}}\binom{n_{2}}{k_{2}}}{\binom{n}{k}} = \frac{ \binom{3}{2}\binom{4}{1}}{\binom{7}{3}} = \frac{\frac{3!}{2!\cdot 1!}\cdot4}{\frac{7!}{3!\cdot4!}}=\frac{3\cdot4}{\frac{7\cdot6\cdot 5}{3\cdot2}}=\frac{12\cdot3\cdot2}{210}=\frac{72}{210}=\frac{12}{35}
$$

### 1-4b
La $X$ være antall hvite kuler. Da er 

$$P(X\geq 2)=1-P(X\leq 1)=1-\left( P(X=1) +P(X=0)\right)$$

Vi har allerede bestemt sannsynligheten for $P(X=1)=\frac{12}{35}$ i oppgave a).

$$
P(X=0)=\frac{3}{7}\cdot \frac{2}{6}\cdot \frac{1}{5} = \frac{3\cdot 2}{7\cdot6\cdot 5}=\frac{6}{210}=\frac{1}{35}
$$

$$
P(X\geq 2)=1-\left(  \frac{12}{35}+\frac{1}{35} \right)=1- \frac{13}{35}=\underline{\underline{\frac{22}{35}}}
$$

---
{"tags":["oppgave"],"date":"2024-05-28","modified":"2024-05-28","aliases":[],"dg-publish":true,"temaer":["standard normalfordeling","normalfordeling"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Normalfordelt laks","source":null,"todo":null,"status":3,"permalink":"/normalfordelt-laks/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-28","modified":"2024-05-28","aliases":[],"temaer":["standard normalfordeling","normalfordeling"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Normalfordelt laks","source":null,"todo":null,"status":3}}
---


# Normalfordelt laks


Hos en lakseoppdretter er slaktevekten til laksen normalfordelt med forventningsverdi 4700 gram. Det viser seg at $11{,}5 \,\%$ av laksen som slaktes, veier mer enn 5300 gram.

>[!oppgave]
>a) Vis at standardavviket for vekten til en vilkårlig laks er omtrent 500 gram.
>b) Bestem sannsynligheten for at en vilkårlig laks veier mindre enn 4500 gram

## Fasit

b) 34,5 %

## Løsningsforslag

### 1-4a
La $X$ være vekten til en tilfeldig valgt fisk. Da er forventningsverdien $E(X)=4700$. 

Vi vet at 88,5 % av fisken som slaktes veier mindre eller lik 5300 gram. Ifølge normalfordelingstabellen så er $0{,}885=\Phi(1{,}2) \implies z=1{,}2$.

Vi kan da sette opp likningen

$$
z=\frac{x-\mu}{\sigma} \iff 1{,}2=\frac{5300-4700}{\sigma} \iff \sigma = \frac{600}{1{,}2}=500
$$

**Standardavviket for en vilkårlig valgt laks er 500 gram.**

### 1-4b
Vi gjør om til standard normalfordeling

$$
z=\frac{4500-4700}{500}=-\frac{200}{500}=-0{,}4
$$

Normalfordelingstabellen gir oss $\Phi(-0{,}4)=0{,}345$.

**Sannsynligheten for at en vilkårlig valgt laks veier mindre enn 4500 gram er 34,5 %.**

---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","logaritmer","likninger"],"fag":["s1","r1"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":3},{"fag":"r1","del":1,"oppgave":3}],"poeng":2,"title":"Eksponentiallikning med substitusjon","status":3,"source":null,"todo":null,"permalink":"/eksponentiallikning-med-substitusjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"temaer":["eksponentialfunksjoner","logaritmer","likninger"],"fag":["s1","r1"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":3},{"fag":"r1","del":1,"oppgave":3}],"poeng":2,"title":"Eksponentiallikning med substitusjon","status":3,"source":null,"todo":null,"permalink":"/eksponentiallikning-med-substitusjon/"}}
---


# Eksponentiallikning med substitusjon

>[!oppgave]
>Løs likningen
>$$100^x - 3 \cdot 10^x = 4$$

## Fasit


## Løsningsforslag

Jeg ser at likningen består av tierpotenser.
$$
\begin{aligned}
100^{x}-3 \cdot 10^{x}&=4\\
\left( 10^{x} \right)^{2}  -3 \cdot 10^{x} - 4&=0\\
\end{aligned}
$$
Dette ser jeg at kan skrives som en andregradslikning hvor $u=10^{x}$.
$$
u^{2}-3u-4=0 \implies \underbrace{ (u-4)(u+1)=0 }_{ \text{Heltallsmetode} } \implies \underline{ u= 4 \vee u=-1} 
$$
Vi bytter substituerer tilbake.
$$
\begin{aligned}
10^{x}&=4 \vee \underbrace{ \cancel{ 10^{x}=-1 } }_{ 10^{x} \text{ er positivt} } \\
\log 10^{x} &= \log 4\\
x&= \log 4
\end{aligned}
$$
**Løsningen er $\underline{\underline{x=\log 4}}$**.

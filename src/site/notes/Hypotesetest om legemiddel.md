---
{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"dg-publish":true,"temaer":["hypotesetest","binomisk"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Hypotesetest om legemiddel","source":null,"todo":null,"status":3,"permalink":"/hypotesetest-om-legemiddel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"temaer":["hypotesetest","binomisk"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Hypotesetest om legemiddel","source":null,"todo":null,"status":3}}
---


# Hypotesetest om legemiddel


Et smertestillende legemiddel, A, er tilgjengelig på markedet. Legemiddelet demper smerte for mange pasienter, men ikke for alle.

- Sannsynligheten for at legemiddel A virker på en pasient, er 75 %.
- Vi tester legemiddel A på $n$ pasienter.
- Legemiddel A virker på $X$ av disse pasientene.
 
>[!oppgave]
>a) Hvilken sannsynlighetsfordeling har $X$? Begrunn svaret ditt.
> 
> Regn ut $P(X=9)$ når $n=12$.

Et nytt legemiddel, B, skal også dempe smerte hos pasienter.

- Legemiddel B er testet ut på 10 pasienter.
- Legemiddel B virket på 9 av disse 10 pasientene.

>[!oppgave]
>b) La $p$ være sannsynligheten for at B virker på en pasient. Gjennomfør en hypotesetest med signifikansnivå på 5 %. Bruk denne til å vurdere om du kan si at legemiddel B virker med høyere sannsynlighet enn A.

Legemiddel B blir gitt til 200 pasienter.

>[!oppgave]
>c) Hvor mange pasienter må legemiddel B minst virke på for at vi skal kunne konkludere med at legemiddel B virker med høyere sannsynlighet enn legemiddel A? Bruk et signifikansnivå på 5 %.

## Fasit

a) Binomisk. 0,2581
b) Vi kan ikke si at B fungerer bedre.
c) 100

## Løsningsforslag

### 2-2a
$X$ er binomisk fordelt fordi

- Vi har $n$ delforsøk
- Sannsynligheten for at legemiddelet fungerer er $p=0{,}75$ i alle forsøkene
- Vi må anta at vi tester legemiddelet på tilfeldige pasienter slik at delforsøkene blir uavhengige. 

Jeg bruker GeoGebras sannsynlighetskalkulator til å bestemme $P(X=9)$.

![Utklipp til oppgave 2-2a](/img/user/_resources/s2-v24-2-2a.png)

$$
P(X=9)=\underline{\underline{0{,}258}}
$$

>[!tip] Utregning med formel for binomisk
>
>Du kan også finne denne punktsannsynligheten enkelt med formelen for binomisk sannsynlighetsfordeling
>
>$$P(X=k)=\binom{n}{k} \cdot p^{k}\cdot (1-p)^{n-k}$$
>
>$$P(X=9)=\binom{12}{9}\cdot 0{,}75^{9} \cdot 0{,}25^{3}=0{,}2581$$

### 2-2b
Nullhypotesen vår er at begge legemidlene er like effektive, mens den alternative hypotesen er at legemiddel B er bedre.

$$
\begin{aligned}
H_{0}: \quad p=0{,}75\\
H_{A}: \quad p>0{,}75
\end{aligned}
$$

Jeg finner sannsynligheten for at legemiddel B skal ha fungert på 9 av 10 pasienter gitt at $H_{0}$ er sann ved hjelp av GeoGebra.

![Utklipp til oppgave 2-2b](/img/user/_resources/s2-v24-2-2b.png)

**$p$-verdien er 0,244, dette er større enn signifikansnivået 0,05. Vi kan ikke forkaste $H_{0}$, og vi kan dermed ikke si at legemiddel B fungerer bedre enn legemiddel A.**

### 2–2c

>[!tip] Oppgaven kan også løses med binomisk fordeling
>
> Denne oppgaven lar seg fint løse i GeoGebra ved å prøve seg fram med binomisk fordeling. Av gammel vane har jeg valgt å bruke normalfordeling som en tilnærming til den binomiske. Dette gir meg også mulighet til å skrive inn signifikansnivået 0,05 i svarfeltet i sannsynlighetskalkulatoren i GeoGebra.
>
>Siden $\text{Var}(X)$ er høy så er normalfordelingen en veldig god tilnærming, og vi får samme svar uansett hvilken fordeling vi velger.

Jeg lar $Y$ være antallet pasienter som legemiddel B fungerer for av de 200 pasientene. $Y$ er tilnærmet normalfordelt siden $\left( \text{Var}(Y)=200 \cdot 0{,}75 \cdot 0{,}25 \right) \gg 5$.

![Utklipp til oppgave 2-2c](/img/user/_resources/s2-v24-2-2c.png)

Jeg legger inn normalfordelingen med $\mu=200\cdot 0{,}75$ og $\sigma=\sqrt{ 200 \cdot 0{,}75 \cdot 0{,}25 }$. Deretter la jeg inn signifikansnivået 0,05 i svarfeltet, det gir oss at $Y$ må være minst 160,07. Vi må runde opp til 161 for å være sikre på at $p$-verdien blir lavere enn signifikansnivået.

**For å konkludere med at legemiddel B virker bedre enn A må det virke på minst 161 av de 200 pasientene.**

---
{"tags":["oppgave"],"temaer":["kontinuerlige sannsynlighetsfordelinger","forventningsverdi","sannsynlighet"],"aliases":null,"del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"fag":["s2"],"eksamen":"e22","dg-publish":true,"title":"Levetiden til lyspærer","date":"2023-06-06","modified":"2023-06-06","todo":[],"status":3,"permalink":"/levetiden-til-lyspaerer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["kontinuerlige sannsynlighetsfordelinger","forventningsverdi","sannsynlighet"],"aliases":null,"del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"fag":["s2"],"eksamen":"e22","title":"Levetiden til lyspærer","date":"2023-06-06","modified":"2023-06-06","todo":[],"status":3}}
---


# Levetiden til lyspærer

Levetiden $T$ i timer til en tilfeldig lyspære av en bestemt type er en stokastisk variabel. Det viser seg at 

$$
P(T\leq t)= \int_{-\infty}^{t} f(x) \, \mathrm{d}x 
$$

der tetthetsfunksjonen $f$ er gitt ved

$$
f(t)=\begin{cases}
k\cdot e^{-0{,}005t}\text{,} \quad  & t>0 \\
0\text{,} & t\leq 0
\end{cases}
$$

>[!oppgave]
> a) Vis at $k=0{,}005$.
> b) Hva er sannsynligheten for at lyspærens levetid er mer enn 400 timer?

Forventningsverdien $\mu$ til en kontinuerlig stokastisk variabel med tetthetsfunksjonen $f$ er gitt ved

$$
\mu=\int_{-\infty}^{\infty} x\cdot f(x) \, \mathrm{d}x 
$$

>[!oppgave]
> c) Bestem forventningsverdien til $T$.

## Fasit

a) Løs likningen $\int_{0}^{\infty} k\cdot e^{-0{,}005t} \, dt=1$
b) $\frac{1}{e^{2}}$
c) 200

## Løsningsforslag

### 2-2a
Siden $f(t)=0$ når $t\leq 0$ så vil

$$
\int_{- \infty}^{0} f(t) \, dt =0
$$

Vi trenger derfor kun å bry oss tilfellet hvor $t>0$.

Vi vet at et krav til sannsynlighetsfordelinger er at summen av alle sannsynlighetene skal bli 1. For kontinuerlige sannsynlighetsfordelinger har vi altså

$$
\int_{- \infty}^{\infty} f(x) \, dx =1
$$

I vårt tilfelle ønsker vi altså å bestemme $k$ slik at den tilfredsstiller likningen

$$
\int_{0}^{\infty} k \cdot e^{-0{,}005t} \, dt = 1
$$

Vi kan løse denne i GeoGebra eller vi kan integrere for hånd:

$$
\begin{aligned}
\left[ \frac{k}{-0.005} \cdot e^{-0.005t} \right]_{0}^{\infty}&=1 \\
\left(  \frac{k}{-0.005} \cdot  0 \right)-\left( \frac{k}{-0.005} \cdot 1 \right) &= 1\\
\frac{-k}{-0.005}&=1\\
k&=0.005
\end{aligned}
$$

**Jeg har vist at $k=0{,}005$**

### 2-2b
Jeg kan bruke integralet av tetthetsfunksjonen til å beregne sannsynligheten. Sannsynligheten for at lyspæras levetid er mellom 0 og 400 timer er gitt ved

$$
\int_{0}^{400} 0{,}005 \cdot e^{-0{,}005t} \, dt = 1-\frac{1}{e^{2}} 
$$

Siden summen av sannsynlighetene for alle utfallene er 1 så kan vi finne sannsynligheten for at lyspæra varer mellom 400 og uendelig timer ved å ta

$$
1-\left( 1-\frac{1}{e^{2}} \right)=\frac{1}{e^2}
$$

**Sannsynligheten for at lyspæras levetid er mer enn 400 timer er $\frac{1}{e^{2}} \approx 0{,}135$.**

### 2-2c
Jeg bruker uttrykket for forventningsverdi som står i oppgaveteksten og beregner ved hjelp av GeoGebra:

$$
\mu_{T} = \int_{0}^{\infty} t \cdot 0{,}005 \cdot e^{-0{,}005t} \, dt = 200
$$

**Forventningsverdien for $T$ er $\mu_{T}=200$ timer.**

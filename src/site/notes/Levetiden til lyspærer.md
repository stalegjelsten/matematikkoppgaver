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
k\cdot e^{-0{,}005t} &,\quad t>0 \\
0 &,\quad t\leq 0
\end{cases}
$$

>[!oppgave]
> a) Vis at $k=0{,}005$.

>[!oppgave]
> b) Hva er sannsynligheten for at lyspærens levetid er mer enn 400 timer?

Forventningsverdien $\mu$ til en kontinuerlig stokastisk variabel med tetthetsfunksjonen $f$ er gitt ved

$$
\mu=\int_{-\infty}^{\infty} x\cdot f(x) \, \mathrm{d}x 
$$

>[!oppgave]
> c) Bestem forventningsverdien til $T$.

>[!question]- Fasit
> 
> a) Løs likningen $\int_{0}^{\infty} k\cdot e^{-0{,}005t} \, dt=1$
> b) $\frac{1}{e^{2}}$
> c) 200
> [[Løsningsforslag/Løsningsforslag S2 eksempelsett 2022#Oppgave 2-2\|Løsningsforslag S2 eksempelsett 2022#Oppgave 2-2]]


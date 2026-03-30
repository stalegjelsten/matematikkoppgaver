---
{"tags":["oppgave","sannsynlighet","hypergeometrisk"],"temaer":["sannsynlighet","hypergeometrisk"],"alias":[null],"del":2,"oppgave":"2c","oppgavenummer":[{"fag":"s1","del":2,"oppgave":"2c"}],"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Sannsynligheter ved lottospill","date":"2023-05-29","modified":"2023-05-29","permalink":"/sannsynligheter-ved-lottospill/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","sannsynlighet","hypergeometrisk"],"temaer":["sannsynlighet","hypergeometrisk"],"alias":[null],"del":2,"oppgave":"2c","oppgavenummer":[{"fag":"s1","del":2,"oppgave":"2c"}],"fag":"s1","eksamen":"v23","title":"Sannsynligheter ved lottospill","date":"2023-05-29","modified":"2023-05-29"}}
---


# Sannsynligheter ved lottospill

Nedenfor ser du tre påstander. Avgjør i hvert tilfelle om påstanden er sann eller usann. Husk å vise tydelig hvordan du argumenterer og resonnerer.

Oppgave a finner du her [[Logaritmepåstand\|Logaritmepåstand]]
Oppgave b finner du her [[Har alle fjerdegradsfunksjoner ekstremalpunkt\|Har alle fjerdegradsfunksjoner ekstremalpunkt]]

I spillet Lotto trekkes det sju tilfeldige naturlige tall mindre eller lik 34 uten tilbakelegging.

>[!oppgave]
>c) Sannsynligheten for at alle de sju tallene er mindre enn 18 , er like stor som sannsynligheten for at ingen av de sju tallene er mindre enn 18.

## Fasit

Påstanden stemmer

## Løsningsforslag

La den stokastiske variabelen $X_{1}$ være resultatet av første trekning fra de 34 tallene. Sannsynligheten for hvert tall er like stor. Det er 17 tall som er mindre enn 18, altså

$$
P(X_{1}<18)=\frac{17}{34}=\frac{1}{2}
$$

La den stokastiske variabelen $X_2$ være resultatet av andre trekning fra de 33 tallene. $P(X_{2}<18)=\frac{16}{33}$. For hvert tall vi trekker vil tallene i teller og nevner reduseres med 1. 

Vi får det samme mønsteret for at ingen tall er mindre enn 18. 
Sannsynligheten for tallet ikke er mindre enn 18 er gitt ved

$$
\begin{aligned}
P(X_{1}\geq 18)&=\frac{17}{34}=\frac{1}{2}\\
P(X_{2}\geq18)&= \frac{16}{33}
\end{aligned}
$$

Mønsterne vil utvikle seg på samme måte.

**Det er like sannsynlig at alle lottotallene er mindre enn 18 som at ingen av lottotallene er mindre enn 18.**

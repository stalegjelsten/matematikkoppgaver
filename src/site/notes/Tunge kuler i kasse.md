---
{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"dg-publish":true,"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","forventningsverdi","varians"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"title":"Tunge kuler i kasse","source":null,"todo":null,"status":3,"permalink":"/tunge-kuler-i-kasse/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger","forventningsverdi","varians"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"title":"Tunge kuler i kasse","source":null,"todo":null,"status":3,"permalink":"/tunge-kuler-i-kasse/"}}
---


# Tunge kuler i kasse


I en kasse ligger det tre typer kuler. Disse veier henholdsvis 4 kg, 5 kg og 10 kg. Dersom vi trekker tilfeldig en kule, er sannsynligheten $\frac{1}{4}$ for at kulen veier 4 kg og $\frac{1}{2}$ for at den veier 5 kg.

>[!oppgave]
> a) Vis at $E(X)=6 \,\text{kg}$. Regn ut variansen til $X$.

Vi trekker tilfeldig en kule og legger den tilbake igjen. Dette gjør vi to ganger. La $X_{1}$ være vekten til den første kulen vi trekker, og $X_{2}$ vekten til den andre kulen vi trekker. La $Y=X_{1}+X_{2}$.

>[!oppgave]
> b) Sett opp sannsynlighetsfordelingen til $Y$.
> c) Bestem $P(Y>10)$.

## Fasit

a) $\mu=6, \sigma=5{,}5$
b) Se LF
c) $\frac{7}{16}$

## Løsningsforslag

### 1-5a
Siden det kun er tre typer kuler så må sannsynligheten for å trekke en kule som veier 10 kg være 

$$
P(\text{10 kg})=1-\frac{1}{4}-\frac{1}{2}=\frac{1}{4}
$$

Forventningsverdien er summen av produktene av sannsynlighet $\times$ verdi. Altså:

$$
E(X)=\frac{1}{4} \cdot 4 + \frac{1}{2}\cdot 5 + \frac{1}{4} \cdot 10=\frac{2}{2}+\frac{5}{2}+\frac{5}{2} =\frac{12}{2}=6
$$

For å finne variansen må vi finne differansen til gjennomsnittet for hver verdi, kvadrere denne differansen og multiplisere den med sannsynligheten for observasjonsverdien.

| $x$ | $E(x)-x$ | $P(X=x)$      | $(E(x)-x)^{2}\cdot P(X=x)$            |
| --- | -------- | ------------- | ------------------------------------- |
| 4   | 2        | $\frac{1}{4}$ | $2^{2}\cdot \frac{1}{4}=1$            |
| 5   | 1        | $\frac{1}{2}$ | $1^{2}\cdot \frac{1}{2}= \frac{1}{2}$ |
| 10  | 4        | $\frac{1}{4}$ | $4^{2}\cdot \frac{1}{4}=4$            |
| Sum |          |               | 5,5                                   |

**Jeg har vist at forventningsverdien er 6 kg og at variansen er 5,5 kg.**

### 1-5b

![Valgtre til oppgave 1-5](/img/user/_resources/mermaid-diagram-2025-11-26-182719.png)

Se valgtreet over. Jeg ser at utfallene for $Y=X_{1}+X_{2}$ er 8, 9, 10, 14, 15 og 20. Jeg bruker valgtreet til å beregne sannsynligheten for hvert utfall

| $y$ |                      $P(Y=y)$                       |
| :-: | :-------------------------------------------------: |
|  8  |     $\frac{1}{4}\cdot \frac{1}{4}=\frac{1}{16}$     |
|  9  |  $\frac{1}{4}\cdot \frac{1}{2}\cdot 2=\frac{1}{4}$  |
| 10  |     $\frac{1}{2} \cdot \frac{1}{2}=\frac{1}{4}$     |
| 14  | $\frac{1}{4} \cdot \frac{1}{4} \cdot 2=\frac{1}{8}$ |
| 15  |  $\frac{1}{4}\cdot \frac{1}{2}\cdot 2=\frac{1}{4}$  |
| 20  |   $\frac{1}{4} \cdot \frac{1}{4} = \frac{1}{16}$    |

### 1-5c
$P(Y>10)$ betyr sannsynligheten for at $Y$ er større 10. Det stemmer når $Y=14$, $Y=15$ og $Y=20$.

$$
P(Y>10)=P(Y=14)+P(Y=15)+P(Y=20)=\frac{1}{8}+\frac{1}{4}+\frac{1}{16}=\frac{2+4+1}{16}=\underline{\underline{\frac{7}{16}}}
$$

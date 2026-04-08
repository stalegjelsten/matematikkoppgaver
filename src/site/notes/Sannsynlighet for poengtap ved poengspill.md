---
{"tags":["oppgave"],"date":"2025-11-22","modified":"2026-01-16","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","varians","forventningsverdi","diskrete sannsynlighetsfordelinger"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Sannsynlighet for poengtap ved poengspill","source":null,"todo":null,"status":3,"dg-permalink":"/sannsynlighet-for-poengtap-ved-poengspill/","permalink":"/sannsynlighet-for-poengtap-ved-poengspill/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-22","modified":"2026-01-16","aliases":[],"temaer":["sannsynlighet","varians","forventningsverdi","diskrete sannsynlighetsfordelinger"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Sannsynlighet for poengtap ved poengspill","source":null,"todo":null,"status":3}}
---


# Sannsynlighet for poengtap ved poengspill

I et spill kan du få poeng ved å kaste en terning med fire sider. De fire sidene har ulik farge. Den ene siden er gul, den andre grønn, den tredje rød og den fjerde blå.

- Gul side gir ingen poeng.
- Grønn side gir ett poeng.
- Blå side gir to poeng.
- Rød side gir tre poeng.

Du starter med 10 poeng, og hvert kast koster 2 poeng.

La $x$ være endringen i poeng for hvert kast, det vil si poengene fra kastet fratrukket de to poengene kastet koster.

>[!oppgave]
>a) Skriv av tabellen under og fyll inn det som mangler

Table: {.tall}

|   $x$    | $\Box$ |     $-1$      | $\Box$ | $\Box$ |
| :------: | :-------: | :-----------: | :-------: | :-------: |
| $P(X=x)$ | $\Box$ | $\frac{1}{4}$ | $\Box$ | $\Box$ |

>[!oppgave]
> b) Bestem $\text{E}(X)$. Hva forteller dette svaret?

>[!oppgave]
> c) Bestem $\text{Var}(X)$.

## Fasit

a)
b) -0,5. Du taper 0,5 poeng i snitt per omgang ved å spille over lengre tid.
c) 1,25

## Løsningsforslag

### 1-4a

Jeg forutsetter at sannsynligheten er lik for alle fire sidene av terningen.

| Farge    |  Gul     |   Grønn   |   Blå |  Rød  |
| :-----: | :--: | :--: | :--: | :--: |
| $x$                                | $\textcolor{orange}{-2}$          | $\textcolor{seagreen}{-1}$        | $\textcolor{steelblue}{0}$       | $\textcolor{tomato}{1}$          |
| $P(X=x)$                           | $\textcolor{orange}{\frac{1}{4}}$ | $\textcolor{seagreen}{\frac{1}{4}}$ | $\textcolor{steelblue}{\frac{1}{4}}$ | $\textcolor{tomato}{\frac{1}{4}}$ |
| $x \cdot P(X=x)$                   | $\textcolor{orange}{-\frac{2}{4}}$ | $\textcolor{seagreen}{-\frac{1}{4}}$ | $\textcolor{steelblue}{0}$        | $\textcolor{tomato}{\frac{1}{4}}$ |
| $(x-\text{E}(x))^{2}$              | $\textcolor{orange}{\left( -\frac{3}{2} \right)^{2}}$ | $\textcolor{seagreen}{\left( -\frac{1}{2} \right)^{2}}$ | $\textcolor{steelblue}{\left( \frac{1}{2} \right)^{2}}$ | $\textcolor{tomato}{\left( \frac{3}{2} \right)^{2}}$ |
| $(x-\text{E}(X))^{2} \cdot P(X=x)$ | $\textcolor{orange}{\frac{9}{16}}$ | $\textcolor{seagreen}{\frac{1}{16}}$ | $\textcolor{steelblue}{\frac{1}{16}}$ | $\textcolor{tomato}{\frac{9}{16}}$ |

### 1-4b
$$
\text{E}(X)=\sum x \cdot P(X=x)=\textcolor{orange}{-\frac{2}{4}}+ \textcolor{seagreen}{\left( -\frac{1}{4} \right)} + \textcolor{steelblue}{0} + \textcolor{tomato}{\frac{1}{4}}=-\frac{2}{4}=-\frac{1}{2}
$$
**$\underline{\underline{\text{E}(X)=-\frac{1}{2}}}$. Det betyr at en spiller i gjennomsnitt vil tape 0,5 poeng per gang hen spiller i det lange løp.**

### 1-4c
$$\text{Var}(X)=\sum (x-\text{E}(X))^{2} \cdot P(X=x)$$
Jeg har regnet ut hvert kvadratavvik i tabellen over.
$$
\text{Var}(X)=\textcolor{orange}{\frac{9}{16}}+\textcolor{seagreen}{\frac{1}{16}}+\textcolor{steelblue}{\frac{1}{16}}+\textcolor{tomato}{\frac{9}{16}}=\frac{20}{16}=\frac{5}{4}
$$
**Variansen $\underline{\underline{\text{Var}(X)=\frac{5}{4}}}$.**

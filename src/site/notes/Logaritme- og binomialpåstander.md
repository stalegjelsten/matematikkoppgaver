---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/logaritme-og-binomialpastander/","dg-publish":true,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":2}],"poeng":4,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["logaritmer","kombinatorikk","argumentasjon"],"title":"Logaritme- og binomialpåstander","todo":[],"permalink":"/logaritme-og-binomialpastander/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":2}],"poeng":4,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["logaritmer","kombinatorikk","argumentasjon"],"title":"Logaritme- og binomialpåstander","todo":[]}}
---


# Logaritme- og binomialpåstander

Avgjør om hver av påstandene nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:**  
>
> $$\text{Når } x > 0 \text{, er } e^{k \cdot \ln(x)}=x^{k}$$
>b) **Påstand:**  
>
>$$\text{Når } 1 < a < \dfrac{b}{2} \text{, er } \binom{b}{a+1} > \binom{b}{a}$$

## Fasit

a) **Sann**
b) **Usann**

## Løsningsforslag

### a

Vi skal avgjøre om $e^{k \cdot \ln(x)} = x^k$ for $x > 0$.

**Bevis med logaritmeregler:**

Vi bruker logaritmeregelen $k \cdot \ln(x) = \ln(x^k)$:

$$e^{k \cdot \ln(x)} = e^{\ln(x^k)} = x^k$$

Det siste steget bruker at $e^{\ln(u)} = u$ for $u > 0$.

**Alternativt bevis med potensregler:**

$$e^{k \cdot \ln(x)} = \left(e^{\ln(x)}\right)^k = x^k$$

Her brukes potensregelen $(a^m)^n = a^{mn}$ og $e^{\ln(x)} = x$.

**Påstanden er $\underline{\underline{\text{sann}}}$.**

### b

Vi skal avgjøre om $\binom{b}{a+1} > \binom{b}{a}$ når $1 < a < \dfrac{b}{2}$.

**Analyse av forholdet:**

Vi beregner forholdet mellom de to binomialkoeffisientene:

$$\frac{\binom{b}{a+1}}{\binom{b}{a}} = \frac{\dfrac{b!}{(a+1)!\,(b-a-1)!}}{\dfrac{b!}{a!\,(b-a)!}} = \frac{b!\cdot a!\cdot (b-a)!}{(a+1)!\cdot (b-a-1)!\cdot b!} = \frac{b-a}{a+1}$$

Påstanden sier at $\binom{b}{a+1} > \binom{b}{a}$, dvs. at forholdet er strengt større enn 1:

$$\frac{b-a}{a+1} > 1 \iff b - a > a + 1 \iff b > 2a + 1 \iff a < \frac{b-1}{2}$$

Så påstanden holder bare når $a < \dfrac{b-1}{2}$, men betingelsen i oppgaven er den svakere $a < \dfrac{b}{2}$.

**Motbevis:**

La $b = 5$ og $a = 2$. Da er $1 < 2 < \dfrac{5}{2} = 2{,}5$, så betingelsen er oppfylt.

$$\binom{5}{3} = 10 \qquad \text{og} \qquad \binom{5}{2} = 10$$

Her er $\binom{5}{3} = \binom{5}{2}$, altså ikke strengt større. Påstanden er motbevist.

**Påstanden er $\underline{\underline{\text{usann}}}$.**

---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"dg-publish":true,"temaer":["kontinuitet","derivasjon","delt forskrift","funksjoner","funksjonsdrøfting"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":2}],"poeng":null,"title":"Stykkevis funksjon med parameter k","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Forklare kontinuitet for alle $k$, finne $k$ som gir deriverbarhet i $x=k$, og bestemme for hvilke $k$ funksjonen har en omvendt.","source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/stykkevis-funksjon-med-parameter-k/","permalink":"/stykkevis-funksjon-med-parameter-k/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"temaer":["kontinuitet","derivasjon","delt forskrift","funksjoner","funksjonsdrøfting"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":2}],"poeng":null,"title":"Stykkevis funksjon med parameter k","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Forklare kontinuitet for alle $k$, finne $k$ som gir deriverbarhet i $x=k$, og bestemme for hvilke $k$ funksjonen har en omvendt.","source":null,"lf-source-claude":true,"todo":null}}
---


# Stykkevis funksjon med parameter k

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} -x^2 + (2+k)x\text{,} & x < k \\ x^2 + (2-k)x\text{,} \quad  & x \geq k \end{cases}$$

der $k \in \mathbb{R}$.

>[!oppgave]
>a) Forklar at $f$ er en kontinuerlig funksjon for alle verdier av $k$.
>b) Bestem $k$ slik at $f$ blir deriverbar i $x = k$.
>c) For hvilke verdier av $k$ har $f$ en omvendt funksjon?

## Fasit

a) $f$ er kontinuerlig for alle $k \in \mathbb{R}$.
b) $\underline{\underline{k = 0}}$
c) $\underline{\underline{k \in [-2,\, 2]}}$

## Løsningsforslag

![GeoGebra CAS-utregning for oppgave 2](/img/user/_resources/r1-h23-2-2.png)

### a

Hvert av uttrykkene $-x^2 + (2+k)x$ og $x^2 + (2-k)x$ er polynomer, og polynomer er kontinuerlige overalt. Det eneste stedet vi må sjekke kontinuitet spesielt er i bruddpunktet $x = k$.

$f$ er kontinuerlig i $x = k$ hvis og bare hvis

$$\lim_{x \to k^-} f(x) = \lim_{x \to k^+} f(x) = f(k)$$

Vi beregner grenseverdiene:

$$\lim_{x \to k^-} f(x) = -k^2 + (2+k)k = -k^2 + 2k + k^2 = 2k$$

$$\lim_{x \to k^+} f(x) = k^2 + (2-k)k = k^2 + 2k - k^2 = 2k$$

$$f(k) = k^2 + (2-k)k = 2k$$

Alle tre er lik $2k$ for alle verdier av $k$. Dermed er $f$ kontinuerlig i $x = k$ for alle $k \in \mathbb{R}$, og siden hvert deluttrykk er et polynom, er **$f$ kontinuerlig for alle $k$**.

### b

For at $f$ skal være deriverbar i $x = k$ må venstre- og høyrederiverte være like.

Vi deriverer hvert deluttrykk:

$$f_1'(x) = -2x + (2+k) \quad \Rightarrow \quad f_1'(k) = -2k + 2 + k = 2 - k$$

$$f_2'(x) = 2x + (2-k) \quad \Rightarrow \quad f_2'(k) = 2k + 2 - k = 2 + k$$

Vi setter venstre- og høyrederiverte like (se linje 10 i CAS-utklippet):

$$2 - k = 2 + k \implies -2k = 0 \implies \textbf{$\underline{\underline{k = 0}}$}$$

### c

$f$ har en omvendt funksjon hvis og bare hvis $f$ er strengt monoton (enten strengt voksende eller strengt avtagende) på hele $\mathbb{R}$.

**Strengt avtagende** er ikke mulig: $f_1(x) = -x^2 + (2+k)x$ er en nedovervendt parabel med toppunkt i $x = \frac{2+k}{2}$. For $x < k$ og $k < \frac{2+k}{2}$ (dvs. $k < 2$) er $f_1$ voksende i deler av $(-\infty, k)$, og for $k \geq 2$ er toppunktet utenfor $(-\infty, k)$, men da er $f_2$ oppovervendt og voksende på $[k, \infty)$. En strengt avtagende $f$ er dermed ikke mulig for noe $k$.

**Strengt voksende** krever to ting:

1. $f_1$ må være voksende på hele $(-\infty, k)$: $f_1$ er voksende til venstre for toppunktet $x = \frac{2+k}{2}$, så vi trenger

   $$\frac{2+k}{2} \geq k \implies 2 + k \geq 2k \implies k \leq 2$$

2. $f_2$ må være voksende på hele $[k, \infty)$: $f_2$ er en oppovervendt parabel med bunnpunkt i $x = \frac{k-2}{2}$, og er voksende til høyre for bunnpunktet, så vi trenger

   $$\frac{k-2}{2} \leq k \implies k - 2 \leq 2k \implies k \geq -2$$

Kontinuiteten i $x=k$ er allerede sikret (vist i a), så det er tilstrekkelig at begge delene er voksende.

**$f$ har omvendt funksjon for $\underline{\underline{k \in [-2,\, 2]}}$.**

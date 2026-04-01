---
{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"dg-publish":true,"temaer":["hypotesetest"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Hypotesetester om komponenter som er defekte","source":null,"todo":null,"status":3,"permalink":"/hypotesetester-om-komponenter-som-er-defekte/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"temaer":["hypotesetest"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Hypotesetester om komponenter som er defekte","source":null,"todo":null,"status":3,"permalink":"/hypotesetester-om-komponenter-som-er-defekte/"}}
---


# Hypotesetester om komponenter som er defekte


En bedrift har en maskin som lager elektroniske komponenter. Firmaet MASK, som leverte maskinen til bedriften, oppgir at andelen feilproduserte komponenter vil være 1 % eller mindre.

Bedriften tester maskinen ved å lage 20 komponenter. Det viser seg at det er feil på én komponent. Bedriften klager til MASK og påstår at maskinen lager en høyere andel feilproduserte komponenter enn oppgitt.

>[!oppgave]
> a) Bruk hypotesetesting og argumenter for om klagen er velbegrunnet.

MASK sender en kontrollør til bedriften. Kontrolløren tester mange komponenter fra maskinen og finner også feil på én komponent. Kontrolløren påstår at med det antallet komponenter han har testet, så er det mer enn 95 % sannsynlighet for at andelen feilproduserte komponenter er 1 % eller mindre.

>[!oppgave]
> b) Hva er det minste antallet komponenter kontrolløren kan ha testet for å påstå dette?

## Fasit

a) Klagen er ikke velbegrunnet. 
b) ??

## Løsningsforslag

### 2-3a
Vi lar $p$ være sannsynligheten for at en tilfeldig valgt komponent er defekt. Bedriften som klager påstår at $p>0{,}01$. Hypotesene våre er
$$
\begin{aligned}
H_{0}: \quad p\leq 0{,}01\\
H_{A}: \quad p > 0{,}01
\end{aligned}
$$

![Binomisk hypotesetest til oppgave 3a del 2](/img/user/_resources/s2-h25-2-3a-binomisk.png){width=60%}

Vi lar $X$ være antallet defekte komponenter når vi produserer 20 komponenter gitt at nullhypotesen vår er sann. Fra sannsynlighetsvinduet i GeoGebra har vi at
$$
P(X\geq 1)=0{,}1821
$$
Sannsynligheten for å finne 1 eller flere defekte komponenter gitt at nullhypotesen er sann er omtrent $18{,}21 \,\%$.

**$p$-verdien er $0{,}1821$. Det er ikke grunnlag for forkaste nullhypotesen om at andelen er 1 % eller lavere. Klagen fra bedriften er ikke velbegrunnet.**

### 2-3b

>[!danger] Usikker løsning
>
>Jeg klarer ikke forstå hva oppgaven spør etter. Jeg er ikke sikker på at dette er riktig løsning.

Nullhypotesen er fremdeles  $H_{0}: \; p\leq 0{,}01$. 

Kontrolløren har kontrollert $n$ komponenter. Det skal maksimalt være 5 % sannsynlighet for at han «var så heldig» at han bare fant 0 eller 1 defekt komponent. Vi skal altså finne den minste verdi for $n$ som gjør at $P(X\leq 1)<0{,}05$, gitt at $p=0{,}01$.

![Binomisk hypotesetest til oppgave 3b del 2](/img/user/_resources/s2-h25-2-3b.png){width=60%}

Ved å endre på $n$ finner jeg fort ut at

- Ved $n=472$ så er $P(X\leq 1)=0{,}0502$
- Ved $n=473$ så er $P(X\leq 1)=0{,}0498$

Hvis kontrolløren kontrollerte 473 komponenter, så er sannsynligheten for å kun finne 0 eller 1 defekte komponenter 4,98 %. 
 
**Kontrolløren må minst ha kontrollert 473 komponenter.**

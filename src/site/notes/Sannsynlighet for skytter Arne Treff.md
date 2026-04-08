---
{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"v25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"poeng":5,"title":"Sannsynlighet for skytter Arne Treff","status":0,"source":null,"todo":null,"dg-permalink":"/sannsynlighet-for-skytter-arne-treff/","lf-source-claude":true,"permalink":"/sannsynlighet-for-skytter-arne-treff/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"temaer":["sannsynlighet","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"v25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"poeng":5,"title":"Sannsynlighet for skytter Arne Treff","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sannsynlighet for skytter Arne Treff

Skiskytter Arne Treff skal skyte en serie på tre skudd. Det har tidligere vist seg at Arne treffer på 80 % av skuddene sine. Vi antar at alle skuddene er uavhengige av hverandre.

>[!oppgave]
>a) Bestem sannsynligheten for at Arne treffer på begge de to første skuddene.
>b) Bestem sannsynligheten for at Arne treffer på nøyaktig to av de tre skuddene.
>c) Bestem sannsynligheten for at Arne treffer på høyst ett av de tre skuddene.

## Fasit

a) $0{,}64$
b) $0{,}384$
c) $0{,}104$

## Løsningsforslag

La $p = 0{,}8$ være sannsynligheten for treff og $q = 1 - p = 0{,}2$ sannsynligheten for bom.

### a

Skuddene er uavhengige, så vi ganger sannsynlighetene:

$$P(\text{treff på begge de to første}) = p \cdot p = 0{,}8 \cdot 0{,}8 = \underline{\underline{0{,}64}}$$

### b

Arne treffer på nøyaktig to av tre skudd. Det betyr at han bommer på nøyaktig ett skudd. Det er $\binom{3}{2} = 3$ måter å velge hvilke to skudd som er treff.

$$P(X = 2) = \binom{3}{2} \cdot p^2 \cdot q^1 = 3 \cdot 0{,}8^2 \cdot 0{,}2 = 3 \cdot 0{,}64 \cdot 0{,}2 = \underline{\underline{0{,}384}}$$

### c

Høyst ett treff betyr $X = 0$ eller $X = 1$.

$$P(X = 0) = \binom{3}{0} \cdot 0{,}8^0 \cdot 0{,}2^3 = 0{,}008$$

$$P(X = 1) = \binom{3}{1} \cdot 0{,}8^1 \cdot 0{,}2^2 = 3 \cdot 0{,}8 \cdot 0{,}04 = 0{,}096$$

$$P(X \leq 1) = 0{,}008 + 0{,}096 = \underline{\underline{0{,}104}}$$

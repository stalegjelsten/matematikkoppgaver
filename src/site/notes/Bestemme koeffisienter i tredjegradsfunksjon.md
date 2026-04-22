---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","likningssystem"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":4,"title":"Bestemme koeffisienter i tredjegradsfunksjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/bestemme-koeffisienter-i-tredjegradsfunksjon/","permalink":"/bestemme-koeffisienter-i-tredjegradsfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["funksjonsdrøfting","likningssystem"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"poeng":4,"title":"Bestemme koeffisienter i tredjegradsfunksjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Bestemme koeffisienter i tredjegradsfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = ax^3 + bx^2 + cx$$

Om grafen til $f$ får du vite at

- den går gjennom punktet $(1, 6)$
- den går gjennom punktet $(-1, 2)$
- den har et toppunkt med $x$-koordinat lik 3

>[!oppgave]
>a) Bruk disse opplysningene til å sette opp et likningssystem som du kan bruke til å bestemme $a$, $b$ og $c$.
>b) Løs likningssystemet.

## Fasit

a) Se løsningsforslag
b) $a = -1$, $b = 4$, $c = 3$

## Løsningsforslag

### a

Vi har $f(x) = ax^3 + bx^2 + cx$ og $f'(x) = 3ax^2 + 2bx + c$.

**Punkt $(1, 6)$:**

$$f(1) = a + b + c = 6 \quad \text{(I)}$$

**Punkt $(-1, 2)$:**

$$f(-1) = -a + b - c = 2 \quad \text{(II)}$$

**Toppunkt med $x = 3$** betyr $f'(3) = 0$:

$$f'(3) = 27a + 6b + c = 0 \quad \text{(III)}$$

### b

Vi legger sammen (I) og (II):

$$(a + b + c) + (-a + b - c) = 6 + 2 \quad \Rightarrow \quad 2b = 8 \quad \Rightarrow \quad b = 4$$

Vi setter $b = 4$ inn i (I): $a + c = 2$ , altså $c = 2 - a$ (IV).

Vi setter $b = 4$ og (IV) inn i (III):

$$27a + 24 + (2 - a) = 0 \quad \Rightarrow \quad 26a + 26 = 0 \quad \Rightarrow \quad a = -1$$

Fra (IV): $c = 2 - (-1) = 3$.

$$\underline{\underline{a = -1, \quad b = 4, \quad c = 3}}$$

Funksjonen er $f(x) = -x^3 + 4x^2 + 3x$.

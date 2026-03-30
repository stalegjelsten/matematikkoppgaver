---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["kontinuitet","derivasjon","funksjoner","delt forskrift"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":2}],"title":"Stykkevis funksjon og deriverbarhet","status":3,"source":null,"todo":null,"permalink":"/stykkevis-funksjon-og-deriverbarhet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["kontinuitet","derivasjon","funksjoner","delt forskrift"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":2}],"title":"Stykkevis funksjon og deriverbarhet","status":3,"source":null,"todo":null}}
---


# Stykkevis funksjon og deriverbarhet

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} ax + b & x \le -2 \\ 2x^3 + 2x^2 - 2x \quad  & -2 < x < k \\ c & x \ge k \end{cases} \quad \text{der } a, b, c \in \mathbb{R} \text{ og } k \in \langle -2, \rightarrow \rangle$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig når $x = -2$ dersom $a = 2$ og $b = -2$.
>b) Bestem $a$, $b$, $c$ og $k$ slik at $f$ er kontinuerlig og deriverbar når $x = -2$ og når $x = k$.

## Fasit

a) Ikke kontinuerlig ($f(-2) = -6$, midtdel $\to -4$)
b) $a = 14$, $b = 24$; enten $k = \tfrac{1}{3}$, $c = -\tfrac{10}{27}$ eller $k = -1$, $c = 2$

## Løsningsforslag

### 2-2a

Vi undersøker om $f$ er kontinuerlig i $x = -2$ med $a = 2$ og $b = -2$.

Venstresiden ($x \le -2$): $f(-2) = 2(-2) + (-2) = -6$

Høyresiden ($-2 < x$): $\lim_{x \to -2^+} f(x) = 2(-2)^3 + 2(-2)^2 - 2(-2) = -16 + 8 + 4 = -4$

Siden $-6 \neq -4$ er ikke grenseverdien lik funksjonsverdien, og **$f$ er ikke kontinuerlig i $x = -2$**.

### 2-2b

**Kontinuitet og deriverbarhet i $x = -2$:**

Middeldelen i $x = -2$ gir (som beregnet ovenfor):

$$\lim_{x \to -2^+} f(x) = 2(-2)^3 + 2(-2)^2 - 2(-2) = -4$$

Venstresiden: $f(-2) = -2a + b$.

Krav om kontinuitet: $-2a + b = -4$ … (1)

For deriverbarhet: middeldelen har $f'(x) = 6x^2 + 4x - 2$, som gir $f'(-2) = 6 \cdot 4 + 4 \cdot (-2) - 2 = 14$. Venstresiden har $f'(x) = a$.

Krav om deriverbarhet: $a = 14$ … (2)

Fra (1) og (2): $-2 \cdot 14 + b = -4 \implies b = 24$.

**Kontinuitet og deriverbarhet i $x = k$:**

Middeldelen i $x = k$: $f(k) = 2k^3 + 2k^2 - 2k$, og høyresiden er konstanten $c$.

Krav om kontinuitet: $c = 2k^3 + 2k^2 - 2k$ … (3)

For deriverbarhet: høyresiden har $f'(x) = 0$. Middeldelen: $f'(k) = 6k^2 + 4k - 2$.

Krav om deriverbarhet: $6k^2 + 4k - 2 = 0 \implies 3k^2 + 2k - 1 = 0 \implies (3k-1)(k+1) = 0$

$$k = \frac{1}{3} \quad \text{eller} \quad k = -1$$

Begge verdiene er i $\langle -2, \rightarrow \rangle$. Vi beregner $c$ for begge:

- **$k = \dfrac{1}{3}$:** $c = 2 \cdot \dfrac{1}{27} + 2 \cdot \dfrac{1}{9} - 2 \cdot \dfrac{1}{3} = \dfrac{2}{27} + \dfrac{6}{27} - \dfrac{18}{27} = -\dfrac{10}{27}$

- **$k = -1$:** $c = 2(-1)^3 + 2(-1)^2 - 2(-1) = -2 + 2 + 2 = 2$

**Svar:**

$$\underline{\underline{a = 14, \quad b = 24}}$$

og enten $\underline{\underline{k = \dfrac{1}{3},\ c = -\dfrac{10}{27}}}$ eller $\underline{\underline{k = -1,\ c = 2}}$.

---

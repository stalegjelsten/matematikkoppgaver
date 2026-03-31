---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["kontinuitet","funksjoner","delt forskrift"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"title":"Stykkevis funksjon og kontinuitet","status":3,"source":null,"todo":null,"permalink":"/stykkevis-funksjon-og-kontinuitet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["kontinuitet","funksjoner","delt forskrift"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"title":"Stykkevis funksjon og kontinuitet","status":3,"source":null,"todo":null,"permalink":"/stykkevis-funksjon-og-kontinuitet/"}}
---


# Stykkevis funksjon og kontinuitet

En funksjon $f$ er gitt ved

$$f(x) = \begin{cases} 2x - 2 & x \le -2 \\ 2x^3 + 2x^2 - 4x \quad   & -2 < x < k \\ 4 & x \ge k \end{cases} \quad \text{der } k \in \langle -2, \rightarrow \rangle$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig når $x=-2$.
>b) Bestem $k$ slik at $f$ er kontinuerlig når $x=k$.

## Fasit

a) Ikke kontinuerlig (venstregrense $= -6$, høyregrense $= 0$)
b) $k = -1$, $k = -\sqrt{2}$ eller $k = \sqrt{2}$

## Løsningsforslag

### 2-2a

Vi sjekker grenser fra venstre og høyre i $x = -2$:

$$\lim_{x \to -2^-} (2x - 2) = 2(-2) - 2 = -6$$

$$\lim_{x \to -2^+} (2x^3 + 2x^2 - 4x) = 2(-8) + 2(4) - 4(-2) = -16 + 8 + 8 = 0$$

Siden $\lim_{x \to -2^-} f(x) = -6 \neq 0 = \lim_{x \to -2^+} f(x)$ eksisterer ikke grenseverdien i $x = -2$.

**$f$ er ikke kontinuerlig i $x = -2$.**

### 2-2b

For at $f$ skal være kontinuerlig i $x = k$ må:

$$\lim_{x \to k^-} (2x^3 + 2x^2 - 4x) = 4$$

$$2k^3 + 2k^2 - 4k = 4$$

$$k^3 + k^2 - 2k - 2 = 0$$

Vi faktoriserer:

$$k^2(k+1) - 2(k+1) = (k^2-2)(k+1) = 0$$

$$k = \sqrt{2}, \quad k = -\sqrt{2}, \quad k = -1$$

Alle tre verdiene er større enn $-2$ og dermed i gyldighetsområdet $k \in \langle -2, \rightarrow \rangle$.

**$\underline{\underline{k = \sqrt{2}}}$, $\underline{\underline{k = -\sqrt{2}}}$ eller $\underline{\underline{k = -1}}$**

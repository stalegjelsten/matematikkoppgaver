---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["grenseverdi","kontinuitet"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":3}],"title":"Grenseverdier","status":3,"source":null,"todo":null,"dg-permalink":"/grenseverdier/","permalink":"/grenseverdier/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["grenseverdi","kontinuitet"],"fag":["r1"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r1","del":1,"oppgave":3}],"title":"Grenseverdier","status":3,"source":null,"todo":null}}
---


# Grenseverdier

>[!oppgave]
>a) Bestem grenseverdien dersom den eksisterer:
>$$\lim_{x \to -2} \frac{x^2 - 4x + 2}{x^2 - 2x - 8}$$
>
>b)
>    1) Bestem $a$ slik at grenseverdien eksisterer:
>    $$\lim_{x \to -2} \frac{x^2 + ax + 2}{x^2 - 2x - 8}$$
>    2) Bestem grenseverdien for denne verdien av $a$.

## Fasit

a) Grenseverdien eksisterer ikke
b) $a = 3$, grenseverdi $= \dfrac{1}{6}$

## Løsningsforslag

### 1-3a

Vi faktoriserer nevneren: $x^2 - 2x - 8 = (x-4)(x+2)$.

Nevneren går mot 0 når $x \to -2$, mens telleren gir

$$
(-2)^2 - 4(-2) + 2 = 4 + 8 + 2 = 14 \neq 0
$$

Siden teller $\to 14$ og nevner $\to 0$, eksisterer **ikke** grenseverdien.

### 1-3b

**Del 1 – bestemme $a$:**

For at grenseverdien skal eksistere, må telleren også gå mot 0 når $x \to -2$ (siden nevneren gjør det). Vi krever

$$
(-2)^2 + a(-2) + 2 = 0 \implies 4 - 2a + 2 = 0 \implies a = 3
$$

**$\underline{\underline{a = 3}}$**

**Del 2 – beregne grenseverdien:**

Med $a = 3$: teller $= x^2 + 3x + 2 = (x+1)(x+2)$.

$$
\lim_{x \to -2} \frac{(x+1)(x+2)}{(x-4)(x+2)} = \lim_{x \to -2} \frac{x+1}{x-4} = \frac{-2+1}{-2-4} = \frac{-1}{-6} = \frac{1}{6}
$$

**Grenseverdien er $\underline{\underline{\dfrac{1}{6}}}$.**

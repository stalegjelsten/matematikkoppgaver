---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["grenseverdi","kontinuitet"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":3}],"title":"Grenseverdier og eksistens","status":3,"source":null,"todo":null,"permalink":"/grenseverdier-og-eksistens/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["grenseverdi","kontinuitet"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":3}],"title":"Grenseverdier og eksistens","status":3,"source":null,"todo":null}}
---


# Grenseverdier og eksistens

>[!oppgave]
>a) Bestem grenseverdien dersom den eksisterer:
>
>$$\lim_{x \to -2} \frac{x^2 - 4x + 2}{x^2 - 2x - 8}$$
>
>b)
>    1) Bestem $a$ slik at grenseverdien eksisterer:
>    
>    $$\lim_{x \to -2} \frac{x^2 + ax + 2}{x^2 - 2x - 8}$$
>    
>    2) Bestem grenseverdien for denne verdien av $a$.

## Fasit

a) Grenseverdien eksisterer ikke
b) $a = 3$, grenseverdi $= \dfrac{1}{6}$

## Løsningsforslag

### 1-3a

Vi sjekker nevneren i $x = -2$:

$$x^2 - 2x - 8 = (x-4)(x+2) \implies \text{nevner} = 0 \text{ når } x = -2$$

Telleren i $x = -2$:

$$(-2)^2 - 4 \cdot (-2) + 2 = 4 + 8 + 2 = 14 \neq 0$$

Siden nevneren er $0$ og telleren er $\neq 0$ i $x = -2$, **eksisterer ikke grenseverdien**.

### 1-3b

**Del 1 – bestem $a$:**

For at grenseverdien skal eksistere, må telleren også være $0$ i $x = -2$:

$$(-2)^2 + a \cdot (-2) + 2 = 0 \implies 6 - 2a = 0 \implies \underline{\underline{a = 3}}$$

**Del 2 – bestem grenseverdien:**

Med $a = 3$ faktoriserer vi teller og nevner:

$$\frac{x^2 + 3x + 2}{x^2 - 2x - 8} = \frac{(x+1)(x+2)}{(x-4)(x+2)}$$

Kansellerer $(x+2)$ (vi ser bort fra $x = -2$ siden vi tar grenseverdi):

$$\lim_{x \to -2} \frac{(x+1)\cancel{(x+2)}}{(x-4)\cancel{(x+2)}} = \frac{-2+1}{-2-4} = \frac{-1}{-6}$$

**Grenseverdien er $\underline{\underline{\dfrac{1}{6}}}$.**

---
{"aliases":[],"date":"2023-11-14","del":1,"dg-permalink":"/kontinuerlig-stykkevis-funksjon/","dg-publish":true,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"lf-source-claude":true,"temaer":["kontinuitet","funksjoner"],"title":"Kontinuerlig stykkevis funksjon","todo":[],"permalink":"/kontinuerlig-stykkevis-funksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-14","del":1,"eksamen":"h23","fag":["s1"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"lf-source-claude":true,"temaer":["kontinuitet","funksjoner"],"title":"Kontinuerlig stykkevis funksjon","todo":[]}}
---


# Kontinuerlig stykkevis funksjon

En funksjon $f$ er gitt ved

$$f(x) = \begin{cases}x^2 + 3x - a^2\text{,} \quad  & x < 1 \\ x - 1\text{,} & x \geq 1 \end{cases}$$

>[!oppgave]
>Bestem $a$ slik at funksjonen blir kontinuerlig.

## Fasit

**$a = 2$ eller $a = -2$**

## Løsningsforslag

For at $f$ skal være kontinuerlig i $x = 1$ må grenseverdiene fra venstre og høyre være like.

**Grenseverdi fra venstre** ($x \to 1^-$, bruker $x^2 + 3x - a^2$):

$$\lim_{x \to 1^-} f(x) = 1^2 + 3 \cdot 1 - a^2 = 4 - a^2$$

**Grenseverdi fra høyre** ($x \to 1^+$, bruker $x - 1$):

$$\lim_{x \to 1^+} f(x) = 1 - 1 = 0$$

Vi setter grenseverdiene lik hverandre:

$$4 - a^2 = 0$$

$$a^2 = 4$$

$$a = \pm 2$$

**$\underline{\underline{a = 2 \text{ eller } a = -2}}$**
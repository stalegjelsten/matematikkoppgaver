---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["trigonometri","likninger"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":4}],"title":"Trigonometriske likninger og antall løsninger","status":3,"source":null,"todo":null,"permalink":"/trigonometriske-likninger-og-antall-losninger/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["trigonometri","likninger"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":4}],"title":"Trigonometriske likninger og antall løsninger","status":3,"source":null,"todo":null}}
---


# Trigonometriske likninger og antall løsninger

>[!oppgave]
>a) Løs likningen
>
>$$\sin x - \sqrt{3}\cos x = 0 \quad , \quad x \in \left[0, 2\pi \right\rangle$$

Ta utgangspunkt i likningen

$$\left(\sin x - \frac{1}{2}\right)\left(\sin x - a\right) = 0 \quad , \quad x \in \left[0, 2\pi\right\rangle \text{ og } a \in \mathbb{R}$$

>[!oppgave]
>b) For hvilke verdier av $a$ har likningen henholdsvis to, tre og fire løsninger?

## Fasit

a) $x = \dfrac{\pi}{3}$ og $x = \dfrac{4\pi}{3}$
b) To løsninger: $|a|>1$ eller $a=\dfrac{1}{2}$; tre løsninger: $a=\pm 1$; fire løsninger: $-1<a<1$ og $a \neq \dfrac{1}{2}$

## Løsningsforslag

### 1-4a

$$
\sin x - \sqrt{3}\cos x = 0 \implies \sin x = \sqrt{3}\cos x \implies \tan x = \sqrt{3}
$$

$$x = \frac{\pi}{3} + n\pi, \quad n \in \mathbb{Z}$$

I intervallet $[0, 2\pi)$:

**$\underline{\underline{x = \dfrac{\pi}{3}}}$ og $\underline{\underline{x = \dfrac{4\pi}{3}}}$**

### 1-4b

Likningen $\left(\sin x - \dfrac{1}{2}\right)\left(\sin x - a\right) = 0$ gir

$$\sin x = \frac{1}{2} \quad \text{eller} \quad \sin x = a$$

$\sin x = \dfrac{1}{2}$ har to løsninger i $[0, 2\pi)$: $x = \dfrac{\pi}{6}$ og $x = \dfrac{5\pi}{6}$.

$\sin x = a$ kan ha $0$, $1$ eller $2$ løsninger avhengig av $a$, og eventuelt de samme som $\sin x = \dfrac{1}{2}$.

**To løsninger:**

- $|a| > 1$: $\sin x = a$ har ingen løsninger. Totalt 2 løsninger fra $\sin x = \dfrac{1}{2}$.
- $a = \dfrac{1}{2}$: Begge faktorer gir samme to løsninger. Totalt 2 løsninger.

**Tre løsninger:**

- $a = 1$: $\sin x = 1$ gir $x = \dfrac{\pi}{2}$ (én ny løsning). Totalt 3 løsninger.
- $a = -1$: $\sin x = -1$ gir $x = \dfrac{3\pi}{2}$ (én ny løsning). Totalt 3 løsninger.

**Fire løsninger:**

- $-1 < a < 1$ og $a \neq \dfrac{1}{2}$: $\sin x = a$ gir to nye løsninger (ulike fra $\dfrac{\pi}{6}$ og $\dfrac{5\pi}{6}$). Totalt 4 løsninger.

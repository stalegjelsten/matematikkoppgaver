---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjoner","logaritmer"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"title":"Topp- og bunnpunkter med ln","status":3,"source":null,"todo":null,"permalink":"/topp-og-bunnpunkter-med-ln/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjoner","logaritmer"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":5}],"title":"Topp- og bunnpunkter med ln","status":3,"source":null,"todo":null,"permalink":"/topp-og-bunnpunkter-med-ln/"}}
---


# Topp- og bunnpunkter med ln

En funksjon $f$ er gitt ved

$$f(x) = 4x^2 \cdot \ln x$$

>[!oppgave]
>Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

## Fasit

Bunnpunkt: $\left(\dfrac{1}{\sqrt{e}},\ -\dfrac{2}{e}\right)$

## Løsningsforslag

Vi har $f(x) = 4x^2 \cdot \ln x$ definert for $x > 0$. Deriverer med produktregelen:

$$f'(x) = 8x \cdot \ln x + 4x^2 \cdot \frac{1}{x} = 8x\ln x + 4x = 4x(2\ln x + 1)$$

For $x > 0$ er $4x > 0$ alltid, så $f'(x) = 0$ krever:

$$2\ln x + 1 = 0 \implies \ln x = -\frac{1}{2} \implies x = e^{-1/2} = \frac{1}{\sqrt{e}}$$

**Fortegnsskjema for $f'(x)$:**

| $x$ | $0$ | | $\dfrac{1}{\sqrt{e}}$ | | $\to$ |
| :--: | :--: | :--: | :--: | :--: | :--: |
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | bunn | $\nearrow$ | |

$f'$ skifter fortegn fra $-$ til $+$, så det er et **bunnpunkt**.

Funksjonsverdien:

$$f\left(\frac{1}{\sqrt{e}}\right) = 4 \cdot \frac{1}{e} \cdot \left(-\frac{1}{2}\right) = -\frac{2}{e}$$

**Grafen til $f$ har et bunnpunkt i $\underline{\underline{\left(\dfrac{1}{\sqrt{e}},\; -\dfrac{2}{e}\right)}}$.**

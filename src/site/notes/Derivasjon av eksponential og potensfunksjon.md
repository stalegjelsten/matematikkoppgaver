---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/derivasjon-av-eksponential-og-potensfunksjon/","dg-publish":true,"eksamen":"v25","fag":["s1","r1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":1},{"del":1,"fag":"r1","oppgave":1}],"poeng":2,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["derivasjon","eksponentialfunksjoner"],"title":"Derivasjon av eksponential og potensfunksjon","todo":[],"permalink":"/derivasjon-av-eksponential-og-potensfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["s1","r1"],"modified":"2026-03-26","oppgave":1,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":1},{"del":1,"fag":"r1","oppgave":1}],"poeng":2,"source":null,"status":1,"lf-source-claude":true,"tags":["oppgave"],"temaer":["derivasjon","eksponentialfunksjoner"],"title":"Derivasjon av eksponential og potensfunksjon","todo":[]}}
---


# Derivasjon av eksponential og potensfunksjon

>[!oppgave]
>Deriver funksjonen $f$ gitt ved
>
>$$f(x) = e^{-2x} + \frac{1}{5}x^5 - 2\pi$$

## Fasit

$\underline{\underline{f'(x) = -2e^{-2x} + x^4}}$

## Løsningsforslag

Vi deriverer ledd for ledd.

**Første ledd: $e^{-2x}$**

Vi bruker kjerneregelen med $u = -2x$ og $e^u$:

$$\left(e^{-2x}\right)' = e^{-2x} \cdot (-2x)' = e^{-2x} \cdot (-2) = -2e^{-2x}$$

**Andre ledd: $\frac{1}{5}x^5$**

Vi bruker potensregelen:

$$\left(\frac{1}{5}x^5\right)' = \frac{1}{5} \cdot 5x^4 = x^4$$

**Tredje ledd: $2\pi$**

$2\pi$ er en konstant, og den deriverte av en konstant er 0.

**Samlet:**

$$f'(x) = \textcolor{seagreen}{-2e^{-2x}} + \textcolor{steelblue}{x^4}$$
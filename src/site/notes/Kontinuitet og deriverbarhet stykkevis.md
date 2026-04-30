---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/kontinuitet-og-deriverbarhet-stykkevis/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":5}],"poeng":2,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["kontinuitet","derivasjon"],"title":"Kontinuitet og deriverbarhet stykkevis","todo":[],"permalink":"/kontinuitet-og-deriverbarhet-stykkevis/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":5}],"poeng":2,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["kontinuitet","derivasjon"],"title":"Kontinuitet og deriverbarhet stykkevis","todo":[]}}
---


# Kontinuitet og deriverbarhet stykkevis

Funksjonen $f$ er gitt ved

$$f(x) = \begin{cases} x^2 + 2\text{,} \quad  & x < 0 \\ 2e^x\text{,} & x \ge 0 \end{cases}$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig i $x = 0$.
>b) Avgjør om $f$ er deriverbar i $x = 0$.

## Fasit

a) $f$ er **kontinuerlig** i $x = 0$.

b) $f$ er **ikke deriverbar** i $x = 0$.

## Løsningsforslag

### a

Vi skal avgjøre om $f$ er kontinuerlig i $x = 0$. Vi undersøker venstregrensen, funksjonsverdien og høyregrensen.

**Venstregrensen** ($x \to 0^-$, dvs. $f(x) = x^2 + 2$):

$$\lim_{x \to 0^-} f(x) = 0^2 + 2 = 2$$

**Funksjonsverdien** (siden $x = 0$ gir $f(x) = 2e^x$):

$$f(0) = 2e^0 = 2 \cdot 1 = 2$$

**Høyregrensen** ($x \to 0^+$, dvs. $f(x) = 2e^x$):

$$\lim_{x \to 0^+} f(x) = 2e^0 = 2$$

Siden $\lim_{x \to 0^-} f(x) = f(0) = \lim_{x \to 0^+} f(x) = 2$, er $f$ **$\underline{\underline{\text{kontinuerlig i } x = 0}}$**.

### b

Vi skal avgjøre om $f$ er deriverbar i $x = 0$. Det krever at den deriverte fra venstre og høyre er like.

**Den deriverte fra venstre** bruker $f(x) = x^2 + 2$, som gir $f'(x) = 2x$:

$$\lim_{x \to 0^-} f'(x) = 2 \cdot 0 = 0$$

**Den deriverte fra høyre** bruker $f(x) = 2e^x$, som gir $f'(x) = 2e^x$:

$$\lim_{x \to 0^+} f'(x) = 2e^0 = 2$$

Siden $0 \ne 2$, er de ensidige deriverte ikke like, og $f$ er **$\underline{\underline{\text{ikke deriverbar i } x = 0}}$**.
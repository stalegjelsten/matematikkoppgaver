---
{"aliases":[],"date":"2025-05-19","del":1,"dg-permalink":"/kontinuitet-av-funksjoner-med-delt-forskrift/","dg-publish":true,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":6}],"poeng":2,"source":null,"status":0,"tags":["oppgave"],"temaer":["kontinuitet","funksjoner"],"title":"Kontinuitet av funksjoner med delt forskrift","todo":[],"permalink":"/kontinuitet-av-funksjoner-med-delt-forskrift/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":1,"eksamen":"v25","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":6}],"poeng":2,"source":null,"status":0,"tags":["oppgave"],"temaer":["kontinuitet","funksjoner"],"title":"Kontinuitet av funksjoner med delt forskrift","todo":[]}}
---


# Kontinuitet av funksjoner med delt forskrift

Funksjonene $f$ og $g$ er gitt ved

$$f(x) = \begin{cases} x^2 + 2\text{,} \quad  & x < 0 \\ 2e^x\text{,} & x \ge 0 \end{cases}$$

og

$$g(x) = \begin{cases} x^2 + 2\text{,} \quad  & x < 0 \\ 1\text{,} & x = 0 \\ 2e^x\text{,} & x > 0 \end{cases}$$

>[!oppgave]
>a) Avgjør om $f$ er kontinuerlig i $x = 0$.
>b) Avgjør om $g$ er kontinuerlig i $x = 0$.

## Fasit

a) $f$ er kontinuerlig i $x = 0$.
b) $g$ er **ikke** kontinuerlig i $x = 0$.

## Løsningsforslag

En funksjon $h$ er kontinuerlig i $x = a$ hvis og bare hvis

$$\lim_{x \to a^-} h(x) = \lim_{x \to a^+} h(x) = h(a)$$

Vi undersøker dette kravet i $x = 0$ for begge funksjoner.

### a

Vi beregner venstregrenseverdi, funksjonsverdi og høyregrenseverdi for $f$:

$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (x^2 + 2) = 0^2 + 2 = 2$$

$$f(0) = 2e^0 = 2 \cdot 1 = 2$$

(siden $x \ge 0$ gjelder for $x = 0$)

$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} 2e^x = 2e^0 = 2$$

Alle tre er like: $\lim_{x \to 0^-} f(x) = f(0) = \lim_{x \to 0^+} f(x) = 2$.

**$f$ er kontinuerlig i $x = 0$.**

### b

Vi beregner venstregrenseverdi, funksjonsverdi og høyregrenseverdi for $g$:

$$\lim_{x \to 0^-} g(x) = \lim_{x \to 0^-} (x^2 + 2) = 2$$

$$g(0) = 1$$

(spesifisert direkte i definisjonen)

$$\lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} 2e^x = 2$$

Grenseverdiene fra venstre og høyre er begge $2$, men $g(0) = 1 \ne 2$.

Kontinuitetskravet er ikke oppfylt.

**$g$ er ikke kontinuerlig i $x = 0$.**

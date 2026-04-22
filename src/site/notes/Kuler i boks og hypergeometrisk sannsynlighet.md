---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/kuler-i-boks-og-hypergeometrisk-sannsynlighet/","dg-publish":true,"eksamen":"v24","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","kombinatorikk"],"title":"Kuler i boks og hypergeometrisk sannsynlighet","todo":[],"permalink":"/kuler-i-boks-og-hypergeometrisk-sannsynlighet/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":4}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["sannsynlighet","kombinatorikk"],"title":"Kuler i boks og hypergeometrisk sannsynlighet","todo":[]}}
---


# Kuler i boks og hypergeometrisk sannsynlighet

I en boks ligger det et ukjent antall røde og hvite kuler. Du trekker tre kuler uten tilbakelegging.

>[!oppgave]
>Hva er det minste antallet røde kuler og hvite kuler det kan være i boksen for at sannsynligheten skal være mellom 17 % og 18 % for at alle kulene du trekker, er hvite?

## Fasit

**5 hvite og 3 røde kuler** (totalt 8 kuler). $P = \dfrac{5}{28} \approx 17{,}9 \,\%$

## Løsningsforslag

Siden kulene trekkes **uten tilbakelegging**, er dette en hypergeometrisk situasjon. La

- $m$ = antall hvite kuler
- $n$ = antall røde kuler
- $T = m + n$ = totalt antall kuler

Antall måter å trekke 3 hvite av $m$ hvite er $\binom{m}{3}$, og antall måter å trekke 3 kuler av $T$ totalt er $\binom{T}{3}$. Sannsynligheten for at alle tre er hvite blir

$$P(\text{alle hvite}) = \frac{\binom{m}{3}}{\binom{T}{3}} = \frac{m(m-1)(m-2)}{T(T-1)(T-2)}$$

Vi trenger $0{,}17 < P < 0{,}18$, og vi vil finne **minste** $T$ (færrest mulig kuler totalt).

Vi må ha $m \geq 3$ (ellers kan vi ikke trekke tre hvite). Vi prøver systematisk fra $T = 4$:

| $m$ (hvite) | $n$ (røde) | $T$ (totalt) | $P = \dfrac{\binom{m}{3}}{\binom{T}{3}}$ | Innenfor? |
|:-----------:|:----------:|:------------:|:-----------------------------------------:|:---------:|
| 3 | 1 | 4 | $\tfrac{1}{4} = 0{,}250$ | Nei |
| 3 | 2 | 5 | $\tfrac{1}{10} = 0{,}100$ | Nei |
| 4 | 1 | 5 | $\tfrac{4}{10} = 0{,}400$ | Nei |
| 3 | 3 | 6 | $\tfrac{1}{20} = 0{,}050$ | Nei |
| 4 | 2 | 6 | $\tfrac{4}{20} = 0{,}200$ | Nei |
| 5 | 1 | 6 | $\tfrac{10}{20} = 0{,}500$ | Nei |
| 3 | 4 | 7 | $\tfrac{1}{35} \approx 0{,}029$ | Nei |
| 4 | 3 | 7 | $\tfrac{4}{35} \approx 0{,}114$ | Nei |
| 5 | 2 | 7 | $\tfrac{10}{35} \approx 0{,}286$ | Nei |
| **5** | **3** | **8** | $\boldsymbol{\tfrac{10}{56} = \tfrac{5}{28} \approx 0{,}179}$ | **Ja** ✓ |

For $T = 8$, $m = 5$, $n = 3$:

$$P = \frac{5 \cdot 4 \cdot 3}{8 \cdot 7 \cdot 6} = \frac{60}{336} = \frac{5}{28} \approx 17{,}9 \,\%$$

Alle kombinasjoner med $T \leq 7$ gir $P$ utenfor intervallet $[17\,\%, 18\,\%]$, og $m=5$, $n=3$ er den første løsningen vi finner.

**Det minste antallet er $\underline{\underline{5 \text{ hvite og } 3 \text{ røde kuler}}}$**, altså 8 kuler totalt, og sannsynligheten er $\dfrac{5}{28} \approx 17{,}9 \,\%$.
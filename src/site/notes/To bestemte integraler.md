---
{"aliases":[],"date":"2023-05-24","del":1,"dg-permalink":"/to-bestemte-integraler/","dg-publish":true,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":1,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":1}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral"],"title":"To bestemte integraler","todo":[],"permalink":"/to-bestemte-integraler/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":1,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":1,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":1}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral"],"title":"To bestemte integraler","todo":[]}}
---


# To bestemte integraler

Regn ut integralene

>[!oppgave]
>a) $\int_{-1}^{1} (4x^3 - x) \, dx$
>b) $\int_{0}^{\ln 2} e^{2x} \, dx$

## Fasit

a) $\underline{\underline{0}}$

b) $\underline{\underline{\dfrac{3}{2}}}$

## Løsningsforslag

### a

Integranden $f(x) = 4x^3 - x$ er en odde funksjon, siden

$$f(-x) = 4(-x)^3 - (-x) = -4x^3 + x = -f(x)$$

Integralet av en odde funksjon over et symmetrisk intervall $[-a, a]$ er alltid null. Derfor er

$$\int_{-1}^{1} (4x^3 - x) \, \mathrm{d}x = \textbf{0}$$

Alternativt kan vi beregne direkte. En antiderivert er $F(x) = x^4 - \dfrac{x^2}{2}$, og

$$\left[ x^4 - \frac{x^2}{2} \right]_{-1}^{1} = \left(1 - \frac{1}{2}\right) - \left(1 - \frac{1}{2}\right) = \frac{1}{2} - \frac{1}{2} = \underline{\underline{0}}$$

### b

En antiderivert av $e^{2x}$ er $\dfrac{e^{2x}}{2}$. Vi får

$$\int_{0}^{\ln 2} e^{2x} \, \mathrm{d}x = \left[ \frac{e^{2x}}{2} \right]_{0}^{\ln 2} = \frac{e^{2\ln 2}}{2} - \frac{e^{0}}{2}$$

Siden $e^{2\ln 2} = e^{\ln 4} = 4$, blir dette

$$= \frac{4}{2} - \frac{1}{2} = 2 - \frac{1}{2} = \underline{\underline{\frac{3}{2}}}$$
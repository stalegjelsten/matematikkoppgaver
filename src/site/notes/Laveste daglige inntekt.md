---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["etterspørsel","optimering","økonomi"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":2,"title":"Laveste daglige inntekt","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/laveste-daglige-inntekt/","permalink":"/laveste-daglige-inntekt/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["etterspørsel","optimering","økonomi"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":2,"title":"Laveste daglige inntekt","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Laveste daglige inntekt

Dersom en bedrift selger en vare for $p$ kroner per enhet, vil den daglige etterspørselen $q$ være gitt ved

$$q(p) = \frac{10\,000}{\ln p}, \quad p \in [2, 10]$$

>[!oppgave]
>Bestem den laveste daglige inntekten bedriften kan få ved salg av denne varen.

## Fasit

$10\,000e \approx 27\,183 \, \mathrm{kr}$

## Løsningsforslag

Daglig inntekt er $I(p) = p \cdot q(p) = \dfrac{10\,000p}{\ln p}$.

Vi deriverer med brøkregelen:

$$I'(p) = 10\,000 \cdot \frac{\ln p - p \cdot \frac{1}{p}}{(\ln p)^2} = 10\,000 \cdot \frac{\ln p - 1}{(\ln p)^2}$$

Vi setter $I'(p) = 0$: $\ln p - 1 = 0 \implies p = e$.

Vi sjekker endepunktene og det stasjonære punktet:

$$I(2) = \frac{10\,000 \cdot 2}{\ln 2} \approx 28\,854 \, \mathrm{kr}$$

$$I(e) = \frac{10\,000 \cdot e}{\ln e} = 10\,000e \approx 27\,183 \, \mathrm{kr}$$

$$I(10) = \frac{10\,000 \cdot 10}{\ln 10} \approx 43\,429 \, \mathrm{kr}$$

Den laveste daglige inntekten er $\underline{\underline{10\,000e \approx 27\,183 \, \mathrm{kr}}}$, når prisen er $p = e \approx 2{,}72 \, \mathrm{kr}$.

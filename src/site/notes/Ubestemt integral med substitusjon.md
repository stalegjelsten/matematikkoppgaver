---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-03-31","aliases":[],"dg-publish":true,"temaer":["integral"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"poeng":2,"title":"Ubestemt integral med substitusjon","status":0,"source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/ubestemt-integral-med-substitusjon/","permalink":"/ubestemt-integral-med-substitusjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-03-31","aliases":[],"temaer":["integral"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"poeng":2,"title":"Ubestemt integral med substitusjon","status":0,"source":null,"lf-source-claude":true,"todo":null}}
---


# Ubestemt integral med substitusjon

>[!oppgave]
>Regn ut integralet.
>
>$$\int \sin^3(x) \cdot \cos(x) \, \mathrm{d}x$$

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-2\|Løsningsforslag R2 eksamen V2024#Oppgave 1-2]]

## Fasit

**$\underline{\underline{\dfrac{\sin^4(x)}{4} + C}}$**

## Løsningsforslag

Vi bruker substitusjonen

$$u = \sin(x) \implies \frac{\mathrm{d}u}{\mathrm{d}x} = \cos(x) \implies \mathrm{d}u = \cos(x)\,\mathrm{d}x$$

Integralet skrives om:

$$\int \sin^3(x) \cdot \cos(x)\,\mathrm{d}x = \int u^3\,\mathrm{d}u$$

Vi integrerer:

$$\int u^3\,\mathrm{d}u = \frac{u^4}{4} + C$$

Vi substituerer tilbake $u = \sin(x)$:

$$\frac{u^4}{4} + C = \mathbf{\underline{\underline{\dfrac{\sin^4(x)}{4} + C}}}$$

---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["integral"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":1,"poeng":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":1}],"title":"Ubestemt integral med delvis integrasjon","status":3,"source":null,"todo":null,"kategori":1,"vanskegrad":1,"beskrivelse":"Delvis integrasjon (DI-metoden) av $\\int 4x\\cos x\\,\\mathrm{d}x=4(x\\sin x+\\cos x)+C$.","dg-permalink":"/ubestemt-integral-med-delvis-integrasjon/","permalink":"/ubestemt-integral-med-delvis-integrasjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["integral"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":1,"poeng":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":1}],"title":"Ubestemt integral med delvis integrasjon","status":3,"source":null,"todo":null,"kategori":1,"vanskegrad":1,"beskrivelse":"Delvis integrasjon (DI-metoden) av $\\int 4x\\cos x\\,\\mathrm{d}x=4(x\\sin x+\\cos x)+C$."}}
---


# Ubestemt integral med delvis integrasjon

>[!oppgave]
>Bestem integralet
>
>$$\int 4x \cdot \cos x \, dx$$

## Fasit

$4x\sin x + 4\cos x + C$

## Løsningsforslag

Vi bruker delvis integrasjon (DI-metoden):

|     |             D              |                I                 |
| :-: | :------------------------: | :------------------------------: |
| $+$ | $\textcolor{seagreen}{4x}$ |  $\textcolor{seagreen}{\cos x}$  |
| $-$ |  $\textcolor{tomato}{4}$   |   $\textcolor{tomato}{\sin x}$   |
| $+$ |  $\textcolor{maroon}{0}$   | $\textcolor{steelblue}{-\cos x}$ |

$$
\int 4x \cdot \cos x \, \mathrm{d}x = \textcolor{seagreen}{4x}\textcolor{tomato}{\sin x} - \textcolor{tomato}{4} \textcolor{steelblue}{\left( - \cos x \right)}  + \textcolor{maroon}{0} + C=4x \sin x  + 4 \cos x +C
$$

**$$\underline{\underline{ 4(x \sin x + \cos x) + C }}$$**

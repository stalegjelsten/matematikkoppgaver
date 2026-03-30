---
{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-12-13","aliases":[],"dg-publish":true,"temaer":["integral"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"title":"Ubestemt integral S2 H2025","source":null,"todo":null,"status":3,"permalink":"/ubestemt-integral-s2-h2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-12-13","aliases":[],"temaer":["integral"],"fag":["s2"],"eksamen":"h25","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1}],"title":"Ubestemt integral S2 H2025","source":null,"todo":null,"status":3}}
---


# Ubestemt integral S2 H2025


Regn ut integralet

$$
\int e^{x} \cdot x \, \mathrm{d}x 
$$

## Fasit

$e^{x}(x-1)+C$

## Løsningsforslag

Jeg ser at integranden er produktet av to funksjoner, og jeg velger derfor å bruke delvis integrasjon med DI-metoden.

|     |  D  |    I    |
| :-: | :-: | :-: |
|  $+$  | $\textcolor{seagreen}{x}$ | $\textcolor{seagreen}{e^{x}}$ |
|  $-$  | $\textcolor{tomato}{1}$ | $\textcolor{tomato}{e^{x}}$ |
|  $+$  |  0  |         |
$$\int e^{x} \cdot x \, \mathrm{d}x = \textcolor{seagreen}{x \cdot e^{x}} - \textcolor{tomato}{1 \cdot e^{x}} + C=\underline{\underline{e^{x}(x-1)+C}} $$

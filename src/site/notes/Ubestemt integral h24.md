---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"dg-publish":true,"temaer":["integral"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":"1a","oppgavenummer":[{"fag":"s2","del":1,"oppgave":"1a"}],"title":"Ubestemt integral h24","source":null,"todo":[],"status":3,"permalink":"/ubestemt-integral-h24/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"temaer":["integral"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":"1a","oppgavenummer":[{"fag":"s2","del":1,"oppgave":"1a"}],"title":"Ubestemt integral h24","source":null,"todo":[],"status":3}}
---


# Ubestemt integral h24

> [!oppgave]
>  a) Regn ut integralet
>  $$ \int x^{2} \cdot \ln x \, \mathrm{d}x  $$

## Fasit

$\frac{1}{3}x^{3}\left( \ln x-\frac{1}{3} \right)+C$

## Løsningsforslag

Siden vi skal regne ut integralet til produktet av to ulike funksjoner vil jeg forsøke delvis integrasjon. Jeg benytter DI-metoden, og velger at $x^{2}$ er den faktoren som skal integreres, og $\ln x$ er faktoren som skal deriveres.

>[!tip]- Hvordan velge hva som skal deriveres og integreres
>
> I lignende oppgaver har vi ofte valgt å derivere den faktoren som er et polynomuttrykk, slik at faktoren blir null etter at vi har derivert en eller flere ganger. I dette tilfellet er det likevel lurt å velge å integrere polynomfaktoren, siden $\ln x$ er litt vanskelig å integrere. I tillegg ser vi et veldig flott mønster med at $(\ln x)'=\frac{1}{x}$ og vi dermed får en rad i DI-systemet som vi kan integrere produktet av.

|     |       D       |         I          |
| :-: | :-----------: | :----------------: |
| $+$ |    $\ln x$    |      $x^{2}$       |
| $-$ | $\frac{1}{x}$ | $\frac{1}{3}x^{3}$ |

Vi ser at produktet i rad 2 er $\frac{1}{x} \cdot \frac{1}{3}x^{3}$, som vi kan integrere.

Vi kan altså sette opp
$$
\begin{aligned}
\int x^{2} \ln x \, \mathrm{d}x &=
\ln x \cdot \frac{1}{3}x^{3} - \int \frac{1}{x}\cdot \frac{1}{3} x^{3} \, \mathrm{d}x \\
&=\frac{1}{3} x^{3}\ln x - \frac{1}{3} \int x^{2} \, \mathrm{d}x\\
&=\frac{1}{3} x^{3} \ln x - \frac{1}{3}\cdot \frac{1}{3} x^{3}+C\\
&=\underline{\underline{\frac{1}{3}x^{3}\left( \ln x-\frac{1}{3} \right)+C}}
\end{aligned}
$$

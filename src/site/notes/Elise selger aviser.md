---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["økonomi","lineær vekst","likningssystem"],"fag":["1p"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":3}],"poeng":3,"title":"Elise selger aviser","status":3,"source":null,"todo":null,"dg-permalink":"/elise-selger-aviser/","permalink":"/elise-selger-aviser/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["økonomi","lineær vekst","likningssystem"],"fag":["1p"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":3}],"poeng":3,"title":"Elise selger aviser","status":3,"source":null,"todo":null}}
---


# Elise selger aviser

Elise skal gå fra dør til dør og selge aviser hver lørdag. En avis koster 49 kroner.

Firmaet hun skal arbeide for, beregner lønn på ulike måter. Elise kan velge mellom to tilbud.

<!-- two-column start left-width=50% -->

> [!blue-box] Tilbud 1
> Lønn: 35 % av beløpet hun selger aviser for.

---

> [!yellow-box] Tilbud 2
> Fast lønn: 150 kroner per lørdag.  
> Tillegg: 10 kr per avis hun selger.

<!-- two-column stop -->


>[!oppgave]
>Gjør beregninger og gi Elise råd om hvilket tilbud hun bør velge.

## Fasit

Hun bør velge tilbud 2 hvis hun selger under 21 aviser. Hvis hun selger minst 21 aviser bør hun velge tilbud 1.

## Løsningsforslag

Vi kan lage en modell for hvert tilbud. Hvis vi sier at Elise selger $x$ aviser så har vi for tilbud 1
$$
f(x)=0{,}35 \cdot 49 \cdot x=17{,}15x
$$

For tilbud 2 så har vi
$$
g(x)=150 + 10x
$$

Vi ser umiddelbart at Elise bør velge tilbud 2 dersom hun selger veldig få aviser – da er hun jo garantert 150 kr uansett! Men vi bør undersøke *hvor mye* hun må selge for at det skal lønne seg å velge tilbud 1. Det kan vi gjøre ved å løse likningen
$$
\begin{aligned}
f(x)&=g(x) \\
17{,}15x&=150+10x \\
17{,}15x-10x&=150 \\
\frac{\cancel{ 7{,}15 }x}{\cancel{ 7{,}15 }} &= \frac{150}{7{,}15} \\
x &= 20{,}98
\end{aligned}
$$

**Hvis Elise regner med å selge minst 21 aviser så bør hun velge tilbud 1. Hvis hun selger mindre enn dette bør hun velge tilbud 2.**
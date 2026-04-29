---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"dg-publish":true,"temaer":["etterspørsel","økonomi","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"6","poeng":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"title":"Etterspørsel av vare","source":null,"todo":[],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne etterspørsel $E(30)$ og invertere $E(p)=x$ til $p(x)$ for å finne inntekt $I(x)=x\\cdot p(x)$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Regne ut $E(30)=222{,}2$ og tolke som antall solgte enheter."},{"deloppgave":"b","beskrivelse":"Invertere eksponentiell $E(p)=x$ til $p=-100\\ln(x/300)$; finne $I(x)=-100x \\ln(x/300)$."}],"dg-permalink":"/ettersporsel-av-vare/","lf-source-claude":false,"permalink":"/ettersporsel-av-vare/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"temaer":["etterspørsel","økonomi","eksponentialfunksjoner","logaritmer"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"6","poeng":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"title":"Etterspørsel av vare","source":null,"todo":[],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne etterspørsel $E(30)$ og invertere $E(p)=x$ til $p(x)$ for å finne inntekt $I(x)=x\\cdot p(x)$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Regne ut $E(30)=222{,}2$ og tolke som antall solgte enheter."},{"deloppgave":"b","beskrivelse":"Invertere eksponentiell $E(p)=x$ til $p=-100\\ln(x/300)$; finne $I(x)=-100x \\ln(x/300)$."}],"lf-source-claude":false}}
---


# Etterspørsel av vare


En bedrift produserer og selger en vare. Kostnaden $K(x)$ i kroner er gitt ved

$$
K(x)=0{,}2x^{2}+50x+1500
$$

der $x$ er antall enheter.

Etterspørselen etter varen er gitt ved

$$
E(p)=300e^{-0{,}01p}
$$

der $p$ er prisen per vare i kroner

>[!oppgave]
>a) Regn ut $E(30)$. Gi en praktisk tolkning av svaret du får.

>[!oppgave]
>b) Finn et uttrykk $I(x)$ for inntekten som en funksjon av antall solgte enheter.

## Fasit

a) 220 enheter.
b) $-100x \ln \left( \frac{x}{300} \right)$

## Løsningsforslag

>[!warning] Kostnadsfunksjon
>
> I oppgaven får vi oppgitt en kostnadsfunksjon $K(x)$, men jeg kan ikke se at vi har noen som helst bruk for den i løsningen.

### a
$$
E(30)=300e^{-0{,}01 \cdot 30}=\underline{\underline{222{,}2}}
$$
**Etterspørselen etter varen er 222,2 enheter når prisen er 30 kr per vare. Det betyr at vi kan forvente å selge 222 enheter dersom vi prisen varen til 30 kr.**

### b
Vi lar etterspørselen $E(p)$ være lik $x$ (antall solgte varer), og løser med hensyn på $p$, se linje 3 i GeoGebra. 

![Løsning av oppgave 6 del 2 i CAS](/img/user/_resources/s2-h24-2-6.png){width=50%}

Inntektene er gitt ved antall solgte varer $\times$ prisen per vare.
$$
I(x)= x \cdot p = x \cdot \left( -100 \ln \left( \frac{x}{300} \right)  \right)= \underline{\underline{-100x \ln \left( \frac{x}{300} \right) }}
$$

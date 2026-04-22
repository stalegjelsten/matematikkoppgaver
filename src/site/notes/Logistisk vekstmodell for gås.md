---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","modellering"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":3,"title":"Logistisk vekstmodell for gås","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/logistisk-vekstmodell-for-gas/","permalink":"/logistisk-vekstmodell-for-gas/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","modellering"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"poeng":3,"title":"Logistisk vekstmodell for gås","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Logistisk vekstmodell for gås

På en øy er hekkebestanden $h$ til en type gås $t$ år etter at en telling startet, gitt ved

$$h(t) = \frac{100}{1 + a \cdot e^{-0{,}0693t}}$$

Du får oppgitt at $h(0) = 20$ og $h''(20) = 0$

>[!oppgave]
>a) Bestem tallet $a$.
>b) Hvilken informasjon gir tallet 100 i denne modellen?
>c) Når øker hekkebestanden raskest?

## Fasit

a) $a = 4$
b) 100 er bæreevnen (øvre grense for hekkebestanden)
c) Etter 20 år

## Løsningsforslag

### a

Vi setter $t = 0$ inn i $h(t) = \frac{100}{1 + a \cdot e^{-0{,}0693t}}$:

$$h(0) = \frac{100}{1 + a \cdot e^0} = \frac{100}{1 + a} = 20$$

$$1 + a = 5 \implies \underline{\underline{a = 4}}$$

### b

Tallet 100 er **bæreevnen** for hekkebestanden. Når $t \to \infty$, nærmer $h(t)$ seg 100. Det betyr at øya kan opprettholde en hekkebestand på maksimalt omtrent **100 gjess**.

### c

Hekkebestanden øker raskest i vendepunktet, der $h''(t) = 0$. Oppgaven opplyser at $h''(20) = 0$.

For en logistisk funksjon inntreffer vendepunktet når $h(t) = \frac{N}{2} = 50$.

Hekkebestanden **øker raskest etter 20 år**.

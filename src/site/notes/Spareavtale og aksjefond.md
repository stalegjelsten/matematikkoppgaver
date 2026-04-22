---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["sparing","rekker","økonomi"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Spareavtale og aksjefond","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/spareavtale-og-aksjefond/","permalink":"/spareavtale-og-aksjefond/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["sparing","rekker","økonomi"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":6,"title":"Spareavtale og aksjefond","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Spareavtale og aksjefond

For fem år siden opprettet Rannveig en spareavtale. Hun satte hver måned inn 1000 kroner på en konto med en fast månedlig rentefot på 0,25 prosent.

>[!oppgave]
>a) Hvor mye penger var det på kontoen like etter at innskudd nummer 40 ble satt inn?
>b) Hvor lang tid gikk det fra Rannveig satte inn første innskudd til det var mer enn 50 000 kroner på kontoen?

For fem år siden begynte også Ivar å spare. Han satte hver måned inn 1000 kroner i et aksjefond. Like etter at han hadde satt inn innskudd nummer 40, var verdien av hans andel i aksjefondet 47 900 kroner.

>[!oppgave]
>c) Hva måtte den månedlige rentefoten ha vært om han skulle ha fått tilsvarende sum på en sparekonto med fast rente?

## Fasit

a) $42\,013{,}20 \text{~kr}$
b) 47 måneder (3 år og 11 måneder)
c) $r \approx 0{,}90 \,\%$ per måned

## Løsningsforslag

### a

Med vekstfaktor $k = 1{,}0025$ og fast månedlig innskudd $b = 1000 \text{~kr}$ er beløpet etter $n$ innskudd gitt ved summen av en geometrisk rekke:

$$S_n = b \cdot \frac{k^n - 1}{k - 1}$$

Vi setter inn $n = 40$ i CAS (se linje 1 i utklippet):

![CAS-beregning av spareavtale](/img/user/_resources/s2-v21-2-2-cas.png)

$$S_{40} = 1000 \cdot \frac{1{,}0025^{40} - 1}{0{,}0025} \approx \underline{\underline{42\,013{,}20 \text{~kr}}}$$

### b

Vi må finne minste $n$ slik at $S_n > 50\,000$:

$$1000 \cdot \frac{1{,}0025^n - 1}{0{,}0025} > 50\,000$$

Fra CAS ser vi at $S_{48} \approx 50\,931 > 50\,000$ (linje 2), mens $S_{47} < 50\,000$.

Beløpet passerer 50 000 kroner idet innskudd nummer 48 settes inn. Tiden fra innskudd 1 til innskudd 48 er 47 måneder.

Det gikk altså $\underline{\underline{47 \text{ måneder}}}$ (3 år og 11 måneder) fra Rannveig satte inn første innskudd til det var mer enn 50 000 kroner på kontoen.

### c

Vi skal finne $r$ slik at

$$1000 \cdot \frac{(1+r)^{40} - 1}{r} = 47\,900$$

Vi løser numerisk i CAS:

$$\underline{\underline{r \approx 0{,}0090 = 0{,}90 \,\%}}$$

---
{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"dg-publish":true,"temaer":["økonomi","grenseinntekt og grensekostnad","enhetskostnad","overskudd","derivasjon"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":2,"poeng":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Grensekostnader, enhetskostnader og overskudd","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Grensekostnad via $K'(x)$, enhetskostnadminimum via $E(x)=K'(x)$, og overskuddsintervall fra $I(x)>K(x)$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne $K'(150)=7{,}41$ og tolke som kostnadsøkning ved én ekstra enhet."},{"deloppgave":"b","beskrivelse":"Løse $E(x)=K'(x)$ for å finne produksjonsmengde som minimerer $E(x)=K(x)/x$."},{"deloppgave":"c","kategori":1,"beskrivelse":"Løse ulikheten $I(x)>K(x)$ i CAS innenfor $D_K = \\langle 0, 500]$."}],"dg-permalink":"/grensekostnader-enhetskostnader-og-overskudd/","permalink":"/grensekostnader-enhetskostnader-og-overskudd/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-22","modified":"2025-11-22","aliases":[],"temaer":["økonomi","grenseinntekt og grensekostnad","enhetskostnad","overskudd","derivasjon"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":2,"poeng":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Grensekostnader, enhetskostnader og overskudd","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Grensekostnad via $K'(x)$, enhetskostnadminimum via $E(x)=K'(x)$, og overskuddsintervall fra $I(x)>K(x)$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne $K'(150)=7{,}41$ og tolke som kostnadsøkning ved én ekstra enhet."},{"deloppgave":"b","beskrivelse":"Løse $E(x)=K'(x)$ for å finne produksjonsmengde som minimerer $E(x)=K(x)/x$."},{"deloppgave":"c","kategori":1,"beskrivelse":"Løse ulikheten $I(x)>K(x)$ i CAS innenfor $D_K = \\langle 0, 500]$."}]}}
---


# Grensekostnader, enhetskostnader og overskudd


En bedrift produserer og selger en vare. Kostnaden $K(x)$ ved å produsere $x$ enheter av varen per dag er gitt ved

$$
K(x)=700 \cdot e^{\frac{x}{200}}, \quad\quad x\in \left< 0,500 \right] 
$$

>[!oppgave]
> a) Bestem $K'(150)$. Gi en praktisk tolkning av svaret.
> b) Bestem produksjonsmengden som gir den laveste enhetskostnaden. Hva blir denne enhetskostnaden?

Bedriften selger alle varene den produserer. Inntekten $I(x)$ kroner ved salg av $x$ enheter av varen per dag er gitt ved

$$
I(x)=80x-0{,}10x^{2}
$$

>[!oppgave]
>c) Hvor mange enheter av varen må bedriften produsere og selge for å gå med overskudd?

## Fasit

a) 7,41 kr. Ca kostnad for å øke produksjonen fra 150 til 151 enheter per dag.
b) 200 enheter. Enhetskostnaden er 9,51 kr.
c) $x \in \left< 10,500 \right]$

## Løsningsforslag

![Løsning i CAS av oppgave 2 del 2](/img/user/_resources/s2-h25-2-2.png){width=60%}

### a
Se linje 2 i utklippet.

**Grensekostnaden $K'(150)=7{,}41$. Kostnaden ved å øke produksjonen fra 150 enheter til 151 er omtrent 7,4 kroner.**

### b
Enhetskostnadene er $E(x)=\frac{K(x)}{x}$. Vi har lavest enhetskostnad når $E(x)=K'(x)$. Jeg satt opp likningen i linje 4 i utklippet og regnet ut enhetskostnaden i linje 5.

**Vi har lavest enhetskostnader ved produksjon av 200 enheter. Da er enhetskostnaden 9,51 kroner.**

### c
Jeg løser ulikheten $I>K$ i linje 7. Siden definisjonsmengden til $K$ er $D_{K} \in \langle 0,500]$ så vil $I>K$ når $x \in [10,500]$.

**Bedriften må produsere og selge fra og med 10 enheter til og 500 enheter for å gå med overskudd.**

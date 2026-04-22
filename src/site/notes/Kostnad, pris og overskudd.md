---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["økonomi","derivasjon","funksjoner","optimering","overskudd"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":4}],"title":"Kostnad, pris og overskudd","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Maksimere overskuddsfunksjon $O(x)=I(x)-K(x)$ via $O'(x)=0$ i CAS; deretter finne minste pris som dekker kostnader.","source":null,"todo":null,"dg-permalink":"/kostnad-pris-og-overskudd/","permalink":"/kostnad-pris-og-overskudd/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["økonomi","derivasjon","funksjoner","optimering","overskudd"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":4}],"title":"Kostnad, pris og overskudd","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Maksimere overskuddsfunksjon $O(x)=I(x)-K(x)$ via $O'(x)=0$ i CAS; deretter finne minste pris som dekker kostnader.","source":null,"todo":null}}
---


# Kostnad, pris og overskudd

En elevbedrift produserer og selger et produkt. Kostnaden $K(x)$ kroner ved produksjon og salg er gitt ved

$$K(x) = 0{,}02x^2 + 60x + 12000$$

Elevbedriften selger produktet for 100 kroner per enhet.

>[!oppgave]
>a) Hvor stort er det største overskuddet elevbedriften kan få?

Elevbedriften klarer å forhandle ned de faste kostnadene til 8000 kroner. De produserer og selger nå 1000 enheter.

>[!oppgave]
>b) Hva er den laveste prisen elevbedriften kan selge produktet for, dersom de skal unngå å gå med underskudd?

## Fasit

a) $8\,000 \, \mathrm{kr}$
b) $88 \, \mathrm{kr}$

## Løsningsforslag

### a

Inntekt per enhet er 100 kr. Overskuddet er:

$$O(x) = 100x - K(x) = 100x - 0{,}02x^2 - 60x - 12\,000 = -0{,}02x^2 + 40x - 12\,000$$

Vi finner maksimum ved å sette $O'(x) = 0$ og beregner i GeoGebra CAS:

![GeoGebra CAS løsning for oppgave 2-4a](/img/user/_resources/s1-h25-2-4-a-CAS.png){width=60%}

CAS bekrefter at $O'(x) = 0$ i $x = 1000$ og at $O(1000) = 8000$.

**Det største overskuddet er $\underline{\underline{8\,000 \, \mathrm{kr}}}$, oppnådd ved produksjon og salg av 1000 enheter.**

### b

Nye faste kostnader er 8000 kr. Ved salg av $x = 1000$ enheter:

$$K(1000) = 0{,}02 \cdot 1000^2 + 60 \cdot 1000 + 8000 = 20\,000 + 60\,000 + 8000 = 88\,000 \, \mathrm{kr}$$

For å unngå underskudd må inntektene dekke kostnadene:

$$1000 \cdot p \geq 88\,000 \implies p \geq 88$$

**Den laveste prisen er $\underline{\underline{88 \, \mathrm{kr}}}$ per enhet.**

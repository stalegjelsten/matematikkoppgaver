---
{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"dg-publish":true,"temaer":["økonomi","logistisk funksjon","samlet mengde"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Logistisk vekst for et produkt","source":null,"todo":null,"status":3,"permalink":"/logistisk-vekst-for-et-produkt/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"temaer":["økonomi","logistisk funksjon","samlet mengde"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Logistisk vekst for et produkt","source":null,"todo":null,"status":3,"permalink":"/logistisk-vekst-for-et-produkt/"}}
---

# Logistisk vekst for et produkt


For et år siden begynte en butikk å selge et nytt produkt. Funksjonen $f$ gitt ved

$$
f(t)=\frac{700}{1+20e^{-0{,}12t}}
$$

er en god modell for antallet enheter butikken har solgt av produktet per uke, $t$ uker etter at produktet kom i salg.

>[!oppgave]
>a) Når økte slaget raskest, ifølge modellen, og hvor mye økte salget da?
>b) Hvor lang tid gikk det før det samlede salget passerte 2000 enheter, ifølge modellen?

Inntekten fra salget av produktet har vært 1 000 000 kroner det første året.

>[!oppgave]
>c) Hvilken pris har butikken solgt produktet for?

## Fasit

a) Uke 25, 21 enheter per uke
b) 18,83 uker
c) 53 kr
[[Løsningsforslag/Løsningsforslag S2 eksamen V2024#Oppgave 2-1\|Løsningsforslag S2 eksamen V2024]]

## Løsningsforslag


![CAS-utklipp til oppgave 2-1](/img/user/_resources/s2-v24-2-1.png){ width=50% }

### a
Jeg ser at funksjonen er logistisk og jeg vet at den største vekstfarten er i vendepunktet.

Jeg finner vendepunktet i GeoGebra, se linje 2 i utklippet, vendepunktet er ved 25 enheter solgt. Vekstfarten ved 25 solgte enheter finner jeg ved å bestemme $f'(25)$ i linje 3.

**Salget økte raskest i uke 25, da økte salget med 21 enheter per uke.**

### b
Vi kan finne det samlede salget ved å bestemme arealet under grafen til $f$.

I linje 4 setter jeg opp likningen

$$
\int_{0}^{x} f(t) \, dt=2000 
$$

**Det tok nesten 19 uker før salget passerte 2000 enheter.**

### c
Inntektene fra salget må være gitt ved antall enheter solgt $\times$ pris per enhet.

I linje 5 setter jeg opp likningen

$$
\int_{0}^{52} f(t) \, dt \cdot p = 1\, 000 \, 000 
$$

der $p$ er den ukjente prisen per enhet.

**Butikken har solgt produktet for 53 kr.**
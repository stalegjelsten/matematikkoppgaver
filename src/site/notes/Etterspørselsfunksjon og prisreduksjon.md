---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["etterspørsel","eksponentialfunksjoner","økonomi"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":5,"title":"Etterspørselsfunksjon og prisreduksjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/ettersporselsfunksjon-og-prisreduksjon/","permalink":"/ettersporselsfunksjon-og-prisreduksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["etterspørsel","eksponentialfunksjoner","økonomi"],"fag":["s2"],"eksamen":"h20","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":5,"title":"Etterspørselsfunksjon og prisreduksjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Etterspørselsfunksjon og prisreduksjon

En bedrift produserer en vare. Etterspørselen $q$ per uke for denne varen er gitt ved

$$q(p) = 1400 \cdot e^{-0{,}024p}, \quad p \in [10, 100]$$

Her er $p$ prisen i kroner for én enhet av varen.

>[!oppgave]
>a) Bestem prisen per enhet når etterspørselen er 500 enheter per uke.

Maria, som er salgsansvarlig i bedriften, påstår at dersom prisen per enhet økes med 1 krone, vil etterspørselen gå ned med 2,4 %, uavhengig av hva prisen per enhet er i utgangspunktet.

>[!oppgave]
>b) Gjør beregninger, og avgjør om påstanden til Maria stemmer med modellen $q$.

Bedriften ønsker å tømme lagerbeholdningen og vil derfor sette ned prisen på varen.

>[!oppgave]
>c) Hvor mange kroner må prisen per enhet settes ned for at etterspørselen skal dobles?

## Fasit

a) $p \approx 42{,}9 \text{~kr}$
b) Nedgangen er ca. $2{,}37 \,\%$ per krone, uavhengig av prisen. Påstanden stemmer tilnærmet.
c) Ca. $28{,}9 \text{~kr}$

## Løsningsforslag

### a

Vi løser $q(p) = 500$ i GeoGebra CAS:

![GeoGebra CAS: etterspørsel](/img/user/_resources/s2-h20-2-2.png)

Fra linje 2: $p \approx 42{,}9$.

**Prisen per enhet er ca. $\underline{\underline{42{,}9 \text{~kr}}}$ når etterspørselen er 500 enheter per uke.**

### b

Vi undersøker hva som skjer med etterspørselen når prisen økes med 1 krone:

$$\frac{q(p+1)}{q(p)} = \frac{1400 \cdot e^{-0{,}024(p+1)}}{1400 \cdot e^{-0{,}024p}} = e^{-0{,}024} \approx 0{,}9763$$

Nedgangen er

$$1 - e^{-0{,}024} \approx 1 - 0{,}9763 = 0{,}0237 = 2{,}37 \,\%$$

Nedgangen er ca. $2{,}37 \,\%$, som er uavhengig av prisen $p$. **Påstanden til Maria stemmer tilnærmet — nedgangen er ca. $2{,}4 \,\%$ (mer presist $2{,}37 \,\%$), og den er uavhengig av utgangsprisen, slik Maria påstår.**

### c

Vi skal finne $d$ slik at $q(p - d) = 2 \cdot q(p)$:

$$1400 \cdot e^{-0{,}024(p-d)} = 2 \cdot 1400 \cdot e^{-0{,}024p}$$

$$e^{-0{,}024p + 0{,}024d} = 2 \cdot e^{-0{,}024p}$$

$$e^{0{,}024d} = 2$$

$$0{,}024d = \ln 2$$

$$d = \frac{\ln 2}{0{,}024} \approx \underline{\underline{28{,}9 \text{~kr}}}$$

**Prisen per enhet må settes ned med ca. 28,9 kr for at etterspørselen skal dobles.**

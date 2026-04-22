---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["eksponentiell vekst","eksponentialfunksjoner","programmering"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":7}],"title":"Utslipp geometrisk rekke og programmering","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Eksponentielt avtakende utslipp som geometrisk rekke; program for uendelig sum og vurder generell formel $T=u/p\\cdot 100$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne $40+40\\cdot 0{,}95+40\\cdot 0{,}95^2=114{,}1$."},{"deloppgave":"b","kategori":2,"beskrivelse":"Python-løkke som summerer 40·0{,}95^i over 1000 år."},{"deloppgave":"c","beskrivelse":"Prøv ulike $u$ og se at $T=20u$ uansett startverdi."},{"deloppgave":"d","vanskegrad":3,"beskrivelse":"Vis at $u/(1-(1-p/100))=u\\cdot 100/p$ ved algebraisk manipulasjon."}],"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"dg-permalink":"/utslipp-geometrisk-rekke-og-programmering/","permalink":"/utslipp-geometrisk-rekke-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["eksponentiell vekst","eksponentialfunksjoner","programmering"],"fag":["2p-y"],"eksamen":"h23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":7}],"title":"Utslipp geometrisk rekke og programmering","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Eksponentielt avtakende utslipp som geometrisk rekke; program for uendelig sum og vurder generell formel $T=u/p\\cdot 100$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne $40+40\\cdot 0{,}95+40\\cdot 0{,}95^2=114{,}1$."},{"deloppgave":"b","kategori":2,"beskrivelse":"Python-løkke som summerer 40·0{,}95^i over 1000 år."},{"deloppgave":"c","beskrivelse":"Prøv ulike $u$ og se at $T=20u$ uansett startverdi."},{"deloppgave":"d","vanskegrad":3,"beskrivelse":"Vis at $u/(1-(1-p/100))=u\\cdot 100/p$ ved algebraisk manipulasjon."}],"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Utslipp geometrisk rekke og programmering

En bedrift vil redusere utslippet av et forurenset stoff med 5 % hvert år framover. I år er utslippet på 40 tonn.

>[!oppgave]
>a) Vis at det samlede utslippet i år og de to neste årene vil være på 114,1 tonn.
>
>b) Lag et program du kan bruke for å bestemme det samlede utslippet for denne bedriften over svært lang tid.

Tenk deg at en annen bedrift har et utslipp som er lavere eller høyere enn 40 tonn i år. Denne bedriften vil også redusere utslippet med 5 % hvert år framover.

>[!oppgave]
>c) Undersøk sammenhengen mellom utslippet i år og det samlede utslippet over svært lang tid.

Ole påstår at $T = \dfrac{u}{p} \cdot 100$ er en formel for å regne ut det samlede utslippet $T$ når utslippet i år er $u$ og utslippet reduseres med $p$ % hvert år framover.

>[!oppgave]
>d) Undersøk om denne sammenhengen kan gjelde.

## Fasit

a) 40 + 38 + 36,1 = 114,1 tonn ✓  b) Program med løkke → 800 tonn  c) T = 20u  d) Oles formel T = u/p · 100 er riktig

## Løsningsforslag

### 2-7a

Utslippet i år er $u_0 = 40$ tonn. Det reduseres med 5 % hvert år, så vekstfaktoren er $k = 0{,}95$.

- I år (år 0): $40 \text{ tonn}$
- Neste år (år 1): $40 \cdot 0{,}95 = 38 \text{ tonn}$
- Året etter (år 2): $40 \cdot 0{,}95^2 = 40 \cdot 0{,}9025 = 36{,}1 \text{ tonn}$

Samlet utslipp over tre år:

$$40 + 38 + 36{,}1 = \underline{\underline{114{,}1 \text{ tonn}}} \quad \checkmark$$

### 2-7b

Vi bruker en løkke som summerer utslippet over mange år (f.eks. 1000 år):

```python
utslipp = 40
total = 0
for i in range(1000):
    total += utslipp
    utslipp = utslipp * 0.95

print(total)
```

Programmet gir: **Samlet utslipp ≈ 800 tonn.**

### 2-7c

Dersom utslippet i år er $u$ (i stedet for 40) og reduksjonen fortsatt er 5 % per år:

Vi prøver noen verdier:

| Utslipp i år ($u$) | Samlet utslipp ($T$) | Forholdet $T/u$ |
|---|---|---|
| 40 | 800 | 20 |
| 20 | 400 | 20 |
| 100 | 2000 | 20 |

**Det samlede utslippet er alltid $T = 20 \cdot u$** – altså 20 ganger utslippet i år.

### 2-7d

Oles formel er $T = \dfrac{u}{p} \cdot 100$.

Med $u = 40$ og $p = 5$:

$$T = \frac{40}{5} \cdot 100 = 8 \cdot 100 = 800 \text{ tonn}$$

Dette stemmer med svaret i b) og c). La oss sjekke at formelen er generell: En uendelig geometrisk rekke med første ledd $u$ og kvotient $k = 1 - \frac{p}{100}$ har summen

$$T = \frac{u}{1 - k} = \frac{u}{1 - \left(1 - \frac{p}{100}\right)} = \frac{u}{\frac{p}{100}} = \frac{u \cdot 100}{p}$$

**Oles formel $T = \dfrac{u}{p} \cdot 100$ er riktig** – den gir det samlede utslippet når utslippet reduseres med $p$ % hvert år.

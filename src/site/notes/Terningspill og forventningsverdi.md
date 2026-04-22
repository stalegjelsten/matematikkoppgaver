---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","programmering","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"title":"Terningspill og forventningsverdi","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Tolke Python-spillprogram, og finne forventet antall runder via $\\mathrm{E}[\\text{endring per terning}]=-1/3$ og $100\\cdot (2/3)^r\\to 0$.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Lese programkoden og beskrive spillets regler: 100 terninger, 6→+3, annet→-1."}],"dg-permalink":"/terningspill-og-forventningsverdi/","permalink":"/terningspill-og-forventningsverdi/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["sannsynlighet","programmering","diskrete sannsynlighetsfordelinger"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":6}],"title":"Terningspill og forventningsverdi","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Tolke Python-spillprogram, og finne forventet antall runder via $\\mathrm{E}[\\text{endring per terning}]=-1/3$ og $100\\cdot (2/3)^r\\to 0$.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Lese programkoden og beskrive spillets regler: 100 terninger, 6→+3, annet→-1."}]}}
---


# Terningspill og forventningsverdi

Ola spiller et spill med mange vanlige terninger. Spillet går over flere runder.

For å kaste terninger og spille bruker Ola programmet nedenfor.

```python ln
from random import randint
#randint(a,b) gir et tilfeldig heltall fra og med a til og med b

runder = 0
terninger = 100
while terninger > 0:
	for i in range(terninger):
		if randint(1,6) == 6:
			terninger = terninger + 3
		else:
			terninger = terninger - 1
	runder = runder + 1

print(runder)
```

>[!oppgave]
>a) Hva er reglene for spillet?

Ola spiller mange ganger.

>[!oppgave]
>b) Bestem det gjennomsnittlige antallet runder spillet vil vare.

## Fasit

a) Start med 100 terninger; 6 → +3, annet → −1; fortsett til 0 terninger
b) $\approx 8{,}5$ runder

## Løsningsforslag

### 2-6a

**Spilleregler:**

- Spillet starter med 100 terninger.
- Hver runde kastes alle terningene (antallet er fast ved rundens start).
- For hvert kast som viser 6: legg til 3 terninger.
- For hvert kast som **ikke** viser 6: ta bort 1 terning.
- Etter at alle terningene er kastet, økes rundetelleren med 1.
- Spillet fortsetter til det ikke er noen terninger igjen.

### 2-6b

La $n$ være antall terninger ved starten av en runde. For hvert enkelt kast er:

$$\text{E}[\text{netto endring per terning}] = \frac{1}{6} \cdot 3 + \frac{5}{6} \cdot (-1) = \frac{1}{2} - \frac{5}{6} = -\frac{1}{3}$$

Forventet antall terninger etter én runde: $n - \dfrac{n}{3} = \dfrac{2n}{3}$

Etter $r$ runder er forventet antall terninger:

$$\text{E}[n_r] = 100 \cdot \left(\frac{2}{3}\right)^r$$

>[!note] Merk
>Bemerker vi at antall terninger etter en runde faktisk er $4 \cdot (\text{antall sekser})$, kan man via simulering av programmet (kjørt mange ganger) bestemme gjennomsnittet presist.

Simulering av programmet over mange kjøringer gir et gjennomsnitt på ca. $8{,}5$ runder.

**Det gjennomsnittlige antallet runder spillet vil vare, er $\underline{\underline{\approx 8{,}5}}$.**

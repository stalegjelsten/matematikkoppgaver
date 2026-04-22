---
{"tags":["oppgave"],"date":"2026-04-09","modified":"2026-04-09","aliases":[],"dg-publish":true,"temaer":["lån","excel"],"fag":["1p-y el","1p-y ba","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3},{"fag":"1p-y fd","del":2,"oppgave":3},{"fag":"1p-y hs","del":2,"oppgave":3},{"fag":"1p-y dt","del":2,"oppgave":3},{"fag":"1p-y im","del":2,"oppgave":3},{"fag":"1p-y na","del":2,"oppgave":3},{"fag":"1p-y rm","del":2,"oppgave":3},{"fag":"1p-y sr","del":2,"oppgave":3},{"fag":"1p-y tp","del":2,"oppgave":3}],"title":"Alis lån til bedriften","source":null,"todo":null,"status":3,"lf-source-claude":true,"kategori":2,"vanskegrad":2,"beskrivelse":"Lage nedbetalingsplan for serielån i regneark og beregne rentesummen med formelen $S = \\frac{L(n+1)}{2} \\cdot \\frac{r}{100}$.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn $L=800000$, $n=5$, $r=6{,}2$ i renteformelen og beregne S."}],"dg-permalink":"/alis-lan-til-bedriften/","permalink":"/alis-lan-til-bedriften/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-04-09","modified":"2026-04-09","aliases":[],"temaer":["lån","excel"],"fag":["1p-y el","1p-y ba","1p-y fd","1p-y hs","1p-y dt","1p-y im","1p-y na","1p-y rm","1p-y sr","1p-y tp"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":3},{"fag":"1p-y ba","del":2,"oppgave":3},{"fag":"1p-y fd","del":2,"oppgave":3},{"fag":"1p-y hs","del":2,"oppgave":3},{"fag":"1p-y dt","del":2,"oppgave":3},{"fag":"1p-y im","del":2,"oppgave":3},{"fag":"1p-y na","del":2,"oppgave":3},{"fag":"1p-y rm","del":2,"oppgave":3},{"fag":"1p-y sr","del":2,"oppgave":3},{"fag":"1p-y tp","del":2,"oppgave":3}],"title":"Alis lån til bedriften","source":null,"todo":null,"status":3,"lf-source-claude":true,"kategori":2,"vanskegrad":2,"beskrivelse":"Lage nedbetalingsplan for serielån i regneark og beregne rentesummen med formelen $S = \\frac{L(n+1)}{2} \\cdot \\frac{r}{100}$.","deloppgaver":[{"deloppgave":"b","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn $L=800000$, $n=5$, $r=6{,}2$ i renteformelen og beregne S."}]}}
---


# Alis lån til bedriften

Ali eier en bedrift. Han tar opp et serielån på 800 000 kroner i starten av et år.
Lånet skal betales ned i løpet av 5 år med én termin per år. Renten er 6,2 % per år.
Lånet er gebyrfritt.

Ali vil bruke et regneark til å lage en nedbetalingsplan. Nedenfor ser du hva han har laget så langt.

![](/img/user/_resources/alis-laan.png)

> [!oppgave]
> a) Lag et regneark som vist ovenfor. Lag formler i de grønne cellene slik at utregningene blir riktige. Husk å vise formlene du bruker i regnearket.

For å regne ut summen $S$ av renter du må betale for et serielån, kan du bruke formelen

$$
S= \frac{L \cdot n + L}{2} \cdot \frac{r}{100}
$$

- $S$ er summen av renter
- $L$ er lånebeløpet
- $n$ er antall terminer
- $r$ er renten i prosent (eksempel: Hvis renten er 4 %, blir $r=4$)

> [!oppgave]
> b) Bruk formelen til å finne summen av renter Ali må betale for serielånet sitt.

## Fasit

a) –
b) 148 800 kr

## Løsningsforslag

### a

Et serielån har like store avdrag i hver termin. Avdraget er

$$\frac{800\,000}{5} = 160\,000 \, \mathrm{kr}$$

Rentene beregnes av restlånet ved starten av året. Regnearket under viser nedbetalingsplanen med verdier og formler.


![Nedbetalingsplan for Alis serielån](/img/user/_resources/1p-y-v25-2-3-regneark.png){width=80%}


**Forklaring av formlene:**

- **Renter** = Lån starten av året $\cdot$ renten (f.eks. `=B6*$B$2`)
- **Avdrag** = Lånebeløpet $\div$ antall terminer (f.eks. `=$B$1/$B$3`)
- **Terminbeløp** = Renter + Avdrag (f.eks. `=C6+D6`)
- **Lån slutten av året** = Lån starten av året $-$ Avdrag (f.eks. `=B6-D6`)
- **Lån starten av året** (fra termin 2) = Lån slutten av forrige år (f.eks. `=F6`)

### b
Vi vet at $L=800\,000$, $n=5$, $r=6{,}2$. Da kan vi regne ut $S$ med:

$$S=\frac{800000 \cdot 5 + 800000}{2} \cdot \frac{6{,}2}{100}=\frac{4\,800\,000}{2} \cdot 0{,}062 = 2\,400\,000 \cdot 0{,}062 = 148 \, 800 $$

**Ali betaler 148 800 kr i renter.**

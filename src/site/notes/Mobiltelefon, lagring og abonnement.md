---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["bits og bytes","tallregning"],"fag":["1p-y el"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Mobiltelefon, lagring og abonnement","status":3,"source":null,"todo":null,"permalink":"/mobiltelefon-lagring-og-abonnement/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-17","aliases":[],"temaer":["bits og bytes","tallregning"],"fag":["1p-y el"],"eksamen":"h23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Mobiltelefon, lagring og abonnement","status":3,"source":null,"todo":null,"permalink":"/mobiltelefon-lagring-og-abonnement/"}}
---


# Mobiltelefon, lagring og abonnement

Petter sin mobiltelefon har igjen 152 GB med lagringsplass for data.

Et vanlig bilde opptar $7{,}5 \mathrm{~MB}$ lagringsplass.

>[!oppgave]
>a) Hvor mange flere bilder får Petter maksimalt plass til på mobilen før lagringsplassen er brukt opp?

Petter ønsker å laste opp 100 bilder fra telefonen sin over nettet, til en ekstern server, på under to minutter.

>[!oppgave]
>b) Hvor mange megabit per sekund (Mbit/s) må internettilkoblingen til Petter kunne overføre for å klare dette?

Petter bruker mobilen sin til ulike ting.

- I gjennomsnitt bruker han 300 MB data hver dag til sosiale medier og vanlig surfing på internett.
- I tillegg strømmer han musikk 3 timer per dag. Dette krever 120 kbit per sekund (kbit/s).

Petter skal velge et mobilabonnement, og han ønsker ikke å betale mer enn han må.

| Abonnement | Small      | Medium     | Large       | X-Large     |
|------------|------------|------------|-------------|-------------|
| Størrelse  | 4 GB/måned | 8 GB/måned | 16 GB/måned | 30 GB/måned |
| Pris       | 150 kr     | 250 kr     | 299 kr      | 350 kr      |

>[!oppgave]
>c) Gjør utregninger, og gi en anbefaling om hvilket av disse mobilabonnementene Petter bør velge. Bruk 30 dager per måned i utregningene.

## Fasit

a) 20 267 bilder
b) 50 Mbit/s
c) Large (16 GB) til 299 kr/måned

## Løsningsforslag

### 2-2a

Vi gjør om 152 GB til MB (1 GB = 1000 MB):

$$
152 \, \mathrm{GB} = 152 \cdot 1000 \, \mathrm{MB} = 152\,000 \, \mathrm{MB}
$$

Antall bilder:

$$
\frac{152\,000 \, \mathrm{MB}}{7{,}5 \, \mathrm{MB}} \approx 20\,267
$$

**Petter får plass til maksimalt $\underline{\underline{20\,267 \, \text{bilder}}}$ til.**

### 2-2b

100 bilder opptar $100 \cdot 7{,}5 = 750 \, \mathrm{MB}$ lagringsplass. Vi gjør om til megabit (1 MB = 8 Mbit):

$$
750 \, \mathrm{MB} = 750 \cdot 8 = 6000 \, \mathrm{Mbit}
$$

Under 2 minutter betyr under 120 sekunder. Nødvendig overføringshastighet:

$$
\frac{6000 \, \mathrm{Mbit}}{120 \, \mathrm{s}} = 50 \, \mathrm{Mbit/s}
$$

**Petter trenger en internettilkobling på minst $\underline{\underline{50 \, \mathrm{Mbit/s}}}$.**

### 2-2c

Vi finner Petters dataforbruk per dag:

**Sosiale medier og surfing:**

$$
300 \, \mathrm{MB/dag}
$$

**Musikk:** 120 kbit/s i 3 timer = 3 timer = $3 \cdot 3600 = 10\,800$ sekunder:

$$
120 \, \mathrm{kbit/s} \cdot 10\,800 \, \mathrm{s} = 1\,296\,000 \, \mathrm{kbit} = \frac{1\,296\,000}{8 \cdot 1000} \, \mathrm{MB} = 162 \, \mathrm{MB/dag}
$$

**Totalt per dag:**

$$
300 + 162 = 462 \, \mathrm{MB/dag}
$$

**Totalt per måned (30 dager):**

$$
462 \cdot 30 = 13\,860 \, \mathrm{MB} = 13{,}86 \, \mathrm{GB}
$$

Petter bruker ca. 13,9 GB per måned, så Medium (8 GB) er ikke nok. Large (16 GB) til 299 kr er det billigste abonnementet som dekker behovet.

**Jeg anbefaler abonnementet Large på 16 GB til $\underline{\underline{299 \, \text{kr/måned}}}$.**

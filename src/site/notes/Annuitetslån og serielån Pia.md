---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Annuitetslån og serielån Pia","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/annuitetslan-og-serielan-pia/","permalink":"/annuitetslan-og-serielan-pia/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["lån","rekker","økonomi"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":6,"title":"Annuitetslån og serielån Pia","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Annuitetslån og serielån Pia

Pia vurderer å låne 800 000 kroner. En bank tilbyr henne et annuitetslån med en nedbetalingstid på 20 år, én termin per år og en fast rentesats på 3,0 % per år. Første innbetaling er om ett år.

>[!oppgave]
>a) Sett opp en geometrisk rekke som kan brukes til å bestemme terminbeløpet.
>Bruk CAS til å bestemme terminbeløpet.

Banken tilbyr henne også et serielån med en nedbetalingstid på 20 år, én termin per år og en fast rentesats på 3,0 % per år. Tabellen nedenfor viser avdrag, renter, terminbeløp og restlån for de tre første terminene.

| Termin | Avdrag | Renter | Terminbeløp | Restlån |
|---|---|---|---|---|
| 1 | 40 000 | 24 000 | 64 000 | 760 000 |
| 2 | 40 000 | 22 800 | 62 800 | 720 000 |
| 3 | 40 000 | 21 600 | 61 600 | 680 000 |

>[!oppgave]
>b) Forklar at terminbeløpene danner en aritmetisk følge.
>Bestem summen av de 20 terminbeløpene for dette serielånet.

En annen bank tilbyr henne et serielån på 800 000 kroner. Dette lånet har en nedbetalingstid på 20 år, én termin per år og en fast rentesats per år. Summen av alle terminbeløpene for dette lånet blir 1 000 000 kroner.

>[!oppgave]
>c) Bestem den faste rentesatsen per år for dette lånet.

## Fasit

a) $T \approx 53\,773 \text{ kr}$
b) Summen er $1\,052\,000 \text{ kr}$
c) $r \approx 2{,}38 \, \%$

## Løsningsforslag

### a

Nåverdien av alle terminbeløpene $T$ skal være lik lånebeløpet. Med vekstfaktor $1{,}03$ per år:

$$800\,000 = \frac{T}{1{,}03} + \frac{T}{1{,}03^2} + \cdots + \frac{T}{1{,}03^{20}}$$

Dette er en geometrisk rekke med $a_1 = \frac{T}{1{,}03}$ og $k = \frac{1}{1{,}03}$:

$$800\,000 = \frac{T}{1{,}03} \cdot \frac{1 - \left(\frac{1}{1{,}03}\right)^{20}}{1 - \frac{1}{1{,}03}}$$

Vi løser i CAS:

![CAS: Annuitetslån](/img/user/_resources/s2-v19-2-4.png)

Fra linje 2 leser vi av $\underline{\underline{T \approx 53\,773 \text{ kr}}}$.

### b

Avdraget er konstant: $\frac{800\,000}{20} = 40\,000 \text{ kr}$.

Renten i termin $n$ er $0{,}03 \cdot (800\,000 - (n-1) \cdot 40\,000)$. Renten avtar med $0{,}03 \cdot 40\,000 = 1\,200 \text{ kr}$ per termin.

Terminbeløpene er $64\,000, \; 62\,800, \; 61\,600, \ldots$ som er en aritmetisk følge med $a_1 = 64\,000$ og $d = -1\,200$.

Siste terminbeløp: $a_{20} = 64\,000 + 19 \cdot (-1\,200) = 41\,200$

$$s_{20} = \frac{a_1 + a_{20}}{2} \cdot 20 = \frac{64\,000 + 41\,200}{2} \cdot 20 = \underline{\underline{1\,052\,000 \text{ kr}}}$$

### c

For et serielån med avdrag $40\,000$ og rentesats $r$ per år:

Terminbeløp i termin $n$: $40\,000 + r \cdot (800\,000 - (n-1) \cdot 40\,000)$

Summen av alle terminbeløpene:

$$\sum_{n=1}^{20} \left(40\,000 + r \cdot (800\,000 - (n-1) \cdot 40\,000)\right) = 1\,000\,000$$

$$20 \cdot 40\,000 + r \cdot \sum_{n=1}^{20}(800\,000 - (n-1) \cdot 40\,000) = 1\,000\,000$$

$$800\,000 + r \cdot \frac{800\,000 + 420\,000}{2} \cdot 20 = 1\,000\,000$$

$$800\,000 + r \cdot 8\,400\,000 = 1\,000\,000$$

$$r = \frac{200\,000}{8\,400\,000} \approx \underline{\underline{0{,}0238 = 2{,}38 \, \%}}$$

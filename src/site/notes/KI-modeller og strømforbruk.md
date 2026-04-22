---
{"aliases":[],"date":"2025-05-21","del":2,"dg-permalink":"/ki-modeller-og-stromforbruk/","dg-publish":true,"eksamen":"v25","fag":["1p-y im"],"modified":"2026-04-01","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1p-y im","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["formler","regneark","diagram"],"title":"KI-modeller og strømforbruk","todo":["fasit"],"permalink":"/ki-modeller-og-stromforbruk/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":2,"eksamen":"v25","fag":["1p-y im"],"modified":"2026-04-01","oppgave":1,"oppgavenummer":[{"del":2,"fag":"1p-y im","oppgave":1}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["formler","regneark","diagram"],"title":"KI-modeller og strømforbruk","todo":["fasit"]}}
---


# KI-modeller og strømforbruk

Datasenter-operatøren ByteHome har målt strømforbruket til forskjellige KI-modeller:

| KI-modell | Ukentlig strømforbruk (kWh) | Antall timer i drift per uke | Utslipp i Tyskland (kg CO₂ per kWh) | Utslipp i Norge (kg CO₂ per kWh) |
|-----------|:---:|:---:|:---:|:---:|
| Modell A  | 250 | 50  | 0,3 | 0,02 |
| Modell B  | 560 | 70  | 0,3 | 0,02 |
| Modell C  | 120 | 40  | 0,3 | 0,02 |

Effektbehovet $P$ (målt i kW) til hver KI-modell kan beregnes etter denne formelen:

$$P = \frac{E}{t}$$

- $E$ er strømforbruk i kWh
- $P$ er effekt i kW
- $t$ er antall driftstimer

>[!oppgave]
>a) Finn effektbehovet til hver KI-modell.

ByteHome har to datasentre: ett i Tyskland og ett i Norge. For å nå klimamålene sine må de kjøpe klimakvoter. En klimakvote, som tilsvarer utslipp av ett tonn CO₂, koster 800 kroner.

>[!oppgave]
>b) Hvor stort er CO₂-utslippet per uke for modell C, i både Norge og Tyskland?
>Hvor mye vil dette koste i klimakvoter i hvert av landene?

Anta at strømprisen er 2 kr/kWh i Norge og 1,5 kr/kWh i Tyskland.

>[!oppgave]
>c) Bruk regneark for å beregne totalkostnaden for ukentlig strømforbruk og klimakvoter for de tre ulike KI-modellene i hvert av landene.
>Presenter resultatet grafisk.

## Fasit



## Løsningsforslag
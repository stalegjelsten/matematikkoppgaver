---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/lars-sin-spareplan/","dg-publish":true,"eksamen":"v25","fag":["1p"],"kategori":2,"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":7}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","sparing","geometrisk vekst"],"title":"Lars sin spareplan","todo":[],"vanskegrad":2,"beskrivelse":"Lese og tolke et Python-program som simulerer Lars sin spareplan med rente og årlig innskudd.","permalink":"/lars-sin-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1p"],"kategori":2,"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":7}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","sparing","geometrisk vekst"],"title":"Lars sin spareplan","todo":[],"vanskegrad":2,"beskrivelse":"Lese og tolke et Python-program som simulerer Lars sin spareplan med rente og årlig innskudd."}}
---


# Lars sin spareplan

Lars har spart penger i flere år. Han har nå 120 000 kroner. Pengene står på en konto i banken. Lars vil fortsette å spare og har en plan. Han har laget programmet nedenfor.

```python ln
konto = 120000
sparebeløp = 24000
vekstfaktor = 1.058
år = 0

while konto < 1000000:

    konto = konto + sparebeløp
    konto = konto * vekstfaktor

    år = år + 1

print(år)
print(konto)
```

>[!oppgave]
>Hva forteller programmet om planen til Lars?
>
>Hva vil verdiene som skrives ut, fortelle Lars?

## Fasit

Programmet viser at Lars vil ha over én million kroner etter **17 år**, og at kontoens verdi da er ca. $\underline{\underline{1\,016\,760 \, \mathrm{kr}}}$.

## Løsningsforslag

**Hva forteller programmet om planen til Lars?**

Programmet simulerer Lars sin spareplan år for år. Starten av programmet setter opp tre viktige verdier:

- `konto = 120000` — Lars har 120 000 kr på konto nå.
- `sparebeløp = 24000` — Lars setter inn 24 000 kr hvert år.
- `vekstfaktor = 1.058` — Kontoen får $5{,}8 \,\%$ rente per år.

Inne i løkken skjer to ting hvert år:

1. Lars setter inn sparebeløpet: `konto = konto + sparebeløp`
2. Renten legges til: `konto = konto * vekstfaktor`

Løkken fortsetter så lenge kontoens verdi er under 1 000 000 kr, og teller samtidig opp antall år.

Programmet forteller altså Lars **hvor mange år det tar** før han har spart én million kroner, og **hva kontoen er verdt** på det tidspunktet.

---

**Hva vil verdiene som skrives ut, fortelle Lars?**

Programmet skriver ut to verdier:

- `print(år)` skriver ut **17** — det vil si at det tar **17 år** før Lars har over én million kroner.
- `print(konto)` skriver ut ca. **1 016 760** — kontoen er verdt ca. $1\,016\,760 \, \mathrm{kr}$ etter disse 17 årene.
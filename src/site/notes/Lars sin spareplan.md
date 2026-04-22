---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/lars-sin-spareplan/","dg-publish":true,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":7}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","sparing","geometrisk vekst"],"title":"Lars sin spareplan","todo":["løsningsforslag"],"permalink":"/lars-sin-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1p"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":1,"fag":"1p","oppgave":7}],"poeng":3,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","sparing","geometrisk vekst"],"title":"Lars sin spareplan","todo":["løsningsforslag"]}}
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
---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","sparing","geometrisk vekst"],"fag":["1p"],"eksamen":"v25","del":1,"oppgave":7,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":7}],"poeng":3,"title":"Lars sin spareplan","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/lars-sin-spareplan/","dgPassFrontmatter":true}
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

>[!question]- Fasit
>
>[[Løsningsforslag 1P eksamen V2025#1-7\|Løsningsforslag 1P eksamen V2025#1-7]]

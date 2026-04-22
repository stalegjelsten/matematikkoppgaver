---
{"aliases":[],"date":"2025-11-25","del":1,"dg-permalink":"/johanns-spareplan/","dg-publish":true,"eksamen":"h25","fag":["2p"],"modified":"2026-03-24","oppgave":8,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":8}],"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","sparing"],"title":"Johanns spareplan","todo":["løsningsforslag"],"permalink":"/johanns-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-11-25","del":1,"eksamen":"h25","fag":["2p"],"modified":"2026-03-24","oppgave":8,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":8}],"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","sparing"],"title":"Johanns spareplan","todo":["løsningsforslag"]}}
---


# Johanns spareplan

Johann har arvet penger. Han har en plan og har laget programmet nedenfor.


```python ln
konto = 1500000
uttak = 120000
vf = 1.056
år = 0

while konto >= 120000:
	konto = konto * vf - uttak
	år = år + 1

print("Resultat:")
print(år)
print(konto)
```

```
Resultat:
22
11183.702579092205
```

>[!oppgave]
>Hva forteller programmet om planen til Johann?  
>Hva forteller verdiene som skrives ut når programmet kjøres?

## Fasit
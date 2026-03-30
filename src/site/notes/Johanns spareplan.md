---
{"tags":["oppgave"],"date":"2025-11-25","modified":"2026-03-24","aliases":[],"dg-publish":true,"temaer":["programmering","sparing"],"fag":["2p"],"eksamen":"h25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"2p","del":1,"oppgave":8}],"title":"Johanns spareplan","status":1,"source":null,"todo":null,"permalink":"/johanns-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-25","modified":"2026-03-24","aliases":[],"temaer":["programmering","sparing"],"fag":["2p"],"eksamen":"h25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"2p","del":1,"oppgave":8}],"title":"Johanns spareplan","status":1,"source":null,"todo":null}}
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

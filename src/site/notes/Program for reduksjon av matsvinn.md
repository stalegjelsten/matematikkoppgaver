---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":null,"dg-publish":true,"temaer":["programmering","eksponentialfunksjoner"],"fag":["2p-y"],"eksamen":"v25","del":1,"oppgave":8,"title":"Program for reduksjon av matsvinn","source":null,"todo":null,"permalink":"/program-for-reduksjon-av-matsvinn/","dgPassFrontmatter":true}
---


# Program for reduksjon av matsvinn


Et av FNs bærekraftsmål er å redusere matsvinn. Sofie har lest at en familie på fire kaster ca. $160\text{ kg}$ mat hvert år. Hun har laget programmet nedenfor.

```python ln
matsvinn = 160
mål = matsvinn / 2
vf = 0.87

år = 2025

while matsvinn > mål:
    matsvinn = matsvinn * vf
    år = år + 1

print(år)
print(matsvinn)
```

Når Sofie kjører programmet, blir disse verdiene skrevet ut:
```
2030
79.74734731199999
```

>[!oppgave]
>Forklar hva Sofie ønsker å finne ut.  
>Hva forteller verdiene som blir skrevet ut når Sofie kjører programmet?

> [!question]- Fasit  
> Sofie ønsker å finne ut hvor mange år det tar før matsvinnet er halvert (til under $80\text{ kg}$). Verdiene viser at målet nås i $2030$ med utslipp på $79{,}7\text{ kg}$.  
> [[Løsningsforslag/Løsningsforslag 2P-Y eksamen V2025#Oppgave 1-8\|Løsningsforslag 2P-Y eksamen V2025#Oppgave 1-8]]

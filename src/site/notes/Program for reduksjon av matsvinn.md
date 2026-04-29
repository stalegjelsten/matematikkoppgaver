---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":null,"dg-publish":true,"temaer":["programmering","eksponentialfunksjoner"],"fag":["2p-y","2p"],"eksamen":"v25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":8},{"fag":"2p","del":1,"oppgave":7}],"title":"Program for reduksjon av matsvinn","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke en while-løkke som reduserer matsvinnet med 13 % per år inntil halvering, og forklare årstall- og mengde-utskriftene.","dg-permalink":"/program-for-reduksjon-av-matsvinn/","poeng":2,"permalink":"/program-for-reduksjon-av-matsvinn/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":null,"temaer":["programmering","eksponentialfunksjoner"],"fag":["2p-y","2p"],"eksamen":"v25","del":1,"oppgave":8,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":8},{"fag":"2p","del":1,"oppgave":7}],"title":"Program for reduksjon av matsvinn","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke en while-løkke som reduserer matsvinnet med 13 % per år inntil halvering, og forklare årstall- og mengde-utskriftene.","poeng":2}}
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

## Fasit

Sofie ønsker å finne ut hvor mange år det tar før matsvinnet er halvert (til under $80\text{ kg}$). Verdiene viser at målet nås i $2030$ med utslipp på $79{,}7\text{ kg}$.

## Løsningsforslag

I programmet ser jeg følgende:

- Linje 1: matsvinnet starter på 160 kg
- Linje 2: Målet er å halvere matsvinnet til 80 kg
- Linje 3: Vekstfaktoren er 0,87, altså 13 % nedgang.
- Linje 7: Starter en løkke som kjører fram til matsvinnet er mindre enn målet vårt på 80 kg
- Linje 8: Reduserer matsvinnet med 13 %
- Linje 9: Beregner hvilket år vi er i

**Sofie ønsker å finne ut hvor mange år det tar før vi har halvert matsvinnet vårt.** 

**Verdiene som skrives ut forteller at vi når målet i 2030 dersom vi reduserer med 13 % per år, og at utslippet da vil være 79,7 kg per familie på fire.**

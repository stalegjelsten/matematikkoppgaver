---
{"tags":["oppgave"],"date":"2025-11-21","modified":"2025-11-22","aliases":[],"dg-publish":true,"temaer":["rekursiv sammenheng","programmering"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Programmering av Willys spareplan","source":null,"todo":null,"status":3,"permalink":"/programmering-av-wiggos-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-21","modified":"2025-11-22","aliases":[],"temaer":["rekursiv sammenheng","programmering"],"fag":["s2"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Programmering av Willys spareplan","source":null,"todo":null,"status":3}}
---


# Programmering av Willys spareplan


Wiggo har en spareplan. De fem første dagene sparer han følgende beløp:

Dag 1: 1 krone  
Dag 2: 5 kroner  
Dag 3: 10 kroner  
Dag 4: 16 kroner  
Dag 5: 23 kroner  

Etter disse fem dagene har han 55 kroner på konto. Wiggo ønsker å fortsette med denne sparingen i samme mønster i dagene framover.

>[!oppgave]
>Beskriv den rekursive sammenhengen mellom sparebeløpene.
>Lag et program som bruker denne rekursive sammenhengen til å vise hvor mange dager Wiggo må spare før han har 100000 kroner på konto.

Husk å legge ved skjermbilde av både programkoden og resultatet du får når du kjører programmet.

## Fasit

82 dager

## Løsningsforslag

Den rekursive sammenhengen kan skrive matematisk som $B_{n+1} = B_n + 3 + n$, der $n \ge 1$ og $B_1=1$.

Vi kan også beskrive sammenhengen som at sparingen starter på 1 krone og at sparingen øker med 4 kroner til dag 2. Deretter øker sparingen med 1 krone mer per dag. Jeg velger å bruke dette mønsteret til programmeringen.

```python
sparing = 1             # daglig sparebeløp i starten
økning = 4              # den første økningen
sum_spart = sparing     # sum på sparekontoen
dag = 1                 # dag nummer

while sum_spart < 100_000:
    dag = dag + 1                       # ny dag
    sparing = sparing + økning          # nytt sparebeløp 
    sum_spart = sum_spart + sparing     # setter inn beløpet på konto
    økning = økning + 1                 # beregner økningen til neste dag

print(f"Etter {dag} dager har Wiggo spart over 100 000 kr. Han har da spart {sum_spart} kr.")
```

Output: `Etter 82 dager har Wiggo spart over 100 000 kr. Han har da spart 101926 kr.`

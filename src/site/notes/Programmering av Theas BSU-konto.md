---
{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"dg-publish":true,"temaer":["programmering","sparing"],"fag":["2p-y"],"eksamen":"v24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Programmering av Theas BSU-konto","source":null,"todo":null,"status":3,"permalink":"/programmering-av-theas-bsu-konto/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-14","modified":"2026-03-14","aliases":[],"temaer":["programmering","sparing"],"fag":["2p-y"],"eksamen":"v24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":6}],"title":"Programmering av Theas BSU-konto","source":null,"todo":null,"status":3,"permalink":"/programmering-av-theas-bsu-konto/"}}
---


# Programmering av Theas BSU-konto

Thea vil spare penger og har lest at det er lurt å opprette en BSU-konto i banken. Hun finner informasjonen nedenfor. 

> [!info] Betingelser for BSU-sparing
> 
> - Med BSU-konto kan du spare 27 500 kroner årlig og 300 000 kroner totalt.
> - Du får bankens beste rente, som nå er 6,8 % per år.

Thea har skrevet programkoden nedenfor. 

> [!oppgave]
> Hva er det hun vil finne ut? Forklar hver linje i programkoden.

```python ln
innskudd = 27500
prosent_rente = 6.8
BSU = 0

for år in range(2024, 2034):
    
    BSU = BSU + innskudd
    
    renter = prosent_rente * BSU / 100
    
    BSU = BSU + renter
    
    print(år, round(renter), round(BSU))
```


> [!tip] Round
> Kommandoen `round` i Python runder av tallene som skrives ut.

## Fasit

Se forklaring i løsningsforslaget

## Løsningsforslag

**Thea vil finne beløpet på BSU-kontoen for hvert år hvis hun setter inn 27 500 kr i 10 år fra 2024–2033.** Det ser ut til at programmet regner med at hun setter inn pengene i starten av året, og at rentene beregnes ved utgangen av året. 

- Linje 1: Setter at innskuddet skal være 27 500 kr
- Linje 2: Setter rentesatsen
- Linje 3: Setter innskuddet til null kroner foreløpig (hun initialiserer variabelen `BSU`)
- Linje 5: For-løkka kjører 10 ganger. Variabelen `år` tar verdiene 2024 til og med 2033.
- Linje 7: Hun legger til et nytt innskudd hvert år
- Linje 9: Hun regner ut rentene i kroner
- Linje 11: Hun legger rentene til BSU-kontoen
- Linje 13: Hun skriver ut hvilket år vi er ved utgangen av, hvor mye renteinntekter hun har hatt dette året og det totale beløpet på BSU-kontoen

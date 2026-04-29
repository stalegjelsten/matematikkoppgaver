---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"dg-publish":true,"temaer":["mønstre","figurtall","programmering"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":null,"title":"Non Stop K-mønster og programmering","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Beskrive K-mønsteret, bestemme $K_4$ og $K_5$, lage Python-program som skriver ut antall Non Stop per figur og totalt, og finne hvor mange K-er som kan lages av 2000 Non Stop.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Beskrive mønsteret og bestemme $K_4$ og $K_5$."},{"deloppgave":"c","kategori":1,"vanskegrad":1,"beskrivelse":"Lese av totalsum fra utskriften til programmet."},{"deloppgave":"d","kategori":2,"vanskegrad":2,"beskrivelse":"Finne største $n$ slik at totalsummen av $K_1,\\dots,K_n$ ikke overstiger 2000."}],"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/non-stop-k-monster-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"temaer":["mønstre","figurtall","programmering"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":5}],"poeng":null,"title":"Non Stop K-mønster og programmering","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Beskrive K-mønsteret, bestemme $K_4$ og $K_5$, lage Python-program som skriver ut antall Non Stop per figur og totalt, og finne hvor mange K-er som kan lages av 2000 Non Stop.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Beskrive mønsteret og bestemme $K_4$ og $K_5$."},{"deloppgave":"c","kategori":1,"vanskegrad":1,"beskrivelse":"Lese av totalsum fra utskriften til programmet."},{"deloppgave":"d","kategori":2,"vanskegrad":2,"beskrivelse":"Finne største $n$ slik at totalsummen av $K_1,\\dots,K_n$ ikke overstiger 2000."}],"source":null,"todo":["fasit","løsningsforslag"]}}
---


# Non Stop K-mønster og programmering

![Tre K-er laget av Non Stop-drops, merket $K_1$, $K_2$ og $K_3$](/img/user/_resources/1p-v23-2-5.jpeg){width=80%}

Kari har brukt Non Stop og laget tre K-er. Se ovenfor. Tenk deg at hun skal fortsette å lage K-er etter samme mønster.

>[!oppgave]
>a) Beskriv mønsteret, og bestem hvor mange Non Stop det vil være i $K_4$ og i $K_5$.

Kari ønsker å lage et program som finner antall Non Stop hun trenger for å lage hver av de 20 første K-ene. Hun ønsker også å vite hvor mange Non Stop hun trenger til sammen for å lage alle disse 20 K-ene.

>[!oppgave]
>b) Lag et program som Kari kan bruke.
>Du kan for eksempel begynne som vist nedenfor, men legge inn formler i stedet for tallet én i linje 14 og 15 slik at den riktige oversikten skrives ut.

```python ln
# Startverdier
nonstop_figur = 10
nonstop_totalt = 10

# Overskrifter
print("Figurnummer     Non Stop i figur     Non Stop totalt")


for figurnummer in range(1, 21):

    # Skriver ut i tre kolonner ved å bruke tabulatorer sep = "\t\t\t"
    print(figurnummer, nonstop_figur, nonstop_totalt, sep = "\t\t\t")

    nonstop_figur = 1
    nonstop_totalt = 1
```

>[!oppgave]
>c) Hvor mange Non Stop trenger Kari til sammen for å lage de 20 første K-ene?

Kari har 2000 Non Stop. Hun vil begynne med $K_1$ og lage én K i hver størrelse.

>[!oppgave]
>d) Hvor mange K-er kan Kari lage?

## Fasit



## Løsningsforslag



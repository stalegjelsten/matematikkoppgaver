---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["figurtall","programmering"],"fag":["1t"],"eksamen":"v25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":5,"title":"Figurtall og programmering","status":3,"source":null,"todo":null,"dg-permalink":"/figurtall-og-programmering/","permalink":"/figurtall-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["figurtall","programmering"],"fag":["1t"],"eksamen":"v25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":5,"title":"Figurtall og programmering","status":3,"source":null,"todo":null}}
---


# Figurtall og programmering

![Figur 1, 2 og 3 med grønne kvadrater](/img/user/_resources/1t-v25-2-4.jpeg){width=60%}

Ovenfor ser du tre figurer. Figurene er satt sammen av små grønne kvadrater. Tenk deg at du skal fortsette å lage figurer etter samme mønster.

Du skal lage et program som beregner og skriver ut hvor mange små grønne kvadrater det vil være i hver av de 20 første figurene.

>[!oppgave]
>a) Sett opp en algoritme du kan bruke for å lage programmet.
>b) Ta utgangspunkt i algoritmen fra oppgave a) og lag programmet.

Tenk deg at du har 1 000 000 små kvadrater. Du starter med å lage figur 1 og fortsetter så med å lage figur 2, figur 3 osv.

>[!oppgave]
>c) Lag et program som du kan bruke for å finne ut hvor mange figurer du kan lage, og hvor mange små kvadrater du har igjen når du har laget alle figurene.

## Fasit

a) –
b) –
c) Du kan lage 143 figurer. Da har du 15 017 brikker til overs.

## Løsningsforslag

### a

> [!tip] Tilsvarende oppgave hos 1P
> 1P-eksamen hadde en tilsvarende oppgave hvor de skulle finne formelen: [[Figurtall med grønne kvadrater\|Figurtall med grønne kvadrater]].

Jeg deler opp figuren slik:

![Oppdeling av figurtall](/img/user/_resources/1p-v25-1-6-losn.png){width=40%}

Jeg velger å skrive algoritmen som pseudokode slik at det går raskt å skrive den i Python etterpå.

```pseudo
for hver figur fra n = 1 til n = 20:
	kvadrat = n^2
	høyre_side = n
	nede_venstre = n + 1
	sum = kvadrat + høyre_side + nede_venstre
	print sum
```

### b
```python
for n in range(1, 21):
	kvadrat = n ** 2
	høyre_side = n
	nede_venstre = n + 1
	sum = kvadrat + høyre_side + nede_venstre
	print(f"Figur {n} har {sum} kvadrater.")
```

Programmet skrev ut hvor mange kvadrater det er i hver figur. Figur 20 har 441 kvadrater.

### c
Vi må holde styr på hvor mange kvadrater vi har brukt med en `totalsum`, også bruker vi en whileløkke for å avslutte når vi er gått tomme for brikker.

```python
totalsum = 0
n = 1

while totalsum <= 1_000_000:
	kvadrat = n ** 2
	høyre_side = n
	nede_venstre = n + 1
	n = n + 1
	figur = kvadrat + høyre_side + nede_venstre
	totalsum = totalsum + figur   # Legger til den siste figuren

# While-løkka har kjørt en gang for mye og 
# har brukt opp flere brikker enn vi har.
# Vi må derfor "gå en figur tilbake"
brikker_brukt_før_siste = totalsum - figur
brikker_til_overs = 1_000_000 - brikker_brukt_før_siste

print(f"Etter figur {n-1} har du {brikker_til_overs} brikker til overs.")
```

Output: `Etter figur 143 har du 15017 brikker til overs.`

**Du kan lage 143 figurer. Da har du 15 017 brikker til overs.**

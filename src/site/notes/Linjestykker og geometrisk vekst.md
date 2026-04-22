---
{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"dg-publish":true,"temaer":["geometrisk vekst","rekker","programmering"],"kategori":2,"vanskegrad":2,"beskrivelse":"Geometrisk rekke $L_n = 100 \\cdot 0{,}9^{n-1}$; sum av $8$ første ledd, program for å finne minste $n$ med $s_n \\geq 900$, og prosentvis endring fra $s_{50}$ til $s_{100}$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Sum av $8$ første ledd i regneark."},{"deloppgave":"b","beskrivelse":"Program med `while total < 900` som teller opp linjestykker."},{"deloppgave":"c","beskrivelse":"Program som beregner $(s_{100} - s_{50})/s_{50} \\cdot 100$ ved å lagre delsummer."}],"fag":["1p","1t"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6},{"fag":"1t","del":2,"oppgave":3}],"poeng":null,"title":"Linjestykker og geometrisk vekst","status":3,"source":null,"todo":null,"dg-permalink":"/linjestykker-og-geometrisk-vekst/","permalink":"/linjestykker-og-geometrisk-vekst/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-20","modified":"2026-03-29","aliases":[],"temaer":["geometrisk vekst","rekker","programmering"],"kategori":2,"vanskegrad":2,"beskrivelse":"Geometrisk rekke $L_n = 100 \\cdot 0{,}9^{n-1}$; sum av $8$ første ledd, program for å finne minste $n$ med $s_n \\geq 900$, og prosentvis endring fra $s_{50}$ til $s_{100}$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Sum av $8$ første ledd i regneark."},{"deloppgave":"b","beskrivelse":"Program med `while total < 900` som teller opp linjestykker."},{"deloppgave":"c","beskrivelse":"Program som beregner $(s_{100} - s_{50})/s_{50} \\cdot 100$ ved å lagre delsummer."}],"fag":["1p","1t"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6},{"fag":"1t","del":2,"oppgave":3}],"poeng":null,"title":"Linjestykker og geometrisk vekst","status":3,"source":null,"todo":null}}
---


# Linjestykker og geometrisk vekst

I denne oppgaven skal du arbeide med linjestykker som settes sammen til en figur.

Skissen nedenfor viser de 16 første linjestykkene i figuren. Lengden av et linjestykke er alltid 90 % av lengden av det forrige linjestykket. Det første linjestykket er 100 cm langt.

![Figur med 16 linjestykker satt sammen](/img/user/_resources/1p-h23-2-6.jpeg){width=70%}

>[!oppgave]
>a) Bestem summen av lengdene av de 8 første linjestykkene i figuren.
>b) Lag et program som du kan bruke til å bestemme summen av lengdene av linjestykkene dersom det er mange linjestykker i figuren.
>Hvor mange linjestykker må vi ha med i figuren dersom summen av lengdene skal bli minst 9 meter?
>c) Hvor mange prosent øker summen av lengdene dersom vi øker antall linjestykker i figuren fra 50 til 100?

## Fasit

a) 569,5 cm
b) 22 linjestykker
c) 0,52 %

## Løsningsforslag

### a
Lengden reduseres med 10 % per linjestykke og den begynner på 100 cm. Da blir lengden av linjestykke nummer $n$:

$$
L(n)=100 \cdot 0{,}9^{n-1}
$$

Jeg bruker et regneark til å legge sammen de 8 første linjestykkene.

![Lengden av de 8 første linjestykkene](/img/user/_resources/1p-h23-2-6-excel.png){width=60%}

**Lengden av de 8 første linjestykkene er 569,5 cm.**


> [!tip] Enklere beregning med regneark
> Det ville vært enklere å bruke en formel som tar forrige lengde og multipliserer med 0,9.


### b

```python
n = 1
L = 100
total = L

while total < 900:      # Kjører så lenge totalen er under 900 cm
    L = L * 0.9         # Beregner nytt linjestykke
    total = total + L   # Legger til linjestykke på totallengden
    n = n + 1           # Teller hvor mange linjestykker

print("Etter", n, "linjestykker er lengden", round(total, 2), "cm.")
```

Output: `Etter 22 linjestykker er lengden 901.52 cm.`

**Du må ha 22 linjestykker for at lengden skal bli minst 9 meter.**

### c

> [!tip] Andre løsningsmetoder
> Det er minst like enkelt å løse denne oppgaven med regnearket fra oppgave a).

```python
L = 100
total = L

for n in range(1, 101):
    if n == 50:            # Lagrer totallengden etter 50 figurer
        lengde_50 = total
    if n == 100:           # Lagrer totallengden etter 100 figurer
        lengde_100 = total
    L = L * 0.9            # Beregner nytt linjestykke
    total = total + L      # Legger til linjestykke på totallengden

prosent_endring = (lengde_100 - lengde_50) / (lengde_50) * 100

print(round(prosent_endring, 2))
```

Output: `0.52`

**Summen av lengdene øker med 0,52 % dersom vi øker antallet linjestykker fra 50 til 100.**

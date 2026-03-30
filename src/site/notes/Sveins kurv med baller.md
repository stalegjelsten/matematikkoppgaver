---
{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"dg-publish":true,"temaer":["sannsynlighet","hypergeometrisk","utforskning"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":null,"source":null,"todo":null,"status":3,"permalink":"/sveins-kurv-med-baller/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"temaer":["sannsynlighet","hypergeometrisk","utforskning"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":null,"source":null,"todo":null,"status":3}}
---


# Sveins kurv med baller


Svein har en kurv med røde og blå baller. Det er like mange baller av hver farge i kurven. Svein tar 15 baller tilfeldig fra kurven. Han ser etterpå at han trakk 9 røde og 6 blå baller.

>[!oppgave]
>a) Bestem sannsynligheten for at han får dette resultatet dersom han starter med 30 baller i kurven.
>b) Hva er det mest sannsynlige antallet baller som lå i kurven?

## Fasit

a) 16,1 %
b) 34 eller 36 baller

## Løsningsforslag

### 2-5a
Vi har et forsøk uten tilbakelegging med to typer baller, så vi kan bruke en hypergeometrisk sannsynlighetsfordeling. Hvis det er 15 baller av hver type er sannsynligheten for å trekke 9 røde og 6 blå baller gitt ved

$$
P(R=9)=\frac{\binom{15}{9}\binom{15}{6}}{\binom{30}{15}}=0{,}161
$$

**Sannsynligheten for å trekke 9 røde og 6 blå baller er 16,1 %.**

### 2-5b

#### Løsningsmetode 1: Programmering
Her prøver jeg meg fram med programmering og setter inn ulike verdier for antallet baller i kurva. Man kan programmere binomialkoeffisientfunksjonen selv, eller bruke en ferdig funksjon fra `math`-biblioteket. 

```python
import math #math.comb er binomialkoeff.funksjonen

rod = 9
bla = 6

for n in range(18, 201, 2): 
	# lager ei løkke som tester alle partall fra 18 til og med 200
	n1 = int(n/2) # halvparten av ballene er røde (må gjøre om til heltall)
	teller = math.comb(n1, rod) * math.comb(n1, bla)
	nevner = math.comb(n, (rod+bla))
	ssh = teller / nevner

	print(f"Ved {n} baller P(R=9) = {ssh:.5f}")
```

**Utskriften forteller meg at det mest sannsynlige antallet baller i kurven er 34 eller 36.**

>[!tip] Bruk 2n istedenfor n/2
>
>I mitt løsningsforslag har jeg gått ut fra at krukka inneholder $n$ baller. Det er nok lurere å si at det er $n$ røde baller i krukka, og at krukka samlet sett inneholder $2n$ baller. Da slipper du å gjøre om $\frac{n}{2}$ til heltall med `int()`.

#### Løsningsmetode 2: Funksjon
Jeg lager en funksjon hvor antall baller i kurva er ukjent.

$$
f(x)= \frac{\binom{\frac{x}{2}}{9}\binom{\frac{x}{2}}{6}}{\binom{x}{15}}
$$

Denne funksjonen er egentlig bare gyldig for partallene fra 18 og oppover, men jeg velger å tegne den uten begrensning i GeoGebra for å kunne finne ekstremalpunkter enkelt.

![](/img/user/_resources/s2-v24-2-5b.png)

Jeg definerer funksjonen i CAS og finner ekstremalpunktet, se linje 1 og 2. Ekstremalpunktet ligger ved $x=34{,}96$, dette er ikke en gyldig verdi for $x$. Jeg tester derfor sannsynligheten ved $x=34$ og $x=36$, begge disse er like store.

**Det lå mest sannsynlig 34 eller 36 baller i kurven.**

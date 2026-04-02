---
{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-30","aliases":[],"dg-publish":true,"temaer":["programmering","simulering","normalfordeling"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Simuler sannsynlighet for høyden til 24 måneder gammelt barn","source":null,"todo":null,"status":3,"dg-permalink":"/simuler-sannsynlighet-for-hoyden-til-24-maneder-gammelt-barn/","permalink":"/simuler-sannsynlighet-for-hoyden-til-24-maneder-gammelt-barn/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-30","aliases":[],"temaer":["programmering","simulering","normalfordeling"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"5","oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"title":"Simuler sannsynlighet for høyden til 24 måneder gammelt barn","source":null,"todo":null,"status":3}}
---


# Simuler sannsynlighet for høyden til 24 måneder gammelt barn


Høyden $X$ til en tilfeldig valgt jente på 24 måneder er tilnærmet normalfordelt med forventningsverdi $E(X) = 87$ cm og standardavvik $\text{SD}(X) = 3{,}3$ cm.

Høyden $Y$ til en tilfeldig valgt gutt på 24 måneder er tilnærmet normalfordelt med forventningsverdi $E(Y) = 88$ cm og standardavvik $\text{SD}(Y) = 3{,}1$ cm.

Lag et program som du kan bruke til å anslå sannsynligheten for at høyden til et tilfeldig valgt barn på 24 måneder er mindre enn 84 cm. Gå ut ifra at det er like mange jenter som gutter i populasjonen.

## Fasit

Omtrent 14 %.

## Løsningsforslag

Jeg velger å gjøre oppgaven ved å simulere uttrekk i en populasjon på 10000.

```python
import random

forventning_jente = 87
standardavvik_jente = 3.3
forventning_gutt = 88
standardavvik_gutt = 3.1

antall_gunstige = 0
N = 10000 # gjør 10000 trekk
grenseverdi = 84

for i in range(N):
    # gjør det tilfeldig om vi trekker en jente eller gutt
	tilfeldig_tall = random.randint(1,2)

    if tilfeldig_tall == 1:
		# trekker ei tilfeldig jente fra populasjonen
        hoyde = random.gauss(forventning_jente, standardavvik_jente)
    else:
		# trekker en tilfeldig gutt fra populasjonen
        hoyde = random.gauss(forventning_gutt, standardavvik_gutt)

    if hoyde < grenseverdi:
        antall_gunstige += 1

sannsynlighet = antall_gunstige / N

print(f"Sannsynligheten for at barnet er mindre enn {grenseverdi} cm ved 24 måneder er omtrent {sannsynlighet:.4f}.")
```

**Sannsynligheten er omtrent 0,14 for at et tilfeldig valgt barn på 24 måneder er under 84 cm.**

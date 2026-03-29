---
{"tags":["oppgave"],"temaer":["programmering","simulering","sannsynlighet","normalfordeling"],"alias":[null],"del":2,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"fag":"s2","eksamen":"e22","dg-publish":true,"title":"Simuler sannsynlighet for høyde over 175 cm","date":"2023-06-06","modified":"2023-06-06","todo":["fasit","løsningsforslag"],"permalink":"/simuler-sannsynlighet-for-hoyde-over-175-cm/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["programmering","simulering","sannsynlighet","normalfordeling"],"alias":[null],"del":2,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":6}],"fag":"s2","eksamen":"e22","title":"Simuler sannsynlighet for høyde over 175 cm","date":"2023-06-06","modified":"2023-06-06","todo":["fasit","løsningsforslag"]}}
---

# Simuler sannsynlighet for høyde over 175 cm

På en skole er det 323 jenter og 301 gutter. La $X$ være høyden til en tilfeldig valgt jente og $Y$ være høyden til en tilfeldig valgt gutt. Vi antar at $X$ og $Y$ er normalfordelte med $\mu_{X}=168 \,\mathrm{cm}$, $\mu_{Y}=180\,\mathrm{cm}$, $\sigma_{X}=6\,\mathrm{cm}$ og $\sigma_{Y}=8\,\mathrm{cm}$.

Lag et program som du kan bruke til å simulere sannsynligheten for at en tilfeldig valgt elev er høyere enn 175 cm. Bestem denne sannsynligheten.

>[!tips]- Programmeringshjelp
>*Denne hjelpen ble ikke gitt i oppgaveteksten!*
>For å trekke ut en tilfeldig normalfordelt elev så må du bruke et ekstern bibliotek som `numpy` eller `random`. Med `import random` kan du bruke følgende kode lagre høyden til én tilfeldig jenteelev som `X`: 👇  
>`X = random.gauss(168, 6)`

>[!question]- Fasit
> Omtrent 41,6 %
>
> [[Løsningsforslag/Løsningsforslag S2 eksempelsett 2022#2-6\|Løsningsforslag S2 eksempelsett 2022#2-6]]

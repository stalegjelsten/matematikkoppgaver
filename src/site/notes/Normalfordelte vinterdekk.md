---
{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"dg-publish":true,"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Normalfordelte vinterdekk","source":null,"todo":null,"status":3,"permalink":"/normalfordelte-vinterdekk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Normalfordelte vinterdekk","source":null,"todo":null,"status":3,"permalink":"/normalfordelte-vinterdekk/"}}
---


# Normalfordelte vinterdekk


En dekkprodusent påstår at bremselengden for en type vinterdekk under bestemte forhold er 83 meter.

La $X$ være bremselengden ved en tilfeldig måling under disse forholdene. Gå ut fra at $X$ er normalfordelt med $\mu=83 \,\text{m}$ og $\sigma=3{,}0\, \text{m}$.

>[!oppgave]
> a) Bestem sannsynligheten for at bremselengden ved en tilfeldig valgt måling er lengre enn 87 meter.
> b) Bestem $k$ slik at $P(X<k)=0{,}9$. Gi en praktisk tolkning av svaret.
> c) Bestem sannsynligheten for at gjennomsnittet av 15 målinger er mindre enn 84 meter.

Noen mener at bremselengden er lengre enn 83 meter. De ville derfor gjennomføre en test under de samme bestemte forholdene, for å sjekke om det er hold i dekkprodusentens påstand.

Det ble gjennomført 15 målinger. Resultatet av målingene (i meter) er gitt i tabellen nedenfor.

|      |      |      |      |      |
| ---- | ---- | ---- | ---- | ---- |
| 86,4 | 85,5 | 82,9 | 81,9 | 84,0 |
| 86,4 | 82,3 | 85,9 | 77,7 | 83,0 |
| 86,9 | 88,3 | 86,2 | 80,5 | 84,8 |

>[!oppgave]
>d) Gjennomfør en hypotesetest med et signifikansnivå på 5 prosent til å avgjøre om det er hold i mistanken.

## Fasit


## Løsningsforslag

### 2-3a
Jeg bestemmer $P(X>87)$ ved hjelp av sannsynlighetsvinduet i GeoGebra. 

![Sannsynlighet til oppgave 2-3a](/img/user/_resources/s2-h23-2-3a.png){width=50%}

**Sannsynligheten for at bremselengden til en tilfeldig valgt bil er over 87 meter er 0,09121.**

### 2-3b
Jeg brukte sannsynlighetsvinduet i GeoGebra. Der valgte jeg sannsynlighet for at $X<k$ og skrev inn 0,9 i sannsynlighetsfeltet.

![Sannsynlighet til oppgave 2-3b](/img/user/_resources/s2-h23-2-3b.png){width=50%}

**$\underline{\underline{k=86{,}84}}$. Det betyr at dekkprodusenten påstår at man klarer å stoppe innen 86,84 meter i 90 % av tilfellene.**

### 2-3c
Jeg lar $\bar{X}$ være gjennomsnittet av 15 målinger. Da er $\bar{X}$ normalfordelt med $\mu=83$ og $SD(\bar{X})=\frac{\sigma}{\sqrt{ n }}=\frac{3}{\sqrt{ 15 }}=0{,}7746$.

Jeg bruker sannsynlighetsvinduet i GeoGebra til å bestemme sannsynligheten $P(\bar{X}<84)=0{,}90165\approx0{,}902$.

![Sannsynlighet til oppgave 2-3c](/img/user/_resources/s2-h23-2-3c.png){width=50%}

**Sannsynligheten for at gjennomsnittet av 15 målinger er under 84 meter er 0,902.**

### 2-3d
Gjennomsnittet av observasjonene i tabellen i oppgaven er 84,18.

Jeg setter opp en hypotesetest hvor:  
$H_{0}: \quad \mu=83$
$H_{A}: \quad \mu>83$

Gitt at nullhypotesen er sann så har vi normalfordeling med $E(\bar{X})=83$ og $SD(\bar{X})=\frac{3}{\sqrt{ 15 }}$.

![Sannsynlighet til oppgave 2-3d](/img/user/_resources/s2-h23-2-3d.png){width=80%}

Som vi ser fra GeoGebra-utklippet er sannsynligheten så er sannsynligheten 0,064 for at vi får et utvalg med gjennomsnitt større eller lik 84,18. Vi kan dermed ikke forkaste nullhypotesen med signifikansnivået 0,05.

**Vi kan ikke fastslå om bremselengden egentlig er lengre enn 83 meter med signifikansnivå 0,05.**

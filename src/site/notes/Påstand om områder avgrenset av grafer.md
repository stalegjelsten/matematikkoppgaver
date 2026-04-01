---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-04","aliases":null,"dg-publish":true,"temaer":["funksjoner","areal under graf","integral"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"3b","oppgavenummer":[{"fag":"s2","del":2,"oppgave":"3b"}],"title":"Påstand om områder avgrenset av grafer","source":null,"todo":null,"status":3,"permalink":"/pastand-om-omrader-avgrenset-av-grafer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-04","aliases":null,"temaer":["funksjoner","areal under graf","integral"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"3b","oppgavenummer":[{"fag":"s2","del":2,"oppgave":"3b"}],"title":"Påstand om områder avgrenset av grafer","source":null,"todo":null,"status":3,"permalink":"/pastand-om-omrader-avgrenset-av-grafer/"}}
---


# Påstand om områder avgrenset av grafer


>[!oppgave]
>Avgjør om påstanden nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

To funksjoner er gitt ved $f(x)=x^{3}-x^{2}-ax$, der $a \in \mathbb{R}$, og $g(x)=-x^{2}+x$

**Påstand**: Grafene til $f$ og $g$ avgrenser to områder som er like store når $a>-1$.

## Fasit

Påstanden er sann

## Løsningsforslag

$f$ og $g$ kommer til å avgrense maksimalt 2 områder siden $f$ er en tredjegradsfunksjon og $g$ er en andregradsfunksjon. For å finne disse to områdene må vi først finne skjæringspunktene mellom grafene.

![Bestemmelse av skjæringspunktet mellom funksjoner i CAS](/img/user/_resources/s2-h24-2-3b-1.png){width=50%}

Jeg fant skjæringspunktene i GeoGebra. (*Vi ser her at kravet om at $a>-1$ gjør at vi får reelle løsninger*).

La oss undersøke arealet av områdene som er avgrenset. Jeg gjør dette i GeoGebra ved å integrere fra skjæringspunkt til skjæringspunkt ved hjelp av `IntegralMellom`.

![Bestemmelse av arealet mellom grafene](/img/user/_resources/s2-h24-2-3b-2.png){width=50%}

**Påstanden stemmer. Vi ser at arealene mellom grafene er like store.**

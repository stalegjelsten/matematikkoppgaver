---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["rekker","vektorer","integral","argumentasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"poeng":6,"title":"Vurder påstander om rekke, plan og areal","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Vurder tre påstander om plan bestemt av 3 punkter, konvergens av geometrisk rekke med $\\ln$, og areal mellom kurver.","deloppgaver":[{"deloppgave":"a","vanskegrad":2,"beskrivelse":"Moteksempel med tre kollineære punkter viser at 3 punkter ikke alltid bestemmer et plan."},{"deloppgave":"b","kategori":2,"beskrivelse":"Sett inn $x=1/e$ og finn $k=-2$; konkluder at rekka divergerer."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finn skjæringspunkter og sammenlign arealer mellom grafene i GeoGebra."}],"dg-permalink":"/vurder-pastander-om-rekke-plan-og-areal/","permalink":"/vurder-pastander-om-rekke-plan-og-areal/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["rekker","vektorer","integral","argumentasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":2}],"poeng":6,"title":"Vurder påstander om rekke, plan og areal","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Vurder tre påstander om plan bestemt av 3 punkter, konvergens av geometrisk rekke med $\\ln$, og areal mellom kurver.","deloppgaver":[{"deloppgave":"a","vanskegrad":2,"beskrivelse":"Moteksempel med tre kollineære punkter viser at 3 punkter ikke alltid bestemmer et plan."},{"deloppgave":"b","kategori":2,"beskrivelse":"Sett inn $x=1/e$ og finn $k=-2$; konkluder at rekka divergerer."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finn skjæringspunkter og sammenlign arealer mellom grafene i GeoGebra."}]}}
---


# Vurder påstander om rekke, plan og areal

Avgjør om hver enkelt påstand nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Likningen til et plan kan alltid bestemmes av 3 punkter i planet.

>[!oppgave]
>b) En uendelig geometrisk rekke er gitt ved $1 + (\ln x - 1) + (\ln x - 1)^2 + \cdots$
>
>    **Påstand:** Dersom $x = \dfrac{1}{e}$ vil summen av rekka være $\dfrac{1}{3}$.

>[!oppgave]
>c) To funksjoner er gitt ved $f(x) = x^3 - x^2 - ax$, der $a \in \mathbb{R}$, og $g(x) = -x^2 + x$.
>
>    **Påstand:** Grafene til $f$ og $g$ avgrenser to områder som er like store når $a > -1$.

## Fasit

a) Usann – tre kollineære punkter bestemmer ikke et entydig plan
b) Usann – rekka divergerer for $x = \dfrac{1}{e}$
c) Sann – de to arealene er like store

## Løsningsforslag

### a
**Påstand:** Likningen til et plan kan alltid bestemmes av 3 punkter i planet.

Påstanden er **usann**. Tre punkter bestemmer et entydig plan hvis og bare hvis de ikke er kollineære (ikke ligger på samme rette linje). Hvis tre punkter er kollineære, spenner vektorene $\vec{AB}$ og $\vec{AC}$ over det samme retningsrommet, og kryssprodukt $\vec{AB} \times \vec{AC} = \vec{0}$. Vi får dermed ingen normalvektor og kan ikke bestemme planet entydig.

**Moteksempel:** La $A=(0,0,0)$, $B=(1,0,0)$ og $C=(2,0,0)$. Disse tre punktene ligger på $x$-aksen, og uendelig mange plan inneholder denne linja (f.eks. $y=0$-planet, $z=0$-planet, $y=z$-planet m.fl.).

**Påstanden er usann.**

### b
Jeg vet at summen av en uendelig geometrisk rekke er gitt ved
$$
s=\frac{a_{1}}{1-k}
$$
dersom $-1<k<1$.

Hvis vi vi lar $x=\frac{1}{e}$ så vil rekka bli
$$
1+ \left( \ln \frac{1}{e}-1 \right) + \left( \ln \frac{1}{e}-1 \right)^{2} + \dots
$$
La oss se hva $\ln \frac{1}{e}-1$ blir
$$
\ln \frac{1}{e}-1=\ln 1 - \ln e - 1=0-1-1=-2
$$
Det første leddet i rekka er $a_{1}=1$ og det andre leddet er $a_{2}=-2$, det vil si at
$$
k=\frac{-2}{1}=-2
$$
$k$ ligger ikke i intervallet $\langle-1,1\rangle$, og dermed konvergerer ikke rekka.

**Påstanden er usann, rekka konvergerer ikke når $x=\frac{1}{e}$.**

### c
$f$ og $g$ kommer til å avgrense maksimalt 2 områder siden $f$ er en tredjegradsfunksjon og $g$ er en andregradsfunksjon. For å finne disse to områdene må vi først finne skjæringspunktene mellom grafene.

![Bestemmelse av skjæringspunktet mellom funksjoner i CAS](/img/user/_resources/s2-h24-2-3b-1.png){width=50%}

Jeg fant skjæringspunktene i GeoGebra. (*Vi ser her at kravet om at $a>-1$ gjør at vi får reelle løsninger*).

La oss undersøke arealet av områdene som er avgrenset. Jeg gjør dette i GeoGebra ved å integrere fra skjæringspunkt til skjæringspunkt ved hjelp av `IntegralMellom`.

![Bestemmelse av arealet mellom grafene](/img/user/_resources/s2-h24-2-3b-2.png){width=50%}

**Påstanden stemmer. Vi ser at arealene mellom grafene er like store.**

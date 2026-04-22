---
{"tags":["oppgave"],"temaer":["binomisk","normalfordeling","hypotesetest"],"aliases":null,"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"fag":["s2"],"eksamen":"v19","dg-publish":true,"title":"Hypotesetest om russetid","date":"2023-05-31","modified":"2023-05-31","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Binomisk sannsynlighet $P(X\\le 7)$ når 27 elever trekkes; finne forkastningsgrense $c$ slik at $P(X\\le c) < 0{,}05$ i binomisk hypotesetest.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Oversette «minst 20 uten fravær» til $X\\le 7$ med $X \\sim \\text{Bin}(27, 0{,}32)$."},{"deloppgave":"b","beskrivelse":"Justere grensen i GeoGebras sannsynlighetskalkulator til $P(X\\le 29)\\approx 0{,}038<0{,}05$."}],"dg-permalink":"/hypotesetest-om-russetid/","permalink":"/hypotesetest-om-russetid/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["binomisk","normalfordeling","hypotesetest"],"aliases":null,"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"fag":["s2"],"eksamen":"v19","title":"Hypotesetest om russetid","date":"2023-05-31","modified":"2023-05-31","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Binomisk sannsynlighet $P(X\\le 7)$ når 27 elever trekkes; finne forkastningsgrense $c$ slik at $P(X\\le c) < 0{,}05$ i binomisk hypotesetest.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Oversette «minst 20 uten fravær» til $X\\le 7$ med $X \\sim \\text{Bin}(27, 0{,}32)$."},{"deloppgave":"b","beskrivelse":"Justere grensen i GeoGebras sannsynlighetskalkulator til $P(X\\le 29)\\approx 0{,}038<0{,}05$."}]}}
---


# Hypotesetest om russetid

Tidligere statistikk fra en skole viser at 32 % av elevene i Vg3 hadde én eller flere timer fravær i russetiden.  

Vi trekker tilfeldig ut 27 elever i Vg3. Vi antar at sannsynligheten for at en tilfeldig valgt elev har fravær, er $p=0{,}32$ og er uavhengig av de andre elevenes fravær.  

>[!oppgave]
>a) Bestem sannsynligheten for at minst 20 av disse elevene ikke har fravær i russetiden.  

Ledelsen ved skolen hadde en mistanke om at det nye fraværsreglementet som ble innført i august 2016, ville føre til mindre fravær. Før russetiden startet, satte de derfor opp to hypoteser som de ønsket å teste.  

$$
\begin{aligned}
H_{0}&: \quad p=0{,}32 \\
H_{1}&: \quad p<0{,}32
\end{aligned}
$$

De ønsket å bruke et signifikansnivå på 5 %.  

Det var 120 elever i Vg3 på skolen dette skoleåret.  

>[!oppgave]
>b) Hva er det høyeste antall elever som kan ha fravær i russetiden, for at $H_{0}$ skal forkastes?

## Fasit

a) $P(X \leq 7) \approx 0{,}33$
b) Høyst 29 elever med fravær

## Løsningsforslag

### a

La $X$ = antall elever av de 27 som har fravær. $X$ er binomisk fordelt med $n = 27$ og $p = 0{,}32$.

«Minst 20 ikke har fravær» betyr at høyst $27 - 20 = 7$ elever har fravær, altså $X \leq 7$.

$$P(X \leq 7) \approx \underline{\underline{0{,}33}}$$

**Sannsynligheten for at minst 20 av 27 elever ikke har fravær er $\underline{\underline{0{,}33}}$.**

>[!tip] Alternativ metode
>
>La $Y$ = antall elever uten fravær. $Y$ er binomisk fordelt med $n = 27$ og $p = 0{,}68$.
>
>Da er «minst 20 ikke har fravær» direkte $Y \geq 20$:
>$$P(Y \geq 20) \approx 0{,}33$$
>
>Samme svar, men uten å måtte snu på problemstillingen.

### b

La $X$ = antall elever med fravær blant de 120. Under $H_0$ er $X$ binomisk fordelt med $n = 120$ og $p = 0{,}32$. Vi legger inn i GeoGebra og justerer på grensen helt fram til vi finner en sannsynlighet som ligger under signifikansnivået $\alpha$.

![](/img/user/_resources/s2-v19-2-5b-gg.png){width=40%}

$$P(X \leq 29) \approx 0{,}038 < 0{,}05 \quad \checkmark$$
$$P(X \leq 30) \approx 0{,}059 > 0{,}05 \quad \times$$

**Det høyeste antallet elever som kan ha fravær for at $H_0$ forkastes, er $\underline{\underline{29}}$.**

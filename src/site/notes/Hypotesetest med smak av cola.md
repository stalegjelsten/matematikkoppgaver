---
{"tags":["oppgave","hypotesetest","binomisk","diskrete","sannsynlighetsfordelinger","s2","del2"],"temaer":["hypotesetest","binomisk","diskrete sannsynlighetsfordelinger"],"aliases":null,"del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"fag":["s2"],"eksamen":"v23","dg-publish":true,"title":"Hypotesetest med smak av cola","date":"2023-05-27","modified":"2023-05-29","dg-permalink":"/hypotesetest-med-smak-av-cola/","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Binomisk ensidig hypotesetest på colasmaking: punktsannsynlighet, $p$-verdi og finne kritisk verdi ved $n=30$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Binomisk punktsannsynlighet $P(X=6)$ for $n=10$, $p=0{,}5$; angi antakelsene."},{"deloppgave":"b","beskrivelse":"Ensidig hypotesetest med $H_A: p>0{,}5$; $p=0{,}0547$ gir ikke forkast."},{"deloppgave":"c","beskrivelse":"Prøve seg fram i GeoGebra for $n=30$; $X\\ge 20$ gir $p<0{,}05$."}],"permalink":"/hypotesetest-med-smak-av-cola/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","hypotesetest","binomisk","diskrete","sannsynlighetsfordelinger","s2","del2"],"temaer":["hypotesetest","binomisk","diskrete sannsynlighetsfordelinger"],"aliases":null,"del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"fag":["s2"],"eksamen":"v23","title":"Hypotesetest med smak av cola","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Binomisk ensidig hypotesetest på colasmaking: punktsannsynlighet, $p$-verdi og finne kritisk verdi ved $n=30$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Binomisk punktsannsynlighet $P(X=6)$ for $n=10$, $p=0{,}5$; angi antakelsene."},{"deloppgave":"b","beskrivelse":"Ensidig hypotesetest med $H_A: p>0{,}5$; $p=0{,}0547$ gir ikke forkast."},{"deloppgave":"c","beskrivelse":"Prøve seg fram i GeoGebra for $n=30$; $X\\ge 20$ gir $p<0{,}05$."}]}}
---


# Hypotesetest med smak av cola

Marte mener hun kan smake om en colatype er Coca-Cola eller Pepsi-Cola. Birger ønsker å teste om dette kan stemme, ved å gjennomføre en blindtest.

Han fyller tilfeldig 10 glass med cola, og Marte skal smake på dem for å avgjøre hvilken colatype hvert av glassene inneholder.

La $X$ være antall riktige svar Marte gir når hun smaker på 10 glass med tilfeldig colatype.

>[!oppgave]
>a) Bestem $P(X=6)$ dersom Marte bare tipper tilfeldig på en colatype for hvert av de 10 glassene. Hvilke antagelser gjør du når du regner ut denne sannsynligheten?

Marte svarer så godt hun kan, og får riktig i 8 av de 10 tilfellene.

>[!oppgave]
>b) Avgjør ved hjelp av hypotesetesting om det er grunnlag for å si at Marte kan gjenkjenne de to colatypene. Bruk et signifikansnivå på 5 prosent.

Birger synes 10 glass er litt lite i blindtesten. Han vil derfor gjøre en ny blindtest med 30 glass.

>[!oppgave]
>c) Hvor mange riktige svar må Marte minst gi for å overbevise Birger om at hun kan gjenkjenne de to colatypene? Bruk også her et signifikansnivå på 5 prosent. 

## Fasit

a) $P(X=6)=0.205$
b) $p=0.0547$. Ikke forkast.
c) Trenger minst 20 glass.

## Løsningsforslag

### a
Vi starter med noen antagelser:

- Birger velger *helt* tilfeldig om han fyller hvert enkelt glass med Pepsi-Cola eller Coca-Cola
- Marte tipper *helt* tilfeldig for hvert colaglass
- Marte glemmer hva hun har gjettet på de forrige glassene, og smaken setter seg ikke i munnen hennes slik at vi kan anta at forsøkene er uavhengige

Vi kan da behandle dette som et binomisk forsøk med $n=10$ og $p=0.5$.

Vi kan beregne denne sannsynligheten enkelt i GeoGebra, eller med formelen:

$$
P(X=6)=\binom{n}{k}\cdot p^k \cdot(1-p)^{n-k} = \frac{10!}{6!(10-6)!} \cdot {0}.5^6  \cdot 0.5^4= \underline{\underline{0{,}205}}
$$

### b
Vi lar $p$ være sannsynligheten for at Marte klarer å gjette riktig og $X$, antall riktige gjetninger, er testobservator. 

Det skal mye til at Marte er dårligere til å gjenkjenne colaene enn ved tilfeldig gjetting, og jeg er egentlig kun interessert i å finne ut om hun *bedre* enn tilfeldig gjetning. Derfor velger jeg en ensidig hypotesetest. Vi skal bruke signifikansnivået $\alpha=0{,}05$.

$$
\begin{aligned}
H_{0}&: \quad p=0.5 \\ 
H_{1}&: \quad p>0,5 
\end{aligned}
$$

![Bestemme $P(8\leq X)$ i GeoGebra](/img/user/_resources/s2-v23-del2-oppg-3b.png.png)

Ved hjelp av GeoGebra finner jeg at $P(8\leq X)=0,0547$ gitt at $H_{0}$ er sann. 

Siden sannsynligheten $P(8\leq X)=0,0547$ er større enn signifikansnivået $\alpha = 0.05$ så **kan vi *ikke* forkaste $H_0$.**

### c

![Finne hvilken $a$ som gir $P(a\leq X)\leq 0{,}05$](/img/user/_resources/s2-v23-del2-oppg-3c.png)

Jeg brukte sannsynlighetsverktøyet i GeoGebra og endret antallet, $n$, til 30. Deretter dro jeg den lille svarte pila den bortover langs $x$-aksen fram til den beregnede sannsynligheten var mindre enn $0.05$. Det skjedde ved $P(20\leq X)$.

**Dersom Marte gjetter riktig på minst 20 glass så kan hun overbevise Birger om at hun er bedre til å gjenkjenne cola enn en tilfeldig gjetter med et signifikansnivå på 5 %.**

---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["integral","volum","omdreiningslegeme"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"poeng":2,"title":"Jordbær som omdreiningslegeme","status":3,"source":null,"todo":null,"dg-permalink":"/jordbaer-som-omdreiningslegeme/","permalink":"/jordbaer-som-omdreiningslegeme/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["integral","volum","omdreiningslegeme"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"poeng":2,"title":"Jordbær som omdreiningslegeme","status":3,"source":null,"todo":null}}
---


# Jordbær som omdreiningslegeme


> [!danger] Bildene er ikke i målestokk
> I det originale eksamenssettet er bildene i målestokk 1:1, men det er vanskelig å få til her. Ved å måle på arket har jeg funnet av avstanden fra bunnen til toppen (i $y$-retning på arket) er omtrent 4,4 cm.


<!-- two-column start left-width=50% -->

<!-- gap:0.7cm -->

![Tverrsnitt av jordbær i målestokk 1:1](/img/user/_resources/r2-h24-2-3-1.jpeg){width=65%}

---
![Linjal i målestokk 1:1](/img/user/_resources/r2-h24-2-3-2.jpeg){width=20%}

<!-- two-column stop -->


>[!oppgave]
>Bildet viser tverrsnittet av et jordbær i målestokk 1:1. Bruk integrasjon og omdreiningslegeme til å beregne volumet av hele jordbæret. Kommenter formen på omdreiningslegemet ditt og vurder svaret.

## Fasit

$V \approx 35 \, \mathrm{cm}^3$ (avhenger av målinger fra bildet)

## Løsningsforslag

Vi legger et koordinatsystem med origo spissen på jordbæret og måler avstanden fra $x$-aksen til kanten av jordbæret. Jeg har gjort dette i GeoGebra ved å sette ut punkter, se figur &fig:regresjon-jordbar.

Jeg valgte en andregradsmodell siden denne passet «godt nok». Vi ser at modellen følger omrisset av jordbæret relativt godt fram til punkt $H$. Vi underestimerer volumet mellom $C$ og $D$, men vi overestimerer mellom $D$ og $E$. Jeg setter integrasjonsgrensen til 3,65 cm siden toppen av jordbæret «bøyer seg tilbake» inn mot stilkfestet.

![Regresjon og beregning av volum i GeoGebra](/img/user/_resources/r2-h24-2-3-regresjon.png){width=70% #fig:regresjon-jordbar}

Jeg beregner volumet som et omdreiningslegeme med $\pi \int_{a}^{b} \left( f(x) \right)^{2} \, \mathrm{d}x$ i GeoGebra.

> [!warning] Tolkning av oppgavetekst
> Jeg tolker oppgaveteksten som at jeg skal finne volumet av jordbæret før det ble delt i to. Volumet av det halve jordbæret på bildet vil være omtrent halvparten av omdreiningslegemet.

**Volumet av jordbæret er omtrent $\underline{\underline{ 35 \mathrm{~cm}^{3} }}$.**

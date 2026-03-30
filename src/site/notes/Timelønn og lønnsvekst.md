---
{"tags":["oppgave","prosent","eksponentialfunksjoner","regresjon","økonomi","s1","del2"],"temaer":["prosent","eksponentialfunksjoner","regresjon","økonomi"],"alias":[null],"del":2,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":1}],"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Timelønn og lønnsvekst","date":"2023-05-29","modified":"2023-06-01","permalink":"/timelonn-og-lonnsvekst/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","prosent","eksponentialfunksjoner","regresjon","økonomi","s1","del2"],"temaer":["prosent","eksponentialfunksjoner","regresjon","økonomi"],"alias":[null],"del":2,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":1}],"fag":"s1","eksamen":"v23","title":"Timelønn og lønnsvekst","date":"2023-05-29","modified":"2023-06-01"}}
---


# Timelønn og lønnsvekst

Tabellen nedenfor viser timelønnen til en yrkesgruppe for noen år i perioden 2008-2022.

| Årstall  |  2008  |  2010  |  2013  |  2015  |  2019  |  2022  |
| :------- | :----: | :----: | :----: | :----: | :----: | :----: |
| Timelønn | 272,55 | 285,50 | 307,30 | 314,00 | 327,60 | 340,10 |

>[!oppgave]
>a) Hva har den gjennomsnittlige årlige prosentvise veksten i lønn vært i årene 2008-2022?

>[!oppgave]
>b) Bruk tallene i tabellen til å lage en eksponentiell funksjon $g$ som er en modell for timelønnen til denne yrkesgruppen $x$ år etter 2008.

Per og Amalie hadde begge en timelønn på 272,55 kroner i 2008. Per har hatt en lønnsutvikling tilsvarende tabellen i starten av oppgaven, mens Amalies lønn har steget med 2,3 prosent per år. De har begge jobbet 1700 timer per år.

>[!oppgave]
>c) Bestem den samlede lønnen til Amalie i årene 2008 til 2022. Bestem også den samlede lønnen til Per i disse årene.

Fagforeningen til Per krever at han i 2025 skal ha samme timelønn som Amalie. Vi går ut fra at Amalie fortsatt vil ha en lønnsvekst på 2,3 prosent per år.

>[!oppgave]
>d) Hvor mange prosent må lønnen til Per gå opp hvert år dersom dette kravet skal innfris?

## Fasit

a) 1,59 %
b) $g(x)=277{,}8\cdot 1{,}0155^x$
c) Her kan ulike svar godtas. Amalies samlede lønn er omtrent 8 188 600 kr i perioden. Pers samlede lønn er omtrent 7 906 600 kr
d) Omtrent 2,19 %

## Løsningsforslag

### 2-1a
Timelønna har vokst med $340{,}10-272{,}55=67{,}55$ kr i løpet av disse 14 årene. Vi kan sette opp dette uttrykket for å bestemme vekstfaktoren $x$

$$
\begin{aligned}
272{,}55\cdot x^{14} &= 340{,}10\\
x &= \sqrt[14]{ \frac{340{,}10}{272{,}55} }\\
x &=1{,}01594
\end{aligned}
$$

**Den gjennomsnittlige årlige prosentvise økninga har vært 1,59 %.**

### 2-1b
Jeg brukte regresjon i GeoGebra og fant at en god eksponentialmodell for lønnsveksten er 

$$
g(x)=277{,}8\cdot 1{,}0155^x
$$
![](/img/user/_resources/s1-v23-2-1-b.png)
### 2-1c
Hvis man skal regne Per sin lønn riktig så må man egentlig vite lønna hvert år og summere opp årslønnene som ei rekke. Jeg bruker heller modell $g$ som en tilnærming til Pers lønn.

For min del er det raskest å legge inn formelen `=272,55*1,023^(2008-A2)*1700` i cellene til Amalie for å regne ut hennes lønn, og tilsvarende for Per.

| År   | Per               | Amalie           |
|:----:|:-----------------:|:----------------:|
| 2008 |  kr 472 260,00    |  kr 463 335,00   |
| 2009 |  kr 479 580,03    |  kr 473 991,71   |
| 2010 |  kr 487 013,52    |  kr 484 893,51   |
| 2011 |  kr 494 562,23    |  kr 496 046,07   |
| 2012 |  kr 502 227,94    |  kr 507 455,12   |
| 2013 |  kr 510 012,48    |  kr 519 126,59   |
| 2014 |  kr 517 917,67    |  kr 531 066,50   |
| 2015 |  kr 525 945,40    |  kr 543 281,03   |
| 2016 |  kr 534 097,55    |  kr 555 776,50   |
| 2017 |  kr 542 376,06    |  kr 568 559,36   |
| 2018 |  kr 550 782,89    |  kr 581 636,22   |
| 2019 |  kr 559 320,02    |  kr 595 013,86   |
| 2020 |  kr 567 989,48    |  kr 608 699,17   |
| 2021 |  kr 576 793,32    |  kr 622 699,25   |
| 2022 |  kr 585 733,62    |  kr 637 021,34   |
| Sum  |  kr 7 906 612,22  |  kr 8 188 601,24 |

**Amalies samlede lønn er omtrent 8 188 600 kr i perioden. Pers samlede lønn er omtrent 7 906 600 kr.**

### 2-1d
Igjen så er det enklest og raskest for meg å bruke målsøking i Excel for å løse oppgaver som dette. Jeg lager en celle med vekstfaktoren til Per og målsøker slik at lønna i 2022 skal bli lik for begge.
![](/img/user/_resources/s1-v23-2-1-d.png)

Vekstfaktoren ble endret til 1,02185.

**Lønnen til Per må stige med omtrent 2,185 % hvert år for at de skal ha lik lønn i 2025.**

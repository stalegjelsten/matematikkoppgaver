---
{"tags":["oppgave","regresjon","logistisk","funksjon","derivasjon","integrasjon","funksjoner","tolkning","av","integraler","s2","del2"],"temaer":["regresjon","logistisk funksjon","derivasjon","funksjoner","tolkning av integraler","integral","samlet mengde"],"aliases":null,"del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2},{"fag":"r2","del":2,"oppgave":1}],"fag":["s2","r2"],"eksamen":"v23","dg-publish":true,"title":"Regresjon på størrelsen av det norske musikkstrømmemarkedet","date":"2023-05-29","modified":"2023-05-29","permalink":"/regresjon-pa-storrelsen-av-det-norske-musikkstrommemarkedet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","regresjon","logistisk","funksjon","derivasjon","integrasjon","funksjoner","tolkning","av","integraler","s2","del2"],"temaer":["regresjon","logistisk funksjon","derivasjon","funksjoner","tolkning av integraler","integral","samlet mengde"],"aliases":null,"del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2},{"fag":"r2","del":2,"oppgave":1}],"fag":["s2","r2"],"eksamen":"v23","title":"Regresjon på størrelsen av det norske musikkstrømmemarkedet","date":"2023-05-29","modified":"2023-05-29","permalink":"/regresjon-pa-storrelsen-av-det-norske-musikkstrommemarkedet/"}}
---


# Regresjon på størrelsen av det norske musikkstrømmemarkedet

Tabellen nedenfor viser hvor mange millioner kroner som ble brukt på strømming av musikk i Norge noen år i perioden 2008-2018.

| År        | 2008 | 2010 | 2012 | 2014 | 2016 | 2018 |
| --------- |:----:|:----:|:----:|:----:|:----:|:----:|
| Strømming |  2   |  70  | 246  | 456  | 582  | 655  |

>[!oppgave]
>a) Lag en modell $F$ som du kan bruke til å bestemme hvor mange millioner kroner som ble brukt på strømming i Norge per år i perioden 2008-2018 og årene etterpå. Velg $x$-verdier slik at $F(0)$ gir hvor mange millioner kroner som ble brukt i 2008. Begrunn valget av modell.

Nedenfor ser du fire formler.

$$
I=\int_{-0{,}5}^{10{,}5} F(x) \mathrm{d} x, \quad G=\frac{1}{5} \int_{2{,}5}^{7{,}5} F(x) \mathrm{d} x, \quad S=\sum_{i=0}^{10} F(i), \quad D=\frac{F(5{,}001)-F(5)}{0{,}001}
$$

>[!oppgave]
>b) Bestem $I, G, S$ og $D$.

>[!oppgave]
>c) Gi en praktisk tolkning av svarene i oppgave b. 

## Fasit

Mange modeller og ulike tolkninger kan fungere. Se løsningsforslaget.

## Løsningsforslag

### 2-2a
Jeg brukte regresjonsverktøyet i GeoGebra valgte den logistiske modellen:

$$\underline{\underline{F(x)=\frac{660{,}37}{1+30{,}72\,e^{-0{,}7066x}}}}$$

Logistiske funksjoner flater ut ved en horisontal asymptote (i dette tilfellet 660,37 millioner kr). Selv om det kanskje høres usannsynlig ut at markedet for musikkstrømming ikke kommer til å vokse, så tror jeg at nærmest all musikklytting *allerede* er blitt flyttet fra formater som CD og nedlasting, til strømming. Derfor er det usannsynlig veksten kommer til å fortsette i samme tempo. En logistisk modell har også asymptote ved $y=0$. Det stemmer også godt med at strømmemarkedet var svært lite (kanskje ikke-eksisterende?) i Norge før Spotify ble lansert i 2008.

*Kommentar: Man kan også argumentere for andre regresjonsmodeller, f.eks. vil en tredjegradsmodell passe fint. Vær imidlertid klar over at tredjegradsmodellen sannsynligvis vil ha et mindre gyldighetsområde siden denne har negativ vekstfart både før 2008 og etter 2018. Sensorveiledninga sier at flere ulike modeller kan gi full uttelling så lenge de begrunnes godt.* 

![Regresjon på størrelsen av musikkmarkedet](/img/user/_resources/s2-v23-del2-oppg-2a.png)

### 2-2b
Se utklippet fra CAS.

![Beregning av verdier i CAS](/img/user/_resources/s2-v23-del2-oppg-2b.png.png)

$$
\begin{aligned}
I&=3729{,}0\\
G&=344{,}5\\
S&=3729{,}1\\
D&=116{,}3
\end{aligned}
$$

### 2-2c
$I$ beregner integralet under $F$ fra $x=-0{,}5$ til $x=10{,}5$. Dette gir en tilnærmingsverdi for de samlede inntektene fra musikkstrømming i Norge fra og med 2008 til og med 2018. De samlede inntektene er omtrent 3729 millioner kr.

$G$ finner en tilnærmingsverdi de samlede inntektene fra og med 2011 til og med 2015 ved å integrere, deretter divideres svaret med 5. $G$ finner altså de gjennomsnittlige årlige inntektene mellom år 2011 og 2015. De gjennomsnittlige årlige inntektene i perioden er 344,5 millioner kr.

$S$ gir oss de samlede inntektene fra 2008 til 2018 beregnet som summen av en rekke, altså ved å legge sammen inntektene i hvert år. De samlede inntektene i perioden er omtrent 3729 millioner kr.

$D$ gir oss omtrent momentan vekstfart i 2013. Vi kjenner igjen uttrykket for den deriverte hvor vi har $f'(x)=\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$. Her er $x=5$ og $h=0{,}001$. Den momentane vekstfarten i 2013 er omtrent 116,3 millioner kr per år.

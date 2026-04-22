---
{"tags":["matematikk","1t","1p","excel","utforskning","del2","oppgave"],"temaer":["excel","utforskning","optimering","funksjoner"],"alias":[null],"fag":["1t","1p"],"del":2,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":2},{"fag":"1p","del":2,"oppgave":2}],"eksamen":"v23","dg-publish":true,"title":"Bredden av teltplassen","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":3,"vanskegrad":2,"beskrivelse":"Sette opp arealet $A(x)=(80-2x)\\cdot x$, systematisere med tabell og vise maksimum grafisk.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne arealet direkte når lengden er 60 m."},{"deloppgave":"b","kategori":3,"beskrivelse":"Lage systematisk tabell over ulike areal og argumentere for Hermans påstand."},{"deloppgave":"c","kategori":3,"beskrivelse":"Sette opp $A(x)=(80-2x)\\cdot x$, tegne graf og finne toppunktet."}],"dg-permalink":"/bredden-av-teltplassen/","permalink":"/bredden-av-teltplassen/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["matematikk","1t","1p","excel","utforskning","del2","oppgave"],"temaer":["excel","utforskning","optimering","funksjoner"],"alias":[null],"fag":["1t","1p"],"del":2,"oppgave":2,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":2},{"fag":"1p","del":2,"oppgave":2}],"eksamen":"v23","title":"Bredden av teltplassen","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":3,"vanskegrad":2,"beskrivelse":"Sette opp arealet $A(x)=(80-2x)\\cdot x$, systematisere med tabell og vise maksimum grafisk.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Beregne arealet direkte når lengden er 60 m."},{"deloppgave":"b","kategori":3,"beskrivelse":"Lage systematisk tabell over ulike areal og argumentere for Hermans påstand."},{"deloppgave":"c","kategori":3,"beskrivelse":"Sette opp $A(x)=(80-2x)\\cdot x$, tegne graf og finne toppunktet."}]}}
---


# Bredden av teltplassen

![1t eksamen v2023 teltplass.excalidraw.png](/img/user/_resources/1t%20eksamen%20v2023%20teltplass.excalidraw.png)

En gruppe speidere har slått opp telt ved en elv. De har et tau som er 80 m langt, og fire pinner. Tauet og pinnene skal de bruke til å sette opp et gjerde rundt teltet. Området de gjerder inn, skal ha form som et rektangel, og de vil ikke sette opp gjerde langs elven. Se skissen ovenfor.

>[!oppgave]
>a) Hvor stort blir arealet av området dersom de velger at lengden skal være 60 meter?

Herman påstår at arealet av området blir størst dersom lengden er dobbelt så lang som bredden.

>[!oppgave]
>b) Lag en systematisk oversikt som viser arealet av ulike områder som de kan gjerde inn. Bruk oversikten til å argumentere for at Herman sin påstand kan være riktig.

Josefine lurer på om de kan tegne en graf som viser at Herman har rett. Hun prøver å sette opp et funksjonsuttrykk som hun kan bruke.

>[!oppgave]
>c) Sett opp et funksjonsuttrykk for Josefine. Tegn grafen og vis at Hermann sin påstand er riktig. 

## Fasit

a) 600 m²
b) Herman har rett
c) En mulighet er $A(x)=x\cdot (80-2x)$

## Løsningsforslag

### a
Med 80 m tau og et område med lengde 60 m så har de 20 m igjen å fordele til de to siste sidene. Matematisk kan vi skrive $\frac{80-60}{2}=10$. Bredden blir altså 10 m.

$$
A=10\cdot 60=600
$$

**Arealet av området er 600 m².**

### b
Jeg satte opp en oversikt i Excel, se formlene i formelutklippet. Vi ser at arealet øker når bredden øker helt fram til lengden er 40 m og bredden er 20 m, deretter minker arealet. 

![Del 2 oppgave 2b. Oversikt over lengde og bredde av teltplass](/img/user/_resources/1t-v23-2-2b.png){ width=80% } 

**Hermann har rett i at vi får det største arealet dersom lengden er dobbelt så lang som bredden.**

### c
La oss kalle bredden i meter for $x$. Da må lengden i meter være $80-2x$. Vi kan sette opp et funksjonsuttrykk for arealet $A(x)$ der bredden er $x$ meter.

$$
A(x)=(80-2x)\cdot x
$$

![Del 2 oppgave 2c. Areal av teltplass som funksjon av bredden](/img/user/_resources/1t-v23-2-2c.png) \ 

Jeg tegnet denne grafen i GeoGebra og fant toppunktet, se punkt $B$. 
**Toppunktet ligger ved bredden $x=20$, så Hermann sin påstand er riktig.**

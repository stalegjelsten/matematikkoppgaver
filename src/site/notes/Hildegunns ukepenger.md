---
{"aliases":null,"tags":["oppgave","excel","rekker","s2","r2","del2"],"temaer":["excel","rekker","aritmetisk rekke","geometrisk rekke"],"alias":["Davids ukepenger"],"del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":4}],"fag":["s2","r2"],"eksamen":"v23","dg-publish":true,"title":"Hildegunns ukepenger","date":"2023-05-29","modified":"2024-09-03","dg-permalink":"/hildegunns-ukepenger/","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Sammenligne aritmetisk og geometrisk ukelønn i regneark; finne uke der tilbud 2 passerer tilbud 1 ukentlig og samlet.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Regne ut de fire første leddene i $a_n=a_{n-1}+10$ og $b_n=b_{n-1}\\cdot 1{,}05$."},{"deloppgave":"b","beskrivelse":"Finne uke der $b_n>a_n$ for første gang (uke 28)."},{"deloppgave":"c","beskrivelse":"Finne uke der $\\sum b_i > \\sum a_i$ for første gang (uke 39)."}],"permalink":"/hildegunns-ukepenger/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"tags":["oppgave","excel","rekker","s2","r2","del2"],"temaer":["excel","rekker","aritmetisk rekke","geometrisk rekke"],"alias":["Davids ukepenger"],"del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":4}],"fag":["s2","r2"],"eksamen":"v23","title":"Hildegunns ukepenger","date":"2023-05-29","modified":"2024-09-03","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Sammenligne aritmetisk og geometrisk ukelønn i regneark; finne uke der tilbud 2 passerer tilbud 1 ukentlig og samlet.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Regne ut de fire første leddene i $a_n=a_{n-1}+10$ og $b_n=b_{n-1}\\cdot 1{,}05$."},{"deloppgave":"b","beskrivelse":"Finne uke der $b_n>a_n$ for første gang (uke 28)."},{"deloppgave":"c","beskrivelse":"Finne uke der $\\sum b_i > \\sum a_i$ for første gang (uke 39)."}]}}
---


# Hildegunns ukepenger

Foreldrene til Hildegunn/David[^1] vil gi hen ukepenger. De gir hen to ulike tilbud. I tilbud 1 får hen 100 kroner den første uken. Beløpet $a_{n}$ som hen får i uke $n$, er gitt ved den rekursive formelen

$$
a_{n}=a_{n-1}+10
$$

I tilbud 2 får hen 100 kroner den første uken. Beløpet $b_{n}$ som hen får i uke $n$, er gitt ved den rekursive formelen

$$
b_{n}=b_{n-1} \cdot 1,05
$$

>[!oppgave]
>a) Bestem det ukentlige beløpet hen får de fire første ukene med hvert av de to tilbudene.
>b) Hvor mange uker tar det før tilbud 2 vil gi mer ukelønn enn tilbud 1?
>c) Hvor mange uker tar det før tilbud 2 til sammen vil gi mer lønn enn tilbud 1 ?

## Fasit

a) Den fjerde uka får hen 130 kr og 115,76 kr (de andre beløpene kan du se i løsningforslaget)
b) I den 28. uka
c) I den 39. uka

## Løsningsforslag

Jeg gjorde disse oppgavene i Excel, se regnearket under.

![](/img/user/_resources/s2-v23-del2-oppg-4a.png.png)

### a
De ukentlige beløpene for de fire første ukene er markert i blått i utklippet. Det venstre blå rektangelet viser beløpene for tilbud 1, det høyre blå rektangelet viser beløpene for tilbud 2. Vi kan se at tilbud 1 vokser fortere enn tilbud 2 i starten.

### b
**I uke 28 så vil tilbud 2 for første gang gi større utbetaling enn tilbud 1**, se den røde markering i Excel-arket.

### c
**I uke 39 så vil tilbud 2 for første gang ha gitt større *samlet utbetaling* enn tilbud 1**, se den gule markeringen i Excel-arket.

[^1]: Oppgaven er både gitt [[Fagsider/S2\|S2]] og [[Fagsider/R2\|R2]] ved eksamen våren 2023. I S2-eksamen het personen Hildegunn, og i R2-eksamen het personen David. Derfor bruker jeg pronomenen hen i denne oppgaven.

---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["omvendt proporsjonalitet","funksjoner","tolke grafer","stigningstall"],"fag":["2p-y"],"eksamen":"v24","del":2,"oppgave":1,"poeng":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1}],"title":"Hytteleie omvendt proporsjonal funksjon","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Omvendt proporsjonal modell $H(x)=18\\,000/x$ — tolke modellparametre, finne grafisk skjæring med $y=2250$, og beregne stigningstall mellom $(6, H(6))$ og $(12, H(12))$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Tolke $H(1)=18\\,000$ som samlet hyttepris og $1 \\le x \\le 12$ som antall personer."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Tegne graf i GeoGebra, finne skjæring med horisontal linje, og tolke skjæringspunktet praktisk."},{"deloppgave":"c","beskrivelse":"Stigningstall $(H(12)-H(6))/(12-6)=-250$ kr/person; gjennomsnittlig prisnedgang per ekstra deltaker."}],"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"dg-permalink":"/hytteleie-omvendt-proporsjonal-funksjon/","permalink":"/hytteleie-omvendt-proporsjonal-funksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["omvendt proporsjonalitet","funksjoner","tolke grafer","stigningstall"],"fag":["2p-y"],"eksamen":"v24","del":2,"oppgave":1,"poeng":6,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1}],"title":"Hytteleie omvendt proporsjonal funksjon","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Omvendt proporsjonal modell $H(x)=18\\,000/x$ — tolke modellparametre, finne grafisk skjæring med $y=2250$, og beregne stigningstall mellom $(6, H(6))$ og $(12, H(12))$.","deloppgaver":[{"deloppgave":"a","vanskegrad":1,"beskrivelse":"Tolke $H(1)=18\\,000$ som samlet hyttepris og $1 \\le x \\le 12$ som antall personer."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Tegne graf i GeoGebra, finne skjæring med horisontal linje, og tolke skjæringspunktet praktisk."},{"deloppgave":"c","beskrivelse":"Stigningstall $(H(12)-H(6))/(12-6)=-250$ kr/person; gjennomsnittlig prisnedgang per ekstra deltaker."}],"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Hytteleie omvendt proporsjonal funksjon

Noen venner vil leie ei hytte en uke i sommerferien.

Funksjonen $H$ gitt ved

$$H(x) = \frac{18\,000}{x} \quad , \quad 1 \le x \le 12$$

er en modell for prisen $H(x)$ kroner hver av vennene må betale i leie dersom $x$ venner blir med på hytteturen.

>[!oppgave]
>a) Hva kan du ut fra denne modellen si om hytta vennene vil leie? >
>b) Tegn grafen til $H$, og bestem skjæringspunktet mellom grafen og den rette linjen $y = 2250$. Gi en praktisk tolkning av koordinatene til skjæringspunktet. >
>c) Bestem stigningstallet til den rette linjen som går gjennom punktene $(6, H(6))$ og $(12, H(12))$. Gi en praktisk tolkning av svaret.

## Fasit

a) Hytta koster 18 000 kr å leie, maks 12 venner
b) Skjæringspunkt $(6, 3000)$, 6 personer betaler 3000 kr
c) Stigningstall $-250$

## Løsningsforslag

### a
Hvis det bare 1 person som skal på hyttetur så blir prisen per person
$$
H(1)=\frac{18000}{1}=18000
$$
Det koster altså 18 000 kr å leie hytta.

I tillegg får vi oppgitt definisjonsmengden $1\leq x\leq 12$. Det betyr at det maks er 12 venner som skal på hyttetur, kanskje fordi det ikke er plass til flere på hytta.

**Det koster 18 000 kroner å leie hytta, og det er maksimalt 12 venner som kan dra på hyttetur.**

### b
Jeg legger inn funksjonsuttrykket i GeoGebra og avgrenser funksjonen til definisjonsmengden ved å bruke `Funksjon()`-kommandoen. Deretter legger jeg inn $y=2250$ og finner skjæringspunktet mellom funksjonene. 

**Skjæringspunktet mellom grafen og den rette linja er $(8, 2250)$, se punkt $A$ i utklippet. Det betyr at de trenger å være 8 personer som spleiser på leia for at prisen skal bli 2250 kr.**

![](/img/user/_resources/2py-v24-2-1.png)

### c
Jeg setter ut punktene i koordinatsystemet ved å skrive dem inn slik de står i oppgaveteksten, se punkt $B$ og $C$. De to punktene ligger på grafen til $H$ ved 6 og 12 venner. Jeg bruker linjeverktøyet for å lage en linje mellom punktene, og stigningsverktøyet til å måle stigningen til linja.

**Stigningstallet for linja er -250, se verdi $a$. Stigningstallet til linja forteller oss at prisen per deltaker i gjennomsnitt blir 250 kr rimeligere per person, dersom vi øker antallet deltakere fra 6 til 12.**

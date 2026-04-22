---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["trigonometri","integral","derivasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"poeng":6,"title":"Russebil med trigonometrisk fartsfunksjon","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":3,"beskrivelse":"Tolke sinusmodell for fart – første tidspunkt med gjennomsnittsfart, vendepunkter med størst akselerasjon, og integrallikning for kjøretid.","deloppgaver":[{"deloppgave":"a","vanskegrad":2,"beskrivelse":"Bruke likevektslinjen $y = 54$ til å finne første bunnpunkt der gjennomsnittsfarten er 54 km/t."},{"deloppgave":"b","beskrivelse":"Akselerasjonens ekstremverdier ligger i vendepunktene til $v$; finne dem via $v''(t) = 0$ eller likevektslinjen."},{"deloppgave":"c","vanskegrad":2,"beskrivelse":"Løse $\\int_0^x v(t)\\,dt = 2$ i CAS for å finne kjøretid i timer."}],"dg-permalink":"/russebil-med-trigonometrisk-fartsfunksjon/","permalink":"/russebil-med-trigonometrisk-fartsfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["trigonometri","integral","derivasjon"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"poeng":6,"title":"Russebil med trigonometrisk fartsfunksjon","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":3,"beskrivelse":"Tolke sinusmodell for fart – første tidspunkt med gjennomsnittsfart, vendepunkter med størst akselerasjon, og integrallikning for kjøretid.","deloppgaver":[{"deloppgave":"a","vanskegrad":2,"beskrivelse":"Bruke likevektslinjen $y = 54$ til å finne første bunnpunkt der gjennomsnittsfarten er 54 km/t."},{"deloppgave":"b","beskrivelse":"Akselerasjonens ekstremverdier ligger i vendepunktene til $v$; finne dem via $v''(t) = 0$ eller likevektslinjen."},{"deloppgave":"c","vanskegrad":2,"beskrivelse":"Løse $\\int_0^x v(t)\\,dt = 2$ i CAS for å finne kjøretid i timer."}]}}
---


# Russebil med trigonometrisk fartsfunksjon

Anders og Ivana har kjøpt seg russebil. De skal kjøre bilen til en garasje, men på turen begynner motoren å fuske. Farten $v$ følger funksjonen

$$v(t) = -6\sin\left(360t - \frac{\pi}{2}\right) + 54$$

Her er $v$ gitt i km/t, og $t$ er antall timer etter at motoren har begynt å fuske.

>[!oppgave]
>a) Bestem det første tidspunktet gjennomsnittsfarten blir 54 km/t.
>b) På hvilke tidspunkt har bilen størst akselerasjon når den kjører med farten $v$? Hvor stor er denne akselerasjonen?

Når bilen begynner å fuske, er det 2 km til garasjen som bilen skal parkeres i.

>[!oppgave]
>c) Hvor lenge må Anders og Ivana kjøre for å komme til garasjen, når bilen kjører med farten $v$?

## Fasit

a) Gjennomsnittsfart 54 km/t etter $\approx 0{,}00873 \, \mathrm{t}$ (≈ 31 s)
b) Størst akselerasjon ved vendepunktene: $\approx 0{,}00436 \, \mathrm{t}$ og $\approx 0{,}01309 \, \mathrm{t}$
c) $\approx 0{,}03684 \, \mathrm{t}$ (≈ 2 min 13 s)

## Løsningsforslag

![Løsning av oppgave 4 del 2 i CAS](/img/user/_resources/r2-h24-2-4.png)

### a
Vi ser at likevektslinja er ved 54 km/t, og at sinusfunksjonen har amplituden 6 km/t, samt at den er faseforskjøvet slik vi er allerede har toppfarten 60 km/t ved tiden $t=0$. Dermed kan vi konkludere med at gjennomsnittsfarten må være 54 km/t i det vi kommer til fartens første bunnpunkt. Ut fra grafen i GeoGebra ser vi at dette er etter 0,00873 timer.

Vi kan også finne gjennomsnittet av funksjonen slik vi har gjort i linje 2 i CAS i GeoGebra. 

**Gjennomsnittsfarten var 54 km/t for første gang etter 0,00873 timer eller 31 sekunder.**

### b
Bilen har størst akselerasjon i vendepunktene. Alle vendepunktene ligger langs likevektslinja $y=54$, og vi kan også finne dem ved å løse $v''(t)=54$, se linje 3 i CAS.

Perioden til funksjonen er 0,01745 timer eller 63 sekunder, se linja mellom $B$ og $D$ i figuren.

**Akselerasjonen har sin største negative verdi etter 0,00436 timer eller 16 sekunder, og deretter hvert 63 sekund etter dette.** Se punkt $C$ i figuren.

**Akselerasjonen har sin største positive verdi etter 0,01309 timer eller 47 sekunder, og deretter hvert 63 sekund etter dette.** Se punkt $D$ i figuren.

### c
Vi kan sette opp likningen (se linje 5 i CAS)
$$
\int_{0}^{x} v(t) \, dt =2 \implies x=0{,}03684
$$

**Anders og Ivana må kjøre i 0,03684 timer eller ca 2,21 minutter for å komme til garasjen.**

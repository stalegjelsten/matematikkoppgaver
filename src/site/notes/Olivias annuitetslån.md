---
{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":[],"dg-publish":true,"temaer":["lån","rekker","excel","cas"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Olivias annuitetslån","source":null,"todo":null,"status":3,"permalink":"/olivias-annuitetslan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":[],"temaer":["lån","rekker","excel","cas"],"fag":["s2"],"eksamen":"v24","del":2,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"title":"Olivias annuitetslån","source":null,"todo":null,"status":3}}
---


# Olivias annuitetslån


Olivia tar opp et annuitetslån på 2 500 000 kroner for å kjøpe bolig. Hun velger årlige terminer og en nedbetalingstid på 25 år. Det første terminbeløpet skal betales om ett år. Renten er på 5,5 % per år.

>[!oppgave]
>a) Hvor store blir de årlige terminbeløpene?

Etter 5 år vil Olivia utvide lånet for å pusse opp badet. Hun håper å få låne 500 000 kroner ekstra til samme rente, men hun vil ikke forlenge nedbetalingstiden på lånet.

>[!oppgave]
>b) Hvor store blir de nye terminbeløpene?

Olivia vet at dersom de nye terminbeløpene blir for store, må hun forlenge nedbetalingstiden.

>[!oppgave]
>c) Hvor lang blir nedbetalingstiden dersom hun betaler 200 000 kroner hver termin etter at hun har utvidet lånet?

## Fasit

a) 186 373 kr
b) 228 213 kr
c) 31 år fra starten, eller 26 år etter utvidelsen av lånet

## Løsningsforslag

Jeg velger å løse disse oppgavene i CAS, men jeg har tatt med et eksempel på løsning i regneark på oppgave 3c), se nedenfor.

![Utklipp til oppgave 2-3](/img/user/_resources/s2-v24-2-3-cas.png)

### 2-3a
Summen av nåverdiene til terminbeløpene skal bli lik lånebeløpet. Jeg setter opp dette som en likning i CAS med `Sum((x/1.055^i), i, 1, 25) = 25000000` og løser, se linje 1 i utklippet.

**Terminbeløpet er 186 373 kr.**

### 2-3b
Jeg setter opp det det ekstra lånet som et nytt lån til samme rente med 20 års nedbetalingstid. Jeg regner ut terminbeløpet til dette lånet på samme måte som i a), og får terminbeløpet 41 839,67 kr. Se linje 2 i utklippet. 

Olivia må betale for begge lånene fra år 5 og utover, se linje 3.

**Det nye terminbeløpet blir 228 213 kr fra år 5 og utover.**

### 2-3c
Etter 5 år så har Olivia allerede betalt ned lånet med kr 272 767, se linje 4.

I linje 5 så setter jeg opp en likning. På venstre side har vi summen av nåverdiene til terminbeløpene, men med ukjent antall terminer. På høyre side har vi lånebeløpet etter 5 år, som blir det originale lånebeløpet og ekstralånet, minus 272 767 kr. Fra CAS ser jeg at det tar 25,89 år etter de 5 første årene før lånet er nedbetalt. Jeg runder opp til 26 siden det er først i dette året at lånet er tilbakebetalt.

**Den nye tilbakebetalingstiden blir 31 år.**

>[!tip] Løsning med regneark
>
>Det er mulig å gjøre alle deloppgavene i denne oppgaven i regneark (i hvert fall hvis du bruker målsøking).
>
>Nedenfor har jeg løst oppgave c) i regneark ved å sette opp lånet og beregne renter for hvert år. I år 5 så legger jeg til 500 000 kr ekstra på lånet (celle `C43`) og endrer terminbeløpet til 200 000 kr (celle `E43`). 
>
>Deretter fyller jeg bare formlene nedover og utvider tabellen fram til jeg ser at lånet er tilbakebetalt. 
>
>Som vi ser er lånet fullstendig tilbakebetalt i år 31 hvor avdragene er større enn restlånet.

![Utklipp av regneark til oppgave 2-c](/img/user/_resources/s2-v4-2-3-excel.png)

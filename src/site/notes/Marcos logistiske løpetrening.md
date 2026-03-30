---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"dg-publish":true,"temaer":["logistisk funksjon","regresjon","samlet mengde"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"1","oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Marcos logistiske løpetrening","source":null,"todo":null,"status":3,"permalink":"/marcos-logistiske-lopetrening/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":null,"temaer":["logistisk funksjon","regresjon","samlet mengde"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"1","oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"title":"Marcos logistiske løpetrening","source":null,"todo":null,"status":3}}
---


# Marcos logistiske løpetrening


Marco skal løpe maraton og starter løpetrening. I tabellen nedenfor ser du hvor mange kilometer han løp noen av ukene etter at han startet treningen.

| Uker etter treningsstart $(t)$      |  1  |  5  | 10  | 15  | 20  |
| :---------------------------------- | :-: | :-: | :-: | :-: | :-: |
| Antall kilometer løpt per uke $(L)$ | 14  | 32  | 80  | 115 | 145 |

>[!oppgave]
>a) Vis at funksjonen $L$ gitt ved
>
>$$L(t)=\frac{156{,}31}{1+12{,}21 e^{-0{,}24 t}}$$
>
>er en god modell for sammenhengen mellom uker etter treningsstart ($t$) og antall kilometer løpt per uke ($L$).
>
>Forklar hvorfor en modell av denne typen kan passe godt til denne praktiske situasjonen.
>
>b) Når økte antallet løpte kilometer per uke raskest, ifølge modellen?
>
>Hvor stor var økningen da?

Marco merket etter noen uker at løpeskoene begynte å bli slitt, og at han trengte nye sko. Han bestemte seg for ả kjøpe nye sko etter å ha løpt totalt 500 km.

>[!oppgave]
>c) Hvor mange uker hadde Marco løpt da han kjøpte seg nye sko? 
>
>Hvor mange kilometer hadde han løpt i gjennomsnitt per uke før dette?

## Fasit

b) Ved $t=10{,}4$, det vil si i den 11. uka. Økningen var da 9,4 km per uke.
c) Litt under 12 uker, med 43–45 km per uke i gjennomsnitt avhengig av hvordan man gjør tilnærmingen.

## Løsningsforslag

### 2-1a
Jeg la inn dataene i GeoGebra og gjorde en regresjonsanalyse med logistisk modell. Som vi ser fra funksjonen som GeoGebra foreslår, så passer funksjonen $L(t)$ godt til denne situasjonen.
$$
L(t)=\frac{156{,}31}{1+12{,}21e^{-0{,}24t}}
$$

![Regresjon av logistisk funksjon i GeoGebra](/img/user/_resources/s2-h24-2-1a.png)

En logistisk modell vil passe godt for denne typen situasjon, siden veksten vil avta før funksjonen nærmer seg en øvre grense. Den øvre grensen er i dette tilfellet 156,3 km. Det høres ut som en rimelig øvre grense for maratontrening (Jakob Ingebrigtsen, som er verdensmester på 1500 m, trener opp mot 180 km i uka på det meste).

### 2-1b

![Løsning av oppgave 1a og 1b del 2 i CAS](/img/user/_resources/s2-h24-2-1.png)

Vi vet at funksjonen vokser raskest i vendepunktet, så vi finner dette med GeoGebra i linje 2. $t=10{,}43$ tilsvarer at vi er omtrent midtveis i den ellevte uka. Økningen i vendepunktet er det samme som den deriverte til funksjonen i vendepunktet, se linje 3 i GeoGebra.

**Antall løpte kilometer øker raskest i den ellevte uka, og økningen er da på omtrent 9,4 km per uke.**

### 2-1c
Vi kan løse denne oppgaven på flere måter, men oppgaveteksten legger på mange måter opp til at vi skal bruke funksjonsuttrykket fra a), og finne ut hvor mange uker det går før arealet under grafen blir 500 km.

Å anta at $L(t)$ har tilnærmet kontinuerlig endring kan være en god tilnærming siden Marco sannsynligvis løper flere ganger i uka,

Vi kan finne en god tilnærming til svaret ved å løse likningen
$$
\int _{0}^{b}L(t) \, \mathrm{d}t=500 
$$
og deretter finne gjennomsnittet ved å dividere 500 km med antall uker $b$.

Vi kan finne en enda bedre tilnærming til svaret dersom vi forskyver grensene for integrasjonen med 0,5 mot høyre
 $$\int _{0{,}5}^{b+0{,}5} L(t) \, \mathrm{d}t = 500 $$

Vi løser likningen i linje 4 i GeoGebra, og finner at **det tar omtrent 11,19 uker før Marco har løpt 500 km og kjøper nye sko. I gjennomsnitt har han da løpt 44,7 km i uka**, se linje 5.

>[!tip] Blir resultatet mer nøyaktig ved å justere grensene i denne oppgaven?
>
> Når vi justerer grensene med $+0{,}5$ får vi et svar som er omtrent en halv uke mindre enn hvis vi ikke justerer. Det er ikke fryktelig stor forskjell, men det er en forskjell.  
>
> Vi kan lage et eksempel for å overbevise oss selv om at det er lurt å justere grensene. La oss se på uke 5. I denne uka har Marco faktisk løpt 32 km, mens den logistiske modellen overestimerer løpslengden og gir $L(5)=33{,}417$.   
> 
> Hvis vi bruker $\int_{4}^{5} L(t) \, dt$ for å finne ut hvor langt Marco har løpt i uke 5, så vil alle verdiene for $L(t)$ være lavere enn $L(5)$ siden grafen stiger i hele intervallet. Dermed underestimerer vi Marcos løpsdistanse. Ved å heller flytte grensene til $\int_{4{,}5}^{5{,}5} L(t) \, dt$ så vil $L(t)<L(5)$ for $t \in [4{,}5 , 5 \rangle$ og $L(t)>L(5)$ for $t \in \langle 5 , 5{,}5]$. Dermed vil underestimeringen i intervallet $t \in [4{,}5 , 5 \rangle$ «jevnes ut» av overestimeringen i intervallet $t \in \langle 5 , 5{,}5]$.
> 
> ![](/img/user/_resources/s2-h24-2-1c-forklaring.png)

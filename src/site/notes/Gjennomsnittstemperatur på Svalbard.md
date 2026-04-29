---
{"aliases":null,"tags":["oppgave"],"alias":[],"temaer":["geogebra","gjennomsnittlig vekstfart"],"dg-publish":true,"title":"Gjennomsnittstemperatur på Svalbard","fag":["1t","1p"],"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1},{"fag":"1p","del":2,"oppgave":1}],"eksamen":"v23","del":2,"date":"2023-05-27","modified":"2026-03-30","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Grafisk finne antall døgn med $T(x)>0$ mellom to nullpunkter; beregne sekantstigningstall mellom $(3, T(3))$ og $(7, T(7))$ som gjennomsnittlig vekstfart.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Finne $x$-koordinatene til nullpunktene grafisk og regne om intervalllengde til døgn."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Stigningstall til sekant mellom $(3, T(3))$ og $(7, T(7))$ i GeoGebra."}],"dg-permalink":"/gjennomsnittstemperatur-pa-svalbard/","permalink":"/gjennomsnittstemperatur-pa-svalbard/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"tags":["oppgave"],"alias":[],"temaer":["geogebra","gjennomsnittlig vekstfart"],"title":"Gjennomsnittstemperatur på Svalbard","fag":["1t","1p"],"oppgave":1,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":1},{"fag":"1p","del":2,"oppgave":1}],"eksamen":"v23","del":2,"date":"2023-05-27","modified":"2026-03-30","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Grafisk finne antall døgn med $T(x)>0$ mellom to nullpunkter; beregne sekantstigningstall mellom $(3, T(3))$ og $(7, T(7))$ som gjennomsnittlig vekstfart.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Finne $x$-koordinatene til nullpunktene grafisk og regne om intervalllengde til døgn."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Stigningstall til sekant mellom $(3, T(3))$ og $(7, T(7))$ i GeoGebra."}]}}
---


# Gjennomsnittstemperatur på Svalbard

De siste årene har Lars bodd på Svalbard fra 1. februar til 1. oktober. Hvert år har han målt temperaturen utenfor huset sitt på ulike tidspunkt noen dager hver uke.

Han har funnet at funksjonen $T$ gitt ved

$$
T(x)=0{,}048 x^{4}-1{,}4 x^{3}+13{,}36 x^{2}-45{,}8 x+35{,}2 \quad, \quad x \in[2,10]
$$

er en rimelig bra modell for gjennomsnittstemperaturen $T(x) \degree \mathrm{C}$ hvert døgn de månedene han bor på Svalbard, når han lar $x=2$ svare til 1. februar, $x=3$ til 1. mars, $x=4$ til 1 . april og så videre.

>[!oppgave]
>a) Omtrent hvor mange døgn i perioden 1. februar-1. oktober er gjennomsnittstemperaturen over $0 \degree \mathrm{C}$ ifølge modellen?

>[!oppgave]
>b) Bestem stigningstallet til den rette linjen som går gjennom punktene $(3, T(3))$ og $(7, T(7))$. Gi en praktisk tolkning av dette stigningstallet.

*Denne oppgaven har også én c)-oppgave som passer for 1T: [[Gjennomsnittstemperatur på Svalbard og den deriverte\|Gjennomsnittstemperatur på Svalbard og den deriverte]]*

## Fasit

a) ca 95–96 døgn
b) Gjennomsnittlig vekstfart er 5,04. Gjennomsnittlig øker temp med 5,04 ºC per måned

## Løsningsforslag

### a
Jeg tegnet grafen til funksjonen og fant skjæringspunktene ved $x$-aksen, hvor temperaturen er 0 °C, se punkt $B$ og $C$. 

![Del 2 oppgave 1. Gjennomsnittemperatur på Svalbard 1. februar–1. oktober](/img/user/_resources/1t-v2023-2-1a.png){ width=80% }

Det er $8{,}906-5{,}772=3{,}134$ måneder mellom skjæringspunktene. Jeg setter at det er 30,5 døgn i hver måned slik at vi får:

$$
3{,}134\cdot 30{,}5=95{,}6 \approx  \underline{\underline{96}}
$$

**Temperaturen er over 0 °C i omtrent 96 døgn**

### b
Jeg la inn punktene i GeoGebra, dro en linje mellom dem og fant stigningstallet, se $b=5{,}04$ i utklippet.

![Del 2 oppgave 1b. Gjennomsnittlig vekstfart fra mars til juli](/img/user/_resources/1t-v23-2-1b.png){ width=80% }

Stigningstallet til linja gir den gjennomsnittlige vekstfarten fra $x=3$ til $x=7$. 

**Temperaturen steg med 5,04 grader per måned i gjennomsnitt i perioden fra 1. mars til 1. juli.**

### c
Jeg tegnet $T'$ sammen med $T$ i koordinatsystemet og fant nullpunkter og ekstremalpunkter til $T'$. 

![Del 2 oppgave 1c. Vekstfarten til temperaturen på Svalbard](/img/user/_resources/1t-v23-2-1c.png){ width=80% }

$$
\begin{aligned}
\text{Toppunkt (M)}:& \quad (4{,}69 , 6{,}94)\\
\text{Bunnpunkt (N)}:& \quad (9{,}90 , -6{,}62)\\
\text{Nullpunkter (G og H):}& \quad (2{,}76 , 0)\text{ og } (7{,}33 , 0)
\end{aligned}
$$

Jeg sammenlignet disse punktene med tilsvarende punkter på grafen til $T$. 

Nullpunktene til $T'$ ligger ved samme $x$-verdi som ekstremalpunktene til $T$. $y$-koordinatene til nullpunktene til $T'$ er selvsagt null, og det stemmer godt med at vekstfarten i ekstremalpunktene til $T$ er null. **Ved hjelp av nullpunktene til $T'$ finner vi den kaldeste temperaturen i bunnpunktet 23. februar og den varmeste temperaturen i toppunktet 10. juli.** 

Toppunktet til $T'$ er er ved $x=4,69$ og $y=6,94$. Det vil si at rundt den 21. april vil temperaturen øke raskest. **Gjennomsnittstemperaturen stiger raskest med 6,94 grader per måned rundt 21. april.**

Bunnpunktet til $T'$ er er ved $x=9,90$ og $y=-6,62$. Det vil si at rundt den 27. september vil temperaturen synke raskest. **Gjennomsnittstemperaturen synker raskest med 6,62 grader per måned rundt 27. september.**

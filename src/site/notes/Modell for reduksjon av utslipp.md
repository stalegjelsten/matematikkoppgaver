---
{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"dg-publish":true,"temaer":["eksponentialfunksjoner","geogebra","funksjoner"],"fag":["2p-y","2p"],"eksamen":"v25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Modell for reduksjon av utslipp Modell for reduksjon av utslipp","source":null,"todo":null,"status":3,"dg-permalink":"/modell-for-reduksjon-av-utslipp/","permalink":"/modell-for-reduksjon-av-utslipp/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":null,"modified":null,"aliases":null,"temaer":["eksponentialfunksjoner","geogebra","funksjoner"],"fag":["2p-y","2p"],"eksamen":"v25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Modell for reduksjon av utslipp Modell for reduksjon av utslipp","source":null,"todo":null,"status":3}}
---



Ledelsen ved en bedrift ønsker å redusere utslippet av miljøskadelige stoffer de neste årene. I dag har bedriften to produksjonsprosesser:

1. Den ene slipper ut $5000\text{~tonn}$ per år
2. Den andre slipper ut $1000\text{~tonn}$ per år. 
 
Ledelsen mener funksjonen
$$U(x)=5000\cdot0{,}95^x+1000$$

er en god modell for utslippet $U(x)$ tonn per år etter $x$ år.


> [!oppgave]
>
> a) Forklar hva modellen forteller om ledelsens plan for å redusere utslippet.
> b) Hvor lang tid vil det gå før bedriften har halvert det årlige utslippet ifølge modellen?
> c) Hvor mange prosent er det årlige utslippet redusert med etter $10$ år ifølge modellen?
> d) Bestem stigningstallet til den rette linjen som går gjennom punktene $(0,U(0))$ og $(30,U(30))$. Gi en praktisk tolkning av svaret.

Myndighetene har krevd at utslippet skal reduseres til $800\text{ tonn}$ per år. 

> [!oppgave]
> Vurder om det ifølge modellen $U$ er mulig å oppfylle dette kravet.

## Fasit

a) Den ene prosessen reduseres med $5\%$ per år, den andre holdes konstant på $1000\text{ tonn}$.
b) $18$ år.
c) $33{,}4\%$ reduksjon.
d) Stigningstallet ≈$-131$, som betyr en gjennomsnittlig årlig nedgang på $131\text{ tonn}$ de første 30 årene.  
e) Nei, modellen har alltid $U(x)>1000$ og vil aldri nå $800$).

## Løsningsforslag

### 2-1a
$U(x)$ består av to ledd: $\textcolor{maroon}{5000 \cdot 0{,}95^{x}}$ og $\textcolor{seagreen}{1000}$. 

1. $\textcolor{maroon}{5000 \cdot 0{,}95^{x}}$ er en eksponentialfunksjon som synker med 5 % for hvert år. Dette viser at prosessen som i dag slipper ut 5000 tonn per år kommer til å reduseres med 5 %.
2. $\textcolor{seagreen}{1000}$ er en konstant funksjon, denne verdiene endrer seg altså ikke i framtiden. Dette viser at prosessen som i dag slipper ut 1000 tonn per år kommer til å fortsette på samme måte i framtiden.

**Ledelsen ønsker å minke utslippet fra den ene prosessen med 5 % per år, og ikke gjøre noe med den andre prosessen.**

### 2-1b
Til de neste oppgavene har jeg brukt GeoGebra til å regne ut svarene, se figur &fig:2-1. 

For å finne antall år før utslippene blir halvert har jeg lagt ut linja $y=\frac{6000}{2}$ og funnet skjæringen med $U$, se punkt $A$. 

**Utslippene vil være halvert til 3000 tonn per år etter 18 år.**

![Løsning av oppgave 2-1b–e](/img/user/_resources/2py-v25-2-1-gg.png){#fig:2-1}

### 2-1c
For å finne utslippet etter 10 år har jeg lagt ut linja $x=10$ og funnet skjæringen med $U$, se punkt $B$. Utslippene er 3993,7 tonn etter 10 år. 

Jeg har beregnet den prosentvise endringen i algebrafeltet, se linjen merket `c) ProsEndring`.

**Utslippene har minket med 33,4 % etter 10 år.**

### 2-1d
Jeg la ut punktene $C(0,U(0))$ og $D(30,U(30))$ i GeoGebra og trakk en linje mellom dem. Etter å ha ordnet uttrykket for linja ser jeg at stigningstallet til linja er $-130{,}9$.

**Stigningstallet til linja er omtrent -131, dette betyr at utslippene i gjennomsnitt minker med 131 tonn per år hvert år i løpet av de 30 første årene.**

### 2-1e
Jeg sjekket dette ved å lete etter skjæringen i mellom $y=800$ og $U(x)$ i GeoGebra. Da fikk jeg svaret `Udefinert` siden disse funksjonene ikke skjærer hverandre. Dette kunne jeg også sett fra funksjonsuttrykket med leddet $+1000$, som gjør at $U(x)$ alltid vil være større enn 1000.

**Det er ikke mulig å komme ned til 800 tonn per år med dagens modell.**

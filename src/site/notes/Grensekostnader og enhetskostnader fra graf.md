---
{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"dg-publish":true,"temaer":["grenseinntekt og grensekostnad","enhetskostnad","tolke grafer"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Grensekostnader og enhetskostnader fra graf","source":null,"todo":null,"status":3,"dg-permalink":"/grensekostnader-og-enhetskostnader-fra-graf/","permalink":"/grensekostnader-og-enhetskostnader-fra-graf/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"temaer":["grenseinntekt og grensekostnad","enhetskostnad","tolke grafer"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Grensekostnader og enhetskostnader fra graf","source":null,"todo":null,"status":3}}
---


# Grensekostnader og enhetskostnader fra graf


I koordinatsystemet nedenfor ser du grafen til en kostnadsfunksjon $K$ sammen med tre rette linjer.

De tre rette linjene er grafene til funksjonene $f$, $g$, $h$ der

$$
\begin{aligned}
f(x)&=31x+2030\\
g(x)&=60x\\
h(x)&=81{,}75x
\end{aligned}
$$

To av linjene tangerer grafen til $K$. Vi kaller tangeringspunktene $A$ og $B$.

![Kostnadsfunksjonen $K(x)$](/img/user/_resources/s2-h23-1-3.png){width=60%}

>[!oppgave]
> a) Bestem enhetskostnaden ved produksjon av 40 enheter.
> b) Forklar at grensekostnaden ved produksjon av 40 enheter er 31 kroner.
> c) Bestem den minste enhetskostnaden.

## Fasit

a) 81,75 kr
b) Se løsningsforslag. Hint: den deriverte til en funksjon i et punkt er lik stigningstallet til tangenten i punktet.
c) 60 kr

## Løsningsforslag

### 1-3a
Enhetskostnadene er gitt ved

$$
E(x)=\frac{K(x)}{x}
$$

Jeg ser at punktet linja $f(x)=31x+2030$ tangerer $K$ ved $x=40$. Dermed har vi

$$
K(40)=f(40)=31\cdot 40 + 2030=1240+2030=3270
$$

Ved å sette inn i uttrykket for enhetskostnadene får vi

$$
E(40)=\frac{K(40)}{40}=\frac{3270}{40}=81{,}75
$$

**Enhetskostnadene ved produksjon av 40 enheter er 81,75 kr.**

Dette stemmer perfekt med uttrykket for $h(x)$, og da vet vi også at den grønne linja i figuren faktisk skjærer grafen nøyaktig i $x=40$.

### 1-3b
Siden $A$ er et tangeringspunkt på grafen til $K$, og $A$ ligger på $x=40$, så vil stigningstallet til tangenten i $A$ være det samme som den deriverte til $K$ i punktet $A$. Grensekostnadene er definert som den deriverte av kostnadsfunksjonen.

**Tangenten til $K$ ved $x=40$ har funksjonsuttrykk $f(x)=31x+2030$, dermed er både stigningstallet, den deriverte og grensekostnadene lik 31 kroner.**

### 1-3c
Vi har lavest grensekostnader når $E'(x)=0$, og dette betyr

$$
\begin{aligned}
E'(x)&=0 \\
\left( \frac{K(x)}{x} \right)'&=0  \\
\frac{K'(x)\cdot x-K(x)}{x^{2}}&=0 \\
K'(x) \cdot x &= K(x)
\end{aligned}
$$

Den nederste linja forteller oss at vi finner den laveste enhetskostnaden når den lineære funksjonen $y=K'(x)\cdot x$ skjærer $K(x)$. Enklere sagt vil det si at vi har lavest enhetskostnad når tangenten til $K$ går gjennom origo. Jeg ser fra grafen at dette gjelder den blå linja og punktet $B$.

Hvis vi fortsetter likningsløsningen litt til får vi:
$$
\begin{aligned}
K'(x) \cdot x &= K(x)\\
K'(x) &= \frac{K(x)}{x}\\
K'(x) &= E(x)
\end{aligned}
$$

De laveste enhetskostnadene er altså $K'(x)$, eller stigningstallet til tangenten i punktet $B$. Tangenten i $B$ har funksjonsuttrykk $g(x)=60x$. 

**De laveste enhetskostnadene er 60 kr per enhet.**

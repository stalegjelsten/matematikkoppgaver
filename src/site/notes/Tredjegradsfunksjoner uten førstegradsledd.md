---
{"tags":["1t","utforskning","glidere","cas","funksjoner","geogebra","oppgave"],"temaer":["utforskning","glidere","cas","funksjoner","geogebra"],"alias":[null],"del":2,"fag":"1t","oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"eksamen":"v23","dg-publish":true,"title":"Tredjegradsfunksjoner uten førstegradsledd","date":"2023-05-27","modified":"2023-05-29","status":3,"permalink":"/tredjegradsfunksjoner-uten-forstegradsledd/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["1t","utforskning","glidere","cas","funksjoner","geogebra","oppgave"],"temaer":["utforskning","glidere","cas","funksjoner","geogebra"],"alias":[null],"del":2,"fag":"1t","oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"eksamen":"v23","title":"Tredjegradsfunksjoner uten førstegradsledd","date":"2023-05-27","modified":"2023-05-29","status":3,"permalink":"/tredjegradsfunksjoner-uten-forstegradsledd/"}}
---


# Tredjegradsfunksjoner uten førstegradsledd

Trym og Eira arbeider med oppgaven nedenfor.

>[!oppgave]
>Funksjonen $f$ er gitt ved
>
>$$f(x)=x^{3}-3 x^{2}+2$$
>
>Bestem koordinatene til eventuelle topp- og bunnpunkter på grafen til $f$.

> [!blue-box] Trym
> Jeg ser med én gang at grafen må ha et topp- eller bunnpunkt som ligger på $y$-aksen.

> [!green-box] Eira
> Hvordan ser du det?

> [!blue-box] Trym
> 
TRYM: Funksjonsuttrykket har ikke et førstegradsledd. Da må det være slik.

> [!green-box] Eira
> Hvorfor det? Vil det alltid være slik?

> [!blue-box] Trym
> 
TRYM: Ja, i alle fall for alle tredjegradsfunksjoner. Det har jeg lært meg.

> [!green-box] Eira
> Men det er jo ikke slik for grafen til $x^{3}$.

> [!blue-box] Trym
> Æsj! Det stemmer. Det kan jo hende du har litt rett likevel, men at det er noe mer vi må se etter?

>[!oppgave]
>a) Løs oppgaven elevene arbeider med.
>b) Ta utgangspunkt i dialogen ovenfor. Utforsk og kommenter Trym sin «regel». 

## Fasit

a) Topp i $(0, 2)$ og bunn i $(2, -2)$.
b) Det vil alltid være et stasjonært punkt på $y$-aksen for slike funksjoner.

## Løsningsforslag

### 2-6a
Jeg tegnet grafen til $f$ i GeoGebra og fant ekstremalpunktene, se $A$ og $B$ i utklippet.

![](/img/user/_resources/1t-v23-2-6a.png)

**$f$ har toppunkt i $(0, 2)$ og bunnpunkt i $(2, -2)$**.

### 2-6b
Tredjegradsfunksjoner uten førstegradsledd har den generelle formen

$$
P(x)=ax^3+bx^2+c
$$

Den deriverte $P'(x)$ gir oss den momentane vekstfarten for hver $x$-verdi. Når den momentane vekstfarten er lik null så verken vokser eller minker funksjonen $\implies$ vi må da befinne oss i et stasjonært punkt.

$$
\begin{aligned}
P'(x)&=3ax^2+2bx\\
0&=3ax^2+2bx\\
0&=(3ax+2b)x\\
3ax+2b=0 &\vee x=0\\
3ax=-2b &\vee x=0\\
x=\frac{-2b}{3a} &\vee x=0\\
\end{aligned}
$$

Vi ser at $x=0$ alltid vil gi et stasjonært punkt i $(0, P(0))$ for slike tredjegradsfunksjoner. Stasjonære punkter er ikke bare topp- eller bunnpunkter, det kan også være terrassepunkter slik som grafen til $x^3$ viser.

![Del 2 oppgave 6b. Bruk av glidere til utforskning](/img/user/_resources/1t-v23-2-6b.png)

Ved å tegne grafen til $P(x)=ax^3+bx^2+c$ i GeoGebra og justere på glidere for $a, b, c$ så ser det ut til at vi kun får terrassepunkter dersom $b=0$. Hvis $b\neq 0$ så ser det ut til at vi får både et toppunkt og et bunnpunkt. Hvis $b>0$ så er det bunnpunktet som befinner seg på $y$-aksen og hvis $b<0$ så er det toppunktet som befinner seg på $y$-aksen. Det ser også ut til at topp- og bunnpunktet går nærmere hverandre når jeg justerer $b$ slik at den blir nærmere 0. 

Vi kan også se at $b=0$ vil gi et terrassepunkt fra løsningene av $P'(x)=0$ som vi fant tidligere. Den ene løsningen vil alltid være $x=0$. Den andre løsningen, $x=\frac{-2b}{3a}$, vil også bli null dersom koeffisienten foran andregradsleddet, $b$, er lik null. Dermed vil på vår toppunktsløsning og bunnpunktsløsning ligge i det samme punktet $\implies$ vi får et terrassepunkt.

**Trym sin regel er nesten riktig. Det vil alltid være et topp- eller bunnpunkt på $y$-aksen dersom tredjegradsfunksjonen mangler førstegradsledd, men har et andregradsledd. Det vil imidlertid alltid være et *stasjonært punkt* på $y$-aksen dersom funksjonen mangler førstegradsleddet.**

\clearpage

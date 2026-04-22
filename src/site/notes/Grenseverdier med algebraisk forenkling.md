---
{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["grenseverdi"],"fag":["s1","r1"],"eksamen":"v25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4},{"fag":"r1","del":1,"oppgave":4}],"poeng":4,"title":"Grenseverdier med algebraisk forenkling","status":0,"source":null,"todo":null,"dg-permalink":"/grenseverdier-med-algebraisk-forenkling/","permalink":"/grenseverdier-med-algebraisk-forenkling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"temaer":["grenseverdi"],"fag":["s1","r1"],"eksamen":"v25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4},{"fag":"r1","del":1,"oppgave":4}],"poeng":4,"title":"Grenseverdier med algebraisk forenkling","status":0,"source":null,"todo":null}}
---


# Grenseverdier med algebraisk forenkling

>[!oppgave]
>Bestem grenseverdiene
>
>a) $\lim_{x\to 3} \dfrac{3(x^2-3)}{x-3}$
>
>b) $\lim_{x\to 4} \dfrac{\sqrt{x}-2}{x-4}$

## Fasit

a) Grenseverdien eksisterer ikke (venstre- og høyregrense stemmer ikke overens).

## Løsningsforslag

### a
Vi ser at nevneren går mot null når $x\to 3$, mens telleren går mot $3 \cdot (9-3)=3\cdot 6 = 18$. 

La oss se hva som skjer når vi nærmer oss $3$ fra venstre side. Jeg velger $x=2{,}5$ for å få en følelse for tallene.
$$
\frac{3(2{,}5^{2}-3)}{2{,}5-3}=\frac{3(6{,}25-3)}{-0{,}5}=\frac{3 \cdot 3{,}25}{-0{,}5} = -19{,}5$$
Hvis vi hadde valgt en verdi nærmere $3$ ville fått et enda mer ekstremt negativt svar. 
$$
\lim_{ x \to 3^{-} } \frac{3(x^{2}-3)}{x-3}= -\infty
$$

Når vi nærmer oss 3 fra høyre side så får vi (vi velger 3,5)
$$
\frac{3(3{,}5^{2}-3)}{3{,}5-3}=\frac{3(12{,}25-3)}{0{,}5}=\frac{3 \cdot 9{,}25}{0{,}5} \approx 55$$
Hvis vi hadde valgt et tall nærmere 3 ville vi fått et enda mer ekstremt positivt svar.
$$
\lim_{ x \to 3^{+} } \frac{3(x^{2}-3)}{x-3}= \infty
$$

**Grenseverdien eksisterer ikke siden grenseverdiene fra venstre og høyre side ikke stemmer overens.**
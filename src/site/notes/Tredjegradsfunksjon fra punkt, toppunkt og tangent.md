---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["funksjonsdrøfting","likningssystem","derivasjon"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":5}],"poeng":3,"title":"Tredjegradsfunksjon fra punkt, toppunkt og tangent","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme $a, b, c, d$ i $f(x)=ax^3+bx^2+cx+d$ ved å sette opp likningssystem fra ett punkt, ett toppunkt og en tangentstigning.","source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/tredjegradsfunksjon-fra-punkt-toppunkt-og-tangent/","permalink":"/tredjegradsfunksjon-fra-punkt-toppunkt-og-tangent/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["funksjonsdrøfting","likningssystem","derivasjon"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":5}],"poeng":3,"title":"Tredjegradsfunksjon fra punkt, toppunkt og tangent","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme $a, b, c, d$ i $f(x)=ax^3+bx^2+cx+d$ ved å sette opp likningssystem fra ett punkt, ett toppunkt og en tangentstigning.","source":null,"lf-source-claude":true,"todo":null}}
---


# Tredjegradsfunksjon fra punkt, toppunkt og tangent

Du får vite følgende om en tredjegradsfunksjon $f$ gitt ved

$$f(x) = a \cdot x^3 + b \cdot x^2 + c \cdot x + d$$

- Grafen til $f$ går gjennom punktet $(2,\ 6)$.
- Punktet $(-2,\ 8)$ er et toppunkt på grafen til $f$.
- Tangenten til grafen til $f$ i punktet $(3,\ f(3))$ har stigningstall 4.

>[!oppgave]
>Bruk opplysningene ovenfor til å bestemme $a$, $b$, $c$ og $d$.

## Fasit

$$\underline{\underline{f(x) = \frac{3}{20}x^3 + \frac{7}{40}x^2 - \frac{11}{10}x + \frac{63}{10}}}$$

## Løsningsforslag

Vi kjenner $f(x) = ax^3 + bx^2 + cx + d$ og $f'(x) = 3ax^2 + 2bx + c$.

De tre opplysningene gir fire likninger (toppunktet gir to — ett fra $f$-verdien og ett fra at den deriverte er null):

$$\textcolor{steelblue}{f(2) = 6:} \quad 8a + 4b + 2c + d = 6$$

$$\textcolor{seagreen}{f(-2) = 8:} \quad {-8a} + 4b - 2c + d = 8$$

$$\textcolor{seagreen}{f'(-2) = 0:} \quad 12a - 4b + c = 0$$

$$\textcolor{tomato}{f'(3) = 4:} \quad 27a + 6b + c = 4$$

Vi løser likningssystemet i GeoGebra CAS:

![GeoGebra CAS — likningssystem og løsning](/img/user/_resources/1t-h24-2-5.png)

CAS gir:

$$a = \frac{3}{20}, \quad b = \frac{7}{40}, \quad c = -\frac{11}{10}, \quad d = \frac{63}{10}$$

Dermed er

$$\underline{\underline{f(x) = \frac{3}{20}x^3 + \frac{7}{40}x^2 - \frac{11}{10}x + \frac{63}{10}}}$$

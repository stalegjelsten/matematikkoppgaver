---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"dg-publish":true,"temaer":["bevis","utforskning","integral"],"fag":["s2","r2"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5},{"fag":"r2","del":2,"oppgave":4}],"title":"Vis at rekke blir ln 2","source":"Eksamen S2 vår 2025","todo":null,"status":3,"permalink":"/vis-at-rekke-blir-ln-2/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"temaer":["bevis","utforskning","integral"],"fag":["s2","r2"],"eksamen":"v25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5},{"fag":"r2","del":2,"oppgave":4}],"title":"Vis at rekke blir ln 2","source":"Eksamen S2 vår 2025","todo":null,"status":3}}
---


# Vis at rekke blir ln 2


En uendelig geometrisk rekke er gitt ved $1+x+x^{2}+x^{3}+\dots$

Det kan vises at 
$$ \int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int x^{2} \, \mathrm{d}x + \int x^{3} \, \mathrm{d}x + \dots= \int \frac{1}{1-x} \, \mathrm{d}x   $$

Bruk denne sammenhengen til å vise at

$$ \frac{1}{2^{1}}+\frac{1}{2} \cdot \frac{1}{2^{2}} +\frac{1}{3} \cdot \frac{1}{2^{3}} +\frac{1}{4} \cdot \frac{1}{2^{4}} + \dots = \ln 2 $$

I denne oppgaven kan du se bort fra integrasjonskonstantene.

## Fasit


## Løsningsforslag

Vi har fått oppgitt at

$$\int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int  x^{2} \, \mathrm{d}x + \int  x^{3} \, \mathrm{d}x + \dots= \int \frac{1}{1-x} \, \mathrm{d}x$${#eq:opprinnelig}

Vi gjennomfører resonnementet vårt i flere steg.

### Integrasjon av høyre side
Vi ser først på høyre side av likning &eq:opprinnelig. Vi ser at vi kan integrere denne siden ved å gjøre variabelskiftet $u=1-x \implies \frac{du}{dx}=-1 \iff dx =-1 \cdot du$.

Integralet blir (sett bort fra integrasjonskonstantene)

$$
\int \frac{1}{1-x} \, \mathrm{d}x  = \int \frac{1}{u} \cdot (-1)\, \mathrm{d}u = -\int \frac{1}{u}\, \mathrm{d}u = -\ln \left| 1-x \right| 
$$

### Integrasjon av venstre side
Vi gjennomfører så integrasjonene på venstre side av likning &eq:opprinnelig og får

$$
\int 1 \, \mathrm{d}x + \int x \, \mathrm{d}x + \int  x^{2} \, \mathrm{d}x + \int  x^{3} \, \mathrm{d}x + \dots =\textcolor{orange}{x}+\textcolor{seagreen}{\frac{1}{2}x^{2}}+\textcolor{steelblue}{\frac{1}{3}x^{3}}+ \textcolor{tomato}{\frac{1}{4}x^{4}} + \dots
$$

Ved å integrere begge sidene av likning &eq:opprinnelig har vi altså foreløpig vist at:

$$
x+\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+ \frac{1}{4}x^{4} + \dots = -\ln \left| 1-x \right|
$$

### Vise at rekka er lik $\ln 2$
Vi skal vise at

$$\textcolor{orange}{\frac{1}{2^{1}}}+\textcolor{seagreen}{\frac{1}{2} \cdot \frac{1}{2^{2}}} +\textcolor{steelblue}{\frac{1}{3} \cdot \frac{1}{2^{3}}} +\textcolor{tomato}{\frac{1}{4} \cdot \frac{1}{2^{4}}} + \dots = \ln 2 $$ {#eq:lik2}

Vi sammenligner venstre side i likning &eq:lik2 med svaret vi fikk da vi integrerte venstre side i likning &eq:opprinnelig.

$$
\textcolor{orange}{x}+\textcolor{seagreen}{\frac{1}{2}x^{2}}+\textcolor{steelblue}{\frac{1}{3}x^{3}}+ \textcolor{tomato}{\frac{1}{4}x^{4}} + \dots=\textcolor{orange}{\frac{1}{2^{1}}}+\textcolor{seagreen}{\frac{1}{2} \cdot \frac{1}{2^{2}}} +\textcolor{steelblue}{\frac{1}{3} \cdot \frac{1}{2^{3}}} +\textcolor{tomato}{\frac{1}{4} \cdot \frac{1}{2^{4}}} + \dots
$${#eq:sammenligning}

Ved sammenligning av leddene ser vi at $x=\frac{1}{2}$ er en løsning av likning &eq:sammenligning.

Siden $x=\frac{1}{2}$, så sjekker vi hva $-\ln \left| 1-x \right|$ gir oss når $x=\frac{1}{2}$

$$-\ln \left| 1-x \right| = - \ln \left| 1-\frac{1}{2} \right| =-\ln \underbrace{ \left| \frac{1}{2} \right| }_{ \left| \frac{1}{2} \right| = \frac{1}{2} } = \underbrace{ {- \ln \left( \frac{1}{2} \right) =-\left( \cancelto{ 0 }{ \ln 1 } - \ln 2 \right)}}_{\text{Regel:} \ln\left( \frac{a}{b} \right) = \ln a - \ln b} =\ln 2$$

Vi har altså vist at

$$
x+\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+ \frac{1}{4}x^{4} + \dots = -\ln \left| 1-x \right|
$$

Og for $x=\frac{1}{2}$ gjelder derfor:

$$
\frac{1}{2^{1}}+\frac{1}{2} \cdot \frac{1}{2^{2}} +\frac{1}{3} \cdot \frac{1}{2^{3}} +\frac{1}{4} \cdot \frac{1}{2^{4}} + \dots = \ln 2 \qquad  \blacksquare
$$

---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/avstand-mellom-to-funksjoner/","dg-publish":true,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","optimering","funksjoner"],"title":"Avstand mellom to funksjoner","lf-source-claude":true,"todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne den vertikale avstanden mellom $f(x)=2x+8$ og $g(x)=x^3-x^2-4x+8$ ved gitt $x$ og bestemme eksakt $x$-verdi som gir størst avstand i $\\langle 1, 3\\rangle$ ved derivasjon.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Finne avstanden $|PQ|$ ved $x=1$ ved direkte innsetting i $f$ og $g$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme eksakt $a=\\tfrac{1+\\sqrt{19}}{3}$ som maksimerer $f(a)-g(a)$ i $\\langle 1, 3\\rangle$ ved derivasjon."}],"permalink":"/avstand-mellom-to-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["derivasjon","optimering","funksjoner"],"title":"Avstand mellom to funksjoner","lf-source-claude":true,"todo":[],"kategori":2,"vanskegrad":2,"beskrivelse":"Beregne den vertikale avstanden mellom $f(x)=2x+8$ og $g(x)=x^3-x^2-4x+8$ ved gitt $x$ og bestemme eksakt $x$-verdi som gir størst avstand i $\\langle 1, 3\\rangle$ ved derivasjon.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Finne avstanden $|PQ|$ ved $x=1$ ved direkte innsetting i $f$ og $g$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme eksakt $a=\\tfrac{1+\\sqrt{19}}{3}$ som maksimerer $f(a)-g(a)$ i $\\langle 1, 3\\rangle$ ved derivasjon."}]}}
---


# Avstand mellom to funksjoner

Ovenfor har Sara tegnet grafene til funksjonene $f$ og $g$ gitt ved

$$f(x) = 2x + 8$$

$$g(x) = x^3 - x^2 - 4x + 8$$

![Sara sine grafer til f og g](/img/user/_resources/1t-h23-2-5.jpeg){width=70%}

Linjen $x = 1$ skjærer grafen til $f$ i punktet $P$ og grafen til $g$ i punktet $Q$.

>[!oppgave]
>a) Bestem avstanden fra $P$ til $Q$.

Sara skal tegne en ny linje $x = a$ der $a \in \langle 1, 3 \rangle$ i koordinatsystemet. Hun vil kalle skjæringspunktet mellom linjen og grafen til $f$ for $R$ og skjæringspunktet mellom linjen og grafen til $g$ for $S$.

>[!oppgave]
>b) Bestem $a$ slik at avstanden fra $R$ til $S$ blir størst mulig. Oppgi svaret eksakt.

## Fasit

a) $\underline{\underline{PQ = 6}}$

b) $\underline{\underline{a = \dfrac{1 + \sqrt{19}}{3}}}$

## Løsningsforslag

Vi bruker GeoGebra CAS til å løse oppgaven.

![CAS-utregning for oppgave 5](/img/user/_resources/1t-h23-2-5.png)

### a

Vi definerer $f$ og $g$ og beregner funksjonsverdiene ved $x = 1$ (linje 3–4 i CAS):

$$f(1) = 2 \cdot 1 + 8 = 10 \quad \Rightarrow \quad P = (1,\, 10)$$

$$g(1) = 1^3 - 1^2 - 4 \cdot 1 + 8 = 4 \quad \Rightarrow \quad Q = (1,\, 4)$$

Siden $P$ og $Q$ ligger på den vertikale linjen $x = 1$, er avstanden

$$PQ = |f(1) - g(1)| = |10 - 4| = \mathbf{\underline{\underline{6}}}$$

### b

For $a \in \langle 1, 3 \rangle$ er $f(a) > g(a)$, så avstanden fra $R$ til $S$ er

$$d(a) = f(a) - g(a)$$

CAS forenkler dette til (linje 5–6):

$$d(a) = -a^3 + a^2 + 6a$$

Vi finner ekstremalstedene ved å derivere og sette $d'(a) = 0$ (linje 7–8):

$$d'(a) = -3a^2 + 2a + 6 = 0$$

CAS gir løsningene $a = \dfrac{-\sqrt{19}+1}{3}$ og $a = \dfrac{\sqrt{19}+1}{3}$.

Siden $a \in \langle 1, 3 \rangle$ er det kun $a = \dfrac{1 + \sqrt{19}}{3} \approx 1{,}79$ som er aktuell.

Vi kontrollerer at det er et maksimum: $d''(a) = -6a + 2$, og ved $a \approx 1{,}79$ er $d''(a) < 0$, så det er et maksimumspunkt.

Maksimal avstand fra $R$ til $S$ oppnås når

$$\mathbf{\underline{\underline{a = \frac{1 + \sqrt{19}}{3}}}}$$

(Maksimumsverdien er $d\left(\dfrac{1+\sqrt{19}}{3}\right) = \dfrac{2}{27}\left(19\sqrt{19}+28\right) \approx 8{,}21$.)
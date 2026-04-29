---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/lukket-kurve-med-tre-funksjoner/","dg-publish":true,"eksamen":"v24","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":7}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["funksjoner","funksjonsdrøfting","argumentasjon"],"title":"Lukket kurve med tre funksjoner","todo":[],"permalink":"/lukket-kurve-med-tre-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":7}],"poeng":6,"source":null,"status":0,"tags":["oppgave"],"temaer":["funksjoner","funksjonsdrøfting","argumentasjon"],"title":"Lukket kurve med tre funksjoner","todo":[]}}
---


# Lukket kurve med tre funksjoner

![Tre grafer som til sammen danner en lukket kurve med punkter A, B og C](/img/user/_resources/1t-v24-2-7.jpeg){width=60%}

Figuren ovenfor viser tre grafer som til sammen danner en lukket kurve.

- To av grafene har bunnpunkter som ligger på $y$-aksen.
- Punktet $A$ og punktet $B$ har samme $y$-koordinat.

>[!oppgave]
>Bruk tre ulike funksjoner og lag en tilsvarende figur slik at kravene i begge kulepunktene ovenfor er oppfylt.
>
>Det skal gå klart fram av besvarelsen hvilke funksjonsuttrykk du har brukt.
>
>Husk å forklare hvordan du har tenkt, og argumenter for at løsningen din er riktig.

## Fasit

Én mulig løsning:

$$f(x) = x^2 + 3, \quad x \in \langle -2\sqrt{2},\, 0 \rangle$$

$$g(x) = 2x^2 + 3, \quad x \in \langle 0,\, 2 \rangle$$

$$h(x) = 11, \quad x \in \langle -2\sqrt{2},\, 2 \rangle$$

Bunnpunkt for $f$: $(0, 3)$ på $y$-aksen. Bunnpunkt for $g$: $(0, 3)$ på $y$-aksen.
$A = (-2\sqrt{2},\, 11)$ og $B = (2,\, 11)$ har begge $y$-koordinat $11$.

## Løsningsforslag

Jeg velger to andregradfunksjoner som begge har bunnpunkt på $y$-aksen, og en horisontal linje som lukker kurven øverst. Funksjonsuttrykkene er

$$f(x) = x^2 + 3, \qquad g(x) = 2x^2 + 3, \qquad h(x) = 11.$$

**Definisjonsområder og grensepunkter**

Jeg bestemmer definisjonsområdene slik at de tre grafene møtes og danner en lukket kurve:

- $f$ er definert for $x \in \langle -2\sqrt{2},\, 0 \rangle$
- $g$ er definert for $x \in \langle 0,\, 2 \rangle$
- $h$ er definert for $x \in \langle -2\sqrt{2},\, 2 \rangle$

Punktet $C = (0, 3)$ er der $f$ og $g$ møtes:

$$f(0) = 0^2 + 3 = 3 \qquad \text{og} \qquad g(0) = 2 \cdot 0^2 + 3 = 3$$

De to grafene har altså same funksjonsverdi i $x = 0$, og kurven er sammenhengende her.

**Punktene A og B**

Punkt $A$ er der $f$ og $h$ møtes. Jeg setter $f(x) = 11$:

$$x^2 + 3 = 11 \implies x^2 = 8 \implies x = -2\sqrt{2}$$

(tar den negative løsningen siden $f$ er definert for $x \leq 0$).

$$A = (-2\sqrt{2},\, 11)$$

Punkt $B$ er der $g$ og $h$ møtes. Jeg setter $g(x) = 11$:

$$2x^2 + 3 = 11 \implies 2x^2 = 8 \implies x^2 = 4 \implies x = 2$$

$$B = (2,\, 11)$$

Begge punktene har $y$-koordinat $11$, så kravet om at $A$ og $B$ har samme $y$-koordinat er oppfylt.

**Bunnpunkter på $y$-aksen**

$f(x) = x^2 + 3$ er en parabel som åpner oppover. Bunnpunktet er der $f'(x) = 2x = 0$, altså $x = 0$. Bunnpunktet er $(0, 3)$, som ligger på $y$-aksen.

$g(x) = 2x^2 + 3$ er også en parabel som åpner oppover. Bunnpunktet er der $g'(x) = 4x = 0$, altså $x = 0$. Bunnpunktet er $(0, 3)$, som ligger på $y$-aksen.

Begge de to parabler har altså bunnpunkt på $y$-aksen, slik oppgaven krever.

**Den lukkede kurven**

Grafene danner en lukket kurve i tre deler:

1. $f$: fra $A = (-2\sqrt{2},\, 11)$ ned til $C = (0,\, 3)$ (venstre parabelgren)
2. $g$: fra $C = (0,\, 3)$ opp til $B = (2,\, 11)$ (høyre parabelgren, brattere)
3. $h$: horisontal linje fra $B = (2,\, 11)$ tilbake til $A = (-2\sqrt{2},\, 11)$ (toppen)

Figuren nedenfor viser den lukkede kurven med $f$ i blått, $g$ i grønt og $h$ i rødt.

![Lukket kurve av tre funksjoner: f (blå), g (grønn) og h (rød)](/img/user/_resources/1t-v24-2-7-l%C3%B8sning.png){width=80%}
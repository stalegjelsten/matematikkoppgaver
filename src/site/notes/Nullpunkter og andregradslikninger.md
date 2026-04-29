---
{"aliases":[],"date":"2023-11-28","del":1,"dg-permalink":"/nullpunkter-og-andregradslikninger/","dg-publish":true,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["andregradslikninger","likninger"],"title":"Nullpunkter og andregradslikninger","todo":[],"lf-source-claude":true,"permalink":"/nullpunkter-og-andregradslikninger/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-28","del":1,"eksamen":"h23","fag":["2p"],"modified":"2026-03-26","oppgave":4,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":4}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["andregradslikninger","likninger"],"title":"Nullpunkter og andregradslikninger","todo":[],"lf-source-claude":true}}
---


# Nullpunkter og andregradslikninger

$$
(x+4)(x-1)=0
$$

$$
(x+2)(x-3) = -6
$$

Selma og Tobine arbeider med likningene ovenfor.

>[!blue-box] Selma
>Høyresiden i den første likningen er lik null. Jeg er usikker, men kan vi da bare finne ut hva $x$ må være for at det som står inne i en av parentesene skal bli lik null?
>
>Setter vi $x = -4$, får vi $(-4+4) \cdot (-4-1) = 0 \cdot (-5) = 0$
>
>Setter vi $x = 1$, blir $(x+4)(x-1)$ også lik null.
>
>Løsningene er derfor $x_1 = -4$ og $x_2 = 1$
>
>Dette stemmer, men jeg vet ikke hvorfor.

>[!green-box] Tobine
>Vil det alltid være slik?
>
>I den andre likningen er høyresiden lik minus seks. Da må det som står inne i en av parentesene, bli minus seks?
>
>Er da løsningene $x_1 = -8$ og $x_2 = -3$?

>[!oppgave]
>Kommenter det Selma og Tobine sier, og løs likningen $(x+2)(x-3) = -6$

## Fasit

$\underline{\underline{x_1 = 0}}$ og $\underline{\underline{x_2 = 1}}$

## Løsningsforslag

**Kommentar til Selma**

Selma har rett! Grunnen til at metoden virker, er **nullproduktsregelen**: hvis et produkt av to faktorer er lik null, må minst én av faktorene være lik null. Det betyr at

$$
(x+4)(x-1)=0 \quad \Rightarrow \quad x+4=0 \quad \text{eller} \quad x-1=0
$$

Fra $x + 4 = 0$ får vi $x_1 = -4$, og fra $x - 1 = 0$ får vi $x_2 = 1$. Selma regner riktig.

**Kommentar til Tobine**

Tobine misforstår. Nullproduktsregelen gjelder **kun** når høyresiden er lik null. Når høyresiden er $-6$, kan vi ikke si at én av parentesene må være $-6$. Det er mulig å sette opp utallige kombinasjoner av to tall som gir produktet $-6$ (f.eks. $2 \cdot (-3)$, $(-1) \cdot 6$, osv.), og det gir ikke en enkel metode.

Vi kan sjekke at Tobines svar er feil: setter vi inn $x = -8$:

$$
(-8+2)(-8-3) = (-6)(-11) = 66 \neq -6
$$

**Løsning av $(x+2)(x-3) = -6$**

Vi må flytte $-6$ over til venstre side slik at høyresiden blir null, og deretter multiplisere ut:

$$
(x+2)(x-3) = -6
$$

$$
(x+2)(x-3) + 6 = 0
$$

Vi multipliserer ut venstre side:

$$
x^2 - 3x + 2x - 6 + 6 = 0
$$

$$
x^2 - x = 0
$$

Vi setter $x$ utenfor parentes (faktoriserer):

$$
x(x - 1) = 0
$$

Nå kan vi bruke nullproduktsregelen:

$$
x = 0 \quad \text{eller} \quad x - 1 = 0
$$

$$
\textbf{x}_1 \mathbf{= 0} \quad \text{og} \quad \textbf{x}_2 \mathbf{= 1}
$$

**$\underline{\underline{x_1 = 0}}$ og $\underline{\underline{x_2 = 1}}$**
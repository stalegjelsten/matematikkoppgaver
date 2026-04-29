---
{"aliases":[],"date":"2025-05-21","del":1,"dg-permalink":"/identitet-i-cas-verktoy/","dg-publish":true,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":6}],"poeng":1,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["identiteter","cas","algebra"],"title":"Identitet i CAS-verktøy","todo":[],"permalink":"/identitet-i-cas-verktoy/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-21","del":1,"eksamen":"v25","fag":["1t"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":1,"fag":"1t","oppgave":6}],"poeng":1,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["identiteter","cas","algebra"],"title":"Identitet i CAS-verktøy","todo":[]}}
---


# Identitet i CAS-verktøy

Kari arbeider med algebraiske uttrykk, likninger og identiteter. Hun prøver å løse likningen

$$x^2 - 4 = (x+2)(x-2)$$

i et CAS-verktøy og får resultatet $x = x$. Se nedenfor.

> $x^2 - 4 = (x + 2)(x - 2)$
>
> Løs: $\{x = x\}$

>[!oppgave]
>Ta utgangspunkt i dette resultatet og forklar Kari hva en identitet er.

## Fasit

**$x^2 - 4 = (x+2)(x-2)$ er en identitet — den er sann for alle reelle tall $x$.**

## Løsningsforslag

CAS prøver å finne hvilke $x$-verdier som gjør likningen sann. For å forstå hvorfor den svarer $x = x$, kan vi se hva som skjer når vi forenkler høyre side:

$$
(x+2)(x-2) = x^2 - 2x + 2x - 4 = x^2 - 4
$$

De to sidene er altså nøyaktig det samme algebraiske uttrykket. Det betyr at likningen

$$
x^2 - 4 = (x+2)(x-2)
$$

er sann uansett hvilken verdi $x$ har. Velger vi for eksempel $x = 3$:

$$
3^2 - 4 = 5 \qquad \text{og} \qquad (3+2)(3-2) = 5 \cdot 1 = 5
$$

eller $x = 0$:

$$
0^2 - 4 = -4 \qquad \text{og} \qquad (0+2)(0-2) = 2 \cdot (-2) = -4
$$

Begge sider gir alltid samme svar.

En slik likhet kalles en **identitet** — en likhet mellom to uttrykk som er sann for *alle* verdier av variabelen. CAS uttrykker dette med $x = x$: det er CAS sin måte å si «alle reelle tall er løsninger».

Dette er annerledes enn en vanlig likning, for eksempel $x^2 - 4 = 0$, der bare de spesielle verdiene $x = 2$ og $x = -2$ er løsninger.

**Kari kan altså forklare at $x^2 - 4 = (x+2)(x-2)$ er en identitet fordi de to sidene er ekvivalente uttrykk, og at CAS bekrefter dette ved å returnere $x = x$.**
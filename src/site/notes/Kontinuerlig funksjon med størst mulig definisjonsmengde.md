---
{"aliases":[],"date":"2024-05-24","del":1,"dg-permalink":"/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5},{"del":1,"fag":"r1","oppgave":5}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["kontinuitet","funksjoner","delt forskrift"],"title":"Kontinuerlig funksjon med størst mulig definisjonsmengde","todo":[],"permalink":"/kontinuerlig-funksjon-med-storst-mulig-definisjonsmengde/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":1,"eksamen":"v24","fag":["s1","r1"],"lf-source-claude":true,"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":5},{"del":1,"fag":"r1","oppgave":5}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["kontinuitet","funksjoner","delt forskrift"],"title":"Kontinuerlig funksjon med størst mulig definisjonsmengde","todo":[]}}
---


# Kontinuerlig funksjon med størst mulig definisjonsmengde

En funksjon $f$ er definert ved

$$f(x) = \begin{cases} x\text{,}  & 0 \le x \le 2 \\ 5 - x\text{,} \quad  & 2 < x \le 5 \end{cases}$$

>[!oppgave]
>Gi funksjonen $f$ en ny definisjonsmengde slik at følgende er oppfylt samtidig:
>
>- $f$ skal være kontinuerlig.
>- Den nye definisjonsmengden skal være så stor som mulig.
>- Verdimengden til $f$ skal være uendret.

## Fasit

$\underline{\underline{D_f = [0, 2\rangle \cup \langle 2, 5]}}$. Da er $f$ kontinuerlig på hele $D_f$, $V_f = [0, 3\rangle$ er uendret, og vi har bare fjernet det enkelte punktet $x = 2$.

## Løsningsforslag

Vi sjekker først om $f$ er kontinuerlig i $x = 2$:

- Fra venstre: $\lim_{x \to 2^-} f(x) = 2$
- Fra høyre: $\lim_{x \to 2^+} f(x) = 5 - 2 = 3$

Grensene er ulike, så $f$ har et hopp i $x = 2$ og er **ikke** kontinuerlig der.

**Verdimengden til den opprinnelige $f$:**

- $f(x) = x$ på $[0, 2]$ gir $[0, 2]$
- $f(x) = 5 - x$ på $\langle 2, 5]$ gir $[0, 3\rangle$ (verdien $3$ nås aldri fordi $x = 2$ ikke er med i andre stykke)

Til sammen: $V_f = [0, 3\rangle$.

For å gjøre $f$ kontinuerlig må vi unngå hoppet ved $x = 2$. Den enkleste måten er å fjerne kun selve punktet $x = 2$:

$$D_f = [0, 2\rangle \cup \langle 2, 5]$$

På denne mengden er $f$ kontinuerlig (polynomer er kontinuerlige på hver komponent, og $x = 2$ er ikke lenger i $D_f$).

Verdimengden blir:

- $f([0, 2\rangle) = [0, 2\rangle$
- $f(\langle 2, 5]) = [0, 3\rangle$
- Til sammen: $V_f = [0, 3\rangle$ — uendret.

Definisjonsmengdens "lengde" er fortsatt $5$ (vi har bare fjernet ett enkeltpunkt). Dette er den **største mulige** definisjonsmengden som oppfyller begge krav: vi kan ikke ha med $x = 2$ uten å bryte kontinuiteten.

**Svar:** $\underline{\underline{D_f = [0, 2\rangle \cup \langle 2, 5]}}$.
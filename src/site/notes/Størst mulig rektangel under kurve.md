---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjoner","geometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":5}],"title":"Størst mulig rektangel under kurve","status":1,"source":null,"todo":null,"poeng":4,"dg-permalink":"/storst-mulig-rektangel-under-kurve/","lf-source-claude":true,"permalink":"/storst-mulig-rektangel-under-kurve/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["derivasjon","funksjoner","geometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":5,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":5}],"title":"Størst mulig rektangel under kurve","status":1,"source":null,"todo":null,"poeng":4,"lf-source-claude":true}}
---


# Størst mulig rektangel under kurve

Funksjonen $f$ er gitt ved

$$f(x) = \frac{10}{x^2 + 3}, \quad x > 0$$

Punktene $A$, $B$, $C$ og $D$ danner et rektangel. Punktet $A$ ligger i origo, punktet $B$ ligger på $x$-aksen, punktet $C$ ligger på grafen til $f$, og punktet $D$ ligger på $y$-aksen. Se figuren nedenfor.

![Rektangel under kurven](/img/user/_resources/1t-h25-2-5.jpeg){width=60%}

>[!oppgave]
>a) Bestem arealet av rektangelet dersom punktet $B$ har koordinatene $(3, 0)$.
>
>b) Hvor på $x$-aksen må punktet $B$ ligge for at arealet av rektangelet $ABCD$ skal bli størst mulig?

## Fasit

a) $5/2$
b) $x = \sqrt{3}$

## Løsningsforslag

### a

$$f(3) = \frac{10}{9+3} = \frac{5}{6}, \quad A = 3 \cdot \frac{5}{6} = \underline{\underline{\frac{5}{2}}}$$

### b

Arealet er $A(x) = x \cdot f(x) = \dfrac{10x}{x^2 + 3}$.

$$A'(x) = \frac{30 - 10x^2}{(x^2+3)^2} = 0 \implies x^2 = 3 \implies x = \sqrt{3}$$

Siden $A'(x) > 0$ for $x < \sqrt{3}$ og $A'(x) < 0$ for $x > \sqrt{3}$, er $x = \sqrt{3}$ et maksimumspunkt.

**$B$ må ligge i $\underline{\underline{x = \sqrt{3}}}$.**

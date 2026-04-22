---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["andregradslikninger","funksjoner"],"fag":["1t"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"poeng":1,"title":"Andregradsfunksjon med ett nullpunkt","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Konstruere et andregradsutrykk med ett nullpunkt og $f(0)=9$ ved å kreve diskriminanten $b^2-4ac = 0$.","dg-permalink":"/andregradsfunksjon-med-ett-nullpunkt/","permalink":"/andregradsfunksjon-med-ett-nullpunkt/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["andregradslikninger","funksjoner"],"fag":["1t"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"poeng":1,"title":"Andregradsfunksjon med ett nullpunkt","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":2,"beskrivelse":"Konstruere et andregradsutrykk med ett nullpunkt og $f(0)=9$ ved å kreve diskriminanten $b^2-4ac = 0$."}}
---


# Andregradsfunksjon med ett nullpunkt

En andregradsfunksjon $f$ har ett nullpunkt. Grafen til $f$ skjærer $y$-aksen i punktet $(0, 9)$.

>[!oppgave]
>Bestem et mulig funksjonsuttrykk $f(x)$ for andregradsfunksjonen.

## Fasit

For eksempel $f(x)=x^{2}+6x+9$ eller $f(x)=x^{2}-6x+9$.

## Løsningsforslag

- Ett nullpunkt → grafen «toucher» akkurat $x$-aksen og diskriminanten $b^{2}-4ac$ må være 0.
- Grafen skal skjære i $(0,9)$ → $a$ må være positiv og $f(0)=9$

Vi setter opp det generelle uttrykket.
$$
f(x)=ax^{2}+bx+c
$$
Siden diskriminanten må være null kan vi utnytte at $b^{2}=4ac$ og forenkle. Vi er kun ute etter en mulig løsning her, så jeg bruker kvadratroten slik at $b=\sqrt{ 4ac }$
$$
f(x)=ax^{2}+\sqrt{ 4ac }x+c
$$
Vi utnytter at $f(0)=9$ som gir oss
$$a \cdot 0^{2}+ \sqrt{ 4ac } \cdot 0+c=9 \implies \underline{c=9}$$
Vi har altså
$$
f(x)=ax^{2}+\sqrt{ 4a \cdot9 }x +9=ax^{2}+\sqrt{ 36a }x+9=ax^{2}+6\sqrt{ a }x+9
$$
Den enkleste løsningen her vil være $a=1$ slik at funksjonen vår blir:
$$
\underline{\underline{ f(x)=x^{2}+6x+9 }}
$$


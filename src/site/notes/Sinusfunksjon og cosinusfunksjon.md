---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["trigonometri","funksjoner"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":5}],"poeng":4,"title":"Sinusfunksjon og cosinusfunksjon","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Omskrive sinusfunksjon til cosinusfunksjon via faseforskyvning, og løse $\\cos(\\pi x/4 - \\pi) = 1/2$ i et intervall.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Bruke at $\\cos u$ har bunnpunkt i $u = \\pi$ til å finne faseforskyvning for $g(x) = 2\\cos(\\pi x/4 + \\pi) - 1$."},{"deloppgave":"b","beskrivelse":"Løse $\\cos(\\pi x/4 - \\pi) = 1/2$ via $u = \\pm\\pi/3 + 2k\\pi$ og velge $k$ slik at $x \\in [0, 3\\pi]$."}],"dg-permalink":"/sinusfunksjon-og-cosinusfunksjon/","permalink":"/sinusfunksjon-og-cosinusfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["trigonometri","funksjoner"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":5}],"poeng":4,"title":"Sinusfunksjon og cosinusfunksjon","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Omskrive sinusfunksjon til cosinusfunksjon via faseforskyvning, og løse $\\cos(\\pi x/4 - \\pi) = 1/2$ i et intervall.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Bruke at $\\cos u$ har bunnpunkt i $u = \\pi$ til å finne faseforskyvning for $g(x) = 2\\cos(\\pi x/4 + \\pi) - 1$."},{"deloppgave":"b","beskrivelse":"Løse $\\cos(\\pi x/4 - \\pi) = 1/2$ via $u = \\pm\\pi/3 + 2k\\pi$ og velge $k$ slik at $x \\in [0, 3\\pi]$."}]}}
---


# Sinusfunksjon og cosinusfunksjon

Figuren viser grafen til funksjonen

$$f(x) = 2 \cdot \sin\left(\frac{\pi}{4}x - \frac{\pi}{2}\right) - 1$$

![Grafen til $f(x)$](/img/user/_resources/r2-h24-1-5.jpeg){width=50%}

>[!oppgave]
>a) Bestem en funksjon på formen $g(x) = A \cdot \cos(cx + \varphi) + d$, som passer til grafen.
>
>b) Løs likningen $\cos\left(\dfrac{\pi}{4}x - \pi\right) = \dfrac{1}{2}$, der $x \in [0, 3\pi]$. Forklar hvor på figuren løsningene ligger.

## Fasit

a) $g(x) = 2\cos\left(\dfrac{\pi}{4}x + \pi\right) - 1$
b) $x = \dfrac{8}{3}$ og $x = \dfrac{16}{3}$

## Løsningsforslag

### 1-5a
Vi kan omskrive en sinusfunksjon til en cosinusfunksjon ved å endre på faseforksyvningen. Likevektslinje, periode og amplitude vil være lik som for sinusfunksjonen.

Vi ser at $f$ har et bunnpunkt i $(0,-3)$. Vi vet at $\cos u$ har bunnpunkt når $u=\pi$, så vi kan faseforskyve med $\pi$
$$
g(x)=2 \cdot \cos\left( \frac{\pi}{4}x+\pi \right)-1
$$

### 1-5b
Vi vet at $\cos 60\degree=\cos \frac{\pi}{3}=\frac{1}{2}$, derfor må $\cos \left( \frac{\pi}{3}+2k\pi \right)=\frac{1}{2}=\cos \left(  \frac{5\pi}{3}+2k\pi \right)$ der $k \in \mathbb{Z}$. Vi kan løse for $x$ i to steg. Først setter vi opp likningen
$$
\frac{\pi}{3}+2k\pi=\frac{\pi}{4}x-\pi \iff x=8k+\frac{16}{3}
$$
Siden $x$ er begrenset til $\left[ 0,3\pi \right]$, så er det kun løsningen $x=\frac{16}{3}$ som er gyldig fra denne likningen.

Deretter kan vi sette opp
$$
\frac{5\pi}{3}+2k \pi=\frac{\pi}{4}x-\pi \iff x=8k+\frac{32}{3}
$$
På grunn av avgresningen av $x$, så får vi kun en gyldig løsning hvis vi velger $k=-1$. 
$$
x=8\cdot (-1)+\frac{32}{3}=\frac{8}{3}
$$
Likningen har løsningene $x=\frac{8}{3}$ og $x=\frac{16}{3}$.

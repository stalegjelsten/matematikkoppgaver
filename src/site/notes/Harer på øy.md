---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","regresjon","modellering"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":3,"title":"Harer på øy","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/harer-pa-oy/","permalink":"/harer-pa-oy/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","regresjon","modellering"],"fag":["s2"],"eksamen":"v19","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"poeng":3,"title":"Harer på øy","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Harer på øy

På en øy ble det satt ut 50 harer. Tabellen nedenfor viser hvor mange harer det var på øya etter 0, 10, 20 og 30 uker.

| Antall uker etter utsettingen | 0 | 10 | 20 | 30 |
|---|---|---|---|---|
| Antall harer | 50 | 104 | 156 | 184 |

Antall harer på øya $t$ uker etter at harene ble satt ut, kan ifølge en forsker modelleres med en funksjon $g$ på formen

$$g(t) = \frac{N}{1 + a \cdot e^{-kt}}$$

>[!oppgave]
>a) Bruk regresjon til å bestemme $N$, $a$ og $k$.
>b) Hvilken informasjon gir tallet $N$ i denne situasjonen?

## Fasit

a) $N \approx 200$, $a \approx 3{,}00$, $k \approx 0{,}118$
b) $N = 200$ er den øvre grensen for antall harer på øya (bæreevnen).

## Løsningsforslag

### a

Vi bruker logistisk regresjon i CAS med datapunktene $(0, 50)$, $(10, 104)$, $(20, 156)$ og $(30, 184)$.

Regresjonen gir

$$\underline{\underline{N \approx 200, \quad a \approx 3{,}00, \quad k \approx 0{,}118}}$$

slik at modellen blir

$$g(t) = \frac{200}{1 + 3{,}00 \cdot e^{-0{,}118t}}$$

### b

Tallet $N = 200$ er den øvre grensen (bæreevnen) for antall harer på øya. Når $t \to \infty$, nærmer $g(t)$ seg $N = 200$. Det betyr at bestanden aldri vil overstige omtrent **200 harer**.

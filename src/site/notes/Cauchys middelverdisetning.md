---
{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"dg-publish":true,"temaer":["derivasjon","programmering","bevis","argumentasjon"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":6}],"poeng":null,"title":"Cauchys middelverdisetning","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme $c$ konkret fra middelverdisetningen, lage program som finner $c$ for gitte $a,b$, og avgjøre om $c$ alltid er midtpunktet for andregradsfunksjoner.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $f'(c)=\\tfrac{f(3)-f(1)}{3-1}$ for $c$ når $f(x)=x^2+3x+1$."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Program som regner ut $c$ fra $f$, $a$, $b$."}],"source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/cauchys-middelverdisetning/","permalink":"/cauchys-middelverdisetning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-14","modified":"2026-04-22","aliases":[],"temaer":["derivasjon","programmering","bevis","argumentasjon"],"fag":["r1"],"eksamen":"h23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":6}],"poeng":null,"title":"Cauchys middelverdisetning","status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme $c$ konkret fra middelverdisetningen, lage program som finner $c$ for gitte $a,b$, og avgjøre om $c$ alltid er midtpunktet for andregradsfunksjoner.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Løse $f'(c)=\\tfrac{f(3)-f(1)}{3-1}$ for $c$ når $f(x)=x^2+3x+1$."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Program som regner ut $c$ fra $f$, $a$, $b$."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Cauchys middelverdisetning

I 1823 viste matematikeren Augustin Louis Cauchy følgende setning:

> [!info]
> Anta at en funksjon $f$ er kontinuerlig i det lukkede intervallet $[a, b]$ og deriverbar i det åpne intervallet $\langle a, b \rangle$. Da finnes en $c \in \langle a, b \rangle$ slik at
> $$f'(c) = \frac{f(b) - f(a)}{b - a}\text{.}$$

La $f(x) = x^2 + 3x + 1$.

>[!oppgave]
>a) Bestem $c$ når $a = 1$ og $b = 3$.
>b) Lag et program som bestemmer $c$, når du gir verdier til $a$ og $b$.
>c) Bruk programmet til å undersøke om det finnes en sammenheng mellom verdien av $c$ og verdiene av $a$ og $b$.

Anne påstår at dersom $a = 2$ og $b = 8$, så vil $c = 5$ for alle andregradsfunksjoner.

>[!oppgave]
>d) Avgjør om Annes påstand er riktig.

## Fasit

a) $\underline{\underline{c = 2}}$
b) Se program i løsningsforslaget.
c) $c$ er alltid midtpunktet $\frac{a+b}{2}$.
d) Annes påstand er **riktig** for alle andregradsfunksjoner (med $p \neq 0$).

## Løsningsforslag

### a

Vi skal finne $c \in \langle 1, 3 \rangle$ slik at $f'(c) = \dfrac{f(3) - f(1)}{3 - 1}$.

Vi beregner først høyresiden:

$$\frac{f(3) - f(1)}{3 - 1} = \frac{(9 + 9 + 1) - (1 + 3 + 1)}{2} = \frac{19 - 5}{2} = 7$$

Siden $f'(x) = 2x + 3$, løser vi likningen $f'(c) = 7$:

$$2c + 3 = 7$$

I GeoGebra CAS:

![GeoGebra CAS – løsning del a) og del d)](/img/user/_resources/r1-h23-2-6.png)

CAS gir $c = 2$. Vi sjekker at $c = 2 \in \langle 1, 3 \rangle$ ✓.

**$\underline{\underline{c = 2}}$**

### b

Programmet beregner den midlere stigningen $m = \dfrac{f(b) - f(a)}{b - a}$ og leter så trinnvis fra $x = a$ til $f'(x) \approx m$:

```python
def f(x):
    return x**2 + 3*x + 1

a = 1
b = 3
m = (f(b) - f(a)) / (b - a)     # midlere stigning

h = 0.0001
c = a
while (f(c + h) - f(c)) / h < m:   # finn c der f'(c) ≈ m
    c = c + h

print("c =", round(c, 4))
```

Programmet skriver ut `c = 2.0`.

### c

Ved å kjøre programmet for ulike verdier av $a$ og $b$ (for eksempel $a = 0, b = 4$ gir $c = 2$; $a = -2, b = 2$ gir $c = 0$; $a = 1, b = 5$ gir $c = 3$) ser vi at $c$ alltid er lik midtpunktet:

$$c = \frac{a + b}{2}$$

### d

Vi viser dette analytisk for en generell andregradsfunksjon $h(x) = px^2 + qx + r$ med $p \neq 0$.

**Midlere stigning:**

$$\frac{h(b) - h(a)}{b - a} = \frac{p(b^2 - a^2) + q(b - a)}{b - a} = \frac{(b - a)(p(b + a) + q)}{b - a} = p(a + b) + q$$

(CAS bekrefter: se linje 4 i skjermbildet over — uttrykket forenkles til $ap + pb + q$.)

**Setter $h'(c)$ lik midlere stigning:**

$$h'(c) = 2pc + q = p(a + b) + q$$

$$2pc = p(a + b) \implies c = \frac{a + b}{2}$$

(CAS bekrefter i linje 5: $c = \frac{1}{2}a + \frac{1}{2}b$.)

Siden $c = \dfrac{a+b}{2}$ gjelder for **alle** andregradsfunksjoner med $p \neq 0$, og spesielt for $a = 2$, $b = 8$:

$$c = \frac{2 + 8}{2} = 5$$

**Annes påstand er $\underline{\underline{\text{riktig}}}$.**

---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["trigonometri","funksjoner"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":5}],"poeng":4,"title":"Sinusfunksjon og egenskaper","status":0,"source":null,"lf-source-claude":true,"dg-permalink":"/sinusfunksjon-og-egenskaper/","permalink":"/sinusfunksjon-og-egenskaper/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["trigonometri","funksjoner"],"fag":["r2"],"eksamen":"v24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":5}],"poeng":4,"title":"Sinusfunksjon og egenskaper","status":0,"source":null,"lf-source-claude":true}}
---


# Sinusfunksjon og egenskaper

Funksjonen $f$ er gitt ved

$$f(x) = 2 \cdot \sin\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) - 1, \quad D_f = \langle 0, 20 \rangle.$$

>[!oppgave]
>a) Løs likningen $f(x) = 0$.
>b) Finn amplituden, likevektslinja, perioden og forskyvningen langs likevektslinja.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-5\|Løsningsforslag R2 eksamen V2024#Oppgave 1-5]]

## Fasit

a) $\underline{\underline{x \in \{3,\, 7,\, 15,\, 19\}}}$

b) Amplitude: $\underline{\underline{2}}$, likevektslinje: $\underline{\underline{y = -1}}$, periode: $\underline{\underline{12}}$, forskyvning: $\underline{\underline{2 \text{ mot høyre}}}$

## Løsningsforslag

### a

Vi skal løse $f(x) = 0$:

$$2\sin\!\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) - 1 = 0$$

$$\sin\!\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) = \frac{1}{2}$$

Vi setter $u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}$ og løser $\sin u = \dfrac{1}{2}$.

Sinus er $\dfrac{1}{2}$ for $u = \dfrac{\pi}{6} + 2n\pi$ og $u = \pi - \dfrac{\pi}{6} + 2n\pi = \dfrac{5\pi}{6} + 2n\pi$, der $n \in \mathbb{Z}$.

**Tilfelle 1:**

$$\frac{\pi}{6}x - \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi$$

$$\frac{\pi}{6}x = \frac{\pi}{6} + \frac{\pi}{3} + 2n\pi = \frac{\pi}{2} + 2n\pi$$

$$x = 3 + 12n$$

**Tilfelle 2:**

$$\frac{\pi}{6}x - \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi$$

$$\frac{\pi}{6}x = \frac{5\pi}{6} + \frac{\pi}{3} + 2n\pi = \frac{7\pi}{6} + 2n\pi$$

$$x = 7 + 12n$$

Vi finner løsningene i $D_f = \langle 0, 20 \rangle$:

- Tilfelle 1: $x = 3 + 12n$ gir $x = 3$ (for $n=0$) og $x = 15$ (for $n=1$).
- Tilfelle 2: $x = 7 + 12n$ gir $x = 7$ (for $n=0$) og $x = 19$ (for $n=1$).

**$\underline{\underline{x \in \{3,\, 7,\, 15,\, 19\}}}$**

### b

Vi skriver funksjonen om til standardform $f(x) = A\sin\!\left(\frac{2\pi}{T}(x - x_0)\right) + d$:

$$f(x) = 2\sin\!\left(\frac{\pi}{6}(x - 2)\right) - 1$$

Dette leser vi av slik (vi trekker ut $\dfrac{\pi}{6}$ fra parentesen: $\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \dfrac{\pi}{6}(x-2)$):

- **Amplitude:** $A = \textcolor{seagreen}{2}$
- **Likevektslinje:** $y = \textcolor{steelblue}{-1}$ (vertikal forskyvning $d = -1$)
- **Periode:** $T = \dfrac{2\pi}{\pi/6} = \textcolor{orange}{12}$
- **Horisontal forskyvning:** $x_0 = \textcolor{tomato}{2}$ mot høyre (grafen er forskjøvet 2 enheter i positiv $x$-retning sammenlignet med $2\sin\!\left(\dfrac{\pi}{6}x\right) - 1$)

---
{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"poeng":4,"title":"Logaritmefunksjon uten ekstremalpunkter","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/logaritmefunksjon-uten-ekstremalpunkter/","permalink":"/logaritmefunksjon-uten-ekstremalpunkter/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2020-11-17","modified":"2026-04-08","aliases":[],"temaer":["derivasjon","logaritmer"],"fag":["s2"],"eksamen":"h20","del":1,"oppgave":8,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":8}],"poeng":4,"title":"Logaritmefunksjon uten ekstremalpunkter","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Logaritmefunksjon uten ekstremalpunkter

Funksjonen $f$ er gitt ved

$$f(x) = \ln(x^2 - 2x)$$

>[!oppgave]
>a) Bestem definisjonsmengden til $f$.
>b) Bruk derivasjon til å vise at $f$ verken har ekstremalpunkter eller vendepunkter.

## Fasit

a) $D_f = \langle \leftarrow, 0 \rangle \cup \langle 2, \to \rangle$
b) $f'(x) = 0$ gir $x = 1$, som ikke er i definisjonsmengden

## Løsningsforslag

### a

Vi trenger $x^2 - 2x > 0$, altså $x(x - 2) > 0$.

Fortegnslinje for $x(x-2)$:

| $x$ | $\leftarrow 0$ | $0$ | $0 \to 2$ | $2$ | $2 \to$ |
|---|---|---|---|---|---|
| $x(x-2)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

$$\underline{\underline{D_f = \langle \leftarrow, 0 \rangle \cup \langle 2, \to \rangle}}$$

### b

Vi deriverer med kjerneregelen:

$$f'(x) = \frac{2x - 2}{x^2 - 2x} = \frac{2(x-1)}{x(x-2)}$$

$f'(x) = 0$ gir $x = 1$. Men $x = 1$ ligger **ikke** i definisjonsmengden (siden $1 \in \langle 0, 2 \rangle$ der $f$ ikke er definert). Dermed har $f$ ingen ekstremalpunkter.

Vi deriverer på nytt:

$$f'(x) = \frac{2(x-1)}{x^2-2x}$$

Med kvotientregelen:

$$f''(x) = \frac{2(x^2-2x) - 2(x-1)(2x-2)}{(x^2-2x)^2}$$

$$= \frac{2x^2-4x - 2(x-1) \cdot 2(x-1)}{(x^2-2x)^2} = \frac{2x^2-4x - 4(x-1)^2}{(x^2-2x)^2}$$

$$= \frac{2x^2-4x-4x^2+8x-4}{(x^2-2x)^2} = \frac{-2x^2+4x-4}{(x^2-2x)^2}$$

$$= \frac{-2(x^2-2x+2)}{(x^2-2x)^2}$$

Diskriminanten til $x^2-2x+2$ er $4 - 8 = -4 < 0$, så telleren i $f''(x)$ er alltid $\neq 0$ for alle reelle $x$. Dermed har $f$ heller ingen vendepunkter.

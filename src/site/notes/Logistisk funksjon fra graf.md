---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","modellering"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Logistisk funksjon fra graf","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/logistisk-funksjon-fra-graf/","permalink":"/logistisk-funksjon-fra-graf/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","modellering"],"fag":["s2"],"eksamen":"v21","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"poeng":4,"title":"Logistisk funksjon fra graf","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Logistisk funksjon fra graf

På figuren nedenfor har vi tegnet grafen til funksjonen $f$, der $f(x)$ er på formen

$$f(x) = \frac{A}{1 + B \cdot e^{-kx}}, \quad k > 0$$

I samme figur har vi også tegnet inn tangenten til grafen til $f$ i punktet $(0, 2)$. Vi har også tegnet inn linjen $y = 10$, som er en asymptote til grafen til $f$.

![Logistisk funksjon med tangent og asymptote](/img/user/_resources/s2-v21-1-4.jpeg){width=60%}

>[!oppgave]
>a) Bestem tallene $A$ og $B$.
>b) Gjør nødvendige beregninger og vis at $k = 0{,}5$.

## Fasit

a) $A = 10$ og $B = 4$
b) Se løsningsforslag

## Løsningsforslag

### a

Når $x \to \infty$, har vi $e^{-kx} \to 0$, slik at

$$f(x) \to \frac{A}{1 + 0} = A$$

Siden asymptoten er $y = 10$, er $\underline{\underline{A = 10}}$.

Grafen går gjennom $(0, 2)$:

$$f(0) = \frac{10}{1 + B \cdot e^0} = \frac{10}{1 + B} = 2$$

$$1 + B = 5 \quad \Rightarrow \quad \underline{\underline{B = 4}}$$

### b

Vi har $f(x) = \dfrac{10}{1 + 4e^{-kx}}$. Vi deriverer:

$$f'(x) = \frac{10 \cdot 4k \cdot e^{-kx}}{(1 + 4e^{-kx})^2}$$

Vi setter inn $x = 0$:

$$f'(0) = \frac{40k \cdot e^0}{(1 + 4)^2} = \frac{40k}{25} = \frac{8k}{5}$$

Fra figuren leser vi av at tangenten i $(0, 2)$ går gjennom punktet $(10, 10)$. Tangentens stigningstall er

$$a = \frac{10 - 2}{10 - 0} = \frac{8}{10} = 0{,}8$$

Vi setter $f'(0) = 0{,}8$:

$$\frac{8k}{5} = \frac{4}{5} \quad \Rightarrow \quad 8k = 4 \quad \Rightarrow \quad \underline{\underline{k = 0{,}5}}$$

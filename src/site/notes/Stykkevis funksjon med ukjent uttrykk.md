---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/stykkevis-funksjon-med-ukjent-uttrykk/","dg-publish":true,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":3}],"poeng":3,"source":null,"status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme tredjegradsledd i delt forskrift ved å kreve $C^1$-kontinuitet (verdi + derivert) ved $x=-2$ og $x=1$; gir 4 likninger i 4 ukjente.","lf-source-claude":true,"tags":["oppgave"],"temaer":["kontinuitet","derivasjon","funksjoner","delt forskrift","likningssystem"],"title":"Stykkevis funksjon med ukjent uttrykk","todo":[],"permalink":"/stykkevis-funksjon-med-ukjent-uttrykk/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["r1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":3}],"poeng":3,"source":null,"status":0,"kategori":3,"vanskegrad":3,"beskrivelse":"Bestemme tredjegradsledd i delt forskrift ved å kreve $C^1$-kontinuitet (verdi + derivert) ved $x=-2$ og $x=1$; gir 4 likninger i 4 ukjente.","lf-source-claude":true,"tags":["oppgave"],"temaer":["kontinuitet","derivasjon","funksjoner","delt forskrift","likningssystem"],"title":"Stykkevis funksjon med ukjent uttrykk","todo":[]}}
---


# Stykkevis funksjon med ukjent uttrykk

Amalie arbeider med en funksjon $f$ med delt forskrift og skal vise funksjonsuttrykket til de andre i klassen. Dessverre har hun sølt på arket sitt og klarer ikke å lese alt som står der.

$$
f(x) = \begin{cases} 
-9x - 15\text{,} & x \le -2 \\ 
\blacksquare\blacksquare\blacksquare\blacksquare \text{,} & -2 < x < 1 \\  
\dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} \quad  & x \ge 1 \end{cases}$$

Hun husker at $f$ er kontinuerlig og deriverbar for alle $x \in \mathbb{R}$. Hun husker også at det midterste uttrykket er et tredjegradspolynom.

>[!oppgave]
>Bruk dette til å bestemme hele funksjonsuttrykket til $f$.

## Fasit

$$\mathbf{f(x) = \begin{cases} -9x - 15\text{,} & x \le -2 \\ -\dfrac{13}{27}x^3 + \dfrac{7}{9}x^2 - \dfrac{1}{9}x - \dfrac{113}{27}\text{,} & -2 < x < 1 \\ \dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} & x \ge 1 \end{cases}}$$

## Løsningsforslag

For at $f$ skal være kontinuerlig og deriverbar i $x = -2$ og $x = 1$, må det midterste uttrykket $g(x) = ax^3 + bx^2 + cx + d$ oppfylle fire krav:

- **Kontinuitet i $x = -2$:** $g(-2) = f_1(-2)$
- **Deriverbarhet i $x = -2$:** $g'(-2) = f_1'(-2)$
- **Kontinuitet i $x = 1$:** $g(1) = f_3(1)$
- **Deriverbarhet i $x = 1$:** $g'(1) = f_3'(1)$

**Beregn grenseverdiene fra de kjente uttrykkene:**

$f_1(x) = -9x - 15 \implies f_1(-2) = 18 - 15 = 3$ og $f_1'(-2) = -9$

$f_3(x) = \dfrac{x^2}{2} - x - \dfrac{7}{2} \implies f_3(1) = \dfrac{1}{2} - 1 - \dfrac{7}{2} = -4$ og $f_3'(x) = x - 1 \implies f_3'(1) = 0$

**Sett opp likningssystemet** med $g(x) = ax^3 + bx^2 + cx + d$ og $g'(x) = 3ax^2 + 2bx + c$:

$$\begin{cases} g(-2) = -8a + 4b - 2c + d &= 3 \\ g'(-2) = 12a - 4b + c &= -9 \\ g(1) = a + b + c + d &= -4 \\ g'(1) = 3a + 2b + c &= 0 \end{cases}$$

**Løs i GeoGebra CAS:**

```
Løs({-8a1 + 4b1 - 2c1 + d1 = 3, 12a1 - 4b1 + c1 = -9,
     a1 + b1 + c1 + d1 = -4, 3a1 + 2b1 + c1 = 0}, {a1, b1, c1, d1})
```

![GeoGebra CAS løser likningssystemet og gir a = −13/27, b = 7/9, c = −1/9, d = −113/27](/img/user/_resources/r1-v25-2-3.png)

GeoGebra gir:

$$a = -\frac{13}{27}, \quad b = \frac{7}{9}, \quad c = -\frac{1}{9}, \quad d = -\frac{113}{27}$$

Det midterste uttrykket er altså:

$$g(x) = -\frac{13}{27}x^3 + \frac{7}{9}x^2 - \frac{1}{9}x - \frac{113}{27}$$

**Hele funksjonsuttrykket er:**

$$\underline{\underline{f(x) = \begin{cases} -9x - 15\text{,} & x \le -2 \\ -\dfrac{13}{27}x^3 + \dfrac{7}{9}x^2 - \dfrac{1}{9}x - \dfrac{113}{27}\text{,} & -2 < x < 1 \\ \dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} & x \ge 1 \end{cases}}}$$
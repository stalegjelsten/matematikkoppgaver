---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","lf-source-claude":true,"aliases":[],"dg-publish":true,"temaer":["likninger","polynomdivisjon","faktorisering","funksjonsdrøfting"],"fag":["1t"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"poeng":4,"title":"Løs tredjegradsulikhet og illustrer grafisk","status":0,"kategori":2,"vanskegrad":3,"beskrivelse":"Løse $x^3+7x^2+4x-12<0$ ved å gjette nullpunkt, polynomdividere og lese fortegn fra skisse.","source":null,"todo":null,"dg-permalink":"/los-tredjegradsulikhet-og-illustrer-grafisk/","permalink":"/los-tredjegradsulikhet-og-illustrer-grafisk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","lf-source-claude":true,"aliases":[],"temaer":["likninger","polynomdivisjon","faktorisering","funksjonsdrøfting"],"fag":["1t"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"poeng":4,"title":"Løs tredjegradsulikhet og illustrer grafisk","status":0,"kategori":2,"vanskegrad":3,"beskrivelse":"Løse $x^3+7x^2+4x-12<0$ ved å gjette nullpunkt, polynomdividere og lese fortegn fra skisse.","source":null,"todo":null}}
---


# Løs tredjegradsulikhet og illustrer grafisk

Funksjonen $f$ er gitt ved

$$f(x) = x^3 + 7x^2 + 4x - 12$$

>[!oppgave]
>Løs ulikheten $f(x) < 0$ og illustrer løsningen grafisk ved å lage en skisse.

## Fasit

**$x \in \langle -\infty, -6 \rangle \cup \langle -2, 1 \rangle$**

## Løsningsforslag

Vi skal løse $f(x) < 0$ der $f(x) = x^3 + 7x^2 + 4x - 12$.

Første steg er å finne nullpunktene til $f$.

**Gjett et heltallsnullpunkt.** Nullpunktene må være delere av konstantleddet $-12$, altså blant $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$. Vi prøver $x = 1$:

$$f(1) = 1 + 7 + 4 - 12 = 0 \checkmark$$

Så $(x - 1)$ er en faktor.

**Polynomdivisjon:**

$$\frac{x^3 + 7x^2 + 4x - 12}{x - 1} = x^2 + 8x + 12$$

Vi kontrollerer: $(x-1)(x^2 + 8x + 12) = x^3 + 8x^2 + 12x - x^2 - 8x - 12 = x^3 + 7x^2 + 4x - 12$ ✓

**Faktoriser andregradsuttrykket** $x^2 + 8x + 12$:

$$x = \frac{-8 \pm \sqrt{64 - 48}}{2} = \frac{-8 \pm \sqrt{16}}{2} = \frac{-8 \pm 4}{2}$$

Dette gir $x = -2$ og $x = -6$.

Dermed kan vi skrive:

$$f(x) = (x - 1)(x + 2)(x + 6)$$

**Nullpunktene** er $x = -6$, $x = -2$ og $x = 1$.

**Fortegnsanalyse.** Siden ledende koeffisient er positiv ($+1$ foran $x^3$), er $f(x) \to -\infty$ for $x \to -\infty$ og $f(x) \to +\infty$ for $x \to +\infty$. Fortegnet skifter ved hvert nullpunkt:

| Intervall | $f(x)$ |
|-----------|--------|
| $x < -6$ | $-$ |
| $-6 < x < -2$ | $+$ |
| $-2 < x < 1$ | $-$ |
| $x > 1$ | $+$ |

**Grafisk illustrasjon:**

![Skisse av f(x) med nullpunkter og fortegnsmerking](/img/user/_resources/1t-h24-1-3-skisse.png){width=80%}

Kurven starter nedenfra (negativ), krysser $x$-aksen i $x = -6$, går opp (positiv), krysser i $x = -2$, går ned (negativ), og krysser til slutt i $x = 1$ og fortsetter oppover. De røde skyggede områdene viser der $f(x) < 0$.

**Løsningen** er der $f(x) < 0$:

$$\underline{\underline{x \in \langle -\infty,\, -6 \rangle \cup \langle -2,\, 1 \rangle}}$$

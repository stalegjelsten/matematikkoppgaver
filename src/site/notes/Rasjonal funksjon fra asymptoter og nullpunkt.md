---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["rasjonale funksjoner","asymptoter","argumentasjon"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"poeng":2,"title":"Rasjonal funksjon fra asymptoter og nullpunkt","status":0,"kategori":3,"vanskegrad":2,"beskrivelse":"Konstruere et funksjonsuttrykk $f(x)=\\frac{4(x+3)}{x-2}$ ut fra vertikal asymptote $x=2$, horisontal asymptote $y=4$ og nullpunkt $x=-3$.","source":null,"lf-source-claude":true,"todo":null,"dg-permalink":"/rasjonal-funksjon-fra-asymptoter-og-nullpunkt/","permalink":"/rasjonal-funksjon-fra-asymptoter-og-nullpunkt/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["rasjonale funksjoner","asymptoter","argumentasjon"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"poeng":2,"title":"Rasjonal funksjon fra asymptoter og nullpunkt","status":0,"kategori":3,"vanskegrad":2,"beskrivelse":"Konstruere et funksjonsuttrykk $f(x)=\\frac{4(x+3)}{x-2}$ ut fra vertikal asymptote $x=2$, horisontal asymptote $y=4$ og nullpunkt $x=-3$.","source":null,"lf-source-claude":true,"todo":null}}
---


# Rasjonal funksjon fra asymptoter og nullpunkt

En rasjonal funksjon $f$ har asymptotene $x = 2$ og $y = 4$.
Nullpunktet til funksjonen er $x = -3$.

>[!oppgave]
>Bestem et mulig funksjonsuttrykk $f(x)$.
>Gjør rede for hvordan du har tenkt for å komme fram til funksjonsuttrykket.

## Fasit

$$\underline{\underline{f(x) = \frac{4(x+3)}{x-2}}}$$

## Løsningsforslag

En rasjonal funksjon kan alltid skrives på formen

$$f(x) = \frac{a(x - x_0)}{x - x_1}$$

der $x_0$ er nullpunktet, $x_1$ gir den vertikale asymptoten, og $a$ bestemmer den horisontale asymptoten.

**Vertikal asymptote $x = 2$:** Nevneren er null når $x = 2$, så nevneren har faktoren $(x - 2)$.

**Nullpunkt $x = -3$:** Telleren er null når $x = -3$, så telleren har faktoren $(x + 3)$.

Funksjonen er dermed

$$f(x) = \frac{a(x+3)}{x-2}$$

**Horisontal asymptote $y = 4$:** Når $x \to \pm\infty$ dominerer de ledende leddene:

$$f(x) = \frac{a(x+3)}{x-2} \approx \frac{ax}{x} = a$$

Vi trenger $a = 4$.

**Funksjonsuttrykket blir:**

$$\underline{\underline{f(x) = \frac{4(x+3)}{x-2}}}$$

**Verifikasjon:**
- $f(-3) = \frac{4 \cdot 0}{-3-2} = 0$ — nullpunkt i $x = -3$ ✓
- $f(2)$: nevner $= 0$ — vertikal asymptote i $x = 2$ ✓
- $f(x) \to 4$ når $x \to \pm\infty$ — horisontal asymptote $y = 4$ ✓

Grafen nedenfor viser begge grenene av $f$, de stiplede asymptotene og nullpunktet $(-3, 0)$:

![Rasjonal funksjon med asymptoter og nullpunkt](/img/user/_resources/1t-h24-2-3.png)

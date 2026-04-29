---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["derivasjon","modellering","geometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"title":"Tangent til parabel og lagerhall","status":1,"source":null,"todo":null,"poeng":3,"dg-permalink":"/tangent-til-parabel-og-lagerhall/","lf-source-claude":true,"permalink":"/tangent-til-parabel-og-lagerhall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["derivasjon","modellering","geometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":6}],"title":"Tangent til parabel og lagerhall","status":1,"source":null,"todo":null,"poeng":3,"lf-source-claude":true}}
---


# Tangent til parabel og lagerhall

![Snitt av lagerhall](/img/user/_resources/1t-h25-2-6.jpeg){width=40%}

En arkitekt har tegnet et snitt av en lagerhall. Lagerhallen er 20 meter høy og har form som en parabel gitt ved

$$p(x) = -\frac{1}{12}x^2 + 20$$

På taket av lagerhallen skal det plasseres et webkamera. Webkameraet skal festes på en stang som er 3 meter lang.

Den rette linjen på figuren går gjennom punktet $(0, 23)$ og er en tangent til grafen.

>[!oppgave]
>a) Bestem likningen for tangenten.
>b) Hvor langt fra veggen på lagerhallen kan en tyv bevege seg uten å bli fotografert av webkameraet?

## Fasit

a) $y = -x + 23$
b) $21 - 4\sqrt{15} \approx 5{,}5 \mathrm{~m}$

## Løsningsforslag

### a

$p'(x) = -x/6$. La tangentpunktet være $(c, p(c))$ og tangenten gå gjennom $(0, 23)$:

$$23 - p(c) = -p'(c) \cdot c = \frac{c^2}{6}$$

$$3 + \frac{c^2}{12} = \frac{c^2}{6} \implies 3 = \frac{c^2}{12} \implies c = \pm 6$$

For $c = 6$: $m = -1$, tangent: $y = -(x-6) + 17 = \underline{\underline{-x + 23}}$

### b

Veggen er der $p(x) = 0$: $x = 4\sqrt{15} \approx 15{,}5\ \mathrm{m}$ fra senter.

Kameraet i $(0, 23)$ ser langs tangenten. En tyv på $2\ \mathrm{m}$ er skjult når linjen fra kameraet til hodet $(x_t, 2)$ tangerer bygget i $x = 6$:

$$23 - \frac{126}{x_t} = 17 \implies x_t = 21\ \mathrm{m}$$

Avstand fra vegg: $21 - 4\sqrt{15} \approx \underline{\underline{5{,}5\ \mathrm{m}}}$.

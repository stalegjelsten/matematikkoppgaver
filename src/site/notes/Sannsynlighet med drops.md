---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","kombinatorikk"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":3}],"title":"Sannsynlighet med drops","status":3,"source":null,"todo":null,"permalink":"/sannsynlighet-med-drops/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["sannsynlighet","kombinatorikk"],"fag":["s1"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":3}],"title":"Sannsynlighet med drops","status":3,"source":null,"todo":null}}
---


# Sannsynlighet med drops

Sander, Henny og Kari har hver sin pose med drops. I alle posene er det 3 grønne, 8 gule og 7 røde drops.

Sander tar 2 tilfeldige drops fra sin pose.

>[!oppgave]
>a) Bestem sannsynligheten for at han tar 2 gule drops.

Henny tar 3 tilfeldige drops fra sin pose.

>[!oppgave]
>b) Bestem sannsynligheten for at hun tar et drops av hver farge.

Sander og Henny legger tilbake dropsene de tok i oppgave a og b. Alle tre tar så et drops fra hver sin pose.

>[!oppgave]
>c) Bestem sannsynligheten for at alle får samme farge på dropset de tar.

## Fasit

a) $\dfrac{28}{153}$
b) $\dfrac{7}{34}$
c) $\dfrac{49}{324}$

## Løsningsforslag

Hver pose inneholder $3 + 8 + 7 = 18$ drops.

### 2-3a

Sander tar $2$ drops. Sannsynligheten for $2$ gule:

$$P(\text{2 gule}) = \frac{\binom{8}{2}}{\binom{18}{2}} = \frac{28}{153}$$

**$\underline{\underline{P = \dfrac{28}{153}}}$**

### 2-3b

Henny tar $3$ drops. Sannsynligheten for én av hver farge:

$$P(\text{en av hver}) = \frac{\binom{3}{1}\binom{8}{1}\binom{7}{1}}{\binom{18}{3}} = \frac{3 \cdot 8 \cdot 7}{816} = \frac{168}{816} = \frac{7}{34}$$

**$\underline{\underline{P = \dfrac{7}{34}}}$**

### 2-3c

Alle tre tar ett drops fra hver sin pose – uavhengige hendelser.

$$P(\text{alle samme}) = P(\text{alle grønn}) + P(\text{alle gul}) + P(\text{alle rød})$$

$$= \left(\frac{3}{18}\right)^3 + \left(\frac{8}{18}\right)^3 + \left(\frac{7}{18}\right)^3 = \frac{27 + 512 + 343}{5832} = \frac{882}{5832} = \frac{49}{324}$$

**$\underline{\underline{P = \dfrac{49}{324}}}$**

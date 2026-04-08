---
{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["rekker"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Aritmetisk og geometrisk rekke med betingelser","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/aritmetisk-og-geometrisk-rekke-med-betingelser/","permalink":"/aritmetisk-og-geometrisk-rekke-med-betingelser/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2022-05-25","modified":"2026-04-08","aliases":[],"temaer":["rekker"],"fag":["s2"],"eksamen":"v22","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"poeng":4,"title":"Aritmetisk og geometrisk rekke med betingelser","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Aritmetisk og geometrisk rekke med betingelser

I en rekke $a_1 + a_2 + \cdots + a_n$ er $a_2 = 8$ og $a_4 = 2$.

>[!oppgave]
>a) Bestem summen av de seks første leddene i rekken, dersom den er aritmetisk.

Det fins to geometriske rekker som tilfredsstiller betingelsene ovenfor.

>[!oppgave]
>b) Bestem summen av de seks første leddene i hver av de to geometriske rekkene.

## Fasit

a) $s_6 = 21$
b) $s_6 = \frac{63}{2}$ eller $s_6 = -\frac{21}{2}$

## Løsningsforslag

### a

I en aritmetisk rekke er $a_n = a_1 + (n-1)d$. Vi har:

$$a_2 = a_1 + d = 8 \quad \text{og} \quad a_4 = a_1 + 3d = 2$$

Vi trekker den første fra den andre:

$$2d = 2 - 8 = -6 \implies d = -3$$

$$a_1 = 8 - (-3) = 11$$

Summen av de seks første leddene:

$$s_6 = \frac{6}{2}(2 \cdot 11 + 5 \cdot (-3)) = 3(22 - 15) = \underline{\underline{21}}$$

### b

I en geometrisk rekke er $a_n = a_1 \cdot k^{n-1}$. Vi har:

$$a_2 = a_1 k = 8 \quad \text{og} \quad a_4 = a_1 k^3 = 2$$

Vi deler:

$$\frac{a_4}{a_2} = k^2 = \frac{2}{8} = \frac{1}{4} \implies k = \pm \frac{1}{2}$$

**Tilfelle 1:** $k = \frac{1}{2}$, da er $a_1 = \frac{8}{1/2} = 16$

$$s_6 = 16 \cdot \frac{1 - (1/2)^6}{1 - 1/2} = 16 \cdot \frac{1 - 1/64}{1/2} = 16 \cdot \frac{63/64}{1/2} = 16 \cdot \frac{63}{32} = \underline{\underline{\frac{63}{2}}}$$

**Tilfelle 2:** $k = -\frac{1}{2}$, da er $a_1 = \frac{8}{-1/2} = -16$

$$s_6 = -16 \cdot \frac{1 - (-1/2)^6}{1 - (-1/2)} = -16 \cdot \frac{1 - 1/64}{3/2} = -16 \cdot \frac{63/64}{3/2} = -16 \cdot \frac{63}{96} = \underline{\underline{-\frac{21}{2}}}$$

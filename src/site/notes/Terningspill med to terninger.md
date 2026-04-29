---
{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["sannsynlighet","forventningsverdi"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Terningspill med to terninger","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/terningspill-med-to-terninger/","permalink":"/terningspill-med-to-terninger/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-05-24","modified":"2026-04-08","aliases":[],"temaer":["sannsynlighet","forventningsverdi"],"fag":["s2"],"eksamen":"v19","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":6,"title":"Terningspill med to terninger","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Terningspill med to terninger

Vi har to terninger som begge har seks sider. Den ene er en vanlig terning, mens den andre har fire sider som viser ett øye, én side som viser to øyne, og én side som viser tre øyne.

Vi lar $X$ være summen av antall øyne vi får når vi kaster de to terningene.

>[!oppgave]
>a) Skriv av tabellen, og fyll ut sannsynlighetsfordelingen.
>
>| $k$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
>|---|---|---|---|---|---|---|---|---|
>| $P(X = k)$ | $\dfrac{4}{36}$ | $\dfrac{5}{36}$ | $\dfrac{6}{36}$ | $\dfrac{6}{36}$ | | $\dfrac{6}{36}$ | | $\dfrac{1}{36}$ |
>b) Vis at $\text{E}(X) = 5$.

De to terningene brukes i et pengespill.

- Dersom summen av antall øyne blir 5 eller mindre i ett kast, gis det ingen gevinst.
- Dersom summen av antall øyne blir 6, 7 eller 8 i ett kast, gis det 72 kroner i gevinst.
- Dersom summen av antall øyne blir 9 i ett kast, gis det 360 kroner i gevinst.

Vi lar $Y$ være gevinsten du får når du kaster terningene én gang.

>[!oppgave]
>c) Anslå om du kan forvente å gå i overskudd i det lange løp dersom det koster 40 kroner for hver gang du kaster terningene.

## Fasit

a) $P(X = 6) = \dfrac{6}{36}$, $P(X = 8) = \dfrac{2}{36}$
b) Se løsningsforslag
c) $\text{E}(Y) = 38 \text{ kr}$. Nei, du kan ikke forvente å gå i overskudd.

## Løsningsforslag

### a

Den vanlige terningen viser 1–6 med lik sannsynlighet $\frac{1}{6}$. Den spesielle terningen har $P(1) = \frac{4}{6}$, $P(2) = \frac{1}{6}$ og $P(3) = \frac{1}{6}$.

**$P(X = 6)$:** Vi trenger kombinasjonene (vanlig, spesiell) som gir sum 6:

- $(3, 3)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(4, 2)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(5, 1)$: $\frac{1}{6} \cdot \frac{4}{6} = \frac{4}{36}$

$$P(X = 6) = \frac{1 + 1 + 4}{36} = \underline{\underline{\frac{6}{36}}}$$

**$P(X = 8)$:** Kombinasjoner som gir sum 8:

- $(5, 3)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
- $(6, 2)$: $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$

$$P(X = 8) = \frac{1 + 1}{36} = \underline{\underline{\frac{2}{36}}}$$

### b

$$\text{E}(X) = \sum_{k=2}^{9} k \cdot P(X = k)$$

$$= 2 \cdot \frac{4}{36} + 3 \cdot \frac{5}{36} + 4 \cdot \frac{6}{36} + 5 \cdot \frac{6}{36} + 6 \cdot \frac{6}{36} + 7 \cdot \frac{6}{36} + 8 \cdot \frac{2}{36} + 9 \cdot \frac{1}{36}$$

$$= \frac{8 + 15 + 24 + 30 + 36 + 42 + 16 + 9}{36} = \frac{180}{36} = \underline{\underline{5}}$$

### c

Vi finner forventet gevinst $\text{E}(Y)$:

$$P(X \in \{6, 7, 8\}) = \frac{6 + 6 + 2}{36} = \frac{14}{36}$$

$$P(X = 9) = \frac{1}{36}$$

$$\text{E}(Y) = 72 \cdot \frac{14}{36} + 360 \cdot \frac{1}{36} = \frac{1008 + 360}{36} = \frac{1368}{36} = 38 \text{ kr}$$

Siden det koster 40 kr per kast og forventet gevinst er 38 kr, er forventet nettoresultat $38 - 40 = -2$ kr per kast.

**Du kan ikke forvente å gå i overskudd i det lange løp.**

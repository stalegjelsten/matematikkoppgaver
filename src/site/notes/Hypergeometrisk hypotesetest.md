---
{"tags":["oppgave"],"date":"2024-12-14","modified":"2024-12-14","aliases":null,"dg-publish":true,"temaer":["hypotesetest","hypergeometrisk"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Hypergeometrisk hypotesetest","source":null,"todo":null,"status":3,"permalink":"/hypergeometrisk-hypotesetest/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-14","modified":"2024-12-14","aliases":null,"temaer":["hypotesetest","hypergeometrisk"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"2","oppgavenummer":[{"fag":"s2","del":2,"oppgave":2}],"title":"Hypergeometrisk hypotesetest","source":null,"todo":null,"status":3}}
---


# Hypergeometrisk hypotesetest


En bedrift skal ansette en ny person i en stilling og har fått 100 godt kvalifiserte søkere. 60 av søkerne er kvinner, og 40 av søkerne er menn. Ledelsen i bedriften rekker ikke å intervjue alle, derfor blir 8 kvinner og 12 menn tilfeldig invitert til intervju av ledelsen.

Fagforeningen lurer på om dette faktisk er tilfeldig, eller om ledelsen bevisst velger menn. De ber deg gjennomføre en hypotesetest med signifikansnivå 5 %.

>[!oppgave]
>a) Formuler nullhypotesen $H_{0}$ og alternativhypotesen $H_{1}$ for testen. Forklar hvorfor en hypergeometrisk sannsynlighetsfordeling er mest passende for denne testen.

>[!oppgave]
>b) Gjennomfør hypotesetesten og vurder om det er grunnlag for å si at ledelsen bevisst velger menn.

## Fasit

b) Ja, vi kan forkaste $H_{0}$ siden $p=0{,}038$.

## Løsningsforslag

### 2-2a
Vi har en situasjon hvor vi har to ulike grupper og vi tenker oss at vi skal trekke 20 kandidater tilfeldig blant disse. Vi kan selvsagt ikke trekke den samme kandidaten til intervju 2 ganger, så dette blir en trekning uten tilbakelegging. Derfor passer en hypergeometrisk sannsynnlighetsfordeling godt i dette tilfellet.

Hvis trekningen hadde vært tilfeldig burde sannsynligheten for å trekke en mann på første trekning være $p_{m}=\frac{40}{100}=0{,}4$. Altså kan vi sette opp følgende hypoteser
$$
\begin{aligned}
H_{0}:& \quad p_{m}=0{,}4 \\
H_{1}:& \quad p_{m}>0{,}4
\end{aligned}
$$

>[!info] Andre hypoteser
>
>Vi kan selvsagt bruke andelen kvinner som utgangspunkt for hypotesene våre. Ved tilfeldig trekning burde sannsynligheten for kvinne på første trekning være $p_{k}=0{,}6$. Dette gir hypotesene
>$$H_{0}: \quad p_{k}=0{,}6 \quad \text{mot} \quad H_{1}: \quad p_{k}<0{,}6$$

### 2-2b

![Hypergeometrisk hypotesetest i GeoGebra til oppgave 2-2](/img/user/_resources/s2-h24-2-2-hypotesetest.png)

I GeoGebra har vi satt opp en hypergeometrisk fordeling med 100 kandidater hvorav 40 er menn. Vi velger 20 tilfeldige kandidater. Sannsynligheten for at minst 12 av disse er menn er $P(X\geq12) = 0{,}038$.

**$\boldsymbol{p}$-verdien på 0,038 er mindre enn signifikansnivået på 5 %, derfor forkaster vi nullhypotesen.**

**En hypotesetest med signifikansnivå 5 % gir grunnlag for å si at bedriften bevisst velger menn foran kvinner.**

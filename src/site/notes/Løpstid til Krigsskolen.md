---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Løpstid til Krigsskolen","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/lopstid-til-krigsskolen/","permalink":"/lopstid-til-krigsskolen/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["normalfordeling","hypotesetest"],"fag":["s2"],"eksamen":"h19","del":2,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":3}],"poeng":6,"title":"Løpstid til Krigsskolen","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Løpstid til Krigsskolen

Denne oppgaven handler om gutter som søker opptak på Krigsskolen.

Vi lar $X$ være tiden en tilfeldig valgt gutt bruker når han løper 3000 meter. Vi antar at $X$ er normalfordelt. Forventningsverdien er 12 minutter og 43 sekunder. Standardavviket er 54 sekunder.

Et av kravene for å komme inn på Krigsskolen er at man løper 3000 meter på under 13 minutter.

>[!oppgave]
>a) Bestem sannsynligheten for at en tilfeldig valgt gutt greier tidskravet på 3000-metersløpet.

Pål har som mål å være blant de 5 prosent raskeste på 3000-metersløpet.

>[!oppgave]
>b) Hvor lang tid kan han høyst bruke hvis han skal nå dette målet?

Et spesielt treningsprogram ser ut til å ha god effekt på hvor raskt man løper 3000 meter. Vi ønsker å utføre en hypotesetest for å finne ut om treningsprogrammet har så god effekt som man tror.

Vi velger tilfeldig ut 25 gutter som søker opptak til Krigsskolen, og lar dem gjennomføre programmet før de skal løpe 3000-metersløpet.

>[!oppgave]
>c) Sett opp en hypotesetest som kan brukes i denne situasjonen.

Gjennomsnittstiden blir 12 minutter og 27 sekunder. Vi regner fortsatt at standardavviket er 54 sekunder for løpstiden til en tilfeldig gutt som søker opptak.

>[!oppgave]
>d) Utfør hypotesetesten, og bruk den til å avgjøre om det er grunnlag for å si at treningsprogrammet har god effekt. Bruk et signifikansnivå på 5 prosent.

## Fasit

a) $P \approx 0{,}624$
b) Ca. 11 min 14 s
c) Se løsningsforslag
d) $p$-verdi $\approx 0{,}069$. Ikke grunnlag for å forkaste $H_0$.

## Løsningsforslag

### a

$X$ er normalfordelt med $\mu = 12 \text{ min } 43 \text{ s} = 763 \text{ s}$ og $\sigma = 54 \text{ s}$.

Tidskravet er 13 min $= 780$ s. Vi standardiserer:

$$z = \frac{780 - 763}{54} \approx 0{,}31$$

$$P(X < 780) = \Phi(0{,}31) \approx \underline{\underline{0{,}624}}$$

### b

Vi trenger $P(X < t) = 0{,}05$:

$$z = \Phi^{-1}(0{,}05) \approx -1{,}645$$

$$t = 763 + (-1{,}645) \cdot 54 \approx 674 \text{ s} \approx \underline{\underline{11 \text{ min } 14 \text{ s}}}$$

### c

**Hypoteser:**

- $H_0$: $\mu = 763$ s (treningsprogrammet har ingen effekt)
- $H_1$: $\mu < 763$ s (treningsprogrammet gir lavere løpstid)

Vi bruker en venstresidig test med signifikansnivå $\alpha = 0{,}05$.

Testobservator: $Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$

### d

Gjennomsnittstiden er $\bar{X} = 12 \text{ min } 27 \text{ s} = 747 \text{ s}$, med $n = 25$ og $\sigma = 54$ s.

$$z = \frac{747 - 763}{54 / \sqrt{25}} = \frac{-16}{10{,}8} \approx -1{,}48$$

$p$-verdien: $P(Z < -1{,}48) \approx 0{,}069$.

Siden $p = 0{,}069 > 0{,}05 = \alpha$, forkaster vi **ikke** $H_0$.

Det er **ikke grunnlag** for å si at treningsprogrammet har signifikant effekt på signifikansnivå 5 %.

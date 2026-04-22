---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":[],"dg-publish":true,"temaer":["normalfordeling","standard normalfordeling","binomisk","binomisk fordeling","tolke grafer"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Figurer som viser normalfordeling","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Identifisere riktig normalfordelingsgraf fra $\\mu, \\sigma$ — både som normaltilnærming til binomisk ($\\text{Var}=np(1-p)$) og direkte gitt.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Beregne $\\mu=700$, $\\sigma\\approx 14$ fra binomisk og bruke 68 %-regelen for å velge figur."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Bruke 68 %-regelen på $N(50,10)$ for å velge graf med riktig spredning rundt $\\mu$."}],"dg-permalink":"/figurer-som-viser-normalfordeling/","permalink":"/figurer-som-viser-normalfordeling/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-14","aliases":[],"temaer":["normalfordeling","standard normalfordeling","binomisk","binomisk fordeling","tolke grafer"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Figurer som viser normalfordeling","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Identifisere riktig normalfordelingsgraf fra $\\mu, \\sigma$ — både som normaltilnærming til binomisk ($\\text{Var}=np(1-p)$) og direkte gitt.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Beregne $\\mu=700$, $\\sigma\\approx 14$ fra binomisk og bruke 68 %-regelen for å velge figur."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Bruke 68 %-regelen på $N(50,10)$ for å velge graf med riktig spredning rundt $\\mu$."}]}}
---


# Figurer som viser normalfordeling


En gartner sår 1000 frø. Frøene har en spireevne på 70 %.

>[!oppgave]
> a) Hvilken av de to figurene nedenfor viser sannsynlighetstettheten for antall frø som spirer?
> 
> Husk å begrunne svaret ditt.

![](/img/user/_resources/s2-h24-1-4a.png)

En stokastisk variabel er normalfordelt med $E(X)=50$ og $\sigma=10$.

>[!oppgave]
>b) Hvilken av de to figurene nedenfor viser sannsynlighetstettheten til denne stokastiske variabelen?
>
>Husk å begrunne svaret ditt.

![](/img/user/_resources/s2-h24-1-4b.png)

## Fasit

a) Figur 2
b) Figur 3

## Løsningsforslag

### a
Vi kan bruke en binomisk sannsynlighetsmodell siden vi kan regne dette som 1000 uavhengige forsøk hvor frøene enten spirer eller ikke spirer. På grunn av sentralgrensesetningen kan vi også bruke normalfordeling som en tilnærming til den binomiske fordelingen. 
$$\text{Var}(X)=np(1-p)=1000\cdot 0{,}7\cdot 0{,}3=210$$
I dette tilfellet er normalfordelingen en svært god tilnærming til den binomiske fordelingen siden variansen er mye større enn 5.

Vi bestemmer forventningsverdien og standardavviket
$$
E(X)=\mu=np=1000\cdot 0{,}7=700 \quad \text{og} \quad \sigma=\sqrt{ 210 } \approx 14
$$
Vi vet at omtrent 68 % av utfallene kommer til å havne innenfor ett standardavvik fra forventningsverdien, altså at $P(\mu-\sigma<X<\mu+\sigma)\approx 0{,}68$.

Vi ser at figur 1 må ha et standardavvik på mer enn 100, **derfor må figur 2 være riktig figur.**

### b
Vi kan bruke samme tankegang som i forrige oppgave. Vi ser at figur 4 har mye mer enn 68 % av sitt skraverte areal innenfor intervallet $\left[ \mu-\sigma , \mu+\sigma \right]=\left[ 40 , 60 \right]$.

**Figur 3 viser sannsynlighetstettheten.**

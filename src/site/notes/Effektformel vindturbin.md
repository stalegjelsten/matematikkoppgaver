---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["formler","elektrofag","potensregning"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Effektformel vindturbin","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Sette inn i effektformel og løse for $A$; sammenligne vekstfaktorer for dobling av $A$ vs. dobling av $v$ (faktor 2 vs. $2^3=8$).","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn gitte verdier i effektformelen $P=v^3\\cdot A\\cdot\\rho\\cdot\\eta/2$."},{"deloppgave":"b","kategori":1,"vanskegrad":2,"beskrivelse":"Løse $P=v^3\\cdot A\\cdot\\rho\\cdot\\eta/2$ for $A$ ved kjent $P$."}],"dg-permalink":"/effektformel-vindturbin/","permalink":"/effektformel-vindturbin/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-03-15","aliases":[],"temaer":["formler","elektrofag","potensregning"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Effektformel vindturbin","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Sette inn i effektformel og løse for $A$; sammenligne vekstfaktorer for dobling av $A$ vs. dobling av $v$ (faktor 2 vs. $2^3=8$).","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette inn gitte verdier i effektformelen $P=v^3\\cdot A\\cdot\\rho\\cdot\\eta/2$."},{"deloppgave":"b","kategori":1,"vanskegrad":2,"beskrivelse":"Løse $P=v^3\\cdot A\\cdot\\rho\\cdot\\eta/2$ for $A$ ved kjent $P$."}]}}
---


# Effektformel vindturbin

En vindturbin henter energi fra luft i bevegelse.

Formelen for hvor mye effekt en vindturbin leverer, ser slik ut:

$$P = \frac{v^3 \cdot A \cdot \rho \cdot \eta}{2}$$

$P$ er effekt i watt, $v$ er vindhastighet i meter i sekundet, $A$ er arealet som bladene dekker på én rotasjon, $\rho$ er egenvekten til luft, og $\eta$ er virkningsgraden til turbinen.

Vindturbinen er konstruert for drift med følgende verdier:

| Vindhastighet       | $v = 10 \mathrm{~m/s}$            |
|---------------------|-----------------------------------|
| Virkningsgrad       | $\eta = {,}5$                     |
| Areal               | $A = 20 \mathrm{~m^2}$            |
| Egenvekten til luft | $\rho = 1{,}3 \mathrm{~kg/m^3}$   |

>[!oppgave]
>a) Finn den leverte effekten ($P$) til vindturbinen. Husk å begrunne svaret ditt.
>b) Hva må $A$ av bladene til vindturbinen være hvis effekten skal være $9425 \mathrm{~W}$ med samme vindhastighet?
>c) Hva gir størst økning i effekt: en dobling av rotorarealet $A$ eller en dobling av vindhastigheten $v$? Gjør utregninger og begrunn svaret ditt.

## Fasit

a) $P = 6500 \, \mathrm{W}$
b) $A = 29 \, \mathrm{m}^2$
c) Dobling av $v$ gir størst økning (faktor 8 mot faktor 2)

## Løsningsforslag

### a

Vi setter inn de oppgitte verdiene i formelen:

   $$P = \frac{v^3 \cdot A \cdot \rho \cdot \eta}{2} = \frac{10^3 \cdot 20 \cdot 1{,}3 \cdot 0{,}5}{2} = \frac{130\,000}{2} = \underline{\underline{6500 \, \mathrm{W}}}$$

### b

Vi løser for $A$ når $P = 9425 \, \mathrm{W}$:

   $$
   \begin{aligned}
   9425 &= \frac{10^3 \cdot A \cdot 1{,}3 \cdot 0{,}5}{2} \\
   9425 &= 325 \cdot A \\
   A &= \frac{9425}{325} = \underline{\underline{29 \, \mathrm{m}^2}}
   \end{aligned}
   $$

### c

Vi beregner effekten ved dobling av $A$ og ved dobling av $v$:

   **Dobling av $A$** (fra 20 til 40 m²):

   $$P = \frac{10^3 \cdot 40 \cdot 1{,}3 \cdot 0{,}5}{2} = 13\,000 \, \mathrm{W}$$

   Det er 2 ganger den opprinnelige effekten.

   **Dobling av $v$** (fra 10 til 20 m/s):

   $$P = \frac{20^3 \cdot 20 \cdot 1{,}3 \cdot 0{,}5}{2} = \frac{8000 \cdot 20 \cdot 0{,}65}{1} = 52\,000 \, \mathrm{W}$$

   Det er 8 ganger den opprinnelige effekten.

   **Dobling av vindhastigheten $v$ gir størst økning.** Fordi $v$ er opphøyd i tredje potens i formelen, gir en dobling av $v$ en økning med faktoren $2^3 = 8$, mens dobling av $A$ bare gir dobbel effekt.

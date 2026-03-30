---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["effekttrekant","formler","elektrofag"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Strøm og virkningsgrad elektromotor","status":3,"source":null,"todo":null,"permalink":"/strom-og-virkningsgrad-elektromotor/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-03-15","aliases":[],"temaer":["effekttrekant","formler","elektrofag"],"fag":["1p-y el"],"eksamen":"v23","del":2,"oppgave":1,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":1}],"title":"Strøm og virkningsgrad elektromotor","status":3,"source":null,"todo":null}}
---


# Strøm og virkningsgrad elektromotor

En terrassevarmer er merket med $P = 1725 \mathrm{~W}$ og $U = 230 \mathrm{~V}$.

Formelen for effekt for en slik terrassevarmer er

$$P = U \cdot I$$

$P$ er effekten i watt, $U$ er spenningen i volt, og $I$ er strømstyrken i ampere.

>[!oppgave]
>a) Hvor mye strøm ($I$) går det gjennom denne terrassevarmeren?

Elektromotoren under er koblet til et trefasenett.

![Elektromotor i trefasenett](/img/user/_resources/1pyel-v23-2-1-2.jpeg)

Formelen for tilført effekt $(P_t)$ er $P_t = \sqrt{3} \cdot U \cdot I \cdot \cos \varphi$

Formelen for virkningsgraden til en elektromotor er

$$\eta = \frac{P_a}{P_t}$$

>[!oppgave]
>b) Bruk de oppgitte formlene og finn $\cos \varphi$ dersom $\eta = {,}8$, $U = 230 \mathrm{~V}$, $I = 5 \mathrm{~A}$ og $P_a = 920 \mathrm{~W}$.

## Fasit

a) $I = 7{,}5 \, \mathrm{A}$
b) $\cos \varphi \approx 0{,}58$

## Løsningsforslag

a) Vi løser $P = U \cdot I$ for $I$:

   $$I = \frac{P}{U} = \frac{1725}{230} = \underline{\underline{7{,}5 \, \mathrm{A}}}$$

b) Vi bruker de to formlene. Først finner vi tilført effekt fra virkningsgraden:

   $$\eta = \frac{P_a}{P_t} \implies P_t = \frac{P_a}{\eta} = \frac{920}{0{,}8} = 1150 \, \mathrm{W}$$

   Deretter setter vi inn i formelen for tilført effekt og løser for $\cos \varphi$:

   $$\begin{aligned}
   P_t &= \sqrt{3} \cdot U \cdot I \cdot \cos \varphi \\
   1150 &= \sqrt{3} \cdot 230 \cdot 5 \cdot \cos \varphi \\
   \cos \varphi &= \frac{1150}{\sqrt{3} \cdot 230 \cdot 5} \approx \underline{\underline{0{,}58}}
   \end{aligned}$$

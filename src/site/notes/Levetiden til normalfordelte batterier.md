---
{"tags":["oppgave","normalfordeling","standard normalfordeling","kontinuerlige sannsynlighetsfordelinger","s2","del1"],"temaer":["normalfordeling","standard normalfordeling","kontinuerlige sannsynlighetsfordelinger","sannsynlighet"],"alias":[null],"del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Levetiden til normalfordelte batterier","date":"2023-05-27","modified":"2023-06-06","permalink":"/levetiden-til-normalfordelte-batterier/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","normalfordeling","standard normalfordeling","kontinuerlige sannsynlighetsfordelinger","s2","del1"],"temaer":["normalfordeling","standard normalfordeling","kontinuerlige sannsynlighetsfordelinger","sannsynlighet"],"alias":[null],"del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"fag":"s2","eksamen":"v23","title":"Levetiden til normalfordelte batterier","date":"2023-05-27","modified":"2023-06-06","permalink":"/levetiden-til-normalfordelte-batterier/"}}
---


# Levetiden til normalfordelte batterier

Levetiden $X$ til et tilfeldig valgt batteri er normalfordelt med forventet levetid 500 timer og standardavvik 50 timer.

>[!oppgave]
>a) Bestem sannsynligheten for at et tilfeldig valgt batteri vil ha en levetid på mer enn 600 timer.

Sannsynligheten er 75,8 prosent for at levetiden til et tilfeldig valgt batteri er mer enn $t$ timer.

>[!oppgave]
>b) Bestem $t$.

>[!oppgave]
>c) Hvilken av de grafiske framstillingene nedenfor illustrerer $X$ ? Husk å argumentere for svaret.

![](https://cdn.mathpix.com/cropped/2023_05_27_0e0b8d19e4104951d013g-12.jpg?height=666&width=1510&top_left_y=1636&top_left_x=318)

## Fasit

a) 0,0228
b) 465 timer
c) A

## Løsningsforslag

### 1-6a
Siden vi skal finne $P(X>600)$ og 600 ligger nøyaktig to standardavvik over forventningsverdien kan vi bare slå opp på $z=2.0$ i normalfordelingstabellen for å bestemme $P(X<600) = \Phi(2) = 0,9772$.

$$P(X>600) = 1-P(X<600) = 1-0,9772 = \underline{ \underline{0,0228}}$$

### 1-6b
Sannsynligheten for at levetiden er *kortere* enn $t$ timer er 24,2 prosent. Jeg bruker normalfordelingstabellen og finner $\Phi(z) = 0,242 \implies z=-0,70$.

$$
\begin{aligned}
z &= \frac{t-\mu}{\sigma}\\
z\sigma + \mu &\overset{ \rightleftarrows  }{ = } t\\
t &= -0,70\cdot 50 + 500\\
t &= -35 + 500\\
t &= 465
\end{aligned}
$$

**Det er 75,8 % sannsynlighet for at et tilfeldig valgt batteri har levetid mer enn 465 timer.**

### 1-6c
Siden forventningsverdien er 500 må toppunktet til normalfordelingsfunksjonen ligge ved $x=500$. Det stemmer med graf A og D.

I tillegg vet vi at standardavviket er 50. Hvis vi beveger oss et standardavvik mot høyre eller venstre fra forventningsverdien skal vi komme til vendepunktene til normalfordelingsfunksjonen. Det ser ut til å stemme bra med graf A, hvor vendepunktene ligger ved omtrent $x=450$ og $x=550$.

**Graf A illustrerer $X$.**

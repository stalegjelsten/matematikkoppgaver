---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["integral","trigonometri"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":1}],"poeng":6,"title":"Integral med delvis integrasjon og trigonometri","status":3,"source":null,"todo":null,"permalink":"/integral-med-delvis-integrasjon-og-trigonometri/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["integral","trigonometri"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":1}],"poeng":6,"title":"Integral med delvis integrasjon og trigonometri","status":3,"source":null,"todo":null}}
---


# Integral med delvis integrasjon og trigonometri

>[!oppgave]
>a) Regn ut integralet $\int x^2 \cdot \ln x \, dx$
>b) Bestem $x$ når $\int_0^x \sin\left(\pi t + \frac{\pi}{4}\right) \, \mathrm{d}t = 0$ og $x \in \langle 0, \pi \rangle$.
>c) Gi en praktisk tolkning av svaret i oppgave b).

## Fasit

a) $\dfrac{1}{3}x^3\left(\ln x - \dfrac{1}{3}\right) + C$
b) $x = \dfrac{3}{2}$ og $x = 2$
c) Like mye positivt og negativt areal mellom 0 og $x$

## Løsningsforslag

### 1-1a
Siden vi skal regne ut integralet til produktet av to ulike funksjoner vil jeg forsøke delvis integrasjon. Jeg benytter DI-metoden, og velger at $x^{2}$ er den faktoren som skal integreres, og $\ln x$ er faktoren som skal deriveres. 

|     |       D       |         I          |
| :-: | :-----------: | :----------------: |
|  +  |    $\ln x$    |      $x^{2}$       |
|  -  | $\frac{1}{x}$ | $\frac{1}{3}x^{3}$ |

Vi kan altså sette opp
$$
\begin{aligned}
\int x^{2} \ln x \, \mathrm{d}x &=
\ln x \cdot \frac{1}{3}x^{3} - \int \frac{1}{x}\cdot \frac{1}{3} x^{3} \, \mathrm{d}x \\
&=\frac{1}{3} x^{3}\ln x - \frac{1}{3} \int x^{2} \, \mathrm{d}x\\
&=\frac{1}{3} x^{3} \ln x - \frac{1}{3}\cdot \frac{1}{3} x^{3}+C\\
&=\underline{\underline{\frac{1}{3}x^{3}\left( \ln x-\frac{1}{3} \right)+C}}
\end{aligned}
$$

### 1-1b
Vi løser først det tilhørende ubestemte integralet ved hjelp av variabelskiftet $u=\pi t+\frac{\pi}{4}$. Da er
$$
\frac{du}{dt}=\pi \iff dt=\frac{du}{\pi}
$$
Vi gjennomfører variabelskiftet
$$
\int \sin \left( \pi t + \frac{\pi}{4} \right)  \, \mathrm{d}t=\int \sin u \, \frac{\mathrm{d}u}{\pi} =-\frac{1}{\pi}\cos(u)+C=-\frac{1}{\pi}\cos\left( \pi t + \frac{\pi}{4} \right)+C
$$
Vi setter opp det bestemte integralet og setter lik 0.
$$
\begin{aligned}
-\frac{1}{\pi} \left[ \cos\left( \pi t + \frac{\pi}{4} \right) \right]_{0}^{x}&=0\\
\left[ \cos\left( \pi t + \frac{\pi}{4} \right) \right]_{0}^{x}&=0\\
\left( \cos\left( \pi x + \frac{\pi}{4} \right) \right)-\left( \cos\left( \pi \cdot 0 + \frac{\pi}{4} \right) \right)  &=0\\
\left( \cos\left( \pi x + \frac{\pi}{4} \right) \right)-\left( \cos\left(\frac{\pi}{4} \right) \right)  &=0\\
\cos\left( \pi x + \frac{\pi}{4}  \right)- \cos\left(\frac{\pi}{4} \right)  &=0\\
\cos\left( \pi x + \frac{\pi}{4}  \right) &= \cos\left(\frac{\pi}{4} \right)
\end{aligned}
$$
Vi vet at vi at følgende uttrykk er like
$$
\begin{aligned}
\text{(1)} \quad \cos \left( \frac{\pi}{4} \right) &=\cos\left( 2k\pi+ \frac{\pi}{4}\right) \quad \text{der} \quad k\in \mathbb{Z}\\
\text{(2)} \quad \cos \left( \frac{\pi}{4} \right) &=\cos\left( 2k\pi+\frac{7\pi}{4}\right) \quad \text{der} \quad k\in \mathbb{Z}
\end{aligned}
$$
$x$ er begrenset til intervallet $\langle 0, \pi\rangle$, derfor får vi kun en gyldig løsning fra likning $(1)$
$$
x=2k \implies x=2
$$
Fra likning $(2)$ får vi følgende løsning
$$
\begin{aligned}
\pi x + \frac{\pi}{4}&=2k \pi + \frac{7\pi}{4}\\
\pi x&=2\pi k+\frac{6\pi}{4}\\
x &=2k + \frac{3}{2}\\
x&=\frac{3}{2} \quad \text{ hvis } x \in \langle 0, \pi \rangle
\end{aligned}
$$
**Løsningene er $\underline{\underline{x=\frac{3}{2}}}$ og $\underline{\underline{x=2}}$.**

### 1-1c
Hvis integralet av $\int_{0}^{x} f(t) \, dt$ skal være lik 0 så må vi ha nøyaktig like mye areal mellom grafen og $x$-aksen på den positive og negative siden av $x$-aksen mellom $0$ og $x$. For en sinusfunksjon så vil vi like mye areal på begge sider av $x$-aksen når funksjonen har gjennomført et heltall antall perioder fra tiden $t=0$.

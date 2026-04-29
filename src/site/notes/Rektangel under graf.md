---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/rektangel-under-graf/","dg-publish":true,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":7,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":7}],"poeng":null,"source":null,"status":3,"tags":["oppgave"],"temaer":["optimering","derivasjon","funksjoner"],"title":"Rektangel under graf","todo":["løsningsforslag"],"permalink":"/rektangel-under-graf/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["1t"],"modified":"2026-03-29","oppgave":7,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":7}],"poeng":null,"source":null,"status":3,"tags":["oppgave"],"temaer":["optimering","derivasjon","funksjoner"],"title":"Rektangel under graf","todo":["løsningsforslag"]}}
---


# Rektangel under graf

Nedenfor ser du grafen til funksjonen $f$ gitt ved

$$f(x) = \frac{8}{x^2 + 20}$$

![Graf til f med rektangel innskrevet](/img/user/_resources/1t-h23-2-7.jpeg){width=70%}

Rektangelet under grafen har hjørner i punktene $(0, 0)$, $(5, 0)$, $(5, f(5))$ og $(0, f(5))$.

>[!oppgave]
>a) Bestem arealet av rektangelet.
>b) Lag en systematisk oversikt som viser arealet av rektanglene som har hjørner i punktene $(0, 0)$, $(n, 0)$, $(n, f(n))$ og $(0, f(n))$ for $n \in \{1, 2, 3, \ldots, 10\}$
>c) Bestem $k$ slik at arealet av rektangelet som har hjørner i punktene $(0, 0)$, $(k, 0)$, $(k, f(k))$ og $(0, f(k))$, blir størst mulig.

## Fasit

a) $\frac{8}{9}$
b) –
c) $2\sqrt{ 5 } \approx 4{,}47$

## Løsningsforslag

### a
Rektangelet har bredde $5$ og høyde $f(5)$.

$$
f(5)=\frac{8}{5^{2}+20}=\frac{8}{45}
$$
$$
\text{Areal}=5 \cdot \frac{8}{45}=\underline{\underline{ \frac{8}{9} }}
$$
**Arealet er $\underline{\underline{ \frac{8}{9} }}$.**

### b
Den enkleste måten å lage en systematisk oversikt er med et regneark.

![Oversikt over arealer](/img/user/_resources/rektangel-under-graf.png){width=60%}

### c
Ut fra oversikten ser det ut til at svaret vil være når bredden er omtrent 4,5. For å bestemme dette eksakt kan vi lage en arealfunksjon:

$$
A(x)= \text{Bredde} \cdot \text{Høyde} =  x \cdot f(x)=x \cdot \frac{8}{x^{2}+20}
$$

For å finne toppunktet til funksjonen deriverer vi den i CAS og setter den deriverte lik 0.

![Finner største areal i CAS](/img/user/_resources/rektangel-under-graf%201.png){width=40%}

**Arealet er størst når $\underline{\underline{ k=2\sqrt{ 5 } }}$.**
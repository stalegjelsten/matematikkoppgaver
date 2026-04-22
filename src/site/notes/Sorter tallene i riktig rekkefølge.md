---
{"aliases":null,"date":"2023-11-15","del":1,"dg-permalink":"/sorter-tallene-i-riktig-rekkefolge/","dg-publish":true,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-22","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":2}],"tags":["oppgave"],"temaer":["logaritmer"],"title":"Sorter tallene i riktig rekkefølge","permalink":"/sorter-tallene-i-riktig-rekkefolge/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"date":"2023-11-15","del":1,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-22","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":2}],"tags":["oppgave"],"temaer":["logaritmer"],"title":"Sorter tallene i riktig rekkefølge"}}
---


# Sorter tallene i riktig rekkefølge

Skriv uttrykkene nedenfor i stigende rekkefølge.

$$
2 \ln e^{3}\quad, \quad 3 \lg 70 \quad,\quad e^{3 \ln 2}
$$

Husk å begrunne svaret.

## Fasit

$3 \lg 70 < 2 \ln e^{3} < e^{3 \ln 2}$, det vil si $3 \lg 70 < 6 < 8$.

## Løsningsforslag

Vi forenkler hvert uttrykk algebraisk.

**$2 \ln e^{3}$**

Vi bruker logaritmeregelen $\ln e^{x} = x$:

$$2 \ln e^{3} = 2 \cdot 3 = \underline{6}$$

**$e^{3 \ln 2}$**

Vi bruker at $a \ln b = \ln b^{a}$, og deretter at $e^{\ln x} = x$:

$$e^{3 \ln 2} = e^{\ln 2^{3}} = 2^{3} = \underline{8}$$

**$3 \lg 70$**

Vi argumenterer uten kalkulator. Siden $10 < 70 < 100$, gjelder

$$\lg 10 < \lg 70 < \lg 100 \quad \Longrightarrow \quad 1 < \lg 70 < 2$$

Derfor er $3 < 3 \lg 70 < 6$.

Vi vet altså at $3 \lg 70$ er mellom 3 og 6, og dermed **mindre enn 6**.

**Rekkefølge (stigende):**

$$\boxed{3 \lg 70 \;<\; 2 \ln e^{3} = 6 \;<\; e^{3 \ln 2} = 8}$$
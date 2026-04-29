---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["logaritmer","modellering"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":3,"poeng":4,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":3}],"title":"Luktintensitet og logaritmisk modell","status":0,"source":null,"todo":null,"dg-permalink":"/luktintensitet-og-logaritmisk-modell/","permalink":"/luktintensitet-og-logaritmisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["logaritmer","modellering"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":3,"poeng":4,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":3}],"title":"Luktintensitet og logaritmisk modell","status":0,"source":null,"todo":null}}
---


# Luktintensitet og logaritmisk modell

Beboerne i et boligområde klager på lukt fra et biogassanlegg. Kommunen tar luftprøver og vurderer værdata som vind og temperatur.

Prøvene analyseres, og hver prøve gis en luktverdi $C$. Denne luktverdien er gitt i luktenheter (odour units) per kubikkmeter ($\mathrm{OU/m^3}$).

Sammenhengen mellom $C$ og luktintensiteten $I$ er gitt ved

$$I = 1{,}4 \cdot \lg(C) - 0{,}3$$

Biogassanlegget er pålagt å forholde seg til tabellen nedenfor.

| Luktintensitet ($I$) | Vurdering |
|---|---|
| $< 1$ | uproblematisk |
| $1$–$2$ | akseptabelt |
| $2$–$3$ | kan aksepteres kortvarig |
| $3$–$4$ | plagsom lukt, bør begrenses |
| $> 4$ | plagsomt, tiltak kreves |

Resultatet av prøvene viser luktverdier mellom $500 \mathrm{~OU/m^3}$ og $1400 \mathrm{~OU/m^3}$.

>[!oppgave]
>a) Har beboerne grunnlag for å klage?

Biogassanlegget tar klagene på alvor og ønsker å redusere luktplagene.

>[!oppgave]
>b) Hvilken luktverdi må nye prøver vise for at luktintensiteten skal bli akseptabel?

## Fasit

a) Ja, $I \in (3{,}48,\; 4{,}10)$ – godt over akseptabelt nivå
b) $C \le 44 \, \mathrm{OU/m^3}$

## Løsningsforslag

### a

Vi beregner luktintensiteten for de to ytterverdiene $C = 500$ og $C = 1400$:

$$
\begin{aligned}
I(500) &= 1{,}4 \cdot \lg(500) - 0{,}3 \approx 1{,}4 \cdot 2{,}699 - 0{,}3 \approx 3{,}48 \\
I(1400) &= 1{,}4 \cdot \lg(1400) - 0{,}3 \approx 1{,}4 \cdot 3{,}146 - 0{,}3 \approx 4{,}10
\end{aligned}
$$

Luktintensiteten ligger mellom ca. $3{,}5$ og $4{,}1$, noe som ifølge tabellen tilsvarer kategoriene «plagsom lukt, bør begrenses» og «plagsomt, tiltak kreves».

**Ja, beboerne har grunnlag for å klage. $\underline{\underline{I \in (3{,}48,\; 4{,}10)}}$, som er langt over akseptabelt nivå.**

### b

For akseptabel luktintensitet kreves $I \le 2$:

$$
1{,}4 \cdot \lg(C) - 0{,}3 \le 2 \implies 1{,}4 \cdot \lg(C) \le 2{,}3 \implies \lg(C) \le \frac{2{,}3}{1{,}4} = \frac{23}{14}
$$

$$
C \le 10^{23/14} \approx 44 \, \mathrm{OU/m^3}
$$

**Nye prøver må vise $\underline{\underline{C \le 44 \, \mathrm{OU/m^3}}}$ for at luktintensiteten skal bli akseptabel.**

(Til sammenligning viser nåværende prøver 500–1400 $\mathrm{OU/m^3}$, så en reduksjon på over 90 % er nødvendig.)

---

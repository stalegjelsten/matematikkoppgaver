---
{"aliases":null,"temaer":null,"del":null,"oppgave":null,"fag":"s2","eksamen":"e22","tags":["matematikk","løsningsforslag","S2"],"alias":[],"dg-publish":true,"title":"Løsningsforslag S2 eksempelsett 2022","date":"2023-05-19","modified":"2024-12-15","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}","\\RedeclareSectionCommand[runin=false,afterskip=-.25\\baselineskip]{subsection}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":-3,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-s2-eksempelsett-2022/","dgPassFrontmatter":true}
---


# Løsningsforslag S2 eksempelsett 2022
## Oppgave 1-1
### 1-1a

$$
\int_{0}^{1} 4x^2+3 \, \mathrm{d}x =\left[ \frac{4}{3}x^3+3x \right]_{0}^{1}=\frac{4}{3}+3\cdot1-0=\frac{4}{3}+\frac{9}{3}=\underline{\underline{\frac{13}{3} }}
$$

### 1-1b

$$
\begin{aligned}
\int 4x\sqrt{ x^2+2 } \, \mathrm{d}x, \quad u=x^2+2 \implies \frac{du}{dx}=2x \iff du=2xdx\\
\int 2\sqrt{ u } \, \mathrm{d}u =2\int u^{\frac{1}{2}} \, \mathrm{d}x =2\frac{2}{3}u^{\frac{3}{2}}+C=\frac{4}{3}(x^2+2)+C'
\end{aligned}
$$

## Oppgave 1-3

### 1-3

#### Om oppgaveteksten
Denne oppgaven finnes i to ulike varianter (sannsynligvis på grunn av en skrivefeil i løsningsforslag eller oppgavesettet. Den ene varianten sier at summen av de tre første leddene er 38/9, mens den andre varianten sier at summen av de seks første leddene er 38/9. Løsningsmetoden min vil fungere uansett hvilken variant man tenker seg, men det er nok lurt å heller formel for sum av geometrisk rekke ($s_{n} = a_{1} \frac{k^n-1}{k-1}$) enn min framgangsmåte dersom man får oppgitt summen av et høyt antall ledd. Min metode er enkel når du bare trenger å tenke på 3 ledd, men skal du ta hensyn til 100 så må du regne mye!

#### Oppgavetekst
Summen av en uendelig geometrisk rekke konvergerer mot 6.

Sum av tre første ledd er 38/9

Hva er sum av de fire første?

#### Løsningsforslag
Jeg kaller første ledd i rekka for $x$. Vet da at de tre første leddene må være:

$$x+xk+xk^2=\frac{38}{9}$$

Som kan faktoriseres til 

$$x(1+k+k^2)=\frac{38}{9}$$

Summen for uendelig geometrisk rekke gir:

$$\frac{x}{1-k}=6$$

Løser den likningen for $x$ og setter inn i uttrykket for sum av 3 første ledd 

$$x=6(1-k)$$

$$6(1-k)(1+k+k^2)=\frac{38}{9}$$

$$(1-k)(1+k+k^2)=\frac{38}{9\cdot 6}=\frac{38}{54}=\frac{19}{27}$$

$$1+k+k^2-k-k^2-k^3=\frac{19}{27}$$

$$1-k^3=\frac{19}{27}$$

$$k^3=1-\frac{19}{27}=\frac{8}{27}\Rightarrow \underline{k=\frac{2}{3}}$$

Vi har nå funnet $k$ og kan enkelt finne $x$:

$$x=6 (1-k)=6\left( 1- \frac{2}{3} \right)=6 \frac{1}{3}=2$$

Ledd 4 må være:

$$xk^3=2 \cdot \frac{8}{27}=\frac{16}{27}$$

Summen av de fire første leddene blir da summen av de tre første pluss dette fjerde leddet

$$\frac{38}{9}+\frac{16}{27}=\frac{114}{27}+\frac{16}{27}=\frac{130}{27}$$

Summen av fire første ledd er 

$$\underline{\underline{\frac{130}{27}}}$$

#### Alternativ løsning
Fra formel for sum av uendelig geometrisk rekke vet vi at

$$
\frac{a_{1}}{1-k}=6
$$

Samtidig kan sum av de tre første leddene uttrykkes som

$$
\frac{38}{9}=a_{1}\cdot \frac{k^{3}-1}{k-1}
$$

Vi har altså to likninger og to ukjente, $a_{1}$ og $k$.

Vi kan løse den første likningen for $a_{1}$ og sette inn i den andre likningen

$$
a_{1}=6(1-k)
$$

$$
\frac{38}{9}=6(1-k) \cdot \frac{k^3-1}{k-1}=6\cdot \frac{(k^{3}-1)(1-k)}{k-1}
$$

Siden $(1-k)=(-1)\cdot (k-1)$ så bytter jeg ut denne faktoren i telleren for å kunne forkorte brøken på høyre side. Samtidig deler jeg på 6 på begge sider.

$$
\frac{38}{54}= \frac{(k^{3}-1)(-1)\cancel{ (k-1) }}{\cancel{ (k-1) }}=(k^{3}-1)(-1)=1-k^{3}
$$

Vi kan nå løse likningen

$$
\begin{aligned}
\frac{38}{54}&=1-k^{3} \\
k^3&=1-\frac{38}{54}=\frac{16}{54}=\frac{8}{27}\\
k&=\sqrt[3]{ \frac{8}{27} }=\frac{2}{3}
\end{aligned}
$$

Når vi endelig har $k$ så kan vi finne $a_{1}$ med

$$
a_{1}=6(1-k)=6\left( 1-\frac{2}{3} \right)=6 \cdot \frac{1}{3}=2
$$

Og til slutt kan vi finne summen av de fire første leddene med sumformelen

$$
s_{4}=a_{1} \cdot \frac{k^4-1}{k-1}=2 \cdot \frac{\left( \frac{2}{3} \right)^{4}-1}{\left( \frac{2}{3} \right)-1}=2 \cdot \frac{\frac{16}{81}-1}{\frac{2}{3}-1}=2\cdot \frac{-\frac{65}{81}}{-\frac{1}{3}}=2 \cdot \frac{\frac{65}{81}}{\frac{27}{81}}=\frac{130}{27}
$$

**Summen av de fire første leddene er**

$$
\underline{\underline{\frac{130}{27}}}
$$

## Oppgave 1-4
### 1-4a
Summen av sannsynlighetene for alle utfallene skal være 1. Vi har dermed at 

$$
\begin{aligned}
0{,}2+k+2k+5k&=1\\
8k&=0{,}8\\
k&=0{,}1
\end{aligned}
$$

Forventningsverdien er gitt ved

$$
\sum x \cdot P(X=x)=0+1\cdot 0{,}1 + 2\cdot 0{,}2 + 3 \cdot 0,5=2{,}0
$$

**$k$ må være lik 0,1 og forventningsverdien $\text{E}(X)=2$**.

### 1-4b
Variansen til $X$ er gitt ved 

$$
Var(X)=\sum_{i=1}^{n}(x_{i}-\mu)^{2} \cdot P(X=x)
$$

Dette er enklest å regne ut ved å bruke sannsynlighetsfordelingen:

|              $x$               |            0            |           1           |       2       |           3           |
| :----------------------------: | :---------------------: | :-------------------: | :-----------: | :-------------------: |
|            $P(X=x)$            |         $0{,}2$         |        $0{,}1$        |    $0{,}2$    |        $0{,}5$        |
|       $(x_{i}-\mu)^{2}$        |      $(0-2)^{2}=4$      |     $(1-2)^{2}=1$     | $(2-2)^{2}=0$ |     $(3-2)^{2}=1$     |
| $(x_{i}-\mu)^{2} \cdot P(X=x)$ | $4 \cdot 0{,}2 = 0{,}8$ | $1 \cdot 0{,}1=0{,}1$ |      $0$      | $1 \cdot 0{,}5=0{,}5$ |

Summen av kvadratavvikene er 1,4.

**Variansen $\underline{\underline{\text{Var}(X)=1{,}4}}$.**

## Oppgave 2-2
### 2-2a
Siden $f(t)=0$ når $t\leq 0$ så vil

$$
\int_{- \infty}^{0} f(t) \, dt =0
$$

Vi trenger derfor kun å bry oss tilfellet hvor $t>0$.

Vi vet at et krav til sannsynlighetsfordelinger er at summen av alle sannsynlighetene skal bli 1. For kontinuerlige sannsynlighetsfordelinger har vi altså

$$
\int_{- \infty}^{\infty} f(x) \, dx =1
$$

I vårt tilfelle ønsker vi altså å bestemme $k$ slik at den tilfredsstiller likningen

$$
\int_{0}^{\infty} k \cdot e^{-0{,}005t} \, dt = 1
$$

Vi kan løse denne i GeoGebra eller vi kan integrere for hånd:

$$
\begin{aligned}
\left[ \frac{k}{-0.005} \cdot e^{-0.005t} \right]_{0}^{\infty}&=1 \\
\left(  \frac{k}{-0.005} \cdot  0 \right)-\left( \frac{k}{-0.005} \cdot 1 \right) &= 1\\
\frac{-k}{-0.005}&=1\\
k&=0.005
\end{aligned}
$$

**Jeg har vist at $k=0{,}005$**

### 2-2b
Jeg kan bruke integralet av tetthetsfunksjonen til å beregne sannsynligheten. Sannsynligheten for at lyspæras levetid er mellom 0 og 400 timer er gitt ved

$$
\int_{0}^{400} 0{,}005 \cdot e^{-0{,}005t} \, dt = 1-\frac{1}{e^{2}} 
$$

Siden summen av sannsynlighetene for alle utfallene er 1 så kan vi finne sannsynligheten for at lyspæra varer mellom 400 og uendelig timer ved å ta

$$
1-\left( 1-\frac{1}{e^{2}} \right)=\frac{1}{e^2}
$$

**Sannsynligheten for at lyspæras levetid er mer enn 400 timer er $\frac{1}{e^{2}} \approx 0{,}135$.**

### 2-2c
Jeg bruker uttrykket for forventningsverdi som står i oppgaveteksten og beregner ved hjelp av GeoGebra:

$$
\mu_{T} = \int_{0}^{\infty} t \cdot 0{,}005 \cdot e^{-0{,}005t} \, dt = 200
$$

**Forventningsverdien for $T$ er $\mu_{T}=200$ timer.**

## Oppgave 2-6

### 2-6
Her kommer tekst

```python {.python caption="Oppgave 2-6" #code:oppg26}
import numpy as np
import random

n_x = 323
n_y = 301
mu_x = 168
mu_y = 180
s_x = 6
s_y = 8
grense = 175
antall_simuleringer = 10000

antall_gunstige = 0

# trekk antall_simuleringer elever
for i in range(antall_simuleringer):
    # Vi trekker en tilfeldig elev, men vi må finne ut om
    # eleven er gutt eller jente.
    # Det er 301 gutter. Hvis vi trekker et tilfeldig tall mellom
    # 1 og 301+323=624 så kan vi si at dersom tallet er mindre enn
    # eller lik 301, så er det en gutt.
    if (random.randint(1, n_x + n_y) <= n_y):
        # Her har vi altså trukket en gutt og vi trekker en tilfeldig gutt
        # fra en normalfordeling
        hoyde = np.random.normal(mu_y, s_y)
    else:
        # ellers har vi trukket ei jente
        hoyde = np.random.normal(mu_x, s_x)

    if (hoyde > grense):
        antall_gunstige += 1

print(f"Sannsynligheten for å trekke en tilfeldig eleve over 175 cm er "
      f"estimert til {(antall_gunstige / antall_simuleringer) * 100:.1f} "
      f"med {antall_simuleringer} simuleringer")
```


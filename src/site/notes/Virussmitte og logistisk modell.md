---
{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["logistisk funksjon","modellering","integral"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":9,"title":"Virussmitte og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/virussmitte-og-logistisk-modell/","permalink":"/virussmitte-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-11-16","modified":"2026-04-08","aliases":[],"temaer":["logistisk funksjon","modellering","integral"],"fag":["s2"],"eksamen":"h21","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"poeng":9,"title":"Virussmitte og logistisk modell","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Virussmitte og logistisk modell

Et virus sprer seg i et land. Da virusutbruddet ble oppdaget, var allerede 1,5 prosent av befolkningen smittet. En forsker mente at dersom det ikke ble satt inn tiltak, ville 22 prosent av befolkningen ha blitt smittet etter 20 døgn og 44 prosent etter 30 døgn.

Andelen som har blitt smittet $t$ døgn etter at viruset ble oppdaget, kan modelleres med en funksjon $g$ på formen

$$g(t) = \frac{N}{1 + a \cdot e^{-kt}}$$

>[!oppgave]
>a) Bruk opplysningene ovenfor til å bestemme $N$, $a$ og $k$.
>b) Hvor stor andel av befolkningen ville blitt smittet ifølge denne modellen?

Det ble satt inn tiltak mot viruset den dagen utbruddet ble oppdaget. Vi kan gå ut fra at andelen nye registrerte smittede i løpet av døgn $t$ etter at utbruddet ble oppdaget, er gitt ved modellen

$$f(t) = 0{,}0070 \cdot e^{-\frac{(t - 18)^2}{300}}, \quad t \geq 0$$

>[!oppgave]
>c) Tegn grafen til $f$ i et koordinatsystem.
>d) Hvilket døgn vil smitten øke raskest ifølge modellen $f$?
>e) Hvor stor andel av befolkningen blir smittet av dette viruset?

## Fasit

a) $N = 0{,}60$, $a = 39$, $k \approx 0{,}156$
b) 60 % av befolkningen
c) Se graf
d) Døgn 18
e) Omtrent 20 % av befolkningen

## Løsningsforslag

### a

Vi bruker de tre opplysningene til å sette opp likninger.

**$g(0) = 0{,}015$:**

$$\frac{N}{1 + a} = 0{,}015 \quad \Rightarrow \quad N = 0{,}015(1 + a) \quad \text{(I)}$$

**$g(20) = 0{,}22$:**

$$\frac{N}{1 + a \cdot e^{-20k}} = 0{,}22 \quad \text{(II)}$$

**$g(30) = 0{,}44$:**

$$\frac{N}{1 + a \cdot e^{-30k}} = 0{,}44 \quad \text{(III)}$$

Fra (II) og (III):

$$\frac{g(30)}{g(20)} = \frac{0{,}44}{0{,}22} = 2 \quad \Rightarrow \quad \frac{1 + a \cdot e^{-20k}}{1 + a \cdot e^{-30k}} = 2$$

$$1 + a \cdot e^{-20k} = 2 + 2a \cdot e^{-30k}$$

La $u = e^{-10k}$. Da:

$$a u^2 - 2au^3 = 1 \quad \Rightarrow \quad a u^2(1 - 2u) = 1 \quad \text{(IV)}$$

Fra (I) og (II): $0{,}015(1+a) = 0{,}22(1 + au^2)$

Vi løser dette likningssystemet numerisk og får

$$\underline{\underline{N \approx 0{,}60{,} \quad a \approx 39{,} \quad k \approx 0{,}156}}$$

### b

Når $t \to \infty$, har vi $e^{-kt} \to 0$, slik at

$$g(t) \to \frac{N}{1 + 0} = N = 0{,}60$$

$\underline{\underline{\text{Ifølge modellen ville 60 \% av befolkningen blitt smittet.}}}$

### c

Vi tegner grafen til $f$ i GeoGebra:

![Graf av smittemodellen f](/img/user/_resources/s2-h21-2-4.png)

### d

$f(t) = 0{,}0070 \cdot e^{-\frac{(t-18)^2}{300}}$ er en Gauss-kurve med toppunkt i $t = 18$.

Eksponenten $-\dfrac{(t-18)^2}{300}$ er størst (dvs. lik 0) når $t = 18$.

$\underline{\underline{\text{Smitten øker raskest døgn 18.}}}$

### e

Den totale andelen av befolkningen som blir smittet er

$$\int_0^{\infty} f(t) \, \mathrm{d}t = \int_0^{\infty} 0{,}0070 \cdot e^{-\frac{(t-18)^2}{300}} \, \mathrm{d}t$$

Vi beregner integralet numerisk:

```python
from scipy.integrate import quad
import numpy as np

f = lambda t: 0.007 * np.exp(-(t-18)**2 / 300)
result, _ = quad(f, 0, np.inf)
print(result)  # 0.1997
```

$$\int_0^{\infty} f(t) \, \mathrm{d}t \approx 0{,}20$$

$\underline{\underline{\text{Omtrent 20 \% av befolkningen blir smittet.}}}$

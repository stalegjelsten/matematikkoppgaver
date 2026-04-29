---
{"aliases":[],"date":"2023-11-15","del":1,"dg-permalink":"/tolk-og-fiks-program-som-finner-bunnpunkt/","dg-publish":true,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":4}],"tags":["oppgave"],"temaer":["programmering","derivasjon"],"title":"Tolk og fiks program som finner bunnpunkt","permalink":"/tolk-og-fiks-program-som-finner-bunnpunkt/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-15","del":1,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":4}],"tags":["oppgave"],"temaer":["programmering","derivasjon"],"title":"Tolk og fiks program som finner bunnpunkt"}}
---


# Tolk og fiks program som finner bunnpunkt

Funksjonen $f$ er gitt ved

$$
f(x)=2x^{2}-9x-2
$$

Egil ønsker å lage et program som regner ut koordinatene til bunnpunktet på grafen til $f$. Han har skrevet koden nedenfor.

```python ln
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 1
    
print("Bunnpunktet er", (a, f(a)))
```

Programmet gir utskriften `Bunnpunktet er (3, -11)`

>[!oppgave]
> a) Forklar hvilken strategi Egil har brukt.

Svaret han får, er ikke riktig.

>[!oppgave]
> b) Foreslå en endring i koden som vil gi Egil et riktigere svar.

## Fasit

a) Egil sjekker om grafen synker ved å beregne tilnærmet stigningstall. Løkken stopper ved $a = 3$, og programmet printer $(3, -11)$.
b) Endre `a = a + 1` til `a = a + 0.01`

## Løsningsforslag

### a

Funksjonen `df(x, h)` beregner et tilnærmet stigningstall (den deriverte) i punktet $x$:

$$\texttt{df}(a, h) = \frac{f(a+h) - f(a)}{h}$$

Egils strategi er å starte i $a = 0$ og flytte seg til høyre i steg på 1. Så lenge `df(a, h) < 0` synker grafen — man har altså ikke nådd bunnpunktet ennå. Når stigningstallet ikke lenger er negativt (grafen har sluttet å synke), betyr det at bunnpunktet er passert, og løkken stopper.

Det ekte bunnpunktet ligger i $x = 2{,}25$. Siden $a$ øker fra 0 i heltallssteg, er verdiene som testes $a = 0, 1, 2, 3$. Ved $a = 2$ er `df(2, 0.001)` $\approx 4 \cdot 2 - 9 = -1 < 0$, så løkken fortsetter. Ved $a = 3$ er `df(3, 0.001)` $\approx 4 \cdot 3 - 9 = 3 > 0$, og betingelsen `df(a, h) < 0` er usann — løkken stopper.

Programmet printer derfor $(3,\ f(3)) = (3,\ -11)$, selv om det ekte bunnpunktet er $(2{,}25,\ -12{,}125)$.

### b

Problemet er at steglengden $1$ er for stor — programmet «hopper over» bunnpunktet. Ved å bruke et mindre steg vil $a$ komme mye nærmere $x = 2{,}25$ når løkken stopper.

Endre linje 8 fra

```python
    a = a + 1
```

til

```python
    a = a + 0.01
```

Da stopper løkken ved $a \approx 2{,}25$ og programmet printer et bunnpunkt som er langt nærmere det ekte svaret **$\mathbf{(2{,}25,\ -12{,}125)}$**.

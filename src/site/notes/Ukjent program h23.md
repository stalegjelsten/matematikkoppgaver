---
{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"dg-publish":true,"temaer":["programmering"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Ukjent program h23","source":null,"todo":null,"status":3,"permalink":"/ukjent-program-h23/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-28","modified":"2024-01-28","aliases":null,"temaer":["programmering"],"fag":["s2"],"eksamen":"h23","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Ukjent program h23","source":null,"todo":null,"status":3,"permalink":"/ukjent-program-h23/"}}
---


# Ukjent program h23


En elev har skrevet koden nedenfor

```python ln
N = 1000
start = -2
slutt = 2
dx = (slutt - start)/N

def f(x):
   return x**2-1

S = 0
for i in range(N):
    xi = start + i*dx
    S = S + abs(f(xi))*dx  # abs(f(x)) gir absoluttverdien til f(x)

print(S)
```

>[!oppgave]
>a) Forklar hva eleven ønsker å regne ut med denne koden.
>b) Finn ved regning den verdien eleven ønsker å bestemme.

## Fasit

## Løsningsforslag


### 1-4a
**Programmet forsøker å regne ut en tilnærmingsverdi for arealene mellom $x$-aksen, grafen til $f(x)=x^{2}-1$, linja $x=-2$ og linja $x=2$.** 

Ved å bruke absoluttverdifunksjonen så tar programmet hensyn til at $f<0$ i deler av intervallet.

### 1-4b
Jeg ser at $f(x)$ har nullpunkter i $x=1$ og $x=-1$. På grunn av symmetri vil 

$$
\int_{-2}^{1} f(x) \, dx = \int_{1}^{2} f(x) \, dx 
$$

For å regne ut det samlede arealet kan jeg derfor bruke uttrykket (minustegn foran integral nummer 2, siden grafen ligger under $x$-aksen i dette intervallet)

$$
2\int_{1}^{2} \left( x^{2}-1 \right)  \, dx - \int_{-1}^{1} \left( x^{2}-1 \right)  \, dx 
$$

Jeg finner først det ubestemte integralet

$$
F(x)=\int (x^{2}-1) \, \mathrm{d}x =\frac{1}{3}x^{3}-x+C
$$

Jeg finner så arealet ved

$$
\begin{aligned}
2\cdot \left( F(2)-F(1) \right) - \left( F(1)-F(-1) \right) \\
2\cdot F(2)- 3\cdot F(1)+F(-1) \\
2\left(\frac{1}{3}2^{3}-2 \right)- 3\left( \frac{1}{3}1^{3}- 1 \right) +\left( \frac{1}{3}(-1)^{3}-(-1) \right)  \\
\left( \frac{16}{3}-4 \right) -\left( \frac{3}{3}-3 \right) +\left( \frac{-1}{3}+1 \right)\\
-4+3+1+\frac{16}{3}-\frac{3}{3}-\frac{1}{3}=\frac{12}{3}=4
\end{aligned}
$$

**Verdien eleven forsøkte å bestemme er 4.**
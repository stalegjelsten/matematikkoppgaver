---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["programmering","funksjonsdrøfting"],"fag":["s1","r1"],"eksamen":"h24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":2},{"fag":"r1","del":1,"oppgave":2}],"poeng":2,"title":"Finne verdi programmet skriver ut","status":3,"source":null,"todo":null,"permalink":"/finne-verdi-programmet-skriver-ut/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"temaer":["programmering","funksjonsdrøfting"],"fag":["s1","r1"],"eksamen":"h24","del":1,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":2},{"fag":"r1","del":1,"oppgave":2}],"poeng":2,"title":"Finne verdi programmet skriver ut","status":3,"source":null,"todo":null}}
---


# Finne verdi programmet skriver ut

Bruk en egnet strategi til å bestemme verdien som skrives ut når programmet nedenfor kjøres.


```python ln
def O(x):
    return -0.1*x**2 + 2000*x - 50000

x = 0

while O(x + 1) > O(x):
    x = x + 1

print(x)
```

## Fasit


## Løsningsforslag

Jeg ser at programmet består av en funksjon $O(x)$ som muligens er en overskuddsfunksjon. `while`-løkka i programmet kjører så lenge $O(x+1)>O(x)$, altså kjører løkka så lenge $O(x)$ stiger. Inni løkka økes $x$-verdien med 1, altså vil programmet skrive ut $x$-koordinaten til toppunktet til $O(x)$.

Den enkleste måten å bestemme toppunktet på er å derivere $O$ og sette lik null.
$$
\begin{aligned}
O'(x)&=-0{,}2x+2000 \\
-0{,}2x+2000 &= 0\\
0{,}2x&=2000\\
x&=10\,000
\end{aligned}
$$
**Programmet skriver ut 10 000.**

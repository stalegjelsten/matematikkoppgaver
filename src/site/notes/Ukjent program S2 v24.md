---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"dg-publish":true,"temaer":["programmering","rekker"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Ukjent program S2 v24","source":null,"todo":null,"status":3,"permalink":"/ukjent-program-s2-v24/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"temaer":["programmering","rekker"],"fag":["s2"],"eksamen":"v24","del":1,"oppgave":"3","oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Ukjent program S2 v24","source":null,"todo":null,"status":3}}
---


# Ukjent program S2 v24


En elev har laget programmet under. 

```python ln
n = 0
S = 0

while S <= 200:
	n = n + 1
	S = S + 4*n - 2

print(n)
```

>[!oppgave]
>a) Forklar hva eleven prøver å finne ut.
>b) Finn verdien eleven får skrevet ut når programmet kjøres.

## Fasit

a) Delsummer av aritmetisk rekke hvor hvert ledd er gitt ved $a_{n}=4n-2$
b) 11

## Løsningsforslag

### 1-3a
Programmet viser en aritmetisk følge hvor hvert ledd er gitt av $a_{n}=4n-2$ for $n>0$. Programmet regner ut delsummene, $S_{n}$, til den tilhørende rekka. 

**Programmet finner ut hvilket ledd i rekka som gjør at delsummen blir *over* 200.**

### 1-3b
Siden tallfølgen er aritmetisk kan vi regne ut summen av de $n$ første leddene med

$$
S_{n}=\frac{a_{1}+a_{n}}{2}n
$$

Jeg vet at summen skal være *over* 200, at $a_{1}=2$ og jeg kan erstatte $a_{n}$ med $4n-2$. Dette gir

$$
\begin{aligned}
200&=\frac{2+4n-2}{2}n\\
200&=2n^{2}\\
100&=n^{2}\\
10&=n
\end{aligned}
$$

$n=10$ gir oss altså nøyaktig delsummen $S_{10}=200$. $n=11$ gir oss den første delsummen som er over 200.

**Programmet skriver ut 11.**

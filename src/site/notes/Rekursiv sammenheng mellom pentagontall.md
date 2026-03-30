---
{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"dg-publish":true,"temaer":["rekursiv sammenheng","programmering","rekker"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":"Rekursiv sammenheng mellom pentagontall","source":null,"todo":["figur"],"status":3,"permalink":"/rekursiv-sammenheng-mellom-pentagontall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"temaer":["rekursiv sammenheng","programmering","rekker"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":"Rekursiv sammenheng mellom pentagontall","source":null,"todo":["figur"],"status":3}}
---


# Rekursiv sammenheng mellom pentagontall


Hver figur nedenfor består av kuler plassert på pentagoner. Antall kuler på hver av ytterkantene øker med én sammenlignet med antall kuler på ytterkanten i figuren før. La $P_{n}$ være antall kuler i figur $n$. 

De fem første figurtallene er 1, 6, 16, 31 og 51

![](/img/user/_resources/s2-h23-2-4.png)
*Figurkilde: By HB - Own work, CC BY-SA 3.0, <https://commons.wikimedia.org/w/index.php?curid=872244>*

>[!oppgave]
>a) Beskriv en rekursiv sammenheng mellom $P_{n}$ og $P_{n-1}$.
>b) Lag et program som regner ut $P_{1000}$ ved å bruke den rekursive sammenhengen du fant i oppgave a)

## Fasit


## Løsningsforslag

### 2-4a
Jeg ser at differansen mellom antall kuler i figurene øker med 5, 10, 15, 20. La oss kalle denne differansen for $d$. Vi kan si at $P_{2}=P_{1}+5=P_{1}+d$ og $P_{3}=P_{2}+2d$. Vi ser dermed et mønster og kan sette opp følgende sammenheng for $n\geq 2$: 

$$
P_{n}=P_{n-1}+(n-1)\cdot d
$$

### 2-4b
```python
a = 1
d = 5
n = 100

for i in range(2, n + 1):
    a = a + d * (i-1)

print(f"Det er {a} kuler i figur {n}.")
```

**Programmet gir at $P_{100}=24\,751$.**

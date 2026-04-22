---
{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"dg-publish":true,"temaer":["rekursiv sammenheng","programmering","rekker","figurtall"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":"Rekursiv sammenheng mellom pentagontall","source":null,"todo":["figur"],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Finne rekursiv sammenheng $P_n=P_{n-1}+(n-1)\\cdot 5$ fra figurtall; programmere $P_{1000}$.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Identifisere differensmønster $5, 10, 15,\\ldots$ og formulere $P_n=P_{n-1}+(n-1)d$."},{"deloppgave":"b","beskrivelse":"For-løkke som bygger opp $P_n$ fra $P_1=1$."}],"dg-permalink":"/rekursiv-sammenheng-mellom-pentagontall/","lf-source-claude":false,"permalink":"/rekursiv-sammenheng-mellom-pentagontall/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-01-30","modified":"2024-01-31","aliases":[],"temaer":["rekursiv sammenheng","programmering","rekker","figurtall"],"fag":["s2"],"eksamen":"h23","del":2,"oppgave":"4","oppgavenummer":[{"fag":"s2","del":2,"oppgave":4}],"title":"Rekursiv sammenheng mellom pentagontall","source":null,"todo":["figur"],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Finne rekursiv sammenheng $P_n=P_{n-1}+(n-1)\\cdot 5$ fra figurtall; programmere $P_{1000}$.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Identifisere differensmønster $5, 10, 15,\\ldots$ og formulere $P_n=P_{n-1}+(n-1)d$."},{"deloppgave":"b","beskrivelse":"For-løkke som bygger opp $P_n$ fra $P_1=1$."}],"lf-source-claude":false}}
---


# Rekursiv sammenheng mellom pentagontall


Hver figur nedenfor består av kuler plassert på pentagoner. Antall kuler på hver av ytterkantene øker med én sammenlignet med antall kuler på ytterkanten i figuren før. La $P_{n}$ være antall kuler i figur $n$. 

De fem første figurtallene er 1, 6, 16, 31 og 51

![Pentagontallene. Figurkilde: By HB - Own work, CC BY-SA 3.0, <https://commons.wikimedia.org/w/index.php?curid=872244>](/img/user/_resources/s2-h23-2-4.png){width=90%}

>[!oppgave]
>a) Beskriv en rekursiv sammenheng mellom $P_{n}$ og $P_{n-1}$.
>b) Lag et program som regner ut $P_{1000}$ ved å bruke den rekursive sammenhengen du fant i oppgave a)

## Fasit

a) $P_{n}=P_{n-1}+(n-1)\cdot d$, der $d=5$.
b) Se løsningsforslag for programkode.

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

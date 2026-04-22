---
{"tags":["oppgave","programmering","rekker","del1","s2"],"temaer":["programmering","rekker","aritmetisk rekke"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Ukjent program del 1 S2","date":"2023-05-29","modified":"2023-05-29","dg-permalink":"/ukjent-program-del-1-s2/","status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Tolke Python-program som aritmetisk summering; beregne $s_{100}$ for $a_1=3,\\, d=4$ manuelt.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Forklare at programmet summerer de første $N$ leddene i aritmetisk rekke med $a_1=3$, $d=4$."},{"deloppgave":"b","kategori":1,"beskrivelse":"Bruke aritmetisk summeformel $s_{100}=\\frac{a_1+a_{100}}{2}\\cdot 100 = 20\\,100$."}],"permalink":"/ukjent-program-del-1-s2/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","programmering","rekker","del1","s2"],"temaer":["programmering","rekker","aritmetisk rekke"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"v23","title":"Ukjent program del 1 S2","date":"2023-05-29","modified":"2023-05-29","status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Tolke Python-program som aritmetisk summering; beregne $s_{100}$ for $a_1=3,\\, d=4$ manuelt.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Forklare at programmet summerer de første $N$ leddene i aritmetisk rekke med $a_1=3$, $d=4$."},{"deloppgave":"b","kategori":1,"beskrivelse":"Bruke aritmetisk summeformel $s_{100}=\\frac{a_1+a_{100}}{2}\\cdot 100 = 20\\,100$."}]}}
---


# Ukjent program del 1 S2

En elev har skrevet følgende kode:

```python ln
a = 3
d = 4

N = 10
S = 0

for i in range(N):
	S = S + a
	a = a + d

print(S)
```

> [!oppgave]
> a) Forklar hva eleven ønsker å regne ut.
> b) Hva blir resultatet når programmet kjøres, dersom N settes til 100 i linje 4 ? 

## Fasit

a) Summen av 10 første ledd av aritmetisk rekke med $a_{1}=3, d=4$
b) 20100

## Løsningsforslag

### a
Det ser ut til at eleven forsøker å regne ut delsummer av en aritmetisk rekke. Helt konkret ser det ut til at eleven forsøker å regne ut summen av de ti første leddene når startverdien er 3 og differansen er 4, altså $S_{10},\, a_1=3,\, d=4$.

### b
Vi kan finne summen av denne aritmetiske rekka med:

$$s_{100}= \frac{a_{1}+a_{100}}{2}\cdot 100 = \frac{3+(3+4\cdot 99)}{2}\cdot{100}=\frac{402}{2}\cdot {100}=\underline{\underline{20\,100}}$$

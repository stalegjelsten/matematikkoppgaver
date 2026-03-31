---
{"tags":["oppgave"],"date":"2025-05-14","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["programmering","rekker","bevis"],"fag":["r2"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":3}],"poeng":6,"title":"Tallfølge med programmering og induksjon","status":0,"source":null,"todo":null,"permalink":"/tallfolge-med-programmering-og-induksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-14","modified":"2026-03-25","aliases":[],"temaer":["programmering","rekker","bevis"],"fag":["r2"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":3}],"poeng":6,"title":"Tallfølge med programmering og induksjon","status":0,"source":null,"todo":null,"permalink":"/tallfolge-med-programmering-og-induksjon/"}}
---


# Tallfølge med programmering og induksjon

En elev arbeider med en tallfølge og har skrevet denne koden:

```python ln
a = 2
n = 5
for i in range(1, n + 1):
    print(a)
    a = a + (i + 2)
```

>[!oppgave]
>a) Beskriv mønsteret i tallfølgen eleven arbeider med. Hva blir resultatet når koden kjøres?

Eleven har også skrevet denne koden:

```python ln
a = 2
n = 5
S = 0
for i in range(1, n + 1):
    S = S + a
    a = a + (i + 2)
print(S)
```

>[!oppgave]
>b) Hva ønsker eleven nå å finne ut? Hva blir resultatet når koden kjøres?

Tallene fra oppgave a) er starten på en rekke.

>[!oppgave]
>c) Bruk induksjon til å vise at et ledd i rekken kan uttrykkes som
>$$a_n = \frac{n(n+3)}{2}, \quad n \geq 1$$

## Fasit

## Løsningsforslag

### a
Her setter vi opp en oversikt for å se hvordan variablene i programmet utvikler seg.

| `i` | `a` |  Beregning av neste `a` |
| :-: | :-: | ----------------------: |
|  1  |  2  |   $2+1+2=\underline{5}$ |
|  2  |  5  |   $5+2+2=\underline{9}$ |
|  3  |  9  |  $9+3+2=\underline{14}$ |
|  4  | 14  | $14+4+2=\underline{20}$ |
|  5  | 20  |                         |

Vi ser en tallfølge hvor differansene mellom leddene starter på 3, og deretter øker med 1 for hvert ledd. Matematisk kan dette uttrykkes med den rekursive sammenhengen
$$
a_{n+1}=a_{n}+n+2
$$
**Koden skriver ut leddene i tallfølgen 2, 5, 9, 14, 20.**

### b
Eleven har lagt til en variabel `S`. `S` gir en løpende sum av verdiene til `a`, derfor vil `S` være delsummen til rekka etter `n` ledd. 

**Eleven ønsker å finne delsummen til rekka etter 5 ledd, altså $2+5+9+14+20=\underline{\underline{50}}$**

### c
Påstanden vår er at
$$a_n = \frac{n(n+3)}{2}, \quad n \geq 1$$

Vi viser at dette gjelder for $n=1$
$$
a_{1} = \frac{1(1+3)}{2}=\frac{4}{2}=2 \quad \checkmark
$$
Vi antar at formelen gjelder for $n=k$ slik at
$$
a_{k}= \frac{k(k+3)}{2}
$$
Vi finner $a_{k+1}$ ved å bruke den rekursive sammenhengen fra b).
$$
a_{k+1}=a_{k}+k+2=\frac{k(k+3)}{2}+\frac{2k}{2}+\frac{4}{2}=\frac{k^{2}+3k+2k+4}{2}=\frac{k^{2}+5k+4}{2}
$$

Deretter finner vi $a_{k+1}$ ved å bruke formelen.
$$
a_{k+1}=\frac{(k+1)\left( (k+1) +3 \right) }{2}= \frac{k^{2}+2k+1+3k+3}{2}=\frac{k^{2}+5k+4}{2} \quad  \checkmark 
$$
 
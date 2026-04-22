---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"dg-publish":true,"temaer":["programmering","rekker","rekursiv sammenheng"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Ukjente programmer S2 v25","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke to Python-programmer: finne mønster i tallfølge $a_{n+1}=a_n+n+2$ og identifisere delsum av tilhørende rekke.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Simulere utviklingen av $a$ i for-løkke: ledd 2, 5, 9, 14, 20."},{"deloppgave":"b","beskrivelse":"Identifisere `S` som delsum; $s_5 = 2+5+9+14+20 = 50$."}],"dg-permalink":"/ukjente-programmer-s2-v25/","permalink":"/ukjente-programmer-s2-v25/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"temaer":["programmering","rekker","rekursiv sammenheng"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"title":"Ukjente programmer S2 v25","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Tolke to Python-programmer: finne mønster i tallfølge $a_{n+1}=a_n+n+2$ og identifisere delsum av tilhørende rekke.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Simulere utviklingen av $a$ i for-løkke: ledd 2, 5, 9, 14, 20."},{"deloppgave":"b","beskrivelse":"Identifisere `S` som delsum; $s_5 = 2+5+9+14+20 = 50$."}]}}
---


# Ukjente programmer S2 v25


En elev arbeider med en tallfølge og har skrevet denne koden:
```python ln
a = 2
n = 5
for i in range(1, n + 1):
    print(a)
    a = a + (i + 2)
```

> [!oppgave]
> a) Beskriv mønsteret i tallfølgen eleven arbeider med.  
> Hva blir resultatet når koden kjøres?

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

> [!oppgave]
> b) Hva ønsker eleven nå å finne ut?  
> Hva blir resultatet når koden kjøres?

## Fasit

a) 2, 5, 9, 14, 20
b) Eleven ønsker å finne summen av de 5 første leddene. Summen blir 50.

## Løsningsforslag

### 1-4a
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

### 1-4b
Eleven har lagt til en variabel `S`. `S` gir en løpende sum av verdiene til `a`, derfor vil `S` være delsummen til rekka etter `n` ledd. 

**Eleven ønsker å finne delsummen til rekka etter 5 ledd, altså $2+5+9+14+20=\underline{\underline{50}}$**

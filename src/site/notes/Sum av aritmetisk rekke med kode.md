---
{"aliases":[],"date":"2023-05-24","del":1,"dg-permalink":"/sum-av-aritmetisk-rekke-med-kode/","dg-publish":true,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","rekker"],"title":"Sum av aritmetisk rekke med kode","lf-source-claude":true,"permalink":"/sum-av-aritmetisk-rekke-med-kode/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":1,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":4,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["programmering","rekker"],"title":"Sum av aritmetisk rekke med kode","lf-source-claude":true}}
---


# Sum av aritmetisk rekke med kode

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

>[!oppgave]
>a) Forklar hva eleven ønsker å regne ut.
>b) Hva blir resultatet når programmet kjøres, dersom N settes til 100 i linje 4?

## Fasit

a) Programmet beregner summen av de 10 første leddene i en aritmetisk rekke med $a_1 = 3$ og $d = 4$. **$\underline{\underline{S_{10} = 210}}$**

b) **$\underline{\underline{S_{100} = 20100}}$**

## Løsningsforslag

### a

Variabelen `a` starter på 3 og variabelen `d` er lik 4. I løkken legges den gjeldende verdien av `a` til summen `S`, deretter økes `a` med `d`. Etter iterasjon $i$ (teller fra 0) er leddet som ble lagt til $a_{i+1} = 3 + i \cdot 4$.

Det betyr at programmet legger til leddene $3,\ 7,\ 11,\ 15,\ \ldots$ — altså leddene i en aritmetisk rekke med

$$a_1 = 3, \qquad d = 4.$$

For $N = 10$ beregner programmet summen av de 10 første leddene.

Det siste leddet er

$$a_{10} = 3 + (10-1) \cdot 4 = 3 + 36 = 39.$$

Summen av en aritmetisk rekke er

$$S_n = \frac{a_1 + a_n}{2} \cdot n.$$

Vi får

$$S_{10} = \frac{3 + 39}{2} \cdot 10 = \frac{42}{2} \cdot 10 = 21 \cdot 10 = \textbf{\underline{\underline{210}}}.$$

### b

For $N = 100$ beregner programmet summen av de 100 første leddene. Det siste leddet er

$$a_{100} = 3 + (100-1) \cdot 4 = 3 + 396 = 399.$$

Summen blir

$$S_{100} = \frac{3 + 399}{2} \cdot 100 = \frac{402}{2} \cdot 100 = 201 \cdot 100 = \textbf{\underline{\underline{20100}}}.$$
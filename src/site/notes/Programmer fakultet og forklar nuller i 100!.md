---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["programmering","faktorisering","argumentasjon","utforskning"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":4,"title":"Programmer fakultet og forklar nuller i 100!","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Skrive program som regner ut $n!$, og argumentere for at antallet sluttende nuller i $100!$ bestemmes av antall faktorer 5.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skrive løkke som regner ut $n!$ og kjøre den for $n=5,10,15$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Telle faktorer 5 i $1\\cdot 2\\cdot \\ldots\\cdot 100$ ($\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=24$) og argumentere for at det gir 24 sluttende nuller."}],"source":null,"lf-source-claude":true,"todo":null,"permalink":"/programmer-fakultet-og-forklar-nuller-i-100/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["programmering","faktorisering","argumentasjon","utforskning"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":4,"title":"Programmer fakultet og forklar nuller i 100!","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Skrive program som regner ut $n!$, og argumentere for at antallet sluttende nuller i $100!$ bestemmes av antall faktorer 5.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skrive løkke som regner ut $n!$ og kjøre den for $n=5,10,15$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Telle faktorer 5 i $1\\cdot 2\\cdot \\ldots\\cdot 100$ ($\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=24$) og argumentere for at det gir 24 sluttende nuller."}],"source":null,"lf-source-claude":true,"todo":null}}
---


# Programmer fakultet og forklar nuller i 100!

$n!$ leses som «$n$ fakultet» og er produktet av de naturlige tallene fra og med 1 til og med $n$. Se eksemplene nedenfor.

$$
\begin{aligned}
1! &= 1 \\
2! &= 1 \cdot 2 \\
3! &= 1 \cdot 2 \cdot 3 \\
4! &= 1 \cdot 2 \cdot 3 \cdot 4 \\
5! &= 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \\
&\ldots
\end{aligned}
$$

>[!oppgave]
>a) Lag et program som kan regne ut $n!$ for et gitt naturlig tall $n$.
>Bruk programmet til å regne ut $5!$, $10!$ og $15!$.

$100!$ er et produkt av 100 faktorer, $1 \cdot 2 \cdot 3 \cdot 4 \cdot \ldots \cdot 99 \cdot 100$.

>[!oppgave]
>b) Gjør rede for hvilke faktorer som gjør at det er 24 nuller i slutten av tallet $100!$.

## Fasit

a) Se program under. $5! = 120$, $10! = 3\,628\,800$, $15! = 1\,307\,674\,368\,000$.

b) **$\underline{\underline{24}}$ sluttende nuller i $100!$**

## Løsningsforslag

### a

Vi lager en funksjon `fakultet(n)` som starter med $f = 1$ og multipliserer med hvert tall fra 1 til og med $n$ i en løkke:

```python
def fakultet(n):
    f = 1
    for i in range(1, n + 1):
        f = f * i
    return f

print(fakultet(5))   # 120
print(fakultet(10))  # 3628800
print(fakultet(15))  # 1307674368000
```

Programmet gir

$$
5! = \underline{\underline{120}}, \qquad 10! = \underline{\underline{3\,628\,800}}, \qquad 15! = \underline{\underline{1\,307\,674\,368\,000}}.
$$

### b

En sluttende null oppstår fordi $10 = 2 \cdot 5$. Antall sluttende nuller i $100!$ er derfor lik antall ganger vi kan skrive $10$ som en faktor i produktet $1 \cdot 2 \cdot 3 \cdot \ldots \cdot 100$, det vil si $\min(\text{antall faktorer 2},\ \text{antall faktorer 5})$.

**Faktorer 2** forekommer langt oftere enn faktorer 5 (hvert partall bidrar med minst én faktor 2), så det avgjørende er **antall faktorer 5**.

Vi teller faktorer 5 i $100!$ ved å se hvilke tall som bidrar:

- Multipler av $5$ (gir minst én faktor 5 hver): $\left\lfloor \dfrac{100}{5} \right\rfloor = 20$ stykker.
- Multipler av $25 = 5^2$ (gir én *ekstra* faktor 5 hver): $\left\lfloor \dfrac{100}{25} \right\rfloor = 4$ stykker.
- Multipler av $125 = 5^3$: $\left\lfloor \dfrac{100}{125} \right\rfloor = 0$ stykker.

Totalt antall faktorer 5:

$$
20 + 4 = 24.
$$

Siden det er minst 24 faktorer 2 (faktisk mange flere), kan vi danne nøyaktig $24$ par $(2 \cdot 5) = 10$.

**$100!$ har derfor $\underline{\underline{24}}$ sluttende nuller.**

---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"dg-publish":true,"temaer":["programmering","faktorisering","argumentasjon","utforskning"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":4,"title":"Programmer fakultet og forklar nuller i 100!","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Skrive program som regner ut $n!$, og argumentere for at antallet sluttende nuller i $100!$ bestemmes av antall faktorer 5.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skrive løkke som regner ut $n!$ og kjøre den for $n=5,10,15$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Telle faktorer 5 i $1\\cdot 2\\cdot \\ldots\\cdot 100$ ($\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=24$) og argumentere for at det gir 24 sluttende nuller."}],"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/programmer-fakultet-og-forklar-nuller-i-100/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-04-29","aliases":[],"temaer":["programmering","faktorisering","argumentasjon","utforskning"],"fag":["1t"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":4}],"poeng":4,"title":"Programmer fakultet og forklar nuller i 100!","status":0,"kategori":2,"vanskegrad":2,"beskrivelse":"Skrive program som regner ut $n!$, og argumentere for at antallet sluttende nuller i $100!$ bestemmes av antall faktorer 5.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skrive løkke som regner ut $n!$ og kjøre den for $n=5,10,15$."},{"deloppgave":"b","kategori":3,"vanskegrad":3,"beskrivelse":"Telle faktorer 5 i $1\\cdot 2\\cdot \\ldots\\cdot 100$ ($\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=24$) og argumentere for at det gir 24 sluttende nuller."}],"source":null,"todo":["fasit","løsningsforslag"]}}
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



## Løsningsforslag

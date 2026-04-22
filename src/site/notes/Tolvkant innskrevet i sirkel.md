---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["geometri","trigonometri","areal"],"fag":["1t"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"poeng":4,"title":"Tolvkant innskrevet i sirkel","status":0,"source":null,"todo":null,"dg-permalink":"/tolvkant-innskrevet-i-sirkel/","permalink":"/tolvkant-innskrevet-i-sirkel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["geometri","trigonometri","areal"],"fag":["1t"],"eksamen":"v25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"poeng":4,"title":"Tolvkant innskrevet i sirkel","status":0,"source":null,"todo":null}}
---


# Tolvkant innskrevet i sirkel

![Tolvkant innskrevet i sirkel med 30°-vinkel](/img/user/_resources/1t-v25-2-3.jpeg){width=35%}

En tolvkant er innskrevet i en sirkel. Se figuren ovenfor. Tolvkanten er satt sammen av tolv like store likebeinte trekanter. Arealet av tolvkanten er 120.

>[!oppgave]
>a) Bestem diameter i sirkelen. Gi svaret eksakt.
>b) Bestem omkretsen av tolvkanten. Gi svaret eksakt.

## Fasit

a) $d=4\sqrt{ 10 }$
b) $O=24\left( \sqrt{ 15 } -\sqrt{ 5 }  \right) $

## Løsningsforslag

### a
Alle 12 trekantene er like store. Dermed må arealet av hver trekant være $\frac{120}{12}=\underline{ 10 }$.

Arealsetningen sier at 
$$
A=\frac{1}{2}ab \sin v
$$
Siden trekantene våre er likebeinte med sidelengde $r$ og vi kjenner vinkelen mellom beina kan vi forenkle og regne ut.
$$
\begin{aligned}
A&=\frac{1}{2}ab \sin v \\
10 &= \frac{1}{2} r^{2}  \cdot \sin 30 \degree \\
\frac{2 \cdot 10}{\sin 30 \degree} &= r^{2} \\
\frac{20}{\frac{1}{2}} &= r^{2} \\
r&=\sqrt{ 40 }
\end{aligned}
$$
Vi kan bestemme diameteren eksakt.
$$d=2r=2 \cdot \sqrt{ 40 }=2 \cdot \sqrt{ 4 \cdot 10 }=2 \cdot 2 \sqrt{ 10 } = 4\sqrt{ 10 } $$

**Diameteren er $\underline{\underline{ 4\sqrt{ 10 } }}$.**

### b
Vi kjenner to sider i trekantene og mangler den siste. Vi kan bruke cosinussetningen.
$$
\begin{aligned}

a^{2}&=b^{2}+c^{2}-2bc \cdot \cos A \\
a^{2}&=\sqrt{ 40 }^{2}+\sqrt{ 40 }^{2}- 2\sqrt{ 40 }\cdot \sqrt{ 40 } \cdot \cos 30 \degree \\
a^{2}&=40+40-2 \cdot 40 \cdot \cos 30\degree \\
a^{2}&=80-80\cdot \frac{\sqrt{ 3 }}{2} \\
a^{2}&=80\left( 1-\frac{\sqrt{ 3 }}{2} \right) \\
a^{2}&=80\left( \frac{2}{2}-\frac{\sqrt{ 3 }}{2} \right)  \\
a^{2}&=40\left( 2-\sqrt{ 3 }\right)   \\
a &= \sqrt{ 40 } \cdot \sqrt{ 2-\sqrt{ 3 }} \\
a &= 2\sqrt{ 10  } \cdot \sqrt{ 2-\sqrt{ 3 } } \\
a &= 2 \cdot \sqrt{ 20-10\sqrt{ 3 } } 
\end{aligned}
$$
Tolvkanten består av tolv slike kanter.
$$
O=12\cdot 2 \sqrt{ 20-10\sqrt{ 3 } }=24 \sqrt{ 20-10 \sqrt{ 3 } } 
$$
GeoGebra viser at dette kan forenkles til
$$
\underline{\underline{ O=24 \left( \sqrt{ 15 } -\sqrt{ 5 } \right)  }}
$$